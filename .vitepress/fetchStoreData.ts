/**
 * Provides store data (price, reviews, ratings) for use in structured data and components.
 * Reads from the committed store-data.json file (updated by GitHub Actions cron).
 * Falls back to live-fetching from the WooCommerce store if the JSON file is unavailable.
 */

import { readFileSync } from 'fs'
import { resolve } from 'path'

interface Review {
  "@type": "Review"
  author: { "@type": "Person"; name: string }
  datePublished?: string
  reviewRating: { "@type": "Rating"; ratingValue: string }
  reviewBody?: string
}

interface StoreData {
  price: string
  priceCurrency: string
  availability: string
  ratingValue: string
  reviewCount: string
  reviews: Review[]
}

interface RawStoreData {
  price: string
  priceCurrency: string
  availability: string
  ratingValue: string
  reviewCount: string
  reviews: Array<{
    author: string
    datePublished?: string
    ratingValue: string
    reviewBody?: string
  }>
}

const PRODUCT_URL = "https://store.jonathangiles.net/product/espa-mini/"

const FALLBACK: StoreData = {
  price: "69.00",
  priceCurrency: "NZD",
  availability: "https://schema.org/InStock",
  ratingValue: "5",
  reviewCount: "4",
  reviews: []
}

let cached: StoreData | null = null

export async function fetchStoreData(): Promise<StoreData> {
  if (cached) return cached

  // Try reading from committed JSON file first
  try {
    const jsonPath = resolve(__dirname, 'store-data.json')
    const raw: RawStoreData = JSON.parse(readFileSync(jsonPath, 'utf-8'))
    cached = {
      price: raw.price,
      priceCurrency: raw.priceCurrency,
      availability: raw.availability,
      ratingValue: raw.ratingValue,
      reviewCount: raw.reviewCount,
      reviews: raw.reviews.map(r => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        ...(r.datePublished && { datePublished: r.datePublished }),
        reviewRating: { "@type": "Rating", ratingValue: r.ratingValue },
        ...(r.reviewBody && { reviewBody: r.reviewBody })
      }))
    }
    console.log(`[fetchStoreData] Loaded ${cached.reviews.length} reviews from store-data.json`)
    return cached
  } catch (err) {
    console.warn(`[fetchStoreData] Could not read store-data.json, falling back to live fetch`)
  }

  // Fallback: live fetch from store
  try {
    const res = await fetch(PRODUCT_URL, {
      headers: { "User-Agent": "eSpa-Build/1.0" },
      signal: AbortSignal.timeout(10000)
    })

    if (!res.ok) {
      console.warn(`[fetchStoreData] Failed to fetch store page: ${res.status}`)
      cached = FALLBACK
      return cached
    }

    const html = await res.text()
    cached = parseStoreData(html)
    console.log(`[fetchStoreData] Fetched ${cached.reviews.length} reviews from live store`)
    return cached
  } catch (err) {
    console.warn(`[fetchStoreData] Error fetching store data, using fallback:`, err)
    cached = FALLBACK
    return cached
  }
}

function parseStoreData(html: string): StoreData {
  const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  const jsonLdBlocks: any[] = []

  let match
  while ((match = jsonLdRegex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1])
      if (parsed["@graph"]) {
        jsonLdBlocks.push(...parsed["@graph"])
      } else {
        jsonLdBlocks.push(parsed)
      }
    } catch { /* skip malformed JSON-LD */ }
  }

  const product = jsonLdBlocks.find(b => b["@type"] === "Product")

  if (!product) {
    console.warn("[fetchStoreData] No Product JSON-LD found on store page, using fallback")
    return FALLBACK
  }

  const offers = Array.isArray(product.offers) ? product.offers[0] : product.offers
  const rawPrice = offers?.price ?? offers?.lowPrice ?? FALLBACK.price
  const price = isNaN(Number(rawPrice)) ? FALLBACK.price : String(rawPrice)
  const priceCurrency = offers?.priceCurrency ?? FALLBACK.priceCurrency
  const availability = offers?.availability ?? FALLBACK.availability

  const aggRating = product.aggregateRating
  const ratingValue = aggRating?.ratingValue?.toString() ?? FALLBACK.ratingValue
  const reviewCount = aggRating?.reviewCount?.toString() ?? aggRating?.ratingCount?.toString() ?? FALLBACK.reviewCount

  const reviews: Review[] = []
  const rawReviews = product.review ?? product.reviews ?? []
  const reviewArray = Array.isArray(rawReviews) ? rawReviews : [rawReviews]

  for (const r of reviewArray) {
    if (!r || !r.author) continue
    const authorName = typeof r.author === "string"
      ? r.author
      : r.author?.name ?? "Anonymous"

    reviews.push({
      "@type": "Review",
      author: { "@type": "Person", name: authorName },
      ...(r.datePublished && { datePublished: r.datePublished }),
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.reviewRating?.ratingValue?.toString() ?? ratingValue
      },
      ...(r.reviewBody && { reviewBody: r.reviewBody })
    })
  }

  return { price, priceCurrency, availability, ratingValue, reviewCount, reviews }
}

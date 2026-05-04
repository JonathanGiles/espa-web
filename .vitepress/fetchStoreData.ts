/**
 * Fetches product review data from the WooCommerce store at build time.
 * Parses the JSON-LD structured data already embedded in the product page.
 */

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

const PRODUCT_URL = "https://store.jonathangiles.net/product/espa-mini/"

// Default fallback data in case the fetch fails
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
    console.log(`[fetchStoreData] Fetched ${cached.reviews.length} reviews (rating: ${cached.ratingValue}/${cached.reviewCount} reviews)`)
    return cached
  } catch (err) {
    console.warn(`[fetchStoreData] Error fetching store data, using fallback:`, err)
    cached = FALLBACK
    return cached
  }
}

function parseStoreData(html: string): StoreData {
  // Extract all JSON-LD blocks from the HTML
  const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  const jsonLdBlocks: any[] = []

  let match
  while ((match = jsonLdRegex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1])
      // Handle @graph arrays (common with Yoast/RankMath)
      if (parsed["@graph"]) {
        jsonLdBlocks.push(...parsed["@graph"])
      } else {
        jsonLdBlocks.push(parsed)
      }
    } catch { /* skip malformed JSON-LD */ }
  }

  // Find the Product schema
  const product = jsonLdBlocks.find(b => b["@type"] === "Product")

  if (!product) {
    console.warn("[fetchStoreData] No Product JSON-LD found on store page, using fallback")
    return FALLBACK
  }

  // Extract offers/price
  const offers = Array.isArray(product.offers) ? product.offers[0] : product.offers
  const price = offers?.price ?? offers?.lowPrice ?? FALLBACK.price
  const priceCurrency = offers?.priceCurrency ?? FALLBACK.priceCurrency
  const availability = offers?.availability ?? FALLBACK.availability

  // Extract aggregate rating
  const aggRating = product.aggregateRating
  const ratingValue = aggRating?.ratingValue?.toString() ?? FALLBACK.ratingValue
  const reviewCount = aggRating?.reviewCount?.toString() ?? aggRating?.ratingCount?.toString() ?? FALLBACK.reviewCount

  // Extract individual reviews
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

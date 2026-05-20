<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const MAX_REVIEWS = 6
const STORE_URL = 'https://store.espa.diy'

const { page } = useData()

const allReviews = computed(() => page.value.reviews ?? [])
const displayedReviews = computed(() => allReviews.value.slice(0, MAX_REVIEWS))
const hasMore = computed(() => allReviews.value.length > MAX_REVIEWS)
const summary = computed(() => page.value.reviewSummary ?? { ratingValue: '5', reviewCount: '0' })

const stars = (rating: string) => {
  const val = Math.round(Number(rating))
  return '★'.repeat(val) + '☆'.repeat(5 - val)
}

const formatDate = (dateStr?: string) => {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-NZ', { year: 'numeric', month: 'short', day: 'numeric' })
}
</script>

<template>
  <div class="reviews-section" v-if="displayedReviews.length > 0">
    <h2 class="reviews-heading">Customer Reviews</h2>
    <p class="reviews-summary">
      <span class="reviews-stars">{{ stars(summary.ratingValue) }}</span>
      {{ summary.ratingValue }} out of 5 based on {{ summary.reviewCount }} reviews
    </p>
    <div class="reviews-grid">
      <div v-for="(review, i) in displayedReviews" :key="i" class="review-card">
        <div class="review-header">
          <span class="review-stars">{{ stars(review.ratingValue) }}</span>
          <span class="review-date" v-if="review.datePublished">{{ formatDate(review.datePublished) }}</span>
        </div>
        <p class="review-body" v-if="review.reviewBody">{{ review.reviewBody }}</p>
        <p class="review-author">— {{ review.author }}</p>
      </div>
    </div>
    <p class="reviews-see-all" v-if="hasMore">
      <a :href="STORE_URL" target="_blank" rel="noopener">See all {{ summary.reviewCount }} reviews →</a>
    </p>
  </div>
</template>

<style scoped>
.reviews-section {
  margin-top: 2rem;
  padding-top: 2rem;
}

.reviews-heading {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.reviews-summary {
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
}

.reviews-stars,
.review-stars {
  color: #f5a623;
  letter-spacing: 2px;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.review-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.25rem;
  background: var(--vp-c-bg-soft);
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.review-date {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

.review-body {
  margin: 0 0 0.75rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}

.review-author {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.reviews-see-all {
  margin-top: 1.5rem;
  text-align: center;
}

.reviews-see-all a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-decoration: none;
}

.reviews-see-all a:hover {
  text-decoration: underline;
}
</style>

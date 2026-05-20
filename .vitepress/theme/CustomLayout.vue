<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import Reviews from './components/Reviews.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #home-features-after>
      <div class="vp-doc home-reviews-wrapper" v-if="frontmatter.layout === 'home'">
        <Reviews />
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.home-reviews-wrapper {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px 4rem;
}

@media (min-width: 640px) {
  .home-reviews-wrapper {
    padding: 0 48px 4rem;
  }
}

@media (min-width: 960px) {
  .home-reviews-wrapper {
    padding: 0 64px 4rem;
  }
}
</style>

import DefaultTheme from 'vitepress/theme'
import CustomLayout from './CustomLayout.vue'
import Reviews from './components/Reviews.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    app.component('Reviews', Reviews)
  }
}
import { defineConfig } from 'vitepress'
import { fetchStoreData } from './fetchStoreData'

export default defineConfig({
  title: "eSpa",
  description: "Open source spa pool home automation controller. Connect your spa to WiFi, control it via MQTT, and integrate with Home Assistant. Buy pre-built or DIY with ESP32.",
  sitemap: {
    hostname: 'https://espa.diy'
  },
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "/favicons/favicon.ico"}],
    // Open Graph
    ['meta', { property: "og:type", content: "website" }],
    ['meta', { property: "og:site_name", content: "eSpa" }],
    ['meta', { property: "og:image", content: "https://espa.diy/images/logo_eSpa_02_320px.png" }],
    // Twitter Card
    ['meta', { name: "twitter:card", content: "summary" }],
    ['meta', { name: "twitter:image", content: "https://espa.diy/images/logo_eSpa_02_320px.png" }],
    // Additional SEO
    ['meta', { name: "robots", content: "index, follow" }],
    ['meta', { name: "author", content: "eSpa Community" }],
    // JSON-LD Structured Data (Organization - static)
    ['script', { type: "application/ld+json" }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "eSpa",
      "url": "https://espa.diy",
      "logo": "https://espa.diy/images/logo_eSpa_02_320px.png",
      "sameAs": [
        "https://github.com/wayne-love/espyspa",
        "https://discord.gg/faK8Ag4wHn"
      ]
    })]
  ],

  async transformHead() {
    const storeData = await fetchStoreData()

    const productSchema: Record<string, any> = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "eSpa - Spa Pool Home Automation Controller",
      "description": "Open source ESP32-based spa pool controller for WiFi connectivity, MQTT integration, and Home Assistant support. Connect your spa to your smart home.",
      "brand": { "@type": "Brand", "name": "eSpa" },
      "url": "https://espa.diy",
      "image": "https://espa.diy/images/logo_eSpa_02_320px.png",
      "offers": {
        "@type": "Offer",
        "url": "https://store.espa.diy",
        "availability": storeData.availability,
        "price": storeData.price,
        "priceCurrency": storeData.priceCurrency
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": storeData.ratingValue,
        "reviewCount": storeData.reviewCount
      },
      "category": "Smart Home > Pool & Spa Automation"
    }

    if (storeData.reviews.length > 0) {
      productSchema.review = storeData.reviews
    }

    return [
      ['script', { type: "application/ld+json" }, JSON.stringify(productSchema)]
    ]
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      { text: 'Firmware', link: '/firmware' },
      { text: 'Hardware', link: '/hardware' }
    ],

    sidebar: [
      {
        text: 'Contents',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          
          { text: 'Firmware',
            items: [
              { text: 'Overview', link: '/firmware' },
              { text: 'Building', link: '/firmware-building' },
              { text: 'Updating', link: '/firmware-updating' }
            ]
          },
          { text: 'Hardware', 
            items: [
              { text: 'Overview', link: '/hardware' },
              { text: 'Building Your Own', link: '/hardware-custom-build' },
              { text: 'Pre-Built PCBs', link: '/hardware-pcb' }
            ]
          },
          { text: 'Home Automation', link: '/home-automation' },
          { text: 'MQTT Reference', link: '/mqtt-reference' },
          { text: 'Compatibility', link: '/compatibility' },
          { text: 'Troubleshooting', link: '/troubleshooting' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wayne-love/espyspa' },
      { icon: 'discord', link: 'https://discord.gg/faK8Ag4wHn' }
    ],

    search: {
      provider: 'local'
    }
  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "eSpa",
  description: "An open source community for spa home automation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Firmware', link: '/firmware' },
      { text: 'Hardware', link: '/hardware' },
      { text: 'Troubleshooting', link: '/troubleshooting' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Firmware', link: '/firmware' },
          { text: 'Hardware', link: '/hardware' },
          { text: 'Troubleshooting', link: '/troubleshooting' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wayne-love/espyspa' },
      { icon: 'discord', link: 'https://discord.gg/faK8Ag4wHn' }
    ]
  }
})

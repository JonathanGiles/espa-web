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
        text: 'Contents',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Compatibility', link: '/compatibility' },
          { text: 'Firmware', link: '/firmware' },
          { text: 'Hardware', 
            items: [
              { text: 'Overview', link: '/hardware' },
              { text: 'Building Your Own Hardware', link: '/hardware-custom-build' },
              { text: 'Buying a Pre-Built PCB', link: '/hardware-pcb' }
            ]
          },
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

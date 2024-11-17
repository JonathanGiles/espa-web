import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "eSpa",
  description: "An open source community for spa home automation",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Firmware', link: '/firmware' },
      { text: 'Hardware', link: '/hardware' }
    ],

    sidebar: [
      {
        text: 'Contents',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          
          { text: 'Firmware',
            items: [
              { text: 'Overview', link: '/firmware' },
              { text: 'Configuration', link: '/firmware-configuration' },
              { text: 'Building', link: '/firmware-building' }
            ]
          },
          { text: 'Hardware', 
            items: [
              { text: 'Overview', link: '/hardware' },
              { text: 'Building Your Own', link: '/hardware-custom-build' },
              { text: 'Pre-Built PCBs', link: '/hardware-pcb' }
            ]
          },
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

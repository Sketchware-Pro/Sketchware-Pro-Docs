import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sketchware Pro",
  base: "/docs/",
  description: "Documentation for Sketchware Pro",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting-started'
      },
      {
        text: 'Views',
        items: [
          { text: 'What are Views?', link: '/views/view' },
          { text: 'TextView', link: '/views/textview' },
          { text: 'YouTube Player', link: '/views/youtube' },
          { text: 'Bottom Navigation View', link: '/views/bottom-navigation' },

        ]
      },
      {
        text: 'Components',
        items: [
          {
            text: 'Google',
            items: [
              {
                text: 'Firebase',
                items: [
                  { text: 'Connect to Firebase', link: '/components/google/firebase/connect-to-firebase' },
                  { text: 'Cloud Messaging', link: '/components/google/firebase/cloud-messaging' },
                  { text: 'Dynamic Links', link: '/components/google/firebase/dynamic-links' }
                ]
              },
              {
                text: 'AdMob',
                items: [
                  { text: 'Interstitial Ad', link: '/components/google/admob/interstitial' },
                ]
              }
            ]
          }
        ]
      },
      {
        text: 'Blocks',
        items: [
          {
            text: 'Block',
            items: [
              { text: 'Creating Block', link: '/blocks/block/creating-block' },
              { text: 'Import Blocks', link: '/blocks/block/import-blocks' },
            ]
          },
          {
            text: 'More Blocks',
            items: [
              { text: 'Get Started', link: '/blocks/more-block/get-started-with-more-block' },
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sketchware-Pro/Sketchware-Pro-Website' }
    ]
  }
})

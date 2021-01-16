const path = require('path');

const redocPlugin = path.resolve(__dirname, '..', '..', 'packages', 'docusaurus-plugin-redoc');
const redocTheme = path.resolve(__dirname, '..', '..', 'packages', 'docusaurus-theme-redoc');

module.exports = {
  plugins: [
    [
      redocPlugin,
      {
        id: 'redocusaurus-with-spec-url',
        specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
      }
    ],
    [
      redocPlugin,
      {
        id: 'redocusaurus-with-spec',
        specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
      }
    ],
  ],
  themes: [redocTheme],

  /** ************ Rest of your Docusaurus Config *********** */
  title: 'Redocusaurus Spec URL Example',
  tagline: 'Integrate Redoc easily into your Docusaurus Site',
  customFields: {
    meta: {
      description: 'Integrate Redoc easily into your Docusaurus Site',
    },
  },
  url: process.env.DEPLOY_PRIME_URL || 'http://localhost:5000', // Your website URL
  baseUrl: process.env.DEPLOY_BASE_URL || '/', // Base URL for your project */
  favicon: 'img/favicon.ico',
  presets: ['@docusaurus/preset-classic'],
  themeConfig: {
    navbar: {
      title: 'Redocusaurus',
      logo: {
        alt: 'Redocusaurus Logo',
        src: 'img/logo.png',
        srcDark: 'img/logoDark.png',
      },
      items: [
        {
          label: 'Docs',
          position: 'left',
          to: '/',
        },
        {
          label: 'API',
          position: 'left',
          to: 'api',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'Redocusaurus Logo',
        src: 'img/logoDark.png',
      },
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/api-docs/',
            },
          ],
        },
        {
          title: 'API',
          items: [
            {
              label: 'PetStore API',
              to: 'api/pet-store/',
            },
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/rohit-gohri/redocusaurus/',
            },
            {
              label: 'Blog',
              href: 'https://rohit.page'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rohit Gohri. Built with <a href="https://github.com/facebook/docusaurus" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
    },
    sidebarCollapsible: true,
    ogImage: 'img/undraw_online.svg',
    twitterImage: 'img/undraw_tweetstorm.svg',
  },
};

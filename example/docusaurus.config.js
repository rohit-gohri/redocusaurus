const path = require('path');

module.exports = {
  presets: [
    '@docusaurus/preset-classic',
    [
      'redocusaurus',
      {
        specs: [
          // {
          //   specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
          // },
          {
            spec: 'openapi.yaml',
          },
        ]
      }
    ]
  ],

  /** ************ Rest of your Docusaurus Config *********** */
  title: 'Redocusaurus Example',
  tagline: 'Integrate Redoc easily into your Docusaurus Site',
  customFields: {
    meta: {
      description: 'Integrate Redoc easily into your Docusaurus Site',
    },
  },
  url: process.env.DEPLOY_PRIME_URL || 'http://localhost:5000', // Your website URL
  baseUrl: process.env.DEPLOY_BASE_URL || '/', // Base URL for your project */
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Redocusaurus',
      items: [
        {
          label: 'Docs',
          position: 'left',
          to: '/',
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
  },
};

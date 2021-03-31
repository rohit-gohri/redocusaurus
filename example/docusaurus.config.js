module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: true,
      }
    ],
    [
      'redocusaurus',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          {
            specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
            routePath: '/using-spec-url/'
          },
          {
            specUrl: `${process.env.DEPLOY_BASE_URL || '/'}openapi-page.yaml`,
            routePath: '/using-relative-url/'
          },
          {
            spec: 'openapi.yaml',
            routePath: '/using-spec-yaml/'
          }
        ],
        theme: {
          primaryColor: '#1890ff',
          redocOptions: { hideDownloadButton: false },
        },
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
          title: 'Modules',
          items: [
            {
              label: 'Redocusaurus',
              href: 'https://www.npmjs.com/package/redocusaurus/',
            },
            {
              label: 'Docusaurus Theme',
              href: 'https://www.npmjs.com/package/docusaurus-theme-redoc/',
            },
            {
              label: 'Docusaurus Plugin',
              href: 'https://www.npmjs.com/package/docusaurus-plugin-redoc/',
            },
          ],
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
  },
};

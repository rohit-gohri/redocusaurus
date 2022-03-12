/**
 * @type {import('redocusaurus').PresetEntry}
 */
const redocusaurus = [
  'redocusaurus',
  {
    debug: Boolean(process.env.DEBUG || process.env.CI),
    specs: [
      {
        id: 'using-spec-yaml',
        // Local File
        spec: 'openapi.yaml',
        /**
         * Download URL while docs are generated from `spec` file
         */
        url: `/openapi-page.yaml`,
        route: '/examples/using-spec-yaml/',
      },
      {
        id: 'using-spec-url',
        // Remote File
        spec: 'https://redocly.github.io/redoc/openapi.yaml',
        route: '/examples/using-spec-url/',
      },
      {
        id: 'using-custom-page',
        spec: 'openapi.yaml',
        url: `/openapi-page.yaml`,
        // NOTE: no `route` passed, instead data used in custom React Component ('custom-page/index.jsx')
      },
      {
        id: 'using-custom-layout',
        spec: 'openapi.yaml',
        url: `/openapi-page.yaml`,
        // NOTE: no `route` passed, instead data used in custom React Component ('custom-layout/index.jsx')
      },
    ],
    theme: {
      /**
       * Highlight color for docs
       */
      primaryColor: '#1890ff',
      /**
       * Options to pass to redoc
       * @see https://github.com/redocly/redoc#redoc-options-object
       */
      options: { disableSearch: true },
      /**
       * Options to pass to override RedocThemeObject
       * @see https://github.com/Redocly/redoc#redoc-theme-object
       */
      theme: {},
    },
  },
];

let version = "v0";
try {
  version = require('./version.json');
}
catch(err){
}

if (process.env.VERCEL_URL) {
  process.env.DEPLOY_PRIME_URL = `https://${process.env.VERCEL_URL}`;
}

/**
 * @type {Partial<import('@docusaurus/types').DocusaurusConfig>}
 */
const config = {
  presets: [
    redocusaurus,
    /** ************ Rest of your Docusaurus Config *********** */
    [
      '@docusaurus/preset-classic',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        theme: { customCss: [require.resolve('./src/custom.css')] },
        docs: {
          routeBasePath: '/docs',
          editUrl: 'https://github.com/rohit-gohri/redocusaurus/edit/main/',
        },
      },
    ],
  ],
  title: 'Redocusaurus',
  tagline: 'OpenAPI solution for Docusaurus docs with Redoc',
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
          to: '/docs',
        },
        {
          label: 'Examples',
          position: 'left',
          items: [
            {
              label: 'All',
              to: '/examples',
            },
            {
              label: 'Custom Page',
              to: '/examples/custom-page/',
            },
            {
              label: 'Custom Layout',
              to: '/examples/custom-layout/',
            },
            {
              label: 'Using Spec URL',
              to: '/examples/using-spec-url/',
            },
            {
              label: 'Using Spec YAML',
              to: '/examples/using-spec-yaml/',
            },
          ],
        },
        {
          label: version,
          position: 'right',
          items: [
            {
              label: 'v0',
              href: 'https://redocusaurus-v0.vercel.app/',
            },
            {
              label: 'v1',
              href: 'https://redocusaurus.vercel.app',
            },
          ],
        },
        {
          href: 'https://github.com/rohit-gohri/redocusaurus',
          position: 'right',
          className: 'header-github-logo',
          'aria-label': 'GitHub Repo',
        },
      ],
    },
    footer: {
      // logo: {
      //   alt: 'Redocusaurus Logo',
      //   src: 'img/logoDark.png',
      // },
      style: 'dark',
      links: [
        {
          title: 'NPM Modules',
          items: [
            {
              label: 'Redocusaurus',
              href: 'https://www.npmjs.com/package/redocusaurus/',
            },
            {
              label: 'Docusaurus Theme Redoc',
              href: 'https://www.npmjs.com/package/docusaurus-theme-redoc/',
            },
            {
              label: 'Docusaurus Plugin Redoc',
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
              label: 'Blog Post',
              href: 'https://rohit.page/blog/projects/openapi-for-docusaurus/',
            },
            {
              label: 'Twitter Discussion',
              href: 'https://twitter.com/rohit_gohri/status/1351589213565644801',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://rohit.page" target="_blank" rel="noopener noreferrer">Rohit Gohri</a>. Built with <a href="https://github.com/facebook/docusaurus" target="_blank" rel="noopener noreferrer">Docusaurus</a>`,
    },
  },
};

module.exports = config;

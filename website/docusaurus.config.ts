import path from 'path';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { DOCUSAURUS_VERSION } from '@docusaurus/utils';
import type * as Redocusaurus from 'redocusaurus';
import packageJson from '../packages/redocusaurus/package.json';

if (process.env.VERCEL_URL) {
  process.env.DEPLOY_PRIME_URL = `https://${process.env.VERCEL_URL}`;
}

const config: Config = {
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        theme: { customCss: [require.resolve('./src/custom.css')] },
        docs: {
          path: 'docs',
          routeBasePath: '/docs',
          lastVersion: 'current',
          versions: {
            current: {
              label: packageJson.version,
              path: '',
            },
          },
          editUrl:
            'https://github.com/rohit-gohri/redocusaurus/edit/main/website/',
        },
      } satisfies Preset.Options,
    ],
    [
      'redocusaurus',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        config: path.join(__dirname, 'redocly.yaml'),
        openapi: {
          path: 'openapi',
          routeBasePath: '/examples',
        },
        specs: [
          {
            id: 'using-remote-url',
            // Remote File
            spec: 'https://redocly.github.io/redoc/openapi.yaml',
            route: '/examples/using-remote-url/',
          },
        ],
        theme: {
          /**
           * Highlight color for docs
           */
          primaryColor: '#1890ff',
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de','zh-Hant'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
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
              label: 'Using Single YAML',
              to: '/examples/using-single-yaml/',
            },
            {
              label: 'Using Remote URL',
              to: '/examples/using-remote-url/',
            },
            {
              label: 'Using Multiple YAMLs',
              to: '/examples/using-multi-file-yaml/',
            },
            {
              label: 'Using Swagger',
              to: '/examples/using-swagger-json/',
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
              label: 'Client Only',
              to: '/examples/client-only/',
            },
          ],
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          // 'https://redocusaurus-v0.vercel.app/',
        },
        {
          type: 'localeDropdown',
          position: 'right',
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
      copyright: `Copyright © ${new Date().getFullYear()} <a class="footer-link" href="https://rohit.page" target="_blank" rel="noopener">Rohit Gohri</a>.<br />Built with <a class="footer-link" href="https://docusaurus.io/" target="_blank" rel="noopener">Docusaurus v${DOCUSAURUS_VERSION}</a>.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

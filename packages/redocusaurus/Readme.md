# [Redocusaurus](https://redocusaurus.vercel.app/)

![npm](https://img.shields.io/npm/v/redocusaurus?style=flat-square)

[Redoc](https://github.com/redocly/redoc) for [Docusaurus](https://docusaurus.io/).

## Usage

1. Setup [docusaurus project](https://docusaurus.io/docs/installation)

1. Install redocusaurus:

```sh
yarn add redocusaurus
# OR
pnpm add redocusaurus
# OR
npm i --save redocusaurus
```

1. Add it as a preset to your docusaurus config along with [@docusaurus/preset-classic](https://docusaurus.io/docs/using-plugins#docusauruspreset-classic) and pass options:

   ```js
   // docusaurus.config.ts
   import type { Config } from '@docusaurus/types';
   import type * as Preset from '@docusaurus/preset-classic';
   import type * as Redocusaurus from 'redocusaurus';

   const config: Config = {
     // ...
     presets: [
       // .. Your other presets' config
       [
        '@docusaurus/preset-classic',
         {
           googleAnalytics: {
             trackingID: 'XXXXXX',
           },
         } satisfies Preset.Options,
       ]
       // Redocusaurus config
       [
         'redocusaurus',
         {
           // Plugin Options for loading OpenAPI files
           specs: [
             // Pass it a path to a local OpenAPI YAML file
             {
               // Redocusaurus will automatically bundle your spec into a single file during the build
               spec: 'openapi/index.yaml',
               route: '/api/',
             },
             // You can also pass it a OpenAPI spec URL
             {
               spec: 'https://redocly.github.io/redoc/openapi.yaml',
               route: '/openapi/',
             },
           ],
           // Theme Options for modifying how redoc renders them
           theme: {
             // Change with your site colors
             primaryColor: '#1890ff',
           },
         },
       ] satisfies Redocusaurus.PresetEntry,
     ],
     // ... Rest of your config
   };

   export default config;
   ```

The API Doc will be available at the route specified (`/api/` in the example above). To customize it see [full plugin options](https://redocusaurus.vercel.app/docs/getting-started/plugin-options).

### Options

#### specs

Pass it an array of plugin options, see [docusaurus-plugin-redoc](https://redocusaurus.vercel.app/docs/getting-started/plugin-options) for individual option details.

#### theme

Pass options to customize the theme, see [docusaurus-theme-redoc](https://redocusaurus.vercel.app/docs/getting-started/theme-options) for individual option details.

## Docs

See: <https://redocusaurus.vercel.app/docs>

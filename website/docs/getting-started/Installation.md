---
title: Installation
sidebar_position: 0
author: Rohit Gohri
author_url: https://rohit.page
---

1. Setup [docusaurus project](https://docusaurus.io/docs/installation)

1. Install redocusaurus:

   ![npm](https://img.shields.io/npm/v/redocusaurus?style=flat-square)

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

The API Doc will be available at the path specific by `route`. To skip adding a route altogether just don't set the `route` property.
You will still be able to reference schema elements manually using [Schema Imports](/docs/guides/schema-imports) or create Custom React Pages using the data and theme components.
If you have a [`redocly.yaml`](https://redocly.com/docs/cli/configuration/) it will be loaded automatically.

## Options

### specs

An **array** of plugin options, see [plugin options](./plugin-options.md) for individual option details.

### theme

Pass options to customize the theme, see [theme options](./theme-options.md) for individual option details.

### config (optional)

> type: string

Redocly config to bundle file and provide options to. You can provide a custom path to a `redocly.yaml` file, if not provided then it will try to load it from the root of your project if it exists.

Example: [redocly.yaml](https://github.com/rohit-gohri/redocusaurus/blob/main/website/redocly.yaml)
Reference: [https://redocly.com/docs/cli/configuration/](https://redocly.com/docs/cli/configuration/). Only supports options marked as "Supported in Redoc CE".

:::important
When setting the `redocly.yaml` config, your website renders correctly only once it is built and run with the following commands:

```bash
npm run build
npm run serve
```

When running the website locally, with `npm start`, some error messages can be displayed.
:::

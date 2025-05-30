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

1. Create an `openapi` folder in your docusaurus project and add your OpenAPI docs to the folder. Name the main file `index.openapi.yaml`.

   :::info Multi File

   Multi-file setups are supported and all files will be merged at build time using [@redocly/openapi-core](https://www.npmjs.com/package/@redocly/openapi-core).

   :::

     <pre>
       ├── docs
       │   ├── ...
       │   └── ...
       ├── openapi 🆕
       │   └── example 🆕
       │       ├── components
       │       │   └── pets.yaml
       │       └── index.openapi.yaml
       ├── docusaurus.config.ts
       └── package.json
   
     </pre>

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
           openapi: {
             // Folder to scan for *.openapi.yaml files
             path: 'openapi',
             routeBasePath: '/api',
           },
           specs: [
            // Optionally provide individual files/urls to load
             {
               // Pass it a path to a local OpenAPI YAML file
               spec: 'api.yaml',
               id: 'from-manual-file',
               route: '/api/from-manual-file',
             },
             // You can also pass it an OpenAPI spec URL
             {
               spec: 'https://redocly.github.io/redoc/openapi.yaml',
               id: 'from-remote-file',
               route: '/api/from-remote-file',
             },
           ]
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

The API Docs will be available at `/api` + the folder name inside `openapi`, i.e. `/api/example` for the example above. If any manual `specs` are specified then they will also be available at the specified routes.

You will now also be able to reference schema elements manually using [Schema Imports](/docs/guides/schema-imports), [Operation Imports](/docs/guides/operation-imports) or create Custom React Pages using the data and theme components.

## Options

If you have a [`redocly.yaml`](https://redocly.com/docs/cli/configuration/) file in the project folder it will be loaded automatically and applied.

### openapi

- `path`: Specify folder name to scan for `.openapi.{yaml,json}` files
- `routeBasePath`: Common route prefix to use for generated pages

### specs

Manually specify an **array** of OpenAPI files/urls to load, see [plugin options](./plugin-options.md) for more details.

### theme

Pass options to customize the theme, see [theme options](./theme-options.md) for more details.

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

When running the website locally, with `npm start`, some error messages might be displayed.
:::

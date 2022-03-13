---
title: Installation
sidebar_position: 0
author: Rohit Gohri
author_url: https://rohit.page
---

1. Install redocusaurus:

![npm](https://img.shields.io/npm/v/redocusaurus?style=flat-square)

```sh
npm i --save redocusaurus
# OR
yarn add redocusaurus
```

1. Add it as a preset to your docusaurus config and pass options:

   - Pass it a OpenAPI spec URL

     ```js
     // docusaurus.config.js

     module.exports = {
       // ...
       presets: [
         [
           'redocusaurus',
           {
             // Plugin Options
             specs: [
               {
                 spec: 'https://redocly.github.io/redoc/openapi.yaml',
                 route: '/api/',
               },
             ],
             // Theme Options
             theme: {
               // Change with your site colors
               primaryColor: '#1890ff',
             },
           },
         ],
       ],
       // ...
     };
     ```

   - Pass it a OpenAPI spec local path

     ```js
     // docusaurus.config.js

     module.exports = {
       // ...
       presets: [
         [
           'redocusaurus',
           {
             // Plugin Options
             specs: [
               {
                 spec: 'openapi.yaml',
                 route: '/api/',
               },
             ],
             // Theme Options
             theme: {
               // Change with your site colors
               primaryColor: '#1890ff',
             },
           },
         ],
       ],
       // ...
     };
     ```

The API Doc will be available at the path specific by `route`. To skip adding a
route altogether just don't set the `route` property. You will still be
able to reference schema elements manually using [Schema Imports](/docs/guides/schema-imports) or through Custom Pages.

## Options

### specs

An array of plugin options, see [plugin options](./plugin-options.md) for individual option details.

### theme

Pass options to customize the theme, see [theme options](./theme-options.md) for individual option details.

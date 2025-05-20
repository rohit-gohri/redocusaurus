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
             specs: [
               {
                 specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
               },
             ],
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
             specs: [
               {
                 spec: 'openapi.yaml',
               },
             ],
           },
         ],
       ],
       // ...
     };
     ```

The API Doc will be available by default at `/api/` path. If you wish to
override this path, you may set the `routePath` option. To skip adding a
route altogether, set the `addRoute` option to false. You will still be
able to reference schema elements manually using [Schema Imports](/docs/guides/schema-imports).

```js
// docusaurus.config.js

module.exports = {
  // ...
  presets: [
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'default-route',
            // routePath: '/api/',
            // addRoute: true,
          },
          {
            id: 'route-overridden',
            routePath: '/different-path/',
            // addRoute: true,
          },
          {
            id: 'no-route',
            addRoute: false,
          },
        ],
      },
    ],
  ],
  // ...
};
```

To customize it see [full plugin options](#options).

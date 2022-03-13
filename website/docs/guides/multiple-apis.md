---
title: Multiple APIs
---

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
            id: 'custom-route',
            spec: 'openapi.yaml',
            route: '/different-path/',
          },
          {
            id: 'no-route',
            spec: 'openapi.yaml',
          },
        ],
      },
    ],
  ],
  // ...
};
```

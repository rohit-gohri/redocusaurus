---
title: Build Time Rendering
description: Parse the OpenAPI schema at build time and skip the loading screen
---

:::caution
**NOTE:** This is in Beta. Please [add your feedback here](https://github.com/rohit-gohri/redocusaurus/discussions/88)
:::

## Prerequisites

To enable Build Time rendering of docs you have to do 2 things:

### Updating your Root theme component

Use the custom ServerStyle component in your [Theme Root](https://docusaurus.io/docs/using-themes#wrapper-your-site-with-root) (as mentioned in <https://github.com/facebook/docusaurus/issues/3236#issuecomment-788953743>) like below:

```tsx title="src/theme/Root/index.tsx"
import React from 'react';
import ServerStyle from '@theme/ServerStyle';

function Root({ children }: { children: React.Component }): JSX.Element {
  return (
    <>
      // TODO: Remove when docusaurus adds proper css-in-js support
      (https://github.com/rohit-gohri/redocusaurus/issues/90)
      <ServerStyle from={children} />
      {children}
    </>
  );
}

export default Root;
```

### Use yaml files rather than urls to load OpenAPI files

To enable build time rendering we need to parse the schema at build time so it can be processed to JSON. For this it needs to passed on as a yaml file. This has a side-effect of the download button pointing to the processed JSON, to fix this you can also provide the original url as `specUrl` and it will be used as the download link.

```js title="docusaurus.config.js"
const config = {
  presets: [
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'openapi.yaml',
            /**
             * This becomes the Download URL in this case, while docs are generated from `spec`
             */
            specUrl: `${process.env.DEPLOY_BASE_URL || '/'}openapi-page.yaml`,
            routePath: '/examples/using-spec-yaml/',
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
          redocOptions: { disableSearch: true },
        },
      },
    ],
    '@docusaurus/preset-classic',
  ],
  title: 'Redocusaurus',
};
```

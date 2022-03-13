---
title: Build Time Rendering
description: Parse the OpenAPI schema at build time and skip the loading screen
---

:::caution
**NOTE:** This is EXPERIMENTAL. Please [add your feedback here](https://github.com/rohit-gohri/redocusaurus/discussions/88)
:::

## Prerequisites

To enable Build Time rendering of docs you have to add a custom Root component

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

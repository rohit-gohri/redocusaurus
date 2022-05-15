---
title: Migrating to V1
sidebar_position: 4
---

## Options Changed

1.`spec` - Can now be a path to a local file or an absolute url. You can now also point to an entrypoint for your multi-file OpenAPI definition and we will bundle it for you.

1. `routePath` -> `route` (optional) - This still works the same, but is just optional now.

1. `redocOptions` -> `options` (optional) - We have removed some defaults (`downloadUrl` used to be hidden by default) and leave the customization to the user now.

## Options Removed

1. `specUrl` - This is now automatically handled by the package depending on the type of spec passed. We will bundle your definitions into a single downloadable YAML and add it as a static asset at build time.

1. `addRoute` - This is no longer needed since `route` is now optional, so if you don't need a route just don't pass it.

1. `apiDocComponent` - This is no longer needed now since we provide a react-hook `useSpecData` to load plugin data that can be used with the `@theme/Redoc` component.

## Component Changes

### Experimental `@theme/ServerStyle` Removed

Now build time/server side rendering works for everyone be default without needing to do anything.

### `@theme/Redoc` and `@theme/ApiDoc` prop changes

Instead of parsing api files yourself to pass to Redoc, we now have a new hook `@theme/useSpecData` to load yaml files and the result can be directly passed to `@theme/Redoc`.

```jsx
import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';
import useSpecData from '@theme/useSpecData';

function CustomPage() {
  const specData = useSpecData('using-custom-layout');
  return (
    <Layout
      title="Custom Layout Docs"
      description="Example showing custom layout"
    >
      <Redoc {...specData} />
    </Layout>
  );
}

export default CustomPage;
```

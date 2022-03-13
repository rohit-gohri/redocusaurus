---
title: Plugin Options
sidebar_position: 1
author: Rohit Gohri
author_url: https://rohit.page
---

Either of `spec` or `specUrl` is required.

### spec

A path to a OpenAPI yaml or json file. Will be parsed and forwarded to Redoc component. This has higher priority over specUrl.

### specUrl

A url pointing to an OpenAPI spec.

### layout

An object to pass as layout props. Useful to set title/description of the page. See all properties available [here](https://github.com/rohit-gohri/redocusaurus/blob/releases/v0/packages/docusaurus-plugin-redoc/src/options.ts#L3).

### routePath (default: `/api/`)

Route URL at which docs would be available

### apiDocComponent (default: `@theme/ApiDoc`)

If you want to use a custom component to render the spec instead of the one with `docusaurus-theme-redoc` then overwrite this with a path to the component.
It will be forwarded a single prop, see [ApiDoc](https://github.com/rohit-gohri/redocusaurus/blob/releases/v0/packages/docusaurus-theme-redoc/src/theme/ApiDoc/ApiDoc.tsx) for example.

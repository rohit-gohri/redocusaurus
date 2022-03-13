---
title: Plugin Options
sidebar_position: 1
author: Rohit Gohri
author_url: https://rohit.page
---


### spec (required, string: file path or remote absolute url)

Either a file path to an OpenAPI YAML/JSON file, or a url to one hosted on some website (not the same docusaurus website). Will be **parsed** at build time and forwarded to Redoc component.

### url (optional, string: download url)

A url pointing to an OpenAPI spec. This will be used as download url and `spec` will be used for rendering. This is needed because by default the download url will point to a processed and parsed JSON file.

### route (optional, string: relative uri)

Route URL at which docs would be available, this will use the theme component `@theme/ApiDoc` from `docusaurus-theme-redoc` to render the page. You can also skip this option and render the docs as you wish using a custom page.

### layout (optional, object: layoutProps)

An object to pass as layout props. Useful to set title/description of the page. See all properties available [here](./src/options.ts#L3).

### layout

An object to pass as layout props. Useful to set title/description of the page. See all properties available [here](https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-plugin-redoc/src/options.ts#L3).

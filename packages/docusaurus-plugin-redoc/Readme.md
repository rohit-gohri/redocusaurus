# Docusaurus Plugin Redoc

![npm](https://img.shields.io/npm/v/docusaurus-plugin-redoc?style=flat-square)

This plugin parses your OpenAPI spec files and creates pages using the `ApiDoc` component from your theme. Use with `docusaurus-theme-redoc`.

Read More Here: <https://github.com/rohit-gohri/redocusaurus>

## Options

Either of `spec` or `specUrl` is required (both can also be provided).

### spec

A path to a OpenAPI yaml or json file. Will be parsed and forwarded to Redoc component. This has higher priority over specUrl.

### specUrl

A url pointing to an OpenAPI spec. If both are present, then this will be used as download url and `spec` for rendering.

### layout

An object to pass as layout props. Useful to set title/description of the page. See all properties available [here](https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-plugin-redoc/src/options.ts#L3).

### routePath (default: `/api/`)

Route URL at which docs would be available

### apiDocComponent (default: `@theme/ApiDoc`)

If you want to use a custom component to render the spec instead of the one with `docusaurus-theme-redoc` then overwrite this with a path to the component.
It will be forwarded a single prop, see [ApiDoc](https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-theme-redoc/src/theme/ApiDoc/ApiDoc.tsx) for example.

## Docs

See: <https://rohit-gohri.github.io/redocusaurus/doc>

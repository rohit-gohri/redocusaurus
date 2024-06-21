---
title: Theme Options
sidebar_position: 2
author: Rohit Gohri
author_url: https://rohit.page
---

### primaryColor (string, hex/rgba value)

Convenient way to provide the highlighted color used by Redoc.  
This value will be used as `colors.primary.main` in the `themes` option. Must be an actual color value and not a css variable.

### primaryColorDark (string, hex/rgba value)

Optional way to change the highlighted color used by Redoc in dark mode. Defaults to `primaryColor` if not set.
This value will be used as `colors.primary.main` in the `themes` option. Must be an actual color value and not a css variable.

### theme (optional, object)

:::warning
Deprecated: Use `redocly.yaml` to specify theme. See [example](https://github.com/rohit-gohri/redocusaurus/blob/main/website/redocly.yaml).
:::

Override the redoc theme object passed to Redoc. See the defaults [here](https://github.com/Redocly/redoc#redoc-theme-object).

:::warning
Note: You should not override any color using this property, as it will be the same value for dark and light themes.
:::

### options (optional, object)

:::warning
Deprecated: Use `redocly.yaml` to specify `theme.options`. See [example](https://github.com/rohit-gohri/redocusaurus/blob/main/website/redocly.yaml).
:::

Override redoc options passed to [RedocStandalone](https://redoc.ly/docs/redoc/quickstart/react/) component. See the defaults [here](https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-theme-redoc/src/redocData.ts#L5-L12).

Available properties [here](https://redocly.com/docs/redoc/config/).  

You cannot set theme property using this property, use `theme` option above instead.

Auto loaded from `redocly.yaml` if present.

---
title: Theme Options
sidebar_position: 2
author: Rohit Gohri
author_url: https://rohit.page
---

### primaryColor (string, hex/rgba value)

Convenient way to provide the highlighted color used by Redoc.  
This value will be used as `colors.primary.main` in the `themes` option. Must be an actual color value and not a css variable.

### options (optional, object)

Override redoc options passed to [RedocStandalone](https://redoc.ly/docs/redoc/quickstart/react/) component. See the defaults [here](https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-theme-redoc/src/redocData.ts#L5-L12).

Available properties [here](https://github.com/Redocly/redoc#redoc-options-object).  
You cannot set theme property using this property, use `theme` option below instead.

### theme (optional, object)

Override the redoc theme object passed to Redoc. See the default [here](https://github.com/Redocly/redoc#redoc-theme-object).

> Note: You should not provide any color using this property, as it will be the same value for dark and light themes.

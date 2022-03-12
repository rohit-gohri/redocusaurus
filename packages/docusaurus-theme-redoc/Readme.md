# Docusaurus Theme Redoc

![npm](https://img.shields.io/npm/v/docusaurus-theme-redoc?style=flat-square)

This theme provides a `Redoc` and a `ApiDoc` theme component with a theme matching the default docusaurus classic theme and dark mode support.

## Usage

1. Install theme:

   ```sh
   npm i --save docusaurus-theme-redoc
   ```

1. Add it as a theme to your docusaurus config:

   ```js
   // docusaurus.config.js

   module.exports = {
     // ...
     themes: ['docusaurus-theme-redoc'],
     // ...
   };
   ```

## Theme Components

### Redoc

RedocStandalone with dark mode support, matching docusaurus classic theme.

```js
import Redoc from '@theme/Redoc';
```

See [here for full example.](https://github.com/rohit-gohri/redocusaurus/tree/main/website/src/pages/examples/custom-layout/index.js)

### ApiDoc

Includes a `@theme/Layout` wrapper over Redoc.

```js
import ApiDoc from '@theme/ApiDoc';
```

See [here for full example.](https://github.com/rohit-gohri/redocusaurus/tree/main/website/src/pages/examples/custom-page/index.js)

## Options

```json
/**
   * Highlight color for docs
   */
primaryColor: '#1890ff',
/**
   * Options to pass to redoc
   * @see https://github.com/redocly/redoc#redoc-options-object
   */
redocOptions: { disableSearch: true },
/**
   * Options to pass to override RedocThemeObject
   * @see https://github.com/Redocly/redoc#redoc-theme-object
   */
redocTheme: { typography: { fontSize: '16px' }},
```

### primaryColor

Convenient way to provide the highlighted color used by Redoc.  
This value will be used as `colors.primary.main` in the `redocTheme` option. Must be an hex value.

### redocTheme

Override the redoc theme object passed inside the `redocOptions`.  
See the default [here](https://github.com/Redocly/redoc#redoc-theme-object).  
Note: You should not provide any color using this property, as it will be the same value for dark and light themes.

### redocOptions

Override redoc options passed to [RedocStandalone](https://redoc.ly/docs/redoc/quickstart/react/) component.  
See the defaults [here](https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-theme-redoc/src/redocData.ts#L6-L11).  
Available properties [here](https://github.com/Redocly/redoc#redoc-options-object).  
You cannot set theme property using this property, use `redocTheme` instead.

## Related Preset

Read More Here: <https://github.com/rohit-gohri/redocusaurus>

## Docs

See: <https://rohit-gohri.github.io/redocusaurus/docs>

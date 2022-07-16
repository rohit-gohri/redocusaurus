# Docusaurus Theme Redoc

![npm](https://img.shields.io/npm/v/docusaurus-theme-redoc?style=flat-square)

This theme provides a `Redoc` and a `ApiDoc` theme component with a theme matching the default docusaurus classic theme and with dark mode support.

⚠️⚠️⚠️ NOTE: Not recommended for direct use. Use through main package instead: [`redocusaurus`](https://github.com/rohit-gohri/redocusaurus)

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

`RedocStandalone` with dark mode support, matching docusaurus classic theme.

```js
import Redoc from '@theme/Redoc';
```

See [here for full example.](../../website/src/pages/examples/custom-layout/index.js)

### ApiDoc

Includes a `@theme/Layout` wrapper over Redoc.

```js
import ApiDoc from '@theme/ApiDoc';
```

See [here for full example.](../../website/src/pages/examples/custom-page/index.js)

## Options

```js
{
   /**
   * Highlight color for docs
   */
   primaryColor: '#1890ff',
   /**
    * Highlight color for docs in dark mode, if different.
    * Will default to `primaryColor` if not set.
    */
   primaryColorDark: '#25c2a0',
   /**
   * Options to pass to redoc
   * @see https://github.com/redocly/redoc#redoc-options-object
   */
   options: { disableSearch: true },
   /**
   * Options to pass to override RedocThemeObject
   * @see https://github.com/Redocly/redoc#redoc-theme-object
   */
   theme: { typography: { fontSize: '16px' }},
}
```

### primaryColor (string, hex/rgba value)

Convenient way to provide the highlighted color used by Redoc.  
This value will be used as `colors.primary.main` in the `themes` option. Must be an actual color value and not a css variable.

### primaryColorDark (string, hex/rgba value)

Optional way to change the highlighted color used by Redoc in dark mode. Defaults to `primaryColor` if not set.
This value will be used as `colors.primary.main` in the `themes` option. Must be an actual color value and not a css variable.

### options (optional, object)

Override redoc options passed to [RedocStandalone](https://redoc.ly/docs/redoc/quickstart/react/) component. See the defaults [here](./src/redocData.ts#L5-L12).

Available properties [here](https://github.com/Redocly/redoc#redoc-options-object).  
You cannot set theme property using this property, use `theme` option below instead.

### theme (optional, object)

Override the redoc theme object passed to Redoc. See the default [here](https://github.com/Redocly/redoc#redoc-theme-object).

> Note: You should not provide any color using this property, as it will be the same value for dark and light themes.

## Docs

See: <https://redocusaurus.vercel.app/docs>

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
      themes: [
        'docusaurus-theme-redoc',
      ],
      // ...
    }
    ```

## Theme Components

### Redoc

RedocStandalone with dark mode support, matching docusaurus classic theme.

  ```js
  import Redoc from '@theme/Redoc';
  ```

See [here for full example.](https://github.com/rohit-gohri/redocusaurus/tree/main/example/src/pages/custom-layout/index.js)

### ApiDoc

  Includes a `@theme/Layout` wrapper over Redoc.

  ```js
  import ApiDoc from '@theme/ApiDoc';
  ```

See [here for full example.](https://github.com/rohit-gohri/redocusaurus/tree/main/example/src/pages/custom-page/index.js)

## Related Preset

Read More Here: <https://github.com/rohit-gohri/redocusaurus>

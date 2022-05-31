# [Redocusaurus](https://redocusaurus.vercel.app/)

![npm](https://img.shields.io/npm/v/redocusaurus?style=flat-square)

[Redoc](https://github.com/redocly/redoc) for [Docusaurus v2](https://v2.docusaurus.io/).

## Usage

1. Install redocusaurus:

  ```sh
  npm i --save redocusaurus
  # OR
  yarn add redocusaurus
  ```

1. Add it as a preset to your docusaurus config along with [@docusaurus/preset-classic](https://docusaurus.io/docs/using-plugins#docusauruspreset-classic) and pass options:

   - Pass it a path to a local OpenAPI YAML file

    ```js
    // docusaurus.config.js

    module.exports = {
      // ...
      presets: [
         // .. Your other presets' config 
         '@docusaurus/preset-classic',
         // Redocusaurus config
        [
          'redocusaurus',
          {
            // Plugin Options for loading OpenAPI files
            specs: [
              {
                spec: 'openapi/openapi.yaml',
                route: '/api/',
              },
            ],
            // Theme Options for modifying how redoc renders them
            theme: {
              // Change with your site colors
              primaryColor: '#1890ff',
            },
          },
        ],
      ],
      // ...
    };
    ```

- OR Pass it a OpenAPI spec URL

    ```js
    // docusaurus.config.js

    module.exports = {
      // ...
      presets: [
         // .. Your other presets' config 
         '@docusaurus/preset-classic',
         // Redocusaurus config
        [
          'redocusaurus',
          {
            // Plugin Options for loading OpenAPI files
            specs: [
              {
                spec: 'https://redocly.github.io/redoc/openapi.yaml',
                route: '/api/',
              },
            ],
            // Theme Options for modifying how redoc renders them
            theme: {
              // Change with your site colors
              primaryColor: '#1890ff',
            },
          },
        ],
      ],
      // ...
    };
    ```

The API Doc will be available at the route specified (`/api/` in the example above). To customize it see [full plugin options](https://redocusaurus.vercel.app/docs/getting-started/plugin-options).

### Options

#### specs

Pass it an array of plugin options, see [docusaurus-plugin-redoc](https://redocusaurus.vercel.app/docs/getting-started/plugin-options) for individual option details.

#### theme

Pass options to customize the theme, see [docusaurus-theme-redoc](https://redocusaurus.vercel.app/docs/getting-started/theme-options) for individual option details.

## Docs

See: <https://redocusaurus.vercel.app/docs>

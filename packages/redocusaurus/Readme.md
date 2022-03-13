# [Redocusaurus](https://github.com/rohit-gohri/redocusaurus)

![npm](https://img.shields.io/npm/v/redocusaurus?style=flat-square)

[Redoc](https://github.com/redocly/redoc) for [Docusaurus v2](https://v2.docusaurus.io/).

## Usage

1. Install redocusaurus:

   ```sh
   npm i --save redocusaurus
   ```

1. Add it as a preset to your docusaurus config and pass options:

   - Pass it a OpenAPI spec URL

     ```js
     // docusaurus.config.js

     module.exports = {
       // ...
       presets: [
         [
           'redocusaurus',
           {
             specs: [
               {
                 specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
               },
             ],
           },
         ],
       ],
       // ...
     };
     ```

   - Pass it a OpenAPI spec local path

     ```js
     // docusaurus.config.js

     module.exports = {
       // ...
       presets: [
         [
           'redocusaurus',
           {
             specs: [
               {
                 spec: 'openapi.yaml',
               },
             ],
           },
         ],
       ],
       // ...
     };
     ```

The API Doc will be available by default at `/api/` path. To customize it see [full plugin options](../docusaurus-plugin-redoc/Readme.md).

### Options

#### specs

Pass it an array of plugin options, see [docusaurus-plugin-redoc](../docusaurus-plugin-redoc/Readme.md) for individual option details.

#### theme

Pass options to customize the theme, see [docusaurus-theme-redoc](../docusaurus-theme-redoc/Readme.md) for individual option details.

## Docs

See: <https://redocusaurus.vercel.app/docs>

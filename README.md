# Redocusaurus

[![npm](https://img.shields.io/npm/v/redocusaurus?style=flat-square)](https://www.npmjs.com/package/redocusaurus/)
[![lerna](https://img.shields.io/badge/Maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lerna.js.org/)
[![Typed with TypeScript](https://img.shields.io/badge/Typed-555555.svg?style=flat-square&logo=typescript&labelColor=08C)](https://www.typescriptlang.org/)

[Redoc](https://github.com/redocly/redoc) for [Docusaurus v2](https://v2.docusaurus.io/).

## Usage

See [Redocusaurus Package](./packages/redocusaurus).

## Packages

### [Docusaurus Theme Redoc](./packages/docusaurus-theme-redoc)

A wrapper around RedocStandalone to make it match the Dcousaurus Theme with added Dark Mode.

### [Docusaurus Plugin Redoc](./packages/docusaurus-plugin-redoc)

A content plugin that creates pages from your OpenAPI files or URLs and rendered using the Redoc component from the theme.

### [Redocusaurus](./packages/redocusaurus)

A Docusaurus Preset that uses the above 2 plugins to easily add API docs to your docs site.

### [Example](./example)

Example project show casing the preset in action with multiple different OpenAPI specs.

## Motivation

To have the documentaion and API reference in the same site with the same headers/footers.

See this issue, <https://github.com/facebook/docusaurus/issues/638>, and this gist, <https://gist.github.com/rohit-gohri/b1a19f37702cfe4a6c5a47933a11785b> for more details and history.

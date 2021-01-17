# Redocusaurus

[Redoc](https://github.com/redocly/redoc) for [Docusaurus v2](https://v2.docusaurus.io/).

## Usage

See [Redocusaurus Package](./packages/redocusaurus).

## Development

The project is divided into 2 parts:

### [Docusaurus Theme Redoc]('./packages/docusarus-theme-redoc)

A wrapper around RedocStandalone to make it match the Dcousaurus Theme with added Dark Mode.

### [Docusaurus Plugin Redoc]('./packages/docusarus-plugin-redoc)

A content plugin that creates pages from your OpenAPI files or URLs and rendered using the Redoc component from the theme.

## Motivation

To have the documentaion and API reference in the same site with the same headers/footers.

See this issue, <https://github.com/facebook/docusaurus/issues/638>, and this gist, <https://gist.github.com/rohit-gohri/b1a19f37702cfe4a6c5a47933a11785b> for more details and history.

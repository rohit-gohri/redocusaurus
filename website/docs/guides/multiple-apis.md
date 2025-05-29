---
title: Showing Multiple APIs
sidebar_position: 2
---

## Nested View with MDX

To display multiple API docs with the Docusaurus sidebar for navigation you can use the MDX component `@theme/ApiDocMdx` along with the setting `hide_table_of_contents` for the file. For an example check the "Nested Docs Example" section in the sidebar.

```mdx
---
title: API 1 - Swagger Petstore
hide_table_of_contents: true
---

import ApiDocMdx from '@theme/ApiDocMdx';

<ApiDocMdx id="using-single-yaml" />
```

The output of the above is viewable here: [Nested API 1](/docs/nested/nested-1).

## Full Pages with links in Dropdown

For a simpler solution just add all the routes in a Navbar Dropdown (see [docs](https://docusaurus.io/docs/api/themes/configuration#navbar-dropdown)). This is how the "Examples" of this website is structured.

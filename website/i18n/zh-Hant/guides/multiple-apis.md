---
title: 顯示多個 API
sidebar_position: 2
---

## 使用 MDX 的嵌套視圖

要使用 Docusaurus 側邊欄導航顯示多個 API 文檔，您可以使用 MDX 組件 `@theme/ApiDocMdx`，並為文件設置 `hide_table_of_contents`。有關示例，請參見側邊欄中的「嵌套文檔示例」部分。

```mdx
---
title: API 1 - Swagger Petstore
hide_table_of_contents: true
---

import ApiDocMdx from '@theme/ApiDocMdx';

<ApiDocMdx id="using-single-yaml" />
```

上述內容的輸出可以在這裡查看：[嵌套 API 1](/docs/nested/nested-1)。

## 在下拉菜單中包含完整頁面連結

對於更簡單的解決方案，只需將所有路由添加到 Navbar 下拉菜單中（請參見 [文檔](https://docusaurus.io/docs/api/themes/configuration#navbar-dropdown)）。這就是本網站「示例」部分的結構方式。

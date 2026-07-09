---
title: 插件選項
sidebar_position: 1
author: Rohit Gohri
author_url: https://rohit.page
---

### spec (必需，字符串：文件路徑或遠程絕對 URL)

指定 OpenAPI YAML/JSON 文件的文件路徑或在某些網站上托管的 URL（不是同一個 docusaurus 網站）。在構建時會被 **解析** 並轉發給 Redoc 組件。我們還會自動生成一個可下載的單一 YAML 文件，並將其添加為靜態資產，以用作下載 URL。

### route (可選，字符串：相對 URI)

文檔可用的路由 URL，這將使用 `docusaurus-theme-redoc` 中的主題組件 `@theme/ApiDoc` 來渲染頁面。您也可以跳過此選項，使用自定義頁面按您的需求渲染文檔。

### url (可選，字符串：下載 URL)

指向 OpenAPI 規範的 URL。這將用作下載 URL，並且規範將用於渲染。這可能是必要的，因為默認情況下下載 URL 將指向由 redocusaurus 生成的處理和解析文件。

### layout (可選，對象：layoutProps)

傳遞作為布局屬性的對象。對於設置頁面的標題/描述非常有用。所有可用屬性請參見 [這裡](https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-plugin-redoc/src/options.ts#L3)。

### config (可選)

:::warning
已棄用：使用 `redocly.yaml` 來指定主題。參見 [範例](https://github.com/rohit-gohri/redocusaurus/blob/main/website/redocly.yaml)。
:::

與 [根選項](./Installation.md#config-optional) 中的 config 選項相同，但專門用於加載數據。

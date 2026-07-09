---
title: 主題配置
sidebar_position: 2
author: Rohit Gohri
author_url: https://rohit.page
---

### primaryColor (字符串，十六進制/rgba 值)

方便提供 Redoc 使用的高亮顏色。  
此值將用作 `themes` 選項中的 `colors.primary.main`。必須是實際的顏色值，而不是 CSS 變數。

### primaryColorDark (字符串，十六進制/rgba 值)

可選的方式來更改 Redoc 在暗模式下使用的高亮顏色。如果未設置，默認為 `primaryColor`。  
此值將用作 `themes` 選項中的 `colors.primary.main`。必須是實際的顏色值，而不是 CSS 變數。

### theme (可選，對象)

:::warning
已棄用：使用 `redocly.yaml` 來指定主題。參見 [範例](https://github.com/rohit-gohri/redocusaurus/blob/main/website/redocly.yaml)。
:::

覆蓋傳遞給 Redoc 的 Redoc 主題對象。默認值請參見 [這裡](https://github.com/Redocly/redoc#redoc-theme-object)。

:::warning
注意：您不應該使用此屬性覆蓋任何顏色，因為這將是暗模式和亮模式中相同的值。
:::

### options (可選，對象)

:::warning
已棄用：使用 `redocly.yaml` 來指定 `theme.options`。參見 [範例](https://github.com/rohit-gohri/redocusaurus/blob/main/website/redocly.yaml)。
:::

覆蓋傳遞給 [RedocStandalone](https://redoc.ly/docs/redoc/quickstart/react/) 組件的 Redoc 選項。默認值請參見 [這裡](https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-theme-redoc/src/redocData.ts#L5-L12)。

可用的屬性 [在這裡](https://redocly.com/docs/api-reference-docs/configuration/functionality/#featuresopenapi-schema)。

您不能使用此屬性設置主題屬性，請使用上述 `theme` 選項代替。

如果存在，將自動從 `redocly.yaml` 加載。

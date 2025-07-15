---
title: 安裝
sidebar_position: 0
author: Rohit Gohri
author_url: https://rohit.page
---

1. 設置 [docusaurus 專案](https://docusaurus.io/docs/installation)

1. 安裝 redocusaurus：

   ![npm](https://img.shields.io/npm/v/redocusaurus?style=flat-square)

   ```sh
   yarn add redocusaurus
   # 或
   pnpm add redocusaurus
   # 或
   npm i --save redocusaurus
   ```

1. 在 docusaurus 配置中添加它作為預設，並與 [@docusaurus/preset-classic](https://docusaurus.io/docs/using-plugins#docusauruspreset-classic) 一起傳遞選項：

   ```js
   // docusaurus.config.ts
   import type { Config } from '@docusaurus/types';
   import type * as Preset from '@docusaurus/preset-classic';
   import type * as Redocusaurus from 'redocusaurus';

   const config: Config = {
     // ...
     presets: [
       // .. 其他預設的配置
       [
        '@docusaurus/preset-classic',
         {
           googleAnalytics: {
             trackingID: 'XXXXXX',
           },
         } satisfies Preset.Options,
       ]
       // Redocusaurus 配置
       [
         'redocusaurus',
         {
           // 用於加載 OpenAPI 文件的插件選項
           specs: [
             // 提供本地 OpenAPI YAML 文件的路徑
             {
               // Redocusaurus 將自動在構建過程中將您的 spec 打包成單個文件
               spec: 'openapi/index.yaml',
               route: '/api/',
             },
             // 您也可以提供 OpenAPI spec URL
             {
               spec: 'https://redocly.github.io/redoc/openapi.yaml',
               route: '/openapi/',
             },
           ],
           // 修改 Redoc 渲染樣式的主題選項
           theme: {
             // 使用您的網站顏色進行更改
             primaryColor: '#1890ff',
           },
         },
       ] satisfies Redocusaurus.PresetEntry,
     ],
     // ... 其餘配置
   };

   export default config;
   ```

API 文檔將根據 `route` 指定的路徑提供。如果不設置 `route` 屬性，可以跳過添加路由。
您仍然可以使用 [Schema Imports](/docs/guides/schema-imports) 手動引用 schema 元素，或使用數據和主題組件創建自定義 React 頁面。
如果您有 [`redocly.yaml`](https://redocly.com/docs/cli/configuration/)，它將自動加載。

## 選項

### specs

一個 **數組** 的插件選項，詳細見 [插件選項](./plugin-options.md)。

### theme

傳遞選項以自定義主題，詳細見 [主題選項](./theme-options.md)。

### config (可選)

> 類型：字符串

Redocly 配置，用於打包文件並提供選項。如果未提供自定義路徑，它將嘗試從專案根目錄加載 `redocly.yaml` 文件（如果存在）。

範例：[redocly.yaml](https://github.com/rohit-gohri/redocusaurus/blob/main/website/redocly.yaml)
參考：[https://redocly.com/docs/cli/configuration/](https://redocly.com/docs/cli/configuration/)。僅支持標記為“支持於 Redoc CE”的選項。

:::important
設置 `redocly.yaml` 配置時，網站僅在使用以下命令構建並運行後才能正確渲染：

```bash
npm run build
npm run serve
```

在本地運行網站時，使用 `npm start` 可能會顯示一些錯誤消息。
:::

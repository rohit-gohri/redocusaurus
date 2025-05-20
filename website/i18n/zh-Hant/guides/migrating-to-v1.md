---
title: 從 v0 升級
sidebar_position: 4
---

## 選項變更

1. `spec` - 現在可以是本地文件的路徑或絕對 URL。您現在也可以指向多文件 OpenAPI 定義的入口點，我們將為您打包。

1. `routePath` -> `route`（可選） - 現在仍然有效，但現在是可選的。

1. `redocOptions` -> `options`（可選） - 我們已經刪除了一些默認值（`downloadUrl` 曾經默認隱藏），現在將自定義留給用戶。

## 已移除的選項

1. `specUrl` - 根據傳遞的 spec 類型，現在由包自動處理。我們將把您的定義打包成單個可下載的 YAML，並在構建時將其作為靜態資產添加。

1. `addRoute` - 現在不再需要，因為 `route` 現在是可選的，因此如果不需要路由，請不要傳遞它。

1. `apiDocComponent` - 現在不再需要，因為我們提供了一個 react-hook `useSpecData` 來加載插件數據，可以與 `@theme/Redoc` 組件一起使用。

## 組件變更

### 已移除實驗性 `@theme/ServerStyle`

現在，構建時/服務器端渲染對所有人默認有效，無需進行任何操作。

### `@theme/Redoc` 和 `@theme/ApiDoc` prop 變更

我們現在提供了一個新的 hook `@theme/useSpecData` 來加載 YAML 文件，您可以直接將結果傳遞給 `@theme/Redoc`，而無需自己解析 API 文件。

```jsx
import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';
import useSpecData from '@theme/useSpecData';

function CustomPage() {
  const specData = useSpecData('using-custom-layout');
  return (
    <Layout
      title="Custom Layout Docs"
      description="Example showing custom layout"
    >
      <Redoc {...specData} />
    </Layout>
  );
}

export default CustomPage;
```

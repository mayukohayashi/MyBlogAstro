---
layout: "../../layouts/BlogPost.astro"
title: "PortfolioをVercelにデプロイする"
description: "Portfolioを作ったのでVercelでデプロイ"
pubDate: "May 20 2023"
tags: [Tech, Astro, memo]
---

### SSRアダプターの追加

- SSRを有効にしてうｐ
  - `npx astro add vercel`

自動で以下が追加される。`astro.config.mjs`

``` javascript
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});
```

### Vercelに

適当にやってたら、VercelがAstroを検出して色々設定してくれる。

![](/assets/verceldeploy1.png)

![](/assets/verceldeploy2.png)

### ちな

ポートフォリオは静的サイトなので、SSRアダプター追加とかしないでOK。

### 参照

- Astro公式：[AstroサイトをVercelにデプロイする](https://docs.astro.build/ja/guides/deploy/vercel/)
- [@astrojs/vercel](https://docs.astro.build/ja/guides/integrations-guide/vercel/)

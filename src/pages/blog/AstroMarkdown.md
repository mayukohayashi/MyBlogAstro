---
layout: "../../layouts/BlogPost.astro"
title: "Astro： Markdownについて"
description: "Astro勉強中、Markdownについて"
pubDate: "Mar 09 2023"
tags: [Tech, memo, Astro]
---

### 下書きページをつくる

``` markdown
---
layout: ../../layouts/BaseLayout.astro
title: ブログ記事
draft: true
---
```

### 見出しID

``` markdown
---
title: コンテンツページ
---
## イントロダクション

Markdownで書くと、同じページの[結論](#結論)に内部リンクできます。

## 結論

URL`https://my-domain.com/page-1/#イントロダクション`を使って、ページ上のイントロダクションに直接移動できます。
```

## MarkdownとMDXの設定

> AstroのMarkdownサポートは、活発なエコシステムを持つ強力なパースおよび処理ツールである[remark](https://remark.js.org)によって提供されています。
> Pandocやmarkdown-itなどの他のMarkdownパーサーは、現在サポートされていません。
>
> Astroは、[GitHub-flavored Markdown](https://github.com/remarkjs/remark-gfm)と [Smartypants](https://github.com/silvenon/remark-smartypants)プラグインをデフォルトで適用します。
> これにより、テキストからクリッカブルリンクを生成したり、読みやすさのために引用をフォーマットしたりといった、いくつかの便利な機能が提供されます。
>
> remarkがMarkdownをどのように解析するかは、astro.config.mjsでカスタマイズできます。Markdownの設定オプションの全リストをご覧ください。

### Markdown Plugin

- GitHub: [awesome-remark/Pluginリスト](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins)
- GitHub: [awesome-rehype/Pluginリスト](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins)

<br>

例：Astroのデフォルトプラグインを維持したまま、MarkdownとMDXにremark-tocを適用し、MDXのみにrehype-accessible-emojisを適用

``` javascript
import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

export default {
  markdown: {
    // .md と .mdx ファイルに適用
    remarkPlugins: [remarkToc],
    // remark-gfm と remark-smartypants を保持
    extendDefaultPlugins: true,
  },
  integrations: [mdx({
    // .mdx ファイルのみに適用
    rehypePlugins: [rehypeAccessibleEmojis],
  })],
}
```

---

### 絵文字適用してみる

1. `npm install rehype-accessible-emojis`で、プラグインインスコ
2. `astro.config.mjs`に下記追加

``` javascript
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";


export default defineConfig({
  site: "https://sunny-arithmetic-1e866e.netlify.app",
  experimental: {
    integrations: true,
  },
  ~~~~~~~~中略~~~~~~~~
  markdown: { rehypePlugins: [rehypeAccessibleEmojis] },
});
```

## 参考

- AstroDocs: [MarkdownとMDX
](https://docs.astro.build/ja/guides/markdown-content/)
- [AstroのMarkdownで改行したとこにBRタグを入れる
](https://higelog.brassworks.jp/4222)

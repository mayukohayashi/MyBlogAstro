---
layout: "../../layouts/BlogPost.astro"
title: "Astro勉強中Note"
description: "Astro勉強中、見たリンクとか、ノート代わりに。"
pubDate: "Feb 06 2023"
draft: true
tags: [Tech, Note, Astro]
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

> AstroのMarkdownサポートは、活発なエコシステムを持つ強力なパースおよび処理ツールである[remark](https://remark.js.org)によって提供されています。Pandocやmarkdown-itなどの他のMarkdownパーサーは、現在サポートされていません。
>
> Astroは、[GitHub-flavored Markdown](https://github.com/remarkjs/remark-gfm)と [Smartypants](https://github.com/silvenon/remark-smartypants)プラグインをデフォルトで適用します。これにより、テキストからクリッカブルリンクを生成したり、読みやすさのために引用をフォーマットしたりといった、いくつかの便利な機能が提供されます。
>
> remarkがMarkdownをどのように解析するかは、astro.config.mjsでカスタマイズできます。Markdownの設定オプションの全リストをご覧ください。

### Markdown Plugin




## 参考

- AstroDocs: [MarkdownとMDX
](https://docs.astro.build/ja/guides/markdown-content/)

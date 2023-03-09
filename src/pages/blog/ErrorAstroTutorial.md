---
layout: "../../layouts/BlogPost.astro"
title: "Astroチュートリアル中出たエラー"
description: "AstroBlogTutorial中に出たエラーを解決"
pubDate: "Feb 23 2023"
tags: [Tech, Error, Astro]
---

## いつ起こったか

Astro Blogの[チュートリアル](https://docs.astro.build/en/tutorial/0-introduction/)中


![発生場所](/assets/astro1.png)

`BaseHead.astro`

``` astro
const canonicalURL = new URL(Astro.url.pathname, Astro.site);

```

結果： チュートリアルにあるこの記載ではローカルURLが適用される？

## やったこと

- `Astro.site`部分URL直打ち

## 参考

- Qiita記事(同じような現象起こってる人)：[【Astro】OGP画像を設定する](https://qiita.com/asahina820/items/d8080f2a4078897e5ac0)
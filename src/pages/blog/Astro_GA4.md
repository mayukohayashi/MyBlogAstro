---
layout: "../../layouts/BlogPost.astro"
title: "Astro x GA4"
description: "とりあえずブログにGA4導入したので方法もメモっとくかという気持ち"
pubDate: "May 02 2023"
tags: [Tech, Astro, memo]
---

## Google Analytics 4をAstroで使う

ここらへんは省略。適当にStream作成やらなんやらでなんとかする。
![](/assets/GA4_1.png)

## PartyTime

`npm install -D @astrojs/partytown`こいつで導入おわり。

`astro.config.mjs`に以下を追加。

```js
import partytown from "@astrojs/partytown";

export default defineConfig({
  integrations: [
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
```

## TrackingIDの用意

> Note:
> Astro公式の記事だとUA-XXXXX-XXみたいなGA4までの古いTrackingIDを使っている。
> しかし、GA4ではG-XXXXXXXみたいなTrackingIDを使うので注意。

![](/assets/GA4_2.png)

## `Layout.astro`とかにいれる

以下のような感じで。

``` html
<!-- head -->
<script
  type="text/partytown"
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID">
</script>
<script type="text/partytown">
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
<!-- more head -->
```

1. Replace the GA_MEASUREMENT_ID with your own tracking ID.
2. Add a type attribute and set it to text/partytown to both scripts. This tells partytown which script tags to handle.

## 参考

- [Add google analytics to Astro with Partytown](https://www.kevinzunigacuellar.com/blog/google-analytics-in-astro/)
  - これを参考にした。めちゃくちゃわかりやすい。
- [PartyTown document: Google Tag Manager](https://partytown.builder.io/google-tag-manager#forward-events)

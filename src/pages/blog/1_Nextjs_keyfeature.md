---
layout: "../../layouts/BlogPost.astro"
title: "Next.js / Key features & benefits"
description: "Next.jsの特徴とメリット"
pubDate: "May 15 2023"
tags: [Tech, Next.js, note]
---

## Key features

- Server-side Rendering
  - Automatic page pre-rendering: Great for SWO and initial page load
    - Ore-rendering reactページ・コンポーネント（サーバー側で行う）
  - Blending client-side and server-side: Fetch data on the server and render finished pages
  - 例えば：Reactだけ→Client-side rendering(Inspectでソースとか見ても、ほぼ空状態)
    - Fetching data and renderingが始まるのは、JSコードがClientで実行されてから（JSコードが実行されるまで、空のHTMLが表示される）
    - googleとか検索エンジンが見られない、SEO的に…良くはない（検索かからん）
    - Reactだけでもできるけど、わりとややこしい。

- File-based Routing
  - Define pages and routes with files and folders instead of codes
  - Less code, less work, highly understandable
    - めっちゃらくちん

- Fullstack Capabilities
  - Easily add backend(server-side) code to Next.js/React apps
  - Storing data, getting data, authentication etc.... Can be added to your React project!

### 例

[ReactでのRouting]
![ReactでのRouting例](/assets/ReactRouting.png)

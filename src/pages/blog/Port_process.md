---
layout: "../../layouts/BlogPost.astro"
title: "Portを空ける、どのPortが使われてるみる、開いてるPortみる"
description: "Portあけ忘れとかがたまにあって、コマンド忘れるのでmemo"
pubDate: "Apr 17 2023"
tags: [Tech, Linux, Mac, memo]
---

## 起こること

ローカル立ち上げて〜ブログあげて〜などやってるとたまにPort何使ってるか、どこが空いているかわからなくなる

## コマンド忘れるのでmemo

- 使ってるポートのPIDとかを調べたい

``` shell
sudo lsof -P -i:8080
```

- Portを空ける
  - プロセスをKill

``` shell
sudo kill -9 #ここにID

```

### 参考

- [【Mac】占有portの調べ方と空け方](https://zenn.dev/json_hardcoder/articles/5925798786a07a)

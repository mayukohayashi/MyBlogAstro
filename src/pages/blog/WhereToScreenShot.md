---
layout: "../../layouts/BlogPost.astro"
title: "スクショ保存場所"
description: "スクショの保存場所変更用コマンド"
pubDate: "February 07 2023"
tags: [Mac, Memo]
---

``` shell
defaults write com.apple.screencapture location ~/Downloads/
```

`~/Downloads/`部分を、スクショ保存したい場所に。

### ちな今のJournal保存場所

`defaults write com.apple.screencapture location ~/Journal/images/screenshots`
これでやった、なんで溜まったものから名前変えていく。

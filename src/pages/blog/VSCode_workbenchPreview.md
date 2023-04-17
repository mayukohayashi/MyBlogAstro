---
layout: "../../layouts/BlogPost.astro"
title: "VSCodeの別タブ開くをずっと有効にする"
description: "ダブルタップで〜とかじゃなく設定で。ずっと有効"
pubDate: "Apr 17 2023"
tags: [Tech, VSCode, memo]
---

## 実現したいこと

VSCodeでファイルを開いている状態で別ファイルを開こうとすると、元のファイルを編集していなかったら同じタブに表示されてしまう。
ダブルタップでファイルを開くと別タブで開くが、常に別タブで開いてほしい…。

## やること

1. 設定の検索窓に「Enable Preview」と入力して、「Workbench > Editor: Enable Preview」のチェックを外す
2. setting.jsonに`"workbench.editor.enablePreview": false,`

### 参照

- [Visual Studio Code (VSCode)でファイルを別タブで開くようにする](https://programism.net/vscode-tab-open/)

## なんかしらんが

割と頻繁にここのチェック外れる……なんでや。設定jsonと設定かぶってるとかもないし……わいが寝ながら外しとるんか？？

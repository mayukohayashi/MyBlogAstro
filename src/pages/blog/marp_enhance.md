---
layout: "../../layouts/BlogPost.astro"
title: "MarpとMarkdown Preview Enhancedの共存で詰まった"
description: "MarpとMarkdown Preview Enhancedの共存できずﾂﾝﾀﾞ＼(^o^)／ｵﾜﾀ"
pubDate: "April 11 2023"
tags: [Tech, Error, .NET]
---

## 起こったこと

なんかMarpのプレビューしようとおもったけど、パワポ形式で出ねえ……なんでやねん。

## 前提

Marp for VSCodeを使ってmarkdownをスライド形式でプレビューするには、**VSCodeの標準プレビュー機能**を使う必要がある。

Markdown Preview Enhanced を入れてるので、標準プレビューのボタンが非表示になってる…。
あれ、昔出てたよな…ってことで設定見直し

## やったこと

設定で非表示を無効化してあげよう。

`setting.jspn`

``` json
{
  "markdown-preview-enhanced.hideDefaultVSCodeMarkdownPreviewButtons": false,
}
```

## 調査

```
"markdown-preview-enhanced.hideDefaultVSCodeMarkdownPreviewButtons": {
   "description": "Hide the default VSCode markdown preview extension buttons. Restarting the editor is required to make this config take effect.",
   "default": true,
   "type": "boolean"
```

最近(Mar 1, 2022)の更新で変わったみたい。[Feat/0.6.2 (#572)](https://github.com/shd101wyy/vscode-markdown-preview-enhanced/commit/b210492ab5e3470ea10a8c6581fea9dfde7fa8f7)

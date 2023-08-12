---
layout: "../../layouts/BlogPost.astro"
title: "Git: lfs使うとき"
description: "UEのプロジェクト、先にlfsの設定してたほうが楽だな？と思った"
pubDate: "August 12 2023"
tags: [Tech, memo, git]
---

## UEの`.uasset`めちゃくちゃ重いやつある

最初から、lfs使うやでって設定しておいたほうがいいかもしれないわねとおもったので、忘れないように

### 手順抜粋

1. リポジトリのファイルの種類を Git LFS と関連付けるには、git lfs track の後に、Git LFS に自動的にアップロードしたいファイル拡張子の名前を入力します。

たとえば、 .psd ファイルを関連付けるには、次のコマンドを入力します。

```shell
$ git lfs track "*.psd"
> Adding path *.psd
```

<br>

---

<br>

`.gitattribute`に、`*.uproject filter=lfs diff=lfs merge=lfs -text`的な記述が追加される。

## 参照

- [Git Document: Git Large File Storage を設定する](https://docs.github.com/ja/repositories/working-with-files/managing-large-files/configuring-git-large-file-storage)

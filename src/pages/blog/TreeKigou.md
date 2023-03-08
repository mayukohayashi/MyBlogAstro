---
layout: "../../layouts/BlogPost.astro"
title: "Tree記号系"
description: "Treeの記号とか忘れやすい……そういう系のメモ"
pubDate: "February 07 2023"
tags: [Tech, Memo]
---

## そもそも何書いたら出る

> 「L」や「ト」みたいな文字（記号）というのは、「└」「├」のことで『罫線素片』（罫線文字と呼ばれることもございます。）

「けいせん」で出すのが早そう。

## tree使う

- tree インスコ
  - `brew install tree`


◎ 深さとか指定

```shell
$ tree -L 1
.
├── README.md
├── __pycache__
├── bin
├── crawler
├── database.py
├── main.py
├── model
├── requirements.txt
├── test_spider.py
└── venv

5 directories, 5 files
```

◎ `-a`で隠しファイル表示

``` shell
tree -a -L 1
.
├── .DS_Store
├── .env
├── .gcloudignore
├── .git
├── .gitignore
├── README.md
├── __pycache__
├── bin
├── crawler
├── database.py
├── main.py
├── model
├── requirements.txt
├── test_spider.py
└── venv
```

◎ MByte, GByte単位の大きいファイルを絞り込んで表示

``` shell
$ tree --du -h -a --sort=size | grep -e M] -e G]
.
└── [3.4M]  test_repository
    ├── [1.2M]  .git
    │   ├── [1.2M]  objects
    │   │   └── [1.2M]  pack
    │   │       └── [1.2M]  pack-
xxxx.pack
    ├── [2.0M]  assets
    │   ├── [2.0M]  fonts
    │   │   └── [2.0M]  Roboto
```


1. TODO: 検索のやーつ[peco](https://github.com/peco/peco)いれる（Digる）
2. TODO: よくつかうTree出すやーつ、Aliasに登録してもよいかも。

## 参考

- [PCで「L」や「ト」のような文字（記号）を入力する方法。](https://i-tsunagu.com/other/boxdrowing-character/)
- Zenn記事: [treeコマンドとは](https://zenn.dev/kenghaya/articles/80399bcb506287)

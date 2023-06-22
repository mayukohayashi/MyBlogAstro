---
layout: "../../layouts/BlogPost.astro"
title: "Git: リモートブランチ削除"
description: "毎度ブランチ削除するんどうやったっけ……と、検索する手間よ"
pubDate: "June 22 2023"
tags: [Tech, memo, git]
---

## そろそろ忘れない

毎度不安になって、あれリモート反映ってプッシュいるっけ？と、なる。
戒めのためにもメモる

``` shell
// ローカルのブランチを削除する場合
$ git branch -d localBranchName

// リモートのブランチを削除する場合
$ git push origin --delete remoteBranchName
$ git push origin :branch_name
```

## 参考

- [Qiita: Gitのリモートブランチを削除するまとめ](https://qiita.com/yuu_ta/items/519ea47ac2c1ded032d9)
- [How to Delete a Git Branch Both Locally and Remotely(jp)](https://www.freecodecamp.org/japanese/news/how-to-delete-a-git-branch-both-locally-and-remotely/)
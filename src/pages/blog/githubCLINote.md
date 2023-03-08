---
layout: "../../layouts/BlogPost.astro"
title: "GitHub CLI"
description: "Github CLIのよく忘れるコマンドをメモっておく場所"
pubDate: "January 28 2023"
tags: [Tech, git, Memo]
---

### issueのCommentを入れる

`gh issue comment 1 -b "ここにコメント"`

### Issueのリスト出し

`gh issue list`

## プロジェクトナンバー込での書き方一覧

```
fix fix #8
fixes This commit fixes #8
fixed We have finally fixed #8
close close #8
closes This closes #8
resolve resolve #8
resolves resolves #8
resolved resolved #8
```

## 参考サイト

- Github CLI公式: [gh issue comment](https://cli.github.com/manual/gh_issue_comment)

- Qiita: [コミット時にIssueをCloseする](https://qiita.com/maeda_t/items/d9ef98bf651bd491b16d)
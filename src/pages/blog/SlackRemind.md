---
layout: "../../layouts/BlogPost.astro"
title: "SlackのRemind機能"
description: "SlackのRemind機能、順番とかすぐ忘れる"
pubDate: "March 8 2023"
tags: [Tech, slack, Memo]
---

### Format

`/remind [target] to [message] [at|in|on] [日時] (every day)`

### 日時の指定

|種類 | 例 | 意味|
| --------- | -------- | ------ |
| 経過時間 | in 10 seconds | 10秒後 |
| 経過時間 | in 10 minutes | 10分後 |
| 経過時間 | in 1 hour | 1時間後 |
| 経過時間 | in 2 hours | 2時間後 |
| 時間指定 | at 19:00 | 19:00に |
| 時間指定 | at 7:00pm | 午後7:00に |
| 時間指定 | at midnight | 午前0:00に |
| 日付指定 | on January 1 | 1月1日に |
| 日付指定 | on 05/02/2018 | 2018/05/02に(MM/DD/YYYY形式で指定) |

### 参考

- Slack公式：[リマインダーを設定する
](https://slack.com/intl/ja-jp/help/articles/208423427-%E3%83%AA%E3%83%9E%E3%82%A4%E3%83%B3%E3%83%80%E3%83%BC%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B)
- [slack の /remind 機能まとめ](https://qiita.com/takesato/items/335061d7945ebd5c23f7)

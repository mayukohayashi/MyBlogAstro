---
layout: "../../layouts/BlogPost.astro"
title: "Github Copilotを使って遊んだ"
description: "GithubCopilot、とりあえず触っておかねばとおもった"
pubDate: "April 28 2023"
tags: [Tech, AI, memo, Github]
---



# GithubCopilotを触りまくるぞ

## Github Copilotやっと、やる

### On/Off

- VScodeだとここにマークでる

![](../../../images/forLink/gitpilot1.png)

### JavaScriptやってみる

またしてもブロック崩しゲームをつくる。（ブロック崩しゲームになにか恨みがあるのか？太古のインターネットでエロ絵だすために頑張った記憶からブロック崩しのことばかり考える大人になってしまった……）

---

- Canvas設定しようかなーと思ったらすぐに思ってるやつを指示してくれた

![](/gitpilot2.png)

- コメントでPaddle描画するやーつと言ったらそれらしいのすぐ提案

![](/assets/gitpilot3.png)

- `var`先に考えてくれて優しい。全部上にまとめときたいから勝手に上にもってくね(*´∀｀*)

![](/assets/gitpilot4.png)

- `var`いれてtabし続けていくと、「ん？なんやそれ？」みたいなvar作ろうとする。しつこくtab押して限界まで引き出す作戦もなかなか良いかもしれんなとおもう。

![](/assets/gitpilot5.png)

- めちゃくちゃサボりだす私。見えないんだけど、どうすんの？と聞くと、めちゃくちゃちゃんとしたdrawFunctionを作ってくれる。

![](/assets/gitpilot6.png)

- 色々触った結果、いい感じにできたー(*´∀｀*)あとサイズ感とかこっちで調整すりゃいいだけ

![](/assets/gitpilot7.png)

### 所感

- 最初に、どういった要素がいるのか、定数は何にしよう等計画しておくと良い。
  - ここに○○を実装とか
  - Copilot時は自分のためにもある程度形をねっとくとよい。
  - リファクタリングしてもらうのも良い。
  - ユニットテストつくってもらったりもすごい良さげ
- ブロック崩しのような皆が大量に作ってて、いっぱいソースがある（チュートリアルになってたりする位だし）ものはまじで一瞬でできる
  - 1からまじで実装のお供をやってもらうとか、もっと一緒にやってCopilotのことをもっと知っていきたい
  - 個人で月10ドルは実質やすい、いや高いけど
- コード内容の精査をする能力、ちょこちょこ動かしてみるなどは必要
  - とりかえしのつかないとこまで突っ走って何もできなかったとかは避けたい
- やはり言っても、**co**pilot。全部やってもらうのは難しい。めっちゃ助けてくれる相棒！！！！位の気持ちで。
- ガチで使い方うまけりゃ相当時間短縮されるし、難しいこともやってくれる
  - Chat-GPTと対話型でベースをつくり、Copilotで一緒に書いてくとかするのもよさげ。
  - カーソルのあるところにガンガン「これ入れたら？」を提案してくれるので、全体を俯瞰してみるとか、全体をみる能力が低い
  - なので、Chat-GPTと対話しながら、最初は全体像（仕様・ファイル構成とかから、ファイル１つにどういう関数をもたせるのか、役割とか決めとくまで。ルール設定とかもしておくと良いかも）的な土台となるものを作り上げておく
  - その後、それを元に、Copilotと一緒にバンバン書いて、試して、書いて試してを繰り返していくかんじが良さげだなと思った

## 参照

- [GitHub.com での GitHub Copilot 設定の構成](https://docs.github.com/ja/copilot/configuring-github-copilot/configuring-github-copilot-settings-on-githubcom)
- [GitHub CopilotのAIモデルがさらに進化し、より的確なコードの提案、脆弱性のあるパターン、SQLインジェクション、クレデンシャルのハードコードを警告など](https://www.publickey1.jp/blog/23/github_copilotaisql.html)
- [VSCodeでGitHub Copilotを使ってみた](https://zenn.dev/riya_amemiya/articles/7a7cec9244e4b9)
- [GitHub Copilotを試してみた ~導入編~](https://dev.classmethod.jp/articles/github-copilot-introduction/)
- [ユニットテストをGitHub CopilotとChatGPT使って書いてみたらやばかったです](https://dev.classmethod.jp/articles/unittest_with_copilot_and_chatgpt/)

> 今回の新機能ではありませんが、GitHub Copilotには個人向け企業向けのいずれにも、GitHubで公開されているパブリックなコードと150文字以上一致するコードは提案されないようになっています。

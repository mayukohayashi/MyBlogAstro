---
layout: "../../layouts/BlogPost.astro"
title: "Chat-GPT: プロンプト"
description: "Chat-GPTのプロンプトについてちょっと調べたりしている"
pubDate: "April 12 2023"
updateDate: "April 17 2023"
tags: [Tech, AI, memo]
---

## プロンプト

- Zero-shot Prompting / ゼロショット・プロンプティング
- Few-shot Prompting / フューショット・プロンプティング
- Limitations of Few-shot Prompting / スモールショットプロンプティングの限界
- Chain-of-Thought Prompting / 思考連鎖型プロンプティング
- Zero-shot CoT / ゼロショット CoT
- Self-Consistency / 自己整合性
- Generated Knowledge Prompting / 知識生成系プロンプティング
- Automatic Prompt Engineer (APE) - 自動プロンプトエンジニア（APE）

### 論文

- AutoPrompt [https://arxiv.org/abs/2010.15980]
- Prefix Tuning [https://arxiv.org/abs/2101.00190]
- Prompt Tuning [https://arxiv.org/abs/2104.08691]

### 単語抜粋

[**ポジショナルエンコーディング**](https://codezine.jp/article/detail/16860?p=3#:~:text=%E3%83%9D%E3%82%B8%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AB%E3%82%A8%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AF%E3%80%81%E5%87%A6%E7%90%86%E5%AF%BE%E8%B1%A1,%E3%81%AB%E8%B6%B3%E3%81%97%E7%AE%97%E3%81%97%E3%81%A6%E3%81%84%E3%81%8F%E3%80%82)

> 処理対象の単語が文章のどこにあるかを把握する仕組み。こちらは意外とシンプルで、単語の位置により異なる値をエンベディックベクトルに足し算していく。

<br>

[**自己注意（Self-Attention）機構**](https://xtech.nikkei.com/atcl/nxt/mag/rob/18/00007/00006/)

>データの流れ方自体を学習し決定するような方法である。もともとRNN向けに提案されたが、CNNなど他のニューラルネットワークにも利用されている。自己注意機構は強力であり機械翻訳、質問応答、画像生成など、多くの問題で最高精度を達成している。自分自身の途中の計算結果に注意し、そこから読み込むことからこの名がついている。

他：[自己注意Self-Attention の解説でわかりやすいと思った記事N選(N＝21）](https://qiita.com/enoughspacefor/items/c9810d1065741a7f461c)

<br>

[順伝播型ネットワーク(フィードフォワードニューラルネットワーク)](https://www.hellocybernetics.tech/entry/2016/05/22/014656) ->これはなんとなく覚えてる

>層状に並べられたニューロンが隣接した層間でのみ結合した構造をしています。 左から右へと入力層から出力層へ一方向のみ伝播するニューラルネットワークです。

## 　参考

- [ChatGPT Prompting Cheat Sheet](https://blog.finxter.com/wp-content/uploads/2023/03/Finxter_Prompting_OpenAI-2.pdf)
- [プロンプトエンジニアリング応用編](https://chatgpt-lab.com/n/na4b6676093b1)
  - ChatGPTLabのブログ記事。他記事も見応えあったりわかりやすかったり、良い。
- [言語モデルに思考の連鎖を促し推論能力を向上(1/2)](https://webbigdata.jp/post-13592/)
  - Chain-of-Thought Promptingについて日本語で詳しくかいている
- [【ChatGPT】プロンプトパターンのスニペット](https://qiita.com/yufuji25/items/1b822ba7ca36ad55f7fb#1-%E3%83%AD%E3%83%BC%E3%83%AB%E5%88%B6%E7%B4%84%E6%9D%A1%E4%BB%B6%E3%82%92%E4%B8%8E%E3%81%88%E3%82%8B)
- [ChatGPTを探す旅に出させていただきます
](https://dev.classmethod.jp/articles/history-of-chatgpt-and-deep-learning-language-model/)
  - 数式怖い・・・・・ﾌﾞﾙﾌﾞﾙ(((´・ω・｀)))あとでよむ
- [ChatGPTでstep by stepもロールプレイもやめたらプロダクト開発で使える精度になったよ](https://note.com/mryy/n/nd0aff5c9fc4f)
  - yonda. note kirai....
  - おいおいやっとCoTとかわかってきたのに！？と一瞬思ってしまったがｗ接待モード・ロールプレイを保持したまま専門的な情報がほしい（可愛いく丁寧なAIに専門的なことまで教えてもらいてえ・・・・）共存させることは不可能ではなさげ？4.0だと容易だったりせんか。あとめっちゃガチガチの指示書文を与えるための時間を削減したい（Auto-GPTへ・・・ってことなのか）

<br>

- [【ChatGPT×Slack】SlackチャンネルにChatGPTを召喚！ChatGPT APIを使った要約アプリの作り方](https://saasis.jp/2023/03/14/%E3%80%90chatgpt%E3%80%91slack%E3%81%AE%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB%E3%82%92%E5%AE%8C%E7%B5%90%E3%81%AB%EF%BC%81chatgpt-api%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E8%A6%81%E7%B4%84/)
  - βだから安定してない(2023/April/11現在)
- [ChatGPTを使って爆速でプレゼン資料を作る](https://qiita.com/ydty/items/39d39ad5d5b6448d55fc)
- [ChatGPT APIを使ったLineBotの作り方を、人格の与え方まで完全解説【プログラミング不要】](https://chatgpt-lab.com/n/n55257c082a9d)
  - 誰を作成するか・・・馬（概念）かな・・・会話できないな・・・・。

<br>

- [Microsoft が GPT-4搭載の 365 Copilotを発表：AIが切り開く新しい働き方](https://chatgpt-lab.com/n/n29ed3cf288ae)
  - これ出るまでには、もうちょっと知識つけておきたいな
- [Hugging Face](https://huggingface.co/huggingface)

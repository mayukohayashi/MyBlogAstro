---
layout: "../../layouts/BlogPost.astro"
title: "Chat-GPTと一緒にゲーム作り"
description: "Chat-GPT3.5(ブラウザ・無料枠)と一緒にブロック崩しゲームを作ろうという試み"
pubDate: "April 27 2023"
tags: [Tech, AI, memo]
---


## なんか対話だけでChat-GPTとやっていくの、割と疲れたな…なんでやろ

開発者がよりパフォーマンスを上げる、プログラミング初心者でも楽しく役立つ！ってのが、Chat-GPTとプログラミングしたりする醍醐味なんじゃないのか……わいはなんであんなに疲れたんや！？と、考えた。

多分、なんか０からスタートしすぎていた。できることとできないこと、得意なことやより良い最適解みたいなのを体系的に理解していなかったのが原因ではないかと予想。
何故Chat-GPTがProgrammingすげーのか、理由？成り立ち？みたいなのをあんまり理解できてなかったんやろな！と思ったので、ちょこっと調べた。

- 「[Codex JavaScript Sandbox](https://platform.openai.com/codex-javascript-sandbox)」というデモアプリ
  - 「Codex JavaScript Sandbox」は、自然言語と数十億行のコードの両方で学習したGPT-3ベースのモデル「Codex」で構築されたデモアプリ。
  - 自然言語の命令を入力すると、人工知能がJavaScriptでプログラムを書いて実行してくれ
  - 人間語で「HelloWorld!と表示してください」-> コード作成 -> 表示される！！！的なやつ
    - 参照：[#OpenAI の Codex で JavaScript のプログラムを生成して p5.js Web Editor上で動かす（単純な四角形の描画）](https://qiita.com/youtoy/items/dec25c163b0d16ff7d5c)
    - 参照：[Codex JavaScript Sandbox で自然言語によるプログラム作成を試す](https://note.com/npaka/n/n0e3f383a5de3)
- [Playground](https://platform.openai.com/playground):現在のModels(code-davinci-002等：up to Jun 2021)からできている。

## Example見て~(ちょっとだけやった上で)

- PlaygroundのTokenすぐきれる（金がないときつい）
- コメントで説明、コードブロックにかこむなどしてCode書く
  - そのコードに関する事項
    - 説明（コード・SQLクエリの説明は特に得意とされている）
    - コードのチェック（これも得意としている）
    - などなど

- 何の言語なのか最初に明白にする

```
# R language
# Calculate the mean distance between an array of points
```

- ライブラリなども指定してやるとより良い

``` html
<!-- Use A-Frame version 1.2.0 to create a 3D website -->
<!-- https://aframe.io/releases/1.2.0/aframe.min.js -->
```

- どういう関数を作りたいのか、書き出しを書いてあげると、より理解されやすい

``` python
# Create a function to count to 100
def counter
```

- コメントのスタイルも大事。例えばPythonだと`#`より`"""`でのコメントの方がより高いクオリティを出せる

``` python
"""
Create an array of users and email addresses
"""
```

- コメントを、関数の中に入れたりするとより良い

``` python
def getUserBalance(id):
    """
    Look up the user in the database ‘UserData' and return their current account balance.
    """
```

- こう書いて欲しい的な理想像がある場合、絶対に例をあげたほうがよい

``` python
"""
Create a list of random animals and species
"""
animals  = [ {"name": "Chomper", "species": "Hamster"}, {"name":
```

- 温度低めの方が、詳細な結果がでる
  - API temperatureは0かもしくは0に近い方が詳細な情報が出てくる
  - 温度高いと、ランダムでクリエイティブな回答を出す仕様（ここのTemperatureとよくいう接待モードとの違いが個人的によくわからない）
- より正確な結果・低レイテンシーを出すためには、少量ずつのクエリで完了させることが大事

- Unitテストを書かせたりするのもおすすめ

``` python
# Python 3
def sum_numbers(a, b):
  return a + b

# Unit test
def
```

- ソースとなるデータを用意してDB関数を作成させる等も得意。
  - データベースの構造・カラム名などを記載するだけで、スキーマ挿入、クエリを作ったりしてくれる

``` python
# Table albums, columns = [AlbumId, Title, ArtistId]
# Table artists, columns = [ArtistId, Name]
# Table media_types, columns = [MediaTypeId, Name]
# Table playlists, columns = [PlaylistId, Name]
# Table playlist_track, columns = [PlaylistId, TrackId]
# Table tracks, columns = [TrackId, Name, AlbumId, MediaTypeId, GenreId, Composer, Milliseconds, Bytes, UnitPrice]

# Create a query for all albums by Adele
```

- 言語置き換えも得意

``` js
// Rewrite this as a React component
var input = document.createElement('input');
input.setAttribute('type', 'text');
document.body.appendChild(input);
var button = document.createElement('button');
button.innerHTML = 'Say Hello';
document.body.appendChild(button);
button.onclick = function() {
  var name = input.value;
  var hello = document.createElement('div');
  hello.innerHTML = 'Hello ' + name;
  document.body.appendChild(hello);
};

// React version:
```

### APIの設定おすすめ

- use `max_token > 256`
- Prefer `finish_reason == "stop"`
- Resample 3-5times

## 参照

- [Understanding Codex training data and outputs](https://help.openai.com/en/articles/5480054-understanding-codex-training-data-and-outputs)
  - Codex作ったんは生産性あげたりするためやで。Codexモデルは、数千万の公開リポジトリでトレーニングされてまっせ。分析の結果、開発初期段階でも出力の大部分(> 99%)がトレーニングデータと一致しないことがわかったりしてるんや・・・勿論標準的に広く使用されてる実装とか開発とか正解と思われるやーつを出すことは勿論できてるんやで！なんで、開発者の皆、まだまだフィードバック待ってるで！
- [Codex](https://platform.openai.com/docs/models/codex)
  - Codexモデル概要。Capable: Python, JS, Go, Perl, PHP, Ruby, Swift, TS, SQL, Shell
- [Code completion](https://platform.openai.com/docs/guides/code)
  - March 2023からChatModelsにDeprecatredされたよというお知らせがでている。
- [Codex（なので一年前くらい）のデモとかVideoリスト](https://www.youtube.com/playlist?list=PLOXw6I10VTv_FhQbbvYh1FvbiaPf43Ve2)

---

- [Wiki: OpenAI Codex](https://ja.wikipedia.org/wiki/OpenAI_Codex)

> OpenAIは、CodexがMailchimp、Microsoft Word、Spotify、Google Calendarなどのサービスやアプリと連携できることを示した。
> マイクロソフトが、Codexの能力を調査することに関心を持っていると伝えられている
[OpenAI can translate English into code with its new machine learning software Codex / ‘We see this as a tool to multiply programmers’](https://www.theverge.com/2021/8/10/22618128/openai-codex-natural-language-into-code-api-beta-access)より

- [Codex models and Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/work-with-code)
  - OpenAIの「Code Compilation」ページと書いてること一緒
- [Tutorial: Explore Azure OpenAI Service embeddings and document search](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/tutorials/embeddings?source=recommendations&tabs=command-line)
- [Quickstart: Get started using ChatGPT (preview) and GPT-4 (preview) with Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/chatgpt-quickstart?source=recommendations&tabs=command-line&pivots=programming-language-studio)
- [Learn how to prepare your dataset for fine-tuning](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/prepare-dataset?source=recommendations)
- [Learn how to work with the ChatGPT and GPT-4 models (preview)](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/chatgpt?source=recommendations&pivots=programming-language-chat-completions)

---

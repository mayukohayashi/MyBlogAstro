---
layout: "../../layouts/BlogPost.astro"
title: "Copilotつかってみようず！というLTをした"
description: "GithubCopilotを使ってみたよ、皆使ってみようず！というLTをしたよ"
pubDate: "May 08 2023"
tags: [Tech, AI, memo]
---

### Chat-GPT＋GithubCopilot

10分LP：

- 伝えたいこと：勉強目的でまず1ヶ月無料GithubCopilot体験してみると楽しいよ！

## 　組み合わせるのがよさげ

① ChatGPTで大まかな仕様を想定
まずは、ChatGPTに大まかな仕様を提示し、どういうスタートをきるか

``` markdown
下記の仕様内容でJavaScriptのゲームを作ろうと考えています。
実装のフローを教えてください。

フロー例：

1. 仕様検討：済
2. game.htmlというファイルの作成
3. Canvasの構築
4. キャンバス内に5px x 5pxのスネークヘッドを作成する

仕様：

- 言語：JavaScript
- ゲーム内容：スネークヘッド
- キャンバスを作成する
- キャンバス内に5px x 5pxのスネークヘッドを作成する
- ユーザーはキーボードの左右上下矢印キーでスネークヘッドを操作する
- エサは5px x 5pxの正方形で、ランダムにキャンバス内に出現する
- ユーザーはスネークヘッドをキーボードで操作し、えさを食べる。
  - エサと頭が接触すると、エサ分（1x1）スネークの体が伸びる
- ゲームオーバー条件
  - スネークヘッドがキャンバスの外に出るとゲームオーバー
  - スネークヘッドが自分の体に接触するとゲームオーバー
```

② Chat-GPTからの返答

``` markdown
1. HTMLファイルの作成
最初に、HTMLファイルを作成し、必要なスクリプトとスタイルを読み込みます。

2. Canvasの作成
Canvasを作成するには、HTMLファイル内にcanvas要素を追加します。それに加えて、JavaScriptでCanvasコンテキストを取得し、Canvasに描画する方法を定義する必要があります。

3. スネークヘッドの作成
スネークヘッドをCanvas内に描画するために、JavaScriptでCanvasのコンテキストを使用して、正方形を描画します。これにより、スネークヘッドが初期位置に描画されます。

4. キーボードイベントの追加
キーボードの矢印キーの押下を監視するには、JavaScriptでキーボードイベントリスナーを追加する必要があります。キーが押されたときに、スネークの方向を変更する関数を呼び出します。

5. エサの追加
エサをCanvas内にランダムに配置するために、JavaScriptでランダムなx座標とy座標を生成する必要があります。それに加えて、エサを描画するために、Canvasのコンテキストを使用して、正方形を描画します。

6. スネークの移動と成長
スネークの移動と成長を制御するために、JavaScriptで次のステップの座標を計算する必要があります。ステップごとに、スネークがエサに接触しているかどうかをチェックし、接触している場合は、スネークの体を1つ成長させます。

7. ゲームオーバーのチェック
ゲームオーバーになる条件をチェックする必要があります。スネークがCanvas外に出た場合や、自分自身に接触した場合は、ゲームオーバーとなります。

8. ゲームループの作成
最後に、ゲームループを作成し、スネークの移動、エサの生成、ゲームオーバーのチェックを継続的に実行します。ゲームループは、requestAnimationFrameメソッドを使用して作成することができます。

```

③ GithubCopilotでコードを生成

``` html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>game with chat-gpt</title>
  <style>
    * {
      padding: 0;
      margin: 0;
    }

    canvas {
      background: #eee;
      display: block;
      margin: 0 auto;
    }
  </style>
</head>
<body>

  <canvas id="gameWithChatGPT" width="480" height="320"></canvas>
  <script>

    // Canvasの取得
    const canvas = document.getElementById("gameWithChatGPT");
    // snakeHeadの作成
    const snakeHead = { x: 0, y: 0 };

    // snakeBodyの作成
    const snakeBody = [];

    // snakeの描画
    function drawSnake() {
      ctx.beginPath();
      ctx.rect(snakeHead.x, snakeHead.y, 10, 10);
      ctx.fillStyle = "#0f0";
      ctx.fill();
      ctx.strokeStyle = "#000";
    }

    // feedというエサの描画ファンクション
    function drawFeed() {
      // えさの大きさは1px x 1px
      ctx.beginPath();
      ctx.rect(feed.x, feed.y, 1, 1);
    }

    // キーボードの入力を受け取る
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(event) {
      if (event.key === "z") {
        paddle.dx = -paddle.speed;
      } else if (event.key === "x") {
        paddle.dx = paddle.speed;
      }
    }

  </script>
</body>
```

こんな感じで実際おみせしながら〜。
会社の経費でCopilot使えたりしたら裏山だぜ〜(´・ω・｀)

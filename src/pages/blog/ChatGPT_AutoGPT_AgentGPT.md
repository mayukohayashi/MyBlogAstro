---
layout: "../../layouts/BlogPost.astro"
title: "AutoGPT,AgentGPTについて軽く整理"
description: "Auto−GPTとAgentGPTについて軽く整理。おまけでGoalGPT"
pubDate: "April 23 2023"
tags: [Tech, AI, memo]
---

## Auto GPT

- GPT-4に情報探索・処理や長期記憶の手段を持たせている
- GPT-4の機能を活用して、ユーザーの介入なしに独立して機能できるAIエージェントを作成するツールです。
- AutoGPT は API を介して GPT-3.5 と GPT-4 を結合し、プロジェクトの改善と反復を可能にする。
- AgentGPTは作業に許可を求めず、勝手にどんどん進める（まかせっぱでおｋ）

<br>

1. ユーザーが設定したゴールをAIにいくつかの問い（タスク）に分解させる
2. それぞれの問いに回答を出させ、その結果を踏まえて追加で必要な問いを考えさせてタスクリストに追加する
という、自問自答のループを回している。

[ソース]
Significat Gravitas
<https://github.com/Significant-Gravitas/Auto-GPT>

- Python言語
- OSSの実験的アプリケーション
- OpenAIの大規模言語モデルGPT-4を活用

[特徴]

1. インターネット検索機能を搭載
2. ロングタームとショートタームメモリ機能を搭載
3. 一般的なテキストを生成するためにGPT-4を利用
4. 人気のサイトやプラットフォームにアクセスする機能を搭載⑤ファイルのストレージと要約のためにGPT-3.5を利用

[必要なもの]

- 環境 (好きな環境を選ぶ)
  - VSCode + devcontainer: It has been configured in the .devcontainer folder and can be used directly
  - Docker
  - Python 3.10 or later (instructions: for Windows)
  - OpenAI API key
- Option(必要であれば)
  - Memory backend (すきなのえらんでね)
    - Pinecone
    - Milvus
    - Redis
    - Weaviate

![画像で仕組み説明](https://bocek.co.jp/media/wp-content/uploads/2023/04/image-47.png)

---

## Agent GPT

- AgentGPTはAuto-GPTのブラウザ版」ではない
- AutoGPTは許可とフィードバックを都度求めます（複雑な動きに適している？）

[ソース]
[Reworked](https://www.reworkd.ai)
<https://github.com/reworkd/AgentGPT>

### 何がすごい

```
1. ユーザーが設定したゴールをAIにいくつかの問い（タスク）に分解させる
2. それぞれの問いに回答を出させ、その結果を踏まえて追加で必要な問いを考えさせてタスクリストに追加する
という、自問自答のループを回している
```

プラスで更に実践的なことをしている↓

- Google検索
- ウェブページの閲覧
- ファイルの読み書き
- Pinecone（ベクトルDB）の利用
- PythonやShellスクリプトの実行
- GPT-3.5へのプロンプト入力（コスト低減のため）

といった処理を行えるコマンドをGPT-4に使わせることで、情報の探索と処理を行いながら長期記憶も駆使して思考プロセスを進めるようにしている。

### 仕組み

AgentGPTでは3種類のプロンプトを組み合わせることで、探索的な思考を実現している

- startGoalPrompt（セットアップ・ゴール設定・タスク作成）
- executeTaskPrompt（タスク実行）
- createTaskPrompt（追加タスクの作成）

[startGoalPrompt]

[AgentGPT/src/utils/chain.ts : lines 20 - 24](https://github.com/reworkd/AgentGPT/blob/c7e6156a37b165a9987c8e10ea1341bdfe029261/src/utils/chain.ts#L20-L24)

``` ts
const startGoalPrompt = new PromptTemplate({
  template:
    "You are an autonomous task creation AI called AgentGPT. You have the following objective `{goal}`. Create a list of zero to three tasks to be completed by your AI system such that your goal is more closely reached or completely reached. Return the response as an array of strings that can be used in JSON.parse()",
  inputVariables: ["goal"],
});
```

[executeTaskPrompt]

[AgentGPT/src/utils/chain.ts : lines 34 - 38](https://github.com/reworkd/AgentGPT/blob/c7e6156a37b165a9987c8e10ea1341bdfe029261/src/utils/chain.ts#L34-L38)

``` ts
const executeTaskPrompt = new PromptTemplate({
  template:
    "You are an autonomous task execution AI called AgentGPT. You have the following objective `{goal}`. You have the following tasks `{task}`. Execute the task and return the response as a string.",
  inputVariables: ["goal", "task"],
});
```

[createTaskPrompt]

[AgentGPT/src/utils/chain.ts : lines 50 - 54](https://github.com/reworkd/AgentGPT/blob/c7e6156a37b165a9987c8e10ea1341bdfe029261/src/utils/chain.ts#L50-L54)

``` ts
const createTaskPrompt = new PromptTemplate({
  template:
    "You are an AI task creation agent. You have the following objective `{goal}`. You have the following incomplete tasks `{tasks}` and have just executed the following task `{lastTask}` and received the following result `{result}`. Based on this, create a new task to be completed by your AI system ONLY IF NEEDED such that your goal is more closely reached or completely reached. Return the response as an array of strings that can be used in JSON.parse() and NOTHING ELSE",
  inputVariables: ["goal", "tasks", "lastTask", "result"],
});
```

[AutonomousAgentクラス]
実際の思考プロセスはこのクラスの中で行われる

[AgentGPT/src/components/AutonomousAgent.ts : line 39 - 129]()

``` ts
 // Initialize by getting tasks
    try {
      this.tasks = await this.getInitialTasks();
      for (const task of this.tasks) {
        await new Promise((r) => setTimeout(r, 800));
        this.sendTaskMessage(task);
      }
    } catch (e) {
      console.log(e);
      this.sendErrorMessage(
        this.modelSettings.customApiKey !== ""
          ? `ERROR retrieving initial tasks array. Make sure your API key is not the free tier, make your goal more clear, or revise your goal such that it is within our model's policies to run. Shutting Down.`
          : `ERROR retrieving initial tasks array. Retry, make your goal more clear, or revise your goal such that it is within our model's policies to run. Shutting Down.`
      );
      this.shutdown();
      return;
    }

    await this.loop();
  }

  async loop() {
    console.log(`Loop ${this.numLoops}`);
    console.log(this.tasks);

    if (!this.isRunning) {
      this.sendManualShutdownMessage();
      this.shutdown();
      return;
    }

    if (this.tasks.length === 0) {
      this.sendCompletedMessage();
      this.shutdown();
      return;
    }

    this.numLoops += 1;
    const maxLoops = this.modelSettings.customApiKey === "" ? 4 : 50;
    if (this.numLoops > maxLoops) {
      this.sendLoopMessage();
      this.shutdown();
      return;
    }

    // Wait before starting
    await new Promise((r) => setTimeout(r, 1000));

    // Execute first task
    // Get and remove first task
    this.completedTasks.push(this.tasks[0] || "");
    const currentTask = this.tasks.shift();
    this.sendThinkingMessage();

    const result = await this.executeTask(currentTask as string);
    this.sendExecutionMessage(currentTask as string, result);

    // Wait before adding tasks
    await new Promise((r) => setTimeout(r, 1000));
    this.sendThinkingMessage();

    // Add new tasks
    try {
      const newTasks = await this.getAdditionalTasks(
        currentTask as string,
        result
      );
      this.tasks = this.tasks.concat(newTasks);
      for (const task of newTasks) {
        await new Promise((r) => setTimeout(r, 800));
        this.sendTaskMessage(task);
      }

      if (newTasks.length == 0) {
        this.sendActionMessage("Task marked as complete!");
      }
    } catch (e) {
      console.log(e);
      this.sendErrorMessage(
        `ERROR adding additional task(s). It might have been against our model's policies to run them. Continuing.`
      );
      this.sendActionMessage("Task marked as complete.");
    }

    await this.loop();
  }
```

[おおまかな思考プロセス]

1. 初期化処理としてゴール設定・タスク作成のプロンプトをAIに渡して、作成してもらったタスクリストを保持する
2. タスクを解くようにAIに指示し、その結果を受け取る
3. AIにゴール・直前に解いたタスクの内容・タスクの結果を渡しつつ、新しいタスクを考えて配列で返すように指示する。受け取った新しいタスクの配列をタスクリストに追加する
4. 2-3を、25回ループするかタスクリストが空になるまで実行する

![画像で仕組み説明](https://bocek.co.jp/media/wp-content/uploads/2023/04/image-46.png)
---

## Goal GPT

- 目標設定からリサーチ業務までをAI同士が会話をしながら完全自動で行ってくれるAIサービス
- 使い勝手が良い（といわれている）
  - 理由：
    - ゴールベースで、プロンプト走らせるから
    - 日本語もわりと使えるから

[GoalGPT]<https://beta.nando.ai/goalgpt.php>]
[GoalGPT Twitter](https://twitter.com/nando_ai)

## 参照

- [「Auto-GPTとAgentGPTは別物です」という話](https://zenn.dev/kecy/articles/7349a3969e2de6)
- [AutoGPT が特別な理由](https://mpost.io/ja/what-makes-autogpt-so-special/)
- [AutoGPTは何がすごいのか　実際に非エンジニアが「記者ボット」を自作してみた](https://community.exawizards.com/aishinbun/autogpt%E3%81%AF%E4%BD%95%E3%81%8C%E3%81%99%E3%81%94%E3%81%84%E3%81%AE%E3%81%8B%E3%80%80%E5%AE%9F%E9%9A%9B%E3%81%AB%E9%9D%9E%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%81%8C%E3%80%8C%E8%A8%98/)
- [Auto-GPTのようなアイディアはOpenAIでは1年ぐらい前から話されていたそう](https://twitter.com/shanegJP/status/1646757162109263874?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1646757162109263874%7Ctwgr%5Edb65c4eefe2985542eb64fb256210701858e2023%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fembed.zenn.studio%2Ftweetzenn-embedded__c393e4c7c518e)
- [アプリを作ってもらう・・・人間はみるだけや！](https://twitter.com/VarunMayya/status/1643902198164717569?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1643902198164717569%7Ctwgr%5E43f89fc33fd035e9698b7dbce04386df958dfe22%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fmpost.io%2Fja%2Fautogpt-E3818CE789B9E588A5E381AAE79086E794B1%2F)
- [【完全自動型AI】AutoGPTを徹底解剖！使い方をご紹介](https://bocek.co.jp/media/exercise/902/)

### おまけ

- [Vector databases are so hot right now. WTF are they?](https://www.youtube.com/watch?v=klTvEwg3oJ4)
  - 「なんでVectorDBがいまこんな流行ってんの！？」ビデオ
  - 俺プロンプトエンジニアリングもやってるけど、まじできつい！って言っててなんか可愛い奴

- VectorDB(有名なやつ)
  - OSS
    - Weaviate(GO)
    - Milvus(GO)
  - Pinecone
  - Chroma

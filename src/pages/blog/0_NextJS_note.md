---
layout: "../../layouts/BlogPost.astro"
title: "0: Next.js Learning Note: About Next.js / JS -> React"
description: "Next.js公式ドキュメントより、[About Next.js][From JavaScript to Next.js]"
pubDate: "May 11 2023"
tags: [Tech, learning, Next.js, note, React]
---

# Introduction

## Next.jsとは

めっちゃフレキシブルなReact framework。
ブロックを組み立てるように簡単に爆速でWebAppを作ることができる。

## モダンなWeb Appに必要な要素

- User Interface: how users will consume and interact with your application.
- Routing: how users navigate between different parts of your application.
- Data Fetching: where your data lives and how to get it.
- Rendering: when and where you render static or dynamic content.
- Integrations: what third-party services you use (CMS, auth, payments, etc) and how you connect to them.
- Infrastructure: where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).
- Performance: how to optimize your application for end-users.
- Scalability: how your application adapts as your team, data, and traffic grow.
- Developer Experience: your team’s experience building and maintaining your application.（それはそう）

これら全ての要素に対して、今まで我々は個々にソリューションを求めたり、ライブラリーとかフレームワークとかを選定する必要があるよ。

## そもそもReactとは

ReactはJavaScriptのLibraryのひとつ。インタラクティブ性のたかいUIを作ることができます。
ここでいうUIとは、ユーザーがスクリーン上でインタラクトできる要素すべてを指します。

![](https://nextjs.org/static/images/learn/foundations/user-interface.png)

Reactを利用することによって、開発者は簡単にUIを調整できる。
特にReactはアプリケーション構築自体は自由度が高く、サードパーティのツールなども利用できる点が人気です。
ただ、これは完全なReactアプリケーションをゼロから構築するにはある程度の労力が必要であることを示している。このため開発者は、Reactだけを用いて開発する場合、一般的なアプリケーション要件に合わせて、ツールの構成とソリューションの再構築に時間を費やす必要がある。

## Next.jsとは

Next.jsとは、Webアプリケーションの構築をブロックを組み立てるように簡単にできる、そんなReactフレームワークです。

Next.jsは、Rectに必要なツールと構成を処理し、追加の構造・機能・アプリケーションの最適化をすることができる。

![](https://nextjs.org/static/images/learn/foundations/next-app.png)

Reactを使用し、UIを構築、次にNext.jsの機能を段階的に採用。
ルーティング、データの取得、統合などの一般的なアプリ要件を解決し、開発者は楽に！そしてエンドユーザーエクスペリエンスも向上させられる！

個人の開発でも大規模なチーム開発でも、ReactとNext.jsを活用すれば、インタラクティブで高度で動的、パフォーマンスの高いWebアプリを構築することができます。

----

# FROM javascript to React

## Rendering User Interfaces

どのようにReactが機能するかを理解するためには、まずはブラウザがどうコードを解釈しUIを作成するかという基礎知識が必要です。

ユーザーがWebページにアクセスすると、サーバは次のようなHTMLファイルをブラウザに返します。
![](https://nextjs.org/static/images/learn/foundations/html-to-dom.png)

次にブラウザはHTMLを読み取り、DOM（Document Object model）を読み込みます

## DOMとは

DOMとは、HTMLエレメンツをObject Representationしたものです。
コードとUIのブリッジ的なものとして機能し、親子関係をもつツリー構造になっています。
![](https://nextjs.org/static/images/learn/foundations/dom-to-ui.png)

DOMとJSなどのプログラミング言語を使用し、UIで特定の要素の選択・追加・更新および削除することによって、ユーザーイベントの検知、DOMを操ることができます。
例えば、DOMを操作して、ページコンテント自体をアップデートするみたいなこともできます、便利！

---

## やってみる

### DOMメソッドとJSを使った、UIの更新

★JSとDOMメソッドを使って、`h1`タグを追加する

1. `index.html`ファイルを用意します

``` html
<html>
  <body>
    <div></div>
  </body>
</html>
```

2. `id`（あとでターゲットする用）とJavaScriptタグをいれる

``` html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script type="text/javascript">
      const app = document.getElementById('app');
    </script>

  </body>
</html>
```

3. DOMメソッドを用いて、`<h1>`要素を追加

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script type="text/javascript">
      // Select the div element with 'app' id
      const app = document.getElementById('app');

      // Create a new H1 element
      const header = document.createElement('h1');

      // Create a new text node for the H1 element
      const headerContent = document.createTextNode(
        'Develop. Preview. Ship. 🚀',
      );

      // Append the text to the H1 element
      header.appendChild(headerContent);

      // Place the H1 element inside the div
      app.appendChild(header);
    </script>

  </body>
</html>
```

## DOM vs HTML

[検証]（ブラウザの開発者ツール）でElementsを見ると、DOMに`<h1>`要素がふくまれているのがわかります。
ページ的なDOMは、ソースコードつまり作成した元のHTMLファイルとは異なります。

![](https://nextjs.org/static/images/learn/foundations/source-code.png)

何故このようなちがいが起こるのか…。
これは、HTMLがInitial Page Contentを出すのに対し、DOMは作成したJSコードによって変更がかかった、更新されたページコンテンツを表すことができるためです。

PlainなJSでDOMを更新することは簡単ですぐできますが、冗長です。
チームが大きくなればなるほど、冗長的な記述はどんどん困難になります。

開発者は、コンピューターに「どのように」動作するかを支持する命令を書くばかりになるより、
開発者が表示したいものは「何」かを記述し、コンピューター自身に「どのように」DOMを更新すればよいかを理解させる方がよくないでしょうか？

## Imperative(命令型) vs Declarative(宣言型) Programming

このコード（`h1`要素を追加するため先程追記したもの）は命令形プログラミングの良い例です。
ユーザー インターフェイスをどのように更新するかの手順を書いています。

しかし、ユーザーインターフェイスの構築に関しては、開発プロセスを高速化できるため、宣言型アプローチが好まれることがよくあります。DOM メソッドを記述する代わりに、開発者が表示したいもの(この場合はh1テキストを含むタグ)を宣言できると便利です。

- 命令型プログラミングは、シェフにピザの作り方を段階的に指示するようなもの
- 宣言型プログラミングは、ピザを作るために必要な手順を気にせずにピザを注文するようなもの

そして、
**開発者がユーザーインターフェイスを構築するのに役立つ一般的な宣言型ライブラリはReact**です

### React: A declarative UI library

開発者は、UI上で何をしたいか、Reactに簡単に伝えることができます。
Reactは、DOMを更新する方法をあなたに代わって見つけてくれます。

---

## Reactをはじめる

1. Scriptの読み込み
Reactを利用するにはまず、[unpkg.com](https://unpkg.com)から、Reactスクリプトを読み込む必要があります

- react : コアとなるReact Library
- rect-dom : ReactでDOMを使用できるようにするため、DOM固有のメソッドが提供されています。

``` html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <script type="text/javascript">
      const app = document.getElementById('app');
    </script>

  </body>
</html>
```

2. `ReactDOM.render()`メソッドの使用
直接プレーンなJSを使ってDOMを操作するのではなく、`ReactDOM.render`(1で読み込んでいる`react-dom`より)を用いて、#app(idで指示している)内に`<h1>`をいれこんでもらうよう指示します。

``` html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <script type="text/javascript">
      const app = document.getElementById('app');
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);
    </script>

  </body>
</html>
```

しかしこれをRunさせようとするとこのようなErrorがでてくるかと思います。
![](https://nextjs.org/static/images/learn/foundations/error.png)

原因は`<h1>...</h1>`のコード記述はJSではなく、JSXのものだからです

## JSXとは何か

JSXとは、使い慣れたHTMLと似たSyntaxを用いてUIについての記述ができるJavaScriptのSyntax Extensionです。
JSXを利用する利点は

1. Return a single root element
2. Close all the tags
3. camelCase all most of the things!
上記[３つのルール](https://beta.reactjs.org/learn/writing-markup-with-jsx#the-rules-of-jsx)に従う以外、新しいシンボル・シンタックスなどを覚えるなど、HTMLとJavaScriptの知識以外になにかを別に身につける必要がありません。

Note: ブラウザはJSXを理解しません。なのでJavaScriptのコンパイラを用いる必要があります（例：[Babel](https://babeljs.io))

## Babelをプロジェクトに追加する

Babelをプロジェクトに追加するために、以下を`index.html`に記載します

``` html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

```

追加で、スクリプトタイプを変更し、どのコードを具体的に変換したいかをBabelに教えてあげる必要があります。
`type = text/jsx`の部分です。

以下のような構成になります。

``` html
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel Script -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
      const app = document.getElementById('app');
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);
    </script>
  </body>
</html>
```

ブラウザでコードを実行すると、正しく動作していることが確認できると思います。

☆比較☆

- 先程書いた、宣言型（declarative）Reactコード

``` javascript
<script type="text/jsx">
  const app = document.getElementById("app")
  ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app)
</script>
```

- 以前書いた、命令型（imperative）JavaScriptコード

``` javascript
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const headerContent = document.createTextNode('Develop. Preview. Ship. 🚀');
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```

両者を比べると、Reactを利用することで、多くの繰り返しコードを削除できることがわかります。
Reactとは、ライブラリです。このライブラリは、再利用可能なコードスニペットを持っており、ユーザーに変わってタスク（この場合はUIの更新）を実行することができます。

> **Note:**
>
> React が UI を更新する方法を正確に知る必要はありませんが、詳細を知りたい場合は、React ドキュメントの[UIツリー](https://beta.reactjs.org/learn/preserving-and-resetting-state#the-ui-tree)セクションを参照してください。

---

## Essential JavaScript for React

JavaScriptとReactを同時に学習することもできますが、JavaScriptに精通していると、Reactの学習プロセスがより簡単になります。

次のセクションでは、JavaScriptの観点から Reactのいくつかのコア概念を紹介します。言及されるJavaScriptトピックの要約を以下に示します。

- [Functions and Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Arrays and array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Ternary Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [ES Modules and Import / Export Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

このコースではJavaScriptについて詳しく説明しませんが、JavaScriptの最新バージョンを常に把握しておくことをお勧めします。
しかし、JavaScriptに習熟してないから、Reactを使わない！なんてナンセンスです。ガンガン攻めましょう！！

---

## React Core Concepts

Reactでアプリケーションを作成するにあたって、よく理解し慣れ親しむ必要があるコアとなるコンセプトは大きく３つあります。

- Components
- Props
- State

---

## Componentsを用いたUIの構築

ユーザーインターフェース(UI)は、コンポーネント(Components)と呼ばれるより小さなブロックに分割することができます。

コンポーネントを利用すると、自己完結型（self-contained）の再利用可能なコードスニペットを作成できます。コンポーネントをLEGOブロックのように考えるとしっくりきます。これら個々のブロックを組み合わせ、より大きな構造を形成する感じです．
UIの一部を更新する必要がある場合は、特定のコンポーネントを選びそれを更新すれば良いのです

![](https://nextjs.org/static/images/learn/foundations/components.png)

このようなモジュール性(modularity)により、アプリケーションの他箇所（更新などの必要のない残りの部分）にふれる事なく、該当のコンポーネントのみを簡単に追加・更新・削除することができるため、保守がより容易です。

Reactコンポーネントの良いところは、それらはただたんにJavaScriptであるということです。

では、JSの観点からReactコンポーネントを作成する方法を見ていきましょう。

## コンポーネントの作成

Reactではコンポーネントは**関数**(Components are **functions**)です。
`script`tag内に`header`と呼ばれる関数を書きましょう。

``` javascript
<script type="text/jsx">
  const app = document.getElementById("app")


  function header() {
  }

  ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app)
</script>
```

コンポーネントはUI要素を返す関数(a function that returns UI elements)です。 header関数のreturn statement内でJSX記述します。

``` javascript
<script type="text/jsx">
  const app = document.getElementById("app")

  function header() {
     return (<h1>Develop. Preview. Ship. 🚀</h1>)
   }

  ReactDOM.render(, app)
</script>
```

このコンポーネントをDOMにレンダリングするには、`ReactDOM.render()`内の第一引数(first argument)として渡す必要があります。

``` javascript
<script type="text/jsx">

  const app = document.getElementById("app")

  function header() {
     return (<h1>Develop. Preview. Ship. 🚀</h1>)
   }

  {// ここの引数です。}
   ReactDOM.render(header, app)
</script>
```

けど、、、ちょっとまってください！
もし、上のコードをブラウザでは知らせようとすると、エラーがでますよね。エラーをださないために必要な作業は２つあります。

１つ目。
Reactコンポーネントは、PlaneなHTML・JavaScriptと区別するため、大文字にする必要があります

``` javascript
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

//大文字にしましょう。↑も勿論同様です。 Capitalize the React Component
ReactDOM.render(Header, app);
```

２つ目。
Reactコンポーネントを利用する際、通常のHTMLタグを使用するのと同じで`<>`を使います。

``` javascript
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}
//引数として利用する際は<>を使う
ReactDOM.render(<Header />, app);
```

## Nesting Components

通常、アプリケーションは、単一のコンポーネントで出来ていることは少なく、そのほとんどは多くのコンテンツを持っています。
コンポーネントは、通常のHTML要素と同じように、**入れ子(Nesting)**に、することが可能です

今回の例では、`HomePage`と呼ばれる新しいコンポーネントを作成します。

``` javascript
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function HomePage() {
  return <div></div>;
}

ReactDOM.render(<Header />, app);
```

次に、`<Header>`を`<HomePage>`の中に入れこみます。

``` javascript
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header />
    </div>
  );
}

ReactDOM.render(<Header />, app);
```

## Component Trees

こういった方法でReactコンポーネントをネストし続け、コンポーネントツリーを形成することができます。

![](https://nextjs.org/static/images/learn/foundations/component-tree.png)

例えば、最上位にある`HomePage`コンポーネントは`Header`, `Article`, `Footer`コンポーネントを保持することが出来ます。
そして各コンポーネントは、独自の子コンポーネントを持つことができます。例えば、`Header`コンポーネントは、'Logo', `Title`, `Navigation`コンポーネントを保持することができます。

このモジュラー形式(modular format)によって、アプリ内の様々な場所でコンポーネントを再利用することができます。

今回の例では、`<HomePage>`は最上位のコンポーネントですので、これを`ReactDOM.render()`に渡すことが可能です。

``` javascript
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}

ReactDOM.render(<HomePage />, app);
```

---

# propsを利用したデータの表示

今の所、もし`<Header />`コンポーネントを再利用したい場合、以下のようにするのですが、これだと同じ内容が表示されるだけです。

``` javascript
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
      <Header />
    </div>
  );
}
```

しかし、別のテキストを渡したい場合や、外部ソースからデータを取得しているため事前に何が入るかなど情報がわからない場合、どうしたらよいのでしょうか？

通常のHTML要素には、属性(attributes)があります。この属性は、要素の行動を変更する情報を渡すために利用されます。例えば、`<img>`要素内の`src`属性を変えれば、表示させる画像を変更できますし、`<a>`tag内の`href`属性を変更すると、リンク先を変更できます。

それと同じように、情報をプロパティとして、Reactコンポーネントにわたすことができます(you can pass pieces of information as properties to React components)
これらを、**`props`**と呼びます。

![](https://nextjs.org/static/images/learn/foundations/props.png)

JSの関数と同様、コンポーネントの動作（component's behavior）を変更したり、画面にレンダリングされるときに視覚的に表示されるものを変更する、カスタム引数(custom arguments)もしくはpropsを受け入れるコンポーネントを設計することができます。
そして、これらのpropsを親コンポーネントから子コンポーネントにわたすことができます。

> **Note:**
>
> Reactでは、データはコンポーネントツリーを下に向かって流れます。
> これは一方向データフロー(one-way data flow)とよばれるものです。

## propsを使う

`HomePage`コンポーネント内では、`HTML`attributes(属性)を渡すことができたように、カスタム `title`プロップを`Header`コンポーネントにわたすことができます。

``` javascript
// function Header() {
//   return <h1>Develop. Preview. Ship. 🚀</h1>
// }

function HomePage() {
  return (
    <div>
      <Header title="React 💙" />
    </div>
  );
}

// ReactDOM.render(<HomePage />, app)
```

そして子コンポーネントである`Header`は、これらのpropsを最初の関数パラメーター(function parameter)として受け入れることができます。

``` javascript
function Header(props) {
//   return <h1>Develop. Preview. Ship. 🚀</h1>
// }

// function HomePage() {
//   return (
//     <div>
//       <Header title="React 💙" />
//     </div>
//   )
// }

// ReactDOM.render(<HomePage />, app)
```

`console.log()`を使うとわかるのですが、propsは、titleプロパティをもつObjectであることがわかります。

``` javascript
function Header(props) {
    console.log(props) // { title: "React 💙" }
//   return <h1>React 💙</h1>
// }

// function HomePage() {
//   return (
//     <div>
//       <Header title="React 💙" />
//     </div>
//   )
// }

// ReactDOM.render(<HomePage />, app)
```

propsはオブジェクト（Object）であることから、オブジェクトの分解(Object destructuring)を利用し、関数パラメータ(function parameters)内のpropsの値に明示的に名前をつけることができます。

``` javascript
unction Header({ title }) {
    console.log(title) // "React 💙"
//  return <h1>React 💙</h1>
// }

// function HomePage() {
//   return (
//     <div>
//       <Header title="React 💙" />
//     </div>
//   )
// }

// ReactDOM.render(<HomePage />, app)
```

次に、`<h1>`タグのコンテンツをタイトル変数(title variable)に置き換えることができます。

``` javascript
function Header({ title }) {
  console.log(title);
  return <h1>title</h1>;
}
```

この状態でプロジェクトを開くと、実際の単語である[title]と表示されていることを確認できます・・・いやそれ出したいんちゃうねん・・・です。
これは、プレーンテキスト文字列をDOMにレンダリングしようとしているのだなとReactが判断するためです。

これがJavaScriptの変数であることをReactに示してあげる必要があります。

## JSXでの変数の使用

定義した変数を使用するには、中括弧`{}`を利用します。これはJSXマークアップに通常のJavaScriptを直接記述するやめの特別なJSX構文(special JSX Syntax) です。

``` javascript
// function Header({title}) {
//  console.log(title)
return <h1>{title}</h1>;
// }
```

「JSX Land」滞在中ですが、{}を使うことによって「JavaScript Land」に入ることもできるよ！という感じ。
{}内に、任意のJavaScript式（JavaScript expression) (単一の値として評価されるもの = something that evaluates to a single value) を、追加できます。

1. ドット表記の**Object Property**(An **object property** with dot notation.)

``` javascript
function Header(props) {
  return <h1>{props.title}</h1>;
}
```

2. **テンプレート**リテラル(A **template** literal)

``` javascript
function Header({ title }) {
  return <h1>{`Cool ${title}`}</h1>;
}
```

3. 関数の**戻り値**(The **returned value** of a function)

``` javascript
function createTitle(title) {
  if (title) {
    return title;
  } else {
    return 'Default title';
  }
}

function Header({ title }) {
  return <h1>{createTitle(title)}</h1>;
}
```

4. **三項演算子** (**ternary operators**)

``` javascript
function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}
```

こんな感じで、titleプロップに文字列を渡すことができるようになりました。
以下三項演算子を用いた例です。

``` javascript
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}
```

コンポーネントで、アプリケーションのさまざまな部分で再利用できる一般的なtitleプロップ（a generic title prop）を使用することができます。
タイトルを変えさえすればいいです

``` javascript
function HomePage() {
  return (
    <div>
      <Header title="React 💙" />
      <Header title="A new title" />
    </div>
  );
}
```

## リストの繰り返し(Iterating through lists)

リストとして表示すべきデータを用いる必要がある事例はよくあります。
配列メソッドを使用して、データを操作し、スタイルは同じですが、異なる情報を保持するUI要素を簡単に生成できます。

> **Note:**
>
> Reactは、データ取得に関しての大きな取り決めなどはありません。つまり、解決法に併せて、すきな方法を取れるということです。
> 後々、Next.jsでのデータフェッチオプション（data fetch option）についてやりますが、今段階では単純な配列(simple array)を使用してデータを表示させます。

`HomePage`コンポーネントに名前が入ったの配列を追加します:

``` javascript
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
    </div>
  );
}
```

次に、`array.map()`メソッドを使用して配列を反復(iterate)し、*矢印関数(arrow function)*を使用して名前をリストアイテムにマッピングすることができます：

``` javascript
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

[JavaScriptランド]と[JSXランド]を行き来するために、{}をどのように使用しているかに注目してください。
上記コードを実行すると、Reactは`key`propがMissingやでーと警告してきます。
これはなぜ起こるかというと、Reactは配列内のアイテムを一意に識別(to uniquely identify)する必要があり、それによりReactはどの要素をDOM内でUPDATEするか理解するからです。

今回入っている名前群は一意のものであるため使用することはできますが、将来的にはitem IDなどを用い一意であることが保証されている状態にすることをおすすめします。

``` javascript
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

Q. Reactにとってのpropsとはどういう役割をもったものでしょうか？
A. コンポーネントに情報を渡す存在（Passing information to component）

---

# Stateを使ってインタラクティブ性を追加する（Adding Interactivity with State）

例：Homepageコンポーネント内にまずボタンを追加し、`return()`ステートメント内にボタン要素をいれます。

``` javascript
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button>Like</button>
    </div>
  );
}
```

## Listening to Events

ボタンをクリックしたときに、何かを起こすには、`onClick`属性を追加します。

``` javascript
function HomePage() {
  // ...
  return (
    <div>
      {/* ... */}
      <button onClick={}>Like</button>
    </div>
  );
}
```

Reactでは、イベント名はCamelケースで書きます。この`onClick`イベントはユーザーの操作（User interaction）に応答するために使う事ができるものです。有名！めっちゃ使う！

例えば、`onCharge`はインプットフィールドに使用され、`onSubmit`はフォームに利用されます。

## Handling Events

EventがTriggerされるたび、イベントを処理（Handle）する機能があり、それを定義することができる。return statementの前に呼ばれる'handleClick()'というFunctionを作成します。

``` javascript
function HomePage() {
  // ...

  function handleClick() {
    console.log("increment like count")
  }

  return (
    <div>
      {/* ... */}
      <button onClick={}>Like</button>
    </div>
     )
   }
```

そして、`onClick`イベントがトリガーされたとき、`handleClick`が呼ばれるようにします。

``` javascript
function HomePage() {
  //    ...
  function handleClick() {
    console.log('increment like count');
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Like</button>
    </div>
  );
}
```

## State and Hooks

Reactにはhooksと呼ばれるファンクションセットが存在します。
Hooksを利用することで、コンポーネント内で状態(state)を管理することができます。Stateは、通常ユーザーの操作によって何かが起こる、UI内の時間の経過とともに変化していく情報と考えることができる。

![](https://nextjs.org/static/images/learn/foundations/state.png)

stateを使って、ユーザーが[いいね！]ボタンをクリックしたときのカウント増加とその情報を保存できます。
実際に、これはStateを管理するためのReact hookであり`useState()`と呼ばれています

``` javascript
function HomePage() {
  React.useState();
}
```

`useState()`は配列を返します。そして、配列構造化(**array destruction**）を使用してコンポーネント無いの配列値（array value）にアクセスし、それを使うことができます。

``` javascript
function HomePage() {
  const [] = React.useState();

  // ...
}
```

配列(Array)の最初の項目は`value`状態(state)です。これにはどんな名前をつけることもできます。説明的なわかりやすい名付けをしましょう。

``` javascript
function HomePage() {
  const [likes] = React.useState();

  // ...
}
```

配列(Array)の２番目の項目は、`update`関数です。これは、1番目の`value`状態(state)を更新するために使用されます。これにはどんな名前をつけることもできますが、`set`をPrefixとして用い、その後何をUpdateするのかがわかりやすいような名付けにすべきです。

``` javascript
function HomePage() {
  const [likes, setLikes] = React.useState();

  // ...
}
```

`useState()`の引数には、初期値を渡すことができます。例えば、`0`を渡すと、`likes`の初期値は`0`になります。

``` javascript
function HomePage() {
  const [likes, setLikes] = React.useState(0);

  // ...
}
```

そして、コンポーネント無いで状態変数(the state variable)を使うことによって、初期状態(Initial state)が動いていることがわかります。

``` javascript
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);

  return (
    // ...
    <button onClick={handleClick}>Like({likes})</button>
  );
}
```

最後に、状態更新関数（State updater function）を呼ぶことができる。`HomePage`コンポーネント内の`setLike`を呼び出して、以前に定義した`handleClick`関数内に追加しましょう。

``` javascript
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}
```

これで、ボタンをクリックするたびに、`handleClick`関数が呼び出され、`setLikes`がアップデートされます、その結果`likes`の値が増加されます。

> Note:
> ***********
>　最初の関数パラメーター(function parameter)として、コンポーネントに渡されるpropsとは違い、Stateはコンポーネント内で開始・保存されます。
> State情報をPropsとして子コンポーネントにわたすこともできますが、Stateを更新するためのロジックは、Stateが最初に作成されたコンポーネント内に保持しておく必要があります。

---

### 参照

- DOMを操るとは。Manipulating documents：mdn web docs
- <https://developer.mozilla.org/en-US/docs/Learn/javascript/Client-side_web_APIs/Manipulating_documents>

- DOMとは：mdn web docs
  - <https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction>

- Get started with viewing and changing the DOM: Chrome developer
  - <https://developer.chrome.com/docs/devtools/dom/>

- React(公式)
  - <https://beta.reactjs.org>

- Reacting to Input with State: React
  - <https://beta.reactjs.org/learn/reacting-to-input-with-state#how-declarative-ui-compares-to-imperative>

- Writing Markup with JSX "The Rules of JSX"(React)
  - <https://beta.reactjs.org/learn/writing-markup-with-jsx#the-rules-of-jsx>

- Babel(公式)
  - <https://babeljs.io>

- The UI tree: React docs
  - <https://beta.reactjs.org/learn/preserving-and-resetting-state#the-ui-tree>

- Your First Componen: React docs
  - <https://beta.reactjs.org/learn/your-first-component>

- Importing and Exporting Components: React docs
  - <https://beta.reactjs.org/learn/importing-and-exporting-components>

- Adding Interactivity
  - <https://react.dev/learn/adding-interactivity>

- Managing State
  - <https://react.dev/learn/managing-state>

---

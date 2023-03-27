---
layout: "../../layouts/BlogPost.astro"
title: "2: Microsoft Tutorialノート"
description: "2：Introduction to .NETより"
pubDate: "Mar 17 2023"
tags: [Tech, learning, .NET, note]
---

# Introduction to .NET

<p>In this module, you'll learn about:

- .NET and its ecosystem
- The technical aspects of the system
- Each part's role in helping you build and deploy your software
- The .NET ecosystem as a whole, including the resources that can help you learn
- How to contribute to this ecosystem.</p>

<br>

<p>By the end of this module, you'll be able to:

- Describe the major parts of .NET and its ecosystem
- Explain how .NET languages and the .NET compiler, runtime, and libraries work together to produce a running application
- Choose when it makes sense to use .NET to build your applications.</p>

## What is .NET

> When someone uses the term .NET, what they mean greatly depends on context.
>
> In this unit, you'll learn about .NET by looking at it as an ecosystem.
>
> In other words, you'll learn that .NET is a collection of many parts and people that together create a powerful environment for building applications.

<br>

> 📝 Note
>
> .NET is an ecosystem for application development

<br>

### Use .NET languages and compilers to run applications in the .NET runtime

開発者は、C#やF#などの.NET言語を使用してソースコードを記述する。
Software developersがコードを実行する前に、まずコードをCompileする必要がある。
.NET Compilerはソースコードを<abbr title="intermediate language">中間言語(IL)</abbr>と呼ばれる特別な言語に変換するプログラムだ。
.NETコンパイラは、ILコードを.NET Assemblyと呼ばれるファイルに保存する。<br>
コードを"Intermediate" formatにコンパイルすることにより、コードの実行場所（例えば、WindowsまたはLinux。32bit, 64bit等ハードウェアや実行場所に関係なく、同じコードベースで利用できる。

<br>

**.NET runtime**は、コンパイルされたNET assemblyの実行環境。
.NET runtimeはホストオペレーションシステム上で動く際、アプリを実行し、アプリケーションを管理する役目をもっている。
<br>
幸いなことに、.NETを使い始めたばかりのソフトウェアエンジニアにとって、これらのメカニズムが最初どう機能するか理解する必要はない。
経験を積むことによって.NET元ととコンパイラーの根本的な力と、runtimeをより完全に理解できるようになる。

<br>

> 💡 Tip：
>
> C#プログラミング言語は.NETであると誤った考えをもつ人がいる。た
> C#と.NETは異なる。C#はプログラミング言語、構文の一部として、.NETコードライブラリまたはアセンブリで定義されたメソッドを参照および呼び出すことができる。
>
> さらに、.NET SDKにインストールされているC#コンパイラを使用して、C#コードからアセンブリを作成しできる。そして.NETランタイムは.NETアセンブリを実行する。
> これらの違いを理解することで、.NETとC#について詳しく学ぶときに、重要な概念に気づくことができるようになるだろう。

<br>

### .NETアプリケーションフレームワークとライブラリを使用して、事前に構築された機能利用する

All software is built in layers, meaning software runs at various levels of abstraction on a computer:

1. **At the lowest level,** software communicates directly with your computer's hardware. It controls the flow of data on the motherboard, processors, memory, and hard drives.
2. At the next level, software allows the end user to provide instructions through an operating system.
3. At the next level, software like .NET provides a way for you to develop and run applications.
4. At the next level, application frameworks and libraries of functionality allow you to quickly build rich applications by using less effort than older development methods allowed.
<br>

コードライブラリは、特定の目的の昨日を単一アセンブリ（single assemnly）にカプセル化する(encapsulate)。
.NETの場合、何千ものライブラリを使用することができる。（これらのライブラリは、ファーストパーティまたはサードパーティである可能性があり、商用またはオープンソースである可能性がある）

ライブラリは、アプリケーションで使用できる幅広い機能を提供することができる。ユーザーはこれらのアセンブリを参照し、必要なMethodを呼び出すだけで良い。このようにして他のソフトウェアエンジニアの作業に基づいてビルドできる。
ユーザーは、全ての機能を構築し維持する必要がないため、時間とエネルギーを節約できる！

**Application framework**は、starter projects, file templates, code generators、およびその他のツールとともに、いくつかの関連するライブラリが組み合わさってできている。
これらのリソースを使用して、アプリケーション全体を構築できる。
こういったApplication frameworksは**App Model**と呼ばれている。
たとえば、人気のある.NETアプリケーションフレームワークは、Web開発、デスクトップおよびモバイル開発、ゲーム開発、などといったApp modelで利用できる。
<br>

方法：

- .NET SDKを直接インストールする
- Visual Studio 2022をインストールする

.NET SDKはbase class libraryと呼ばれる包括的なライブラリとApplication frameworkのセットをpreinstallする。このライブラリはビルドするビルドするプラットフォームやアプリモデルに関係なく、プログラムで使用できる、

### What are the major app models?

|App model|Framework|Notes|
|:----|:----|:----|
|Web|ASP.NET Core|The framework for building server-side logic.|
|Web|ASP.NET Core MVC|The framework for building server-side logic for web pages or web APIs.|
|Web|ASP.NET Core Razor Pages|The framework for building server-generated HTML.|
|Web client|Blazor|Blazor is a part of ASP.NET Core. Its two modes allow for either Document Object Model (DOM) manipulation via sockets as a communication vehicle for running server-side code, or a WebAssembly implementation for running compiled C# on a browser.|
|Desktop|WinForms|A framework for building "battleship gray" Windows-style applications.|
|Desktop|Windows Presentation Foundation (WPF)|A framework for building dynamic desktop applications that conform to different form factors. WPF allows form elements to perform movement, fades, glides, and other effects with the help of a rich library of animations.|
|Mobile|Xamarin|Allows .NET developers to build apps for iOS and Android devices.|

さらに.NETはUnityのような人気のあるThird-Partyおよびオープンソースの開発環境・エンジンをより強化できる。

### Use .NET tools to build .NET apps

ソフトウェアエンジニアは、コードの記述、コードライブラリへの参照の追加、コードのコンパイル、およびデバッグコードなど様々なツールに依存している。
このセクションでは、.NETアプリケーションのビルドに使用するいくつかの.NETツールについて説明する。

Visual Studio 2022は、Microsoftのフラグシップ開発環境だ。何百万もの開発者がこれを使用して.NETアプリケーションを構築している。
グラフィカルユーザーインターフェイス(menu、windows、Visual designers、dialog boxes、wizardsなども含め)は、アプリケーション開発プロセスを開発者に示す。
Visual Studio 2022には、3つのエディションがある：Community, Professional, and Enterprise。各エディションにはさまざまなツールが含まれており、さまざまな目的でライセンスされている。
Command-line workflowを好む開発者は、世界で最も人気のあるCode EditorであるVisual Studio Codeと、**.NET CLI**と呼ばれる.NET command-line interfaceのを組み合わせ使用することもできる。

さらに、高度な.NETユースケースに対し、多数のFirst-partyおよびThird-partyのツールの中から選択することができる。
オプションとして、code profilers, unit test runnersや、code coverage analyzersなども含まれている。

### Find solutions and answers in documentation and tutorials

Microsoftは、豊富なドキュメント、チュートリアル、トレーニングを積極的に提供している。

|Resource|Purpose|
|:----|:----|
|[Microsoft Learn](https://learn.microsoft.com/en-us/)|Provides quick-start tutorials and definitive reference documentation.|
|[Patterns and Practices](https://learn.microsoft.com/en-us/azure/architecture/)|Helps developers and software architects find solutions to common application development needs. Resources often transcend the low-level details of writing code and delve into choosing products and services that enable seemingly infinite scalable architectures.|
|[.NET Videos](https://dotnet.microsoft.com/learn/videos)|Provides video tutorials from the .NET team. These videos walk developers through common usage scenarios.|
|[Microsoft Learn](https://learn.microsoft.com/en-us/training/paths/get-started-c-sharp-part-1/)|Provides hands-on labs to help you build your skills by combining instruction, exercises, media, knowledge checks, and a means of tracking your progress.|

### How does the .NET ecosystem compare to others?

ソフトウェア開発の世界に精通している場合は、.NETエコシステムが他のエコシステムとどのように比較されるのか疑問に思うかもしれない。率直にいうと、他のエコシステムは同じようなもの、もしくは似ている点が多いといえる。

しかし、.NETの最も特徴的な機能の1つは、継続的な開発とアップデート、それからサポートが主要なリーダー層からだけでなく、コミュニティからももたらされることだ。.NETの重要な部分はこれがオープンソースで開発されていること。コミュニティのインプットと貢献は歓迎され、奨励されている、実際、開発に携わている87%はMicrosoftの社員ではない。
コミュニティのインプットに基づいて、feature enhancements, bug fixes,そして performance improvementsが前進する。これまでコミュニティから100,000以上のプルリクエストを受けている。

<br>

Additionally, the .NET ecosystem has momentum:

- .NET developers number more than 5 million!
- The results of Stack Overflow polls in 2019 and 2020 showed that .NET Core is the most loved framework.
- Students love .NET; 40 percent of developers who are new to .NET are students.
- The GitHub repositories for .NET and ASP.NET are ranked among the top 30 highest-velocity open-source software (OSS) projects.
- GitHub lists C# in the top five programming languages, and the language is increasing in popularity according to the 2020 TIOBE programming community index.
- .NET has the fastest web framework on the planet according to TechEmpower benchmarks, an independent, open-source set of web performance benchmarks that measure dozens of languages and application frameworks.

### A brief history of .NET

オリジナルの.NET Frameworkは、2002年初旬に初めてリリースされました。それ以来、多くのアップデートとより多くの機能が続いています。長年の拡張と新機能の後、元の.NET Framework、特にキーコードライブラリが大幅に成長しました。

2002年以降、Microsoftはクロスプラットフォーム互換のバージョンの.NETの作成に取り組みました。. 目標は、開発者が1つのコードベースを記述し、macOS、Linux、およびWindowsオペレーティングシステム全体で使用できるようにすることでした。

これらの取り組みを通じて、.NET Coreが2014年頃に紹介されました。Microsoftは元の.NET Frameworkを維持していますが、新機能と改善は.NET Core用に予約されています。'Core'は後に名前から削除されました。(= .NETとなった)
次のメジャーバージョンは.NET 5、.NET 6、.NET 7などです。
バージョンは通常、毎年11月にリリースされます。

.NETの歴史について言及する価値があるのはなぜですか？
.NET Frameworkをターゲットにしたブログの投稿、ビデオ、ソースコードが見つかる可能性があるためです。場合によっては、指示やコードがまだ機能しますが、他の場合には、新しい.NETに合わせて調整が必要になる場合があります。

---

## How to use .NET

This unit focuses on the technical aspects of building an application. We'll use .NET languages, tools, and frameworks to outline the general workflow software developers use to build .NET applications.

### How developers use .NET to build applications

This section describes the workflow of application development in .NET. It includes details about how to get started building an application in .NET.

### Set up your development environment

開発者が最初に行う決定は、アプリケーションの作成に使用するツールを選択することだ。
つまり、開発環境を選択する。決定は通常<abbr title="Graphical User Interface>">GUI</abbr>を備えた、より視覚的なワークフローを好む。もしくは、開発環境をナビゲートしてコマンドを作成するためにキーボードに依存する<abbr title="Command Line Interface">CLI</abbr>を好むかに基づいている。

Visual environmentを好む人はVisual Studio2022の使用おすすめ。

**.NET Core for cross-platform development**は、.NET SDKをインストールする。 .NET SDKには、コードの作成を開始するために必要な全ての libraries, toolsやtemplatesが含まれている。

Command-line environmentが必要な場合、Visual Studio Codeと.NET SDKを個別にダウンロードしてインストールする。この選択は、すぐに始めたい初心者に人気がある。

### Get started

通常、ソフトウェア開発プロジェクトは一連の要件から始まる。
これらの要件は、アプリモデルの選択に影響する。たとえば、Web、デスクトップ、またはモバイルアプリケーション、またはバックグラウンドプロセスなど。

By using either Visual Studio 2022 or the .NET CLI, you typically begin by creating a new project based on a project template. You can choose from many project templates. Project templates:

- Generate folders and files based on templates and the name of the project you define.
- Add references to commonly used libraries and libraries that your app model framework requires.
- Provide required code that allows you to run the application and see a tiny sample so you can confirm the code compiles.
- Sometimes include instructions in the code. These instructions guide you to modify the sample application and make it your own.

Visual Studio 2022では、[New Project]ダイアログボックスを使用して、インストールされたテンプレートのセットからApp Modelを視覚的に選択したり、多くのコミュニティの貢献から選択したりできます。.NET CLIでは、コマンドとフラグを組み合わせて新しいプロジェクトテンプレートを選択する。

### Build functionality

Next, you'll begin writing the logic for your application. You'll add references to code libraries when you need to do special tasks like:

- Connecting to network resources
- Accessing a database to store or retrieve data
- Converting data from one format into another
- Adding logging to diagnose problems with your application

In some cases, the code libraries you want to use already exist on your local hard drive, because they were installed along with the .NET SDK.

In other cases, developers use the **NuGet package manager** to download and create references to the assembly libraries. To retrieve these resources **— depending on your development environment —** you can use the Visual Studio NuGet Package Manager dialog box, or you can use the .NET CLI's command-line interface.

### Compile and run your application

When you build new functionality, you'll create your code and run it often. This workflow allows you to assess what works correctly and what needs revisions. Both the visual approach and the command-line approach use simple commands that make the workflow easy to follow.

Your code syntax is considered incorrect when the syntax doesn't follow the rules of the language. When the syntax is wrong, the .NET compiler for your language throws a **compilation error**. The compiler won't continue until you correct the syntax problem.

Sometimes the code can be compiled because it follows the syntax rules, but the application's logic has problems. If the logic prevents the .NET runtime from running a command, the program "crashes." The .NET runtime then removes the program from the computer's memory. These errors are called **runtime errors** or **exceptions**.

一部のロジックエラーは「クラッシュ」にはならない。しかし、エラーはまた、ユーザーが期待する結果を生み出さない。これらのエラーは、アプリケーションをテストしてデバッグすることによってのみ修正できる。

### Debug your application

ソフトウェアを作成するときに、アプリケーションを実行して、それが要件と期待を満たしているかどうかを判断する.
アプリケーションにバグが見つかるかもしれないが、それがなぜ発生するのか、どのように修正するのかはわからない。

debugするときは、アプリケーションを実行し何が起こっているのかを理解します。アプリケーションを一時停止するbreak pointを設定して、コードに従い実行する。
エンジニアは変数(variable)に保存されている値(value)を観察したり、コードを通る実行パスを制御し、行をスキップまたは再実行したり、変数の値を変更したりできます。

Both the visual and command-line debugging tools allow you to observe and take control of running the application. Use this functionality to see what's going on in your application as it's running.

### Distribute the application

アプリケーションをreleaseする準備ができたら、ビルドのrelease versionを作成する。
release versionでは、デバッグに必要なコードを削除する。ここでも、ビジュアルツールとコマンドラインツールの両方で、リリースバージョンをコンパイルできます。

To run the release version, you must install the **.NET runtime** on the destination computer. This computer will run your compiled .NET assembly.

### How .NET works at runtime

After you install your application's .NET assembly and the .NET runtime on the destination computer, you can run your application.

The <font color = "red">*.NET runtime is like a protective bubble*</font> that provides a run environment for your applications.

The .NET runtime:

- プログラムを初めて実行するときに、中間コード(intermediate code)をbinary formatにコンパイルします。The binary format is specific to the platform and architecture (for example, *64-bit Windows*) on the computer where it's running.
- プログラムのentry pointを見つけ、適切な順序で各命令の実行を開始します。
- Manages computer resources like memory and network access. When you hear that the .NET runtime **"manages memory,"** that means it works with the operating system to provision memory for your application. When your application no longer needs the data stored in memory, a ***garbage-collection*** feature releases that memory back to the operating system without any instructions from the software developer.
- Secures the user's computer from software that has potentially malicious intent. It also provides a layer of isolation between applications.

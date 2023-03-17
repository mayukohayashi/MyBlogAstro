---
layout: "../../layouts/BlogPost.astro"
title: "2: Microsoft Tutorialノート"
description: "2：Introduction to .NETより"
pubDate: "Mar 17 2023"
tags: [Tech, Learning, .NET, Note]
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

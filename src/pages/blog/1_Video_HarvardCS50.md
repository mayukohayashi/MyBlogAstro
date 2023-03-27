---
layout: "../../layouts/BlogPost.astro"
title: "1: [Harvard CS50 – Full Computer Science University Course
]ノート"
description: "１：Harvard CS50 – Full Computer Science University Courseより"
pubDate: "Mar 22 2023"
updatedDate: "Mar 23 2023"
tags: [Tech, learning, video, note, updated]
---
## Video on Youtube

[Harvard CS50 – Full Computer Science University Course](https://www.youtube.com/watch?v=8mAITcNt710&t=3377s)

by [DAVID J. MALAN](https://github.com/dmalan)

## contents

⭐️ Course Contents ⭐️

- ⌨️ (00:00:00) Lecture 0 - Scratch
- ⌨️ (01:45:08) Lecture 1 - C
- ⌨️ (04:13:23) Lecture 2 - Arrays
- ⌨️ (06:20:43) Lecture 3 - Algorithms
- ⌨️ (08:37:55) Lecture 4 - Memory
- ⌨️ (11:03:17) Lecture 5 - Data Structures
- ⌨️ (13:15:36) Lecture 6 - Python
- ⌨️ (15:39:25) Lecture 7 - SQL
- ⌨️ (18:00:55) Lecture 8 - HTML, CSS, JavaScript
- ⌨️ (20:23:38) Lecture 9 - Flask
- ⌨️ (22:39:01) Lecture 10 - Emoji
- ⌨️ (24:02:50) Cybersecurity

Recorded in **2021**.

---

## Lecture0: Scratch

- CS50 is one of the oldest computer science lecture in Harvard
- History of data
- Explain how basic programming works
  - Using Scratch

### **[Word base note]**

- [Binary](https://www.techtarget.com/whatis/definition/binary#:~:text=Binary%20describes%20a%20numbering%20scheme,relevant%20output%20to%20the%20user.)

> [バイナリ（英：binary）とは](https://wa3.i-3-i.info/word14226.html)
>
> - 「0」と「1」の組み合わせ（2進数）で表現される何かのこと
> - コンピュータが扱うデータ（バイナリデータ）のこと。
> - コンピュータが扱うデータのうち、テキストデータ以外のデータ（バイナリデータ）のこと。
> - メモ帳ソフトで編集できないファイル（バイナリファイル）のこと

- [Unicode](https://home.unicode.org)

> Unicode（ユニコード）は、符号化文字集合や文字符号化方式などを定めた、文字コードの業界標準規格。文字集合（文字セット）が単一の大規模文字セットであること（「Uni」という名はそれに由来する）などが特徴である。

- [<abbr title="American Standard Code for Information Interchange">ASCII</abbr>](https://www.ascii-code.com)
  - [ASCIIコード表](https://www.k-cube.co.jp/wakaba/server/ascii_code.html)

> 1963年に制定された、アメリカ合衆国における情報通信用の文字コード

- [Whac-A-Mole](https://en.wikipedia.org/wiki/Whac-A-Mole) -> もぐらたたき。こういう英名なのねえｼﾗﾝｶｯﾀ(´・ω・｀)”

<br>

Meow 🐈‍⬛ (22 Mar 2023)

---

## Lecture1: C

- 言語関係なくProgrammingについて知る、プログラミングできるようになるのがこのレクチャーの目的である。
- (From last lecture, we might know there are those topics in programming)
  - functions
  - conditionals
  - Boolean expressions
  - loops
  - various
  - .......
- syntax is simple (less than actual language)
- write something with C
- **correctness**
  - Automation toolとかをつかって、あってるあってないをしていく
  - DebugToolの話とか、前回やったよね〜
- **design**
  - Like speak english (basic)
  - めっちゃながいとか、混乱するほどわけわからんとか、それじゃCorrectでもちょっと・・・・
  - Need to be good design of code
- **style**
  - good style of code ->これをHabitにしていく
- Correctness, Design, Styleを三本柱にwriting codeしていく。

### Compiler

create `hello.c` (C language file)

``` c
#include <stdio.h>

int main(void)
{
  printf("Hello world\n");
}
```

-> how to convert code(source code) to binary (= machine code. 01010101のような機械が理解できる形に)

<br>

- **[source code ⇒ □ ⇒ machine code]**
  - □部分を手ではやらないよね今
  - □部分、だれがやる？→機械→Compilerとよばれるもの
  - All Computer Language do not need to use Compiler but C uses

### Terminal window (VSCode的に↓にあるやーつ)

`$ make hello` -> 何もおこらん.基本的に何もおこらんってことはプログラムがエラーを出していない、間違えていないということ。という感覚はもっててよい。これで`hell`というファイルができる。
いわゆるコンパイルの役目をしている。`make hello`すると、コンパイルしなおしって感じ。消さずに`make hello`し続ける＝上書き保存・上書きコンパイル的な感じ。実際これはコンパイラーじゃない。コンパイラーを呼び出すもの。

<br>

`$ ./hello` -> result: `hello world` (also created new file colled `hello`)

- Delete
  - `rm hello` -> file消せるよ（GUI=VSCodeCloudのやつもみながら説明）
- listだす
  - `ls`

`$ ./hello.c` -> result: permission deniedとなる

### functions, arguments

- Cだけじゃなくて、全部の言語にあるよ

![左：Scratch、右：C](/assets/arguments.png)

- **[arguments ⇒ □ ⇒ side effect]**

## return values, variables

- Variable called answer (some function does not have side effect but return variables)
- `=` : Assignment operator
  - Right to leftで考えてもいいよ。Store to ”answer”
  - Tell what type of things to store(string, int, bool etc)

![左：Scratch、右：C](/assets/variables.png)

## example

``` c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
  string answer = get_string("What is your name? ");
  printf("hello, %s\n", answer);
}
```

![エラー](/assets/errorExample.png)

- `stdio` = standard <abbr title="Input and Output">IO</abbr>
- `string`を使いたい場合`#include <cs50.h>`をいれる
  - keyboardでなんやかんやのやつをIOできる
- `#include <cs50.h>` = function does not contain with C (ex: like `get_string`)
- `%s` -> format code = placeholder

``` c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
  printf("hello, %s\n", get_string("What is your name? "));
}
```

同じ結果がでる。　→何度も使えないから避けている。

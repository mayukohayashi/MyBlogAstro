---
layout: "../../layouts/BlogPost.astro"
title: "1: Microsoft Tutorialノート"
description: "１：Write your first C# codeより"
pubDate: "Mar 16 2023"
tags: [Tech, Learning, .NET, Note]
---

## What youcan learn through this module


- Write your first lines of C# code.
- Use two different techniques to print a message as output.
- Diagnose errors when code is incorrect.
- Identify different C# syntax elements like operators, classes, and methods.


## What C# allows you to build

he C# programming language allows you to build many types of applications, like:

- Business applications to capture, analyze, and process data
- Dynamic web applications that can be accessed from a web browser
- Games, both 2D and 3D
- Financial and scientific applications
- Cloud-based applications
- Mobile applications

---

## Hello World

``` c#
Console.WriteLine("Hello World!");
```

### Display a new message

``` c#
// Console.WriteLine("Hello World!");

Console.Write("Congratulations!");
Console.Write(" ");
Console.Write("You wrote your first lines of code.");
```
<br>

結果：

```
Congratulations! You wrote your first lines of code.
```

### TIP: The difference between Console.Write and Console.WriteLine

`Console.WriteLine`

> To print an entire message to the output console, you used the first technique, Console.WriteLine().
> At the end of the line, it added a line feed similar to how to create a new line of text by pressing Enter or Return.


`Console.Write`

> To print to the output console, but without adding a line feed at the end, you used the second technique, Console.Write(). So, the next call to Console.Write() prints another message to the same line.

### Let's try make 2 lines

```
This is the first line.
This is the second line.
```
<br>

上記のように出したい場合：
``` c#
Console.WriteLine("This is the first line.");

Console.Write("This is ");
Console.Write("the second ");
Console.Write("line.");
```

---

## Learn how it works

### What is compilation

> A special program called a compiler converts your source code into a different format that the computer's central processing unit (CPU) can execute.
> When you used the green Run button in the previous unit, the code you wrote was first compiled, then executed.
>
> Why does code need to be compiled?
> Although most programming languages seem cryptic at first, they can be more easily understood by humans than the computer's preferred language.
> The CPU understands instructions that are expressed by turning thousands or millions of tiny switches either on or off.
> Compilers bridge these two worlds by translating your human-readable instructions into a computer-understandable set of instructions.

### Waht is syntax(構文)?

> The rules for writing C# code is called syntax. Just like human languages have rules regarding punctuation and sentence structure, computer programming languages also have rules.
> Those rules define the keywords and operators of C# and how they are put together to form programs.
>
> When you wrote code into the .NET Editor, you may have noticed subtle changes to the color of different words and symbols.
> Syntax highlighting is a helpful feature that you'll begin to use to easily spot mistakes in your code that don't conform to the syntax rules of C#.

---


## 参考

- Microsoft training: [Write your first C# code](https://learn.microsoft.com/en-us/training/modules/csharp-write-first/)

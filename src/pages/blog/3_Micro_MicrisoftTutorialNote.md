---
layout: "../../layouts/BlogPost.astro"
title: "3: Microsoft Tutorialノート"
description: "3：Introduction to .NETより"
pubDate: "Mar 24 2023"
tags: [Tech, learning, .NET, note]
---

## Build a simple app by using C #

> 📝 Note
>
> In this module, you'll use a built-in version of [Try .NET]. If you want to experiment with the application after you finish this exercise, go to <https://try.dot.net>.
> Try .NET is a great way to try out small code examples without installing anything on your local computer.

## 　Step 1 & 2 - Write the code

``` c
Console.WriteLine("Hello world!");
```

<br>

> As you learned in the prerequisite module, "Hello world" is a simple and canonical code example that developers write to understand the basic syntax of new programming languages.
> You could learn a lot about the C# syntax from this simple example. But for now, we'll use it to learn more about .NET specifically.

- press play and see the result `Hello World!`

## What happens to the code you write?

The browser version of Try .NET hides some of the code you see when you build a full application by using Try .NET, Visual Studio 2022, or Visual Studio Code.

When you include the hidden code, here's how the example looks:

``` c
using System;

public class Program
{
  public static void Main()
  {
    Console.WriteLine("Hello world!");
  }
}
```

you can see a series of curly braces `{ }`.
C# uses a pair of curly braces to define a code block. Different kinds of code blocks are used for different purposes.

The code `public static void Main()` and its set of curly braces define a type of code block called a **method**.
A method contains a grouping of code that works toward a single purpose or responsibility in your software system.

In this case, the method contains only **one line of code**. Its purpose is to display a message. Larger programs can have hundreds or thousands of methods.

Methods are organized inside other code blocks called **classes**. A class can contain one or more methods. Ideally, all of the methods in a class have a related purpose in the system. The class in the preceding code is named Program.

In your inserted line of code, `Console.WriteLine()` is calling, or running, the method WriteLine(). The method WriteLine() is contained in the class Console.

Where is this code? It's in the base class library. Actually, its full name is `System.Console.WriteLine()`. In the preceding code, you see that the first line is:

``` c
using System;
```

The word `System` is omitted in your call to `Console.WriteLine()`. But the first line of code using System; tells the C# compiler to look in the base class library if it can't find the method definition in your code.

## What happens to your code after it's inserted into the Main() method?

The most important part of this exercise is what happens after the code you write is inserted into a `Main()` method. Keep in mind that this process happens on a server on your behalf.

1. A command to compile your new code invokes the C# compiler.
2. The C# compiler ensures your code can be compiled and is free from syntax errors. If it can't compile your code, the compiler stops and sends an error message back to the Output pane.
3. If the C# compiler succeeds, the .NET runtime opens the newly compiled .NET assembly. By default, it looks in a class named `Program` to find a method named `Main()` to begin running the instructions.
4. Instruction by instruction, the .NET runtime evaluates each line of code. It runs the instruction and moves to the next line of code.
5. In this case, when the instruction to print the words "Hello world!" finishes, the running path continues to the next line but finds nothing. The path ends, and the .NET runtime removes the program from its memory. Meanwhile, the output from the `WriteLine()` instruction is delivered back to your web browser.

This sequence of events, and the basic division of responsibilities among a programming language, a compiler, and a runtime, are the most important concepts to understand as you're getting started.

---

### knowledge

1. Imagine that you used C# code to create a new application. After running the code, you discover a bug in your logic. How can you find the bug?

-> The debugging features of Visual Studio or the .NET CLI can help you find your logic bug.

2. **An app model** allows you to create a specific type of application, like a web application or mobile application.

3. The .NET SDK is the installer that you need to create projects, write code, call methods in libraries, compile code, and then build, debug, and run applications?

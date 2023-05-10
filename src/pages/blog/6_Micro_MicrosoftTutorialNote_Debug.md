---
layout: "../../layouts/BlogPost.astro"
title: "6: Microsoft Tutorialノート"
description: " Interactively debug .NET apps with the Visual Studio Code debuggerより"
pubDate: "May 09 2023"
draft: true
tags: [Tech, learning, .NET, note]
---

## VSCode C# Debuggingおさらい

- [C# extension for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)

### ブレークポイント

![右クリック](/assets/debug1.png)

> 右クリックで、expressionとか細かく設定できる

![tutorialより](https://learn.microsoft.com/en-us/training/modules/dotnet-debug/media/debugger-overview.png)

1. Debugger launch controls
2. Variables state
3. Watched variables state
4. Current call stack
5. Breakpoints
6. Execution controls
7. Current execution step
8. Debug console

![](https://learn.microsoft.com/en-us/training/modules/dotnet-debug/media/debugger-controls.png)

- Continue or pause execution. If execution is paused, it will continue until the next breakpoint is hit. If your program is running, the button switches to a pause button that you can use to pause execution.
- Step over. Executes the next code statement in the current context.
- Step into. Like Step over, but if the next statement is a function call, move on to the first code statement of this function (same as the step command).
- Step out. If you're inside a function, execute the remaining code of this function and jump back to the statement after the initial function call (same as the out command).
- Restart. Restart your program from the beginning.
Stop. End the execution, and leave the debugger.

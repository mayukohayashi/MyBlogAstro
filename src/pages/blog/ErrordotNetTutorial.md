---
layout: "../../layouts/BlogPost.astro"
title: "ML .NETチュートリアル時にでたエラー"
description: "チュートリアルやっとったら出たエラー。"
pubDate: "Feb 13 2023"
tags: [Tech, Error, .NET]
---

## 発生地点

https://dotnet.microsoft.com/en-us/learn/ml-dotnet/get-started-tutorial/consume

<br>

`dotnet run`しようとしたところ、エラー…。

## エラー内容

``` shell
/Users/GOBO/dotNET/MyMLdotNetApp/SentimentModel/SentimentModel.training.cs(62,29): error CS0103: The name 'File' does not exist in the current context [/Users/GOBO/dotNET/MyMLdotNetApp/SentimentModel/SentimentModel.csproj]

The build failed. Fix the build errors and run again.
```

<br>

`SentimentModel.training.cs`内 53-56行目


## 調査

- 同じエラー出てる人発見：
  - Github issue: [Seems to be an issue with the method of saving files when using VS Code on a mac with x64 version of .Net #2480](https://github.com/dotnet/machinelearning-modelbuilder/issues/2480)


## 解決策

この部分コメントアウト

``` C
// using (var fs = File.Create(modelSavePath))
// {
//     mlContext.Model.Save(model, dataViewSchema, fs);
// }
```

## 結果

runできたー！
![結果](/assets/ML3.png)

---
layout: "../../layouts/BlogPost.astro"
title: ".NET ML CLIのHelloWorldやった"
description: ".NET ML CLIを試してみた"
pubDate: "Feb 06 2023"
tags: [Tech, Memo, .NET]
---

## やったこと

`yelp_labelled.txt`を入れたフォルダ内で、MLNETコマンドを使う

``` shell
$ mlnet classification --dataset "yelp_labelled.txt" --label-col 1 --has-header false --name SentimentModel  --train-time 60
```

### What do these commands mean?

The mlnet classification command runs ML.NET with AutoML to explore many iterations of classification models in the given amount of train time with varying combinations of data transformations, algorithms, and algorithm options and then chooses the highest performing model.

- `--dataset`: You chose yelp_labelled.txt as the dataset (internally, the CLI will split the one dataset into training and testing datasets).
- `--label-col`: You must specify the target column you want to predict (or the Label). In this case, you want to predict the sentiment in the second column (zero-indexed columns means this is column "1").
- `--has-header`: Use this option to specify if the dataset has a header. In this case, the dataset doesn't have a header, so it's false.
- `--name`: Use this option to provide a name for your machine learning model and related assets. In this case, all assets associated with this machine learning model will have SentimentModel in the name.
- `--train-time`: You must also specify the amount of time you'd like the ML.NET CLI to explore different models. In this case, 60 seconds (you can try increasing this number if no models are found after training). Note that for larger datasets, you should set a longer training time.

### 結果

こんなかんじで機械学習させた結果が出てくる

![結果1](/assets/ML1.png)
![結果2](/assets/ML2.png)

## 参考

- .NET Document: [Analyze sentiment using the ML.NET CLI](https://learn.microsoft.com/en-us/dotnet/machine-learning/tutorials/sentiment-analysis-cli?WT.mc_id=dotnet-35129-website)
- Github: [dotnet/machinelearning-samples](https://github.com/dotnet/machinelearning-samples)
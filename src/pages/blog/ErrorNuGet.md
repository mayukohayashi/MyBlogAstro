---
layout: "../../layouts/BlogPost.astro"
title: ".Netインストール時にでたエラー"
description: "チュートリアルやっとったら初っ端でたエラー"
pubDate: "January 29 2023"
tags: [Tech, Error, .NET]
---

## いつ起こったか

`.NET`の[チュートリアル中](https://learn.microsoft.com/en-us/training/paths/csharp-first-steps/)

`dotnet new console -o MydotNetApp -f net7.0`
.Netインストール後にこのコマンドを通そうとおもったとき


## Error内容

``` shell
System.UnauthorizedAccessException: Access to the path '/Users/ユーザー名/.local/share/NuGet' is denied.

 ---> System.IO.IOException: Permission denied

   --- End of inner exception stack trace ---
   at System.IO.FileSystem.CreateParentsAndDirectory(String fullPath, UnixFileMode unixCreateMode)
   at System.IO.FileSystem.CreateDirectory(String fullPath, UnixFileMode unixCreateMode)
   at System.IO.Directory.CreateDirectory(String path)
   at NuGet.Common.Migrations.MigrationRunner.GetMigrationsDirectory()
   at NuGet.Common.Migrations.MigrationRunner.Run()
   at Microsoft.DotNet.Configurer.DotnetFirstTimeUseConfigurer.Configure()
   at Microsoft.DotNet.Cli.Program.ConfigureDotNetForFirstTimeUse(IFirstTimeUseNoticeSentinel firstTimeUseNoticeSentinel, IAspNetCertificateSentinel aspNetCertificateSentinel, IFileSentinel toolPathSentinel, Boolean isDotnetBeingInvokedFromNativeInstaller, DotnetFirstRunConfiguration dotnetFirstRunConfiguration, IEnvironmentProvider environmentProvider, Dictionary`2 performanceMeasurements)
   at Microsoft.DotNet.Cli.Program.ProcessArgs(String[] args, TimeSpan startupTime, ITelemetry telemetryClient)
   at Microsoft.DotNet.Cli.Program.Main(String[] args)
```

### 参考

- [Bug]: Access to the path is denied on macOS #12162
  - https://github.com/NuGet/Home/issues/12162

Point: Create a new `Xamarin.Forms` empty project

## やったこと

- 権限がない
  - `sudo chown -R ユーザー名: /Users/ユーザー名/.local/share/NuGet`
- ↑やろうとしたらそもそもファイルがない
  - なので作った
  - もっぱつ権限付与
- なおった！ついでにVisualStudioで作ったXamarin.Androidフォルダのエラーも修復された

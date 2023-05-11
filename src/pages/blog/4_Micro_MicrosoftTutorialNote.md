---
layout: "../../layouts/BlogPost.astro"
title: "4: Microsoft Tutorialノート"
description: "4：Create a new .NET project and work with dependenciesより"
pubDate: "Mar 27 2023"
update: "Apr 11 2023"
tags: [Tech, learning, dotNET, note]
---

## Learning objectives

- Initialize .NET projects.
- Add packages to and remove packages from a .NET project.
- Manage your package dependencies and update them in a predictable way.

## Add package to your .NET project

> .NET and its ecosystem use the word <font color="red">**dependency**</font> a lot. A package dependency is a third-party library.
> It's a piece of reusable code that accomplishes something and can be added to your application.
> The third-party library is something your application depends on to function, hence the word dependency.
>
> You can think of the third-party library as a package, and it's stored in a repository. A package consists of one or more libraries that you can add to your application so you can take advantage of its features.

### Determine whether you need a package

How do you know if you need a package for your project? That's a complicated question that involves a few factors:

- **Getting better code:**Ask yourself if you're dealing with a task like security,
  - for example, and are trying to implement authentication and authorization. It's a task that you need to get right to protect your data and your customers' data. There are standard patterns out there and libraries that many developers use.
  - These libraries implement features that you'll probably always need, and issues are patched as they arise. You should use such libraries instead of creating your own. You're not likely to write the code as well yourself, because there are so many edge cases that you'd need to consider.
- **Saving time:** You can probably build most things yourself, like utility or UI component libraries, but it takes time. Even if the result is comparable to what's available, it's not a good use of your time to replicate the work of writing this code if you don't have to.
- **Maintenance:** All libraries and apps need maintenance sooner or later. Maintenance involves adding new features and correcting bugs. Is it a good use of your time or your team's time to maintain a library? Or is it better to let an open-source software team handle it?

### Evaluate a package

- **Size:** The number of dependencies might create a large footprint. If you're on a limited bandwidth or have other hardware limitations, this factor might be a concern.
- **Licensing:** You need to ensure that the license granted for the library covers your intended use, whether that use is commercial, personal, or academic.
- **Active maintenance:** If your package relies on a dependency that's deprecated or hasn't been updated for a long time, that might be a problem.

You can learn more about a package before installing it by going to `https://www.nuget.org/packages/<package name>`

To ensure that you can use a package, all dependencies are crawled and downloaded when you run the `dotnet add package <package name>` command.

### Install a package

> There are several ways to install packages. There's a built-in command line and graphical user interface for a package manager in Visual Studio and Visual Studio for Mac.
> You can manually add package references to your project file, or you can install them through a command-line interface (CLI) tool such as Paket or the .NET Core CLI.

A typical installation command looks like this one: `dotnet add package <name of package>`.

After your project installs and builds, the references are added into your debug or release folders. Your project directory looks something like this one:

``` bash
-| bin/
---| Debug/
------| net3.1
--------| <files included in the dependency>
```

### Find a package

**[Nuget.org](https://www.nuget.org)**

Packages might be located in many different places. Some of these sources might be publicly available, and some might be restricted and available only to employees of a specific company. Here are some places where packages might reside:

- Registries: An example might be a global registry, like the NuGet.org registry. You can host your own registries that can be either private or public. Services such as GitHub and Azure DevOps make private registries available.
- Files: You can install a package from a local folder. Installation from a package is common when you're trying to develop your own .NET libraries and want to test the package locally, or for some reason don't want to use a registry.

![Nuget Package](/assets/NugetPackage.png)

### .NET commands

To help you remember what the commands do, it helps to think of them as belonging to categories:

- **Manage dependencies:** Commands in this category cover installation, removal, cleanup after package installations, and package updates.
- **Run programs:** The .NET Core tool can help you manage flows in your application development. Examples of application flows are running tests, building code, and running migrate commands to upgrade projects.
- **Author and publish packages:** Several commands can help you with tasks like creating a compressed package and pushing the package to a registry.
If you want a detailed list of all commands, enter dotnet --help in the terminal.

`dotnet --help` も便利。

### How to install a package

`dotnet add package <dependency name>`

> 💡Note:
>
> You can install some packages _globally_.  These packages aren't meant to be imported into your project. For that reason, many global packages are CLI tools or templates. You can also install these global tools from a package repository. Install tools by using the `dotnet tool install <name of package>` command.
> Install templates by using the `dotnet new -i <name of package> command`.

### After installation

The installed packages are listed in the `dependencies` section of your **.csproj file**.
 If you want to see what packages are in the folder, you can enter:

``` shell
dotnet list package
```

Output will be:

``` shell
Project 'DotNetDependencies' has the following package references
   [net5.0]:
   Top-level Package      Requested   Resolved
   > Humanizer            2.7.9       2.7.9
```

This command lists only the top-level packages, and not dependencies of those packages that we call **transitive packages**.

This is nice for a quick look. If you want a more in-depth view, you can list all transitive packages. When you do so, the list command looks like this one:

``` shell
dotnet list package --include-transitive
```

Output will be:

``` shell
Project 'DotNetDependencies' has the following package references
   [net5.0]:
   Top-level Package      Requested   Resolved
   > Humanizer            2.7.9       2.7.9

   Transitive Package               Resolved
   > Humanizer.Core                 2.7.9
   > Humanizer.Core.af              2.7.9
   > Humanizer.Core.ar              2.7.9
   > Humanizer.Core.bg              2.7.9
   > Humanizer.Core.bn-BD           2.7.9
   > Humanizer.Core.cs              2.7.9
   ...
```

### Restore dependencies

When you create or clone a project, the included dependencies are not downloaded or installed until you build your project.

You can manually restore dependencies, as well as project-specific tools that are specified in the project file, by running the `dotnet restore` command. In most cases, you don't need to explicitly use the command. NuGet restore runs implicitly, if necessary, when you run commands like `new`, `build`, and `run`.

### Clean up dependencies

Sooner or later, you're likely to realize that you no longer need a package, or you might realize that the package you installed isn't the one you need. Maybe you've found one that will accomplish a task better. Whatever the reason, you should remove dependencies that you aren't using. Doing so keeps things clean. Also, dependencies take up space.

To remove a package from your project, use the `remove` command like so:

`dotnet remove package <name of dependency>`. This command will remove the package from your project's**.csproj file**.

## Create a sample .NET project

To set up a .NET project to work with dependencies, we'll use Visual Studio Code. Visual Studio Code includes an integrated terminal, which makes creating a new project easy. If you don't want to use another code editor, you can run the commands in this module in a terminal.

1. In Visual Studio Code, select File > Open Folder.
2. Create a new folder named DotNetDependencies in the location of your choice, and then select Select Folder.
3. Open the integrated terminal from Visual Studio Code by selecting View > Terminal from the main menu.
4. In the terminal window, copy and paste the following command.
   1. `dotnet new console -f net6.0`
5. In the terminal window, copy and paste the following command to run the "Hello World" program.
   1. `dotnet run`

## Manage dependency updates in your .NET project

Sooner or later, you'll want to update to a new version of a library. Maybe a function is marked as deprecated, or maybe there's a new feature in a later version of a package you're using.

Take these considerations into account before you try to update a library:

- The type of update: What type of update is available? Is it a small bug fix? Is it adding a new feature that you need? Will it break your code? You can communicate the type of update by using a system called semantic versioning. The way the version number of the library is expressed communicates to developers the type of update with which they're dealing.
- Whether the project is configured correctly: You can configure your .NET project so that you get only the types of updates you want. You'll perform an update only if a specific type of update is available. We recommend this approach, because you don't risk running into surprises.
- Security problems: Managing your project dependencies over time involves being aware of problems that might happen. Problems arise as vulnerabilities are detected, for example. Ideally, patches will be released that you can download. The .NET Core tool helps you run an audit on your libraries to find out if you have packages that should be updated. It also helps you take the appropriate action to fix a problem.

### Configure the project file for update

|Notation|Applied rule|Description|
|:----|:----|:----|
|1.0|x >= 1.0|Minimum version, inclusive|
|(1.0,)|x > 1.0|Minimum version, exclusive|
|[1.0]|x == 1.0|Exact version match|
|(,1.0]|x ≤ 1.0|Maximum version, inclusive|
|(,1.0)|x < 1.0|Maximum version, exclusive|
|[1.0,2.0]|1.0 ≤ x ≤ 2.0|Exact range, inclusive|
|(1.0,2.0)|1.0 < x < 2.0|Exact range, exclusive|
|[1.0,2.0)|1.0 ≤ x < 2.0|Mixed inclusive minimum and exclusive maximum version|
|(1.0)|invalid|invalid|

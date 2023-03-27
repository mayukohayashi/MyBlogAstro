---
layout: "../../layouts/BlogPost.astro"
title: "4: Microsoft Tutorialノート"
description: "4：Create a new .NET project and work with dependenciesより"
pubDate: "Mar 27 2023"
draft: true
tags: [Tech, learning, .NET, note]
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

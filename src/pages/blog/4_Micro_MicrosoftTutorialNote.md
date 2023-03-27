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

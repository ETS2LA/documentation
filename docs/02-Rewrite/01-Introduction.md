---
title: "Introduction"
sidebar_label: "1. Introduction"
---

We've fundamentally changed how ETS2LA works with the (upcoming) release of C#. To ease the transition this page will first describe some of the core concepts of how ETS2LA works, and how some things are done.

:::warning
These pages are WIP, please take a look at the [`README.md`](https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/blob/rewrite/README.md) file of the [`rewrite`](https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/tree/rewrite) branch for the most up to date information!
:::

:::warning
If you've never worked with **Git** or **C#** before, don't worry! You can still create plugins for ETS2LA, but you should at least learn the basics. You should continue reading these docs, but in addition you can check out [GitHub's Git Tutorial](https://github.com/git-guides#learning-git-basics) and the [C# Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/tutorials/) *(scary website I know)* for more information on those topics. It's really not as hard as you'd expect, and you can get some pretty cool things working with just a basic understanding of both!
:::

### What is a plugin exactly?
Everything related to processing in ETS2LA is done via **plugins**. ETS2LA itself does absolutely nothing, it just idles forever. What it does do is provide plugins with access to the game map. ETS2LA also provides a UI framework (well two) that plugins can use to show information and gather input from users.

Users think ETS2LA is what provides them with self driving and cruise control. But actually it's just the plugins developed on top, this means that *everything we've done, you can do too!* This is our main goal with C#, *ETS2LA should **never** die*. Plugins in the previous python version(s) were heavily integrated into backend, this time the plugins mostly *are* the backend.

### So what does ETS2LA provide plugins?
This is what the pages here will cover. Our goal might seem simple, but as you can see on the left, there are a lot of separate features. You should however keep in mind that not all features are features of ETS2LA itself, some things (like the visualization for example) are plugins just like everything else! In these cases you should take a look at the markdown files in their directory, or the code comments to figure out more information.

You can start off by learning [how ETS2LA loads plugins](PluginLoading), this determines how you begin developing your own.

:::tip
These pages are ordered 1 through X. It's recommended you read in this order, but you can also jump around if you're interested in a specific topic. The first few pages are pretty essential to understanding ETS2LA, so make sure to at least read those!
:::

### What if I want to work on ETS2LA itself?
These pages are mostly focused on plugin development. **You should however always learn what the program does, before you start developing it.** Skim through these pages and you could even create your own little plugin, after that you can start looking into the codebase itself. There's not any documentation available on the web, but most of our functions and classes are documented thoroughly. Just decide on what you want to do, fork the repo, and start working!

If you have an issue with ETS2LA just create a GitHub issue or email us at `contact@ets2la.com` to get your problem heard. If you have an issue we *want* to know about it and help you solve it, so don't hesitate to reach out!

:::danger
Please keep in mind that **ETS2LA does not allow agentic tools in our codebase**. This rule **does not affect third party plugins**, but if you intend to create PRs (Pull Requests) to the main application, you must follow our guidelines on this. Usually *Ask* mode is allowed, but please do note that AI code itself is almost entirely banned. *Ask* is meant for *asking*, not for *coding*.
:::
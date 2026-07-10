---
title: "Introduction"
sidebar_label: "Introduction"
---

Welcome to ETS2LA C#! This release has changed some fundamental concepts that were introduced with the Python version. That said, at least in my humble opinion, the developer experience has been *vastly* improved. If you're interested in creating plugins, then we welcome all contributions with open hands!

:::warning
These pages are WIP, please take a look at the [`README.md`](https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/blob/rewrite/README.md) file of the [`rewrite`](https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/tree/rewrite) branch for the most up to date information!
:::

:::warning
If you've never worked with **Git** or **C#** before, don't worry! You can still create plugins for ETS2LA, but you should at least learn the basics. You should continue reading these docs, but in addition you can check out [GitHub's Git Tutorial](https://github.com/git-guides#learning-git-basics) and the [C# Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/tutorials/) *(scary website I know)* for more information on those topics. It's really not as hard as you'd expect, and you can get some pretty cool things working with just a basic understanding of both!
:::

### What is a plugin exactly?
Everything related to processing in ETS2LA is done via **plugins**. ETS2LA itself does absolutely nothing, it just idles forever. What it does do is provide plugins with access to the game map, telemetry, and our own SDK. ETS2LA also provides a UI framework based on ImGUI, that plugins can use to show information and gather input from users.

Users think ETS2LA is what provides them with self driving and cruise control. But actually it's just the plugins developed on top, this means that *everything we've done, you can do too!* This is our main goal with C#, *ETS2LA should **never** die*. Plugins in the previous python version(s) were heavily integrated into our backend, this time the plugins (mostly) *are* the backend.

### So what does ETS2LA provide plugins?
This is what the pages here will cover. Our goal might seem simple, but as we've kept developing, it's become apparent that we need a ton of features. You should however keep in mind that not all features are features of ETS2LA itself, some things (like the visualization for example) are plugins just like everything else! In these cases you should take a look at the documentation or code comments inside those plugins to figure out more information.

You can start off by learning [how ETS2LA defines and loads plugins](PluginLoading).

### What if I want to work on ETS2LA itself?
These pages are mostly focused on plugin development. **You should always learn what the program does, before you start developing it.** Skim through these pages and you could even create your own little plugin, after that you can start looking into the codebase itself. There isn't any documentation available on the web, but most of our functions and classes are documented thoroughly. Just decide on what you want to do, fork the repo, and start working!

If you have a problem with ETS2LA just create a GitHub issue or email us at `contact@ets2la.com` to get your problem heard. If you have an issue, we *want* to know about it and help you solve it, so don't hesitate to reach out!

:::danger
Please keep in mind that **ETS2LA does not allow agentic tools in our codebase**. This rule **does not affect third party plugins**, but if you intend to create PRs (Pull Requests) to the main application, you must follow our guidelines on this. Usually *Ask* mode is allowed, but please do note that AI code itself is almost entirely banned. *Ask* is meant for *asking*, not for *coding*.
:::
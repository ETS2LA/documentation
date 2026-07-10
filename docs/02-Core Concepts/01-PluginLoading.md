---
title: "Plugins and Libraries"
sidebar_label: "Plugins and Libraries"
---
[`ETS2LA.Shared`](https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/blob/rewrite/ETS2LA.Shared/Shared.cs#L83)

Almost all logic in ETS2LA is meant to be provided by plugins. These are developed by either us, or 3rd party developers. Libraries are also required for almost all larger connected projects, but we'll go over those a little later.

### Plugins
Plugins are defined as classes inheriting from `Plugin`, in a way similar to `MonoBehaviour` in [Unity](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/MonoBehaviour.html). Each namespace can contain multiple plugins, you can bundle them in a single `.csproj`. We don't usually recommend this though, as separating code into multiple projects usually ends up cleaner.

Each plugin has to contain a `PluginInformation` struct defining it's id, name, description, version, author, and other information useful in us determining how to display, and what to do when enabling your plugin. Plugins can also override their `TickRate`, which determines the rate at which `Tick()` is being called at.

Below is an example of the general structure for a plugin:
```csharp
using ETS2LA.Shared;

namespace ExamplePlugin;

public class ExamplePlugin : Plugin
{
    public override PluginInformation Info => new PluginInformation
    {
        Name = "Example Plugin",
        Description = "This is an example plugin.",
        AuthorName = "Tumppi066",
        Version = "0.0.1",
        Id = "tumppi066.example"
    };

    public override float TickRate => 10f; // 10 times per second

    // Plugin also includes multiple load events you can override.
    // Remember to call base.Event() before your own code!

    public override void Init() { base.Init(); }           // when plugin is loaded
    public override void OnEnable() { base.OnEnable(); }   // when plugin is enabled
    public override void OnDisable() { base.OnDisable(); } // when plugin is disabled
    public override void Shutdown() { base.Shutdown(); }   // when plugin is unloaded

    // In addition to the built in Tick() function. You don't have to use this
    // as you can create your own timers in OnEnable() as well.

    public override void Tick() 
    {
        // code
    }
}
```

At load time ETS2LA separates each plugin into it's own C# load context. This means that their memory is only loosely coupled to each other as well as the backend. The main reason for this is to allow for *dynamic reloading* of plugins at runtime without having to restart ETS2LA, and by extension reload game files.

While the upside is clear, separate contexts do also come with some downsides. Let's think of an example plugin: `Pathfinding`. This plugin's single purpose is to provide path information for others. Let's now think of another plugin: `Lane Assist`. This one uses `Pathfinding`'s data to drive the truck. Usually you'd define the pathfinding classes in `Pathfinding`, and then import them in `Lane Assist` right? Well that's a problem, since at runtime both plugins live in separate contexts, in C#'s eyes their classes are different, even if their source code is identical (from the same file!).

### Libraries
This is our solution to the above problem. Libraries are special plugins that have *no logic*, and instead implement classes (or other static information) that can be shared between plugins. These libraries are loaded once at startup, and into the main load context. That means everything in your libraries can be used by any plugin, and shared between plugins via the event system.

For simplicity in the backend, these libraries are called `LibraryPlugin`, as it allows us to share code between normal plugins and libraries. Below is an example library called `PathLib`, based on the above problem I described.
```csharp
using ETS2LA.Shared;

namespace PathLib;

// This class only holds information for the backend. There's no actual
// logic being done here. You can still technically have an OnLoad function
// by tapping into the constructor.
public class PathLib : LibraryPlugin
{
    public override PluginInformation Info => new PluginInformation
    {
        Name = "PathLib",
        Description = "This plugin provides pathfinding related data structures for other plugins to use.",
        AuthorName = "Tumppi066",
        Version = "1.0.0",
        Id = "tumppi066.pathlib",
    };
}

// We can define whatever we want to be available anywhere here. Other plugins
// can then use these by `using PathLib;` You will have to figure out the .csproj
// links though!
public class PathItem
{
    ...
}

public class Path
{
    List<PathItem> Items;
    ...
}
```
Now in the example problem, you'd import `PathLib` from both plugins, and use these classes to communicate via the event system. Speaking of which, that's what you should learn about next!
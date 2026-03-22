---
title: "Settings"
sidebar_label: "4. Settings"
---

Much like with events, ETS2LA provides a built in way to handle settings. This is done via a `SettingsHandler()` class with your custom settings struct.

While we don't disallow you to use other methods, we highly recommend using this built in way to handle settings. It keeps settings distributed in a single location, and allows your settings to sync over official cloud storage. Do note that if you think our SettingsHandler is missing features, then please open an issue or email `contact@ets2la.com`. We're happy to support developers in any way we can!

### How can I use the settings handler?
Step 1 - You create a custom struct (or class) for your settings. Make sure all your variables are `[Serializable]`. For example if you use a custom class or struct as a variable in the root, that class or struct must also have `[Serializable]` and so on. You can also use some of the built in types like `Color` and `Vector3` without explicitly making them serializable (they already are), but custom ones must *always* have `[Serializable]`.
```csharp
using System;
using ETS2LA.Settings;

[Serializable] // don't forget Serializable!
class MySettings
{
    public int ExampleValue = 42;
}
```
Step 2 - You create a `SettingsHandler` object in your plugin, and pass in the name and type of your settings struct. Below is an example of all the possible parameters and functions. If this is the first time a `SettingsHandler` is created for your struct, ETS2LA will automatically populate the default values you've set.
```csharp
public override void OnEnable()
{
    base.OnEnable();

    // Create a new handler
    _settingsHandler = new SettingsHandler();

    // Then load initial settings. This will automatically
    // generate the .json file if it doesn't exist yet, so no need to
    // worry about null checks.
    _settings = _settingsHandler.Load<MySettings>(_settingsFilename);
    
    // We can also register a listener to get notified when the settings change
    // on disk. This is much cheaper than continuously polling for changes with .Load.
    _settingsHandler.RegisterListener<MySettings>(_settingsFilename, OnSettingsChanged);

    // Reading and writing works as you'd expect.
    Console.WriteLine($"ExampleProvider loaded setting ExampleValue = {_settings.ExampleValue}");
    _settings.ExampleValue += 1; // This doesn't automatically save to disk!

    // To save you can call .Save on the settings handler. That will
    // flush the current state of the _settings object to disk. Alternatively the handler
    // will save to disk automatically after a certain amount of time. (NOTE: CURRENTLY TODO)
    _settingsHandler.Save<MySettings>(_settingsFilename, _settings);
}

private void OnSettingsChanged(MySettings data)
{
    Console.WriteLine($"ExampleProvider detected settings change: ExampleValue = {data.ExampleValue}");
    _settings = data;
}
```
ETS2LA also includes some global settings files. These are used by `using ETS2LA.Settings.Global` and calling the `.Current` property on whatever handler you want to access. For example you could do `AssistanceSettings.Current`, this class functions as `_settings` does above, however you do not need to save manually.
- `AssistanceSettings` : This is where all global settings related to the assistance features are stored. You should use this in your own plugins instead of creating a duplicated setting for ACC aggressiveness for example.

:::note

This settings system might change in the future to match existing standards. You will still create settings just like currently, so your structs will work with the new system. The planned changes include a move to a system that likely matches `ETS2LA.Settings.Global`, just for all settings instead of only global ones.

:::
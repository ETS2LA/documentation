---
title: Settings
---

ETS2LA has a built in settings framework that handles race conditions between all the different processes. **When accessing ETS2LA settings do NOT use anything outside of the official framework**. You can still create custom settings files, but make sure these will only ever be changed by a single process at a time.

### How do I define settings for my plugin?
We prefer a typed approach to defining settings. This means that you create a class based on `ETS2LASettings`, and define all the settings you want as class variables. Below is a minimal example, please note that variables can be set to *any type*.

```python
from ETS2LA.Settings import ETS2LASettings

class Settings(ETS2LASettings):
    my_number: float = 3
    unassigned_string: str # returns None until set
    some_list: list = [
        "item1",
        "item2"
    ]
```

Now to use these settings all you do is simply create an instance of the `Settings` class you just made. You can then read and write settings as normal class variables.

```python
settings = Settings()
print(settings.my_number) # 3
print(settings.unassigned_string) # None
settings.unassigned_string = "Hello World!"
print(settings.unassigned_string) # "Hello World!"
```

:::tip
You can use settings from any plugins in any other plugins! Just import the class you want, and create a new instance. ETS2LA will handle the rest.
```python
# First party plugins are accessed with Plugins, third party with CataloguePlugins
from Plugins.AR.settings import Settings as ARSettings
ar_settings = ARSettings()
ar_settings.show_when_not_in_focus = True
```
:::

### How do I create a settings menu?
Please take a look at the [User Interface](./User%20Interface) documentation for a full guide on how to create settings menus for your plugin.
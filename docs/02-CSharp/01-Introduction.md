We've fundamentally changed how ETS2LA works with the release of C# and version 3.0. To ease the transitions this page will first describe some of the core concepts of how ETS2LA works, and how some things are done.

**WARNING**: These pages are WIP, please take a look at the `README` file of the `rewrite` branch for more information!

### What is a plugin exactly?
Everything related to processing in ETS2LA is done via **plugins**. ETS2LA itself does absolutely nothing, it just idles forever. What it does do is provide plugins with access to the game map. ETS2LA also has a UI framework (well two) that plugins can use to show information and gather input from users.

Users think ETS2LA is what provides them with self driving and cruise control. But actually it's just plugins developed on top, this means that *everything we've done, you can do too!* This is our main goal with C#. Plugins in the previous python version(s) were heavily integrated into backend, this time the plugins *are* the backend.

### So what does ETS2LA provide plugins?
This is what the pages here will cover. Keep in mind that not all features are features of ETS2LA itself, some things (like the visualization for example) are plugins just like everything else. In these cases you should take a look at the markdown files in their directory, or the code comments to figure out more information.

You can start off by learning [how ETS2LA loads plugins.](Structure)
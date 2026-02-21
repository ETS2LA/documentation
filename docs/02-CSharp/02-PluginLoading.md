---
title: "How ETS2LA loads plugins"
---
We provide a recommended starting point [on our GitHub](https://github.com/ETS2LA/example-plugin/tree/C%23). Even though using it is not strictly necessary **it is highly recommended**.

### How ETS2LA discovers and loads plugins.
After being built, ETS2LA will look into `Plugins/` and discover all .DLL files. We'll then check for `IPlugin` objects inside these DLLs, and load those that are found. Note how you can **include multiple plugins in a single .DLL project (namespace)!** If a plugin fails to load it is ignored for the rest of the instance's runtime. What's important here is that plugins can provide additional DLLs they need to function in the `Plugins/` folder. This will change in the future, but the structure is like this for now.

### What this means for development.
**ETS2LA does not care how you came up with the .DLL file!** There isn't a "wrong" way to develop plugins for ETS2LA, as long as your plugin is built correctly ETS2LA will run it just fine. The top of this page has a recommended setup made by us, this includes everything you need to have intellisense working. It also includes a quick launch `.bat` file that will boot up ETS2LA with your plugin loaded. That said if you want to develop by cloning the entire ETS2LA project that's allowed just the same.
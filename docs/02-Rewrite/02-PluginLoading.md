---
title: "How ETS2LA loads plugins"
sidebar_label: "2. How ETS2LA loads plugins"
---

import QuestionAndAnswer from '@site/src/components/questionAnswer';

We provide a recommended starting point [on our GitHub](https://github.com/ETS2LA/example-plugin/tree/C%23). Even though using it is not strictly necessary **it is highly recommended**.

### How ETS2LA discovers and loads plugins.
After being built, ETS2LA will look into `Plugins/` and discover all `.dll` files *(this applies to Linux too)*. It'll then check for `IPlugin` objects inside these DLLs. Note how you can **include multiple plugins in a single `.dll` project (namespace)!** If a plugin fails to load it is ignored for the rest of the instance's runtime. What's important here is that plugins can provide additional DLLs they need to function in the `Plugins/` folder. This will change in the future.

:::warning
This system is planned to be changed in the future. A likely change is that plugins will be required to be in their own folder, i.e. `Plugins/ExamplePlugin/ExamplePlugin.dll` instead of `Plugins/ExamplePlugin.dll`. This allows plugins to include additional files without worrying about conflicts.
:::

### What this means for development.
**ETS2LA does not care how you came up with the `.dll` file!** There isn't a "wrong" way to develop plugins for ETS2LA, as long as your plugin is built correctly ETS2LA will run it just fine. The top of this page has a recommended setup made by us, this includes everything you need to have intellisense working. It also includes a quick launch `.bat` file that will boot up ETS2LA with your plugin loaded. That said if you want to develop by cloning the entire ETS2LA project that's allowed just the same.

<QuestionAndAnswer>
    <p style={{margin: 0}}>How can I publish my plugin?</p>
    <p style={{margin: 0}}>We do not yet have a publicly available plugin repository or website. You can however make users manually copy your plugin into their `Plugins/` folder. This is assumed to be done via a website (take a look at Factorio!) in the near future.</p>
</QuestionAndAnswer>
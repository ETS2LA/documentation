# Plugin Catalogue

ETS2LA uses a central plugin catalogue. This means that once you’ve created your plugin, you can make a PR to the plugin catalogue describing your changes. If that PR is accepted, then your plugin will be visible to all ETS2LA users.

## Create a new repository for your plugin.

ETS2LA expects the plugin to have it’s own repository, instead of being bundled in with another copy of the main program. To do this you can create an empty repository on the host of your choosing, and then copy the contents of your plugin folder to this new repository.

Another way to do it is to initiate a new repository in the `Plugins/YourPluginName` folder. This might be preferable as you can push updates from inside your development environment without first copying the files outside of it.

## Create your `requirements.txt` file.

If your plugin needs any requirements not normally included in ETS2LA, you can add your own `requirements.txt` file to install them when the plugin is downloaded. Please do keep in mind that we will prioritise the ETS2LA requirements, so you should maintain the requirements file to not have conflicts with the base modules.

## Create your `plugin.yaml` file.

This file is used to display information about your plugin to users in ETS2LA. Below is a template for this file. You should fill it up and put it in the root of your repository.

```yaml
name: "ExamplePlugin"
overview: "Write a short overview here, this is visible before a user clicks the plugin"
description: "Write your description here, this entry supports full markdown syntax"
image_url: "You can provide a preview image of your plugin."
version: "1.0.0, ETS2LA will check for updates using this version"
author: "Your name"
```

## Add your plugin to the ETS2LA catalogue.

Before we begin, this is **not strictly necessary**. Any plugins that get added to the catalogue will go through a check by one of the ETS2LA developers. If the plugin is controversial (looking at you shock collars) or otherwise doesn’t fit the “image” of ETS2LA, we won’t allow it on the catalogue.

That isn’t the end of the world though, ETS2LA supports adding a manual plugin via the same menu as the catalogue. You can just tell your users to copy your plugin repository URL to this page, and they will be able to install it as normal.

Now the plugin catalogue works much the same way as the plugin yaml file. Just edit it according to this template. It will make sense once you actually see the file in the github repository.

```yaml
name: "ETS2LA Catalogue"
plugins:
  - name: "ExamplePlugin"
    repository: "https://host.com/username/repository"
catalogues:
  -
```

ETS2LA will then fetch all information from the plugin.yaml file in that repository. Please note that users won’t necessarily be able to access your plugin inside mainland China if it’s hosted on Github.

[**https://github.com/ets2la/plugins**](https://github.com/ets2la/plugins)

:::info
If you create a lot of plugins you might be interested in submitting your own catalogue, that way you don’t have to provide each plugin by itself. This does however mean that the users will need to seperately select your catalogue!
:::

:::success
You can find an example plugin in https://github.com/ETS2LA/example-plugin, this includes everything we’ve talked about on this page.
:::
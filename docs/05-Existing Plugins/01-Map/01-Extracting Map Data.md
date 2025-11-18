# Extracting Map Data

This page will walk you through extracting additional Map data for ETS2LA. **Please keep in mind that this is an advanced procedure that should only be attempted if you’re confortable with a terminal and have at least some linux knowledge!**

## 1\. Download WSL

The data extractor can only run in a Linux environment. It’s recommended to run the extractor inside WSL, as you can still access your Windows game files through it.

https://learn.microsoft.com/en-us/windows/wsl/install

We recommend you download Ubuntu, that’s the default distribution.

## 2\. Prep the WSL instance.

By default WSL will try to use your Windows based programs. This means that if you run `node` inside the WSL instance, it will poll your Windows install. That won’t work so these commands install node:

```
sudo apt update
sudo apt install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

Please open a new terminal now to refresh PATH

```
nvm ls # should show as N/A
nvm install node
nvm ls # should show as stable
```

The extractor also needs some additional requirements, these can be installed like so:

```
sudo apt install make
sudo apt install g++
```

## 3\. Download and install the extractor.

This step will require git being installed, you should already have it so the following code will clone our maps repo. This repo is a custom fork of [tmudge’s](https://github.com/truckermudgeon/maps) version with added mod support.

```
cd ~
mkdir maps
cd maps
git clone --recurse-submodules https://github.com/ETS2LA/maps/ .
```

This will clone the repository into `/home/username/maps`, the rest of the commands **assume you are in this directory!**

```
npm i
npm run build -w packages/clis/parser
```

This will first install all node requirements, and then build the parser app. If you hit an error then try to run `chmod +x ./node_modules/husky/lib/bin.js` and then the build command.

## 4\. Extract the data.

At this point we’re ready to actually start extracting data. The command has three major parameters `-g` followed by the **path to the game**, `-m` followed by the **path to the mod folder** and `-o` followed by the **path to the output.** Below is an example command you should fill out:

```
mkdir data
npx parser -g "/mnt/{windows_drive_label}/path/to/the/game/in/your/windows/drive" -m "/mnt/{windows_drive_label}/path/to/the/mods/folder/in/your/windows/drive" -o "/home/{ubuntu_username}/maps/data"
npx generator graph -m [usa/europe] -o "/home/{ubuntu_username}/maps/data" -i "/home/{ubuntu_username}/maps/data"
```

Here’s an example of how a command should look like:

```
npx parser -g "/mnt/c/Program Files (x86)/Steam/steamapps/common/Euro Truck Simulator 2" -m "/mnt/c/Users/Tumppi066/Documents/Euro Truck Simulator 2/mod" -o "/home/tuomas/maps/data"
```

Run the graph command the same way, just remember to change the `-m` parameter to the base game, so that’s `usa` or `europe`.

## 5\. Testing data, creating the config, and publishing.

:::note
This section is a lot of work, if you don’t know / want to do it yourself, you can send the data to the developers on Discord, and they’ll handle the uploading for you.

It is recommended to try and learn this though, as the developers have limited time and it might take some time to get the data in 👍
:::

Before we begin, make sure you are using the base data for your game. So let’s say your mods are on `ETS2 1.55`, then you should download that base data first.

You can then copy everything except `icons` from the data folder to `app/Plugins/Map/data`, this will overwrite the existing data. Note that you can open the Ubuntu file system from file explorer by going to the _Linux_ tab in the bottom left.

Next up you should open the `config.json` file, and edit the values to match. First of all you should change the descriptions, and the credits. You can add more credit categories to the dictionary as you please. Just keep in mind the formatting already there, if the json file is malformed it will not work. You can copy you JSON file to a viewer like https://jsonformatter.org/json-viewer and it will warn you of any errors.

To get the `size` variable, you can highlight all the data files in file explorer, right click, and go into properties. There you can see the _Size_ parameter and you can copy the value. Please remove the commas, as the value has to be back to back!



If you’re ready with the rest of the file, you can pack your data to a `.zip` file, _do not include the config.json file, only the data!_ After packing you can do the same size check for the `packed_size` variable in the config.

At this point you can launch the game and reload the Map plugin. This will load your custom data into the system and you should be able to drive around the map correctly.

You might’ve noticed the `offsets` array inside the config. This is for manually fixing some roads that are not correctly parsed. If you launch ETS2LA with `--dev` (edit the `start.bat` file and add the argument to the end of the python call like `python main.py --dev` ) you can see a new tab in the Map settings, this tab has the option to enable an internal map.

If you encounter any offset issues when driving, you can hover over the road in the internal map and click it, this will copy it’s name, and you can add it to the `per_name` dictionary. The left side string is the road name, the right side is your custom offset. Once you change the offset you can click the `Reload Offsets` button in the Map settings and check the internal Map for changes. _Please note that the visualization won’t update the road, only the internal map does!_

If you’re happy with your offsets, you can send the files to any of the developers on Discord, or make a merge request to https://gitlab.com/ETS2LA/data directly. Once they are added to the repository anyone can download them from the Map settings 👍
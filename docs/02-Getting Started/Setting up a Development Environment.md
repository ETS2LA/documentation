# Setting up a Development Environment

While it is technically possible to develop for ETS2LA using the release environment via the installer, it is recommended to directly clone the program from GitHub. These instructions will get you up and running in this regard.

### 1\. Download all the dependencies.

Make sure you have Python version 3.11 or 3.12 installed **globally**. The ETS2LA installer uses python version [3.12.8](https://www.python.org/downloads/release/python-3128/), it's recommended you use it as it matches what all of our users use. You will also need [git](https://github.com/git-for-windows/git/releases/tag/v2.49.0.windows.1), but presumably you already have that installed.

If you intend to develop the frontend as well, then you will want to also install [NodeJS](https://nodejs.org).

### 2\. Fork the ETS2LA repository for your own use.

You can use this [link](https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/fork) to automatically take you to the fork page. Forking a repository will essentially make you your own copy, that you can **push** _aka. save_ stuff to without our permission.

Once you have your own changes you can make a **PR**, _Pull Request,_ to merge those changes with the main app and send them to all ETS2LA users.

### 3A. Clone ETS2LA with GitHub Desktop.

[GitHub Desktop](https://github.com/apps/desktop) is a free and open source helper program by GitHub. Personally I use Desktop instead of the git command line tools. Once you've logged into Desktop you can go to _File → Clone Repository → Pick your ETS2LA repo._

### 3B. Clone ETS2LA from GitHub.

Just create a folder somewhere on your computer, open a console there and type in the following code in order. **Make sure your console is in an EMPTY folder before running!**

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Euro-Truck-Simulator-2-Lane-Assist .
```

### 4\. Useful arguments for development.

We have several useful arguments for running ETS2LA. The most important one to know is `--dev` that will enable development feature and **disable the ability to update**.

Another useful argument is `--local` that will run the frontend locally on your computer. You should make sure you installed NodeJS in a previous step so that the frontend can install properly.

**For example:**  
`python main.py --dev --local`  
Will run ETS2LA in development mode with a local build of the frontend.

:::danger[REMEMBER!]

You should **always** run ETS2LA with the `--dev` flag when you have **uncommitted** changes on your repository. ETS2LA **might overwrite** the changes outside of _Developer Mode_!
:::

### 5A. Pushing your changes with Desktop.

The Desktop application will show your changes on the left side. You can write a summary and description of your changes below that, and then press _Commit to main_. **This will save your changes locally.** If you accidentally delete a file, that file will still be saved in the git repository.

To send your changes to GitHub, you can press the _Push origin_ button next to the branch selector. This will upload your changes to GitHub. Once that is done you can be 100% sure that the changes won't disappear even if you delete the code from your computer.

### 5B. Pushing your changes with the git command line.

You can first check all your edited files with `git status` . If you want to commit (save) certain files you can do that by writing `git add path/to/file/and/its/name.txt` , if you want to commit (save) **all** files then you can do `git add --all` .

Once you've added files you can run `git commit -m "Message"` to commit the files locally, and `git push` to send the files to GitHub.
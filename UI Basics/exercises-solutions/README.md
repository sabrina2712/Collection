# Exercises Solutions

Let's collect here different solutions to exercises we did in class.
Each exercise lives in its own folder. To add your solution, create a folder within the exercise folder with the same name but append your name with a minus at the end. For example to add a solution to an exercise called `flex-slider-with-transition`, you need to create a folder with the name `flex-slider-with-transitions-jane-doe` where jane-done should be replaced with your name.

## Workflow

Make sure you have the repository cloned.

* Go to master
* Next you will need to do `git pull` to make sure you have the latest version
* Create a branch where you will adding your changes: `git checkout -b my-branch-name-goes-here`. This command will create a new branch and switch to it, all in one go.
* Make your changes and once you are done, add the changed files. You can use: `add .` to add everything. Or you can add individual files with `git add path/to/my-file.css`.
* You can run `git status` to check if your files are actually added
* Next, you need to commit: `git commit -m "My message goes here"`
* Then you need to update the remote repository by pushing to it with: `git push -u origin my-branch-name-goes-here`
* Next you need to go to the Github webpage to open a Pull Request

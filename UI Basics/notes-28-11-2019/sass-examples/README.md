# SASS 101

This project is using [npm](https://www.npmjs.com/) as a package manager.
This allows us to install dependencies locally - this means this they are installed only for this project as opposed to being installed globally, meaning I can use them from any place on my machine.
Dependecies are libraries that give us some additional functionality.

## Setup

To setup the project go to the folder and then run in the command line:

```bash
npm install
```

This will install our only dependency - [node-sass](https://www.npmjs.com/package/node-sass).
We use it to compile sass to css.

## Compiling sass to css

To compule sass to css there are 2 utility commands:
`watch-styles` and `build-styles`.

These commands are defined in the scripts in the `package.json` file.

### Anatomy of the sass commands

`node-sass -w -r sass -o styles` ->
node-sass is the name of the utility we are using for compiling sass to css

-w is an option that stands for watch, which will make the node-sass utility recompile the css file every time we make a change to the sass files
-r is an option that stands for recursive, which allows us to track changes in all files and directories
-o is an option that stands for output and helps us define where we want to output the compiled css

### Compile one time only

To compile only once the sass files to css run in the root folder of the project:

```bash
npm run build-styles
```

This will compile all the files from the `sass` directory and output a single css file in the `styles` directory. To see any additional changes you have done to your sass files, you will need to run the command once again.

### Watching for changes

While working on a project, you probably want to continiously watch for changes and update the compiled css file. You can run

```
npm run watch-styles
```

Please note that the watch command only listens for newly added changes since the moment you started it.
So if you have added some changes, before starting the command, they will not appear until you add a change to any of the files, so you trigger the compilation.

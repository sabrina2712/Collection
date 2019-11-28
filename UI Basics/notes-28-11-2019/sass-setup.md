# Sass setup

1. Create a folder
2. Go inside folder
3. `npm init -y` to create a package.json
4. create index.html -> add usual boilerplate head, body etc
5. create `sass` (name it anything you want) folder
6. create files inside `sass` folder -> index.scss -> add some styles
7. run `npm install node-sass --save-dev` inside the folder you have just created
8. write npm scripts in package.json: 
```json
"scripts": {
    "watch-styles": "node-sass -w sass -o styles",
    "build-styles": "node-sass sass -o styles"
}
```
9. include styles/index.css in your HTML
10. run live server in Visual Code like you always do
11. run `npm run watch-styles`

> If you choose name other than `sass` for the folder where you put your `*.scss` files, make sure you update also the npm scripts.

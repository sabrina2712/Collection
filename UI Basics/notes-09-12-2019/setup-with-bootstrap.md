
1. Create a folder
2. Go inside folder
3. `npm init -y` to create a package.json
4. create index.html -> add usual boilerplate head, body etc
5. create `sass` (name it anything you want) folder
6. create files inside `sass` folder -> index.scss -> add some styles
7. run `npm install node-sass --save-dev` inside the folder you have just created
8. run `npm install bootstrap --save-dev` inside the folder you have just created
9. write npm scripts in package.json: 
```json
"scripts": {
    "watch-styles": "node-sass -w -r sass -o styles",
    "build-styles": "node-sass sass -o styles"
}
```
10. include styles/index.css in your HTML
11. run live server in Visual Code like you always do
12. run `npm run watch-styles`
13. include bootstrap: https://getbootstrap.com/docs/4.4/getting-started/theming/#importing

```scss
    @import "../node_modules/bootstrap/scss/bootstrap.scss";
```

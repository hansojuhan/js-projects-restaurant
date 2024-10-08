# Notes

## Commands to set everything up

1. Start the project the same way you began the webpack tutorial project, by creating the package.json file and setting up Webpack.

Create package.json:
  npm init -y

Install webpack:
  npm install --save-dev webpack webpack-cli
  create a src directory

Configure webpack.config.js:

```js
// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
```

handle html
npm install --save-dev html-webpack-plugin

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
...
,
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
```

handle css
npm install --save-dev style-loader css-loader

```js
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
```

Dev server:
  npm install --save-dev webpack-dev-server

```js
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
```

Run server:
  npx webpack serve

---

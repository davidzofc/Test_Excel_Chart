const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    taskpane: "./taskpane.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
devServer: {
  static: {
    directory: path.join(__dirname, "dist"),
  },
  port: 3000,
  server: {
    type: "https",
    options: {
      key: fs.readFileSync(path.resolve(__dirname, "key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "cert.pem")),
    },
  },
  hot: true,
},

  plugins: [
    new HtmlWebpackPlugin({
      filename: "taskpane.html",
      template: "./taskpane.html",
      chunks: ["taskpane"],
    }),
  ],
  mode: "development",
};

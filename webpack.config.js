const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    navbar: "./src/navbar/main.js",
    home: "./src/home/main.js",
    about: "./src/about/main.js",
    // skills: "./src/skills/main.js",
    project: "./src/project/main.js",
    testimonials: "./src/testimonials/main.js",
    // contact: "./src/contact/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],

  devtool: "source-map",
  mode: "development",
};

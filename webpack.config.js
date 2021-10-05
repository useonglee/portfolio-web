const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: "./src/components/App.js",
    main: "./src/components/Main.js",
    navbar: "./src/components/Navbar/navbar.js",
    dark: "./src/components/Dark/dark.js",
    home: "./src/components/Home/home.js",
    about: "./src/components/About/about.js",
    skills: "./src/components/Skills/skills.js",
    project: "./src/components/Project/project.js",
    testimonials: "./src/components/Testimonials/testimonials.js",
    contact: "./src/components/Contact/contact.js",
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

const { resolve } = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/lib/index.js",

  output: {
    path: resolve(__dirname, "lib"),
    filename: "vue-toast.js",
    library: "vueToast",
    libraryTarget: "umd"
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

  plugins: [new VueLoaderPlugin()],

  mode: "production"
};

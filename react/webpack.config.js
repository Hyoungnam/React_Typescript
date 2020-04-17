const path = require("path");

module.exports = {
  name: "word-relay-dev",
  mode: "development", //prodcution
  devtool: "eval", //hidden-source-map
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"]
  },
  entry: {
    app: ["./src/index.tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: path.join(__dirname, "node_modules")
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist"
  }
};

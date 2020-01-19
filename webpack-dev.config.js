const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const appPaths = {
  ROOT: path.resolve(__dirname),
  CLIENT: path.resolve(__dirname, "src"),
  PUBLIC: path.resolve(__dirname, "public"),
  DIST: path.resolve(__dirname, "dist")
};

module.exports = {
  mode: "development",
  entry: path.join(appPaths.CLIENT, "index.js"),

  output: {
    path: appPaths.public,
    filename: "dist/js/bundle.js",
    publicPath: "/"
  },

  devtool: "cheap-module-source-map",

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(eot|ttf|otf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "dist/fonts/[name].[ext]"
          }
        }
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "dist/img/[name].[ext]"
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "dist/css/style.css"
    })
  ],

  devServer: {
    contentBase: appPaths.PUBLIC,
    historyApiFallback: true,
    inline: true,
    hot: true,
    proxy: [
      {
        context: ["/auth", "/api"],
        target: "http://localhost:8989"
      }
    ]
  }
};

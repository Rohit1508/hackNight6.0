const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const appPaths = {
  ROOT: path.resolve(__dirname),
  CLIENT: path.resolve(__dirname, "src"),
  PUBLIC: path.resolve(__dirname, "public"),
  DIST: path.resolve(__dirname, "dist")
};

module.exports = {
  mode: "production",
  entry: path.join(appPaths.CLIENT, "index.js"),

  output: {
    path: appPaths.PUBLIC,
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
        test: /\.css$/,
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


    new MiniCssExtractPlugin({
      filename: "dist/css/styles.css"
    }),
   /*  new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }) */
  ]
};

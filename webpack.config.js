const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const FlowWebpackPlugin = require("flow-webpack-plugin");
var FlowBabelWebpackPlugin = require("flow-babel-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    // compress: true,
    // port: 9000, // use any port suitable for your configuration
    host: "0.0.0.0" // to accept connections from outside container
  },
  watchOptions: {
    aggregateTimeout: 500, // delay before reloading
    poll: 1000
  },
  mode: "development",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },

  plugins: [
    // new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      title: "Development"
    }),
    new FlowBabelWebpackPlugin({
      formatter: function(errorCode, errorDetails) {
        return (
          "A Flow error was detected: " + errorCode + "\n\n" + errorDetails
        );
      }
    })

    // new CopyWebpackPlugin([{ from: "./src/index.html" }])
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};

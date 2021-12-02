const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /nodeModules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.html$/,
          use: ["html-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[hash][ext][query]'
                }
        }
      ],
    },
    plugins: [new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
    ],
    
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                    "@babel/preset-typescript",
                ]
            }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader'},
          { loader: 'postcss-loader', options: { plugins: []} },
          { loader: 'sass-loader'}
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: {
            caseSensitive: true,
            conservativeCollapse: true,
            keepClosingSlash: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: false,
            collapseWhitespace: false,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
          },
        },
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[contenthash].[ext]",
            outputhPath: "imgs"
          }
        }
      },
      // {
      //   test: /\.[jt]s$/,
      //   exclude: /(node_modules)/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         presets: ['@babel/preset-env'],
      //       },
      //     },
      //   ],
      // },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: './public/favicon.png',
      template: './public/index.html',
      manifest: './public/manifest.json',
      inject: true,
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js', 
    clean: true,
  },
}

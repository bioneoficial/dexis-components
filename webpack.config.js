const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

// const styledComponentsTransformer = createStyledComponentsTransformer();

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
      // {
      //   test: /\.tsx?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         [
      //           '@babel/preset-env', {
      //              targets: "defaults" 
      //           }, 
      //           "@babel/preset-typescript"
      //         ]
      //       ]
      //     }
      //   }
      // },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: 
        [
          {
            //needed to chain sourcemaps.  see: https://webpack.js.org/loaders/source-map-loader/
            loader: 'source-map-loader',
            options: {
              filterSourceMappingUrl: (url, resourcePath) => {
                if (/.*\/node_modules\/.*/.test(resourcePath)) {
                    return false
                }
                return true
              }
            }
          }
        ],
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

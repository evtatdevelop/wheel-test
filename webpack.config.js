var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/img', to: 'img' },
        { from: './src/static', to: '' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [ 
          { loader: 'style-loader' },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: { 
              sourceMap: true, 
              postcssOptions: {
                plugins: [
                  [ 'autoprefixer' ],
                  [ 'cssnano',
                    {
                      preset: [
                        'default', 
                        { discardComments: { removeAll: true, } }
                      ]
                    }
                  ]
                ],
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' }, 
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: { 
              sourceMap: true, 
              postcssOptions: {
                plugins: [
                  [ 'autoprefixer' ],
                  [ 'cssnano',
                    {
                      preset: [
                        'default', 
                        { discardComments: { removeAll: true, } }
                      ]
                    }
                  ]
                ],
              }
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          },

        ]
      }

    ]
  }
};
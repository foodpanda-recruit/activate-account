const path = require('path');
const glob = require('glob');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  views: path.resolve(__dirname, 'index.html'),
};

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'lib'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot:true,
    compress: true,
    open:"Chrome",
    openPage:'index.html'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '.style.css',
    }),
    new PurgecssPlugin({
      whitelist: () => [],
      whitelistPatterns: () => [],
      whitelistPatternsChildren: () => [],
      paths: glob.sync(`${PATHS.views}/**/*`, { nodir: true })
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          minifyCSS: true,
          minifyJS: true,
          sortAttributes: true,
          useShortDoctype: true
      },
      inject: false
  })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      },
      {
        test: /\.(eot|woff|woff2|[ot]tf)$/,
        use: {
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: './fonts/',
              publicPath: '/fonts/'
          }
        }
      },
      {
        test: /.*font.*\.svg$/,
        use: {
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: './fonts/',
              publicPath: '/fonts/'
          }
        }
      },
      {
        test: /^(?!.*font).*\.svg$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './images/',
            publicPath: '/images/'
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|webp)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './images/',
            publicPath: '/images/'
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer'),
                  require('cssnano')({
                    preset: [
                      'default', 
                      { discardComments: { removeAll: true } }
                    ]})
                ];
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: { comments: false }
          },
          extractComments: false
        })
    ]
}
};

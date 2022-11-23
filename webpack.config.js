const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';

const devMode = mode ==='development'

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;
const pages = ["index", "quiz","result","gallery"];


module.exports = {
    mode,
    target,
    devtool,
    devServer:{
        port:3000,
        open:["/gallery.html"],
        hot:true,
    },
    entry: pages.reduce((config, page) => {
      config[page] = `./src/${page}.js`;
      return config;
    }, {}),
    output: {
        path: path.resolve(__dirname,'dist'),
        clean:true,
        filename: '[name].[contenthash].js',
        assetModuleFilename:'assets/img/[hash][ext]'
    },
    
    plugins:
     [].concat(
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
    }),
      pages.map(
        (page) =>
        new HtmlWebpackPlugin({
            inject: true,
            template: `src/${page}.html`,
            filename: `${page}.html`,
            chunks: [page],
          }),
          new MiniCssExtractPlugin({
            filename:`[name].[contenthash].css`
          })
      )
    ),

    module:{
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  devMode? "style-loader" : MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions:{
                            plugins:[require('postcss-preset-env')]
                        }
                    }
                  },
                  "sass-loader",
                ],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
            {
                test: /\.(jpe?g|png|webp|gif)$/i,
                type: 'asset/resource',
                use:[{
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                          progressive: true,
                        },
                        // optipng.enabled: false will disable optipng
                        optipng: {
                          enabled: false,
                        },
                        pngquant: {
                          quality: [0.65, 0.90],
                          speed: 4
                        },
                        gifsicle: {
                          interlaced: false,
                        },
                        // the webp option will enable WEBP
                        webp: {
                          quality: 75
                        }
                      }
                }] ,
                generator: {
                    filename: 'assets/img/[hash][ext]'
                }
            },
            {
                test: /\.(svg)$/i,
                type: 'asset/resource',
                use:[{
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                          progressive: true,
                        },
                        // optipng.enabled: false will disable optipng
                        optipng: {
                          enabled: false,
                        },
                        pngquant: {
                          quality: [0.65, 0.90],
                          speed: 4
                        },
                        gifsicle: {
                          interlaced: false,
                        },
                        // the webp option will enable WEBP
                        webp: {
                          quality: 75
                        }
                      }
                }] ,
                generator: {
                    filename: 'assets/svg/[hash][ext]'
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    }
}
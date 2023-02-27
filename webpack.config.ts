import path from 'path'
import webpack from 'webpack'
import * as webpackDevServer from 'webpack-dev-server'
import HTMLWebpackPlugin from 'html-webpack-plugin'

const isDevelopment = process.env.NODE_ENV !== 'production'
const plugins: webpack.WebpackPluginInstance[] = [
  new HTMLWebpackPlugin({
    template: './src/index.html',
  }),
]

const config: webpack.Configuration = {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    hot: true,
    port: 3000,
  },
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/',
  },
  target: 'web',
  plugins,
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // {
      //   test: /\.(js|jsx|ts|tsx)$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: require.resolve('babel-loader'),
      //       options: {
      //         plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
}

export default config

// import { CleanWebpackPlugin } from 'clean-webpack-plugin'
// import CompressionPlugin from 'compression-webpack-plugin'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
// import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import path from 'path'
// import TerserPlugin from 'terser-webpack-plugin'
// import { EnvironmentPlugin, HotModuleReplacementPlugin, HashedModuleIdsPlugin } from 'webpack'

// const isDev = process.env.NODE_ENV !== 'production'

// module.exports = {
//   mode: isDev ? 'development' : 'production',

//   entry: path.resolve(__dirname, 'src', 'index.tsx'),

//   output: {
//     chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash].chunk.js',
//     filename: isDev ? '[name].js' : '[name].[chunkhash].js',
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: '/',
//   },

//   target: 'web',

//   resolve: {
//     extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
//   },

//   module: {
//     rules: [
//       {
//         enforce: 'pre',
//         test: /\.(ts|tsx)$/,
//         exclude: /node_modules/,
//         use: 'eslint-loader',
//       },
//       {
//         test: /\.(ts|tsx)$/,
//         exclude: /node_modules/,
//         use: 'babel-loader',
//       },
//       {
//         test: /\.html$/,
//         use: 'html-loader',
//       },
//       {
//         test: /\.css$/,
//         use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: 'file-loader',
//       },
//     ],
//   },

//   optimization: isDev
//     ? {
//         splitChunks: {
//           chunks: 'all',
//         },
//       }
//     : {
//         minimize: true,
//         minimizer: [
//           new TerserPlugin({
//             parallel: true,
//             sourceMap: true,
//             terserOptions: {
//               compress: {
//                 comparisons: false,
//               },
//               mangle: true,
//               output: {
//                 ascii_only: true,
//                 comments: false,
//               },
//               parse: {},
//               warnings: false,
//             },
//           }),
//         ],
//         nodeEnv: 'production',
//         sideEffects: true,
//         splitChunks: {
//           cacheGroups: {
//             vendor: {
//               test: /[\\/]node_modules[\\/]/,
//               name: function (module) {
//                 const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
//                 return `npm.${packageName.replace('@', '')}`
//               },
//             },
//           },
//           chunks: 'all',
//           maxInitialRequests: 10,
//           minSize: 0,
//         },
//       },

//   plugins: [
//     new CleanWebpackPlugin(),
//     new EnvironmentPlugin({
//       NODE_ENV: 'development',
//     }),
//     ...(isDev ? [new HotModuleReplacementPlugin()] : []),
//     new MiniCssExtractPlugin({
//       filename: isDev ? '[name].css' : '[name].[hash].css',
//     }),
//     new HtmlWebpackPlugin({
//       inject: true,
//       minify: !isDev,
//       template: path.resolve(__dirname, 'src', 'index.html'),
//     }),
//     ...(isDev
//       ? []
//       : [
//           new CompressionPlugin({
//             algorithm: 'gzip',
//             minRatio: 0.8,
//             threshold: 10240,
//             test: /\.js$|\.css$|\.html$/,
//           }),
//           new HashedModuleIdsPlugin({
//             hashDigest: 'hex',
//             hashDigestLength: 20,
//             hashFunction: 'sha256',
//           }),
//         ]),
//   ],

//   devServer: {
//     clientLogLevel: 'warning',
//     historyApiFallback: {
//       disableDotRule: true,
//     },
//     hot: true,
//     inline: true,
//     stats: 'minimal',
//   },

//   devtool: isDev ? 'cheap-module-eval-source-map' : 'hidden-source-map',
// }

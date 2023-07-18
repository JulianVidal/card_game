const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { InjectManifest } = require('workbox-webpack-plugin');


module.exports = env => {
  const basePath = env.base || "/";

  return {
    mode: "development",
    target: "web",
    devtool: "inline-source-map",
    entry: {
      "index": "./src/index.ts",
      "host/index": "./src/game/host.ts",
      "guest/index": "./src/game/guest.ts",
      "offer/index": "./src/offer/offer.ts",
      "answer/index": "./src/answer/answer.ts",
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: "[name]-bundle.js", // <--- Will be compiled to this single file
      clean: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: { onlyCompileBundledFiles: true }

        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
        meta: { viewport: 'width=device-width, initial-scale=1' },
        base: basePath,
        chunks: ['index']
      }),
      new HtmlWebpackPlugin({
        filename: 'offer/index.html',
        template: 'src/offer/index.html',
        meta: { viewport: 'width=device-width, initial-scale=1' },
        base: basePath,
        chunks: ['offer/index']
      }),
      new HtmlWebpackPlugin({
        filename: 'answer/index.html',
        template: 'src/answer/index.html',
        meta: { viewport: 'width=device-width, initial-scale=1' },
        base: basePath,
        chunks: ['answer/index']
      }),
      new HtmlWebpackPlugin({
        filename: 'host/index.html',
        template: 'src/game/index.html',
        meta: { viewport: 'width=device-width, initial-scale=1' },
        base: basePath,
        chunks: ['host/index']
      }),
      new HtmlWebpackPlugin({
        filename: 'guest/index.html',
        template: 'src/game/index.html',
        meta: { viewport: 'width=device-width, initial-scale=1' },
        base: basePath,
        chunks: ['guest/index']
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "src/game/cards",
            to: "cards/[path][name][ext]"
          },
        ],
      }),
      new InjectManifest({
        swSrc: './service-worker.js',
        swDest: './service-worker.js',
      }),
      new WebpackPwaManifest({
        name: 'Card Game',
        short_name: 'Game',
        description: 'P2P Card game',
        background_color: '#35654d',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512]
          },
        ]
      })
    ]
  };
}

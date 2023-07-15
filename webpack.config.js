const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  mode: "development",
  target: "node",
  devtool: "inline-source-map",
  entry: {
    "index": "./src/index.ts",
    "game/host": "./src/host.ts",
    "game/guest": "./src/guest.ts",
    "offer/index": "./src/offer.ts",
    "answer/index": "./src/answer.ts",
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: "[name]-bundle.js" // <--- Will be compiled to this single file
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

      }
    ]
  },
  plugins: [
    new InjectManifest({
      swSrc: './service-worker.js',
      swDest: './service-worker.js',
    })
  ]
};

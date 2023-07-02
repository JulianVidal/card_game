const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    "index": "./src/index.ts",
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
  }
};

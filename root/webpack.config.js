const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply ESLint to JavaScript files
        exclude: /node_modules/,
        use: ["babel-loader"], // Use Babel to transpile JavaScript files
      },
    ],
  },
  plugins: [
    new ESLintPlugin(), // Add ESLintWebpackPlugin
  ],
};

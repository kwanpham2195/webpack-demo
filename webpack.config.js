const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode,
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
}
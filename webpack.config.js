const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/components/app/main.js',
   output: {
      path: path.join(__dirname, './public/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      host: '0.0.0.0',
      port: 8080,
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
},{
test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000' }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './public/index.html'
      })
   ]
}

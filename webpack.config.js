const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  target: "web",
  entry: './client.js',
  output: {
    path: path.resolve('dist'),
    filename: 'client.js'
  },
  plugins: [
    new HtmlPlugin({
      title: 'Carlo Sample App',
      template: 'index.html'
    })
  ]
}
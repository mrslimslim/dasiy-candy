const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vendor: ['react','react-router','lodash','antd','react-router-dom']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'dll.js',
    library: '[name]_[hash]',
    libraryTarget: 'this'
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: path.join(__dirname,'dist','[name]-manifest.json'),
      name: '[name]_[hash]'
    })
  ]
}
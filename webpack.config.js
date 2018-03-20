const webpack = require('webpack');
module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/app/index.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/app",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  // resolve:{
  //   extensions:['','.js','.json'],
  //   alias:{
      
  //   }
  // },
  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'//添加对样式表的处理
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf|jpg)$/,
        loader: 'url-loader?limit=819200'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ],
}
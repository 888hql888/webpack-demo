// webpack的dev配置 （开发配置）
// 开发配置就不需要考虑打包和压缩等等，只需要考虑快速开发相关的和base公共配置就可以

// 使用 webpack-merge 合并 相同配置和dev开发下得配置 ps:要遵循commonjs规范
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
//将新合并对象暴露
module.exports = merge(baseConfig,{
    mode: "development", //默认是production
    devServer: {
        open: true,//自动开启
        hot: true,//热更新
        port: 4000,//端口号
        // contentBase: path.resolve(__dirname, 'src'),
        compress: true, //压缩
    },
    //多页面打包js，抽取相同的js
  //   optimization: {
  //     splitChunks: {
  //       chunks: 'all'
  //     }
  // },
    devtool: 'cheap-module-eval-source-map'
})

//到 pageage.json 配置对应的命令
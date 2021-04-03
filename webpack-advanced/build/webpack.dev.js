// webpack的dev配置 （开发配置）
// 开发配置就不需要考虑打包和压缩等等，只需要考虑快速开发相关的和base公共配置就可以

// 使用 webpack-merge 合并 相同配置和dev开发下得配置 ps:要遵循commonjs规范
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpack = require('webpack');
//将新合并对象暴露
module.exports = merge(baseConfig,{
    mode: "development", //默认是production
    devServer: {
        open: true,//自动开启
        hot: true,//热更新
        port: 4000,//端口号
        // contentBase: path.resolve(__dirname, 'src'),
        compress: true, //压缩
        proxy: {
            // /api/getUserInfo
            // 当前端请求 /api 地址时, 会将请求转发到 
            // http://localhost:9999/api
            // 举例: 客户端现在请求的时 /api/getUserInfo
            // 此时会将请求转发到: http://localhost:9999/api/getUserInfo
            '/api': 'http://localhost:9999',
            // 此时会将请求转发到: http://localhost:9999/getUserInfo
            // '/getUserInfo': 'http://localhost:9999'
            // '/api': {
            //   target: 'http://localhost:9999',
            //   // 转发请求时不会携带 /api
            //   // http://localhost:9999/getUserInfo
            //   pathRewrite: {
            //     '^/api': '/api'
            //   }
            // }
          }
    },
    plugins: [
        new webpack.DefinePlugin({
          //定义这个变量 可以在全局中去访问 （可以去index.js测试和访问）
          IS_DEV: 'true',
          // test: '1 + 1', // DefinePlugin会解析定义的环境变量表达式, 当成JS执行
          // test2: '"zs"'
        })
    ],
    //默认为none不开启，当我们想要查看源代码时候，发现会有很多不相关的代码，之所以有这些代码，时因为babel进行了代码转义
    // 那么 我们如果就想看到没转义的代码 怎么办呢？ 如下 开启 source map 我们就可以准确定位源码的位置了
    // 开发环境 我们是不使用以下的 source map的，因为会让别人看到源码.
    devtool: 'cheap-module-eval-source-map'
})

//到 pageage.json 配置对应的命令
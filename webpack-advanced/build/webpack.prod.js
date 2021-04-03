// webpack 生产环境配置
//主要考虑 代码的压缩 图片压缩 等等一系列优化相关 以及 base相同配置

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpack = require('webpack');


module.exports = merge(baseConfig,{
    mode: "development", //默认是production
    //这里不配置 source-map 了 默认是none，别人看不到源码.
    plugins: [
        new webpack.DefinePlugin({
          //定义这个变量 可以在全局中去访问 （可以去index.js测试和访问）
          IS_DEV: 'false',
          // test: '1 + 1', // DefinePlugin会解析定义的环境变量表达式, 当成JS执行
          // test2: '"zs"'
        })
    ],
})
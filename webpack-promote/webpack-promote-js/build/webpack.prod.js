// webpack 生产环境配置
//主要考虑 代码的压缩 图片压缩 等等一系列优化相关 以及 base相同配置

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');


module.exports = merge(baseConfig,{
    mode: "production", //默认是production

})
/**
 * webpack通常会有两个或者两个以上的配置文件，开发环境和生产环境
 * 通常npx webpack 后面可以指定参数，让打包使用哪个文件 如：npx webpack config -- webpack.config.custorm.js
 * 进一步 我们可以通过 npm 的 script指令 来设置打包 而不再使用 npx xxxx  如：build:' webpack config --webpack.config.custorm.js'
 * 使用时 直接 :npm run build
 */


// 1.入口 2.出口
const path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode:"production", //默认是production
}
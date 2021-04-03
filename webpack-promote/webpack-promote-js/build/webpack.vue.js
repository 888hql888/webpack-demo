const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: {
        vue: [
            'vue/dist/vue.js',
            'vue-router'
          ]
    },
    mode:"production",
    output: {
        filename: '[name]_dll.js',
        path: path.resolve(__dirname, '../dist'),
        library: '[name]_dll'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_dll',
            path: path.resolve(__dirname, '../dist/manifest.json')
          })
    ],
}
//配置以上文件后，再去 packagejson 创建 npm run build:vue 指令创建专门用来打包 dll文件的一系列很少变动的库
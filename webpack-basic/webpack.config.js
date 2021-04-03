// webpack基本配置

// 1.入口 2.出口
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin'); //引入可在内存中生成.html 类似于 webpack-dev-server 的bunlde.js文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// 每次 build 会先清除dist目录的插件
const CopyWebpackPlugin = require('copy-webpack-plugin'); //打包静态资源插件 copy-webpack-plugin
const webpack = require('webpack') // webpack自带的  版权信息注释插件 打印在dist目录bundls.js

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    mode: "development", //默认是production
    // watch:true, //开启监听模式，当文件发生改变自动打包
    // webpack-dev-server 配置项
    /**
     * 端口号 自动打开 热更新模块 设置根文件index.html目录 压缩 输入的文件默认是在当前"/"根目录下等
     */
    devServer: {
        open: true,//自动开启
        hot: true,//热更新
        port: 4000,//端口号
        // contentBase: path.resolve(__dirname, 'src'),
        compress: true //压缩
    },
    //配置 plugins 插件
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html', //模板html：拷贝哪个文件
            filename: 'index.html' //内存中的文件名，如果改成其它名字则直接 localhost:8000 无法访问到
        }),
        new CleanWebpackPlugin(),
        //打包静态资源啊图片（非css中的图片）
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, 'assets'),  //dirname代表根目录
                to: 'assets'  //生成到dist目录下得 assets目录
            }
        ]),
        new webpack.BannerPlugin('黄千里webpack学习版权所属,需要转载请联系作者!!!')


    ],
    //配置loader
    // loader中 rules的use使用顺序是有讲究的，顺序使用从右到左，！！！
    // css-loader:解析css为js语言 style-loader:将解析出来的css加载到html页面上.(顺序不能写错)

    /**
     * less-loader 和 sass-loader 使用:先使用 less/sass -loader 将less/sass转化为 css语言，在使用css-loader转化为Js,
        再使用 style-loader添加到html页面
     */

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.s(c|a)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            //配置处理图片的 file-loader
            // {
            //     test: /\.(jpg|jpeg|png|bmp|gif)$/,
            //     use: 'file-loader' //只有一个loader可以省略数组[]
            // },
            //配置处理字体文件的 file-loader
            // { test: /\.(woff|woff2|eot|svg|ttf)$/, use: 'file-loader' },

            //配置通过 url-loader 处理图片和字体文件
            /**
             * url-loader 是基于file-loader封装的，所以前提必须安装file-loader
             * url-loader 相比fil-loader功能更丰富，并且可以限制图片的大小
             * 可以设置options的limit限制(单位kb)， 假设限制：5*1024 kb 那么大于 5*1024 会将图片的地址生成一个 hash 值得url
             * 如果小于则 生成base64的编码 。提升了性能：因为如果css使用有url的链接，都会去发送请求，浪费一定资源.
             * 一般限制 5*1024 kb, 因为base要比原图多30%空间，如果作用在大图上是不合适的。
             */
            {
                test: /\.(jpg|jpeg|png|bmp|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 5 * 1024,
                        outputPath: 'images', //设置存储在 根目录下 以及 dist打包后的目录 /images/bgc0a0s5.jpg
                        name: '[name]-[hash:4].[ext]' // [name]:图片原名 [hash:4]:生成4位哈希值 [ext]:原图片扩展名 将三个拼接起来
                    }
                }
            },
            { test: /\.(woff|woff2|eot|svg|ttf)$/, use: 'url-loader' },

            // babel-loader 将ES6编译成ES5通用语 (build打包时 dist)
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    //使用.babelrc 配置单独的babel文件
                    // options: {
                    //   presets: ['@babel/env'],
                    //   plugins: [
                    //     '@babel/plugin-proposal-class-properties',
                    //     '@babel/plugin-transform-runtime'
                    //   ]
                    // }
                },
                exclude: /node_modules/,

            }

        ]
    },
    //默认为none不开启，当我们想要查看源代码时候，发现会有很多不相关的代码，之所以有这些代码，时因为babel进行了代码转义
    // 那么 我们如果就想看到没转义的代码 怎么办呢？ 如下 开启 source map 我们就可以准确定位源码的位置了
    // 开发环境 我们是不使用以下的 source map的，因为会让别人看到源码.
    // devtool: 'cheap-module-eval-source-map',


}
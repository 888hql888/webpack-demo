// webpack的公共配置 dev和prod都需要的配置

// 1.入口 2.出口
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');//引入可在内存中生成.html 类似于 webpack-dev-server 的bunlde.js文件
const webpack = require('webpack'); // webpack自带的  版权信息注释插件 打印在dist目录bundls.js
// 给css单独打包和样式引入方式改变  这个插件 开发环境和线上环境都适合，所以是共同需要的，配置在base下.
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/main.js',
    //设置多页面打包，entry改写成对象
    //设置多页面对应出口 使用[name]表示 对应出口的名字 ps:webpack特有写法
    output: {
        path: path.join(__dirname, "..",'/dist/'),  
        filename: 'bundle.js'
    },
    //配置 plugins 插件
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html', //模板html：拷贝哪个文件
            filename: 'index.html', //内存中的文件名，如果改成其它名字则直接 localhost:8000 无法访问到

        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    //配置loader
    // loader中 rules的use使用顺序是有讲究的，顺序使用从右到左，！！！
    // css-loader:解析css为js语言 style-loader:将解析出来的css加载到html页面上.(顺序不能写错)

    /**
     * less-loader 和 sass-loader 使用:先使用 less/sass -loader 将less/sass转化为 css语言，在使用css-loader转化为Js,
        再使用 style-loader添加到html页面
     */
    // 注意 我们使用 MiniCssExtractPlugin 这个插件的作用，1.将css单独抽离成一个文件 2.改变之前的style-loader 加载css样式 为使用 style标签
    // ，改用外部链接引入，更能提升性能和符合开发.所以在渲染到html的样式上，必须使用新插件的loader代替 style-loader

    // 使用 postcssloader 和 autofixer 插件给css添加前缀 要注意 postcss-loader 的use写法，要加载css-loader前面，在拿到样式先加上前缀.
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader']
            },
            // {
            //     test: /\.s(c|a)ss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // },
            {
                test: /\.s(c|a)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','sass-loader']
            },
            // {
            //     test: /\.less$/,
            //     use: ['style-loader', 'css-loader', 'less-loader']
            // },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','less-loader']
            },

            //配置处理图片的 file-loader
            // {
            //     test: /\.(jpg|jpeg|png|bmp|gif)$/,
            //     use: 'file-loader' //只有一个loader可以省略数组[]
            // },
            // //配置处理字体文件的 file-loader
            // { test: /\.(woff|woff2|eot|svg|ttf)$/, use: 'file-loader' },
            //专门用来打包html中的img标签的插件，结合url-loader一起使用
            // {
            //     test: /\.(htm|html)$/i,
            //     loader: 'html-withimg-loader'
            // },

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
                        name: '[name]-[hash:4].[ext]', // [name]:图片原名 [hash:4]:生成4位哈希值 [ext]:原图片扩展名 将三个拼接起来
                        esModule: false

                    }
                }
            },
            { test: /\.(woff|woff2|eot|svg|ttf)$/, use: 'url-loader' },
        ]
    }

}
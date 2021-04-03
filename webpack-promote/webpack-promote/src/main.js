/**
 * 整个webpack打包的起点
 */
import a from './a'
console.log(a);
console.log('hello webpack哦 xxxxxxyyyyy');
console.log('hello webpack哦 xxxxxxyyyyy');
console.log('hello webpack哦 xxxxxxyyyyy');
console.log('hello webpack哦 88888888999999915555555555555588888');

//引入css
// 在js文件中引入css,js文件时没办法解析css文件的，所以必须使用loader, style-loader 和 css-loader
 /**
  * loader作用：解析器，将无法被js识别的文件或者代码，转换成可识别的js代码
  */
import './css/a.css'
import './css/index.css'

//引入less
import './less/index.less'
//引入scss
import './scss/index.scss'
// 引入bootstrap的css文件 测试file-loader的 字体文件处理功能
import 'bootstrap/dist/css/bootstrap.css'


/**
 * babel-loader使用，默认没有使用babel-loader webpack是不会去将 ES6的代码转化为ES5通用的代码
 * 这样会存在一个问题，虽然现在普遍的浏览器以及支持了ES6的语法，但是很多旧的浏览器仍然不支持，
 * 这样打包后的dist目录 无法兼容旧的浏览器，需要转化！！！
 */

setTimeout(function(){
  console.log('我是未使用ES6语法，也未使用babel-loader')
},1000)

setTimeout(()=>{
  console.log('我是使用ES6语法，也使用babel-loader')
},1000)

//更高级的JS 语法 es2017 2018 2019 等等 ，对应的插件需要到babel=>插件 下载对应的包
// 当前只是演示其中一个包 一下语法现代浏览器也很多不支持（浏览器报错）

class Dog{
  name = '大黄' //高级语法 一般语法是点语法
  static color ="yellow"
}
let d = new Dog();
console.dir(d);
console.log(Dog);

//测试更高级 语法 genertor
function *fn() {
  yield 1
  yield 2
  return 3
}

let newFn = fn()
console.log(newFn.next()) // 1
console.log(newFn.next()) // 2
console.log(newFn.next()) // 3
console.log(newFn.next()) // undefined


// babel的一个缺陷是  没办法处理 对象/数组的 方法调用 ，虽然大部分浏览器支持，但是仍有一部分旧浏览器不支持
// 此时我们希望打包成 dist 目录时候 babel可以给我们做转换


// 解决办法是 安装 '@babel/polyfill' 并在使用了 对象.方法的地方调用 （也有其它方法 如在 webpack配置文件的 entry配置）
import '@babel/polyfill'

let str = '123'
// JS是一门动态语言, 在代码执行时可以随时为对象添加属性或方法
// babel在看到对象调用方法时默认不会进行转换
// includes这样的新方法, 默认不会转换
console.log(str.includes('2'))
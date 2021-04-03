//require commonjs规范
// let a = require('./a')
// import a from './a'
// console.log(a);
// console.log('hello webpack哦');



//测试 将第三方库注入 到window下
/**
 * 使用expose-loader可以将$注入到全局的window上，挂载到上面
 */

//直接import引用是可以使用jquery包的
// import $ from 'jquery' // node_modules/jquery/package.json > main
// console.log($)

// console.log(window.$) //通过使用 expose-loader 挂载到window上

// $('body').css('backgroundColor', 'green')


// 模拟测试 生成环境和开发环境下 不同的域名切换请求地址

// import { getUserInfo,corsGetUserInfo } from './api/http.js'
// getUserInfo().then(() => { }, (err) => {
//   console.log(err)
// })

// 测试跨域
// corsGetUserInfo().then(() => { }, (err) => {
//     console.log(err)
//   })


// =============================


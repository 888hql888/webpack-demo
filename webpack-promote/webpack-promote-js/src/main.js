
//静态导入
// 缺点：不管三七二十一 直接 导入jquery ，而不是按需要导入
// import $ from 'jquery'
// $(function() {
//     $("#btn").click(function(){
//        $("<div></div>").html("我是main").appendTo('body');
//       });
//     // $("#btn").html("<div></div>").appendTo('body');
// })


//动态导入(推荐)
// 优点:只有当需要用到jquery时 才会按需导入，否则没用到就不导入
// vue/react 的路由 懒加载 就是同样的道理 使用import 实现的按需导入 （懒加载）

//封装一个动态返回dom 以及jquery 对象

// window.onload = function () {
//     document.getElementById('btn').onclick = function () {
//       // 当用户点击按钮时才会执行
//       getComponent().then(item => {
//         item.appendTo('body')
//       })
//     }
//   }
  
//   // 动态导入
//   function getComponent() {
//     return import(/* webpackPrefetch: true */ 'jquery').then(({ default: $ }) => {
//       return $('<div></div>').html('我是main')
//     })
//   }

// import moment from 'moment'
// // 手动引入语言包
// import 'moment/locale/zh-cn'
// // 设置语言
// moment.locale('zh-CN')
// console.log(moment().subtract(6, 'days').calendar())


// 测试将 vue vue-router 等一系列只需要打包一次的文件 打包存储起来
// 避免多次打包构建都需要再重新打包 框架等这种基本不会改变的代码.
import Vue from 'vue/dist/vue.js' // 完整版的vuejs
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const homeComponent = {
  template: '<h2>我是homeaaa页面,你好哇!!!黑马程序员!!!!!!嘿嘿嘿!!!哇 好厉害哦!</h2>'
}

const newsComponent = {
  template: '<h2>我是newsheiheihei页面</h2>'
}

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: homeComponent
    },
    {
      path: '/news',
      component: newsComponent
    }
  ]
})

new Vue({
  el: '#app',
  data: {
    msg: 'helloworld'
  },
  router
})
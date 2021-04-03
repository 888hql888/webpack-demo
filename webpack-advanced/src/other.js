console.log('我是other.js')

//没有使用 import $ from 'jquery' 引入 我们使用的是webpack自带的插件 引入 更方便
//这样不用每个需要的页面都写 import ......

$('body img').css('border', '4px solid black');


console.log('我是other.js')

//没有使用 import $ from 'jquery' 引入 我们使用的是webpack自带的插件 引入 更方便
//这样不用每个需要的页面都写 import ......

$('body img').css('border', '4px solid black');

//webpack优化01 tree sharing 摇树优化

// 测试require导入时，是不会开启摇树优化的 (所有代码都会打包)
// let math = require('./math');
// console.log(math)
// console.log(math.add(1,2));

// 使用 import 和export 是可以开启摇树优化
import {add} from './math'
console.log(add(1,2),'import add...');





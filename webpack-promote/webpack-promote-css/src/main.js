
//专门针对CSS进行的优化 (专门的一个目录，之前的太多模块混乱,这样比较清晰)
import './css/a.css'
import './css/index.css'

//引入less
import './less/index.less'
//引入scss
import './scss/index.scss'


// 1.学习使用webpack插件，单独抽离css样式为独立文件并且打包，之前的样式处理是为每个html页面添加独自的 style标签
// 并且添加相关的样式，这种做法不好，而且消耗性能.
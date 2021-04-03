//测试 tree shaking 摇树优化原理
// 使用静态结构 import export 引入时 会自动 “摇晃掉” 清除掉 未使用到的代码

export const add = (a,b) => { return a+b;
}

export const minus = (a,b) =>{ return a-b;
}
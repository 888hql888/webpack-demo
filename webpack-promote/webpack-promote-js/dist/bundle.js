/*! 黑马程序员真牛biubiu! */!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t,n){e.exports=n(2)(2)},function(e,t,n){e.exports=n(2)(6)},function(e,t){e.exports=vue_dll},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(1);o.a.use(u.default);var a=new u.default({routes:[{path:"/home",component:{template:"<h2>我是homeaaa页面,你好哇!!!黑马程序员!!!!!!嘿嘿嘿!!!哇 好厉害哦!</h2>"}},{path:"/news",component:{template:"<h2>我是newsheiheihei页面</h2>"}}]});new o.a({el:"#app",data:{msg:"helloworld"},router:a})}]);
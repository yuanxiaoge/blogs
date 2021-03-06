# 微前端

微前端方式：
1. 通过nginx配置导航不同系统
    * 常见方式，缺点：每次都刷新页面
1. 通过iframe组合
    * 常见方式，缺点：应用间交互麻烦
1. 通过路由进行应用拆分
    * 目前较为主流的方式，需要一点架构改造，比如：统一依赖，各子应用如何互相隔离（包括数据流隔离、css样式隔离等）、部署改造
    * 缺点：需要统一技术栈，因为实质还是通过主路由+懒加载实现。
1. [single-spa](https://github.com/CanopyTax/single-spa)解决方案
    * 能跨技术栈，但有一些缺点，目前阶段难用在生产阶段。生产使用可以考虑基于single-spa的框架，比如qiankun。
1. webcomponents
    * 较好的方式，引入js/style进行隔离（ShadowDOM）
    * 缺点：1. 技术新，兼容性不好，改造现有应用难；2. 不成熟的生态，组件间的数据通信是大问题。

single-spa的原理就是，将子项目中的link/script标签和`<div id="app"></div>`插入到主项目，而这个操作的核心就是动态加载js和css。

## iframe的优缺点

### 缺点

1. 页面加载问题: 影响主页面加载，阻塞onload事件，本身加载也很慢，页面缓存过多会导致电脑卡顿。(无法解决)

2. 布局问题：iframe必须给一个指定的高度，否则会塌陷。解决办法：子系统实时计算高度并通过postMessage发送给主页面，主页面动态设置高度，修改子系统或者代理插入脚本。有些情况会出现多个滚动条，用户体验不佳。

3. 弹窗及遮罩层问题：只能在iframe范围内垂直水平居中，没法在整个页面垂直水平居中。

    * 解决办法1：通过与框架页面消息同步解决，将弹窗消息发送给主页面，主页面来弹窗，对原项目改动大且影响原项目的使用。
    * 解决办法2：修改弹窗的样式：隐藏遮罩层，修改弹窗的位置。修改的办法就是通过代理服务器插入css样式。
    * 补充：iframe里面的内容无法实现占满屏幕的弹窗（非全屏），他只能在iframe范围内全屏，无法跳出iframe的限制在主页面全屏，不过这种情况也很少。

4. 浏览器前进/后退问题：iframe和主页面共用一个浏览历史，iframe会影响页面的前进后退，大部分时候正常，iframe多次重定向则会导致浏览器的前进后退功能无法正常使用，不是全部页面都会出现，基本可以忽略。但是iframe页面刷新会重置（比如说从列表页跳转到详情页，然后刷新，会返回到列表页），因为浏览器的地址栏没有变化。

5. iframe的页面跳转到其他页面出问题，比如两个iframe之间相互跳转，直接跳转会只在iframe范围内跳转，所以必须通过主页面来进行跳转。不过iframe跳转的情况很少

6. 不同源的系统之间的通讯需要通过postMessage，存在一定的安全性


### 优点

1. 完全隔离了css和js，避免了各个系统之间的样式和js污染
1. 可以在子系统完全不修改的情况下嵌入进来





## qiankun解决方案

基于single-spa，但使用起来更方便

single-spa缺点：single-spa要求所有js/css/images等资源，都统一打包到一个js文件中，过大。
qiankun改进点：支持入口为index.html，因为qiankun内使用import-html-entry提取出了依赖的js、css文件等，更利于并行加载

### 1. [import-html-entry](https://github.com/kuitos/import-html-entry/blob/master/src/index.js#L216)

通过该工具函数，可解析html为入口

import-html-entry源码解析：
1. 根据html的url，拿到所有html文档内容
1. 根据正则，拿到template/scripts/entry/styles等内容
1. 返回内容和处理方法


## 参考资料

* https://zhuanlan.zhihu.com/p/39102712
* https://tech.meituan.com/2018/09/06/fe-tiny-spa.html
* [qiankun微前端解决方案](https://zhuanlan.zhihu.com/p/78362028)
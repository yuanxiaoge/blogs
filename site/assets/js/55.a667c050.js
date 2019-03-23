(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{321:function(t,s,a){"use strict";a.r(s);var n=a(9),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"node-解惑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-解惑","aria-hidden":"true"}},[t._v("#")]),t._v(" Node-解惑")]),t._v(" "),a("p",[t._v("Node.js已经出来很久了，但依然是一门火热的技术，值得前端开发人员进行投入。网上Node.js的介绍和教程也非常多，笔者这里对一些容易疑惑的地方进行解释。")]),t._v(" "),a("h2",{attrs:{id:"node和javascript的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node和javascript的关系","aria-hidden":"true"}},[t._v("#")]),t._v(" Node和Javascript的关系")]),t._v(" "),a("p",[a("strong",[t._v("Node.js是一个Javascript运行环境，依赖于Chrome V8引擎进行代码解释")]),t._v("。熟悉javascript历史的人知道，最初的js定位作为一个脚本语言，只能应用在web浏览器上，写一些表单校验和页面特效等。在很长一段时间里，js依然是前端开发把玩的工具，只操作一些页面DOM元素。直到2009年 Ryan Dahl开发了Node.js，基于google开源的javascript运行时环境-V8引擎上，结合Libuv扩展了javascript的能力。使得javascript不仅可以操作前端页面DOM元素，同时可以对文件读写、I/O操作、数据库读写等后端语言才有的能力。这也让全栈开发工程师门槛变得简单，只要学会一门javascript语言。当然，全栈工程师所在的价值不仅是只会一门或多门语言，而是碰到具体问题，能综合考量技术与非技术因素，使用符合团队的技术解决方案。")]),t._v(" "),a("h2",{attrs:{id:"node特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node特性","aria-hidden":"true"}},[t._v("#")]),t._v(" Node特性")]),t._v(" "),a("p",[t._v("Node.js是一个Javascript运行环境\n依赖于Chrome V8引擎进行代码解释\n事件驱动\n非阻塞I/O\n单进程，单线程\n轻量、可伸缩")]),t._v(" "),a("h2",{attrs:{id:"node解决了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node解决了什么","aria-hidden":"true"}},[t._v("#")]),t._v(" Node解决了什么")]),t._v(" "),a("ul",[a("li",[t._v("并发连接\n"),a("ul",[a("li",[t._v("并发用程序来解释就是一群用户同时来访问我们的网站/程序。")]),t._v(" "),a("li",[t._v("处理并发的时候，都是尽可能的做到读写分离，或者分布式部署不同的服务器，或者直接简短粗暴的提升我们单机服务器的性能。")]),t._v(" "),a("li",[t._v("每进来一个网络请求或者其它的异步操作，Node.js都会把它放到“事件队列”之中，并不会立即执行它，代码就不会被阻塞，主线程继续往下走，直到主线程代码执行完毕。")]),t._v(" "),a("li",[t._v("当主线程代码执行完毕完成后，通过事件循环机制，从“事件队列”的开头取出一个事件，从线程池中分配一个线程去执行这个事件，接下来继续取出第二个事件，再从线程池中分配一个线程去执行，一直执行到事件队列的尾部。期间主线程不断的检查事件队列中是否有未执行的事件，直到事件队列中所有事件都执行完，此后每当有新的事件加入到事件队列中，都会通知主线程按顺序取出交代码循环处理。当有事件执行完毕后，会通知主线程，主线程执行回调，线程归还给线程池。")])])]),t._v(" "),a("li",[t._v("I/O阻塞")])]),t._v(" "),a("h2",{attrs:{id:"异步i-o"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步i-o","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步I/O")]),t._v(" "),a("p",[t._v("很多教程里都会描述到node的这个特性。先来解释下I/O，I/O是input/output（输入/输出）简写。像平时的读写文件、http请求响应，都属于input/output操作。I/O操作通常比较费时，比如读取一个大文件，可能完全读取好需要10s以上。在等待的10s时间里，线程啥也干不了，空闲着，等文件读取好后才继续耗时间走接下来的流程。试想下按照以上模式，100个请求过来，线程空闲的时间得多少。这种情况，我们叫它"),a("strong",[t._v("阻塞I/O")]),t._v("，如何解决这个问题呢？对于其他后端语言如Java、C#，可以通过多线程解决这个问题，开启一个新线程进行读取文件数据，再把结果合并回主进程中。但对于javasciript语言不行，因为"),a("strong",[t._v("js主线程是单线程")]),t._v("的，无法通过js语法创建新的线程（service work是后面补充的规范），但node是一个可以执行多线程的环境。如何使用node的多线程呢？通过源码可以知道，当遇到I/O操作时，JS主进程将调用node Libuv，把请求对象推入线程池，以此实现新开线程，这样不会阻塞主进程执行。")]),t._v(" "),a("blockquote",[a("p",[t._v("注意：js主进程是单线程，node是多线程。Node.js因为是基于JavaScript的特性，所以单线程的。但是，单线程只局限于JavaScript部分，Node.js核心还是用C/C++语言编写的，它只是给JavaScript提供了一个运行环境而已，它是JavaScript语言的解释器。")])]),t._v(" "),a("h3",{attrs:{id:"事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),a("p",[t._v("node的多线程解决了底层异步I/O的调用问题，但解析数据后回调顺序如何界定呢？js语言使用事件循环来解决这个问题。假设主进程进行了100个I/O操作，等于将100个线程推进线程池。线程池工作好一个线程上的I/O操作，就会把结果(包含回调函数)返回给一个事件队列Event Queu，再通知Event Loop进行调用。Event Loop根据先进先出的方式依次排列好这些回调函数，等到JS主进程执行完毕后，再开始依次序一条条将队列中的函数推到主进程中执行。总起起来，事件循环事实上是对I/O操作的回调函数的集合做循环")]),t._v(" "),a("blockquote",[a("p",[t._v("事件循环核心是回调函数，理解回调函数能帮助更好理解。")])]),t._v(" "),a("ul",[a("li")]),t._v(" "),a("p",[t._v("js通过事件循环(event loop)来达到异步I/O（也叫非阻塞I/O）。")]),t._v(" "),a("h3",{attrs:{id:"事件循环-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),a("p",[t._v("js是单线程的，所以服务器端js主进程也是运行在单线程的。但node")]),t._v(" "),a("p",[t._v("Node.js的异步机制是基于事件的，所有磁盘I/O、网络通信、数据库查询都以非阻塞的方式请求，返回的结果由事件循环来处理。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"fs"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("readFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"./testfile"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"utf8"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" error"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"我读完文件了！"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"我不会被阻塞！"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"node基本原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node基本原理","aria-hidden":"true"}},[t._v("#")]),t._v(" Node基本原理")]),t._v(" "),a("p",[t._v("Node的成功使得最简单的全栈。Webpack")]),t._v(" "),a("p",[t._v("Node包含很多模块，比如常用的http、fs、stream等。通过这些模块，使得node可以类似服务端语言，操作文件以及http流处理等。")]),t._v(" "),a("p",[t._v("Node.js 是基于 Chrome V8引擎构建的，由事件循环（Event Loop）分发 I/O 任务，最终工作线程（Work Thread）将任务丢到线程池（Thread Pool）里去执行，而事件循环只要等待执行结果就可以了。")]),t._v(" "),a("p",[t._v("JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事\n单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。\n如果排队是因为计算量大，CPU 忙不过来，倒也算了，但是很多时候 CPU 是闲着的，因为 I/O 很慢，不得不等着结果出来，再往下执行\nCPU 完全可以不管 I/O 设备，挂起处于等待中的任务，先运行排在后面的任务\n将等待中的 I/O 任务放到 Event Loop 里\n由 Event Loop 将 I/O 任务放到线程池里")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/i5ting/How-to-learn-node-correctly/raw/master/media/14912707129964/14992384974942.png",alt:"image"}})]),t._v(" "),a("p",[t._v("核心")]),t._v(" "),a("ul",[a("li",[t._v("Chrome V8 解释并执行 JavaScript 代码（这就是为什么浏览器能执行 JavaScript 原因）")]),t._v(" "),a("li",[t._v("libuv 由事件循环和线程池组成，负责所有 I/O 任务的分发与执行")])]),t._v(" "),a("p",[t._v("在Node.js Bindings层做的事儿就是将 Chrome V8 等暴露的 C/C++ 接口转成JavaScript Api，并且结合这些 Api 编写了 Node.js 标准库，所有这些 Api 统称为 Node.js SDK.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("readFileAsArray")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cb"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  fs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("readFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 异步调用")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("cb")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 异步调用")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lines "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("trim")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("cb")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lines"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("readFileAsArray")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./numbers.txt'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lines"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'count:'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lines"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现\nNode.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.")]),t._v(" "),a("h2",{attrs:{id:"事件驱动程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件驱动程序")]),t._v(" "),a("p",[t._v("Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。")]),t._v(" "),a("p",[t._v("当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。")]),t._v(" "),a("p",[t._v("这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。（这也被称之为非阻塞式IO或者事件驱动IO）")]),t._v(" "),a("p",[t._v("在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。")]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.runoob.com/nodejs/nodejs-event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs-event-loop"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("https://loveky.github.io/2017/06/05/translate-node-stream-everything-you-need-to-know/")])])},[],!1,null,null,null);o.options.__file="Node事件驱动.md";s.default=o.exports}}]);
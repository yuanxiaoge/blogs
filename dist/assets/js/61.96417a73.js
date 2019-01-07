(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{202:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("应产品要求，私有化部署主要考虑windows端，mac端其次。框架选型使用"),a("a",{attrs:{href:"https://github.com/SimulatedGREG/electron-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("electron-vue"),a("OutboundLink")],1),t._v("脚手架(这里也强烈推荐)，该脚手架包含Vue技术栈单页应用 + electron + 打包完整流程。内置Vuex，Vue-Router，Webpack，electron-builder等。下面的大部分实践"),a("a",{attrs:{href:"https://github.com/lq782655835/electron-vue-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码放在这"),a("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("这应该是每一个使用electron实现web客户端都会遇到的问题，使用原生的外边框，第一太丑，第二也不统一。")]),t._v(" "),a("p",[t._v("解决方案：frame + css drag")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._m(7),t._v(" "),a("p",[t._v("该bug只在windows平台上显示，mac上正常。在header组件中设置为drag，导致组件里的元素都无法点击。")]),t._v(" "),a("p",[t._v("解决方案：在需要点击的元素上添加no-drag。"),a("code",[t._v("-webkit-app-region: no-drag;")]),t._v("详细看此"),a("a",{attrs:{href:"https://github.com/electron/electron/issues/1354",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),a("OutboundLink")],1)]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("当设置了为drag时，在windows上会屏蔽所有的鼠标事件,所以hover不起作用。这是一个由操作系统导致的问题，故无法修复，相关"),a("a",{attrs:{href:"https://github.com/electron/electron/issues/13534",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),a("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("electron-vue在开发环境默认启用electron-debug插件开启调试。但打包完成，交付到测试同学手里，需要在错误的时候打开开发者工具定位问题。")]),t._v(" "),a("p",[t._v("解决方案：通过注册快捷键，调开web的开发者模式。")]),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("既然作为客户端，就应该像个客户端程序，不能对展示型的文本进行用户选择。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),a("p",[t._v("electron应用需要进行打包，变成exe可执行文件给用户。推荐使用最新的electron-builder进行打包（electron-vue脚手架中有提供该选项）。这里对常用的设置进行说明")]),t._v(" "),t._m(17),t._m(18),t._v(" "),a("p",[t._v("在macOS系统中，触摸板的放大缩小手指指令，会导致electron程序内的webFrame内容也跟着放大缩小。")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("多次双击window 的exe文件，会开启多个窗口；mac下默认开1个，但通过命令还是可以多开。")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("解决方案："),a("code",[t._v("public-ip + 轮询")]),t._v("方式。优先进行公网IP查询，如果成立则返回网络状态良好，如果查询不到再进行服务器心跳检查。实现方式参考"),a("a",{attrs:{href:"https://github.com/sindresorhus/is-online",target:"_blank",rel:"noopener noreferrer"}},[t._v("is-online"),a("OutboundLink")],1)]),t._v(" "),t._m(27),t._v(" "),a("p",[t._v("每个系统的异常监控都必不可少，特别是私有化部署客户端这种模式，日志记录显得必不可少。由于electron拥有node的环境，结合window.onerror收集错误信息,前端把日志记录在本地文件。当出现问题时，用户可以直接把日志文件发给开发者，从而定位原因。如果是网络版模式，可以通过Ajax收集错误信息。如果是程序异常崩溃，window.onerror可能没法监测的到，好在electron提供了CrashReporter收集")]),t._v(" "),a("p",[t._v("解决方案：推荐"),a("a",{attrs:{href:"https://github.com/megahertz/electron-log",target:"_blank",rel:"noopener noreferrer"}},[t._v("electron-log"),a("OutboundLink")],1),t._v(" + "),a("a",{attrs:{href:"https://thorsten-hans.com/electron-crashreporter-stay-up-to-date-if-your-app-fucked-up-3e9a989cd0a0",target:"_blank",rel:"noopener noreferrer"}},[t._v("CrashReporter"),a("OutboundLink")],1)]),t._v(" "),t._m(28),t._m(29),t._v(" "),a("p",[t._v("该需求停留在调研，这篇"),a("a",{attrs:{href:"https://segmentfault.com/a/1190000007616641",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),a("OutboundLink")],1),t._v("讲的非常详细,待实践好再来续更")]),t._v(" "),a("p",[t._v("最后，附上@changkun的electron深度总结思维导图，总结的非常棒，许多细节使笔者受益良多。"),a("a",{attrs:{href:"https://changkun.us/archives/2017/03/217/",target:"_blank",rel:"noopener noreferrer"}},[t._v("出处"),a("OutboundLink")],1)]),t._v(" "),t._m(30)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"electron工程踩坑记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#electron工程踩坑记录","aria-hidden":"true"}},[this._v("#")]),this._v(" Electron工程踩坑记录")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("最近公司有个新产品线，需要将应用打包成客户端，提供私有化部署。考虑到Web线上已经实现大部分需求，技术选型时使用Electron。本文不是帮助读者的扫盲文，只是记录下项目工程中遇到的坑，所以阅读本文需要web和electron知识。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-自定义标题栏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-自定义标题栏","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 自定义标题栏")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("frame: false")]),this._v(": 主进程中设置窗体参数。去掉默认的标题栏")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("-webkit-app-region: drag")]),this._v(": 渲染进程中设置css。对应的组件可以进行拖动了")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mainWindow "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("BrowserWindow")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    height"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("350")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("550")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    useContentSize"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    resizable"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" isDev"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 是否可调整大小")]),t._v("\n    alwaysOnTop"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("isDev"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 应用是否始终在所有顶层之上")]),t._v("\n    transparent"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 透明边框")]),t._v("\n    frame"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 不使用默认边框")]),t._v("\n    center"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".u-header")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("position")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("line-height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("-webkit-app-region")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" drag"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* as window header */")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-标题栏按钮无效-only-windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-标题栏按钮无效-only-windows","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 标题栏按钮无效  -- only windows")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-自定义标题栏无法实现css-hover-only-windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-自定义标题栏无法实现css-hover-only-windows","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 自定义标题栏无法实现css hover -- only windows")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("解决方案：去掉"),s("code",[this._v("-webkit-app-region: drag;")]),this._v("即可。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("如果要同时保留可拖动并且hover上有变化，在windows暂时无法实现，需要对此进行取舍或改变交互设计。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4-打包后程序调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-打包后程序调试","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 打包后程序调试")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("globalShortcut"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("register")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'CommandOrControl+Shift+L'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" focusWin "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" BrowserWindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getFocusedWindow")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    focusWin "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" focusWin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toggleDevTools")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_5-文本不可选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-文本不可选择","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 文本不可选择")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("解决方案：使用css "),s("code",[this._v("-webkit-user-select: none;")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("-webkit-tap-highlight-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transparent"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("-webkit-text-size-adjust")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("-webkit-user-select")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* disable user select text */")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_6-打包参数设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-打包参数设置","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. 打包参数设置")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("scripts"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    /** 打包成windows系统 **/\n    "),a("span",{attrs:{class:"token property"}},[t._v('"build"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"node .electron-vue/build.js && electron-builder --win"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    /** 打包成macos系统 **/\n    "),a("span",{attrs:{class:"token property"}},[t._v('"build:mac"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"node .electron-vue/build.js && electron-builder --mac"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v('"build"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    /** 最终可执行文件名称：$"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("productName"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("-$"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("version"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".$"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ext"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" **/\n    "),a("span",{attrs:{class:"token property"}},[t._v('"productName"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"sight-electron-app"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"appId"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"netease.sight.controller"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    /** 压缩形式，默认normal"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("store打包最快，适合测试"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("maximum打包体积最小，适合生产模式 **/\n    "),a("span",{attrs:{class:"token property"}},[t._v('"compression"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"maximum"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    /** 是否将多个文件合并为tar风格的归档模式 **/\n    "),a("span",{attrs:{class:"token property"}},[t._v('"asar"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"directories"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"output"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"build"')]),t._v("  /** 打包结果目标地址 **/\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"files"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"dist/electron/**/*"')]),t._v(" /** 需要打包的文件地址 **/\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    /** 不同平台设置 **/\n    "),a("span",{attrs:{class:"token property"}},[t._v('"mac"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"icon"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"build/icons/icon.icns"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"win"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"icon"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"build/icons/icon.ico"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"linux"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"icon"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"build/icons"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_7-触摸板放大缩小-only-mac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-触摸板放大缩小-only-mac","aria-hidden":"true"}},[this._v("#")]),this._v(" 7. 触摸板放大缩小 -- only mac")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("解决方案：在renderer进程中设置其缩放范围"),s("code",[this._v("require('electron').webFrame.setZoomLevelLimits(1, 1)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_8-web端唤起本地客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-web端唤起本地客户端","aria-hidden":"true"}},[this._v("#")]),this._v(" 8. web端唤起本地客户端")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("electron提供该API能力："),s("code",[this._v("app.setAsDefaultProtocolClient(protocol[, path, args])")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_9-禁止多开窗口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-禁止多开窗口","aria-hidden":"true"}},[this._v("#")]),this._v(" 9. 禁止多开窗口")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("解决方案：判断单实例："),s("code",[this._v("app.makeSingleInstance(callback)")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * 防止应用多开。bugfix:sholudQuit总是返回true，故暂时注释以下代码\n * 当进程是第一个实例时，返回false。\n * 如果是第二个实例时，返回true，并且执行第一个实例的回调函数\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" shouldQuit "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" app"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("makeSingleInstance")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("commandLine"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workingDir"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mainWindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        mainWindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("isMinimized")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" mainWindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("restore")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        mainWindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("focus")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shouldQuit"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    app"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("quit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_10-网络状态检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-网络状态检测","aria-hidden":"true"}},[this._v("#")]),this._v(" 10. 网络状态检测")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("客户端经常遇见断网情况处理，当网络断开时需要给用户提示，当网络连接时继续服务。通常web情况下是采取"),s("code",[this._v("轮询")]),this._v("服务器方式，但这种方式比较消耗服务器性能。这里可以利用electron的node工具包"),s("code",[this._v("public-ip")]),this._v("进行判断。public-ip查询dns获取公网ip地址，如果能拿到值表示联网正常。本来到此可以很好的解决，但产品要求的客户端，"),s("b",[this._v("既要提供公共部署，也需要进行无外网情况下的私有化部署")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_11-日志监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-日志监听","aria-hidden":"true"}},[this._v("#")]),this._v(" 11. 日志监听")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" log "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'electron-log'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nlog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("level "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'info'")]),t._v("\nlog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("format "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'{h}:{i}:{s}:{ms} {text}'")]),t._v("\nlog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxSize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1024")]),t._v("\nlog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("level "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_12-自动更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-自动更新","aria-hidden":"true"}},[this._v("#")]),this._v(" 12. 自动更新")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://changkun.us/images/posts/217/mind.png",alt:""}})])}],!1,null,null,null);e.options.__file="project-electron-summary.md";s.default=e.exports}}]);
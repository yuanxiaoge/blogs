(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{387:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"node-debug-for-vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-debug-for-vscode","aria-hidden":"true"}},[t._v("#")]),t._v(" Node-Debug for VSCode")]),t._v(" "),a("p",[t._v("调试对于任何一门语言都是及其重要的。好的调试工具能让人更有效率的开发以及查错。Node没有chrome developer tool这样的Web可视化集成调试工具，但VSCode默认集成了TS、Git、Debug等实用工具，而且使用非常方便。VSCode的插件生态，也让VSCode变成前端开发必备的利器。以下介绍VSCode下的Node调试。")]),t._v(" "),a("h2",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("ol",[a("li",[t._v("进入VScode界面，点击界面左边的第四个类似虫子的按钮，进入调试界面：\n"),a("img",{attrs:{src:"https://segmentfault.com/img/bVMhsN?w=640&h=342",alt:""}})]),t._v(" "),a("li",[t._v("点击页面上方“没有配置”下拉菜单，选择“添加配置”。\n"),a("img",{attrs:{src:"https://segmentfault.com/img/bVMhsO?w=640&h=571",alt:""}})]),t._v(" "),a("li",[t._v("选择Node.js环境。\n"),a("img",{attrs:{src:"https://segmentfault.com/img/bVMhsP?w=640&h=107",alt:""}})]),t._v(" "),a("li",[t._v("选择完成之后，在项目的根目录中会生成一个.vscode的目录，这个目录中存放了各种各样的VScode编辑器的配置。VSCode根据你选择的环境，生成了对应的"),a("code",[t._v("配置文件lanuch.json")]),t._v("。Node内容如下：")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"version"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.2.0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"configurations"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"type"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"node"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"request"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"launch"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Launch Program"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"program"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"${workspaceFolder}/node/http.js"')]),t._v(" // 调试路径入口"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("需要根据自己项目进行配置\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("设置断点，点击开始调试按钮（绿色三角形），就可以开始调试。")])]),t._v(" "),a("h2",{attrs:{id:"调试参数配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试参数配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 调试参数配置")]),t._v(" "),a("p",[t._v("lanuch.json配置项较多，可查看"),a("a",{attrs:{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("详细了解。VSCode也集成了一些常用的调试配置片段，有Node、Chrome、Electron、Gulp等。以下说明几个重要参数：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("name")]),t._v(": 给该配置项取个名字")]),t._v(" "),a("li",[a("code",[t._v("type")]),t._v(": 通常有node、chrome等参数")]),t._v(" "),a("li",[a("code",[t._v("request")]),t._v(": launch/attach\n"),a("ul",[a("li",[t._v("launch模式，"),a("strong",[t._v("由 vscode 来启动")]),t._v("一个独立的具有 debug 模式的程序")]),t._v(" "),a("li",[t._v("attach模式，是连接"),a("strong",[t._v("已经启动的服务")]),t._v("。比如已经在外面将项目启动，突然需要调试，不需要关掉已经启动的项目再去vscode中重新启动，只要以attach的模式启动，vscode可以连接到已经启动的服务。")])])]),t._v(" "),a("li",[a("code",[t._v("program")]),t._v(": debug node入口文件的绝对路径。只在launch模式有效")]),t._v(" "),a("li",[a("code",[t._v("runtimeExecutable")]),t._v(": 执行器的绝对路径，默认是node。只在launch模式有效")]),t._v(" "),a("li",[a("code",[t._v("runtimeArgs")]),t._v(": 执行器参数。只在launch模式有效")])]),t._v(" "),a("h2",{attrs:{id:"debug使用npm启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug使用npm启动","aria-hidden":"true"}},[t._v("#")]),t._v(" debug使用npm启动")]),t._v(" "),a("p",[t._v("以上Node调试方式有个问题，每次文件入口修改都需要改动lanuch.json配置文件。我们的方法是可以使用让npm script充当入口，让改动变成在package.json中。")]),t._v(" "),a("p",[t._v("以上需要改造两步：")]),t._v(" "),a("ol",[a("li",[t._v("修改lanuch.json配置成npm命令方式：")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"version"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.2.0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"configurations"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"type"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"node"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"request"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"launch"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Launch via NPM"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"runtimeExecutable"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"npm"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // npm 执行器。使用npm script方式作为入口\n            "),a("span",{attrs:{class:"token property"}},[t._v('"runtimeArgs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"run-script"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"start:debug"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"port"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5858")]),t._v(" // 调试的端口指定，attach时用到\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("修改package.json的scripts配置")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    // 注意：需要配置上--inspect-brk="),a("span",{attrs:{class:"token number"}},[t._v("5858")]),t._v("以attach到debugger\n    "),a("span",{attrs:{class:"token property"}},[t._v('"start:debug"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"nodemon --inspect-brk=5858 node/http.js"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs-debugging"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000009084576",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Visual Studio Code对Node.js进行断点调试"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/43210203/what-is-the-proper-way-to-debug-an-npm-script-using-vscode",target:"_blank",rel:"noopener noreferrer"}},[t._v("What is the proper way to debug an npm script using vscode?\n"),a("OutboundLink")],1)])])])])},[],!1,null,null,null);e.options.__file="node-vscode-debug.md";s.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{391:function(e,t,a){"use strict";a.r(t);var s=a(9),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"eslint代码检查规范-react-reactnative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint代码检查规范-react-reactnative","aria-hidden":"true"}},[e._v("#")]),e._v(" ESlint代码检查规范 - React/ReactNative")]),e._v(" "),a("p",[e._v("在前端编码时,为了规范每个成员的代码风格以及避免低级的错误,我们可以使用Eslint来制定规则.本文旨在帮助团队成员形成良好的React代码规范。推荐使用"),a("a",{attrs:{href:"https://github.com/airbnb/javascript/tree/master/react",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airbnb Eslint规范"),a("OutboundLink")],1),e._v("+"),a("a",{attrs:{href:"http://eslint.cn/docs/rules/",target:"_blank",rel:"noopener noreferrer"}},[e._v("自定义Rules"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"airbnb-eslint规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airbnb-eslint规范","aria-hidden":"true"}},[e._v("#")]),e._v(" Airbnb Eslint规范")]),e._v(" "),a("p",[e._v("目前使用eslint不再需要自己手动装太多npm包，社区已经在最新eslint初始化命令中自动安装。")]),e._v(" "),a("h3",{attrs:{id:"安装eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装eslint","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装Eslint")]),e._v(" "),a("p",[e._v("有全局安装和本地安装两种方式，推荐本地安装")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install --save-dev eslint\n")])])]),a("h3",{attrs:{id:"初始化eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化eslint","aria-hidden":"true"}},[e._v("#")]),e._v(" 初始化Eslint")]),e._v(" "),a("p",[e._v("初始化会供用户很多可选的选择，这里推荐使用流行的"),a("code",[e._v("Airbnb Eslint")]),e._v("。安装完后，在"),a("code",[e._v("package.json")]),e._v("中会自动安装需要的依赖,分别为eslint-config-airbnb、eslint-plugin-import、eslint-plugin-jsx-a11y、eslint-plugin-react。同时也会创建"),a("code",[e._v(".eslintrc")]),e._v("配置文件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("eslint --init\n")])])]),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1474238-c0bc9d15756a4abe.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/555",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"eslint检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint检查","aria-hidden":"true"}},[e._v("#")]),e._v(" Eslint检查")]),e._v(" "),a("p",[e._v("eslint的"),a("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("Command Line Interface"),a("OutboundLink")],1),e._v("有命令行调用接口，如何搭配命令行取决于项目风格。格式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("eslint [options] [file|dir|glob]*\n")])])]),a("p",[e._v("eg：当前app目录下监测js并打印报错")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("eslint --quiet --ext .js app\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("--ext [String]                 Specify JavaScript file extensions - default: .js\n--quiet                        Report errors only - default: false\n")])])]),a("blockquote",[a("p",[e._v("tips: 如果测试执行报错，可能你同时安装了本地和全局eslint，这里可以把eslint命令指定为本地路径："),a("code",[e._v("./node_modules/.bin/eslint")]),e._v(",参考见该"),a("a",{attrs:{href:"https://github.com/airbnb/javascript/issues/465",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"自定义rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义rules","aria-hidden":"true"}},[e._v("#")]),e._v(" 自定义Rules")]),e._v(" "),a("p",[e._v("自定义Rules综合考虑了笔者部门小伙伴习惯的Vue风格，如不使用分号结尾，以及React特殊的JSX语法，形成以下推荐配置：")]),e._v(" "),a("div",{staticClass:"language-eslint extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('module.exports = {\n    "extends": ["airbnb"], // 使用airbnb规则\n    "parser": "babel-eslint",// React使用了大量ES6语法，使用babel-eslint解析器代替默认的Espree\n    "globals": { // 全局变量设置\n        "__DEV__": false // false 表示这个全局变量不允许被重新赋值\n    },\n    "rules": {\n        // 4个空格\n        "indent": [2, 4],\n        "react/jsx-indent": [2, 4],\n        "react/jsx-indent-props": [2, 4],\n\n        "semi": [2, "never"], // 是否使用分号结尾\n        "no-console": \'off\', // 允许console\n        "max-len": "off", // 单行没有字数限制\n        "object-curly-newline": "off", // 关闭大括号内换行符的一致性\n        "comma-dangle": "off", // 关闭是否使用拖尾逗号\n        "arrow-parens": "off", // 关闭箭头函数是否需要大括号\n\n        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], // 允许使用js/jsx文件扩展\n        "react/sort-comp": "off", // 关闭sort\n        "react/no-array-index-key": "off",// 允许使用index作为List的key\n        "no-unused-expressions": "off",// 允许三元表达式\n        "import/no-unresolved": "off",// 允许require image\n        "react/no-multi-comp": "off", // 允许一个文件定义多个组件\n        "react/display-name": "off", // 不需要给组件定义displayName\n    }\n\n};\n')])])]),a("blockquote",[a("p",[e._v("注意:需要额外安装babel-eslint以解析ES6语法："),a("code",[e._v("npm install --save-dev babel-eslint")])])])])},[],!1,null,null,null);n.options.__file="react-eslint.md";t.default=n.exports}}]);
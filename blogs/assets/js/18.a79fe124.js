(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{158:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"vue-router写法推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router写法推荐","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue-Router写法推荐")]),a("p",[t._v("使用路由懒加载，实现方式是结合Vue异步组件和Webpack代码分割功能。")]),a("p",[t._v("优点：")]),a("ul",[a("li",[t._v("减小包体积，提高加载速度")]),a("li",[t._v("当页面>20个时，组件定义需要拉到编辑器顶部才知道具体路径")])]),a("h2",{attrs:{id:"bad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bad","aria-hidden":"true"}},[t._v("#")]),t._v(" bad")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" IntentionList "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@/pages/intention/list'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Variable "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@/pages/variable'")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/intention/list'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'ilist'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IntentionList\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/variable'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'variable'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Variable\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"good"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#good","aria-hidden":"true"}},[t._v("#")]),t._v(" good")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/intention/list'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'ilist'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@/pages/intention/list'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/variable'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'variable'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@/pages/variable'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("import语法需要Babel添加"),a("code",[t._v("syntax-dynamic-import")]),t._v("插件。最新当vue-cli 3.0中默认添加该特性，不需要额外引用。")])])])}],!1,null,null,null);s.default=o.exports}}]);
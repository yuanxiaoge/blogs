(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{184:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("h2",{attrs:{id:"http-server概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-server概念","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://github.com/indexzero/http-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("http-server"),r("OutboundLink")],1),t._v("概念")]),t._v(" "),r("p",[t._v("http-server ./dist -p 3000\n-p 指定开启服务的地址\n-P 没有匹配到路径时，代理到设置到target地址")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("pm2 start app.js")]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("pm2 list")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://stackoverflow.com/questions/31804966/running-nodejs-http-server-forever-with-pm2",target:"_blank",rel:"noopener noreferrer"}},[t._v("running-nodejs-http-server-forever-with-pm2"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker-pm2-nodejs"),r("OutboundLink")],1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"http-server与pm2搭建应用级服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-server与pm2搭建应用级服务器","aria-hidden":"true"}},[this._v("#")]),this._v(" http-server与pm2搭建应用级服务器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"pm2概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pm2概念","aria-hidden":"true"}},[this._v("#")]),this._v(" pm2概念")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"pm2-runtime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pm2-runtime","aria-hidden":"true"}},[this._v("#")]),this._v(" pm2-runtime")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"http-server与pm2搭配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-server与pm2搭配","aria-hidden":"true"}},[this._v("#")]),this._v(" http-server与pm2搭配")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("对于是node命令的应用程序，使用"),e("code",[this._v("pm2-runtime")]),this._v("命令代替pm2。pm2-runtime的目标是将您的应用包装到合适的Node.js生产环境中。"),e("strong",[this._v("这里有个注意点，对于node命令的参数，一定要在参数前加入"),e("code",[this._v("--")])]),this._v("。")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("server"),r("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{attrs:{class:"token string"}},[t._v('"pm2-runtime http-server -- ./dist -p 3000"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),r("span",{attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),r("span",{attrs:{class:"token string"}},[t._v('"server:start"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{attrs:{class:"token string"}},[t._v('"http-server ./dist -p 3000"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),r("span",{attrs:{class:"token string"}},[t._v('"sever"')]),r("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{attrs:{class:"token string"}},[t._v('"pm2-runtime npm -- run server:start"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考文章")])}],!1,null,null,null);a.options.__file="Node-http-server与pm2搭建应用级服务器 .md";e.default=a.exports}}]);
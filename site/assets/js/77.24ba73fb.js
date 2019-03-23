(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{348:function(t,s,a){"use strict";a.r(s);var n=a(9),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-router原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router原理","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue Router原理")]),t._v(" "),a("h2",{attrs:{id:"基本-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本-api","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本 API")]),t._v(" "),a("ul",[a("li",[t._v("$router.push/replace() 所有跳转都是依据push/replace，router-link onclick事件底层也是这样调用")]),t._v(" "),a("li",[t._v("$router.go/back/forward")]),t._v(" "),a("li",[t._v("$router.resolve (\nto: RawLocation,\ncurrent?: Route,\nappend?: boolean\n): {\nlocation: Location,\nroute: Route,\nhref: string,\n// for backwards compat\nnormalizedTo: Location,\nresolved: Route\n}")])]),t._v(" "),a("h2",{attrs:{id:"源码解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 源码解析")]),t._v(" "),a("ul",[a("li",[t._v("hashHistory: popstate/hashchange event (use "),a("code",[t._v("/#")]),t._v(" tag)")]),t._v(" "),a("li",[t._v("export: popstate event(use "),a("code",[t._v("/")]),t._v(" tag)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mode"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'history'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("HTML5History")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'hash'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("HashHistory")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fallback"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'abstract'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AbstractHistory")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'production'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token function"}},[t._v("assert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`invalid mode: ")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("mode"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("currentRoute")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("Route "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("push")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RawLocation"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onComplete"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onAbort"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onComplete"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onAbort"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("replace")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RawLocation"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onComplete"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onAbort"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onComplete"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onAbort"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("go")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("go")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("back")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("go")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("forward")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("go")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);o.options.__file="vue-router.md";s.default=o.exports}}]);
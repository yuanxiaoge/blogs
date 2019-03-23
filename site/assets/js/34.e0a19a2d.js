(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{384:function(t,s,a){"use strict";a.r(s);var n=a(9),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb指南","aria-hidden":"true"}},[t._v("#")]),t._v(" MongoDB指南")]),t._v(" "),a("p",[t._v("MongoDB是目前最流行的NoSQL数据库之一。MongoDB和Node.js特别般配，因为MongoDB是基于文档的非关系型数据库，文档是按BSON（JSON的轻量化二进制格式）存储的，增删改查等管理数据库的命令和JavaScript语法很像。")]),t._v(" "),a("h2",{attrs:{id:"概念解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 概念解析")]),t._v(" "),a("p",[t._v("在mongodb中基本的概念是数据库、集合、文档。下表将帮助更容易理解Mongodb中的一些概念：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("SQL概念")]),t._v(" "),a("th",[t._v("MongoDB概念")]),t._v(" "),a("th",[t._v("解释")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("database")]),t._v(" "),a("td",[t._v("database")]),t._v(" "),a("td",[t._v("数据库。一致")])]),t._v(" "),a("tr",[a("td",[t._v("table")]),t._v(" "),a("td",[t._v("collection")]),t._v(" "),a("td",[t._v("数据库表")])]),t._v(" "),a("tr",[a("td",[t._v("row")]),t._v(" "),a("td",[t._v("document")]),t._v(" "),a("td",[t._v("数据库表一行")])]),t._v(" "),a("tr",[a("td",[t._v("column")]),t._v(" "),a("td",[t._v("field")]),t._v(" "),a("td",[t._v("数据库表一列")])]),t._v(" "),a("tr",[a("td",[t._v("primary key")]),t._v(" "),a("td",[t._v("primary key")]),t._v(" "),a("td",[t._v("主键。mongodb默认有主键_id")])]),t._v(" "),a("tr",[a("td",[t._v("table joins")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("表连接。mongodb不支持")])])])]),t._v(" "),a("h2",{attrs:{id:"command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command","aria-hidden":"true"}},[t._v("#")]),t._v(" Command")]),t._v(" "),a("ul",[a("li",[t._v("全局\n"),a("ul",[a("li",[t._v("mongo 进入db命令")]),t._v(" "),a("li",[t._v("show dbs 显示所有可用dbs")]),t._v(" "),a("li",[t._v("db 显示当前db")])])]),t._v(" "),a("li",[t._v("数据库\n"),a("ul",[a("li",[t._v("use [dbName] 使用或新建数据库")]),t._v(" "),a("li",[t._v("db.dropDatabase() 删除当前数据库")]),t._v(" "),a("li",[t._v("show collections 显示当前数据库所有集合（表）")]),t._v(" "),a("li",[t._v("db.collections.drop() 删除当前数据库所有集合（表）")])])]),t._v(" "),a("li",[t._v("增删改查\n"),a("ul",[a("li",[t._v("增\n"),a("ul",[a("li",[t._v("db.[collectionName].insert(object) 数据库插入一行数据")]),t._v(" "),a("li",[t._v("db.[collectionName].insertOne(object)"),a("sup",[t._v("3.2+")]),t._v(" 数据库插入一行数据")]),t._v(" "),a("li",[t._v("db.[collectionName].insertMany(object)"),a("sup",[t._v("3.2+")]),t._v(" 数据库插入多行数据")]),t._v(" "),a("li",[t._v("db.[collectionName].save(object) 指定_id=update(),否则是insert()")])])]),t._v(" "),a("li",[t._v("更新 db.[collectionName].update(query,update)")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("db"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("col"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("{"),a("span",{attrs:{class:"token string"}},[t._v("'title'")]),t._v(":"),a("span",{attrs:{class:"token string"}},[t._v("'MongoDB 教程'")]),t._v("}"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("{$"),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(":{"),a("span",{attrs:{class:"token string"}},[t._v("'title'")]),t._v(":"),a("span",{attrs:{class:"token string"}},[t._v("'MongoDB'")]),t._v("}}"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("删除 db.[collectionName].remove(query,justOne)")]),t._v(" "),a("li",[t._v("查询 db.[collectionName].find(query, projection)")])])]),t._v(" "),a("li",[t._v("条件\n"),a("ul",[a("li",[t._v("limit(Number)")]),t._v(" "),a("li",[t._v("skip(Number)")]),t._v(" "),a("li",[t._v("sort() 可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式")])])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("db"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("col"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("{}"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("limit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("skip"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sort"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("{"),a("span",{attrs:{class:"token string"}},[t._v('"likes"')]),t._v(":"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("}"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("在mongodb中,Collection类似于传统SQL的table；Document类似于SQL中的一行记录row；Field类似于SQL中的一列column。")])]),t._v(" "),a("h2",{attrs:{id:"mongoose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongoose","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/Automattic/mongoose",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mongoose"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Mongoose是在node下对MongoDB进行管理的数据对象模型(ODM)库。它管理着数据结构定义、校验、数据之间的关系，并可以使node数据转换成mongodb数据库数据。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/0*b5piDNW1dqlkJWKe.",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema","aria-hidden":"true"}},[t._v("#")]),t._v(" Schema")]),t._v(" "),a("p",[t._v("定义document的结构、默认值、校验等。是一种以文件形式存储的数据库模型骨架，"),a("code",[t._v("不具备数据库的操作能力")]),t._v("。支持schema.pre('save', ...)钩子函数（当model.save()执行时触发）；支持schema.plugin()以使用自定义插件。")]),t._v(" "),a("p",[t._v("Schema Type支持如下类型：")]),t._v(" "),a("ul",[a("li",[t._v("Boolean")]),t._v(" "),a("li",[t._v("Buffer")]),t._v(" "),a("li",[t._v("Date")]),t._v(" "),a("li",[t._v("Mixed (A generic / flexible data type)")]),t._v(" "),a("li",[t._v("Number")]),t._v(" "),a("li",[t._v("ObjectId")]),t._v(" "),a("li",[t._v("String")])]),t._v(" "),a("p",[a("strong",[t._v("Schema API")])]),t._v(" "),a("ul",[a("li",[t._v("Schema.statics.[Statics-Methods] Model中添加静态方法,this指向Model")]),t._v(" "),a("li",[t._v("Schema.methods.[Methods] Model.prototype中添加方法")]),t._v(" "),a("li",[t._v("Schema.pre('save/init/remove/validate') 回调钩子。this指向Schema")]),t._v(" "),a("li",[t._v("Schema.plugin(self-plugin) 应用插件")])]),t._v(" "),a("h3",{attrs:{id:"model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#model","aria-hidden":"true"}},[t._v("#")]),t._v(" Model")]),t._v(" "),a("p",[t._v("Model是Schema的包装，"),a("code",[t._v("具有操作数据库的能力")]),t._v("。")]),t._v(" "),a("ul",[a("li",[t._v("Model：由Schema发布生成的模型，具有抽象属性和行为的数据库操作。")]),t._v(" "),a("li",[t._v("Model.prototyp(这里可以叫Entity)e: 由Model创建的实体，他的操作也会影响* 数据库。")]),t._v(" "),a("li",[t._v("关系：Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。")])]),t._v(" "),a("p",[a("strong",[t._v("Model API")])]),t._v(" "),a("ul",[a("li",[t._v("Model\n"),a("ul",[a("li",[t._v("增\n"),a("ul",[a("li",[t._v("Model.create(documents, callback)")]),t._v(" "),a("li",[t._v("Model.insertMany()")])])]),t._v(" "),a("li",[t._v("查\n"),a("ul",[a("li",[t._v("Model.find(conditions, [fields], [options], [callback])")]),t._v(" "),a("li",[t._v("Model.findById(id, [fields], [options], [callback])")]),t._v(" "),a("li",[t._v("Model.findOne(conditions, [fields], [options], [callback])")]),t._v(" "),a("li",[t._v("Model.count(conditions, [callback])")])])]),t._v(" "),a("li",[t._v("改\n"),a("ul",[a("li",[t._v("Model.findByIdAndUpdate(id, document, callback)")]),t._v(" "),a("li",[t._v("Model.findOneAndUpdate([conditions], [update], [options], [callback])")])])]),t._v(" "),a("li",[t._v("删\n"),a("ul",[a("li",[t._v("Model.remove(conditions, [callback])")]),t._v(" "),a("li",[t._v("Model.findByIdAndRemove(id, [options], [callback])")]),t._v(" "),a("li",[t._v("Model.findOneAndRemove(conditions, [options], [callback])")])])])])]),t._v(" "),a("li",[t._v("Model.prototype\n"),a("ul",[a("li",[t._v("Model.prototype.save()(callback)")]),t._v(" "),a("li",[t._v("Model.prototype.update(query, document, callback)")]),t._v(" "),a("li",[t._v("Model.prototype.remove()")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("Schema类似于SQL的表的定义；Model是一个高层次的接口")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" mongoose "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'mongoose'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmongoose"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("connect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'mongodb://localhost:27017/test'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 记得先连接到数据库")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/** 定义表结构 **/")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" emailSchema "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("mongoose"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Schema")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  email"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  date"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Date\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 回调钩子")]),t._v("\nemailSchema"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("pre")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'save'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("next"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// this指向Schema")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 定义Model静态方法")]),t._v("\nemailSchema"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statics"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("getLeoRows")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("find")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("author"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'leo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// this指向Model")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/** 定义操作层 **/")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" EmailModel "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mongoose"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("model")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Email'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" emailSchema"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 静态方法，常用于数据库逻辑")]),t._v("\nEmailModel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getLeoRows")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 新增")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" msg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EmailModel")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  email"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'leo'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmsg"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("save")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 查询")]),t._v("\nEmailModel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("find")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" email"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'leo'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 更新")]),t._v("\nEmailModel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("findOneAndUpdate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" email"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'leo'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" email"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'leoupdate'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 删除")]),t._v("\nEmailModel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("findOneAndRemove")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" email"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'leoupdate'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://mongoosejs.com/docs/connections.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("mongoose document"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://medium.freecodecamp.org/introduction-to-mongoose-for-mongodb-d2a7aa593c57",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction to Mongoose for MongoDB"),a("OutboundLink")],1)])])])])},[],!1,null,null,null);o.options.__file="node-mongodb.md";s.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{382:function(t,e,s){"use strict";s.r(e);var a=s(45),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vite-plugin-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vite-plugin-pages"}},[t._v("#")]),t._v(" vite-plugin-pages")]),t._v(" "),s("p",[t._v("Automate generate route config for Vue components in pages directory, and support layouts in the same time")]),t._v(" "),s("h2",{attrs:{id:"features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),s("ul",[s("li",[t._v("component which name starts with "),s("code",[t._v("_")]),t._v(" is dynamic page")]),t._v(" "),s("li",[t._v("component which name starts with "),s("code",[t._v("$")]),t._v(" is nested route")]),t._v(" "),s("li",[t._v("component which name is "),s("code",[t._v("_")]),t._v(" will catch the error page")]),t._v(" "),s("li",[t._v("default layout will be applied to every Vue component in pages direcotry")]),t._v(" "),s("li",[t._v("custom layout will only be applied to Vue component has set layout property in layout block")])]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @originjs/vite-plugin-pages --save-dev\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @originjs/vite-plugin-pages --dev\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("First, add "),s("code",[t._v("@originjs/vite-plugin-pages")]),t._v(" in "),s("code",[t._v("vite.config.js")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vite.config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pages "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@originjs/vite-plugin-pages'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* options */")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Then import the "),s("code",[t._v("routes")]),t._v(" generated from vite-plugin-pages, and create "),s("code",[t._v("router")]),t._v(" instance with the "),s("code",[t._v("routes")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createRouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createWebHistory "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" routes "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin-pages'")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  history"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebHistory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" router\n")])])]),s("p",[t._v("now we could write our pages and layouts in pages directory and layouts directory respectively.")]),t._v(" "),s("h2",{attrs:{id:"convert-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#convert-rules"}},[t._v("#")]),t._v(" Convert rules")]),t._v(" "),s("p",[t._v("See these examples:")]),t._v(" "),s("ol",[s("li",[t._v("Normal file name: /user/foo.vue -> /user/foo")]),t._v(" "),s("li",[t._v("File name starts with "),s("code",[t._v("_")]),t._v(": /user/_id.vue -> /user/:id")]),t._v(" "),s("li",[t._v("File name is "),s("code",[t._v("index.vue")]),t._v(": /user/index.vue -> /user")]),t._v(" "),s("li",[t._v("File name is "),s("code",[t._v("_")]),t._v(": /_.vue -> /:pathMatch(."),s("em",[t._v(")")])])]),t._v(" "),s("h2",{attrs:{id:"others"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[t._v("#")]),t._v(" Others")]),t._v(" "),s("ol",[s("li",[t._v("The name of files and directories in same directory must be different.\nFor example, if we already have /user/, we can't add a "),s("code",[t._v("user.vue")]),t._v(" file.")]),t._v(" "),s("li",[t._v("Directory can not be "),s("code",[t._v("index")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
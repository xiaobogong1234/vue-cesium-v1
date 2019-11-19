(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{"/KD9":function(s,t,a){"use strict";a.r(t);var v=a("92rq"),r=a.n(v);for(var l in v)"default"!==l&&function(s){a.d(t,s,function(){return v[s]})}(l);var _=a("6U74"),n=a("JFUb"),e=Object(n.a)(r.a,_.a,_.b,!1,null,null,null);t.default=e.exports},"6U74":function(s,t,a){"use strict";a.d(t,"a",function(){return v}),a.d(t,"b",function(){return r});var v=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("布告板集合图元")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("添加布告板集合图元到场景")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:s.ready}},[a("billboard-collection",{attrs:{billboards:s.billboards}})],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4)],1)},r=[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("billboard-collection")]),this._v(" 用于添加布告板图元，也可通过挂载"),t("a",{attrs:{href:"./#/zh/primitives/billboard-primitive"}},[t("code",{pre:!0},[this._v("billboard-primitive")])]),this._v("组件添加布告板。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("billboard-collection")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":billboards")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"billboards"')]),s._v(">")]),s._v(" "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("billboard-collection")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("billboards")]),s._v(": []\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" billboards = []\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v("; i++) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" billboard = {}\n          billboard.position = { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),a("span",{attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" + "),a("span",{attrs:{class:"hljs-number"}},[s._v("85")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),a("span",{attrs:{class:"hljs-number"}},[s._v("30")]),s._v(" + "),a("span",{attrs:{class:"hljs-number"}},[s._v("21")]),s._v(" }\n          billboard.image = "),a("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v("\n          billboard.scale = "),a("span",{attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v("\n          billboards.push(billboard)\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".billboards = billboards\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("modelMatrix")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。")])]),s._v(" "),a("tr",[a("td",[s._v("debugShowBoundingVolume")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否显示此图元的 BoundingVolume， 仅调试使用。")])]),s._v(" "),a("tr",[a("td",[s._v("blendOption")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定颜色混合选项。")])]),s._v(" "),a("tr",[a("td",[s._v("scene")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 必须传递使用高度参考属性的标签，否则将针对地球进行深度测试。")])]),s._v(" "),a("tr",[a("td",[s._v("billboards")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("[]")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定布告板集合数组。 数组对象结构为"),a("a",{attrs:{href:"./#/zh/primitives/billboard-primitive"}},[a("code",{pre:!0},[s._v("billboard-primitive")])]),s._v("组件属性。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("参考官方文档"),t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/BillboardCollection.html"}},[this._v("BillboardCollection")]),this._v("。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。")])])])])}]},"92rq":function(s,t,a){var v,r,l;r=[t],void 0===(l="function"==typeof(v=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{billboards:[]}},methods:{ready:function(s){s.Cesium,s.viewer;for(var t=[],a=0;a<1e3;a++){var v={};v.position={lng:40*Math.random()+85,lat:30*Math.random()+21},v.image="https://zouyaoji.top/vue-cesium/favicon.png",v.scale=.1,t.push(v)}this.billboards=t}}},s.exports=t.default})?v.apply(t,r):v)||(s.exports=l)},DLhE:function(s,t,a){s.exports=a("/KD9")}}]);
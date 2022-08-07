(window.webpackJsonp=window.webpackJsonp||[]).push([[157,97,112,138,139],{1450:function(e,t,n){"use strict";n.r(t);n(1);var r=n(26),l=(n(81),n(4),n(37),n(39),n(8),n(25),n(103),n(146),n(63),n(31),n(62),n(5)),c=n(770),o=n(118),d=n(21),m=n(49),v=n.n(m),f=n(54),h=n(80),_=n(141),y=Object(l.c)({components:{"table-search-bar":Object(l.b)((function(){return Promise.resolve().then(n.bind(null,784))}))},setup:function(){var e=Object(l.i)([]),t=Object(l.i)(""),n=Object(l.a)((function(){return 0===t.value.length?e.value:e.value.filter((function(e){var title=!Object(f.isNil)(e.title.match(new RegExp(Object(f.escapeRegExp)(t.value),"ig"))),n=!Object(f.isNil)(e.game.match(new RegExp(Object(f.escapeRegExp)(t.value),"ig")));return title||n}))})),m=Object(l.i)({loading:c.ButtonStates.progress});Object(l.f)((function(){y()}));var y=function(){Object(d.getSocket)("/systems/highlights").emit("generic::getAll",(function(t,n){if(t)return Object(h.a)(t);console.debug({_items:n}),e.value=n,m.value.loading=c.ButtonStates.success}))},x=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.value.filter((function(e){return e.expired})).map((function(e){return console.debug("Deleting",e),new Promise((function(t,n){e.id?Object(d.getSocket)("/systems/highlights").emit("generic::deleteById",e.id,(function(e){e&&n(Object(h.a)(e)),t(!0)})):n(Object(h.a)("Missing item id"))}))})));case 2:y(),_.a.$emit("snack","success","Data removed.");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{items:e,fItems:n,headers:[{value:"thumbnail",text:"",align:"left"},{value:"game",text:""},{value:"title",text:""},{value:"createdAt",text:""},{value:"timestamp",text:""}],headersDelete:[{value:"game",text:""},{value:"timestamp",text:""},{value:"createdAt",text:""},{value:"title",text:""}],state:m,search:t,generateThumbnail:function(e){return"https://static-cdn.jtvnw.net/ttv-boxart/./%{game}-60x80.jpg".replace("%{game}",encodeURI(e))},timestampToString:function(e){return(e.hours?"".concat(e.hours,"h"):"")+(e.minutes?"".concat(e.minutes,"m"):"")+(e.seconds?"".concat(e.seconds,"s"):"")},translate:v.a,ButtonStates:c.ButtonStates,deleteExpired:x,dayjs:o.dayjs}}}),x=y,j=n(45),O=n(44),k=n.n(O),S=n(48),w=n(27),C=n(269),E=n(30),K=n(384),component=Object(j.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{class:{"pa-4":!e.$vuetify.breakpoint.mobile},attrs:{fluid:""}},[n("alert-disabled",{attrs:{system:"highlights"}}),e._v(" "),n("v-data-table",{attrs:{"calculate-widths":"","hide-default-header":"",loading:e.state.loading!==e.ButtonStates.success,headers:e.headers,"sort-by":"createdAt","sort-desc":!0,"items-per-page":-1,items:e.fItems},scopedSlots:e._u([{key:"top",fn:function(){return[n("table-search-bar",{attrs:{search:e.search},on:{"update:search":function(t){e.search=t}}},[n("v-btn",{staticClass:"mr-1",attrs:{color:"error"},on:{click:e.deleteExpired}},[e._v("\n          Delete Expired\n        ")])],1)]},proxy:!0},{key:"item",fn:function(t){var r=t.item;return[n("table-mobile",{attrs:{headers:e.headers,item:r},scopedSlots:e._u([{key:"actions",fn:function(){return[r.expired?n("span",{staticClass:"red--text text--lighten-1"},[e._v("Expired")]):n("v-btn",{staticClass:"primary-hover",attrs:{href:"https://www.twitch.tv/videos/"+r.videoId+"?t="+e.timestampToString(r.timestamp),target:"_blank",icon:""}},[n("v-icon",[e._v("\n              mdi-link\n            ")])],1)]},proxy:!0},{key:"thumbnail",fn:function(){return[n("v-img",{attrs:{"aspect-ratio":16/9,width:100,src:e.generateThumbnail(r.game)}})]},proxy:!0},{key:"createdAt",fn:function(){return[e._v("\n          "+e._s(e.dayjs(r.createdAt).format("LL"))+" "+e._s(e.dayjs(r.createdAt).format("LTS"))+"\n        ")]},proxy:!0},{key:"timestamp",fn:function(){return[e._v("\n          "+e._s(e.timestampToString(r.timestamp))+"\n        ")]},proxy:!0}],null,!0)})]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;k()(component,{AlertDisabled:n(781).default,TableSearchBar:n(784).default,TableMobile:n(785).default}),k()(component,{VBtn:S.a,VContainer:w.b,VDataTable:C.a,VIcon:E.a,VImg:K.a})},770:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonStates=void 0,t.ButtonStates={idle:0,progress:1,success:2,fail:3}},781:function(e,t,n){"use strict";n.r(t);n(73),n(4),n(33);var r=n(5),l=n(49),c=n.n(l),o=n(1),d=Object(o.h)({props:{system:String,integration:String},setup:function(e){var t=Object(r.o)();return{isEnabled:Object(o.b)((function(){return e.system?t.state.$systems.find((function(t){return t.name===e.system})).enabled:!!e.integration&&t.state.$integrations.find((function(t){return t.name===e.integration})).enabled})),translate:c.a}}}),m=n(45),v=n(44),f=n.n(v),h=n(379),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isEnabled?e._e():n("v-alert",{staticClass:"mb-0",attrs:{color:"error",text:""}},[e._v("\n  "+e._s(e.translate("this-system-is-disabled"))+"\n")])}),[],!1,null,null,null);t.default=component.exports;f()(component,{VAlert:h.a})},784:function(e,t,n){"use strict";n.r(t);n(25),n(230);var r=n(1),l=Object(r.h)({props:{search:String,label:String},setup:function(e,t){var n=Object(r.J)(e.search),l=e.label?e.label:"Search";return Object(r.Y)(n,(function(e){t.emit("update:search",e)})),{searchModel:n,searchLabel:l}}}),c=n(45),o=n(44),d=n.n(o),m=n(27),v=n(134),f=n(140),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",{staticClass:"my-2 pb-2 mt-0",attrs:{flat:"",color:"dark"}},[n("v-row",{staticClass:"px-2",attrs:{dense:""}},[n("v-col",{attrs:{"align-self":"center"}},[n("v-text-field",{staticClass:"pa-0 ma-2",attrs:{"append-icon":"mdi-magnify",label:e.searchLabel,"single-line":"","hide-details":""},model:{value:e.searchModel,callback:function(t){e.searchModel=t},expression:"searchModel"}})],1),e._v(" "),void 0!==e.$slots.default?n("v-col",{attrs:{cols:"auto","align-self":"center"}},[e._t("default")],2):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VCol:m.a,VRow:m.d,VSheet:v.a,VTextField:f.a})},785:function(e,t,n){"use strict";n.r(t);var r=n(1),l=Object(r.h)({props:{selected:Array,headers:Array,item:Object,addToSelectedItem:Function,itemKey:String}}),c=n(45),o=n(44),d=n.n(o),m=n(268),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.headers.length?n("tr",{class:{"v-data-table__selected":e.selected&&e.selected.some((function(t){return(e.itemKey?t[e.itemKey]:t.id)===(e.itemKey?e.item[e.itemKey]:e.item.id)})),"v-data-table__mobile-table-row":e.$vuetify.breakpoint.mobile}},[e.$vuetify.breakpoint.mobile?[n("td",{staticClass:"v-data-table__mobile-row"},[n("div",[e.selected?n("v-simple-checkbox",{attrs:{value:e.selected.some((function(t){return(e.itemKey?t[e.itemKey]:t.id)===(e.itemKey?e.item[e.itemKey]:e.item.id)}))},on:{click:function(t){return e.addToSelectedItem(e.item)}}}):e._e()],1),e._v(" "),n("div",{staticClass:"v-data-table__mobile-row__cell d-flex"},[e._t("actions")],2)]),e._v(" "),e._l(e.headers.filter((function(e){return"actions"!==e.value})),(function(header){return n("td",{key:header.value,staticClass:"v-data-table__mobile-row"},[n("div",{staticClass:"v-data-table__mobile-row__header"},[e._v("\n        "+e._s(header.text)+"\n      ")]),e._v(" "),n("div",{staticClass:"v-data-table__mobile-row__cell"},[e._t(header.value,(function(){return["boolean"==typeof e.item[header.value]?n("v-simple-checkbox",{attrs:{value:e.item[header.value],disabled:""}}):[e._v("\n            "+e._s(e.item[header.value])+"\n          ")]]}))],2)])}))]:[n("td",[n("div",{staticClass:"d-flex"},[e.selected?n("v-simple-checkbox",{attrs:{value:e.selected.some((function(t){return(e.itemKey?t[e.itemKey]:t.id)===(e.itemKey?e.item[e.itemKey]:e.item.id)}))},on:{click:function(t){return e.addToSelectedItem(e.item)}}}):e._e()],1)]),e._v(" "),e._l(e.headers.filter((function(e){return"actions"!==e.value})),(function(header){return n("td",{key:header.value,staticClass:"pa-2 mx-4",class:{"text-center":"center"===header.align,"text-right":"right"===header.align}},[e._t(header.value,(function(){return["boolean"==typeof e.item[header.value]?n("v-simple-checkbox",{attrs:{value:e.item[header.value],disabled:""}}):[e._v("\n          "+e._s(e.item[header.value])+"\n        ")]]}))],2)})),e._v(" "),n("td",[n("div",{staticClass:"d-flex",staticStyle:{"justify-content":"right"}},[e._t("actions")],2)])]],2):e._e()}),[],!1,null,null,null);t.default=component.exports;d()(component,{VSimpleCheckbox:m.b})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[162,97,112,138,139],{1525:function(e,t,n){"use strict";n.r(t);n(1);var l=n(26),r=(n(81),n(4),n(37),n(39),n(8),n(25),n(103),n(146),n(63),n(31),n(5)),c=n(770),o=n(21),d=n(54),v=n(776),m=n(80),f=n(141),h=Object(r.c)({components:{"table-search-bar":Object(r.b)((function(){return Promise.resolve().then(n.bind(null,784))}))},setup:function(){var e=Object(r.i)([]),t=Object(r.i)(""),n=Object(r.i)(!1),h=Object(r.i)([]),_=Object(r.i)([]),y=Object(r.i)(!1);Object(r.p)(y,(function(e){e||(h.value=[])}));var x=Object(r.i)({loading:c.ButtonStates.progress,import:c.ButtonStates.idle}),j=Object(r.a)((function(){return 0===t.value.length?e.value:e.value.filter((function(e){var n=!Object(d.isNil)(e.title.match(new RegExp(Object(d.escapeRegExp)(t.value),"ig"))),l=!Object(d.isNil)(e.videoId.match(new RegExp(Object(d.escapeRegExp)(t.value),"ig")));return n||l}))}));Object(r.f)((function(){k()}));var k=function(){Object(o.getSocket)("/systems/songs").emit("songs::getAllBanned",{},(function(t,n){t?Object(m.a)(t):(e.value=n,x.value.loading=c.ButtonStates.success)}))},O=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.value=!1,e.next=3,Promise.all(h.value.map((function(e){return new Promise((function(t,n){Object(o.getSocket)("/systems/songs").emit("delete.ban",e.videoId,(function(e){e&&n(Object(m.a)(e)),t(!0)}))}))})));case 3:k(),f.a.$emit("snack","success","Data removed."),h.value=[];case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{addToSelectedItem:Object(v.a)(h,"videoId",_),items:e,fItems:j,headers:[{value:"thumbnail",text:"Thumbnail",align:"left"},{value:"videoId",text:"Video ID"},{value:"title",text:"Title"}],headersDelete:[{value:"videoId",text:""},{value:"title",text:""}],state:x,search:t,selectable:y,saveCurrentItems:function(e){_.value=e},generateThumbnail:function(e){return"https://img.youtube.com/vi/".concat(e,"/1.jpg")},addSong:function(){""!==t.value?0===x.value.import&&(x.value.import=1,Object(o.getSocket)("/systems/songs").emit("import.ban",t.value,(function(e){if(e)return t.value="",x.value.import=0,Object(m.a)(e);x.value.import=0,f.a.$emit("snack","success","Song added to ban list."),k(),t.value=""}))):f.a.$emit("snack","red","Cannot add empty song to ban list.")},ButtonStates:c.ButtonStates,deleteDialog:n,deleteSelected:O,selected:h}}}),_=h,y=n(45),x=n(44),j=n.n(x),k=n(271),O=n(48),S=n(43),w=n(27),C=n(269),I=n(378),V=n(68),T=n(30),D=n(384),component=Object(y.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{class:{"pa-4":!e.$vuetify.breakpoint.mobile},attrs:{fluid:""}},[n("v-expand-transition",[e.selected.length>0?n("v-app-bar",{attrs:{color:"blue-grey darken-4",fixed:"",dense:""}},[n("v-row",{staticClass:"px-2",attrs:{dense:"",justify:"end"}},[n("v-col",{attrs:{cols:"auto","align-self":"center"}},[e._v("\n          "+e._s(e.selected.length)+" items selected\n        ")]),e._v(" "),n("v-col",{attrs:{cols:"auto","align-self":"center"}},[n("v-row",{attrs:{dense:""}},[e.selected.length>0?n("v-col",{attrs:{cols:"auto"}},[n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"error",attrs:{small:""}},"v-btn",r,!1),l),[e._v("\n                    Delete\n                  ")])]}}],null,!1,3634750311),model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Delete "+e._s(e.selected.length)+" Item(s)?")])]),e._v(" "),n("v-card-text",[n("v-data-table",{attrs:{dense:"",items:e.selected,headers:e.headersDelete,"items-per-page":-1,"hide-default-header":"","hide-default-footer":""}})],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.deleteDialog=!1}}},[e._v("\n                      Cancel\n                    ")]),e._v(" "),n("v-btn",{attrs:{color:"error",text:""},on:{click:e.deleteSelected}},[e._v("\n                      Delete\n                    ")])],1)],1)],1)],1):e._e()],1)],1)],1)],1):e._e()],1),e._v(" "),n("alert-disabled",{attrs:{system:"songs"}}),e._v(" "),n("v-data-table",{attrs:{"calculate-widths":"","hide-default-header":"","show-select":"",loading:e.state.loading!==e.ButtonStates.success,headers:e.headers,"items-per-page":-1,"item-key":"videoId",items:e.fItems},on:{"current-items":e.saveCurrentItems},scopedSlots:e._u([{key:"top",fn:function(){return[n("table-search-bar",{attrs:{search:e.search,label:"Search or add by link/id"},on:{"update:search":function(t){e.search=t}}},[n("v-btn",{attrs:{color:"primary",disabled:0===e.search.length,loading:1===e.state.import},on:{click:e.addSong}},[e._v("\n          New Item\n        ")])],1)]},proxy:!0},{key:"item",fn:function(t){var l=t.item;return[n("table-mobile",{attrs:{headers:e.headers,selected:e.selected,item:l,addToSelectedItem:e.addToSelectedItem,"item-key":"videoId"},scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-btn",{staticClass:"primary-hover",attrs:{href:"http://youtu.be/"+l.videoId,target:"_blank",icon:""}},[n("v-icon",[e._v("\n              mdi-link\n            ")])],1),e._v(" "),n("v-btn",{staticClass:"danger-hover",attrs:{icon:""},on:{click:function(t){e.selected=[l],e.deleteDialog=!0}}},[n("v-icon",[e._v("\n              mdi-delete-forever\n            ")])],1)]},proxy:!0},{key:"thumbnail",fn:function(){return[n("v-img",{attrs:{"aspect-ratio":16/9,width:100,src:e.generateThumbnail(l.videoId)}})]},proxy:!0}],null,!0)})]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)}),[],!1,null,null,null);t.default=component.exports;j()(component,{AlertDisabled:n(781).default,TableSearchBar:n(784).default,TableMobile:n(785).default}),j()(component,{VAppBar:k.a,VBtn:O.a,VCard:S.a,VCardActions:S.b,VCardText:S.d,VCardTitle:S.e,VCol:w.a,VContainer:w.b,VDataTable:C.a,VDialog:I.a,VExpandTransition:V.a,VIcon:T.a,VImg:D.a,VRow:w.d,VSpacer:w.e})},770:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonStates=void 0,t.ButtonStates={idle:0,progress:1,success:2,fail:3}},776:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var l=n(35);n(94),n(8),n(4),n(82),n(51),n(37),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(39);function r(e,t,n){var r=null,c="select";return function(o){var d=void 0===e.value?e:e.value,v=d.findIndex((function(e){return e[t]===o[t]})),m=!1;if(window.event&&(m=!!window.event.shiftKey),m){var f=n.value.findIndex((function(e){return e[t]===r})),h=n.value.findIndex((function(e){return e[t]===o[t]}));if("select"===c)for(var i=Math.min(f,h);i<=Math.max(f,h);i++)d.push(n.value[i]);else d=d.filter((function(e){for(var t=!0,l=Math.min(f,h);l<=Math.max(f,h);l++)if(e===n.value[l]){t=!1;break}return t}))}else r=o[t],-1===v?(d.push(o),c="select"):(d.splice(v,1),c="unselect");d=Array.from(new Set(Object(l.a)(d))),console.log(d)}}},781:function(e,t,n){"use strict";n.r(t);n(73),n(4),n(33);var l=n(5),r=n(49),c=n.n(r),o=n(1),d=Object(o.h)({props:{system:String,integration:String},setup:function(e){var t=Object(l.o)();return{isEnabled:Object(o.b)((function(){return e.system?t.state.$systems.find((function(t){return t.name===e.system})).enabled:!!e.integration&&t.state.$integrations.find((function(t){return t.name===e.integration})).enabled})),translate:c.a}}}),v=n(45),m=n(44),f=n.n(m),h=n(379),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isEnabled?e._e():n("v-alert",{staticClass:"mb-0",attrs:{color:"error",text:""}},[e._v("\n  "+e._s(e.translate("this-system-is-disabled"))+"\n")])}),[],!1,null,null,null);t.default=component.exports;f()(component,{VAlert:h.a})},784:function(e,t,n){"use strict";n.r(t);n(25),n(230);var l=n(1),r=Object(l.h)({props:{search:String,label:String},setup:function(e,t){var n=Object(l.J)(e.search),r=e.label?e.label:"Search";return Object(l.Y)(n,(function(e){t.emit("update:search",e)})),{searchModel:n,searchLabel:r}}}),c=n(45),o=n(44),d=n.n(o),v=n(27),m=n(134),f=n(140),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",{staticClass:"my-2 pb-2 mt-0",attrs:{flat:"",color:"dark"}},[n("v-row",{staticClass:"px-2",attrs:{dense:""}},[n("v-col",{attrs:{"align-self":"center"}},[n("v-text-field",{staticClass:"pa-0 ma-2",attrs:{"append-icon":"mdi-magnify",label:e.searchLabel,"single-line":"","hide-details":""},model:{value:e.searchModel,callback:function(t){e.searchModel=t},expression:"searchModel"}})],1),e._v(" "),void 0!==e.$slots.default?n("v-col",{attrs:{cols:"auto","align-self":"center"}},[e._t("default")],2):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VCol:v.a,VRow:v.d,VSheet:m.a,VTextField:f.a})},785:function(e,t,n){"use strict";n.r(t);var l=n(1),r=Object(l.h)({props:{selected:Array,headers:Array,item:Object,addToSelectedItem:Function,itemKey:String}}),c=n(45),o=n(44),d=n.n(o),v=n(268),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.headers.length?n("tr",{class:{"v-data-table__selected":e.selected&&e.selected.some((function(t){return(e.itemKey?t[e.itemKey]:t.id)===(e.itemKey?e.item[e.itemKey]:e.item.id)})),"v-data-table__mobile-table-row":e.$vuetify.breakpoint.mobile}},[e.$vuetify.breakpoint.mobile?[n("td",{staticClass:"v-data-table__mobile-row"},[n("div",[e.selected?n("v-simple-checkbox",{attrs:{value:e.selected.some((function(t){return(e.itemKey?t[e.itemKey]:t.id)===(e.itemKey?e.item[e.itemKey]:e.item.id)}))},on:{click:function(t){return e.addToSelectedItem(e.item)}}}):e._e()],1),e._v(" "),n("div",{staticClass:"v-data-table__mobile-row__cell d-flex"},[e._t("actions")],2)]),e._v(" "),e._l(e.headers.filter((function(e){return"actions"!==e.value})),(function(header){return n("td",{key:header.value,staticClass:"v-data-table__mobile-row"},[n("div",{staticClass:"v-data-table__mobile-row__header"},[e._v("\n        "+e._s(header.text)+"\n      ")]),e._v(" "),n("div",{staticClass:"v-data-table__mobile-row__cell"},[e._t(header.value,(function(){return["boolean"==typeof e.item[header.value]?n("v-simple-checkbox",{attrs:{value:e.item[header.value],disabled:""}}):[e._v("\n            "+e._s(e.item[header.value])+"\n          ")]]}))],2)])}))]:[n("td",[n("div",{staticClass:"d-flex"},[e.selected?n("v-simple-checkbox",{attrs:{value:e.selected.some((function(t){return(e.itemKey?t[e.itemKey]:t.id)===(e.itemKey?e.item[e.itemKey]:e.item.id)}))},on:{click:function(t){return e.addToSelectedItem(e.item)}}}):e._e()],1)]),e._v(" "),e._l(e.headers.filter((function(e){return"actions"!==e.value})),(function(header){return n("td",{key:header.value,staticClass:"pa-2 mx-4",class:{"text-center":"center"===header.align,"text-right":"right"===header.align}},[e._t(header.value,(function(){return["boolean"==typeof e.item[header.value]?n("v-simple-checkbox",{attrs:{value:e.item[header.value],disabled:""}}):[e._v("\n          "+e._s(e.item[header.value])+"\n        ")]]}))],2)})),e._v(" "),n("td",[n("div",{staticClass:"d-flex",staticStyle:{"justify-content":"right"}},[e._t("actions")],2)])]],2):e._e()}),[],!1,null,null,null);t.default=component.exports;d()(component,{VSimpleCheckbox:v.b})}}]);
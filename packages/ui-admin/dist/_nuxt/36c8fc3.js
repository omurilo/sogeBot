(window.webpackJsonp=window.webpackJsonp||[]).push([[183,112],{1468:function(e,t,n){"use strict";n.r(t);n(1),n(40),n(51),n(25),n(11),n(52),n(55),n(8),n(14),n(15);var r=n(2),c=n(35),o=n(26),l=(n(81),n(4),n(13),n(73),n(12),n(28),n(37),n(39),n(31),n(33),n(5)),v=n(770),d=n(21),f=n(49),m=n.n(f),h=n(173),y=n(776),O=n(80),x=n(141),j=n(266);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function _(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){l=!0,c=e},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw c}}}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var D=Object(l.c)({setup:function(){var e={name:[j.h]},t=Object(l.i)([]),n=Object(l.i)(""),f=Object(l.i)([]),k=Object(l.i)([]),S=Object(l.i)(!1),D=Object(l.i)(!1);Object(l.p)(D,(function(e){e||(f.value=[])}));var C=Object(l.i)({loading:v.ButtonStates.progress}),V=[{value:"name",text:m()("name")},{value:"actions",text:"",sortable:!1,align:"right"}];Object(l.f)((function(){I()}));var I=function(){Object(d.getSocket)("/registries/text").emit("generic::getAll",(function(e,n){if(e)return Object(O.a)(e);console.debug("Loaded",n),t.value=n,f.value.length>0&&f.value.forEach((function(e,n){e=t.value.find((function(t){return t.id===e.id}))||e,f.value[n]=e})),C.value.loading=v.ButtonStates.success}))},P=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(n){var o,l,v,m,h,y,O,j,k,S,D,C=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=C.length>1&&void 0!==C[1]&&C[1],l=C.length>2?C[2]:void 0,v=0,m=Object.keys(e);case 3:if(!(v<m.length)){t.next=31;break}h=m[v],y=_(e[h]),t.prev=6,y.s();case 8:if((O=y.n()).done){t.next=20;break}if(j=O.value,!0!==(k=j(n[h]))){t.next=15;break}return t.abrupt("continue",18);case 15:return x.a.$emit("snack","red","[".concat(h,"] - ").concat(k)),I(),t.abrupt("return");case 18:t.next=8;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(6),y.e(t.t0);case 25:return t.prev=25,y.f(),t.finish(25);case 28:v++,t.next=3;break;case 31:for(S=0,D=[n].concat(Object(c.a)(o?f.value:[]));S<D.length;S++)D[S][l]=n[l];return t.next=34,Promise.all([n].concat(Object(c.a)(o?f.value:[])).map((function(e){return new Promise((function(t){console.log("Updating",{itemToUpdate:e},{attr:l,value:n[l]}),Object(d.getSocket)("/registries/text").emit("text::save",w(w({},e),{},Object(r.a)({},l,n[l])),(function(){t(!0)}))}))})));case 34:I(),x.a.$emit("snack","success","Data updated.");case 36:case"end":return t.stop()}}),t,null,[[6,22,25,28]])})));return function(e){return t.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S.value=!1,e.next=3,Promise.all(f.value.map((function(e){return new Promise((function(t,n){Object(d.getSocket)("/registries/text").emit("text::remove",e,(function(e){e&&n(Object(O.a)(e)),t(!0)}))}))})));case 3:I(),x.a.$emit("snack","success","Data removed."),f.value=[];case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{addToSelectedItem:Object(y.a)(f,"id",k),items:t,search:n,state:C,headers:V,headersDelete:[{value:"name",text:""}],selected:f,deleteSelected:A,update:P,selectable:D,deleteDialog:S,translate:m.a,saveSuccess:function(){I(),x.a.$emit("snack","success","Data updated.")},rules:e,ButtonStates:v.ButtonStates,clone:function(e){Object(d.getSocket)("/registries/text").emit("text::save",w(w({},e),{},{id:Object(h.a)(),name:e.name+" (clone)"}),(function(e){e?console.error(e):x.a.$emit("snack","success","Data cloned."),I()}))},saveCurrentItems:function(e){k.value=e}}}}),C=D,V=n(45),I=n(44),P=n.n(I),A=n(48),B=n(43),T=n(27),$=n(269),M=n(378),E=n(383),R=n(30),U=n(134),J=n(140),component=Object(V.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{class:{"pa-4":!e.$vuetify.breakpoint.mobile},attrs:{fluid:""}},[n("v-data-table",{attrs:{"calculate-widths":"","show-select":e.selectable,search:e.search,loading:e.state.loading!==e.ButtonStates.success,headers:e.headers,"items-per-page":-1,items:e.items,"sort-by":"name"},on:{"current-items":e.saveCurrentItems,"click:row":e.addToSelectedItem},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-sheet",{staticClass:"my-2 pb-2 mt-0",attrs:{flat:"",color:"dark"}},[n("v-row",{staticClass:"px-2",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pr-2",attrs:{cols:"auto","align-self":"center"}},[n("v-btn",{attrs:{icon:"",color:e.selectable?"primary":"secondary"},on:{click:function(t){e.selectable=!e.selectable}}},[n("v-icon",[e._v("\n                mdi-checkbox-multiple-marked-outline\n              ")])],1)],1),e._v(" "),n("v-col",{attrs:{"align-self":"center"}},[n("v-text-field",{staticClass:"pa-0 ma-2",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),n("v-col",{attrs:{cols:"auto","align-self":"center"}},[e.selected.length>0?[n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,c=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mr-1",attrs:{color:"error"}},"v-btn",c,!1),r),[e._v("\n                    Delete "+e._s(e.selected.length)+" Item(s)\n                  ")])]}}],null,!1,1852500087),model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Delete "+e._s(e.selected.length)+" Item(s)?")])]),e._v(" "),n("v-card-text",[n("v-data-table",{attrs:{dense:"",items:e.selected,headers:e.headersDelete,"items-per-page":-1,"hide-default-header":"","hide-default-footer":""}})],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.deleteDialog=!1}}},[e._v("\n                      Cancel\n                    ")]),e._v(" "),n("v-btn",{attrs:{color:"error",text:""},on:{click:e.deleteSelected}},[e._v("\n                      Delete\n                    ")])],1)],1)],1)]:e._e(),e._v(" "),n("v-btn",{attrs:{color:"primary",to:"/registry/textoverlay/new",nuxt:""}},[e._v("\n              New Item\n            ")])],2)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var r=t.item;return[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var c=t.hover;return[n("v-btn",{attrs:{icon:"",color:c?"primary":"secondary lighten-3",nuxt:"",to:"/registry/textoverlay/"+r.id}},[n("v-icon",[e._v("mdi-pencil")])],1)]}}],null,!0)}),e._v(" "),n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var c=t.hover;return[n("v-btn",{attrs:{icon:"",color:c?"primary":"secondary lighten-3"},on:{click:function(t){return t.stopPropagation(),e.clone(r)}}},[n("v-icon",[e._v("mdi-content-copy")])],1)]}}],null,!0)}),e._v(" "),n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var c=t.hover;return[n("v-btn",{attrs:{icon:"",color:c?"primary":"secondary lighten-3",href:"/overlays/text/"+r.id}},[n("v-icon",[e._v("mdi-link")])],1)]}}],null,!0)})]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)}),[],!1,null,null,null);t.default=component.exports;P()(component,{VBtn:A.a,VCard:B.a,VCardActions:B.b,VCardText:B.d,VCardTitle:B.e,VCol:T.a,VContainer:T.b,VDataTable:$.a,VDialog:M.a,VHover:E.a,VIcon:R.a,VRow:T.d,VSheet:U.a,VSpacer:T.e,VTextField:J.a})},770:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonStates=void 0,t.ButtonStates={idle:0,progress:1,success:2,fail:3}},776:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(35);n(94),n(8),n(4),n(82),n(51),n(37),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(39);function c(e,t,n){var c=null,o="select";return function(l){var v=void 0===e.value?e:e.value,d=v.findIndex((function(e){return e[t]===l[t]})),f=!1;if(window.event&&(f=!!window.event.shiftKey),f){var m=n.value.findIndex((function(e){return e[t]===c})),h=n.value.findIndex((function(e){return e[t]===l[t]}));if("select"===o)for(var i=Math.min(m,h);i<=Math.max(m,h);i++)v.push(n.value[i]);else v=v.filter((function(e){for(var t=!0,r=Math.min(m,h);r<=Math.max(m,h);r++)if(e===n.value[r]){t=!1;break}return t}))}else c=l[t],-1===d?(v.push(l),o="select"):(v.splice(d,1),o="unselect");v=Array.from(new Set(Object(r.a)(v))),console.log(v)}}}}]);
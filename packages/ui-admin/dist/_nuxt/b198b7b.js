(window.webpackJsonp=window.webpackJsonp||[]).push([[20,104],{1031:function(e,t,n){"use strict";n.r(t);n(1);var r=n(35),o=(n(28),n(31),n(33),n(5)),l=n(49),c=n.n(l),m=n(783),d=Object(o.c)({props:{permission:String,permissions:Array,nullable:Boolean},setup:function(e,t){var menu=Object(o.i)(!1),n=Object(o.a)((function(){var t,n;return e.nullable?[{text:"-- unset --",value:null,disabled:!1}].concat(Object(r.a)((null!==(n=e.permissions)&&void 0!==n?n:[]).map((function(e){return{text:e.name,value:e.id,disabled:!1}})))):null===(t=e.permissions)||void 0===t?void 0:t.map((function(e){return{text:e.name,value:e.id,disabled:!1}}))}));return{triggerEvent:function(input){(null!==input||e.nullable)&&(t.emit("input",input),menu.value=!1)},menu:menu,permissionItems:n,translate:c.a,getPermissionName:m.a}}}),v=(n(996),n(45)),f=n(44),_=n.n(f),h=n(48),y=n(145),x=n(266),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-inline-block"},[n("v-menu",{attrs:{"close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{small:"",plain:""}},"v-btn",o,!1),r),[e._v("\n        "+e._s(e.getPermissionName(e.permission,e.permissions))+"\n      ")])]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-select",{staticClass:"ma-2",attrs:{value:e.permission,label:e.translate("permission"),items:e.permissionItems,clearable:e.nullable},on:{change:e.triggerEvent}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;_()(component,{VBtn:h.a,VMenu:y.a,VSelect:x.a})},1412:function(e,t,n){"use strict";n.r(t);var r=n(1),o=(n(4),n(37),n(39),n(46),n(12),n(28),n(82),n(40),n(33),n(51),n(25),n(11),n(52),n(55),n(21)),l=n(49),c=n.n(l),m=n(54),d=n(779),v=n.n(d),f=n(804),_=n.n(f),h=n(173),y=n(981),x=n.n(y),k=n(141);function w(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var O={command:"",responses:[],group:null,enabled:!0,visible:!0,count:0},C=Object(r.h)({components:{draggable:x.a,"input-variables":Object(r.g)({loader:function(){return Promise.resolve().then(n.bind(null,796))}}),"input-permissions":Object(r.g)({loader:function(){return Promise.resolve().then(n.bind(null,1031))}})},props:{value:Object,rules:Object,permissionItems:Array,permissions:Array,groupItems:Array},setup:function(e,t){var menu=Object(r.J)(!1),n=Object(r.J)(_()(e.value||O)),l=Object(r.J)(!0),d=Object(r.J)(!1),form=Object(r.J)(null),f=Object(r.J)();var y=function t(){l.value=!0,form.value?(form.value.resetValidation(),n.value=_()(e.value||O)):setTimeout((function(){t()}),100)};Object(r.Y)(menu,(function(e){e&&y()})),Object(r.Y)(n,(function(e){for(var i=0;i<e.responses.length;i++)n.value.responses[i].order=i}),{deep:!0});return{menu:menu,item:n,save:function(){if(form.value.validate()){for(var r,l=0,c=Object.keys(e.rules);l<c.length;l++){var m,v=c[l],f=w(e.rules[v]);try{for(f.s();!(m=f.n()).done;){var _=(0,m.value)(n.value[v]);if(!0!==_)return void k.a.$emit("snack","red","[".concat(v,"] - ").concat(_))}}catch(e){f.e(e)}finally{f.f()}}console.log("Updating",{data:n.value}),d.value=!0,Object(o.getSocket)("/systems/customcommands").emit("generic::setById",{id:null!==(r=n.value.id)&&void 0!==r?r:Object(h.a)(),item:n.value},(function(){d.value=!1,menu.value=!1,k.a.$emit("snack","success","Data updated."),t.emit("save")}))}},translate:c.a,capitalize:v.a,valid:l,saving:d,form:form,orderBy:m.orderBy,remove:function(e){n.value&&n.value.responses.splice(e,1)},group:f}}}),S=n(45),V=n(44),I=n.n(V),A=n(48),$=n(43),T=n(27),E=n(778),M=n(379),B=n(377),J=n(30),z=n(824),P=n(18),D=n(765),F=n(140),L=n(774),component=Object(S.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-dialog",{attrs:{persistent:"","max-width":"1000",scrollable:"",fullscreen:e.$vuetify.breakpoint.mobile},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[void 0!==e.item.id?n("v-btn",e._g(e._b({staticClass:"primary-hover",attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[e._v("\n          mdi-pencil\n        ")])],1):n("v-btn",e._g(e._b({attrs:{color:"primary"}},"v-btn",o,!1),r),[e._v("\n        New item\n      ")])]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-card",{staticClass:"pt-3",attrs:{outlined:""}},[n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:e.translate("command"),rules:e.rules.command,"hide-details":"auto",required:""},model:{value:e.item.command,callback:function(t){e.$set(e.item,"command",t)},expression:"item.command"}}),e._v(" "),n("v-row",{attrs:{dense:""}},[n("v-col",[n("v-combobox",{attrs:{label:e.translate("group"),"hide-details":"auto",clearable:"","search-input":e.group,"return-object":!1,items:e.groupItems.filter((function(e){return null!==e.value}))},on:{"update:searchInput":function(t){e.group=t},"update:search-input":function(t){e.group=t}},scopedSlots:e._u([{key:"no-data",fn:function(){return[n("v-list-item",[e._v("\n                    Create "),n("strong",[e._v(e._s(e.group))])])]},proxy:!0}]),model:{value:e.item.group,callback:function(t){e.$set(e.item,"group",t)},expression:"item.group"}})],1)],1),e._v(" "),n("v-text-field",{attrs:{label:e.capitalize(e.translate("count")),value:e.item.count,type:"number","hide-details":"auto",rules:e.rules.count,"append-outer-icon":"mdi-restore"},on:{"click:append-outer":function(t){e.item.count=0}}}),e._v(" "),n("v-row",{attrs:{dense:""}},[n("v-col",[n("v-switch",{attrs:{label:e.translate("enabled"),"persistent-hint":"","hide-details":"auto",hint:e.item.enabled?"Custom command is enabled":"Custom command is disabled"},model:{value:e.item.enabled,callback:function(t){e.$set(e.item,"enabled",t)},expression:"item.enabled"}})],1),e._v(" "),n("v-col",[n("v-switch",{attrs:{label:e.capitalize(e.translate("visible")),"persistent-hint":"","hide-details":"auto",hint:e.item.visible?"Custom command will be visible in lists":"Custom command won't be visible in lists"},model:{value:e.item.visible,callback:function(t){e.$set(e.item,"visible",t)},expression:"item.visible"}})],1)],1),e._v(" "),n("draggable",{attrs:{draggable:".item",handle:".handle"},model:{value:e.item.responses,callback:function(t){e.$set(e.item,"responses",t)},expression:"item.responses"}},e._l(e.item.responses,(function(t,i){return n("v-list-item",{key:"response"+i,staticClass:"item"},[n("v-list-item-content",[n("v-row",{attrs:{dense:"",align:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("v-icon",{staticClass:"handle"},[e._v("\n                      mdi-drag\n                    ")])],1),e._v(" "),n("v-col",[n("v-lazy",[n("v-textarea",{attrs:{"hide-details":"auto",label:e.translate("response")+"#"+(i+1),rows:1,"auto-grow":"",counter:"",autofocus:0===i},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}},scopedSlots:e._u([{key:"append",fn:function(){return[n("input-variables",{attrs:{filters:["sender","param","!param","touser"]},on:{input:function(t){e.item.responses[i].response=e.item.responses[i].response+t}}})]},proxy:!0},{key:"counter",fn:function(){return[n("v-row",{attrs:{dense:"",align:"center"}},[n("v-col",[n("v-text-field",{attrs:{dense:"","hide-details":"auto",solo:"",label:e.capitalize(e.translate("systems.customcommands.filter.name"))},scopedSlots:e._u([{key:"append",fn:function(){return[n("input-variables",{attrs:{filters:["sender","source","param","haveParam","is.newchatter","is.moderator","is.subscriber","is.vip","is.follower","is.broadcaster","is.bot","is.owner","rank","game","language","title","followers","subscribers","isBotSubscriber"]},on:{input:function(t){e.item.responses[i].filter=e.item.responses[i].filter+t}}})]},proxy:!0}],null,!0),model:{value:e.item.responses[i].filter,callback:function(t){e.$set(e.item.responses[i],"filter",t)},expression:"item.responses[i].filter"}})],1),e._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("input-permissions",{attrs:{permissions:e.permissions,permission:e.item.responses[i].permission,nullable:""},on:{input:function(t){e.item.responses[i].permission=t}}})],1),e._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{small:"",plain:""},on:{click:function(t){e.item.responses[i].stopIfExecuted=!e.item.responses[i].stopIfExecuted}}},[e._v("\n                                "+e._s(e.item.responses[i].stopIfExecuted?e.translate("commons.stop-if-executed"):e.translate("commons.continue-if-executed"))+"\n                              ")])],1)],1)]},proxy:!0}],null,!0),model:{value:e.item.responses[i].response,callback:function(t){e.$set(e.item.responses[i],"response",t)},expression:"item.responses[i].response"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.remove(i)}}},[n("v-icon",[e._v("mdi-delete-forever")])],1)],1)],1)],1)],1)})),1)],1)],1),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:function(t){e.item.responses.push({filter:"",order:e.item.responses.length,response:"",stopIfExecuted:!1,permission:e.orderBy(e.permissions,"order","asc").pop().id})}}},[e._v("\n          "+e._s(e.translate("systems.customcommands.addResponse"))+"\n        ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.menu=!1}}},[e._v("\n          Cancel\n        ")]),e._v(" "),n("v-btn",{attrs:{color:"primary",loading:e.saving,text:"",disabled:!e.valid},on:{click:function(t){return e.save()}}},[e._v("\n          Save & Close\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;I()(component,{InputVariables:n(796).default,InputPermissions:n(1031).default}),I()(component,{VBtn:A.a,VCard:$.a,VCardActions:$.b,VCardText:$.d,VCol:T.a,VCombobox:E.a,VDialog:M.a,VForm:B.a,VIcon:J.a,VLazy:z.a,VListItem:P.c,VListItemContent:P.f,VRow:T.d,VSpacer:T.e,VSwitch:D.a,VTextField:F.a,VTextarea:L.a})},780:function(e,t,n){var content=n(793);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("7cd62aa5",content,!0,{sourceMap:!1})},783:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(73),n(4),n(71),n(33);var r=function(e,t){if(!t)throw new Error("Missing permissions list");if(!e)return"-- unset --";var n=t.find((function(t){return t.id===e}));return void 0!==n?""===n.name.trim()?n.id:n.name:null}},792:function(e,t,n){"use strict";n(780)},793:function(e,t,n){var r=n(19)((function(i){return i[1]}));r.push([e.i,".theme--dark .v-menu__content{background-color:#1e1e1e}.theme--light .v-menu__content{background-color:#fff}",""]),r.locals={},e.exports=r},796:function(e,t,n){"use strict";n.r(t);n(1);var r=n(35),o=(n(31),n(4),n(212),n(37),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(39),n(28),n(34),n(47),n(25),n(62),n(5)),l=n(49),c=n.n(l),m=Object(o.c)({props:{filters:Array},setup:function(e,t){var n=Object(o.i)(""),menu=Object(o.i)(!1),l=["title","game","viewers","followers","subscribers","spotifySong","ytSong","latestFollower","latestSubscriber","latestSubscriberMonths","latestSubscriberStreak","latestTipAmount","latestTipCurrency","latestTipMessage","latestTip","toptip.overall.username","toptip.overall.amount","toptip.overall.currency","toptip.overall.message","toptip.stream.username","toptip.stream.amount","toptip.stream.currency","toptip.stream.message","latestCheerAmount","latestCheerMessage","latestCheer","isBotSubscriber","isStreamOnline","uptime"];return{filterItems:Object(o.a)((function(){var t;return Object(r.a)(new Set([].concat(l,Object(r.a)(null!==(t=e.filters)&&void 0!==t?t:[])))).map((function(e){return{text:c()("responses.variable."+e),value:"$".concat(e),disabled:!1}}))})),filterToAdd:n,addVariable:function(input){var n;null!==input&&[].concat(l,Object(r.a)(null!==(n=e.filters)&&void 0!==n?n:[])).includes(input.replace("$",""))&&(console.log("add "+input),t.emit("input",input),menu.value=!1)},menu:menu}}}),d=(n(792),n(45)),v=n(44),f=n.n(v),_=n(48),h=n(778),y=n(30),x=n(145),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-inline-block"},[n("v-menu",{attrs:{"close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:function(t){e.filterToAdd=""}}},"v-btn",o,!1),r),[n("v-icon",[e._v("mdi-variable")])],1)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-combobox",{staticClass:"ma-2",attrs:{autofocus:"",label:"Select variable","search-input":e.filterToAdd,"return-object":!1,items:e.filterItems},on:{"update:searchInput":function(t){e.filterToAdd=t},"update:search-input":function(t){e.filterToAdd=t},change:function(t){return e.addVariable(t)}}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:_.a,VCombobox:h.a,VIcon:y.a,VMenu:x.a})},969:function(e,t,n){var content=n(997);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("9e2e46f6",content,!0,{sourceMap:!1})},996:function(e,t,n){"use strict";n(969)},997:function(e,t,n){var r=n(19)((function(i){return i[1]}));r.push([e.i,".theme-- .v-menu__content{background-color:#1e1e1e}.theme--light .v-menu__content{background-color:#fff}",""]),r.locals={},e.exports=r}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[152,97,112,137,138,139,140],{1031:function(e,t,n){"use strict";n.r(t);n(4),n(37),n(39);var r=n(5),o=n(49),l=n.n(o),c=n(54),d=n(782),v=Object(r.c)({components:{"text-with-tags":Object(r.b)({loader:function(){return Promise.resolve().then(n.bind(null,971))}})},props:{responses:Array,name:String,permissions:Array},setup:function(){return{orderBy:c.orderBy,translate:l.a,capitalize:c.capitalize,getPermissionName:d.a}}}),f=(n(997),n(45)),m=n(44),h=n.n(m),y=n(27),_=n(175),x=n(30),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"responses",staticStyle:{"list-style-type":"none"}},[0===e.responses.length?n("li",{staticClass:"text--lighten-1  red--text"},[e._v(e._s(e.translate("systems.customcommands.no-responses-set")))]):e._e(),e._v(" "),e.$vuetify.breakpoint.mobile?n("span",[e._v("\n    "+e._s(e.responses.length)+" responses set\n  ")]):n("span",[e._l(e.responses,(function(t,i){return[n("li",{key:i},[i>0?n("v-divider"):e._e(),e._v(" "),n("v-row",[n("v-col",{staticClass:"caption",attrs:{cols:"auto"}},[e._v("\n            "+e._s(e.translate("response"))+"#"+e._s(i+1)+"\n          ")]),e._v(" "),n("v-col",{staticClass:"caption",attrs:{cols:"auto"}},[n("v-icon",{attrs:{small:"",left:""}},[e._v("mdi-key")]),e._v("\n            "+e._s(e.getPermissionName(t.permission,e.permissions))+"\n          ")],1),e._v(" "),n("v-col",{staticClass:"caption",attrs:{cols:"auto"}},[t.stopIfExecuted?n("v-icon",{attrs:{small:"",left:""}},[e._v("\n              mdi-pause\n            ")]):n("v-icon",{attrs:{small:"",left:""}},[e._v("\n              mdi-play\n            ")]),e._v("\n            "+e._s(t.stopIfExecuted?e.translate("commons.stop-if-executed"):e.translate("commons.continue-if-executed"))+"\n          ")],1),e._v(" "),t.filter.length>0?n("v-col",{staticClass:"caption"},[n("v-icon",{attrs:{small:"",left:""}},[e._v("\n              mdi-filter\n            ")]),e._v(" "),n("text-with-tags",{staticClass:"d-inline-block",attrs:{value:t.filter}})],1):e._e()],1),e._v(" "),n("text-with-tags",{staticClass:"pl-4",attrs:{value:t.response}})],1)]}))],2)])}),[],!1,null,"c444f8d0",null);t.default=component.exports;h()(component,{TextWithTags:n(971).default}),h()(component,{VCol:y.a,VDivider:_.a,VIcon:x.a,VRow:y.d})},1152:function(e,t,n){"use strict";n.r(t);var r=n(1),o=(n(24),n(49)),l=n.n(o),c=n(778),d=n.n(c),v=Object(r.h)({props:{length:Number,permissionItems:Array,groupItems:Array},setup:function(e,t){var menu=Object(r.J)(!1),n=Object(r.J)(!0),o=Object(r.J)(null),c=Object(r.J)(!1),v=Object(r.J)(""),f=Object(r.J)(!0),m=Object(r.J)(!1),h=Object(r.J)(!0),y=Object(r.J)(!1);return{group:o,groupToggle:c,groupSearch:v,enabled:f,enabledToggle:m,visible:h,visibleToggle:y,menu:menu,save:function(){t.emit("save",{group:c.value?o.value:void 0,enabled:m.value?f.value:void 0,visible:y.value?h.value:void 0}),menu.value=!1},translate:l.a,capitalize:d.a,valid:n}}}),f=n(45),m=n(44),h=n.n(m),y=n(48),_=n(43),x=n(27),k=n(777),O=n(376),S=n(18),j=n(145),C=n(268),w=n(764),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-menu",{attrs:{"offset-y":"","close-on-click":!1,"min-width":"400","close-on-content-click":!1,"offset-overflow":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{small:""}},"v-btn",o,!1),r),[e._v("\n        Batch update\n      ")])]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-card",{attrs:{outlined:""}},[n("v-card-text",[n("v-form",{attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"auto","align-self":"center"}},[n("v-simple-checkbox",{model:{value:e.groupToggle,callback:function(t){e.groupToggle=t},expression:"groupToggle"}})],1),e._v(" "),n("v-col",[n("v-combobox",{attrs:{label:e.translate("group"),disabled:!e.groupToggle,clearable:"","search-input":e.groupSearch,"hide-details":"auto","return-object":!1,items:e.groupItems.filter((function(e){return null!==e.value}))},on:{"update:searchInput":function(t){e.groupSearch=t},"update:search-input":function(t){e.groupSearch=t}},scopedSlots:e._u([{key:"no-data",fn:function(){return[n("v-list-item",[e._v("\n                    Create "),n("strong",[e._v(e._s(e.groupSearch))])])]},proxy:!0}]),model:{value:e.group,callback:function(t){e.group=t},expression:"group"}})],1)],1),e._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"auto","align-self":"center"}},[n("v-simple-checkbox",{model:{value:e.enabledToggle,callback:function(t){e.enabledToggle=t},expression:"enabledToggle"}})],1),e._v(" "),n("v-col",[n("v-switch",{attrs:{disabled:!e.enabledToggle,label:e.translate("enabled"),"persistent-hint":"","hide-details":"auto",hint:e.enabled?"Custom command is enabled":"Custom command is disabled"},model:{value:e.enabled,callback:function(t){e.enabled=t},expression:"enabled"}})],1)],1),e._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"auto","align-self":"center"}},[n("v-simple-checkbox",{model:{value:e.visibleToggle,callback:function(t){e.visibleToggle=t},expression:"visibleToggle"}})],1),e._v(" "),n("v-col",[n("v-switch",{attrs:{disabled:!e.visibleToggle,label:e.capitalize(e.translate("visible")),"persistent-hint":"","hide-details":"auto",hint:e.visible?"Custom command will be visible in lists":"Custom command won't be visible in lists"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.menu=!1}}},[e._v("\n          Cancel\n        ")]),e._v(" "),n("v-btn",{attrs:{color:"primary",text:"",disabled:!e.valid},on:{click:function(t){return e.save()}}},[e._v("\n          Save\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:y.a,VCard:_.a,VCardActions:_.b,VCardText:_.d,VCol:x.a,VCombobox:k.a,VForm:O.a,VListItem:S.c,VMenu:j.a,VRow:x.d,VSimpleCheckbox:C.b,VSpacer:x.e,VSwitch:w.a})},1239:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CustomCommandsGetAll"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"permissions"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"customCommandsGroup"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"filter"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"permission"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:117}};n.loc.source={body:"query CustomCommandsGetAll {\n  permissions { id name }\n  customCommandsGroup { name options { filter permission } }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var o={};function l(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.CustomCommandsGetAll=function(e,t){var n={kind:e.kind,definitions:[l(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=o[t]||new Set,c=new Set,d=new Set;for(r.forEach((function(e){d.add(e)}));d.size>0;){var v=d;d=new Set,v.forEach((function(e){c.has(e)||(c.add(e),(o[e]||new Set).forEach((function(e){d.add(e)})))}))}return c.forEach((function(t){var r=l(e,t);r&&n.definitions.push(r)})),n}(n,"CustomCommandsGetAll")},1446:function(e,t,n){"use strict";n.r(t);var r,o=n(1),l=n(60),c=(n(40),n(51),n(25),n(11),n(52),n(55),n(14),n(15),n(147)),d=n(10),v=n(35),f=n(2),m=n(26),h=(n(81),n(4),n(13),n(73),n(37),n(39),n(31),n(28),n(33),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(119),n(8),n(12),n(770)),y=n(21),_=n(49),x=n.n(_),k=n(148),O=n(54),S=n(776),j=n(80),C=n(141),w=n(782),I=n(266),V=n(1239),A=n.n(V);function G(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?G(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):G(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function K(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var $={setup:function(e,t){var n=[],_=Object(l.d)().$graphql,V=Object(o.J)(!0),G=Object(o.J)([]),E=Object(o.J)([]),$=Object(o.J)([]),D=function(){var e=Object(m.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.default.request(A.a);case 2:data=e.sent,B.value.length>0&&B.value.forEach((function(e,t){e=output.find((function(t){return t.id===e.id}))||e,B.value[t]=e})),E.value=data.customCommandsGroup,$.value=data.permissions,V.value=!1;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N={command:[Object(I.j)(["!"]),I.h,Object(I.e)(2)],count:[I.h,Object(I.f)(0)]},P=Object(o.J)(""),B=Object(o.J)([]),J=Object(o.J)(!1),M=Object(o.J)([]),F=Object(o.J)({loadingPrm:h.ButtonStates.progress,loading:h.ButtonStates.progress}),R=[{value:"command",text:x()("command"),width:"15rem"},{value:"enabled",text:x()("enabled"),align:"center"},{value:"visible",text:Object(O.capitalize)(x()("visible")),align:"center"},{value:"count",text:Object(O.capitalize)(x()("count")),align:"right"},{value:"actions",sortable:!1}],z=[{value:"command",text:x()("command")}],U=function(){D(),Object(y.getSocket)("/systems/customcommands").emit("generic::getAll",(function(e,t,r){if(e)return Object(j.a)(e);console.debug({commands:t,count:n}),n=r||[],G.value.length=0;var o,l=K(t);try{var c=function(){var e,t=o.value;G.value.push(T(T({},t),{},{responses:Object(O.orderBy)(t.responses,"order","asc"),count:(null===(e=n.find((function(e){return e.command===t.command})))||void 0===e?void 0:e.count)||0}))};for(l.s();!(o=l.n()).done;)c()}catch(e){l.e(e)}finally{l.f()}B.value.length>0&&B.value.forEach((function(e,t){e=G.value.find((function(t){return t.id===e.id}))||e,B.value[t]=e})),F.value.loading=h.ButtonStates.success}))};Object(o.A)((function(){U()}));var L=function(){var e=Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J.value=!1,e.next=3,Promise.all(B.value.map((function(e){return new Promise((function(t,n){Object(y.getSocket)("/systems/customcommands").emit("generic::deleteById",e.id,(function(e){e&&n(Object(j.a)(e)),t(!0)}))}))})));case 3:U(),C.a.$emit("snack","success","Data removed."),B.value=[];case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=Object(o.b)((function(){return[{text:"-- unset --",value:null,disabled:!1}].concat(Object(v.a)($.value.map((function(e){return{text:e.name,value:e.id,disabled:!1}}))))})),H=Object(o.b)((function(){return Object(v.a)(new Set(G.value.filter((function(e){return null!==e.group})).map((function(e){return e.group})).sort())).map((function(e){return{text:e,value:e,disabled:!1}}))})),Q=function(e){var t,n=K(G.value.filter((function(t){return t.group===e})));try{var r=function(){var e=t.value;if(!B.value.find((function(t){return t.id===e.id})))return{v:!1}};for(n.s();!(t=n.n()).done;){var o=r();if("object"===Object(d.a)(o))return o.v}}catch(e){n.e(e)}finally{n.f()}return!0},W=Object(o.b)({get:function(){var e,t={},n=K(G.value);try{var r=function(){var n=e.value;if(n.group&&!t[n.group]){var r,o=E.value.find((function(e){return e.name===n.group}));t[n.group]={name:n.group,options:null!==(r=null==o?void 0:o.options)&&void 0!==r?r:{filter:null,permission:null}}}};for(n.s();!(e=n.n()).done;)r()}catch(e){n.e(e)}finally{n.f()}return t},set:function(e){for(var t=0,n=Object.keys(W.value);t<n.length;t++){var o=n[t];Object(O.isEqual)(W.value[o],e[o])||_.default.request(Object(k.a)(r||(r=Object(c.a)(["\n          mutation setCustomCommandsGroup($name: String!, $data: String!) {\n            setCustomCommandsGroup(name: $name, data: $data) {\n              name\n            }\n          }"]))),{name:o,data:JSON.stringify(e[o].options)})}return U(),C.a.$emit("snack","success","Data updated."),!0}});return{ButtonStates:h.ButtonStates,addToSelectedItem:S.a,getPermissionName:w.a,loading:V,items:G,permissions:$,rules:N,search:P,selected:B,deleteDialog:J,currentItems:M,saveCurrentItems:function(e){M.value=e},state:F,headers:R,headersDelete:z,refresh:U,deleteSelected:L,permissionItems:Y,groupItems:H,isGroupSelected:Q,toggleGroupSelection:function(e){if(Q(e))B.value=B.value.filter((function(t){return t.group!==e}));else{var t,n=K(G.value.filter((function(t){return t.group===e})));try{var r=function(){var e=t.value;B.value.find((function(t){return t.id===e.id}))||B.value.push(e)};for(n.s();!(t=n.n()).done;)r()}catch(e){n.e(e)}finally{n.f()}}},batchUpdate:function(e){var t,n=K(B.value);try{var r=function(){var n=t.value,r=G.value.find((function(e){return e.id===n.id}));if(!r)return"continue";for(var o=!0,l=0,c=Object.keys(N);l<c.length;l++){var d,v=c[l],f=K(N[v]);try{for(f.s();!(d=f.n()).done;){var m=(0,d.value)(n[v]);!0!==m&&(C.a.$emit("snack","red","[".concat(v,"] - ").concat(m)),o=!1)}}catch(e){f.e(e)}finally{f.f()}}if(o){for(var h=0,_=Object.keys(e);h<_.length;h++){var x=_[h];void 0!==e[x]&&(r[x]=e[x])}console.log("Updating",{item:r}),Object(y.getSocket)("/systems/customcommands").emit("generic::setById",{id:r.id,item:r},(function(){C.a.$emit("snack","success","Data updated.")}))}};for(n.s();!(t=n.n()).done;)r()}catch(e){n.e(e)}finally{n.f()}},getGroup:W,updateGroup:function(e,t){W.value=T(T({},W.value),{},Object(f.a)({},e,{name:e,options:t}))}}}},D=$,N=n(45),P=n(44),B=n.n(P),J=n(271),M=n(48),F=n(43),R=n(27),z=n(269),U=n(378),L=n(68),Y=n(30),component=Object(N.a)(D,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{class:{"pa-4":!e.$vuetify.breakpoint.mobile},attrs:{fluid:""}},[n("alert-disabled",{attrs:{system:"customcommands"}}),e._v(" "),n("v-expand-transition",[e.selected.length>0?n("v-app-bar",{attrs:{color:"blue-grey darken-4",fixed:"",dense:""}},[n("v-row",{staticClass:"px-2",attrs:{dense:"",justify:"end"}},[n("v-col",{attrs:{cols:"auto","align-self":"center"}},[e._v("\n          "+e._s(e.selected.length)+" items selected\n        ")]),e._v(" "),n("v-col",{attrs:{cols:"auto","align-self":"center"}},[n("v-row",{attrs:{dense:""}},[e.selected.length>0?n("v-col",{staticClass:"pr-1",attrs:{cols:"auto"}},[n("manage-commands-batch",{attrs:{length:e.selected.length,"permission-items":e.permissionItems,"group-items":e.groupItems},on:{save:function(t){return e.batchUpdate(t)}}})],1):e._e(),e._v(" "),e.selected.length>0?n("v-col",{attrs:{cols:"auto"}},[n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"error",attrs:{small:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[e._v("\n                      mdi-delete-forever\n                    ")]),e._v("\n                    Delete\n                  ")],1)]}}],null,!1,1576914152),model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Delete "+e._s(e.selected.length)+" Item(s)?")])]),e._v(" "),n("v-card-text",[n("v-data-table",{attrs:{dense:"",items:e.selected,headers:e.headersDelete,"items-per-page":-1,"hide-default-header":"","hide-default-footer":""}})],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.deleteDialog=!1}}},[e._v("\n                      Cancel\n                    ")]),e._v(" "),n("v-btn",{attrs:{color:"error",text:""},on:{click:e.deleteSelected}},[e._v("\n                      Delete\n                    ")])],1)],1)],1)],1):e._e()],1)],1)],1)],1):e._e()],1),e._v(" "),n("v-data-table",{attrs:{"show-select":"","group-by":"group","calculate-widths":"",search:e.search,loading:e.state.loading!==e.ButtonStates.success||e.loading,headers:e.headers,"items-per-page":-1,items:e.items},on:{"current-items":e.saveCurrentItems},scopedSlots:e._u([{key:"top",fn:function(){return[n("table-search-bar",{attrs:{search:e.search},on:{"update:search":function(t){e.search=t}}},[n("manage-commands-edit",{attrs:{rules:e.rules,"permission-items":e.permissionItems,permissions:e.permissions,"group-items":e.groupItems},on:{save:function(t){return e.refresh()}}})],1)]},proxy:!0},{key:"group.header",fn:function(t){var r=t.items,o=t.isOpen,l=t.toggle;return[n("table-group-header",{attrs:{"is-open":o,toggle:l,"get-group":e.getGroup,"is-group-selected":e.isGroupSelected,"toggle-group-selection":e.toggleGroupSelection,items:r},scopedSlots:e._u([{key:"config",fn:function(){return[r[0].group?n("alias-group-config",{key:r[0].group,attrs:{"permission-items":e.permissionItems,permission:e.getGroup[r[0].group].options.permission,filter:e.getGroup[r[0].group].options.filter},on:{save:function(t){return e.updateGroup(r[0].group,t)}}}):e._e()]},proxy:!0}],null,!0)})]}},{key:"item",fn:function(t){var r=t.item;return[n("table-mobile",{attrs:{headers:e.headers,selected:e.selected,item:r,"add-to-selected-item":e.addToSelectedItem(e.selected,"id",e.currentItems)},scopedSlots:e._u([{key:"actions",fn:function(){return[n("manage-commands-edit",{attrs:{rules:e.rules,value:r,"permission-items":e.permissionItems,permissions:e.permissions,"group-items":e.groupItems},on:{save:function(t){return e.refresh()}}}),e._v(" "),n("v-btn",{staticClass:"danger-hover",attrs:{icon:""},on:{click:function(t){e.selected=[r],e.deleteDialog=!0}}},[n("v-icon",[e._v("\n              mdi-delete-forever\n            ")])],1)]},proxy:!0},{key:"command",fn:function(){return[n("strong",[e._v(e._s(r.command))]),e._v(" "),n("responses",{attrs:{permissions:e.permissions,responses:r.responses,name:r.command}})]},proxy:!0},{key:"permission",fn:function(){return[n("span",{class:{"text--lighten-1":null===r.permission,"red--text":null===r.permission}},[e._v("\n            "+e._s(null===r.permission?"-- unset --":e.getPermissionName(r.permission,e.permissions))+"\n          ")])]},proxy:!0}],null,!0)})]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)}),[],!1,null,null,null);t.default=component.exports;B()(component,{AlertDisabled:n(781).default,ManageCommandsBatch:n(1152).default,ManageCommandsEdit:n(1411).default,TableSearchBar:n(784).default,TableGroupHeader:n(966).default,Responses:n(1031).default,TableMobile:n(785).default}),B()(component,{VAppBar:J.a,VBtn:M.a,VCard:F.a,VCardActions:F.b,VCardText:F.d,VCardTitle:F.e,VCol:R.a,VContainer:R.b,VDataTable:z.a,VDialog:U.a,VExpandTransition:L.a,VIcon:Y.a,VRow:R.d,VSpacer:R.e})},767:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c}));n(12),n(25),n(69),n(4),n(24),n(40),n(33),n(51),n(37),n(11),n(52),n(55),n(39);function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,l=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw l}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function l(data){var e={};return function t(n,r){if(Object(n)!==n||Array.isArray(n))e[r]=n;else{for(var o=!0,l=0,c=Object.keys(n);l<c.length;l++){var p=c[l];o=!1,t(n[p],r?r+"."+p:p)}o&&r&&(e[r]={})}}(data,""),e}function c(data){var e;if(Array.isArray(data)){e=[];var t,n=r(data);try{for(n.s();!(t=n.n()).done;){var o=t.value;e.push(c(o))}}catch(e){n.e(e)}finally{n.f()}}else{e={};for(var l=function(){var i=v[d],t=i.split(".");t.reduce((function(e,n,r){return e[n]||(e[n]=isNaN(Number(t[r+1]))?t.length-1===r?data[i]:{}:[])}),e)},d=0,v=Object.keys(data);d<v.length;d++)l()}return e}},770:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonStates=void 0,t.ButtonStates={idle:0,progress:1,success:2,fail:3}},776:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(35);n(94),n(8),n(4),n(82),n(51),n(37),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(39);function o(e,t,n){var o=null,l="select";return function(c){var d=void 0===e.value?e:e.value,v=d.findIndex((function(e){return e[t]===c[t]})),f=!1;if(window.event&&(f=!!window.event.shiftKey),f){var m=n.value.findIndex((function(e){return e[t]===o})),h=n.value.findIndex((function(e){return e[t]===c[t]}));if("select"===l)for(var i=Math.min(m,h);i<=Math.max(m,h);i++)d.push(n.value[i]);else d=d.filter((function(e){for(var t=!0,r=Math.min(m,h);r<=Math.max(m,h);r++)if(e===n.value[r]){t=!1;break}return t}))}else o=c[t],-1===v?(d.push(c),l="select"):(d.splice(v,1),l="unselect");d=Array.from(new Set(Object(r.a)(d))),console.log(d)}}},781:function(e,t,n){"use strict";n.r(t);n(73),n(4),n(33);var r=n(5),o=n(49),l=n.n(o),c=n(1),d=Object(c.h)({props:{system:String,integration:String},setup:function(e){var t=Object(r.o)();return{isEnabled:Object(c.b)((function(){return e.system?t.state.$systems.find((function(t){return t.name===e.system})).enabled:!!e.integration&&t.state.$integrations.find((function(t){return t.name===e.integration})).enabled})),translate:l.a}}}),v=n(45),f=n(44),m=n.n(f),h=n(379),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isEnabled?e._e():n("v-alert",{staticClass:"mb-0",attrs:{color:"error",text:""}},[e._v("\n  "+e._s(e.translate("this-system-is-disabled"))+"\n")])}),[],!1,null,null,null);t.default=component.exports;m()(component,{VAlert:h.a})},784:function(e,t,n){"use strict";n.r(t);n(25),n(230);var r=n(1),o=Object(r.h)({props:{search:String,label:String},setup:function(e,t){var n=Object(r.J)(e.search),o=e.label?e.label:"Search";return Object(r.Y)(n,(function(e){t.emit("update:search",e)})),{searchModel:n,searchLabel:o}}}),l=n(45),c=n(44),d=n.n(c),v=n(27),f=n(134),m=n(140),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",{staticClass:"my-2 pb-2 mt-0",attrs:{flat:"",color:"dark"}},[n("v-row",{staticClass:"px-2",attrs:{dense:""}},[n("v-col",{attrs:{"align-self":"center"}},[n("v-text-field",{staticClass:"pa-0 ma-2",attrs:{"append-icon":"mdi-magnify",label:e.searchLabel,"single-line":"","hide-details":""},model:{value:e.searchModel,callback:function(t){e.searchModel=t},expression:"searchModel"}})],1),e._v(" "),void 0!==e.$slots.default?n("v-col",{attrs:{cols:"auto","align-self":"center"}},[e._t("default")],2):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VCol:v.a,VRow:v.d,VSheet:f.a,VTextField:m.a})},785:function(e,t,n){"use strict";n.r(t);var r=n(1),o=Object(r.h)({props:{selected:Array,headers:Array,item:Object,addToSelectedItem:Function,itemKey:String}}),l=n(45),c=n(44),d=n.n(c),v=n(268),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.headers.length?n("tr",{class:{"v-data-table__selected":e.selected&&e.selected.some((function(t){return(e.itemKey?t[e.itemKey]:t.id)===(e.itemKey?e.item[e.itemKey]:e.item.id)})),"v-data-table__mobile-table-row":e.$vuetify.breakpoint.mobile}},[e.$vuetify.breakpoint.mobile?[n("td",{staticClass:"v-data-table__mobile-row"},[n("div",[e.selected?n("v-simple-checkbox",{attrs:{value:e.selected.some((function(t){return(e.itemKey?t[e.itemKey]:t.id)===(e.itemKey?e.item[e.itemKey]:e.item.id)}))},on:{click:function(t){return e.addToSelectedItem(e.item)}}}):e._e()],1),e._v(" "),n("div",{staticClass:"v-data-table__mobile-row__cell d-flex"},[e._t("actions")],2)]),e._v(" "),e._l(e.headers.filter((function(e){return"actions"!==e.value})),(function(header){return n("td",{key:header.value,staticClass:"v-data-table__mobile-row"},[n("div",{staticClass:"v-data-table__mobile-row__header"},[e._v("\n        "+e._s(header.text)+"\n      ")]),e._v(" "),n("div",{staticClass:"v-data-table__mobile-row__cell"},[e._t(header.value,(function(){return["boolean"==typeof e.item[header.value]?n("v-simple-checkbox",{attrs:{value:e.item[header.value],disabled:""}}):[e._v("\n            "+e._s(e.item[header.value])+"\n          ")]]}))],2)])}))]:[n("td",[n("div",{staticClass:"d-flex"},[e.selected?n("v-simple-checkbox",{attrs:{value:e.selected.some((function(t){return(e.itemKey?t[e.itemKey]:t.id)===(e.itemKey?e.item[e.itemKey]:e.item.id)}))},on:{click:function(t){return e.addToSelectedItem(e.item)}}}):e._e()],1)]),e._v(" "),e._l(e.headers.filter((function(e){return"actions"!==e.value})),(function(header){return n("td",{key:header.value,staticClass:"pa-2 mx-4",class:{"text-center":"center"===header.align,"text-right":"right"===header.align}},[e._t(header.value,(function(){return["boolean"==typeof e.item[header.value]?n("v-simple-checkbox",{attrs:{value:e.item[header.value],disabled:""}}):[e._v("\n          "+e._s(e.item[header.value])+"\n        ")]]}))],2)})),e._v(" "),n("td",[n("div",{staticClass:"d-flex",staticStyle:{"justify-content":"right"}},[e._t("actions")],2)])]],2):e._e()}),[],!1,null,null,null);t.default=component.exports;d()(component,{VSimpleCheckbox:v.b})},797:function(e,t,n){var content=n(825);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("6165de88",content,!0,{sourceMap:!1})},824:function(e,t,n){"use strict";n(797)},825:function(e,t,n){var r=n(19)((function(i){return i[1]}));r.push([e.i,"div.header[data-v-42f26eeb]{padding:1rem;border-bottom:1px solid #383838}",""]),r.locals={},e.exports=r},966:function(e,t,n){"use strict";n.r(t);var r=n(5),o=Object(r.c)({props:{isOpen:Boolean,toggle:Function,isGroupSelected:Function,toggleGroupSelection:Function,items:Array,getGroup:Object,groupKey:String,noFilter:Boolean,noPermission:Boolean}}),l=(n(824),n(45)),c=n(44),d=n.n(c),v=n(27),f=n(30),m=n(268),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$vuetify.breakpoint.mobile?n("div",{staticClass:"header"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[n("v-icon",{on:{click:e.toggle}},[e._v("\n      "+e._s(e.isOpen?"mdi-minus":"mdi-plus")+"\n    ")]),e._v(" "),n("v-simple-checkbox",{staticClass:"d-inline-block px-4",staticStyle:{transform:"translateY(5px)"},attrs:{inline:"",value:e.isGroupSelected(e.items[0][e.groupKey||"group"])},on:{click:function(t){return e.toggleGroupSelection(e.items[0][e.groupKey||"group"])}}}),e._v(" "),null===e.items[0][e.groupKey||"group"]?n("span",{staticClass:"red--text text--lighten-1"},[e._v("Ungrouped")]):n("span",[e._t("headerText",(function(){return[e._v("\n        "+e._s(e.items[0][e.groupKey||"group"])+"\n      ")]}),{group:e.items[0][e.groupKey||"group"]}),e._v(" "),e.noPermission?e._e():n("span",{staticClass:"px-4",class:e.getGroup[e.items[0][e.groupKey||"group"]].options.permission?"":"red--text"},[e._v("\n        "+e._s(e.getGroup[e.items[0][e.groupKey||"group"]].options.permission?e.getPermissionName(e.getGroup[e.items[0][e.groupKey||"group"]].options.permission,e.permissions):"-- unset --")+"\n      ")]),e._v(" "),e.noFilter?e._e():n("span",{staticClass:"px-4"},[e.getGroup[e.items[0][e.groupKey||"group"]].options.filter?[n("v-icon",[e._v("mdi-filter")]),e._v(" "),n("code",[e._v("\n            "+e._s(e.getGroup[e.items[0][e.groupKey||"group"]].options.filter)+"\n          ")])]:[n("v-icon",[e._v("mdi-filter-off")]),e._v(" "),n("span",{staticClass:"grey--text text--darken-2"},[e._v("No filters set")])]],2)],2)],1),e._v(" "),n("v-col",{attrs:{cols:"auto","align-self":"end"}},[e._t("config")],2)],1)],1):n("th",{attrs:{colspan:"100%"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[n("v-icon",{on:{click:e.toggle}},[e._v("\n      "+e._s(e.isOpen?"mdi-minus":"mdi-plus")+"\n    ")]),e._v(" "),n("v-simple-checkbox",{staticClass:"d-inline-block px-4",staticStyle:{transform:"translateY(5px)"},attrs:{inline:"",value:e.isGroupSelected(e.items[0][e.groupKey||"group"])},on:{click:function(t){return e.toggleGroupSelection(e.items[0][e.groupKey||"group"])}}}),e._v(" "),null===e.items[0][e.groupKey||"group"]?n("span",{staticClass:"red--text text--lighten-1"},[e._v("Ungrouped")]):n("span",[e._t("headerText",(function(){return[e._v("\n        "+e._s(e.items[0][e.groupKey||"group"])+"\n      ")]}),{group:e.items[0][e.groupKey||"group"]}),e._v(" "),e.noPermission?e._e():n("span",{staticClass:"px-4",class:e.getGroup[e.items[0][e.groupKey||"group"]].options.permission?"":"red--text"},[e._v("\n        "+e._s(e.getGroup[e.items[0][e.groupKey||"group"]].options.permission?e.getPermissionName(e.getGroup[e.items[0][e.groupKey||"group"]].options.permission,e.permissions):"-- unset --")+"\n      ")]),e._v(" "),e.noFilter?e._e():n("span",{staticClass:"px-4"},[e.getGroup[e.items[0][e.groupKey||"group"]].options.filter?[n("v-icon",[e._v("mdi-filter")]),e._v(" "),n("code",[e._v("\n            "+e._s(e.getGroup[e.items[0][e.groupKey||"group"]].options.filter)+"\n          ")])]:[n("v-icon",[e._v("mdi-filter-off")]),e._v(" "),n("span",{staticClass:"grey--text text--darken-2"},[e._v("No filters set")])]],2)],2)],1),e._v(" "),n("v-col",{attrs:{cols:"auto","align-self":"end"}},[e._t("config")],2)],1)],1)}),[],!1,null,"42f26eeb",null);t.default=component.exports;d()(component,{VCol:v.a,VIcon:f.a,VRow:v.d,VSimpleCheckbox:m.b})},969:function(e,t,n){var content=n(998);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("2aa30a5b",content,!0,{sourceMap:!1})},971:function(e,t,n){"use strict";n.r(t);n(146),n(25),n(63),n(70),n(62),n(103),n(40),n(4),n(33),n(51),n(37),n(11),n(52),n(55),n(39);var r=n(5),o=n(49),l=n.n(o),c=n(54),d=n(767);function v(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var m=Object(r.c)({props:{value:String},setup:function(){return{filter:function(e){var t=new RegExp("\\$("+Object(c.sortBy)(Object(c.keys)(Object(d.a)(l()("responses.variable",!0))),(function(e){return-e.length})).join("|")+")","g"),n=(e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")).match(t),output=e;if(!Object(c.isNil)(n)){var r,o=v(n);try{for(o.s();!(r=o.n()).done;){var f=r.value;output=output.replace(f,"<code>".concat(l()("responses.variable."+f.replace("$","")),"</code>"))}}catch(e){o.e(e)}finally{o.f()}}return output}}}}),h=n(45),component=Object(h.a)(m,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticStyle:{flex:"1 1 auto"},domProps:{innerHTML:e._s(e.filter(e.value))}})}),[],!1,null,null,null);t.default=component.exports},997:function(e,t,n){"use strict";n(969)},998:function(e,t,n){var r=n(19)((function(i){return i[1]}));r.push([e.i,".responses li[data-v-c444f8d0]{padding-bottom:5px}",""]),r.locals={},e.exports=r}}]);
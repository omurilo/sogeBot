(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{1579:function(e,t,n){"use strict";n.r(t);var r,l,o,c,v=n(60),d=n(1),m=n(147),f=n(26),_=(n(81),n(46),n(71),n(51),n(37),n(34),n(47),n(24),n(148)),V=n(54),x={};x.props={item:{key:"item",required:!0,type:Object},dialog:{key:"dialog",required:!0,type:Boolean},color:{key:"color",required:!0,type:String},editing:{key:"editing",required:!0,type:Boolean}},x.setup=function(e,t){var n=Object(v.d)().$graphql,x=e,h=Object(d.J)(!0),y=Object(d.J)(null),k=function(){var e=Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.default.request(Object(_.a)(r||(r=Object(m.a)(["\n      query customVariable($name: String!) {\n        customVariable(name: $name) { id currentValue type }\n      }\n    "]))),{name:x.item.options.customvariable});case 2:y.value=e.sent.customVariable[0],h.value=!1,setTimeout((function(){return k()}),5e3);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(d.A)((function(){k()}));var w=Object(d.J)(x.item.selected),O=t.emit;Object(d.Y)(w,(function(e){O(e?"select":"unselect")}));var j=Object(d.J)(!1),C=Object(V.debounce)((function(e,t){return S(e,t)}),1e3),S=function(e,t){if(!y.value||"options"!==y.value.type&&"text"!==y.value.type)if(y.value&&"number"===y.value.type){var r=document.getElementById("quickaction-".concat(x.item.id)),text=document.getElementsByClassName("text")[0],v=function(e){var t,n,r,l,o,c;return"path"===e.tagName?Array.from(null!==(t=null===(n=e.parentElement)||void 0===n||null===(r=n.parentElement)||void 0===r?void 0:r.classList)&&void 0!==t?t:[]):"SPAN"===e.tagName?Array.from(null!==(l=e.classList)&&void 0!==l?l:[]):Array.from(null!==(o=null===(c=e.parentElement)||void 0===c?void 0:c.classList)&&void 0!==o?o:[])},d=e.offsetX,f=v(e.target).includes("text"),V=!v(e.target).includes("plus")&&(v(e.target).includes("minus")||d<(f?text.clientWidth:r.clientWidth)/2);y.value.currentValue=String(V?Number(y.value.currentValue)-1:Number(y.value.currentValue)+1),console.log("quickaction::trigger::".concat(x.item.id)),n.default.request(Object(_.a)(o||(o=Object(m.a)(["\n      mutation quickActionTrigger($id: String!, $value: String!) {\n        quickActionTrigger(id: $id, value: $value)\n      }"]))),{id:x.item.id,value:V?"-1":"+1"})}else console.log("quickaction::trigger::".concat(x.item.id)),n.default.request(Object(_.a)(c||(c=Object(m.a)(["\n      mutation quickActionTrigger($id: String!, $value: String!) {\n        quickActionTrigger(id: $id, value: $value)\n      }"]))),{id:x.item.id});else void 0===t?j.value=!j.value:(console.log("quickaction::trigger::".concat(x.item.id)),y.value.currentValue=t,n.default.request(Object(_.a)(l||(l=Object(m.a)(["\n        mutation quickActionTrigger($id: String!, $value: String!) {\n          quickActionTrigger(id: $id, value: $value)\n        }"]))),{id:x.item.id,value:t.trim()}))};return{customVariable:y,selected:w,showMenu:j,showDialog:function(){O("update:dialog",!0)},debouncedTrigger:C,trigger:S}};var h=x,y=n(45),k=n(44),w=n.n(k),O=n(43),j=n(27),C=n(68),S=n(30),$=n(18),T=n(268),A=n(140),E=n(804),N=n.n(E),J=n(86),component=Object(y.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card-text",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"text-button pa-1 mb-1 text-center",staticStyle:{"font-size":"12px !important",display:"block"},style:{color:e.color},on:{click:function(t){e.editing?e.showDialog():e.trigger(t)}}},["customvariable"===e.item.type?n("v-row",{attrs:{"no-gutters":"",ripple:""}},[e.customVariable&&"eval"===e.customVariable.type?[n("v-col",{staticClass:"text-truncate",staticStyle:{"line-height":"normal"}},[n("div",[e._v("Eval cannot be used")]),e._v(" "),n("div",{staticClass:"font-weight-light"},[e._v("\n            "+e._s(e.item.options.customvariable)+"\n          ")])])]:e._e(),e._v(" "),e.customVariable&&"number"===e.customVariable.type?[e.editing?e._e():n("v-col",{staticClass:"d-flex minus",attrs:{cols:"auto"}},[n("v-icon",{attrs:{color:e.color}},[e._v("\n            mdi-minus\n          ")])],1),e._v(" "),n("v-col",{staticClass:"text-truncate text",staticStyle:{"line-height":"normal"}},[n("div",{staticStyle:{"font-size":"1.2rem"}},[e._v("\n            "+e._s(e.customVariable.currentValue)+"\n          ")]),e._v(" "),n("div",{staticClass:"font-weight-light"},[e._v("\n            "+e._s(e.item.options.customvariable)+"\n          ")])]),e._v(" "),e.editing?e._e():n("v-col",{staticClass:"d-flex plus",attrs:{cols:"auto"}},[n("v-icon",{attrs:{color:e.color}},[e._v("\n            mdi-plus\n          ")])],1)]:e._e(),e._v(" "),e.customVariable&&"options"===e.customVariable.type?[n("v-col",{staticClass:"text-truncate text",staticStyle:{"line-height":"normal"}},[n("div",[e._v("\n            "+e._s(e.customVariable.currentValue)+"\n          ")]),e._v(" "),n("div",{staticClass:"font-weight-light"},[e._v("\n            "+e._s(e.item.options.customvariable)+"\n          ")])]),e._v(" "),e.editing?e._e():n("v-col",{staticClass:"d-flex",attrs:{cols:"auto",color:e.color}},[n("v-icon",[e._v("mdi-chevron-down")])],1)]:e._e(),e._v(" "),e.customVariable&&"text"===e.customVariable.type?[n("v-col",{staticClass:"text-truncate text",staticStyle:{"line-height":"normal"}},[n("div",[e._v("\n            "+e._s(0===e.customVariable.currentValue.length?" ":e.customVariable.currentValue)+"\n          ")]),e._v(" "),n("div",{staticClass:"font-weight-light"},[e._v("\n            "+e._s(e.item.options.customvariable)+"\n          ")])]),e._v(" "),e.editing?e._e():n("v-col",{staticClass:"d-flex",attrs:{cols:"auto",color:e.color}},[n("v-icon",[e._v("mdi-pencil")])],1)]:e._e(),e._v(" "),n("v-slide-x-reverse-transition",[e.editing?n("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},["white"!==e.color?n("v-simple-checkbox",{attrs:{light:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}):n("v-simple-checkbox",{attrs:{dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1):e._e()],1)],2):e._e()],1),e._v(" "),n("v-expand-transition",[e.showMenu&&e.customVariable&&"text"===e.customVariable.type?n("div",[n("v-text-field",{staticClass:"pa-0 ma-0",attrs:{filled:"",dense:"","hide-details":"",placeholder:"Set your value"},on:{input:function(t){return e.debouncedTrigger(t,e.customVariable.currentValue)}},model:{value:e.customVariable.currentValue,callback:function(t){e.$set(e.customVariable,"currentValue",t)},expression:"customVariable.currentValue"}})],1):e._e()]),e._v(" "),n("v-expand-transition",[e.showMenu&&e.customVariable&&"options"===e.customVariable.type?n("div",[n("v-list",{attrs:{dense:""}},e._l(e.customVariable.usableOptions,(function(t,r){return n("v-list-item",{key:r},[n("v-list-item-title",{on:{click:function(n){return e.trigger(n,t)}}},[e._v("\n            "+e._s(t)+"\n          ")])],1)})),1)],1):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{VCardText:O.d,VCol:j.a,VExpandTransition:C.a,VIcon:S.a,VList:$.a,VListItem:$.c,VListItemTitle:$.j,VRow:j.d,VSimpleCheckbox:T.b,VSlideXReverseTransition:C.g,VTextField:A.a}),N()(component,{Ripple:J.a})},804:function(e,t){e.exports=function(component,e){var t="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(t.directives=component.exports.options.directives),t.directives=t.directives||{},e)t.directives[i]=t.directives[i]||e[i]}}}]);
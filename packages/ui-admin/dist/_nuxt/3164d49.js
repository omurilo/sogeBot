(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1162:function(e,n,o){"use strict";o.r(n);o(1);var t=o(5),l=o(967),r=o(173),c=o(266),d=Object(t.c)({props:{value:String,label:String,onlyColor:Boolean,id:String,hideDetails:Boolean,dense:Boolean,randomizer:Boolean},setup:function(e,n){var o=Object(t.i)(e.value),d=Object(t.i)(e.value),menu=Object(t.i)(!1),v=Object(t.i)(Object(r.a)()),m={color:[c.h,c.b]};return Object(t.f)((function(){v.value=Object(r.a)()})),Object(t.p)(d,(function(e){o.value=e.hex?e.hex:e})),Object(t.p)(o,(function(e){return n.emit("input",e)})),{model:o,menu:menu,picker:d,rules:m,uuid:v,getRandomColor:l.getRandomColor}}}),v=o(45),m=o(44),f=o.n(m),k=o(48),h=o(1146),_=o(30),x=o(145),w=o(140),component=Object(v.a)(d,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[e.onlyColor?o("v-menu",{attrs:{"offset-overflow":"","close-on-content-click":!1,transition:"scale-transition","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var t=n.on,l=n.attrs;return[o("v-btn",e._g(e._b({attrs:{width:"75",height:"25",elevation:"2",color:e.model}},"v-btn",l,!1),t))]}}],null,!1,139978006),model:{value:e.menu,callback:function(n){e.menu=n},expression:"menu"}},[e._v(" "),o("v-color-picker",{attrs:{mode:"hexa"},model:{value:e.picker,callback:function(n){e.picker=n},expression:"picker"}})],1):e._e(),e._v(" "),e.onlyColor?e._e():o("v-text-field",{attrs:{id:e.id+"|"+e.uuid,"hide-details":e.hideDetails,dense:e.dense,rules:e.rules.color,label:e.label},scopedSlots:e._u([{key:"prepend",fn:function(){return[o("v-menu",{attrs:{"offset-overflow":"","close-on-content-click":!1,transition:"scale-transition","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var t=n.on,l=n.attrs;return[o("v-btn",e._g(e._b({attrs:{width:"75",height:"25",elevation:"2",color:e.model}},"v-btn",l,!1),t))]}}],null,!1,139978006),model:{value:e.menu,callback:function(n){e.menu=n},expression:"menu"}},[e._v(" "),o("v-color-picker",{attrs:{mode:"hexa"},model:{value:e.picker,callback:function(n){e.picker=n},expression:"picker"}})],1)]},proxy:!0},{key:"append",fn:function(){return[e.randomizer?o("v-btn",{attrs:{icon:""},on:{click:function(n){e.model=e.getRandomColor()}}},[o("v-icon",[e._v("mdi-dice-multiple")])],1):e._e()]},proxy:!0}],null,!1,2217198603),model:{value:e.model,callback:function(n){e.model=n},expression:"model"}})],1)}),[],!1,null,null,null);n.default=component.exports;f()(component,{VBtn:k.a,VColorPicker:h.a,VIcon:_.a,VMenu:x.a,VTextField:w.a})}}]);
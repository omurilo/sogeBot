(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1568:function(t,e,n){"use strict";n.r(e);n(1),n(24);var r=n(5),l=n(49),o=n.n(l),c=Object(r.c)({props:{value:String},setup:function(t,e){var n=Object(r.i)(Number(t.value)-1);return Object(r.p)(n,(function(t){e.emit("input",String(Number(t)+1))})),{model:n,translate:o.a}}}),d=n(45),v=n(44),m=n.n(v),f=n(43),h=n(27),y=n(384),k=n(973),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"pb-4"},[n("v-col",{attrs:{cols:"auto"}},[n("label",{staticClass:"v-label theme--dark"},[t._v("\n      "+t._s(t.translate("registry.alerts.layoutPicker.name"))+"\n    ")])]),t._v(" "),n("v-col",[n("v-item-group",{attrs:{mandatory:""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[n("v-container",{class:{"pa-4":!t.$vuetify.breakpoint.mobile},attrs:{fluid:""}},[n("v-row",t._l(5,(function(e){return n("v-col",{key:e,attrs:{cols:"auto"}},[n("v-item",{scopedSlots:t._u([{key:"default",fn:function(t){var r=t.active,l=t.toggle;return[n("v-card",{staticClass:"d-flex align-center",attrs:{color:r?"primary":"",dark:""},on:{click:l}},[n("v-img",{attrs:{src:"/_static/layout"+e+".png"}})],1)]}}],null,!0)})],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCard:f.a,VCol:h.a,VContainer:h.b,VImg:y.a,VItem:k.a,VItemGroup:k.b,VRow:h.d})},973:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return m.b}));var r=n(2),l=n(117),o=n(7),c=n(17),d=n(3).default.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(r.a)({},this.activeClass,this.isActive)}),element):(Object(c.c)("v-item should only contain a single element",this),element)):(Object(c.c)("v-item is missing a default scopedSlot",this),null);var element}}),v=Object(o.a)(d,Object(l.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),m=n(88);m.b}}]);
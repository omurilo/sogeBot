(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1572:function(e,t,o){"use strict";o.r(t);o(1);var l=o(5),n=o(54),c=o(141),d=o(266),m=Object(l.c)({props:{item:Object},setup:function(e,t){var o=Object(l.i)(Object(n.cloneDeep)(e.item)),m=Object(l.i)(!0),form=Object(l.i)(null);Object(l.f)((function(){c.a.$on("quickaction::".concat(e.item.id,"::valid"),(function(){console.debug("quickaction::".concat(e.item.id,"::valid")),form.value.validate()}))})),Object(l.g)((function(){c.a.$off("quickaction::".concat(e.item.id,"::valid"))}));var r={label:[d.h],command:[d.h,Object(d.j)(["!"]),Object(d.e)(2)]};return Object(l.p)(o,(function(e){t.emit("update:item",Object(n.pick)(e,["id","userId","order","type","options.label","options.color","options.command"]))}),{deep:!0}),Object(l.p)(m,(function(e){t.emit("update:valid",e)})),{clonedItem:o,rules:r,valid:m,form:form}}}),r=o(45),v=o(44),f=o.n(v),j=o(376),O=o(140),component=Object(r.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[o("v-text-field",{attrs:{label:"Label",rules:e.rules.label},model:{value:e.clonedItem.options.label,callback:function(t){e.$set(e.clonedItem.options,"label",t)},expression:"clonedItem.options.label"}}),e._v(" "),o("v-text-field",{attrs:{label:"Command",rules:e.rules.command},model:{value:e.clonedItem.options.command,callback:function(t){e.$set(e.clonedItem.options,"command",t)},expression:"clonedItem.options.command"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VForm:j.a,VTextField:O.a})}}]);
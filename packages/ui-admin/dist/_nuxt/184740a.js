(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{1429:function(e,t,n){"use strict";n.r(t);var l=n(35),o=n(26),r=(n(81),n(12),n(89),n(5)),c=n(54),v=n(821),d=n.n(v),m=Object(r.c)({props:{value:[Object,Array]},setup:function(e,t){var n=Object(r.i)([]),v=Object(r.i)(!0),m=Object(r.k)();Object(r.f)(Object(o.a)(regeneratorRuntime.mark((function e(){var t,o,r,c,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.$graphql.default.request(d.a);case 2:t=e.sent,o=[],r=0,c=Object.keys(t.overlays);case 5:if(!(r<c.length)){e.next=13;break}if(!(_=c[r]).startsWith("__")&&"group"!==_){e.next=9;break}return e.abrupt("continue",10);case 9:o.push.apply(o,Object(l.a)(t.overlays[_]));case 10:r++,e.next=5;break;case 13:n.value=o,v.value=!1;case 15:case"end":return e.stop()}}),e)}))));var _=Object(r.i)(0),f=Object(r.i)(Object(c.pick)(Object(c.defaults)(Array.isArray(e.value)?null:e.value,{overlayId:null}),["overlayId"]));return Object(r.p)(f,(function(n){Object(c.isEqual)(e.value,f.value)||t.emit("input",n)}),{deep:!0,immediate:!0}),{model:_,options:f,items:n,loading:v}}}),_=n(45),f=n(44),x=n.n(f),O=n(380),j=n(762),component=Object(_.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-expansion-panels",{model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[e._t("default"),e._v(" "),n("v-expansion-panel",{attrs:{readonly:void 0===e.$slots.default}},[n("v-expansion-panel-header",[e._v("Settings")]),e._v(" "),n("v-expansion-panel-content",[n("v-autocomplete",{attrs:{loading:e.loading,items:e.items,"item-value":"id",label:"Overlay to link"},scopedSlots:e._u([{key:"selection",fn:function(data){return[data.item.name?n("strong",{staticClass:"text-button"},[e._v(e._s(data.item.name)+" | ")]):e._e(),e._v(" "),n("span",{staticClass:"text-overline"},[e._v(e._s(data.item.value)+" | ")]),e._v(" "),n("span",{staticClass:"text-caption"},[e._v(e._s(data.item.id))])]}},{key:"item",fn:function(data){return[data.item.name?n("strong",{staticClass:"text-button"},[e._v(e._s(data.item.name)+" | ")]):e._e(),e._v(" "),n("span",{staticClass:"text-overline"},[e._v(e._s(data.item.value)+" | ")]),e._v(" "),n("span",{staticClass:"text-caption"},[e._v(e._s(data.item.id))])]}}]),model:{value:e.options.overlayId,callback:function(t){e.$set(e.options,"overlayId",t)},expression:"options.overlayId"}})],1)],1)],2)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VAutocomplete:O.a,VExpansionPanel:j.a,VExpansionPanelContent:j.b,VExpansionPanelHeader:j.c,VExpansionPanels:j.d})}}]);
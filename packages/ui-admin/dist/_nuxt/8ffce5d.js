(window.webpackJsonp=window.webpackJsonp||[]).push([[230,112],{1518:function(e,t,n){"use strict";n.r(t);n(1),n(119),n(8),n(4),n(31),n(133),n(89),n(33);var r=n(5),c=n(770),o=n(21),l=n(49),d=n.n(l),f=n(141),m=Object(r.c)({setup:function(){var e=Object(r.i)([]),t=Object(r.i)(""),n=Object(r.i)({loading:c.ButtonStates.progress});Object(r.f)((function(){l()}));var l=function(){Object(o.getSocket)("/").emit("responses.get",null,(function(data){console.groupCollapsed("translations::responses.get"),console.log(data),console.groupEnd(),e.value=Object.entries(data).map((function(e){return e[1].current.startsWith("{missing")&&console.debug("".concat(e[0]," have missing translation")),{name:e[0],current:e[1].current,default:e[1].default}})).filter((function(e){return!e.name.startsWith("webpanel")&&!e.name.startsWith("ui")})).sort((function(a,b){var e=a.name.toUpperCase(),t=b.name.toUpperCase();return e<t?-1:e>t?1:0})),n.value.loading=c.ButtonStates.success}))};return{items:e,search:t,state:n,headers:[{value:"name",text:"Key"},{value:"current",text:"Value"}],translate:d.a,update:function(e,t,n){t===n?Object(o.getSocket)("/").emit("responses.revert",{name:e},(function(){f.a.$emit("snack","success","Translation updated.")})):(Object(o.getSocket)("/").emit("responses.set",{name:e,value:t}),f.a.$emit("snack","success","Translation updated."))},ButtonStates:c.ButtonStates}}}),v=n(45),h=n(44),k=n.n(h),S=n(48),x=n(27),y=n(269),j=n(134),O=n(140),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{class:{"pa-4":!e.$vuetify.breakpoint.mobile},attrs:{fluid:""}},[n("v-data-table",{attrs:{search:e.search,loading:e.state.loading!==e.ButtonStates.success,headers:e.headers,"items-per-page":15,items:e.items},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-sheet",{staticClass:"my-2 pb-2 mt-0",attrs:{flat:"",color:"dark"}},[n("v-row",{staticClass:"px-2",attrs:{"no-gutters":""}},[n("v-col",{attrs:{"align-self":"center"}},[n("v-text-field",{staticClass:"pa-0 ma-2",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)],1)]},proxy:!0},{key:"item.current",fn:function(t){var r=t.item;return[n("v-edit-dialog",{attrs:{persistent:"",large:"","return-value":r.current},on:{"update:returnValue":function(t){return e.$set(r,"current",t)},"update:return-value":function(t){return e.$set(r,"current",t)},save:function(t){return e.update(r.name,r.current,r.default)}},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{"single-line":"",clearable:!0,counter:""},scopedSlots:e._u([r.current!==r.default?{key:"append-outer",fn:function(){return[n("v-btn",{attrs:{text:"",small:""},on:{click:function(e){r.current=r.default}}},[e._v("\n                Revert\n              ")])]},proxy:!0}:null],null,!0),model:{value:r.current,callback:function(t){e.$set(r,"current",t)},expression:"item.current"}})]},proxy:!0}],null,!0)},[e._v("\n        "+e._s(r.current)+"\n        ")])]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;k()(component,{VBtn:S.a,VCol:x.a,VContainer:x.b,VDataTable:y.a,VEditDialog:y.b,VRow:x.d,VSheet:j.a,VTextField:O.a})},770:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonStates=void 0,t.ButtonStates={idle:0,progress:1,success:2,fail:3}}}]);
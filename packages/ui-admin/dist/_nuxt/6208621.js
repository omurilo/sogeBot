(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1567:function(t,e,o){"use strict";o.r(e);o(24);var n=o(1),l=Object(n.h)({props:{color:String,item:Object,selected:[Object,String],ratio:Number,isMoving:Boolean,type:String},setup:function(t,e){var o=Object(n.J)(t.selected);Object(n.Y)((function(){return t.selected}),(function(t){o.value=t})),Object(n.Y)(o,(function(t){e.emit("update:selected",t)}));return{selectedSync:o,mousedown:function(o){var n;e.emit("mousedown",{ev:o,id:null===(n=t.item)||void 0===n?void 0:n.id})},selectItem:function(){var e,n;t.isMoving||(o.value=o.value===(null===(e=t.item)||void 0===e?void 0:e.id)?null:null===(n=t.item)||void 0===n?void 0:n.id)},deleteItem:function(){e.emit("delete")}}}}),c=o(45),r=o(44),d=o.n(r),m=o(48),v=o(68),h=o(30),x=o(134),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{position:"absolute",cursor:"grab","user-select":"none"},style:{left:t.item.alignX*t.ratio+"px",top:t.item.alignY*t.ratio+"px","z-index":t.selectedSync===t.item.id?2:1},on:{mousedown:t.mousedown}},[o("v-fab-transition",[t.selectedSync===t.item.id?o("v-btn",{staticStyle:{right:"10px"},attrs:{fab:"",right:"",top:"",absolute:"","x-small":"",color:"red"},on:{click:t.deleteItem}},[o("v-icon",[t._v("mdi-delete-forever")])],1):t._e()],1),t._v(" "),o("v-icon",{staticStyle:{position:"absolute",right:"0",bottom:"0"}},[t._v("mdi-resize-bottom-right")]),t._v(" "),o("div",{staticClass:"text-caption grey darken-4 px-1",staticStyle:{position:"absolute",top:"-20px","z-index":"-1",width:"max-content"}},[t._v("\n      "+t._s(Math.max(Math.floor(t.item.width),1))+"x"+t._s(Math.max(Math.floor(t.item.height),1))),o("br")]),t._v(" "),o("div",{staticClass:"px-1 text-caption grey darken-4 ",staticStyle:{position:"absolute",bottom:"-20px","z-index":"-1",width:"max-content"}},[o("v-icon",{attrs:{"x-small":""}},[t._v("\n        mdi-format-horizontal-align-right\n      ")]),t._v(" "+t._s(Math.floor(t.item.alignX))+"\n      "),o("v-icon",{attrs:{"x-small":""}},[t._v("\n        mdi-format-horizontal-align-bottom\n      ")]),t._v(" "+t._s(Math.floor(t.item.alignY))+"\n    ")],1),t._v(" "),o("v-sheet",{attrs:{color:t.selectedSync===t.item.id?"primary":t.color,height:t.item.height*t.ratio,width:t.item.width*t.ratio},on:{click:t.selectItem}},[o("div",{staticClass:"center text-button text-truncate"},[t._v("\n      "+t._s(t.type)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:m.a,VFabTransition:v.c,VIcon:h.a,VSheet:x.a})}}]);
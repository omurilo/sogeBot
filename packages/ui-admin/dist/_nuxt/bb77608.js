(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{992:function(e,t,l){"use strict";l.r(t);l(1),l(40),l(33),l(51),l(11),l(52),l(55);var o=l(26),n=(l(81),l(25),l(62),l(4),l(37),l(39),l(82),l(31),l(5)),r=l(1026),c=l(49),d=l.n(c),m=l(54),v=l(265);function f(e,t){var l="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!l){if(Array.isArray(e)||(l=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){l&&(e=l);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r=!0,c=!1;return{s:function(){l=l.call(e)},n:function(){var e=l.next();return r=e.done,e},e:function(e){c=!0,n=e},f:function(){try{r||null==l.return||l.return()}finally{if(c)throw n}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,l=new Array(t);i<t;i++)l[i]=e[i];return l}function y(e){var head=document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",console.debug("Loading font",e);var t="@import url('https://fonts.googleapis.com/css?family="+e.replace(/ /g,"+")+"');";style.appendChild(document.createTextNode(t)),head.appendChild(style)}var w=Object(n.c)({components:{color:Object(n.b)({loader:function(){return Promise.all([l.e(14),l.e(15)]).then(l.bind(null,1163))}})},props:{parent:Object,value:Object,isChild:Boolean,title:[String,Object],id:String},setup:function(e,t){var l=Object(n.i)(0),c=Object(n.i)("#ffffff"),h=Object(n.i)(e.value),w=Object(n.i)([]),x=Object(n.i)(null!==e.value),_={family:[v.h]},C=[{value:"left",text:d()("registry.alerts.font.align.left")},{value:"right",text:d()("registry.alerts.font.align.right")},{value:"center",text:d()("registry.alerts.font.align.center")}];Object(n.p)(h,(function(e){t.emit("update:value",e),t.emit("input",e)}),{deep:!0});return Object(n.e)(Object(o.a)(regeneratorRuntime.mark((function e(){var t,l,o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=new XMLHttpRequest;t.open("GET","/fonts",!0),t.onload=function(){this.status>=200&&this.status<400||console.error("Something went wrong getting font",this.status,this.response),e({response:JSON.parse(this.response)})},t.onerror=function(){console.error("Connection error to sogebot"),e({response:{}})},t.send()}));case 2:t=e.sent,l=t.response,o=f(l.items.map((function(e){return{text:e.family,value:e.family}})));try{for(o.s();!(n=o.n()).done;)r=n.value,w.value.push(r)}catch(e){o.e(e)}finally{o.f()}h.value&&(console.log(h.value),y(h.value.family));case 7:case"end":return e.stop()}}),e)})))),Object(n.p)((function(){return h.value?h.value.family:""}),(function(e){""===e?null!==h.value&&(console.log(w.value[0]),console.log(h.value.family),h.value.family=w.value[0].value):y(e)})),Object(n.p)(x,(function(t){t?e.parent?h.value=Object(m.cloneDeep)(e.parent):h.value={align:"center",family:"PT Sans",size:24,borderPx:1,borderColor:"#000000",weight:800,color:"#ffffff",highlightcolor:"#00ff00",shadow:[]}:h.value=null})),{rules:_,alignItems:C,textStrokeGenerator:r.textStrokeGenerator,shadowGenerator:r.shadowGenerator,exampleColor:c,fonts:w,addShadow:function(){h.value&&(h.value.shadow.push({shiftRight:1,shiftDown:1,blur:5,opacity:100,color:"#ffffff"}),l.value=h.value.shadow.length-1)},removeShadow:function(e){var t;null===(t=h.value)||void 0===t||t.shadow.splice(e,1)},translate:d.a,model:h,isOverriden:x,selectedTab:l}}}),x=w,_=l(45),C=l(44),S=l.n(C),k=l(380),O=l(381),j=l(48),T=l(43),V=l(267),z=l(27),$=l(68),N=l(30),P=l(266),A=l(134),R=l(269),G=l(50),component=Object(_.a)(x,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-container",{class:{"pa-4":!e.$vuetify.breakpoint.mobile},attrs:{fluid:""}},[e._t("default"),e._v(" "),e.isChild?l("v-checkbox",{attrs:{label:e.translate("registry.alerts.font.overrideGlobal")},model:{value:e.isOverriden,callback:function(t){e.isOverriden=t},expression:"isOverriden"}}):e._e(),e._v(" "),l("v-expand-transition",[!e.isChild||e.isChild&&e.isOverriden?l("div",[l("v-autocomplete",{attrs:{id:e.id+"|fontfamily",label:e.translate("registry.alerts.font.name"),items:e.fonts,"validate-on-blur":""},model:{value:e.model.family,callback:function(t){e.$set(e.model,"family",t)},expression:"model.family"}}),e._v(" "),void 0!==e.model.align?l("v-select",{attrs:{label:e.translate("registry.alerts.font.align.name"),items:e.alignItems},model:{value:e.model.align,callback:function(t){e.$set(e.model,"align",t)},expression:"model.align"}}):e._e(),e._v(" "),void 0!==e.model.size?l("v-slider",{staticClass:"align-center",attrs:{label:e.translate("registry.alerts.font.size.name"),max:200,min:1,"thumb-size":0,"thumb-label":"always"},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var o=t.value;return[l("div",{staticStyle:{transform:"translateY(-8px)"}},[e._v("\n            "+e._s(Number(o)+"px")+"\n          ")])]}}],null,!1,374327222),model:{value:e.model.size,callback:function(t){e.$set(e.model,"size",t)},expression:"model.size"}}):e._e(),e._v(" "),l("v-slider",{staticClass:"align-center",attrs:{label:e.translate("registry.alerts.font.weight.name"),max:900,min:100,step:100,"thumb-size":0,"thumb-label":"always"},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var o=t.value;return[l("div",{staticStyle:{transform:"translateY(-8px)"}},[e._v("\n            "+e._s(Number(o))+"\n          ")])]}}],null,!1,2804873365),model:{value:e.model.weight,callback:function(t){e.$set(e.model,"weight",t)},expression:"model.weight"}}),e._v(" "),void 0!==e.model.borderPx?l("v-slider",{staticClass:"align-center",attrs:{label:e.translate("registry.alerts.font.borderPx.name"),max:100,min:0,"thumb-size":0,"thumb-label":"always"},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var o=t.value;return[l("div",{staticStyle:{transform:"translateY(-8px)"}},[e._v("\n            "+e._s(Number(o)+"px")+"\n          ")])]}}],null,!1,374327222),model:{value:e.model.borderPx,callback:function(t){e.$set(e.model,"borderPx",t)},expression:"model.borderPx"}}):e._e(),e._v(" "),void 0!==e.model.color?l("color",{attrs:{id:e.id+"|fontcolor",label:e.translate("registry.alerts.font.color.name")},model:{value:e.model.color,callback:function(t){e.$set(e.model,"color",t)},expression:"model.color"}}):e._e(),e._v(" "),void 0!==e.model.borderColor?l("color",{attrs:{id:e.id+"|fontbordercolor",label:e.translate("registry.alerts.font.borderColor.name")},model:{value:e.model.borderColor,callback:function(t){e.$set(e.model,"borderColor",t)},expression:"model.borderColor"}}):e._e(),e._v(" "),void 0!==e.model.highlightcolor?l("color",{attrs:{id:e.id+"|fonthighlightcolor",label:e.translate("registry.alerts.font.highlightcolor.name")},model:{value:e.model.highlightcolor,callback:function(t){e.$set(e.model,"highlightcolor",t)},expression:"model.highlightcolor"}}):e._e(),e._v(" "),void 0!==e.model.shadow?l("v-card",[l("v-card-text",{staticClass:"pa-0"},[l("v-row",{attrs:{"no-gutters":""}},[l("v-col",{attrs:{cols:"11"}},[l("v-fade-transition",{attrs:{"leave-absolute":""}},[0===e.model.shadow.length?l("v-alert",{staticClass:"ma-0",attrs:{text:"",color:"info",border:"left"}},[e._v("\n                  There are no shadow.\n                  Create a new shadow using the "),l("b",[e._v("+")]),e._v(" button on the right.\n                ")]):l("v-tabs",{ref:"tabs",attrs:{"show-arrows":"","center-active":"","leave-absolute":""},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},e._l(e.model.shadow,(function(shadow,t){return l("v-tab",{key:"shadow"+t},[e._v("\n                    Shadow "+e._s(t+1)+"\n                  ")])})),1)],1)],1),e._v(" "),l("v-col",{staticClass:"text-center",attrs:{cols:"1","align-self":"center"}},[l("v-btn",{attrs:{icon:""},on:{click:e.addShadow}},[l("v-icon",[e._v("mdi-plus")])],1)],1)],1),e._v(" "),l("v-expand-transition",[e.model.shadow.length>0?l("v-tabs-items",{model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},e._l(e.model.shadow,(function(shadow,t){return l("v-tab-item",{key:"shadow2"+t,staticClass:"ma-2"},[l("v-slider",{staticClass:"align-center",attrs:{label:e.translate("dialog.font.shadowShiftRight"),max:50,min:-50,"thumb-size":0,"thumb-label":"always"},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var o=t.value;return[l("div",{staticStyle:{transform:"translateY(-8px)"}},[e._v("\n                      "+e._s(Number(o)+"px")+"\n                    ")])]}}],null,!0),model:{value:shadow.shiftRight,callback:function(t){e.$set(shadow,"shiftRight",t)},expression:"shadow.shiftRight"}}),e._v(" "),l("v-slider",{staticClass:"align-center",attrs:{label:e.translate("dialog.font.shadowShiftDown"),max:50,min:-50,"thumb-size":0,"thumb-label":"always"},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var o=t.value;return[l("div",{staticStyle:{transform:"translateY(-8px)"}},[e._v("\n                      "+e._s(Number(o)+"px")+"\n                    ")])]}}],null,!0),model:{value:shadow.shiftDown,callback:function(t){e.$set(shadow,"shiftDown",t)},expression:"shadow.shiftDown"}}),e._v(" "),l("v-slider",{staticClass:"align-center",attrs:{label:e.translate("dialog.font.shadowBlur"),max:50,min:0,"thumb-size":0,"thumb-label":"always"},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var o=t.value;return[l("div",{staticStyle:{transform:"translateY(-8px)"}},[e._v("\n                      "+e._s(Number(o))+"\n                    ")])]}}],null,!0),model:{value:shadow.blur,callback:function(t){e.$set(shadow,"blur",t)},expression:"shadow.blur"}}),e._v(" "),l("v-slider",{staticClass:"align-center",attrs:{label:e.translate("dialog.font.shadowOpacity"),max:100,min:0,"thumb-size":0,"thumb-label":"always"},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var o=t.value;return[l("div",{staticStyle:{transform:"translateY(-8px)"}},[e._v("\n                      "+e._s(Number(o)+"%")+"\n                    ")])]}}],null,!0),model:{value:shadow.opacity,callback:function(t){e.$set(shadow,"opacity",t)},expression:"shadow.opacity"}}),e._v(" "),l("color",{attrs:{label:e.translate("dialog.font.color")},model:{value:shadow.color,callback:function(t){e.$set(shadow,"color",t)},expression:"shadow.color"}}),e._v(" "),l("v-card-actions",[l("v-spacer"),e._v(" "),l("v-btn",{attrs:{color:"error"},on:{click:function(l){return e.removeShadow(t)}}},[e._v("\n                    "+e._s(e.translate("dialog.buttons.delete"))+"\n                  ")])],1)],1)})),1):e._e()],1),e._v(" "),l("v-sheet",{staticClass:"mt-4 pb-4",style:{color:void 0===e.model.color?e.exampleColor:e.model.color,"font-size":e.model.size+"px","font-weight":e.model.weight,"font-family":"'"+e.model.family+"'","text-align":"center","text-shadow":[e.textStrokeGenerator(e.model.borderPx,e.model.borderColor),e.shadowGenerator(e.model.shadow)].filter(Boolean).join(", ")}},[l("div",{style:{lineHeight:e.model.size+15+"px",width:"90%"}},[l("div",{staticClass:"text-center",staticStyle:{overflow:"visible !important"}},[e._v("\n                The quick brown fox jumps over the lazy dog\n              ")])]),e._v(" "),void 0===e.model.color?l("color",{staticStyle:{width:"100px"},attrs:{"only-color":"",label:"Example Color"},model:{value:e.exampleColor,callback:function(t){e.exampleColor=t},expression:"exampleColor"}}):e._e()],1)],1)],1):e._e()],1):e._e()])],2)}),[],!1,null,null,null);t.default=component.exports;S()(component,{VAlert:k.a,VAutocomplete:O.a,VBtn:j.a,VCard:T.a,VCardActions:T.b,VCardText:T.d,VCheckbox:V.a,VCol:z.a,VContainer:z.b,VExpandTransition:$.a,VFadeTransition:$.d,VIcon:N.a,VRow:z.d,VSelect:P.a,VSheet:A.a,VSlider:R.a,VSpacer:z.e,VTab:G.a,VTabItem:G.b,VTabs:G.c,VTabsItems:G.d})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{1531:function(e,t,r){"use strict";r.r(t);r(1);var n=r(26),l=(r(81),r(4),r(381),r(5)),c=r(21),o=r(49),v=r.n(o),d=r(173),m=r(80),h=r(141),x=r(826),f=r(266),j=Object(l.c)({components:{PrismEditor:x.a},setup:function(){var e=Object(l.i)(1),t=Object(l.o)(),r=Object(l.m)(),o=Object(l.n)(),j=Object(l.i)([]),_=Object(l.i)(null),O=Object(l.i)(!1),y=Object(l.i)(!1),S=Object(l.i)(!0),k={name:[f.h]},V=Object(l.i)({id:Object(d.a)(),name:"",external:[],text:"\x3c!-- you can also use html here, global filters and custom variables are also available --\x3e\n\n",css:"",js:"function onLoad() { // triggered on page load\n\n}\n\nfunction onChange() { // triggered on variable change\n\n}"}),C=Object(l.i)(null),w=Object(l.i)(!0);Object(l.f)((function(){t.commit("panel/back","/registry/textoverlay"),Object(c.getSocket)("/registries/text").emit("text::presets",[],(function(e,t){if(e)return Object(m.a)(e);t&&(j.value=t)})),r.value.params.id&&"new"!==r.value.params.id?(S.value=!0,Object(c.getSocket)("/registries/text").emit("generic::getOne",{id:r.value.params.id,parseText:!1},(function(e,data){if(e)return Object(m.a)(e);V.value=data,S.value=!1}))):S.value=!1}));var L=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){var html,t,r,n,l,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_.value){e.next=26;break}return O.value=!0,console.log("Applying preset",_.value),e.next=5,fetch("assets/presets/textOverlay/".concat(_.value,"/html.txt"));case 5:return html=e.sent,e.next=8,fetch("assets/presets/textOverlay/".concat(_.value,"/css.txt"));case 8:return t=e.sent,e.next=11,fetch("assets/presets/textOverlay/".concat(_.value,"/js.txt"));case 11:r=e.sent,n=0,l=[html,t,r];case 13:if(!(n<l.length)){e.next=25;break}if(!(c=l[n]).ok){e.next=22;break}return e.next=18,c.text();case 18:data=e.sent,c.url.endsWith("html.txt")&&(V.value.text=data),c.url.endsWith("js.txt")&&(V.value.js=data),c.url.endsWith("css.txt")&&(V.value.css=data);case 22:n++,e.next=13;break;case 25:O.value=!1;case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{e1:e,rules:k,isSaving:y,isLoading:S,translate:v.a,save:function(){y.value=!0,console.log("Saving",V.value),Object(c.getSocket)("/registries/text").emit("text::save",V.value,(function(e){var t;if(e)return Object(m.a)(e);y.value=!1,o.push({params:{id:null!==(t=V.value.id)&&void 0!==t?t:""}}),h.a.$emit("snack","success","Data saved.")}))},item:V,form1:C,valid1:w,validateForm:function(){1===e.value&&C.value.validate(),e.value++},highlighterJS:x.d,highlighterCSS:x.b,highlighterHTML:x.c,applyPreset:L,presets:j,presetSelector:_,presetLoading:O}}}),_=j,O=r(45),y=r(44),S=r.n(y),k=r(380),V=r(48),C=r(43),w=r(27),L=r(175),$=r(68),T=r(376),z=r(30),F=r(142),J=r(143),P=r(793),H=r(140),A=r(773),component=Object(O.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{loading:e.isLoading}},[r("portal",{attrs:{to:"navbar"}},[e.e1<5?r("v-btn",{staticClass:"ma-2",attrs:{small:"",text:""},on:{click:e.validateForm}},[e._v("\n      next step\n    ")]):e._e(),e._v(" "),r("v-btn",{attrs:{small:"",text:!e.$vuetify.breakpoint.xs,icon:e.$vuetify.breakpoint.xs,loading:e.isSaving,disabled:!e.valid1},on:{click:e.save}},[r("v-icon",{staticClass:"d-flex d-sm-none"},[e._v("\n        mdi-floppy\n      ")]),e._v(" "),r("span",{staticClass:"d-none d-sm-flex"},[e._v(e._s(e.translate("dialog.buttons.saveChanges.idle")))])],1)],1),e._v(" "),r("v-overlay",{attrs:{value:e.isLoading,dark:"",absolute:""}},[r("v-row",[r("v-col",{staticClass:"text-center"},[r("v-progress-circular",{attrs:{indeterminate:"",size:"48"}})],1)],1)],1),e._v(" "),r("v-fade-transition",[e.isLoading?e._e():r("div",{staticClass:"pa-4"},[r("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[r("v-stepper-header",[r("v-stepper-step",{attrs:{complete:e.e1>1,step:"1",editable:"",rules:[function(){return e.valid1}]}},[e._v("\n            Name your text overlay\n          ")]),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{complete:e.e1>2,step:"2",editable:""}},[e._v("\n            3rd party libraries\n            "),r("small",[e._v("Optional")])]),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{complete:e.e1>3,step:"3",editable:""}},[e._v("\n            HTML / Text\n          ")]),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{complete:e.e1>4,step:"4",editable:""}},[e._v("\n            JS\n            "),r("small",[e._v("Optional")])]),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{complete:e.e1>5,step:"5",editable:""}},[e._v("\n            CSS\n            "),r("small",[e._v("Optional")])])],1),e._v(" "),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:1}},[r("v-form",{ref:"form1",attrs:{"lazy-validation":""},model:{value:e.valid1,callback:function(t){e.valid1=t},expression:"valid1"}},[r("v-text-field",{attrs:{label:e.translate("name"),rules:e.rules.name,"hide-details":"auto",required:"",counter:""},model:{value:e.item.name,callback:function(t){e.$set(e.item,"name",t)},expression:"item.name"}})],1)],1),e._v(" "),r("v-stepper-content",{attrs:{step:2}},[r("v-textarea",{attrs:{label:"External libraries",hint:"Separated by new-line, e.g. https://code.jquery.com/jquery-3.6.0.slim.min.js","persistent-hint":"","hide-details":"auto"},model:{value:e.item.libraries,callback:function(t){e.$set(e.item,"libraries",t)},expression:"item.libraries"}})],1),e._v(" "),r("v-stepper-content",{attrs:{step:3}},[r("v-autocomplete",{attrs:{title:"Preset",placeholder:"Select preset to fill html/css/js",items:e.presets,"hide-details":"auto"},scopedSlots:e._u([{key:"append-outer",fn:function(){return[r("v-btn",{attrs:{loading:e.presetLoading},on:{click:e.applyPreset}},[e._v("\n                  Apply\n                ")])]},proxy:!0}],null,!1,1334803866),model:{value:e.presetSelector,callback:function(t){e.presetSelector=t},expression:"presetSelector"}}),e._v(" "),r("prism-editor",{staticStyle:{border:"1px solid gray"},attrs:{"line-numbers":"","tab-size":4,highlight:e.highlighterHTML},model:{value:e.item.text,callback:function(t){e.$set(e.item,"text",t)},expression:"item.text"}})],1),e._v(" "),r("v-stepper-content",{attrs:{step:4}},[r("prism-editor",{staticStyle:{border:"1px solid gray"},attrs:{"line-numbers":"","tab-size":4,highlight:e.highlighterJS},model:{value:e.item.js,callback:function(t){e.$set(e.item,"js",t)},expression:"item.js"}})],1),e._v(" "),r("v-stepper-content",{attrs:{step:5}},[r("prism-editor",{staticStyle:{border:"1px solid gray"},attrs:{"line-numbers":"","tab-size":4,highlight:e.highlighterCSS},model:{value:e.item.css,callback:function(t){e.$set(e.item,"css",t)},expression:"item.css"}})],1)],1)],1)],1)])],1)}),[],!1,null,null,null);t.default=component.exports;S()(component,{VAutocomplete:k.a,VBtn:V.a,VCard:C.a,VCol:w.a,VDivider:L.a,VFadeTransition:$.d,VForm:T.a,VIcon:z.a,VOverlay:F.a,VProgressCircular:J.a,VRow:w.d,VStepper:P.a,VStepperContent:P.b,VStepperHeader:P.c,VStepperItems:P.d,VStepperStep:P.e,VTextField:H.a,VTextarea:A.a})},826:function(e,t,r){"use strict";r.d(t,"d",(function(){return c})),r.d(t,"b",(function(){return v})),r.d(t,"c",(function(){return o}));var n=r(982),l=r(820);r.d(t,"a",(function(){return l.a}));r(983),r(984),r(985),r(986);var c=function(code){return Object(n.highlight)(code,n.languages.js,"javascript")},o=function(code){return Object(n.highlight)(code,n.languages.html,"html")},v=function(code){return Object(n.highlight)(code,n.languages.css,"css")}}}]);
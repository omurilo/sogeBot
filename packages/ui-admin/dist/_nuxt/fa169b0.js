(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1019:function(t,e,n){var content=n(1072);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("b806d9d2",content,!0,{sourceMap:!1})},1071:function(t,e,n){"use strict";n(1019)},1072:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".noselect{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),o.locals={},t.exports=o},1166:function(t,e,n){"use strict";n.r(e);var o,c=n(60),r=n(1),l=n(2),d=n(147),m=n(110),v=n(26),f=(n(81),n(4),n(63),n(24),n(70),n(31),n(25),n(69),n(62),n(71),n(968)),w=n(49),y=n.n(w),O=n(148),h=n(54),k=n(141),C=["selected","temporary","show"],j={};j.props={item:{key:"item",required:!0,type:Object},editing:{key:"editing",required:!0,type:Boolean}},j.setup=function(t,e){var n=Object(c.d)().$graphql,w=t,j=e.emit,_=Object(r.J)(!1),dialog=Object(r.J)(w.item.temporary),x=Object(r.J)(Date.now()),I=Object(r.J)(Object(h.cloneDeep)(w.item)),S=Object(r.J)(!0),V=Object(r.J)("white"),J=function(){var t=document.getElementById("quickaction-".concat(I.value.id)),e=window.getComputedStyle(t,null).getPropertyValue("background-color");V.value=Object(f.getContrastColor)("#"+e.replace("rgb(","").replace(")","").split(",").map((function(t){return e=t.trim(),(n=Number(e).toString(16)).length<2&&(n="0"+n),n;var e,n})).join(""))};Object(r.A)((function(){J()})),Object(r.Y)(dialog,(function(t){t&&(S.value=!0,x.value=Date.now(),I.value=Object(h.cloneDeep)(w.item)),J()}));return{translate:y.a,saving:_,components:{command:"widgets-actions-button-command",customvariable:"widgets-actions-button-customvariable",randomizer:"widgets-actions-button-randomizer",overlayCountdown:"widgets-actions-button-overlay-countdown",overlayStopwatch:"widgets-actions-button-overlay-stopwatch",overlayMarathon:"widgets-actions-button-overlay-marathon"},dialog:dialog,timestamp:x,clonedItem:I,valid:S,color:V,emitSelect:function(t){j("selected",t)},save:function(){k.a.$emit("quickaction::".concat(w.item.id,"::valid")),Object(r.t)(Object(v.a)(regeneratorRuntime.mark((function t(){var e,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!S.value){t.next=8;break}return e=I.value,e.selected,e.temporary,e.show,c=Object(m.a)(e,C),_.value=!0,t.next=5,n.default.request(Object(O.a)(o||(o=Object(d.a)(["\n      mutation quickActionSave($data: QuickActionInput!) {\n        quickActionSave(data: $data) {\n          ... on CommandItem { id }\n          ... on CustomVariableItem { id }\n          ... on RandomizerItem { id }\n          ... on OverlayCountdownItem { id }\n          ... on OverlayMarathonItem { id }\n          ... on OverlayStopwatchItem { id }\n        }\n      }"]))),{data:Object(l.a)({},c.type,[c])});case 5:j("save"),dialog.value=!1,_.value=!1;case 8:case"end":return t.stop()}}),t)}))))}}};var _=j,x=(n(1071),n(45)),I=n(44),S=n.n(I),V=n(48),J=n(43),$=n(379),A=n(30),M=n(27),D=n(120),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("v-card",{staticClass:"noselect",attrs:{id:"quickaction-"+t.item.id,color:t.item.options.color,elevation:"2",width:"100%",tile:""}},[n(t.components[t.item.type],{tag:"component",attrs:{item:t.item,dialog:t.dialog,color:t.color,editing:t.editing},on:{"update:dialog":function(e){t.dialog=e},select:function(e){return t.emitSelect(!0)},unselect:function(e){return t.emitSelect(!1)}}}),t._v(" "),n("v-dialog",{attrs:{persistent:"",fullscreen:t.$vuetify.breakpoint.mobile,transition:"dialog-bottom-transition","max-width":"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dense:"",color:"primary"}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("span",{staticClass:"headline"},[t._v("Edit Action")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{small:"",text:!t.$vuetify.breakpoint.xs,icon:t.$vuetify.breakpoint.xs,loading:t.saving},on:{click:t.save}},[n("v-icon",{staticClass:"d-flex d-sm-none"},[t._v("\n            mdi-floppy\n          ")]),t._v(" "),n("span",{staticClass:"d-none d-sm-flex"},[t._v(t._s(t.translate("dialog.buttons.saveChanges.idle")))])],1)],1),t._v(" "),n("v-card-text",{staticClass:"pa-0"},[n("widgets-actions-edit",{key:t.timestamp,attrs:{item:t.clonedItem,valid:t.valid},on:{"update:item":function(e){t.clonedItem=e},"update:valid":function(e){t.valid=e}}})],1)],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;S()(component,{WidgetsActionsEdit:n(1167).default}),S()(component,{VBtn:V.a,VCard:J.a,VCardText:J.d,VDialog:$.a,VIcon:A.a,VSpacer:M.e,VToolbar:D.a})},968:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getContrastColor=e.getRandomColor=void 0;e.getRandomColor=()=>{let t="#";for(let i=0;i<6;i++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t.toLowerCase()};e.getContrastColor=t=>(299*parseInt(t.substr(1,2),16)+587*parseInt(t.substr(3,2),16)+114*parseInt(t.substr(5,2),16))/1e3>=128?"black":"white"}}]);
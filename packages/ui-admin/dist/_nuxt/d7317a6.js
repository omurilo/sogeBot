(window.webpackJsonp=window.webpackJsonp||[]).push([[16,141],{1018:function(e,t,n){var content=n(1071);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("b806d9d2",content,!0,{sourceMap:!1})},1070:function(e,t,n){"use strict";n(1018)},1071:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,".noselect{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),o.locals={},e.exports=o},1072:function(e,t,n){var content=n(1073);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("e17d86ae",content,!0,{sourceMap:!1})},1073:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,".v-speed-dial{position:relative;z-index:1}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top{top:16px}.v-speed-dial--bottom{bottom:16px}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;top:0;padding:0 16px}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{flex-direction:column-reverse;bottom:100%}.v-speed-dial--direction-right .v-speed-dial__list{flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{flex-direction:row-reverse;right:100%}.v-speed-dial__list{align-items:center;display:flex;justify-content:center;padding:16px 0;position:absolute}.v-speed-dial__list .v-btn{margin:6px}.v-speed-dial:not(.v-speed-dial--is-active) .v-speed-dial__list{pointer-events:none}",""]),o.locals={},e.exports=o},1077:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var o=n(2),r=(n(34),n(274),n(31),n(33),n(1072),n(77)),l=n(125),c=n(386),d=n(127),v=n(7),m=Object(v.a)(l.a,r.a,c.a).extend({name:"v-speed-dial",directives:{ClickOutside:d.a},props:{direction:{type:String,default:"top",validator:function(e){return["top","right","bottom","left"].includes(e)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var e;return e={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},Object(o.a)(e,"v-speed-dial--direction-".concat(this.direction),!0),Object(o.a)(e,"v-speed-dial--is-active",this.isActive),e}},render:function(e){var t=this,n=[],data={class:this.classes,directives:[{name:"click-outside",value:function(){return t.isActive=!1}}],on:{click:function(){return t.isActive=!t.isActive}}};if(this.openOnHover&&(data.on.mouseenter=function(){return t.isActive=!0},data.on.mouseleave=function(){return t.isActive=!1}),this.isActive){var o=0;n=(this.$slots.default||[]).map((function(b,i){return!b.tag||void 0===b.componentOptions||"v-btn"!==b.componentOptions.Ctor.options.name&&"v-tooltip"!==b.componentOptions.Ctor.options.name?(b.key=i,b):(o++,e("div",{style:{transitionDelay:.05*o+"s"},key:i},[b]))}))}var r=e("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},n);return e("div",data,[this.$slots.activator,r])}})},1165:function(e,t,n){"use strict";n.r(t);var o,r=n(60),l=n(1),c=n(2),d=n(147),v=n(110),m=n(26),f=(n(81),n(4),n(63),n(24),n(70),n(31),n(25),n(69),n(62),n(71),n(967)),y=n(49),h=n.n(y),O=n(148),w=n(54),j=n(141),_=["selected","temporary","show"],k={};k.props={item:{key:"item",required:!0,type:Object},editing:{key:"editing",required:!0,type:Boolean}},k.setup=function(e,t){var n=Object(r.d)().$graphql,y=e,k=t.emit,x=Object(l.J)(!1),dialog=Object(l.J)(y.item.temporary),I=Object(l.J)(Date.now()),C=Object(l.J)(Object(w.cloneDeep)(y.item)),A=Object(l.J)(!0),S=Object(l.J)("white"),V=function(){var e=document.getElementById("quickaction-".concat(C.value.id)),t=window.getComputedStyle(e,null).getPropertyValue("background-color");S.value=Object(f.getContrastColor)("#"+t.replace("rgb(","").replace(")","").split(",").map((function(e){return t=e.trim(),(n=Number(t).toString(16)).length<2&&(n="0"+n),n;var t,n})).join(""))};Object(l.A)((function(){V()})),Object(l.Y)(dialog,(function(e){e&&(A.value=!0,I.value=Date.now(),C.value=Object(w.cloneDeep)(y.item)),V()}));return{translate:h.a,saving:x,components:{command:"widgets-actions-button-command",customvariable:"widgets-actions-button-customvariable",randomizer:"widgets-actions-button-randomizer",overlayCountdown:"widgets-actions-button-overlay-countdown",overlayStopwatch:"widgets-actions-button-overlay-stopwatch",overlayMarathon:"widgets-actions-button-overlay-marathon"},dialog:dialog,timestamp:I,clonedItem:C,valid:A,color:S,emitSelect:function(e){k("selected",e)},save:function(){j.a.$emit("quickaction::".concat(y.item.id,"::valid")),Object(l.t)(Object(m.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!A.value){e.next=8;break}return t=C.value,t.selected,t.temporary,t.show,r=Object(v.a)(t,_),x.value=!0,e.next=5,n.default.request(Object(O.a)(o||(o=Object(d.a)(["\n      mutation quickActionSave($data: QuickActionInput!) {\n        quickActionSave(data: $data) {\n          ... on CommandItem { id }\n          ... on CustomVariableItem { id }\n          ... on RandomizerItem { id }\n          ... on OverlayCountdownItem { id }\n          ... on OverlayMarathonItem { id }\n          ... on OverlayStopwatchItem { id }\n        }\n      }"]))),{data:Object(c.a)({},r.type,[r])});case 5:k("save"),dialog.value=!1,x.value=!1;case 8:case"end":return e.stop()}}),e)}))))}}};var x=k,I=(n(1070),n(45)),C=n(44),A=n.n(C),S=n(48),V=n(43),$=n(378),D=n(30),E=n(27),J=n(120),component=Object(I.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.item?n("v-card",{staticClass:"noselect",attrs:{id:"quickaction-"+e.item.id,color:e.item.options.color,elevation:"2",width:"100%",tile:""}},[n(e.components[e.item.type],{tag:"component",attrs:{item:e.item,dialog:e.dialog,color:e.color,editing:e.editing},on:{"update:dialog":function(t){e.dialog=t},select:function(t){return e.emitSelect(!0)},unselect:function(t){return e.emitSelect(!1)}}}),e._v(" "),n("v-dialog",{attrs:{persistent:"",fullscreen:e.$vuetify.breakpoint.mobile,transition:"dialog-bottom-transition","max-width":"600"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dense:"",color:"primary"}},[n("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",[e._v("mdi-close")])],1),e._v(" "),n("span",{staticClass:"headline"},[e._v("Edit Action")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{small:"",text:!e.$vuetify.breakpoint.xs,icon:e.$vuetify.breakpoint.xs,loading:e.saving},on:{click:e.save}},[n("v-icon",{staticClass:"d-flex d-sm-none"},[e._v("\n            mdi-floppy\n          ")]),e._v(" "),n("span",{staticClass:"d-none d-sm-flex"},[e._v(e._s(e.translate("dialog.buttons.saveChanges.idle")))])],1)],1),e._v(" "),n("v-card-text",{staticClass:"pa-0"},[n("widgets-actions-edit",{key:e.timestamp,attrs:{item:e.clonedItem,valid:e.valid},on:{"update:item":function(t){e.clonedItem=t},"update:valid":function(t){e.valid=t}}})],1)],1)],1)],1):e._e()}),[],!1,null,null,null);t.default=component.exports;A()(component,{WidgetsActionsEdit:n(1166).default}),A()(component,{VBtn:S.a,VCard:V.a,VCardText:V.d,VDialog:$.a,VIcon:D.a,VSpacer:E.e,VToolbar:J.a})},1441:function(e,t,n){"use strict";n.r(t);var o,r,l,c=n(1),d=n(60),v=(n(12),n(11),n(14),n(13),n(15),n(40),n(33),n(51),n(37),n(52),n(55),n(39),n(110)),m=n(2),f=n(147),y=n(26),h=(n(81),n(31),n(73),n(4),n(46),n(34),n(47),n(8),n(63),n(24),n(70),n(25),n(69),n(62),n(71),n(967)),O=n(148),w=n(54),j=n(173),_=n(980),k=n.n(_),x=n(80),I=n(10),C=n(23),A=(n(133),function e(input,t){return Object.entries(input).reduce((function(n,o){var r=Object(C.a)(o,2),l=r[0],c=r[1];if(t.includes(l))return n;if(Array.isArray(c)){var d=c.map((function(n){return"object"===Object(I.a)(n)&&null!==n?e(n,t):n}));return n[l]=d,n}return"object"===Object(I.a)(c)?(n[l]=e(c,t),n):(n[l]=c,n)}),{})}),S=["selected","temporary","show"];function V(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw r}}}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function D(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var J={};J.setup=function(e,t){var n=Object(d.d)(),_=n.$graphql,k=n.$store,I=Object(c.J)(!0),C=Object(c.J)([]),$=function(){var e=Object(y.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.default.request(Object(O.a)(o||(o=Object(f.a)(["\n      query quickAction {\n        quickAction {\n          ... on CommandItem { id userId type order options { label color command }  }\n          ... on CustomVariableItem { id userId type order options { label color customvariable } }\n          ... on RandomizerItem { id userId type order options { label color randomizerId } }\n          ... on OverlayCountdownItem { id userId type order options { label color countdownId } }\n          ... on OverlayMarathonItem { id userId type order options { label color marathonId } }\n          ... on OverlayStopwatchItem { id userId type order options { label color stopwatchId } }\n        }\n      }\n    "]))));case 2:t=e.sent,C.value=Object(w.orderBy)(t.quickAction.map((function(e){var t,n,o=A(e,["__typename"]);return E(E({},o),{},{selected:null!==(t=null===(n=C.value.find((function(b){return b.id===o.id})))||void 0===n?void 0:n.selected)&&void 0!==t&&t,temporary:!1,show:!0})})),"order","asc"),setTimeout((function(){var e,t=V(C.value);try{for(t.s();!(e=t.n()).done;){var n=e.value;z[n.id]=H(n.id)}}catch(e){t.e(e)}finally{t.f()}P.value=Date.now()}),1e3),I.value=!1;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=Object(c.J)(!1),J=Object(c.J)(!1),P=Object(c.J)(Date.now()),M=Object(c.J)(600),T=Object(c.b)((function(){return location.href.includes("popout")})),z=Object(c.H)({}),B=Object(c.b)((function(){return C.value.filter((function(e){return e.selected}))})),R=Object(c.b)((function(){return B.value.length>0})),H=function(e){var t=document.getElementById("quickaction-".concat(e)),n=window.getComputedStyle(t,null).getPropertyValue("background-color");return Object(h.getContrastColor)("#"+n.replace("rgb(","").replace(")","").split(",").map((function(e){return t=e.trim(),(n=Number(t).toString(16)).length<2&&(n="0"+n),n;var t,n})).join(""))};return Object(c.A)((function(){$(),setInterval((function(){return l=(null===(e=document.getElementById("c7eff6a7-dc62-4c0b-bad6-90df9d5b605f"))||void 0===e||null===(t=e.parentElement)||void 0===t||null===(n=t.parentElement)||void 0===n||null===(o=n.parentElement)||void 0===o||null===(r=o.parentElement)||void 0===r?void 0:r.offsetTop)||0,c=window.innerHeight-l-90,void(M.value=Math.max(c,500));var e,t,n,o,r,l,c}),100)})),{loading:I,items:C,refetch:$,fab:D,editing:J,timestamp:P,isPopout:T,itemColor:z,isAnySelected:R,addItem:function(){C.value.push({id:Object(j.a)(),selected:!1,userId:k.state.loggedUser.id,order:-1,temporary:!0,show:!0,type:"command",options:{label:"",color:"blue",command:""}})},reorder:function(){var e,t=0,n=V(C.value);try{for(n.s();!(e=n.n()).done;){var o=e.value,l=(o.selected,o.temporary,o.show,Object(v.a)(o,S));l.order=t,t++,console.log({item:l}),_.default.request(Object(O.a)(r||(r=Object(f.a)(["\n    mutation quickActionSave($data: QuickActionInput!) {\n      quickActionSave(data: $data) {\n        ... on CommandItem { id }\n        ... on CustomVariableItem { id }\n        ... on RandomizerItem { id }\n        ... on OverlayCountdownItem { id }\n        ... on OverlayMarathonItem { id }\n        ... on OverlayStopwatchItem { id }\n      }\n    }"]))),{data:Object(m.a)({},l.type,[l])})}}catch(e){n.e(e)}finally{n.f()}},deleteItems:function(){var e,t=C.value.filter((function(e){return e.selected})),n=V(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;o.show=!1,_.default.request(Object(O.a)(l||(l=Object(f.a)(["\n          mutation quickActionDelete($id: String!) {\n            quickActionDelete(id: $id)\n          }"]))),{id:o.id}).catch((function(e){return Object(x.a)(e)}))}}catch(e){n.e(e)}finally{n.f()}setTimeout((function(){C.value=C.value.filter((function(e){return!e.selected}))}),1)}}},J.components=Object.assign({draggable:k.a},J.components);var P=J,M=n(45),T=n(44),z=n.n(T),B=n(48),R=n(43),H=n(27),N=n(68),F=n(30),Q=n(1077),U=n(120),W=n(126),component=Object(M.a)(P,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticStyle:{overflow:"inherit"},attrs:{id:"c7eff6a7-dc62-4c0b-bad6-90df9d5b605f",width:"100%",height:"100%",loading:e.loading}},[n("v-toolbar",{staticClass:"mb-1",attrs:{color:"blue-grey darken-4",height:"36"}},[n("v-toolbar-title",{staticClass:"text-button"},[e._v("\n      Actions\n    ")])],1),e._v(" "),n("v-speed-dial",{staticStyle:{right:"2px",top:"-15px"},attrs:{absolute:"",right:"",direction:"bottom",top:""},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{color:"blue-grey darken-2",dark:"",fab:"","x-small":""},model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[e.fab?n("v-icon",[e._v("\n          mdi-close\n        ")]):n("v-icon",[e._v("\n          mdi-dots-vertical\n        ")])],1)]},proxy:!0}]),model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[e._v(" "),n("v-btn",{attrs:{fab:"","x-small":"",color:e.editing?"primary":"secondary lighten-2"},on:{click:function(t){e.editing=!e.editing}}},[n("v-icon",[e._v("mdi-circle-edit-outline")])],1),e._v(" "),e.isPopout?e._e():n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{color:"secondary",fab:"","x-small":"",href:"#/popout/actions",target:"_blank"}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-open-in-new")])],1)]}}],null,!1,1087823835)},[e._v(" "),n("span",[e._v("Popout")])])],1),e._v(" "),n("v-row",{key:e.timestamp,attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},[n("draggable",{attrs:{list:e.items,handle:".handle"},on:{change:e.reorder}},e._l(e.items,(function(t){return n("span",{key:t.id+"transition"},[n("v-slide-x-transition",[n("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.editing,expression:"editing"}],staticClass:"handle",staticStyle:{position:"absolute",transform:"translateY(40%)","z-index":"99"},attrs:{light:"white"!==e.itemColor[t.id]}},[e._v("mdi-drag")])],1),e._v(" "),n("widgets-actions-button",{directives:[{name:"show",rawName:"v-show",value:!t.temporary&&t.show,expression:"!item.temporary && item.show"}],key:t.id,attrs:{item:t,editing:e.editing},on:{save:e.refetch,selected:function(e){t.selected=e}}})],1)})),0)],1)],1),e._v(" "),n("v-fade-transition",[e.editing?n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"success",block:""},on:{click:e.addItem}},[n("v-icon",[e._v("mdi-plus")])],1),e._v(" "),n("v-fade-transition",[e.isAnySelected?n("v-btn",{attrs:{color:"error",block:""},on:{click:e.deleteItems}},[n("v-icon",[e._v("mdi-delete-forever")])],1):e._e()],1)],1)],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;z()(component,{WidgetsActionsButton:n(1165).default}),z()(component,{VBtn:B.a,VCard:R.a,VCol:H.a,VFadeTransition:N.d,VIcon:F.a,VRow:H.d,VSlideXTransition:N.h,VSpeedDial:Q.a,VToolbar:U.a,VToolbarTitle:U.b,VTooltip:W.a})},967:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContrastColor=t.getRandomColor=void 0;t.getRandomColor=()=>{let e="#";for(let i=0;i<6;i++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e.toLowerCase()};t.getContrastColor=e=>(299*parseInt(e.substr(1,2),16)+587*parseInt(e.substr(3,2),16)+114*parseInt(e.substr(5,2),16))/1e3>=128?"black":"white"}}]);
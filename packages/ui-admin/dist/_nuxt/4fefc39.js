(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1569:function(t,e,n){"use strict";n.r(e);n(1),n(40),n(11),n(52),n(55),n(12),n(14),n(13),n(15);var r=n(26),o=n(2),c=n(35),l=(n(81),n(176),n(4),n(37),n(177),n(178),n(179),n(180),n(181),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(39),n(24),n(51),n(73),n(25),n(69),n(28),n(8),n(89),n(33),n(34),n(47),n(493),n(62),n(31),n(119),n(70),n(103),n(1096)),v=n(5),d=n(21),h=n(49),f=n.n(h),m=n(54),_=n(987),y=n.n(_),w=n(80);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function j(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var I={image:"image/gif",audio:"audio/mp3"},S={audio:"mdi-file-music",video:"mdi-file-video",image:"mdi-file-image"},C=new Map,P=Object(v.c)({props:{value:String,default:String,type:String,volume:Number,loop:Boolean},setup:function(t,e){var n=Object(v.i)(!1),o=Object(v.i)(!1),h=Object(v.i)(t.type),_=Object(v.i)(t.value),O=Object(v.i)([]),k=Object(v.i)([]),P=Object(v.i)([]),E=Object(v.i)([]),D=Object(v.i)([]),A=Object(v.i)(0),V=Object(v.i)(0),L=Object(v.i)(0),T=Object(v.i)(!1),$=Object(v.i)(0),R=Object(v.i)(0);Object(v.p)($,(function(t){R.value===t?o.value=!1:o.value=!0}));var z=Object(v.i)(null),B=Object(v.i)(t.loop);Object(v.p)(B,(function(t){e.emit("update:loop",t)})),Object(v.p)(_,(function(t){e.emit("input",t||null)})),Object(v.p)(T,(function(){W()}));var W=function(){Object(v.d)((function(){for(var e=0,n=Array.from(document.getElementsByClassName("player"));e<n.length;e++){n[e].volume=t.volume/100}}))};Object(v.f)((function(){F()}));var F=function(){n.value=!0,Object(d.getSocket)("/overlays/gallery").emit("generic::getAll",(function(e,r){if(e)Object(w.a)(e);else{console.debug("Loaded",r),O.value.length=0;var o,l=j(r);try{for(l.s();!(o=l.n()).done;){var v=o.value;"audio"===t.type&&!v.type.startsWith("audio")||"image"===t.type&&!v.type.startsWith("image")&&!v.type.startsWith("video")||O.value.push(x(x({},v),{},{folder:U(v.folder)}))}}catch(e){l.e(e)}finally{l.f()}n.value=!1;var d=O.value.find((function(e){return e.id===t.value}));if(d&&(E.value=d.folder.split("/")),"audio"===t.type)for(var h=function(){var e=m[f];if(!e.id)return"break";var link="_default_"===e.id?"".concat(location.origin,"/gallery/_default_").concat(t.type):location.origin+"/gallery/"+(null==e?void 0:e.id),audio=new Audio;audio.addEventListener("play",(function(){e.id&&P.value.push(e.id)})),audio.addEventListener("pause",(function(){e.id&&(P.value=P.value.filter((function(t){return t!==e.id})))})),audio.addEventListener("loadedmetadata",(function(){e.id&&(C.set(e.id,{audio:audio,duration:this.duration}),k.value.push(e.id))})),console.log(link),audio.src=link},f=0,m=[{id:"_default_"}].concat(Object(c.a)(O.value));f<m.length;f++){if("break"===h())break}}}))},M=Object(v.a)((function(){if(D.value.length>0){var e=O.value.find((function(t){return t.id===D.value[0]}));if(e||"_default_"===D.value[0]){var link="_default_"===D.value[0]?"".concat(location.origin,"/gallery/_default_").concat(t.type):location.origin+"/gallery/"+(null==e?void 0:e.id);return x(x({},e),{},{name:(null==e?void 0:e.name)||"default ".concat(t.type),type:(null==e?void 0:e.type)||I[t.type],width:A.value,height:V.value,duration:L.value,link:link})}}return null}));Object(v.p)(M,(function(t){if(t)if(t.type.includes("image")){var img=new Image;img.addEventListener("load",(function(){A.value=this.naturalWidth,V.value=this.naturalHeight})),img.src=t.link}else if(t.type.includes("video")){var video=document.createElement("video");video.addEventListener("loadedmetadata",(function(){A.value=this.videoWidth,V.value=this.videoHeight,L.value=this.duration})),video.src=t.link}}));var U=function(path){return"."===(path=Object(l.normalize)(path))[0]&&(path=path.replace(".","")),"/"!==path[0]&&(path="/"+path),path=path.replace(/\/+$/,"")},G=function t(e){var n=function(t){var e,n=[],r=j(O.value.map((function(t){return t.folder.split("/").filter(Boolean)})));try{for(r.s();!(e=r.n()).done;){for(var o=e.value,c=o.length>0,i=0;i<t.length;i++)try{o[i]!==t[i]&&(c=!1)}catch(t){c=!1;break}c&&o[t.length]&&n.push(o[t.length])}}catch(t){r.e(t)}finally{r.f()}return Object(m.uniq)(n).sort()}(e=e||[]);return{id:0===e.length?"Gallery":e[e.length-1],name:0===e.length?"Gallery":e[e.length-1],children:[].concat(Object(c.a)(n.map((function(n){var r;return t([].concat(Object(c.a)(null!==(r=e)&&void 0!==r?r:[]),[n]))}))),Object(c.a)(O.value.filter((function(t){var n=0===(e=e||[]).join("/").length?"/":e.join("/");return n="/"!==n[0]?"/"+n:n,("/"!==t.folder[0]?"/"+t.folder:t.folder)===n})).map((function(t){return{id:t.id,name:t.name,file:t.type}}))))}},H=Object(v.a)((function(){return G().children?[{id:"_default_",name:"default ".concat(t.type),file:"image"===t.type?"image/png":"audio/mp3"}].concat(Object(c.a)(G().children)):[]}));return{playItem:function(e){if(e.id&&C.has(e.id)){var n,r=null===(n=C.get(e.id))||void 0===n?void 0:n.audio;r&&(r.volume=t.volume/100,r.paused?r.play():r.pause())}},loading:n,uploading:o,files:S,activeItem:M,active:D,opened:E,duration:L,mediaType:h,translate:f.a,model:_,showInfo:T,itemsTree:H,_loop:B,src:z,hoverItem:function(e){var n=O.value.find((function(t){return t.id===e.id}));if(n||"_default_"===e.id){var link="_default_"===e.id?"".concat(location.origin,"/gallery/_default_").concat(t.type):location.origin+"/gallery/"+(null==n?void 0:n.id);return x(x({},n),{},{name:(null==n?void 0:n.name)||"default ".concat(t.type),type:(null==n?void 0:n.type)||I[t.type],link:link})}return null},filesChange:function(t){if(t){o.value=!0,R.value=t.length,$.value=0;for(var e=function(i,e){var n=new FileReader;n.onload=Object(r.a)(regeneratorRuntime.mark((function e(){var r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=y()(),o=String(n.result).match(/.{1,500000}/g)){e.next=4;break}return e.abrupt("return");case 4:c=regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){console.debug("upload::".concat(t[i].name,"::chunk::").concat(n)),Object(d.getSocket)("/overlays/gallery").emit("gallery::upload",[t[i].name,{id:r,folder:"/alerts",b64data:o[n]}],(function(r){if(r)return Object(w.a)(r);console.debug("done::".concat(t[i].name,"::chunk::").concat(n)),e(!0)}))}));case 2:case"end":return e.stop()}}),e)})),l=0;case 6:if(!(l<o.length)){e.next=11;break}return e.delegateYield(c(l),"t0",8);case 8:l++,e.next=6;break;case 11:$.value++,Object(d.getSocket)("/overlays/gallery").emit("generic::getOne",r,(function(t,e){t?Object(w.a)(t):e&&(console.debug("Uploaded",e),O.value.push(e))}));case 13:case"end":return e.stop()}}),e)}))),n.readAsDataURL(t[i])},i=0,n=t.length;i<n;i++)e(i)}},audioData:function(t){return C.get(t)},loadedItems:k,playingItems:P}}}),E=n(45),D=n(44),A=n.n(D),V=n(48),L=n(43),T=n(30),$=n(384),R=n(18),z=n(143),B=n(268),W=n(764),F=n(126),M=n(1167),component=Object(E.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-treeview",{attrs:{"selection-type":"independent",items:t.itemsTree,transition:"",active:t.active,activatable:"audio"!==t.type,open:t.opened,dense:"","item-key":"id","open-on-click":""},on:{"update:active":function(e){t.active=e},"update:open":function(e){t.opened=e}},scopedSlots:t._u([{key:"prepend",fn:function(e){var r=e.item,o=e.open;return[r.file?[n("div",{staticClass:"d-flex"},[n("v-icon",{attrs:{left:""}},[t._v("\n            "+t._s(t.files[r.file.split("/")[0]])+"\n          ")]),t._v(" "),n("v-simple-checkbox",{attrs:{value:t.model===r.id},on:{click:function(e){t.model===r.id?t.model=null:t.model=r.id}}})],1)]:n("v-icon",[t._v("\n        "+t._s(o?"mdi-folder-open":"mdi-folder")+"\n      ")])]}},{key:"label",fn:function(e){var r=e.item;return[t.hoverItem(r)&&!t.hoverItem(r).type.includes("audio")?n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[n("span",t._g(t._b({},"span",c,!1),o),[t._v("\n            "+t._s(r.name)+"\n          ")])]}}],null,!0)},[t._v(" "),n("div",[t.hoverItem(r).type.includes("image")?n("v-img",{staticClass:"player",attrs:{src:t.hoverItem(r).link,"max-height":"300","max-width":"300"}}):t._e(),t._v(" "),t.hoverItem(r).type.includes("video")?n("video",{staticStyle:{"max-width":"300px","max-height":"300px"}},[n("source",{attrs:{type:t.hoverItem(r).type,src:t.hoverItem(r).link}})]):t._e()],1)]):[t._v("\n        "+t._s(r.name)+"\n\n        "),t.hoverItem(r)&&t.hoverItem(r).type.includes("audio")?[t.loadedItems.includes(r.id)?[n("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.playItem(r)}}},[t.playingItems.includes(r.id)?n("v-icon",[t._v("\n                mdi-pause\n              ")]):n("v-icon",[t._v("\n                mdi-play\n              ")])],1),t._v(" "),n("small",{staticClass:"secondary--text text--lighten-3"},[t._v(t._s(Math.floor(100*t.audioData(r.id).duration)/100)+"s")])]:n("v-progress-circular",{attrs:{indeterminate:"",size:"16"}})]:t._e()]]}}])}),t._v(" "),n("div",{staticClass:"text-center pt-4"},[n("form",{attrs:{enctype:"multipart/form-data",novalidate:""}},[n("v-btn",{attrs:{color:"primary",loading:t.uploading,small:""},on:{click:function(e){return t.$refs.uploadFileInput.click()}}},[t._v("\n        Upload item\n      ")]),t._v(" "),"audio"!==t.type?n("v-btn",{attrs:{small:""},on:{click:function(e){t.showInfo=!t.showInfo}}},[t._v("\n        Show info\n      ")]):t._e(),t._v(" "),n("input",{ref:"uploadFileInput",staticClass:"d-none input-file",attrs:{type:"file",disabled:t.uploading,multiple:"",accept:"image"===t.type?"image/*":"video/mp4, audio/*"},on:{change:function(e){return t.filesChange(e.target.files)}}})],1)]),t._v(" "),t.activeItem&&t.showInfo?n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.activeItem.name)+"\n    ")]),t._v(" "),t.activeItem?n("v-card-text",[t.activeItem.type.includes("audio")?n("v-icon",{staticClass:"text-center d-block ma-auto",attrs:{size:"125"}},[t._v("\n        mdi-file-music\n      ")]):t.activeItem.type.includes("image")?n("v-img",{staticClass:"player",attrs:{src:t.activeItem.link}}):t._e(),t._v(" "),t.activeItem.type.includes("video")?n("video",{staticClass:"player",staticStyle:{width:"100%"},attrs:{controls:"",loop:t._loop}},[n("source",{attrs:{type:t.activeItem.type,src:t.activeItem.link}})]):t._e(),t._v(" "),t.activeItem.type.includes("audio")?n("audio",{staticClass:"player",staticStyle:{width:"100%"},attrs:{controls:""}},[n("source",{attrs:{type:t.activeItem.type,src:t.activeItem.link}})]):t._e(),t._v(" "),n("v-list",{staticClass:"dense",attrs:{dense:""}},[n("v-list-item",[n("strong",[t._v("Filename:")]),t._v(" "+t._s(t.activeItem.name)+"\n        ")]),t._v(" "),n("v-list-item",[n("strong",[t._v("Filetype:")]),t._v(" "+t._s(t.activeItem.type)+"\n        ")]),t._v(" "),t.activeItem.type.includes("image")||t.activeItem.type.includes("video")?n("v-list-item",[n("strong",[t._v("Dimensions:")]),t._v(" \n          "),0===t.activeItem.width||0===t.activeItem.height?n("v-progress-circular",{attrs:{indeterminate:"",size:"20"}}):n("span",[t._v(t._s(t.activeItem.width)+"x"+t._s(t.activeItem.height))])],1):t._e(),t._v(" "),t.activeItem.type.includes("audio")||t.activeItem.type.includes("video")?n("v-list-item",[n("strong",[t._v("Duration:")]),t._v(" \n          "),0===t.activeItem.duration?n("v-progress-circular",{attrs:{indeterminate:"",size:"20"}}):n("span",[t._v(t._s(t.activeItem.duration)+"s")])],1):t._e(),t._v(" "),t.activeItem.link.startsWith("data")?t._e():n("v-list-item",[n("strong",[t._v("Link:")]),t._v(" \n          "),n("a",{attrs:{href:t.activeItem.link}},[t._v(t._s(t.activeItem.link))])])],1)],1):t._e()],1):t._e(),t._v(" "),n("v-switch",{staticClass:"pb-2",attrs:{"hide-details":"auto",label:t.translate("registry.alerts.loop.name")},model:{value:t._loop,callback:function(e){t._loop=e},expression:"_loop"}})],1)}),[],!1,null,null,null);e.default=component.exports;A()(component,{VBtn:V.a,VCard:L.a,VCardText:L.d,VCardTitle:L.e,VIcon:T.a,VImg:$.a,VList:R.a,VListItem:R.c,VProgressCircular:z.a,VSimpleCheckbox:B.b,VSwitch:W.a,VTooltip:F.a,VTreeview:M.a})},764:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));n(12),n(11),n(8),n(4),n(14),n(13),n(15);var r=n(110),o=n(2),c=(n(264),n(265),n(488),n(765),n(377)),l=n(83),v=n(144),d=n(68),h=n(315),f=n(0),m=["title"];function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=c.a.extend({name:"v-switch",directives:{Touch:v.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return y(y({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,m));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",y(y({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",y({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",y({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(d.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(h.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===f.A.left&&this.isActive||t.keyCode===f.A.right&&!this.isActive)&&this.onChange()}}})},765:function(t,e,n){var content=n(766);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("bbe90d24",content,!0,{sourceMap:!1})},766:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),r.locals={},t.exports=r}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[186,106],{1098:function(t,e,n){var content=n(1270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("7c4fbbc3",content,!0,{sourceMap:!1})},1269:function(t,e,n){"use strict";n(1098)},1270:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".row[data-v-feec6b38]{overflow:visible}.border-primary[data-v-feec6b38]{border:1px dotted var(--v-secondary-base)!important;overflow:hidden}.hidden-icon[data-v-feec6b38]{position:absolute!important;right:0;transform:rotate(45deg) translateY(7px);opacity:.4}.include[data-v-feec6b38]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.list[data-v-feec6b38]{position:absolute}.list-item[data-v-feec6b38]{transition:all .2s}",""]),r.locals={},t.exports=r},1471:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(35),o=(n(8),n(4),n(25),n(69),n(28),n(5)),l=n(21),v=n(49),d=n.n(v),f=n(1075),m=n(54),_=n(173),h=n(80),y=n(769),O=Object(r.h)({setup:function(){var t=Object(r.J)(null),e=Object(r.J)(null),n=Object(o.o)(),v=Object(r.J)(!0),O=Object(r.J)(null),w=Object(r.J)(null);Object(r.Y)(t,(function(){n.commit("settings/pending",!0)}),{deep:!0}),Object(r.Y)(v,(function(t){n.commit("settings/valid",t)}),{immediate:!0}),Object(r.Y)((function(){return n.state.settings.save}),(function(e){e&&t.value&&Object(y.a)("/core/dashboard",n,t.value)})),Object(r.A)((function(){Object(l.getSocket)("/core/dashboard").emit("settings",(function(c,o,l){c?Object(h.a)(c):(e.value=l,t.value=o,Object(r.t)((function(){n.commit("settings/pending",!1)})))}))}));var j=Object(r.b)((function(){return w.value&&t.value?t.value.µWidgets[0].indexOf(w.value):-1}));return{settings:t,ui:e,translate:d.a,valid:v,tab:O,cols:{"twitch|status":[12,12,12,12]},selected:w,selectedIdx:j,select:function(t){w.value=w.value===t?null:t},removeSelected:function(){if(w.value&&t.value){var e=t.value.µWidgets[0].filter((function(t){return t!==w.value}));t.value.µWidgets=[e,t.value.µWidgets[1]]}w.value=null},moveLeft:function(){if(t.value){var e=j.value-1,n=t.value.µWidgets[0],r=[n[j.value],n[e]];n[e]=r[0],n[j.value]=r[1],t.value.µWidgets=[n,[t.value.µWidgets[1]]]}},moveRight:function(){if(t.value){var e=j.value+1,n=t.value.µWidgets[0],r=[n[j.value],n[e]];n[e]=r[0],n[j.value]=r[1],t.value.µWidgets=[n,[t.value.µWidgets[1]]]}},include:function(){return Object(c.a)(document.querySelectorAll(".include"))},leave:function(t,e){t.style.left="".concat(t.offsetLeft,"px"),t.style.top="".concat(t.offsetTop,"px"),t.style.zIndex="999999",t.style.position="absolute",f.a.to(t,{opacity:0,top:t.offsetTop+100,duration:.2,onComplete:e})},getItemNameWithoutId:function(t){var e=t.split("|");return"".concat(e[0],"|").concat(e[1])},"availableµWidgets":["twitch|status","twitch|uptime","twitch|viewers","twitch|maxViewers","twitch|newChatters","twitch|chatMessages","twitch|followers","twitch|subscribers","twitch|bits","general|tips","twitch|watchedTime","general|currentSong"],addItem:function(e){t.value&&(t.value.µWidgets=[[].concat(Object(c.a)(t.value.µWidgets[0]),["".concat(e,"|").concat(Object(_.a)())]),[t.value.µWidgets[1]]])},capitalize:m.capitalize}}}),w=(n(1269),n(45)),j=n(44),x=n.n(j),I=n(48),k=n(43),W=n(27),V=n(376),C=n(30),S=n(18),T=n(145),A=n(68),N=n(387),z=n(50),J=n(120),L=n(804),M=n.n(L),R=n(127),component=Object(w.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.settings?n("v-form",{attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",[t._v(t._s(t.translate("categories.general")))])],1),t._v(" "),n("v-tabs-items",{staticStyle:{overflow:"visible"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",{attrs:{eager:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-toolbar",{attrs:{dense:"",color:"#1e1e1e",flat:""}},[n("v-toolbar-title",[n("label",{staticClass:"v-label theme--dark"},[t._v("\n                µWidgets\n              ")])]),t._v(" "),n("v-row",{staticClass:"pl-4",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"auto"}},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"success",dark:"",icon:""}},"v-btn",c,!1),r),[n("v-icon",[t._v("mdi-plus")])],1)]}}])},[t._v(" "),n("v-card",[n("v-card-text",[n("v-row",[n("v-col",[n("v-list",{attrs:{dense:""}},[n("v-subheader",[n("v-icon",{attrs:{left:""}},[t._v("\n                                mdi-twitch\n                              ")]),t._v("Twitch\n                            ")],1),t._v(" "),t._l(t.availableµWidgets.filter((function(t){return t.startsWith("twitch")})),(function(e){return n("v-list-item",{key:e,on:{click:function(n){return t.addItem(e)}}},[n("v-list-item-title",[t._v(t._s(t.capitalize(e.split("|")[1].replace(/([A-Z])/g," $1"))))])],1)}))],2)],1),t._v(" "),n("v-col",[n("v-list",{attrs:{dense:""}},[n("v-subheader",[n("v-icon",{attrs:{left:""}},[t._v("\n                                mdi-circle-double\n                              ")]),t._v("General\n                            ")],1),t._v(" "),t._l(t.availableµWidgets.filter((function(t){return t.startsWith("general")})),(function(e){return n("v-list-item",{key:e,on:{click:function(n){return t.addItem(e)}}},[n("v-list-item-title",[t._v(t._s(t.capitalize(e.split("|")[1].replace(/([A-Z])/g," $1"))))])],1)}))],2)],1)],1)],1)],1)],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-row",[n("v-col",{staticStyle:{"text-align":"right"},attrs:{cols:"6"}},[n("v-slide-x-transition",[t.selected&&0!==t.selectedIdx?n("v-btn",{staticClass:"include",attrs:{color:"info",icon:""},on:{click:function(e){return t.moveLeft()}}},[n("v-icon",[t._v("mdi-chevron-left")])],1):t._e()],1)],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-slide-x-reverse-transition",[t.selected&&t.selectedIdx!==t.settings.µWidgets[0].length-1?n("v-btn",{staticClass:"include",attrs:{color:"info",icon:""},on:{click:function(e){return t.moveRight()}}},[n("v-icon",[t._v("mdi-chevron-right")])],1):t._e()],1)],1)],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{staticClass:"ml-auto",staticStyle:{"text-align":"right"},attrs:{cols:"auto"}},[n("v-slide-x-reverse-transition",[t.selected?n("v-btn",{staticClass:"include",attrs:{color:"error",icon:""},on:{click:t.removeSelected}},[n("v-icon",[t._v("mdi-delete")])],1):t._e()],1)],1)],1)],1),t._v(" "),n("transition-group",{staticClass:"row py-3",attrs:{name:"list",tag:"div"},on:{leave:t.leave}},t._l(t.settings.µWidgets[0],(function(e){return n("v-col",{directives:[{name:"click-outside",rawName:"v-click-outside",value:{handler:function(){return t.selected=null},include:t.include},expression:"{\n                handler: () => selected = null,\n                include: include,\n              }"}],key:e,staticClass:"pa-1 include list-item",staticStyle:{cursor:"pointer"},attrs:{cols:t.cols[t.getItemNameWithoutId(e)]?t.cols[t.getItemNameWithoutId(e)][0]:6,lg:t.cols[t.getItemNameWithoutId(e)]?t.cols[t.getItemNameWithoutId(e)][1]:2,md:t.cols[t.getItemNameWithoutId(e)]?t.cols[t.getItemNameWithoutId(e)][2]:4,sm:t.cols[t.getItemNameWithoutId(e)]?t.cols[t.getItemNameWithoutId(e)][3]:4},on:{click:function(n){return t.select(e)}}},[n("div",{staticClass:"v-card v-sheet theme--dark elevation-5 rounded-0 pa-3",class:{primary:t.selected===e,"border-primary":!0}},["twitch"===e.split("|")[0]?n("v-icon",{staticClass:"hidden-icon",attrs:{"x-large":"",color:"#9146FF"}},[t._v("\n                  mdi-twitch\n                ")]):t._e(),t._v(" "),"general"===e.split("|")[0]?n("v-icon",{staticClass:"hidden-icon",attrs:{"x-large":""}},[t._v("\n                  mdi-circle-double\n                ")]):t._e(),t._v(" "),n("div",{staticClass:"text-truncate"},[t._v("\n                  "+t._s(t.capitalize(e.split("|")[1].replace(/([A-Z])/g,"$1")))+"\n                ")])],1)])})),1)],1)],1)],1)],1)],1):n("loading")}),[],!1,null,"feec6b38",null);e.default=component.exports;x()(component,{Loading:n(768).default}),x()(component,{VBtn:I.a,VCard:k.a,VCardText:k.d,VCol:W.a,VForm:V.a,VIcon:C.a,VList:S.a,VListItem:S.c,VListItemTitle:S.j,VMenu:T.a,VRow:W.d,VSlideXReverseTransition:A.g,VSlideXTransition:A.h,VSpacer:W.e,VSubheader:N.a,VTab:z.a,VTabItem:z.b,VTabs:z.c,VTabsItems:z.d,VToolbar:J.a,VToolbarTitle:J.b}),M()(component,{ClickOutside:R.a})},767:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));n(12),n(25),n(69),n(4),n(24),n(40),n(33),n(51),n(37),n(11),n(52),n(55),n(39);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,v=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){v=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(v)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function o(data){var t={};return function e(n,r){if(Object(n)!==n||Array.isArray(n))t[r]=n;else{for(var c=!0,o=0,l=Object.keys(n);o<l.length;o++){var p=l[o];c=!1,e(n[p],r?r+"."+p:p)}c&&r&&(t[r]={})}}(data,""),t}function l(data){var t;if(Array.isArray(data)){t=[];var e,n=r(data);try{for(n.s();!(e=n.n()).done;){var c=e.value;t.push(l(c))}}catch(t){n.e(t)}finally{n.f()}}else{t={};for(var o=function(){var i=d[v],e=i.split(".");e.reduce((function(t,n,r){return t[n]||(t[n]=isNaN(Number(e[r+1]))?e.length-1===r?data[i]:{}:[])}),t)},v=0,d=Object.keys(data);v<d.length;v++)o()}return t}},768:function(t,e,n){"use strict";n.r(e);var r=n(1),c=Object(r.h)({setup:function(){return{}}}),o=n(45),l=n(44),v=n.n(l),d=n(27),f=n(142),m=n(143),component=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-overlay",{attrs:{absolute:""}},[e("v-row",[e("v-col",{staticClass:"text-center"},[e("v-progress-circular",{attrs:{indeterminate:"",size:"48"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCol:d.a,VOverlay:f.a,VProgressCircular:m.a,VRow:d.d})},769:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(23),c=(n(133),n(12),n(34),n(47),n(25),n(62),n(103),n(21)),o=n(54),l=n(80),v=n(141),d=n(767),f=function(t,e,n){var f=Object(o.cloneDeep)(n);if(f.settings){for(var m=0,_=Object.entries(f.settings);m<_.length;m++){var h=Object(r.a)(_[m],2),y=h[0],O=h[1];delete f.settings[y],f[y]=O}delete f.settings}f=Object(d.a)(f);for(var w=0,j=Object.keys(f);w<j.length;w++){var x=j[w];if(!(x.includes("__permission_based__")||x.includes("commands")||x.includes("_permission"))){var I=f[x],k=x.replace(/([\w]*\.)/,"");delete f[x],console.debug("FROM: ".concat(x)),console.debug("TO:   ".concat(k)),f[k]=I}}if((f=Object(d.b)(f)).__permission_based__){f.__permission_based__=Object(d.a)(f.__permission_based__);for(var W=0,V=Object.keys(f.__permission_based__);W<V.length;W++){var C=V[W],S=C.match(/\./g);if(S&&1===S.length){var T=f.__permission_based__[C];delete f.__permission_based__[C];var A=C.replace(/([\w]*\.)/,"");console.debug("FROM: ".concat(C)),console.debug("TO:   ".concat(A)),f.__permission_based__[A]=T[0]}}f.__permission_based__=Object(d.b)(f.__permission_based__)}for(var N=0,z=Object.keys(f);N<z.length;N++){var J=z[N];f[J]=Array.isArray(f[J])?f[J][0]:f[J]}console.log({clonedSettings:f}),Object(c.getSocket)(t).emit("settings.update",f,(function(n){if(e.commit("settings/save",!1),e.commit("settings/pending",!1),n)return Object(l.a)(n);Object(c.getSocket)(t).emit("settings.refresh"),v.a.$emit("snack","success","Configuration updated.")}))}},804:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}}}]);
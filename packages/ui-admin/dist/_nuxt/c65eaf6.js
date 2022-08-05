(window.webpackJsonp=window.webpackJsonp||[]).push([[195,106],{1480:function(t,e,n){"use strict";n.r(e);var r=n(1),o=(n(4),n(37),n(39),n(5)),c=n(21),l=n(49),d=n.n(l),_=n(80),v=n(798),h=n(783),m=n(769),f=n(799),w=n(266),x=Object(r.h)({components:{permissionTabs:Object(r.g)((function(){return n.e(13).then(n.bind(null,1434))})),revertTextField:Object(r.g)((function(){return n.e(0).then(n.bind(null,1156))}))},setup:function(){var t=Object(r.J)(null),e=Object(r.J)(null),n=Object(o.o)(),l=Object(r.J)(!0),x=Object(r.J)(null);return Object(r.Y)(t,(function(){n.commit("settings/pending",!0)}),{deep:!0}),Object(r.Y)((function(){return n.state.settings.save}),(function(e){e&&t.value&&Object(m.a)("/games/gamble",n,t.value)})),Object(r.Y)(l,(function(t){n.commit("settings/valid",t)}),{immediate:!0}),Object(r.A)((function(){Object(c.getSocket)("/games/gamble").emit("settings",(function(o,c,l){o?Object(_.a)(o):(e.value=l,console.log({_settings:c}),t.value=c,Object(r.t)((function(){n.commit("settings/pending",!1)})))}))})),{settings:t,ui:e,translate:d.a,valid:l,tab:x,getIgnoredPermissions:v.a,getPermissionSettingsValue:h.a,togglePermissionLock:f.a,required:w.h,minValue:w.f,maxValue:w.d}}}),y=n(45),k=n(44),O=n.n(k),j=n(48),T=n(43),V=n(27),S=n(376),C=n(30),J=n(764),A=n(50),P=n(140),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.settings?n("v-form",{attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",[t._v(t._s(t.translate("categories.general")))])],1),t._v(" "),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",{attrs:{eager:""}},[n("v-card",[n("v-card-text",[n("v-switch",{staticClass:"mt-0",attrs:{label:t.translate("games.gamble.settings.enableJackpot")},model:{value:t.settings.enableJackpot[0],callback:function(e){t.$set(t.settings.enableJackpot,0,e)},expression:"settings.enableJackpot[0]"}}),t._v(" "),n("revert-text-field",{staticClass:"pt-3",attrs:{type:"number",min:"100",label:t.translate("games.gamble.settings.maxJackpotValue"),rules:[t.required,t.minValue(100)]},model:{value:t.settings.maxJackpotValue,callback:function(e){t.$set(t.settings,"maxJackpotValue",e)},expression:"settings.maxJackpotValue"}}),t._v(" "),n("revert-text-field",{staticClass:"pt-3",attrs:{type:"number",min:"0",max:"100",label:t.translate("games.gamble.settings.lostPointsAddedToJackpot"),rules:[t.required,t.minValue(0),t.maxValue(100)]},model:{value:t.settings.lostPointsAddedToJackpot,callback:function(e){t.$set(t.settings,"lostPointsAddedToJackpot",e)},expression:"settings.lostPointsAddedToJackpot"}}),t._v(" "),n("permission-tabs",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.permissions;return t._l(r,(function(e){return n("v-tab-item",{key:e.id,attrs:{eager:""}},[n("v-row",{staticClass:"mt-0"},[n("v-col",[n("v-text-field",{staticClass:"mb-1",attrs:{type:"number","hide-details":"",min:"0",label:t.translate("games.gamble.settings.minimalBet"),value:t.getPermissionSettingsValue(r,e.id,t.settings.__permission_based__.settings.minimalBet[0]),rules:[t.required,t.minValue(0)],disabled:null===t.settings.__permission_based__.settings.minimalBet[0][e.id]},on:{input:function(n){t.settings.__permission_based__.settings.minimalBet[0][e.id]=Number(n)}}})],1),t._v(" "),"0efd7b1c-e460-4167-8e06-8aaf2c170311"!==e.id?n("v-col",{attrs:{"align-self":"center",cols:"auto"}},[n("v-btn",{attrs:{icon:""},on:{click:function(n){t.settings.__permission_based__.settings.minimalBet[0][e.id]=t.togglePermissionLock(r,e.id,t.settings.__permission_based__.settings.minimalBet[0])}}},[n("v-icon",[t._v(t._s(null===t.settings.__permission_based__.settings.minimalBet[0][e.id]?"mdi-lock":"mdi-lock-open-variant"))])],1)],1):t._e()],1),t._v(" "),n("v-row",{staticClass:"mt-0"},[n("v-col",[n("v-text-field",{staticClass:"mb-1",attrs:{type:"number","hide-details":"",min:"1",max:"100",label:t.translate("games.gamble.settings.chanceToTriggerJackpot"),value:t.getPermissionSettingsValue(r,e.id,t.settings.__permission_based__.settings.chanceToTriggerJackpot[0]),rules:[t.required,t.minValue(1),t.maxValue(100)],disabled:null===t.settings.__permission_based__.settings.chanceToTriggerJackpot[0][e.id]},on:{input:function(n){t.settings.__permission_based__.settings.chanceToTriggerJackpot[0][e.id]=Number(n)}}})],1),t._v(" "),"0efd7b1c-e460-4167-8e06-8aaf2c170311"!==e.id?n("v-col",{attrs:{"align-self":"center",cols:"auto"}},[n("v-btn",{attrs:{icon:""},on:{click:function(n){t.settings.__permission_based__.settings.chanceToTriggerJackpot[0][e.id]=t.togglePermissionLock(r,e.id,t.settings.__permission_based__.settings.chanceToTriggerJackpot[0])}}},[n("v-icon",[t._v(t._s(null===t.settings.__permission_based__.settings.chanceToTriggerJackpot[0][e.id]?"mdi-lock":"mdi-lock-open-variant"))])],1)],1):t._e()],1),t._v(" "),n("v-row",{staticClass:"mt-0"},[n("v-col",[n("v-text-field",{staticClass:"mb-1",attrs:{type:"number","hide-details":"",min:"0",max:"100",label:t.translate("games.gamble.settings.chanceToWin.title"),value:t.getPermissionSettingsValue(r,e.id,t.settings.__permission_based__.settings.chanceToWin[0]),rules:[t.required,t.minValue(1),t.maxValue(100)],disabled:null===t.settings.__permission_based__.settings.chanceToWin[0][e.id]},on:{input:function(n){t.settings.__permission_based__.settings.chanceToWin[0][e.id]=Number(n)}},scopedSlots:t._u([{key:"append",fn:function(){return[t._v("%")]},proxy:!0}],null,!0)})],1),t._v(" "),"0efd7b1c-e460-4167-8e06-8aaf2c170311"!==e.id?n("v-col",{attrs:{"align-self":"center",cols:"auto"}},[n("v-btn",{attrs:{icon:""},on:{click:function(n){t.settings.__permission_based__.settings.chanceToWin[0][e.id]=t.togglePermissionLock(r,e.id,t.settings.__permission_based__.settings.chanceToWin[0])}}},[n("v-icon",[t._v(t._s(null===t.settings.__permission_based__.settings.chanceToWin[0][e.id]?"mdi-lock":"mdi-lock-open-variant"))])],1)],1):t._e()],1)],1)}))}}])})],1)],1)],1)],1)],1):n("loading")}),[],!1,null,null,null);e.default=component.exports;O()(component,{Loading:n(768).default}),O()(component,{VBtn:j.a,VCard:T.a,VCardText:T.d,VCol:V.a,VForm:S.a,VIcon:C.a,VRow:V.d,VSwitch:J.a,VTab:A.a,VTabItem:A.b,VTabs:A.c,VTabsItems:A.d,VTextField:P.a})},764:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));n(12),n(11),n(8),n(4),n(14),n(13),n(15);var r=n(110),o=n(2),c=(n(264),n(265),n(488),n(765),n(377)),l=n(83),d=n(144),_=n(68),v=n(315),h=n(0),m=["title"];function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=c.a.extend({name:"v-switch",directives:{Touch:d.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return w(w({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,m));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",w(w({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",w({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",w({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(_.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(v.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===h.A.left&&this.isActive||t.keyCode===h.A.right&&!this.isActive)&&this.onChange()}}})},765:function(t,e,n){var content=n(766);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("bbe90d24",content,!0,{sourceMap:!1})},766:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),r.locals={},t.exports=r},767:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));n(12),n(25),n(69),n(4),n(24),n(40),n(33),n(51),n(37),n(11),n(52),n(55),n(39);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){d=!0,c=t},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw c}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function c(data){var t={};return function e(n,r){if(Object(n)!==n||Array.isArray(n))t[r]=n;else{for(var o=!0,c=0,l=Object.keys(n);c<l.length;c++){var p=l[c];o=!1,e(n[p],r?r+"."+p:p)}o&&r&&(t[r]={})}}(data,""),t}function l(data){var t;if(Array.isArray(data)){t=[];var e,n=r(data);try{for(n.s();!(e=n.n()).done;){var o=e.value;t.push(l(o))}}catch(t){n.e(t)}finally{n.f()}}else{t={};for(var c=function(){var i=_[d],e=i.split(".");e.reduce((function(t,n,r){return t[n]||(t[n]=isNaN(Number(e[r+1]))?e.length-1===r?data[i]:{}:[])}),t)},d=0,_=Object.keys(data);d<_.length;d++)c()}return t}},768:function(t,e,n){"use strict";n.r(e);var r=n(1),o=Object(r.h)({setup:function(){return{}}}),c=n(45),l=n(44),d=n.n(l),_=n(27),v=n(142),h=n(143),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-overlay",{attrs:{absolute:""}},[e("v-row",[e("v-col",{staticClass:"text-center"},[e("v-progress-circular",{attrs:{indeterminate:"",size:"48"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCol:_.a,VOverlay:v.a,VProgressCircular:h.a,VRow:_.d})},769:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(23),o=(n(133),n(12),n(34),n(47),n(25),n(62),n(103),n(21)),c=n(54),l=n(80),d=n(141),_=n(767),v=function(t,e,n){var v=Object(c.cloneDeep)(n);if(v.settings){for(var h=0,m=Object.entries(v.settings);h<m.length;h++){var f=Object(r.a)(m[h],2),w=f[0],x=f[1];delete v.settings[w],v[w]=x}delete v.settings}v=Object(_.a)(v);for(var y=0,k=Object.keys(v);y<k.length;y++){var O=k[y];if(!(O.includes("__permission_based__")||O.includes("commands")||O.includes("_permission"))){var j=v[O],T=O.replace(/([\w]*\.)/,"");delete v[O],console.debug("FROM: ".concat(O)),console.debug("TO:   ".concat(T)),v[T]=j}}if((v=Object(_.b)(v)).__permission_based__){v.__permission_based__=Object(_.a)(v.__permission_based__);for(var V=0,S=Object.keys(v.__permission_based__);V<S.length;V++){var C=S[V],J=C.match(/\./g);if(J&&1===J.length){var A=v.__permission_based__[C];delete v.__permission_based__[C];var P=C.replace(/([\w]*\.)/,"");console.debug("FROM: ".concat(C)),console.debug("TO:   ".concat(P)),v.__permission_based__[P]=A[0]}}v.__permission_based__=Object(_.b)(v.__permission_based__)}for(var $=0,B=Object.keys(v);$<B.length;$++){var E=B[$];v[E]=Array.isArray(v[E])?v[E][0]:v[E]}console.log({clonedSettings:v}),Object(o.getSocket)(t).emit("settings.update",v,(function(n){if(e.commit("settings/save",!1),e.commit("settings/pending",!1),n)return Object(l.a)(n);Object(o.getSocket)(t).emit("settings.refresh"),d.a.$emit("snack","success","Configuration updated.")}))}},783:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(10),o=(n(73),n(4),n(28),n(54)),c=function(t,e,n){for(var c=function(i){var e=n[Object(o.get)(t.find((function(t){return t.order===i})),"id","0efd7b1c-e460-4167-8e06-8aaf2c170311")];if(null!=e)return{v:e}},i=Object(o.get)(t.find((function(t){return t.id===e})),"order",t.length);i<=t.length;i++){var l=c(i);if("object"===Object(r.a)(l))return l.v}return console.debug("Value for ".concat(e," not found in ").concat(JSON.stringify(n))),n["0efd7b1c-e460-4167-8e06-8aaf2c170311"]}},798:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(12);var r=function(t,e){for(var n=[],r=Object.keys(t.__permission_based__[e])[0],o=0,c=Object.keys(t.__permission_based__[e][r][0]);o<c.length;o++){var l=c[o];"%%%%___ignored___%%%%"===t.__permission_based__[e][r][0][l]&&n.push(l)}return n}},799:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(783),o=function(t,e,n){return null===n[e]?Object(r.a)(t,e,n):null}}}]);
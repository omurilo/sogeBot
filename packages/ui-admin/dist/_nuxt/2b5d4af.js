(window.webpackJsonp=window.webpackJsonp||[]).push([[193,106],{1479:function(t,e,n){"use strict";n.r(e);n(4),n(37),n(39);var r=n(5),o=n(21),c=n(49),l=n.n(c),v=n(1),h=n(80),d=n(770),f=n(265),_=Object(v.h)({components:{revertTextField:Object(v.g)((function(){return n.e(0).then(n.bind(null,1157))}))},setup:function(){var t=Object(v.J)(null),e=Object(v.J)(null),n=Object(r.o)(),c=Object(v.J)(!0),_=Object(v.J)(null);return Object(v.Y)(t,(function(){n.commit("settings/pending",!0)}),{deep:!0}),Object(v.Y)((function(){return n.state.settings.save}),(function(e){e&&t.value&&Object(d.a)("/games/duel",n,t.value)})),Object(v.Y)(c,(function(t){n.commit("settings/valid",t)}),{immediate:!0}),Object(v.A)((function(){Object(o.getSocket)("/games/duel").emit("settings",(function(r,o,c){r?Object(h.a)(r):(e.value=c,console.log({_settings:o}),t.value=o,Object(v.t)((function(){n.commit("settings/pending",!1)})))}))})),{settings:t,ui:e,translate:l.a,valid:c,tab:_,required:f.h,minValue:f.f,maxValue:f.d}}}),m=n(45),w=n(44),y=n.n(w),x=n(43),O=n(377),j=n(765),k=n(50),component=Object(m.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.settings?n("v-form",{attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",[t._v(t._s(t.translate("categories.general")))])],1),t._v(" "),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",{attrs:{eager:""}},[n("v-card",[n("v-card-text",[n("v-switch",{staticClass:"mt-0",attrs:{label:t.translate("games.duel.settings.bypassCooldownByOwnerAndMods")},model:{value:t.settings.bypassCooldownByOwnerAndMods[0],callback:function(e){t.$set(t.settings.bypassCooldownByOwnerAndMods,0,e)},expression:"settings.bypassCooldownByOwnerAndMods[0]"}}),t._v(" "),n("revert-text-field",{staticClass:"pt-3",attrs:{type:"number",min:"0",label:t.translate("games.duel.settings.cooldown"),rules:[t.required,t.minValue(0)]},model:{value:t.settings.cooldown,callback:function(e){t.$set(t.settings,"cooldown",e)},expression:"settings.cooldown"}}),t._v(" "),n("revert-text-field",{staticClass:"pt-3",attrs:{type:"number",min:"0",label:t.translate("games.duel.settings.duration.title"),rules:[t.required,t.minValue(0)]},scopedSlots:t._u([{key:"append",fn:function(){return[t._v(t._s(t.translate("games.duel.settings.duration.help")))]},proxy:!0}]),model:{value:t.settings.duration,callback:function(e){t.$set(t.settings,"duration",e)},expression:"settings.duration"}}),t._v(" "),n("revert-text-field",{staticClass:"pt-3",attrs:{type:"number",min:"0",label:t.translate("games.duel.settings.minimalBet"),rules:[t.required,t.minValue(0)]},model:{value:t.settings.minimalBet,callback:function(e){t.$set(t.settings,"minimalBet",e)},expression:"settings.minimalBet"}})],1)],1)],1)],1)],1):n("loading")}),[],!1,null,null,null);e.default=component.exports;y()(component,{Loading:n(769).default}),y()(component,{VCard:x.a,VCardText:x.d,VForm:O.a,VSwitch:j.a,VTab:k.a,VTabItem:k.b,VTabs:k.c,VTabsItems:k.d})},765:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));n(12),n(11),n(8),n(4),n(14),n(13),n(15);var r=n(110),o=n(2),c=(n(263),n(264),n(489),n(766),n(378)),l=n(83),v=n(144),h=n(68),d=n(315),f=n(0),_=["title"];function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=c.a.extend({name:"v-switch",directives:{Touch:v.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return w(w({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,_));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",w(w({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",w({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",w({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(h.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(d.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===f.A.left&&this.isActive||t.keyCode===f.A.right&&!this.isActive)&&this.onChange()}}})},766:function(t,e,n){var content=n(767);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("bbe90d24",content,!0,{sourceMap:!1})},767:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),r.locals={},t.exports=r},768:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));n(12),n(25),n(69),n(4),n(24),n(40),n(33),n(51),n(37),n(11),n(52),n(55),n(39);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,v=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){v=!0,c=t},f:function(){try{l||null==n.return||n.return()}finally{if(v)throw c}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function c(data){var t={};return function e(n,r){if(Object(n)!==n||Array.isArray(n))t[r]=n;else{for(var o=!0,c=0,l=Object.keys(n);c<l.length;c++){var p=l[c];o=!1,e(n[p],r?r+"."+p:p)}o&&r&&(t[r]={})}}(data,""),t}function l(data){var t;if(Array.isArray(data)){t=[];var e,n=r(data);try{for(n.s();!(e=n.n()).done;){var o=e.value;t.push(l(o))}}catch(t){n.e(t)}finally{n.f()}}else{t={};for(var c=function(){var i=h[v],e=i.split(".");e.reduce((function(t,n,r){return t[n]||(t[n]=isNaN(Number(e[r+1]))?e.length-1===r?data[i]:{}:[])}),t)},v=0,h=Object.keys(data);v<h.length;v++)c()}return t}},769:function(t,e,n){"use strict";n.r(e);var r=n(1),o=Object(r.h)({setup:function(){return{}}}),c=n(45),l=n(44),v=n.n(l),h=n(27),d=n(142),f=n(143),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-overlay",{attrs:{absolute:""}},[e("v-row",[e("v-col",{staticClass:"text-center"},[e("v-progress-circular",{attrs:{indeterminate:"",size:"48"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCol:h.a,VOverlay:d.a,VProgressCircular:f.a,VRow:h.d})},770:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(23),o=(n(133),n(12),n(34),n(47),n(25),n(62),n(103),n(21)),c=n(54),l=n(80),v=n(141),h=n(768),d=function(t,e,n){var d=Object(c.cloneDeep)(n);if(d.settings){for(var f=0,_=Object.entries(d.settings);f<_.length;f++){var m=Object(r.a)(_[f],2),w=m[0],y=m[1];delete d.settings[w],d[w]=y}delete d.settings}d=Object(h.a)(d);for(var x=0,O=Object.keys(d);x<O.length;x++){var j=O[x];if(!(j.includes("__permission_based__")||j.includes("commands")||j.includes("_permission"))){var k=d[j],C=j.replace(/([\w]*\.)/,"");delete d[j],console.debug("FROM: ".concat(j)),console.debug("TO:   ".concat(C)),d[C]=k}}if((d=Object(h.b)(d)).__permission_based__){d.__permission_based__=Object(h.a)(d.__permission_based__);for(var S=0,A=Object.keys(d.__permission_based__);S<A.length;S++){var V=A[S],$=V.match(/\./g);if($&&1===$.length){var T=d.__permission_based__[V];delete d.__permission_based__[V];var B=V.replace(/([\w]*\.)/,"");console.debug("FROM: ".concat(V)),console.debug("TO:   ".concat(B)),d.__permission_based__[B]=T[0]}}d.__permission_based__=Object(h.b)(d.__permission_based__)}for(var E=0,P=Object.keys(d);E<P.length;E++){var D=P[E];d[D]=Array.isArray(d[D])?d[D][0]:d[D]}console.log({clonedSettings:d}),Object(o.getSocket)(t).emit("settings.update",d,(function(n){if(e.commit("settings/save",!1),e.commit("settings/pending",!1),n)return Object(l.a)(n);Object(o.getSocket)(t).emit("settings.refresh"),v.a.$emit("snack","success","Configuration updated.")}))}}}]);
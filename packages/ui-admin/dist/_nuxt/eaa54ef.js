(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1561:function(t,e,n){"use strict";n.r(e);var r=n(1),o=(n(24),n(34),n(47),n(982)),c=n(49),l=n.n(c),v=n(779),h=n.n(v),d=Object(r.h)({props:{length:Number,rules:Object},setup:function(t,e){var menu=Object(r.J)(!1),n=Object(r.J)(!0);Object(r.Y)(menu,(function(t){t&&(c.value=[])}));var c=Object(r.J)([]),v=Object(r.J)(!1),d=Object(r.J)(!1),f=Object(r.J)(0),m=Object(r.J)(0);return{toggles:c,enabled:v,emitRedeemEvent:d,price:f,priceBits:m,getLocalizedName:o.getLocalizedName,menu:menu,save:function(){e.emit("save",{enabled:c.value.includes("enabled")?v.value:void 0,emitRedeemEvent:c.value.includes("emitRedeemEvent")?d.value:void 0,price:c.value.includes("price")?f.value:void 0,priceBits:c.value.includes("priceBits")?m.value:void 0}),menu.value=!1},translate:l.a,capitalize:h.a,valid:n}}}),f=n(45),m=n(44),w=n.n(m),_=n(48),x=n(43),y=n(267),k=n(27),j=n(377),O=n(145),S=n(765),C=n(140),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-menu",{attrs:{"offset-y":"","close-on-click":!1,"min-width":"400","close-on-content-click":!1,"offset-overflow":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{small:""}},"v-btn",o,!1),r),[t._v("\n        Batch update\n      ")])]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-card",{attrs:{outlined:""}},[n("v-card-text",[n("v-form",{attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"auto","align-self":"center"}},[n("v-checkbox",{attrs:{value:"enabled"},model:{value:t.toggles,callback:function(e){t.toggles=e},expression:"toggles"}})],1),t._v(" "),n("v-col",[n("v-switch",{attrs:{disabled:!t.toggles.includes("enabled"),label:t.translate("enabled"),"persistent-hint":"","hide-details":"auto",hint:t.enabled?"Price is enabled.":"Price is disabled."},model:{value:t.enabled,callback:function(e){t.enabled=e},expression:"enabled"}})],1)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"auto","align-self":"center"}},[n("v-checkbox",{attrs:{value:"emitRedeemEvent"},model:{value:t.toggles,callback:function(e){t.toggles=e},expression:"toggles"}})],1),t._v(" "),n("v-col",[n("v-switch",{attrs:{disabled:!t.toggles.includes("emitRedeemEvent"),label:t.capitalize(t.translate("systems.price.emitRedeemEvent")),"persistent-hint":"","hide-details":"auto",hint:t.emitRedeemEvent?"If price is paid, redeem event / alert will be triggered.":"No event will be triggered."},model:{value:t.emitRedeemEvent,callback:function(e){t.emitRedeemEvent=e},expression:"emitRedeemEvent"}})],1)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"auto","align-self":"center"}},[n("v-checkbox",{attrs:{value:"price"},model:{value:t.toggles,callback:function(e){t.toggles=e},expression:"toggles"}})],1),t._v(" "),n("v-col",[n("v-text-field",{staticClass:"d-inline-block",attrs:{type:"number",rules:t.rules.price,"single-line":""},scopedSlots:t._u([{key:"append",fn:function(){return[t._v("\n                  "+t._s(t.getLocalizedName(2,t.$store.state.configuration.systems.Points.customization.name))+"\n                ")]},proxy:!0}]),model:{value:t.price,callback:function(e){t.price=t._n(e)},expression:"price"}})],1)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"auto","align-self":"center"}},[n("v-checkbox",{attrs:{value:"priceBits"},model:{value:t.toggles,callback:function(e){t.toggles=e},expression:"toggles"}})],1),t._v(" "),n("v-col",[n("v-text-field",{staticClass:"d-inline-block",attrs:{type:"number",rules:t.rules.priceBits,"single-line":""},scopedSlots:t._u([{key:"append",fn:function(){return[t._v("\n                  "+t._s(t.getLocalizedName(2,t.translate("bot.bits")))+"\n                ")]},proxy:!0}]),model:{value:t.priceBits,callback:function(e){t.priceBits=t._n(e)},expression:"priceBits"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.menu=!1}}},[t._v("\n          Cancel\n        ")]),t._v(" "),n("v-btn",{attrs:{color:"primary",text:"",disabled:!t.valid},on:{click:function(e){return t.save()}}},[t._v("\n          Save\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VBtn:_.a,VCard:x.a,VCardActions:x.b,VCardText:x.d,VCheckbox:y.a,VCol:k.a,VForm:j.a,VMenu:O.a,VRow:k.d,VSpacer:k.e,VSwitch:S.a,VTextField:C.a})},765:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));n(12),n(11),n(8),n(4),n(14),n(13),n(15);var r=n(110),o=n(2),c=(n(263),n(264),n(489),n(766),n(378)),l=n(83),v=n(144),h=n(68),d=n(315),f=n(0),m=["title"];function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=c.a.extend({name:"v-switch",directives:{Touch:v.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return _(_({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,m));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",_(_({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",_({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",_({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(h.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(d.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===f.A.left&&this.isActive||t.keyCode===f.A.right&&!this.isActive)&&this.onChange()}}})},766:function(t,e,n){var content=n(767);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("bbe90d24",content,!0,{sourceMap:!1})},767:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),r.locals={},t.exports=r},779:function(t,e,n){var r=n(790),o=n(813);t.exports=function(t){return o(r(t).toLowerCase())}},781:function(t,e,n){var r=n(789).Symbol;t.exports=r},789:function(t,e,n){var r=n(806),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();t.exports=c},790:function(t,e,n){var r=n(808);t.exports=function(t){return null==t?"":r(t)}},791:function(t,e){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return n.test(t)}},795:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},797:function(t,e,n){var r=n(781),o=n(811),c=n(812),l=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?o(t):c(t)}},802:function(t,e){var n=Array.isArray;t.exports=n},806:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(121))},808:function(t,e,n){var r=n(781),o=n(809),c=n(802),l=n(810),v=r?r.prototype:void 0,h=v?v.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(c(e))return o(e,t)+"";if(l(e))return h?h.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}},809:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},810:function(t,e,n){var r=n(797),o=n(795);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},811:function(t,e,n){var r=n(781),o=Object.prototype,c=o.hasOwnProperty,l=o.toString,v=r?r.toStringTag:void 0;t.exports=function(t){var e=c.call(t,v),n=t[v];try{t[v]=void 0;var r=!0}catch(t){}var o=l.call(t);return r&&(e?t[v]=n:delete t[v]),o}},812:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},813:function(t,e,n){var r=n(814)("toUpperCase");t.exports=r},814:function(t,e,n){var r=n(815),o=n(791),c=n(817),l=n(790);t.exports=function(t){return function(e){e=l(e);var n=o(e)?c(e):void 0,v=n?n[0]:e.charAt(0),h=n?r(n,1).join(""):e.slice(1);return v[t]()+h}}},815:function(t,e,n){var r=n(816);t.exports=function(t,e,n){var o=t.length;return n=void 0===n?o:n,!e&&n>=o?t:r(t,e,n)}},816:function(t,e){t.exports=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var c=Array(o);++r<o;)c[r]=t[r+e];return c}},817:function(t,e,n){var r=n(818),o=n(791),c=n(819);t.exports=function(t){return o(t)?c(t):r(t)}},818:function(t,e){t.exports=function(t){return t.split("")}},819:function(t,e){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",c="[^\\ud800-\\udfff]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",h="(?:"+r+"|"+o+")"+"?",d="[\\ufe0e\\ufe0f]?",f=d+h+("(?:\\u200d(?:"+[c,l,v].join("|")+")"+d+h+")*"),m="(?:"+[c+r+"?",r,l,v,n].join("|")+")",w=RegExp(o+"(?="+o+")|"+m+f,"g");t.exports=function(t){return t.match(w)||[]}}}]);
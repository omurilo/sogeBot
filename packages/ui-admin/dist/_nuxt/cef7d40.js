(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{1414:function(t,e,n){"use strict";n.r(e);var r=n(1),o=(n(40),n(4),n(33),n(51),n(37),n(25),n(11),n(52),n(55),n(39),n(8),n(14),n(13),n(15),n(2)),c=(n(46),n(12),n(28),n(981)),l=n(21),v=n(49),h=n.n(v),d=n(778),m=n.n(d),f=n(803),w=n.n(f),_=n(173),y=n(141);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function k(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var S={command:"",priceBits:0,price:100,enabled:!0,emitRedeemEvent:!1},C=Object(r.h)({props:{value:Object,rules:Object},setup:function(t,e){var menu=Object(r.J)(!1),n=Object(r.J)(w()(t.value||S)),o=Object(r.J)(!0),v=Object(r.J)(!1),form=Object(r.J)(null),d=function e(){o.value=!0,form.value?(form.value.resetValidation(),n.value=w()(t.value||S)):setTimeout((function(){e()}),100)};Object(r.Y)(menu,(function(t){t&&d()}));var f=function(t){return t.price>0||t.priceBits>0};return{menu:menu,item:n,save:function(){if(form.value.validate()){for(var r=0,o=Object.keys(t.rules);r<o.length;r++){var c,h=o[r],d=k(t.rules[h]);try{for(d.s();!(c=d.n()).done;){var m=(0,c.value)(n.value[h]);if(!0!==m)return void y.a.$emit("snack","red","[".concat(h,"] - ").concat(m))}}catch(t){d.e(t)}finally{d.f()}}if(!f(n.value))return void y.a.$emit("snack","red","[price] - Points or bits price needs to be set.");console.log("Updating",n.value),v.value=!0,Object(l.getSocket)("/systems/price").emit("price::save",O(O({},n.value),{},{id:n.value.id||Object(_.a)()}),(function(){v.value=!1,menu.value=!1,y.a.$emit("snack","success","Data updated."),e.emit("save")}))}},translate:h.a,capitalize:m.a,valid:o,form:form,saving:v,isAtLeastOneValueAboveZero:f,getLocalizedName:c.getLocalizedName}}}),P=n(45),A=n(44),$=n.n(A),E=n(48),V=n(43),D=n(27),L=n(378),z=n(376),B=n(30),R=n(764),J=n(140),component=Object(P.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{persistent:"","max-width":"500",scrollable:"",fullscreen:t.$vuetify.breakpoint.mobile},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[void 0!==t.item.id?n("v-btn",t._g(t._b({staticClass:"primary-hover",attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("\n          mdi-pencil\n        ")])],1):n("v-btn",t._g(t._b({attrs:{color:"primary"}},"v-btn",o,!1),r),[t._v("\n        New item\n      ")])]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-card",{staticClass:"pt-3",attrs:{outlined:""}},[n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{"hide-details":"auto",label:t.translate("command"),rules:t.rules.command,clearable:!0,required:""},model:{value:t.item.command,callback:function(e){t.$set(t.item,"command",e)},expression:"item.command"}}),t._v(" "),n("v-row",{attrs:{"no-gutters":"",align:"baseline"}},[n("v-col",[n("v-text-field",{staticClass:"d-inline-block",attrs:{type:"number",rules:t.rules.price,"single-line":"",error:!t.isAtLeastOneValueAboveZero(t.item)},scopedSlots:t._u([{key:"append",fn:function(){return[t._v("\n                  "+t._s(t.getLocalizedName(2,t.$store.state.configuration.systems.Points.customization.name))+"\n                ")]},proxy:!0}]),model:{value:t.item.price,callback:function(e){t.$set(t.item,"price",t._n(e))},expression:"item.price"}})],1),t._v(" "),n("v-col",{staticClass:"text-center px-8",attrs:{cols:"auto"}},[t._v("\n              "+t._s(t.translate("or"))+"\n            ")]),t._v(" "),n("v-col",[n("v-text-field",{staticClass:"d-inline-block",attrs:{error:!t.isAtLeastOneValueAboveZero(t.item),"error-messages":t.isAtLeastOneValueAboveZero(t.item)?[]:["Points or bits price needs to be set."],type:"number",rules:t.rules.priceBits,"single-line":""},scopedSlots:t._u([{key:"append",fn:function(){return[t._v("\n                  "+t._s(t.getLocalizedName(2,t.translate("bot.bits")))+"\n                ")]},proxy:!0}]),model:{value:t.item.priceBits,callback:function(e){t.$set(t.item,"priceBits",t._n(e))},expression:"item.priceBits"}})],1)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[n("v-switch",{attrs:{label:t.translate("enabled"),"persistent-hint":"","hide-details":"auto",hint:t.item.enabled?"Price is enabled.":"Price is disabled."},model:{value:t.item.enabled,callback:function(e){t.$set(t.item,"enabled",e)},expression:"item.enabled"}})],1),t._v(" "),n("v-col",[n("v-switch",{attrs:{label:t.capitalize(t.translate("systems.price.emitRedeemEvent")),"persistent-hint":"","hide-details":"auto",hint:t.item.emitRedeemEvent?"If price is paid, redeem event / alert will be triggered.":"No event will be triggered."},model:{value:t.item.emitRedeemEvent,callback:function(e){t.$set(t.item,"emitRedeemEvent",e)},expression:"item.emitRedeemEvent"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.menu=!1}}},[t._v("\n          Cancel\n        ")]),t._v(" "),n("v-btn",{attrs:{color:"primary",loading:t.saving,text:"",disabled:!t.valid},on:{click:function(e){return t.save()}}},[t._v("\n          Save & Close\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;$()(component,{VBtn:E.a,VCard:V.a,VCardActions:V.b,VCardText:V.d,VCol:D.a,VDialog:L.a,VForm:z.a,VIcon:B.a,VRow:D.d,VSpacer:D.e,VSwitch:R.a,VTextField:J.a})},764:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));n(12),n(11),n(8),n(4),n(14),n(13),n(15);var r=n(110),o=n(2),c=(n(264),n(265),n(488),n(765),n(377)),l=n(83),v=n(144),h=n(68),d=n(315),m=n(0),f=["title"];function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=c.a.extend({name:"v-switch",directives:{Touch:v.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return _(_({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,f));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",_(_({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",_({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",_({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(h.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(d.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===m.A.left&&this.isActive||t.keyCode===m.A.right&&!this.isActive)&&this.onChange()}}})},765:function(t,e,n){var content=n(766);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("bbe90d24",content,!0,{sourceMap:!1})},766:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),r.locals={},t.exports=r}}]);
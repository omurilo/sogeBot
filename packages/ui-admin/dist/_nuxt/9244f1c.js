(window.webpackJsonp=window.webpackJsonp||[]).push([[184,106],{1469:function(t,e,n){"use strict";n.r(e);var r=n(1),o=(n(28),n(25),n(69),n(12),n(119),n(33),n(8),n(4),n(5)),c=n(21),l=n(49),v=n.n(l),h=n(80),d=n(141),w=Object(r.h)({setup:function(){var t=Object(o.o)(),e=Object(r.J)(!0),n=Object(o.n)(),l=Object(o.m)(),w=Object(r.J)(!1),menu=Object(r.J)({services:[],core:[],systems:[],integrations:[],games:[],overlays:[]}),_=function(t,e){return n.resolve("/settings/modules/".concat(t,"/").concat(e)).resolved.matched.length>0};Object(r.Y)(l,(function(e){w.value=5===e.path.split("/").length,w.value&&Object(r.t)((function(){t.commit("panel/back","/settings/modules")}))}),{immediate:!0}),Object(r.Y)(w,(function(t){t||n.push("/settings/modules")})),Object(r.Y)(menu,(function(t){e.value=!0;for(var n=0,r=Object.keys(t);n<r.length;n++){if(0===t[r[n]].length)return}e.value=!1})),Object(r.A)((function(){for(var t=function(){var t=r[n];Object(c.getSocket)("/").emit("populateListOf",t,(function(n,r){n?Object(h.a)(n):(menu.value[t]=r.sort((function(a,b){return v()("menu."+a.name).localeCompare(v()("menu."+b.name))})),e.value=!1)}))},n=0,r=Object.keys(menu.value);n<r.length;n++)t()}));return{isLoading:e,drawer:w,translate:v.a,menu:menu,route:l,hasSettings:_,haveActions:function(t){return t.filter((function(t){return void 0!==t.enabled||_(t.type,t.name)}))},update:function(t){var e=t.enabled;Object(c.getSocket)("/".concat(t.type,"/").concat(t.name)).emit("settings.update",{enabled:e},(function(n){if(n)return Object(h.a)(n);d.a.$emit("snack",e?"success":"orange","Module ".concat(t.name," ").concat(e?"enabled":"disabled","."))}))}}}}),_=n(45),m=n(44),f=n.n(m),x=n(379),y=n(48),O=n(43),k=n(27),j=n(761),C=n(68),S=n(30),V=n(463),D=n(764),E=n(120),component=Object(_.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoading?n("loading"):n("div",[5===t.route.path.split("/").length?n("portal",{attrs:{to:"navbar"}},[n("transition",{attrs:{appear:"",name:"fade"}},[n("v-btn",{attrs:{small:"",text:!t.$vuetify.breakpoint.xs,icon:t.$vuetify.breakpoint.xs,disabled:!t.$store.state.settings.pending||!t.$store.state.settings.valid,loading:t.$store.state.settings.save},on:{click:function(e){return t.$store.commit("settings/save",!0)}}},[n("v-icon",{staticClass:"d-flex d-sm-none"},[t._v("\n          mdi-floppy\n        ")]),t._v(" "),n("span",{staticClass:"d-none d-sm-flex"},[t._v(t._s(t.translate("dialog.buttons.saveChanges.idle")))])],1)],1)],1):t._e(),t._v(" "),t.drawer?n("v-navigation-drawer",{staticClass:"fullscreen-drawer",attrs:{right:"",width:(t.$vuetify.breakpoint.mobile,"100%"),absolute:"","hide-overlay":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("nuxt-child")],1):t._e(),t._v(" "),n("v-fade-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.drawer,expression:"!drawer"}]},t._l(Object.keys(t.menu),(function(e){return n("v-card",{key:e,staticClass:"ma-2",attrs:{flat:""}},[t.haveActions(t.menu[e]).length>0?n("v-card-title",[t._v("\n          "+t._s(t.translate("menu."+e))+"\n        ")]):t._e(),t._v(" "),t.haveActions(t.menu[e]).length>0?n("v-card-text",[n("v-data-iterator",{attrs:{items:t.haveActions(t.menu[e]),"item-key":"name","items-per-page":-1,"hide-default-footer":""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.items;return[n("v-row",{attrs:{dense:""}},t._l(r,(function(e){return n("v-col",{key:e.name,staticClass:"fill-height",attrs:{cols:"12",sm:"6",md:"6",lg:"4",xl:"2"}},[n("v-card",{staticClass:"fill-height"},[n("v-toolbar",{attrs:{dense:"",color:"blue-grey darken-4"}},[n("v-toolbar-title",{staticClass:"text-button"},[t._v("\n                        "+t._s(e.name)+"\n                      ")]),t._v(" "),n("v-spacer"),t._v(" "),void 0!==e.enabled&&null!==e.enabled?n("v-switch",{staticClass:"pt-4",staticStyle:{transform:"translateY(3px)"},attrs:{color:"success",disabled:void 0!==e.areDependenciesEnabled&&(e.isDisabledByEnv||!e.areDependenciesEnabled)},on:{click:function(n){return t.update(e)}},model:{value:e.enabled,callback:function(n){t.$set(e,"enabled",n)},expression:"item.enabled"}}):t._e(),t._v(" "),t.hasSettings(e.type,e.name)?n("v-btn",{attrs:{icon:"",nuxt:"",to:"/settings/modules/"+e.type+"/"+e.name}},[n("v-icon",[t._v("mdi-cog")])],1):t._e()],1),t._v(" "),void 0===e.areDependenciesEnabled||!e.isDisabledByEnv&&e.areDependenciesEnabled?t._e():n("v-card-subtitle",{staticClass:"pa-1"},[e.isDisabledByEnv?n("v-alert",{staticClass:"ma-0",attrs:{dense:"",border:"left",text:"",color:"error"}},[t._v("\n                        Disabled by ENV variable\n                      ")]):t._e(),t._v(" "),e.areDependenciesEnabled?t._e():n("v-alert",{staticClass:"ma-0",attrs:{dense:"",border:"left",text:"",color:"error"}},[t._v("\n                        Dependency system is disabled.\n                      ")])],1)],1)],1)})),1)]}}],null,!0)})],1):t._e()],1)})),1)])],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{Loading:n(768).default}),f()(component,{VAlert:x.a,VBtn:y.a,VCard:O.a,VCardSubtitle:O.c,VCardText:O.d,VCardTitle:O.e,VCol:k.a,VDataIterator:j.a,VFadeTransition:C.d,VIcon:S.a,VNavigationDrawer:V.a,VRow:k.d,VSpacer:k.e,VSwitch:D.a,VToolbar:E.a,VToolbarTitle:E.b})},764:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));n(12),n(11),n(8),n(4),n(14),n(13),n(15);var r=n(110),o=n(2),c=(n(264),n(265),n(488),n(765),n(377)),l=n(83),v=n(144),h=n(68),d=n(315),w=n(0),_=["title"];function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=c.a.extend({name:"v-switch",directives:{Touch:v.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return f(f({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,_));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",f(f({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",f({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",f({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(h.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(d.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===w.A.left&&this.isActive||t.keyCode===w.A.right&&!this.isActive)&&this.onChange()}}})},765:function(t,e,n){var content=n(766);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("bbe90d24",content,!0,{sourceMap:!1})},766:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),r.locals={},t.exports=r},768:function(t,e,n){"use strict";n.r(e);var r=n(1),o=Object(r.h)({setup:function(){return{}}}),c=n(45),l=n(44),v=n.n(l),h=n(27),d=n(142),w=n(143),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-overlay",{attrs:{absolute:""}},[e("v-row",[e("v-col",{staticClass:"text-center"},[e("v-progress-circular",{attrs:{indeterminate:"",size:"48"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCol:h.a,VOverlay:d.a,VProgressCircular:w.a,VRow:h.d})}}]);
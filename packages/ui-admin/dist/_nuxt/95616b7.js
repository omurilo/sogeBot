(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1153:function(t,e,n){"use strict";n.r(e);var r=n(1),o=(n(24),n(49)),c=n.n(o),l=n(778),h=n.n(l),d=Object(r.h)({props:{length:Number,permissionItems:Array,groupItems:Array},setup:function(t,e){var menu=Object(r.J)(!1),n=Object(r.J)(!0),o=Object(r.J)(null),l=Object(r.J)(!1),d=Object(r.J)(""),v=Object(r.J)(!0),f=Object(r.J)(!1);return{group:o,groupToggle:l,groupSearch:d,enabled:v,enabledToggle:f,menu:menu,save:function(){e.emit("save",{group:l.value?o.value:void 0,enabled:f.value?v.value:void 0}),menu.value=!1},translate:c.a,capitalize:h.a,valid:n}}}),v=n(45),f=n(44),m=n.n(f),w=n(48),x=n(43),_=n(27),y=n(777),S=n(376),O=n(18),j=n(145),I=n(268),k=n(764),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-menu",{attrs:{"offset-y":"","close-on-click":!1,"min-width":"400","close-on-content-click":!1,"offset-overflow":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{small:""}},"v-btn",o,!1),r),[t._v("\n        Batch update\n      ")])]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-card",{attrs:{outlined:""}},[n("v-card-text",[n("v-form",{attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"auto","align-self":"center"}},[n("v-simple-checkbox",{model:{value:t.groupToggle,callback:function(e){t.groupToggle=e},expression:"groupToggle"}})],1),t._v(" "),n("v-col",[n("v-combobox",{attrs:{label:t.translate("group"),disabled:!t.groupToggle,clearable:"","search-input":t.groupSearch,"hide-details":"auto","return-object":!1,items:t.groupItems.filter((function(t){return null!==t.value}))},on:{"update:searchInput":function(e){t.groupSearch=e},"update:search-input":function(e){t.groupSearch=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[n("v-list-item",[t._v("\n                    Create "),n("strong",[t._v(t._s(t.groupSearch))])])]},proxy:!0}]),model:{value:t.group,callback:function(e){t.group=e},expression:"group"}})],1)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"auto","align-self":"center"}},[n("v-simple-checkbox",{model:{value:t.enabledToggle,callback:function(e){t.enabledToggle=e},expression:"enabledToggle"}})],1),t._v(" "),n("v-col",[n("v-switch",{attrs:{disabled:!t.enabledToggle,label:t.translate("enabled"),"persistent-hint":"","hide-details":"auto",hint:t.enabled?"Keyword is enabled":"Keyword is disabled"},model:{value:t.enabled,callback:function(e){t.enabled=e},expression:"enabled"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.menu=!1}}},[t._v("\n          Cancel\n        ")]),t._v(" "),n("v-btn",{attrs:{color:"primary",text:"",disabled:!t.valid},on:{click:function(e){return t.save()}}},[t._v("\n          Save\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:w.a,VCard:x.a,VCardActions:x.b,VCardText:x.d,VCol:_.a,VCombobox:y.a,VForm:S.a,VListItem:O.c,VMenu:j.a,VRow:_.d,VSimpleCheckbox:I.b,VSpacer:_.e,VSwitch:k.a})},764:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));n(12),n(11),n(8),n(4),n(14),n(13),n(15);var r=n(110),o=n(2),c=(n(264),n(265),n(488),n(765),n(377)),l=n(83),h=n(144),d=n(68),v=n(315),f=n(0),m=["title"];function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=c.a.extend({name:"v-switch",directives:{Touch:h.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return x(x({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,m));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",x(x({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",x({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",x({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(d.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(v.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===f.A.left&&this.isActive||t.keyCode===f.A.right&&!this.isActive)&&this.onChange()}}})},765:function(t,e,n){var content=n(766);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("bbe90d24",content,!0,{sourceMap:!1})},766:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),r.locals={},t.exports=r},777:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));n(12),n(11),n(8),n(14),n(13),n(15);var r=n(10),o=n(2),c=(n(4),n(63),n(73),n(381),n(40),n(33),n(34),n(47),n(94),n(82),n(489),n(74)),l=n(316),h=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=l.a.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return c.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var input=l.a.options.methods.genInput.call(this);return delete input.data.attrs.name,input.data.on.paste=this.onPaste,input},genChipSelection:function(t,e){var n=this,r=c.a.options.methods.genChipSelection.call(this,t,e);return this.multiple&&(r.componentOptions.listeners=v(v({},r.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=e,n.internalSearch=n.getText(t),n.selectedIndex=-1}})),r},onChipInput:function(t){c.a.options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[h.A.home,h.A.end].includes(e)||c.a.options.methods.onKeyDown.call(this,t),this.multiple&&e===h.A.left&&0===this.$refs.input.selectionStart?this.updateSelf():e===h.A.enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();l.a.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():(l.a.options.methods.selectItem.call(this,t),this.internalSearch&&this.multiple&&this.getText(t).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){c.a.options.methods.setValue.call(this,void 0===t?this.internalSearch:t)},updateEditing:function(){var t=this,e=this.internalValue.slice(),n=this.selectedItems.findIndex((function(e){return t.getText(e)===t.internalSearch}));if(n>-1){var o="object"===Object(r.a)(e[n])?Object.assign({},e[n]):e[n];e.splice(n,1),e.push(o)}else e[this.editingIndex]=this.internalSearch;this.setValue(e),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){this.searchIsDirty&&(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),(Boolean(this.$scopedSlots.selection)||this.hasChips)&&(this.internalSearch=null))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this,e=this.getMenuIndex();if(!(e<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var n=this.selectedItems.findIndex((function(e){return t.internalSearch===t.getText(e)})),o=n>-1&&"object"===Object(r.a)(this.selectedItems[n])?Object.assign({},this.selectedItems[n]):this.internalSearch;if(n>-1){var c=this.internalValue.slice();c.splice(n,1),this.setValue(c)}if(e>-1)return this.internalSearch=null;this.selectItem(o),this.internalSearch=null}},onPaste:function(t){var e;if(this.multiple&&!this.searchIsDirty){var n=null==(e=t.clipboardData)?void 0:e.getData("text/vnd.vuetify.autocomplete.item+plain");n&&-1===this.findExistingIndex(n)&&(t.preventDefault(),c.a.options.methods.selectItem.call(this,n))}},clearableCallback:function(){this.editingIndex=-1,l.a.options.methods.clearableCallback.call(this)}}})},778:function(t,e,n){var r=n(789),o=n(812);t.exports=function(t){return o(r(t).toLowerCase())}},780:function(t,e,n){var r=n(788).Symbol;t.exports=r},788:function(t,e,n){var r=n(805),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();t.exports=c},789:function(t,e,n){var r=n(807);t.exports=function(t){return null==t?"":r(t)}},790:function(t,e){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return n.test(t)}},794:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},796:function(t,e,n){var r=n(780),o=n(810),c=n(811),l=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?o(t):c(t)}},801:function(t,e){var n=Array.isArray;t.exports=n},805:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(121))},807:function(t,e,n){var r=n(780),o=n(808),c=n(801),l=n(809),h=r?r.prototype:void 0,d=h?h.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(c(e))return o(e,t)+"";if(l(e))return d?d.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}},808:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},809:function(t,e,n){var r=n(796),o=n(794);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},810:function(t,e,n){var r=n(780),o=Object.prototype,c=o.hasOwnProperty,l=o.toString,h=r?r.toStringTag:void 0;t.exports=function(t){var e=c.call(t,h),n=t[h];try{t[h]=void 0;var r=!0}catch(t){}var o=l.call(t);return r&&(e?t[h]=n:delete t[h]),o}},811:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},812:function(t,e,n){var r=n(813)("toUpperCase");t.exports=r},813:function(t,e,n){var r=n(814),o=n(790),c=n(816),l=n(789);t.exports=function(t){return function(e){e=l(e);var n=o(e)?c(e):void 0,h=n?n[0]:e.charAt(0),d=n?r(n,1).join(""):e.slice(1);return h[t]()+d}}},814:function(t,e,n){var r=n(815);t.exports=function(t,e,n){var o=t.length;return n=void 0===n?o:n,!e&&n>=o?t:r(t,e,n)}},815:function(t,e){t.exports=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var c=Array(o);++r<o;)c[r]=t[r+e];return c}},816:function(t,e,n){var r=n(817),o=n(790),c=n(818);t.exports=function(t){return o(t)?c(t):r(t)}},817:function(t,e){t.exports=function(t){return t.split("")}},818:function(t,e){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",c="[^\\ud800-\\udfff]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",h="[\\ud800-\\udbff][\\udc00-\\udfff]",d="(?:"+r+"|"+o+")"+"?",v="[\\ufe0e\\ufe0f]?",f=v+d+("(?:\\u200d(?:"+[c,l,h].join("|")+")"+v+d+")*"),m="(?:"+[c+r+"?",r,l,h,n].join("|")+")",w=RegExp(o+"(?="+o+")|"+m+f,"g");t.exports=function(t){return t.match(w)||[]}}}]);
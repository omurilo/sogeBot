(window.webpackJsonp=window.webpackJsonp||[]).push([[109,105],{1151:function(e,t,n){"use strict";n.r(t);var l=n(1),r=(n(8),n(4),n(71),n(49)),o=n.n(r),d=n(54),c=Object(l.h)({props:{filter:[String,Object],permission:[String,Object],permissionItems:Array},setup:function(e,t){var n,menu=Object(l.J)(!1),r=Object(l.J)(null!==(n=e.filter)&&void 0!==n?n:""),c=Object(l.J)(e.permission);return Object(l.Y)(menu,(function(t){var n;t&&(r.value=null!==(n=e.filter)&&void 0!==n?n:"",c.value=e.permission)})),Object(l.Y)(r,(function(e){e||(r.value="")})),{menu:menu,filterModel:r,permissionModel:c,save:function(){t.emit("save",{filter:r.value.trim().length>0?r.value:null,permission:c.value})},translate:o.a,capitalize:d.capitalize}}}),v=n(45),f=n(44),x=n.n(f),h=n(48),m=n(43),_=n(30),y=n(145),O=n(266),w=n(27),I=n(774),component=Object(v.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"offset-y":"","close-on-click":!1,"min-width":"400","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:"",dark:"",small:""}},"v-btn",r,!1),l),[n("v-icon",[e._v("mdi-cog")])],1)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-card",[n("v-card-text",[n("v-select",{attrs:{label:"Group Permission",clearable:"","hide-details":"auto",items:e.permissionItems},model:{value:e.permissionModel,callback:function(t){e.permissionModel=t},expression:"permissionModel"}}),e._v(" "),n("v-textarea",{attrs:{"hide-details":"auto",label:e.capitalize(e.translate("systems.customcommands.filter.name")),rows:1,"auto-grow":"",clearable:""},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}},scopedSlots:e._u([{key:"append",fn:function(){return[n("input-variables",{on:{input:function(t){e.filterModel=e.filterModel+t}}})]},proxy:!0}]),model:{value:e.filterModel,callback:function(t){e.filterModel=t},expression:"filterModel"}})],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.menu=!1}}},[e._v("\n        Cancel\n      ")]),e._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.menu=!1,e.save()}}},[e._v("\n        Save\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{InputVariables:n(796).default}),x()(component,{VBtn:h.a,VCard:m.a,VCardActions:m.b,VCardText:m.d,VIcon:_.a,VMenu:y.a,VSelect:O.a,VSpacer:w.e,VTextarea:I.a})},774:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(12),n(11),n(8),n(4),n(14),n(13),n(15);var l=n(2),r=(n(24),n(46),n(775),n(104)),o=n(7);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c=Object(o.a)(r.a).extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null==(n=t.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){r.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},775:function(e,t,n){var content=n(776);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("b5bdd630",content,!0,{sourceMap:!1})},776:function(e,t,n){var l=n(19)((function(i){return i[1]}));l.push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),l.locals={},e.exports=l},778:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));n(12),n(11),n(8),n(14),n(13),n(15);var l=n(10),r=n(2),o=(n(4),n(63),n(73),n(382),n(40),n(33),n(34),n(47),n(94),n(82),n(490),n(74)),d=n(316),c=n(0);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x=d.a.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return o.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(e){if(e&&this.multiple&&this.delimiters.length){var t=this.delimiters.find((function(t){return e.endsWith(t)}));null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var input=d.a.options.methods.genInput.call(this);return delete input.data.attrs.name,input.data.on.paste=this.onPaste,input},genChipSelection:function(e,t){var n=this,l=o.a.options.methods.genChipSelection.call(this,e,t);return this.multiple&&(l.componentOptions.listeners=f(f({},l.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=t,n.internalSearch=n.getText(e),n.selectedIndex=-1}})),l},onChipInput:function(e){o.a.options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown:function(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[c.A.home,c.A.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.multiple&&t===c.A.left&&0===this.$refs.input.selectionStart?this.updateSelf():t===c.A.enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown:function(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();d.a.options.methods.onTabDown.call(this,e)},selectItem:function(e){this.editingIndex>-1?this.updateEditing():(d.a.options.methods.selectItem.call(this,e),this.internalSearch&&this.multiple&&this.getText(e).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(e){o.a.options.methods.setValue.call(this,void 0===e?this.internalSearch:e)},updateEditing:function(){var e=this,t=this.internalValue.slice(),n=this.selectedItems.findIndex((function(t){return e.getText(t)===e.internalSearch}));if(n>-1){var r="object"===Object(l.a)(t[n])?Object.assign({},t[n]):t[n];t.splice(n,1),t.push(r)}else t[this.editingIndex]=this.internalSearch;this.setValue(t),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){this.searchIsDirty&&(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),(Boolean(this.$scopedSlots.selection)||this.hasChips)&&(this.internalSearch=null))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var e=this,t=this.getMenuIndex();if(!(t<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var n=this.selectedItems.findIndex((function(t){return e.internalSearch===e.getText(t)})),r=n>-1&&"object"===Object(l.a)(this.selectedItems[n])?Object.assign({},this.selectedItems[n]):this.internalSearch;if(n>-1){var o=this.internalValue.slice();o.splice(n,1),this.setValue(o)}if(t>-1)return this.internalSearch=null;this.selectItem(r),this.internalSearch=null}},onPaste:function(e){var t;if(this.multiple&&!this.searchIsDirty){var n=null==(t=e.clipboardData)?void 0:t.getData("text/vnd.vuetify.autocomplete.item+plain");n&&-1===this.findExistingIndex(n)&&(e.preventDefault(),o.a.options.methods.selectItem.call(this,n))}},clearableCallback:function(){this.editingIndex=-1,d.a.options.methods.clearableCallback.call(this)}}})},780:function(e,t,n){var content=n(793);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("7cd62aa5",content,!0,{sourceMap:!1})},792:function(e,t,n){"use strict";n(780)},793:function(e,t,n){var l=n(19)((function(i){return i[1]}));l.push([e.i,".theme--dark .v-menu__content{background-color:#1e1e1e}.theme--light .v-menu__content{background-color:#fff}",""]),l.locals={},e.exports=l},796:function(e,t,n){"use strict";n.r(t);n(1);var l=n(35),r=(n(31),n(4),n(212),n(37),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(39),n(28),n(34),n(47),n(25),n(62),n(5)),o=n(49),d=n.n(o),c=Object(r.c)({props:{filters:Array},setup:function(e,t){var n=Object(r.i)(""),menu=Object(r.i)(!1),o=["title","game","viewers","followers","subscribers","spotifySong","ytSong","latestFollower","latestSubscriber","latestSubscriberMonths","latestSubscriberStreak","latestTipAmount","latestTipCurrency","latestTipMessage","latestTip","toptip.overall.username","toptip.overall.amount","toptip.overall.currency","toptip.overall.message","toptip.stream.username","toptip.stream.amount","toptip.stream.currency","toptip.stream.message","latestCheerAmount","latestCheerMessage","latestCheer","isBotSubscriber","isStreamOnline","uptime"];return{filterItems:Object(r.a)((function(){var t;return Object(l.a)(new Set([].concat(o,Object(l.a)(null!==(t=e.filters)&&void 0!==t?t:[])))).map((function(e){return{text:d()("responses.variable."+e),value:"$".concat(e),disabled:!1}}))})),filterToAdd:n,addVariable:function(input){var n;null!==input&&[].concat(o,Object(l.a)(null!==(n=e.filters)&&void 0!==n?n:[])).includes(input.replace("$",""))&&(console.log("add "+input),t.emit("input",input),menu.value=!1)},menu:menu}}}),v=(n(792),n(45)),f=n(44),x=n.n(f),h=n(48),m=n(778),_=n(30),y=n(145),component=Object(v.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-inline-block"},[n("v-menu",{attrs:{"close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:function(t){e.filterToAdd=""}}},"v-btn",r,!1),l),[n("v-icon",[e._v("mdi-variable")])],1)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-combobox",{staticClass:"ma-2",attrs:{autofocus:"",label:"Select variable","search-input":e.filterToAdd,"return-object":!1,items:e.filterItems},on:{"update:searchInput":function(t){e.filterToAdd=t},"update:search-input":function(t){e.filterToAdd=t},change:function(t){return e.addVariable(t)}}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VBtn:h.a,VCombobox:m.a,VIcon:_.a,VMenu:y.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[101,61],{1163:function(e,n,t){"use strict";t.r(n);t(1),t(12),t(11),t(8),t(4),t(14),t(13),t(15);var o=t(2),r=(t(28),t(5)),l=t(49),c=t.n(l),v=t(173);function d(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var x=Object(r.c)({props:{value:Object,disabled:Boolean,disableX:Boolean,disableY:Boolean,disableAnchorX:Boolean,disableAnchorY:Boolean},setup:function(e,n){var t=Object(r.h)(e.value),o=Object(r.i)(Object(v.a)()),l=[{value:"left",text:c()("dialog.position.left")},{value:"middle",text:c()("dialog.position.middle")},{value:"right",text:c()("dialog.position.right")}],d=[{value:"top",text:c()("dialog.position.top")},{value:"middle",text:c()("dialog.position.middle")},{value:"bottom",text:c()("dialog.position.bottom")}],x=Object(r.h)({anchor:null,text:null}),f=Object(r.i)(null);return Object(r.p)(t,(function(o){e.disableX&&0!==o.x&&(t.x=0),e.disableY&&0!==o.y&&(t.y=0),e.disableAnchorY&&"top"!==o.anchorY&&(t.anchorY="top"),e.disableAnchorX&&"left"!==o.anchorX&&(t.anchorX="left"),n.emit("input",o)})),h(h({positionGenerator:function(e){if(f.value){if(x[e]){var n="text"===e?x[e]:x[e].$el,o=f.value.$el.getBoundingClientRect().width/100,r=f.value.$el.getBoundingClientRect().height/100,l=0;"middle"===t.anchorY?l=n.getBoundingClientRect().height/2:"bottom"===t.anchorY&&(l=n.getBoundingClientRect().height);var c=0;return"middle"===t.anchorX?c=n.getBoundingClientRect().width/2:"right"===t.anchorX&&(c=n.getBoundingClientRect().width),{transform:"translate(".concat(t.x*o-c,"px, ").concat(t.y*r-l,"px)")}}return{transform:"translate(0, 0)"}}return{transform:"translate(0, 0)"}},model:t,uuid:o,example:f,anchorYOptions:d,anchorXOptions:l},Object(r.j)(x)),{},{translate:c.a})}}),f=t(45),m=t(44),y=t.n(m),O=t(762),j=t(30),w=t(359),P=t(267),_=t(134),k=t(270),component=Object(f.a)(x,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-expansion-panel",{attrs:{disabled:e.disabled}},[t("v-expansion-panel-header",[e._v("\n    "+e._s(e.translate("dialog.position.settings"))+"\n  ")]),e._v(" "),t("v-expansion-panel-content",[e.disableAnchorX?e._e():t("v-select",{attrs:{label:e.translate("dialog.position.anchorX"),items:e.anchorXOptions},model:{value:e.model.anchorX,callback:function(n){e.$set(e.model,"anchorX",n)},expression:"model.anchorX"}}),e._v(" "),e.disableAnchorY?e._e():t("v-select",{attrs:{label:e.translate("dialog.position.anchorY"),items:e.anchorYOptions},model:{value:e.model.anchorY,callback:function(n){e.$set(e.model,"anchorY",n)},expression:"model.anchorY"}}),e._v(" "),e.disableX?e._e():t("v-slider",{attrs:{label:e.translate("dialog.position.x"),max:100,step:.01,min:0,"thumb-size":0,"thumb-label":"always"},scopedSlots:e._u([{key:"thumb-label",fn:function(n){var o=n.value;return[t("div",{staticStyle:{transform:"translateY(-8px)"}},[e._v("\n          "+e._s(Number(o)+"%")+"\n        ")])]}}],null,!1,1347713083),model:{value:e.model.x,callback:function(n){e.$set(e.model,"x",n)},expression:"model.x"}}),e._v(" "),e.disableY?e._e():t("v-slider",{attrs:{label:e.translate("dialog.position.y"),max:100,step:.01,min:0,"thumb-size":0,"thumb-label":"always"},scopedSlots:e._u([{key:"thumb-label",fn:function(n){var o=n.value;return[t("div",{staticStyle:{transform:"translateY(-8px)"}},[e._v("\n          "+e._s(Number(o)+"%")+"\n        ")])]}}],null,!1,1347713083),model:{value:e.model.y,callback:function(n){e.$set(e.model,"y",n)},expression:"model.y"}}),e._v(" "),t("div",{staticClass:"m-auto py-4",staticStyle:{width:"25%",margin:"auto"}},[t("v-responsive",{staticStyle:{overflow:"visible"},attrs:{"aspect-ratio":16/9}},[t("v-sheet",{ref:"example",staticClass:"fill-height",staticStyle:{position:"relative"},attrs:{elevation:"2",color:"grey darken-4"}},[t("v-icon",{ref:"anchor",staticStyle:{position:"absolute"},style:e.positionGenerator("anchor"),attrs:{color:"primary","x-small":""}},[e._v("\n            mdi-square\n          ")]),e._v(" "),t("div",{ref:"text",staticStyle:{"font-size":"1rem",position:"absolute"},style:e.positionGenerator("text")},[e._v("\n            EXAMPLE TEXT\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;y()(component,{VExpansionPanel:O.a,VExpansionPanelContent:O.b,VExpansionPanelHeader:O.c,VIcon:j.a,VResponsive:w.a,VSelect:P.a,VSheet:_.a,VSlider:k.a})},762:function(e,n,t){"use strict";t.d(n,"d",(function(){return d})),t.d(n,"a",(function(){return O})),t.d(n,"c",(function(){return D})),t.d(n,"b",(function(){return _}));t(12),t(11),t(8),t(4),t(14),t(13),t(15);var o=t(2),r=(t(264),t(265),t(771),t(88)),l=t(17);function c(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var d=r.a.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return v(v({},r.a.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(l.a)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"==typeof this.value[0]&&Object(l.a)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),o=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(o)}}}),h=t(117),x=t(116),f=t(0),m=t(7);function y(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var O=Object(m.a)(Object(h.a)("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(x.b)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(f.v)(this))}}),j=t(68),w=t(174),P=t(41),_=Object(m.a)(w.a,P.a,Object(x.a)("expansionPanel","v-expansion-panel-content","v-expansion-panel")).extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,n){var t=this;e&&(this.isBooted=!0),null==n?this.isActive=e:this.$nextTick((function(){return t.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(j.a,this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(f.v)(n))])]})))}}),k=t(30),A=t(86);function B(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function C(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var D=Object(m.a)(P.a,Object(x.a)("expansionPanel","v-expansion-panel-header","v-expansion-panel")).extend().extend({name:"v-expansion-panel-header",directives:{ripple:A.a},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(f.v)(this,"actions")||[this.$createElement(k.b,this.expandIcon)];return this.$createElement(j.d,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:C(C({},this.$listeners),{},{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(f.v)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},771:function(e,n,t){var content=t(772);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(20).default)("35a07cdd",content,!0,{sourceMap:!1})},772:function(e,n,t){var o=t(19)((function(i){return i[1]}));o.push([e.i,'.theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.16}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.32}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:"";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}',""]),o.locals={},e.exports=o}}]);
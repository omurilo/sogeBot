(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1167:function(e,t,r){"use strict";r.r(t);r(1),r(4),r(37),r(39),r(71),r(28),r(46),r(40),r(33),r(51),r(25),r(11),r(52),r(55);var n=r(5),o=r(54);function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,v=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){v=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(v)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var v=Object(n.c)({props:{item:Object},components:{command:Object(n.b)({loader:function(){return r.e(74).then(r.bind(null,1573))}}),customvariable:Object(n.b)({loader:function(){return r.e(75).then(r.bind(null,1574))}}),randomizer:Object(n.b)({loader:function(){return r.e(79).then(r.bind(null,1578))}}),overlayCountdown:Object(n.b)({loader:function(){return Promise.all([r.e(2),r.e(76)]).then(r.bind(null,1575))}}),overlayStopwatch:Object(n.b)({loader:function(){return Promise.all([r.e(2),r.e(78)]).then(r.bind(null,1577))}}),overlayMarathon:Object(n.b)({loader:function(){return Promise.all([r.e(2),r.e(77)]).then(r.bind(null,1576))}})},setup:function(e,t){var r=Object(n.i)("1"),c=Object(n.i)(Object(o.cloneDeep)(e.item)),v=Object(n.i)(0),content=Object(n.i)(null),h=Object(n.i)(0),d=Object(n.i)(!0),_=Object(n.i)(Date.now());Object(n.p)(d,(function(e){t.emit("update:valid",e)}));var f=Object(n.i)(["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","blue-grey","grey"]),m=Object(n.a)((function(){var e,t=["lighten-4","lighten-3","lighten-2","lighten-1","","darken-1","darken-2","darken-3","darken-4","accent-2","accent-3","accent-4"],output=[],r=l(f.value);try{for(r.s();!(e=r.n()).done;){var n,o=e.value,c=l(t);try{for(c.s();!(n=c.n()).done;){var s=n.value;output.push("".concat(o," ").concat(s).trim())}}catch(e){c.e(e)}finally{c.f()}}}catch(e){r.e(e)}finally{r.f()}return output}));Object(n.p)(h,(function(e){c.value&&(c.value.options.color=m.value[e])})),Object(n.p)(r,(function(e){"3"===e&&(x(),y())}));var x=function(){if(c.value){var e=c.value.options.color;h.value=m.value.indexOf(e)}else h.value=0},y=function e(){content.value&&0!==content.value.$el.clientWidth?v.value=content.value.$el.clientWidth:setTimeout((function(){return e()}),1)};return Object(n.p)(c,(function(e){t.emit("update:item",e)}),{deep:!0}),{stepper:r,clonedItem:c,typeItems:[{text:"Run Command",value:"command"},{text:"+/-/= Custom Variable",value:"customvariable"},{text:"Randomizer",value:"randomizer"},{text:"Countdown overlay or countdown in group overlay",value:"overlayCountdown"},{text:"Stopwatch overlay or stopwatch in group overlay",value:"overlayStopwatch"},{text:"Marathon overlay or marathon in group overlay",value:"overlayMarathon"}],canvasWidth:v,content:content,colorsList:m,colorIdx:h,isSetupValid:d,timestamp:_}}}),h=r(45),d=r(44),_=r.n(d),f=r(43),m=r(27),x=r(30),y=r(974),w=r(142),k=r(68),O=r(266),j=r(794),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-stepper",{attrs:{vertical:""},model:{value:e.stepper,callback:function(t){e.stepper=t},expression:"stepper"}},[r("v-stepper-step",{attrs:{complete:e.stepper>1,step:"1",editable:""}},[e._v("\n      Select type of action button\n    ")]),e._v(" "),r("v-stepper-content",{attrs:{step:1}},[r("v-select",{attrs:{label:"Action type",items:e.typeItems},model:{value:e.clonedItem.type,callback:function(t){e.$set(e.clonedItem,"type",t)},expression:"clonedItem.type"}})],1),e._v(" "),r("v-stepper-step",{attrs:{complete:e.stepper>1,step:"2",editable:"",rules:[function(){return e.isSetupValid}]}},[e._v("\n      Setup\n    ")]),e._v(" "),r("v-stepper-content",{attrs:{step:2,va:""}},[r(e.clonedItem.type,{key:"step-2-"+e.timestamp,tag:"component",attrs:{item:e.clonedItem,valid:e.isSetupValid},on:{"update:item":function(t){e.clonedItem=t},"update:valid":function(t){e.isSetupValid=t}}})],1),e._v(" "),r("v-stepper-step",{attrs:{complete:e.stepper>3,step:"3",editable:""}},[e._v("\n      Customize theme\n    ")]),e._v(" "),r("v-stepper-content",{ref:"content",attrs:{step:3}},[r("div",{staticClass:"v-label v-label--active theme--dark pb-1",staticStyle:{"font-size":"12px"}},[e._v("\n        Button color\n      ")]),e._v(" "),r("v-item-group",{attrs:{mandatory:"","active-class":"asd"},model:{value:e.colorIdx,callback:function(t){e.colorIdx=t},expression:"colorIdx"}},[r("v-row",{attrs:{"no-gutters":""}},e._l(e.colorsList,(function(t){return r("v-col",{key:t,attrs:{cols:"1"}},[r("v-item",{scopedSlots:e._u([{key:"default",fn:function(n){var o=n.active,l=n.toggle;return[r("v-card",{staticClass:"d-flex align-center",class:[t],attrs:{dark:"",height:"25"},on:{click:l}},[r("v-scroll-y-transition",[o?r("v-overlay",{attrs:{absolute:"",color:"transparent"}},[r("v-icon",{attrs:{color:"black"}},[e._v("\n                      mdi-check\n                    ")])],1):e._e()],1)],1)]}}],null,!0)})],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;_()(component,{VCard:f.a,VCol:m.a,VIcon:x.a,VItem:y.a,VItemGroup:y.b,VOverlay:w.a,VRow:m.d,VScrollYTransition:k.f,VSelect:O.a,VStepper:j.a,VStepperContent:j.b,VStepperStep:j.e})},794:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return j})),r.d(t,"e",(function(){return k})),r.d(t,"c",(function(){return S})),r.d(t,"d",(function(){return V}));var n=r(0),o=(r(12),r(11),r(14),r(13),r(15),r(2)),l=(r(263),r(264),r(24),r(33),r(8),r(4),r(977),r(134)),c=r(116),v=r(192),h=r(7),d=r(17);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=Object(h.a)(l.b,Object(c.b)("stepper"),v.a).extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,flat:Boolean,vertical:Boolean},data:function(){var data={isBooted:!1,steps:[],content:[],isReverse:!1};return data.internalLazyValue=null!=this.value?this.value:(data[0]||{}).step||1,data},computed:{classes:function(){return f({"v-stepper--flat":this.flat,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},l.b.options.computed.classes.call(this))},styles:function(){return f({},l.b.options.computed.styles.call(this))}},watch:{internalValue:function(e,t){this.isReverse=Number(e)<Number(t),t&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(d.a)("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(e){"v-stepper-step"===e.$options.name?this.steps.push(e):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content.push(e))},unregister:function(e){"v-stepper-step"===e.$options.name?this.steps=this.steps.filter((function(i){return i!==e})):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content=this.content.filter((function(i){return i!==e})))},stepClick:function(e){var t=this;this.$nextTick((function(){return t.internalValue=e}))},updateView:function(){for(var e=this.steps.length;--e>=0;)this.steps[e].toggle(this.internalValue);for(var t=this.content.length;--t>=0;)this.content[t].toggle(this.internalValue,this.isReverse)}},render:function(e){return e(this.tag,{staticClass:"v-stepper",class:this.classes,style:this.styles},this.$slots.default)}}),x=(r(63),r(30)),y=r(41),w=r(86),k=Object(h.a)(y.a,Object(c.a)("stepper","v-stepper-step","v-stepper")).extend().extend({name:"v-stepper-step",directives:{ripple:w.a},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(e){return!0!==e()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(e){e.stopPropagation(),this.$emit("click",e),this.editable&&this.stepClick(this.step)},genIcon:function(e){return this.$createElement(x.b,e)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var e=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(e,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var e=[];return this.hasError?e.push(this.genIcon(this.errorIcon)):this.complete?this.editable?e.push(this.genIcon(this.editIcon)):e.push(this.genIcon(this.completeIcon)):e.push(String(this.step)),e},keyboardClick:function(e){e.keyCode===n.A.space&&this.click(e)},toggle:function(e){this.isActive=e.toString()===this.step.toString(),this.isInactive=Number(e)<Number(this.step)}},render:function(e){return e("div",{attrs:{tabindex:this.editable?0:-1},staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click,keydown:this.keyboardClick}},[this.genStep(),this.genLabel()])}}),O=(r(46),r(68)),j=Object(h.a)(Object(c.a)("stepper","v-stepper-content","v-stepper")).extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){return(this.$vuetify.rtl?!this.isReverse:this.isReverse)?O.j:O.k},styles:function(){return this.isVertical?{height:Object(n.i)(this.height)}:{}}},watch:{isActive:function(e,t){e&&null==t?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(e){this.isActive&&"height"===e.propertyName&&(this.height="auto")},enter:function(){var e=this,t=0;requestAnimationFrame((function(){t=e.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return e.isActive&&(e.height=t||"auto")}),450)},leave:function(){var e=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return e.height=0}),10)},toggle:function(e,t){this.isActive=e.toString()===this.step.toString(),this.isReverse=t}},render:function(e){var t={staticClass:"v-stepper__content"},r={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(t.directives=[{name:"show",value:this.isActive}]);var n=e("div",r,[this.$slots.default]),content=e("div",t,[n]);return e(this.computedTransition,{on:this.$listeners},[content])}}),S=Object(n.k)("v-stepper__header"),V=Object(n.k)("v-stepper__items")},974:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return d.b}));var n=r(2),o=r(117),l=r(7),c=r(17),v=r(3).default.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(n.a)({},this.activeClass,this.isActive)}),element):(Object(c.c)("v-item should only contain a single element",this),element)):(Object(c.c)("v-item is missing a default scopedSlot",this),null);var element}}),h=Object(l.a)(v,Object(o.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),d=r(88);d.b},977:function(e,t,r){var content=r(978);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("056db523",content,!0,{sourceMap:!1})},978:function(e,t,r){var n=r(19)((function(i){return i[1]}));n.push([e.i,".theme--light.v-stepper{background:#fff}.theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:rgba(0,0,0,.38)}.theme--light.v-stepper .v-stepper__step__step,.theme--light.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--light.v-stepper .v-stepper__header .v-divider{border-color:rgba(0,0,0,.12)}.theme--light.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--editable:hover{background:rgba(0,0,0,.06)}.theme--light.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--complete .v-stepper__label{color:rgba(0,0,0,.87)}.theme--light.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:rgba(0,0,0,.54)}.theme--light.v-stepper .v-stepper__label{color:rgba(0,0,0,.38)}.theme--light.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--light.v-stepper .v-stepper__label small{color:rgba(0,0,0,.6)}.v-application--is-ltr .theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid rgba(0,0,0,.12)}.v-application--is-rtl .theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-right:1px solid rgba(0,0,0,.12)}.theme--dark.v-stepper{background:#303030}.theme--dark.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:hsla(0,0%,100%,.5)}.theme--dark.v-stepper .v-stepper__step__step,.theme--dark.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--dark.v-stepper .v-stepper__header .v-divider{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--editable:hover{background:hsla(0,0%,100%,.06)}.theme--dark.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--complete .v-stepper__label{color:hsla(0,0%,100%,.87)}.theme--dark.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:hsla(0,0%,100%,.75)}.theme--dark.v-stepper .v-stepper__label{color:hsla(0,0%,100%,.5)}.theme--dark.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--dark.v-stepper .v-stepper__label small{color:hsla(0,0%,100%,.7)}.v-application--is-ltr .theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid hsla(0,0%,100%,.12)}.v-application--is-rtl .theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-right:1px solid hsla(0,0%,100%,.12)}.v-sheet.v-stepper{border-radius:4px}.v-sheet.v-stepper:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-stepper.v-sheet--shaped{border-radius:24px 4px}.v-stepper{border-radius:4px;overflow:hidden;position:relative}.v-stepper__header{height:72px;align-items:stretch;display:flex;flex-wrap:wrap;justify-content:space-between;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-stepper__header .v-divider{align-self:center;margin:0 -16px}.v-stepper__items{position:relative;overflow:hidden}.v-stepper__step__step{align-items:center;border-radius:50%;display:inline-flex;font-size:.75rem;justify-content:center;height:24px;min-width:24px;width:24px;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-application--is-ltr .v-stepper__step__step{margin-right:8px}.v-application--is-rtl .v-stepper__step__step{margin-left:8px}.v-stepper__step__step .v-icon.v-icon{font-size:1.25rem}.v-stepper__step__step .v-icon.v-icon.v-icon--svg{height:1.25rem;width:1.25rem}.v-stepper__step{align-items:center;display:flex;flex-direction:row;padding:24px;position:relative}.v-stepper__step--active .v-stepper__label{transition:.3s cubic-bezier(.4,0,.6,1)}.v-stepper__step--editable{cursor:pointer}.v-stepper__step.v-stepper__step--error .v-stepper__step__step{background:transparent;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__step__step .v-icon{font-size:1.5rem;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__label{color:inherit;text-shadow:none;font-weight:500}.v-stepper__step.v-stepper__step--error .v-stepper__label small{color:inherit}.v-stepper__label{display:block;flex-grow:1;line-height:1}.v-application--is-ltr .v-stepper__label{text-align:left}.v-application--is-rtl .v-stepper__label{text-align:right}.v-stepper__label small{display:block;font-size:.75rem;font-weight:300;text-shadow:none}.v-stepper__wrapper{overflow:hidden;transition:none}.v-stepper__content{top:0;padding:24px 24px 16px;flex:1 0 auto;width:100%}.v-stepper__content>.v-btn{margin:24px 8px 8px 0}.v-stepper--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-stepper--is-booted .v-stepper__content,.v-stepper--is-booted .v-stepper__wrapper{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-stepper--vertical{padding-bottom:36px}.v-stepper--vertical .v-stepper__content{width:auto}.v-application--is-ltr .v-stepper--vertical .v-stepper__content{padding:16px 60px 16px 23px}.v-application--is-rtl .v-stepper--vertical .v-stepper__content{padding:16px 23px 16px 60px}.v-application--is-ltr .v-stepper--vertical .v-stepper__content{margin:-8px -36px -16px 36px}.v-application--is-rtl .v-stepper--vertical .v-stepper__content{margin:-8px 36px -16px -36px}.v-stepper--vertical .v-stepper__step{padding:24px 24px 16px}.v-application--is-ltr .v-stepper--vertical .v-stepper__step__step{margin-right:12px}.v-application--is-rtl .v-stepper--vertical .v-stepper__step__step{margin-left:12px}.v-stepper--alt-labels .v-stepper__header{height:auto}.v-stepper--alt-labels .v-stepper__header .v-divider{margin:35px -67px 0;align-self:flex-start}.v-stepper--alt-labels .v-stepper__step{flex-direction:column;justify-content:flex-start;align-items:center;flex-basis:175px}.v-stepper--alt-labels .v-stepper__step small{text-align:center}.v-stepper--alt-labels .v-stepper__step__step{margin-bottom:11px;margin-left:0;margin-right:0}@media only screen and (max-width:959.98px){.v-stepper:not(.v-stepper--vertical) .v-stepper__label{display:none}.v-stepper:not(.v-stepper--vertical) .v-stepper__step__step{margin-left:0;margin-right:0}}",""]),n.locals={},e.exports=n}}]);
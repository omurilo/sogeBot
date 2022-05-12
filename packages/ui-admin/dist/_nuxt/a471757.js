(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{774:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(12),n(11),n(8),n(4),n(14),n(13),n(15);var l=n(2),o=(n(24),n(46),n(775),n(104)),r=n(7);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d=Object(r.a)(o.a).extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null==(n=t.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){o.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},775:function(e,t,n){var content=n(776);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("b5bdd630",content,!0,{sourceMap:!1})},776:function(e,t,n){var l=n(19)((function(i){return i[1]}));l.push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),l.locals={},e.exports=l},993:function(e,t,n){"use strict";n.r(t);n(1),n(40),n(51),n(11),n(52),n(55);var l=n(26),o=(n(81),n(46),n(31),n(33),n(25),n(69),n(37),n(39),n(4),n(71),n(34),n(47),n(12),n(5)),r=n(771),v=n(21),d=n(49),c=n.n(d);function x(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,l=function(){};return{s:l,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,v=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){v=!0,o=e},f:function(){try{r||null==n.return||n.return()}finally{if(v)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function m(e){return void 0===e}var h=Object(o.c)({props:{value:Object,readonly:Boolean},setup:function(e,t){var n,text=Object(o.i)("This message should be said by TTS to test your settings."),d=Object(o.i)({loaded:r.ButtonStates.progress}),f=Object(o.i)(0),h=Object(o.i)(null!==(n=e.value)&&void 0!==n?n:{voice:0===Object(o.o)().state.configuration.core.tts.service?"UK English Female":1===Object(o.o)().state.configuration.core.tts.service?"en-US-Wavenet-A":"(pt-BR) - Male - Ricardo",volume:1,rate:1,pitch:1}),_=Object(o.i)([]);function y(){void 0!==window.responsiveVoice?(window.responsiveVoice.init(),_.value=window.responsiveVoice.getVoices().map((function(e){return{text:e.name,value:e.name}})),d.value.loaded=r.ButtonStates.success):setTimeout((function(){return y()}),200)}function w(){return(w=Object(l.a)(regeneratorRuntime.mark((function e(){var t,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=x(text.value.split("/ ")),e.prev=1,l=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.value,e.next=3,new Promise((function(e){if(0===t.trim().length)setTimeout((function(){return e()}),500);else{(n=h.value)&&Object.keys(n).includes("voice")&&h.value?0===f.value?window.responsiveVoice.speak(t.trim(),h.value.voice,{rate:h.value.rate,pitch:h.value.pitch,volume:h.value.volume,onend:function(){return setTimeout((function(){return e()}),500)}}):1===f.value?Object(v.getSocket)("/core/tts").emit("google::speak",{rate:h.value.rate,pitch:h.value.pitch,volume:h.value.volume,voice:h.value.voice,text:text.value},(function(e,t){e&&console.error(e),new Audio("data:audio/mp3;base64,"+t).play()})):2===f.value&&Object(v.getSocket)("/core/tts").emit("streamlabs::speak",{voice:h.value.voice,text:text.value},(function(e,t){if(e)return console.error(e);new Audio(t).play()})):console.error("You should not see this message, speak should be disabled in this extension panel - please log a bug")}var n}));case 3:case"end":return e.stop()}}),e)})),t.s();case 4:if((n=t.n()).done){e.next=8;break}return e.delegateYield(l(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),t.e(e.t1);case 13:return e.prev=13,t.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))).apply(this,arguments)}return Object(o.f)((function(){d.value.loaded=r.ButtonStates.progress;var e=Object(o.o)();-1===e.state.configuration.core.tts.service||0===e.state.configuration.core.tts.service&&0===e.state.configuration.core.tts.responsiveVoiceKey.length||1===e.state.configuration.core.tts.service&&0===e.state.configuration.core.tts.googlePrivateKey.length?d.value.loaded=r.ButtonStates.fail:0===e.state.configuration.core.tts.service?(f.value=0,y()):1===e.state.configuration.core.tts.service?(f.value=1,_.value=e.state.configuration.core.tts.googleVoices,d.value.loaded=r.ButtonStates.success):2===e.state.configuration.core.tts.service&&(f.value=2,_.value=e.state.configuration.core.tts.streamlabsVoices,d.value.loaded=r.ButtonStates.success)})),Object(o.p)(h,(function(e){t.emit("input",e)}),{deep:!0}),0===Object(o.o)().state.configuration.core.tts.service&&Object(o.l)({script:[{hid:"responsivevoice",src:"https://code.responsivevoice.org/responsivevoice.js?key="+Object(o.o)().state.configuration.core.tts.responsiveVoiceKey}]}),{voices:_,isUndefined:m,model:h,state:d,text:text,service:f,translate:c.a,ButtonStates:r.ButtonStates,speak:function(){return w.apply(this,arguments)}}},head:{}}),_=h,y=n(45),w=n(44),k=n.n(w),O=n(380),S=n(381),j=n(48),V=n(267),T=n(763),A=n(30),P=n(142),U=n(143),I=n(269),$=n(140),B=n(774),component=Object(y.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-expansion-panel",{attrs:{readonly:e.readonly}},[n("v-expansion-panel-header",[e._v("\n    "+e._s(e.translate("registry.alerts.tts.setting"))+"\n  ")]),e._v(" "),n("v-expansion-panel-content",[e.state.loaded===e.ButtonStates.progress?n("v-overlay",{attrs:{absolute:""}},[n("v-progress-circular",{staticClass:"text-center",attrs:{indeterminate:""}})],1):e.state.loaded===e.ButtonStates.success?n("div",[e.isUndefined(e.model.enabled)?e._e():n("v-checkbox",{attrs:{label:e.translate("registry.alerts.enabled")},model:{value:e.model.enabled,callback:function(t){e.$set(e.model,"enabled",t)},expression:"model.enabled"}}),e._v(" "),e.isUndefined(e.model.voice)?e._e():n("v-autocomplete",{attrs:{label:e.translate("registry.alerts.voice"),items:e.voices},model:{value:e.model.voice,callback:function(t){e.$set(e.model,"voice",t)},expression:"model.voice"}}),e._v(" "),e.isUndefined(e.model.volume)||2===e.service?e._e():n("v-slider",{attrs:{label:e.translate("registry.alerts.volume"),min:"0",max:"1",step:"0.01","thumb-size":0,"thumb-label":"always"},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var l=t.value;return[n("div",{staticStyle:{transform:"translateY(-8px)"}},[e._v("\n            "+e._s(Number(100*l).toFixed(0)+"%")+"\n          ")])]}}],null,!1,2739770866),model:{value:e.model.volume,callback:function(t){e.$set(e.model,"volume",e._n(t))},expression:"model.volume"}}),e._v(" "),e.isUndefined(e.model.rate)||2===e.service?e._e():n("v-slider",{attrs:{label:e.translate("registry.alerts.rate"),min:"0",max:0===e.service?1.5:4,step:"0.1","thumb-size":0,"thumb-label":"always"},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var l=t.value;return[n("div",{staticStyle:{transform:"translateY(-8px)"}},[e._v("\n            "+e._s(l)+"\n          ")])]}}],null,!1,1782250359),model:{value:e.model.rate,callback:function(t){e.$set(e.model,"rate",e._n(t))},expression:"model.rate"}}),e._v(" "),e.isUndefined(e.model.pitch)||2===e.service?e._e():n("v-slider",{attrs:{label:e.translate("registry.alerts.pitch"),min:0===e.service?0:-20,max:0===e.service?2:20,step:0===e.service?.1:1,"thumb-size":0,"thumb-label":"always"},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var l=t.value;return[n("div",{staticStyle:{transform:"translateY(-8px)"}},[e._v("\n            "+e._s(l)+"\n          ")])]}}],null,!1,1782250359),model:{value:e.model.pitch,callback:function(t){e.$set(e.model,"pitch",e._n(t))},expression:"model.pitch"}}),e._v(" "),e.isUndefined(e.model.minAmountToPlay)?e._e():n("v-text-field",{attrs:{label:e.translate("registry.alerts.minAmountToPlay.name"),type:"number",min:"0"},model:{value:e.model.minAmountToPlay,callback:function(t){e.$set(e.model,"minAmountToPlay",t)},expression:"model.minAmountToPlay"}}),e._v(" "),e.isUndefined(e.model.skipUrls)?e._e():n("v-checkbox",{attrs:{label:e.translate("registry.alerts.skipUrls")},model:{value:e.model.skipUrls,callback:function(t){e.$set(e.model,"skipUrls",t)},expression:"model.skipUrls"}}),e._v(" "),e.isUndefined(e.model.keepAlertShown)?e._e():n("v-checkbox",{attrs:{label:e.translate("registry.alerts.keepAlertShown")},model:{value:e.model.keepAlertShown,callback:function(t){e.$set(e.model,"keepAlertShown",t)},expression:"model.keepAlertShown"}}),e._v(" "),e._t("append"),e._v(" "),e.isUndefined(e.model.voice)?e._e():n("v-textarea",{attrs:{label:e.translate("registry.alerts.test"),"auto-grow":"",rows:"1"},scopedSlots:e._u([{key:"append",fn:function(){return[n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.speak()}}},[n("v-icon",[e._v("mdi-play")])],1)]},proxy:!0}],null,!1,2726491292),model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],2):n("v-alert",{staticClass:"ma-0",attrs:{text:"",color:"info",border:"left"}},[e._v("\n      TTS is not properly set, go to "),n("nuxt-link",{attrs:{to:"/settings/modules/core/tts"}},[e._v("\n        TTS settings\n      ")]),e._v(" and configure.\n    ")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;k()(component,{VAlert:O.a,VAutocomplete:S.a,VBtn:j.a,VCheckbox:V.a,VExpansionPanel:T.a,VExpansionPanelContent:T.b,VExpansionPanelHeader:T.c,VIcon:A.a,VOverlay:P.a,VProgressCircular:U.a,VSlider:I.a,VTextField:$.a,VTextarea:B.a})}}]);
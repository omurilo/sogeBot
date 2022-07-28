(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1501:function(e,t,n){"use strict";n.r(t);n(28);var r=n(49),l=n.n(r),o=n(1),d=Object(o.h)({props:{settings:Object},setup:function(e,t){var n=Object(o.J)(null),r=Object(o.J)(e.settings);Object(o.Y)(r,(function(e){t.emit("input",e)}),{deep:!0});var d=Object(o.b)((function(){return"".concat(window.location.origin,"/credentials/oauth/tokens")})),v=Object(o.b)((function(){var e="scope=channel:edit:commercial channel:moderate chat:edit chat:read clips:edit user:edit:broadcast user:read:broadcast whispers:edit whispers:read channel:manage:broadcast",t=r.value.general.tokenServiceCustomClientId[0],n=r.value.general.tokenServiceCustomClientSecret[0];return"SogeBot Token Generator"===r.value.general.tokenService[0]?"https://twitch-token-generator.soge.workers.dev/request-tokens?".concat(e):"".concat(d.value,"?").concat(e,"&clientId=").concat(t,"&clientSecret=").concat(n)})),c=Object(o.b)((function(){if(!r.value)return"";var e="scope=channel:edit:commercial channel:moderate channel:read:hype_train channel:read:redemptions channel:read:subscriptions channel_editor chat:edit chat:read moderation:read user:read:broadcast channel:manage:broadcast user:edit:broadcast",t=r.value.general.tokenServiceCustomClientId[0],n=r.value.general.tokenServiceCustomClientSecret[0];return"SogeBot Token Generator"===r.value.general.tokenService[0]?"https://twitch-token-generator.soge.workers.dev/request-tokens?".concat(e):"".concat(d.value,"?").concat(e,"&clientId=").concat(t,"&clientSecret=").concat(n)}));return{_settings:r,translate:l.a,tab:n,redirectUri:d,botUrl:v,broadcasterUrl:c}}}),v=n(45),c=n(44),x=n.n(c),f=n(379),_=n(48),h=n(43),m=n(68),k=n(267),w=n(50),y=n(140),S=n(773),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("v-tabs",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab",[e._v(e._s(e.translate("categories.general")))]),e._v(" "),n("v-tab",[e._v(e._s(e.translate("categories.bot")))]),e._v(" "),n("v-tab",[e._v(e._s(e.translate("categories.channel")))])],1),e._v(" "),n("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab-item",{attrs:{eager:""}},[n("v-card",[n("v-card-text",[n("v-select",{staticClass:"pb-2 mb-2",attrs:{items:["SogeBot Token Generator","Own Twitch App"],label:"Token Generator",hint:"If you change token generator, you need to re-do all tokens!","persistent-hint":""},model:{value:e._settings.general.tokenService[0],callback:function(t){e.$set(e._settings.general.tokenService,0,t)},expression:"_settings.general.tokenService[0]"}}),e._v(" "),n("v-expand-transition",["Own Twitch App"===e._settings.general.tokenService[0]?n("div",[n("v-card",[n("v-card-text",[n("v-alert",{staticClass:"mt-2",attrs:{color:"info",text:""}},[n("ol",[n("li",[e._v("Go to "),n("a",{attrs:{href:"https://dev.twitch.tv/console/apps",target:"_blank"}},[e._v("https://dev.twitch.tv/console/apps")]),e._v(" and register your app")]),e._v(" "),n("li",[e._v("You can choose any "),n("strong",[e._v("name")]),e._v(" of app you want")]),e._v(" "),n("li",[e._v("Set "),n("strong",[e._v("oauth redirect")]),e._v(" to your "+e._s(e.redirectUri))]),e._v(" "),n("li",[e._v("Pick Application Integration for "),n("strong",[e._v("category")]),e._v(" and create")]),e._v(" "),n("li",[e._v("After creation copy clientId and generate clientSecret")])])]),e._v(" "),n("v-text-field",{attrs:{label:"Client ID","hide-details":"auto"},model:{value:e._settings.general.tokenServiceCustomClientId[0],callback:function(t){e.$set(e._settings.general.tokenServiceCustomClientId,0,t)},expression:"_settings.general.tokenServiceCustomClientId[0]"}}),e._v(" "),n("v-text-field",{attrs:{label:"Client Secret","hide-details":"auto",type:"password","persistent-hint":"",hint:"Never share your Client Secret!"},model:{value:e._settings.general.tokenServiceCustomClientSecret[0],callback:function(t){e.$set(e._settings.general.tokenServiceCustomClientSecret,0,t)},expression:"_settings.general.tokenServiceCustomClientSecret[0]"}})],1)],1)],1):e._e()]),e._v(" "),n("v-textarea",{attrs:{"auto-grow":"",outlined:"","persistent-hint":"",label:e.translate("core.oauth.settings.generalOwners"),value:e._settings.general.generalOwners[0].filter(String).join("\n"),hint:e.translate("one-record-per-line")},on:{input:function(t){e._settings.general.generalOwners=[t.split("\n").filter(String),""]}}})],1)],1)],1),e._v(" "),n("v-tab-item",{attrs:{eager:""}},[n("v-card",[n("v-card-text",[n("v-text-field",{attrs:{label:e.translate("core.oauth.settings.botAccessToken"),type:"password"},model:{value:e._settings.bot.botAccessToken[0],callback:function(t){e.$set(e._settings.bot.botAccessToken,0,t)},expression:"_settings.bot.botAccessToken[0]"}}),e._v(" "),n("v-text-field",{attrs:{label:e.translate("core.oauth.settings.botRefreshToken"),type:"password"},model:{value:e._settings.bot.botRefreshToken[0],callback:function(t){e.$set(e._settings.bot.botRefreshToken,0,t)},expression:"_settings.bot.botRefreshToken[0]"}}),e._v(" "),n("v-text-field",{attrs:{label:"Client ID"},model:{value:e._settings.bot.botClientId[0],callback:function(t){e.$set(e._settings.bot.botClientId,0,t)},expression:"_settings.bot.botClientId[0]"}}),e._v(" "),n("v-text-field",{attrs:{label:e.translate("core.oauth.settings.botUsername"),disabled:""},model:{value:e._settings.bot.botUsername[0],callback:function(t){e.$set(e._settings.bot.botUsername,0,t)},expression:"_settings.bot.botUsername[0]"}}),e._v(" "),n("v-btn",{attrs:{href:e.botUrl,target:"_blank"}},[e._v("\n            "+e._s(e.translate("commons.generate"))+"\n          ")])],1)],1)],1),e._v(" "),n("v-tab-item",{attrs:{eager:""}},[n("v-card",[n("v-card-text",[n("v-text-field",{attrs:{label:e.translate("core.oauth.settings.channelAccessToken"),type:"password"},model:{value:e._settings.broadcaster.broadcasterAccessToken[0],callback:function(t){e.$set(e._settings.broadcaster.broadcasterAccessToken,0,t)},expression:"_settings.broadcaster.broadcasterAccessToken[0]"}}),e._v(" "),n("v-text-field",{attrs:{label:e.translate("core.oauth.settings.channelRefreshToken"),type:"password"},model:{value:e._settings.broadcaster.broadcasterRefreshToken[0],callback:function(t){e.$set(e._settings.broadcaster.broadcasterRefreshToken,0,t)},expression:"_settings.broadcaster.broadcasterRefreshToken[0]"}}),e._v(" "),n("v-text-field",{attrs:{label:"Client ID"},model:{value:e._settings.broadcaster.broadcasterClientId[0],callback:function(t){e.$set(e._settings.broadcaster.broadcasterClientId,0,t)},expression:"_settings.broadcaster.broadcasterClientId[0]"}}),e._v(" "),n("v-text-field",{attrs:{label:e.translate("core.oauth.settings.channelUsername"),disabled:""},model:{value:e._settings.broadcaster.broadcasterUsername[0],callback:function(t){e.$set(e._settings.broadcaster.broadcasterUsername,0,t)},expression:"_settings.broadcaster.broadcasterUsername[0]"}}),e._v(" "),n("v-btn",{attrs:{href:e.broadcasterUrl,target:"_blank"}},[e._v("\n            "+e._s(e.translate("commons.generate"))+"\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VAlert:f.a,VBtn:_.a,VCard:h.a,VCardText:h.d,VExpandTransition:m.a,VSelect:k.a,VTab:w.a,VTabItem:w.b,VTabs:w.c,VTabsItems:w.d,VTextField:y.a,VTextarea:S.a})},773:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n(12),n(11),n(8),n(4),n(14),n(13),n(15);var r=n(2),l=(n(24),n(46),n(774),n(104)),o=n(7);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v=Object(o.a)(l.a).extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},l.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null==(n=t.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){l.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},774:function(e,t,n){var content=n(775);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("b5bdd630",content,!0,{sourceMap:!1})},775:function(e,t,n){var r=n(19)((function(i){return i[1]}));r.push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),r.locals={},e.exports=r}}]);
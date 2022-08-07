(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1499:function(t,e,n){"use strict";n.r(e);var r=n(49),o=n.n(r),c=n(1),l=Object(c.h)({props:{settings:Object},setup:function(t,e){var n=location.origin,r=Object(c.J)(t.settings);return Object(c.Y)(r,(function(t){e.emit("input",t)}),{deep:!0}),{_settings:r,translate:o.a,origin:n}}}),v=n(45),h=n(44),d=n.n(h),_=n(379),w=n(48),f=n(43),m=n(27),x=n(18),y=n(764),S=n(140),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("v-alert",{staticClass:"mt-2",attrs:{color:"info",text:""}},[t._v("For use of EventSub you need to have SSL enabled domain and created Twitch\n      App\n      "),n("ol",[n("li",[t._v("Go to "),n("a",{attrs:{href:"https://dev.twitch.tv/console/apps",target:"_blank"}},[t._v("https://dev.twitch.tv/console/apps")]),t._v("\n          and register your app")]),t._v(" "),n("li",[t._v("You can choose any "),n("strong",[t._v("name")]),t._v(" of app you want")]),t._v(" "),n("li",[t._v("Set "),n("strong",[t._v("oauth redirect")]),t._v(" to your "+t._s(t.origin)+"/credentials/oauth/eventsub")]),t._v(" "),n("li",[t._v("Pick Application Integration for "),n("strong",[t._v("category")]),t._v(" and create")]),t._v(" "),n("li",[t._v("After creation copy clientId and generate clientSecret")]),t._v(" "),n("li",[t._v("Authorize your broadcaster account to enable subscription with your account")])])]),t._v(" "),n("v-text-field",{staticClass:"pb-2",attrs:{label:t.translate("integrations.spotify.settings.clientId"),"hide-details":"auto"},model:{value:t._settings.eventsub.eventSubClientId[0],callback:function(e){t.$set(t._settings.eventsub.eventSubClientId,0,e)},expression:"_settings.eventsub.eventSubClientId[0]"}}),t._v(" "),n("v-text-field",{staticClass:"pb-2",attrs:{label:t.translate("integrations.spotify.settings.clientSecret"),type:"password","hide-details":"auto"},model:{value:t._settings.eventsub.eventSubClientSecret[0],callback:function(e){t.$set(t._settings.eventsub.eventSubClientSecret,0,e)},expression:"_settings.eventsub.eventSubClientSecret[0]"}}),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"auto"}},[n("v-switch",{attrs:{label:"Use unreliable tunneling (works on localhost)"},model:{value:t._settings.eventsub.useTunneling[0],callback:function(e){t.$set(t._settings.eventsub.useTunneling,0,e)},expression:"_settings.eventsub.useTunneling[0]"}})],1),t._v(" "),n("v-col",[n("v-text-field",{staticClass:"pb-2",attrs:{label:t.translate("core.ui.settings.domain.title"),hint:t.translate("core.ui.settings.domain.help"),disabled:t._settings.eventsub.useTunneling[0],"hide-details":"auto"},model:{value:t._settings.eventsub.domain[0],callback:function(e){t.$set(t._settings.eventsub.domain,0,e)},expression:"_settings.eventsub.domain[0]"}})],1)],1),t._v(" "),n("v-alert",{staticClass:"mt-2",attrs:{color:"info",text:""}},[t._v("Authorize by clicking on authorize button. It will then take around ~1\n      minute to subscribe to missing events")]),t._v(" "),n("v-btn",{attrs:{target:"_blank",href:"https://id.twitch.tv/oauth2/authorize?client_id="+t._settings.eventsub.eventSubClientId[0]+"&redirect_uri="+t.origin+"/credentials/oauth/eventsub&response_type=token&force_verify=true&scope=channel:read:hype_train channel:read:polls channel:manage:polls channel:manage:predictions",disabled:0===t._settings.eventsub.eventSubClientId[0].trim().length}},[t._v("Authorize to enable EventSub\n      subscriptions")]),t._v(" "),n("h3",{staticClass:"pt-4 mt-4"},[t._v("Currently subscribed events")]),t._v(" "),n("v-list",{attrs:{dense:""}},t._l(t._settings.eventsub.eventSubEnabledSubscriptions[0],(function(e){return n("v-list-item",{key:e},[n("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAlert:_.a,VBtn:w.a,VCard:f.a,VCardText:f.d,VCol:m.a,VList:x.a,VListItem:x.c,VListItemTitle:x.j,VRow:m.d,VSwitch:y.a,VTextField:S.a})},764:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));n(12),n(11),n(8),n(4),n(14),n(13),n(15);var r=n(110),o=n(2),c=(n(264),n(265),n(488),n(765),n(377)),l=n(83),v=n(144),h=n(68),d=n(315),_=n(0),w=["title"];function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=c.a.extend({name:"v-switch",directives:{Touch:v.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return m(m({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,w));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",m(m({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",m({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",m({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(h.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(d.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===_.A.left&&this.isActive||t.keyCode===_.A.right&&!this.isActive)&&this.onChange()}}})},765:function(t,e,n){var content=n(766);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("bbe90d24",content,!0,{sourceMap:!1})},766:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),r.locals={},t.exports=r}}]);
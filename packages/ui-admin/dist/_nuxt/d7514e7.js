(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{1419:function(t,e,n){"use strict";n.r(e);n(1),n(46);var o=n(5),l=n(49),c=n.n(l),r=n(54),v=Object(o.c)({props:{value:[Object,Array]},setup:function(t,e){var n=Object(o.i)(Date.now()),l=Object(o.i)(Object(r.defaultsDeep)(t.value,{speed:"medium",customTexts:[],social:[],clips:{play:!0,period:"custom",periodValue:31,numOfClips:3,volume:20},text:{lastMessage:"Thanks for watching",lastSubMessage:"~ see you on the next stream ~",streamBy:"Stream by",follow:"Followed by",host:"Hosted by",raid:"Raided by",cheer:"Cheered by",sub:"Subscribed by",resub:"Resubscribed by",subgift:"Subgifts by",subcommunitygift:"Community subgifts by",tip:"Tips by"},show:{follow:!0,host:!0,raid:!0,sub:!0,subgift:!0,subcommunitygift:!0,resub:!0,cheer:!0,clips:!0,tip:!0}}));Object(o.p)([l,n],(function(){Object(r.isEqual)(t.value,l.value)||e.emit("input",l.value)}),{deep:!0,immediate:!0});return{options:l,customTextTypes:[{value:"bigHeader",text:"Big Header"},{value:"header",text:"Header"},{value:"text",text:"Text"},{value:"smallText",text:"Small Text"},{value:"separator",text:"Separator"}],socialTypes:[{value:"mdiDeviantart",text:"DeviantArt"},{value:"mdiDiscord",text:"Discord"},{value:"mdiFacebook",text:"Facebook"},{value:"mdiGithub",text:"GitHub"},{value:"mdiGoogle",text:"Google"},{value:"mdiInstagram",text:"Instagram"},{value:"mdiLinkedin",text:"LinkedIn"},{value:"mdiSonyPlaystation",text:"Playstation"},{value:"mdiPinterest",text:"Pinterest"},{value:"mdiReddit",text:"Reddit"},{value:"mdiSkype",text:"Skype"},{value:"mdiSnapchat",text:"Snapchat"},{value:"mdiSpotify",text:"Spotify"},{value:"mdiSteam",text:"Steam"},{value:"mdiTwitter",text:"Twitter"},{value:"mdiMicrosoftWindows",text:"Windows"},{value:"mdiMicrosoftXbox",text:"XBox"},{value:"mdiYoutube",text:"YouTube"}],translate:c.a,timestamp:n,timestampUpdate:function(){setTimeout((function(){n.value=Date.now()}),100)}}}}),d=n(45),h=n(44),m=n.n(h),x=n(48),f=n(27),w=n(762),_=n(30),y=n(267),k=n(270),S=n(764),C=n(140),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panels",[n("v-expansion-panel",[t._t("default"),t._v(" "),n("v-expansion-panel-header",[t._v("Text")]),t._v(" "),n("v-expansion-panel-content",[n("v-select",{attrs:{label:t.translate("overlays.credits.settings.cCreditsSpeed"),items:["very slow","slow","medium","fast","very fast"]},model:{value:t.options.speed,callback:function(e){t.$set(t.options,"speed",e)},expression:"options.speed"}}),t._v(" "),n("v-text-field",{attrs:{label:t.translate("overlays.credits.settings.cTextLastMessage")},on:{input:function(e){t.options.text.lastMessage=e}},model:{value:t.options.text.lastMessage,callback:function(e){t.$set(t.options.text,"lastMessage",e)},expression:"options.text.lastMessage"}}),t._v(" "),n("v-text-field",{attrs:{label:t.translate("overlays.credits.settings.cTextLastSubMessage")},on:{input:function(e){t.options.text.lastSubMessage=e}},model:{value:t.options.text.lastSubMessage,callback:function(e){t.$set(t.options.text,"lastSubMessage",e)},expression:"options.text.lastSubMessage"}}),t._v(" "),n("v-text-field",{attrs:{label:t.translate("overlays.credits.settings.cTextStreamBy")},on:{input:function(e){t.options.text.streamBy=e}},model:{value:t.options.text.streamBy,callback:function(e){t.$set(t.options.text,"streamBy",e)},expression:"options.text.streamBy"}}),t._v(" "),n("v-text-field",{attrs:{label:t.translate("overlays.credits.settings.cTextFollow")},on:{input:function(e){t.options.text.follow=e}},model:{value:t.options.text.follow,callback:function(e){t.$set(t.options.text,"follow",e)},expression:"options.text.follow"}}),t._v(" "),n("v-text-field",{attrs:{label:t.translate("overlays.credits.settings.cTextHost")},on:{input:function(e){t.options.text.host=e}},model:{value:t.options.text.host,callback:function(e){t.$set(t.options.text,"host",e)},expression:"options.text.host"}}),t._v(" "),n("v-text-field",{attrs:{label:t.translate("overlays.credits.settings.cTextRaid")},on:{input:function(e){t.options.text.raid=e}},model:{value:t.options.text.raid,callback:function(e){t.$set(t.options.text,"raid",e)},expression:"options.text.raid"}}),t._v(" "),n("v-text-field",{attrs:{label:t.translate("overlays.credits.settings.cTextCheer")},on:{input:function(e){t.options.text.cheer=e}},model:{value:t.options.text.cheer,callback:function(e){t.$set(t.options.text,"cheer",e)},expression:"options.text.cheer"}}),t._v(" "),n("v-text-field",{attrs:{label:t.translate("overlays.credits.settings.cTextSub")},on:{input:function(e){t.options.text.sub=e}},model:{value:t.options.text.sub,callback:function(e){t.$set(t.options.text,"sub",e)},expression:"options.text.sub"}}),t._v(" "),n("v-text-field",{attrs:{label:t.translate("overlays.credits.settings.cTextResub")},on:{input:function(e){t.options.text.resub=e}},model:{value:t.options.text.resub,callback:function(e){t.$set(t.options.text,"resub",e)},expression:"options.text.resub"}}),t._v(" "),n("v-text-field",{attrs:{label:t.translate("overlays.credits.settings.cTextSubgift")},on:{input:function(e){t.options.text.subgift=e}},model:{value:t.options.text.subgift,callback:function(e){t.$set(t.options.text,"subgift",e)},expression:"options.text.subgift"}}),t._v(" "),n("v-text-field",{attrs:{label:t.translate("overlays.credits.settings.cTextSubcommunitygift")},on:{input:function(e){t.options.text.subcommunitygift=e}},model:{value:t.options.text.subcommunitygift,callback:function(e){t.$set(t.options.text,"subcommunitygift",e)},expression:"options.text.subcommunitygift"}}),t._v(" "),n("v-text-field",{attrs:{label:t.translate("overlays.credits.settings.cTextTip")},on:{input:function(e){t.options.text.tip=e}},model:{value:t.options.text.tip,callback:function(e){t.$set(t.options.text,"tip",e)},expression:"options.text.tip"}})],1)],2),t._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("Custom texts")]),t._v(" "),n("v-expansion-panel-content",{key:t.timestamp},[t._l(t.options.customTexts,(function(e,o){return n("v-row",{key:o,staticClass:"pa-0 ma-0",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-1"},[n("v-select",{attrs:{dense:"","hide-details":"",filled:"",items:t.customTextTypes},on:{input:function(e){return t.timestampUpdate()}},model:{value:e.type,callback:function(n){t.$set(e,"type",n)},expression:"ct.type"}})],1),t._v(" "),n("v-col",{staticClass:"pa-1"},[n("v-text-field",{attrs:{dense:"","hide-details":"",filled:"",disabled:["bigHeader","separator"].includes(e.type)},on:{blur:function(e){return t.timestampUpdate()}},model:{value:e.left,callback:function(n){t.$set(e,"left",n)},expression:"ct.left"}})],1),t._v(" "),n("v-col",{staticClass:"pa-1"},[n("v-text-field",{attrs:{dense:"","hide-details":"",filled:"",disabled:["separator"].includes(e.type)},on:{blur:function(e){return t.timestampUpdate()}},model:{value:e.middle,callback:function(n){t.$set(e,"middle",n)},expression:"ct.middle"}})],1),t._v(" "),n("v-col",{staticClass:"pa-1"},[n("v-text-field",{attrs:{dense:"","hide-details":"",filled:"",disabled:["bigHeader","separator"].includes(e.type)},on:{blur:function(e){return t.timestampUpdate()}},model:{value:e.right,callback:function(n){t.$set(e,"right",n)},expression:"ct.right"}})],1),t._v(" "),n("v-col",{attrs:{cols:"auto","align-self":"center"}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.options.customTexts.splice(o,1),t.timestampUpdate()}}},[n("v-icon",{attrs:{color:"red"}},[t._v("\n              mdi-delete-forever\n            ")])],1)],1)],1)})),t._v(" "),n("v-btn",{on:{click:function(e){t.options.customTexts.push({type:"bigHeader",left:"",middle:"",right:""}),t.timestampUpdate()}}},[t._v("\n        Add new line\n      ")])],2)],1),t._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("Show")]),t._v(" "),n("v-expansion-panel-content",[n("v-switch",{attrs:{label:t.translate("overlays.credits.settings.cShowFollowers")},model:{value:t.options.show.follow,callback:function(e){t.$set(t.options.show,"follow",e)},expression:"options.show.follow"}}),t._v(" "),n("v-switch",{attrs:{label:t.translate("overlays.credits.settings.cShowHosts")},model:{value:t.options.show.host,callback:function(e){t.$set(t.options.show,"host",e)},expression:"options.show.host"}}),t._v(" "),n("v-switch",{attrs:{label:t.translate("overlays.credits.settings.cShowRaids")},model:{value:t.options.show.raid,callback:function(e){t.$set(t.options.show,"raid",e)},expression:"options.show.raid"}}),t._v(" "),n("v-switch",{attrs:{label:t.translate("overlays.credits.settings.cShowSubscribers")},model:{value:t.options.show.sub,callback:function(e){t.$set(t.options.show,"sub",e)},expression:"options.show.sub"}}),t._v(" "),n("v-switch",{attrs:{label:t.translate("overlays.credits.settings.cShowSubgifts")},model:{value:t.options.show.subgift,callback:function(e){t.$set(t.options.show,"subgift",e)},expression:"options.show.subgift"}}),t._v(" "),n("v-switch",{attrs:{label:t.translate("overlays.credits.settings.cShowSubcommunitygifts")},model:{value:t.options.show.subcommunitygift,callback:function(e){t.$set(t.options.show,"subcommunitygift",e)},expression:"options.show.subcommunitygift"}}),t._v(" "),n("v-switch",{attrs:{label:t.translate("overlays.credits.settings.cShowResubs")},model:{value:t.options.show.resub,callback:function(e){t.$set(t.options.show,"resub",e)},expression:"options.show.resub"}}),t._v(" "),n("v-switch",{attrs:{label:t.translate("overlays.credits.settings.cShowCheers")},model:{value:t.options.show.cheer,callback:function(e){t.$set(t.options.show,"cheer",e)},expression:"options.show.cheer"}}),t._v(" "),n("v-switch",{attrs:{label:t.translate("overlays.credits.settings.cShowClips")},model:{value:t.options.show.clips,callback:function(e){t.$set(t.options.show,"clips",e)},expression:"options.show.clips"}}),t._v(" "),n("v-switch",{attrs:{label:t.translate("overlays.credits.settings.cShowTips")},model:{value:t.options.show.tip,callback:function(e){t.$set(t.options.show,"tip",e)},expression:"options.show.tip"}})],1)],1),t._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("Clips")]),t._v(" "),n("v-expansion-panel-content",[n("v-switch",{attrs:{label:t.translate("overlays.credits.settings.cClipsShouldPlay")},on:{click:function(e){return t.timestampUpdate()}},model:{value:t.options.clips.play,callback:function(e){t.$set(t.options.clips,"play",e)},expression:"options.clips.play"}}),t._v(" "),n("v-slider",{attrs:{label:t.translate("registry.alerts.volume"),min:"0",max:"100",step:"1","thumb-size":0,"thumb-label":"always"},on:{input:function(e){return t.timestampUpdate()}},scopedSlots:t._u([{key:"thumb-label",fn:function(e){var o=e.value;return[n("div",{staticStyle:{transform:"translateY(-8px)"}},[t._v("\n            "+t._s(Number(o).toFixed(0)+"%")+"\n          ")])]}}]),model:{value:t.options.clips.volume,callback:function(e){t.$set(t.options.clips,"volume",t._n(e))},expression:"options.clips.volume"}}),t._v(" "),n("v-select",{attrs:{label:t.translate("overlays.credits.settings.cClipsPeriod"),items:["stream","custom"]},on:{input:function(e){return t.timestampUpdate()}},model:{value:t.options.clips.period,callback:function(e){t.$set(t.options.clips,"period",e)},expression:"options.clips.period"}}),t._v(" "),n("v-text-field",{attrs:{type:"number",label:t.translate("overlays.credits.settings.cClipsCustomPeriodInDays"),min:0},on:{blur:function(e){return t.timestampUpdate()},input:function(e){t.options.clips.periodValue=e}},model:{value:t.options.clips.periodValue,callback:function(e){t.$set(t.options.clips,"periodValue",t._n(e))},expression:"options.clips.periodValue"}}),t._v(" "),n("v-text-field",{attrs:{type:"number",label:t.translate("overlays.credits.settings.cClipsNumOfClips"),min:1},on:{blur:function(e){return t.timestampUpdate()},input:function(e){t.options.clips.numOfClips=e}},model:{value:t.options.clips.numOfClips,callback:function(e){t.$set(t.options.clips,"numOfClips",t._n(e))},expression:"options.clips.numOfClips"}})],1)],1),t._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("Social")]),t._v(" "),n("v-expansion-panel-content",{key:t.timestamp},[t._l(t.options.social,(function(e,o){return n("v-row",{key:o,staticClass:"pa-0 ma-0",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-1"},[n("v-select",{attrs:{dense:"","hide-details":"",filled:"",items:t.socialTypes},on:{input:function(e){return t.timestampUpdate()}},model:{value:e.type,callback:function(n){t.$set(e,"type",n)},expression:"ct.type"}})],1),t._v(" "),n("v-col",{staticClass:"pa-1"},[n("v-text-field",{attrs:{dense:"","hide-details":"",filled:""},on:{blur:function(e){return t.timestampUpdate()}},model:{value:e.text,callback:function(n){t.$set(e,"text",n)},expression:"ct.text"}})],1),t._v(" "),n("v-col",{attrs:{cols:"auto","align-self":"center"}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.options.social.splice(o,1),t.timestampUpdate()}}},[n("v-icon",{attrs:{color:"red"}},[t._v("\n              mdi-delete-forever\n            ")])],1)],1)],1)})),t._v(" "),n("v-btn",{on:{click:function(e){t.options.social.push({type:"mdiFacebook",text:""}),t.timestampUpdate()}}},[t._v("\n        Add new line\n      ")])],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:x.a,VCol:f.a,VExpansionPanel:w.a,VExpansionPanelContent:w.b,VExpansionPanelHeader:w.c,VExpansionPanels:w.d,VIcon:_.a,VRow:f.d,VSelect:y.a,VSlider:k.a,VSwitch:S.a,VTextField:C.a})},764:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));n(12),n(11),n(8),n(4),n(14),n(13),n(15);var o=n(110),l=n(2),c=(n(264),n(265),n(488),n(765),n(377)),r=n(83),v=n(144),d=n(68),h=n(315),m=n(0),x=["title"];function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=c.a.extend({name:"v-switch",directives:{Touch:v.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return w(w({},r.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,x));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",w(w({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",w({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",w({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(d.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(h.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===m.A.left&&this.isActive||t.keyCode===m.A.right&&!this.isActive)&&this.onChange()}}})},765:function(t,e,n){var content=n(766);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("bbe90d24",content,!0,{sourceMap:!1})},766:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),o.locals={},t.exports=o}}]);
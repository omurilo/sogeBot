(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1072:function(t,e,n){var content=n(1073);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("e17d86ae",content,!0,{sourceMap:!1})},1073:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".v-speed-dial{position:relative;z-index:1}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top{top:16px}.v-speed-dial--bottom{bottom:16px}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;top:0;padding:0 16px}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{flex-direction:column-reverse;bottom:100%}.v-speed-dial--direction-right .v-speed-dial__list{flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{flex-direction:row-reverse;right:100%}.v-speed-dial__list{align-items:center;display:flex;justify-content:center;padding:16px 0;position:absolute}.v-speed-dial__list .v-btn{margin:6px}.v-speed-dial:not(.v-speed-dial--is-active) .v-speed-dial__list{pointer-events:none}",""]),o.locals={},t.exports=o},1077:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var o=n(2),l=(n(34),n(274),n(31),n(33),n(1072),n(77)),r=n(125),d=n(386),v=n(127),c=n(7),f=Object(c.a)(r.a,l.a,d.a).extend({name:"v-speed-dial",directives:{ClickOutside:v.a},props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var t;return t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},Object(o.a)(t,"v-speed-dial--direction-".concat(this.direction),!0),Object(o.a)(t,"v-speed-dial--is-active",this.isActive),t}},render:function(t){var e=this,n=[],data={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(data.on.mouseenter=function(){return e.isActive=!0},data.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var o=0;n=(this.$slots.default||[]).map((function(b,i){return!b.tag||void 0===b.componentOptions||"v-btn"!==b.componentOptions.Ctor.options.name&&"v-tooltip"!==b.componentOptions.Ctor.options.name?(b.key=i,b):(o++,t("div",{style:{transitionDelay:.05*o+"s"},key:i},[b]))}))}var l=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},n);return t("div",data,[this.$slots.activator,l])}})},1140:function(t,e,n){var content=n(1397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("088ddaba",content,!0,{sourceMap:!1})},1141:function(t,e,n){var content=n(1399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("7b71fcf2",content,!0,{sourceMap:!1})},1396:function(t,e,n){"use strict";n(1140)},1397:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".simpleChatImage{min-width:32px;min-height:17px;display:inline-block;position:relative}.simpleChatImage .emote{position:absolute;margin-top:50%;transform:translateY(-68%)}",""]),o.locals={},t.exports=o},1398:function(t,e,n){"use strict";n(1141)},1399:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".chat[data-v-c6d2f23a]{margin-bottom:5px}",""]),o.locals={},t.exports=o},1546:function(t,e,n){"use strict";n.r(e);var o=n(1),l=(n(40),n(33),n(51),n(37),n(25),n(11),n(52),n(55),n(39),n(23)),r=n(35),d=(n(24),n(4),n(34),n(47),n(28),n(46),n(497),n(133),n(73),n(119),n(31),n(5)),v=n(21),c=n(49),f=n.n(c),x=n(54),h=n(80);function m(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return r=t.done,t},e:function(t){d=!0,l=t},f:function(){try{r||null==n.return||n.return()}finally{if(d)throw l}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var w=0,y=Object(d.c)({setup:function(){var t=Object(d.i)(Number(localStorage.monitorTab)),e=Object(d.i)(!1);Object(d.p)(t,(function(t){localStorage.monitorTab=String(t)}));var n=Object(d.a)((function(){return location.href.includes("popout")})),dialog=Object(d.i)(!1),c=Object(d.i)([]),_=Object(d.i)("Chat"),y=Object(d.i)("true"===localStorage.showJoins),O=Object(d.i)("true"===localStorage.showParts),j=Object(d.i)(""),k=Object(d.i)(600),S=Object(d.i)(""),C=Object(d.i)(null),P=Object(d.i)(0),T=Object(d.i)([]),I=Object(d.a)((function(){var t="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname,e="https:"===window.location.protocol,n=["","443"].includes(window.location.port)&&"https:"===window.location.protocol;return t||e&&n})),M=Object(d.i)([]),A=Object(d.a)((function(){return"https://twitch.tv/embed/"+S.value+"/chat?darkpopout&parent="+window.location.hostname})),H=Object(d.a)((function(){return"".concat(window.location.protocol,"//player.twitch.tv/?channel=").concat(S.value,"&autoplay=true&muted=true&parent=").concat(window.location.hostname)}));function V(){var t,e=(null===(t=document.getElementById("c7eff6a7-dc62-4c0b-bad6-90df9d5b605f"))||void 0===t?void 0:t.offsetTop)||0,n=61+(O.value||y.value?200:0),o=window.innerHeight-e-n;k.value=Math.max(o,O.value||y.value?300:500)}Object(d.p)(y,(function(t){localStorage.showJoins=String(t),V()})),Object(d.p)(O,(function(t){localStorage.showParts=String(t),V()})),Object(d.f)((function(){setInterval((function(){return V()}),100),localStorage.simpleChatMessages&&localStorage.simpleChatMessagesUpdatedAt&&Date.now()-Number(localStorage.simpleChatMessagesUpdatedAt)<432e5&&(M.value=JSON.parse(localStorage.simpleChatMessages),Object(o.t)((function(){C.value.scroll(0,Number.MAX_SAFE_INTEGER)}))),w=window.setInterval((function(){N()}),6e4),Object(v.getSocket)("/widgets/chat").emit("room",(function(t,e){if(t)return Object(h.a)(t);S.value=e,N()})),Object(v.getSocket)("/widgets/chat").on("message",(function(data){for(M.value=[].concat(Object(r.a)(M.value),[data]);M.value.length>1e3;)M.value.shift();localStorage.simpleChatMessages=JSON.stringify(M.value),localStorage.simpleChatMessagesUpdatedAt=String(Date.now()),Object(o.t)((function(){C.value.scroll(0,Number.MAX_SAFE_INTEGER)}))})),Object(v.getSocket)("/widgets/joinpart").on("joinpart",(function(data){for(var t=function(){var t=Object(l.a)(n[e],2),o=t[0],r=t[1];c.value.find((function(t){return t.username===r}))||c.value.push({username:("join"===data.type?"+":"-")+r,timestamp:Date.now()+Number(o)})},e=0,n=Object.entries(data.users);e<n.length;e++)t();c.value=Object(x.chunk)(c.value.sort((function(a,b){return a.timestamp>b.timestamp?-1:a.timestamp<b.timestamp?1:0})),50)[0]||[]}))})),Object(d.g)((function(){clearInterval(w)}));var N=function(){S.value.length>0&&Object(v.getSocket)("/widgets/chat").emit("viewers",(function(t,data){if(t)return console.error("Server error",t);var e,n=[],o=m(Object.entries(data.chatters).map((function(t){return t[1]})));try{for(o.s();!(e=o.n()).done;){var l=e.value;n.push(l)}}catch(t){o.e(t)}finally{o.f()}T.value=Object(x.sortedUniq)(Object(x.flatten)(n))}))},D=Object(d.a)((function(){return void 0!==localStorage.simpleChat}));return{isHttps:I,chatUrl:A,messages:M,videoUrl:H,room:S,show:_,chatters:T,dialog:dialog,message:j,timestamp:P,showJoins:y,showParts:O,height:k,list:c,joinChat:function(){Object(v.getSocket)("/").emit("joinBot")},leaveChat:function(){Object(v.getSocket)("/").emit("leaveBot")},sendMessage:function(){j.value.length>0&&Object(v.getSocket)("/widgets/chat").emit("chat.message.send",j.value),dialog.value=!1,j.value=""},isPopout:n,tab:t,translate:f.a,chat:C,fab:e,generateColorFromString:function(t){var e=Object(r.a)(t).reduce((function(t,e){return e.charCodeAt(0)+((t<<5)-t)}),0);return"hsl(".concat(e%360,", 80%, 60%)")},simpleChatForced:D}}}),O=(n(1396),n(1398),n(45)),j=n(44),k=n.n(j),S=n(379),C=n(48),P=n(43),T=n(27),I=n(68),M=n(30),A=n(142),H=n(1077),V=n(50),N=n(773),D=n(120),J=n(126),component=Object(O.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{key:t.timestamp,attrs:{id:"c7eff6a7-dc62-4c0b-bad6-90df9d5b605f",width:"100%"}},[n("v-row",{staticClass:"flex-nowrap",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"flex-shrink-1 flex-grow-0",staticStyle:{"min-width":"100px","max-width":"100%"},attrs:{cols:"12"}},[n("v-tabs",{attrs:{height:"36","background-color":"blue-grey darken-4"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",[t._v(t._s(t.translate("widget-title-chat")))]),t._v(" "),n("v-tab",[t._v(t._s(t.translate("widget-title-monitor")))])],1),t._v(" "),n("v-speed-dial",{staticStyle:{right:"2px",top:"-15px"},attrs:{absolute:"",right:"",direction:"bottom",top:""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{color:"blue-grey darken-2",dark:"",fab:"","x-small":""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t.fab?n("v-icon",[t._v("\n              mdi-close\n            ")]):n("v-icon",[t._v("\n              mdi-dots-vertical\n            ")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t._v(" "),t.isPopout?t._e():n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{fab:"","x-small":"",color:"secondary"},on:{click:function(e){t.timestamp=Date.now()}}},"v-btn",l,!1),o),[n("v-icon",[t._v("mdi-refresh")])],1)]}}],null,!1,2415801965)},[t._v(" "),n("span",[t._v("Refresh Widget")])]),t._v(" "),t.isPopout?t._e():n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{fab:"","x-small":"",color:t.showJoins?"green lighten-1":"red lighten-1"},on:{click:function(e){e.stopPropagation(),t.showJoins=!t.showJoins}}},"v-btn",l,!1),o),[n("v-icon",[t._v("mdi-account-plus")])],1)]}}],null,!1,1021344163)},[t._v(" "),n("span",[t._v("Show JOINs")])]),t._v(" "),t.isPopout?t._e():n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{fab:"","x-small":"",color:t.showParts?"green lighten-1":"red lighten-1"},on:{click:function(e){e.stopPropagation(),t.showParts=!t.showParts}}},"v-btn",l,!1),o),[n("v-icon",[t._v("mdi-account-minus")])],1)]}}],null,!1,3165682400)},[t._v(" "),n("span",[t._v("Show PARTs")])]),t._v(" "),t.isPopout?t._e():n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{fab:"","x-small":"",color:"secondary"},on:{click:function(e){t.dialog=!0}}},"v-btn",l,!1),o),[n("v-icon",[t._v("mdi-comment-plus")])],1)]}}],null,!1,2893377801)},[t._v(" "),n("span",[t._v("Send bot message")])]),t._v(" "),t.isPopout?t._e():n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{fab:"","x-small":"",color:"orange darken-3"},on:{click:t.joinChat}},"v-btn",l,!1),o),[n("v-icon",[t._v("mdi-login")])],1)]}}],null,!1,89163711)},[t._v(" "),n("span",[t._v("Join chat")])]),t._v(" "),t.isPopout?t._e():n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{fab:"","x-small":"",color:"orange darken-3"},on:{click:t.leaveChat}},"v-btn",l,!1),o),[n("v-icon",[t._v("mdi-logout")])],1)]}}],null,!1,364899215)},[t._v(" "),n("span",[t._v("Leave chat")])]),t._v(" "),t.isPopout?t._e():n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"secondary",fab:"","x-small":"",href:"#/popout/monitor",target:"_blank"}},"v-btn",l,!1),o),[n("v-icon",[t._v("mdi-open-in-new")])],1)]}}],null,!1,879460282)},[t._v(" "),n("span",[t._v("Popout")])])],1)],1)],1),t._v(" "),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",{attrs:{eager:""}},[!t.isHttps||t.simpleChatForced?n("div",{key:t.messages[0]?t.messages[0].timestamp:Date.now(),ref:"chat",staticClass:"py-1",style:{height:t.height+20+"px",overflow:"auto"}},[0===t.messages.length?n("v-alert",{attrs:{text:""}},[t._v("\n          Using simple Twitch Chat Log, because HTTPS is not available. Messages will appear here.\n        ")]):t._e(),t._v(" "),t._l(t.messages,(function(e){return n("p",{key:e.timestamp,staticClass:"chat px-2 my-2"},[n("span",{attrs:{title:new Date(e.timestamp).toLocaleString()}},[t._v(t._s(new Date(e.timestamp).toLocaleTimeString("default",{hour:"2-digit",minute:"2-digit"})))]),t._v(" "),n("strong",{staticClass:"pl-1",style:{color:t.generateColorFromString(e.username)}},[t._v(t._s(e.username))]),t._v(": "),n("span",{staticClass:"pl-1",domProps:{innerHTML:t._s(e.message)}})])}))],2):n("iframe",{staticClass:"enable-transition",attrs:{frameborder:"0",scrolling:"no",src:t.chatUrl,width:"100%",height:t.height+15+"px"}})]),t._v(" "),n("v-tab-item",{attrs:{eager:""}},[t.isHttps?n("iframe",{staticClass:"enable-transition",attrs:{frameborder:"0",scrolling:"no",src:t.videoUrl,width:"100%",height:t.height+15+"px"}}):n("div",{key:t.messages[0]?t.messages[0].timestamp:Date.now(),ref:"chat",style:{height:t.height+20+"px",overflow:"auto"}},[t.isHttps?t._e():n("v-alert",{attrs:{border:"left",color:"red",icon:"mdi-exclamation-thick",text:"",type:"success"}},[t._v("\n          You need to run bot on HTTPS on port 443 with valid certificate for this embed to be working\n        ")])],1)])],1),t._v(" "),n("v-expand-transition",[t.showJoins||t.showParts?n("v-card",[n("v-toolbar",{staticClass:"mb-1",attrs:{color:"blue-grey darken-4",height:"36"}},[n("small",{staticClass:"text-button"},[t._v("Chat Events")])]),t._v(" "),n("v-card-text",{staticClass:"pa-2",staticStyle:{height:"173px","max-height":"173px",overflow:"auto"},domProps:{innerHTML:t._s(t.list.filter((function(e){return!(!t.showJoins||!t.showParts)||(t.showJoins?e.username.startsWith("+"):e.username.startsWith("-"))})).map((function(t){return"<span class='"+(t.username.startsWith("+")?"green--text":"red--text")+" text--lighten-2'>"+t.username.substring(1)+"</span>"})).join(", "))}})],1):t._e()],1),t._v(" "),n("v-overlay",{staticClass:"w-100 px-2",attrs:{color:"black",absolute:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-textarea",{attrs:{"auto-grow":"",rows:"2",counter:"",label:"Bot message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:t.sendMessage}},[t._v("\n      Send message\n    ")]),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1)],1)}),[],!1,null,"c6d2f23a",null);e.default=component.exports;k()(component,{VAlert:S.a,VBtn:C.a,VCard:P.a,VCardText:P.d,VCol:T.a,VExpandTransition:I.a,VIcon:M.a,VOverlay:A.a,VRow:T.d,VSpeedDial:H.a,VTab:V.a,VTabItem:V.b,VTabs:V.c,VTabsItems:V.d,VTextarea:N.a,VToolbar:D.a,VTooltip:J.a})},773:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));n(12),n(11),n(8),n(4),n(14),n(13),n(15);var o=n(2),l=(n(24),n(46),n(774),n(104)),r=n(7);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v=Object(r.a)(l.a).extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},l.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var n;t?e.calculateInputHeight():null==(n=e.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var t=input.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(e,t)+"px"}},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(t){l.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},774:function(t,e,n){var content=n(775);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("b5bdd630",content,!0,{sourceMap:!1})},775:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),o.locals={},t.exports=o}}]);
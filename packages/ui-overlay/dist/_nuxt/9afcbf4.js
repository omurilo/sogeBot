(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1022:function(e,t,o){"use strict";o.r(t);var n=o(3),r=o(12),c=(o(11),o(43),o(38),o(472),o(308),o(70),o(26),o(22),o(27),o(41),o(23),o(47),o(170)),l=o(488),d=o.n(l);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var v={};v.props={opts:Object},v.setup=function(e,t){var o,l,d,v,m=e,h=!!new URL(location.href).searchParams.get("debug"),O=Object(n.ref)(null!==(o=null===(l=m.opts)||void 0===l?void 0:l.showEmoteInOverlayThreshold)&&void 0!==o?o:3),y=Object(n.ref)(null),w=Object(n.ref)(0),j=Object(n.ref)(null!==(d=null===(v=m.opts)||void 0===v?void 0:v.hideEmoteInOverlayAfter)&&void 0!==d?d:30),x=Object(n.ref)(Date.now()),D=Object(n.ref)(Date.now());return setInterval((function(){D.value=Date.now()}),1e3),Object(n.onMounted)((function(){console.log("====== EMOTES COMBO ======"),Object(c.getSocket)("/systems/emotescombo",!0).on("combo",(function(e){console.groupCollapsed("combo update received"),console.log(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},e)),console.groupEnd(),y.value=e.url,w.value=e.count,x.value=Date.now()}))})),{isDebug:h,threshold:O,url:y,count:w,inactivity:j,updatedAt:x,currentTime:D}},v.components=Object.assign({JsonViewer:d.a},v.components);var m=v,h=(o(788),o(95)),component=Object(h.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"emotes"}},[e.isDebug?o("div",[o("json-viewer",{attrs:{value:{threshold:e.threshold,url:e.url,count:e.count,inactivity:e.inactivity,currentTime:e.currentTime,updatedAt:e.updatedAt,isActive:e.currentTime-e.updatedAt<1e3*e.inactivity},boxed:"",copyable:"","expand-depth":10}})],1):e._e(),e._v(" "),o("transition",{attrs:{name:"fade"}},[null!==e.url&&e.count>=e.threshold&&e.currentTime-e.updatedAt<1e3*e.inactivity?o("div",{staticStyle:{padding:"5px"}},[o("div",{staticClass:"emotes-combo-text",staticStyle:{display:"inline-block"}},[e._v("\n        "+e._s(e.count)+"x\n      ")]),e._v(" "),o("img",{attrs:{src:e.url}})]):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports},643:function(e,t,o){var content=o(789);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(111).default)("ba760a46",content,!0,{sourceMap:!1})},788:function(e,t,o){"use strict";o(643)},789:function(e,t,o){var n=o(110)((function(i){return i[1]}));n.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Dongle);"]),n.push([e.i,".fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}#emotes{width:100vw;height:100vh}img{max-width:100vw;max-height:100vh}.debug{z-index:9999;background-color:rgba(0,0,0,.5);position:absolute;color:#fff;padding:1rem}.emotes-combo-text{font-family:Dongle,sans-serif;color:#fff;font-weight:700;text-shadow:0 0 10px #000,1px 1px 1px #000;font-size:2.2rem;padding-left:1rem;padding-right:1rem;transform:translateY(-5px)}",""]),n.locals={},e.exports=n}}]);
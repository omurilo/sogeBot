(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1025:function(e,t,n){"use strict";n.r(t);var r=n(45),o=n(3),c=n(12),l=(n(70),n(28),n(26),n(22),n(27),n(11),n(41),n(23),n(47),n(170)),f=n(326),m=n.n(f),v=n(307);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={};O.props={opts:Object},O.setup=function(e,t){var n=e,c=Object(r.useNuxtApp)().$store,f=Object(o.ref)([]),y=Object(o.ref)(Object(v.defaults)(n.opts,{display:["username","event"],ignore:[],count:5,order:"desc"}));Object(o.onMounted)((function(){console.log("====== EVENTLIST ======"),setTimeout((function(){return O()}),1e3)}));var O=function e(){Object(l.getSocket)("/overlays/eventlist",!0).emit("getEvents",{ignore:y.value.ignore,limit:y.value.count},(function(t,data){if(t)return console.error(t);f.value=Object(v.orderBy)(data,"timestamp",y.value.order).map((function(e){var t=JSON.parse(e.values_json);return"resub"===e.event?d(d({},e),{},{summary:t.subCumulativeMonths+"x "+m()("overlays-eventlist-resub")}):"cheer"===e.event?d(d({},e),{},{summary:t.bits+" "+m()("overlays-eventlist-cheer")}):"tip"===e.event?d(d({},e),{},{summary:Intl.NumberFormat(c.state.configuration.lang,{style:"currency",currency:t.currency}).format(t.amount)}):"rewardredeem"===e.event?d(d({},e),{},{summary:t.titleOfReward}):d(d({},e),{},{summary:m()("overlays-eventlist-"+e.event)})})),setTimeout((function(){return e()}),5e3)}))};return{events:f,options:y}};var h=O,j=(n(790),n(95)),component=Object(j.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"eventlist-main"},[n("ul",e._l(e.events,(function(t){return n("li",{key:t._id,staticClass:"event",class:[t.type]},[e._l(e.options.display,(function(r){return["username"===r?n("strong",{key:r,staticClass:"username"},[e._v(e._s(t.username))]):n("span",{key:r,staticClass:"event"},[e._v(e._s(t.summary))])]}))],2)})),0)])}),[],!1,null,null,null);t.default=component.exports},644:function(e,t,n){var content=n(791);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(111).default)("25d61367",content,!0,{sourceMap:!1})},790:function(e,t,n){"use strict";n(644)},791:function(e,t,n){var r=n(110)((function(i){return i[1]}));r.push([e.i,"@import url(https://fonts.googleapis.com/css?family=BenchNine);"]),r.push([e.i,".eventlist-main{padding:10px 2px 2px!important;font-family:BenchNine,sans-serif!important;color:#fff!important}ul{list-style-type:none;text-transform:uppercase;font-size:1.6em;margin:0;padding:0;text-align:right}ul li{width:99%;margin-left:0;text-shadow:0 0 10px #000,0 0 20px #000,0 0 30px #000}ul li span{font-size:.6em}ul li:first-child{opacity:1;font-weight:700}ul li:nth-child(2){opacity:.8}ul li:nth-child(3){opacity:.6}ul li:nth-child(4){opacity:.4}ul li:nth-child(5){opacity:.2}.event,.username{padding:0 .2rem}",""]),r.locals={},e.exports=r}}]);
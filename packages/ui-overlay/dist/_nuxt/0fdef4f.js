(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1033:function(e,t,n){"use strict";n.r(t);var r=n(3),o=(n(24),n(73),n(74),n(70),n(77),n(87),{});o.props={text:{key:"text",required:!0,type:String},options:{key:"options",required:!0,type:Object}},o.setup=function(e,t){var n=e,o=Object(r.ref)(0),c=Object(r.reactive)({startTime:0,changeTime:0,exclude:[" "],baffledArray:n.text.split("")}),l=Object(r.reactive)([]),f=Object(r.computed)((function(){return c.baffledArray.join("")})),d=function(){var e=function(text,e){for(var t=[],i=0;i<text.length;i++)t.push(Math.floor(1e3*Math.random())+(e-1e3));return t}(n.text,n.options.maxTimeToDecrypt);for(console.debug("== baffle",{interval:o.value,text:n.text,options:n.options,timeToReveal:e}),clearInterval(o.value);l.length>0;)l.shift();for(;l.length!==e.length;)l.push(e[l.length]);c.startTime=Date.now(),o.value=window.setInterval((function(){if(Date.now()-c.changeTime>n.options.speed){c.changeTime=Date.now();var e=c.baffledArray.length;c.baffledArray=[];for(var i=0;i<e;i++)c.exclude.includes(n.text[i])||l[i]<=Date.now()-c.startTime?c.baffledArray.push(n.text[i]):c.baffledArray.push(n.options.characters[Math.floor(Math.random()*n.options.characters.length)])}}),2)};return Object(r.onMounted)((function(){d()})),Object(r.onUnmounted)((function(){return clearInterval(o.value)})),Object(r.watch)((function(){return n}),(function(){return d()}),{deep:!0}),{baffledText:f}};var c=o,l=n(95),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",[e._v("\n  "+e._s(e.baffledText)+"\n")])}),[],!1,null,null,null);t.default=component.exports}}]);
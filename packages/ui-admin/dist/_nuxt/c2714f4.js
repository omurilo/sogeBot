(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1582:function(e,t,n){"use strict";n.r(t);var o=n(60),l=n(1),r=(n(146),n(63),n(4),n(318),n(319),n(39),n(786),n(62),n(11),n(52),n(40),n(10)),c=n(95),d=n(382),v=n(35),f=n(26),m=(n(81),n(28),n(25),n(12),n(24),n(46),n(51),n(37),n(34),n(47),n(111)),h=n(21),y=n(821),O=n.n(y);function w(){w=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,o,l){var r=new RegExp(e,o);return t.set(r,l||t.get(e)),Object(d.a)(r,n.prototype)}function o(e,n){var g=t.get(n);return Object.keys(g).reduce((function(t,n){return t[n]=e[g[n]],t}),Object.create(null))}return Object(c.a)(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=o(n,this)),n},n.prototype[Symbol.replace]=function(n,l){if("string"==typeof l){var c=t.get(this);return e[Symbol.replace].call(this,n,l.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+c[t]})))}if("function"==typeof l){var d=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=Object(r.a)(e[e.length-1])&&(e=[].slice.call(e)).push(o(e,d)),l.apply(this,e)}))}return e[Symbol.replace].call(this,n,l)},w.apply(this,arguments)}var x={};x.props={item:{key:"item",required:!0,type:Object},dialog:{key:"dialog",required:!0,type:Boolean},color:{key:"color",required:!0,type:String},editing:{key:"editing",required:!0,type:Boolean}},x.setup=function(e,t){var n=Object(o.d)().$graphql,r=e,c=t.emit,d=Object(l.J)(r.item.selected);Object(l.Y)(d,(function(e){c(e?"select":"unselect")}));var y=Object(l.J)(0),x=Object(l.J)(null),k=Object(l.J)(!1),time=Object(l.b)((function(){if(null===y.value||!E.value)return"--:--:--";var e=Math.floor(y.value/m.DAY),t=Math.floor((y.value-e*m.DAY)/m.HOUR),n=Math.floor((y.value-e*m.DAY-t*m.HOUR)/m.MINUTE),o=Math.floor((y.value-e*m.DAY-t*m.HOUR-n*m.MINUTE)/m.SECOND),l=Math.floor((y.value-e*m.DAY-t*m.HOUR-n*m.MINUTE-o*m.SECOND)/10);l<10&&(l="0".concat(l));var output="";return e>0&&(output+="".concat(e,"d")),output+="".concat(t<10?"0":"").concat(t,":").concat(n<10?"0":"").concat(n,":").concat(o<10?"0":"").concat(o),("string"==typeof E.value.opts?JSON.parse(E.value.opts):E.value.opts).showMilliseconds&&(output+="<small>.".concat(l,"</small>")),output})),S=Object(l.J)([]),j=function(){var e=Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v.a,e.next=3,n.default.request(O.a,{id:r.item.options.stopwatchId});case 3:e.t1=e.sent.overlays.stopwatch,S.value=(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=Object(l.J)(null);Object(l.Y)(S,(function(e){e.length>0&&(E.value=e[0])}),{immediate:!0,deep:!0});var N=Object(l.b)({get:function(){var e=Math.floor(y.value/m.DAY),t=Math.floor((y.value-e*m.DAY)/m.HOUR),n=Math.floor((y.value-e*m.DAY-t*m.HOUR)/m.MINUTE),o=Math.floor((y.value-e*m.DAY-t*m.HOUR-n*m.MINUTE)/m.SECOND);return"".concat(e,"d ").concat(t,"h ").concat(n,"m ").concat(o,"s")},set:function(e){var t=w(/((\d+)d)? ?((\d+)h)? ?((\d+)m)? ?((\d+)s)?/g,{days:2,hours:4,minutes:6,seconds:8}).exec(e);if(null!=t&&t.groups){for(var n=0,o=0,l=Object.keys(t.groups);o<l.length;o++){var r,c=l[o];if("days"===c)n+=Number(null!==(r=t.groups[c])&&void 0!==r?r:0)*m.DAY;else if("hours"===c){var d;n+=Number(null!==(d=t.groups[c])&&void 0!==d?d:0)*m.HOUR}else if("minutes"===c){var v;n+=Number(null!==(v=t.groups[c])&&void 0!==v?v:0)*m.MINUTE}else if("seconds"===c){var f;n+=Number(null!==(f=t.groups[c])&&void 0!==f?f:0)*m.SECOND}}y.value=n}}});Object(l.A)((function(){j(),setInterval((function(){E.value&&!k.value&&Object(h.getSocket)("/overlays/stopwatch").emit("stopwatch::check",E.value.id,(function(e,data){data&&E.value&&(x.value=data.isEnabled,y.value=data.time)}))}),1e3)}));return{selected:d,isStarted:x,showMenu:k,showDialog:function(){c("update:dialog",!0)},time:time,stopwatch:E,timeInput:N,updateTime:function(){E.value&&Object(h.getSocket)("/overlays/stopwatch").emit("stopwatch::update::set",{isEnabled:null,time:y.value,id:E.value.id}),k.value=!1},trigger:function(e){if(E.value){var t,n,o,l,c=document.getElementById("quickaction-".concat(r.item.id)),text=document.getElementsByClassName("text")[0],d=e.offsetX,v="SPAN"===(t=e.target).tagName||"I"===t.tagName?Array.from(null!==(n=t.classList)&&void 0!==n?n:[]):Array.from(null!==(o=null===(l=t.parentElement)||void 0===l?void 0:l.classList)&&void 0!==o?o:[]),f=v.includes("text");!v.includes("plus")&&(v.includes("minus")||d<(f?text.clientWidth:c.clientWidth)/2)?(x.value=!x.value,Object(h.getSocket)("/overlays/stopwatch").emit("stopwatch::update::set",{isEnabled:x.value,time:null,id:E.value.id})):k.value=!k.value}},keydownHandler:function(e){var t=e.key,n=e.shiftKey,o=e.ctrlKey,l=m.SECOND;n&&o?l=m.HOUR:n?l=m.MINUTE:o&&(l=15*m.SECOND),"ArrowUp"===t?y.value+=l:"ArrowDown"===t&&(y.value-=l)}}};var k=x,S=n(45),j=n(44),E=n.n(j),N=n(48),M=n(43),D=n(27),_=n(68),C=n(30),R=n(268),U=n(140),A=n(804),I=n.n(A),T=n(86),component=Object(S.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card-text",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"text-button pa-1 mb-1 text-center",staticStyle:{"font-size":"12px !important",display:"block"},style:{color:e.color},on:{click:function(t){e.editing?e.showDialog():e.trigger(t)}}},[e.stopwatch?n("v-row",{attrs:{"no-gutters":"",ripple:""}},[e.editing?e._e():n("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},[n("v-icon",{staticClass:"minus",attrs:{color:e.color}},[null===e.isStarted?[e._v("\n            mdi-help\n          ")]:[e._v("\n            "+e._s(e.isStarted?"mdi-pause":"mdi-play")+"\n          ")]],2)],1),e._v(" "),n("v-col",{staticClass:"text",staticStyle:{"align-self":"center"}},[n("div",{staticStyle:{"font-size":"0.8rem"},domProps:{innerHTML:e._s(e.time)}})]),e._v(" "),e.editing?e._e():n("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},[n("v-icon",{staticClass:"plus",attrs:{color:e.color}},[e._v("\n          mdi-alarm-plus\n        ")])],1),e._v(" "),n("v-slide-x-reverse-transition",[e.editing?n("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},["white"!==e.color?n("v-simple-checkbox",{attrs:{light:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}):n("v-simple-checkbox",{attrs:{dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1):e._e()],1)],1):e._e()],1),e._v(" "),n("v-expand-transition",[e.showMenu&&e.stopwatch?n("div",[n("v-text-field",{attrs:{label:"Stopwatch","hide-details":"auto",solo:"",dense:""},on:{keydown:e.keydownHandler},scopedSlots:e._u([{key:"append",fn:function(){return[n("v-btn",{attrs:{icon:""},on:{click:e.updateTime}},[n("v-icon",[e._v("mdi-check")])],1)]},proxy:!0}],null,!1,2287443536),model:{value:e.timeInput,callback:function(t){e.timeInput=t},expression:"timeInput"}})],1):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports;E()(component,{VBtn:N.a,VCardText:M.d,VCol:D.a,VExpandTransition:_.a,VIcon:C.a,VRow:D.d,VSimpleCheckbox:R.b,VSlideXReverseTransition:_.g,VTextField:U.a}),I()(component,{Ripple:T.a})},786:function(e,t,n){n(317)("replace")},804:function(e,t){e.exports=function(component,e){var t="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(t.directives=component.exports.options.directives),t.directives=t.directives||{},e)t.directives[i]=t.directives[i]||e[i]}}}]);
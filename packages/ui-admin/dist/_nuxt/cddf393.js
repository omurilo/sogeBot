(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{1581:function(e,t,n){"use strict";n.r(t);var o=n(60),r=n(1),c=(n(146),n(63),n(4),n(37),n(318),n(319),n(39),n(786),n(62),n(11),n(52),n(40),n(10)),l=n(95),v=n(382),d=n(35),f=n(26),m=(n(81),n(28),n(25),n(12),n(24),n(46),n(111)),h=n(21),y=n(821),O=n.n(y);function x(){x=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,o,r){var c=new RegExp(e,o);return t.set(c,r||t.get(e)),Object(v.a)(c,n.prototype)}function o(e,n){var g=t.get(n);return Object.keys(g).reduce((function(t,n){return t[n]=e[g[n]],t}),Object.create(null))}return Object(l.a)(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=o(n,this)),n},n.prototype[Symbol.replace]=function(n,r){if("string"==typeof r){var l=t.get(this);return e[Symbol.replace].call(this,n,r.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+l[t]})))}if("function"==typeof r){var v=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=Object(c.a)(e[e.length-1])&&(e=[].slice.call(e)).push(o(e,v)),r.apply(this,e)}))}return e[Symbol.replace].call(this,n,r)},x.apply(this,arguments)}var w={};w.props={item:{key:"item",required:!0,type:Object},dialog:{key:"dialog",required:!0,type:Boolean},color:{key:"color",required:!0,type:String},editing:{key:"editing",required:!0,type:Boolean}},w.setup=function(e,t){var n=Object(o.d)().$graphql,c=e,l=0,v=Object(r.J)(c.item.selected),y=Object(r.J)(0),w=Object(r.J)(0),k=t.emit;Object(r.Y)(v,(function(e){k(e?"select":"unselect")}));var j=Object(r.J)(0),D=Object(r.J)(!1);Object(r.Y)(D,(function(e){e||(w.value=0)}));var M=Object(r.J)([]),S=function(){var e=Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d.a,e.next=3,n.default.request(O.a,{id:c.item.options.marathonId});case 3:e.t1=e.sent.overlays.marathon,M.value=(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=Object(r.J)(null);Object(r.Y)(M,(function(e){e.length>0&&(N.value=e[0])}),{immediate:!0,deep:!0});var E=Object(r.b)({get:function(){var e=Math.floor(w.value/m.DAY),t=Math.floor((w.value-e*m.DAY)/m.HOUR),n=Math.floor((w.value-e*m.DAY-t*m.HOUR)/m.MINUTE),o=Math.floor((w.value-e*m.DAY-t*m.HOUR-n*m.MINUTE)/m.SECOND);return"".concat(e,"d ").concat(t,"h ").concat(n,"m ").concat(o,"s")},set:function(e){var t=x(/((\d+)d)? ?((\d+)h)? ?((\d+)m)? ?((\d+)s)?/g,{days:2,hours:4,minutes:6,seconds:8}).exec(e);if(null!=t&&t.groups){for(var n=0,o=0,r=Object.keys(t.groups);o<r.length;o++){var c,l=r[o];if("days"===l)n+=Number(null!==(c=t.groups[l])&&void 0!==c?c:0)*m.DAY;else if("hours"===l){var v;n+=Number(null!==(v=t.groups[l])&&void 0!==v?v:0)*m.HOUR}else if("minutes"===l){var d;n+=Number(null!==(d=t.groups[l])&&void 0!==d?d:0)*m.MINUTE}else if("seconds"===l){var f;n+=Number(null!==(f=t.groups[l])&&void 0!==f?f:0)*m.SECOND}}w.value=n}}});Object(r.A)((function(){S(),l=window.setInterval((function(){y.value=Date.now(),N.value&&!D.value&&Object(h.getSocket)("/overlays/marathon").emit("marathon::check",N.value.id,(function(e,data){data&&data.opts&&N.value&&(j.value=Math.max(data.opts.endTime,Date.now()))}))}),1e3)})),Object(r.D)((function(){clearInterval(l)}));return{selected:v,tick:y,showMenu:D,showDialog:function(){k("update:dialog",!0)},time:function(){if(0===j.value||!N.value)return"--:--:--";var e=Math.max(j.value-Date.now(),0),t=Math.floor(e/m.DAY),n=Math.floor((e-t*m.DAY)/m.HOUR),o=Math.floor((e-t*m.DAY-n*m.HOUR)/m.MINUTE),r=Math.floor((e-t*m.DAY-n*m.HOUR-o*m.MINUTE)/m.SECOND),c=Math.floor((e-t*m.DAY-n*m.HOUR-o*m.MINUTE-r*m.SECOND)/10);c<10&&(c="0".concat(c));var output="";return t>0&&(output+="".concat(t,"d")),output+="".concat(n<10?"0":"").concat(n,":").concat(o<10?"0":"").concat(o,":").concat(r<10?"0":"").concat(r),("string"==typeof N.value.opts?JSON.parse(N.value.opts):N.value.opts).showMilliseconds&&(output+="<small>.".concat(c,"</small>")),output},marathon:N,timeInput:E,updateTime:function(){N.value&&Object(h.getSocket)("/overlays/marathon").emit("marathon::update::set",{time:w.value,id:N.value.id}),D.value=!1},trigger:function(){N.value&&(D.value=!D.value)},keydownHandler:function(e){var t=e.key,n=e.shiftKey,o=e.ctrlKey,r=m.SECOND;n&&o?r=m.HOUR:n?r=m.MINUTE:o&&(r=15*m.SECOND),"ArrowUp"===t?w.value+=r:"ArrowDown"===t&&(w.value-=r)}}};var k=w,j=n(45),D=n(44),M=n.n(D),S=n(48),N=n(43),E=n(27),R=n(68),U=n(30),C=n(268),I=n(140),T=n(804),_=n.n(T),A=n(86),component=Object(j.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card-text",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"text-button pa-1 mb-1 text-center",staticStyle:{"font-size":"12px !important",display:"block"},style:{color:e.color},on:{click:function(t){e.editing?e.showDialog():e.trigger()}}},[n("v-row",{attrs:{"no-gutters":"",ripple:""}},[e.editing?e._e():n("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}}),e._v(" "),n("v-col",{key:e.tick,staticClass:"text",staticStyle:{"align-self":"center"}},[n("div",{staticStyle:{"font-size":"0.8rem"},domProps:{innerHTML:e._s(e.time())}})]),e._v(" "),e.editing?e._e():n("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},[n("v-icon",{staticClass:"plus",attrs:{color:e.color}},[e._v("\n          mdi-alarm-plus\n        ")])],1),e._v(" "),n("v-slide-x-reverse-transition",[e.editing?n("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},["white"!==e.color?n("v-simple-checkbox",{attrs:{light:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}):n("v-simple-checkbox",{attrs:{dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1):e._e()],1)],1)],1),e._v(" "),n("v-expand-transition",[e.showMenu&&e.marathon?n("div",[n("v-text-field",{attrs:{label:"Countdown","hide-details":"auto",solo:"",dense:""},on:{keydown:e.keydownHandler},scopedSlots:e._u([{key:"append",fn:function(){return[n("v-btn",{attrs:{icon:""},on:{click:e.updateTime}},[n("v-icon",[e._v("mdi-plus")])],1)]},proxy:!0}],null,!1,3336252332),model:{value:e.timeInput,callback:function(t){e.timeInput=t},expression:"timeInput"}})],1):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports;M()(component,{VBtn:S.a,VCardText:N.d,VCol:E.a,VExpandTransition:R.a,VIcon:U.a,VRow:E.d,VSimpleCheckbox:C.b,VSlideXReverseTransition:R.g,VTextField:I.a}),_()(component,{Ripple:A.a})},786:function(e,t,n){n(317)("replace")},804:function(e,t){e.exports=function(component,e){var t="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(t.directives=component.exports.options.directives),t.directives=t.directives||{},e)t.directives[i]=t.directives[i]||e[i]}}}]);
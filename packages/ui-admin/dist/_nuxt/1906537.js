(window.webpackJsonp=window.webpackJsonp||[]).push([[185,106],{1470:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(21),o=n(49),l=n.n(o),f=n(1),d=n(80),v=n(769),m=Object(f.h)({setup:function(){var e=Object(f.J)(null),t=Object(f.J)(null),n=Object(r.o)(),o=Object(f.J)(!0),m=Object(f.J)(null);return Object(f.Y)(e,(function(){n.commit("settings/pending",!0)}),{deep:!0}),Object(f.Y)(o,(function(e){n.commit("settings/valid",e)}),{immediate:!0}),Object(f.Y)((function(){return n.state.settings.save}),(function(t){t&&e.value&&Object(v.a)("/core/currency",n,e.value)})),Object(f.A)((function(){Object(c.getSocket)("/core/currency").emit("settings",(function(r,c,o){r?Object(d.a)(r):(t.value=o,e.value=c,Object(f.t)((function(){n.commit("settings/pending",!1)})))}))})),{settings:e,ui:t,translate:l.a,valid:o,tab:m}}}),_=n(45),y=n(44),O=n.n(y),j=n(48),h=n(43),k=n(376),C=n(267),w=n(50),component=Object(_.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.settings?n("v-form",{attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-tabs",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab",[e._v(e._s(e.translate("categories.general")))])],1),e._v(" "),n("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab-item",{attrs:{eager:""}},[n("v-card",[n("v-card-text",[n("v-select",{attrs:{items:e.ui.currency.mainCurrency.values,label:e.translate("core.currency.settings.mainCurrency")},scopedSlots:e._u([e.settings.currency.mainCurrency[0]!==e.settings.currency.mainCurrency[1]?{key:"append-outer",fn:function(){return[n("v-btn",{attrs:{text:"",small:""},on:{click:function(t){t.stopPropagation(),e.settings.currency.mainCurrency=[e.settings.currency.mainCurrency[1],e.settings.currency.mainCurrency[1]]}}},[e._v("\n                Revert\n              ")])]},proxy:!0}:null],null,!0),model:{value:e.settings.currency.mainCurrency[0],callback:function(t){e.$set(e.settings.currency.mainCurrency,0,t)},expression:"settings.currency.mainCurrency[0]"}})],1)],1)],1)],1)],1):n("loading")}),[],!1,null,null,null);t.default=component.exports;O()(component,{Loading:n(768).default}),O()(component,{VBtn:j.a,VCard:h.a,VCardText:h.d,VForm:k.a,VSelect:C.a,VTab:w.a,VTabItem:w.b,VTabs:w.c,VTabsItems:w.d})},767:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));n(12),n(25),n(69),n(4),n(24),n(40),n(33),n(51),n(37),n(11),n(52),n(55),n(39);function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){f=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function o(data){var e={};return function t(n,r){if(Object(n)!==n||Array.isArray(n))e[r]=n;else{for(var c=!0,o=0,l=Object.keys(n);o<l.length;o++){var p=l[o];c=!1,t(n[p],r?r+"."+p:p)}c&&r&&(e[r]={})}}(data,""),e}function l(data){var e;if(Array.isArray(data)){e=[];var t,n=r(data);try{for(n.s();!(t=n.n()).done;){var c=t.value;e.push(l(c))}}catch(e){n.e(e)}finally{n.f()}}else{e={};for(var o=function(){var i=d[f],t=i.split(".");t.reduce((function(e,n,r){return e[n]||(e[n]=isNaN(Number(t[r+1]))?t.length-1===r?data[i]:{}:[])}),e)},f=0,d=Object.keys(data);f<d.length;f++)o()}return e}},768:function(e,t,n){"use strict";n.r(t);var r=n(1),c=Object(r.h)({setup:function(){return{}}}),o=n(45),l=n(44),f=n.n(l),d=n(27),v=n(142),m=n(143),component=Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-overlay",{attrs:{absolute:""}},[t("v-row",[t("v-col",{staticClass:"text-center"},[t("v-progress-circular",{attrs:{indeterminate:"",size:"48"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCol:d.a,VOverlay:v.a,VProgressCircular:m.a,VRow:d.d})},769:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(23),c=(n(133),n(12),n(34),n(47),n(25),n(62),n(103),n(21)),o=n(54),l=n(80),f=n(141),d=n(767),v=function(e,t,n){var v=Object(o.cloneDeep)(n);if(v.settings){for(var m=0,_=Object.entries(v.settings);m<_.length;m++){var y=Object(r.a)(_[m],2),O=y[0],j=y[1];delete v.settings[O],v[O]=j}delete v.settings}v=Object(d.a)(v);for(var h=0,k=Object.keys(v);h<k.length;h++){var C=k[h];if(!(C.includes("__permission_based__")||C.includes("commands")||C.includes("_permission"))){var w=v[C],A=C.replace(/([\w]*\.)/,"");delete v[C],console.debug("FROM: ".concat(C)),console.debug("TO:   ".concat(A)),v[A]=w}}if((v=Object(d.b)(v)).__permission_based__){v.__permission_based__=Object(d.a)(v.__permission_based__);for(var V=0,x=Object.keys(v.__permission_based__);V<x.length;V++){var S=x[V],T=S.match(/\./g);if(T&&1===T.length){var J=v.__permission_based__[S];delete v.__permission_based__[S];var I=S.replace(/([\w]*\.)/,"");console.debug("FROM: ".concat(S)),console.debug("TO:   ".concat(I)),v.__permission_based__[I]=J[0]}}v.__permission_based__=Object(d.b)(v.__permission_based__)}for(var $=0,R=Object.keys(v);$<R.length;$++){var E=R[$];v[E]=Array.isArray(v[E])?v[E][0]:v[E]}console.log({clonedSettings:v}),Object(c.getSocket)(e).emit("settings.update",v,(function(n){if(t.commit("settings/save",!1),t.commit("settings/pending",!1),n)return Object(l.a)(n);Object(c.getSocket)(e).emit("settings.refresh"),f.a.$emit("snack","success","Configuration updated.")}))}}}]);
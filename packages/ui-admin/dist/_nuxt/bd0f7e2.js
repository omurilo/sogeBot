(window.webpackJsonp=window.webpackJsonp||[]).push([[205,106],{1491:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n(21),c=n(49),l=n.n(c),f=n(1),d=n(80),v=n(770),_=n(265),m=Object(f.h)({setup:function(){var e=Object(f.J)(null),t=Object(f.J)(null),n=Object(r.o)(),c=Object(f.J)(!0),m=Object(f.J)(null);return Object(f.Y)(e,(function(){n.commit("settings/pending",!0)}),{deep:!0}),Object(f.Y)((function(){return n.state.settings.save}),(function(t){t&&e.value&&Object(v.a)("/integrations/qiwi",n,e.value)})),Object(f.Y)(c,(function(e){n.commit("settings/valid",e)}),{immediate:!0}),Object(f.A)((function(){Object(o.getSocket)("/integrations/qiwi").emit("settings",(function(r,o,c){r?Object(d.a)(r):(t.value=c,console.log({_settings:o}),e.value=o,Object(f.t)((function(){n.commit("settings/pending",!1)})))}))})),{settings:e,ui:t,translate:l.a,valid:c,tab:m,required:_.h,minValue:_.f}}}),O=n(45),j=n(44),y=n.n(j),h=n(43),k=n(377),w=n(50),T=n(140),component=Object(O.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.settings?n("v-form",{attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-tabs",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab",[e._v(e._s(e.translate("categories.general")))])],1),e._v(" "),n("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab-item",{attrs:{eager:""}},[n("v-card",[n("v-card-text",[n("v-text-field",{attrs:{type:"password",dense:"",label:e.translate("integrations.qiwi.settings.secretToken.title"),hint:e.translate("integrations.qiwi.settings.secretToken.help"),"persistent-hint":""},model:{value:e.settings.secretToken[0],callback:function(t){e.$set(e.settings.secretToken,0,t)},expression:"settings.secretToken[0]"}})],1)],1)],1)],1)],1):n("loading")}),[],!1,null,null,null);t.default=component.exports;y()(component,{Loading:n(769).default}),y()(component,{VCard:h.a,VCardText:h.d,VForm:k.a,VTab:w.a,VTabItem:w.b,VTabs:w.c,VTabsItems:w.d,VTextField:T.a})},768:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));n(12),n(25),n(69),n(4),n(24),n(40),n(33),n(51),n(37),n(11),n(52),n(55),n(39);function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,f=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){f=!0,c=e},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw c}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function c(data){var e={};return function t(n,r){if(Object(n)!==n||Array.isArray(n))e[r]=n;else{for(var o=!0,c=0,l=Object.keys(n);c<l.length;c++){var p=l[c];o=!1,t(n[p],r?r+"."+p:p)}o&&r&&(e[r]={})}}(data,""),e}function l(data){var e;if(Array.isArray(data)){e=[];var t,n=r(data);try{for(n.s();!(t=n.n()).done;){var o=t.value;e.push(l(o))}}catch(e){n.e(e)}finally{n.f()}}else{e={};for(var c=function(){var i=d[f],t=i.split(".");t.reduce((function(e,n,r){return e[n]||(e[n]=isNaN(Number(t[r+1]))?t.length-1===r?data[i]:{}:[])}),e)},f=0,d=Object.keys(data);f<d.length;f++)c()}return e}},769:function(e,t,n){"use strict";n.r(t);var r=n(1),o=Object(r.h)({setup:function(){return{}}}),c=n(45),l=n(44),f=n.n(l),d=n(27),v=n(142),_=n(143),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-overlay",{attrs:{absolute:""}},[t("v-row",[t("v-col",{staticClass:"text-center"},[t("v-progress-circular",{attrs:{indeterminate:"",size:"48"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCol:d.a,VOverlay:v.a,VProgressCircular:_.a,VRow:d.d})},770:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(23),o=(n(133),n(12),n(34),n(47),n(25),n(62),n(103),n(21)),c=n(54),l=n(80),f=n(141),d=n(768),v=function(e,t,n){var v=Object(c.cloneDeep)(n);if(v.settings){for(var _=0,m=Object.entries(v.settings);_<m.length;_++){var O=Object(r.a)(m[_],2),j=O[0],y=O[1];delete v.settings[j],v[j]=y}delete v.settings}v=Object(d.a)(v);for(var h=0,k=Object.keys(v);h<k.length;h++){var w=k[h];if(!(w.includes("__permission_based__")||w.includes("commands")||w.includes("_permission"))){var T=v[w],A=w.replace(/([\w]*\.)/,"");delete v[w],console.debug("FROM: ".concat(w)),console.debug("TO:   ".concat(A)),v[A]=T}}if((v=Object(d.b)(v)).__permission_based__){v.__permission_based__=Object(d.a)(v.__permission_based__);for(var V=0,x=Object.keys(v.__permission_based__);V<x.length;V++){var S=x[V],C=S.match(/\./g);if(C&&1===C.length){var J=v.__permission_based__[S];delete v.__permission_based__[S];var I=S.replace(/([\w]*\.)/,"");console.debug("FROM: ".concat(S)),console.debug("TO:   ".concat(I)),v.__permission_based__[I]=J[0]}}v.__permission_based__=Object(d.b)(v.__permission_based__)}for(var $=0,F=Object.keys(v);$<F.length;$++){var E=F[$];v[E]=Array.isArray(v[E])?v[E][0]:v[E]}console.log({clonedSettings:v}),Object(o.getSocket)(e).emit("settings.update",v,(function(n){if(t.commit("settings/save",!1),t.commit("settings/pending",!1),n)return Object(l.a)(n);Object(o.getSocket)(e).emit("settings.refresh"),f.a.$emit("snack","success","Configuration updated.")}))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[203,106],{1488:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n(21),c=n(49),l=n.n(c),d=n(1),f=n(80),v=n(769),_=n(266),m=Object(d.h)({setup:function(){var e=Object(d.J)(null),t=Object(d.J)(null),n=Object(r.o)(),c=Object(d.J)(!0),m=Object(d.J)(null);return Object(d.Y)(e,(function(){n.commit("settings/pending",!0)}),{deep:!0}),Object(d.Y)((function(){return n.state.settings.save}),(function(t){t&&e.value&&Object(v.a)("/integrations/obswebsocket",n,e.value)})),Object(d.Y)(c,(function(e){n.commit("settings/valid",e)}),{immediate:!0}),Object(d.A)((function(){Object(o.getSocket)("/integrations/obswebsocket").emit("settings",(function(r,o,c){r?Object(f.a)(r):(t.value=c,console.log({_settings:o}),e.value=o,Object(d.t)((function(){n.commit("settings/pending",!1)})))}))})),{settings:e,ui:t,translate:l.a,valid:c,tab:m,required:_.h,minValue:_.f}}}),O=n(45),y=n(44),j=n.n(y),h=n(43),w=n(376),k=n(267),x=n(50),V=n(140),component=Object(O.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.settings?n("v-form",{attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-tabs",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab",[e._v(e._s(e.translate("categories.connection")))])],1),e._v(" "),n("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab-item",{attrs:{eager:""}},[n("v-card",[n("v-card-text",[n("v-select",{attrs:{items:["direct","overlay"],"persistent-hint":"",hint:e.translate("integrations.obswebsocket.settings.accessBy.help"),label:e.translate("integrations.obswebsocket.settings.accessBy.title")},model:{value:e.settings.connection.accessBy[0],callback:function(t){e.$set(e.settings.connection.accessBy,0,t)},expression:"settings.connection.accessBy[0]"}}),e._v(" "),n("v-text-field",{staticClass:"pt-4",attrs:{dense:"",label:e.translate("integrations.obswebsocket.settings.address")},model:{value:e.settings.connection.address[0],callback:function(t){e.$set(e.settings.connection.address,0,t)},expression:"settings.connection.address[0]"}}),e._v(" "),n("v-text-field",{attrs:{type:"password",dense:"",label:e.translate("integrations.obswebsocket.settings.password")},model:{value:e.settings.connection.password[0],callback:function(t){e.$set(e.settings.connection.password,0,t)},expression:"settings.connection.password[0]"}})],1)],1)],1)],1)],1):n("loading")}),[],!1,null,null,null);t.default=component.exports;j()(component,{Loading:n(768).default}),j()(component,{VCard:h.a,VCardText:h.d,VForm:w.a,VSelect:k.a,VTab:x.a,VTabItem:x.b,VTabs:x.c,VTabsItems:x.d,VTextField:V.a})},767:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));n(12),n(25),n(69),n(4),n(24),n(40),n(33),n(51),n(37),n(11),n(52),n(55),n(39);function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){d=!0,c=e},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw c}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function c(data){var e={};return function t(n,r){if(Object(n)!==n||Array.isArray(n))e[r]=n;else{for(var o=!0,c=0,l=Object.keys(n);c<l.length;c++){var p=l[c];o=!1,t(n[p],r?r+"."+p:p)}o&&r&&(e[r]={})}}(data,""),e}function l(data){var e;if(Array.isArray(data)){e=[];var t,n=r(data);try{for(n.s();!(t=n.n()).done;){var o=t.value;e.push(l(o))}}catch(e){n.e(e)}finally{n.f()}}else{e={};for(var c=function(){var i=f[d],t=i.split(".");t.reduce((function(e,n,r){return e[n]||(e[n]=isNaN(Number(t[r+1]))?t.length-1===r?data[i]:{}:[])}),e)},d=0,f=Object.keys(data);d<f.length;d++)c()}return e}},768:function(e,t,n){"use strict";n.r(t);var r=n(1),o=Object(r.h)({setup:function(){return{}}}),c=n(45),l=n(44),d=n.n(l),f=n(27),v=n(142),_=n(143),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-overlay",{attrs:{absolute:""}},[t("v-row",[t("v-col",{staticClass:"text-center"},[t("v-progress-circular",{attrs:{indeterminate:"",size:"48"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VCol:f.a,VOverlay:v.a,VProgressCircular:_.a,VRow:f.d})},769:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(23),o=(n(133),n(12),n(34),n(47),n(25),n(62),n(103),n(21)),c=n(54),l=n(80),d=n(141),f=n(767),v=function(e,t,n){var v=Object(c.cloneDeep)(n);if(v.settings){for(var _=0,m=Object.entries(v.settings);_<m.length;_++){var O=Object(r.a)(m[_],2),y=O[0],j=O[1];delete v.settings[y],v[y]=j}delete v.settings}v=Object(f.a)(v);for(var h=0,w=Object.keys(v);h<w.length;h++){var k=w[h];if(!(k.includes("__permission_based__")||k.includes("commands")||k.includes("_permission"))){var x=v[k],V=k.replace(/([\w]*\.)/,"");delete v[k],console.debug("FROM: ".concat(k)),console.debug("TO:   ".concat(V)),v[V]=x}}if((v=Object(f.b)(v)).__permission_based__){v.__permission_based__=Object(f.a)(v.__permission_based__);for(var A=0,S=Object.keys(v.__permission_based__);A<S.length;A++){var T=S[A],C=T.match(/\./g);if(C&&1===C.length){var $=v.__permission_based__[T];delete v.__permission_based__[T];var J=T.replace(/([\w]*\.)/,"");console.debug("FROM: ".concat(T)),console.debug("TO:   ".concat(J)),v.__permission_based__[J]=$[0]}}v.__permission_based__=Object(f.b)(v.__permission_based__)}for(var B=0,I=Object.keys(v);B<I.length;B++){var F=I[B];v[F]=Array.isArray(v[F])?v[F][0]:v[F]}console.log({clonedSettings:v}),Object(o.getSocket)(e).emit("settings.update",v,(function(n){if(t.commit("settings/save",!1),t.commit("settings/pending",!1),n)return Object(l.a)(n);Object(o.getSocket)(e).emit("settings.refresh"),d.a.$emit("snack","success","Configuration updated.")}))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[196,106],{1482:function(e,t,n){"use strict";n.r(t);n(4),n(37),n(39),n(82);var l=n(5),r=n(21),o=n(49),c=n.n(o),v=n(1),d=n(80),m=n(770),f=n(265),_=Object(v.h)({components:{revertTextField:Object(v.g)((function(){return n.e(0).then(n.bind(null,1157))}))},setup:function(){var e=Object(v.J)(null),t=Object(v.J)(null),n=Object(l.o)(),o=Object(v.J)(!0),_=Object(v.J)(null);Object(v.Y)(e,(function(){n.commit("settings/pending",!0)}),{deep:!0}),Object(v.Y)((function(){return n.state.settings.save}),(function(t){t&&e.value&&Object(m.a)("/games/heist",n,e.value)})),Object(v.Y)(o,(function(e){n.commit("settings/valid",e)}),{immediate:!0}),Object(v.A)((function(){Object(r.getSocket)("/games/heist").emit("settings",(function(l,r,o){l?Object(d.a)(l):(t.value=o,console.log({_settings:r}),e.value=r,Object(v.t)((function(){n.commit("settings/pending",!1)})))}))}));return{settings:e,ui:t,translate:c.a,valid:o,tab:_,required:f.h,minValue:f.f,maxValue:f.d,addLevel:function(){e.value&&(e.value.levels.levelsValues[0].push({name:"<changeit>",winPercentage:10,payoutMultiplier:1,maxUsers:10}),e.value.levels.levelsValues=[e.value.levels.levelsValues[0],e.value.levels.levelsValues[1]])},removeLevel:function(t){e.value&&(e.value.levels.levelsValues[0].splice(t,1),e.value.levels.levelsValues=[e.value.levels.levelsValues[0],e.value.levels.levelsValues[1]])},addResult:function(){e.value&&(e.value.results.resultsValues[0].push({percentage:10,message:"<changeit>"}),e.value.results.resultsValues=[e.value.results.resultsValues[0],e.value.results.resultsValues[1]])},removeResult:function(t){e.value&&(e.value.results.resultsValues[0].splice(t,1),e.value.results.resultsValues=[e.value.results.resultsValues[0],e.value.results.resultsValues[1]])}}}}),x=n(45),h=n(44),y=n.n(h),V=n(380),O=n(48),k=n(43),w=n(27),j=n(362),C=n(377),M=n(30),U=n(134),S=n(50),$=n(140),component=Object(x.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.settings?n("v-form",{attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-tabs",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab",[e._v(e._s(e.translate("categories.options")))]),e._v(" "),n("v-tab",[e._v(e._s(e.translate("categories.notifications")))]),e._v(" "),n("v-tab",[e._v(e._s(e.translate("categories.levels")))]),e._v(" "),n("v-tab",[e._v(e._s(e.translate("categories.results")))])],1),e._v(" "),n("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab-item",{attrs:{eager:""}},[n("v-card",[n("v-card-text",[n("revert-text-field",{staticClass:"pt-3",attrs:{type:"number",min:"1",label:e.translate("games.heist.settings.showMaxUsers"),rules:[e.required,e.minValue(1)]},model:{value:e.settings.options.showMaxUsers,callback:function(t){e.$set(e.settings.options,"showMaxUsers",t)},expression:"settings.options.showMaxUsers"}}),e._v(" "),n("revert-text-field",{staticClass:"pt-3",attrs:{type:"number",min:"1",label:e.translate("games.heist.settings.copsCooldownInMinutes.title"),rules:[e.required,e.minValue(1)]},scopedSlots:e._u([{key:"append",fn:function(){return[e._v("\n              "+e._s(e.translate("games.heist.settings.copsCooldownInMinutes.help"))+"\n            ")]},proxy:!0}]),model:{value:e.settings.options.copsCooldownInMinutes,callback:function(t){e.$set(e.settings.options,"copsCooldownInMinutes",t)},expression:"settings.options.copsCooldownInMinutes"}}),e._v(" "),n("revert-text-field",{staticClass:"pt-3",attrs:{type:"number",min:"1",label:e.translate("games.heist.settings.entryCooldownInSeconds.title"),rules:[e.required,e.minValue(1)]},scopedSlots:e._u([{key:"append",fn:function(){return[e._v("\n              "+e._s(e.translate("games.heist.settings.entryCooldownInSeconds.help"))+"\n            ")]},proxy:!0}]),model:{value:e.settings.options.entryCooldownInSeconds,callback:function(t){e.$set(e.settings.options,"entryCooldownInSeconds",t)},expression:"settings.options.entryCooldownInSeconds"}})],1)],1)],1),e._v(" "),n("v-tab-item",[n("v-card",[n("v-card-text",[n("revert-text-field",{staticClass:"pt-3",attrs:{label:e.translate("games.heist.settings.started"),rules:[e.required]},model:{value:e.settings.notifications.started,callback:function(t){e.$set(e.settings.notifications,"started",t)},expression:"settings.notifications.started"}}),e._v(" "),n("revert-text-field",{staticClass:"pt-3",attrs:{label:e.translate("games.heist.settings.nextLevelMessage"),rules:[e.required]},model:{value:e.settings.notifications.nextLevelMessage,callback:function(t){e.$set(e.settings.notifications,"nextLevelMessage",t)},expression:"settings.notifications.nextLevelMessage"}}),e._v(" "),n("revert-text-field",{staticClass:"pt-3",attrs:{label:e.translate("games.heist.settings.maxLevelMessage"),rules:[e.required]},model:{value:e.settings.notifications.maxLevelMessage,callback:function(t){e.$set(e.settings.notifications,"maxLevelMessage",t)},expression:"settings.notifications.maxLevelMessage"}}),e._v(" "),n("revert-text-field",{staticClass:"pt-3",attrs:{label:e.translate("games.heist.settings.copsOnPatrol"),rules:[e.required]},model:{value:e.settings.notifications.copsOnPatrol,callback:function(t){e.$set(e.settings.notifications,"copsOnPatrol",t)},expression:"settings.notifications.copsOnPatrol"}}),e._v(" "),n("revert-text-field",{staticClass:"pt-3",attrs:{label:e.translate("games.heist.settings.copsCooldown"),rules:[e.required]},model:{value:e.settings.notifications.copsCooldown,callback:function(t){e.$set(e.settings.notifications,"copsCooldown",t)},expression:"settings.notifications.copsCooldown"}})],1)],1)],1),e._v(" "),n("v-tab-item",[n("v-card",[n("v-card-text",[0===e.settings.levels.levelsValues[0].length?n("v-alert",{attrs:{text:"",border:"left",color:"orange"}},[e._v("\n            "+e._s(e.translate("games.heist.noLevelsFound"))+"\n          ")]):e._e(),e._v(" "),e._l(e.settings.levels.levelsValues[0],(function(t,l){return[n("v-sheet",{key:l,staticClass:"pa-2"},[n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:e.translate("games.heist.name"),rules:[e.required]},model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"level.name"}}),e._v(" "),n("v-text-field",{attrs:{label:e.translate("games.heist.winPercentage"),type:"number",min:"0",max:"100",rules:[e.required,e.minValue(0),e.maxValue(100)]},model:{value:t.winPercentage,callback:function(n){e.$set(t,"winPercentage",n)},expression:"level.winPercentage"}}),e._v(" "),n("v-text-field",{attrs:{label:e.translate("games.heist.payoutMultiplier"),type:"number",min:"1",step:"0.1",rules:[e.required,e.minValue(1)]},model:{value:t.payoutMultiplier,callback:function(n){e.$set(t,"payoutMultiplier",n)},expression:"level.payoutMultiplier"}}),e._v(" "),n("v-text-field",{attrs:{label:e.translate("games.heist.maxUsers"),type:"number",min:"1",rules:[e.required,e.minValue(1)]},model:{value:t.maxUsers,callback:function(n){e.$set(t,"maxUsers",n)},expression:"level.maxUsers"}})],1),e._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.removeLevel(l)}}},[n("v-icon",[e._v("mdi-delete-forever")])],1)],1)],1)],1),e._v(" "),l!==e.settings.levels.levelsValues[0].length-1?n("v-divider",{key:l+1e6}):e._e()]})),e._v(" "),n("v-btn",{attrs:{block:""},on:{click:e.addLevel}},[e._v("Add level")])],2)],1)],1),e._v(" "),n("v-tab-item",[n("v-card",[n("v-card-text",[n("v-text-field",{attrs:{label:e.translate("games.heist.settings.singleUserSuccess"),rules:[e.required]},model:{value:e.settings.results.singleUserSuccess,callback:function(t){e.$set(e.settings.results,"singleUserSuccess",t)},expression:"settings.results.singleUserSuccess"}}),e._v(" "),n("v-text-field",{attrs:{label:e.translate("games.heist.settings.singleUserFailed"),rules:[e.required]},model:{value:e.settings.results.singleUserFailed,callback:function(t){e.$set(e.settings.results,"singleUserFailed",t)},expression:"settings.results.singleUserFailed"}}),e._v(" "),n("v-text-field",{attrs:{label:e.translate("games.heist.settings.noUser"),rules:[e.required]},model:{value:e.settings.results.noUser,callback:function(t){e.$set(e.settings.results,"noUser",t)},expression:"settings.results.noUser"}}),e._v(" "),0===e.settings.results.resultsValues[0].length?n("v-alert",{attrs:{text:"",border:"left",color:"orange"}},[e._v("\n            "+e._s(e.translate("games.heist.noResultsFound"))+"\n          ")]):e._e(),e._v(" "),e._l(e.settings.results.resultsValues[0],(function(t,l){return[n("v-sheet",{key:l+3e9,staticClass:"pa-2"},[n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:e.translate("games.heist.message"),rules:[e.required]},model:{value:t.message,callback:function(n){e.$set(t,"message",n)},expression:"level.message"}}),e._v(" "),n("v-text-field",{attrs:{label:e.translate("games.heist.percentage"),type:"number",min:"0",max:"100",rules:[e.required,e.minValue(0),e.maxValue(100)]},model:{value:t.percentage,callback:function(n){e.$set(t,"percentage",n)},expression:"level.percentage"}})],1),e._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.removeResult(l)}}},[n("v-icon",[e._v("mdi-delete-forever")])],1)],1)],1)],1),e._v(" "),l!==e.settings.results.resultsValues[0].length-1?n("v-divider",{key:l+2e6}):e._e()]})),e._v(" "),n("v-btn",{attrs:{block:""},on:{click:e.addResult}},[e._v("Add result")])],2)],1)],1)],1)],1):n("loading")}),[],!1,null,null,null);t.default=component.exports;y()(component,{Loading:n(769).default}),y()(component,{VAlert:V.a,VBtn:O.a,VCard:k.a,VCardText:k.d,VCol:w.a,VDivider:j.a,VForm:C.a,VIcon:M.a,VRow:w.d,VSheet:U.a,VTab:S.a,VTabItem:S.b,VTabs:S.c,VTabsItems:S.d,VTextField:$.a})},768:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));n(12),n(25),n(69),n(4),n(24),n(40),n(33),n(51),n(37),n(11),n(52),n(55),n(39);function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,l=function(){};return{s:l,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,v=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){v=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(v)throw o}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function o(data){var e={};return function t(n,l){if(Object(n)!==n||Array.isArray(n))e[l]=n;else{for(var r=!0,o=0,c=Object.keys(n);o<c.length;o++){var p=c[o];r=!1,t(n[p],l?l+"."+p:p)}r&&l&&(e[l]={})}}(data,""),e}function c(data){var e;if(Array.isArray(data)){e=[];var t,n=l(data);try{for(n.s();!(t=n.n()).done;){var r=t.value;e.push(c(r))}}catch(e){n.e(e)}finally{n.f()}}else{e={};for(var o=function(){var i=d[v],t=i.split(".");t.reduce((function(e,n,l){return e[n]||(e[n]=isNaN(Number(t[l+1]))?t.length-1===l?data[i]:{}:[])}),e)},v=0,d=Object.keys(data);v<d.length;v++)o()}return e}},769:function(e,t,n){"use strict";n.r(t);var l=n(1),r=Object(l.h)({setup:function(){return{}}}),o=n(45),c=n(44),v=n.n(c),d=n(27),m=n(142),f=n(143),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-overlay",{attrs:{absolute:""}},[t("v-row",[t("v-col",{staticClass:"text-center"},[t("v-progress-circular",{attrs:{indeterminate:"",size:"48"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VCol:d.a,VOverlay:m.a,VProgressCircular:f.a,VRow:d.d})},770:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var l=n(23),r=(n(133),n(12),n(34),n(47),n(25),n(62),n(103),n(21)),o=n(54),c=n(80),v=n(141),d=n(768),m=function(e,t,n){var m=Object(o.cloneDeep)(n);if(m.settings){for(var f=0,_=Object.entries(m.settings);f<_.length;f++){var x=Object(l.a)(_[f],2),h=x[0],y=x[1];delete m.settings[h],m[h]=y}delete m.settings}m=Object(d.a)(m);for(var V=0,O=Object.keys(m);V<O.length;V++){var k=O[V];if(!(k.includes("__permission_based__")||k.includes("commands")||k.includes("_permission"))){var w=m[k],j=k.replace(/([\w]*\.)/,"");delete m[k],console.debug("FROM: ".concat(k)),console.debug("TO:   ".concat(j)),m[j]=w}}if((m=Object(d.b)(m)).__permission_based__){m.__permission_based__=Object(d.a)(m.__permission_based__);for(var C=0,M=Object.keys(m.__permission_based__);C<M.length;C++){var U=M[C],S=U.match(/\./g);if(S&&1===S.length){var $=m.__permission_based__[U];delete m.__permission_based__[U];var A=U.replace(/([\w]*\.)/,"");console.debug("FROM: ".concat(U)),console.debug("TO:   ".concat(A)),m.__permission_based__[A]=$[0]}}m.__permission_based__=Object(d.b)(m.__permission_based__)}for(var I=0,L=Object.keys(m);I<L.length;I++){var F=L[I];m[F]=Array.isArray(m[F])?m[F][0]:m[F]}console.log({clonedSettings:m}),Object(r.getSocket)(e).emit("settings.update",m,(function(n){if(t.commit("settings/save",!1),t.commit("settings/pending",!1),n)return Object(c.a)(n);Object(r.getSocket)(e).emit("settings.refresh"),v.a.$emit("snack","success","Configuration updated.")}))}}}]);
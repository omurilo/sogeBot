(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1019:function(e,t,n){"use strict";n.r(t);var o=n(45),r=n(3),l=(n(112),n(42),n(24),n(50),n(514)),c=n(170),d=n(484),m=n(307),f=n(502),v=n(622),w=n(572),h=n(573),T=n.n(h),y={};y.props={opts:Object,id:[String,Object]},y.setup=function(e,t){var n=Object(o.useNuxtApp)().$graphql,h=e,y=Object(r.ref)(!0),E=Object(o.useRoute)(),S=Object(r.ref)(""),N=Object(r.computed)((function(){return h.id?h.id:E.params.id})),O=Object(r.ref)(Object(m.defaultsDeep)(h.opts,{time:6e4,currentTime:6e4,messageWhenReachedZero:"",isPersistent:!1,isStartedOnSourceLoad:!0,showMessageWhenReachedZero:!1,countdownFont:{family:"PT Sans",size:50,borderPx:1,borderColor:"#000000",weight:"500",color:"#ffffff",shadow:[]},messageFont:{family:"PT Sans",size:35,borderPx:1,borderColor:"#000000",weight:"500",color:"#ffffff",shadow:[]}})),I=Object(r.computed)((function(){return O.value.currentTime>0||!O.value.showMessageWhenReachedZero?O.value.countdownFont:O.value.messageFont})),time=Object(r.computed)((function(){if(0===Number(O.value.currentTime)&&O.value.showMessageWhenReachedZero)return O.value.messageWhenReachedZero;var e=Math.floor(O.value.currentTime/l.DAY),t=Math.floor((O.value.currentTime-e*l.DAY)/l.HOUR),n=Math.floor((O.value.currentTime-e*l.DAY-t*l.HOUR)/l.MINUTE),o=Math.floor((O.value.currentTime-e*l.DAY-t*l.HOUR-n*l.MINUTE)/l.SECOND),r=Math.floor((O.value.currentTime-e*l.DAY-t*l.HOUR-n*l.MINUTE-o*l.SECOND)/10);r<10&&(r="0".concat(r));var output="";return e>0&&(output+="".concat(e,"d")),output+="".concat(t<10?"0":"").concat(t,":").concat(n<10?"0":"").concat(n,":").concat(o<10?"0":"").concat(o),O.value.showMilliseconds&&(output+="<small>.".concat(r,"</small>")),output})),D=Date.now(),k=Date.now();function M(){if(Object(w.a)(localStorage.getItem("countdown-controller-".concat(N.value,"-enabled"))||!1)&&O.value.currentTime>0){var e=O.value.currentTime-(Date.now()-k);e<0&&(e=0),O.value.currentTime=e}k=Date.now(),v.b((function(){M()}),10)}var C=Date.now();return Object(r.onMounted)((function(){S.value=Object(f.a)(),console.log("====== COUNTDOWN (".concat(S.value,") ======")),localStorage.setItem("countdown-controller-".concat(N.value),S.value),y.value=O.value.isStartedOnSourceLoad,O.value.time=O.value.isPersistent?O.value.currentTime:O.value.time,M(),v.a((function(){!function(){if(localStorage.getItem("countdown-controller-".concat(N.value))===S.value)console.debug("Primary"),Object(c.getSocket)("/overlays/countdown",!0).emit("countdown::update",{id:h.id?String(h.id):E.params.id,isEnabled:y.value,time:O.value.currentTime},(function(e,data){data&&(null!==data.isEnabled&&(y.value=data.isEnabled),localStorage.setItem("countdown-controller-".concat(N.value,"-currentTime"),String(O.value.currentTime)),localStorage.setItem("countdown-controller-".concat(N.value,"-currentTimeAt"),(new Date).toISOString()),localStorage.setItem("countdown-controller-".concat(N.value,"-enabled"),String(y.value)),null!==data.time&&(O.value.currentTime=data.time))}));else if(console.debug("Secondary"),console.debug(localStorage.getItem("countdown-controller-".concat(N.value,"-enabled"))),Date.now()-D>1e3||!y.value){var e=y.value?new Date(localStorage.getItem("countdown-controller-".concat(N.value,"-currentTimeAt"))||Date.now()).getTime():Date.now();D===e&&(console.debug("No update, setting as controller"),localStorage.setItem("countdown-controller-".concat(N.value),S.value)),D=e,O.value.currentTime=Date.now()-e+Number(localStorage.getItem("countdown-controller-".concat(N.value,"-currentTime")))}}()}),100),v.a((function(){localStorage.getItem("countdown-controller-".concat(N.value))===S.value&&(localStorage.setItem("countdown-controller-".concat(N.value,"-currentTime"),String(O.value.currentTime)),localStorage.setItem("countdown-controller-".concat(N.value,"-currentTimeAt"),(new Date).toISOString()),localStorage.setItem("countdown-controller-".concat(N.value,"-enabled"),String(y.value)),O.value.isPersistent&&Date.now()-C>10&&(C=Date.now(),n.default.request(T.a,{id:N.value,millis:Number(O.value.currentTime)})))}),500);var head=document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css";for(var e=0,t=[O.value.countdownFont.family,O.value.messageFont.family];e<t.length;e++){var o=t[e];console.debug("Loading font",o);var r="@import url('https://fonts.googleapis.com/css?family="+o.replace(/ /g,"+")+"');";style.appendChild(document.createTextNode(r)),head.appendChild(style)}})),{shadowGenerator:d.shadowGenerator,textStrokeGenerator:d.textStrokeGenerator,font:I,time:time}};var E=y,S=n(95),component=Object(S.a)(E,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{style:{position:"absolute","text-align":"center",width:"100%",color:e.font.color,"font-family":e.font.family,"font-weight":e.font.weight,"font-size":e.font.size+"px","text-shadow":[e.textStrokeGenerator(e.font.borderPx,e.font.borderColor),e.shadowGenerator(e.font.shadow)].filter(Boolean).join(", ")},domProps:{innerHTML:e._s(e.time)}})}),[],!1,null,null,null);t.default=component.exports},502:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return w}));var r=new Uint8Array(16);function l(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(r)}var c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var d=function(e){return"string"==typeof e&&c.test(e)},m=[],f=0;f<256;++f)m.push((f+256).toString(16).substr(1));var v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase();if(!d(n))throw TypeError("Stringified UUID is invalid");return n};var w=function(e,t,n){var o=(e=e||{}).random||(e.rng||l)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=o[i];return t}return v(o)}},514:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DAY=t.HOUR=t.MINUTE=t.SECOND=t.CONNECTED=t.RECONNECTING=t.CONNECTING=t.DISCONNECTED=t.LOWEST=t.LOW=t.MEDIUM=t.HIGH=t.HIGHEST=t.MODERATION=void 0;t.MODERATION=-1;t.HIGHEST=0;t.HIGH=1;t.MEDIUM=2;t.LOW=3;t.LOWEST=4;t.DISCONNECTED=0;t.CONNECTING=1;t.RECONNECTING=2;t.CONNECTED=3;t.SECOND=1e3;t.MINUTE=6e4;t.HOUR=36e5;t.DAY=864e5},572:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(e){return"string"==typeof e?"true"===e.toLowerCase():"number"==typeof e?Boolean(e):e}},573:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"OverlayTick"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"millis"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Float"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"overlaysTick"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"millis"},value:{kind:"Variable",name:{kind:"Name",value:"millis"}}}],directives:[]}]}}],loc:{start:0,end:96}};n.loc.source={body:"mutation OverlayTick($id: String!, $millis: Float!) {\n  overlaysTick(id: $id, millis: $millis)\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,t)})),e.definitions&&e.definitions.forEach((function(e){o(e,t)}))}var r={};function l(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;o(e,t),r[e.name.value]=t}})),e.exports=n,e.exports.OverlayTick=function(e,t){var n={kind:e.kind,definitions:[l(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var o=r[t]||new Set,c=new Set,d=new Set;for(o.forEach((function(e){d.add(e)}));d.size>0;){var m=d;d=new Set,m.forEach((function(e){c.has(e)||(c.add(e),(r[e]||new Set).forEach((function(e){d.add(e)})))}))}return c.forEach((function(t){var o=l(e,t);o&&n.definitions.push(o)})),n}(n,"OverlayTick")},622:function(e,t,n){"use strict";n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return h}));const o=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,r=536870912,l=1073741824,c=new WeakMap;var d;const m=((e,t)=>n=>{const c=t.get(n);let d=void 0===c?n.size:c<l?c+1:0;if(!n.has(d))return e(n,d);if(n.size<r){for(;n.has(d);)d=Math.floor(Math.random()*l);return e(n,d)}if(n.size>o)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;n.has(d);)d=Math.floor(Math.random()*o);return e(n,d)})((d=c,(e,t)=>(d.set(e,t),t)),c);let f=null;const v=((e,t)=>()=>{if(null!==f)return f;const n=new Blob([t],{type:"application/javascript; charset=utf-8"}),o=URL.createObjectURL(n);return f=e(o),f.setTimeout((()=>URL.revokeObjectURL(o)),0),f})((e=>{const t=new Map([[0,()=>{}]]),n=new Map([[0,()=>{}]]),o=new Map,r=new Worker(e);r.addEventListener("message",(({data:data})=>{if(void 0!==(e=data).method&&"call"===e.method){const{params:{timerId:e,timerType:r}}=data;if("interval"===r){const n=t.get(e);if("number"==typeof n){const t=o.get(n);if(void 0===t||t.timerId!==e||t.timerType!==r)throw new Error("The timer is in an undefined state.")}else{if(void 0===n)throw new Error("The timer is in an undefined state.");n()}}else if("timeout"===r){const t=n.get(e);if("number"==typeof t){const n=o.get(t);if(void 0===n||n.timerId!==e||n.timerType!==r)throw new Error("The timer is in an undefined state.")}else{if(void 0===t)throw new Error("The timer is in an undefined state.");t(),n.delete(e)}}}else{if(!(e=>null===e.error&&"number"==typeof e.id)(data)){const{error:{message:e}}=data;throw new Error(e)}{const{id:e}=data,r=o.get(e);if(void 0===r)throw new Error("The timer is in an undefined state.");const{timerId:l,timerType:c}=r;o.delete(e),"interval"===c?t.delete(l):n.delete(l)}}var e}));return{clearInterval:e=>{const n=m(o);o.set(n,{timerId:e,timerType:"interval"}),t.set(e,n),r.postMessage({id:n,method:"clear",params:{timerId:e,timerType:"interval"}})},clearTimeout:e=>{const t=m(o);o.set(t,{timerId:e,timerType:"timeout"}),n.set(e,t),r.postMessage({id:t,method:"clear",params:{timerId:e,timerType:"timeout"}})},setInterval:(e,n)=>{const o=m(t);return t.set(o,(()=>{e(),"function"==typeof t.get(o)&&r.postMessage({id:null,method:"set",params:{delay:n,now:performance.now(),timerId:o,timerType:"interval"}})})),r.postMessage({id:null,method:"set",params:{delay:n,now:performance.now(),timerId:o,timerType:"interval"}}),o},setTimeout:(e,t)=>{const o=m(n);return n.set(o,e),r.postMessage({id:null,method:"set",params:{delay:t,now:performance.now(),timerId:o,timerType:"timeout"}}),o}}}),'(()=>{"use strict";const e=new Map,t=new Map,r=(e,t)=>{let r,o;const i=performance.now();r=i,o=e-Math.max(0,i-t);return{expected:r+o,remainingDelay:o}},o=(e,t,r,i)=>{const s=performance.now();s>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:i}}):e.set(t,setTimeout(o,r-s,e,t,r,i))};addEventListener("message",(i=>{let{data:s}=i;try{if("clear"===s.method){const{id:r,params:{timerId:o,timerType:i}}=s;if("interval"===i)(t=>{const r=e.get(t);if(void 0===r)throw new Error(\'There is no interval scheduled with the given id "\'.concat(t,\'".\'));clearTimeout(r),e.delete(t)})(o),postMessage({error:null,id:r});else{if("timeout"!==i)throw new Error(\'The given type "\'.concat(i,\'" is not supported\'));(e=>{const r=t.get(e);if(void 0===r)throw new Error(\'There is no timeout scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(r),t.delete(e)})(o),postMessage({error:null,id:r})}}else{if("set"!==s.method)throw new Error(\'The given method "\'.concat(s.method,\'" is not supported\'));{const{params:{delay:i,now:n,timerId:a,timerType:d}}=s;if("interval"===d)((t,i,s)=>{const{expected:n,remainingDelay:a}=r(t,s);e.set(i,setTimeout(o,a,e,i,n,"interval"))})(i,a,n);else{if("timeout"!==d)throw new Error(\'The given type "\'.concat(d,\'" is not supported\'));((e,i,s)=>{const{expected:n,remainingDelay:a}=r(e,s);t.set(i,setTimeout(o,a,t,i,n,"timeout"))})(i,a,n)}}}}catch(e){postMessage({error:{message:e.message},id:s.id,result:null})}}))})();'),w=(e,t)=>v().setInterval(e,t),h=(e,t)=>v().setTimeout(e,t)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1020:function(e,t,n){"use strict";n.r(t);var o=n(45),r=(n(26),n(22),n(27),n(41),n(23),n(47),n(44),n(36),n(66),n(24),n(49),n(59),n(16)),c=n(12),l=n(20),d=(n(78),n(11),n(43),n(38),n(472),n(308),n(113),n(42),n(112),n(77),n(70),n(87),n(567)),m=n(170),f=n(3),v=n(471),h=n(307),y=n(512);function x(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw r}}}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var M={};M.props={opts:Object},M.setup=function(e,t){var n=e,c=Object(f.ref)({mdiDeviantart:d.d,mdiDiscord:d.f,mdiFacebook:d.h,mdiGithub:d.i,mdiGoogle:d.j,mdiInstagram:d.k,mdiLinkedin:d.l,mdiMicrosoftWindows:d.m,mdiMicrosoftXbox:d.n,mdiPinterest:d.o,mdiReddit:d.p,mdiSkype:d.q,mdiSnapchat:d.r,mdiSonyPlaystation:d.s,mdiSpotify:d.t,mdiSteam:d.v,mdiTwitter:d.w,mdiYoutube:d.x}),w=Object(f.ref)(Object(h.defaultsDeep)(n.opts,{speed:"medium",social:[],customTexts:[],clips:{play:!0,period:"custom",periodValue:31,numOfClips:3,volume:20},text:{lastMessage:"Thanks for watching",lastSubMessage:"~ see you on the next stream ~",streamBy:"Stream by",follow:"Followed by",host:"Hosted by",raid:"Raided by",cheer:"Cheered by",sub:"Subscribed by",resub:"Resubscribed by",subgift:"Subgifts by",subcommunitygift:"Community subgifts by",tip:"Tips by"},show:{follow:!0,host:!0,raid:!0,sub:!0,subgift:!0,subcommunitygift:!0,resub:!0,cheer:!0,clips:!0,tip:!0}})),O=new URL(location.href),M=Object(f.ref)(!!O.searchParams.get("debug")),_=Object(f.ref)([]),P=Object(f.ref)([]),k=Object(f.ref)([]),E=Object(f.ref)(0),S=Object(f.ref)(!1),C=Object(f.ref)(!1),I=Object(f.ref)(!1),B=Object(f.ref)(50),z=Object(o.useNuxtApp)().$store;Object(f.onMounted)((function(){Object(m.getSocket)("/overlays/credits",!0).emit("load",function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(t,n){var o,c,l,d,f,v,O,object,M,E,C,I,T,H,html,i,D,R,A,N,L,V,U,F,$,G,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return console.error(t),e.abrupt("return");case 3:return"very slow"===w.value.speed&&(B.value=50),"slow"===w.value.speed&&(B.value=25),"medium"===w.value.speed&&(B.value=15),"fast"===w.value.speed&&(B.value=5),"very fast"===w.value.speed&&(B.value=2),_.value.push([{text:n.game,class:"game",index:Math.random()},{text:n.title,class:"title",index:Math.random()},{text:w.value.text.streamBy,class:"header3",index:Math.random()},{text:n.streamer,class:"streamer",index:Math.random()},{text:"",class:"separator",index:Math.random()},{image:"https://static-cdn.jtvnw.net/ttv-boxart/"+encodeURIComponent(n.game)+"-600x840.jpg",type:"image",class:"image",index:Math.random()}]),e.next=11,new Promise((function(e){fetch("https://static-cdn.jtvnw.net/ttv-boxart/"+encodeURIComponent(n.game)+"-600x840.jpg").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.blob()})).then((function(){console.debug("ttv-boxart loaded"),e(!0)})).catch((function(){console.error("ttv-boxart not loaded")}))}));case 11:return e.next=13,new Promise((function(e){Object(m.getSocket)("/overlays/credits",!0).emit("getClips",j({show:w.value.show.clips},w.value.clips),(function(data){k.value=data,console.log("Clips loaded",data),e(!0)}))}));case 13:o="",c=[],l=!0,d=0,f=Object.entries(Object(h.groupBy)(n.events,"event"));case 17:if(!(d<f.length)){e.next=28;break}if(v=Object(r.a)(f[d],2),O=v[0],object=v[1],w.value.show[O]){e.next=21;break}return e.abrupt("continue",25);case 21:for(O!==o&&(o=O,c.push({text:w.value.text[O],class:l?"header1 withoutPadding":"header1",index:Math.random()}),l=!1),M=Object.entries(Object(h.groupBy)(object,"username")),E=0,C=M;E<C.length;E++)I=Object(r.a)(C[E],2),T=I[0],H=I[1],html=T,"cheer"===O?html='<strong style="font-size:65%">'.concat(H.reduce((function(a,b){return a+Number(b.values.bits)}),0)," bits</strong> <br> ").concat(T):["raid","host"].includes(O)?html='<strong style="font-size:65%">'.concat(H.reduce((function(a,b){return a+Number(b.values.viewers)}),0)," viewers</strong> <br> ").concat(T):["resub"].includes(O)?html='<strong style="font-size:65%">'.concat(H[0].values.subCumulativeMonths," months</strong> <br> ").concat(T):["tip"].includes(O)&&(html='<strong style="font-size:65%">'.concat(Intl.NumberFormat(z.state.configuration.lang,{style:"currency",currency:H[0].values.currency}).format(Number(H.reduce((function(a,b){return a+Number(b.values.amount)}),0))),"</strong> <br> ").concat(T)),c.push({text:html,class:"text4 column",index:Math.random()});for(i=0;i<3-M.length%3;i++)c.push({text:"",class:"text4 column",index:Math.random()});case 25:d++,e.next=17;break;case 28:if(c.length>0&&_.value.push(c),y.a)for(D=0,R=k.value.length;D<R;D++)P.value.push(_.value.length),A=k.value[D],_.value.push([{text:A.game,class:"clip_game",index:Math.random()},{text:A.title,class:"clip_title",index:Math.random()},{text:A.creator_name,class:"clip_createdBy",index:Math.random()},{text:D+1,class:"clip_index",index:Math.random()},{clip:A.mp4,class:"clip_video",type:"video",index:Math.random()}]);else console.error("We are sorry, but this browser doesn't support video mp4/h264. Clips won't be shown.");if(w.value.customTexts.length>0){c=[],N=x(w.value.customTexts);try{for(N.s();!(L=N.n()).done;)V=L.value,U="header2","header"===V.type&&(U="header3"),"text"===V.type&&(U="text3"),"smallText"===V.type&&(U="text4"),"separator"===V.type&&(U="separator",V.left="",V.right="",V.middle=""),c.push({text:V.left,class:U+" column",index:Math.random()}),c.push({text:V.middle,class:U+" column",index:Math.random()}),c.push({text:V.right,class:U+" column",index:Math.random()})}catch(e){N.e(e)}finally{N.f()}c.length>0&&_.value.push(c)}F=[],$=x(w.value.social);try{for($.s();!(G=$.n()).done;)s=G.value,F.push({text:s.text,type:"with-icon",class:s.type,index:Math.random()})}catch(e){$.e(e)}finally{$.f()}_.value.push([{text:w.value.text.lastMessage,class:"header1",index:Math.random()},{text:w.value.text.lastSubMessage,class:"text2",index:Math.random()},{text:"",class:"separator",index:Math.random()}].concat(F)),S.value=!0;case 36:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}));var T=Object(f.computed)((function(){return _.value[E.value]}));return Object(f.watch)(I,(function(e){e&&_.value[E.value+1]&&(document.getElementById("page").style.top=window.innerHeight+"px",I.value=!1,C.value=!1,E.value++)})),Object(f.watch)(S,(function(){setInterval((function(){if(!C.value){if(0===document.getElementById("page").clientHeight)return;document.getElementById("page").style.top=window.innerHeight+"px",Object(f.nextTick)((function(){if(C.value=!0,P.value.includes(E.value)){var e=window.innerHeight*B.value,t=(document.getElementById("page").clientHeight+100)*B.value;v.default.to(document.getElementById("page"),{duration:e/1e3,top:0,ease:"sine.out",onComplete:function(){var video=document.getElementById("video");video.volume=w.value.clips.volume/100,w.value.clips.play?(video.play(),video.onended=function(){v.default.to(document.getElementById("page"),{duration:t/1e3,top:-(document.getElementById("page").clientHeight+100),ease:"sine.in",onComplete:function(){I.value=!0}})}):v.default.to(document.getElementById("page"),{duration:t/1e3,top:-(document.getElementById("page").clientHeight+100),ease:"none",onComplete:function(){I.value=!0}})}})}else{var n=_.value[E.value+1]?-(document.getElementById("page").clientHeight+100):0,o=(window.innerHeight+-n)*B.value;v.default.to(document.getElementById("page"),{duration:o/1e3,top:n,ease:0===n?"sine.out":"none",onComplete:function(){I.value=!0}})}}))}}),1e3)})),{isVideoSupported:y.a,icons:c,isDebug:M,clipsPages:P,currentPage:E,isLoaded:S,isPlaying:C,isEnded:I,current:T}};var _=M,P=(n(786),n(95)),k=n(465),E=n.n(k),S=n(528),component=Object(P.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isDebug?n("pre",{staticClass:"debug"},[e._v("isVideoSupported: "+e._s(e.isVideoSupported)+"\nsettings: "+e._s(e.settings)+"\ncurrentPage: "+e._s(e.currentPage)+"\nclipsPages: "+e._s(e.clipsPages)+"\nisLoaded: "+e._s(e.isLoaded)+"\nisPlaying: "+e._s(e.isPlaying)+"\nisEnded: "+e._s(e.isEnded)+"\ncurrent: "+e._s(e.current)+"\n  ")]):e._e(),e._v(" "),n("div",{staticClass:"page",attrs:{id:"page"}},[e._l(e.current,(function(t){return["video"===t.type?n("video",{key:t.index,staticClass:"video",attrs:{id:"video",playsinline:""}},[n("source",{attrs:{src:t.clip,type:"video/mp4"}})]):"with-icon"===t.type?n("div",{key:t.index,staticClass:"text4",staticStyle:{"text-align":"left","padding-left":"5vw","padding-top":"0"}},[n("v-icon",{attrs:{color:"white","x-large":"",left:""}},[e._v("\n            "+e._s(e.icons[t.class])+"\n          ")]),e._v("\n          "+e._s(t.text)+"\n        ")],1):"image"===t.type?n("img",{key:t.index,class:t.class,attrs:{src:t.image}}):n("div",{key:t.index,class:t.class,domProps:{innerHTML:e._s(t.text)}})]}))],2)])}),[],!1,null,null,null);t.default=component.exports;E()(component,{VIcon:S.a})},512:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o,r,c=document.createElement("video");c.canPlayType&&(o=""!==c.canPlayType('video/mp4; codecs="mp4v.20.8"'),r=""!==(c.canPlayType('video/mp4; codecs="avc1.42E01E"')||c.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')));var l=o||r},642:function(e,t,n){var content=n(787);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(111).default)("cae7942a",content,!0,{sourceMap:!1})},786:function(e,t,n){"use strict";n(642)},787:function(e,t,n){var o=n(110)((function(i){return i[1]}));o.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Cabin+Condensed);"]),o.push([e.i,'.debug{z-index:9999;background-color:rgba(0,0,0,.5);position:absolute;color:#fff;padding:1rem}svg{filter:drop-shadow(0 0 .2rem #000)}div.page{font-family:"Cabin Condensed",sans-serif;text-align:center;text-transform:uppercase;color:#fff;position:relative;text-shadow:0 0 1rem #000;top:-9999px;margin:5vh}.streamer{font-size:2vw}.game{font-size:4vw}.title{font-size:2.5vw}.column{display:inline-block;width:33%}.text4{font-size:2vw}.text3,.text4{padding-top:2vw}.text3{font-size:2.5vw}.text2{font-size:3vw}.text1,.text2{padding-top:2vw}.text1{font-size:3.5vw}.image{width:30vw}.header3{font-size:2.5vw}.header2,.header3{padding-top:2vw;font-weight:700}.header2{font-size:3vw}.withoutPadding{padding-top:0!important}.header1,.separator{padding-top:10vw}.header1{font-size:3.5vw;font-weight:700}.clip_createdBy,.clip_game,.clip_title{text-align:left;font-size:3vw}.clip_createdBy{font-size:2.5vw}.clip_game{font-weight:700}.clip_index{font-size:10vw;position:absolute;right:2.5vw;top:0}.video{width:100%;padding-top:8vh;max-height:65vh}',""]),o.locals={},e.exports=o}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1028:function(t,e,n){"use strict";n.r(e);var o=n(3),meta=n(487),l=(n(11),n(43),n(38),n(472),n(308),n(70),n(66),n(77),n(87),n(24),n(50),n(36),n(328),n(145),n(112),n(42),n(27),n(234),n(28),n(44),n(22),n(49),n(59),n(985)),r=n.n(l),h=n(987),c=n(170),d=n(484),m=n(471),w=n(307),f=n(488),v=n.n(f);function x(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r=!0,h=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return r=t.done,t},e:function(t){h=!0,l=t},f:function(){try{r||null==n.return||n.return()}finally{if(h)throw l}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var A={};A.setup=function(t,e){var n="",l=!!new URL(location.href).searchParams.get("debug"),f=Object(o.ref)([]),v=Object(o.ref)(null),y=Object(o.ref)(0),A=Object(o.ref)(!1),S=Object(o.ref)(!1),data=Object(o.ref)(null),T=Object(o.ref)(0),D=Object(o.ref)(1),k=Object(o.ref)(!0),F=Object(o.ref)(0),_=Object(o.ref)(0),W=Object(o.ref)(!1),M=Object(o.ref)(null),C=Object(o.ref)(null),z=Object(o.ref)([]);Object(meta.useMeta)((function(){return v.value&&n!==v.value?(n=v.value,setTimeout((function(){O()}),1e3),{script:[{hid:"responsivevoice",src:"https://code.responsivevoice.org/responsivevoice.js?key="+v.value}]}):{}}));var I={0:function(){return void 0!==window.responsiveVoice&&window.responsiveVoice.isPlaying()},1:function(){return S.value}},O=function t(){void 0!==window.responsiveVoice?(window.responsiveVoice.init(),console.debug("= ResponsiveVoice init OK"),A.value=!0):setTimeout((function(){return t()}),200)},R=function t(text,e,o,l,r){A.value?I[y.value]()?setTimeout((function(){return t(text,e,o,l,r)}),1e3):0===y.value?window.responsiveVoice.speak(text,e,{rate:o,pitch:l,volume:r}):(S.value=!0,Object(c.getSocket)("/core/tts",!0).emit("speak",{voice:e,rate:o,pitch:l,volume:r,key:n,text:text},(function(t,e){if(t)return S.value=!1,console.error(t);var n=new Audio("data:audio/mp3;base64,"+e);n.play(),n.onended=function(){return S.value=!1}}))):console.error("TTS is not properly set, skipping")};Object(o.onMounted)((function(){console.log("====== RANDOMIZER ======"),setInterval((function(){Object(c.getSocket)("/registries/randomizer",!0).emit("randomizer::getVisible",(function(t,e){if(t)return console.error(t);if(e)if(0!==e.items.length){var head=document.getElementsByTagName("head")[0],style=document.createElement("style");if(style.type="text/css",!f.value.includes(e.customizationFont.family)){console.debug("Loading font",e.customizationFont.family),f.value.push(e.customizationFont.family);var n="@import url('https://fonts.googleapis.com/css?family="+e.customizationFont.family.replace(/ /g,"+")+"');";return style.appendChild(document.createTextNode(n)),void head.appendChild(style)}var l=!1;Object(w.isEqual)(e,data.value)||(T.value=Math.floor(Math.random()*V(e.items).length),l=!0,data.value=e),Object(o.nextTick)((function(){if("simple"===e.type&&N(),l&&"wheelOfFortune"===e.type){var t,n=[],o=x(V(e.items));try{for(o.s();!(t=o.n()).done;){var option=t.value;n.push({fillStyle:option.color,textFillStyle:Object(h.getContrastColor)(option.color),text:option.name})}}catch(t){o.e(t)}finally{o.f()}m.default.to(document.getElementById("canvas"),{duration:1.5,opacity:1}),M.value=new r.a({numSegments:V(e.items).length,outerRadius:450,centerX:960,centerY:540,textFontSize:e.customizationFont.size,textFontWeight:e.customizationFont.weight,textFontFamily:e.customizationFont.family,segments:n,responsive:!0,animation:{type:"spinToStop",duration:10,spins:5,easing:"Back.easeOut.config(4)",callbackFinished:B,callbackAfter:j,callbackSound:function(){if(e.shouldPlayTick){var audio=new Audio("".concat(location.origin,"/_static/click_wheel.mp3"));audio.volume=e.tickVolume/100,audio.play()}},soundTrigger:"pin",yoyo:!0},pins:{number:12,fillStyle:"silver",outerRadius:4}}),j()}}))}else console.error("No items detected in your randomizer");else data.value=null}))}),1e3),Object(c.getSocket)("/registries/randomizer",!0).on("spin",(function(t){var e=t.service,o=t.key;0===e?v.value=o:(v.value=null,n=o,A.value=!0),y.value=e,P()}))}));var B=function(){C.value=M.value.getIndicatedSegment(),setTimeout((function(){data.value&&data.value.tts.enabled&&C.value&&R(C.value.text,data.value.tts.voice,data.value.tts.rate,data.value.tts.pitch,data.value.tts.volume)}),1e3),setTimeout((function(){C.value=null}),5e3)},j=function(){var t=M.value.ctx;t.strokeStyle="navy",t.fillStyle="aqua",t.lineWidth=2,t.beginPath();var e=945;t.moveTo(e,80),t.lineTo(975,80),t.lineTo(960,95),t.lineTo(946,80),t.stroke(),t.fill()},P=function(){if(null!==data.value){if("wheelOfFortune"===data.value.type&&M.value&&(M.value.rotationAngle=M.value.rotationAngle%360,M.value.startAnimation()),"tape"===data.value.type){var t,e;if(W.value)return;W.value=!0;var n=(null!==(t=null===(e=document.getElementById("tape"))||void 0===e?void 0:e.clientWidth)&&void 0!==t?t:0)/(_.value+5),o=Math.floor(5*Math.random());_.value+=o;var l=n*(_.value+1)+Math.floor(Math.random()*n);m.default.to(document.getElementById("tape"),{x:-l,duration:5+5*Math.random(),ease:"ease-out",onComplete:function(){W.value=!1;var element,t,e=function(){for(var t=window.innerWidth,element=null,e=0,n=Array.from(null!==(o=null===(l=document.getElementById("tape"))||void 0===l?void 0:l.children)&&void 0!==o?o:[]);e<n.length;e++){var o,l,r=n[e];if(!(r.getBoundingClientRect().x<t/2))break;element=r}return element}();e&&(data.value&&data.value.tts.enabled&&R(e.innerHTML.trim(),data.value.tts.voice,data.value.tts.rate,data.value.tts.pitch,data.value.tts.volume),element=e,(t=m.default.timeline({repeat:4,repeatDelay:0})).to(element,{backgroundColor:"darkorange"}),t.to(element,{backgroundColor:element.style.backgroundColor}))}})}if("simple"===data.value.type){if(F.value>0)return;F.value=500+Math.floor(Math.random()*V(data.value.items).length),D.value=1;var r=function t(){F.value>-10?(k.value=!k.value,F.value--,setTimeout(t,100)):k.value=!0};!function t(){null!==data.value&&(F.value>300?D.value=5:F.value>80?D.value=10:F.value>60?D.value=30:F.value>40?D.value=50:F.value>30?D.value=75:F.value>20?D.value=100:F.value>5?D.value=200:F.value>2?D.value=500:D.value=1e3,T.value++,void 0===V(data.value.items)[T.value]&&(T.value=0),F.value--,F.value>0?setTimeout(t,D.value):setTimeout((function(){Math.random()>.3?(r(),data.value&&data.value.tts.enabled&&R(V(data.value.items)[T.value].name,data.value.tts.voice,data.value.tts.rate,data.value.tts.pitch,data.value.tts.volume)):t()}),D.value))}()}}},N=function(){z.value=[];var t=document.getElementById("positionAnchor");if(t){var e,n;if("simple"!==(null===(e=data.value)||void 0===e?void 0:e.type)){if("tape"===(null===(n=data.value)||void 0===n?void 0:n.type)){var o=window.innerHeight/100;return"translate(0, ".concat(data.value.position.y*o,"px)")}return"translate(0, 0)"}var l=t.children[0];if(l)for(var r=l.children,i=0;i<r.length;i++)if(r[i]&&data.value){var h=window.innerWidth/100,c=window.innerHeight/100,d=0;"middle"===data.value.position.anchorY?d=Number(window.getComputedStyle(r[i]).getPropertyValue("height").replace("px",""))/2:"bottom"===data.value.position.anchorY&&(d=Number(window.getComputedStyle(r[i]).getPropertyValue("height").replace("px","")));var m=0;"middle"===data.value.position.anchorX?m=Number(window.getComputedStyle(r[i]).getPropertyValue("width").replace("px",""))/2:"right"===data.value.position.anchorX&&(m=Number(window.getComputedStyle(r[i]).getPropertyValue("width").replace("px",""))),z.value[i]="translate(".concat(data.value.position.x*h-m,"px, ").concat(data.value.position.y*c-d,"px)")}else z.value[i]="translate(0, 0)"}},V=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=Object(w.cloneDeep)(Object(w.orderBy)(e,"order"));e=(e=Object(w.cloneDeep)(Object(w.orderBy)(e,"order"))).filter((function(t){return t.numOfDuplicates>0}));var l,r=function t(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,l=e.find((function(t){return t.groupId===n.id}));return l?t(l,o+1):o},h=function(t){var e=n.map((function(t){return t.name})).lastIndexOf(t.name),o=n.length;return-1===e||e+t.minimalSpacing+r(t)<o},c=function t(n,o){var l=e.find((function(t){return t.groupId===n.id}));l&&(o.push(l),t(l,o))},d=x(e);try{for(d.s();!(l=d.n()).done;){var m=l.value;m.numOfDuplicates>0&&h(m)&&!m.groupId&&(n.push(m),m.numOfDuplicates--,c(m,n))}}catch(t){d.e(t)}finally{d.f()}return e.filter((function(t){return t.numOfDuplicates>0})).length>0&&!Object(w.isEqual)(e.filter((function(t){return t.numOfDuplicates>0})),o)&&t(e,n),n};return{getContrastColor:h.getContrastColor,shadowGenerator:d.shadowGenerator,textStrokeGenerator:d.textStrokeGenerator,isDebug:l,data:data,showSimpleValueIndex:T,showSimpleBlink:k,tapeLoops:_,wheelWin:C,position:z,positionGenerator:N,generateItems:V}},A.components=Object.assign({JsonViewer:v.a},A.components);var S=A,T=(n(988),n(95)),component=Object(T.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isDebug?n("div",{staticClass:"debug"},[n("json-viewer",{attrs:{value:t.data||{},boxed:"",copyable:"","expand-depth":4}})],1):t._e(),t._v(" "),n("div",{attrs:{id:"positionAnchor"}},[t.data&&"tape"===t.data.type?n("div",{staticStyle:{width:"max-content"},style:{transform:t.positionGenerator()}},[n("div",{style:{"text-align":"center","z-index":9999,left:"50%",width:"2px",height:"50px",position:"absolute",margin:"auto","border-left":"3px solid black","border-right":"3px solid white"}}),t._v(" "),n("div",{attrs:{id:"tape"}},[t._l(t.tapeLoops+5,(function(e){return t._l(t.generateItems(t.data.items),(function(o,l){return n("div",{key:"tape-"+l+"-"+e,style:{"background-color":o.color,color:t.getContrastColor(o.color),width:"fit-content",padding:"10px",display:"inline-block","font-size":t.data.customizationFont.size+"px","font-weight":t.data.customizationFont.weight,"font-family":t.data.customizationFont.family,"text-shadow":[t.textStrokeGenerator(t.data.customizationFont.borderPx,t.data.customizationFont.borderColor),t.shadowGenerator(t.data.customizationFont.shadow)].filter(Boolean).join(", "),transform:t.position[l]?t.position[l]:""}},[t._v("\n            "+t._s(o.name)+"\n          ")])}))}))],2)]):t._e(),t._v(" "),t.data&&"simple"===t.data.type?n("div",t._l(t.generateItems(t.data.items),(function(e,o){return n("div",{key:"simple-"+o,staticStyle:{position:"absolute"},style:{visibility:t.showSimpleBlink&&o===t.showSimpleValueIndex?"visible":"hidden",color:e.color,"font-size":t.data.customizationFont.size+"px","font-weight":t.data.customizationFont.weight,"font-family":t.data.customizationFont.family,"text-shadow":[t.textStrokeGenerator(t.data.customizationFont.borderPx,t.data.customizationFont.borderColor),t.shadowGenerator(t.data.customizationFont.shadow)].filter(Boolean).join(", "),transform:t.position[o]?t.position[o]:""}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0):t._e()]),t._v(" "),t.data&&"wheelOfFortune"===t.data.type?n("div",[n("canvas",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"canvas",width:"1920",height:"1080","data-responsiveMinWidth":"180","data-responsiveScaleHeight":"true","data-responsiveMargin":"1"}},[t._v("\n      Canvas not supported, use another browser.\n    ")]),t._v(" "),t.wheelWin?n("div",{style:{color:t.getContrastColor(t.wheelWin.fillStyle),"font-weight":t.data.customizationFont.weight,"font-size":t.data.customizationFont.size+15+"px","font-family":t.data.customizationFont.family,"text-align":"center","background-color":t.wheelWin.fillStyle,"text-shadow":[t.textStrokeGenerator(t.data.customizationFont.borderPx,t.data.customizationFont.borderColor),t.shadowGenerator(t.data.customizationFont.shadow)].filter(Boolean).join(", ")},attrs:{id:"winbox"}},[t._v("\n      "+t._s(t.wheelWin.text)+"\n    ")]):t._e()]):t._e()])}),[],!1,null,"7cef23b8",null);e.default=component.exports},487:function(t,e,n){"use strict";n.r(e);var o=n(114);n.d(e,"useMeta",(function(){return o.a}))},736:function(t,e,n){var content=n(989);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("373ecc9a",content,!0,{sourceMap:!1})},985:function(t,e,n){t.exports=n(986).default},986:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);const gsap=__webpack_require__(471).gsap;function Winwheel(t,e){let n={canvasId:"canvas",centerX:null,centerY:null,outerRadius:null,innerRadius:0,numSegments:1,drawMode:"code",rotationAngle:0,textFontFamily:"Arial",textFontSize:20,textFontWeight:"bold",textOrientation:"horizontal",textAlignment:"center",textDirection:"normal",textMargin:null,textFillStyle:"black",textStrokeStyle:null,textLineWidth:1,fillStyle:"silver",strokeStyle:"black",lineWidth:1,clearTheCanvas:!0,imageOverlay:!1,drawText:!0,pointerAngle:0,wheelImage:null,imageDirection:"N",responsive:!1,scaleFactor:1};for(let e in n)null!=t&&void 0!==t[e]?this[e]=t[e]:this[e]=n[e];if(null!=t)for(let e in t)void 0===this[e]&&(this[e]=t[e]);this.canvasId?(this.canvas=document.getElementById(this.canvasId),this.canvas?(null==this.centerX&&(this.centerX=this.canvas.width/2),null==this.centerY&&(this.centerY=this.canvas.height/2),null==this.outerRadius&&(this.canvas.width<this.canvas.height?this.outerRadius=this.canvas.width/2-this.lineWidth:this.outerRadius=this.canvas.height/2-this.lineWidth),this.ctx=this.canvas.getContext("2d")):(this.canvas=null,this.ctx=null)):(this.canvas=null,this.ctx=null),this.segments=new Array(null);for(let e=1;e<=this.numSegments;e++)null!=t&&t.segments&&void 0!==t.segments[e-1]?this.segments[e]=new Segment(t.segments[e-1]):this.segments[e]=new Segment;if(this.updateSegmentSizes(),null===this.textMargin&&(this.textMargin=this.textFontSize/1.7),null!=t&&t.animation&&void 0!==t.animation?this.animation=new Animation(t.animation):this.animation=new Animation,null!=t&&t.pins&&void 0!==t.pins&&(this.pins=new Pin(t.pins)),"image"==this.drawMode||"segmentImage"==this.drawMode?(void 0===t.fillStyle&&(this.fillStyle=null),void 0===t.strokeStyle&&(this.strokeStyle="red"),void 0===t.drawText&&(this.drawText=!1),void 0===t.lineWidth&&(this.lineWidth=1),void 0===e&&(e=!1)):void 0===e&&(e=!0),null!=t&&t.pointerGuide&&void 0!==t.pointerGuide?this.pointerGuide=new PointerGuide(t.pointerGuide):this.pointerGuide=new PointerGuide,this.responsive&&(winwheelToDrawDuringAnimation=this,this._originalCanvasWidth=this.canvas.width,this._originalCanvasHeight=this.canvas.height,this._responsiveScaleHeight=this.canvas.dataset.responsivescaleheight,this._responsiveMinWidth=this.canvas.dataset.responsiveminwidth,this._responsiveMinHeight=this.canvas.dataset.responsiveminheight,this._responsiveMargin=this.canvas.dataset.responsivemargin,window.addEventListener("load",winwheelResize),window.addEventListener("resize",winwheelResize)),1==e)this.draw(this.clearTheCanvas);else if("segmentImage"==this.drawMode){winwheelToDrawDuringAnimation=this,winhweelAlreadyDrawn=!1;for(let t=1;t<=this.numSegments;t++)null!==this.segments[t].image&&(this.segments[t].imgData=new Image,this.segments[t].imgData.onload=winwheelLoadedImage,this.segments[t].imgData.src=this.segments[t].image)}}function Pin(t){let e={visible:!0,number:36,outerRadius:3,fillStyle:"grey",strokeStyle:"black",lineWidth:1,margin:3,responsive:!1};for(let n in e)null!=t&&void 0!==t[n]?this[n]=t[n]:this[n]=e[n];if(null!=t)for(let e in t)void 0===this[e]&&(this[e]=t[e])}function Animation(t){let e={type:"spinOngoing",direction:"clockwise",propertyName:null,propertyValue:null,duration:10,yoyo:!1,repeat:null,easing:null,stopAngle:null,spins:null,clearTheCanvas:null,callbackFinished:null,callbackBefore:null,callbackAfter:null,callbackSound:null,soundTrigger:"segment"};for(let n in e)null!=t&&void 0!==t[n]?this[n]=t[n]:this[n]=e[n];if(null!=t)for(let e in t)void 0===this[e]&&(this[e]=t[e])}function Segment(t){let e={size:null,text:"",fillStyle:null,strokeStyle:null,lineWidth:null,textFontFamily:null,textFontSize:null,textFontWeight:null,textOrientation:null,textAlignment:null,textDirection:null,textMargin:null,textFillStyle:null,textStrokeStyle:null,textLineWidth:null,image:null,imageDirection:null,imgData:null};for(let n in e)null!=t&&void 0!==t[n]?this[n]=t[n]:this[n]=e[n];if(null!=t)for(let e in t)void 0===this[e]&&(this[e]=t[e]);this.startAngle=0,this.endAngle=0}function PointerGuide(t){let e={display:!1,strokeStyle:"red",lineWidth:3};for(let n in e)null!=t&&void 0!==t[n]?this[n]=t[n]:this[n]=e[n]}function winwheelPercentToDegrees(t){let e=0;if(t>0&&t<=100){e=360*(t/100)}return e}function winwheelAnimationLoop(){if(winwheelToDrawDuringAnimation){0!=winwheelToDrawDuringAnimation.animation.clearTheCanvas&&winwheelToDrawDuringAnimation.ctx.clearRect(0,0,winwheelToDrawDuringAnimation.canvas.width,winwheelToDrawDuringAnimation.canvas.height);let callbackBefore=winwheelToDrawDuringAnimation.animation.callbackBefore,callbackAfter=winwheelToDrawDuringAnimation.animation.callbackAfter;null!=callbackBefore&&("function"==typeof callbackBefore?callbackBefore():eval(callbackBefore)),winwheelToDrawDuringAnimation.draw(!1),null!=callbackAfter&&("function"==typeof callbackAfter?callbackAfter():eval(callbackAfter)),winwheelToDrawDuringAnimation.animation.callbackSound&&winwheelTriggerSound()}}function winwheelTriggerSound(){0==winwheelToDrawDuringAnimation.hasOwnProperty("_lastSoundTriggerNumber")&&(winwheelToDrawDuringAnimation._lastSoundTriggerNumber=0);let callbackSound=winwheelToDrawDuringAnimation.animation.callbackSound,currentTriggerNumber=0;currentTriggerNumber="pin"==winwheelToDrawDuringAnimation.animation.soundTrigger?winwheelToDrawDuringAnimation.getCurrentPinNumber():winwheelToDrawDuringAnimation.getIndicatedSegmentNumber(),currentTriggerNumber!=winwheelToDrawDuringAnimation._lastSoundTriggerNumber&&("function"==typeof callbackSound?callbackSound():eval(callbackSound),winwheelToDrawDuringAnimation._lastSoundTriggerNumber=currentTriggerNumber)}Winwheel.prototype.updateSegmentSizes=function(){if(this.segments){let t=0,e=0;for(let n=1;n<=this.numSegments;n++)null!==this.segments[n].size&&(t+=this.segments[n].size,e++);let n=360-t,o=0;n>0&&(o=n/(this.numSegments-e));let l=0;for(let t=1;t<=this.numSegments;t++)this.segments[t].startAngle=l,this.segments[t].size?l+=this.segments[t].size:l+=o,this.segments[t].endAngle=l}},Winwheel.prototype.clearCanvas=function(){this.ctx&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},Winwheel.prototype.draw=function(t){this.ctx&&(void 0!==t?1==t&&this.clearCanvas():this.clearCanvas(),"image"==this.drawMode?(this.drawWheelImage(),1==this.drawText&&this.drawSegmentText(),1==this.imageOverlay&&this.drawSegments()):"segmentImage"==this.drawMode?(this.drawSegmentImages(),1==this.drawText&&this.drawSegmentText(),1==this.imageOverlay&&this.drawSegments()):(this.drawSegments(),1==this.drawText&&this.drawSegmentText()),void 0!==this.pins&&1==this.pins.visible&&this.drawPins(),1==this.pointerGuide.display&&this.drawPointerGuide())},Winwheel.prototype.drawPins=function(){if(this.pins&&this.pins.number){let t=this.centerX*this.scaleFactor,e=this.centerY*this.scaleFactor,n=this.outerRadius*this.scaleFactor,o=this.pins.outerRadius,l=this.pins.margin;this.pins.responsive&&(o=this.pins.outerRadius*this.scaleFactor,l=this.pins.margin*this.scaleFactor);let r=360/this.pins.number;for(let i=1;i<=this.pins.number;i++)this.ctx.save(),this.ctx.strokeStyle=this.pins.strokeStyle,this.ctx.lineWidth=this.pins.lineWidth,this.ctx.fillStyle=this.pins.fillStyle,this.ctx.translate(t,e),this.ctx.rotate(this.degToRad(i*r+this.rotationAngle)),this.ctx.translate(-t,-e),this.ctx.beginPath(),this.ctx.arc(t,e-n+o+l,o,0,2*Math.PI),this.pins.fillStyle&&this.ctx.fill(),this.pins.strokeStyle&&this.ctx.stroke(),this.ctx.restore()}},Winwheel.prototype.drawPointerGuide=function(){if(this.ctx){let t=this.centerX*this.scaleFactor,e=this.centerY*this.scaleFactor,n=this.outerRadius*this.scaleFactor;this.ctx.save(),this.ctx.translate(t,e),this.ctx.rotate(this.degToRad(this.pointerAngle)),this.ctx.translate(-t,-e),this.ctx.strokeStyle=this.pointerGuide.strokeStyle,this.ctx.lineWidth=this.pointerGuide.lineWidth,this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(t,-n/4),this.ctx.stroke(),this.ctx.restore()}},Winwheel.prototype.drawWheelImage=function(){if(null!=this.wheelImage){let t=this.centerX*this.scaleFactor,e=this.centerY*this.scaleFactor,n=this.wheelImage.width*this.scaleFactor,o=this.wheelImage.height*this.scaleFactor,l=t-n/2,r=e-o/2;this.ctx.save(),this.ctx.translate(t,e),this.ctx.rotate(this.degToRad(this.rotationAngle)),this.ctx.translate(-t,-e),this.ctx.drawImage(this.wheelImage,l,r,n,o),this.ctx.restore()}},Winwheel.prototype.drawSegmentImages=function(){if(this.ctx){let t=this.centerX*this.scaleFactor,e=this.centerY*this.scaleFactor;if(this.segments)for(let n=1;n<=this.numSegments;n++){let o=this.segments[n];if(o.imgData.height){let n=0,l=0,r=0,h="",c=o.imgData.width*this.scaleFactor,d=o.imgData.height*this.scaleFactor;h=null!==o.imageDirection?o.imageDirection:this.imageDirection,"S"==h?(n=t-c/2,l=e,r=o.startAngle+180+(o.endAngle-o.startAngle)/2):"E"==h?(n=t,l=e-d/2,r=o.startAngle+270+(o.endAngle-o.startAngle)/2):"W"==h?(n=t-c,l=e-d/2,r=o.startAngle+90+(o.endAngle-o.startAngle)/2):(n=t-c/2,l=e-d,r=o.startAngle+(o.endAngle-o.startAngle)/2),this.ctx.save(),this.ctx.translate(t,e),this.ctx.rotate(this.degToRad(this.rotationAngle+r)),this.ctx.translate(-t,-e),this.ctx.drawImage(o.imgData,n,l,c,d),this.ctx.restore()}else console.log("Segment "+n+" imgData is not loaded")}}},Winwheel.prototype.drawSegments=function(){if(this.ctx&&this.segments){let t=this.centerX*this.scaleFactor,e=this.centerY*this.scaleFactor,n=this.innerRadius*this.scaleFactor,o=this.outerRadius*this.scaleFactor;for(let l=1;l<=this.numSegments;l++){let r,h,c,d=this.segments[l];if(r=null!==d.fillStyle?d.fillStyle:this.fillStyle,this.ctx.fillStyle=r,h=null!==d.lineWidth?d.lineWidth:this.lineWidth,this.ctx.lineWidth=h,c=null!==d.strokeStyle?d.strokeStyle:this.strokeStyle,this.ctx.strokeStyle=c,c||r){if(this.ctx.beginPath(),this.innerRadius){let o=Math.cos(this.degToRad(d.startAngle+this.rotationAngle-90))*(n-h/2),l=Math.sin(this.degToRad(d.startAngle+this.rotationAngle-90))*(n-h/2);this.ctx.moveTo(t+o,e+l)}else this.ctx.moveTo(t,e);this.ctx.arc(t,e,o,this.degToRad(d.startAngle+this.rotationAngle-90),this.degToRad(d.endAngle+this.rotationAngle-90),!1),this.innerRadius?this.ctx.arc(t,e,n,this.degToRad(d.endAngle+this.rotationAngle-90),this.degToRad(d.startAngle+this.rotationAngle-90),!0):this.ctx.lineTo(t,e),r&&this.ctx.fill(),c&&this.ctx.stroke()}}}},Winwheel.prototype.drawSegmentText=function(){if(this.ctx){let t,e,n,o,l,r,h,c,d,m,w=this.centerX*this.scaleFactor,f=this.centerY*this.scaleFactor,v=this.outerRadius*this.scaleFactor,x=this.innerRadius*this.scaleFactor;for(let y=1;y<=this.numSegments;y++){this.ctx.save();let A=this.segments[y];if(A.text){t=null!==A.textFontFamily?A.textFontFamily:this.textFontFamily,e=null!==A.textFontSize?A.textFontSize:this.textFontSize,n=null!==A.textFontWeight?A.textFontWeight:this.textFontWeight,o=null!==A.textOrientation?A.textOrientation:this.textOrientation,l=null!==A.textAlignment?A.textAlignment:this.textAlignment,r=null!==A.textDirection?A.textDirection:this.textDirection,h=null!==A.textMargin?A.textMargin:this.textMargin,c=null!==A.textFillStyle?A.textFillStyle:this.textFillStyle,d=null!==A.textStrokeStyle?A.textStrokeStyle:this.textStrokeStyle,m=null!==A.textLineWidth?A.textLineWidth:this.textLineWidth,e*=this.scaleFactor,h*=this.scaleFactor;let y="";null!=n&&(y+=n+" "),null!=e&&(y+=e+"px "),null!=t&&(y+=t),this.ctx.font=y,this.ctx.fillStyle=c,this.ctx.strokeStyle=d,this.ctx.lineWidth=m;let S=A.text.split("\n"),T=0-e*(S.length/2)+e/2;"curved"!=o||"inner"!=l&&"outer"!=l||(T=0);for(let i=0;i<S.length;i++){if("reversed"==r){if("horizontal"==o){this.ctx.textAlign="inner"==l?"right":"outer"==l?"left":"center",this.ctx.textBaseline="middle";let t=this.degToRad(A.endAngle-(A.endAngle-A.startAngle)/2+this.rotationAngle-90-180);this.ctx.save(),this.ctx.translate(w,f),this.ctx.rotate(t),this.ctx.translate(-w,-f),"inner"==l?(c&&this.ctx.fillText(S[i],w-x-h,f+T),d&&this.ctx.strokeText(S[i],w-x-h,f+T)):"outer"==l?(c&&this.ctx.fillText(S[i],w-v+h,f+T),d&&this.ctx.strokeText(S[i],w-v+h,f+T)):(c&&this.ctx.fillText(S[i],w-x-(v-x)/2-h,f+T),d&&this.ctx.strokeText(S[i],w-x-(v-x)/2-h,f+T)),this.ctx.restore()}else if("vertical"==o){this.ctx.textAlign="center",this.ctx.textBaseline="inner"==l?"top":"outer"==l?"bottom":"middle";let t=A.endAngle-(A.endAngle-A.startAngle)/2-180;t+=this.rotationAngle,this.ctx.save(),this.ctx.translate(w,f),this.ctx.rotate(this.degToRad(t)),this.ctx.translate(-w,-f);let n=0;"outer"==l?n=f+v-h:"inner"==l&&(n=f+x+h);let o=e-e/9;if("outer"==l)for(let t=S[i].length-1;t>=0;t--){let e=S[i].charAt(t);c&&this.ctx.fillText(e,w+T,n),d&&this.ctx.strokeText(e,w+T,n),n-=o}else if("inner"==l)for(let t=0;t<S[i].length;t++){let e=S[i].charAt(t);c&&this.ctx.fillText(e,w+T,n),d&&this.ctx.strokeText(e,w+T,n),n+=o}else if("center"==l){let t=0;S[i].length>1&&(t=o*(S[i].length-1)/2);let e=f+x+(v-x)/2+t+h;for(let t=S[i].length-1;t>=0;t--){let n=S[i].charAt(t);c&&this.ctx.fillText(n,w+T,e),d&&this.ctx.strokeText(n,w+T,e),e-=o}}this.ctx.restore()}else if("curved"==o){let t=0;"inner"==l?(t=x+h,this.ctx.textBaseline="top"):"outer"==l?(t=v-h,this.ctx.textBaseline="bottom",t-=e*(S.length-1)):"center"==l&&(t=x+h+(v-x)/2,this.ctx.textBaseline="middle");let n=0,o=0;if(S[i].length>1){this.ctx.textAlign="left",n=e/10*4,n*=100/t;let l=n*S[i].length;o=A.startAngle+((A.endAngle-A.startAngle)/2-l/2)}else o=A.startAngle+(A.endAngle-A.startAngle)/2,this.ctx.textAlign="center";o+=this.rotationAngle,o-=180;for(let e=S[i].length;e>=0;e--){this.ctx.save();let l=S[i].charAt(e);this.ctx.translate(w,f),this.ctx.rotate(this.degToRad(o)),this.ctx.translate(-w,-f),d&&this.ctx.strokeText(l,w,f+t+T),c&&this.ctx.fillText(l,w,f+t+T),o+=n,this.ctx.restore()}}}else if("horizontal"==o){this.ctx.textAlign="inner"==l?"left":"outer"==l?"right":"center",this.ctx.textBaseline="middle";let t=this.degToRad(A.endAngle-(A.endAngle-A.startAngle)/2+this.rotationAngle-90);this.ctx.save(),this.ctx.translate(w,f),this.ctx.rotate(t),this.ctx.translate(-w,-f),"inner"==l?(c&&this.ctx.fillText(S[i],w+x+h,f+T),d&&this.ctx.strokeText(S[i],w+x+h,f+T)):"outer"==l?(c&&this.ctx.fillText(S[i],w+v-h,f+T),d&&this.ctx.strokeText(S[i],w+v-h,f+T)):(c&&this.ctx.fillText(S[i],w+x+(v-x)/2+h,f+T),d&&this.ctx.strokeText(S[i],w+x+(v-x)/2+h,f+T)),this.ctx.restore()}else if("vertical"==o){this.ctx.textAlign="center",this.ctx.textBaseline="inner"==l?"bottom":"outer"==l?"top":"middle";let t=A.endAngle-(A.endAngle-A.startAngle)/2;t+=this.rotationAngle,this.ctx.save(),this.ctx.translate(w,f),this.ctx.rotate(this.degToRad(t)),this.ctx.translate(-w,-f);let n=0;"outer"==l?n=f-v+h:"inner"==l&&(n=f-x-h);let o=e-e/9;if("outer"==l)for(let t=0;t<S[i].length;t++){let e=S[i].charAt(t);c&&this.ctx.fillText(e,w+T,n),d&&this.ctx.strokeText(e,w+T,n),n+=o}else if("inner"==l)for(let t=S[i].length-1;t>=0;t--){let e=S[i].charAt(t);c&&this.ctx.fillText(e,w+T,n),d&&this.ctx.strokeText(e,w+T,n),n-=o}else if("center"==l){let t=0;S[i].length>1&&(t=o*(S[i].length-1)/2);let e=f-x-(v-x)/2-t-h;for(let t=0;t<S[i].length;t++){let n=S[i].charAt(t);c&&this.ctx.fillText(n,w+T,e),d&&this.ctx.strokeText(n,w+T,e),e+=o}}this.ctx.restore()}else if("curved"==o){let t=0;"inner"==l?(t=x+h,this.ctx.textBaseline="bottom",t+=e*(S.length-1)):"outer"==l?(t=v-h,this.ctx.textBaseline="top"):"center"==l&&(t=x+h+(v-x)/2,this.ctx.textBaseline="middle");let n=0,o=0;if(S[i].length>1){this.ctx.textAlign="left",n=e/10*4,n*=100/t;let l=n*S[i].length;o=A.startAngle+((A.endAngle-A.startAngle)/2-l/2)}else o=A.startAngle+(A.endAngle-A.startAngle)/2,this.ctx.textAlign="center";o+=this.rotationAngle;for(let e=0;e<S[i].length;e++){this.ctx.save();let l=S[i].charAt(e);this.ctx.translate(w,f),this.ctx.rotate(this.degToRad(o)),this.ctx.translate(-w,-f),d&&this.ctx.strokeText(l,w,f-t+T),c&&this.ctx.fillText(l,w,f-t+T),o+=n,this.ctx.restore()}}T+=e}}this.ctx.restore()}}},Winwheel.prototype.degToRad=function(t){return.017453292519943295*t},Winwheel.prototype.setCenter=function(t,e){this.centerX=t,this.centerY=e},Winwheel.prototype.addSegment=function(t,e){let n,o=new Segment(t);if(this.numSegments++,void 0!==e){for(let t=this.numSegments;t>e;t--)this.segments[t]=this.segments[t-1];this.segments[e]=o,n=e}else this.segments[this.numSegments]=o,n=this.numSegments;return this.updateSegmentSizes(),this.segments[n]},Winwheel.prototype.setCanvasId=function(t){t?(this.canvasId=t,this.canvas=document.getElementById(this.canvasId),this.canvas&&(this.ctx=this.canvas.getContext("2d"))):(this.canvasId=null,this.ctx=null,this.canvas=null)},Winwheel.prototype.deleteSegment=function(t){if(this.numSegments>1){if(void 0!==t)for(let e=t;e<this.numSegments;e++)this.segments[e]=this.segments[e+1];this.segments[this.numSegments]=void 0,this.numSegments--,this.updateSegmentSizes()}},Winwheel.prototype.windowToCanvas=function(t,e){let n=this.canvas.getBoundingClientRect();return{x:Math.floor(t-n.left*(this.canvas.width/n.width)),y:Math.floor(e-n.top*(this.canvas.height/n.height))}},Winwheel.prototype.getSegmentAt=function(t,e){let n=null,o=this.getSegmentNumberAt(t,e);return null!==o&&(n=this.segments[o]),n},Winwheel.prototype.getSegmentNumberAt=function(t,e){let n,o,l,r,h,c=this.windowToCanvas(t,e),d=this.centerX*this.scaleFactor,m=this.centerY*this.scaleFactor,w=this.outerRadius*this.scaleFactor,f=this.innerRadius*this.scaleFactor;c.x>d?(l=c.x-d,o="R"):(l=d-c.x,o="L"),c.y>m?(r=c.y-m,n="B"):(r=m-c.y,n="T");let v=r/l,x=180*Math.atan(v)/Math.PI,y=0;if(h=Math.sqrt(r*r+l*l),"T"==n&&"R"==o?y=Math.round(90-x):"B"==n&&"R"==o?y=Math.round(x+90):"B"==n&&"L"==o?y=Math.round(90-x+180):"T"==n&&"L"==o&&(y=Math.round(x+270)),0!=this.rotationAngle){y-=this.getRotationPosition(),y<0&&(y=360-Math.abs(y))}let A=null;for(let t=1;t<=this.numSegments;t++)if(y>=this.segments[t].startAngle&&y<=this.segments[t].endAngle&&h>=f&&h<=w){A=t;break}return A},Winwheel.prototype.getIndicatedSegment=function(){let t=this.getIndicatedSegmentNumber();return this.segments[t]},Winwheel.prototype.getIndicatedSegmentNumber=function(){let t=0,e=this.getRotationPosition(),n=Math.floor(this.pointerAngle-e);n<0&&(n=360-Math.abs(n));for(let e=1;e<this.segments.length;e++)if(n>=this.segments[e].startAngle&&n<=this.segments[e].endAngle){t=e;break}return t},Winwheel.prototype.getCurrentPinNumber=function(){let t=0;if(this.pins){let e=this.getRotationPosition(),n=Math.floor(this.pointerAngle-e);n<0&&(n=360-Math.abs(n));let o=360/this.pins.number,l=0;for(let e=0;e<this.pins.number;e++){if(n>=l&&n<=l+o){t=e;break}l+=o}"clockwise"==this.animation.direction&&(t++,t>this.pins.number&&(t=0))}return t},Winwheel.prototype.getRotationPosition=function(){let t=this.rotationAngle;if(t>=0){if(t>360){t-=360*Math.floor(t/360)}}else{if(t<-360){t-=360*Math.ceil(t/360)}t=360+t}return t},Winwheel.prototype.startAnimation=function(){if(this.animation){this.computeAnimation(),winwheelToDrawDuringAnimation=this;let t=new Array(null);t[this.animation.propertyName]=this.animation.propertyValue,t.yoyo=this.animation.yoyo,t.repeat=this.animation.repeat,t.ease=this.animation.easing,t.onUpdate=winwheelAnimationLoop,t.onComplete=winwheelStopAnimation,this.tween=gsap.to(this,this.animation.duration,t)}},Winwheel.prototype.stopAnimation=function(t){winwheelToDrawDuringAnimation&&(winwheelToDrawDuringAnimation.tween&&winwheelToDrawDuringAnimation.tween.kill(),winwheelStopAnimation(t)),winwheelToDrawDuringAnimation=this},Winwheel.prototype.pauseAnimation=function(){this.tween&&this.tween.pause()},Winwheel.prototype.resumeAnimation=function(){this.tween&&this.tween.play()},Winwheel.prototype.computeAnimation=function(){this.animation&&("spinOngoing"==this.animation.type?(this.animation.propertyName="rotationAngle",null==this.animation.spins&&(this.animation.spins=5),null==this.animation.repeat&&(this.animation.repeat=-1),null==this.animation.easing&&(this.animation.easing="Linear.easeNone"),null==this.animation.yoyo&&(this.animation.yoyo=!1),this.animation.propertyValue=360*this.animation.spins,"anti-clockwise"==this.animation.direction&&(this.animation.propertyValue=0-this.animation.propertyValue)):"spinToStop"==this.animation.type?(this.animation.propertyName="rotationAngle",null==this.animation.spins&&(this.animation.spins=5),null==this.animation.repeat&&(this.animation.repeat=0),null==this.animation.easing&&(this.animation.easing="Power3.easeOut"),null==this.animation.stopAngle?this.animation._stopAngle=Math.floor(359*Math.random()):this.animation._stopAngle=360-this.animation.stopAngle+this.pointerAngle,null==this.animation.yoyo&&(this.animation.yoyo=!1),this.animation.propertyValue=360*this.animation.spins,"anti-clockwise"==this.animation.direction?(this.animation.propertyValue=0-this.animation.propertyValue,this.animation.propertyValue-=360-this.animation._stopAngle):this.animation.propertyValue+=this.animation._stopAngle):"spinAndBack"==this.animation.type?(this.animation.propertyName="rotationAngle",null==this.animation.spins&&(this.animation.spins=5),null==this.animation.repeat&&(this.animation.repeat=1),null==this.animation.easing&&(this.animation.easing="Power2.easeInOut"),null==this.animation.yoyo&&(this.animation.yoyo=!0),null==this.animation.stopAngle?this.animation._stopAngle=0:this.animation._stopAngle=360-this.animation.stopAngle,this.animation.propertyValue=360*this.animation.spins,"anti-clockwise"==this.animation.direction?(this.animation.propertyValue=0-this.animation.propertyValue,this.animation.propertyValue-=360-this.animation._stopAngle):this.animation.propertyValue+=this.animation._stopAngle):this.animation.type)},Winwheel.prototype.getRandomForSegment=function(t){let e=0;if(t)if(void 0!==this.segments[t]){let n=this.segments[t].startAngle,o=this.segments[t].endAngle-n-2;o>0?e=n+1+Math.floor(Math.random()*o):console.log("Segment size is too small to safely get random angle inside it")}else console.log("Segment "+t+" undefined");else console.log("Segment number not specified");return e},Segment.prototype.changeImage=function(image,t){this.image=image,this.imgData=null,t&&(this.imageDirection=t),winhweelAlreadyDrawn=!1,this.imgData=new Image,this.imgData.onload=winwheelLoadedImage,this.imgData.src=this.image};let winwheelToDrawDuringAnimation=null;function winwheelStopAnimation(canCallback){if(0!=canCallback){let callback=winwheelToDrawDuringAnimation.animation.callbackFinished;null!=callback&&("function"==typeof callback?callback(winwheelToDrawDuringAnimation.getIndicatedSegment()):eval(callback))}}let winhweelAlreadyDrawn=!1;function winwheelLoadedImage(){if(0==winhweelAlreadyDrawn){let t=0;for(let i=1;i<=winwheelToDrawDuringAnimation.numSegments;i++)null!=winwheelToDrawDuringAnimation.segments[i].imgData&&winwheelToDrawDuringAnimation.segments[i].imgData.height&&t++;t==winwheelToDrawDuringAnimation.numSegments&&(winhweelAlreadyDrawn=!0,winwheelToDrawDuringAnimation.draw())}}function winwheelResize(){let t=40;void 0!==winwheelToDrawDuringAnimation._responsiveMargin&&(t=winwheelToDrawDuringAnimation._responsiveMargin);let e=window.innerWidth-t,n=winwheelToDrawDuringAnimation._responsiveMinWidth,o=winwheelToDrawDuringAnimation._responsiveMinHeight;e<n?e=n:e>winwheelToDrawDuringAnimation._originalCanvasWidth&&(e=winwheelToDrawDuringAnimation._originalCanvasWidth);let l=e/winwheelToDrawDuringAnimation._originalCanvasWidth;if(winwheelToDrawDuringAnimation.canvas.width=winwheelToDrawDuringAnimation._originalCanvasWidth*l,winwheelToDrawDuringAnimation._responsiveScaleHeight){let t=winwheelToDrawDuringAnimation._originalCanvasHeight*l;t<o?t=o:t>winwheelToDrawDuringAnimation._originalCanvasHeight&&(t=winwheelToDrawDuringAnimation._originalCanvasHeight),winwheelToDrawDuringAnimation.canvas.height=t}winwheelToDrawDuringAnimation.scaleFactor=l,winwheelToDrawDuringAnimation.draw()}__webpack_exports__.default=Winwheel},987:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getContrastColor=e.getRandomColor=void 0;e.getRandomColor=()=>{let t="#";for(let i=0;i<6;i++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t.toLowerCase()};e.getContrastColor=t=>(299*parseInt(t.substr(1,2),16)+587*parseInt(t.substr(3,2),16)+114*parseInt(t.substr(5,2),16))/1e3>=128?"black":"white"},988:function(t,e,n){"use strict";n(736)},989:function(t,e,n){var o=n(110)((function(i){return i[1]}));o.push([t.i,"#canvas[data-v-7cef23b8]{opacity:0}#winbox[data-v-7cef23b8]{text-align:center;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:60%;height:auto}",""]),o.locals={},t.exports=o}}]);
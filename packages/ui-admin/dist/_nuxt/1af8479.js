(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1017:function(e,t,r){var content=r(1069);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("02e8916b",content,!0,{sourceMap:!1})},1068:function(e,t,r){"use strict";r(1017)},1069:function(e,t,r){var n=r(19)((function(i){return i[1]}));n.push([e.i,".middle-align[data-v-399d0b56] table tbody tr td{vertical-align:middle!important}",""]),n.locals={},e.exports=n},1164:function(e,t,r){"use strict";r.r(t);r(1),r(40),r(33),r(51),r(11),r(52),r(55),r(12),r(14),r(13),r(15);var n=r(2),o=r(23),l=r(35),c=(r(8),r(4),r(73),r(28),r(24),r(25),r(62),r(37),r(39),r(94),r(82),r(5)),d=r(49),f=r.n(d),m=r(54),v=r(141),y=r(266);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function x(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var w=[],S=[];function I(e,t,r){v.a.$emit("randomizer::dragstart");var n=r.find((function(e){return e.id===t}));if(n){var c=function e(t){var n=[],o=r.filter((function(e){return e.groupId===t}));if(0===o.length)return[];n.push.apply(n,Object(l.a)(o));var c,d=x(o);try{for(d.s();!(c=d.n()).done;){var f=c.value;n.push.apply(n,Object(l.a)(e(f.id)))}}catch(e){d.e(e)}finally{d.f()}return n}(n.id),d=[],f=function e(element){return null===element?null:"TR"===element.tagName?element:e(element.parentElement)};w.length=0,S.length=0;for(var m=0,y=0,h=[n].concat(Object(l.a)(c));y<h.length;y++){var O=h[y],j=f(document.getElementById("drag|".concat(O.id)));if(j){if(0===w.length){var I,k=x(j.children);try{for(k.s();!(I=k.n()).done;){var z=I.value;w.push("".concat(parseInt(window.getComputedStyle(z).width),"px"))}}catch(e){k.e(e)}finally{k.f()}}m+=Number(window.getComputedStyle(j).height.replace("px",""))+10,S.push(m),d.push(j)}}document.onmouseup=function(e){var t=null,r=document.elementFromPoint(e.clientX,e.clientY);if(r)for(;!t;){var o,f=null===(o=r)||void 0===o?void 0:o.parentElement;if(!f)break;"TR"===f.tagName?t=f:r=f}if(t)try{var m=t.children[0].children[0].id.replace("drag|","");v.a.$emit("randomizer::dragdrop",{items:[n].concat(Object(l.a)(c)),offsetId:m})}catch(e){v.a.$emit("randomizer::dragdrop",{items:[n].concat(Object(l.a)(c))})}var y,h=x(d);try{for(h.s();!(y=h.n()).done;){var element=y.value;element.style.position="inherit",element.style.opacity="1"}}catch(e){h.e(e)}finally{h.f()}document.onmousemove=null,document.onmouseup=null,v.a.$emit("randomizer::dragstop")},document.onmousemove=function(e){var t,r=x(d.entries());try{for(r.s();!(t=r.n()).done;){for(var n=Object(o.a)(t.value,2),l=n[0],element=n[1],i=0;i<element.children.length;i++)element.children[i].style.maxWidth=w[i],element.children[i].style.minWidth=w[i],element.children[i].style.overflow="hidden";element.style.opacity="0.8",element.style.zIndex=String(9999),element.style.position="fixed",element.style.top=e.clientY+S[l]-100+"px",element.style.left=e.clientX+5+"px"}}catch(e){r.e(e)}finally{r.f()}}}}var k=Object(c.c)({props:{value:Array},components:{color:Object(c.b)({loader:function(){return Promise.all([r.e(14),r.e(15)]).then(r.bind(null,1162))}})},setup:function(e,t){var r=Object(c.i)(e.value),n=Object(c.i)(!1),o={name:[y.h],color:[y.b],numOfDuplicates:[y.h,Object(y.f)(1)],minimalSpacing:[y.h,Object(y.f)(0)]},d=[{value:"drag",text:""},{value:"name",text:f()("registry.randomizer.form.name")},{value:"color",text:f()("registry.randomizer.form.color")},{value:"numOfDuplicates",text:f()("registry.randomizer.form.numOfDuplicates")},{value:"minimalSpacing",text:f()("registry.randomizer.form.minimalSpacing")},{value:"groupBtn",text:""},{value:"delBtn",text:""}];return Object(c.f)((function(){v.a.$off("randomizer::dragdrop").$off("randomizer::dragstart"),v.a.$on("randomizer::dragstart",(function(){n.value=!0})),v.a.$on("randomizer::dragstop",(function(){n.value=!1})),v.a.$on("randomizer::dragdrop",(function(data){var e,t=x(data.items);try{var n=function(){var t=e.value;r.value=r.value.filter((function(e){return e.id!==t.id}))};for(t.s();!(e=t.n()).done;)n()}catch(e){t.e(e)}finally{t.f()}if(data.offsetId){var o,c=function e(t){var n=r.value.find((function(e){return e.id===t}));return n?null===n.groupId?r.value.findIndex((function(e){return e.id===t})):e(n.groupId):0}(data.offsetId);if(c>=0)(o=r.value).splice.apply(o,[c,0].concat(Object(l.a)(data.items)))}else{var d,f=x(data.items);try{for(f.s();!(d=f.n()).done;){var m=d.value;r.value.push(O(O({},m),{},{order:r.value.length}))}}catch(e){f.e(e)}finally{f.f()}}for(var i=0;i<r.value.length;i++)r.value[i].order=i}))})),Object(c.p)(r,(function(e){t.emit("input",e)}),{deep:!0}),{headers:d,model:r,rules:o,isDragging:n,rmOption:function(e){if(r.value){r.value=Object(m.orderBy)(r.value.filter((function(t){return t.id!==e})),"order");var t,n=x(r.value.filter((function(t){return t.groupId!==e})));try{for(n.s();!(t=n.n()).done;){t.value.groupId=null}}catch(e){n.e(e)}finally{n.f()}for(var i=0;i<r.value.length;i++)r.value[i].order=i}},translate:f.a,handleDragStart:I}}}),z=(r(1068),r(45)),D=r(44),_=r.n(D),$=r(379),C=r(48),A=r(269),P=r(30),B=r(140),component=Object(z.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-data-table",{staticClass:"middle-align",attrs:{dense:"",headers:e.headers,"items-per-page":-1,items:e.model,"disable-sort":"","hide-default-footer":""},scopedSlots:e._u([{key:"item.name",fn:function(t){var n=t.item;return[r("v-text-field",{staticClass:"pa-2",attrs:{"hide-details":"",rules:e.rules.name,dense:""},model:{value:n.name,callback:function(t){e.$set(n,"name",t)},expression:"item.name"}})]}},{key:"item.numOfDuplicates",fn:function(t){var n=t.item;return[n.groupId?r("v-alert",{staticClass:"pa-1 text-center ma-0",staticStyle:{"line-height":"14px"},attrs:{color:"info",dense:""}},[r("small",[e._v(e._s(e.translate("registry.randomizer.form.groupedWithOptionAbove")))])]):r("v-text-field",{staticClass:"pa-2",attrs:{min:"1",type:"number",rules:e.rules.numOfDuplicates,"hide-details":"",dense:""},model:{value:n.numOfDuplicates,callback:function(t){e.$set(n,"numOfDuplicates",t)},expression:"item.numOfDuplicates"}})]}},{key:"item.color",fn:function(t){var n=t.item;return[r("color",{staticClass:"pa-2",attrs:{randomizer:"","hide-details":"",dense:""},model:{value:n.color,callback:function(t){e.$set(n,"color",t)},expression:"item.color"}})]}},{key:"item.minimalSpacing",fn:function(t){var n=t.item;return[n.groupId?r("v-alert",{staticClass:"pa-1 text-center ma-0",staticStyle:{"line-height":"14px"},attrs:{color:"info",dense:""}},[r("small",[e._v(e._s(e.translate("registry.randomizer.form.groupedWithOptionAbove")))])]):r("v-text-field",{staticClass:"pa-2",attrs:{min:"0",type:"number",rules:e.rules.minimalSpacing,"hide-details":"",dense:""},model:{value:n.minimalSpacing,callback:function(t){e.$set(n,"minimalSpacing",t)},expression:"item.minimalSpacing"}})]}},{key:"item.groupBtn",fn:function(t){var n=t.item;return[n.order>0?r("div",{staticClass:"pa-2"},[n.groupId?r("v-btn",{staticClass:"secondary",attrs:{small:""},on:{click:function(e){n.groupId=null}}},[e._v("\n        "+e._s(e.translate("registry.randomizer.form.ungroup"))+"\n      ")]):r("v-btn",{staticClass:"secondary",attrs:{small:""},on:{click:function(t){n.groupId=e.model.find((function(e){return e.order===n.order-1})).id}}},[e._v("\n        "+e._s(e.translate("registry.randomizer.form.groupUp"))+"\n      ")])],1):e._e()]}},{key:"item.delBtn",fn:function(t){var n=t.item;return[r("v-btn",{staticClass:"pa-2",attrs:{small:"",color:"error",icon:""},on:{click:function(t){return e.rmOption(n.id)}}},[r("v-icon",[e._v("mdi-delete-forever")])],1)]}},{key:"item.drag",fn:function(t){var n=t.item;return[r("div",{attrs:{id:"drag|"+n.id}},[null===n.groupId?r("v-icon",{attrs:{disabled:e.isDragging},on:{mousedown:function(t){return t.preventDefault(),e.handleDragStart(t,n.id,e.model)}}},[e._v("\n        mdi-drag\n      ")]):e._e()],1)]}},{key:"body.append",fn:function(){return[e.isDragging?r("tr",[r("td",{staticStyle:{height:"10px"},attrs:{colspan:"10"}})]):e._e()]},proxy:!0}],null,!0)})}),[],!1,null,"399d0b56",null);t.default=component.exports;_()(component,{VAlert:$.a,VBtn:C.a,VDataTable:A.a,VIcon:P.a,VTextField:B.a})}}]);
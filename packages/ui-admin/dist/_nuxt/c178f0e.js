(window.webpackJsonp=window.webpackJsonp||[]).push([[171,112],{1045:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(26),o=(t(81),t(4),function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){var data,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return data=e.sent,e.next=5,data.blob();case 5:return t=e.sent,e.abrupt("return",new Promise((function(e){var n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){var t=n.result;e(String(t))}})));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},1248:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CarouselGetAll"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"carousels"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"order"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"waitBefore"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"waitAfter"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"duration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"animationInDuration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"animationIn"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"animationOutDuration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"animationOut"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"showOnlyOncePerStream"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:209}};t.loc.source={body:"query CarouselGetAll {\n  carousels {\n    id\n    order\n    waitBefore\n    waitAfter\n    duration\n    animationInDuration\n    animationIn\n    animationOutDuration\n    animationOut\n    showOnlyOncePerStream\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.CarouselGetAll=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,c=new Set,d=new Set;for(r.forEach((function(e){d.add(e)}));d.size>0;){var f=d;d=new Set,f.forEach((function(e){c.has(e)||(c.add(e),(o[e]||new Set).forEach((function(e){d.add(e)})))}))}return c.forEach((function(n){var r=l(e,n);r&&t.definitions.push(r)})),t}(t,"CarouselGetAll")},1249:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"carouselRemove"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"carouselRemove"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[]}]}}],loc:{start:0,end:67}};t.loc.source={body:"mutation carouselRemove($id: String!) {\n  carouselRemove(id: $id)\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.carouselRemove=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,c=new Set,d=new Set;for(r.forEach((function(e){d.add(e)}));d.size>0;){var f=d;d=new Set,f.forEach((function(e){c.has(e)||(c.add(e),(o[e]||new Set).forEach((function(e){d.add(e)})))}))}return c.forEach((function(n){var r=l(e,n);r&&t.definitions.push(r)})),t}(t,"carouselRemove")},1250:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CarouselSave"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"data_json"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"carouselSave"},arguments:[{kind:"Argument",name:{kind:"Name",value:"data"},value:{kind:"Variable",name:{kind:"Name",value:"data_json"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:86}};t.loc.source={body:"mutation CarouselSave($data_json: String!) {\n  carouselSave(data: $data_json) { id }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.CarouselSave=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,c=new Set,d=new Set;for(r.forEach((function(e){d.add(e)}));d.size>0;){var f=d;d=new Set,f.forEach((function(e){c.has(e)||(c.add(e),(o[e]||new Set).forEach((function(e){d.add(e)})))}))}return c.forEach((function(n){var r=l(e,n);r&&t.definitions.push(r)})),t}(t,"CarouselSave")},1251:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CarouselUpload"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"data_json"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"carouselUpload"},arguments:[{kind:"Argument",name:{kind:"Name",value:"data"},value:{kind:"Variable",name:{kind:"Name",value:"data_json"}}}],directives:[]}]}}],loc:{start:0,end:83}};t.loc.source={body:"mutation CarouselUpload($data_json: String!) {\n  carouselUpload(data: $data_json)\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.CarouselUpload=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,c=new Set,d=new Set;for(r.forEach((function(e){d.add(e)}));d.size>0;){var f=d;d=new Set,f.forEach((function(e){c.has(e)||(c.add(e),(o[e]||new Set).forEach((function(e){d.add(e)})))}))}return c.forEach((function(n){var r=l(e,n);r&&t.definitions.push(r)})),t}(t,"CarouselUpload")},1461:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(60),l=(t(40),t(33),t(51),t(11),t(52),t(55),t(14),t(15),t(2)),c=t(35),d=t(26),f=(t(81),t(24),t(25),t(62),t(73),t(4),t(8),t(94),t(82),t(13),t(46),t(12),t(28),t(69),t(37),t(39),t(491),t(320),t(770)),v=t(49),m=t.n(v),h=t(54),k=t(776),y=t(141),O=t(1045),S=t(266),w=t(1248),x=t.n(w),D=t(1249),_=t.n(D),j=t(1250),I=t.n(j),N=t(1251),$=t.n(N);function E(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function V(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(n){Object(l.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}function C(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return A(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==t.return||t.return()}finally{if(c)throw o}}}}function A(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}var P={setup:function(e,n){var t=Object(o.d)().$graphql,v=[],w=0;var D=Object(r.J)(!1),j=Object(r.J)(!1),N=function(){var e=Object(d.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.default.request(x.a);case 2:data=e.sent,E.value=Object(h.cloneDeep)(Object(c.a)(data.carousels)),D.value=!1;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=Object(r.J)([]),A=Object(r.J)(!1),P=Object(r.J)(null),B=Object(r.J)(!1),F=Object(r.J)(""),R={waitBefore:[S.h,Object(S.f)(0)],waitAfter:[S.h,Object(S.f)(0)],duration:[S.h,Object(S.f)(0)],animationOutDuration:[S.h,Object(S.f)(0)],animationInDuration:[S.h,Object(S.f)(0)]},T=Object(r.J)(0),J=Object(r.J)(0);Object(r.Y)(T,(function(e){J.value===e?z.value.uploading=f.ButtonStates.idle:z.value.uploading=f.ButtonStates.progress}));var U=Object(r.J)([]),L=Object(r.J)([]),G=Object(r.J)(!1),Y=Object(r.J)(!1);Object(r.Y)(Y,(function(e){e||(U.value=[])}));var z=Object(r.J)({dragging:!1,uploading:f.ButtonStates.idle}),M=[{value:"drag",text:"",sortable:!1},{value:"image",text:"",sortable:!1,align:"center"},{value:"waitBefore",text:m()("page.settings.overlays.carousel.titles.waitBefore"),sortable:!1},{value:"waitAfter",text:m()("page.settings.overlays.carousel.titles.waitAfter"),sortable:!1},{value:"duration",text:m()("page.settings.overlays.carousel.titles.duration"),sortable:!1},{value:"animationInDuration",text:m()("page.settings.overlays.carousel.titles.animationInDuration"),sortable:!1},{value:"animationIn",text:m()("page.settings.overlays.carousel.titles.animationIn"),sortable:!1},{value:"animationOutDuration",text:m()("page.settings.overlays.carousel.titles.animationOutDuration"),sortable:!1},{value:"animationOut",text:m()("page.settings.overlays.carousel.titles.animationOut"),sortable:!1},{value:"showOnlyOncePerStream",text:m()("page.settings.overlays.carousel.titles.showOnlyOncePerStream"),sortable:!1}];Object(r.Y)(A,(function(e){e||(P.value=null)})),Object(r.Y)(P,(function(e){null!==e&&(A.value=!0,B.value=!0)})),Object(r.A)((function(){N(),y.a.$off("carousel::dragdrop").$off("carousel::dragstart"),y.a.$on("carousel::dragstart",(function(){z.value.dragging=!0})),y.a.$on("carousel::dragstop",(function(){z.value.dragging=!1})),y.a.$on("carousel::dragdrop",(function(data){var e=E.value.find((function(e){return e.id===data.id}));if(e){if(E.value=E.value.filter((function(e){return e.id!==data.id})),data.offsetId){var n=E.value.findIndex((function(e){return e.id===data.offsetId}));n>=0&&E.value.splice(n,0,e)}else E.value.push(V(V({},e),{},{order:E.value.length}));Q()}}))}));var Q=function(){for(var i=0;i<E.value.length;i++)E.value[i].order=i;j.value=!0,E.value.forEach((function(e){t.default.request(I.a,{data_json:JSON.stringify({id:e.id,order:e.order})}).then((function(){return y.a.$emit("snack","success","Data saved.")}))})),setTimeout((function(){j.value=!1}),1e3)},X=function(){var e=Object(d.a)(regeneratorRuntime.mark((function e(n){var r,o,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:J.value=n.length,T.value=0,r=C(n),e.prev=5,r.s();case 7:if((o=r.n()).done){e.next=16;break}return l=o.value,c=l.type,e.next=12,Object(O.a)(URL.createObjectURL(l));case 12:d=e.sent.split(",")[1],t.default.request($.a,{data_json:JSON.stringify({type:c,base64:d})}).then((function(e){console.debug("Uploaded",e),T.value++,N()}));case 14:e.next=7;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(5),r.e(e.t0);case 21:return e.prev=21,r.f(),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[5,18,21,24]])})));return function(n){return e.apply(this,arguments)}}();return{ButtonStates:f.ButtonStates,addToSelectedItem:k.a,handleDragStart:function(e,n){var element;y.a.$emit("carousel::dragstart");var t,r=C(e.path);try{for(r.s();!(t=r.n()).done;){var o=t.value;if("TR"===o.tagName){element=o,v.length=0;var l,c=C(element.children);try{for(c.s();!(l=c.n()).done;){var d=l.value;v.push("".concat(parseInt(window.getComputedStyle(d).width),"px"))}}catch(e){c.e(e)}finally{c.f()}w=Number(window.getComputedStyle(element).height.replace("px",""))+10,document.onmouseup=f;break}}}catch(e){r.e(e)}finally{r.f()}function f(e){var t=null,r=document.elementFromPoint(e.clientX,e.clientY);if(r)for(;!t;){var o,l=null===(o=r)||void 0===o?void 0:o.parentElement;if(!l)break;"TR"===l.tagName?t=l:r=l}if(t)try{var c=t.children[1].children[0].id;y.a.$emit("carousel::dragdrop",{id:n,offsetId:c})}catch(e){y.a.$emit("carousel::dragdrop",{id:n})}element.style.position="inherit",element.style.opacity="1",document.onmousemove=null,document.onmouseup=null,y.a.$emit("carousel::dragstop")}document.onmousemove=function(e){for(var i=0;i<element.children.length;i++)element.children[i].style.maxWidth=v[i],element.children[i].style.minWidth=v[i],element.children[i].style.overflow="hidden";element.style.opacity="0.8",element.style.zIndex=String(9999),element.style.top=e.clientY+w-100+"px",element.style.left=e.clientX+5+"px",element.style.position="fixed"}},loading:D,saving:j,items:E,imageShowOverlay:A,imageShow:P,isImageLoading:B,search:F,rules:R,animationInOptions:[{value:"fadeIn",text:"fadeIn"},{value:"blurIn",text:"blurIn"},{value:"slideUp",text:"slideUp"},{value:"slideDown",text:"slideDown"},{value:"slideLeft",text:"slideLeft"},{value:"slideRight",text:"slideRight"}],animationOutOptions:[{value:"fadeOut",text:"fadeOut"},{value:"blurOut",text:"blurOut"},{value:"slideUp",text:"slideUp"},{value:"slideDown",text:"slideDown"},{value:"slideLeft",text:"slideLeft"},{value:"slideRight",text:"slideRight"}],selected:U,currentItems:L,saveCurrentItems:function(e){L.value=e},deleteDialog:G,selectable:Y,state:z,headers:M,deleteSelected:function(){G.value=!1,U.value.forEach((function(e){t.default.request(_.a,{id:e.id})})),y.a.$emit("snack","success","Data removed."),U.value=[]},update:function(e){for(var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,o=0,d=Object.keys(R);o<d.length;o++){var f,v=d[o],m=C(R[v]);try{for(m.s();!(f=m.n()).done;){var h=f.value,k=h(e[v]);if(!0!==k)return y.a.$emit("snack","red","[".concat(v,"] - ").concat(k)),void N()}}catch(e){m.e(e)}finally{m.f()}}for(var O=0,S=[e].concat(Object(c.a)(n?U.value:[]));O<S.length;O++){var i=S[O];i[r]=e[r]}[e].concat(Object(c.a)(n?U.value:[])).forEach((function(n){console.log("Updating",{itemToUpdate:n},{attr:r,value:e[r]}),t.default.request(I.a,{data_json:JSON.stringify(Object(l.a)({itemToUpdate:n},r,e[r]))}).then((function(){return y.a.$emit("snack","success","Data saved.")}))}))},filesChange:X,swapOrder:function(e,n){var t=E.value.find((function(n){return n.order===e})),r=E.value.find((function(e){return e.order===n}));t&&r&&(t.order=n,r.order=e),E.value=Object(h.sortBy)(E.value,"order","ASC"),Q()},closeOverlay:function(){A.value=!1}}}},B=P,F=t(45),R=t(44),T=t.n(R),J=t(48),U=t(43),L=t(27),G=t(269),Y=t(378),z=t(30),M=t(384),Q=t(142),X=t(143),W=t(267),K=t(134),H=t(268),Z=t(140),component=Object(F.a)(B,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{class:{"pa-4":!e.$vuetify.breakpoint.mobile},attrs:{fluid:""}},[t("v-data-table",{attrs:{"calculate-widths":"","show-select":e.selectable,search:e.search,loading:e.loading||e.saving,headers:e.headers,"items-per-page":-1,"hide-default-footer":"",items:e.items,"sort-by":"order"},on:{"current-items":e.saveCurrentItems,"click:row":function(n){return e.addToSelectedItem(e.selected,"id",e.currentItems)}},scopedSlots:e._u([{key:"top",fn:function(){return[t("v-sheet",{staticClass:"my-2 pb-2 mt-0",attrs:{flat:"",color:"dark"}},[t("v-row",{staticClass:"px-2",attrs:{"no-gutters":""}},[t("v-col",{staticClass:"pr-2",attrs:{cols:"auto","align-self":"center"}},[t("v-btn",{attrs:{icon:"",color:e.selectable?"primary":"secondary"},on:{click:function(n){e.selectable=!e.selectable}}},[t("v-icon",[e._v("\n                mdi-checkbox-multiple-marked-outline\n              ")])],1)],1),e._v(" "),t("v-col",{attrs:{"align-self":"center"}},[t("v-text-field",{staticClass:"pa-0 ma-2",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(n){e.search=n},expression:"search"}})],1),e._v(" "),t("v-col",{attrs:{cols:"auto","align-self":"center"}},[t("v-row",{attrs:{"no-gutters":""}},[t("v-col",[e.selected.length>0?[t("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t("v-btn",e._g(e._b({staticClass:"mr-1",attrs:{color:"error"}},"v-btn",o,!1),r),[e._v("\n                        Delete "+e._s(e.selected.length)+" Item(s)\n                      ")])]}}],null,!1,1455524727),model:{value:e.deleteDialog,callback:function(n){e.deleteDialog=n},expression:"deleteDialog"}},[e._v(" "),t("v-card",[t("v-card-title",[t("span",{staticClass:"headline"},[e._v("Delete "+e._s(e.selected.length)+" Item(s)?")])]),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{attrs:{text:""},on:{click:function(n){e.deleteDialog=!1}}},[e._v("\n                          Cancel\n                        ")]),e._v(" "),t("v-btn",{attrs:{color:"error",text:""},on:{click:e.deleteSelected}},[e._v("\n                          Delete\n                        ")])],1)],1)],1)]:e._e()],2),e._v(" "),t("v-col",[t("form",{attrs:{enctype:"multipart/form-data",novalidate:""}},[t("v-btn",{attrs:{color:"primary",loading:e.state.uploading===e.ButtonStates.progress},on:{click:function(n){return e.$refs.uploadFileInput.click()}}},[e._v("\n                    Upload item\n                  ")]),e._v(" "),t("input",{ref:"uploadFileInput",staticClass:"d-none input-file",attrs:{type:"file",disabled:e.state.uploading===e.ButtonStates.progress,multiple:"",accept:"image/*"},on:{change:function(n){return e.filesChange(n.target.files)}}})],1)])],1)],1)],1)],1)]},proxy:!0},{key:"item.showOnlyOncePerStream",fn:function(n){var r=n.item;return[t("v-simple-checkbox",{on:{click:function(n){return e.update(r,!0,"showOnlyOncePerStream")}},model:{value:r.showOnlyOncePerStream,callback:function(n){e.$set(r,"showOnlyOncePerStream",n)},expression:"item.showOnlyOncePerStream"}})]}},{key:"item.drag",fn:function(n){var r=n.item;return[e.$vuetify.breakpoint.mobile?[0!==r.order?t("v-icon",{on:{click:function(n){return n.stopPropagation(),e.swapOrder(r.order,r.order-1)}}},[e._v("\n          mdi-chevron-up\n        ")]):e._e(),e._v(" "),r.order!==e.items.length-1?t("v-icon",{on:{click:function(n){return n.stopPropagation(),e.swapOrder(r.order,r.order+1)}}},[e._v("\n          mdi-chevron-down\n        ")]):e._e()]:t("v-icon",{attrs:{disabled:e.state.dragging||e.saving},on:{mousedown:function(n){return n.preventDefault(),e.handleDragStart(n,r.id)}}},[e._v("\n        mdi-drag\n      ")])]}},{key:"item.waitBefore",fn:function(n){var r=n.item;return[t("v-edit-dialog",{attrs:{persistent:"",large:"","return-value":r.waitBefore},on:{"update:returnValue":function(n){return e.$set(r,"waitBefore",n)},"update:return-value":function(n){return e.$set(r,"waitBefore",n)},save:function(n){return e.update(r,!0,"waitBefore")}},scopedSlots:e._u([{key:"input",fn:function(){return[t("v-text-field",{attrs:{rules:e.rules.waitBefore,"single-line":"",counter:""},scopedSlots:e._u([{key:"append",fn:function(){return[e._v("\n              ms\n            ")]},proxy:!0}],null,!0),model:{value:r.waitBefore,callback:function(n){e.$set(r,"waitBefore",n)},expression:"item.waitBefore"}})]},proxy:!0}],null,!0)},[e._v("\n        "+e._s(r.waitBefore)+"\n        ")])]}},{key:"item.waitAfter",fn:function(n){var r=n.item;return[t("v-edit-dialog",{attrs:{persistent:"",large:"","return-value":r.waitAfter},on:{"update:returnValue":function(n){return e.$set(r,"waitAfter",n)},"update:return-value":function(n){return e.$set(r,"waitAfter",n)},save:function(n){return e.update(r,!0,"waitAfter")}},scopedSlots:e._u([{key:"input",fn:function(){return[t("v-text-field",{attrs:{rules:e.rules.waitAfter,"single-line":"",counter:""},scopedSlots:e._u([{key:"append",fn:function(){return[e._v("\n              ms\n            ")]},proxy:!0}],null,!0),model:{value:r.waitAfter,callback:function(n){e.$set(r,"waitAfter",n)},expression:"item.waitAfter"}})]},proxy:!0}],null,!0)},[e._v("\n        "+e._s(r.waitAfter)+"\n        ")])]}},{key:"item.duration",fn:function(n){var r=n.item;return[t("v-edit-dialog",{attrs:{persistent:"",large:"","return-value":r.duration},on:{"update:returnValue":function(n){return e.$set(r,"duration",n)},"update:return-value":function(n){return e.$set(r,"duration",n)},save:function(n){return e.update(r,!0,"duration")}},scopedSlots:e._u([{key:"input",fn:function(){return[t("v-text-field",{attrs:{rules:e.rules.duration,"single-line":"",counter:""},scopedSlots:e._u([{key:"append",fn:function(){return[e._v("\n              ms\n            ")]},proxy:!0}],null,!0),model:{value:r.duration,callback:function(n){e.$set(r,"duration",n)},expression:"item.duration"}})]},proxy:!0}],null,!0)},[e._v("\n        "+e._s(r.duration)+"\n        ")])]}},{key:"item.animationInDuration",fn:function(n){var r=n.item;return[t("v-edit-dialog",{attrs:{persistent:"",large:"","return-value":r.animationInDuration},on:{"update:returnValue":function(n){return e.$set(r,"animationInDuration",n)},"update:return-value":function(n){return e.$set(r,"animationInDuration",n)},save:function(n){return e.update(r,!0,"animationInDuration")}},scopedSlots:e._u([{key:"input",fn:function(){return[t("v-text-field",{attrs:{rules:e.rules.animationInDuration,"single-line":"",counter:""},scopedSlots:e._u([{key:"append",fn:function(){return[e._v("\n              ms\n            ")]},proxy:!0}],null,!0),model:{value:r.animationInDuration,callback:function(n){e.$set(r,"animationInDuration",n)},expression:"item.animationInDuration"}})]},proxy:!0}],null,!0)},[e._v("\n        "+e._s(r.animationInDuration)+"\n        ")])]}},{key:"item.animationIn",fn:function(n){var r=n.item;return[t("v-edit-dialog",{attrs:{persistent:"",large:"","return-value":r.animationIn},on:{"update:returnValue":function(n){return e.$set(r,"animationIn",n)},"update:return-value":function(n){return e.$set(r,"animationIn",n)},save:function(n){return e.update(r,!0,"animationIn")}},scopedSlots:e._u([{key:"input",fn:function(){return[t("v-select",{attrs:{items:e.animationInOptions},model:{value:r.animationIn,callback:function(n){e.$set(r,"animationIn",n)},expression:"item.animationIn"}})]},proxy:!0}],null,!0)},[e._v("\n        "+e._s(r.animationIn)+"\n        ")])]}},{key:"item.animationOutDuration",fn:function(n){var r=n.item;return[t("v-edit-dialog",{attrs:{persistent:"",large:"","return-value":r.animationOutDuration},on:{"update:returnValue":function(n){return e.$set(r,"animationOutDuration",n)},"update:return-value":function(n){return e.$set(r,"animationOutDuration",n)},save:function(n){return e.update(r,!0,"animationOutDuration")}},scopedSlots:e._u([{key:"input",fn:function(){return[t("v-text-field",{attrs:{rules:e.rules.animationOutDuration,"single-line":"",counter:""},scopedSlots:e._u([{key:"append",fn:function(){return[e._v("\n              ms\n            ")]},proxy:!0}],null,!0),model:{value:r.animationOutDuration,callback:function(n){e.$set(r,"animationOutDuration",n)},expression:"item.animationOutDuration"}})]},proxy:!0}],null,!0)},[e._v("\n        "+e._s(r.animationOutDuration)+"\n        ")])]}},{key:"item.animationOut",fn:function(n){var r=n.item;return[t("v-edit-dialog",{attrs:{persistent:"",large:"","return-value":r.animationOut},on:{"update:returnValue":function(n){return e.$set(r,"animationOut",n)},"update:return-value":function(n){return e.$set(r,"animationOut",n)},save:function(n){return e.update(r,!0,"animationOut")}},scopedSlots:e._u([{key:"input",fn:function(){return[t("v-select",{attrs:{items:e.animationOutOptions},model:{value:r.animationOut,callback:function(n){e.$set(r,"animationOut",n)},expression:"item.animationOut"}})]},proxy:!0}],null,!0)},[e._v("\n        "+e._s(r.animationOut)+"\n        ")])]}},{key:"item.image",fn:function(n){var r=n.item;return[t("v-img",{attrs:{id:r.id,contain:"",src:"/api/v2/carousel/image/"+r.id,"max-height":"75px","max-width":"150px"},on:{click:function(n){n.stopPropagation(),e.imageShow="/api/v2/carousel/image/"+r.id}}})]}},{key:"body.append",fn:function(){return[e.state.dragging?t("tr",[t("td",{staticStyle:{height:"10px"},attrs:{colspan:"10"}})]):e._e()]},proxy:!0}],null,!0),model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}}),e._v(" "),t("v-overlay",{nativeOn:{click:function(n){return e.closeOverlay.apply(null,arguments)}},model:{value:e.imageShowOverlay,callback:function(n){e.imageShowOverlay=n},expression:"imageShowOverlay"}},[e.isImageLoading?t("v-progress-circular",{staticStyle:{position:"fixed",left:"50%",top:"50%",transform:"translateX(-50%), translateY(-50%)"},attrs:{indeterminate:"",color:"primary darken-1",size:"128"}}):e._e(),e._v(" "),e.imageShow?t("v-img",{attrs:{contain:"",src:e.imageShow},on:{load:function(n){e.isImageLoading=!1}}}):e._e()],1)],1)}),[],!1,null,null,null);n.default=component.exports;T()(component,{VBtn:J.a,VCard:U.a,VCardActions:U.b,VCardTitle:U.e,VCol:L.a,VContainer:L.b,VDataTable:G.a,VDialog:Y.a,VEditDialog:G.b,VIcon:z.a,VImg:M.a,VOverlay:Q.a,VProgressCircular:X.a,VRow:L.d,VSelect:W.a,VSheet:K.a,VSimpleCheckbox:H.b,VSpacer:L.e,VTextField:Z.a})},770:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ButtonStates=void 0,n.ButtonStates={idle:0,progress:1,success:2,fail:3}},776:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(35);t(94),t(8),t(4),t(82),t(51),t(37),t(213),t(214),t(215),t(216),t(217),t(218),t(219),t(220),t(221),t(222),t(223),t(224),t(225),t(226),t(227),t(228),t(229),t(39);function o(e,n,t){var o=null,l="select";return function(c){var d=void 0===e.value?e:e.value,f=d.findIndex((function(e){return e[n]===c[n]})),v=!1;if(window.event&&(v=!!window.event.shiftKey),v){var m=t.value.findIndex((function(e){return e[n]===o})),h=t.value.findIndex((function(e){return e[n]===c[n]}));if("select"===l)for(var i=Math.min(m,h);i<=Math.max(m,h);i++)d.push(t.value[i]);else d=d.filter((function(e){for(var n=!0,r=Math.min(m,h);r<=Math.max(m,h);r++)if(e===t.value[r]){n=!1;break}return n}))}else o=c[n],-1===f?(d.push(c),l="select"):(d.splice(f,1),l="unselect");d=Array.from(new Set(Object(r.a)(d))),console.log(d)}}}}]);
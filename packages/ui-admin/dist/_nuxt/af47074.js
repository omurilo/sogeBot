(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1139:function(t,e,n){var content=n(1395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("31697af1",content,!0,{sourceMap:!1})},1394:function(t,e,n){"use strict";n(1139)},1395:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".miniIcon[data-v-ff880b10]{width:40px;height:40px}.miniIcon[data-v-ff880b10]:after{border-radius:4px;transform:scale(1)}.caretIcon[data-v-ff880b10]{position:absolute;right:0;bottom:0}",""]),r.locals={},t.exports=r},1533:function(t,e,n){"use strict";n.r(e);n(1);var r,o=n(147),c=(n(176),n(4),n(37),n(177),n(178),n(179),n(180),n(181),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(39),n(119),n(33),n(5)),l=n(49),m=n.n(l),v=n(148),d=new Map([["dashboard","mdi-view-dashboard"],["commands","mdi-exclamation-thick"],["settings","mdi-cog"],["manage","mdi-wrench"],["stats","mdi-information-variant"],["registry","mdi-format-list-bulleted-square"]]),f=Object(c.c)({components:{notification:Object(c.b)((function(){return n.e(42).then(n.bind(null,1585))}))},setup:function(){var t=Object(c.k)(),menu=Object(c.i)([]);Object(c.f)((function(){t.$graphql.default.request(Object(v.a)(r||(r=Object(o.a)(["\n        query getPrivateMenu { menuPrivate { id name enabled category } }\n      "])))).then((function(data){console.groupCollapsed("menu::menu"),console.log({menu:data.menuPrivate}),console.groupEnd(),menu.value=data.menuPrivate.sort((function(a,b){return m()("menu."+a.name).localeCompare(m()("menu."+b.name))}))}))}));var e=Object(c.i)(!0);return{menu:menu,categories:["commands","manage","settings","registry","stats"],isDisabledHidden:e,translate:m.a,icons:d}}}),_=(n(1394),n(45)),y=n(44),h=n.n(y),k=n(30),x=n(18),w=n(145),j=n(126),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{nav:"",dense:""}},[n("notification"),t._v(" "),t._l(t.menu.filter((function(t){return"main"===t.category})),(function(e){return n("v-list-item",{key:e.name,attrs:{to:"/"+e.id.replace(/\./g,"/"),nuxt:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(t.icons.get(e.name)))])],1),t._v(" "),n("v-list-item-title",[t._v(t._s(t.translate(e.name)))])],1)})),t._v(" "),t.$store.state.navbarMiniVariant&&!t.$vuetify.breakpoint.mobile?t._l(t.categories,(function(e){return n("v-menu",{key:e+"2",attrs:{"offset-x":"","nudge-right":"10",rounded:!1},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on,m=r.attrs;return[n("div",t._g(t._b({staticStyle:{position:"relative"}},"div",m,!1),l),[n("v-icon",t._g(t._b({staticClass:"miniIcon"},"v-icon",c,!1),o),[t._v("\n                "+t._s(t.icons.get(e))+"\n              ")]),t._v(" "),n("v-icon",{staticClass:"caretIcon",attrs:{size:"12"}},[t._v("\n                mdi-menu-down\n              ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(t.translate("menu."+e)))])])]}}],null,!0)},[t._v(" "),n("v-list",{staticClass:"pa-0",attrs:{color:"#363636",rounded:!1,flat:""}},t._l(t.menu.filter((function(t){return t.category===e})),(function(e){return n("v-list-item",{key:e.name,attrs:{dense:"",to:"/"+e.id.replace(/\./g,"/"),nuxt:""}},[n("v-list-item-title",{class:{"grey--text":!e.enabled,"darken-3":!e.enabled}},[t._v("\n            "+t._s(t.translate("menu."+e.name))+"\n          ")])],1)})),1)],1)})):t._l(t.categories,(function(e){return n("v-list-group",{key:e,attrs:{value:!1,"prepend-icon":t.icons.get(e)},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v(t._s(t.translate("menu."+e)))])]},proxy:!0}],null,!0)},[t._v(" "),t._l(t.menu.filter((function(t){return t.category===e})),(function(e){return n("v-list-item",{key:e.name,attrs:{to:"/"+e.id.replace(/\./g,"/"),nuxt:""}},[n("v-list-item-title",{class:{"grey--text":!e.enabled,"darken-3":!e.enabled}},[t._v("\n          "+t._s(t.translate("menu."+e.name))+"\n        ")])],1)}))],2)}))],2)}),[],!1,null,"ff880b10",null);e.default=component.exports;h()(component,{VIcon:k.a,VList:x.a,VListGroup:x.b,VListItem:x.c,VListItemIcon:x.h,VListItemTitle:x.j,VMenu:w.a,VTooltip:j.a})}}]);
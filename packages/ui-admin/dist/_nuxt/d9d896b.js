(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1435:function(e,n,t){"use strict";t.r(n);var r,o=t(60),c=t(1),l=t(147),d=t(26),f=(t(81),t(148)),m=t(54),v={};v.props={ignored:[Array,Object]},v.setup=function(e,n){var t=Object(o.d)().$graphql,v=Object(c.J)([]),w=Object(c.J)(0);return Object(c.A)(Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m.orderBy,e.next=3,t.default.request(Object(f.a)(r||(r=Object(l.a)(["\n  query {\n    permissions { id name order }\n  }\n"]))));case 3:e.t1=e.sent.permissions,v.value=(0,e.t0)(e.t1,"order","desc");case 5:case"end":return e.stop()}}),e)})))),{permissions:v,tab:w}};var w=v,j=t(45),O=t(44),_=t.n(O),h=t(50),component=Object(j.a)(w,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return 0===e.permissions.length?t("loading"):t("div",[t("v-tabs",{attrs:{"show-arrows":"","fixed-tabs":""},model:{value:e.tab,callback:function(n){e.tab=n},expression:"tab"}},e._l(e.permissions.filter((function(n){return!(e.ignored||[]).includes(n.id)})),(function(n){return t("v-tab",{key:n.id},[e._v("\n      "+e._s(n.name)+"\n    ")])})),1),e._v(" "),t("v-tabs-items",{model:{value:e.tab,callback:function(n){e.tab=n},expression:"tab"}},[e._t("default",null,{permissions:e.permissions.filter((function(n){return!(e.ignored||[]).includes(n.id)}))})],2)],1)}),[],!1,null,null,null);n.default=component.exports;_()(component,{Loading:t(769).default}),_()(component,{VTab:h.a,VTabs:h.c,VTabsItems:h.d})}}]);
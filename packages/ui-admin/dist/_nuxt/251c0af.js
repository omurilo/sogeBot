(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1539:function(t,e,r){"use strict";r.r(e);r(4),r(37),r(39),r(24);var n=r(5),c=r(54),l=Object(n.c)({components:{withTrending:Object(n.b)((function(){return Promise.all([r.e(3),r.e(6)]).then(r.bind(null,1442))}))},props:{isLoaded:Boolean,isStreamOnline:Boolean,timestamp:Number,current:Object,average:Object,broadcasterType:String},setup:function(){return{capitalize:c.capitalize}}}),o=r(45),d=r(44),m=r.n(d),v=r(43),f=r(27),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return""!==t.broadcasterType?r("with-trending",{attrs:{offline:"",type:"bigNumber",title:"subscribers",timestamp:t.timestamp,"is-stream-online":t.isStreamOnline,"is-loaded":t.isLoaded,current:t.current.currentSubscribers,average:t.average.currentSubscribers}}):r("v-col",{staticStyle:{padding:"2px"},attrs:{cols:"6",lg:"2",md:"4",sm:"4"}},[r("v-card",{attrs:{tile:"","min-height":"48",elevation:"5",loading:!t.isLoaded}},[r("v-card-title",{key:t.timestamp,staticClass:"px-1 py-0 text-truncate",staticStyle:{"font-size":"1rem"}},[t._v("\n      "+t._s(t.capitalize(t.$t("not-available")))+"\n    ")]),t._v(" "),r("v-card-subtitle",{staticClass:"pa-1 pt-2 text-caption text-truncate"},[t._v("\n      "+t._s(t.capitalize(t.$t("subscribers")))+"\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCard:v.a,VCardSubtitle:v.c,VCardTitle:v.e,VCol:f.a})}}]);
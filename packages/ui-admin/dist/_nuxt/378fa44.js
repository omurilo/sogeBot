(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1534:function(t,e,o){"use strict";o.r(e);o(24);var n=o(5),c=o(975),l=o(21),r=o(54),d=Object(n.c)({props:{timestamp:Number},setup:function(){var t=Object(n.i)(null),e=Object(n.i)(!1);return Object(n.f)((function(){Object(l.getSocket)("/").emit("panel::resetStatsState"),Object(l.getSocket)("/").on("panel::stats",(function(data){console.groupCollapsed("panel::stats::song"),console.log(data.currentSong),console.groupEnd(),t.value=data.currentSong,e.value=!0}))})),{getTime:c.getTime,capitalize:r.capitalize,song:t,isLoaded:e}}}),m=o(45),f=o(44),h=o.n(f),v=o(43),y=o(27),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-col",{staticStyle:{padding:"2px"},attrs:{cols:"6",lg:"2",md:"4",sm:"4"}},[o("v-card",{attrs:{tile:"","min-height":"48",elevation:"5",loading:!t.isLoaded}},[o("v-card-title",{key:t.timestamp,staticClass:"px-1 py-0 text-truncate",staticStyle:{"font-size":"1rem"}},[t._v("\n      "+t._s(t.song||t.capitalize(t.$t("not-available")))+"\n    ")]),t._v(" "),o("v-card-subtitle",{staticClass:"pa-1 pt-2 text-caption text-truncate"},[t._v("\n      "+t._s(t.capitalize(t.$t("currentsong")))+"\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VCard:v.a,VCardSubtitle:v.c,VCardTitle:v.e,VCol:y.a})},975:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.timestampToObject=e.getTime=void 0;const n=o(118);function c(t){let e=0,o=0,n=0,c=0;return t&&(e=Math.floor(t/864e5),e>=1&&(t-=864e5*e),o=Math.floor(t/36e5),o>=1&&(t-=36e5*o),n=Math.floor(t/6e4),n>=1&&(t-=6e4*n),c=Math.floor(t/1e3)),{days:Math.floor(e),hours:Math.floor(o),minutes:Math.floor(n),seconds:Math.floor(c)}}e.getTime=function(time,t){let e=0,o=0,l=0,r=0;const d=null!==time&&time?c((0,n.dayjs)().valueOf()-(0,n.dayjs)(time).valueOf()):{days:0,hours:0,minutes:0,seconds:0};return t?(e=d.days>0?d.days:"",o=d.hours>0?d.hours:"",l=d.minutes>0?d.minutes:"",r=d.seconds>0?d.seconds:"",""===e&&""===o&&""===l&&""===r&&(r=1),{days:e,hours:o,minutes:l,seconds:r}):(e=d.days>0?d.days+"d":"",o=d.hours>=0&&d.hours<10?"0"+d.hours+":":d.hours+":",l=d.minutes>=0&&d.minutes<10?"0"+d.minutes+":":d.minutes+":",r=d.seconds>=0&&d.seconds<10?"0"+d.seconds:d.seconds,e+o+l+r)},e.timestampToObject=c}}]);
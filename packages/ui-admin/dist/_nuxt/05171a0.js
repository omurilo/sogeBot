(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1575:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(60),c=n(35),l=n(26),d=(n(81),n(54)),v=n(141),m=n(266),f=n(821),_=n.n(f),h={props:{item:{key:"item",required:!0,type:null}},setup:function(e,t){var n=Object(r.d)().$graphql,f=e,h=t.emit,I=Object(o.J)(Object(d.cloneDeep)(f.item)),j=Object(o.J)(!0),form=Object(o.J)(null),O=Object(o.J)(!0),k=Object(o.J)([]),y=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c.a,e.next=3,n.default.request(_.a,{allowGroups:!0});case 3:e.t1=e.sent.overlays.marathon,k.value=(0,e.t0)(e.t1),O.value=!1;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.A)((function(){y(),v.a.$on("quickaction::".concat(f.item.id,"::valid"),(function(){console.debug("quickaction::".concat(f.item.id,"::valid")),form.value.validate()}))})),Object(o.D)((function(){v.a.$off("quickaction::".concat(f.item.id,"::valid"))}));var w={marathonId:[m.h]};return Object(o.Y)(I,(function(e){h("update:item",Object(d.pick)(e,["id","userId","order","type","options.label","options.color","options.marathonId"]))}),{deep:!0}),Object(o.Y)(j,(function(e){h("update:valid",e)})),{clonedItem:I,valid:j,form:form,loading:O,overlays:k,rules:w}}},I=h,j=n(45),O=n(44),k=n.n(O),y=n(376),w=n(30),x=n(267),component=Object(j.a)(I,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-select",{attrs:{"item-value":"id",items:e.overlays,label:"Marathon",rules:e.rules.marathonId,loading:e.loading},scopedSlots:e._u([{key:"selection",fn:function(data){return[data.item.groupId?[n("span",[e._v(e._s(data.item.groupId))]),e._v(" "),n("v-icon",{staticClass:"px-1"},[e._v("\n            mdi-chevron-right\n          ")])]:e._e(),e._v(" "),n("strong",[e._v(e._s(data.item.id))])]}},{key:"item",fn:function(data){return[data.item.groupId?[n("span",[e._v(e._s(data.item.groupId))]),e._v(" "),n("v-icon",{staticClass:"px-1"},[e._v("\n            mdi-chevron-right\n          ")])]:e._e(),e._v(" "),n("strong",[e._v(e._s(data.item.id))])]}}]),model:{value:e.clonedItem.options.marathonId,callback:function(t){e.$set(e.clonedItem.options,"marathonId",t)},expression:"clonedItem.options.marathonId"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;k()(component,{VForm:y.a,VIcon:w.a,VSelect:x.a})}}]);
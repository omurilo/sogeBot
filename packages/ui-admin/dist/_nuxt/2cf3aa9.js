(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1159:function(e,t,r){"use strict";r.r(t);r(71),r(24);var n=r(5),o=r(21),l=r(49),c=r.n(l),m=r(173),v=Object(n.c)({props:{permission:String},setup:function(e){var t=Object(n.i)(!1),r=Object(n.i)({}),l=Object(n.i)({}),v=Object(n.i)(""),_=Object(n.i)("");return{isTesting:t,status:r,partialStatus:l,testUsername:v,testUser:function(){t.value=!0;var n=Object(m.a)();r.value={},l.value={},0===v.value.trim().length?t.value=!1:Object(o.getSocket)("/core/permissions").emit("test.user",{pid:e.permission,value:v.value,state:n},(function(e,o){if(e)return _.value=e,t.value=!1,console.error(c()("core.permissions."+e));_.value="",o&&o.state===n&&(r.value=o.status,l.value=o.partial,t.value=!1)}))},translate:c.a,error:_,color:function(){return 0===Number(r.value.access)&&0===Number(l.value.access)?"error":1===Number(r.value.access)||1===Number(l.value.access)?"success":"orange lighten-2"},empty:function(){r.value={},l.value={}}}}}),_=r(45),d=r(44),f=r.n(d),h=r(379),T=r(140),component=Object(_.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-text-field",{attrs:{loading:e.isTesting,label:e.translate("core.permissions.testUser"),hint:"Press enter to check user"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.testUser.apply(null,arguments)},input:e.empty},model:{value:e.testUsername,callback:function(t){e.testUsername=t},expression:"testUsername"}}),e._v(" "),e.error.length>0?r("v-alert",{attrs:{text:"",color:"error",border:"left"}},[e._v("\n    "+e._s(e.translate("core.permissions."+e.error))+"\n  ")]):e._e(),e._v(" "),void 0===e.status.access||void 0===e.partialStatus.access||e.isTesting?e._e():r("v-alert",{attrs:{text:"",color:e.color(),border:"left"}},[0===Number(e.status.access)&&0===Number(e.partialStatus.access)?r("span",{domProps:{innerHTML:e._s(e.translate("core.permissions.userHaveNoAccessToThisPermissionGroup").replace("$username",e.testUsername))}}):1===Number(e.status.access)||1===Number(e.partialStatus.access)?r("span",[r("span",{domProps:{innerHTML:e._s(e.translate("core.permissions.userHaveAccessToThisPermissionGroup").replace("$username",e.testUsername))}}),e._v(" "),r("ul",{staticClass:"mb-0"},[1===Number(e.partialStatus.access)?r("li",[r("span",{domProps:{innerHTML:e._s(e.translate("core.permissions.accessDirectlyThrough"))}}),e._v(" "),r("nuxt-link",{attrs:{to:"/settings/permissions/"+e.partialStatus.permission.id}},[e._v(e._s(e.partialStatus.permission.name)+" "),r("small",[e._v(e._s(e.partialStatus.permission.id))])]),e._v(".\n        ")],1):e._e(),e._v(" "),1===Number(e.status.access)&&e.status.permission.id!==e.partialStatus.permission.id?r("li",[r("span",{domProps:{innerHTML:e._s(e.translate("core.permissions.accessThroughHigherPermission"))}}),e._v(" "),r("nuxt-link",{attrs:{to:"/settings/permissions/"+e.status.permission.id}},[e._v(e._s(e.status.permission.name)+" "),r("small",[e._v(e._s(e.status.permission.id))])]),e._v(".\n        ")],1):e._e()])]):r("span",{domProps:{innerHTML:e._s(e.translate("core.permissions.somethingWentWrongUserWasNotFoundInBotDatabase").replace("$username",e.testUsername))}})])],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VAlert:h.a,VTextField:T.a})}}]);
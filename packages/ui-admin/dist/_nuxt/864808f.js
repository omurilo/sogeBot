(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{1008:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GoalsGetAll"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"goals"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"goals"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"countBitsAsTips"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"display"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"timestamp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"interval"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"goalAmount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currentAmount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endAfter"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endAfterIgnore"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tiltifyCampaign"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customizationHtml"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customizationJs"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customizationCss"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customizationBar"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"borderColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"borderPx"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"customizationFont"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"family"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"size"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"borderColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"borderPx"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shadow"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shiftRight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shiftDown"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"blur"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"opacity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"display"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"GoalGroupDisplayFadeObject"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"durationMs"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"animationInMs"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"animationOutMs"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"GoalGroupDisplayMultiObject"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"spaceBetweenGoalsInPx"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:952}};t.loc.source={body:"query GoalsGetAll {\n  goals {\n    id\n    goals {\n      id\n      name\n      type\n      countBitsAsTips\n      display\n      timestamp\n      interval\n      goalAmount\n      currentAmount\n      endAfter\n      endAfterIgnore\n      tiltifyCampaign\n      customizationHtml\n      customizationJs\n      customizationCss\n      customizationBar {\n        color\n        backgroundColor\n        borderColor\n        borderPx\n        height\n      }\n      customizationFont {\n        family\n        color\n        size\n        weight\n        borderColor\n        borderPx\n        shadow {\n          shiftRight\n          shiftDown\n          blur\n          opacity\n          color\n        }\n      }\n    }\n    createdAt\n    name\n    display {\n      ...on GoalGroupDisplayFadeObject {\n        type\n        durationMs\n        animationInMs\n        animationOutMs\n      }\n      ...on GoalGroupDisplayMultiObject {\n        type\n        spaceBetweenGoalsInPx\n      }\n    }\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}var l={};function r(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),l[e.name.value]=n}})),e.exports=t,e.exports.GoalsGetAll=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var d=l[n]||new Set,o=new Set,m=new Set;for(d.forEach((function(e){m.add(e)}));m.size>0;){var c=m;m=new Set,c.forEach((function(e){o.has(e)||(o.add(e),(l[e]||new Set).forEach((function(e){m.add(e)})))}))}return o.forEach((function(n){var d=r(e,n);d&&t.definitions.push(d)})),t}(t,"GoalsGetAll")},1425:function(e,n,t){"use strict";t.r(n);var d=t(60),l=t(1),r=t(26),o=(t(81),t(46),t(31),t(54)),m=t(1008),c=t.n(m),v={};v.props={value:[Object,Array]},v.setup=function(e,n){var t=Object(d.d)().$graphql,m=e,v=n.emit,k=Object(l.J)(!0),f=Object(l.J)([]),F=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.default.request(c.a);case 2:f.value=e.sent.goals,k.value=!1,setTimeout((function(){return F()}),5e3);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.A)((function(){F()}));var N=Object(l.b)((function(){return f.value.map((function(e){return{value:e.id,text:e.id}}))})),S=Object(l.J)(0),y=Object(l.J)(Object(o.pick)(Object(o.defaults)(Array.isArray(m.value)?null:m.value,{id:""}),["id"]));return Object(l.Y)(y,(function(e){Object(o.isEqual)(m.value,y.value)||v("input",e)}),{deep:!0,immediate:!0}),{loading:k,itemsOptions:N,model:S,options:y}};var k=v,f=t(45),F=t(44),N=t.n(F),S=t(762),y=t(267),component=Object(f.a)(k,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-expansion-panels",{model:{value:e.model,callback:function(n){e.model=n},expression:"model"}},[e._t("default"),e._v(" "),t("v-expansion-panel",{attrs:{readonly:void 0===e.$slots.default}},[t("v-expansion-panel-header",[e._v("Settings")]),e._v(" "),t("v-expansion-panel-content",[t("v-select",{attrs:{loading:e.loading,items:e.itemsOptions,label:"Goal Registry to use"},model:{value:e.options.id,callback:function(n){e.$set(e.options,"id",n)},expression:"options.id"}})],1)],1)],2)}),[],!1,null,null,null);n.default=component.exports;N()(component,{VExpansionPanel:S.a,VExpansionPanelContent:S.b,VExpansionPanelHeader:S.c,VExpansionPanels:S.d,VSelect:y.a})}}]);
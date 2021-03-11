(this.webpackJsonppgpool=this.webpackJsonppgpool||[]).push([[6],{214:function(e,a,t){"use strict";t.r(a);var n=t(93),l=t(0),r=t.n(l),c=t(298),o=t(175),s=t(291),i=t(292),m=t(300),u=t(297),d=t(180),p=t(72),g=t(34),b={labelCol:{span:7},wrapperCol:{span:14}};a.default=function(){var e=c.a.useForm(),a=Object(n.a)(e,1)[0],t=function(e){var a,t=[],n=null===(a=Object.values(g.c).find((function(a){return a.key===e})))||void 0===a?void 0:a.value;return n&&(t=Object.values(n).map((function(e){return r.a.createElement(o.a.Option,{key:e,value:e},e)}))),t};return r.a.createElement("div",null,r.a.createElement("h3",null,"PG Pool Admin Settings"),r.a.createElement(c.a,Object.assign({colon:!1,initialValues:{pcpRefreshTime:1,shutdownMode:"Smart",language:"English",debugMode:!1,clearQueryCache:!1,demonMode:!1}},b,{form:a,onFinish:function(){}}),r.a.createElement(s.a,null,r.a.createElement(i.a,{span:12},r.a.createElement(c.a.Item,{name:"configFile",rules:[{required:!0,type:"string",message:"Required"},{pattern:RegExp(/^\S*$/),message:"Space not allowed"}],label:"PgPool.conf File"},r.a.createElement(m.a,null)),r.a.createElement(c.a.Item,{name:"pgPoolCommand",rules:[{required:!0,type:"string",message:"Required"},{pattern:RegExp(/^\S*$/),message:"Space not allowed"}],label:"PgPool Command"},r.a.createElement(m.a,null)),r.a.createElement(c.a.Item,{name:"pcpClientDirectory",rules:[{required:!0,type:"string",message:"Required"},{pattern:RegExp(/^\S*$/),message:"Space not allowed"}],label:"PCP Directory"},r.a.createElement(m.a,null)),r.a.createElement(c.a.Item,{rules:[{required:!1,pattern:new RegExp("^[0-9]*$"),message:"Please select a valid number"},{pattern:RegExp(/^\S*$/),message:"Space not allowed"}],name:"pcpRefreshTime",label:"Refresh Time"},r.a.createElement(m.a,null))),r.a.createElement(i.a,{span:12},r.a.createElement(c.a.Item,{name:"passwordFile",rules:[{required:!0,type:"string",message:"Required"},{pattern:RegExp(/^\S*$/),message:"Space not allowed"}],label:"PgPool Password File"},r.a.createElement(m.a,null)),r.a.createElement(c.a.Item,{name:"logFile",rules:[{required:!0,type:"string",message:"Required"},{pattern:RegExp(/^\S*$/),message:"Space not allowed"}],label:"PgPool Log File"},r.a.createElement(m.a,null)),r.a.createElement(c.a.Item,{name:"pcpHostname",rules:[{required:!0,type:"string",message:"Required"},{pattern:RegExp(/^\S*$/),message:"Space not allowed"}],label:"PCP Hostname"},r.a.createElement(m.a,null)))),r.a.createElement(c.a.Item,{name:"clearQueryCache",label:"Clears query cache(-c)",rules:[{type:"boolean"}],valuePropName:"checked"},r.a.createElement(u.a,null)),r.a.createElement(c.a.Item,{name:"demonMode",rules:[{type:"boolean"}],label:"Don't run in demon mode(-n)",valuePropName:"checked"},r.a.createElement(u.a,null)),r.a.createElement(c.a.Item,{name:"debugMode",rules:[{type:"boolean"}],label:"Debug mode(-d)",valuePropName:"checked"},r.a.createElement(u.a,null)),r.a.createElement(s.a,null,r.a.createElement(i.a,{span:12},r.a.createElement(c.a.Item,{name:"shutdownMode",label:"Stop Mode (-m)",rules:[{type:"string"}]},r.a.createElement(o.a,null,t("StopMode"))))),r.a.createElement(s.a,null,r.a.createElement(i.a,{span:12},r.a.createElement(c.a.Item,{name:"language",label:"Language",rules:[{type:"string"}]},r.a.createElement(o.a,null,t("Language"))))),r.a.createElement(d.b,{style:{marginLeft:"42%"}},r.a.createElement(p.a,{type:"primary",htmlType:"submit"},"Submit"),r.a.createElement(p.a,null,"Cancel"))))}},291:function(e,a,t){"use strict";var n=t(296);a.a=n.a},292:function(e,a,t){"use strict";var n=t(213);a.a=n.a},297:function(e,a,t){"use strict";var n=t(1),l=t(3),r=t(0),c=t(5),o=t(19),s=t(6),i=t.n(s),m=t(62),u=t(16),d=r.forwardRef((function(e,a){var t,n=e.prefixCls,s=void 0===n?"rc-switch":n,d=e.className,p=e.checked,g=e.defaultChecked,b=e.disabled,E=e.loadingIcon,h=e.checkedChildren,f=e.unCheckedChildren,y=e.onClick,v=e.onChange,C=e.onKeyDown,w=Object(o.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),O=Object(m.a)(!1,{value:p,defaultValue:g}),S=Object(c.a)(O,2),P=S[0],k=S[1];function R(e,a){var t=P;return b||(k(t=e),null===v||void 0===v||v(t,a)),t}var j=i()(s,d,(t={},Object(l.a)(t,"".concat(s,"-checked"),P),Object(l.a)(t,"".concat(s,"-disabled"),b),t));return r.createElement("button",Object.assign({},w,{type:"button",role:"switch","aria-checked":P,disabled:b,className:j,ref:a,onKeyDown:function(e){e.which===u.a.LEFT?R(!1,e):e.which===u.a.RIGHT&&R(!0,e),null===C||void 0===C||C(e)},onClick:function(e){var a=R(!P,e);null===y||void 0===y||y(a,e)}}),E,r.createElement("span",{className:"".concat(s,"-inner")},P?h:f))}));d.displayName="Switch";var p=d,g=t(63),b=t(100),E=t(98),h=t(71),f=t(35),y=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t},v=r.forwardRef((function(e,a){var t,c=e.prefixCls,o=e.size,s=e.loading,m=e.className,u=void 0===m?"":m,d=e.disabled,v=y(e,["prefixCls","size","loading","className","disabled"]);Object(f.a)("checked"in v||!("value"in v),"Switch","`value` is not a valid prop, do you mean `checked`?");var C=r.useContext(E.b),w=C.getPrefixCls,O=C.direction,S=r.useContext(h.b),P=w("switch",c),k=r.createElement("div",{className:"".concat(P,"-handle")},s&&r.createElement(g.a,{className:"".concat(P,"-loading-icon")})),R=i()((t={},Object(l.a)(t,"".concat(P,"-small"),"small"===(o||S)),Object(l.a)(t,"".concat(P,"-loading"),s),Object(l.a)(t,"".concat(P,"-rtl"),"rtl"===O),t),u);return r.createElement(b.a,{insertExtraNode:!0},r.createElement(p,Object(n.a)({},v,{prefixCls:P,className:R,disabled:d||s,ref:a,loadingIcon:k})))}));v.__ANT_SWITCH=!0,v.displayName="Switch";a.a=v}}]);
//# sourceMappingURL=6.d8cbd947.chunk.js.map
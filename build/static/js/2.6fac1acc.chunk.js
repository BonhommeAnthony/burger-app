webpackJsonp([2],{206:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(0),o=n.n(t),a=n(12),i=n(217),s=n(13),c=n(65),d=n(7),u=n(64),p=function(e){var r=e.onFetchOrders;Object(t.useEffect)(function(){r(e.token,e.userId)},[r]);var n=o.a.createElement(u.a,null);return e.loading||(n=e.orders.map(function(e){return o.a.createElement(i.a,{key:e.id,ingredients:e.ingredients,price:e.price})})),o.a.createElement("div",null,n)},l=function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},A=function(e){return{onFetchOrders:function(r,n){return e(d.i(r,n))}}};r.default=Object(a.b)(l,A)(Object(c.a)(p,s.a))},217:function(e,r,n){"use strict";var t=n(0),o=n.n(t),a=n(218),i=n.n(a),s=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map(function(e){return o.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return o.a.createElement("div",{className:i.a.Order},o.a.createElement("p",null,"Ingredients: ",t),o.a.createElement("p",null,"Price: ",o.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))};r.a=s},218:function(e,r,n){var t=n(219);"string"===typeof t&&(t=[[e.i,t,""]]);var o={};o.transform=void 0;n(204)(t,o);t.locals&&(e.exports=t.locals)},219:function(e,r,n){r=e.exports=n(203)(!0),r.push([e.i,".Order__Order__4yi4Z{width:80%;border:1px solid #eee;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;padding:10px;margin:10px auto;-webkit-box-sizing:border-box;box-sizing:border-box}","",{version:3,sources:["/Users/anthonybonhomme/Documents/web-dev/burger-app/src/components/Order/Order.css"],names:[],mappings:"AAAA,qBACI,UAAW,AACX,sBAAuB,AACvB,kCAAmC,AAC3B,0BAA2B,AACnC,aAAc,AACd,iBAAkB,AAClB,8BAA+B,AACvB,qBAAuB,CAClC",file:"Order.css",sourcesContent:[".Order {\n    width: 80%;\n    border: 1px solid #eee;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    padding: 10px;\n    margin: 10px auto;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}"],sourceRoot:""}]),r.locals={Order:"Order__Order__4yi4Z"}}});
//# sourceMappingURL=2.6fac1acc.chunk.js.map
(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(16),o=c.n(r),a=(c(31),c.p,c(32),c(9)),s=c(3),d=(c(13),c(4)),u=c(0);c(38);function l(){var e=Object(d.c)((function(e){return e.cart.products}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"cart",children:[Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("div",{children:"Count"}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{children:e.length})]}),Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("div",{children:"Total Price"}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{children:e.reduce((function(e,t){return Math.round(e+parseFloat(t.unitprice)*parseFloat(t.quantity))}),0)})]}),Object(u.jsx)("div",{className:"box box-slide",children:"Products"}),Object(u.jsxs)("div",{className:"box box-items box-header",children:[Object(u.jsx)("div",{children:"NAME"}),Object(u.jsx)("div",{children:"U/PRICE"}),Object(u.jsx)("div",{children:"QUANTITY"})]}),e.map((function(e){return Object(u.jsxs)("div",{className:"box box-items",children:[Object(u.jsx)("div",{children:e.name}),Object(u.jsx)("div",{children:e.unitprice}),Object(u.jsx)("div",{children:e.quantity})]})}))]})})}var j=c(11);var p=c(10);var b=c(24),O={products:[]};var h=Object(j.b)({shop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(console.log("shop.reducer  [state]",e," [action] ",t),"ITEMS_COUNT"===t.type){var c=t.payload;return console.log("--\x3e shop.reducer [payload] ",c),Object(p.a)(Object(p.a)({},e),{},{itemsCount:c.itemsCount})}return e},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return console.log("products.reducer  [state]",e," [action] ",t),e},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return console.log("user.reducer  [state]",e," [action] ",t),e},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;if(console.log("cart.reducer  [state]",e," [action] ",t),"ADD_TO_CART"==t.type){var c=t.payload.product,n=Object(b.a)(e.products);console.log("Products Before",n),n||(n=[]),console.log("Products After",n);var i=n.find((function(e){return e.id==c.id}));return i?(console.log("Product already existed so added a new quantity"),i.quantity=i.quantity+=1):(console.log("New product was pushed"),n.push({id:c.id,name:c.name,quantity:1,unitprice:c.unitprice})),Object(p.a)(Object(p.a)({},e),{},{products:n})}if("REMOVE_FROM_CART"==t.type){var r=t.payload.product,o=Object(b.a)(e.products);o||(o=[]);var a=o.find((function(e){return e.id==r.id}));return a?(a.quantity>0&&(a.quantity=a.quantity-=1),o=o.filter((function(e){return e.quantity>0}))):console.log("cart.reducer -> REMOVE_FROM_CART | Product never existed '".concat(r.name,"' ")),Object(p.a)(Object(p.a)({},e),{},{products:o})}return e}}),x=Object(j.c)(window.devToolsExtension&&window.devToolsExtension())(j.d)(h);var m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),i(e),r(e),o(e)}))},v=(c(40),c(41),function(e){var t=e.product,c=Object(d.b)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"product glass",children:[Object(u.jsx)("div",{className:"overlay",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum autem quas repellendus aperiam quisquam praesentium, ipsam ex reiciendis ad vitae quod? Nihil animi eos dolorum exercitationem voluptatibus minus sint!"}),Object(u.jsx)("div",{className:"productImage"}),Object(u.jsx)("div",{className:"productName",children:t.name}),Object(u.jsxs)("div",{className:"addToCartBox",children:[Object(u.jsx)("button",{className:"btn btn-add",onClick:function(){console.log("Added product to Cart"),c({type:"ADD_TO_CART",payload:{product:t}})},children:"+"}),Object(u.jsx)("input",{type:"text"}),Object(u.jsx)("button",{className:"btn btn-minus",onClick:function(){console.log("Removed product from Cart"),c({type:"REMOVE_FROM_CART",payload:{product:t}})},children:"-"})]})]})})}),f=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"products",children:[{id:1,name:"apple",unitprice:10},{id:2,name:"orange",unitprice:61.4},{id:3,name:"banana",unitprice:1.4},{id:4,name:"parcley",unitprice:10.4},{id:5,name:"pomegranate",unitprice:11.8},{id:6,name:"box",unitprice:.4},{id:7,name:"kale",unitprice:55.4}].map((function(e){return Object(u.jsx)(v,{product:e},e.id)}))})})};var g=function(){Object(n.useEffect)((function(){console.log("BASE URL","react-shop")}),[]);var e=Object(d.c)((function(e){return e.cart.products}));return console.log(e),Object(u.jsx)(d.a,{store:x,children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{}),Object(u.jsx)("h1",{children:"react-shop"}),Object(u.jsxs)(a.a,{children:[Object(u.jsx)("div",{className:"app"}),Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/".concat("react-shop"),component:f}),Object(u.jsx)(s.a,{path:"*",component:function(){return Object(u.jsx)("h1",{children:"Not Found !!"})}})]})]})]})})};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(d.a,{store:x,children:Object(u.jsx)(g,{})})}),document.getElementById("root")),m()}},[[42,1,2]]]);
//# sourceMappingURL=main.29d5a0f0.chunk.js.map
(this.webpackJsonpfed_react_capstone_project=this.webpackJsonpfed_react_capstone_project||[]).push([[9],{109:function(t,e,n){"use strict";var r,c=new Uint8Array(16);function o(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(c)}var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(t){return"string"===typeof t&&a.test(t)},u=[],s=0;s<256;++s)u.push((s+256).toString(16).substr(1));var f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};e.a=function(t,e,n){var r=(t=t||{}).random||(t.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var c=0;c<16;++c)e[n+c]=r[c];return e}return f(r)}},277:function(t,e,n){"use strict";n.r(e);var r=n(97),c=n(0),o=n.n(c),a=n(2),i=n(4),u=n(6),s=n.n(u),f=n(9),d=n(48),l=function(t){return o.a.forwardRef((function(e,n){return o.a.createElement("div",Object(a.a)({},e,{ref:n,className:s()(e.className,t)}))}))},p=n(39),b=o.a.forwardRef((function(t,e){var n=t.bsPrefix,r=t.className,c=t.variant,u=t.as,d=void 0===u?"img":u,l=Object(i.a)(t,["bsPrefix","className","variant","as"]),p=Object(f.a)(n,"card-img");return o.a.createElement(d,Object(a.a)({ref:e,className:s()(c?p+"-"+c:p,r)},l))}));b.displayName="CardImg",b.defaultProps={variant:null};var j=b,h=l("h5"),m=l("h6"),x=Object(d.a)("card-body"),g=Object(d.a)("card-title",{Component:h}),y=Object(d.a)("card-subtitle",{Component:m}),O=Object(d.a)("card-link",{Component:"a"}),v=Object(d.a)("card-text",{Component:"p"}),S=Object(d.a)("card-header"),w=Object(d.a)("card-footer"),N=Object(d.a)("card-img-overlay"),T=o.a.forwardRef((function(t,e){var n=t.bsPrefix,r=t.className,u=t.bg,d=t.text,l=t.border,b=t.body,j=t.children,h=t.as,m=void 0===h?"div":h,g=Object(i.a)(t,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(f.a)(n,"card"),O=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return o.a.createElement(p.a.Provider,{value:O},o.a.createElement(m,Object(a.a)({ref:e},g,{className:s()(r,y,u&&"bg-"+u,d&&"text-"+d,l&&"border-"+l)}),b?o.a.createElement(x,null,j):j))}));T.displayName="Card",T.defaultProps={body:!1},T.Img=j,T.Title=g,T.Subtitle=y,T.Body=x,T.Link=O,T.Text=v,T.Header=S,T.Footer=w,T.ImgOverlay=N;var W=T,z=n(95),C=n(21),P=n(5),E=n(14),R=n(1);e.default=function(){var t=Object(P.i)().id,e=Object(C.c)((function(t){return t.products.products})),n=Object(c.useState)(null),o=Object(r.a)(n,2),a=o[0],i=o[1],u=Object(C.c)((function(t){return t.users})),s=Object(C.b)();return Object(c.useEffect)((function(){var n=e.find((function(e){return e.id===t}));n?i(n):s(Object(z.d)())}),[e,t]),Object(c.useEffect)((function(){u.loginSuccess&&a&&s(Object(z.e)(a))}),[a,u.loginSuccess]),u.loginSuccess?a?Object(R.jsxs)("div",{children:[Object(R.jsx)("h2",{style:{textAlign:"center",marginTop:"20px",fontWeight:"bold",marginBottom:"30px"},children:"Product Details"}),Object(R.jsx)("div",{style:{width:"85%",margin:"auto"},children:Object(R.jsxs)(W,{children:[Object(R.jsx)(W.Header,{children:a.productManufacturer}),Object(R.jsxs)(W.Body,{children:[Object(R.jsx)(W.Title,{style:{fontWeight:"bold",margin:"10px 0",fontSize:"22px"},children:a.productName}),Object(R.jsx)(W.Text,{style:{fontWeight:"400",margin:"20px 0",fontSize:"16px"},children:a.productDescription}),Object(R.jsxs)(W.Text,{style:{fontWeight:"400",margin:"10px 0",fontSize:"16px"},children:["Manufacturer:"," ",Object(R.jsx)("span",{style:{fontWeight:"500",margin:"10px 0",fontSize:"20px"},children:a.productManufacturer})]}),Object(R.jsxs)(W.Text,{style:{fontWeight:"400",margin:"10px 0",fontSize:"16px"},children:["Price:"," ",Object(R.jsx)("span",{style:{fontWeight:"500",margin:"10px 0",fontSize:"20px"},children:a.productPrice})]}),Object(R.jsxs)(W.Text,{style:{fontWeight:"400",margin:"10px 0",fontSize:"14px"},children:["Creation Date:"," ",Object(R.jsx)("span",{style:{fontWeight:"500",margin:"10px 0",fontSize:"18px"},children:a.creationDate})]}),Object(R.jsxs)(W.Text,{style:{fontWeight:"400",margin:"10px 0",fontSize:"16px"},children:["Quantity:"," ",Object(R.jsx)("span",{style:{fontWeight:"500",margin:"10px 0",fontSize:"20px"},children:a.productQuantity})]}),Object(R.jsxs)(W.Text,{style:{fontWeight:"400",margin:"10px 0",fontSize:"16px"},children:["Number of Views:"," ",Object(R.jsx)("span",{style:{fontWeight:"500",margin:"10px 0",fontSize:"20px"},children:a.views})]}),Object(R.jsx)(E.b,{to:"/list",className:"btn btn-dark",style:{marginTop:"20px",color:"white",marginLeft:"auto"},children:"Back to Products List"})]})]})})]}):Object(R.jsx)("h1",{className:"text-center p-5",children:"Not Found"}):Object(R.jsx)(P.b,{to:"/login"})}},95:function(t,e,n){"use strict";n.d(e,"f",(function(){return f})),n.d(e,"i",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return p})),n.d(e,"g",(function(){return b})),n.d(e,"a",(function(){return j})),n.d(e,"h",(function(){return h})),n.d(e,"b",(function(){return m})),n.d(e,"e",(function(){return x}));var r=n(3),c=n(28),o=n.n(c),a=n(7),i=n(109),u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{type:t,payload:e}},s=function(t){return u(a.i,{error:t})},f=function(t){return u(a.o,{values:t})},d=function(){return u(a.u)},l=function(){return u(a.g)},p=function(){return function(t){t(u(a.j)),o.a.get("/products").then((function(e){var n;t((n=e.data,u(a.k,{products:n})))})).catch((function(e){t(s(e))}))}},b=function(t){return function(e){g(),o.a.get("/products?q=".concat(t)).then((function(t){var n;e((n=t.data,u(a.p,{data:n})))})).catch((function(t){e(s(t))}))}},j=function(t){return function(e){e(u(a.b));var n=Object(i.a)(),c=Date().toLocaleString();console.log(c),o.a.post("/products",Object(r.a)(Object(r.a)({},t),{},{id:n,views:0,creationDate:c})).then((function(t){e(function(t){return u(a.d,{product:t})}(t))})).catch((function(t){var n;e((n=t,u(a.a,{error:n})))}))}},h=function(t){return function(e){e(u(a.t)),o.a.put("/products/"+t.id,t).then((function(t){e(function(t){return u(a.v,{product:t})}(t))})).catch((function(t){var n;e((n=t,u(a.s,{error:n})))}))}},m=function(t){return function(e){e(u(a.f)),o.a.delete("/products/"+t.id).then((function(n){e(function(t){return u(a.h,{product:t})}(t))})).catch((function(t){var n;e((n=t,u(a.e,{error:n})))}))}},x=function(t){return function(e){g(),o.a.put("/products/"+t.id,Object(r.a)(Object(r.a)({},t),{},{views:t.views+1})).then((function(n){e(function(t){return u(a.r,{product:t})}(t))})).catch((function(t){}))}},g=function(){return{type:a.q}}},97:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(36);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){c=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=9.3b4bed2f.chunk.js.map
(this.webpackJsonpfed_react_capstone_project=this.webpackJsonpfed_react_capstone_project||[]).push([[13],{109:function(t,n,r){"use strict";var e,o=new Uint8Array(16);function u(){if(!e&&!(e="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(o)}var c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(t){return"string"===typeof t&&c.test(t)},a=[],f=0;f<256;++f)a.push((f+256).toString(16).substr(1));var d=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(a[t[n+0]]+a[t[n+1]]+a[t[n+2]]+a[t[n+3]]+"-"+a[t[n+4]]+a[t[n+5]]+"-"+a[t[n+6]]+a[t[n+7]]+"-"+a[t[n+8]]+a[t[n+9]]+"-"+a[t[n+10]]+a[t[n+11]]+a[t[n+12]]+a[t[n+13]]+a[t[n+14]]+a[t[n+15]]).toLowerCase();if(!i(r))throw TypeError("Stringified UUID is invalid");return r};n.a=function(t,n,r){var e=(t=t||{}).random||(t.rng||u)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,n){r=r||0;for(var o=0;o<16;++o)n[r+o]=e[o];return n}return d(e)}},132:function(t,n,r){"use strict";r.r(n);var e=r(0),o=r(95),u=r(21),c=r(1);n.default=function(){var t=Object(e.useRef)(""),n=Object(u.b)();return Object(e.useEffect)((function(){t.current.focus()}),[]),Object(c.jsx)("div",{children:Object(c.jsx)("div",{style:{textAlign:"center",padding:"10px",marginTop:"15px"},children:Object(c.jsx)("input",{type:"search",placeholder:"Search here...",style:{fontSize:"14px",marginBottom:"10px",borderRadius:"9px",border:"1px solid #ccc",padding:"7px",width:"75%"},ref:t,onChange:function(t){""!==t&&n(Object(o.g)(t.target.value))}})})})}},95:function(t,n,r){"use strict";r.d(n,"f",(function(){return d})),r.d(n,"i",(function(){return p})),r.d(n,"c",(function(){return s})),r.d(n,"d",(function(){return h})),r.d(n,"g",(function(){return v})),r.d(n,"a",(function(){return g})),r.d(n,"h",(function(){return l})),r.d(n,"b",(function(){return b})),r.d(n,"e",(function(){return y}));var e=r(3),o=r(28),u=r.n(o),c=r(7),i=r(109),a=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{type:t,payload:n}},f=function(t){return a(c.i,{error:t})},d=function(t){return a(c.o,{values:t})},p=function(){return a(c.u)},s=function(){return a(c.g)},h=function(){return function(t){t(a(c.j)),u.a.get("/products").then((function(n){var r;t((r=n.data,a(c.k,{products:r})))})).catch((function(n){t(f(n))}))}},v=function(t){return function(n){j(),u.a.get("/products?q=".concat(t)).then((function(t){var r;n((r=t.data,a(c.p,{data:r})))})).catch((function(t){n(f(t))}))}},g=function(t){return function(n){n(a(c.b));var r=Object(i.a)(),o=Date().toLocaleString();console.log(o),u.a.post("/products",Object(e.a)(Object(e.a)({},t),{},{id:r,views:0,creationDate:o})).then((function(t){n(function(t){return a(c.d,{product:t})}(t))})).catch((function(t){var r;n((r=t,a(c.a,{error:r})))}))}},l=function(t){return function(n){n(a(c.t)),u.a.put("/products/"+t.id,t).then((function(t){n(function(t){return a(c.v,{product:t})}(t))})).catch((function(t){var r;n((r=t,a(c.s,{error:r})))}))}},b=function(t){return function(n){n(a(c.f)),u.a.delete("/products/"+t.id).then((function(r){n(function(t){return a(c.h,{product:t})}(t))})).catch((function(t){var r;n((r=t,a(c.e,{error:r})))}))}},y=function(t){return function(n){j(),u.a.put("/products/"+t.id,Object(e.a)(Object(e.a)({},t),{},{views:t.views+1})).then((function(r){n(function(t){return a(c.r,{product:t})}(t))})).catch((function(t){}))}},j=function(){return{type:c.q}}}}]);
//# sourceMappingURL=13.9051c2c0.chunk.js.map
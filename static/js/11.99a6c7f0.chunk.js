(this.webpackJsonpfed_react_capstone_project=this.webpackJsonpfed_react_capstone_project||[]).push([[11],{103:function(e,t,n){"use strict";var r=n(3),c=n(98),i=(n(0),n(96)),o=n(1),a=function(e){var t=e.label,n=e.name,a=Object(c.a)(e,["label","name"]);return Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"10px"},children:[Object(o.jsxs)("label",{htmlFor:n,style:{fontWeight:"bold",fontSize:"16px"},children:[t,":"]}),Object(o.jsx)(i.b,Object(r.a)(Object(r.a)({id:n,name:n},a),{},{style:{fontSize:"14px",marginBottom:"10px",borderRadius:"9px",border:"1px solid #ccc",padding:"7px",width:"350px",height:"45px"},placeholder:"Type ".concat(t," here...")})),Object(o.jsx)(i.a,{name:n,children:function(e){return Object(o.jsxs)("div",{style:{color:"red",fontWeight:"bold",fontSize:"13px"},children:[e,"*"]})}})]})},s=function(e){var t=e.label,n=e.name,a=Object(c.a)(e,["label","name"]);return Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"10px"},children:[Object(o.jsxs)("label",{htmlFor:n,style:{fontWeight:"bold",fontSize:"18px"},children:[t,":"]}),Object(o.jsx)(i.b,Object(r.a)(Object(r.a)({id:n,name:n},a),{},{style:{fontSize:"15px",marginBottom:"10px",borderRadius:"9px",border:"1px solid #ccc",padding:"7px",width:"70%",height:"200px"},placeholder:"Type ".concat(t," here..."),as:"textarea"})),Object(o.jsx)(i.a,{name:n,children:function(e){return Object(o.jsxs)("div",{style:{color:"red",fontWeight:"bold",fontSize:"13px"},children:[e,"*"]})}})]})};t.a=function(e){var t=e.control,n=Object(c.a)(e,["control"]);switch(t){case"input":return Object(o.jsx)(a,Object(r.a)({},n));case"textarea":return Object(o.jsx)(s,Object(r.a)({},n));default:return null}}},108:function(e,t,n){"use strict";var r=n(1);t.a=function(e){var t=e.msg,n=e.color;return""!==t?Object(r.jsx)("h3",{className:"text-center text-".concat(n),style:{fontSize:"20px"},children:t}):null}},271:function(e,t,n){"use strict";n.r(t);var r=n(96),c=n(117),i=n(103),o=n(0),a=n(19),s=n(14),l=n(30),d=n(21),b=n(5),j=n(92),x=n(108),p=n(1);t.default=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.users}));Object(o.useEffect)((function(){return e(Object(l.b)()),function(){e(Object(l.b)())}}),[]);var n=c.b({email:c.c().email("Invalid Email format").required("Required"),password:c.c().required("Required")});return t.loginSuccess?Object(p.jsx)(b.b,{to:"/"}):t.loginLoading?Object(p.jsx)("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",margin:"10%"},children:Object(p.jsx)(j.a,{animation:"border",style:{width:"50px",height:"50px"}})}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{style:{textAlign:"center",margin:"50px 0"},children:"LOGIN PAGE"}),t.loginFailed?Object(p.jsx)(x.a,{color:"danger",msg:t.errors?t.errors.response&&404===t.errors.response.status?"User doesn't Exist!!":t.errors.message:"Something Wrong"}):null,Object(p.jsx)(r.d,{initialValues:{email:"",password:""},validationSchema:n,onSubmit:function(t){e(Object(l.a)(t.email,t.password))},children:function(e){return Object(p.jsx)(r.c,{children:Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"3% 0"},children:[Object(p.jsx)(i.a,{control:"input",type:"email",label:"Email",name:"email"}),Object(p.jsx)(i.a,{control:"input",type:"password",label:"Password",name:"password"}),Object(p.jsx)("button",{type:"submit",disabled:!e.isValid,className:"btn btn-dark my-2",style:{backgroundColor:"#2b2e4a",fontWeight:"bold"},children:"Login"}),Object(p.jsxs)(s.b,{to:"/register",style:{fontWeight:"600",marginTop:"15px",fontSize:"14px",textDecoration:"none",textAlign:"center"},children:["Dont't have an account? Register here!"," ",Object(p.jsx)(a.j,{style:{fontWeight:"600",fontSize:"20px",marginLeft:"5px",textDecoration:"none",color:"black"}})]})]})})}})]})}}}]);
//# sourceMappingURL=11.99a6c7f0.chunk.js.map
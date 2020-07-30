(this.webpackJsonpputlock=this.webpackJsonpputlock||[]).push([[0],{52:function(e,t,a){e.exports=a(79)},57:function(e,t,a){},58:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(44),l=a.n(o),r=(a(57),a(8)),u=a(4),i=(a(58),a(51)),s=function(e){var t=e.component,a=Object(i.a)(e,["component"]);return c.a.createElement(u.b,Object.assign({},a,{render:function(e){return localStorage.getItem("token")?c.a.createElement(t,e):c.a.createElement(u.a,{to:"/login"})}}))},m=a(3);function p(e){var t=e.potluck,a=Object(u.g)().push;return c.a.createElement("div",null,c.a.createElement("button",{className:"Btn",onClick:function(){return a("/potluck/".concat(t.id),t)}},c.a.createElement("h1",null,"Potluck"),c.a.createElement("h2",null,t.name),c.a.createElement("h2",null,t.host),c.a.createElement("p",null,t.date,c.a.createElement("br",null)),c.a.createElement("p",null,t.time,c.a.createElement("br",null)),c.a.createElement("p",null,t.location,c.a.createElement("br",null))))}var d=a(18),b=a.n(d),h=function(){var e=localStorage.getItem("token");return console.log("token: "+e),b.a.create({headers:{Authorization:e},baseURL:"https://potluckplanner1.herokuapp.com"})},f=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){h().get("https://potluckplanner1.herokuapp.com/api/potlucks").then((function(e){o(e.data)})).catch((function(e){return console.log("ERROR")}))}),[]),a.length?c.a.createElement("div",{className:"potluck-list"},c.a.createElement(r.b,{to:"/create-potluck"},"Create a Potluck"),a.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement(p,{potluck:e}))}))):c.a.createElement("div",null,"Loading potluck information...")},g=a(6),E=a(2),O=a(17),j={name:"",location:"",date:"",time:""},k={item_name:"",claimed:0,potluck_id:""},v={guest_name:""};function w(){var e=Object(u.g)().push,t=Object(n.useState)(j),a=Object(m.a)(t,2),o=a[0],l=a[1],r=Object(n.useState)(k),i=Object(m.a)(r,2),s=i[0],p=i[1],d=Object(n.useState)([]),b=Object(m.a)(d,2),f=b[0],w=b[1],S=Object(n.useState)(v),y=Object(m.a)(S,2),R=y[0],N=y[1],x=Object(n.useState)([]),C=Object(m.a)(x,2),I=C[0],_=C[1],P=function(e){var t=Object(O.a)(f);t.map((function(t){t.potluck_id=e,h().post("https://potluckplanner1.herokuapp.com/api/potlucks/".concat(e,"/items"),t).then((function(e){t.id=e.data.id})).catch((function(e){return console.log("ERROR")}))})),w(t)},D=function(e){var t=Object(O.a)(I);t.map((function(t){t.potluck_id=e,h().post("https://potluckplanner1.herokuapp.com/api/potlucks/".concat(e,"/guests"),t).then((function(e){t.id=e.data.id})).catch((function(e){return console.log("ERROR")}))})),N(t)},J=function(e){e.preventDefault(),l(Object(E.a)(Object(E.a)({},o),{},Object(g.a)({},e.target.name,e.target.value)))};return c.a.createElement("div",{className:"potluck-wrapper"},c.a.createElement("h1",null,"Potluck"),c.a.createElement("form",{className:"details-form"},c.a.createElement("div",{className:"create-potluck"},c.a.createElement("input",{placeholder:"Name",type:"text",name:"name",value:o.name,onChange:J}),c.a.createElement("input",{placeholder:"Location",type:"text",name:"location",value:o.location,onChange:J}),c.a.createElement("input",{placeholder:"Date",type:"text",name:"date",value:o.date,onChange:J}),c.a.createElement("input",{placeholder:"Time",type:"text",name:"time",value:o.time,onChange:J})),c.a.createElement("div",{className:"food"},c.a.createElement("h3",null,"Food:"),c.a.createElement("input",{placeholder:"Dish",type:"text",name:"item_name",value:s.item_name,onChange:function(e){e.preventDefault(),p(Object(E.a)(Object(E.a)({},s),{},Object(g.a)({},e.target.name,e.target.value)))}}),c.a.createElement("button",{className:"Btn",onClick:function(e){e.preventDefault(),w([].concat(Object(O.a)(f),[s])),p(Object(E.a)({},k))}},"Add Item"),f.map((function(e){return c.a.createElement("p",{key:e.item_name},c.a.createElement("span",{role:"img","aria-label":""},"\ud83c\udf57"),"  ",e.item_name,c.a.createElement("span",{role:"img","aria-label":""}," \ud83c\udf2d "),c.a.createElement("br",null))}))),c.a.createElement("div",{className:"guests"},c.a.createElement("h3",null,"Guests:"),c.a.createElement("input",{placeholder:"Guests",type:"text",name:"guest_name",value:R.guest_name,onChange:function(e){e.preventDefault(),N(Object(E.a)(Object(E.a)({},R),{},Object(g.a)({},e.target.name,e.target.value)))}}),c.a.createElement("button",{className:"Btn",onClick:function(e){e.preventDefault(),_([].concat(Object(O.a)(I),[R])),N(Object(E.a)({},R))}},"Add Guests"),I.map((function(e){return c.a.createElement("p",{key:e.guest_name},c.a.createElement("span",{role:"img","aria-label":""},"\ud83c\udf57"),"  ",e.guest_name,c.a.createElement("span",{role:"img","aria-label":""}," \ud83c\udf2d "),c.a.createElement("br",null))}))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("button",{className:"Btn",onClick:function(t){t.preventDefault();var a=localStorage.getItem("userId");console.log("userId:"+a),h().post("https://potluckplanner1.herokuapp.com/api/users/".concat(a,"/potlucks"),o).then((function(t){h().get("https://potluckplanner1.herokuapp.com/api/potlucks").then((function(t){var a=t.data.filter((function(e){return e.name===o.name}))[0].id;P(a),D(a),e("/")}))})).catch((function(e){return console.log("ERROR")}))}},"Create Potluck")))}var S=a(24),y=a(25),R=a(12),N=R.a().shape({username:R.c().required("Username is required"),password:R.c().required("Password is required")});function x(){var e=Object(S.a)(["\n    display:flex;\n    flex-flow: column;\n    background-color: #FFFFFF;\n    border-radius: 10px;\n    box-shadow: 5px, 2px;\n    margin-right: 30%;\n    margin-left: 30%;\n    background-color: mistyrose;\n    margin-top: 15%;\n\n    p{\n        font-size: 0.8rem;\n    }\n    button{\n        margin-right: 30%;\n        margin-left: 30%;\n    }\n    button{\n        background-color: wheat;\n        border:0.5px solid black;\n    }\n    .loginError{\n        color:red;\n        font-size:0.8rem;\n    }\n    #passInput{\n        margin-left: 0.6%;\n    }\n    \n"]);return x=function(){return e},e}var C=y.a.div(x()),I={username:"",password:""},_={username:"",password:""};function P(){var e=Object(u.g)().push,t=Object(n.useState)(I),a=Object(m.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(_),s=Object(m.a)(i,2),p=s[0],d=s[1],h=function(e){var t=e.target,a=t.name,n=t.value;R.b(N,a).validate(n).then((function(e){d(Object(E.a)(Object(E.a)({},p),{},Object(g.a)({},a,"")))})).catch((function(e){d(Object(E.a)(Object(E.a)({},p),{},Object(g.a)({},a,e.errors[0])))})),l(Object(E.a)(Object(E.a)({},o),{},Object(g.a)({},a,n)))},f=function(){b.a.post("https://potluckplanner1.herokuapp.com/api/auth/login",{username:o.username,password:o.password}).then((function(t){console.log(t),localStorage.setItem("token",t.data.token),e("/")})).catch((function(e){console.log("The error is ".concat(e))}))};return c.a.createElement(C,{className:"login-container"},c.a.createElement("h2",null,"Potluck Planner"),c.a.createElement("label",null,"Username:",c.a.createElement("input",{type:"text",placeholder:"Username",name:"username",value:o.username,onChange:h}),c.a.createElement("div",{className:"loginError"},p.username)),c.a.createElement("br",null),c.a.createElement("label",null,"Password:",c.a.createElement("input",{id:"passInput",type:"password",placeholder:"Password",name:"password",value:o.password,onChange:h}),c.a.createElement("div",{className:"loginError"},p.password)),c.a.createElement("br",null),c.a.createElement(r.b,{to:"/register"},c.a.createElement("p",null,"Create an account")),c.a.createElement("button",{id:"login-button",onClick:function(e){e.preventDefault(),f(),l(I)}},"Log in"))}var D=R.a().shape({username:R.c().min(8,"Username must be at least 8 characters").required("Username is Required"),password:R.c().min(8,"Password must be at least 8 characters").required("Password is Required")});function J(){var e=Object(S.a)(["\n    color: red;\n    font-style: italic;\n"]);return J=function(){return e},e}function q(){var e=Object(S.a)(["\n    display:flex;\n    flex-direction: column;\n\n    button {\n        width: 1% 5%;\n        margin: 1% 45%;\n    }\n"]);return q=function(){return e},e}var F=y.a.div(q()),B=y.a.div(J()),L={username:"",password:""},U={username:"",password:""},A=[];function G(e){var t=Object(n.useState)(A),a=Object(m.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(U),s=Object(m.a)(i,2),p=s[0],d=s[1],h=Object(n.useState)(L),f=Object(m.a)(h,2),j=f[0],k=f[1],v=Object(n.useState)(!0),w=Object(m.a)(v,2),S=w[0],y=w[1],N=Object(u.g)(),x=function(e){var t=e.target,a=t.name,n=t.value;R.b(D,a).validate(n).then((function(e){d(Object(E.a)(Object(E.a)({},p),{},Object(g.a)({},a,"")))})).catch((function(e){d(Object(E.a)(Object(E.a)({},p),{},Object(g.a)({},a,e.errors[0])))})),k(Object(E.a)(Object(E.a)({},j),{},Object(g.a)({},a,n)))};return Object(n.useEffect)((function(){D.isValid(j).then((function(e){y(!e)}))}),[j]),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){b.a.post("https://potluckplanner1.herokuapp.com/api/auth/register",e).then((function(e){l([e.data].concat(Object(O.a)(o))),localStorage.setItem("userId",e.data.data.id),k(L),console.log(e.data,"data sent to server!"),N.push("/login")})).catch((function(e){console.log("Snake eyes")}))}({username:j.username.trim(),password:j.password.trim()})}},c.a.createElement(F,{className:"form-input"},c.a.createElement("h2",null,"Create an account"),c.a.createElement("label",null,"Name:\xa0",c.a.createElement("input",{onChange:x,placeholder:"your name here",name:"username",type:"text"})),c.a.createElement("label",null,"Password:\xa0",c.a.createElement("input",{onChange:x,placeholder:"your password here",name:"password",type:"password"})),c.a.createElement("button",{id:"register-btn",disabled:S},"Register"),c.a.createElement(r.b,{to:"/login"},"Login"),c.a.createElement(r.b,{to:"/register"},"Registration")),c.a.createElement(B,{className:"errors"},c.a.createElement("p",{id:"para-one"},p.username),c.a.createElement("p",{id:"para-two"},p.password)))}var z={name:"",host:"",location:"",date:"",time:""};function M(){var e=Object(n.useState)(z),t=Object(m.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)([]),r=Object(m.a)(l,2),i=r[0],s=r[1],p=Object(n.useState)([]),d=Object(m.a)(p,2),b=d[0],f=d[1],O=Object(n.useState)({}),j=Object(m.a)(O,2),k=j[0],v=j[1],w=Object(n.useState)({}),S=Object(m.a)(w,2),y=S[0],R=S[1],N={},x=Object(u.h)();Object(n.useEffect)((function(){h().get("https://potluckplanner1.herokuapp.com/api/potlucks/".concat(x.id)).then((function(e){o(e.data)})).catch((function(e){return console.log("ERROR")}))}),[]),Object(n.useEffect)((function(){a.id&&h().get("https://potluckplanner1.herokuapp.com/api/potlucks/".concat(a.id,"/items")).then((function(e){s(e.data)})).catch((function(e){return console.log(e.response)}))}),[a]),Object(n.useEffect)((function(){!function e(t){i.length&&(console.log("items: "+JSON.stringify(i)),console.log("claimed:"+JSON.stringify(k)+" expanded claimed: "+JSON.stringify(Object(E.a)({},k))),h().get("https://potluckplanner1.herokuapp.com/api/items/".concat(i[t].id)).then((function(a){N[i[t].id]=a.data.claimed,t===i.length-1?(console.log("Now setting claimed: "+JSON.stringify(N)),v(Object(E.a)({},N))):(console.log("i: "+t+" items.length: "+i.length),++t<i.length&&e(t))})))}(0)}),[i]),Object(n.useEffect)((function(){a.id&&h().get("https://potluckplanner1.herokuapp.com/api/potlucks/".concat(a.id,"/guests")).then((function(e){f(e.data)})).catch((function(e){return console.log("ERROR")}))}),[a]),Object(n.useEffect)((function(){C()}),[k]);var C=function(){var e=[];Object.values(k).map((function(t){0!==t&&e.push(h().get("https://potluckplanner1.herokuapp.com/api/users/".concat(t)).then((function(e){return Object(g.a)({},t,e.data.username)})).catch((function(e){return console.log("ERROR")})))})),Promise.all(e).then((function(e){var t={};for(var a in e)t=Object(E.a)(Object(E.a)({},t),e[a]);R(t),console.log("newDict:"+JSON.stringify(t))}))};return a.id?(console.log(i),console.log(a),console.log("claimed: "+JSON.stringify(k)),console.log("userIdName: "+JSON.stringify(y)),c.a.createElement("div",{className:"potluck-details"},c.a.createElement("h1",null,"Potluck"),c.a.createElement("h2",null,a.name),c.a.createElement("h2",null,a.host),c.a.createElement("p",null,a.date,c.a.createElement("br",null)),c.a.createElement("p",null,a.time,c.a.createElement("br",null)),c.a.createElement("p",null,a.location,c.a.createElement("br",null)),c.a.createElement("h3",null,"Food Menu"),c.a.createElement("div",null,i.map((function(e){return c.a.createElement("p",{key:e.id},e.item_name," - ",k[e.id]?"claimed by ".concat(y[k[e.id]]):"unclaimed",c.a.createElement("span",null,!k[e.id]&&c.a.createElement("button",{onClick:function(){return t=e.id,void h().put("https://potluckplanner1.herokuapp.com/api/items/".concat(t),{claimed:localStorage.getItem("userId")}).then((function(e){})).catch((function(e){return console.log("ERROR")}));var t}},"Claim")))}))),c.a.createElement("h3",null,"Guestlist"),b.map((function(e){return c.a.createElement("p",{key:e.id}," ",e.guest_name," - ",(t=e.id,-1!==Object.values(k).indexOf(t)?"confirmed":"pending"));var t})))):c.a.createElement("div",null,"Loading potluck information...")}var T=function(){return c.a.createElement(r.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(u.d,null,c.a.createElement(u.b,{exact:!0,path:"/login",component:P}),c.a.createElement(u.b,{exact:!0,path:"/register",component:G}),c.a.createElement(u.b,{exact:!0,path:"/create-potluck",component:w}),c.a.createElement(s,{exact:!0,path:"/potluck-list",component:f}),c.a.createElement(s,{exact:!0,path:"/potluck/:id",component:M}),c.a.createElement(u.b,{path:"/"},c.a.createElement(u.a,{to:"/potluck-list"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.a10bdb92.chunk.js.map
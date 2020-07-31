(this.webpackJsonpputlock=this.webpackJsonpputlock||[]).push([[0],{52:function(e,t,n){e.exports=n(79)},57:function(e,t,n){},58:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(44),o=n.n(r),l=(n(57),n(7)),u=n(4),i=(n(58),n(14)),s=n(15);function m(){var e=Object(i.a)(["\n    display:flex;\n    justify-content: space-around;\n    align-items: center;\n    border-bottom: 1px solid black;\n    margin: 0 0 2% 0;\n    nav{\n        display:flex;\n    }\n    button{\n        width: 100px;\n        margin: 1%;\n        padding: 3px;\n        background-color: white;\n        border: 1px solid black;\n        border-radius: 5px;\n        font-size: 1em;\n        :hover{\n            background-color: lightblue;\n        }\n    }\n    .link{\n        width: 100px;\n        text-align: center;\n        margin: 1%;\n        padding: 3px;\n        text-decoration: none;\n        border: 1px solid black;\n        border-radius: 5px;\n        color: black;\n        font-size: 1em;\n        :hover{\n            background-color: lightblue;\n        }\n    }\n"]);return m=function(){return e},e}var p=s.a.div(m()),d=function(){return c.a.createElement(p,null,c.a.createElement("div",null,c.a.createElement("h1",null,"Potluck Planner")),c.a.createElement("nav",null,c.a.createElement("button",{onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("username"),window.location.reload()}},"Logout"),c.a.createElement(l.b,{className:"link",to:"/potluck-list"},"Home"),c.a.createElement(l.b,{className:"link",to:"/create-potluck"},"Host a Potluck")))},g=n(51),b=function(e){var t=e.component,n=Object(g.a)(e,["component"]);return c.a.createElement(u.b,Object.assign({},n,{render:function(e){return localStorage.getItem("token")?c.a.createElement(t,e):c.a.createElement(u.a,{to:"/login"})}}))},f=n(3);function h(e){var t=e.potluck,n=Object(u.g)().push;return c.a.createElement("div",null,c.a.createElement("button",{className:"Btn",onClick:function(){return n("/potluck/".concat(t.id),t)}},c.a.createElement("h1",null,"Potluck"),c.a.createElement("h2",null,t.name),c.a.createElement("h2",null,t.host),c.a.createElement("p",null,t.date,c.a.createElement("br",null)),c.a.createElement("p",null,t.time,c.a.createElement("br",null)),c.a.createElement("p",null,t.location,c.a.createElement("br",null))))}var E=n(23),O=n.n(E),k=function(){var e=localStorage.getItem("token");return console.log("token: "+e),O.a.create({headers:{Authorization:e},baseURL:"https://potluckplanner1.herokuapp.com"})};function j(){var e=Object(i.a)(["\nwidth: 40%;\nmargin-left: 5%;\n.Btn {\n    width: 100%;\n    margin: 10px;\n}\n"]);return j=function(){return e},e}function v(){var e=Object(i.a)(["\nwidth: 80%;\nmargin: auto;\ndisplay: flex;\nflex-wrap: wrap;\nalign-items: center;\nposition: relative;\n// background-image: linear-gradient(lightyellow, #faf54e);\nbackground-image: linear-gradient( light green, green);\nborder-radius: 20px;\npadding: 16px;\nbox-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"]);return v=function(){return e},e}var w=s.a.div(v()),x=s.a.div(j()),y=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){k().get("https://potluckplanner1.herokuapp.com/api/potlucks").then((function(e){r(e.data)})).catch((function(e){return console.log("ERROR")}))}),[]),n.length?c.a.createElement(w,null,n.map((function(e){return c.a.createElement(x,{key:e.id},c.a.createElement(h,{potluck:e}))}))):c.a.createElement("div",null,"Loading potluck information...")},S=n(6),N=n(2),R=n(19),I={name:"",location:"",date:"",time:""},C={item_name:"",claimed:0,potluck_id:""},P={guest_name:""};function _(){var e=Object(u.g)().push,t=Object(a.useState)(I),n=Object(f.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)(C),i=Object(f.a)(l,2),s=i[0],m=i[1],p=Object(a.useState)([]),d=Object(f.a)(p,2),g=d[0],b=d[1],h=Object(a.useState)(P),E=Object(f.a)(h,2),O=E[0],j=E[1],v=Object(a.useState)([]),w=Object(f.a)(v,2),x=w[0],y=w[1],_=function(e){var t=Object(R.a)(g),n=[];t.map((function(t){t.potluck_id=e,n.push(k().post("https://potluckplanner1.herokuapp.com/api/potlucks/".concat(e,"/items"),t).then((function(e){return console.log(e,"This is the food item"),t.id=e.data.id,e.data.id})).catch((function(e){return console.log("ERROR")})))})),Promise.all(n).then((function(e){for(var n=0;n<e.length;n++)t[n].id=e[n];b(t)}))},D=function(e){var t=Object(R.a)(x);console.log("newGuestList: "+JSON.stringify(t));var n=[];t.map((function(t){n.push(k().post("https://potluckplanner1.herokuapp.com/api/potlucks/".concat(e,"/guests"),t).then((function(e){return t.id=e.data.id,e.data.id})).catch((function(e){return console.log("ERROR")})))})),Promise.all(n).then((function(e){for(var n=0;n<e.length;n++)t[n].id=e[n];j(t)}))},J=function(e){e.preventDefault(),o(Object(N.a)(Object(N.a)({},r),{},Object(S.a)({},e.target.name,e.target.value)))};return c.a.createElement("div",{className:"potluck-wrapper"},c.a.createElement("h1",null,"Potluck"),c.a.createElement("form",{className:"details-form"},c.a.createElement("div",{className:"create-potluck"},c.a.createElement("input",{placeholder:"Name",type:"text",name:"name",value:r.name,onChange:J}),c.a.createElement("input",{placeholder:"Location",type:"text",name:"location",value:r.location,onChange:J}),c.a.createElement("input",{placeholder:"Date",type:"text",name:"date",value:r.date,onChange:J}),c.a.createElement("input",{placeholder:"Time",type:"text",name:"time",value:r.time,onChange:J})),c.a.createElement("div",{className:"food"},c.a.createElement("h3",null,"Food:"),c.a.createElement("input",{placeholder:"Dish",type:"text",name:"item_name",value:s.item_name,onChange:function(e){e.preventDefault(),m(Object(N.a)(Object(N.a)({},s),{},Object(S.a)({},e.target.name,e.target.value)))}}),c.a.createElement("button",{className:"Btn",onClick:function(e){e.preventDefault(),b([].concat(Object(R.a)(g),[s])),m(Object(N.a)({},C))}},"Add Item"),g.map((function(e){return c.a.createElement("p",{key:e.item_name},c.a.createElement("span",{role:"img","aria-label":""},"\ud83c\udf57"),"  ",e.item_name,c.a.createElement("span",{role:"img","aria-label":""}," \ud83c\udf2d "),c.a.createElement("br",null))}))),c.a.createElement("div",{className:"guests"},c.a.createElement("h3",null,"Guests:"),c.a.createElement("input",{placeholder:"Guests",type:"text",name:"guest_name",value:O.guest_name,onChange:function(e){e.preventDefault(),j(Object(N.a)(Object(N.a)({},O),{},Object(S.a)({},e.target.name,e.target.value)))}}),c.a.createElement("button",{className:"Btn",onClick:function(e){e.preventDefault(),y([].concat(Object(R.a)(x),[O])),j(Object(N.a)({},O))}},"Add Guests"),x.map((function(e){return c.a.createElement("p",{key:e.guest_name},c.a.createElement("span",{role:"img","aria-label":""},"\ud83c\udf57"),"  ",e.guest_name,c.a.createElement("span",{role:"img","aria-label":""}," \ud83c\udf2d "),c.a.createElement("br",null))}))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("button",{className:"Btn",onClick:function(t){t.preventDefault();var n=localStorage.getItem("userId");console.log("userId:"+n),k().post("https://potluckplanner1.herokuapp.com/api/users/".concat(n,"/potlucks"),r).then((function(t){k().get("https://potluckplanner1.herokuapp.com/api/potlucks").then((function(t){var n=t.data.filter((function(e){return e.name===r.name}))[0].id;_(n),D(n),e("/")}))})).catch((function(e){return console.log("ERROR")}))}},"Create Potluck")))}var D=n(12),J=D.a().shape({username:D.c().required("Username is required"),password:D.c().required("Password is required")});function q(){var e=Object(i.a)(["\n    display:flex;\n    flex-flow: column;\n    background-color: #FFFFFF;\n    border-radius: 10px;\n    box-shadow: 5px, 2px;\n    margin-right: 30%;\n    margin-left: 30%;\n    background-color: mistyrose;\n    margin-top: 15%;\n\n    p{\n        font-size: 0.8rem;\n    }\n    button{\n        margin-right: 30%;\n        margin-left: 30%;\n    }\n    button{\n        background-color: wheat;\n        border:0.5px solid black;\n    }\n    .loginError{\n        color:red;\n        font-size:0.8rem;\n    }\n    #passInput{\n        margin-left: 0.6%;\n    }\n    \n"]);return q=function(){return e},e}var F=s.a.div(q()),L={username:"",password:""},z={username:"",password:""};function B(){var e=Object(u.g)().push,t=Object(a.useState)(L),n=Object(f.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(z),s=Object(f.a)(i,2),m=s[0],p=s[1],d=function(e){var t=e.target,n=t.name,a=t.value;D.b(J,n).validate(a).then((function(e){p(Object(N.a)(Object(N.a)({},m),{},Object(S.a)({},n,"")))})).catch((function(e){p(Object(N.a)(Object(N.a)({},m),{},Object(S.a)({},n,e.errors[0])))})),o(Object(N.a)(Object(N.a)({},r),{},Object(S.a)({},n,a)))},g=function(){k().post("api/auth/login",r).then((function(t){console.log(t),localStorage.setItem("token",t.data.token),localStorage.setItem("username",r.username),e("/potluck-list")})).catch((function(e){return console.log("The error is ".concat(e))}))};return c.a.createElement(F,{className:"login-container"},c.a.createElement("h2",null,"Potluck Planner"),c.a.createElement("label",null,"Username:",c.a.createElement("input",{type:"text",placeholder:"Username",name:"username",value:r.username,onChange:d}),c.a.createElement("div",{className:"loginError"},m.username)),c.a.createElement("br",null),c.a.createElement("label",null,"Password:",c.a.createElement("input",{id:"passInput",type:"password",placeholder:"Password",name:"password",value:r.password,onChange:d}),c.a.createElement("div",{className:"loginError"},m.password)),c.a.createElement("br",null),c.a.createElement(l.b,{to:"/register"},c.a.createElement("p",null,"Create an account")),c.a.createElement("button",{id:"login-button",onClick:function(e){e.preventDefault(),g(),o(L)}},"Log in"))}var U=D.a().shape({username:D.c().min(8,"Username must be at least 8 characters").required("Username is Required"),password:D.c().min(8,"Password must be at least 8 characters").required("Password is Required")});function A(){var e=Object(i.a)(["\n    font-size: 0.8rem;\n    color: red;\n    font-style: italic;\n"]);return A=function(){return e},e}function G(){var e=Object(i.a)(["\n    display:flex;\n    flex-flow: column;\n    background-color: mistyrose;\n    margin-right: 30%;\n    margin-left: 30%;\n    background-color: mistyrose;\n    margin-top: 15%;\n\n    label {\n        margin: 2% 0%;\n    }\n\n    button {\n        border:0.5px solid black;\n        background-color: wheat;\n        width: 50%;\n        margin-top: 1%;\n        margin-left:  25%;\n        margin-right:  25%;\n    }\n\n    p {\n        font-size: 0.8rem;\n    }\n\n"]);return G=function(){return e},e}var T=s.a.div(G()),H=s.a.div(A()),M={username:"",password:""},W={username:"",password:""},V=[];function Y(e){var t=Object(a.useState)(V),n=Object(f.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(W),s=Object(f.a)(i,2),m=s[0],p=s[1],d=Object(a.useState)(M),g=Object(f.a)(d,2),b=g[0],h=g[1],E=Object(a.useState)(!0),k=Object(f.a)(E,2),j=k[0],v=k[1],w=Object(u.g)(),x=function(e){var t=e.target,n=t.name,a=t.value;D.b(U,n).validate(a).then((function(e){p(Object(N.a)(Object(N.a)({},m),{},Object(S.a)({},n,"")))})).catch((function(e){p(Object(N.a)(Object(N.a)({},m),{},Object(S.a)({},n,e.errors[0])))})),h(Object(N.a)(Object(N.a)({},b),{},Object(S.a)({},n,a)))};return Object(a.useEffect)((function(){U.isValid(b).then((function(e){v(!e)}))}),[b]),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){O.a.post("https://potluckplanner1.herokuapp.com/api/auth/register",e).then((function(e){o([e.data].concat(Object(R.a)(r))),localStorage.setItem("userId",e.data.data.id),localStorage.setItem("username",e.data.data.username),h(M),console.log(e.data,"data sent to server!"),w.push("/login")})).catch((function(e){console.log("Snake eyes")}))}({username:b.username.trim(),password:b.password.trim()})}},c.a.createElement(T,{className:"form-input"},c.a.createElement("h2",null,"Create An Account"),c.a.createElement("label",null,"Name:\xa0",c.a.createElement("input",{onChange:x,placeholder:"your name here",name:"username",type:"text"})),c.a.createElement("label",null,"Password:\xa0",c.a.createElement("input",{onChange:x,placeholder:"your password here",name:"password",type:"password"})),c.a.createElement(l.b,{to:"/login"},c.a.createElement("p",null,"Login")),c.a.createElement("button",{id:"register-btn",disabled:j},"Register")),c.a.createElement(H,{className:"errors"},c.a.createElement("p",{id:"para-one"},m.username),c.a.createElement("p",{id:"para-two"},m.password)))}var $={name:"",host:"",location:"",date:"",time:""};function K(){var e=Object(a.useState)($),t=Object(f.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),l=Object(f.a)(o,2),i=l[0],s=l[1],m=Object(a.useState)([]),p=Object(f.a)(m,2),d=p[0],g=p[1],b=Object(a.useState)({}),h=Object(f.a)(b,2),E=h[0],O=h[1],j=Object(a.useState)({}),v=Object(f.a)(j,2),w=v[0],x=v[1],y={},R=Object(u.h)();Object(a.useEffect)((function(){k().get("https://potluckplanner1.herokuapp.com/api/potlucks/".concat(R.id)).then((function(e){r(e.data)})).catch((function(e){return console.log("ERROR")}))}),[]),Object(a.useEffect)((function(){n.id&&k().get("https://potluckplanner1.herokuapp.com/api/potlucks/".concat(n.id,"/items")).then((function(e){s(e.data)})).catch((function(e){return console.log(e.response)}))}),[n]),Object(a.useEffect)((function(){!function e(t){i.length&&(console.log("items: "+JSON.stringify(i)),console.log("claimed:"+JSON.stringify(E)+" expanded claimed: "+JSON.stringify(Object(N.a)({},E))),k().get("https://potluckplanner1.herokuapp.com/api/items/".concat(i[t].id)).then((function(n){y[i[t].id]=n.data.claimed,t===i.length-1?(console.log("Now setting claimed: "+JSON.stringify(y)),O(Object(N.a)({},y))):(console.log("i: "+t+" items.length: "+i.length),++t<i.length&&e(t))})))}(0)}),[i]),Object(a.useEffect)((function(){n.id&&k().get("https://potluckplanner1.herokuapp.com/api/potlucks/".concat(n.id,"/guests")).then((function(e){g(e.data)})).catch((function(e){return console.log("ERROR")}))}),[n]),Object(a.useEffect)((function(){I()}),[E]);var I=function(){var e=[];Object.values(E).map((function(t){0!==t&&e.push(k().get("https://potluckplanner1.herokuapp.com/api/users/".concat(t)).then((function(e){return Object(S.a)({},t,e.data.username)})).catch((function(e){return console.log("ERROR")})))})),Promise.all(e).then((function(e){var t={};for(var n in e)t=Object(N.a)(Object(N.a)({},t),e[n]);x(t),console.log("newDict:"+JSON.stringify(t))}))};return n.id?(console.log(i),console.log(n),console.log("claimed: "+JSON.stringify(E)),console.log("userIdName: "+JSON.stringify(w)),c.a.createElement("div",{className:"potluck-details"},c.a.createElement("h1",null,"Potluck"),c.a.createElement("h2",null,n.name),c.a.createElement("h2",null,n.host),c.a.createElement("p",null,n.date,c.a.createElement("br",null)),c.a.createElement("p",null,n.time,c.a.createElement("br",null)),c.a.createElement("p",null,n.location,c.a.createElement("br",null)),c.a.createElement("h3",null,"Food Menu"),c.a.createElement("div",null,i.map((function(e){return c.a.createElement("p",{key:e.id},e.item_name," - ",E[e.id]&&w[E[e.id]]?"claimed by ".concat(w[E[e.id]]):"unclaimed",c.a.createElement("span",null,!E[e.id]&&c.a.createElement("button",{onClick:function(){return t=e.id,void(-1!==d.map((function(e){return e.guest_name})).indexOf(localStorage.getItem("username"))?k().put("https://potluckplanner1.herokuapp.com/api/items/".concat(t),{claimed:localStorage.getItem("userId")}).then((function(e){O(Object(N.a)(Object(N.a)({},E),{},Object(S.a)({},t,localStorage.getItem("userId"))))})).catch((function(e){return console.log("ERROR")})):alert("You are not on the guestlist, so you can't claim"));var t}},"Claim")))}))),c.a.createElement("h3",null,"Guestlist"),d.map((function(e){return c.a.createElement("p",{key:e.id}," ",e.guest_name," - ",function(e){var t=Object.values(E).map((function(e){return w[e]}));return console.log(t),-1!==t.indexOf(e)}(e.guest_name)?"confirmed":"pending")})))):c.a.createElement("div",null,"Loading potluck information...")}var Q=function(){return c.a.createElement(l.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(d,null),c.a.createElement(u.d,null,c.a.createElement(u.b,{exact:!0,path:"/login",component:B}),c.a.createElement(u.b,{exact:!0,path:"/register",component:Y}),c.a.createElement(b,{exact:!0,path:"/create-potluck",component:_}),c.a.createElement(b,{exact:!0,path:"/potluck-list",component:y}),c.a.createElement(b,{exact:!0,path:"/potluck/:id",component:K}),c.a.createElement(u.b,{path:"/"},c.a.createElement(u.a,{to:"/potluck-list"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.2983eb50.chunk.js.map
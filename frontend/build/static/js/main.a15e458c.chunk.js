(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(28),i=c.n(s),r=(c(68),c(15)),o=(c(69),c(106)),j=c(100),d=(c(70),c(101)),l=c(102),b=c(103),h=c(104),u=c(54),O=c.n(u),m=c(10),p=c(31),x=p.a.initializeApp({apiKey:"AIzaSyClnmlH3nfr-la8oVVCxdhrnMPOoJZbbE0",authDomain:"whatsapp-clone-mern-bcada.firebaseapp.com",projectId:"whatsapp-clone-mern-bcada",storageBucket:"whatsapp-clone-mern-bcada.appspot.com",messagingSenderId:"964915110639",appId:"1:964915110639:web:efec0d1b755e59c3b8f11a"}).firestore(),f=p.a.auth(),v=new p.a.auth.GoogleAuthProvider,g=x,N=c(4),S=Object(a.createContext)(),C=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(N.jsx)(S.Provider,{value:Object(a.useReducer)(t,c),children:n})},w=function(){return Object(a.useContext)(S)};function y(){var e,t,c=Object(a.useState)(""),n=Object(r.a)(c,2),s=n[0],i=n[1],u=Object(m.f)().roomId,x=Object(a.useState)(""),f=Object(r.a)(x,2),v=f[0],S=f[1],C=Object(a.useState)([]),y=Object(r.a)(C,2),I=y[0],k=y[1],A=w(),E=Object(r.a)(A,2),D=E[0].user;E[1];Object(a.useEffect)((function(){u&&(g.collection("rooms").doc(u).onSnapshot((function(e){return S(e.data().name)})),g.collection("rooms").doc(u).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return k(e.docs.map((function(e){return e.data()})))})))}),[u]);return Object(N.jsxs)("div",{className:"Chat",children:[Object(N.jsxs)("div",{className:"chat-header",children:[Object(N.jsx)(o.a,{}),Object(N.jsxs)("div",{className:"chat-headerInfo",children:[Object(N.jsx)("h3",{children:v}),Object(N.jsxs)("p",{children:["Last seen at"," ",new Date(null===(e=I[I.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()]})]}),Object(N.jsxs)("div",{className:"chat-headerRight",children:[Object(N.jsx)(j.a,{children:Object(N.jsx)(d.a,{})}),Object(N.jsx)(j.a,{children:Object(N.jsx)(l.a,{})}),Object(N.jsx)(j.a,{children:Object(N.jsx)(b.a,{})})]})]}),Object(N.jsx)("div",{className:"chat-body",children:I.map((function(e,t){var c;return Object(N.jsxs)("p",{className:"chat-message  ".concat(e.name===D.displayName&&"chat-reciever"),children:[Object(N.jsx)("span",{className:"chat-name",children:e.name}),e.message,Object(N.jsx)("span",{className:"chat-timestamp",children:new Date(null===(c=e.timestamp)||void 0===c?void 0:c.toDate()).toUTCString()})]},t)}))}),Object(N.jsxs)("div",{className:"chat-footer",children:[Object(N.jsx)(h.a,{}),Object(N.jsxs)("form",{children:[Object(N.jsx)("input",{value:s,onChange:function(e){return i(e.target.value)},placeholder:"Type a message",type:"text"}),Object(N.jsx)("button",{onClick:function(e){e.preventDefault(),g.collection("rooms").doc(u).collection("messages").add({message:s,name:D.displayName,timestamp:p.a.firestore.FieldValue.serverTimestamp()}),i("")},type:"submit",children:"Send a message"})]}),Object(N.jsx)(O.a,{})]})]})}c(83);var I=c(34);function k(e){var t,c=e.id,n=e.name,s=e.addNewChat,i=Object(a.useState)(""),j=Object(r.a)(i,2),d=j[0],l=j[1];Object(a.useEffect)((function(){c&&g.collection("rooms").doc(c).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return l(e.docs.map((function(e){return e.data()})))}))}),[c]);return s?Object(N.jsx)("div",{onClick:function(){var e=prompt("Entrer un nom de groupe");e&&g.collection("rooms").add({name:e})},className:"SidebarChat",children:Object(N.jsx)("h2",{children:"Add new Chat"})}):Object(N.jsxs)(I.b,{to:"/rooms/".concat(c),children:[" ",Object(N.jsxs)("div",{className:"SidebarChat",children:[Object(N.jsx)(o.a,{}),Object(N.jsxs)("div",{className:"sidebarChat-info",children:[Object(N.jsx)("h2",{children:n}),Object(N.jsx)("p",{children:null===(t=d[0])||void 0===t?void 0:t.message})]})]})," "]})}c(84);var A=c(56),E=c.n(A),D=c(55),R=c.n(D),T=c(57),B=c.n(T);function P(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],s=w(),i=Object(r.a)(s,2),l=i[0].user;i[1];return Object(a.useEffect)((function(){var e=g.collection("rooms").onSnapshot((function(e){n(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(N.jsxs)("div",{className:"Sidebar",children:[Object(N.jsxs)("div",{className:"sidebar-header",children:[Object(N.jsx)(o.a,{src:l.photoURL}),Object(N.jsxs)("div",{className:"sidebar-headerRight",children:[Object(N.jsx)(j.a,{children:Object(N.jsx)(R.a,{})}),Object(N.jsx)(j.a,{children:Object(N.jsx)(E.a,{})}),Object(N.jsx)(j.a,{children:Object(N.jsx)(B.a,{})})]})]}),Object(N.jsx)("div",{className:"sidebar-search",children:Object(N.jsxs)("div",{className:"sidebar-searchContainer",children:[Object(N.jsx)(d.a,{}),Object(N.jsx)("input",{placeholder:"Search or start new chat",type:"text"})]})}),Object(N.jsxs)("div",{className:"sidebar-chats",children:[Object(N.jsx)(k,{addNewChat:!0}),c.map((function(e){return Object(N.jsx)(k,{id:e.id,name:e.data.name},e.id)}))]})]})}var U=c(58),J=c(105),L=(c(85),c(49)),V="SET_USER",W=function(e,t){switch(console.log(t),t.type){case V:return Object(L.a)(Object(L.a)({},e),{},{user:t.user});default:return e}};function z(){var e=w(),t=Object(r.a)(e,2);Object(U.a)(t[0]);var c=t[1];return Object(N.jsx)("div",{className:"Login",children:Object(N.jsxs)("div",{className:"login-container",children:[Object(N.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",alt:"loginIcon"}),Object(N.jsx)("div",{className:"login-text",children:Object(N.jsx)("h1",{children:"Sign in to WhatsApp"})}),Object(N.jsx)(J.a,{onClick:function(){f.signInWithPopup(v).then((function(e){c({type:V,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign in with Google"})]})})}var G=function(){var e=w(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(N.jsx)("div",{className:"App",children:c?Object(N.jsx)("div",{className:"App-body",children:Object(N.jsxs)(I.a,{children:[Object(N.jsx)(P,{}),Object(N.jsxs)(m.c,{children:[Object(N.jsx)(m.a,{path:"/rooms/:roomId",children:Object(N.jsx)(y,{})}),Object(N.jsx)(m.a,{path:"/",children:Object(N.jsx)(y,{})})]})]})}):Object(N.jsx)(z,{})})};i.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(C,{initialState:{user:null},reducer:W,children:Object(N.jsx)(G,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.a15e458c.chunk.js.map
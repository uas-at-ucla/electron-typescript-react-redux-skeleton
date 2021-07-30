(this.webpackJsonpApp=this.webpackJsonpApp||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"exampleDerivedData",(function(){return w}));var c={};n.r(c),n.d(c,"exampleAction",(function(){return P})),n.d(c,"transmitAction",(function(){return R}));var i=n(0),o=n.n(i),r=n(19),s=n.n(r),d=n(21),l=n(106),u=(n(63),n(64),n(8)),p=n(107),h=n(108),m=n(9),j=n(15),b=n(47),O=n(48),v=n(49),f=n(50),x=n.n(f),E=function(){function e(t){Object(O.a)(this,e),this.store=void 0,this.socket=void 0,console.log("Initializing communicator"),this.store=t,this.socket=this.initSocket()}return Object(v.a)(e,[{key:"initSocket",value:function(){var e=this;return this.socket=x()("http://localhost:8080"),this.socket.on("connect",(function(){e.store.dispatch({type:"SERVER_CONNECTED"})})),this.socket.on("disconnect",(function(){e.store.dispatch({type:"SERVER_DISCONNECTED"})})),this.socket.on("EXAMPLE_MSG",(function(t){e.store.dispatch(function(e){return{type:"EXAMPLE_MESSAGE_RECEIVED",payload:e}}(t))})),this.socket}},{key:"reduxMiddleware",value:function(e){var t=this;return function(n){"TRANSMIT"===n.type&&(null!=n.payload.data?t.socket.emit(n.payload.msg,n.payload.data):t.socket.emit(n.payload.msg),console.log("Transmitting",n.payload)),e(n)}}}]),e}(),g=n(51),y=Object(g.a)((function(e,t){switch(t.type){case"EXAMPLE_ACTION":return void(e.data=t.payload);case"EXAMPLE_MESSAGE_RECEIVED":e.data=t.payload.toString()}}),{data:"Initial value"}),S=n(28),w=Object(S.createSelector)([function(e){return e.example.data}],(function(e){return e+"!!!"})),A=Object(j.combineReducers)({example:y}),N=Object(j.applyMiddleware)((function(e){var t=new E(e);return function(e){return t.reduxMiddleware(e)}})),k=Object(j.createStore)(A,Object(b.composeWithDevTools)(N)),C={example:a},T=Object.assign.apply(Object,[{}].concat(Object(m.a)(Object.values(C)))),M=n(95),D=M.getStateWith;(0,M.registerSelectors)(T),D((function(){return k.getState()}));var I=k,P=function(e){return{type:"EXAMPLE_ACTION",payload:e}},R=function(e,t){return{type:"TRANSMIT",payload:{msg:e,data:t}}},_=window.require?window.require("electron"):void 0,L=window.require?window.require("path"):void 0,q=window.require?window.require("fs"):void 0,W=_?_.app:void 0,X=W?W.getAppPath():void 0;W&&W.getPath("userData");var F,V=n(1),G=(F="../",L&&X?L.join(X,F):void 0),J=q&&G?q.readdirSync(G):void 0,B=c;var z=Object(d.b)((function(e,t){return{message:e.example.data,messageWithEmphasis:C.example.exampleDerivedData(e)}}),B)((function(e){var t=Object(i.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1];return Object(V.jsxs)("div",{className:"ExampleComponent",children:[Object(V.jsx)("p",{children:e.message}),Object(V.jsx)("p",{className:"mb-4",children:Object(V.jsx)("b",{children:e.messageWithEmphasis})}),Object(V.jsx)("p",{className:"mb-4",children:e.exampleProp}),G&&J?Object(V.jsx)("p",{className:"mb-4",children:"The folder ".concat(G," contains: ").concat(J.join(", "))}):Object(V.jsx)("p",{className:"mb-4",children:"Can't access NodeJS/Electron modules, so this must be running in the browser"}),Object(V.jsxs)("div",{children:[Object(V.jsx)(p.a,{className:"w-auto mr-2",placeholder:"Type something!",onChange:function(e){return c(e.target.value)},value:a}),Object(V.jsx)(h.a,{variant:"solid",color:"primary",onClick:function(){return e.exampleAction(a)},children:"Dispatch Action!"})]})]})}));var H=function(){return Object(V.jsxs)("div",{className:"App p-6",children:[Object(V.jsx)("p",{className:"text-5xl mb-4",children:"Welcome!"}),Object(V.jsx)(z,{exampleProp:"This string was passed from the parent component"})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};console.log("Running in production mode"),s.a.render(Object(V.jsx)(o.a.StrictMode,{children:Object(V.jsx)(l.a,{children:Object(V.jsx)(d.a,{store:I,children:Object(V.jsx)(H,{})})})}),document.getElementById("root")),K()},63:function(e,t,n){},64:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.d5b50193.chunk.js.map
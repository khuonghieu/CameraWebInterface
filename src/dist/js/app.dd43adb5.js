(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return s.p+"js/"+({login:"login",notifications:"notifications"}[t]||t)+"."+{login:"78b9bc3a",notifications:"00f93a9e"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("1d50")},"1d50":function(t,e,n){"use strict";n.r(e);n("b731"),n("2e6c"),n("f168"),n("a04c");var r=n("e832"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"grey lighten-4"},[n("Navbar"),n("v-content",[n("router-view")],1),n("Footer")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navbar"}},[n("v-toolbar",{staticClass:"cyan darken-1 hidden-xs-only"},[n("v-toolbar-title",{staticClass:"font-weight-black"},[n("v-img",{staticClass:"grey lighten-1",attrs:{src:"../assets/mspi.png","aspect-ratio":"1"}}),t._v("MSPi")],1),n("v-spacer"),n("v-toolbar-items",t._l(t.nav,(function(e,r){return n("v-btn",{key:r,attrs:{text:"",to:e.route}},[t._v(" "+t._s(e.text)+" ")])})),1)],1),n("v-toolbar",{staticClass:"hidden-sm-and-up cyan darken-1"},[n("v-toolbar-title",{staticClass:"font-weight-black"},[n("v-img",{staticClass:"grey lighten-1",attrs:{src:"../assets/mspi.png","aspect-ratio":"1"}}),t._v("MSPi")],1),n("v-spacer"),n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{dark:"",icon:""}},r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",t._l(t.nav,(function(e,r){return n("v-list-item",{key:r,attrs:{to:e.route}},[n("v-list-item-title",[t._v(t._s(e.text))])],1)})),1)],1)],1)],1)},s=[],c={data:function(){return{dialog:!1,nav:[{text:"Home",route:"/",active:!0},{text:"Login",route:"/login",active:!1},{text:"Live Video Stream",route:"/livestream",active:!1},{text:"Notifications",route:"/notifications",active:!1}]}}},u=c,l=n("a6c2"),p=Object(l["a"])(u,i,s,!1,null,null,null),f=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{color:"cyan darken-1",padless:""}},[n("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v("\n      "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("MSPi")])])],1)},d=[],m={data:function(){return{links:["Home","About Us","Team","Services","Blog","Contact Us"]}}},b=m,h=Object(l["a"])(b,v,d,!1,null,null,null),g=h.exports,y={components:{Navbar:f,Footer:g},name:"App",data:function(){return{}}},_=y,w=Object(l["a"])(_,o,a,!1,null,null,null),x=w.exports,j=n("4af9"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("This is home page")]),n("v-img",{attrs:{src:"../assets/mspi.png"}})],1)},O=[],C={},S=Object(l["a"])(C,k,O,!1,null,null,null),P=S.exports;r["a"].use(j["a"]);var E=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:P},{path:"/notifications",name:"notifications",component:function(){return n.e("notifications").then(n.bind(null,"ca56"))}},{path:"/login",name:"login",component:function(){return n.e("login").then(n.bind(null,"5311"))}},{path:"/livestream",name:"livestream",component:function(){return n.e("login").then(n.bind(null,"755b"))}}]}),M=n("8d28");r["a"].use(M["a"]);var T=new M["a"]({icons:{iconfont:"mdi"}});n("ccd0"),n("7d1d");r["a"].use(T),r["a"].config.productionTip=!1,new r["a"]({router:E,vuetify:T,render:function(t){return t(x)}}).$mount("#app")},"7d1d":function(t,e,n){"use strict";n.r(e),n.d(e,"db",(function(){return i})),n.d(e,"auth",(function(){return s})),n.d(e,"currentUser",(function(){return c})),n.d(e,"usersCollection",(function(){return l})),n.d(e,"storageRef",(function(){return u}));var r=n("742a"),o=n.n(r),a=(n("8c44"),{apiKey:"AIzaSyC2AMehEW9xsxtLdVKHzZG7ENNh2wrBNw0",authDomain:"mspi-a4b75.firebaseapp.com",databaseURL:"https://mspi-a4b75.firebaseio.com",projectId:"mspi-a4b75",storageBucket:"mspi-a4b75.appspot.com",messagingSenderId:"224698699586",appId:"1:224698699586:web:33bb9a289a097f74a302db",measurementId:"G-RBB4FBV72Q"});o.a.initializeApp(a);var i=o.a.firestore(),s=o.a.auth(),c=s.currentUser,u=o.a.storage().ref(),l=i.collection("test")}});
//# sourceMappingURL=app.dd43adb5.js.map
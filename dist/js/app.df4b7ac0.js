(function(t){function e(e){for(var r,a,s=e[0],i=e[1],c=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o={app:0},u=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"86228111"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"1bf44c27"}[t]+".css",o=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[t],f.parentNode.removeChild(f),n(u)},f.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:"/"}},[t._v(" © Procon")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),n("b-nav-item",{attrs:{to:"/rates"}},[t._v("Show Rates")]),n("b-nav-item",{attrs:{to:"/new"}},[t._v("Create Rate")]),n("b-nav-item",{attrs:{to:"/edit"}},[t._v("Edit Rate")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[t.isLoggedIn?n("b-nav-item",{attrs:{href:"#"}},[t._v(t._s(t.xusername))]):t._e(),t._v(" | "),t.isLoggedIn?t._e():n("b-nav-item",{attrs:{href:"/login"}},[t._v("Login")]),t.isLoggedIn?t._e():n("b-nav-item",{attrs:{href:"/register"}},[t._v("Register")]),t.isLoggedIn?n("b-nav-item",{on:{click:t.logout}},[t._v("Logout")]):t._e()],1)],1)],1)],1)},s=[],i=n("bc3a"),c=n.n(i),l={name:"navbar",data:function(){return{}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},xusername:function(){return this.$store.getters.username}},methods:{logout:function(){var t=this;console.log("Logging Out");var e=this.xusername;localStorage.removeItem("jwt"),this.$store.dispatch("logout").then((function(){t.$router.push("/")})),swal("Success","Goodbye ".concat(e),"success")}}},d=l,f=n("2877"),g=Object(f["a"])(d,u,s,!1,null,null,null),m=g.exports,h={components:{Navbar:m}},v=h,p=(n("5c0b"),Object(f["a"])(v,a,o,!1,null,null,null)),b=p.exports,y=(n("45fc"),n("d3b7"),n("8c4f")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"textCust mt-5"},[n("h1",[t._v("Currency Conversion")]),n("hr"),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col border-right"},[n("label",{attrs:{for:"customizeSource"}},[t._v("Starting Currency:")]),n("b-form-select",{attrs:{id:"customizeSource",options:t.startOptions},on:{change:function(e){return t.fillTargetCurrencies(t.startingCurrency)}},model:{value:t.startingCurrency,callback:function(e){t.startingCurrency=e},expression:"startingCurrency"}}),n("span",[t._v(" ID: "+t._s(t.startingCurrency))])],1),n("div",{staticClass:"col border-right"},[n("label",{attrs:{for:"rate"}},[t._v("Amount:")]),n("b-form-input",{attrs:{id:"rate",type:"number",size:"sm",disabled:!t.bothCurrenciesSelected,placeholder:"$"},on:{keyup:function(e){return t.calculateResult()}},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),n("div",{staticClass:"mt-2",attrs:{id:"requirements"}},[n("span",{class:[t.isFromSelected?"green":"red"]},[t._v("Starting Currency Selected")]),n("span",[t._v(" |")]),n("span",{class:[t.isToSelected?"green":"red"]},[t._v("Target Currency Selected")])]),n("div",{staticClass:"mt-4"},[n("span",{attrs:{id:"currentRateText"}},[n("b-icon",{attrs:{icon:"exclamation-circle-fill",variant:"primary"}}),t._v(" Current rate is: "+t._s(t.currentRate))],1)])],1),n("div",{staticClass:"col"},[n("label",{attrs:{for:"customizeTarget"}},[t._v("Target Currency:")]),n("b-form-select",{attrs:{id:"customizeTarget",options:t.targetOptions},on:{change:function(e){return t.getRate(t.startingCurrency,t.targetCurrency)}},model:{value:t.targetCurrency,callback:function(e){t.targetCurrency=e},expression:"targetCurrency"}}),n("span",[t._v(" ID: "+t._s(t.targetCurrency))])],1)]),n("label",{staticClass:"mt-5"},[t._v("Result: "+t._s(t.result))])])},C=[],S=(n("99af"),n("4160"),n("159b"),{data:function(){return{isFromSelected:!1,isToSelected:!1,bothCurrenciesSelected:!1,result:"",exists:null,selected:null,startingCurrency:null,targetCurrency:null,amount:"",currentRate:"",startOptions:[{value:null,text:"FROM:"}],targetOptions:[{value:null,text:"TO:"}]}},methods:{fillTargetCurrencies:function(t){var e=this;this.clean(),c.a.get("/".concat(t)).then((function(t){var n=t.data;n.forEach((function(t){var n=t.targetCurrency,r=n._id,a=n.base;e.targetOptions.push({value:r,text:a})}))}))},getRate:function(t,e){var n=this;this.isToSelected=!0,this.bothCurrenciesSelected=!0,c.a.get("/".concat(t,"/").concat(e)).then((function(t){n.currentRate=t.data})),this.currentRate="RATEGOESHERE"},calculateResult:function(){this.result=this.currentRate*this.amount},clean:function(){this.currentRate="",this.amount="",this.result="",this.targetOptions=[{value:null,text:"TO:"}],this.targetCurrency=null,this.isFromSelected=!0,this.isToSelected=!1,this.bothCurrenciesSelected=!1}},mounted:function(){var t=this;c.a.get("/").then((function(e){var n=e.data;n.forEach((function(e){e._id;var n=e.startingCurrency,r=n._id,a=n.base,o={value:r,text:a};t.exists=t.startOptions.some((function(t){return t.value===o.value})),t.exists||t.startOptions.push(o)}))}))}}),w=S,O=(n("cccb"),Object(f["a"])(w,_,C,!1,null,null,null)),x=O.exports;r["default"].use(y["a"]);var E=[{path:"/",name:"home",component:x},{path:"/rates",name:"Rates",component:function(){return n.e("about").then(n.bind(null,"435e"))},meta:{requiresAuth:!0}},{path:"/new",name:"New",component:function(){return n.e("about").then(n.bind(null,"67bf"))},meta:{requiresAuth:!0}},{path:"/edit",name:"Edit",component:function(){return n.e("about").then(n.bind(null,"1071"))},meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("about").then(n.bind(null,"73cf"))}}],R=new y["a"]({mode:"history",base:"/",routes:E});R.beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.requiresAuth}))&&null==localStorage.getItem("jwt")?(n({path:"/"}),swal("Unauthorized","Please login to access this tab","warning")):n()}));var j=R,T=n("cca8"),k=n("5f5b"),L=n("b1e0"),I=(n("f9e3"),n("2dd8"),n("14ba")),A=n.n(I),P=n("2f62");r["default"].use(P["a"]);var N=new P["a"].Store({state:{status:"",token:localStorage.getItem("jwt")||"",user:{}},mutations:{auth_success:function(t,e){var n=e.jwt,r=e.user;t.token=n,t.user=r},logout:function(t){t.token="",t.user={}}},actions:{login:function(t,e){var n=t.commit,r=localStorage.getItem("jwt");n("auth_success",{jwt:r,user:e})},register:function(t,e){var n=t.commit,r=localStorage.getItem("jwt");n("auth_success",{jwt:r,user:e})},logout:function(t){var e=t.commit;e("logout")}},getters:{username:function(t){return t.user.username||""},isLoggedIn:function(t){return!!t.token}}});c.a.defaults.baseURL=Object({NODE_ENV:"production",BASE_URL:"/"}).baseURL||"http://localhost:3080/api",r["default"].use(k["a"]),r["default"].use(L["a"]),r["default"].use(T["a"]),r["default"].use(A.a),r["default"].config.productionTip=!1,new r["default"]({router:j,store:N,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5ced":function(t,e,n){},"9c0c":function(t,e,n){},cccb:function(t,e,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.df4b7ac0.js.map
(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{102:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),i=(a(102),a(88)),l=a(192),s=a(193),m=a(191),u=a(196),f=a(186),d=a(197),p=a(43),g=a(27),v=a(189),h=a(89).io.connect(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT||"http://localhost:3001");console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT);var E=h,b=Object(f.a)((function(e){return Object(d.a)({root:{marginRight:"30px"},msg:{color:"white"}})}));function k(){console.log("in alert component");var e=b(),t=Object(n.useState)(""),a=Object(g.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){console.log("attempting to connect"),console.log("ENV PORT"+Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT),E.on("broadcast",(function(e){c(e)})),console.log("after connect attempt")}),[]),o.a.createElement(v.a,{maxWidth:"xs",className:e.root},o.a.createElement("div",{className:e.msg},o.a.createElement(m.a,{component:"p"},r)))}var O=Object(f.a)((function(e){return Object(d.a)({root:{width:"100%",marginBottom:0},title:Object(i.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),links:{color:"#fff"},offset:e.mixins.toolbar})}));function x(){var e=O();return o.a.createElement("header",{className:e.root},o.a.createElement(l.a,{position:"fixed"},o.a.createElement(s.a,null,o.a.createElement(m.a,{variant:"h6",className:e.title},"Google Books"),o.a.createElement(k,null),o.a.createElement(p.b,{to:"/"},o.a.createElement(u.a,{className:e.links},"Search")),o.a.createElement(p.b,{to:"/saved"},o.a.createElement(u.a,{className:e.links},"Saved Books")))),o.a.createElement("div",{className:e.offset}))}var S=a(90),j=a.n(S),N=Object(f.a)((function(e){return Object(d.a)({hero:{height:400,backgroundImage:"url(".concat(j.a,")"),backgroundSize:"cover"},title:{paddingTop:50,color:"#FFF",textAlign:"right",textShadow:"2px 2px #000"}})}));function w(){var e=N();return o.a.createElement("section",{className:e.hero},o.a.createElement(v.a,null,o.a.createElement("div",{className:e.title},o.a.createElement(m.a,{variant:"h2",component:"h1"},"Google Books Search"),o.a.createElement(m.a,{component:"h2",variant:"h5"},"Search for and Save Books of Interest"))))}var _=a(195),B=a(194),T=Object(f.a)((function(e){return Object(d.a)({root:{margin:"40px 0 20px 0"},input:{width:"100%"},form:{margin:"10px, 0, 10px, 0"},buttons:{margin:"10px"}})}));function C(e){var t=T();return o.a.createElement(v.a,{className:t.root},o.a.createElement("form",{className:t.form,onSubmit:e.handleSubmit},o.a.createElement(B.a,{container:!0,spacing:2},o.a.createElement(B.a,{item:!0,xs:12},o.a.createElement(m.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Search Books")),o.a.createElement(B.a,{item:!0,xs:12,sm:10},o.a.createElement(_.a,{className:t.input,id:"standard-search",label:"search",type:"search",name:"search",variant:"outlined",onChange:e.handleInputChange})),o.a.createElement(B.a,{item:!0,xs:12,sm:2},o.a.createElement(u.a,{className:t.buttons,variant:"contained",color:"secondary",type:"submit"},"Search")))))}var I=Object(f.a)((function(e){return Object(d.a)({root:{border:"1px solid #cfe1f7",marginBottom:"20px"},book:{padding:"40px 0 40px 0"},buttons:{margin:"10px"}})}));function y(e){var t=I(),a=e.bookInfo,n=(a.id,a._id),r=a.title,c=a.authors,i=a.description,l=a.image,s=a.link;return console.log(e.bookInfo),o.a.createElement(v.a,{className:t.root},o.a.createElement(B.a,{className:t.book,container:!0,spacing:2},o.a.createElement(B.a,{item:!0,xs:12},o.a.createElement(m.a,{gutterBottom:!0,variant:"h5",component:"h2"},r),o.a.createElement(m.a,{variant:"body2",color:"textPrimary",component:"p",paragraph:!0},c&&c.join(", "))),o.a.createElement(B.a,{item:!0,xs:12,sm:3},o.a.createElement("img",{src:l})),o.a.createElement(B.a,{item:!0,xs:12,sm:9},o.a.createElement(m.a,{variant:"body2",color:"textSecondary",component:"p",paragraph:!0},i),o.a.createElement(u.a,{className:t.buttons,href:s,target:"_blank",variant:"contained",color:"primary"},"View"),"search"===e.page?o.a.createElement(u.a,{className:t.buttons,variant:"contained",color:"default",onClick:function(){return e.saveBook(e.bookInfo)}},"Save"):o.a.createElement(u.a,{className:t.buttons,variant:"contained",color:"secondary",onClick:function(){return e.deleteBook(n)}},"Delete"))))}function R(e){var t=e.bookResults,a=e.saveBook,n=e.deleteBook,r=e.page;return o.a.createElement(v.a,null,t.map((function(e){return o.a.createElement(y,{key:e.id||e._id,bookInfo:e,page:r,saveBook:a,deleteBook:n})})))}var D=a(35),P=a.n(D),W=function(e){return P.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},L=function(){return P.a.get("/api/books")},K=function(e){return P.a.delete("/api/books/"+e)},A=function(e){return P.a.post("/api/books",e)};function U(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("Apple"),i=Object(g.a)(c,2),l=i[0],s=i[1];return o.a.createElement(v.a,null,o.a.createElement(C,{handleInputChange:function(e){s(e.target.value)},handleSubmit:function(e){e.preventDefault(),l.split(" ").join("+"),W(l).then((function(e){console.log(e.data.items),r(e.data.items.map((function(e){return{id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink}})))})).catch((function(e){return console.log(e)}))}}),o.a.createElement(R,{bookResults:a,saveBook:function(e){A(e).then((function(e){E.emit("saveMsg","".concat(e.data.title," has been saved!")),console.log(e)})).catch((function(e){return console.log(e)}))},page:"search"}))}var H=Object(f.a)((function(e){return Object(d.a)({root:{margin:"20px 0 20px 0"},title:{margin:"40px 20px 40px 20px"},buttons:{margin:"10px"}})}));function V(){var e=H(),t=Object(n.useState)([]),a=Object(g.a)(t,2),r=a[0],c=a[1];function i(){L().then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}return Object(n.useEffect)((function(){i()}),[]),o.a.createElement(v.a,{className:e.root},o.a.createElement(m.a,{className:e.title,gutterBottom:!0,variant:"h5",component:"h2"},"Saved Books"),o.a.createElement(R,{bookResults:r,deleteBook:function(e){K(e).then((function(e){return i()})).catch((function(e){return console.log(e)}))},page:"saved"}))}var F=a(10);a(153);var G=function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(x,null),o.a.createElement(w,null),o.a.createElement(F.c,null,o.a.createElement(F.a,{exact:!0,path:"/"},o.a.createElement(U,null)),o.a.createElement(F.a,{exact:!0,path:"/saved"},o.a.createElement(V,null)))))},J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(G,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");J?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):q(e)}))}}()},90:function(e,t,a){e.exports=a.p+"static/media/books-bg.2e6f16af.jpg"},97:function(e,t,a){e.exports=a(154)}},[[97,1,2]]]);
//# sourceMappingURL=main.f190e34a.chunk.js.map
"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[190],{7447:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var o=n(7294),l=n(1883),r=n(682),a=n(4051),c=n(7833),u=n(1945);n(3945);function s(e){console.log(e.location);const t=new URLSearchParams(e.location.search);console.log(t.get("id"));const n="https://sample-blog-express-78qzajv5h-mchayapol.vercel.app/api/blogs",s=o.useRef({}),[p,h]=o.useState([]),[i,m]=o.useState([]),[d,E]=o.useState(!0);o.useState((()=>{fetch(n+"/"+t.get("id")).then((e=>e.json())).then((e=>{console.log(e),s.current.topic.value=e.topic,s.current.content.value=e.content,s.current.author.value=e.author}))}),[]);return o.createElement(r.Z,null,o.createElement("h1",null,"Edit Blog"),o.createElement(l.Link,{to:"/blog"},"Blog Home"),o.createElement(a.Z,null,o.createElement(c.Z,{ref:s},o.createElement(c.Z.Group,{controlId:"topic"},o.createElement(c.Z.Label,null,"Topic"),o.createElement(c.Z.Control,{type:"text",placeholder:"Enter topic"})),o.createElement(c.Z.Group,{controlId:"content"},o.createElement(c.Z.Label,null,"Content"),o.createElement(c.Z.Control,{as:"textarea",rows:3})),o.createElement(c.Z.Group,{controlId:"author"},o.createElement(c.Z.Label,null,"Author"),o.createElement(c.Z.Control,{type:"text",placeholder:"Enter author"})),o.createElement(u.Z,{variant:"dark",onClick:e=>{e.preventDefault();const t={topic:s.current.topic.value,content:s.current.content.value,author:s.current.author.value};console.log(t),fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((e=>{console.log("Created",e),alert("Created")}))}},"Save"))))}}}]);
//# sourceMappingURL=component---src-pages-blog-edit-js-93112154096d859824e9.js.map
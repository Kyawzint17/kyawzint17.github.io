"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[588],{6581:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var a=l(5785),n=l(7294),r=l(682),c=l(2086),i=l(1945),m=l(4051),u=l(1555),s=l(5692);var o=function(e){const{title:t,image:l,description:a,price:r,handleClick:c}=e;return n.createElement(s.Z,{style:{width:"18rem"}},n.createElement(s.Z.Img,{variant:"top",src:l}),n.createElement(s.Z.Body,null,n.createElement(s.Z.Title,null,t," - ",r," Baht"),n.createElement(i.Z,{variant:"primary",onClick:c},"Add to Cart")))},E=l(30);var h=function(){let[e,t]=n.useState([]),[l,s]=n.useState("iced"),[h,Z]=(0,E.Z)("cart",[]);return n.useEffect((()=>{let e=[];fetch("https://api.sampleapis.com/coffee/"+l).then((e=>e.json())).then((l=>{for(let t=0;t<l.length;t++)e.push(n.createElement(o,{key:t,image:l[t].image,title:l[t].title,description:l[t].description,price:59,handleClick:()=>{var e;e=l[t],h.push(e),console.table(h),Z((0,a.Z)(h))}}));t(e)}))}),[l]),n.createElement(r.Z,null,n.createElement("h1",null,"POS"),n.createElement(c.Z,{"aria-label":"Basic example"},n.createElement(i.Z,{variant:"secondary",onClick:()=>{s("hot")}},"Hot"),n.createElement(i.Z,{variant:"secondary",onClick:()=>{s("iced")}},"Iced")),n.createElement(m.Z,null,n.createElement(u.Z,null,n.createElement(m.Z,null,e)),n.createElement(u.Z,{sm:3},n.createElement("h2",null,"Cart "),h.map(((e,t)=>n.createElement(m.Z,{key:t},n.createElement(u.Z,null,e.title),n.createElement(u.Z,null,59)))),n.createElement(m.Z,null,"Total: ",59*h.length," Baht"))))}}}]);
//# sourceMappingURL=component---src-pages-pos-index-js-52efe4cfec42753c9c85.js.map
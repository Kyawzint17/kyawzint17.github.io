"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[191],{9745:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var a=l(5785),n=l(7294),r=l(682),c=l(2086),i=l(1945),s=l(4051),m=l(1555),u=l(3228);var o=function(e){const{title:t,image:l,price:a,handleClick:r}=e;return n.createElement(u.Z,{style:{width:"18rem"}},n.createElement(u.Z.Img,{variant:"top",src:l}),n.createElement(u.Z.Body,null,n.createElement(u.Z.Title,null,t," - ",a," Baht"),n.createElement(i.Z,{variant:"primary",onClick:r},"Add to Cart")))},E=l(30);var h=function(){let[e,t]=n.useState([]),[l,u]=n.useState("reds"),[h,Z]=(0,E.Z)("cart",[]);return"undefined"!=typeof window&&localStorage.clear(),n.useEffect((()=>{let e=[];fetch("https://api.sampleapis.com/wines/"+l).then((e=>e.json())).then((l=>{for(let t=0;t<l.length;t++)e.push(n.createElement(o,{key:t,image:l[t].image,title:l[t].wine,price:59,handleClick:()=>{var e;e=l[t],h.push(e),console.table(h),Z((0,a.Z)(h))}}));t(e)}))}),[l]),n.createElement(r.Z,null,n.createElement("h1",null,"POS"),n.createElement(c.Z,{"aria-label":"Basic example"},n.createElement(i.Z,{variant:"secondary",onClick:()=>{u("reds")}},"Reds"),n.createElement(i.Z,{variant:"secondary",onClick:()=>{u("whites")}},"Whites")),n.createElement(s.Z,null,n.createElement(m.Z,null,n.createElement(s.Z,null,e)),n.createElement(m.Z,{sm:3},n.createElement("h2",null,"Cart "),h.map(((e,t)=>n.createElement(s.Z,{key:t},n.createElement(m.Z,null,e.winery),n.createElement(m.Z,null,59)))),n.createElement(s.Z,null,"Total: ",59*h.length," Baht"))))}}}]);
//# sourceMappingURL=component---src-pages-winepos-js-34552308f9051250dcdc.js.map
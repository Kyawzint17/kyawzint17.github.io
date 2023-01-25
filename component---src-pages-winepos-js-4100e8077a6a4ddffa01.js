/*! For license information please see component---src-pages-winepos-js-4100e8077a6a4ddffa01.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[191],{4184:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var l=n.apply(null,r);l&&e.push(l)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},1368:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Y}});var a=r(5785),n=r(7294),s=r(4184),l=r.n(s),o=r(5893);const i=["xxl","xl","lg","md","sm","xs"],c=n.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"}),{Consumer:u,Provider:f}=c;function d(e,t){const{prefixes:r}=(0,n.useContext)(c);return e||r[t]||t}function m(){const{breakpoints:e}=(0,n.useContext)(c);return e}function p(){const{minBreakpoint:e}=(0,n.useContext)(c);return e}const v=n.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:a,...n},s)=>{const i=d(e,"container"),c="string"==typeof t?`-${t}`:"-fluid";return(0,o.jsx)(r,{ref:s,...n,className:l()(a,t?`${i}${c}`:i)})}));v.displayName="Container",v.defaultProps={fluid:!1};var b=v;const y=n.forwardRef((({bsPrefix:e,size:t,vertical:r,className:a,as:n="div",...s},i)=>{const c=d(e,"btn-group");let u=c;return r&&(u=`${c}-vertical`),(0,o.jsx)(n,{...s,ref:i,className:l()(a,u,t&&`${c}-${t}`)})}));y.displayName="ButtonGroup",y.defaultProps={vertical:!1,role:"group"};var g=y;const h=["as","disabled"];function x({tagName:e,disabled:t,href:r,target:a,rel:n,role:s,onClick:l,tabIndex:o=0,type:i}){e||(e=null!=r||null!=a||null!=n?"a":"button");const c={tagName:e};if("button"===e)return[{type:i||"button",disabled:t},c];const u=a=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(r))&&a.preventDefault(),t?a.stopPropagation():null==l||l(a)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:o,href:r,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?n:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const N=n.forwardRef(((e,t)=>{let{as:r,disabled:a}=e,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,h);const[s,{tagName:l}]=x(Object.assign({tagName:r,disabled:a},n));return(0,o.jsx)(l,Object.assign({},n,s,{ref:t}))}));N.displayName="Button";const C=n.forwardRef((({as:e,bsPrefix:t,variant:r,size:a,active:n,className:s,...i},c)=>{const u=d(t,"btn"),[f,{tagName:m}]=x({tagName:e,...i}),p=m;return(0,o.jsx)(p,{...f,...i,ref:c,className:l()(s,u,n&&"active",r&&`${u}-${r}`,a&&`${u}-${a}`,i.href&&i.disabled&&"disabled")})}));C.displayName="Button",C.defaultProps={variant:"primary",active:!1,disabled:!1};var $=C;const w=n.forwardRef((({bsPrefix:e,className:t,as:r="div",...a},n)=>{const s=d(e,"row"),i=m(),c=p(),u=`${s}-cols`,f=[];return i.forEach((e=>{const t=a[e];let r;delete a[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const n=e!==c?`-${e}`:"";null!=r&&f.push(`${u}${n}-${r}`)})),(0,o.jsx)(r,{ref:n,...a,className:l()(t,s,...f)})}));w.displayName="Row";var E=w;const k=n.forwardRef(((e,t)=>{const[{className:r,...a},{as:n="div",bsPrefix:s,spans:i}]=function({as:e,bsPrefix:t,className:r,...a}){t=d(t,"col");const n=m(),s=p(),o=[],i=[];return n.forEach((e=>{const r=a[e];let n,l,c;delete a[e],"object"==typeof r&&null!=r?({span:n,offset:l,order:c}=r):n=r;const u=e!==s?`-${e}`:"";n&&o.push(!0===n?`${t}${u}`:`${t}${u}-${n}`),null!=c&&i.push(`order${u}-${c}`),null!=l&&i.push(`offset${u}-${l}`)})),[{...a,className:l()(r,...o,...i)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,o.jsx)(n,{...a,ref:t,className:l()(r,!i.length&&s)})}));k.displayName="Col";var j=k,P=/-(.)/g;const S=e=>{return e[0].toUpperCase()+(t=e,t.replace(P,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function O(e,{displayName:t=S(e),Component:r,defaultProps:a}={}){const s=n.forwardRef((({className:t,bsPrefix:a,as:n=r||"div",...s},i)=>{const c=d(a,e);return(0,o.jsx)(n,{ref:i,className:l()(t,c),...s})}));return s.defaultProps=a,s.displayName=t,s}var R=e=>n.forwardRef(((t,r)=>(0,o.jsx)("div",{...t,ref:r,className:l()(t.className,e)})));const B=n.forwardRef((({bsPrefix:e,className:t,variant:r,as:a="img",...n},s)=>{const i=d(e,"card-img");return(0,o.jsx)(a,{ref:s,className:l()(r?`${i}-${r}`:i,t),...n})}));B.displayName="CardImg";var I=B;const z=n.createContext(null);z.displayName="CardHeaderContext";var J=z;const H=n.forwardRef((({bsPrefix:e,className:t,as:r="div",...a},s)=>{const i=d(e,"card-header"),c=(0,n.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return(0,o.jsx)(J.Provider,{value:c,children:(0,o.jsx)(r,{ref:s,...a,className:l()(t,i)})})}));H.displayName="CardHeader";var T=H;const _=R("h5"),A=R("h6"),D=O("card-body"),L=O("card-title",{Component:_}),U=O("card-subtitle",{Component:A}),F=O("card-link",{Component:"a"}),G=O("card-text",{Component:"p"}),K=O("card-footer"),M=O("card-img-overlay"),W=n.forwardRef((({bsPrefix:e,className:t,bg:r,text:a,border:n,body:s,children:i,as:c="div",...u},f)=>{const m=d(e,"card");return(0,o.jsx)(c,{ref:f,...u,className:l()(t,m,r&&`bg-${r}`,a&&`text-${a}`,n&&`border-${n}`),children:s?(0,o.jsx)(D,{children:i}):i})}));W.displayName="Card",W.defaultProps={body:!1};var Z=Object.assign(W,{Img:I,Title:L,Subtitle:U,Body:D,Link:F,Text:G,Header:T,Footer:K,ImgOverlay:M});var q=function(e){const{title:t,image:r,price:a,handleClick:s}=e;return n.createElement(Z,{style:{width:"18rem"}},n.createElement(Z.Img,{variant:"top",src:r}),n.createElement(Z.Body,null,n.createElement(Z.Title,null,t," - ",a," Baht"),n.createElement($,{variant:"primary",onClick:s},"Add to Cart")))},Q=function(){};var V="undefined"!=typeof window,X=function(e,t,r){if(!V)return[t,Q,Q];if(!e)throw new Error("useLocalStorage key may not be falsy");var a=r?r.raw?function(e){return e}:r.deserializer:JSON.parse,s=(0,n.useRef)((function(e){try{var n=r?r.raw?String:r.serializer:JSON.stringify,s=localStorage.getItem(e);return null!==s?a(s):(t&&localStorage.setItem(e,n(t)),t)}catch(l){return t}})),l=(0,n.useState)((function(){return s.current(e)})),o=l[0],i=l[1];(0,n.useLayoutEffect)((function(){return i(s.current(e))}),[e]);var c=(0,n.useCallback)((function(t){try{var n="function"==typeof t?t(o):t;if(void 0===n)return;var s=void 0;s=r?r.raw?"string"==typeof n?n:JSON.stringify(n):r.serializer?r.serializer(n):JSON.stringify(n):JSON.stringify(n),localStorage.setItem(e,s),i(a(s))}catch(l){}}),[e,i]),u=(0,n.useCallback)((function(){try{localStorage.removeItem(e),i(void 0)}catch(l){}}),[e,i]);return[o,c,u]};var Y=function(){let[e,t]=n.useState([]),[r,s]=n.useState("reds"),[l,o]=X("cart",[]);return localStorage.clear(),n.useEffect((()=>{let e=[];fetch("https://api.sampleapis.com/wines/"+r).then((e=>e.json())).then((r=>{for(let t=0;t<r.length;t++)e.push(n.createElement(q,{key:t,image:r[t].image,title:r[t].wine,price:250,handleClick:()=>{var e;e=r[t],l.push(e),console.table(l),o((0,a.Z)(l))}}));t(e)}))}),[r]),n.createElement(b,null,n.createElement("h1",null,"POS"),n.createElement(g,{"aria-label":"Basic example"},n.createElement($,{variant:"secondary",onClick:()=>{s("reds")}},"Reds"),n.createElement($,{variant:"secondary",onClick:()=>{s("whites")}},"Whites")),n.createElement(E,null,n.createElement(j,null,n.createElement(E,null,e)),n.createElement(j,{sm:3},n.createElement("h2",null,"Cart "),l.map(((e,t)=>n.createElement(E,{key:t},n.createElement(j,null,e.winery),n.createElement(j,null,250)))),n.createElement(E,null,"Total: ",250*l.length," Baht"))))}}}]);
//# sourceMappingURL=component---src-pages-winepos-js-4100e8077a6a4ddffa01.js.map
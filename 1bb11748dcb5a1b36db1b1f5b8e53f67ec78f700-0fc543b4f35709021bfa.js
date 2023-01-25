/*! For license information please see 1bb11748dcb5a1b36db1b1f5b8e53f67ec78f700-0fc543b4f35709021bfa.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[337],{4184:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var o=n.apply(null,r);o&&e.push(o)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},1945:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var a=r(4184),n=r.n(a),s=r(7294),o=r(5893);const i=["as","disabled"];function c({tagName:e,disabled:t,href:r,target:a,rel:n,role:s,onClick:o,tabIndex:i=0,type:c}){e||(e=null!=r||null!=a||null!=n?"a":"button");const u={tagName:e};if("button"===e)return[{type:c||"button",disabled:t},u];const l=a=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(r))&&a.preventDefault(),t?a.stopPropagation():null==o||o(a)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:i,href:r,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?n:void 0,onClick:l,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),l(e))}},u]}const u=s.forwardRef(((e,t)=>{let{as:r,disabled:a}=e,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,i);const[s,{tagName:u}]=c(Object.assign({tagName:r,disabled:a},n));return(0,o.jsx)(u,Object.assign({},n,s,{ref:t}))}));u.displayName="Button";var l=r(6792);const f=s.forwardRef((({as:e,bsPrefix:t,variant:r,size:a,active:s,className:i,...u},f)=>{const d=(0,l.vE)(t,"btn"),[p,{tagName:v}]=c({tagName:e,...u}),m=v;return(0,o.jsx)(m,{...p,...u,ref:f,className:n()(i,d,s&&"active",r&&`${d}-${r}`,a&&`${d}-${a}`,u.href&&u.disabled&&"disabled")})}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1};var d=f},2086:function(e,t,r){"use strict";var a=r(4184),n=r.n(a),s=r(7294),o=r(6792),i=r(5893);const c=s.forwardRef((({bsPrefix:e,size:t,vertical:r,className:a,as:s="div",...c},u)=>{const l=(0,o.vE)(e,"btn-group");let f=l;return r&&(f=`${l}-vertical`),(0,i.jsx)(s,{...c,ref:u,className:n()(a,f,t&&`${l}-${t}`)})}));c.displayName="ButtonGroup",c.defaultProps={vertical:!1,role:"group"},t.Z=c},3228:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var a=r(4184),n=r.n(a),s=r(7294),o=r(6792),i=r(4680),c=r(5893),u=e=>s.forwardRef(((t,r)=>(0,c.jsx)("div",{...t,ref:r,className:n()(t.className,e)})));const l=s.forwardRef((({bsPrefix:e,className:t,variant:r,as:a="img",...s},i)=>{const u=(0,o.vE)(e,"card-img");return(0,c.jsx)(a,{ref:i,className:n()(r?`${u}-${r}`:u,t),...s})}));l.displayName="CardImg";var f=l;const d=s.createContext(null);d.displayName="CardHeaderContext";var p=d;const v=s.forwardRef((({bsPrefix:e,className:t,as:r="div",...a},i)=>{const u=(0,o.vE)(e,"card-header"),l=(0,s.useMemo)((()=>({cardHeaderBsPrefix:u})),[u]);return(0,c.jsx)(p.Provider,{value:l,children:(0,c.jsx)(r,{ref:i,...a,className:n()(t,u)})})}));v.displayName="CardHeader";var m=v;const b=u("h5"),y=u("h6"),g=(0,i.Z)("card-body"),x=(0,i.Z)("card-title",{Component:b}),N=(0,i.Z)("card-subtitle",{Component:y}),h=(0,i.Z)("card-link",{Component:"a"}),$=(0,i.Z)("card-text",{Component:"p"}),C=(0,i.Z)("card-footer"),w=(0,i.Z)("card-img-overlay"),j=s.forwardRef((({bsPrefix:e,className:t,bg:r,text:a,border:s,body:i,children:u,as:l="div",...f},d)=>{const p=(0,o.vE)(e,"card");return(0,c.jsx)(l,{ref:d,...f,className:n()(t,p,r&&`bg-${r}`,a&&`text-${a}`,s&&`border-${s}`),children:i?(0,c.jsx)(g,{children:u}):u})}));j.displayName="Card",j.defaultProps={body:!1};var P=Object.assign(j,{Img:f,Title:x,Subtitle:N,Body:g,Link:h,Text:$,Header:m,Footer:C,ImgOverlay:w})},1555:function(e,t,r){"use strict";var a=r(4184),n=r.n(a),s=r(7294),o=r(6792),i=r(5893);const c=s.forwardRef(((e,t)=>{const[{className:r,...a},{as:s="div",bsPrefix:c,spans:u}]=function({as:e,bsPrefix:t,className:r,...a}){t=(0,o.vE)(t,"col");const s=(0,o.pi)(),i=(0,o.zG)(),c=[],u=[];return s.forEach((e=>{const r=a[e];let n,s,o;delete a[e],"object"==typeof r&&null!=r?({span:n,offset:s,order:o}=r):n=r;const l=e!==i?`-${e}`:"";n&&c.push(!0===n?`${t}${l}`:`${t}${l}-${n}`),null!=o&&u.push(`order${l}-${o}`),null!=s&&u.push(`offset${l}-${s}`)})),[{...a,className:n()(r,...c,...u)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,i.jsx)(s,{...a,ref:t,className:n()(r,!u.length&&c)})}));c.displayName="Col",t.Z=c},682:function(e,t,r){"use strict";var a=r(4184),n=r.n(a),s=r(7294),o=r(6792),i=r(5893);const c=s.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:a,...s},c)=>{const u=(0,o.vE)(e,"container"),l="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(r,{ref:c,...s,className:n()(a,t?`${u}${l}`:u)})}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},4051:function(e,t,r){"use strict";var a=r(4184),n=r.n(a),s=r(7294),o=r(6792),i=r(5893);const c=s.forwardRef((({bsPrefix:e,className:t,as:r="div",...a},s)=>{const c=(0,o.vE)(e,"row"),u=(0,o.pi)(),l=(0,o.zG)(),f=`${c}-cols`,d=[];return u.forEach((e=>{const t=a[e];let r;delete a[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const n=e!==l?`-${e}`:"";null!=r&&d.push(`${f}${n}-${r}`)})),(0,i.jsx)(r,{ref:s,...a,className:n()(t,c,...d)})}));c.displayName="Row",t.Z=c},6792:function(e,t,r){"use strict";r.d(t,{pi:function(){return u},vE:function(){return c},zG:function(){return l}});var a=r(7294);r(5893);const n=["xxl","xl","lg","md","sm","xs"],s=a.createContext({prefixes:{},breakpoints:n,minBreakpoint:"xs"}),{Consumer:o,Provider:i}=s;function c(e,t){const{prefixes:r}=(0,a.useContext)(s);return e||r[t]||t}function u(){const{breakpoints:e}=(0,a.useContext)(s);return e}function l(){const{minBreakpoint:e}=(0,a.useContext)(s);return e}},4680:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var a=r(4184),n=r.n(a),s=/-(.)/g;var o=r(7294),i=r(6792),c=r(5893);const u=e=>{return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function l(e,{displayName:t=u(e),Component:r,defaultProps:a}={}){const s=o.forwardRef((({className:t,bsPrefix:a,as:s=r||"div",...o},u)=>{const l=(0,i.vE)(a,e);return(0,c.jsx)(s,{ref:u,className:n()(t,l),...o})}));return s.defaultProps=a,s.displayName=t,s}},30:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(7294),n=function(){};var s="undefined"!=typeof window,o=function(e,t,r){if(!s)return[t,n,n];if(!e)throw new Error("useLocalStorage key may not be falsy");var o=r?r.raw?function(e){return e}:r.deserializer:JSON.parse,i=(0,a.useRef)((function(e){try{var a=r?r.raw?String:r.serializer:JSON.stringify,n=localStorage.getItem(e);return null!==n?o(n):(t&&localStorage.setItem(e,a(t)),t)}catch(c){return t}})),c=(0,a.useState)((function(){return i.current(e)})),u=c[0],l=c[1];(0,a.useLayoutEffect)((function(){return l(i.current(e))}),[e]);var f=(0,a.useCallback)((function(t){try{var a="function"==typeof t?t(u):t;if(void 0===a)return;var n=void 0;n=r?r.raw?"string"==typeof a?a:JSON.stringify(a):r.serializer?r.serializer(a):JSON.stringify(a):JSON.stringify(a),localStorage.setItem(e,n),l(o(n))}catch(c){}}),[e,l]),d=(0,a.useCallback)((function(){try{localStorage.removeItem(e),l(void 0)}catch(c){}}),[e,l]);return[u,f,d]}}}]);
//# sourceMappingURL=1bb11748dcb5a1b36db1b1f5b8e53f67ec78f700-0fc543b4f35709021bfa.js.map
var w=Object.defineProperty,k=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var h=(r,i,s)=>i in r?w(r,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[i]=s,l=(r,i)=>{for(var s in i||(i={}))S.call(i,s)&&h(r,s,i[s]);if(p)for(var s of p(i))M.call(i,s)&&h(r,s,i[s]);return r},m=(r,i)=>k(r,x(i));import{j as u,r as g,R,a as U}from"./vendor.7333c498.js";const E=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(a){if(a.ep)return;a.ep=!0;const c=s(a);fetch(a.href,c)}};E();const t=u.exports.jsx,e=u.exports.jsxs,b="martinezmarcus240@gmail.com",f="github.com/mlmar",y="linkedin.com/in/martinez-marcus",P=()=>e("header",{className:"about",children:[t("div",{className:"img-wrapper logo",children:t("img",{src:"/images/m.ico"})}),e("p",{children:[t(A,{children:"Hi I'm Marcus"}),"."]}),e("section",{className:"info",children:[e("a",{href:"mailto:"+b,children:[" ",e("div",{className:"img-wrapper",children:[" ",t("img",{src:"/images/email.png"})," "]})," ",e("span",{children:[" ",b," "]})," "]}),e("a",{href:"https://"+f,children:[" ",e("div",{className:"img-wrapper",children:[" ",t("img",{src:"/images/github.png"})," "]})," ",e("span",{children:[" ",f," "]})," "]}),e("a",{href:"https://"+y,children:[" ",e("div",{className:"img-wrapper",children:[" ",t("img",{src:"/images/linkedin.png"})," "]}),"  ",e("span",{children:[" ",y," "]})]})]})]}),A=({children:r,href:i})=>i?t("a",{className:"bold",href:i,children:r}):t("span",{className:"bold",children:r}),B=[{title:"tonedeaf",description:"Sign in with Spotify to view your top artists/tracks and get recommendations",uri:"https://tonedeaf.vercel.app",imgUri:"https://user-images.githubusercontent.com/63682846/146712273-12df6a1c-8d78-4e0e-b1d8-045c0b587425.png",stack:["ReactJs","Node.JS"]},{title:"Avail",description:"Create a shared calendar where members can mark their availability",github:"https://github.com/mlmar/avail",uri:"https://avail.vercel.app",imgUri:"https://user-images.githubusercontent.com/63682846/146715025-4a9a8724-bdf5-4435-a68c-7f508b5dbad8.png",stack:["React","Node.js","MongoDB"]},{title:"Xordle",description:"Play Wordle against friends on a timer",uri:"https://www.xordle.app",imgUri:"https://user-images.githubusercontent.com/63682846/166865439-e28574ea-1ff7-466e-8021-d3942d6b9bf3.png",stack:["React","Node.js","WebSocket"]}],D=[{title:"multiply",github:"https://github.com/mlmar/multiply",uri:"https://mlmar.github.io/multiply",imgUri:"https://github.com/mlmar/multiply/assets/63682846/be69141d-db3b-4f3f-b6d5-18c7be50a74a",stack:["jQuery","Node.js","MongoDB"]},{title:"stop",github:"https://github.com/mlmar/stop",uri:"https://mlmar.github.io/stop",imgUri:"https://github.com/mlmar/stop/assets/63682846/cab4bdae-5520-4a87-b5f1-d5af207d5ece",stack:["jQuery"]}];var N={primary:B,secondary:D};const L=()=>e("section",{className:"projects",children:[t("h2",{children:" Some of my projects "}),N.primary.map((r,i)=>g.exports.createElement(v,m(l({},r),{key:i}))),t("h2",{children:" Mini Games "}),t("div",{className:"secondary-projects",children:N.secondary.map((r,i)=>g.exports.createElement(v,m(l({},r),{key:i})))}),e("a",{className:"repo",href:"https://github.com/mlmar/mlmar.github.io",children:[t("div",{className:"img-wrapper",children:t("img",{src:"/images/github.png",alt:"Github"})}),"View the repo for this website"]})]}),v=r=>{const{title:i,description:s,uri:n,github:a,imgUri:c,imgPath:o,stack:j}=r;return e("article",{className:"project",children:[e("a",{className:"img-wrapper",href:n,children:[" ",t("img",{src:c||o,alt:n})," "]}),e("div",{className:"description",children:[e("h3",{children:[i,a&&e("a",{className:"git img-wrapper",href:a,children:[" ",t("img",{src:"/images/github.png",alt:"Github"})," "]})]}),e("p",{children:[" ",s," "]}),t("div",{children:j.map(d=>e("label",{className:"stack gray",children:[" ",d," "]},d))})]})]})},O=()=>e("section",{className:"education",children:[t("h2",{children:" Education "}),e("article",{children:[e("h3",{children:[" University of California, San Diego ",t("span",{className:"no-decor",children:" (2018-2022) "})," "]}),e("label",{children:[" Cognitive Science B.S ",t("span",{className:"gray",children:" with a specialization in Design and Interaction "})," "]}),t("label",{children:" Computer Science Minor "})]})]}),C=()=>e("main",{className:"app",children:[t(P,{}),t(O,{}),t(L,{})]});R.render(t(U.StrictMode,{children:t(C,{})}),document.getElementById("root"));
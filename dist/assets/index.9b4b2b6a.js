var w=Object.defineProperty,y=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var h=(a,i,s)=>i in a?w(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s,p=(a,i)=>{for(var s in i||(i={}))j.call(i,s)&&h(a,s,i[s]);if(m)for(var s of m(i))k.call(i,s)&&h(a,s,i[s]);return a},u=(a,i)=>y(a,S(i));import{j as g,r as x,R,a as I}from"./vendor.7333c498.js";const J=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};J();const r=g.exports.jsx,e=g.exports.jsxs,f="martinezmarcus240@gmail.com",b="github.com/mlmar",N="linkedin.com/in/martinez-marcus",M=()=>e("header",{className:"about",children:[r("div",{className:"img-wrapper logo",children:r("img",{src:"/images/m.ico"})}),e("p",{children:[r(l,{children:"Hi I'm Marcus"}),". I graduated from ",r(l,{href:"https://ucsd.edu/",children:"UCSD"})," and I'm currently a software engineer at ",r(l,{href:"https://www.home.neustar/",children:"Neustar"}),"."]}),e("section",{className:"info",children:[e("a",{href:"mailto:"+f,children:[" ",e("div",{className:"img-wrapper",children:[" ",r("img",{src:"/images/email.png"})," "]})," ",e("span",{children:[" ",f," "]})," "]}),e("a",{href:"https://"+b,children:[" ",e("div",{className:"img-wrapper",children:[" ",r("img",{src:"/images/github.png"})," "]})," ",e("span",{children:[" ",b," "]})," "]}),e("a",{href:"https://"+N,children:[" ",e("div",{className:"img-wrapper",children:[" ",r("img",{src:"/images/linkedin.png"})," "]}),"  ",e("span",{children:[" ",N," "]})]})]})]}),l=({children:a,href:i})=>i?r("a",{className:"bold",href:i,children:a}):r("span",{className:"bold",children:a});var P=[{title:"Tonedeaf",description:"Sign in with Spotify to view your top artists/tracks and get recommendations",uri:"https://tonedeaf.vercel.app",imgUri:"https://user-images.githubusercontent.com/63682846/146712273-12df6a1c-8d78-4e0e-b1d8-045c0b587425.png",stack:["ReactJs","Node.JS"]},{title:"Avail",description:"Create a shared calendar where members can mark their availability",github:"https://github.com/mlmar/avail",uri:"https://avail.vercel.app",imgUri:"https://user-images.githubusercontent.com/63682846/146715025-4a9a8724-bdf5-4435-a68c-7f508b5dbad8.png",stack:["ReactJs","Node.JS","MongoDB"]},{title:"Xordle",description:"Play Wordle with friends on a timer",uri:"https://www.xordle.app",imgUri:"https://user-images.githubusercontent.com/63682846/166865439-e28574ea-1ff7-466e-8021-d3942d6b9bf3.png",stack:["ReactJs","Node.JS","WebSocket"]}];const U=()=>e("section",{className:"projects",children:[r("h2",{children:" Some of my projects "}),P.map((a,i)=>x.exports.createElement(A,u(p({},a),{key:i}))),e("a",{className:"repo",href:"https://github.com/mlmar/mlmar.github.io",children:[r("div",{className:"img-wrapper",children:r("img",{src:"/images/github.png",alt:"Github"})}),"View the repo for this website"]})]}),A=a=>{const{title:i,description:s,uri:c,github:t,imgUri:n,imgPath:o,stack:v}=a;return e("article",{className:"project",children:[e("a",{className:"img-wrapper",href:c,children:[" ",r("img",{src:n||o,alt:c})," "]}),e("div",{className:"description",children:[e("h3",{children:[i,t&&e("a",{className:"git img-wrapper",href:t,children:[" ",r("img",{src:"/images/github.png",alt:"Github"})," "]})]}),e("p",{children:[" ",s," "]}),r("div",{children:v.map(d=>e("label",{className:"stack gray",children:[" ",d," "]},d))})]})]})},C=()=>e("section",{className:"education",children:[r("h2",{children:" Education "}),e("article",{children:[e("h3",{children:[" University of California, San Diego ",r("span",{className:"no-decor",children:" (2018-2022) "})," "]}),e("label",{children:[" Cognitive Science B.S ",r("span",{className:"gray",children:" with a specialization in Design and Interaction "})," "]}),r("label",{children:" Computer Science Minor "})]})]}),D=()=>e("main",{className:"app",children:[r(M,{}),r(U,{}),r(C,{})]});R.render(r(I.StrictMode,{children:r(D,{})}),document.getElementById("root"));
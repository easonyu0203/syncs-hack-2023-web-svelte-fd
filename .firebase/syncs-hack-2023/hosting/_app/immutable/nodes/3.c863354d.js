import{s as P,v as _,r as h,g as y,c as j,h as S,i as N,d as R,k,A as v}from"../chunks/scheduler.15758ddb.js";import{S as q,i as A,d as g,v as B,j as C,k as E,e as f,g as m,a as w,m as M,n as O,b as U,t as G,l as T}from"../chunks/index.3f5eacb3.js";import{d as $,f as b}from"../chunks/firebase.c906b4c9.js";import{p as u}from"../chunks/stores.e50b9230.js";import{S as D}from"../chunks/SunnyTitle.a588e81a.js";const I="src/routes/adding/[imgDocId]/+page.svelte";function p(r){let e,a;const c={c:function(){e=y("img"),this.h()},l:function(t){e=S(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){var t;v(e.src,a=(t=r[0])==null?void 0:t.imgUrl)||m(e,"src",a),m(e,"alt","image_snap"),m(e,"class","absolute top-0 right-0 mt-10 mr-6 w-48"),k(e,I,15,2,442)},m:function(t,l){w(t,e,l)},p:function(t,l){var i;l&1&&!v(e.src,a=(i=t[0])==null?void 0:i.imgUrl)&&m(e,"src",a)},d:function(t){t&&f(e)}};return g("SvelteRegisterBlock",{block:c,id:p.name,type:"if",source:"(13:1) {#if $imgDoc}",ctx:r}),c}function d(r){let e,a,c,s;a=new D({props:{actionName:"Snap"},$$inline:!0});let t=r[0]&&p(r);const l={c:function(){e=y("main"),C(a.$$.fragment),c=j(),t&&t.c(),this.h()},l:function(o){e=S(o,"MAIN",{class:!0});var n=N(e);E(a.$$.fragment,n),c=R(n),t&&t.l(n),n.forEach(f),this.h()},h:function(){m(e,"class","container h-screen relative bg-surface-900 relative flex flex-col justify-around items-center"),k(e,I,9,0,278)},m:function(o,n){w(o,e,n),M(a,e,null),O(e,c),t&&t.m(e,null),s=!0},p:function(o,[n]){o[0]?t?t.p(o,n):(t=p(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:function(o){s||(U(a.$$.fragment,o),s=!0)},o:function(o){G(a.$$.fragment,o),s=!1},d:function(o){o&&f(e),T(a),t&&t.d()}};return g("SvelteRegisterBlock",{block:l,id:d.name,type:"component",source:"",ctx:r}),l}function x(r,e,a){let c,s;_(u,"page"),h(r,u,n=>a(2,c=n));let{$$slots:t={},$$scope:l}=e;B("Page",t,[]);const i=$(b,`images/${c.params.imgDocId}`);_(i,"imgDoc"),h(r,i,n=>a(0,s=n));const o=[];return Object.keys(e).forEach(n=>{!~o.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<Page> was created with unknown prop '${n}'`)}),r.$capture_state=()=>({firestore:b,page:u,docStore:$,SunnyTitle:D,imgDoc:i,$page:c,$imgDoc:s}),[s,i]}class L extends q{constructor(e){super(e),A(this,e,x,d,P,{}),g("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:d.name})}}export{L as component};

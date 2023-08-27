import{s as _t,x as st,y as at,g as a,c as C,h as o,i as k,d as I,K as O,k as l,P as ht,n as xt,F as bt}from"../chunks/scheduler.078b4462.js";import{S as yt,i as $t,d as gt,v as Ct,j as ot,e as S,k as lt,g as n,a as It,u as t,m as rt,r as it,b as ct,t as ut,l as dt}from"../chunks/index.0492f3ae.js";import{I as J}from"../chunks/Icon.4ca51455.js";import{u as ft,a as mt,g as St,m as pt,h as vt,i as K}from"../chunks/firebase.feacc806.js";import{g as W}from"../chunks/navigation.f5c2c7f9.js";const r="src/routes/login/+page.svelte";function Q(v){let e,_,m,s,p,G,x,g,T="Snap or Record to Create Organized Notes Instantly",i,c,h,b,X="Login",R,y,Y="Snap Note",H,u,w,L,E,Z="Sign in with Google",M,d,N,U,P,tt="Sign in Anonymously",j,F,et;w=new J({props:{class:"text-lg",icon:"devicon:google"},$$inline:!0}),N=new J({props:{class:"text-xl",icon:"mdi:anonymous"},$$inline:!0});const nt={c:function(){e=a("main"),_=a("div"),m=C(),s=a("div"),p=a("img"),x=C(),g=a("p"),g.textContent=T,i=C(),c=a("div"),h=a("div"),b=a("h1"),b.textContent=X,R=C(),y=a("h2"),y.textContent=Y,H=C(),u=a("button"),ot(w.$$.fragment),L=C(),E=a("span"),E.textContent=Z,M=C(),d=a("button"),ot(N.$$.fragment),U=C(),P=a("span"),P.textContent=tt,this.h()},l:function(f){e=o(f,"MAIN",{class:!0});var $=k(e);_=o($,"DIV",{class:!0}),k(_).forEach(S),m=I($),s=o($,"DIV",{class:!0});var V=k(s);p=o(V,"IMG",{src:!0,alt:!0,class:!0}),x=I(V),g=o(V,"P",{class:!0,"data-svelte-h":!0}),O(g)!=="svelte-osvbka"&&(g.textContent=T),V.forEach(S),i=I($),c=o($,"DIV",{class:!0});var D=k(c);h=o(D,"DIV",{class:!0});var q=k(h);b=o(q,"H1",{class:!0,"data-svelte-h":!0}),O(b)!=="svelte-b70pb2"&&(b.textContent=X),R=I(q),y=o(q,"H2",{class:!0,"data-svelte-h":!0}),O(y)!=="svelte-a9s7bf"&&(y.textContent=Y),q.forEach(S),H=I(D),u=o(D,"BUTTON",{type:!0,class:!0});var z=k(u);lt(w.$$.fragment,z),L=I(z),E=o(z,"SPAN",{"data-svelte-h":!0}),O(E)!=="svelte-re30jn"&&(E.textContent=Z),z.forEach(S),M=I(D),d=o(D,"BUTTON",{type:!0,class:!0});var B=k(d);lt(N.$$.fragment,B),U=I(B),P=o(B,"SPAN",{"data-svelte-h":!0}),O(P)!=="svelte-16nliy0"&&(P.textContent=tt),B.forEach(S),D.forEach(S),$.forEach(S),this.h()},h:function(){n(_,"class","bg-surface-900 absolute bottom-0 h-[50%] -z-10 w-full rounded-tr-[7em]"),l(_,r,25,1,554),ht(p.src,G="/logo.png")||n(p,"src",G),n(p,"alt","logo"),n(p,"class","aspect-square max-h-48"),l(p,r,27,2,686),n(g,"class","w-64 text-center text-lg font-semibold"),l(g,r,28,2,755),n(s,"class","flex flex-col items-center"),l(s,r,26,1,643),n(b,"class","h1 text-5xl"),l(b,r,34,3,982),n(y,"class","h2"),l(y,r,35,3,1020),n(h,"class","flex flex-col items-center space-y-4"),l(h,r,33,2,928),l(E,r,43,3,1225),n(u,"type","button"),n(u,"class","btn variant-filled rounded-lg font-bold"),l(u,r,37,2,1061),l(P,r,51,3,1446),n(d,"type","button"),n(d,"class","btn variant-filled rounded-lg font-bold"),l(d,r,45,2,1272),n(c,"class","flex flex-col space-y-12 min-w-48"),l(c,r,32,1,877),n(e,"class","container h-screen bg-tertiary-800 flex flex-col justify-around items-center relative z-0"),l(e,r,22,0,445)},m:function(f,$){It(f,e,$),t(e,_),t(e,m),t(e,s),t(s,p),t(s,x),t(s,g),t(e,i),t(e,c),t(c,h),t(h,b),t(h,R),t(h,y),t(c,H),t(c,u),rt(w,u,null),t(u,L),t(u,E),t(c,M),t(c,d),rt(N,d,null),t(d,U),t(d,P),j=!0,F||(et=[it(u,"click",vt,!1,!1,!1,!1),it(d,"click",v[3],!1,!1,!1,!1)],F=!0)},p:xt,i:function(f){j||(ct(w.$$.fragment,f),ct(N.$$.fragment,f),j=!0)},o:function(f){ut(w.$$.fragment,f),ut(N.$$.fragment,f),j=!1},d:function(f){f&&S(e),dt(w),dt(N),F=!1,bt(et)}};return gt("SvelteRegisterBlock",{block:nt,id:Q.name,type:"component",source:"",ctx:v}),nt}function wt(v,e,_){let m,s;st(K,"userData"),at(v,K,i=>_(1,m=i));let{$$slots:p={},$$scope:G}=e;Ct("Page",p,[]);const x=ft(mt);st(x,"user"),at(v,x,i=>_(2,s=i));const g=[];Object.keys(e).forEach(i=>{!~g.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<Page> was created with unknown prop '${i}'`)});const T=()=>pt();return v.$capture_state=()=>({Icon:J,signInAnonymously:St,auth:mt,mySignInAnonymously:pt,signInWithGoogle:vt,userData:K,userStore:ft,goto:W,user:x,$userData:m,$user:s}),v.$$.update=()=>{v.$$.dirty&6&&s&&(m!=null&&m.firstTimeLogin?W("/onboarding"):W("/onboarding"))},[x,m,s,T]}class Dt extends yt{constructor(e){super(e),$t(this,e,wt,Q,_t,{}),gt("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:Q.name})}}export{Dt as component};

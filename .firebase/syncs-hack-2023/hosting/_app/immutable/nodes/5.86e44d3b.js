import{s as ye,L as Me,a as ge,C as Q,D as ve,n as Ve,g as R,G as X,h as E,i as j,I as Y,k,j as W,M as be,u as Ne,p as Fe,q as Ge,c as D,d as z,x as J,A as _e,f as Te,y as He,w as Pe}from"../chunks/scheduler.15758ddb.js";import{S as Re,i as Ee,d as G,v as Ce,e as y,g as r,a as U,n as b,b as I,h as xe,t as q,c as Be,j as Z,k as $,m as ee,l as te,o as Oe}from"../chunks/index.3f5eacb3.js";import{g as pe}from"../chunks/navigation.7f64dde7.js";import{H as Se}from"../chunks/HomeButton.b45f7d26.js";import{S as je}from"../chunks/SunnyTitle.a588e81a.js";import{c as ke}from"../chunks/firebase.c906b4c9.js";import{F as Ie}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.75ea4180.js";const L="node_modules/@skeletonlabs/skeleton/dist/components/ProgressRadial/ProgressRadial.svelte";function ne(n){let e,t,a;const l=n[13].default,s=Ve(l,n,n[12],null),h={c:function(){e=X("text"),s&&s.c(),this.h()},l:function(c){e=Y(c,"text",{x:!0,y:!0,"text-anchor":!0,"dominant-baseline":!0,"font-weight":!0,"font-size":!0,class:!0});var o=j(e);s&&s.l(o),o.forEach(y),this.h()},h:function(){r(e,"x","50%"),r(e,"y","50%"),r(e,"text-anchor","middle"),r(e,"dominant-baseline","middle"),r(e,"font-weight","bold"),r(e,"font-size",n[2]),r(e,"class",t="progress-radial-text "+n[5]),k(e,L,58,3,1852)},m:function(c,o){U(c,e,o),s&&s.m(e,null),a=!0},p:function(c,o){s&&s.p&&(!a||o&4096)&&Ne(s,l,c,c[12],a?Ge(l,c[12],o,null):Fe(c[12]),null),(!a||o&4)&&r(e,"font-size",c[2]),(!a||o&32&&t!==(t="progress-radial-text "+c[5]))&&r(e,"class",t)},i:function(c){a||(I(s,c),a=!0)},o:function(c){q(s,c),a=!1},d:function(c){c&&y(e),s&&s.d(c)}};return G("SvelteRegisterBlock",{block:h,id:ne.name,type:"if",source:"(58:2) {#if value != undefined && value >= 0 && $$slots.default}",ctx:n}),h}function oe(n){let e,t,a,l,s,h,g=`${n[7]}
			${n[7]}`,c,o,v,d,u=n[0]!=null&&n[0]>=0&&n[10].default&&ne(n);const P={c:function(){e=R("figure"),t=X("svg"),a=X("circle"),s=X("circle"),u&&u.c(),this.h()},l:function(f){e=E(f,"FIGURE",{class:!0,"data-testid":!0,role:!0,"aria-labelledby":!0,"aria-valuenow":!0,"aria-valuetext":!0,"aria-valuemin":!0,"aria-valuemax":!0});var m=j(e);t=Y(m,"svg",{viewBox:!0,class:!0});var C=j(t);a=Y(C,"circle",{class:!0,"stroke-width":!0,r:!0,cx:!0,cy:!0}),j(a).forEach(y),s=Y(C,"circle",{class:!0,"stroke-width":!0,r:!0,cx:!0,cy:!0}),j(s).forEach(y),u&&u.l(C),C.forEach(y),m.forEach(y),this.h()},h:function(){r(a,"class",l="progress-radial-track "+ae+" "+n[4]),r(a,"stroke-width",n[1]),r(a,"r",O/2),r(a,"cx","50%"),r(a,"cy","50%"),k(a,L,42,2,1387),r(s,"class",h="progress-radial-meter "+le+" "+n[3]),r(s,"stroke-width",n[1]),r(s,"r",O/2),r(s,"cx","50%"),r(s,"cy","50%"),W(s,"stroke-dasharray",g),W(s,"stroke-dashoffset",n[8]),k(s,L,45,2,1526),r(t,"viewBox","0 0 "+O+" "+O),r(t,"class","rounded-full"),be(t,"animate-spin",n[0]===void 0),k(t,L,40,1,1264),r(e,"class",c="progress-radial "+n[9]),r(e,"data-testid","progress-radial"),r(e,"role","meter"),r(e,"aria-labelledby",n[6]),r(e,"aria-valuenow",o=n[0]||0),r(e,"aria-valuetext",v=n[0]?`${n[0]}%`:"Indeterminate Spinner"),r(e,"aria-valuemin",0),r(e,"aria-valuemax",100),k(e,L,29,0,988)},m:function(f,m){U(f,e,m),b(e,t),b(t,a),b(t,s),u&&u.m(t,null),d=!0},p:function(f,[m]){(!d||m&16&&l!==(l="progress-radial-track "+ae+" "+f[4]))&&r(a,"class",l),(!d||m&2)&&r(a,"stroke-width",f[1]),(!d||m&8&&h!==(h="progress-radial-meter "+le+" "+f[3]))&&r(s,"class",h),(!d||m&2)&&r(s,"stroke-width",f[1]),m&128&&g!==(g=`${f[7]}
			${f[7]}`)&&W(s,"stroke-dasharray",g),m&256&&W(s,"stroke-dashoffset",f[8]),f[0]!=null&&f[0]>=0&&f[10].default?u?(u.p(f,m),m&1025&&I(u,1)):(u=ne(f),u.c(),I(u,1),u.m(t,null)):u&&(xe(),q(u,1,1,()=>{u=null}),Be()),(!d||m&1)&&be(t,"animate-spin",f[0]===void 0),(!d||m&512&&c!==(c="progress-radial "+f[9]))&&r(e,"class",c),(!d||m&64)&&r(e,"aria-labelledby",f[6]),(!d||m&1&&o!==(o=f[0]||0))&&r(e,"aria-valuenow",o),(!d||m&1&&v!==(v=f[0]?`${f[0]}%`:"Indeterminate Spinner"))&&r(e,"aria-valuetext",v)},i:function(f){d||(I(u),d=!0)},o:function(f){q(u),d=!1},d:function(f){f&&y(e),u&&u.d()}};return G("SvelteRegisterBlock",{block:P,id:oe.name,type:"component",source:"",ctx:n}),P}const we="progress-radial relative overflow-hidden",ae="fill-transparent",le="fill-transparent transition-[stroke-dashoffset] duration-200 -rotate-90 origin-[50%_50%]",O=512;function Ue(n,e,t){let a,{$$slots:l={},$$scope:s}=e;Ce("ProgressRadial",l,["default"]);const h=Me(l);let{value:g=void 0}=e,{stroke:c=40}=e,{font:o=56}=e,{width:v="w-36"}=e,{meter:d="stroke-surface-900 dark:stroke-surface-50"}=e,{track:u="stroke-surface-500/30"}=e,{fill:P="fill-token"}=e,{labelledby:w=""}=e;const f=O/2;let m=f,C;function T(i){t(7,m=f*2*Math.PI),t(8,C=m-i/100*m)}return T(0),ge(()=>{T(g===void 0?25:g)}),n.$$set=i=>{t(16,e=Q(Q({},e),ve(i))),"value"in i&&t(0,g=i.value),"stroke"in i&&t(1,c=i.stroke),"font"in i&&t(2,o=i.font),"width"in i&&t(11,v=i.width),"meter"in i&&t(3,d=i.meter),"track"in i&&t(4,u=i.track),"fill"in i&&t(5,P=i.fill),"labelledby"in i&&t(6,w=i.labelledby),"$$scope"in i&&t(12,s=i.$$scope)},n.$capture_state=()=>({afterUpdate:ge,value:g,stroke:c,font:o,width:v,meter:d,track:u,fill:P,labelledby:w,cBase:we,cBaseTrack:ae,cBaseMeter:le,baseSize:O,radius:f,circumference:m,dashoffset:C,setProgress:T,classesBase:a}),n.$inject_state=i=>{t(16,e=Q(Q({},e),i)),"value"in e&&t(0,g=i.value),"stroke"in e&&t(1,c=i.stroke),"font"in e&&t(2,o=i.font),"width"in e&&t(11,v=i.width),"meter"in e&&t(3,d=i.meter),"track"in e&&t(4,u=i.track),"fill"in e&&t(5,P=i.fill),"labelledby"in e&&t(6,w=i.labelledby),"circumference"in e&&t(7,m=i.circumference),"dashoffset"in e&&t(8,C=i.dashoffset),"classesBase"in e&&t(9,a=i.classesBase)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{t(9,a=`${we} ${v} ${e.class??""}`)},e=ve(e),[g,c,o,d,u,P,w,m,C,a,h,v,s,l]}class Ae extends Re{constructor(e){super(e),Ee(this,e,Ue,oe,ye,{value:0,stroke:1,font:2,width:11,meter:3,track:4,fill:5,labelledby:6}),G("SvelteRegisterComponent",{component:this,tagName:"ProgressRadial",options:e,id:oe.name})}get value(){throw new Error("<ProgressRadial>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(e){throw new Error("<ProgressRadial>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get stroke(){throw new Error("<ProgressRadial>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set stroke(e){throw new Error("<ProgressRadial>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get font(){throw new Error("<ProgressRadial>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set font(e){throw new Error("<ProgressRadial>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get width(){throw new Error("<ProgressRadial>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set width(e){throw new Error("<ProgressRadial>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get meter(){throw new Error("<ProgressRadial>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set meter(e){throw new Error("<ProgressRadial>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get track(){throw new Error("<ProgressRadial>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set track(e){throw new Error("<ProgressRadial>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get fill(){throw new Error("<ProgressRadial>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set fill(e){throw new Error("<ProgressRadial>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get labelledby(){throw new Error("<ProgressRadial>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set labelledby(e){throw new Error("<ProgressRadial>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const S="src/routes/onboarding/+page.svelte";function De(n){let e,t,a,l,s="Add Audio",h;function g(v){n[2](v)}let c={name:"files",button:"variant-filled-primary ",class:"btn variant-filled-primary rounded-xl font-extrabold w-64 p-1",$$slots:{default:[qe]},$$scope:{ctx:n}};n[0]!==void 0&&(c.files=n[0]),e=new Ie({props:c,$$inline:!0}),Te.push(()=>Oe(e,"files",g));const o={c:function(){Z(e.$$.fragment),a=D(),l=R("button"),l.textContent=s,this.h()},l:function(d){$(e.$$.fragment,d),a=z(d),l=E(d,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),J(l)!=="svelte-ejq72a"&&(l.textContent=s),this.h()},h:function(){r(l,"type","button"),r(l,"class","btn p-3 variant-filled-primary text-2xl rounded-xl font-extrabold w-64"),k(l,S,48,3,1811)},m:function(d,u){ee(e,d,u),U(d,a,u),U(d,l,u),h=!0},p:function(d,u){const P={};u&8&&(P.$$scope={dirty:u,ctx:d}),!t&&u&1&&(t=!0,P.files=d[0],He(()=>t=!1)),e.$set(P)},i:function(d){h||(I(e.$$.fragment,d),h=!0)},o:function(d){q(e.$$.fragment,d),h=!1},d:function(d){d&&(y(a),y(l)),te(e,d)}};return G("SvelteRegisterBlock",{block:o,id:De.name,type:"else",source:"(38:2) {:else}",ctx:n}),o}function ze(n){let e,t;e=new Ae({props:{"...":!0,stroke:100,meter:"stroke-primary-500",track:"stroke-primary-500/30"},$$inline:!0});const a={c:function(){Z(e.$$.fragment)},l:function(s){$(e.$$.fragment,s)},m:function(s,h){ee(e,s,h),t=!0},p:Pe,i:function(s){t||(I(e.$$.fragment,s),t=!0)},o:function(s){q(e.$$.fragment,s),t=!1},d:function(s){te(e,s)}};return G("SvelteRegisterBlock",{block:a,id:ze.name,type:"if",source:"(36:2) {#if pressAction}",ctx:n}),a}function qe(n){let e,t="Add Picture";const a={c:function(){e=R("p"),e.textContent=t,this.h()},l:function(s){e=E(s,"P",{class:!0,"data-svelte-h":!0}),J(e)!=="svelte-nlfkcs"&&(e.textContent=t),this.h()},h:function(){r(e,"class","text-2xl"),k(e,S,46,5,1754)},m:function(s,h){U(s,e,h)},p:Pe,d:function(s){s&&y(e)}};return G("SvelteRegisterBlock",{block:a,id:qe.name,type:"slot",source:'(39:3) <FileButton     bind:files     name=\\"files\\"     button=\\"variant-filled-primary \\"     class=\\"btn variant-filled-primary rounded-xl font-extrabold w-64 p-1\\"     >',ctx:n}),a}function ie(n){let e,t,a,l,s,h,g,c,o,v,d,u,P="Snap a picture or audio, and let us turn it into organized notes for you!",w,f,m,C="Events",T,i,ce,se,M,ue="Snap a picture or audio, and let us turn it into organized notes for you!",re,V,x,B,K;t=new Se({$$inline:!0}),l=new je({props:{actionName:"Snap"},$$inline:!0});const fe=[ze,De],N=[];function de(A,_){return A[1]?0:1}x=de(n),B=N[x]=fe[x](n);const me={c:function(){e=R("main"),Z(t.$$.fragment),a=D(),Z(l.$$.fragment),s=D(),h=R("div"),g=D(),c=R("div"),o=R("img"),d=D(),u=R("div"),u.textContent=P,w=D(),f=R("div"),m=R("h1"),m.textContent=C,T=D(),i=R("img"),se=D(),M=R("div"),M.textContent=ue,re=D(),V=R("div"),B.c(),this.h()},l:function(_){e=E(_,"MAIN",{class:!0});var p=j(e);$(t.$$.fragment,p),a=z(p),$(l.$$.fragment,p),s=z(p),h=E(p,"DIV",{class:!0}),j(h).forEach(y),g=z(p),c=E(p,"DIV",{class:!0});var F=j(c);o=E(F,"IMG",{src:!0,alt:!0,class:!0}),d=z(F),u=E(F,"DIV",{class:!0,"data-svelte-h":!0}),J(u)!=="svelte-1o8vv4z"&&(u.textContent=P),F.forEach(y),w=z(p),f=E(p,"DIV",{class:!0});var H=j(f);m=E(H,"H1",{class:!0,"data-svelte-h":!0}),J(m)!=="svelte-16tl27i"&&(m.textContent=C),T=z(H),i=E(H,"IMG",{src:!0,alt:!0,class:!0}),se=z(H),M=E(H,"DIV",{class:!0,"data-svelte-h":!0}),J(M)!=="svelte-okyp8h"&&(M.textContent=ue),H.forEach(y),re=z(p),V=E(p,"DIV",{class:!0});var he=j(V);B.l(he),he.forEach(y),p.forEach(y),this.h()},h:function(){r(h,"class","flex-grow-0 h-52"),k(h,S,23,1,685),_e(o.src,v="/snap.png")||r(o,"src",v),r(o,"alt","snap pictur!"),r(o,"class","left-0 aspect-square h-64 absolute"),k(o,S,25,2,793),r(u,"class","w-60 text-lg text-center pl-2 pr-8"),k(u,S,26,2,882),r(c,"class","flex-grow relative flex items-center w-full justify-end"),k(c,S,24,1,720),r(m,"class","h1 text-4xl absolute top-[-10%] right-0 m-8"),k(m,S,31,2,1102),_e(i.src,ce="/nap.png")||r(i,"src",ce),r(i,"alt","nap tent!"),r(i,"class","right-0 aspect-square h-48 absolute"),k(i,S,32,2,1172),r(M,"class","w-60 text-lg text-center pl-8 pr-4"),k(M,S,33,2,1258),r(f,"class","flex-grow relative flex items-center w-full justify-start"),k(f,S,30,1,1027),r(V,"class","flex-grow flex flex-col space-y-4 items-center"),k(V,S,37,1,1403),r(e,"class","container h-screen bg-surface-900 relative flex flex-col justify-around items-center"),k(e,S,20,0,533)},m:function(_,p){U(_,e,p),ee(t,e,null),b(e,a),ee(l,e,null),b(e,s),b(e,h),b(e,g),b(e,c),b(c,o),b(c,d),b(c,u),b(e,w),b(e,f),b(f,m),b(f,T),b(f,i),b(f,se),b(f,M),b(e,re),b(e,V),N[x].m(V,null),K=!0},p:function(_,[p]){let F=x;x=de(_),x===F?N[x].p(_,p):(xe(),q(N[F],1,1,()=>{N[F]=null}),Be(),B=N[x],B?B.p(_,p):(B=N[x]=fe[x](_),B.c()),I(B,1),B.m(V,null))},i:function(_){K||(I(t.$$.fragment,_),I(l.$$.fragment,_),I(B),K=!0)},o:function(_){q(t.$$.fragment,_),q(l.$$.fragment,_),q(B),K=!1},d:function(_){_&&y(e),te(t),te(l),N[x].d()}};return G("SvelteRegisterBlock",{block:me,id:ie.name,type:"component",source:"",ctx:n}),me}function Le(n,e,t){let{$$slots:a={},$$scope:l}=e;Ce("Page",a,[]);let s,h=!1;const g=[];Object.keys(e).forEach(o=>{!~g.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<Page> was created with unknown prop '${o}'`)});function c(o){s=o,t(0,s)}return n.$capture_state=()=>({goto:pe,HomeButton:Se,SunnyTitle:je,uploadImg:ke,FileButton:Ie,ProgressRadial:Ae,files:s,pressAction:h}),n.$inject_state=o=>{"files"in o&&t(0,s=o.files),"pressAction"in o&&t(1,h=o.pressAction)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&1&&s&&s.length>0&&(ke(s).then(o=>{pe(`/processing/${o}`)}),t(1,h=!0))},[s,h,c]}class $e extends Re{constructor(e){super(e),Ee(this,e,Le,ie,ye,{}),G("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:ie.name})}}export{$e as component};

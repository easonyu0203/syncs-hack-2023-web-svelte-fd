import{S as r,i as f,d as u,s as _,G as p,v as d,H as m,I as $,J as h,k as g,h as v}from"../chunks/index.0ecf0eff.js";function c(s){let n;const a=s[1].default,e=p(a,s,s[0],null),i={c:function(){e&&e.c()},l:function(t){e&&e.l(t)},m:function(t,l){e&&e.m(t,l),n=!0},p:function(t,[l]){e&&e.p&&(!n||l&1)&&m(e,a,t,t[0],n?h(a,t[0],l,null):$(t[0]),null)},i:function(t){n||(g(e,t),n=!0)},o:function(t){v(e,t),n=!1},d:function(t){e&&e.d(t)}};return u("SvelteRegisterBlock",{block:i,id:c.name,type:"component",source:"",ctx:s}),i}function w(s,n,a){let{$$slots:e={},$$scope:i}=n;d("Layout",e,["default"]);const o=[];return Object.keys(n).forEach(t=>{!~o.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<Layout> was created with unknown prop '${t}'`)}),s.$$set=t=>{"$$scope"in t&&a(0,i=t.$$scope)},[i,e]}class k extends r{constructor(n){super(n),f(this,n,w,c,_,{}),u("SvelteRegisterComponent",{component:this,tagName:"Layout",options:n,id:c.name})}}export{k as component};
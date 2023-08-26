import{s as M,a as V,o as q,b as Q,t as A,c as N,d as X}from"../chunks/scheduler.73576e99.js";import{S as Y,i as Z,d as y,v as x,s as $,e as w,c as ee,a as R,t as g,b as B,f as b,g as v,h as k,j as te,k as ne,l as oe,m as O,n as h,o as se,p as re,q as ie,r as L,u as E,w as T,x as P,y as S}from"../chunks/index.1ecd7c33.js";const ce=!0,ae="modulepreload",le=function(s,e){return new URL(s,e).href},U={},j=function(e,t,u){if(!t||t.length===0)return e();const c=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=le(i,u),i in U)return;U[i]=!0;const l=i.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(!!u)for(let f=c.length-1;f>=0;f--){const d=c[f];if(d.href===i&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const o=document.createElement("link");if(o.rel=l?"stylesheet":ae,l||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),l)return new Promise((f,d)=>{o.addEventListener("load",f),o.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})},he={},ue=ce,fe=".svelte-kit/generated/root.svelte";function W(s){let e,t,u;var c=s[1][0];function i(a,n){return{props:{data:a[3],form:a[2]},$$inline:!0}}c&&(e=k(c,i(s)),s[12](e));const l={c:function(){e&&E(e.$$.fragment),t=w()},l:function(n){e&&T(e.$$.fragment,n),t=w()},m:function(n,o){e&&P(e,n,o),R(n,t,o),u=!0},p:function(n,o){if(o&2&&c!==(c=n[1][0])){if(e){L();const f=e;g(f.$$.fragment,1,0,()=>{S(f,1)}),B()}c?(e=k(c,i(n)),n[12](e),E(e.$$.fragment),b(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else if(c){const f={};o&8&&(f.data=n[3]),o&4&&(f.form=n[2]),e.$set(f)}},i:function(n){u||(e&&b(e.$$.fragment,n),u=!0)},o:function(n){e&&g(e.$$.fragment,n),u=!1},d:function(n){n&&v(t),s[12](null),e&&S(e,n)}};return y("SvelteRegisterBlock",{block:l,id:W.name,type:"else",source:"(46:0) {:else}",ctx:s}),l}function z(s){let e,t,u;var c=s[1][0];function i(a,n){return{props:{data:a[3],$$slots:{default:[F]},$$scope:{ctx:a}},$$inline:!0}}c&&(e=k(c,i(s)),s[11](e));const l={c:function(){e&&E(e.$$.fragment),t=w()},l:function(n){e&&T(e.$$.fragment,n),t=w()},m:function(n,o){e&&P(e,n,o),R(n,t,o),u=!0},p:function(n,o){if(o&2&&c!==(c=n[1][0])){if(e){L();const f=e;g(f.$$.fragment,1,0,()=>{S(f,1)}),B()}c?(e=k(c,i(n)),n[11](e),E(e.$$.fragment),b(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else if(c){const f={};o&8&&(f.data=n[3]),o&8215&&(f.$$scope={dirty:o,ctx:n}),e.$set(f)}},i:function(n){u||(e&&b(e.$$.fragment,n),u=!0)},o:function(n){e&&g(e.$$.fragment,n),u=!1},d:function(n){n&&v(t),s[11](null),e&&S(e,n)}};return y("SvelteRegisterBlock",{block:l,id:z.name,type:"if",source:"(42:0) {#if constructors[1]}",ctx:s}),l}function F(s){let e,t,u;var c=s[1][1];function i(a,n){return{props:{data:a[4],form:a[2]},$$inline:!0}}c&&(e=k(c,i(s)),s[10](e));const l={c:function(){e&&E(e.$$.fragment),t=w()},l:function(n){e&&T(e.$$.fragment,n),t=w()},m:function(n,o){e&&P(e,n,o),R(n,t,o),u=!0},p:function(n,o){if(o&2&&c!==(c=n[1][1])){if(e){L();const f=e;g(f.$$.fragment,1,0,()=>{S(f,1)}),B()}c?(e=k(c,i(n)),n[10](e),E(e.$$.fragment),b(e.$$.fragment,1),P(e,t.parentNode,t)):e=null}else if(c){const f={};o&16&&(f.data=n[4]),o&4&&(f.form=n[2]),e.$set(f)}},i:function(n){u||(e&&b(e.$$.fragment,n),u=!0)},o:function(n){e&&g(e.$$.fragment,n),u=!1},d:function(n){n&&v(t),s[10](null),e&&S(e,n)}};return y("SvelteRegisterBlock",{block:l,id:F.name,type:"slot",source:"(43:1) <svelte:component this={constructors[0]} bind:this={components[0]} data={data_0}>",ctx:s}),l}function C(s){let e,t=s[6]&&D(s);const u={c:function(){e=te("div"),t&&t.c(),this.h()},l:function(i){e=ne(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var l=oe(e);t&&t.l(l),l.forEach(v),this.h()},h:function(){O(e,"id","svelte-announcer"),O(e,"aria-live","assertive"),O(e,"aria-atomic","true"),h(e,"position","absolute"),h(e,"left","0"),h(e,"top","0"),h(e,"clip","rect(0 0 0 0)"),h(e,"clip-path","inset(50%)"),h(e,"overflow","hidden"),h(e,"white-space","nowrap"),h(e,"width","1px"),h(e,"height","1px"),X(e,fe,50,1,1149)},m:function(i,l){R(i,e,l),t&&t.m(e,null)},p:function(i,l){i[6]?t?t.p(i,l):(t=D(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d:function(i){i&&v(e),t&&t.d()}};return y("SvelteRegisterBlock",{block:u,id:C.name,type:"if",source:"(50:0) {#if mounted}",ctx:s}),u}function D(s){let e;const t={c:function(){e=se(s[7])},l:function(c){e=re(c,s[7])},m:function(c,i){R(c,e,i)},p:function(c,i){i&128&&ie(e,c[7])},d:function(c){c&&v(e)}};return y("SvelteRegisterBlock",{block:t,id:D.name,type:"if",source:"(52:2) {#if navigated}",ctx:s}),t}function I(s){let e,t,u,c,i;const l=[z,W],a=[];function n(d,m){return d[1][1]?0:1}e=n(s),t=a[e]=l[e](s);let o=s[5]&&C(s);const f={c:function(){t.c(),u=$(),o&&o.c(),c=w()},l:function(m){t.l(m),u=ee(m),o&&o.l(m),c=w()},m:function(m,_){a[e].m(m,_),R(m,u,_),o&&o.m(m,_),R(m,c,_),i=!0},p:function(m,[_]){let p=e;e=n(m),e===p?a[e].p(m,_):(L(),g(a[p],1,1,()=>{a[p]=null}),B(),t=a[e],t?t.p(m,_):(t=a[e]=l[e](m),t.c()),b(t,1),t.m(u.parentNode,u)),m[5]?o?o.p(m,_):(o=C(m),o.c(),o.m(c.parentNode,c)):o&&(o.d(1),o=null)},i:function(m){i||(b(t),i=!0)},o:function(m){g(t),i=!1},d:function(m){m&&(v(u),v(c)),a[e].d(m),o&&o.d(m)}};return y("SvelteRegisterBlock",{block:f,id:I.name,type:"component",source:"",ctx:s}),f}function me(s,e,t){let{$$slots:u={},$$scope:c}=e;x("Root",u,[]);let{stores:i}=e,{page:l}=e,{constructors:a}=e,{components:n=[]}=e,{form:o}=e,{data_0:f=null}=e,{data_1:d=null}=e;V(i.page.notify);let m=!1,_=!1,p=null;q(()=>{const r=i.page.subscribe(()=>{m&&(t(6,_=!0),A().then(()=>{t(7,p=document.title||"untitled page")}))});return t(5,m=!0),r}),s.$$.on_mount.push(function(){i===void 0&&!("stores"in e||s.$$.bound[s.$$.props.stores])&&console.warn("<Root> was created without expected prop 'stores'"),l===void 0&&!("page"in e||s.$$.bound[s.$$.props.page])&&console.warn("<Root> was created without expected prop 'page'"),a===void 0&&!("constructors"in e||s.$$.bound[s.$$.props.constructors])&&console.warn("<Root> was created without expected prop 'constructors'"),o===void 0&&!("form"in e||s.$$.bound[s.$$.props.form])&&console.warn("<Root> was created without expected prop 'form'")});const G=["stores","page","constructors","components","form","data_0","data_1"];Object.keys(e).forEach(r=>{!~G.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<Root> was created with unknown prop '${r}'`)});function H(r){N[r?"unshift":"push"](()=>{n[1]=r,t(0,n)})}function J(r){N[r?"unshift":"push"](()=>{n[0]=r,t(0,n)})}function K(r){N[r?"unshift":"push"](()=>{n[0]=r,t(0,n)})}return s.$$set=r=>{"stores"in r&&t(8,i=r.stores),"page"in r&&t(9,l=r.page),"constructors"in r&&t(1,a=r.constructors),"components"in r&&t(0,n=r.components),"form"in r&&t(2,o=r.form),"data_0"in r&&t(3,f=r.data_0),"data_1"in r&&t(4,d=r.data_1)},s.$capture_state=()=>({setContext:Q,afterUpdate:V,onMount:q,tick:A,browser:ue,stores:i,page:l,constructors:a,components:n,form:o,data_0:f,data_1:d,mounted:m,navigated:_,title:p}),s.$inject_state=r=>{"stores"in r&&t(8,i=r.stores),"page"in r&&t(9,l=r.page),"constructors"in r&&t(1,a=r.constructors),"components"in r&&t(0,n=r.components),"form"in r&&t(2,o=r.form),"data_0"in r&&t(3,f=r.data_0),"data_1"in r&&t(4,d=r.data_1),"mounted"in r&&t(5,m=r.mounted),"navigated"in r&&t(6,_=r.navigated),"title"in r&&t(7,p=r.title)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),s.$$.update=()=>{s.$$.dirty&768&&i.page.set(l)},[n,a,o,f,d,m,_,p,i,l,H,J,K]}class pe extends Y{constructor(e){super(e),Z(this,e,me,I,M,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4}),y("SvelteRegisterComponent",{component:this,tagName:"Root",options:e,id:I.name})}get stores(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set stores(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get page(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set page(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get constructors(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set constructors(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get components(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set components(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get form(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set form(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get data_0(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data_0(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get data_1(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data_1(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const we=[()=>j(()=>import("../nodes/0.416f7f4f.js"),["../nodes/0.416f7f4f.js","../chunks/scheduler.73576e99.js","../chunks/index.1ecd7c33.js","../chunks/firebase.f1444ac3.js","../assets/0.dd569250.css"],import.meta.url),()=>j(()=>import("../nodes/1.76eaf116.js"),["../nodes/1.76eaf116.js","../chunks/scheduler.73576e99.js","../chunks/index.1ecd7c33.js","../chunks/singletons.5790b253.js","../chunks/index.8b252e6a.js"],import.meta.url),()=>j(()=>import("../nodes/2.1cd03793.js"),["../nodes/2.1cd03793.js","../chunks/scheduler.73576e99.js","../chunks/index.1ecd7c33.js","../chunks/firebase.f1444ac3.js","../chunks/index.8b252e6a.js","../assets/2.bd53154f.css"],import.meta.url)],ge=[],be={"/":[2]},ve={handleError:({error:s})=>{console.error(s)}};export{be as dictionary,ve as hooks,he as matchers,we as nodes,pe as root,ge as server_loads};

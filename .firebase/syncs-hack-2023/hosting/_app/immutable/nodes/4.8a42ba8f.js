import{s as ye,o as Vt,B as Ut,C as Q,D as Qt,E as Gt,e as lt,w as It,g as j,h as E,i as A,F as Kt,k as C,G as We,H as Xe,I as Ye,J as Ze,K as Jt,v as Wt,r as Xt,c as N,d as D,x as K,A as $e,z as tn}from"../chunks/scheduler.15758ddb.js";import{S as be,i as ve,d as q,v as xe,a as Z,e as P,j as Yt,k as Zt,g as k,n as v,m as $t,p as te,b as ee,t as ne,l as oe}from"../chunks/index.3f5eacb3.js";import{g as we}from"../chunks/spread.84d39b6c.js";import{u as re,a as yt,e as se,b as Ie,g as bt}from"../chunks/firebase.c906b4c9.js";import{g as vt}from"../chunks/navigation.7f64dde7.js";const W=/^[a-z0-9]+(-[a-z0-9]+)*$/,$=(t,e,n,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:r,prefix:l,name:c};return e&&!it(a)?null:a}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return e&&!it(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return e&&!it(c,n)?null:c}return null},it=(t,e)=>t?!!((t.provider===""||t.provider.match(W))&&(e&&t.prefix===""||t.prefix.match(W))&&t.name.match(W)):!1,Se=Object.freeze({left:0,top:0,width:16,height:16}),at=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),G=Object.freeze({...Se,...at}),St=Object.freeze({...G,body:"",hidden:!1});function en(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function ie(t,e){const n=en(t,e);for(const r in St)r in at?r in t&&!(r in n)&&(n[r]=at[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function nn(t,e){const n=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function on(t,e,n){const r=t.icons,o=t.aliases||Object.create(null);let s={};function i(c){s=ie(r[c]||o[c],s)}return i(e),n.forEach(i),ie(t,s)}function _e(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const r=nn(t);for(const o in r){const s=r[o];s&&(e(o,on(t,o,s)),n.push(o))}return n}const rn={provider:"",aliases:{},not_found:{},...Se};function xt(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function ke(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!xt(t,rn))return null;const n=e.icons;for(const o in n){const s=n[o];if(!o.match(W)||typeof s.body!="string"||!xt(s,St))return null}const r=e.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(W)||typeof i!="string"||!n[i]&&!r[i]||!xt(s,St))return null}return e}const ut=Object.create(null);function sn(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function R(t,e){const n=ut[t]||(ut[t]=Object.create(null));return n[e]||(n[e]=sn(t,e))}function Lt(t,e){return ke(e)?_e(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function cn(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}function ln(t,e){let n=[];return(typeof t=="string"?[t]:Object.keys(ut)).forEach(o=>{(typeof o=="string"&&typeof e=="string"?[e]:Object.keys(ut[o]||{})).forEach(i=>{const c=R(o,i);n=n.concat(Object.keys(c.icons).map(l=>(o!==""?"@"+o+":":"")+i+":"+l))})}),n}let X=!1;function Ce(t){return typeof t=="boolean"&&(X=t),X}function dt(t){const e=typeof t=="string"?$(t,!0,X):t;if(e){const n=R(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function je(t,e){const n=$(t,!0,X);if(!n)return!1;const r=R(n.provider,n.prefix);return cn(r,n.name,e)}function Ee(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),X&&!e&&!t.prefix){let o=!1;return ke(t)&&(t.prefix="",_e(t,(s,i)=>{i&&je(s,i)&&(o=!0)})),o}const n=t.prefix;if(!it({provider:e,prefix:n,name:"a"}))return!1;const r=R(e,n);return!!Lt(r,t)}function an(t){return!!dt(t)}function un(t){const e=dt(t);return e?{...G,...e}:null}const Pe=Object.freeze({width:null,height:null}),Te=Object.freeze({...Pe,...at}),fn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,dn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function _t(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(fn);if(r===null||!r.length)return t;const o=[];let s=r.shift(),i=dn.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*e*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const hn=t=>t==="unset"||t==="undefined"||t==="none";function Oe(t,e){const n={...G,...t},r={...Te,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(x=>{const b=[],I=x.hFlip,m=x.vFlip;let d=x.rotate;I?m?d+=2:(b.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),b.push("scale(-1 1)"),o.top=o.left=0):m&&(b.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),b.push("scale(1 -1)"),o.top=o.left=0);let g;switch(d<0&&(d-=Math.floor(d/4)*4),d=d%4,d){case 1:g=o.height/2+o.top,b.unshift("rotate(90 "+g.toString()+" "+g.toString()+")");break;case 2:b.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:g=o.width/2+o.left,b.unshift("rotate(-90 "+g.toString()+" "+g.toString()+")");break}d%2===1&&(o.left!==o.top&&(g=o.left,o.left=o.top,o.top=g),o.width!==o.height&&(g=o.width,o.width=o.height,o.height=g)),b.length&&(s='<g transform="'+b.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,l=o.width,a=o.height;let u,f;i===null?(f=c===null?"1em":c==="auto"?a:c,u=_t(f,l/a)):(u=i==="auto"?l:i,f=c===null?_t(u,a/l):c==="auto"?a:c);const p={},y=(x,b)=>{hn(b)||(p[x]=b.toString())};return y("width",u),y("height",f),p.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:p,body:s}}const pn=/\sid="(\S+)"/g,gn="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let mn=0;function Fe(t,e=gn){const n=[];let r;for(;r=pn.exec(t);)n.push(r[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof e=="function"?e(s):e+(mn++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}const kt=Object.create(null);function Me(t,e){kt[t]=e}function Ct(t){return kt[t]||kt[""]}function Nt(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const ht=Object.create(null),J=["https://api.simplesvg.com","https://api.unisvg.com"],ct=[];for(;J.length>0;)J.length===1||Math.random()>.5?ct.push(J.shift()):ct.push(J.pop());ht[""]=Nt({resources:["https://api.iconify.design"].concat(ct)});function Ae(t,e){const n=Nt(e);return n===null?!1:(ht[t]=n,!0)}function pt(t){return ht[t]}function yn(){return Object.keys(ht)}const bn=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let ft=bn();function vn(t){ft=t}function xn(){return ft}function wn(t,e){const n=pt(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=e+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function In(t){return t===404}const Sn=(t,e,n)=>{const r=[],o=wn(t,e),s="icons";let i={type:s,provider:t,prefix:e,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(r.push(i),i={type:s,provider:t,prefix:e,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function _n(t){if(typeof t=="string"){const e=pt(t);if(e)return e.path}return"/"}const kn=(t,e,n)=>{if(!ft){n("abort",424);return}let r=_n(e.provider);switch(e.type){case"icons":{const s=e.prefix,c=e.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=e.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;ft(t+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(In(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Cn={prepare:Sn,send:kn};function jn(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=R(s,i));let u;c in a.icons?u=e.loaded:i===""||a.missing.has(c)?u=e.missing:u=e.pending;const f={provider:s,prefix:i,name:c};u.push(f)}),e}function Le(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}function En(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(t.icons[a])i.loaded.push({provider:r,prefix:o,name:a});else if(t.missing.has(a))i.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Le([t],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Pn=0;function Tn(t,e,n){const r=Pn++,o=Le.bind(null,n,r);if(!e.pending.length)return o;const s={id:r,icons:e,callback:t,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function On(t,e=!0,n=!1){const r=[];return t.forEach(o=>{const s=typeof o=="string"?$(o,e,n):o;s&&r.push(s)}),r}var Fn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Mn(t,e,n,r){const o=t.resources.length,s=t.random?Math.floor(Math.random()*o):t.index;let i;if(t.random){let h=t.resources.slice(0);for(i=[];h.length>1;){const S=Math.floor(Math.random()*h.length);i.push(h[S]),h=h.slice(0,S).concat(h.slice(S+1))}i=i.concat(h)}else i=t.resources.slice(s).concat(t.resources.slice(0,s));const c=Date.now();let l="pending",a=0,u,f=null,p=[],y=[];typeof r=="function"&&y.push(r);function x(){f&&(clearTimeout(f),f=null)}function b(){l==="pending"&&(l="aborted"),x(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function I(h,S){S&&(y=[]),typeof h=="function"&&y.push(h)}function m(){return{startTime:c,payload:e,status:l,queriesSent:a,queriesPending:p.length,subscribe:I,abort:b}}function d(){l="failed",y.forEach(h=>{h(void 0,u)})}function g(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function F(h,S,M){const w=S!=="success";switch(p=p.filter(_=>_!==h),l){case"pending":break;case"failed":if(w||!t.dataAfterTimeout)return;break;default:return}if(S==="abort"){u=M,d();return}if(w){u=M,p.length||(i.length?B():d());return}if(x(),g(),!t.random){const _=t.resources.indexOf(h.resource);_!==-1&&_!==t.index&&(t.index=_)}l="completed",y.forEach(_=>{_(M)})}function B(){if(l!=="pending")return;x();const h=i.shift();if(h===void 0){if(p.length){f=setTimeout(()=>{x(),l==="pending"&&(g(),d())},t.timeout);return}d();return}const S={status:"pending",resource:h,callback:(M,w)=>{F(S,M,w)}};p.push(S),a++,f=setTimeout(B,t.rotate),n(h,e,S.callback)}return setTimeout(B),m}function Ne(t){const e={...Fn,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const u=Mn(e,c,l,(f,p)=>{r(),a&&a(f,p)});return n.push(u),u}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:r}}function ce(){}const wt=Object.create(null);function An(t){if(!wt[t]){const e=pt(t);if(!e)return;const n=Ne(e),r={config:e,redundancy:n};wt[t]=r}return wt[t]}function De(t,e,n){let r,o;if(typeof t=="string"){const s=Ct(t);if(!s)return n(void 0,424),ce;o=s.send;const i=An(t);i&&(r=i.redundancy)}else{const s=Nt(t);if(s){r=Ne(s);const i=t.resources?t.resources[0]:"",c=Ct(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),ce):r.query(e,o,n)().abort}const le="iconify2",Y="iconify",Re=Y+"-count",ae=Y+"-version",Be=36e5,Ln=168;function jt(t,e){try{return t.getItem(e)}catch{}}function Dt(t,e,n){try{return t.setItem(e,n),!0}catch{}}function ue(t,e){try{t.removeItem(e)}catch{}}function Et(t,e){return Dt(t,Re,e.toString())}function Pt(t){return parseInt(jt(t,Re))||0}const H={local:!0,session:!0},ze={local:new Set,session:new Set};let Rt=!1;function Nn(t){Rt=t}let st=typeof window>"u"?{}:window;function He(t){const e=t+"Storage";try{if(st&&st[e]&&typeof st[e].length=="number")return st[e]}catch{}H[t]=!1}function qe(t,e){const n=He(t);if(!n)return;const r=jt(n,ae);if(r!==le){if(r){const c=Pt(n);for(let l=0;l<c;l++)ue(n,Y+l.toString())}Dt(n,ae,le),Et(n,0);return}const o=Math.floor(Date.now()/Be)-Ln,s=c=>{const l=Y+c.toString(),a=jt(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,c))return!0}catch{}ue(n,l)}};let i=Pt(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,Et(n,i)):ze[t].add(c))}function Ve(){if(!Rt){Nn(!0);for(const t in H)qe(t,e=>{const n=e.data,r=e.provider,o=n.prefix,s=R(r,o);if(!Lt(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Dn(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in H)qe(r,o=>{const s=o.data;return o.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function Rn(t,e){Rt||Ve();function n(r){let o;if(!H[r]||!(o=He(r)))return;const s=ze[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=Pt(o),!Et(o,i+1))return;const c={cached:Math.floor(Date.now()/Be),provider:t.provider,data:e};return Dt(o,Y+i.toString(),JSON.stringify(c))}e.lastModified&&!Dn(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function fe(){}function Bn(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,En(t)}))}function zn(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let s;if(!o||!(s=Ct(n)))return;s.prepare(n,r,o).forEach(c=>{De(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{t.missing.add(a)});else try{const a=Lt(t,l);if(!a.length)return;const u=t.pendingIcons;u&&a.forEach(f=>{u.delete(f)}),Rn(t,l)}catch(a){console.error(a)}Bn(t)})})}))}const Bt=(t,e)=>{const n=On(t,!0,Ce()),r=jn(n);if(!r.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(r.loaded,r.missing,r.pending,fe)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===i)return;i=a,c=u,s.push(R(a,u));const f=o[a]||(o[a]=Object.create(null));f[u]||(f[u]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:u,name:f}=l,p=R(a,u),y=p.pendingIcons||(p.pendingIcons=new Set);y.has(f)||(y.add(f),o[a][u].push(f))}),s.forEach(l=>{const{provider:a,prefix:u}=l;o[a][u].length&&zn(l,o[a][u])}),e?Tn(e,r,s):fe},Hn=t=>new Promise((e,n)=>{const r=typeof t=="string"?$(t,!0):t;if(!r){n(t);return}Bt([r||t],o=>{if(o.length&&r){const s=dt(r);if(s){e({...G,...s});return}}n(t)})});function Ue(t,e){switch(t){case"local":case"session":H[t]=e;break;case"all":for(const n in H)H[n]=e;break}}function qn(t,e){const n={...t};for(const r in e){const o=e[r],s=typeof o;r in Pe?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const Vn=/[\s,]+/;function Un(t,e){e.split(Vn).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Qn(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return e}function Gn(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Kn(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Jn(t){return"data:image/svg+xml,"+Kn(t)}function Wn(t){return'url("'+Jn(t)+'")'}const de={...Te,inline:!1},Xn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Yn={display:"inline-block"},Tt={"background-color":"currentColor"},Qe={"background-color":"transparent"},he={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},pe={"-webkit-mask":Tt,mask:Tt,background:Qe};for(const t in pe){const e=pe[t];for(const n in he)e[t+"-"+n]=he[n]}function Zn(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}function $n(t,e){const n=qn(de,e),r=e.mode||"svg",o=r==="svg"?{...Xn}:{};t.body.indexOf("xlink:")===-1&&delete o["xmlns:xlink"];let s=typeof e.style=="string"?e.style:"";for(let m in e){const d=e[m];if(d!==void 0)switch(m){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[m]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&Un(n,d);break;case"color":s=s+(s.length>0&&s.trim().slice(-1)!==";"?";":"")+"color: "+d+"; ";break;case"rotate":typeof d=="string"?n[m]=Qn(d):typeof d=="number"&&(n[m]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete o["aria-hidden"];break;default:if(m.slice(0,3)==="on:")break;de[m]===void 0&&(o[m]=d)}}const i=Oe(t,n),c=i.attributes;if(n.inline&&(s="vertical-align: -0.125em; "+s),r==="svg"){Object.assign(o,c),s!==""&&(o.style=s);let m=0,d=e.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),{svg:!0,attributes:o,body:Fe(i.body,d?()=>d+"ID"+m++:"iconifySvelte")}}const{body:l,width:a,height:u}=t,f=r==="mask"||(r==="bg"?!1:l.indexOf("currentColor")!==-1),p=Gn(l,{...c,width:a+"",height:u+""}),x={"--svg":Wn(p)},b=m=>{const d=c[m];d&&(x[m]=Zn(d))};b("width"),b("height"),Object.assign(x,Yn,f?Tt:Qe);let I="";for(const m in x)I+=m+": "+x[m]+";";return o.style=I+s,{svg:!1,attributes:o}}function to(t){Ue(t,!0)}function eo(t){Ue(t,!1)}Ce(!0);Me("",Cn);if(typeof document<"u"&&typeof window<"u"){Ve();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Ee(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Ae(n,o)||console.error(r)}catch{console.error(r)}}}}function ge(t,e,n,r,o){function s(){e.loading&&(e.loading.abort(),e.loading=null)}if(typeof t=="object"&&t!==null&&typeof t.body=="string")return e.name="",s(),{data:{...G,...t}};let i;if(typeof t!="string"||(i=$(t,!1,!0))===null)return s(),null;const c=dt(i);if(!c)return n&&(!e.loading||e.loading.name!==t)&&(s(),e.name="",e.loading={name:t,abort:Bt([i],r)}),null;s(),e.name!==t&&(e.name=t,o&&!e.destroyed&&o(t));const l=["iconify"];return i.prefix!==""&&l.push("iconify--"+i.prefix),i.provider!==""&&l.push("iconify--"+i.provider),{data:c,classes:l}}function me(t,e){return t?$n({...G,...t},e):null}const no={getAPIConfig:pt,setAPIModule:Me,sendAPIQuery:De,setFetch:vn,getFetch:xn,listAPIProviders:yn},Ge="node_modules/@iconify/svelte/dist/Icon.svelte";function Ot(t){let e;function n(i,c){return i[0].svg?Je:Ke}let r=n(t),o=r(t);const s={c:function(){o.c(),e=lt()},l:function(c){o.l(c),e=lt()},m:function(c,l){o.m(c,l),Z(c,e,l)},p:function(c,l){r===(r=n(c))&&o?o.p(c,l):(o.d(1),o=r(c),o&&(o.c(),o.m(e.parentNode,e)))},d:function(c){c&&P(e),o.d(c)}};return q("SvelteRegisterBlock",{block:s,id:Ot.name,type:"if",source:"(108:0) {#if data}",ctx:t}),s}function Ke(t){let e,n=[t[0].attributes],r={};for(let s=0;s<n.length;s+=1)r=Q(r,n[s]);const o={c:function(){e=j("span"),this.h()},l:function(i){e=E(i,"SPAN",{}),A(e).forEach(P),this.h()},h:function(){Kt(e,r),C(e,Ge,113,2,2001)},m:function(i,c){Z(i,e,c)},p:function(i,c){Kt(e,r=we(n,[c&1&&i[0].attributes]))},d:function(i){i&&P(e)}};return q("SvelteRegisterBlock",{block:o,id:Ke.name,type:"else",source:"(113:1) {:else}",ctx:t}),o}function Je(t){let e,n,r=t[0].body+"",o=[t[0].attributes],s={};for(let c=0;c<o.length;c+=1)s=Q(s,o[c]);const i={c:function(){e=We("svg"),n=new Xe(!0),this.h()},l:function(l){e=Ye(l,"svg",{});var a=A(e);n=Ze(a,!0),a.forEach(P),this.h()},h:function(){n.a=null,Jt(e,s),C(e,Ge,109,2,1933)},m:function(l,a){Z(l,e,a),n.m(r,e)},p:function(l,a){a&1&&r!==(r=l[0].body+"")&&n.p(r),Jt(e,s=we(o,[a&1&&l[0].attributes]))},d:function(l){l&&P(e)}};return q("SvelteRegisterBlock",{block:i,id:Je.name,type:"if",source:"(109:1) {#if data.svg}",ctx:t}),i}function Ft(t){let e,n=t[0]&&Ot(t);const r={c:function(){n&&n.c(),e=lt()},l:function(s){n&&n.l(s),e=lt()},m:function(s,i){n&&n.m(s,i),Z(s,e,i)},p:function(s,[i]){s[0]?n?n.p(s,i):(n=Ot(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:It,o:It,d:function(s){s&&P(e),n&&n.d(s)}};return q("SvelteRegisterBlock",{block:r,id:Ft.name,type:"component",source:"",ctx:t}),r}function oo(t,e,n){let{$$slots:r={},$$scope:o}=e;xe("Icon",r,[]);const s={name:"",loading:null,destroyed:!1};let i=!1,c=0,l;const a=f=>{typeof e.onLoad=="function"&&e.onLoad(f),Gt()("load",{icon:f})};function u(){n(3,c++,c)}return Vt(()=>{n(2,i=!0)}),Ut(()=>{n(1,s.destroyed=!0,s),s.loading&&(s.loading.abort(),n(1,s.loading=null,s))}),t.$$set=f=>{n(6,e=Q(Q({},e),Qt(f)))},t.$capture_state=()=>({enableCache:to,disableCache:eo,iconExists:an,getIcon:un,listIcons:ln,addIcon:je,addCollection:Ee,calculateSize:_t,replaceIDs:Fe,buildIcon:Oe,loadIcons:Bt,loadIcon:Hn,addAPIProvider:Ae,_api:no,onMount:Vt,onDestroy:Ut,createEventDispatcher:Gt,checkIconState:ge,generateIcon:me,state:s,mounted:i,counter:c,data:l,onLoad:a,loaded:u}),t.$inject_state=f=>{n(6,e=Q(Q({},e),f)),"mounted"in e&&n(2,i=f.mounted),"counter"in e&&n(3,c=f.counter),"data"in e&&n(0,l=f.data)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{{const f=ge(e.icon,s,i,u,a);n(0,l=f?me(f.data,e):null),l&&f.classes&&n(0,l.attributes.class=(typeof e.class=="string"?e.class+" ":"")+f.classes.join(" "),l)}},e=Qt(e),[l,s,i,c]}class Mt extends be{constructor(e){super(e),ve(this,e,oo,Ft,ye,{}),q("SvelteRegisterComponent",{component:this,tagName:"Icon",options:e,id:Ft.name})}}const T="src/routes/login/+page.svelte";function At(t){let e,n,r,o,s,i,c,l,a="Snap or Record to Create Organized Notes Instantly",u,f,p,y,x="Login",b,I,m="Snap Note",d,g,F,B,h,S="Sign in with Google",M,w,_,gt,z,zt="Sign in with Facebook",tt,mt,Ht;F=new Mt({props:{class:"text-lg",icon:"devicon:google"},$$inline:!0}),_=new Mt({props:{class:"text-xl",icon:"mdi:anonymous"},$$inline:!0});const qt={c:function(){e=j("main"),n=j("div"),r=N(),o=j("div"),s=j("img"),c=N(),l=j("p"),l.textContent=a,u=N(),f=j("div"),p=j("div"),y=j("h1"),y.textContent=x,b=N(),I=j("h2"),I.textContent=m,d=N(),g=j("button"),Yt(F.$$.fragment),B=N(),h=j("span"),h.textContent=S,M=N(),w=j("button"),Yt(_.$$.fragment),gt=N(),z=j("span"),z.textContent=zt,this.h()},l:function(O){e=E(O,"MAIN",{class:!0});var L=A(e);n=E(L,"DIV",{class:!0}),A(n).forEach(P),r=D(L),o=E(L,"DIV",{class:!0});var et=A(o);s=E(et,"IMG",{src:!0,alt:!0,class:!0}),c=D(et),l=E(et,"P",{class:!0,"data-svelte-h":!0}),K(l)!=="svelte-osvbka"&&(l.textContent=a),et.forEach(P),u=D(L),f=E(L,"DIV",{class:!0});var U=A(f);p=E(U,"DIV",{class:!0});var nt=A(p);y=E(nt,"H1",{class:!0,"data-svelte-h":!0}),K(y)!=="svelte-b70pb2"&&(y.textContent=x),b=D(nt),I=E(nt,"H2",{class:!0,"data-svelte-h":!0}),K(I)!=="svelte-a9s7bf"&&(I.textContent=m),nt.forEach(P),d=D(U),g=E(U,"BUTTON",{type:!0,class:!0});var ot=A(g);Zt(F.$$.fragment,ot),B=D(ot),h=E(ot,"SPAN",{"data-svelte-h":!0}),K(h)!=="svelte-re30jn"&&(h.textContent=S),ot.forEach(P),M=D(U),w=E(U,"BUTTON",{type:!0,class:!0});var rt=A(w);Zt(_.$$.fragment,rt),gt=D(rt),z=E(rt,"SPAN",{"data-svelte-h":!0}),K(z)!=="svelte-1wvc7sy"&&(z.textContent=zt),rt.forEach(P),U.forEach(P),L.forEach(P),this.h()},h:function(){k(n,"class","bg-surface-900 absolute bottom-0 h-[50%] -z-10 w-full rounded-tr-[7em]"),C(n,T,25,1,533),$e(s.src,i="/logo.png")||k(s,"src",i),k(s,"alt","logo"),k(s,"class","aspect-square max-h-60"),C(s,T,27,2,665),k(l,"class","w-64 text-center text-lg font-semibold"),C(l,T,28,2,734),k(o,"class","flex flex-col items-center"),C(o,T,26,1,622),k(y,"class","h1 text-5xl"),C(y,T,34,3,961),k(I,"class","h2"),C(I,T,35,3,999),k(p,"class","flex flex-col items-center space-y-4"),C(p,T,33,2,907),C(h,T,43,3,1204),k(g,"type","button"),k(g,"class","btn variant-filled rounded-lg font-bold"),C(g,T,37,2,1040),C(z,T,51,3,1427),k(w,"type","button"),k(w,"class","btn variant-filled rounded-lg font-bold"),C(w,T,45,2,1251),k(f,"class","flex flex-col space-y-12 min-w-48"),C(f,T,32,1,856),k(e,"class","container h-screen bg-tertiary-800 flex flex-col justify-around items-center relative z-0"),C(e,T,22,0,424)},m:function(O,L){Z(O,e,L),v(e,n),v(e,r),v(e,o),v(o,s),v(o,c),v(o,l),v(e,u),v(e,f),v(f,p),v(p,y),v(p,b),v(p,I),v(f,d),v(f,g),$t(F,g,null),v(g,B),v(g,h),v(f,M),v(f,w),$t(_,w,null),v(w,gt),v(w,z),tt=!0,mt||(Ht=[te(g,"click",Ie,!1,!1,!1,!1),te(w,"click",t[3],!1,!1,!1,!1)],mt=!0)},p:It,i:function(O){tt||(ee(F.$$.fragment,O),ee(_.$$.fragment,O),tt=!0)},o:function(O){ne(F.$$.fragment,O),ne(_.$$.fragment,O),tt=!1},d:function(O){O&&P(e),oe(F),oe(_),mt=!1,tn(Ht)}};return q("SvelteRegisterBlock",{block:qt,id:At.name,type:"component",source:"",ctx:t}),qt}function ro(t,e,n){let r,o;Wt(bt,"userData"),Xt(t,bt,u=>n(1,r=u));let{$$slots:s={},$$scope:i}=e;xe("Page",s,[]);const c=re(yt);Wt(c,"user"),Xt(t,c,u=>n(2,o=u));const l=[];Object.keys(e).forEach(u=>{!~l.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<Page> was created with unknown prop '${u}'`)});const a=()=>se(yt);return t.$capture_state=()=>({Icon:Mt,signInAnonymously:se,auth:yt,signInWithGoogle:Ie,userData:bt,userStore:re,goto:vt,user:c,$userData:r,$user:o}),t.$$.update=()=>{t.$$.dirty&6&&o&&(r!=null&&r.firstTimeLogin?vt("/onboarding"):vt("/onboarding"))},[c,r,o,a]}class uo extends be{constructor(e){super(e),ve(this,e,ro,At,ye,{}),q("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:At.name})}}export{uo as component};
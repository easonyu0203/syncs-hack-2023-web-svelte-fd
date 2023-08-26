var C=Object.defineProperty;var j=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var m=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n);import{r as p,n as v,q as S,w as I,x as O,y as P,z as b,A as E,B,C as L,D as R,E as T,F as q}from"./scheduler.73576e99.js";let y=!1;function z(){y=!0}function H(){y=!1}function V(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function F(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let l=0;l<t.length;l++){const u=t[l];u.claim_order!==void 0&&r.push(u)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const l=t[r].claim_order,u=(s>0&&t[n[s]].claim_order<=l?s+1:V(1,s,h=>t[n[h]].claim_order,l))-1;i[r]=n[u]+1;const f=u+1;n[f]=r,s=Math.max(f,s)}const c=[],a=[];let o=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(t[r-1]);o>=r;o--)a.push(t[o]);o--}for(;o>=0;o--)a.push(t[o]);c.reverse(),a.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<a.length;r++){for(;l<c.length&&a[r].claim_order>=c[l].claim_order;)l++;const u=l<c.length?c[l]:null;e.insertBefore(a[r],u)}}function D(e,t){if(y){for(F(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function W(e,t,n){y&&!n?D(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function k(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function oe(){return x(" ")}function ce(){return x("")}function G(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function N(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const J=["width","height"];function fe(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&J.indexOf(i)===-1?e[i]=t[i]:N(e,i,t[i])}function ue(e){return e.dataset.svelteH}function K(e){return Array.from(e.childNodes)}function Q(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function M(e,t,n,i,s=!1){Q(e);const c=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const o=e[a];if(t(o)){const r=n(o);return r===void 0?e.splice(a,1):e[a]=r,s||(e.claim_info.last_index=a),o}}for(let a=e.claim_info.last_index-1;a>=0;a--){const o=e[a];if(t(o)){const r=n(o);return r===void 0?e.splice(a,1):e[a]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,o}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function U(e,t,n,i){return M(e,s=>s.nodeName===t,s=>{const c=[];for(let a=0;a<s.attributes.length;a++){const o=s.attributes[a];n[o.name]||c.push(o.name)}c.forEach(a=>s.removeAttribute(a))},()=>i(t))}function de(e,t,n){return U(e,t,n,k)}function X(e,t){return M(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function _e(e){return X(e," ")}function me(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function Y(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}const $=new Set;let _;function he(){_={r:0,c:[],p:_}}function $e(){_.r||p(_.c),_=_.p}function Z(e,t){e&&e.i&&($.delete(e),e.i(t))}function pe(e,t,n,i){if(e&&e.o){if($.has(e))return;$.add(e),_.c.push(()=>{$.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ye(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function ve(e){e&&e.c()}function xe(e,t){e&&e.l(t)}function ee(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),O(()=>{const c=e.$$.on_mount.map(L).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...c):p(c),e.$$.on_mount=[]}),s.forEach(O)}function te(e,t){const n=e.$$;n.fragment!==null&&(R(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){e.$$.dirty[0]===-1&&(T.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(e,t,n,i,s,c,a,o=[-1]){const r=P;b(e);const l=e.$$={fragment:null,ctx:[],props:c,update:v,not_equal:s,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:S(),dirty:o,skip_bound:!1,root:t.target||r.$$.root};a&&a(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(f,h,...w)=>{const g=w.length?w[0]:h;return l.ctx&&s(l.ctx[f],l.ctx[f]=g)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](g),u&&ne(e,f)),h}):[],l.update(),u=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){z();const f=K(t.target);l.fragment&&l.fragment.l(f),f.forEach(A)}else l.fragment&&l.fragment.c();t.intro&&Z(e.$$.fragment),ee(e,t.target,t.anchor),H(),I()}b(r)}class ie{constructor(){m(this,"$$");m(this,"$$set")}$destroy(){te(this,1),this.$destroy=v}$on(t,n){if(!E(n))return v;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const re="4.2.0",se="4";function d(e,t){document.dispatchEvent(Y(e,{version:re,...t},{bubbles:!0}))}function ge(e,t){d("SvelteDOMInsert",{target:e,node:t}),D(e,t)}function Se(e,t,n){d("SvelteDOMInsert",{target:e,node:t,anchor:n}),W(e,t,n)}function Oe(e){d("SvelteDOMRemove",{node:e}),A(e)}function be(e,t,n,i,s,c,a){const o=i===!0?["capture"]:i?Array.from(Object.keys(i)):[];s&&o.push("preventDefault"),c&&o.push("stopPropagation"),a&&o.push("stopImmediatePropagation"),d("SvelteDOMAddEventListener",{node:e,event:t,handler:n,modifiers:o});const r=G(e,t,n,i);return()=>{d("SvelteDOMRemoveEventListener",{node:e,event:t,handler:n,modifiers:o}),r()}}function Ee(e,t,n){N(e,t,n),n==null?d("SvelteDOMRemoveAttribute",{node:e,attribute:t}):d("SvelteDOMSetAttribute",{node:e,attribute:t,value:n})}function De(e,t,n){e[t]=n,d("SvelteDOMSetProperty",{node:e,property:t,value:n})}function Ae(e,t){t=""+t,e.data!==t&&(d("SvelteDOMSetData",{node:e,data:t}),e.data=t)}function Ne(e,t,n){for(const i of Object.keys(t))~n.indexOf(i)||console.warn(`<${e}> received an unexpected slot "${i}".`)}function Me(e,t){const n="this={...} of <svelte:component> should specify a Svelte component.";try{const i=new e(t);if(!i.$$||!i.$set||!i.$on||!i.$destroy)throw new Error(n);return i}catch(i){const{message:s}=i;throw typeof s=="string"&&s.indexOf("is not a constructor")!==-1?new Error(n):i}}class Ce extends ie{constructor(n){if(!n||!n.target&&!n.$$inline)throw new Error("'target' is a required option");super();m(this,"$$prop_def");m(this,"$$events_def");m(this,"$$slot_def")}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(se);export{fe as A,be as B,De as C,ye as D,ue as E,Ce as S,Se as a,$e as b,_e as c,d,ce as e,Z as f,Oe as g,Me as h,we as i,k as j,de as k,K as l,Ee as m,me as n,x as o,X as p,Ae as q,he as r,oe as s,pe as t,ve as u,Ne as v,xe as w,ee as x,te as y,ge as z};
import{R as p,r as u,n as rt,k as oe,j as m,W as ot}from"./app-C06Kjmxk.js";import{T as lt,I as at}from"./TextInput-CrgieiCw.js";import{I as it}from"./InputLabel-C-Ni0nvZ.js";import{l as Z,s as B,a as M,u as A,b as de,o as w,U as T,C as S,t as fe,y as L,p as st,f as Se,T as ut,c as ke,O as ye,d as ct,e as G,q as te}from"./transition-CRyomFUz.js";var be;let O=(be=p.useId)!=null?be:function(){let e=Z(),[t,n]=p.useState(e?()=>B.nextId():null);return M(()=>{t===null&&n(B.nextId())},[t]),t!=null?""+t:void 0};function Le(e){return B.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(F||{}),Pe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Pe||{}),dt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(dt||{});function ft(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(le)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var De=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(De||{});function mt(e,t=0){var n;return e===((n=Le(e))==null?void 0:n.body)?!1:A(t,{0(){return e.matches(le)},1(){let r=e;for(;r!==null;){if(r.matches(le))return!0;r=r.parentElement}return!1}})}var pt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(pt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function N(e){e==null||e.focus({preventScroll:!0})}let gt=["textarea","input"].join(",");function vt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,gt))!=null?n:!1}function ht(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),a=t(r);if(o===null||a===null)return 0;let l=o.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function X(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?ht(e):e:ft(e);o.length>0&&l.length>1&&(l=l.filter(g=>!o.includes(g))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},c=0,d=l.length,h;do{if(c>=d||c+d<=0)return 0;let g=s+c;if(t&16)g=(g+d)%d;else{if(g<0)return 3;if(g>=d)return 1}h=l[g],h==null||h.focus(f),c+=i}while(h!==a.activeElement);return t&6&&vt(h)&&h.select(),2}function Fe(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function wt(){return/Android/gi.test(window.navigator.userAgent)}function Et(){return Fe()||wt()}function K(e,t,n){let r=de(t);u.useEffect(()=>{function o(a){r.current(a)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function Ce(e,t,n){let r=de(t);u.useEffect(()=>{function o(a){r.current(a)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}function yt(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(l,i){if(!r.current||l.defaultPrevented)return;let s=i(l);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let f=function c(d){return typeof d=="function"?c(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let c of f){if(c===null)continue;let d=c instanceof HTMLElement?c:c.current;if(d!=null&&d.contains(s)||l.composed&&l.composedPath().includes(d))return}return!mt(s,De.Loose)&&s.tabIndex!==-1&&l.preventDefault(),t(l,s)}let a=u.useRef(null);K("pointerdown",l=>{var i,s;r.current&&(a.current=((s=(i=l.composedPath)==null?void 0:i.call(l))==null?void 0:s[0])||l.target)},!0),K("mousedown",l=>{var i,s;r.current&&(a.current=((s=(i=l.composedPath)==null?void 0:i.call(l))==null?void 0:s[0])||l.target)},!0),K("click",l=>{Et()||a.current&&(o(l,()=>a.current),a.current=null)},!0),K("touchend",l=>o(l,()=>l.target instanceof HTMLElement?l.target:null),!0),Ce("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function U(...e){return u.useMemo(()=>Le(...e),[...e])}function me(e,t){let n=u.useRef([]),r=w(e);u.useEffect(()=>{let o=[...n.current];for(let[a,l]of t.entries())if(n.current[a]!==l){let i=r(t,o);return n.current=t,i}},[r,...t])}let bt="div";var J=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(J||{});function xt(e,t){var n;let{features:r=1,...o}=e,a={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return S({ourProps:a,theirProps:o,slot:{},defaultTag:bt,name:"Hidden"})}let ae=T(xt);function $t(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let D=[];$t(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&D[0]!==t.target&&(D.unshift(t.target),D=D.filter(n=>n!=null&&n.isConnected),D.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Tt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&St(n)?!1:r}function St(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var Ne=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ne||{});function Me(e,t,n,r){let o=de(n);u.useEffect(()=>{e=e??window;function a(l){o.current(l)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function Re(e){let t=w(e),n=u.useRef(!1);u.useEffect(()=>(n.current=!1,()=>{n.current=!0,fe(()=>{n.current&&t()})}),[t])}var I=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(I||{});function kt(){let e=u.useRef(0);return Ce("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Ae(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Lt="div";var Oe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Oe||{});function Pt(e,t){let n=u.useRef(null),r=L(n,t),{initialFocus:o,containers:a,features:l=30,...i}=e;Z()||(l=1);let s=U(n);Ct({ownerDocument:s},!!(l&16));let f=Nt({ownerDocument:s,container:n,initialFocus:o},!!(l&2));Mt({ownerDocument:s,container:n,containers:a,previousActiveElement:f},!!(l&8));let c=kt(),d=w(x=>{let E=n.current;E&&(P=>P())(()=>{A(c.current,{[I.Forwards]:()=>{X(E,F.First,{skipElements:[x.relatedTarget]})},[I.Backwards]:()=>{X(E,F.Last,{skipElements:[x.relatedTarget]})}})})}),h=st(),g=u.useRef(!1),$={ref:r,onKeyDown(x){x.key=="Tab"&&(g.current=!0,h.requestAnimationFrame(()=>{g.current=!1}))},onBlur(x){let E=Ae(a);n.current instanceof HTMLElement&&E.add(n.current);let P=x.relatedTarget;P instanceof HTMLElement&&P.dataset.headlessuiFocusGuard!=="true"&&(He(E,P)||(g.current?X(n.current,A(c.current,{[I.Forwards]:()=>F.Next,[I.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:x.target}):x.target instanceof HTMLElement&&N(x.target)))}};return p.createElement(p.Fragment,null,!!(l&4)&&p.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:J.Focusable}),S({ourProps:$,theirProps:i,defaultTag:Lt,name:"FocusTrap"}),!!(l&4)&&p.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:J.Focusable}))}let Dt=T(Pt),H=Object.assign(Dt,{features:Oe});function Ft(e=!0){let t=u.useRef(D.slice());return me(([n],[r])=>{r===!0&&n===!1&&fe(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=D.slice())},[e,D,t]),w(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Ct({ownerDocument:e},t){let n=Ft(t);me(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&N(n())},[t]),Re(()=>{t&&N(n())})}function Nt({ownerDocument:e,container:t,initialFocus:n},r){let o=u.useRef(null),a=Se();return me(()=>{if(!r)return;let l=t.current;l&&fe(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){o.current=i;return}}else if(l.contains(i)){o.current=i;return}n!=null&&n.current?N(n.current):X(l,F.First)===Pe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function Mt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let a=Se();Me(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!a.current)return;let i=Ae(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let f=l.target;f&&f instanceof HTMLElement?He(i,f)?(r.current=f,N(f)):(l.preventDefault(),l.stopPropagation(),N(s)):N(r.current)},!0)}function He(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let je=u.createContext(!1);function Rt(){return u.useContext(je)}function ie(e){return p.createElement(je.Provider,{value:e.force},e.children)}function At(e){let t=Rt(),n=u.useContext(Ie),r=U(e),[o,a]=u.useState(()=>{if(!t&&n!==null||B.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),u.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),o}let Ot=u.Fragment;function Ht(e,t){let n=e,r=u.useRef(null),o=L(ut(c=>{r.current=c}),t),a=U(r),l=At(r),[i]=u.useState(()=>{var c;return B.isServer?null:(c=a==null?void 0:a.createElement("div"))!=null?c:null}),s=u.useContext(se),f=Z();return M(()=>{!l||!i||l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i))},[l,i]),M(()=>{if(i&&s)return s.register(i)},[s,i]),Re(()=>{var c;!l||!i||(i instanceof Node&&l.contains(i)&&l.removeChild(i),l.childNodes.length<=0&&((c=l.parentElement)==null||c.removeChild(l)))}),f?!l||!i?null:rt.createPortal(S({ourProps:{ref:o},theirProps:n,defaultTag:Ot,name:"Portal"}),i):null}let jt=u.Fragment,Ie=u.createContext(null);function It(e,t){let{target:n,...r}=e,o={ref:L(t)};return p.createElement(Ie.Provider,{value:n},S({ourProps:o,theirProps:r,defaultTag:jt,name:"Popover.Group"}))}let se=u.createContext(null);function Bt(){let e=u.useContext(se),t=u.useRef([]),n=w(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=w(a=>{let l=t.current.indexOf(a);l!==-1&&t.current.splice(l,1),e&&e.unregister(a)}),o=u.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,u.useMemo(()=>function({children:a}){return p.createElement(se.Provider,{value:o},a)},[o])]}let Ut=T(Ht),Wt=T(It),ue=Object.assign(Ut,{Group:Wt});function _t(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const zt=typeof Object.is=="function"?Object.is:_t,{useState:Yt,useEffect:Vt,useLayoutEffect:qt,useDebugValue:Gt}=oe;function Kt(e,t,n){const r=t(),[{inst:o},a]=Yt({inst:{value:r,getSnapshot:t}});return qt(()=>{o.value=r,o.getSnapshot=t,ne(o)&&a({inst:o})},[e,r,t]),Vt(()=>(ne(o)&&a({inst:o}),e(()=>{ne(o)&&a({inst:o})})),[e]),Gt(r),r}function ne(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!zt(n,r)}catch{return!0}}function Xt(e,t,n){return t()}const Jt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qt=!Jt,Zt=Qt?Xt:Kt,en="useSyncExternalStore"in oe?(e=>e.useSyncExternalStore)(oe):Zt;function tn(e){return en(e.subscribe,e.getSnapshot,e.getSnapshot)}function nn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...a){let l=t[o].call(n,...a);l&&(n=l,r.forEach(i=>i()))}}}function rn(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,a=e-o;n.style(r,"paddingRight",`${a}px`)}}}function on(){return Fe()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(a=>a()).some(a=>a.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=ke();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let a=(o=window.scrollY)!=null?o:window.pageYOffset,l=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let s=i.target.closest("a");if(!s)return;let{hash:f}=new URL(s.href),c=e.querySelector(f);c&&!r(c)&&(l=c)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let s=i.target;for(;s.parentElement&&r(s.parentElement);)s=s.parentElement;t.style(s,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let s=i.target;for(;s.parentElement&&s.dataset.headlessuiPortal!==""&&!(s.scrollHeight>s.clientHeight||s.scrollWidth>s.clientWidth);)s=s.parentElement;s.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()},{passive:!1}),t.add(()=>{var i;let s=(i=window.scrollY)!=null?i:window.pageYOffset;a!==s&&window.scrollTo(0,a),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}:{}}function ln(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function an(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=nn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:ke(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:an(n)},o=[on(),rn(),ln()];o.forEach(({before:a})=>a==null?void 0:a(r)),o.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function sn(e,t,n){let r=tn(C),o=e?r.get(e):void 0,a=o?o.count>0:!1;return M(()=>{if(!(!e||!t))return C.dispatch("PUSH",e,n),()=>C.dispatch("POP",e,n)},[t,e]),a}let re=new Map,j=new Map;function xe(e,t=!0){M(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function o(){var l;if(!r)return;let i=(l=j.get(r))!=null?l:1;if(i===1?j.delete(r):j.set(r,i-1),i!==1)return;let s=re.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,re.delete(r))}let a=(n=j.get(r))!=null?n:0;return j.set(r,a+1),a!==0||(re.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),o},[e,t])}function un({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=u.useRef((r=n==null?void 0:n.current)!=null?r:null),a=U(o),l=w(()=>{var i,s,f;let c=[];for(let d of e)d!==null&&(d instanceof HTMLElement?c.push(d):"current"in d&&d.current instanceof HTMLElement&&c.push(d.current));if(t!=null&&t.current)for(let d of t.current)c.push(d);for(let d of(i=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?i:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(o.current)||d.contains((f=(s=o.current)==null?void 0:s.getRootNode())==null?void 0:f.host)||c.some(h=>d.contains(h))||c.push(d));return c});return{resolveContainers:l,contains:w(i=>l().some(s=>s.contains(i))),mainTreeNodeRef:o,MainTreeNode:u.useMemo(()=>function(){return n!=null?null:p.createElement(ae,{features:J.Hidden,ref:o})},[o,n])}}let pe=u.createContext(()=>{});pe.displayName="StackContext";var ce=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ce||{});function cn(){return u.useContext(pe)}function dn({children:e,onUpdate:t,type:n,element:r,enabled:o}){let a=cn(),l=w((...i)=>{t==null||t(...i),a(...i)});return M(()=>{let i=o===void 0||o===!0;return i&&l(0,n,r),()=>{i&&l(1,n,r)}},[l,n,r,o]),p.createElement(pe.Provider,{value:l},e)}let Be=u.createContext(null);function Ue(){let e=u.useContext(Be);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ue),t}return e}function fn(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=w(a=>(t(l=>[...l,a]),()=>t(l=>{let i=l.slice(),s=i.indexOf(a);return s!==-1&&i.splice(s,1),i}))),o=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return p.createElement(Be.Provider,{value:o},n.children)},[t])]}let mn="p";function pn(e,t){let n=O(),{id:r=`headlessui-description-${n}`,...o}=e,a=Ue(),l=L(t);M(()=>a.register(r),[r,a.register]);let i={ref:l,...a.props,id:r};return S({ourProps:i,theirProps:o,slot:a.slot||{},defaultTag:mn,name:a.name||"Description"})}let gn=T(pn),vn=Object.assign(gn,{});var hn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(hn||{}),wn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(wn||{});let En={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Q=u.createContext(null);Q.displayName="DialogContext";function W(e){let t=u.useContext(Q);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}function yn(e,t,n=()=>[document.body]){sn(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function bn(e,t){return A(t.type,En,e,t)}let xn="div",$n=ye.RenderStrategy|ye.Static;function Tn(e,t){let n=O(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:a,initialFocus:l,role:i="dialog",__demoMode:s=!1,...f}=e,[c,d]=u.useState(0),h=u.useRef(!1);i=function(){return i==="dialog"||i==="alertdialog"?i:(h.current||(h.current=!0,console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let g=ct();o===void 0&&g!==null&&(o=(g&G.Open)===G.Open);let $=u.useRef(null),x=L($,t),E=U($),P=e.hasOwnProperty("open")||g!==null,ge=e.hasOwnProperty("onClose");if(!P&&!ge)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!P)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!ge)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let y=o?0:1,[_,We]=u.useReducer(bn,{titleId:null,descriptionId:null,panelRef:u.createRef()}),R=w(()=>a(!1)),ve=w(v=>We({type:0,id:v})),z=Z()?s?!1:y===0:!1,Y=c>1,he=u.useContext(Q)!==null,[_e,ze]=Bt(),Ye={get current(){var v;return(v=_.panelRef.current)!=null?v:$.current}},{resolveContainers:ee,mainTreeNodeRef:V,MainTreeNode:Ve}=un({portals:_e,defaultContainers:[Ye]}),qe=Y?"parent":"leaf",we=g!==null?(g&G.Closing)===G.Closing:!1,Ge=he||we?!1:z,Ke=u.useCallback(()=>{var v,k;return(k=Array.from((v=E==null?void 0:E.querySelectorAll("body > *"))!=null?v:[]).find(b=>b.id==="headlessui-portal-root"?!1:b.contains(V.current)&&b instanceof HTMLElement))!=null?k:null},[V]);xe(Ke,Ge);let Xe=Y?!0:z,Je=u.useCallback(()=>{var v,k;return(k=Array.from((v=E==null?void 0:E.querySelectorAll("[data-headlessui-portal]"))!=null?v:[]).find(b=>b.contains(V.current)&&b instanceof HTMLElement))!=null?k:null},[V]);xe(Je,Xe),yt(ee,R,!(!z||Y));let Qe=!(Y||y!==0);Me(E==null?void 0:E.defaultView,"keydown",v=>{Qe&&(v.defaultPrevented||v.key===Ne.Escape&&(v.preventDefault(),v.stopPropagation(),R()))}),yn(E,!(we||y!==0||he),ee),u.useEffect(()=>{if(y!==0||!$.current)return;let v=new ResizeObserver(k=>{for(let b of k){let q=b.target.getBoundingClientRect();q.x===0&&q.y===0&&q.width===0&&q.height===0&&R()}});return v.observe($.current),()=>v.disconnect()},[y,$,R]);let[Ze,et]=fn(),tt=u.useMemo(()=>[{dialogState:y,close:R,setTitleId:ve},_],[y,_,R,ve]),Ee=u.useMemo(()=>({open:y===0}),[y]),nt={ref:x,id:r,role:i,"aria-modal":y===0?!0:void 0,"aria-labelledby":_.titleId,"aria-describedby":Ze};return p.createElement(dn,{type:"Dialog",enabled:y===0,element:$,onUpdate:w((v,k)=>{k==="Dialog"&&A(v,{[ce.Add]:()=>d(b=>b+1),[ce.Remove]:()=>d(b=>b-1)})})},p.createElement(ie,{force:!0},p.createElement(ue,null,p.createElement(Q.Provider,{value:tt},p.createElement(ue.Group,{target:$},p.createElement(ie,{force:!1},p.createElement(et,{slot:Ee,name:"Dialog.Description"},p.createElement(H,{initialFocus:l,containers:ee,features:z?A(qe,{parent:H.features.RestoreFocus,leaf:H.features.All&~H.features.FocusLock}):H.features.None},p.createElement(ze,null,S({ourProps:nt,theirProps:f,slot:Ee,defaultTag:xn,features:$n,visible:y===0,name:"Dialog"}))))))))),p.createElement(Ve,null))}let Sn="div";function kn(e,t){let n=O(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:a,close:l}]=W("Dialog.Overlay"),i=L(t),s=w(c=>{if(c.target===c.currentTarget){if(Tt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),l()}}),f=u.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:o,slot:f,defaultTag:Sn,name:"Dialog.Overlay"})}let Ln="div";function Pn(e,t){let n=O(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:a},l]=W("Dialog.Backdrop"),i=L(t);u.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let s=u.useMemo(()=>({open:a===0}),[a]);return p.createElement(ie,{force:!0},p.createElement(ue,null,S({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:s,defaultTag:Ln,name:"Dialog.Backdrop"})))}let Dn="div";function Fn(e,t){let n=O(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:a},l]=W("Dialog.Panel"),i=L(t,l.panelRef),s=u.useMemo(()=>({open:a===0}),[a]),f=w(c=>{c.stopPropagation()});return S({ourProps:{ref:i,id:r,onClick:f},theirProps:o,slot:s,defaultTag:Dn,name:"Dialog.Panel"})}let Cn="h2";function Nn(e,t){let n=O(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:a,setTitleId:l}]=W("Dialog.Title"),i=L(t);u.useEffect(()=>(l(r),()=>l(null)),[r,l]);let s=u.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:r},theirProps:o,slot:s,defaultTag:Cn,name:"Dialog.Title"})}let Mn=T(Tn),Rn=T(Pn),An=T(Fn),On=T(kn),Hn=T(Nn),$e=Object.assign(Mn,{Backdrop:Rn,Panel:An,Overlay:On,Title:Hn,Description:vn});function Te({className:e="",disabled:t,children:n,...r}){return m.jsx("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function jn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const a=()=>{r&&o()},l={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return m.jsx(te,{show:t,as:u.Fragment,leave:"duration-200",children:m.jsxs($e,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[m.jsx(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:m.jsx("div",{className:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"})}),m.jsx(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:m.jsx($e.Panel,{className:`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${l}`,children:e})})]})})}function In({type:e="button",className:t="",disabled:n,children:r,...o}){return m.jsx("button",{...o,type:e,className:`inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Vn({className:e=""}){const[t,n]=u.useState(!1),r=u.useRef(),{data:o,setData:a,delete:l,processing:i,reset:s,errors:f}=ot({password:""}),c=()=>{n(!0)},d=g=>{g.preventDefault(),l(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>h(),onError:()=>r.current.focus(),onFinish:()=>s()})},h=()=>{n(!1),s()};return m.jsxs("section",{className:`space-y-6 ${e}`,children:[m.jsxs("header",{children:[m.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Hesabı Silin"}),m.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Hesabınız silindiğinde, tüm kaynakları ve verileri kalıcı olarak silinecektir. Önce Hesabınızı silerken lütfen saklamak istediğiniz tüm verileri veya bilgileri indirin."})]}),m.jsx(Te,{onClick:c,children:"Hesabı Sil"}),m.jsx(jn,{show:t,onClose:h,children:m.jsxs("form",{onSubmit:d,className:"p-6",children:[m.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Hesabınızı silmek istediğinizden emin misiniz?"}),m.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Hesabınız silindiğinde, tüm kaynakları ve verileri kalıcı olarak silinecektir. Lütfen Hesabınızı kalıcı olarak silmek istediğinizi onaylamak için şifrenizi girin."}),m.jsxs("div",{className:"mt-6",children:[m.jsx(it,{htmlFor:"password",value:"Password",className:"sr-only"}),m.jsx(lt,{id:"password",type:"password",name:"password",ref:r,value:o.password,onChange:g=>a("password",g.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Şifre"}),m.jsx(at,{message:f.password,className:"mt-2"})]}),m.jsxs("div",{className:"mt-6 flex justify-end",children:[m.jsx(In,{onClick:h,children:"Vazgeç"}),m.jsx(Te,{className:"ms-3",disabled:i,children:"Hesabı Sil"})]})]})})]})}export{Vn as default};
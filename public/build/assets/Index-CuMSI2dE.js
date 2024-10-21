import{c as Ye,r as h,P as Kt,U as Wt,I as zt,j as f,a as qt}from"./app-ByJu4dNU.js";import{C as Gt,b as Jt,c as Yt,e as Xt,R as Qt}from"./ripple.esm-DVOzkR0Z.js";import{C as Zt}from"./csstransition.esm-YXMguxKw.js";import{M as en}from"./index.esm-DlsrUWVr.js";import{P as tn}from"./index.esm-Bx9LTo6Y.js";import{F as te}from"./floatlabel.esm-3Vyzzy8W.js";import{I as ne}from"./inputtext.esm-B7bQ2xES.js";import{S as nn,B as rn}from"./badge.esm-DNyPdmSz.js";import{B as ke}from"./button.esm-NdAN6Zra.js";import{T as an}from"./toast.esm-B3eWfIZr.js";import"./tooltip.esm-Qbmp7RO6.js";import"./index.esm-B4IXFwYI.js";import"./index.esm-BZ__EFKP.js";import"./index.esm-_S9D5RbG.js";import"./index.esm-DJgHaFZm.js";import"./index.esm-DK5sDiZt.js";function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},G.apply(this,arguments)}function on(e){if(Array.isArray(e))return e}function sn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,r,i,o,s=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=i.call(n)).done)&&(s.push(a.value),s.length!==t);c=!0);}catch(l){u=!0,r=l}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function Oe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function cn(e,t){if(e){if(typeof e=="string")return Oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oe(e,t)}}function ln(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ne(e,t){return on(e)||sn(e,t)||cn(e,t)||ln()}var z=Gt.extend({defaultProps:{__TYPE:"Fieldset",id:null,legend:null,className:null,style:null,toggleable:null,collapsed:null,collapseIcon:null,transitionOptions:null,expandIcon:null,onExpand:null,onCollapse:null,onToggle:null,onClick:null,children:void 0},css:{classes:{root:function(t){var n=t.props;return Ye("p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable})},toggleableContent:"p-toggleable-content",togglericon:"p-fieldset-toggler",legendTitle:"p-fieldset-legend-text",legend:"p-fieldset-legend p-unselectable-text",content:"p-fieldset-content",transition:"p-toggleable-content"},styles:`
        @layer primereact {
            .p-fieldset-legend > a,
            .p-fieldset-legend > span {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .p-fieldset-toggleable .p-fieldset-legend a {
                cursor: pointer;
                user-select: none;
                overflow: hidden;
                position: relative;
                text-decoration: none;
            }
            
            .p-fieldset-legend-text {
                line-height: 1;
            }
        }
        `}}),q=h.forwardRef(function(e,t){var n=Jt(),a=h.useContext(Kt),r=z.getProps(e,a),i=h.useState(r.id),o=Ne(i,2),s=o[0],c=o[1],u=h.useState(r.collapsed),l=Ne(u,2),E=l[0],I=l[1],b=r.toggleable?r.onToggle?r.collapsed:E:!1,A=h.useRef(null),L=h.useRef(null),j=s+"_header",F=s+"_content",H=z.setMetaData({props:r,state:{id:s,collapsed:b}}),d=H.ptm,p=H.cx,v=H.isUnstyled;Yt(z.css.styles,v,{name:"fieldset"});var w=function(g){r.toggleable&&(b?Rt(g):Mt(g),r.onToggle&&r.onToggle({originalEvent:g,value:!b})),g.preventDefault()},Rt=function(g){r.onToggle||I(!1),r.onExpand&&r.onExpand(g)},Mt=function(g){r.onToggle||I(!0),r.onCollapse&&r.onCollapse(g)};Xt(function(){r.id||c(Wt())});var xt=function(g){(g.code==="Enter"||g.code==="NumpadEnter"||g.code==="Space")&&(w(g),g.preventDefault())},jt=function(){var g=n({className:p("content")},d("content")),O=n({ref:L,id:F,role:"region","aria-labelledby":j,className:p("toggleableContent")},d("toggleableContent")),V=n({classNames:p("transition"),timeout:{enter:1e3,exit:450},in:!b,unmountOnExit:!0,options:r.transitionOptions},d("transition"));return h.createElement(Zt,G({nodeRef:L},V),h.createElement("div",O,h.createElement("div",g,r.children)))},$t=function(){if(r.toggleable){var g=n({className:p("togglericon")},d("togglericon")),O=b?r.expandIcon||h.createElement(tn,g):r.collapseIcon||h.createElement(en,g),V=zt.getJSXIcon(O,g,{props:r});return V}return null},Lt=function(){var g=n({className:p("legendTitle")},d("legendTitle")),O=n({id:j,role:"button","aria-expanded":!b,"aria-controls":F,onKeyDown:xt,onClick:w,"aria-label":r.legend,tabIndex:0},d("toggler"));if(r.toggleable){var V=$t();return h.createElement("a",O,V,h.createElement("span",g,r.legend),h.createElement(Qt,null))}return h.createElement("span",G({},g,{id:j}),r.legend)},Ft=function(){var g=n({className:p("legend")},d("legend"));if(r.legend!=null||r.toggleable){var O=Lt();return h.createElement("legend",g,O)}};h.useImperativeHandle(t,function(){return{props:r,getElement:function(){return A.current},getContent:function(){return L.current}}});var Ht=n({id:s,ref:A,style:r.style,className:Ye(r.className,p("root")),onClick:r.onClick},z.getOtherProps(r),d("root")),Vt=Ft(),Ut=jt();return h.createElement("fieldset",Ht,Vt,Ut)});q.displayName="Fieldset";var Pe={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=function(e){const t=[];let n=0;for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&a+1<e.length&&(e.charCodeAt(a+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++a)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},un=function(e){const t=[];let n=0,a=0;for(;n<e.length;){const r=e[n++];if(r<128)t[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[a++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],s=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|s&63)-65536;t[a++]=String.fromCharCode(55296+(c>>10)),t[a++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[a++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Qe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,s=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,l=i>>2,E=(i&3)<<4|s>>4;let I=(s&15)<<2|u>>6,b=u&63;c||(b=64,o||(I=64)),a.push(n[l],n[E],n[I],n[b])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Xe(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):un(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],s=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const E=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||s==null||u==null||E==null)throw new dn;const I=i<<2|s>>4;if(a.push(I),u!==64){const b=s<<4&240|u>>2;if(a.push(b),E!==64){const A=u<<6&192|E;a.push(A)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class dn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fn=function(e){const t=Xe(e);return Qe.encodeByteArray(t,!0)},Ze=function(e){return fn(e).replace(/\./g,"")},pn=function(e){try{return Qe.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=()=>hn().__FIREBASE_DEFAULTS__,mn=()=>{if(typeof process>"u"||typeof Pe>"u")return;const e=Pe.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},bn=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&pn(e[1]);return t&&JSON.parse(t)},yn=()=>{try{return gn()||mn()||bn()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},et=()=>{var e;return(e=yn())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,a))}}}function tt(){try{return typeof indexedDB=="object"}catch{return!1}}function nt(){return new Promise((e,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function vn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="FirebaseError";class $ extends Error{constructor(t,n,a){super(n),this.code=t,this.customData=a,this.name=En,Object.setPrototypeOf(this,$.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,X.prototype.create)}}class X{constructor(t,n,a){this.service=t,this.serviceName=n,this.errors=a}create(t,...n){const a=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?In(i,a):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new $(r,s,a)}}function In(e,t){return e.replace(_n,(n,a)=>{const r=t[a];return r!=null?String(r):`<${a}?>`})}const _n=/\{\$([^}]+)}/g;function pe(e,t){if(e===t)return!0;const n=Object.keys(e),a=Object.keys(t);for(const r of n){if(!a.includes(r))return!1;const i=e[r],o=t[r];if(Be(i)&&Be(o)){if(!pe(i,o))return!1}else if(i!==o)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function Be(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e){return e&&e._delegate?e._delegate:e}class k{constructor(t,n,a){this.name=t,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const a=new wn;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&a.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(An(t))try{this.getOrInitializeService({instanceIdentifier:N})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});a.resolve(i)}catch{}}}}clearInstance(t=N){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=N){return this.instances.has(t)}getOptions(t=N){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[i,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(i);a===s&&o.resolve(r)}return r}onInit(t,n){var a;const r=this.normalizeInstanceIdentifier(n),i=(a=this.onInitCallbacks.get(r))!==null&&a!==void 0?a:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const a=this.onInitCallbacks.get(n);if(a)for(const r of a)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Tn(t),options:n}),this.instances.set(t,a),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=N){return this.component?this.component.multipleInstances?t:N:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tn(e){return e===N?void 0:e}function An(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Sn(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(m||(m={}));const Dn={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},kn=m.INFO,On={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},Nn=(e,t,...n)=>{if(t<e.logLevel)return;const a=new Date().toISOString(),r=On[t];if(r)console[r](`[${a}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pn{constructor(t){this.name=t,this._logLevel=kn,this._logHandler=Nn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in m))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Dn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...t),this._logHandler(this,m.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...t),this._logHandler(this,m.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,m.INFO,...t),this._logHandler(this,m.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,m.WARN,...t),this._logHandler(this,m.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...t),this._logHandler(this,m.ERROR,...t)}}const Bn=(e,t)=>t.some(n=>e instanceof n);let Re,Me;function Rn(){return Re||(Re=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mn(){return Me||(Me=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const at=new WeakMap,he=new WeakMap,it=new WeakMap,re=new WeakMap,ve=new WeakMap;function xn(e){const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(T(e.result)),r()},o=()=>{a(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&at.set(n,e)}).catch(()=>{}),ve.set(t,e),t}function jn(e){if(he.has(e))return;const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});he.set(e,t)}let ge={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return he.get(e);if(t==="objectStoreNames")return e.objectStoreNames||it.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function $n(e){ge=e(ge)}function Ln(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=e.call(ae(this),t,...n);return it.set(a,t.sort?t.sort():[t]),T(a)}:Mn().includes(e)?function(...t){return e.apply(ae(this),t),T(at.get(this))}:function(...t){return T(e.apply(ae(this),t))}}function Fn(e){return typeof e=="function"?Ln(e):(e instanceof IDBTransaction&&jn(e),Bn(e,Rn())?new Proxy(e,ge):e)}function T(e){if(e instanceof IDBRequest)return xn(e);if(re.has(e))return re.get(e);const t=Fn(e);return t!==e&&(re.set(e,t),ve.set(t,e)),t}const ae=e=>ve.get(e);function Q(e,t,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),s=T(o);return a&&o.addEventListener("upgradeneeded",c=>{a(T(o.result),c.oldVersion,c.newVersion,T(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),s.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),s}function ie(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",a=>t(a.oldVersion,a)),T(n).then(()=>{})}const Hn=["get","getKey","getAll","getAllKeys","count"],Vn=["put","add","delete","clear"],oe=new Map;function xe(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(oe.get(t))return oe.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=Vn.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(r||Hn.includes(n)))return;const i=async function(o,...s){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return a&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),r&&c.done]))[0]};return oe.set(t,i),i}$n(e=>({...e,get:(t,n,a)=>xe(t,n)||e.get(t,n,a),has:(t,n)=>!!xe(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kn(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function Kn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const me="@firebase/app",je="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=new Pn("@firebase/app"),Wn="@firebase/app-compat",zn="@firebase/analytics-compat",qn="@firebase/analytics",Gn="@firebase/app-check-compat",Jn="@firebase/app-check",Yn="@firebase/auth",Xn="@firebase/auth-compat",Qn="@firebase/database",Zn="@firebase/database-compat",er="@firebase/functions",tr="@firebase/functions-compat",nr="@firebase/installations",rr="@firebase/installations-compat",ar="@firebase/messaging",ir="@firebase/messaging-compat",or="@firebase/performance",sr="@firebase/performance-compat",cr="@firebase/remote-config",lr="@firebase/remote-config-compat",ur="@firebase/storage",dr="@firebase/storage-compat",fr="@firebase/firestore",pr="@firebase/vertexai-preview",hr="@firebase/firestore-compat",gr="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="[DEFAULT]",mr={[me]:"fire-core",[Wn]:"fire-core-compat",[qn]:"fire-analytics",[zn]:"fire-analytics-compat",[Jn]:"fire-app-check",[Gn]:"fire-app-check-compat",[Yn]:"fire-auth",[Xn]:"fire-auth-compat",[Qn]:"fire-rtdb",[Zn]:"fire-rtdb-compat",[er]:"fire-fn",[tr]:"fire-fn-compat",[nr]:"fire-iid",[rr]:"fire-iid-compat",[ar]:"fire-fcm",[ir]:"fire-fcm-compat",[or]:"fire-perf",[sr]:"fire-perf-compat",[cr]:"fire-rc",[lr]:"fire-rc-compat",[ur]:"fire-gcs",[dr]:"fire-gcs-compat",[fr]:"fire-fst",[hr]:"fire-fst-compat",[pr]:"fire-vertex","fire-js":"fire-js",[gr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=new Map,br=new Map,ye=new Map;function $e(e,t){try{e.container.addComponent(t)}catch(n){B.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function R(e){const t=e.name;if(ye.has(t))return B.debug(`There were multiple attempts to register component ${t}.`),!1;ye.set(t,e);for(const n of J.values())$e(n,e);for(const n of br.values())$e(n,e);return!0}function Ee(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},C=new X("app","Firebase",yr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,n,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new k("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw C.create("app-deleted",{appName:this._name})}}function ot(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const a=Object.assign({name:be,automaticDataCollectionEnabled:!1},t),r=a.name;if(typeof r!="string"||!r)throw C.create("bad-app-name",{appName:String(r)});if(n||(n=et()),!n)throw C.create("no-options");const i=J.get(r);if(i){if(pe(n,i.options)&&pe(a,i.config))return i;throw C.create("duplicate-app",{appName:r})}const o=new Cn(r);for(const c of ye.values())o.addComponent(c);const s=new wr(n,a,o);return J.set(r,s),s}function vr(e=be){const t=J.get(e);if(!t&&e===be&&et())return ot();if(!t)throw C.create("no-app",{appName:e});return t}function D(e,t,n){var a;let r=(a=mr[e])!==null&&a!==void 0?a:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const s=[`Unable to register library "${r}" with version "${t}":`];i&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),B.warn(s.join(" "));return}R(new k(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="firebase-heartbeat-database",Ir=1,U="firebase-heartbeat-store";let se=null;function st(){return se||(se=Q(Er,Ir,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(U)}catch(n){console.warn(n)}}}}).catch(e=>{throw C.create("idb-open",{originalErrorMessage:e.message})})),se}async function _r(e){try{const n=(await st()).transaction(U),a=await n.objectStore(U).get(ct(e));return await n.done,a}catch(t){if(t instanceof $)B.warn(t.message);else{const n=C.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});B.warn(n.message)}}}async function Le(e,t){try{const a=(await st()).transaction(U,"readwrite");await a.objectStore(U).put(t,ct(e)),await a.done}catch(n){if(n instanceof $)B.warn(n.message);else{const a=C.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});B.warn(a.message)}}}function ct(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=1024,Tr=30*24*60*60*1e3;class Ar{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dr(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fe();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=Tr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fe(),{heartbeatsToSend:a,unsentEntries:r}=Cr(this._heartbeatsCache.heartbeats),i=Ze(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fe(){return new Date().toISOString().substring(0,10)}function Cr(e,t=Sr){const n=[];let a=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),He(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),He(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class Dr{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tt()?nt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _r(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Le(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Le(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function He(e){return Ze(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e){R(new k("platform-logger",t=>new Un(t),"PRIVATE")),R(new k("heartbeat",t=>new Ar(t),"PRIVATE")),D(me,je,e),D(me,je,"esm2017"),D("fire-js","")}kr("");const lt="@firebase/installations",Ie="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=1e4,dt=`w:${Ie}`,ft="FIS_v2",Or="https://firebaseinstallations.googleapis.com/v1",Nr=60*60*1e3,Pr="installations",Br="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},M=new X(Pr,Br,Rr);function pt(e){return e instanceof $&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht({projectId:e}){return`${Or}/projects/${e}/installations`}function gt(e){return{token:e.token,requestStatus:2,expiresIn:xr(e.expiresIn),creationTime:Date.now()}}async function mt(e,t){const a=(await t.json()).error;return M.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function bt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Mr(e,{refreshToken:t}){const n=bt(e);return n.append("Authorization",jr(t)),n}async function yt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function xr(e){return Number(e.replace("s","000"))}function jr(e){return`${ft} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=ht(e),r=bt(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:ft,appId:e.appId,sdkVersion:dt},s={method:"POST",headers:r,body:JSON.stringify(o)},c=await yt(()=>fetch(a,s));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:gt(u.authToken)}}else throw await mt("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=/^[cdef][\w-]{21}$/,we="";function Hr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Vr(e);return Fr.test(n)?n:we}catch{return we}}function Vr(e){return Lr(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Map;function Et(e,t){const n=Z(e);It(n,t),Ur(n,t)}function It(e,t){const n=vt.get(e);if(n)for(const a of n)a(t)}function Ur(e,t){const n=Kr();n&&n.postMessage({key:e,fid:t}),Wr()}let P=null;function Kr(){return!P&&"BroadcastChannel"in self&&(P=new BroadcastChannel("[Firebase] FID Change"),P.onmessage=e=>{It(e.data.key,e.data.fid)}),P}function Wr(){vt.size===0&&P&&(P.close(),P=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="firebase-installations-database",qr=1,x="firebase-installations-store";let ce=null;function _e(){return ce||(ce=Q(zr,qr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(x)}}})),ce}async function Y(e,t){const n=Z(e),r=(await _e()).transaction(x,"readwrite"),i=r.objectStore(x),o=await i.get(n);return await i.put(t,n),await r.done,(!o||o.fid!==t.fid)&&Et(e,t.fid),t}async function _t(e){const t=Z(e),a=(await _e()).transaction(x,"readwrite");await a.objectStore(x).delete(t),await a.done}async function ee(e,t){const n=Z(e),r=(await _e()).transaction(x,"readwrite"),i=r.objectStore(x),o=await i.get(n),s=t(o);return s===void 0?await i.delete(n):await i.put(s,n),await r.done,s&&(!o||o.fid!==s.fid)&&Et(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(e){let t;const n=await ee(e.appConfig,a=>{const r=Gr(a),i=Jr(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===we?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Gr(e){const t=e||{fid:Hr(),registrationStatus:0};return St(t)}function Jr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(M.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=Yr(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Xr(e)}:{installationEntry:t}}async function Yr(e,t){try{const n=await $r(e,t);return Y(e.appConfig,n)}catch(n){throw pt(n)&&n.customData.serverCode===409?await _t(e.appConfig):await Y(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Xr(e){let t=await Ve(e.appConfig);for(;t.registrationStatus===1;)await wt(100),t=await Ve(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await Se(e);return a||n}return t}function Ve(e){return ee(e,t=>{if(!t)throw M.create("installation-not-found");return St(t)})}function St(e){return Qr(e)?{fid:e.fid,registrationStatus:0}:e}function Qr(e){return e.registrationStatus===1&&e.registrationTime+ut<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr({appConfig:e,heartbeatServiceProvider:t},n){const a=ea(e,n),r=Mr(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:dt,appId:e.appId}},s={method:"POST",headers:r,body:JSON.stringify(o)},c=await yt(()=>fetch(a,s));if(c.ok){const u=await c.json();return gt(u)}else throw await mt("Generate Auth Token",c)}function ea(e,{fid:t}){return`${ht(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(e,t=!1){let n;const a=await ee(e.appConfig,i=>{if(!Tt(i))throw M.create("not-registered");const o=i.authToken;if(!t&&ra(o))return i;if(o.requestStatus===1)return n=ta(e,t),i;{if(!navigator.onLine)throw M.create("app-offline");const s=ia(i);return n=na(e,s),s}});return n?await n:a.authToken}async function ta(e,t){let n=await Ue(e.appConfig);for(;n.authToken.requestStatus===1;)await wt(100),n=await Ue(e.appConfig);const a=n.authToken;return a.requestStatus===0?Te(e,t):a}function Ue(e){return ee(e,t=>{if(!Tt(t))throw M.create("not-registered");const n=t.authToken;return oa(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function na(e,t){try{const n=await Zr(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await Y(e.appConfig,a),n}catch(n){if(pt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _t(e.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Y(e.appConfig,a)}throw n}}function Tt(e){return e!==void 0&&e.registrationStatus===2}function ra(e){return e.requestStatus===2&&!aa(e)}function aa(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Nr}function ia(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function oa(e){return e.requestStatus===1&&e.requestTime+ut<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(e){const t=e,{installationEntry:n,registrationPromise:a}=await Se(t);return a?a.catch(console.error):Te(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(e,t=!1){const n=e;return await la(n),(await Te(n,t)).token}async function la(e){const{registrationPromise:t}=await Se(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(e){if(!e||!e.options)throw le("App Configuration");if(!e.name)throw le("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw le(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function le(e){return M.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="installations",da="installations-internal",fa=e=>{const t=e.getProvider("app").getImmediate(),n=ua(t),a=Ee(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},pa=e=>{const t=e.getProvider("app").getImmediate(),n=Ee(t,At).getImmediate();return{getId:()=>sa(n),getToken:r=>ca(n,r)}};function ha(){R(new k(At,fa,"PUBLIC")),R(new k(da,pa,"PRIVATE"))}ha();D(lt,Ie);D(lt,Ie,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="/firebase-messaging-sw.js",ma="/firebase-cloud-messaging-push-scope",Ct="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ba="https://fcmregistrations.googleapis.com/v1",Dt="google.c.a.c_id",ya="google.c.a.c_l",wa="google.c.a.ts",va="google.c.a.e";var Ke;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Ke||(Ke={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var K;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(K||(K={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ea(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),a=atob(n),r=new Uint8Array(a.length);for(let i=0;i<a.length;++i)r[i]=a.charCodeAt(i);return r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="fcm_token_details_db",Ia=5,We="fcm_token_object_Store";async function _a(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(ue))return null;let t=null;return(await Q(ue,Ia,{upgrade:async(a,r,i,o)=>{var s;if(r<2||!a.objectStoreNames.contains(We))return;const c=o.objectStore(We),u=await c.index("fcmSenderId").get(e);if(await c.clear(),!!u){if(r===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(s=l.createTime)!==null&&s!==void 0?s:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:S(l.vapidKey)}}}else if(r===3){const l=u;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:S(l.auth),p256dh:S(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:S(l.vapidKey)}}}else if(r===4){const l=u;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:S(l.auth),p256dh:S(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:S(l.vapidKey)}}}}}})).close(),await ie(ue),await ie("fcm_vapid_details_db"),await ie("undefined"),Sa(t)?t:null}function Sa(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="firebase-messaging-database",Aa=1,W="firebase-messaging-store";let de=null;function kt(){return de||(de=Q(Ta,Aa,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(W)}}})),de}async function Ca(e){const t=Ot(e),a=await(await kt()).transaction(W).objectStore(W).get(t);if(a)return a;{const r=await _a(e.appConfig.senderId);if(r)return await Ae(e,r),r}}async function Ae(e,t){const n=Ot(e),r=(await kt()).transaction(W,"readwrite");return await r.objectStore(W).put(t,n),await r.done,t}function Ot({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},y=new X("messaging","Messaging",Da);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(e,t){const n=await De(e),a=Nt(t),r={method:"POST",headers:n,body:JSON.stringify(a)};let i;try{i=await(await fetch(Ce(e.appConfig),r)).json()}catch(o){throw y.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw y.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw y.create("token-subscribe-no-token");return i.token}async function Oa(e,t){const n=await De(e),a=Nt(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(a)};let i;try{i=await(await fetch(`${Ce(e.appConfig)}/${t.token}`,r)).json()}catch(o){throw y.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw y.create("token-update-failed",{errorInfo:o})}if(!i.token)throw y.create("token-update-no-token");return i.token}async function Na(e,t){const a={method:"DELETE",headers:await De(e)};try{const i=await(await fetch(`${Ce(e.appConfig)}/${t}`,a)).json();if(i.error){const o=i.error.message;throw y.create("token-unsubscribe-failed",{errorInfo:o})}}catch(r){throw y.create("token-unsubscribe-failed",{errorInfo:r==null?void 0:r.toString()})}}function Ce({projectId:e}){return`${ba}/projects/${e}/registrations`}async function De({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Nt({p256dh:e,auth:t,endpoint:n,vapidKey:a}){const r={web:{endpoint:n,auth:t,p256dh:e}};return a!==Ct&&(r.web.applicationPubKey=a),r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=7*24*60*60*1e3;async function Ba(e){const t=await Ma(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:S(t.getKey("auth")),p256dh:S(t.getKey("p256dh"))},a=await Ca(e.firebaseDependencies);if(a){if(xa(a.subscriptionOptions,n))return Date.now()>=a.createTime+Pa?Ra(e,{token:a.token,createTime:Date.now(),subscriptionOptions:n}):a.token;try{await Na(e.firebaseDependencies,a.token)}catch(r){console.warn(r)}return ze(e.firebaseDependencies,n)}else return ze(e.firebaseDependencies,n)}async function Ra(e,t){try{const n=await Oa(e.firebaseDependencies,t),a=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Ae(e.firebaseDependencies,a),n}catch(n){throw n}}async function ze(e,t){const a={token:await ka(e,t),createTime:Date.now(),subscriptionOptions:t};return await Ae(e,a),a.token}async function Ma(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ea(t)})}function xa(e,t){const n=t.vapidKey===e.vapidKey,a=t.endpoint===e.endpoint,r=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&a&&r&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return ja(t,e),$a(t,e),La(t,e),t}function ja(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const a=t.notification.body;a&&(e.notification.body=a);const r=t.notification.image;r&&(e.notification.image=r);const i=t.notification.icon;i&&(e.notification.icon=i)}function $a(e,t){t.data&&(e.data=t.data)}function La(e,t){var n,a,r,i,o;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const s=(r=(a=t.fcmOptions)===null||a===void 0?void 0:a.link)!==null&&r!==void 0?r:(i=t.notification)===null||i===void 0?void 0:i.click_action;s&&(e.fcmOptions.link=s);const c=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(e){return typeof e=="object"&&!!e&&Dt in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Pt("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Pt(e,t){const n=[];for(let a=0;a<e.length;a++)n.push(e.charAt(a)),a<t.length&&n.push(t.charAt(a));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(e){if(!e||!e.options)throw fe("App Configuration Object");if(!e.name)throw fe("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const a of t)if(!n[a])throw fe(a);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function fe(e){return y.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,n,a){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=Ha(t);this.firebaseDependencies={app:t,appConfig:r,installations:n,analyticsProvider:a}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(e){try{e.swRegistration=await navigator.serviceWorker.register(ga,{scope:ma}),e.swRegistration.update().catch(()=>{})}catch(t){throw y.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ka(e,t){if(!t&&!e.swRegistration&&await Ua(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw y.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Ct)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(e,t){if(!navigator)throw y.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw y.create("permission-blocked");return await Wa(e,t==null?void 0:t.vapidKey),await Ka(e,t==null?void 0:t.serviceWorkerRegistration),Ba(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function za(e,t,n){const a=qa(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(a,{message_id:n[Dt],message_name:n[ya],message_time:n[wa],message_device_time:Math.floor(Date.now()/1e3)})}function qa(e){switch(e){case K.NOTIFICATION_CLICKED:return"notification_open";case K.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===K.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(qe(n)):e.onMessageHandler.next(qe(n)));const a=n.data;Fa(a)&&a[va]==="1"&&await za(e,n.messageType,a)}const Ge="@firebase/messaging",Je="0.12.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=e=>{const t=new Va(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Ga(t,n)),t},Ya=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:a=>Bt(t,a)}};function Xa(){R(new k("messaging",Ja,"PUBLIC")),R(new k("messaging-internal",Ya,"PRIVATE")),D(Ge,Je),D(Ge,Je,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(){try{await nt()}catch{return!1}return typeof window<"u"&&tt()&&vn()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(e=vr()){return Qa().then(t=>{if(!t)throw y.create("unsupported-browser")},t=>{throw y.create("indexed-db-unsupported")}),Ee(rt(e),"messaging").getImmediate()}async function ei(e,t){return e=rt(e),Bt(e,t)}Xa();var ti="firebase",ni="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */D(ti,ni,"app");const ri={apiKey:"AIzaSyDngyK-w3S7yGmtQa4EXWLaLfCJEqpUyVU",authDomain:"olex-6bc47.firebaseapp.com",projectId:"olex-6bc47",storageBucket:"olex-6bc47.appspot.com",messagingSenderId:"852045853347",appId:"1:852045853347:web:ce59c95ea0d90bd10a4516",measurementId:"G-YSVP4EMESL"},ai=ot(ri),ii=Za(ai);var oi={VITE_APP_NAME:"OLEX Films®",VITE_APP_API_KEY:"AIzaSyDngyK-w3S7yGmtQa4EXWLaLfCJEqpUyVU",VITE_APP_AUTH_DOMAIN:"olex-6bc47.firebaseapp.com",VITE_APP_PROJECT_ID:"olex-6bc47",VITE_APP_STORAGE_BUCKET:"olex-6bc47.appspot.com",VITE_APP_MESSAGING_SENDER_ID:"852045853347",VITE_APP_APP_ID:"1:852045853347:web:ce59c95ea0d90bd10a4516",VITE_APP_MEASUREMENT_ID:"G-YSVP4EMESL",VITE_APP_VAPID_KEY:"BGU32plTKOAW6U4R5PhsBWEPr54Q34qNVfd7F9NAIoq7twYSo4GbkuyJvkNwKcR108nHz2HgF_Vqhud7HqPCgoI",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const _i=({customerB:e,csrf_token:t,hash:n})=>{const[a,r]=h.useState(!1),[i,o]=h.useState(e),s=h.useRef(null),[c,u]=h.useState(i.player_id!==null),{VITE_APP_VAPID_KEY:l}=oi,[E,I]=h.useState(null);h.useEffect(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/messaging-sw.js").then(function(d){console.log("Service Worker Kaydı Başarılı:",d),I(d)}).catch(function(d){console.log("Service Worker kaydı başarısız:",d)})},[]);const[b,A]=h.useState(Object.entries(JSON.parse(i.notification_settings)).map(([d,p])=>p?d:null).filter(d=>d!==null)),[L,j]=h.useState(!1);h.useEffect(()=>{let d=Object.entries(JSON.parse(i.notification_settings)).map(([p,v])=>v?p:null).filter(p=>p!==null);d.sort(),b.sort(),JSON.stringify(d)!==JSON.stringify(b)?j(!0):j(!1)},[b]);async function F(){const d=await Notification.requestPermission();if(d==="granted"){const p=await ei(ii,{vapidKey:l,serviceWorkerRegistration:E});r(!0);let v=new FormData;v.append("player_id",p),v.append("action","token"),fetch(route("customer.notifyUpdate",n),{method:"POST",headers:{"X-CSRF-TOKEN":t},body:v}).then(w=>w.json()).then(w=>{w.status?(s.current.show({severity:"success",summary:"Başarılı",detail:w.message,life:3e3}),u(!0),o(w.customer)):s.current.show({severity:"error",summary:"Hata",detail:w.message})}).catch(w=>{s.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{r(!1)})}else d==="denied"&&(s.current.show({severity:"error",summary:"Hata",detail:"Bildirimler Engellendi",life:3e3}),A(b.filter(p=>p!=="push")))}const H=()=>{["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)?"Notification"in window?(r(!0),F().then(d=>console.log())):s.current.show({severity:"info",summary:"Hata",detail:"Bildirimleri almak için tarayıcınızın URL bölümünde bulunan paylaş butonunu kullanarak uygulamamızı ana ekrana ekleyin. Bu sayede, uygulama yüklemeden hizmetlerinizi anında takip edebilirsiniz.",life:1e4}):(r(!0),F().then(d=>console.log()))};return f.jsxs("div",{className:"p-4",children:[f.jsx(qt,{title:"Müşteri Bilgileri"}),f.jsx(an,{ref:s}),f.jsx("div",{children:f.jsx("img",{className:"mx-auto",src:"/uploads/olex-logo-yatay.svg",alt:"OLEX® Films"})}),f.jsx(q,{legend:"İletişim Bilgileri",className:"mt-4",toggleable:!0,children:f.jsxs("div",{className:"mt-4 gap-y-8 grid",children:[f.jsxs(te,{children:[f.jsx(ne,{id:"username",className:"w-full",value:i.name,readOnly:!0}),f.jsx("label",{htmlFor:"username",children:"Müşteri Adı"})]}),f.jsxs(te,{children:[f.jsx(ne,{id:"email",className:"w-full",value:i.email,readOnly:!0}),f.jsx("label",{htmlFor:"email",children:"Müşteri Mail Adresi"})]}),f.jsxs(te,{children:[f.jsx(ne,{id:"username",className:"w-full",value:i.phone,readOnly:!0}),f.jsx("label",{htmlFor:"username",children:"Müşteri Telefon Numarası"})]})]})}),f.jsx(q,{legend:"İletişim Tercihleri",className:"mt-4",toggleable:!0,children:f.jsxs("div",{className:"gap-y-8 grid",children:[f.jsx(nn,{multiple:!0,value:b,onChange:d=>A(d.value),itemTemplate:d=>{let p=b&&b.includes(d.value);return f.jsx("div",{className:"w-full text-center",children:f.jsx("i",{className:d.icon+" p-overlay-badge",style:{fontSize:"1.5rem"},children:p&&f.jsx(rn,{severity:"success",value:f.jsx("i",{className:"pi pi-check"}),style:{fontSize:"1px"}})})})},optionLabel:"value",options:[{icon:"pi pi-envelope",value:"email"},{icon:"pi pi-phone",value:"sms"},{icon:"pi pi-bell",value:"push"}]}),L&&f.jsx("div",{children:f.jsx(ke,{label:"Tercihleri Kaydet",icon:"pi pi-save",onClick:()=>{let d=new FormData;d.append("settings",JSON.stringify(b)),d.append("action","settings"),fetch(route("customer.notifyUpdate",n),{method:"POST",headers:{"X-CSRF-TOKEN":t},body:d}).then(p=>p.json()).then(p=>{p.status?(s.current.show({severity:"success",summary:"Başarılı",detail:p.message,life:3e3}),A(Object.entries(JSON.parse(p.customer.notification_settings)).map(([v,w])=>w?v:null).filter(v=>v!==null)),o(p.customer)):s.current.show({severity:"error",summary:"Hata",detail:p.message})}).catch(p=>{s.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})})},severity:"success"})})]})}),b&&b.includes("push")&&f.jsx(q,{legend:"Mobil Bildirim Ayarları",className:"mt-4",toggleable:!0,children:f.jsxs("div",{className:"gap-y-8 grid",children:[c===!1&&f.jsx("div",{children:f.jsx(ke,{label:"Tarayıcı Bildirimlerini Aç",loading:a,onClick:H,icon:"pi pi-bell",className:"p-button-success"})}),f.jsx("p",{children:c?"Tarayıcı Bildirimleriniz Açık Durumda":"Tarayıcı Bildirimleri Kapalı Durumda"})]})})]})};export{_i as default};

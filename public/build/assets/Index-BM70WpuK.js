import{r as g,j as c,S as Ct}from"./app-D0mPTlLT.js";import{B as _e}from"./button.esm-NYPGq0YV.js";import{T as kt}from"./toast.esm-DCADLpGo.js";import{C as Nt}from"./CarBody-BLr0YXw8.js";import{O as xt}from"./overlaypanel.esm-BHM7k7Nl.js";import{m as D}from"./motion-Cy9_qeAM.js";import"./ripple.esm-Dp2KI1ix.js";import"./index.esm-CGywSAff.js";import"./tooltip.esm-BL5Tc1BM.js";import"./csstransition.esm-DL5I2jB8.js";import"./index.esm-DZqha3X7.js";import"./index.esm-UdRK3S8I.js";import"./index.esm-DGB2Ro_U.js";import"./index.esm-D1lWgiY_.js";import"./TransitionGroup-B5Qww4eO.js";import"./index.esm-4KGOykdC.js";import"./index.esm-3kKdjh-j.js";import"./index.esm-FRiiXSZe.js";import"./index.esm-CWH6nbN7.js";import"./scrollpanel.esm-BNivamdH.js";import"./overlayservice.esm-DhOLZI92.js";var Ie={};/**
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
 */const He=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ot=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],s=e[n++],o=e[n++],l=((i&7)<<18|(a&63)<<12|(s&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63)}}return t.join("")},Ve={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],s=i+1<e.length,o=s?e[i+1]:0,l=i+2<e.length,d=l?e[i+2]:0,u=a>>2,T=(a&3)<<4|o>>4;let B=(o&15)<<2|d>>6,P=d&63;l||(P=64,s||(B=64)),r.push(n[u],n[T],n[B],n[P])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(He(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ot(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const d=i<e.length?n[e.charAt(i)]:64;++i;const T=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||o==null||d==null||T==null)throw new Bt;const B=a<<2|o>>4;if(r.push(B),d!==64){const P=o<<4&240|d>>2;if(r.push(P),T!==64){const z=d<<6&192|T;r.push(z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Bt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pt=function(e){const t=He(e);return Ve.encodeByteArray(t,!0)},Ue=function(e){return Pt(e).replace(/\./g,"")},Rt=function(e){try{return Ve.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Mt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jt=()=>Mt().__FIREBASE_DEFAULTS__,$t=()=>{if(typeof process>"u"||typeof Ie>"u")return;const e=Ie.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Lt=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Rt(e[1]);return t&&JSON.parse(t)},Ft=()=>{try{return jt()||$t()||Lt()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ke=()=>{var e;return(e=Ft())===null||e===void 0?void 0:e.config};/**
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
 */class Ht{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function We(){try{return typeof indexedDB=="object"}catch{return!1}}function ze(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}function Vt(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ut="FirebaseError";class R extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ut,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],s=a?Kt(a,r):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new R(i,o,r)}}function Kt(e,t){return e.replace(Wt,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Wt=/\{\$([^}]+)}/g;function ie(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],s=t[i];if(Se(a)&&Se(s)){if(!ie(a,s))return!1}else if(a!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Se(e){return e!==null&&typeof e=="object"}/**
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
 */function qe(e){return e&&e._delegate?e._delegate:e}class A{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const C="[DEFAULT]";/**
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
 */class zt{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ht;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Gt(t))try{this.getOrInitializeService({instanceIdentifier:C})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=C){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=C){return this.instances.has(t)}getOptions(t=C){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(a);r===o&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const s=this.instances.get(i);return s&&t(s,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qt(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=C){return this.component?this.component.multipleInstances?t:C:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qt(e){return e===C?void 0:e}function Gt(e){return e.instantiationMode==="EAGER"}/**
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
 */class Jt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new zt(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var h;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(h||(h={}));const Yt={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},Xt=h.INFO,Qt={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},Zt=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Qt[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class en{constructor(t){this.name=t,this._logLevel=Xt,this._logHandler=Zt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in h))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...t),this._logHandler(this,h.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...t),this._logHandler(this,h.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,h.INFO,...t),this._logHandler(this,h.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,h.WARN,...t),this._logHandler(this,h.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...t),this._logHandler(this,h.ERROR,...t)}}const tn=(e,t)=>t.some(n=>e instanceof n);let Ae,Te;function nn(){return Ae||(Ae=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rn(){return Te||(Te=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ge=new WeakMap,ae=new WeakMap,Je=new WeakMap,G=new WeakMap,ue=new WeakMap;function an(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{n(v(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Ge.set(n,e)}).catch(()=>{}),ue.set(t,e),t}function sn(e){if(ae.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});ae.set(e,t)}let se={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ae.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Je.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return v(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function on(e){se=e(se)}function cn(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(J(this),t,...n);return Je.set(r,t.sort?t.sort():[t]),v(r)}:rn().includes(e)?function(...t){return e.apply(J(this),t),v(Ge.get(this))}:function(...t){return v(e.apply(J(this),t))}}function ln(e){return typeof e=="function"?cn(e):(e instanceof IDBTransaction&&sn(e),tn(e,nn())?new Proxy(e,se):e)}function v(e){if(e instanceof IDBRequest)return an(e);if(G.has(e))return G.get(e);const t=ln(e);return t!==e&&(G.set(e,t),ue.set(t,e)),t}const J=e=>ue.get(e);function U(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const s=indexedDB.open(e,t),o=v(s);return r&&s.addEventListener("upgradeneeded",l=>{r(v(s.result),l.oldVersion,l.newVersion,v(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),o}function Y(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),v(n).then(()=>{})}const dn=["get","getKey","getAll","getAllKeys","count"],un=["put","add","delete","clear"],X=new Map;function De(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(X.get(t))return X.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=un.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dn.includes(n)))return;const a=async function(s,...o){const l=this.transaction(s,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(o.shift())),(await Promise.all([d[n](...o),i&&l.done]))[0]};return X.set(t,a),a}on(e=>({...e,get:(t,n,r)=>De(t,n)||e.get(t,n,r),has:(t,n)=>!!De(t,n)||e.has(t,n)}));/**
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
 */class fn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const oe="@firebase/app",Ce="0.10.13";/**
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
 */const _=new en("@firebase/app"),pn="@firebase/app-compat",mn="@firebase/analytics-compat",gn="@firebase/analytics",bn="@firebase/app-check-compat",yn="@firebase/app-check",wn="@firebase/auth",En="@firebase/auth-compat",vn="@firebase/database",_n="@firebase/data-connect",In="@firebase/database-compat",Sn="@firebase/functions",An="@firebase/functions-compat",Tn="@firebase/installations",Dn="@firebase/installations-compat",Cn="@firebase/messaging",kn="@firebase/messaging-compat",Nn="@firebase/performance",xn="@firebase/performance-compat",On="@firebase/remote-config",Bn="@firebase/remote-config-compat",Pn="@firebase/storage",Rn="@firebase/storage-compat",Mn="@firebase/firestore",jn="@firebase/vertexai-preview",$n="@firebase/firestore-compat",Ln="firebase";/**
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
 */const ce="[DEFAULT]",Fn={[oe]:"fire-core",[pn]:"fire-core-compat",[gn]:"fire-analytics",[mn]:"fire-analytics-compat",[yn]:"fire-app-check",[bn]:"fire-app-check-compat",[wn]:"fire-auth",[En]:"fire-auth-compat",[vn]:"fire-rtdb",[_n]:"fire-data-connect",[In]:"fire-rtdb-compat",[Sn]:"fire-fn",[An]:"fire-fn-compat",[Tn]:"fire-iid",[Dn]:"fire-iid-compat",[Cn]:"fire-fcm",[kn]:"fire-fcm-compat",[Nn]:"fire-perf",[xn]:"fire-perf-compat",[On]:"fire-rc",[Bn]:"fire-rc-compat",[Pn]:"fire-gcs",[Rn]:"fire-gcs-compat",[Mn]:"fire-fst",[$n]:"fire-fst-compat",[jn]:"fire-vertex","fire-js":"fire-js",[Ln]:"fire-js-all"};/**
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
 */const F=new Map,Hn=new Map,le=new Map;function ke(e,t){try{e.container.addComponent(t)}catch(n){_.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function N(e){const t=e.name;if(le.has(t))return _.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of F.values())ke(n,e);for(const n of Hn.values())ke(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Vn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},I=new V("app","Firebase",Vn);/**
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
 */class Un{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new A("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw I.create("app-deleted",{appName:this._name})}}function Ye(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ce,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw I.create("bad-app-name",{appName:String(i)});if(n||(n=Ke()),!n)throw I.create("no-options");const a=F.get(i);if(a){if(ie(n,a.options)&&ie(r,a.config))return a;throw I.create("duplicate-app",{appName:i})}const s=new Jt(i);for(const l of le.values())s.addComponent(l);const o=new Un(n,r,s);return F.set(i,o),o}function Kn(e=ce){const t=F.get(e);if(!t&&e===ce&&Ke())return Ye();if(!t)throw I.create("no-app",{appName:e});return t}function S(e,t,n){var r;let i=(r=Fn[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const o=[`Unable to register library "${i}" with version "${t}":`];a&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_.warn(o.join(" "));return}N(new A(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Wn="firebase-heartbeat-database",zn=1,M="firebase-heartbeat-store";let Q=null;function Xe(){return Q||(Q=U(Wn,zn,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(M)}catch(n){console.warn(n)}}}}).catch(e=>{throw I.create("idb-open",{originalErrorMessage:e.message})})),Q}async function qn(e){try{const n=(await Xe()).transaction(M),r=await n.objectStore(M).get(Qe(e));return await n.done,r}catch(t){if(t instanceof R)_.warn(t.message);else{const n=I.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_.warn(n.message)}}}async function Ne(e,t){try{const r=(await Xe()).transaction(M,"readwrite");await r.objectStore(M).put(t,Qe(e)),await r.done}catch(n){if(n instanceof R)_.warn(n.message);else{const r=I.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_.warn(r.message)}}}function Qe(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Gn=1024,Jn=30*24*60*60*1e3;class Yn{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=xe();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(s=>s.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=Jn}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xe(),{heartbeatsToSend:r,unsentEntries:i}=Xn(this._heartbeatsCache.heartbeats),a=Ue(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return _.warn(n),""}}}function xe(){return new Date().toISOString().substring(0,10)}function Xn(e,t=Gn){const n=[];let r=e.slice();for(const i of e){const a=n.find(s=>s.agent===i.agent);if(a){if(a.dates.push(i.date),Oe(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Oe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return We()?ze().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qn(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ne(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ne(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Oe(e){return Ue(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Zn(e){N(new A("platform-logger",t=>new fn(t),"PRIVATE")),N(new A("heartbeat",t=>new Yn(t),"PRIVATE")),S(oe,Ce,e),S(oe,Ce,"esm2017"),S("fire-js","")}Zn("");const Ze="@firebase/installations",he="0.6.9";/**
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
 */const et=1e4,tt=`w:${he}`,nt="FIS_v2",er="https://firebaseinstallations.googleapis.com/v1",tr=60*60*1e3,nr="installations",rr="Installations";/**
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
 */const ir={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},x=new V(nr,rr,ir);function rt(e){return e instanceof R&&e.code.includes("request-failed")}/**
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
 */function it({projectId:e}){return`${er}/projects/${e}/installations`}function at(e){return{token:e.token,requestStatus:2,expiresIn:sr(e.expiresIn),creationTime:Date.now()}}async function st(e,t){const r=(await t.json()).error;return x.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ot({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ar(e,{refreshToken:t}){const n=ot(e);return n.append("Authorization",or(t)),n}async function ct(e){const t=await e();return t.status>=500&&t.status<600?e():t}function sr(e){return Number(e.replace("s","000"))}function or(e){return`${nt} ${e}`}/**
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
 */async function cr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=it(e),i=ot(e),a=t.getImmediate({optional:!0});if(a){const d=await a.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:nt,appId:e.appId,sdkVersion:tt},o={method:"POST",headers:i,body:JSON.stringify(s)},l=await ct(()=>fetch(r,o));if(l.ok){const d=await l.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:at(d.authToken)}}else throw await st("Create Installation",l)}/**
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
 */function lt(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function lr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const dr=/^[cdef][\w-]{21}$/,de="";function ur(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=fr(e);return dr.test(n)?n:de}catch{return de}}function fr(e){return lr(e).substr(0,22)}/**
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
 */function K(e){return`${e.appName}!${e.appId}`}/**
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
 */const dt=new Map;function ut(e,t){const n=K(e);ft(n,t),hr(n,t)}function ft(e,t){const n=dt.get(e);if(n)for(const r of n)r(t)}function hr(e,t){const n=pr();n&&n.postMessage({key:e,fid:t}),mr()}let k=null;function pr(){return!k&&"BroadcastChannel"in self&&(k=new BroadcastChannel("[Firebase] FID Change"),k.onmessage=e=>{ft(e.data.key,e.data.fid)}),k}function mr(){dt.size===0&&k&&(k.close(),k=null)}/**
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
 */const gr="firebase-installations-database",br=1,O="firebase-installations-store";let Z=null;function pe(){return Z||(Z=U(gr,br,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(O)}}})),Z}async function H(e,t){const n=K(e),i=(await pe()).transaction(O,"readwrite"),a=i.objectStore(O),s=await a.get(n);return await a.put(t,n),await i.done,(!s||s.fid!==t.fid)&&ut(e,t.fid),t}async function ht(e){const t=K(e),r=(await pe()).transaction(O,"readwrite");await r.objectStore(O).delete(t),await r.done}async function W(e,t){const n=K(e),i=(await pe()).transaction(O,"readwrite"),a=i.objectStore(O),s=await a.get(n),o=t(s);return o===void 0?await a.delete(n):await a.put(o,n),await i.done,o&&(!s||s.fid!==o.fid)&&ut(e,o.fid),o}/**
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
 */async function me(e){let t;const n=await W(e.appConfig,r=>{const i=yr(r),a=wr(e,i);return t=a.registrationPromise,a.installationEntry});return n.fid===de?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function yr(e){const t=e||{fid:ur(),registrationStatus:0};return pt(t)}function wr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(x.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Er(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:vr(e)}:{installationEntry:t}}async function Er(e,t){try{const n=await cr(e,t);return H(e.appConfig,n)}catch(n){throw rt(n)&&n.customData.serverCode===409?await ht(e.appConfig):await H(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function vr(e){let t=await Be(e.appConfig);for(;t.registrationStatus===1;)await lt(100),t=await Be(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await me(e);return r||n}return t}function Be(e){return W(e,t=>{if(!t)throw x.create("installation-not-found");return pt(t)})}function pt(e){return _r(e)?{fid:e.fid,registrationStatus:0}:e}function _r(e){return e.registrationStatus===1&&e.registrationTime+et<Date.now()}/**
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
 */async function Ir({appConfig:e,heartbeatServiceProvider:t},n){const r=Sr(e,n),i=ar(e,n),a=t.getImmediate({optional:!0});if(a){const d=await a.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:tt,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(s)},l=await ct(()=>fetch(r,o));if(l.ok){const d=await l.json();return at(d)}else throw await st("Generate Auth Token",l)}function Sr(e,{fid:t}){return`${it(e)}/${t}/authTokens:generate`}/**
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
 */async function ge(e,t=!1){let n;const r=await W(e.appConfig,a=>{if(!mt(a))throw x.create("not-registered");const s=a.authToken;if(!t&&Dr(s))return a;if(s.requestStatus===1)return n=Ar(e,t),a;{if(!navigator.onLine)throw x.create("app-offline");const o=kr(a);return n=Tr(e,o),o}});return n?await n:r.authToken}async function Ar(e,t){let n=await Pe(e.appConfig);for(;n.authToken.requestStatus===1;)await lt(100),n=await Pe(e.appConfig);const r=n.authToken;return r.requestStatus===0?ge(e,t):r}function Pe(e){return W(e,t=>{if(!mt(t))throw x.create("not-registered");const n=t.authToken;return Nr(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Tr(e,t){try{const n=await Ir(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await H(e.appConfig,r),n}catch(n){if(rt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ht(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await H(e.appConfig,r)}throw n}}function mt(e){return e!==void 0&&e.registrationStatus===2}function Dr(e){return e.requestStatus===2&&!Cr(e)}function Cr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+tr}function kr(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Nr(e){return e.requestStatus===1&&e.requestTime+et<Date.now()}/**
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
 */async function xr(e){const t=e,{installationEntry:n,registrationPromise:r}=await me(t);return r?r.catch(console.error):ge(t).catch(console.error),n.fid}/**
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
 */async function Or(e,t=!1){const n=e;return await Br(n),(await ge(n,t)).token}async function Br(e){const{registrationPromise:t}=await me(e);t&&await t}/**
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
 */function Pr(e){if(!e||!e.options)throw ee("App Configuration");if(!e.name)throw ee("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ee(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ee(e){return x.create("missing-app-config-values",{valueName:e})}/**
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
 */const gt="installations",Rr="installations-internal",Mr=e=>{const t=e.getProvider("app").getImmediate(),n=Pr(t),r=fe(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jr=e=>{const t=e.getProvider("app").getImmediate(),n=fe(t,gt).getImmediate();return{getId:()=>xr(n),getToken:i=>Or(n,i)}};function $r(){N(new A(gt,Mr,"PUBLIC")),N(new A(Rr,jr,"PRIVATE"))}$r();S(Ze,he);S(Ze,he,"esm2017");/**
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
 */const Lr="/firebase-messaging-sw.js",Fr="/firebase-cloud-messaging-push-scope",bt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Hr="https://fcmregistrations.googleapis.com/v1",yt="google.c.a.c_id",Vr="google.c.a.c_l",Ur="google.c.a.ts",Kr="google.c.a.e";var Re;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Re||(Re={}));/**
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
 */var j;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(j||(j={}));/**
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
 */function E(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Wr(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let a=0;a<r.length;++a)i[a]=r.charCodeAt(a);return i}/**
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
 */const te="fcm_token_details_db",zr=5,Me="fcm_token_object_Store";async function qr(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(te))return null;let t=null;return(await U(te,zr,{upgrade:async(r,i,a,s)=>{var o;if(i<2||!r.objectStoreNames.contains(Me))return;const l=s.objectStore(Me),d=await l.index("fcmSenderId").get(e);if(await l.clear(),!!d){if(i===2){const u=d;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(o=u.createTime)!==null&&o!==void 0?o:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:E(u.vapidKey)}}}else if(i===3){const u=d;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:E(u.auth),p256dh:E(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:E(u.vapidKey)}}}else if(i===4){const u=d;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:E(u.auth),p256dh:E(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:E(u.vapidKey)}}}}}})).close(),await Y(te),await Y("fcm_vapid_details_db"),await Y("undefined"),Gr(t)?t:null}function Gr(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Jr="firebase-messaging-database",Yr=1,$="firebase-messaging-store";let ne=null;function wt(){return ne||(ne=U(Jr,Yr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($)}}})),ne}async function Xr(e){const t=Et(e),r=await(await wt()).transaction($).objectStore($).get(t);if(r)return r;{const i=await qr(e.appConfig.senderId);if(i)return await be(e,i),i}}async function be(e,t){const n=Et(e),i=(await wt()).transaction($,"readwrite");return await i.objectStore($).put(t,n),await i.done,t}function Et({appConfig:e}){return e.appId}/**
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
 */const Qr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},m=new V("messaging","Messaging",Qr);/**
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
 */async function Zr(e,t){const n=await we(e),r=vt(t),i={method:"POST",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(ye(e.appConfig),i)).json()}catch(s){throw m.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(a.error){const s=a.error.message;throw m.create("token-subscribe-failed",{errorInfo:s})}if(!a.token)throw m.create("token-subscribe-no-token");return a.token}async function ei(e,t){const n=await we(e),r=vt(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(`${ye(e.appConfig)}/${t.token}`,i)).json()}catch(s){throw m.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(a.error){const s=a.error.message;throw m.create("token-update-failed",{errorInfo:s})}if(!a.token)throw m.create("token-update-no-token");return a.token}async function ti(e,t){const r={method:"DELETE",headers:await we(e)};try{const a=await(await fetch(`${ye(e.appConfig)}/${t}`,r)).json();if(a.error){const s=a.error.message;throw m.create("token-unsubscribe-failed",{errorInfo:s})}}catch(i){throw m.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function ye({projectId:e}){return`${Hr}/projects/${e}/registrations`}async function we({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function vt({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:t,p256dh:e}};return r!==bt&&(i.web.applicationPubKey=r),i}/**
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
 */const ni=7*24*60*60*1e3;async function ri(e){const t=await ai(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:E(t.getKey("auth")),p256dh:E(t.getKey("p256dh"))},r=await Xr(e.firebaseDependencies);if(r){if(si(r.subscriptionOptions,n))return Date.now()>=r.createTime+ni?ii(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ti(e.firebaseDependencies,r.token)}catch(i){console.warn(i)}return je(e.firebaseDependencies,n)}else return je(e.firebaseDependencies,n)}async function ii(e,t){try{const n=await ei(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await be(e.firebaseDependencies,r),n}catch(n){throw n}}async function je(e,t){const r={token:await Zr(e,t),createTime:Date.now(),subscriptionOptions:t};return await be(e,r),r.token}async function ai(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Wr(t)})}function si(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&r&&i&&a}/**
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
 */function $e(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return oi(t,e),ci(t,e),li(t,e),t}function oi(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const i=t.notification.image;i&&(e.notification.image=i);const a=t.notification.icon;a&&(e.notification.icon=a)}function ci(e,t){t.data&&(e.data=t.data)}function li(e,t){var n,r,i,a,s;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const o=(i=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(a=t.notification)===null||a===void 0?void 0:a.click_action;o&&(e.fcmOptions.link=o);const l=(s=t.fcmOptions)===null||s===void 0?void 0:s.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}/**
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
 */function di(e){return typeof e=="object"&&!!e&&yt in e}/**
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
 */function ui(e){if(!e||!e.options)throw re("App Configuration Object");if(!e.name)throw re("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw re(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function re(e){return m.create("missing-app-config-values",{valueName:e})}/**
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
 */class fi{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=ui(t);this.firebaseDependencies={app:t,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function hi(e){try{e.swRegistration=await navigator.serviceWorker.register(Lr,{scope:Fr}),e.swRegistration.update().catch(()=>{})}catch(t){throw m.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function pi(e,t){if(!t&&!e.swRegistration&&await hi(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw m.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function mi(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=bt)}/**
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
 */async function _t(e,t){if(!navigator)throw m.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw m.create("permission-blocked");return await mi(e,t==null?void 0:t.vapidKey),await pi(e,t==null?void 0:t.serviceWorkerRegistration),ri(e)}/**
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
 */async function gi(e,t,n){const r=bi(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[yt],message_name:n[Vr],message_time:n[Ur],message_device_time:Math.floor(Date.now()/1e3)})}function bi(e){switch(e){case j.NOTIFICATION_CLICKED:return"notification_open";case j.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function yi(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===j.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler($e(n)):e.onMessageHandler.next($e(n)));const r=n.data;di(r)&&r[Kr]==="1"&&await gi(e,n.messageType,r)}const Le="@firebase/messaging",Fe="0.12.12";/**
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
 */const wi=e=>{const t=new fi(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>yi(t,n)),t},Ei=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>_t(t,r)}};function vi(){N(new A("messaging",wi,"PUBLIC")),N(new A("messaging-internal",Ei,"PRIVATE")),S(Le,Fe),S(Le,Fe,"esm2017")}/**
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
 */async function _i(){try{await ze()}catch{return!1}return typeof window<"u"&&We()&&Vt()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Ii(e=Kn()){return _i().then(t=>{if(!t)throw m.create("unsupported-browser")},t=>{throw m.create("indexed-db-unsupported")}),fe(qe(e),"messaging").getImmediate()}async function Si(e,t){return e=qe(e),_t(e,t)}vi();var Ai="firebase",Ti="10.14.1";/**
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
 */S(Ai,Ti,"app");const Di={apiKey:"AIzaSyDngyK-w3S7yGmtQa4EXWLaLfCJEqpUyVU",authDomain:"olex-6bc47.firebaseapp.com",projectId:"olex-6bc47",storageBucket:"olex-6bc47.appspot.com",messagingSenderId:"852045853347",appId:"1:852045853347:web:ce59c95ea0d90bd10a4516",measurementId:"G-YSVP4EMESL"},Ci=Ye(Di),ki=Ii(Ci),Ni={BASE_URL:"/build/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_API_KEY:"AIzaSyDngyK-w3S7yGmtQa4EXWLaLfCJEqpUyVU",VITE_APP_APP_ID:"1:852045853347:web:ce59c95ea0d90bd10a4516",VITE_APP_AUTH_DOMAIN:"olex-6bc47.firebaseapp.com",VITE_APP_MEASUREMENT_ID:"G-YSVP4EMESL",VITE_APP_MESSAGING_SENDER_ID:"852045853347",VITE_APP_NAME:"OLEX Films®",VITE_APP_PROJECT_ID:"olex-6bc47",VITE_APP_STORAGE_BUCKET:"olex-6bc47.appspot.com",VITE_APP_VAPID_KEY:"BGU32plTKOAW6U4R5PhsBWEPr54Q34qNVfd7F9NAIoq7twYSo4GbkuyJvkNwKcR108nHz2HgF_Vqhud7HqPCgoI"},Qi=({customerB:e,csrf_token:t,hash:n,services:r})=>{const[i,a]=g.useState(!1),s=g.useRef(null);g.useRef(null);const[o,l]=g.useState(e),d=g.useRef(null),[u,T]=g.useState(o.player_id!==null),{VITE_APP_VAPID_KEY:B}=Ni,[P,z]=g.useState(null),[q,It]=g.useState(null),[St,At]=g.useState(!1);g.useEffect(()=>{["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)&&At(!0),"serviceWorker"in navigator&&navigator.serviceWorker.register("/messaging-sw.js").then(function(f){console.log("Service Worker Kaydı Başarılı:",f),z(f)}).catch(function(f){console.log("Service Worker kaydı başarısız:",f)})},[]);const[b,L]=g.useState(Object.entries(JSON.parse(o.notification_settings)).map(([f,p])=>p?f:null).filter(f=>f!==null)),[Tt,Ee]=g.useState(!1);g.useEffect(()=>{let f=Object.entries(JSON.parse(o.notification_settings)).map(([p,y])=>y?p:null).filter(p=>p!==null);f.sort(),b.sort(),JSON.stringify(f)!==JSON.stringify(b)?Ee(!0):Ee(!1)},[b]);async function ve(){const f=await Notification.requestPermission();if(f==="granted"){const p=await Si(ki,{vapidKey:B,serviceWorkerRegistration:P});a(!0);let y=new FormData;y.append("player_id",p),y.append("action","token"),fetch(route("customer.notifyUpdate",n),{method:"POST",headers:{"X-CSRF-TOKEN":t},body:y}).then(w=>w.json()).then(w=>{w.status?(d.current.show({severity:"success",summary:"Başarılı",detail:w.message,life:3e3}),T(!0),l(w.customer)):d.current.show({severity:"error",summary:"Hata",detail:w.message})}).catch(w=>{d.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{a(!1)})}else f==="denied"&&(d.current.show({severity:"error",summary:"Hata",detail:"Bildirimler Engellendi",life:3e3}),L(b.filter(p=>p!=="push")))}const Dt=()=>{["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)?"Notification"in window?(a(!0),ve().then(f=>console.log())):d.current.show({severity:"info",summary:"Hata",detail:"Bildirimleri almak için tarayıcınızın URL bölümünde bulunan paylaş butonunu kullanarak uygulamamızı ana ekrana ekleyin. Bu sayede, uygulama yüklemeden hizmetlerinizi anında takip edebilirsiniz.",life:1e4}):(a(!0),ve().then(f=>console.log()))};return c.jsxs(D.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"min-h-screen bg-gradient-to-br from-[#001100] to-[#002200]",children:[c.jsx(Ct,{title:"Müşteri Bilgileri"}),c.jsx(kt,{ref:d}),c.jsx(xt,{ref:s,showCloseIcon:!0,closeOnEscape:!0,children:c.jsx(Nt,{editable:!1,value:q==null?void 0:q.body,onChange:()=>{}})}),St&&c.jsx("div",{className:"max-w-4xl mx-auto px-4",children:c.jsx("div",{className:"bg-[#E6B800]/10 border border-[#E6B800] rounded-lg p-4 mt-4",children:c.jsxs("div",{className:"flex items-center",children:[c.jsx("i",{className:"pi pi-info-circle text-[#E6B800] text-xl mr-3"}),c.jsx("p",{className:"text-[#E6B800]",children:"Bildirimleri almak için tarayıcınızın paylaş butonunu kullanarak uygulamamızı ana ekrana ekleyin."})]})})}),c.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[c.jsx("div",{className:"flex justify-center mb-12",children:c.jsx("img",{className:"h-16",src:"/uploads/olex-logo-yatay.svg",alt:"OLEX® Films"})}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[c.jsxs(D.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1},className:"bg-[#001800]/50 backdrop-blur-sm p-6 rounded-xl border border-green-900/30",children:[c.jsx("div",{className:"text-gray-400 text-sm mb-2",children:"Müşteri Adı"}),c.jsx("div",{className:"text-white text-lg font-medium",children:o.name})]}),c.jsxs(D.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},className:"bg-[#001800]/50 backdrop-blur-sm p-6 rounded-xl border border-green-900/30",children:[c.jsx("div",{className:"text-gray-400 text-sm mb-2",children:"E-posta"}),c.jsx("div",{className:"text-white text-lg font-medium",children:o.email})]}),c.jsxs(D.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},className:"bg-[#001800]/50 backdrop-blur-sm p-6 rounded-xl border border-green-900/30",children:[c.jsx("div",{className:"text-gray-400 text-sm mb-2",children:"Telefon"}),c.jsx("div",{className:"text-white text-lg font-medium",children:o.phone})]})]}),c.jsxs(D.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},className:"bg-[#001800]/50 backdrop-blur-sm p-6 rounded-xl border border-green-900/30 mb-8",children:[c.jsx("h2",{className:"text-xl font-semibold text-white mb-6",children:"Bildirim Tercihleri"}),c.jsx("div",{className:"flex justify-center gap-3 mb-6",children:[{icon:"pi pi-envelope",value:"email",label:"E-posta"},{icon:"pi pi-phone",value:"sms",label:"SMS"},{icon:"pi pi-bell",value:"push",label:"Bildirim"}].map(f=>{const p=b&&b.includes(f.value);return c.jsxs("button",{onClick:()=>{L(p?b.filter(y=>y!==f.value):[...b,f.value])},className:`flex flex-col items-center px-4 py-2 rounded-lg transition-all duration-200 min-w-[80px] ${p?"bg-gradient-to-r from-[#004d00] to-[#E6B800] text-white shadow-lg":"bg-[#001100] hover:bg-[#002200] text-gray-400"}`,children:[c.jsx("i",{className:`${f.icon} text-lg mb-1`}),c.jsx("span",{className:"text-xs",children:f.label})]},f.value)})}),Tt&&c.jsx(_e,{label:"Tercihleri Kaydet",icon:"pi pi-save",onClick:()=>{let f=new FormData;f.append("settings",JSON.stringify(b)),f.append("action","settings"),fetch(route("customer.notifyUpdate",n),{method:"POST",headers:{"X-CSRF-TOKEN":t},body:f}).then(p=>p.json()).then(p=>{p.status?(d.current.show({severity:"success",summary:"Başarılı",detail:p.message,life:3e3}),L(Object.entries(JSON.parse(p.customer.notification_settings)).map(([y,w])=>w?y:null).filter(y=>y!==null)),l(p.customer)):d.current.show({severity:"error",summary:"Hata",detail:p.message})}).catch(p=>{d.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})})},className:"w-full bg-gradient-to-r from-[#004d00] to-[#E6B800] hover:from-[#006600] hover:to-[#FFD700] text-white font-medium border-none"})]}),b&&b.includes("push")&&c.jsxs(D.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.5},className:"bg-[#001800]/50 backdrop-blur-sm p-6 rounded-xl border border-green-900/30 mb-8",children:[c.jsx("h2",{className:"text-xl font-semibold text-white mb-6",children:"Tarayıcı Bildirimleri"}),c.jsx("div",{className:"text-center",children:u===!1?c.jsx(_e,{label:"Bildirimleri Etkinleştir",loading:i,onClick:Dt,icon:"pi pi-bell",className:"bg-[#E6B800] hover:bg-[#FFD700] text-black font-medium border-none px-6 py-3"}):c.jsxs("div",{className:"text-[#E6B800] flex items-center justify-center gap-2",children:[c.jsx("i",{className:"pi pi-check-circle text-xl"}),c.jsx("span",{children:"Bildirimler Aktif"})]})})]}),c.jsxs(D.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.6},className:"bg-[#001800]/50 backdrop-blur-sm p-6 rounded-xl border border-green-900/30",children:[c.jsx("h2",{className:"text-xl font-semibold text-white mb-6",children:"Hizmet Geçmişi"}),c.jsx("div",{className:"grid grid-cols-1 gap-4",children:r.map(f=>c.jsx("div",{className:"bg-[#001100]/80 p-4 rounded-lg border border-green-900/30 hover:border-[#E6B800]/30 transition-all duration-200",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"text-[#E6B800] font-medium mb-1",children:["Hizmet No: ",f.service_no]}),c.jsxs("div",{className:"text-gray-400",children:[f.car.brand," - ",f.car.model]})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:p=>{It(f),s.current.toggle(p)},className:"p-2 rounded-lg bg-[#002200] hover:bg-[#003300] text-green-400 transition-all duration-200",children:c.jsx("i",{className:"pi pi-car text-lg"})}),c.jsx("button",{onClick:()=>{window.open(route("warranty.index",f.service_no),"_blank")},className:"p-2 rounded-lg bg-[#002200] hover:bg-[#003300] text-green-400 transition-all duration-200",children:c.jsx("i",{className:"pi pi-external-link text-lg"})})]})]})},f.id))})]})]})]})};export{Qi as default};

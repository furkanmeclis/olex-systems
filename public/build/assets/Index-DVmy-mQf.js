import{c as tt,r as p,P as Wt,U as zt,I as qt,j as d,a as Gt}from"./app-B6stv-QN.js";import{C as Jt,b as Yt,c as Xt,e as Qt,R as Zt}from"./ripple.esm-CvkIdw-B.js";import{C as en}from"./csstransition.esm-CJ7fchEH.js";import{M as tn}from"./index.esm-BRutgLZD.js";import{P as nn}from"./index.esm-B5FycizX.js";import{F as ie}from"./floatlabel.esm-CHtyX0Zk.js";import{I as se}from"./inputtext.esm-BYoBiLCN.js";import{S as rn,B as an}from"./badge.esm-Dyyyvnag.js";import{B as X}from"./button.esm-DN2tCSAP.js";import{T as on}from"./toast.esm-CnjUW4JC.js";import{C as Be}from"./column.esm-BKEZc6gz.js";import{D as sn}from"./datatable.esm-jxy61pWP.js";import{C as cn}from"./CarBody-BQeNftr1.js";import{O as ln}from"./overlaypanel.esm-CWr_PqGx.js";import"./tooltip.esm-CYRMgrzU.js";import"./index.esm-BmVtfmCW.js";import"./index.esm-1nUXcC1T.js";import"./index.esm-DQGENn96.js";import"./index.esm-G9FaVcr1.js";import"./index.esm-DoEY2q0c.js";import"./paginator.esm-CSHe-Dg8.js";import"./inputnumber.esm-Cd1WfqnQ.js";import"./index.esm-D1ejHHWk.js";import"./dropdown.esm-D7huZ1Ij.js";import"./index.esm-Bs8nEz1Q.js";import"./overlayservice.esm-DqoVCHUl.js";import"./index.esm-CxzlEFNO.js";import"./index.esm-sggzhcCc.js";import"./scrollpanel.esm-ubNGE73A.js";function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function un(e){if(Array.isArray(e))return e}function dn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,o,i,s=[],c=!0,l=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(u){l=!0,a=u}finally{try{if(!c&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return s}}function xe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fn(e,t){if(e){if(typeof e=="string")return xe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xe(e,t)}}function pn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Me(e,t){return un(e)||dn(e,t)||fn(e,t)||pn()}var Q=Jt.extend({defaultProps:{__TYPE:"Fieldset",id:null,legend:null,className:null,style:null,toggleable:null,collapsed:null,collapseIcon:null,transitionOptions:null,expandIcon:null,onExpand:null,onCollapse:null,onToggle:null,onClick:null,children:void 0},css:{classes:{root:function(t){var n=t.props;return tt("p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable})},toggleableContent:"p-toggleable-content",togglericon:"p-fieldset-toggler",legendTitle:"p-fieldset-legend-text",legend:"p-fieldset-legend p-unselectable-text",content:"p-fieldset-content",transition:"p-toggleable-content"},styles:`
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
        `}}),W=p.forwardRef(function(e,t){var n=Yt(),r=p.useContext(Wt),a=Q.getProps(e,r),o=p.useState(a.id),i=Me(o,2),s=i[0],c=i[1],l=p.useState(a.collapsed),u=Me(l,2),S=u[0],T=u[1],y=a.toggleable?a.onToggle?a.collapsed:S:!1,H=p.useRef(null),P=p.useRef(null),U=s+"_header",w=s+"_content",R=Q.setMetaData({props:a,state:{id:s,collapsed:y}}),I=R.ptm,_=R.cx,J=R.isUnstyled;Xt(Q.css.styles,J,{name:"fieldset"});var Y=function(h){a.toggleable&&(y?f(h):m(h),a.onToggle&&a.onToggle({originalEvent:h,value:!y})),h.preventDefault()},f=function(h){a.onToggle||T(!1),a.onExpand&&a.onExpand(h)},m=function(h){a.onToggle||T(!0),a.onCollapse&&a.onCollapse(h)};Qt(function(){a.id||c(zt())});var v=function(h){(h.code==="Enter"||h.code==="NumpadEnter"||h.code==="Space")&&(Y(h),h.preventDefault())},E=function(){var h=n({className:_("content")},I("content")),B=n({ref:P,id:w,role:"region","aria-labelledby":U,className:_("toggleableContent")},I("toggleableContent")),K=n({classNames:_("transition"),timeout:{enter:1e3,exit:450},in:!y,unmountOnExit:!0,options:a.transitionOptions},I("transition"));return p.createElement(en,Z({nodeRef:P},K),p.createElement("div",B,p.createElement("div",h,a.children)))},Lt=function(){if(a.toggleable){var h=n({className:_("togglericon")},I("togglericon")),B=y?a.expandIcon||p.createElement(nn,h):a.collapseIcon||p.createElement(tn,h),K=qt.getJSXIcon(B,h,{props:a});return K}return null},Ft=function(){var h=n({className:_("legendTitle")},I("legendTitle")),B=n({id:U,role:"button","aria-expanded":!y,"aria-controls":w,onKeyDown:v,onClick:Y,"aria-label":a.legend,tabIndex:0},I("toggler"));if(a.toggleable){var K=Lt();return p.createElement("a",B,K,p.createElement("span",h,a.legend),p.createElement(Zt,null))}return p.createElement("span",Z({},h,{id:U}),a.legend)},Ht=function(){var h=n({className:_("legend")},I("legend"));if(a.legend!=null||a.toggleable){var B=Ft();return p.createElement("legend",h,B)}};p.useImperativeHandle(t,function(){return{props:a,getElement:function(){return H.current},getContent:function(){return P.current}}});var Vt=n({id:s,ref:H,style:a.style,className:tt(a.className,_("root")),onClick:a.onClick},Q.getOtherProps(a),I("root")),Ut=Ht(),Kt=E();return p.createElement("fieldset",Vt,Ut,Kt)});W.displayName="Fieldset";var je={};/**
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
 */const nt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):(a&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},hn=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=e[n++];t[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=e[n++],i=e[n++],s=e[n++],c=((a&7)<<18|(o&63)<<12|(i&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|i&63)}}return t.join("")},rt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<e.length;a+=3){const o=e[a],i=a+1<e.length,s=i?e[a+1]:0,c=a+2<e.length,l=c?e[a+2]:0,u=o>>2,S=(o&3)<<4|s>>4;let T=(s&15)<<2|l>>6,y=l&63;c||(y=64,i||(T=64)),r.push(n[u],n[S],n[T],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(nt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):hn(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<e.length;){const o=n[e.charAt(a++)],s=a<e.length?n[e.charAt(a)]:0;++a;const l=a<e.length?n[e.charAt(a)]:64;++a;const S=a<e.length?n[e.charAt(a)]:64;if(++a,o==null||s==null||l==null||S==null)throw new gn;const T=o<<2|s>>4;if(r.push(T),l!==64){const y=s<<4&240|l>>2;if(r.push(y),S!==64){const H=l<<6&192|S;r.push(H)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class gn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mn=function(e){const t=nt(e);return rt.encodeByteArray(t,!0)},at=function(e){return mn(e).replace(/\./g,"")},bn=function(e){try{return rt.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function yn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wn=()=>yn().__FIREBASE_DEFAULTS__,vn=()=>{if(typeof process>"u"||typeof je>"u")return;const e=je.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},En=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&bn(e[1]);return t&&JSON.parse(t)},In=()=>{try{return wn()||vn()||En()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ot=()=>{var e;return(e=In())===null||e===void 0?void 0:e.config};/**
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
 */class _n{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function it(){try{return typeof indexedDB=="object"}catch{return!1}}function st(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var o;t(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Sn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Tn="FirebaseError";class V extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Tn,Object.setPrototypeOf(this,V.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ne.prototype.create)}}class ne{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},a=`${this.service}/${t}`,o=this.errors[t],i=o?An(o,r):"Error",s=`${this.serviceName}: ${i} (${a}).`;return new V(a,s,r)}}function An(e,t){return e.replace(Cn,(n,r)=>{const a=t[r];return a!=null?String(a):`<${r}?>`})}const Cn=/\{\$([^}]+)}/g;function ye(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const a of n){if(!r.includes(a))return!1;const o=e[a],i=t[a];if($e(o)&&$e(i)){if(!ye(o,i))return!1}else if(o!==i)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function $e(e){return e!==null&&typeof e=="object"}/**
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
 */function ct(e){return e&&e._delegate?e._delegate:e}class N{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const x="[DEFAULT]";/**
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
 */class Dn{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new _n;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),a=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(On(t))try{this.getOrInitializeService({instanceIdentifier:x})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(t=x){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=x){return this.instances.has(t)}getOptions(t=x){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);r===s&&i.resolve(a)}return a}onInit(t,n){var r;const a=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(a,o);const i=this.instances.get(a);return i&&t(i,a),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const a of r)try{a(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kn(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=x){return this.component?this.component.multipleInstances?t:x:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kn(e){return e===x?void 0:e}function On(e){return e.instantiationMode==="EAGER"}/**
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
 */class Nn{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Dn(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var g;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(g||(g={}));const Pn={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},Rn=g.INFO,Bn={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},xn=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),a=Bn[t];if(a)console[a](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Mn{constructor(t){this.name=t,this._logLevel=Rn,this._logHandler=xn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in g))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Pn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...t),this._logHandler(this,g.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...t),this._logHandler(this,g.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,g.INFO,...t),this._logHandler(this,g.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,g.WARN,...t),this._logHandler(this,g.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...t),this._logHandler(this,g.ERROR,...t)}}const jn=(e,t)=>t.some(n=>e instanceof n);let Le,Fe;function $n(){return Le||(Le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ln(){return Fe||(Fe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lt=new WeakMap,we=new WeakMap,ut=new WeakMap,ce=new WeakMap,Te=new WeakMap;function Fn(e){const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(D(e.result)),a()},i=()=>{r(e.error),a()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&lt.set(n,e)}).catch(()=>{}),Te.set(t,e),t}function Hn(e){if(we.has(e))return;const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),a()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});we.set(e,t)}let ve={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return we.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ut.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return D(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Vn(e){ve=e(ve)}function Un(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(le(this),t,...n);return ut.set(r,t.sort?t.sort():[t]),D(r)}:Ln().includes(e)?function(...t){return e.apply(le(this),t),D(lt.get(this))}:function(...t){return D(e.apply(le(this),t))}}function Kn(e){return typeof e=="function"?Un(e):(e instanceof IDBTransaction&&Hn(e),jn(e,$n())?new Proxy(e,ve):e)}function D(e){if(e instanceof IDBRequest)return Fn(e);if(ce.has(e))return ce.get(e);const t=Kn(e);return t!==e&&(ce.set(e,t),Te.set(t,e)),t}const le=e=>Te.get(e);function re(e,t,{blocked:n,upgrade:r,blocking:a,terminated:o}={}){const i=indexedDB.open(e,t),s=D(i);return r&&i.addEventListener("upgradeneeded",c=>{r(D(i.result),c.oldVersion,c.newVersion,D(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),s.then(c=>{o&&c.addEventListener("close",()=>o()),a&&c.addEventListener("versionchange",l=>a(l.oldVersion,l.newVersion,l))}).catch(()=>{}),s}function ue(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),D(n).then(()=>{})}const Wn=["get","getKey","getAll","getAllKeys","count"],zn=["put","add","delete","clear"],de=new Map;function He(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(de.get(t))return de.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=zn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||Wn.includes(n)))return;const o=async function(i,...s){const c=this.transaction(i,a?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(s.shift())),(await Promise.all([l[n](...s),a&&c.done]))[0]};return de.set(t,o),o}Vn(e=>({...e,get:(t,n,r)=>He(t,n)||e.get(t,n,r),has:(t,n)=>!!He(t,n)||e.has(t,n)}));/**
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
 */class qn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ee="@firebase/app",Ve="0.10.5";/**
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
 */const j=new Mn("@firebase/app"),Jn="@firebase/app-compat",Yn="@firebase/analytics-compat",Xn="@firebase/analytics",Qn="@firebase/app-check-compat",Zn="@firebase/app-check",er="@firebase/auth",tr="@firebase/auth-compat",nr="@firebase/database",rr="@firebase/database-compat",ar="@firebase/functions",or="@firebase/functions-compat",ir="@firebase/installations",sr="@firebase/installations-compat",cr="@firebase/messaging",lr="@firebase/messaging-compat",ur="@firebase/performance",dr="@firebase/performance-compat",fr="@firebase/remote-config",pr="@firebase/remote-config-compat",hr="@firebase/storage",gr="@firebase/storage-compat",mr="@firebase/firestore",br="@firebase/vertexai-preview",yr="@firebase/firestore-compat",wr="firebase";/**
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
 */const Ie="[DEFAULT]",vr={[Ee]:"fire-core",[Jn]:"fire-core-compat",[Xn]:"fire-analytics",[Yn]:"fire-analytics-compat",[Zn]:"fire-app-check",[Qn]:"fire-app-check-compat",[er]:"fire-auth",[tr]:"fire-auth-compat",[nr]:"fire-rtdb",[rr]:"fire-rtdb-compat",[ar]:"fire-fn",[or]:"fire-fn-compat",[ir]:"fire-iid",[sr]:"fire-iid-compat",[cr]:"fire-fcm",[lr]:"fire-fcm-compat",[ur]:"fire-perf",[dr]:"fire-perf-compat",[fr]:"fire-rc",[pr]:"fire-rc-compat",[hr]:"fire-gcs",[gr]:"fire-gcs-compat",[mr]:"fire-fst",[yr]:"fire-fst-compat",[br]:"fire-vertex","fire-js":"fire-js",[wr]:"fire-js-all"};/**
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
 */const ee=new Map,Er=new Map,_e=new Map;function Ue(e,t){try{e.container.addComponent(t)}catch(n){j.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e){const t=e.name;if(_e.has(t))return j.debug(`There were multiple attempts to register component ${t}.`),!1;_e.set(t,e);for(const n of ee.values())Ue(n,e);for(const n of Er.values())Ue(n,e);return!0}function Ae(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Ir={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},k=new ne("app","Firebase",Ir);/**
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
 */class _r{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new N("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw k.create("app-deleted",{appName:this._name})}}function dt(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ie,automaticDataCollectionEnabled:!1},t),a=r.name;if(typeof a!="string"||!a)throw k.create("bad-app-name",{appName:String(a)});if(n||(n=ot()),!n)throw k.create("no-options");const o=ee.get(a);if(o){if(ye(n,o.options)&&ye(r,o.config))return o;throw k.create("duplicate-app",{appName:a})}const i=new Nn(a);for(const c of _e.values())i.addComponent(c);const s=new _r(n,r,i);return ee.set(a,s),s}function Sr(e=Ie){const t=ee.get(e);if(!t&&e===Ie&&ot())return dt();if(!t)throw k.create("no-app",{appName:e});return t}function O(e,t,n){var r;let a=(r=vr[e])!==null&&r!==void 0?r:e;n&&(a+=`-${n}`);const o=a.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const s=[`Unable to register library "${a}" with version "${t}":`];o&&s.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&i&&s.push("and"),i&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),j.warn(s.join(" "));return}$(new N(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const Tr="firebase-heartbeat-database",Ar=1,z="firebase-heartbeat-store";let fe=null;function ft(){return fe||(fe=re(Tr,Ar,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(z)}catch(n){console.warn(n)}}}}).catch(e=>{throw k.create("idb-open",{originalErrorMessage:e.message})})),fe}async function Cr(e){try{const n=(await ft()).transaction(z),r=await n.objectStore(z).get(pt(e));return await n.done,r}catch(t){if(t instanceof V)j.warn(t.message);else{const n=k.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});j.warn(n.message)}}}async function Ke(e,t){try{const r=(await ft()).transaction(z,"readwrite");await r.objectStore(z).put(t,pt(e)),await r.done}catch(n){if(n instanceof V)j.warn(n.message);else{const r=k.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});j.warn(r.message)}}}function pt(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Dr=1024,kr=30*24*60*60*1e3;class Or{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=We();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=kr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=We(),{heartbeatsToSend:r,unsentEntries:a}=Nr(this._heartbeatsCache.heartbeats),o=at(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function We(){return new Date().toISOString().substring(0,10)}function Nr(e,t=Dr){const n=[];let r=e.slice();for(const a of e){const o=n.find(i=>i.agent===a.agent);if(o){if(o.dates.push(a.date),ze(n)>t){o.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),ze(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pr{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return it()?st().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Ke(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Ke(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function ze(e){return at(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Rr(e){$(new N("platform-logger",t=>new qn(t),"PRIVATE")),$(new N("heartbeat",t=>new Or(t),"PRIVATE")),O(Ee,Ve,e),O(Ee,Ve,"esm2017"),O("fire-js","")}Rr("");const ht="@firebase/installations",Ce="0.6.7";/**
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
 */const gt=1e4,mt=`w:${Ce}`,bt="FIS_v2",Br="https://firebaseinstallations.googleapis.com/v1",xr=60*60*1e3,Mr="installations",jr="Installations";/**
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
 */const $r={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},L=new ne(Mr,jr,$r);function yt(e){return e instanceof V&&e.code.includes("request-failed")}/**
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
 */function wt({projectId:e}){return`${Br}/projects/${e}/installations`}function vt(e){return{token:e.token,requestStatus:2,expiresIn:Fr(e.expiresIn),creationTime:Date.now()}}async function Et(e,t){const r=(await t.json()).error;return L.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function It({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Lr(e,{refreshToken:t}){const n=It(e);return n.append("Authorization",Hr(t)),n}async function _t(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Fr(e){return Number(e.replace("s","000"))}function Hr(e){return`${bt} ${e}`}/**
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
 */async function Vr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=wt(e),a=It(e),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&a.append("x-firebase-client",l)}const i={fid:n,authVersion:bt,appId:e.appId,sdkVersion:mt},s={method:"POST",headers:a,body:JSON.stringify(i)},c=await _t(()=>fetch(r,s));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:vt(l.authToken)}}else throw await Et("Create Installation",c)}/**
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
 */function St(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Ur(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Kr=/^[cdef][\w-]{21}$/,Se="";function Wr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=zr(e);return Kr.test(n)?n:Se}catch{return Se}}function zr(e){return Ur(e).substr(0,22)}/**
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
 */function ae(e){return`${e.appName}!${e.appId}`}/**
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
 */const Tt=new Map;function At(e,t){const n=ae(e);Ct(n,t),qr(n,t)}function Ct(e,t){const n=Tt.get(e);if(n)for(const r of n)r(t)}function qr(e,t){const n=Gr();n&&n.postMessage({key:e,fid:t}),Jr()}let M=null;function Gr(){return!M&&"BroadcastChannel"in self&&(M=new BroadcastChannel("[Firebase] FID Change"),M.onmessage=e=>{Ct(e.data.key,e.data.fid)}),M}function Jr(){Tt.size===0&&M&&(M.close(),M=null)}/**
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
 */const Yr="firebase-installations-database",Xr=1,F="firebase-installations-store";let pe=null;function De(){return pe||(pe=re(Yr,Xr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(F)}}})),pe}async function te(e,t){const n=ae(e),a=(await De()).transaction(F,"readwrite"),o=a.objectStore(F),i=await o.get(n);return await o.put(t,n),await a.done,(!i||i.fid!==t.fid)&&At(e,t.fid),t}async function Dt(e){const t=ae(e),r=(await De()).transaction(F,"readwrite");await r.objectStore(F).delete(t),await r.done}async function oe(e,t){const n=ae(e),a=(await De()).transaction(F,"readwrite"),o=a.objectStore(F),i=await o.get(n),s=t(i);return s===void 0?await o.delete(n):await o.put(s,n),await a.done,s&&(!i||i.fid!==s.fid)&&At(e,s.fid),s}/**
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
 */async function ke(e){let t;const n=await oe(e.appConfig,r=>{const a=Qr(r),o=Zr(e,a);return t=o.registrationPromise,o.installationEntry});return n.fid===Se?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Qr(e){const t=e||{fid:Wr(),registrationStatus:0};return kt(t)}function Zr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(L.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ea(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ta(e)}:{installationEntry:t}}async function ea(e,t){try{const n=await Vr(e,t);return te(e.appConfig,n)}catch(n){throw yt(n)&&n.customData.serverCode===409?await Dt(e.appConfig):await te(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ta(e){let t=await qe(e.appConfig);for(;t.registrationStatus===1;)await St(100),t=await qe(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ke(e);return r||n}return t}function qe(e){return oe(e,t=>{if(!t)throw L.create("installation-not-found");return kt(t)})}function kt(e){return na(e)?{fid:e.fid,registrationStatus:0}:e}function na(e){return e.registrationStatus===1&&e.registrationTime+gt<Date.now()}/**
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
 */async function ra({appConfig:e,heartbeatServiceProvider:t},n){const r=aa(e,n),a=Lr(e,n),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&a.append("x-firebase-client",l)}const i={installation:{sdkVersion:mt,appId:e.appId}},s={method:"POST",headers:a,body:JSON.stringify(i)},c=await _t(()=>fetch(r,s));if(c.ok){const l=await c.json();return vt(l)}else throw await Et("Generate Auth Token",c)}function aa(e,{fid:t}){return`${wt(e)}/${t}/authTokens:generate`}/**
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
 */async function Oe(e,t=!1){let n;const r=await oe(e.appConfig,o=>{if(!Ot(o))throw L.create("not-registered");const i=o.authToken;if(!t&&sa(i))return o;if(i.requestStatus===1)return n=oa(e,t),o;{if(!navigator.onLine)throw L.create("app-offline");const s=la(o);return n=ia(e,s),s}});return n?await n:r.authToken}async function oa(e,t){let n=await Ge(e.appConfig);for(;n.authToken.requestStatus===1;)await St(100),n=await Ge(e.appConfig);const r=n.authToken;return r.requestStatus===0?Oe(e,t):r}function Ge(e){return oe(e,t=>{if(!Ot(t))throw L.create("not-registered");const n=t.authToken;return ua(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ia(e,t){try{const n=await ra(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await te(e.appConfig,r),n}catch(n){if(yt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Dt(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await te(e.appConfig,r)}throw n}}function Ot(e){return e!==void 0&&e.registrationStatus===2}function sa(e){return e.requestStatus===2&&!ca(e)}function ca(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+xr}function la(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ua(e){return e.requestStatus===1&&e.requestTime+gt<Date.now()}/**
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
 */async function da(e){const t=e,{installationEntry:n,registrationPromise:r}=await ke(t);return r?r.catch(console.error):Oe(t).catch(console.error),n.fid}/**
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
 */async function fa(e,t=!1){const n=e;return await pa(n),(await Oe(n,t)).token}async function pa(e){const{registrationPromise:t}=await ke(e);t&&await t}/**
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
 */function ha(e){if(!e||!e.options)throw he("App Configuration");if(!e.name)throw he("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw he(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function he(e){return L.create("missing-app-config-values",{valueName:e})}/**
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
 */const Nt="installations",ga="installations-internal",ma=e=>{const t=e.getProvider("app").getImmediate(),n=ha(t),r=Ae(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ba=e=>{const t=e.getProvider("app").getImmediate(),n=Ae(t,Nt).getImmediate();return{getId:()=>da(n),getToken:a=>fa(n,a)}};function ya(){$(new N(Nt,ma,"PUBLIC")),$(new N(ga,ba,"PRIVATE"))}ya();O(ht,Ce);O(ht,Ce,"esm2017");/**
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
 */const wa="/firebase-messaging-sw.js",va="/firebase-cloud-messaging-push-scope",Pt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ea="https://fcmregistrations.googleapis.com/v1",Rt="google.c.a.c_id",Ia="google.c.a.c_l",_a="google.c.a.ts",Sa="google.c.a.e";var Je;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Je||(Je={}));/**
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
 */var q;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(q||(q={}));/**
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
 */function C(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ta(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),a=new Uint8Array(r.length);for(let o=0;o<r.length;++o)a[o]=r.charCodeAt(o);return a}/**
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
 */const ge="fcm_token_details_db",Aa=5,Ye="fcm_token_object_Store";async function Ca(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(ge))return null;let t=null;return(await re(ge,Aa,{upgrade:async(r,a,o,i)=>{var s;if(a<2||!r.objectStoreNames.contains(Ye))return;const c=i.objectStore(Ye),l=await c.index("fcmSenderId").get(e);if(await c.clear(),!!l){if(a===2){const u=l;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(s=u.createTime)!==null&&s!==void 0?s:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:C(u.vapidKey)}}}else if(a===3){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:C(u.auth),p256dh:C(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:C(u.vapidKey)}}}else if(a===4){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:C(u.auth),p256dh:C(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:C(u.vapidKey)}}}}}})).close(),await ue(ge),await ue("fcm_vapid_details_db"),await ue("undefined"),Da(t)?t:null}function Da(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const ka="firebase-messaging-database",Oa=1,G="firebase-messaging-store";let me=null;function Bt(){return me||(me=re(ka,Oa,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(G)}}})),me}async function Na(e){const t=xt(e),r=await(await Bt()).transaction(G).objectStore(G).get(t);if(r)return r;{const a=await Ca(e.appConfig.senderId);if(a)return await Ne(e,a),a}}async function Ne(e,t){const n=xt(e),a=(await Bt()).transaction(G,"readwrite");return await a.objectStore(G).put(t,n),await a.done,t}function xt({appConfig:e}){return e.appId}/**
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
 */const Pa={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},b=new ne("messaging","Messaging",Pa);/**
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
 */async function Ra(e,t){const n=await Re(e),r=Mt(t),a={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(Pe(e.appConfig),a)).json()}catch(i){throw b.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw b.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw b.create("token-subscribe-no-token");return o.token}async function Ba(e,t){const n=await Re(e),r=Mt(t.subscriptionOptions),a={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${Pe(e.appConfig)}/${t.token}`,a)).json()}catch(i){throw b.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw b.create("token-update-failed",{errorInfo:i})}if(!o.token)throw b.create("token-update-no-token");return o.token}async function xa(e,t){const r={method:"DELETE",headers:await Re(e)};try{const o=await(await fetch(`${Pe(e.appConfig)}/${t}`,r)).json();if(o.error){const i=o.error.message;throw b.create("token-unsubscribe-failed",{errorInfo:i})}}catch(a){throw b.create("token-unsubscribe-failed",{errorInfo:a==null?void 0:a.toString()})}}function Pe({projectId:e}){return`${Ea}/projects/${e}/registrations`}async function Re({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Mt({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const a={web:{endpoint:n,auth:t,p256dh:e}};return r!==Pt&&(a.web.applicationPubKey=r),a}/**
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
 */const Ma=7*24*60*60*1e3;async function ja(e){const t=await La(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:C(t.getKey("auth")),p256dh:C(t.getKey("p256dh"))},r=await Na(e.firebaseDependencies);if(r){if(Fa(r.subscriptionOptions,n))return Date.now()>=r.createTime+Ma?$a(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await xa(e.firebaseDependencies,r.token)}catch(a){console.warn(a)}return Xe(e.firebaseDependencies,n)}else return Xe(e.firebaseDependencies,n)}async function $a(e,t){try{const n=await Ba(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Ne(e.firebaseDependencies,r),n}catch(n){throw n}}async function Xe(e,t){const r={token:await Ra(e,t),createTime:Date.now(),subscriptionOptions:t};return await Ne(e,r),r.token}async function La(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ta(t)})}function Fa(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,a=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&a&&o}/**
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
 */function Qe(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Ha(t,e),Va(t,e),Ua(t,e),t}function Ha(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const a=t.notification.image;a&&(e.notification.image=a);const o=t.notification.icon;o&&(e.notification.icon=o)}function Va(e,t){t.data&&(e.data=t.data)}function Ua(e,t){var n,r,a,o,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const s=(a=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&a!==void 0?a:(o=t.notification)===null||o===void 0?void 0:o.click_action;s&&(e.fcmOptions.link=s);const c=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
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
 */function Ka(e){return typeof e=="object"&&!!e&&Rt in e}/**
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
 */jt("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");jt("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function jt(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */function Wa(e){if(!e||!e.options)throw be("App Configuration Object");if(!e.name)throw be("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw be(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function be(e){return b.create("missing-app-config-values",{valueName:e})}/**
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
 */class za{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=Wa(t);this.firebaseDependencies={app:t,appConfig:a,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function qa(e){try{e.swRegistration=await navigator.serviceWorker.register(wa,{scope:va}),e.swRegistration.update().catch(()=>{})}catch(t){throw b.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function Ga(e,t){if(!t&&!e.swRegistration&&await qa(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw b.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function Ja(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Pt)}/**
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
 */async function $t(e,t){if(!navigator)throw b.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw b.create("permission-blocked");return await Ja(e,t==null?void 0:t.vapidKey),await Ga(e,t==null?void 0:t.serviceWorkerRegistration),ja(e)}/**
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
 */async function Ya(e,t,n){const r=Xa(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Rt],message_name:n[Ia],message_time:n[_a],message_device_time:Math.floor(Date.now()/1e3)})}function Xa(e){switch(e){case q.NOTIFICATION_CLICKED:return"notification_open";case q.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Qa(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===q.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Qe(n)):e.onMessageHandler.next(Qe(n)));const r=n.data;Ka(r)&&r[Sa]==="1"&&await Ya(e,n.messageType,r)}const Ze="@firebase/messaging",et="0.12.9";/**
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
 */const Za=e=>{const t=new za(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Qa(t,n)),t},eo=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>$t(t,r)}};function to(){$(new N("messaging",Za,"PUBLIC")),$(new N("messaging-internal",eo,"PRIVATE")),O(Ze,et),O(Ze,et,"esm2017")}/**
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
 */async function no(){try{await st()}catch{return!1}return typeof window<"u"&&it()&&Sn()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function ro(e=Sr()){return no().then(t=>{if(!t)throw b.create("unsupported-browser")},t=>{throw b.create("indexed-db-unsupported")}),Ae(ct(e),"messaging").getImmediate()}async function ao(e,t){return e=ct(e),$t(e,t)}to();var oo="firebase",io="10.12.2";/**
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
 */O(oo,io,"app");const so={apiKey:"AIzaSyDngyK-w3S7yGmtQa4EXWLaLfCJEqpUyVU",authDomain:"olex-6bc47.firebaseapp.com",projectId:"olex-6bc47",storageBucket:"olex-6bc47.appspot.com",messagingSenderId:"852045853347",appId:"1:852045853347:web:ce59c95ea0d90bd10a4516",measurementId:"G-YSVP4EMESL"},co=dt(so),lo=ro(co);var uo={VITE_APP_NAME:"OLEX Films®",VITE_APP_API_KEY:"AIzaSyDngyK-w3S7yGmtQa4EXWLaLfCJEqpUyVU",VITE_APP_AUTH_DOMAIN:"olex-6bc47.firebaseapp.com",VITE_APP_PROJECT_ID:"olex-6bc47",VITE_APP_STORAGE_BUCKET:"olex-6bc47.appspot.com",VITE_APP_MESSAGING_SENDER_ID:"852045853347",VITE_APP_APP_ID:"1:852045853347:web:ce59c95ea0d90bd10a4516",VITE_APP_MEASUREMENT_ID:"G-YSVP4EMESL",VITE_APP_VAPID_KEY:"BGU32plTKOAW6U4R5PhsBWEPr54Q34qNVfd7F9NAIoq7twYSo4GbkuyJvkNwKcR108nHz2HgF_Vqhud7HqPCgoI",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Ho=({customerB:e,csrf_token:t,hash:n,services:r})=>{const[a,o]=p.useState(!1),i=p.useRef(null);p.useRef(null);const[s,c]=p.useState(e),l=p.useRef(null),[u,S]=p.useState(s.player_id!==null),{VITE_APP_VAPID_KEY:T}=uo,[y,H]=p.useState(null),[P,U]=p.useState(null);p.useEffect(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/messaging-sw.js").then(function(f){console.log("Service Worker Kaydı Başarılı:",f),H(f)}).catch(function(f){console.log("Service Worker kaydı başarısız:",f)})},[]);const[w,R]=p.useState(Object.entries(JSON.parse(s.notification_settings)).map(([f,m])=>m?f:null).filter(f=>f!==null)),[I,_]=p.useState(!1);p.useEffect(()=>{let f=Object.entries(JSON.parse(s.notification_settings)).map(([m,v])=>v?m:null).filter(m=>m!==null);f.sort(),w.sort(),JSON.stringify(f)!==JSON.stringify(w)?_(!0):_(!1)},[w]);async function J(){const f=await Notification.requestPermission();if(f==="granted"){const m=await ao(lo,{vapidKey:T,serviceWorkerRegistration:y});o(!0);let v=new FormData;v.append("player_id",m),v.append("action","token"),fetch(route("customer.notifyUpdate",n),{method:"POST",headers:{"X-CSRF-TOKEN":t},body:v}).then(E=>E.json()).then(E=>{E.status?(l.current.show({severity:"success",summary:"Başarılı",detail:E.message,life:3e3}),S(!0),c(E.customer)):l.current.show({severity:"error",summary:"Hata",detail:E.message})}).catch(E=>{l.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{o(!1)})}else f==="denied"&&(l.current.show({severity:"error",summary:"Hata",detail:"Bildirimler Engellendi",life:3e3}),R(w.filter(m=>m!=="push")))}const Y=()=>{["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)?"Notification"in window?(o(!0),J().then(f=>console.log())):l.current.show({severity:"info",summary:"Hata",detail:"Bildirimleri almak için tarayıcınızın URL bölümünde bulunan paylaş butonunu kullanarak uygulamamızı ana ekrana ekleyin. Bu sayede, uygulama yüklemeden hizmetlerinizi anında takip edebilirsiniz.",life:1e4}):(o(!0),J().then(f=>console.log()))};return d.jsxs("div",{className:"p-4",children:[d.jsx(Gt,{title:"Müşteri Bilgileri"}),d.jsx(on,{ref:l}),d.jsx(ln,{ref:i,showCloseIcon:!0,closeOnEscape:!0,children:d.jsx(cn,{editable:!1,value:P==null?void 0:P.body,onChange:()=>{}})}),d.jsx("div",{children:d.jsx("img",{className:"mx-auto",src:"/uploads/olex-logo-yatay.svg",alt:"OLEX® Films"})}),d.jsx(W,{legend:"İletişim Bilgileri",className:"mt-4",toggleable:!0,children:d.jsxs("div",{className:"mt-4 gap-y-8 grid",children:[d.jsxs(ie,{children:[d.jsx(se,{id:"username",className:"w-full",value:s.name,readOnly:!0}),d.jsx("label",{htmlFor:"username",children:"Müşteri Adı"})]}),d.jsxs(ie,{children:[d.jsx(se,{id:"email",className:"w-full",value:s.email,readOnly:!0}),d.jsx("label",{htmlFor:"email",children:"Müşteri Mail Adresi"})]}),d.jsxs(ie,{children:[d.jsx(se,{id:"username",className:"w-full",value:s.phone,readOnly:!0}),d.jsx("label",{htmlFor:"username",children:"Müşteri Telefon Numarası"})]})]})}),d.jsx(W,{legend:"İletişim Tercihleri",className:"mt-4",collapsed:!0,toggleable:!0,children:d.jsxs("div",{className:"gap-y-8 grid",children:[d.jsx(rn,{multiple:!0,value:w,onChange:f=>R(f.value),itemTemplate:f=>{let m=w&&w.includes(f.value);return d.jsx("div",{className:"w-full text-center",children:d.jsx("i",{className:f.icon+" p-overlay-badge",style:{fontSize:"1.5rem"},children:m&&d.jsx(an,{severity:"success",value:d.jsx("i",{className:"pi pi-check"}),style:{fontSize:"1px"}})})})},optionLabel:"value",options:[{icon:"pi pi-envelope",value:"email"},{icon:"pi pi-phone",value:"sms"},{icon:"pi pi-bell",value:"push"}]}),I&&d.jsx("div",{children:d.jsx(X,{label:"Tercihleri Kaydet",icon:"pi pi-save",onClick:()=>{let f=new FormData;f.append("settings",JSON.stringify(w)),f.append("action","settings"),fetch(route("customer.notifyUpdate",n),{method:"POST",headers:{"X-CSRF-TOKEN":t},body:f}).then(m=>m.json()).then(m=>{m.status?(l.current.show({severity:"success",summary:"Başarılı",detail:m.message,life:3e3}),R(Object.entries(JSON.parse(m.customer.notification_settings)).map(([v,E])=>E?v:null).filter(v=>v!==null)),c(m.customer)):l.current.show({severity:"error",summary:"Hata",detail:m.message})}).catch(m=>{l.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})})},severity:"success"})})]})}),w&&w.includes("push")&&d.jsx(W,{legend:"Mobil Bildirim Ayarları",className:"mt-4",toggleable:!0,collapsed:!0,children:d.jsxs("div",{className:"gap-y-8 grid",children:[u===!1&&d.jsx("div",{children:d.jsx(X,{label:"Tarayıcı Bildirimlerini Aç",loading:a,onClick:Y,icon:"pi pi-bell",className:"p-button-success"})}),d.jsx("p",{children:u?"Tarayıcı Bildirimleriniz Açık Durumda":"Tarayıcı Bildirimleri Kapalı Durumda"})]})}),d.jsx(W,{legend:"Aldığım Hizmetler",className:"mt-4",toggleable:!0,collapsed:!0,children:d.jsxs(sn,{value:r,removableSort:!0,paginator:!0,paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",rowsPerPageOptions:[5,10,25,50],rows:10,dataKey:"id",loading:a,emptyMessage:"Hizmet bulunamadı.",currentPageReportTemplate:"{first}. ile {last}. arası toplam {totalRecords} kayıttan",children:[d.jsx(Be,{field:"service_no",sortable:!0,header:"Hizmet Numarası",body:({service_no:f})=>d.jsx(X,{label:f,link:!0,onClick:()=>{window.open(route("warranty.index",f),"_blank")}})}),d.jsx(Be,{field:"car.brand",sortable:!0,header:"Araç",body:f=>d.jsx(X,{label:f.car.brand+"-"+f.car.model,size:"small",link:!0,onClick:m=>{U(f),i.current.toggle(m)}})})]})})]})};export{Ho as default};

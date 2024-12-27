import{c as tt,r as p,P as Kt,U as Wt,I as zt,j as d,S as qt}from"./app-Gu_WZQHt.js";import{C as Gt,b as Jt,c as Yt,e as Xt,R as Qt}from"./ripple.esm-BmgBAEku.js";import{C as Zt}from"./csstransition.esm-BhYveBEp.js";import{M as en}from"./index.esm-CmYplwVP.js";import{P as tn}from"./index.esm-CbgQxjZD.js";import{F as ie}from"./floatlabel.esm-RVRS2cq5.js";import{I as se}from"./inputtext.esm-xnWTAU7_.js";import{S as nn,B as rn}from"./badge.esm-C0ANsp64.js";import{B as X}from"./button.esm-DVrsQp04.js";import{T as an}from"./toast.esm-C2SONjJv.js";import{C as Be}from"./column.esm-DNbqWrSU.js";import{D as on}from"./datatable.esm-NaID0c80.js";import{C as sn}from"./CarBody-MaW4cucp.js";import{O as cn}from"./overlaypanel.esm-Bb2jCqaY.js";import"./tooltip.esm-DqvN6xxZ.js";import"./index.esm-ChVL6KfZ.js";import"./index.esm-Ddg6hf65.js";import"./index.esm-DBPgBsB6.js";import"./index.esm-DravIrTS.js";import"./index.esm-B4h2qdeE.js";import"./paginator.esm-Cxv8TYOQ.js";import"./inputnumber.esm-BzLWUBVP.js";import"./index.esm-CzUZpIU7.js";import"./dropdown.esm-R6RE6A8C.js";import"./index.esm-4ifppJy7.js";import"./overlayservice.esm-Xpi3MvB6.js";import"./index.esm-3bK0aKlJ.js";import"./index.esm-B608UNsB.js";import"./index.esm-ByNrCyXS.js";import"./scrollpanel.esm-Cx5T7A-9.js";function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Z.apply(null,arguments)}function ln(e){if(Array.isArray(e))return e}function un(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,r,o,i,s=[],c=!0,l=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(c=(a=o.call(n)).done)&&(s.push(a.value),s.length!==t);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw r}}return s}}function xe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function dn(e,t){if(e){if(typeof e=="string")return xe(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?xe(e,t):void 0}}function fn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Me(e,t){return ln(e)||un(e,t)||dn(e,t)||fn()}var Q=Gt.extend({defaultProps:{__TYPE:"Fieldset",id:null,legend:null,className:null,style:null,toggleable:null,collapsed:null,collapseIcon:null,transitionOptions:null,expandIcon:null,onExpand:null,onCollapse:null,onToggle:null,onClick:null,children:void 0},css:{classes:{root:function(t){var n=t.props;return tt("p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable})},toggleableContent:"p-toggleable-content",togglericon:"p-fieldset-toggler",legendTitle:"p-fieldset-legend-text",legend:"p-fieldset-legend p-unselectable-text",content:"p-fieldset-content",transition:"p-toggleable-content"},styles:`
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
        `}}),W=p.forwardRef(function(e,t){var n=Jt(),a=p.useContext(Kt),r=Q.getProps(e,a),o=p.useState(r.id),i=Me(o,2),s=i[0],c=i[1],l=p.useState(r.collapsed),u=Me(l,2),S=u[0],T=u[1],y=r.toggleable?r.onToggle?r.collapsed:S:!1,H=p.useRef(null),R=p.useRef(null),U=s+"_header",w=s+"_content",B=Q.setMetaData({props:r,state:{id:s,collapsed:y}}),I=B.ptm,_=B.cx,J=B.isUnstyled;Yt(Q.css.styles,J,{name:"fieldset"});var Y=function(h){r.toggleable&&(y?f(h):m(h),r.onToggle&&r.onToggle({originalEvent:h,value:!y})),h.preventDefault()},f=function(h){r.onToggle||T(!1),r.onExpand&&r.onExpand(h)},m=function(h){r.onToggle||T(!0),r.onCollapse&&r.onCollapse(h)};Xt(function(){r.id||c(Wt())});var v=function(h){(h.code==="Enter"||h.code==="NumpadEnter"||h.code==="Space")&&(Y(h),h.preventDefault())},E=function(){var h=n({className:_("content")},I("content")),x=n({ref:R,id:w,role:"region","aria-labelledby":U,className:_("toggleableContent")},I("toggleableContent")),K=n({classNames:_("transition"),timeout:{enter:1e3,exit:450},in:!y,unmountOnExit:!0,options:r.transitionOptions},I("transition"));return p.createElement(Zt,Z({nodeRef:R},K),p.createElement("div",x,p.createElement("div",h,r.children)))},$t=function(){if(r.toggleable){var h=n({className:_("togglericon")},I("togglericon")),x=y?r.expandIcon||p.createElement(tn,h):r.collapseIcon||p.createElement(en,h),K=zt.getJSXIcon(x,h,{props:r});return K}return null},Lt=function(){var h=n({className:_("legendTitle")},I("legendTitle")),x=n({id:U,role:"button","aria-expanded":!y,"aria-controls":w,onKeyDown:v,onClick:Y,"aria-label":r.legend,tabIndex:0},I("toggler"));if(r.toggleable){var K=$t();return p.createElement("a",x,K,p.createElement("span",h,r.legend),p.createElement(Qt,null))}return p.createElement("span",Z({},h,{id:U}),r.legend)},Ft=function(){var h=n({className:_("legend")},I("legend"));if(r.legend!=null||r.toggleable){var x=Lt();return p.createElement("legend",h,x)}};p.useImperativeHandle(t,function(){return{props:r,getElement:function(){return H.current},getContent:function(){return R.current}}});var Ht=n({id:s,ref:H,style:r.style,className:tt(r.className,_("root")),onClick:r.onClick},Q.getOtherProps(r),I("root")),Vt=Ft(),Ut=E();return p.createElement("fieldset",Ht,Vt,Ut)});W.displayName="Fieldset";var je={};/**
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
 */const nt=function(e){const t=[];let n=0;for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&a+1<e.length&&(e.charCodeAt(a+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++a)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},pn=function(e){const t=[];let n=0,a=0;for(;n<e.length;){const r=e[n++];if(r<128)t[a++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[a++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=e[n++],i=e[n++],s=e[n++],c=((r&7)<<18|(o&63)<<12|(i&63)<<6|s&63)-65536;t[a++]=String.fromCharCode(55296+(c>>10)),t[a++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],i=e[n++];t[a++]=String.fromCharCode((r&15)<<12|(o&63)<<6|i&63)}}return t.join("")},rt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<e.length;r+=3){const o=e[r],i=r+1<e.length,s=i?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=o>>2,S=(o&3)<<4|s>>4;let T=(s&15)<<2|l>>6,y=l&63;c||(y=64,i||(T=64)),a.push(n[u],n[S],n[T],n[y])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(nt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):pn(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<e.length;){const o=n[e.charAt(r++)],s=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const S=r<e.length?n[e.charAt(r)]:64;if(++r,o==null||s==null||l==null||S==null)throw new hn;const T=o<<2|s>>4;if(a.push(T),l!==64){const y=s<<4&240|l>>2;if(a.push(y),S!==64){const H=l<<6&192|S;a.push(H)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class hn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gn=function(e){const t=nt(e);return rt.encodeByteArray(t,!0)},at=function(e){return gn(e).replace(/\./g,"")},mn=function(e){try{return rt.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function bn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yn=()=>bn().__FIREBASE_DEFAULTS__,wn=()=>{if(typeof process>"u"||typeof je>"u")return;const e=je.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},vn=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&mn(e[1]);return t&&JSON.parse(t)},En=()=>{try{return yn()||wn()||vn()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ot=()=>{var e;return(e=En())===null||e===void 0?void 0:e.config};/**
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
 */class In{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,a))}}}function it(){try{return typeof indexedDB=="object"}catch{return!1}}function st(){return new Promise((e,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;t(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function _n(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Sn="FirebaseError";class V extends Error{constructor(t,n,a){super(n),this.code=t,this.customData=a,this.name=Sn,Object.setPrototypeOf(this,V.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ne.prototype.create)}}class ne{constructor(t,n,a){this.service=t,this.serviceName=n,this.errors=a}create(t,...n){const a=n[0]||{},r=`${this.service}/${t}`,o=this.errors[t],i=o?Tn(o,a):"Error",s=`${this.serviceName}: ${i} (${r}).`;return new V(r,s,a)}}function Tn(e,t){return e.replace(An,(n,a)=>{const r=t[a];return r!=null?String(r):`<${a}?>`})}const An=/\{\$([^}]+)}/g;function ye(e,t){if(e===t)return!0;const n=Object.keys(e),a=Object.keys(t);for(const r of n){if(!a.includes(r))return!1;const o=e[r],i=t[r];if($e(o)&&$e(i)){if(!ye(o,i))return!1}else if(o!==i)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function $e(e){return e!==null&&typeof e=="object"}/**
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
 */function ct(e){return e&&e._delegate?e._delegate:e}class P{constructor(t,n,a){this.name=t,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const M="[DEFAULT]";/**
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
 */class Cn{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const a=new In;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&a.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(kn(t))try{this.getOrInitializeService({instanceIdentifier:M})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});a.resolve(o)}catch{}}}}clearInstance(t=M){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=M){return this.instances.has(t)}getOptions(t=M){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[o,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);a===s&&i.resolve(r)}return r}onInit(t,n){var a;const r=this.normalizeInstanceIdentifier(n),o=(a=this.onInitCallbacks.get(r))!==null&&a!==void 0?a:new Set;o.add(t),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&t(i,r),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const a=this.onInitCallbacks.get(n);if(a)for(const r of a)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Dn(t),options:n}),this.instances.set(t,a),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=M){return this.component?this.component.multipleInstances?t:M:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dn(e){return e===M?void 0:e}function kn(e){return e.instantiationMode==="EAGER"}/**
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
 */class On{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Cn(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var g;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(g||(g={}));const Nn={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},Pn=g.INFO,Rn={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},Bn=(e,t,...n)=>{if(t<e.logLevel)return;const a=new Date().toISOString(),r=Rn[t];if(r)console[r](`[${a}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xn{constructor(t){this.name=t,this._logLevel=Pn,this._logHandler=Bn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in g))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...t),this._logHandler(this,g.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...t),this._logHandler(this,g.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,g.INFO,...t),this._logHandler(this,g.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,g.WARN,...t),this._logHandler(this,g.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...t),this._logHandler(this,g.ERROR,...t)}}const Mn=(e,t)=>t.some(n=>e instanceof n);let Le,Fe;function jn(){return Le||(Le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $n(){return Fe||(Fe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lt=new WeakMap,we=new WeakMap,ut=new WeakMap,ce=new WeakMap,Te=new WeakMap;function Ln(e){const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(D(e.result)),r()},i=()=>{a(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&lt.set(n,e)}).catch(()=>{}),Te.set(t,e),t}function Fn(e){if(we.has(e))return;const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),r()},i=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});we.set(e,t)}let ve={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return we.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ut.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return D(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Hn(e){ve=e(ve)}function Vn(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=e.call(le(this),t,...n);return ut.set(a,t.sort?t.sort():[t]),D(a)}:$n().includes(e)?function(...t){return e.apply(le(this),t),D(lt.get(this))}:function(...t){return D(e.apply(le(this),t))}}function Un(e){return typeof e=="function"?Vn(e):(e instanceof IDBTransaction&&Fn(e),Mn(e,jn())?new Proxy(e,ve):e)}function D(e){if(e instanceof IDBRequest)return Ln(e);if(ce.has(e))return ce.get(e);const t=Un(e);return t!==e&&(ce.set(e,t),Te.set(t,e)),t}const le=e=>Te.get(e);function re(e,t,{blocked:n,upgrade:a,blocking:r,terminated:o}={}){const i=indexedDB.open(e,t),s=D(i);return a&&i.addEventListener("upgradeneeded",c=>{a(D(i.result),c.oldVersion,c.newVersion,D(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),s.then(c=>{o&&c.addEventListener("close",()=>o()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),s}function ue(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",a=>t(a.oldVersion,a)),D(n).then(()=>{})}const Kn=["get","getKey","getAll","getAllKeys","count"],Wn=["put","add","delete","clear"],de=new Map;function He(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(de.get(t))return de.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=Wn.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(r||Kn.includes(n)))return;const o=async function(i,...s){const c=this.transaction(i,r?"readwrite":"readonly");let l=c.store;return a&&(l=l.index(s.shift())),(await Promise.all([l[n](...s),r&&c.done]))[0]};return de.set(t,o),o}Hn(e=>({...e,get:(t,n,a)=>He(t,n)||e.get(t,n,a),has:(t,n)=>!!He(t,n)||e.has(t,n)}));/**
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
 */class zn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qn(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function qn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ee="@firebase/app",Ve="0.10.13";/**
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
 */const k=new xn("@firebase/app"),Gn="@firebase/app-compat",Jn="@firebase/analytics-compat",Yn="@firebase/analytics",Xn="@firebase/app-check-compat",Qn="@firebase/app-check",Zn="@firebase/auth",er="@firebase/auth-compat",tr="@firebase/database",nr="@firebase/data-connect",rr="@firebase/database-compat",ar="@firebase/functions",or="@firebase/functions-compat",ir="@firebase/installations",sr="@firebase/installations-compat",cr="@firebase/messaging",lr="@firebase/messaging-compat",ur="@firebase/performance",dr="@firebase/performance-compat",fr="@firebase/remote-config",pr="@firebase/remote-config-compat",hr="@firebase/storage",gr="@firebase/storage-compat",mr="@firebase/firestore",br="@firebase/vertexai-preview",yr="@firebase/firestore-compat",wr="firebase";/**
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
 */const Ie="[DEFAULT]",vr={[Ee]:"fire-core",[Gn]:"fire-core-compat",[Yn]:"fire-analytics",[Jn]:"fire-analytics-compat",[Qn]:"fire-app-check",[Xn]:"fire-app-check-compat",[Zn]:"fire-auth",[er]:"fire-auth-compat",[tr]:"fire-rtdb",[nr]:"fire-data-connect",[rr]:"fire-rtdb-compat",[ar]:"fire-fn",[or]:"fire-fn-compat",[ir]:"fire-iid",[sr]:"fire-iid-compat",[cr]:"fire-fcm",[lr]:"fire-fcm-compat",[ur]:"fire-perf",[dr]:"fire-perf-compat",[fr]:"fire-rc",[pr]:"fire-rc-compat",[hr]:"fire-gcs",[gr]:"fire-gcs-compat",[mr]:"fire-fst",[yr]:"fire-fst-compat",[br]:"fire-vertex","fire-js":"fire-js",[wr]:"fire-js-all"};/**
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
 */const ee=new Map,Er=new Map,_e=new Map;function Ue(e,t){try{e.container.addComponent(t)}catch(n){k.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e){const t=e.name;if(_e.has(t))return k.debug(`There were multiple attempts to register component ${t}.`),!1;_e.set(t,e);for(const n of ee.values())Ue(n,e);for(const n of Er.values())Ue(n,e);return!0}function Ae(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Ir={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},O=new ne("app","Firebase",Ir);/**
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
 */class _r{constructor(t,n,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new P("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw O.create("app-deleted",{appName:this._name})}}function dt(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const a=Object.assign({name:Ie,automaticDataCollectionEnabled:!1},t),r=a.name;if(typeof r!="string"||!r)throw O.create("bad-app-name",{appName:String(r)});if(n||(n=ot()),!n)throw O.create("no-options");const o=ee.get(r);if(o){if(ye(n,o.options)&&ye(a,o.config))return o;throw O.create("duplicate-app",{appName:r})}const i=new On(r);for(const c of _e.values())i.addComponent(c);const s=new _r(n,a,i);return ee.set(r,s),s}function Sr(e=Ie){const t=ee.get(e);if(!t&&e===Ie&&ot())return dt();if(!t)throw O.create("no-app",{appName:e});return t}function N(e,t,n){var a;let r=(a=vr[e])!==null&&a!==void 0?a:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const s=[`Unable to register library "${r}" with version "${t}":`];o&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&i&&s.push("and"),i&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),k.warn(s.join(" "));return}$(new P(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Tr="firebase-heartbeat-database",Ar=1,z="firebase-heartbeat-store";let fe=null;function ft(){return fe||(fe=re(Tr,Ar,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(z)}catch(n){console.warn(n)}}}}).catch(e=>{throw O.create("idb-open",{originalErrorMessage:e.message})})),fe}async function Cr(e){try{const n=(await ft()).transaction(z),a=await n.objectStore(z).get(pt(e));return await n.done,a}catch(t){if(t instanceof V)k.warn(t.message);else{const n=O.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});k.warn(n.message)}}}async function Ke(e,t){try{const a=(await ft()).transaction(z,"readwrite");await a.objectStore(z).put(t,pt(e)),await a.done}catch(n){if(n instanceof V)k.warn(n.message);else{const a=O.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});k.warn(a.message)}}}function pt(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Dr=1024,kr=30*24*60*60*1e3;class Or{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pr(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=We();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=kr}),this._storage.overwrite(this._heartbeatsCache))}catch(a){k.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=We(),{heartbeatsToSend:a,unsentEntries:r}=Nr(this._heartbeatsCache.heartbeats),o=at(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return k.warn(n),""}}}function We(){return new Date().toISOString().substring(0,10)}function Nr(e,t=Dr){const n=[];let a=e.slice();for(const r of e){const o=n.find(i=>i.agent===r.agent);if(o){if(o.dates.push(r.date),ze(n)>t){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ze(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class Pr{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return it()?st().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ke(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ke(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ze(e){return at(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Rr(e){$(new P("platform-logger",t=>new zn(t),"PRIVATE")),$(new P("heartbeat",t=>new Or(t),"PRIVATE")),N(Ee,Ve,e),N(Ee,Ve,"esm2017"),N("fire-js","")}Rr("");const ht="@firebase/installations",Ce="0.6.9";/**
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
 */function wt({projectId:e}){return`${Br}/projects/${e}/installations`}function vt(e){return{token:e.token,requestStatus:2,expiresIn:Fr(e.expiresIn),creationTime:Date.now()}}async function Et(e,t){const a=(await t.json()).error;return L.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function It({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Lr(e,{refreshToken:t}){const n=It(e);return n.append("Authorization",Hr(t)),n}async function _t(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Fr(e){return Number(e.replace("s","000"))}function Hr(e){return`${bt} ${e}`}/**
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
 */async function Vr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=wt(e),r=It(e),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const i={fid:n,authVersion:bt,appId:e.appId,sdkVersion:mt},s={method:"POST",headers:r,body:JSON.stringify(i)},c=await _t(()=>fetch(a,s));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:vt(l.authToken)}}else throw await Et("Create Installation",c)}/**
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
 */const Tt=new Map;function At(e,t){const n=ae(e);Ct(n,t),qr(n,t)}function Ct(e,t){const n=Tt.get(e);if(n)for(const a of n)a(t)}function qr(e,t){const n=Gr();n&&n.postMessage({key:e,fid:t}),Jr()}let j=null;function Gr(){return!j&&"BroadcastChannel"in self&&(j=new BroadcastChannel("[Firebase] FID Change"),j.onmessage=e=>{Ct(e.data.key,e.data.fid)}),j}function Jr(){Tt.size===0&&j&&(j.close(),j=null)}/**
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
 */const Yr="firebase-installations-database",Xr=1,F="firebase-installations-store";let pe=null;function De(){return pe||(pe=re(Yr,Xr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(F)}}})),pe}async function te(e,t){const n=ae(e),r=(await De()).transaction(F,"readwrite"),o=r.objectStore(F),i=await o.get(n);return await o.put(t,n),await r.done,(!i||i.fid!==t.fid)&&At(e,t.fid),t}async function Dt(e){const t=ae(e),a=(await De()).transaction(F,"readwrite");await a.objectStore(F).delete(t),await a.done}async function oe(e,t){const n=ae(e),r=(await De()).transaction(F,"readwrite"),o=r.objectStore(F),i=await o.get(n),s=t(i);return s===void 0?await o.delete(n):await o.put(s,n),await r.done,s&&(!i||i.fid!==s.fid)&&At(e,s.fid),s}/**
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
 */async function ke(e){let t;const n=await oe(e.appConfig,a=>{const r=Qr(a),o=Zr(e,r);return t=o.registrationPromise,o.installationEntry});return n.fid===Se?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Qr(e){const t=e||{fid:Wr(),registrationStatus:0};return kt(t)}function Zr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(L.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=ea(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ta(e)}:{installationEntry:t}}async function ea(e,t){try{const n=await Vr(e,t);return te(e.appConfig,n)}catch(n){throw yt(n)&&n.customData.serverCode===409?await Dt(e.appConfig):await te(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ta(e){let t=await qe(e.appConfig);for(;t.registrationStatus===1;)await St(100),t=await qe(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await ke(e);return a||n}return t}function qe(e){return oe(e,t=>{if(!t)throw L.create("installation-not-found");return kt(t)})}function kt(e){return na(e)?{fid:e.fid,registrationStatus:0}:e}function na(e){return e.registrationStatus===1&&e.registrationTime+gt<Date.now()}/**
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
 */async function ra({appConfig:e,heartbeatServiceProvider:t},n){const a=aa(e,n),r=Lr(e,n),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const i={installation:{sdkVersion:mt,appId:e.appId}},s={method:"POST",headers:r,body:JSON.stringify(i)},c=await _t(()=>fetch(a,s));if(c.ok){const l=await c.json();return vt(l)}else throw await Et("Generate Auth Token",c)}function aa(e,{fid:t}){return`${wt(e)}/${t}/authTokens:generate`}/**
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
 */async function Oe(e,t=!1){let n;const a=await oe(e.appConfig,o=>{if(!Ot(o))throw L.create("not-registered");const i=o.authToken;if(!t&&sa(i))return o;if(i.requestStatus===1)return n=oa(e,t),o;{if(!navigator.onLine)throw L.create("app-offline");const s=la(o);return n=ia(e,s),s}});return n?await n:a.authToken}async function oa(e,t){let n=await Ge(e.appConfig);for(;n.authToken.requestStatus===1;)await St(100),n=await Ge(e.appConfig);const a=n.authToken;return a.requestStatus===0?Oe(e,t):a}function Ge(e){return oe(e,t=>{if(!Ot(t))throw L.create("not-registered");const n=t.authToken;return ua(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ia(e,t){try{const n=await ra(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await te(e.appConfig,a),n}catch(n){if(yt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Dt(e.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await te(e.appConfig,a)}throw n}}function Ot(e){return e!==void 0&&e.registrationStatus===2}function sa(e){return e.requestStatus===2&&!ca(e)}function ca(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+xr}function la(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ua(e){return e.requestStatus===1&&e.requestTime+gt<Date.now()}/**
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
 */async function da(e){const t=e,{installationEntry:n,registrationPromise:a}=await ke(t);return a?a.catch(console.error):Oe(t).catch(console.error),n.fid}/**
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
 */const Nt="installations",ga="installations-internal",ma=e=>{const t=e.getProvider("app").getImmediate(),n=ha(t),a=Ae(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},ba=e=>{const t=e.getProvider("app").getImmediate(),n=Ae(t,Nt).getImmediate();return{getId:()=>da(n),getToken:r=>fa(n,r)}};function ya(){$(new P(Nt,ma,"PUBLIC")),$(new P(ga,ba,"PRIVATE"))}ya();N(ht,Ce);N(ht,Ce,"esm2017");/**
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
 */function C(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ta(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),a=atob(n),r=new Uint8Array(a.length);for(let o=0;o<a.length;++o)r[o]=a.charCodeAt(o);return r}/**
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
 */const ge="fcm_token_details_db",Aa=5,Ye="fcm_token_object_Store";async function Ca(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(ge))return null;let t=null;return(await re(ge,Aa,{upgrade:async(a,r,o,i)=>{var s;if(r<2||!a.objectStoreNames.contains(Ye))return;const c=i.objectStore(Ye),l=await c.index("fcmSenderId").get(e);if(await c.clear(),!!l){if(r===2){const u=l;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(s=u.createTime)!==null&&s!==void 0?s:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:C(u.vapidKey)}}}else if(r===3){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:C(u.auth),p256dh:C(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:C(u.vapidKey)}}}else if(r===4){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:C(u.auth),p256dh:C(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:C(u.vapidKey)}}}}}})).close(),await ue(ge),await ue("fcm_vapid_details_db"),await ue("undefined"),Da(t)?t:null}function Da(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const ka="firebase-messaging-database",Oa=1,G="firebase-messaging-store";let me=null;function Bt(){return me||(me=re(ka,Oa,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(G)}}})),me}async function Na(e){const t=xt(e),a=await(await Bt()).transaction(G).objectStore(G).get(t);if(a)return a;{const r=await Ca(e.appConfig.senderId);if(r)return await Ne(e,r),r}}async function Ne(e,t){const n=xt(e),r=(await Bt()).transaction(G,"readwrite");return await r.objectStore(G).put(t,n),await r.done,t}function xt({appConfig:e}){return e.appId}/**
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
 */async function Ra(e,t){const n=await Re(e),a=Mt(t),r={method:"POST",headers:n,body:JSON.stringify(a)};let o;try{o=await(await fetch(Pe(e.appConfig),r)).json()}catch(i){throw b.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw b.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw b.create("token-subscribe-no-token");return o.token}async function Ba(e,t){const n=await Re(e),a=Mt(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(a)};let o;try{o=await(await fetch(`${Pe(e.appConfig)}/${t.token}`,r)).json()}catch(i){throw b.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw b.create("token-update-failed",{errorInfo:i})}if(!o.token)throw b.create("token-update-no-token");return o.token}async function xa(e,t){const a={method:"DELETE",headers:await Re(e)};try{const o=await(await fetch(`${Pe(e.appConfig)}/${t}`,a)).json();if(o.error){const i=o.error.message;throw b.create("token-unsubscribe-failed",{errorInfo:i})}}catch(r){throw b.create("token-unsubscribe-failed",{errorInfo:r==null?void 0:r.toString()})}}function Pe({projectId:e}){return`${Ea}/projects/${e}/registrations`}async function Re({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Mt({p256dh:e,auth:t,endpoint:n,vapidKey:a}){const r={web:{endpoint:n,auth:t,p256dh:e}};return a!==Pt&&(r.web.applicationPubKey=a),r}/**
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
 */const Ma=7*24*60*60*1e3;async function ja(e){const t=await La(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:C(t.getKey("auth")),p256dh:C(t.getKey("p256dh"))},a=await Na(e.firebaseDependencies);if(a){if(Fa(a.subscriptionOptions,n))return Date.now()>=a.createTime+Ma?$a(e,{token:a.token,createTime:Date.now(),subscriptionOptions:n}):a.token;try{await xa(e.firebaseDependencies,a.token)}catch(r){console.warn(r)}return Xe(e.firebaseDependencies,n)}else return Xe(e.firebaseDependencies,n)}async function $a(e,t){try{const n=await Ba(e.firebaseDependencies,t),a=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Ne(e.firebaseDependencies,a),n}catch(n){throw n}}async function Xe(e,t){const a={token:await Ra(e,t),createTime:Date.now(),subscriptionOptions:t};return await Ne(e,a),a.token}async function La(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ta(t)})}function Fa(e,t){const n=t.vapidKey===e.vapidKey,a=t.endpoint===e.endpoint,r=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&a&&r&&o}/**
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
 */function Qe(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Ha(t,e),Va(t,e),Ua(t,e),t}function Ha(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const a=t.notification.body;a&&(e.notification.body=a);const r=t.notification.image;r&&(e.notification.image=r);const o=t.notification.icon;o&&(e.notification.icon=o)}function Va(e,t){t.data&&(e.data=t.data)}function Ua(e,t){var n,a,r,o,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const s=(r=(a=t.fcmOptions)===null||a===void 0?void 0:a.link)!==null&&r!==void 0?r:(o=t.notification)===null||o===void 0?void 0:o.click_action;s&&(e.fcmOptions.link=s);const c=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
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
 */function Wa(e){if(!e||!e.options)throw be("App Configuration Object");if(!e.name)throw be("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const a of t)if(!n[a])throw be(a);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function be(e){return b.create("missing-app-config-values",{valueName:e})}/**
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
 */class za{constructor(t,n,a){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=Wa(t);this.firebaseDependencies={app:t,appConfig:r,installations:n,analyticsProvider:a}}_delete(){return Promise.resolve()}}/**
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
 */async function jt(e,t){if(!navigator)throw b.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw b.create("permission-blocked");return await Ja(e,t==null?void 0:t.vapidKey),await Ga(e,t==null?void 0:t.serviceWorkerRegistration),ja(e)}/**
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
 */async function Ya(e,t,n){const a=Xa(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(a,{message_id:n[Rt],message_name:n[Ia],message_time:n[_a],message_device_time:Math.floor(Date.now()/1e3)})}function Xa(e){switch(e){case q.NOTIFICATION_CLICKED:return"notification_open";case q.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Qa(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===q.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Qe(n)):e.onMessageHandler.next(Qe(n)));const a=n.data;Ka(a)&&a[Sa]==="1"&&await Ya(e,n.messageType,a)}const Ze="@firebase/messaging",et="0.12.12";/**
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
 */const Za=e=>{const t=new za(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Qa(t,n)),t},eo=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:a=>jt(t,a)}};function to(){$(new P("messaging",Za,"PUBLIC")),$(new P("messaging-internal",eo,"PRIVATE")),N(Ze,et),N(Ze,et,"esm2017")}/**
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
 */async function no(){try{await st()}catch{return!1}return typeof window<"u"&&it()&&_n()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function ro(e=Sr()){return no().then(t=>{if(!t)throw b.create("unsupported-browser")},t=>{throw b.create("indexed-db-unsupported")}),Ae(ct(e),"messaging").getImmediate()}async function ao(e,t){return e=ct(e),jt(e,t)}to();var oo="firebase",io="10.14.1";/**
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
 */N(oo,io,"app");const so={apiKey:"AIzaSyDngyK-w3S7yGmtQa4EXWLaLfCJEqpUyVU",authDomain:"olex-6bc47.firebaseapp.com",projectId:"olex-6bc47",storageBucket:"olex-6bc47.appspot.com",messagingSenderId:"852045853347",appId:"1:852045853347:web:ce59c95ea0d90bd10a4516",measurementId:"G-YSVP4EMESL"},co=dt(so),lo=ro(co),uo={BASE_URL:"/build/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_API_KEY:"AIzaSyDngyK-w3S7yGmtQa4EXWLaLfCJEqpUyVU",VITE_APP_APP_ID:"1:852045853347:web:ce59c95ea0d90bd10a4516",VITE_APP_AUTH_DOMAIN:"olex-6bc47.firebaseapp.com",VITE_APP_MEASUREMENT_ID:"G-YSVP4EMESL",VITE_APP_MESSAGING_SENDER_ID:"852045853347",VITE_APP_NAME:"OLEX Films®",VITE_APP_PROJECT_ID:"olex-6bc47",VITE_APP_STORAGE_BUCKET:"olex-6bc47.appspot.com",VITE_APP_VAPID_KEY:"BGU32plTKOAW6U4R5PhsBWEPr54Q34qNVfd7F9NAIoq7twYSo4GbkuyJvkNwKcR108nHz2HgF_Vqhud7HqPCgoI"},Vo=({customerB:e,csrf_token:t,hash:n,services:a})=>{const[r,o]=p.useState(!1),i=p.useRef(null);p.useRef(null);const[s,c]=p.useState(e),l=p.useRef(null),[u,S]=p.useState(s.player_id!==null),{VITE_APP_VAPID_KEY:T}=uo,[y,H]=p.useState(null),[R,U]=p.useState(null);p.useEffect(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/messaging-sw.js").then(function(f){console.log("Service Worker Kaydı Başarılı:",f),H(f)}).catch(function(f){console.log("Service Worker kaydı başarısız:",f)})},[]);const[w,B]=p.useState(Object.entries(JSON.parse(s.notification_settings)).map(([f,m])=>m?f:null).filter(f=>f!==null)),[I,_]=p.useState(!1);p.useEffect(()=>{let f=Object.entries(JSON.parse(s.notification_settings)).map(([m,v])=>v?m:null).filter(m=>m!==null);f.sort(),w.sort(),JSON.stringify(f)!==JSON.stringify(w)?_(!0):_(!1)},[w]);async function J(){const f=await Notification.requestPermission();if(f==="granted"){const m=await ao(lo,{vapidKey:T,serviceWorkerRegistration:y});o(!0);let v=new FormData;v.append("player_id",m),v.append("action","token"),fetch(route("customer.notifyUpdate",n),{method:"POST",headers:{"X-CSRF-TOKEN":t},body:v}).then(E=>E.json()).then(E=>{E.status?(l.current.show({severity:"success",summary:"Başarılı",detail:E.message,life:3e3}),S(!0),c(E.customer)):l.current.show({severity:"error",summary:"Hata",detail:E.message})}).catch(E=>{l.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{o(!1)})}else f==="denied"&&(l.current.show({severity:"error",summary:"Hata",detail:"Bildirimler Engellendi",life:3e3}),B(w.filter(m=>m!=="push")))}const Y=()=>{["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)?"Notification"in window?(o(!0),J().then(f=>console.log())):l.current.show({severity:"info",summary:"Hata",detail:"Bildirimleri almak için tarayıcınızın URL bölümünde bulunan paylaş butonunu kullanarak uygulamamızı ana ekrana ekleyin. Bu sayede, uygulama yüklemeden hizmetlerinizi anında takip edebilirsiniz.",life:1e4}):(o(!0),J().then(f=>console.log()))};return d.jsxs("div",{className:"p-4",children:[d.jsx(qt,{title:"Müşteri Bilgileri"}),d.jsx(an,{ref:l}),d.jsx(cn,{ref:i,showCloseIcon:!0,closeOnEscape:!0,children:d.jsx(sn,{editable:!1,value:R==null?void 0:R.body,onChange:()=>{}})}),d.jsx("div",{children:d.jsx("img",{className:"mx-auto",src:"/uploads/olex-logo-yatay.svg",alt:"OLEX® Films"})}),d.jsx(W,{legend:"İletişim Bilgileri",className:"mt-4",toggleable:!0,children:d.jsxs("div",{className:"mt-4 gap-y-8 grid",children:[d.jsxs(ie,{children:[d.jsx(se,{id:"username",className:"w-full",value:s.name,readOnly:!0}),d.jsx("label",{htmlFor:"username",children:"Müşteri Adı"})]}),d.jsxs(ie,{children:[d.jsx(se,{id:"email",className:"w-full",value:s.email,readOnly:!0}),d.jsx("label",{htmlFor:"email",children:"Müşteri Mail Adresi"})]}),d.jsxs(ie,{children:[d.jsx(se,{id:"username",className:"w-full",value:s.phone,readOnly:!0}),d.jsx("label",{htmlFor:"username",children:"Müşteri Telefon Numarası"})]})]})}),d.jsx(W,{legend:"İletişim Tercihleri",className:"mt-4",collapsed:!0,toggleable:!0,children:d.jsxs("div",{className:"gap-y-8 grid",children:[d.jsx(nn,{multiple:!0,value:w,onChange:f=>B(f.value),itemTemplate:f=>{let m=w&&w.includes(f.value);return d.jsx("div",{className:"w-full text-center",children:d.jsx("i",{className:f.icon+" p-overlay-badge",style:{fontSize:"1.5rem"},children:m&&d.jsx(rn,{severity:"success",value:d.jsx("i",{className:"pi pi-check"}),style:{fontSize:"1px"}})})})},optionLabel:"value",options:[{icon:"pi pi-envelope",value:"email"},{icon:"pi pi-phone",value:"sms"},{icon:"pi pi-bell",value:"push"}]}),I&&d.jsx("div",{children:d.jsx(X,{label:"Tercihleri Kaydet",icon:"pi pi-save",onClick:()=>{let f=new FormData;f.append("settings",JSON.stringify(w)),f.append("action","settings"),fetch(route("customer.notifyUpdate",n),{method:"POST",headers:{"X-CSRF-TOKEN":t},body:f}).then(m=>m.json()).then(m=>{m.status?(l.current.show({severity:"success",summary:"Başarılı",detail:m.message,life:3e3}),B(Object.entries(JSON.parse(m.customer.notification_settings)).map(([v,E])=>E?v:null).filter(v=>v!==null)),c(m.customer)):l.current.show({severity:"error",summary:"Hata",detail:m.message})}).catch(m=>{l.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})})},severity:"success"})})]})}),w&&w.includes("push")&&d.jsx(W,{legend:"Mobil Bildirim Ayarları",className:"mt-4",toggleable:!0,collapsed:!0,children:d.jsxs("div",{className:"gap-y-8 grid",children:[u===!1&&d.jsx("div",{children:d.jsx(X,{label:"Tarayıcı Bildirimlerini Aç",loading:r,onClick:Y,icon:"pi pi-bell",className:"p-button-success"})}),d.jsx("p",{children:u?"Tarayıcı Bildirimleriniz Açık Durumda":"Tarayıcı Bildirimleri Kapalı Durumda"})]})}),d.jsx(W,{legend:"Aldığım Hizmetler",className:"mt-4",toggleable:!0,collapsed:!0,children:d.jsxs(on,{value:a,removableSort:!0,paginator:!0,paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",rowsPerPageOptions:[5,10,25,50],rows:10,dataKey:"id",loading:r,emptyMessage:"Hizmet bulunamadı.",currentPageReportTemplate:"{first}. ile {last}. arası toplam {totalRecords} kayıttan",children:[d.jsx(Be,{field:"service_no",sortable:!0,header:"Hizmet Numarası",body:({service_no:f})=>d.jsx(X,{label:f,link:!0,onClick:()=>{window.open(route("warranty.index",f),"_blank")}})}),d.jsx(Be,{field:"car.brand",sortable:!0,header:"Araç",body:f=>d.jsx(X,{label:f.car.brand+"-"+f.car.model,size:"small",link:!0,onClick:m=>{U(f),i.current.toggle(m)}})})]})})]})};export{Vo as default};

import{r as s,P as be,O as w,D as O,c as D,I as ge}from"./app-pP88dXXD.js";import{C as we,b as Ie,c as Oe,e as Pe}from"./ripple.esm-3EqM4Xiq.js";import{T as ke}from"./index.esm-Dml4Rf6J.js";import{K as U}from"./inputtext.esm-CUVRfrTN.js";import{T as xe}from"./tooltip.esm-CzuGfRo8.js";function F(){return F=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(t[u]=a[u])}return t},F.apply(this,arguments)}function P(t){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},P(t)}function Ce(t,r){if(P(t)!=="object"||t===null)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var u=a.call(t,r||"default");if(P(u)!=="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Se(t){var r=Ce(t,"string");return P(r)==="symbol"?r:String(r)}function _e(t,r,a){return r=Se(r),r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}function K(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,u=new Array(r);a<r;a++)u[a]=t[a];return u}function De(t){if(Array.isArray(t))return K(t)}function Re(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function X(t,r){if(t){if(typeof t=="string")return K(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return K(t,r)}}function Ee(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(t){return De(t)||Re(t)||X(t)||Ee()}function Ae(t){if(Array.isArray(t))return t}function Te(t,r){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var u,e,h,b,m=[],d=!0,k=!1;try{if(h=(a=a.call(t)).next,r===0){if(Object(a)!==a)return;d=!1}else for(;!(d=(u=h.call(a)).done)&&(m.push(u.value),m.length!==r);d=!0);}catch(x){k=!0,e=x}finally{try{if(!d&&a.return!=null&&(b=a.return(),Object(b)!==b))return}finally{if(k)throw e}}return m}}function Fe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(t,r){return Ae(t)||Te(t,r)||X(t,r)||Fe()}var Ke=`
@layer primereact {
    .p-chips {
        display: inline-flex;
    }
    
    .p-chips-multiple-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .p-chips-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }
    
    .p-chips-input-token {
        flex: 1 1 auto;
        display: inline-flex;
    }
    
    .p-chips-token-icon {
        cursor: pointer;
    }
    
    .p-chips-input-token input {
        border: 0 none;
        outline: 0 none;
        background-color: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
    }
    
    .p-fluid .p-chips {
        display: flex;
    }
    
    .p-chips-icon-left,
    .p-chips-icon-right {
        position: relative;
        display: inline-block;
    }
    
    .p-chips-icon-left > i,
    .p-chips-icon-right > i,
    .p-chips-icon-left > svg,
    .p-chips-icon-right > svg,
    .p-chips-icon-left > .p-chips-prefix,
    .p-chips-icon-right > .p-chips-suffix {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }
    
    .p-fluid .p-chips-icon-left,
    .p-fluid .p-chips-icon-right {
        display: block;
        width: 100%;
    }
}
`,je={removeTokenIcon:"p-chips-token-icon",label:"p-chips-token-label",token:function(r){var a=r.focusedIndex,u=r.index;return D("p-chips-token",{"p-focus":a===u})},inputToken:"p-chips-input-token",container:function(r){var a=r.isFilled;return D("p-inputtext p-chips-multiple-container",{"p-variant-filled":a})},root:function(r){var a=r.isFilled,u=r.focusedState,e=r.disabled,h=r.invalid;return D("p-chips p-component p-inputwrapper",{"p-inputwrapper-filled":a,"p-inputwrapper-focus":u,"p-disabled":e,"p-invalid":h,"p-focus":u})}},_=we.extend({defaultProps:{__TYPE:"Chips",addOnBlur:null,allowDuplicate:!0,ariaLabelledBy:null,autoFocus:!1,className:null,disabled:null,id:null,inputId:null,inputRef:null,invalid:!1,itemTemplate:null,keyfilter:null,max:null,name:null,onAdd:null,onBlur:null,onChange:null,onFocus:null,onKeyDown:null,onRemove:null,placeholder:null,readOnly:!1,removable:!0,removeIcon:null,separator:null,style:null,tooltip:null,tooltipOptions:null,value:null,children:void 0},css:{classes:je,styles:Ke}});function z(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);r&&(u=u.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,u)}return a}function J(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?z(Object(a),!0).forEach(function(u){_e(t,u,a[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach(function(u){Object.defineProperty(t,u,Object.getOwnPropertyDescriptor(a,u))})}return t}var Be=s.memo(s.forwardRef(function(t,r){var a=Ie(),u=s.useContext(be),e=_.getProps(t,u),h=s.useState(!1),b=W(h,2),m=b[0],d=b[1],k=s.useState(null),x=W(k,2),v=x[0],C=x[1],R=_.setMetaData({props:e,state:{focused:m}}),y=R.ptm,g=R.cx,Y=R.isUnstyled;Oe(_.css.styles,Y,{name:"chips"});var j=s.useRef(null),B=s.useRef(null),p=s.useRef(e.inputRef),E=function(n,o){if(!(e.disabled&&e.readOnly)){var i=S(e.value),l=i.splice(o,1);H(l,o)&&(e.onRemove&&e.onRemove({originalEvent:n,value:l}),e.onChange&&e.onChange({originalEvent:n,value:i,stopPropagation:function(){n==null||n.stopPropagation()},preventDefault:function(){n==null||n.preventDefault()},target:{name:e.name,id:e.id,value:i}}))}},A=function(n,o,i){if(o&&o.trim().length){var l=e.value?S(e.value):[];if(e.allowDuplicate||l.indexOf(o)===-1){var f=!0;e.onAdd&&(f=e.onAdd({originalEvent:n,value:o})),f!==!1&&l.push(o)}N(n,l,i)}},q=function(){O.focus(p.current)},G=function(n){switch(n.code){case"ArrowLeft":Q();break;case"ArrowRight":Z();break;case"Backspace":V(n);break}},Q=function(){var n=v;p.current.value.length===0&&e.value&&e.value.length>0&&(n=n===null?e.value.length-1:n-1,n<0&&(n=0)),C(n)},Z=function(){var n=v;p.current.value.length===0&&e.value&&e.value.length>0&&(n===e.value.length-1?(n=null,p.current.focus()):n++),C(n)},V=function(n){v!==null&&E(n,v)},ee=function(n){var o=n.target.value,i=e.value||[];if(e.onKeyDown&&e.onKeyDown(n),!n.defaultPrevented)switch(n.key){case"Backspace":o.length===0&&i.length>0&&E(n,i.length-1);break;case"Enter":o&&o.trim().length&&(!e.max||e.max>i.length)&&A(n,o,!0);break;case"ArrowLeft":o.length===0&&i&&i.length>0&&O.focus(B.current);break;case"ArrowRight":n.stopPropagation();break;default:e.keyfilter&&U.onKeyPress(n,e.keyfilter),L()&&n.preventDefault();break}},N=function(n,o,i){e.onChange&&e.onChange({originalEvent:n,value:o,stopPropagation:function(){n==null||n.stopPropagation()},preventDefault:function(){n==null||n.preventDefault()},target:{name:e.name,id:e.id,value:o}}),p.current.value="",i&&n.preventDefault()},ne=function(n){var o,i=(o=n.target.value)===null||o===void 0?void 0:o.trim();if(i===e.separator){p.current.value="";return}if(e.separator&&i.endsWith(e.separator)){var l=i.slice(0,-1);A(n,l)}},te=function(n){if(e.separator){var o=e.separator.replace("\\n",`
`).replace("\\r","\r").replace("\\t","	"),i=(n.clipboardData||window.clipboardData).getData("Text");if(e.keyfilter&&U.onPaste(n,e.keyfilter),i){var l=e.value||[],f=i.split(o);f=f.filter(function(I){return(e.allowDuplicate||l.indexOf(I)===-1)&&I.trim().length}),l=[].concat(S(l),S(f)),N(n,l,!0)}}},re=function(n){d(!0)},ae=function(){C(-1),d(!1)},oe=function(n){d(!0),C(null),e.onFocus&&e.onFocus(n)},ie=function(n){if(e.addOnBlur){var o=n.target.value,i=e.value||[];o&&o.trim().length&&(!e.max||e.max>i.length)&&A(n,o,!0)}d(!1),e.onBlur&&e.onBlur(n)},L=function(){return e.max&&e.value&&e.max===e.value.length},M=p.current&&p.current.value,$=s.useMemo(function(){return w.isNotEmpty(e.value)||w.isNotEmpty(M)},[e.value,M]),H=function(n,o){return w.getPropValue(e.removable,{value:n,index:o,props:e})};s.useImperativeHandle(r,function(){return{props:e,focus:function(){return O.focus(p.current)},getElement:function(){return j.current},getInput:function(){return p.current}}}),s.useEffect(function(){w.combinedRefs(p,e.inputRef)},[p,e.inputRef]),Pe(function(){e.autoFocus&&O.focus(p.current,e.autoFocus)});var le=function(){return v!==null?"".concat(e.inputId,"_chips_item_").concat(v):null},ue=function(n,o){var i=a({className:g("removeTokenIcon"),onClick:function(T){return E(T,o)},"aria-hidden":"true"},y("removeTokenIcon")),l=e.removeIcon||s.createElement(ke,i),f=ge.getJSXIcon(l,J({},i),{props:e});return!e.disabled&&!e.readOnly&&H(n,o)?f:null},ce=function(n,o){var i=e.itemTemplate?e.itemTemplate(n):n,l=a({className:g("label")},y("label")),f=s.createElement("span",l,i),I=ue(n,o),T=a({key:"".concat(o,"_").concat(n),id:e.inputId+"_chips_item_"+o,role:"option","aria-label":n,className:g("token",{focusedIndex:v,index:o}),"aria-selected":!0,"aria-setsize":e.value.length,"aria-posinset":o+1,"data-p-highlight":!0,"data-p-focused":v===o},y("token"));return s.createElement("li",T,f,I)},se=function(){var n=a({className:g("inputToken")},y("inputToken")),o=a(J({id:e.inputId,ref:p,placeholder:e.placeholder,type:"text",enterKeyHint:"enter",name:e.name,disabled:e.disabled||L(),onKeyDown:function(l){return ee(l)},onChange:function(l){return ne(l)},onPaste:function(l){return te(l)},onFocus:function(l){return oe(l)},onBlur:function(l){return ie(l)},readOnly:e.readOnly},ve),y("input"));return s.createElement("li",n,s.createElement("input",o))},pe=function(){return e.value?e.value.map(ce):null},fe=function(){var n=pe(),o=se(),i=a({ref:B,className:g("container",{isFilled:$}),onClick:function(f){return q()},onKeyDown:function(f){return G(f)},tabIndex:-1,role:"listbox","aria-orientation":"horizontal","aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-activedescendant":m?le():void 0,"data-p-disabled":e.disabled,"data-p-focus":m,onFocus:re,onBlur:ae},y("container"));return s.createElement("ul",i,n,o)},de=w.isNotEmpty(e.tooltip),me=_.getOtherProps(e),ve=w.reduceKeys(me,O.ARIA_PROPS),ye=fe(),he=a({id:e.id,ref:j,className:D(e.className,g("root",{isFilled:$,focusedState:m,disabled:e.disabled,invalid:e.invalid})),style:e.style},y("root"));return s.createElement(s.Fragment,null,s.createElement("div",he,ye),de&&s.createElement(xe,F({target:p,content:e.tooltip,pt:y("tooltip")},e.tooltipOptions)))}));Be.displayName="Chips";export{Be as C};

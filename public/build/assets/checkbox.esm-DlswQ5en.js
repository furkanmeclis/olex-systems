import{r as l,P as re,c as J,b as D,D as y,U as Oe,Z,I as oe,l as Pe,O as G}from"./app-CVJZ1rcI.js";import{C as ae,b as le,c as ie,h as xe,m as Ee,n as Ce,e as ce,g as Se,P as ke,E as we,R as Ie,f as je}from"./ripple.esm-CUuqICLC.js";import{C as _e}from"./csstransition.esm-Cypi1K43.js";import{T as Re}from"./index.esm-B-7qKS2t.js";import{O as M}from"./overlayservice.esm-CGLbCpdx.js";import{C as Te}from"./index.esm-G63tnVm_.js";import{T as De}from"./tooltip.esm-Cw7wRsUZ.js";function F(){return F=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},F.apply(this,arguments)}function A(n){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(n)}function Ne(n,e){if(A(n)!=="object"||n===null)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var o=r.call(n,e||"default");if(A(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Ae(n){var e=Ne(n,"string");return A(e)==="symbol"?e:String(e)}function Be(n,e,r){return e=Ae(e),e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Le(n){if(Array.isArray(n))return n}function $e(n,e){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var o,t,S,v,d=[],P=!0,m=!1;try{if(S=(r=r.call(n)).next,e===0){if(Object(r)!==r)return;P=!1}else for(;!(P=(o=S.call(r)).done)&&(d.push(o.value),d.length!==e);P=!0);}catch(f){m=!0,t=f}finally{try{if(!P&&r.return!=null&&(v=r.return(),Object(v)!==v))return}finally{if(m)throw t}}return d}}function W(n,e){(e==null||e>n.length)&&(e=n.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=n[r];return o}function Me(n,e){if(n){if(typeof n=="string")return W(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W(n,e)}}function Ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(n,e){return Le(n)||$e(n,e)||Me(n,e)||Ue()}var Fe={root:function(e){var r=e.props,o=e.context;return J("p-overlaypanel p-component",r.className,{"p-input-filled":o&&o.inputStyle==="filled"||D.inputStyle==="filled","p-ripple-disabled":o&&o.ripple===!1||D.ripple===!1})},closeIcon:"p-overlaypanel-close-icon",closeButton:"p-overlaypanel-close p-link",content:"p-overlaypanel-content",transition:"p-overlaypanel"},Ve=`
@layer primereact {
    .p-overlaypanel {
        position: absolute;
        margin-top: 10px;
        /* Github #3122: Prevent animation flickering  */
        top: -9999px;
        left: -9999px;
    }
    
    .p-overlaypanel-flipped {
        margin-top: 0;
        margin-bottom: 10px;
    }
    
    .p-overlaypanel-close {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }
    
    /* Animation */
    .p-overlaypanel-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }
    
    .p-overlaypanel-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-overlaypanel-enter-done {
        transform: none;
    }
    
    .p-overlaypanel-exit {
        opacity: 1;
    }
    
    .p-overlaypanel-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }
    
    .p-overlaypanel:after, .p-overlaypanel:before {
        bottom: 100%;
        left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }
    
    .p-overlaypanel:after {
        border-width: 8px;
        margin-left: -8px;
    }
    
    .p-overlaypanel:before {
        border-width: 10px;
        margin-left: -10px;
    }
    
    .p-overlaypanel-flipped:after, .p-overlaypanel-flipped:before {
        bottom: auto;
        top: 100%;
    }
    
    .p-overlaypanel.p-overlaypanel-flipped:after {
        border-bottom-color: transparent;
    }
    
    .p-overlaypanel.p-overlaypanel-flipped:before {
        border-bottom-color: transparent
    }
}
`,T=ae.extend({defaultProps:{__TYPE:"OverlayPanel",id:null,dismissable:!0,showCloseIcon:!1,closeIcon:null,style:null,className:null,appendTo:null,breakpoints:null,ariaCloseLabel:null,transitionOptions:null,onShow:null,onHide:null,children:void 0,closeOnEscape:!0},css:{classes:Fe,styles:Ve}});function ee(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,o)}return r}function He(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?ee(Object(r),!0).forEach(function(o){Be(n,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(r,o))})}return n}var Ke=l.forwardRef(function(n,e){var r=le(),o=l.useContext(re),t=T.getProps(n,o),S=l.useState(!1),v=Q(S,2),d=v[0],P=v[1],m=T.setMetaData({props:t,state:{visible:d}}),f=m.ptm,x=m.cx;m.sx;var I=m.isUnstyled;ie(T.css.styles,I,{name:"overlaypanel"});var j=l.useRef(""),i=l.useRef(null),u=l.useRef(null),w=l.useRef(!1),k=l.useRef(null),E=l.useRef(null),V=xe({target:u,overlay:i,listener:function(a,s){var O=s.type,R=s.valid;if(R)switch(O){case"outside":t.dismissable&&!w.current&&_();break;case"resize":case"scroll":case"orientationchange":$();break}w.current=!1},when:d}),L=Q(V,2),b=L[0],c=L[1],g=d&&t.closeOnEscape,C=Ee("overlay-panel",g);Ce({callback:function(){_()},when:g&&C,priority:[we.OVERLAY_PANEL,C]});var h=function(a){return i&&i.current&&!(i.current.isSameNode(a)||i.current.contains(a))},H=function(a,s){return u.current!=null&&u.current!==(s||a.currentTarget||a.target)},K=function(a){_(),a.preventDefault()},se=function(a){w.current=!0,M.emit("overlay-click",{originalEvent:a,target:u.current})},X=function(){w.current=!0},ue=function(a,s){d?(_(),H(a,s)&&(u.current=s||a.currentTarget||a.target,setTimeout(function(){Y(a,u.current)},200))):Y(a,s)},Y=function(a,s){u.current=s||a.currentTarget||a.target,d?$():(P(!0),E.current=function(O){!h(O.target)&&(w.current=!0)},M.on("overlay-click",E.current))},_=function(){P(!1),M.off("overlay-click",E.current),E.current=null},pe=function(){i.current.setAttribute(j.current,""),Z.set("overlay",i.current,o&&o.autoZIndex||D.autoZIndex,o&&o.zIndex.overlay||D.zIndex.overlay),y.addStyles(i.current,{position:"absolute",top:"0",left:"0"}),$()},fe=function(){b(),t.onShow&&t.onShow()},de=function(){c()},ve=function(){Z.clear(i.current),t.onHide&&t.onHide()},$=function(){if(u.current&&i.current){y.absolutePosition(i.current,u.current);var a=y.getOffset(i.current),s=y.getOffset(u.current),O=0;a.left<s.left&&(O=s.left-a.left),i.current.style.setProperty("--overlayArrowLeft","".concat(O,"px")),a.top<s.top?(i.current.setAttribute("data-p-overlaypanel-flipped","true"),I&&y.addClass(i.current,"p-overlaypanel-flipped")):(i.current.setAttribute("data-p-overlaypanel-flipped","false"),I&&y.removeClass(i.current,"p-overlaypanel-flipped"))}},ye=function(){if(!k.current){k.current=y.createInlineStyle(o&&o.nonce||D.nonce,o&&o.styleContainer);var a="";for(var s in t.breakpoints)a=a+`
                    @media screen and (max-width: `.concat(s,`) {
                        .p-overlaypanel[`).concat(j.current,`] {
                            width: `).concat(t.breakpoints[s],`;
                        }
                    }
                `);k.current.innerHTML=a}};ce(function(){j.current=Oe(),t.breakpoints&&ye()}),Se(function(){k.current=y.removeInlineStyle(k.current),E.current&&(M.off("overlay-click",E.current),E.current=null),Z.clear(i.current)}),l.useImperativeHandle(e,function(){return{props:t,toggle:ue,show:Y,hide:_,align:$,getElement:function(){return i.current}}});var me=function(){var a=r({className:x("closeIcon"),"aria-hidden":!0},f("closeIcon")),s=t.closeIcon||l.createElement(Re,a),O=oe.getJSXIcon(s,He({},a),{props:t}),R=t.ariaCloseLabel||Pe("close"),z=r({type:"button",className:x("closeButton"),onClick:function(he){return K(he)},"aria-label":R},f("closeButton"));return t.showCloseIcon?l.createElement("button",z,O,l.createElement(Ie,null)):null},be=function(){var a=me(),s=r({id:t.id,className:x("root",{context:o}),style:t.style,onClick:function(q){return se(q)}},T.getOtherProps(t),f("root")),O=r({className:x("content"),onClick:function(q){return X()},onMouseDown:X},T.getOtherProps(t),f("content")),R=r({classNames:x("transition"),in:d,timeout:{enter:120,exit:100},options:t.transitionOptions,unmountOnExit:!0,onEnter:pe,onEntered:fe,onExit:de,onExited:ve},f("transition"));return l.createElement(_e,F({nodeRef:i},R),l.createElement("div",F({ref:i},s),l.createElement("div",O,t.children),a))},ge=be();return l.createElement(ke,{element:ge,appendTo:t.appendTo})});Ke.displayName="OverlayPanel";function N(){return N=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},N.apply(this,arguments)}function B(n){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(n)}function Ye(n,e){if(B(n)!=="object"||n===null)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var o=r.call(n,e||"default");if(B(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ze(n){var e=Ye(n,"string");return B(e)==="symbol"?e:String(e)}function qe(n,e,r){return e=ze(e),e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var Ze={box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon",root:function(e){var r=e.props,o=e.checked;return J("p-checkbox p-component",{"p-highlight":o,"p-disabled":r.disabled,"p-invalid":r.invalid,"p-variant-filled":r.variant==="filled"})}},U=ae.extend({defaultProps:{__TYPE:"Checkbox",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,icon:null,id:null,inputId:null,inputRef:null,invalid:!1,name:null,onChange:null,onContextMenu:null,onMouseDown:null,readOnly:!1,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,value:null,children:void 0},css:{classes:Ze}});function ne(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,o)}return r}function te(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?ne(Object(r),!0).forEach(function(o){qe(n,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(r,o))})}return n}var Ge=l.memo(l.forwardRef(function(n,e){var r=le(),o=l.useContext(re),t=U.getProps(n,o),S=U.setMetaData({props:t,context:{checked:t.checked===t.trueValue,disabled:t.disabled}}),v=S.ptm,d=S.cx,P=S.isUnstyled;ie(U.css.styles,P,{name:"checkbox"});var m=l.useRef(null),f=l.useRef(t.inputRef),x=function(){return t.checked===t.trueValue},I=function(c){if(!(t.disabled||t.readonly)&&t.onChange){var g,C=x(),h=C?t.falseValue:t.trueValue,H={originalEvent:c,value:t.value,checked:h,stopPropagation:function(){c==null||c.stopPropagation()},preventDefault:function(){c==null||c.preventDefault()},target:{type:"checkbox",name:t.name,id:t.id,value:t.value,checked:h}};if(t==null||(g=t.onChange)===null||g===void 0||g.call(t,H),c.defaultPrevented)return;y.focus(f.current)}},j=function(){var c;t==null||(c=t.onFocus)===null||c===void 0||c.call(t)},i=function(){var c;t==null||(c=t.onBlur)===null||c===void 0||c.call(t)};l.useImperativeHandle(e,function(){return{props:t,focus:function(){return y.focus(f.current)},getElement:function(){return m.current},getInput:function(){return f.current}}}),l.useEffect(function(){G.combinedRefs(f,t.inputRef)},[f,t.inputRef]),je(function(){f.current.checked=x()},[t.checked,t.trueValue]),ce(function(){t.autoFocus&&y.focus(f.current,t.autoFocus)});var u=x(),w=G.isNotEmpty(t.tooltip),k=U.getOtherProps(t),E=r({id:t.id,className:J(t.className,d("root",{checked:u})),style:t.style,"data-p-highlight":u,"data-p-disabled":t.disabled,onContextMenu:t.onContextMenu,onMouseDown:t.onMouseDown},k,v("root")),V=function(){var c=G.reduceKeys(k,y.ARIA_PROPS),g=r(te({id:t.inputId,type:"checkbox",className:d("input"),name:t.name,tabIndex:t.tabIndex,onFocus:function(h){return j()},onBlur:function(h){return i()},onChange:function(h){return I(h)},disabled:t.disabled,readOnly:t.readOnly,required:t.required,"aria-invalid":t.invalid,checked:u},c),v("input"));return l.createElement("input",N({ref:f},g))},L=function(){var c=r({className:d("icon")},v("icon")),g=r({className:d("box",{checked:u}),"data-p-highlight":u,"data-p-disabled":t.disabled},v("box")),C=u?t.icon||l.createElement(Te,c):null,h=oe.getJSXIcon(C,te({},c),{props:t,checked:u});return l.createElement("div",g,h)};return l.createElement(l.Fragment,null,l.createElement("div",N({ref:m},E),V(),L()),w&&l.createElement(De,N({target:m,content:t.tooltip,pt:v("tooltip")},t.tooltipOptions)))}));Ge.displayName="Checkbox";export{Ge as C,Ke as O};

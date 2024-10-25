import{r as s,P as ie,c as ce,b as S,D as y,U as se,Z as D,I as ue,l as pe}from"./app-BkrWYZtC.js";import{C as fe,b as ye,c as ve,h as de,m as me,n as be,e as ge,g as Oe,P as he,E as Pe,R as Ee}from"./ripple.esm-BZzQmJ3T.js";import{C as xe}from"./csstransition.esm-1psgkuxi.js";import{T as Ce}from"./index.esm-8o80j0rC.js";import{O as j}from"./overlayservice.esm-hBC-YJAC.js";function _(){return _=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_.apply(this,arguments)}function w(e){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},w(e)}function Se(e,n){if(w(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(w(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function we(e){var n=Se(e,"string");return w(n)==="symbol"?n:String(n)}function Ie(e,n,t){return n=we(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ke(e){if(Array.isArray(e))return e}function je(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,I,g,u=[],v=!0,d=!1;try{if(I=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;v=!1}else for(;!(v=(r=I.call(t)).done)&&(u.push(r.value),u.length!==n);v=!0);}catch(m){d=!0,a=m}finally{try{if(!v&&t.return!=null&&(g=t.return(),Object(g)!==g))return}finally{if(d)throw a}}return u}}function Y(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _e(e,n){if(e){if(typeof e=="string")return Y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Y(e,n)}}function Re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(e,n){return ke(e)||je(e,n)||_e(e,n)||Re()}var Te={root:function(n){var t=n.props,r=n.context;return ce("p-overlaypanel p-component",t.className,{"p-input-filled":r&&r.inputStyle==="filled"||S.inputStyle==="filled","p-ripple-disabled":r&&r.ripple===!1||S.ripple===!1})},closeIcon:"p-overlaypanel-close-icon",closeButton:"p-overlaypanel-close p-link",content:"p-overlaypanel-content",transition:"p-overlaypanel"},Ae=`
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
`,C=fe.extend({defaultProps:{__TYPE:"OverlayPanel",id:null,dismissable:!0,showCloseIcon:!1,closeIcon:null,style:null,className:null,appendTo:null,breakpoints:null,ariaCloseLabel:null,transitionOptions:null,onShow:null,onHide:null,children:void 0,closeOnEscape:!0},css:{classes:Te,styles:Ae}});function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Ne(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?M(Object(t),!0).forEach(function(r){Ie(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Le=s.forwardRef(function(e,n){var t=ye(),r=s.useContext(ie),a=C.getProps(e,r),I=s.useState(!1),g=K(I,2),u=g[0],v=g[1],d=C.setMetaData({props:a,state:{visible:u}}),m=d.ptm,O=d.cx;d.sx;var R=d.isUnstyled;ve(C.css.styles,R,{name:"overlaypanel"});var T=s.useRef(""),l=s.useRef(null),p=s.useRef(null),h=s.useRef(!1),P=s.useRef(null),b=s.useRef(null),Z=de({target:p,overlay:l,listener:function(o,i){var f=i.type,x=i.valid;if(x)switch(f){case"outside":a.dismissable&&!h.current&&E();break;case"resize":case"scroll":case"orientationchange":k();break}h.current=!1},when:u}),U=K(Z,2),$=U[0],G=U[1],B=u&&a.closeOnEscape,H=me("overlay-panel",B);be({callback:function(){E()},when:B&&H,priority:[Pe.OVERLAY_PANEL,H]});var V=function(o){return l&&l.current&&!(l.current.isSameNode(o)||l.current.contains(o))},q=function(o,i){return p.current!=null&&p.current!==(i||o.currentTarget||o.target)},J=function(o){E(),o.preventDefault()},W=function(o){h.current=!0,j.emit("overlay-click",{originalEvent:o,target:p.current})},z=function(){h.current=!0},X=function(o,i){u?(E(),q(o,i)&&(p.current=i||o.currentTarget||o.target,setTimeout(function(){A(o,p.current)},200))):A(o,i)},A=function(o,i){p.current=i||o.currentTarget||o.target,u?k():(v(!0),b.current=function(f){!V(f.target)&&(h.current=!0)},j.on("overlay-click",b.current))},E=function(){v(!1),j.off("overlay-click",b.current),b.current=null},F=function(){l.current.setAttribute(T.current,""),D.set("overlay",l.current,r&&r.autoZIndex||S.autoZIndex,r&&r.zIndex.overlay||S.zIndex.overlay),y.addStyles(l.current,{position:"absolute",top:"0",left:"0"}),k()},Q=function(){$(),a.onShow&&a.onShow()},ee=function(){G()},ne=function(){D.clear(l.current),a.onHide&&a.onHide()},k=function(){if(p.current&&l.current){y.absolutePosition(l.current,p.current);var o=y.getOffset(l.current),i=y.getOffset(p.current),f=0;o.left<i.left&&(f=i.left-o.left),l.current.style.setProperty("--overlayArrowLeft","".concat(f,"px")),o.top<i.top?(l.current.setAttribute("data-p-overlaypanel-flipped","true"),R&&y.addClass(l.current,"p-overlaypanel-flipped")):(l.current.setAttribute("data-p-overlaypanel-flipped","false"),R&&y.removeClass(l.current,"p-overlaypanel-flipped"))}},te=function(){if(!P.current){P.current=y.createInlineStyle(r&&r.nonce||S.nonce,r&&r.styleContainer);var o="";for(var i in a.breakpoints)o=o+`
                    @media screen and (max-width: `.concat(i,`) {
                        .p-overlaypanel[`).concat(T.current,`] {
                            width: `).concat(a.breakpoints[i],`;
                        }
                    }
                `);P.current.innerHTML=o}};ge(function(){T.current=se(),a.breakpoints&&te()}),Oe(function(){P.current=y.removeInlineStyle(P.current),b.current&&(j.off("overlay-click",b.current),b.current=null),D.clear(l.current)}),s.useImperativeHandle(n,function(){return{props:a,toggle:X,show:A,hide:E,align:k,getElement:function(){return l.current}}});var re=function(){var o=t({className:O("closeIcon"),"aria-hidden":!0},m("closeIcon")),i=a.closeIcon||s.createElement(Ce,o),f=ue.getJSXIcon(i,Ne({},o),{props:a}),x=a.ariaCloseLabel||pe("close"),N=t({type:"button",className:O("closeButton"),onClick:function(le){return J(le)},"aria-label":x},m("closeButton"));return a.showCloseIcon?s.createElement("button",N,f,s.createElement(Ee,null)):null},oe=function(){var o=re(),i=t({id:a.id,className:O("root",{context:r}),style:a.style,onClick:function(L){return W(L)}},C.getOtherProps(a),m("root")),f=t({className:O("content"),onClick:function(L){return z()},onMouseDown:z},C.getOtherProps(a),m("content")),x=t({classNames:O("transition"),in:u,timeout:{enter:120,exit:100},options:a.transitionOptions,unmountOnExit:!0,onEnter:F,onEntered:Q,onExit:ee,onExited:ne},m("transition"));return s.createElement(xe,_({nodeRef:l},x),s.createElement("div",_({ref:l},i),s.createElement("div",f,a.children),o))},ae=oe();return s.createElement(he,{element:ae,appendTo:a.appendTo})});Le.displayName="OverlayPanel";export{Le as O};

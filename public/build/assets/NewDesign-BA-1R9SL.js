import{r as l,P as he,Z as te,b as W,c as P,D as re,O as ne,l as Ce,I as De,j as e,K as Re,L as Ae}from"./app-BXkr8zNq.js";import{C as ge,u as ve,a as ye,g as Te,h as Be,E as ze,i as Ve,j as Me,e as se,f as He,P as Le,R as Ue}from"./ripple.esm-CO6ppkcz.js";import{C as me}from"./csstransition.esm-DO8sCmhe.js";import{T as Ke}from"./index.esm-Tzo3vGBe.js";import{I as ae}from"./inputtext.esm-CYZkVV1t.js";import{P as $e}from"./password.esm-CZeyBe0e.js";import{B as Fe}from"./button.esm-C-xL3jCS.js";import{m as E}from"./motion-B6t-CxPz.js";import{T as Ge}from"./toast.esm-BnSCxBKT.js";import{g as Je,m as Xe}from"./index-CNywltEg.js";import"./tooltip.esm-D01t5DTH.js";import"./index.esm-DSabp6ZT.js";import"./overlayservice.esm-Cd2Ycvpd.js";import"./index.esm-Dfk06BrO.js";import"./index.esm-Dkg0Ut6z.js";import"./index.esm-DjwOeZCJ.js";import"./index.esm-CmunUKt0.js";import"./TransitionGroup-CaNo7MUT.js";function D(){return D=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},D.apply(this,arguments)}function A(t){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},A(t)}function Ye(t,r){if(A(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,r||"default");if(A(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function We(t){var r=Ye(t,"string");return A(r)==="symbol"?r:String(r)}function qe(t,r,n){return r=We(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function Ze(t){if(Array.isArray(t))return t}function Qe(t,r){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a,s,o,b,d=[],u=!0,k=!1;try{if(o=(n=n.call(t)).next,r===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(a=o.call(n)).done)&&(d.push(a.value),d.length!==r);u=!0);}catch(g){k=!0,s=g}finally{try{if(!u&&n.return!=null&&(b=n.return(),Object(b)!==b))return}finally{if(k)throw s}}return d}}function pe(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,a=new Array(r);n<r;n++)a[n]=t[n];return a}function et(t,r){if(t){if(typeof t=="string")return pe(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pe(t,r)}}function tt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(t,r){return Ze(t)||Qe(t,r)||et(t,r)||tt()}var rt={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(r){var n=r.props,a=r.maskVisibleState,s=["left","right","top","bottom"],o=s.find(function(b){return b===n.position});return P("p-sidebar-mask",o&&!n.fullScreen?"p-sidebar-".concat(o):"",{"p-component-overlay p-component-overlay-enter":n.modal,"p-sidebar-mask-scrollblocker":n.blockScroll,"p-sidebar-visible":a,"p-sidebar-full":n.fullScreen},n.maskClassName)},header:function(r){var n=r.props;return P("p-sidebar-header",{"p-sidebar-custom-header":n.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(r){var n=r.props,a=r.context;return P("p-sidebar p-component",n.className,{"p-input-filled":a&&a.inputStyle==="filled"||W.inputStyle==="filled","p-ripple-disabled":a&&a.ripple===!1||W.ripple===!1})},transition:"p-sidebar"},nt=`
@layer primereact {
    .p-sidebar-mask {
        display: none;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }
    
    .p-sidebar-visible {
        display: flex;
    }
    
    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
    }
    
    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }
    
    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .p-sidebar-custom-header {
        justify-content: space-between;
    }
    
    .p-sidebar-icons {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
    
    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw;
        height: 100vh;
        max-height: 100%;
        top: 0px;
        left: 0px;
    }
    
    /* Animation */
    /* Top, Bottom, Left and Right */
    .p-sidebar-top .p-sidebar-enter,
    .p-sidebar-top .p-sidebar-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }
    
    .p-sidebar-bottom .p-sidebar-enter,
    .p-sidebar-bottom .p-sidebar-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }
    
    .p-sidebar-left .p-sidebar-enter,
    .p-sidebar-left .p-sidebar-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }
    
    .p-sidebar-right .p-sidebar-enter,
    .p-sidebar-right .p-sidebar-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }
    
    .p-sidebar-top .p-sidebar-enter-active,
    .p-sidebar-bottom .p-sidebar-enter-active,
    .p-sidebar-left .p-sidebar-enter-active,
    .p-sidebar-right .p-sidebar-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s;
    }
    
    .p-sidebar-top .p-sidebar-enter-done,
    .p-sidebar-bottom .p-sidebar-enter-done,
    .p-sidebar-left .p-sidebar-enter-done,
    .p-sidebar-right .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-top .p-sidebar-exit-active,
    .p-sidebar-bottom .p-sidebar-exit-active,
    .p-sidebar-left .p-sidebar-exit-active,
    .p-sidebar-right .p-sidebar-exit-active {
        transition: all 0.3s;
    }
    
    /* Full */
    .p-sidebar-full .p-sidebar-enter {
        opacity: 0;
        transform: scale(0.5);
    }
    
    .p-sidebar-full .p-sidebar-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 0.15s cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-sidebar-full .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-full .p-sidebar-exit-active {
        opacity: 0;
        transform: scale(0.5);
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }
    
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }
    
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }
    
    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }
    
    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }
    
    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }
    
    .p-sidebar-left .p-sidebar-view,
    .p-sidebar-right .p-sidebar-view,
    .p-sidebar-top .p-sidebar-view,
    .p-sidebar-bottom .p-sidebar-view {
        width: 100%;
        height: 100%;
    }
    
    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }
    
    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
    }        
}
`,st={mask:function(r){var n=r.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n.position==="left"?"flex-start":n.position==="right"?"flex-end":"center",alignItems:n.position==="top"?"flex-start":n.position==="bottom"?"flex-end":"center"}}},G=ge.extend({defaultProps:{__TYPE:"Sidebar",appendTo:null,ariaCloseLabel:null,baseZIndex:0,blockScroll:!1,children:void 0,className:null,closeIcon:null,closeOnEscape:!0,content:null,dismissable:!0,fullScreen:!1,header:null,icons:null,id:null,maskClassName:null,maskStyle:null,modal:!0,onHide:null,onShow:null,position:"left",showCloseIcon:!0,style:null,transitionOptions:null,visible:!1},css:{classes:rt,styles:nt,inlineStyles:st}});function ue(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,a)}return n}function at(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?ue(Object(n),!0).forEach(function(a){qe(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}var Y=l.forwardRef(function(t,r){var n=ve(),a=l.useContext(he),s=G.getProps(t,a),o=l.useState(!1),b=ie(o,2),d=b[0],u=b[1],k=l.useState(!1),g=ie(k,2),N=g[0],w=g[1],O=G.setMetaData({props:s,state:{containerVisible:d}}),f=O.ptm,j=O.cx,q=O.sx,B=O.isUnstyled;ye(G.css.styles,B,{name:"sidebar"});var v=l.useRef(null),x=l.useRef(null),y=l.useRef(null),z=N&&s.closeOnEscape,V=Te("sidebar",z);Be({callback:function(c){_(c)},when:z&&V,priority:[ze.SIDEBAR,V]});var Z=Ve({type:"click",listener:function(c){c.button===0&&U(c)&&_(c)}}),M=ie(Z,2),H=M[0],L=M[1],U=function(c){return v&&v.current&&!v.current.contains(c.target)},C=function(){var c=document.activeElement,R=c&&v&&v.current.contains(c);!R&&s.showCloseIcon&&y.current&&y.current.focus()},Q=function(c){s.dismissable&&s.modal&&x.current===c.target&&_(c)},_=function(c){s.onHide(),c.preventDefault()},le=function(){s.onShow&&s.onShow(),C(),ee()},K=function(){s.modal&&!B()&&re.addClass(x.current,"p-component-overlay-leave")},$=function(){te.clear(x.current),u(!1),i()},ee=function(){s.dismissable&&!s.modal&&H(),s.blockScroll&&re.blockBodyScroll()},i=function(){L(),s.blockScroll&&re.unblockBodyScroll()};l.useImperativeHandle(r,function(){return{props:s,getElement:function(){return v.current},gteMask:function(){return x.current},getCloseIcon:function(){return y.current}}}),Me(function(){s.visible&&u(!0)}),se(function(){s.visible&&!d&&u(!0),s.visible!==N&&d&&w(s.visible)}),se(function(){d&&(te.set("modal",x.current,a&&a.autoZIndex||W.autoZIndex,s.baseZIndex||a&&a.zIndex.modal||W.zIndex.modal),w(!0))},[d]),se(function(){N&&(L(),s.dismissable&&!s.modal&&H())},[s.dismissable,s.modal,N]),He(function(){i(),x.current&&te.clear(x.current)});var m=function(){var c=s.ariaCloseLabel||Ce("close"),R=n({type:"button",ref:y,className:j("closeButton"),onClick:function(Ie){return _(Ie)},"aria-label":c},f("closeButton")),F=n({className:j("closeIcon")},f("closeIcon")),Oe=s.closeIcon||l.createElement(Ke,F),_e=De.getJSXIcon(Oe,at({},F),{props:s});return s.showCloseIcon?l.createElement("button",R,_e,l.createElement(Ue,null)):null},I=function(){return s.header?ne.getJSXElement(s.header,s):null},S=function(){return s.icons?ne.getJSXElement(s.icons,s):null},oe=n({ref:x,style:q("mask"),className:j("mask",{maskVisibleState:d}),onMouseDown:function(c){return Q(c)}},f("mask")),ce=n({id:s.id,className:j("root",{context:a}),style:s.style,role:"complementary"},G.getOtherProps(s),f("root")),je=n({className:j("header")},f("header")),Ne=n({className:j("content")},f("content")),we=n({className:j("icons")},f("icons")),Se={enter:s.fullScreen?150:300,exit:s.fullScreen?150:300},de=n({classNames:j("transition"),in:N,timeout:Se,options:s.transitionOptions,unmountOnExit:!0,onEntered:le,onExiting:K,onExited:$},f("transition")),ke=function(){var c={closeIconRef:y,hide:_};return l.createElement("div",oe,l.createElement(me,D({nodeRef:v},de),l.createElement("div",D({ref:v},ce),ne.getJSXElement(t.content,c))))},Pe=function(){var c=m(),R=S(),F=I();return l.createElement("div",oe,l.createElement(me,D({nodeRef:v},de),l.createElement("div",D({ref:v},ce),l.createElement("div",je,F,l.createElement("div",we,R,c)),l.createElement("div",Ne,s.children))))},Ee=function(){var c=t!=null&&t.content?ke():Pe();return l.createElement(Le,{element:c,appendTo:s.appendTo,visible:!0})};return d&&Ee()});Y.displayName="Sidebar";const it="/build/assets/bmw-car-BMAvEGix.png",lt=({customerName:t})=>e.jsxs("div",{className:"relative h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 "}),e.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",backgroundSize:"32px 32px"}}),e.jsxs("div",{className:"relative max-w-4xl mx-auto px-4 h-full",children:[e.jsx(E.img,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},src:"/uploads/olex-logo-yatay.svg",alt:"OLEX®",className:"w-40 pt-8 lg:pt-12 md:pt-8 lg:w-64 md:w-48"}),e.jsxs(E.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},className:"absolute top-1/3 transform -translate-y-1/3",children:[e.jsx("h1",{className:"text-white text-4xl font-light mb-2",children:"Merhaba,"}),e.jsx("h2",{className:"text-white text-6xl font-bold tracking-wide",children:t})]}),e.jsx(E.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.8,delay:.3},className:"absolute bottom-0 right-0 flex justify-end",children:e.jsx("img",{src:it,alt:"OLEX Vehicle",className:"h-[150px] lg:h-[300px] md:h-[200px]",style:{filter:"drop-shadow(0 4px 20px rgba(0,0,0,0.3))"}})})]})]}),be="/build/assets/kontrol-randevusu-CDBpR6NP.svg";function T(t){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},T(t)}function ot(t,r){if(T(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,r||"default");if(T(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function ct(t){var r=ot(t,"string");return T(r)==="symbol"?r:String(r)}function dt(t,r,n){return r=ct(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var mt={root:function(r){var n=r.props;return P("p-skeleton p-component",{"p-skeleton-circle":n.shape==="circle","p-skeleton-none":n.animation==="none"})}},pt=`
@layer primereact {
    .p-skeleton {
        position: relative;
        overflow: hidden;
    }
    
    .p-skeleton::after {
        content: "";
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
    }
    
    .p-skeleton-circle {
        border-radius: 50%;
    }
    
    .p-skeleton-none::after {
        animation: none;
    }
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`,ut={root:{position:"relative"}},J=ge.extend({defaultProps:{__TYPE:"Skeleton",shape:"rectangle",size:null,width:"100%",height:"1rem",borderRadius:null,animation:"wave",style:null,className:null},css:{classes:mt,inlineStyles:ut,styles:pt}});function fe(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,a)}return n}function xe(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?fe(Object(n),!0).forEach(function(a){dt(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}var h=l.memo(l.forwardRef(function(t,r){var n=ve(),a=l.useContext(he),s=J.getProps(t,a),o=J.setMetaData({props:s}),b=o.ptm,d=o.cx,u=o.sx,k=o.isUnstyled;ye(J.css.styles,k,{name:"skeleton"});var g=l.useRef(null);l.useImperativeHandle(r,function(){return{props:s,getElement:function(){return g.current}}});var N=s.size?{width:s.size,height:s.size,borderRadius:s.borderRadius}:{width:s.width,height:s.height,borderRadius:s.borderRadius},w=n({ref:g,className:P(s.className,d("root")),style:xe(xe({},N),u("root")),"aria-hidden":!0},J.getOtherProps(s),b("root"));return l.createElement("div",w)}));h.displayName="Skeleton";const bt=({brandLogo:t="https://www.carlogos.org/car-logos/bmw-logo-2020-blue-white.png",serieName:r,modelName:n,modelYear:a,carPlate:s,serviceDayMonth:o,serviceYear:b,serviceUrl:d,isSkeleton:u=!1})=>e.jsxs(e.Fragment,{children:[u&&e.jsx("div",{className:P("bg-gradient-to-b from-[#2e2f31] to-[#1a1b1d] rounded-xl border border-[#373739] overflow-hidden mb-2",{hidden:!u}),children:e.jsxs("div",{className:"flex items-center justify-between p-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-12 h-12 flex-shrink-0",children:e.jsx(h,{shape:"square",size:"3rem",className:"mr-2"})}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-baseline",children:e.jsx(h,{className:"mb-2",width:"10rem"})}),e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(h,{shape:"text",className:"w-full",width:"2rem"}),e.jsx("span",{className:"text-gray-400",children:"|"}),e.jsx(h,{shape:"text",className:"w-full",width:"2rem"}),e.jsx("span",{className:"text-gray-400",children:"|"}),e.jsx(h,{shape:"text",className:"w-full",width:"4rem"})]})]})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("span",{className:"h-10 border border-green-900/30"}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-gray-400 text-sm mb-1",children:e.jsx(h,{shape:"text",className:"text-gray-400 text-sm",width:"2rem"})}),e.jsx("div",{className:"text-gray-400 font-medium text-sm",children:e.jsx(h,{shape:"text",className:"text-gray-400 font-medium text-sm",width:"2rem"})})]}),e.jsx("a",{href:"#",className:"bg-green-800/30 w-10 h-10 hover:bg-green-800/50 text-white rounded-lg border border-green-700/30 transition-colors duration-200 flex justify-center items-center space-x-2",children:e.jsx("img",{src:be,alt:"Check",className:"h-5 w-5"})})]})]})}),e.jsx(E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},whileHover:{scale:1.02},transition:{duration:.3},className:P("bg-gradient-to-b from-[#2e2f31] to-[#1a1b1d] rounded-xl border border-[#373739] overflow-hidden mb-2",{hidden:u}),children:e.jsxs("div",{className:"flex items-center justify-between p-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-12 h-12 flex-shrink-0",children:e.jsx("img",{src:t,alt:"Brand Logo",className:"w-full h-full object-contain"})}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-baseline",children:e.jsx("h3",{className:"text-white font-semibold",children:r})}),e.jsxs("div",{className:"flex items-center space-x-1 ",children:[e.jsx("span",{className:"text-gray-400 text-xs",children:a}),e.jsx("span",{className:"text-gray-400",children:"|"}),e.jsx("span",{className:"text-gray-400 text-xs",children:n}),e.jsx("span",{className:"text-gray-400",children:"|"}),e.jsx("span",{className:"text-gray-200 font-medium text-xs",children:s})]})]})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("span",{className:"h-10 border border-green-900/30"}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-gray-400 text-sm",children:o}),e.jsx("div",{className:"text-gray-400 font-medium text-sm",children:b})]}),e.jsx("a",{href:d,target:"_blank",className:"bg-green-800/30 w-10 h-10 hover:bg-green-800/50 text-white rounded-lg border border-green-700/30 transition-colors duration-200 flex justify-center items-center space-x-2",children:e.jsx("img",{src:be,alt:"Check",className:"h-5 w-5"})})]})]})})]}),X=({productName:t,productCode:r,startDate:n,endDate:a,progress:s=75,status:o="active",isSkeleton:b=!1})=>{const d=()=>{switch(o){case"active":return"from-green-500/20 to-green-500/40";case"warning":return"from-yellow-500/20 to-yellow-500/40";case"expired":return"from-red-500/20 to-red-500/40";default:return"from-green-500/20 to-green-500/40"}},u={initial:{width:0},animate:{width:`${s}%`,transition:{duration:1,ease:"easeOut"}}};return b?e.jsx("div",{className:"bg-gradient-to-b from-[#2e2f31] to-[#1a1b1d] rounded-xl border border-[#373739] overflow-hidden mb-2 p-4",children:e.jsxs("div",{className:"flex flex-col space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(h,{width:"150px",height:"20px"}),e.jsx(h,{width:"100px",height:"20px"})]}),e.jsx(h,{width:"100%",height:"8px",borderRadius:"4px"}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(h,{width:"80px",height:"16px"}),e.jsx(h,{width:"80px",height:"16px"})]})]})}):e.jsx(E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},whileHover:{scale:1.02},transition:{duration:.3},className:"bg-gradient-to-b from-[#2e2f31] to-[#1a1b1d] rounded-xl border border-[#373739] overflow-hidden mb-2",children:e.jsxs("div",{className:"p-4 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{className:"text-white font-medium",children:t}),e.jsxs("div",{className:"text-gray-400 text-sm",children:[r," - ",e.jsx("span",{className:"text-white",children:"34 AFM 44"})]})]}),e.jsx("div",{className:"relative h-2 bg-gray-700/30 rounded-full overflow-hidden",children:e.jsx(E.div,{variants:u,initial:"initial",animate:"animate",className:P("absolute h-full rounded-full bg-gradient-to-r",d())})}),e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsxs("div",{className:"text-gray-400",children:["Başlangıç: ",e.jsx("span",{className:"text-white",children:n})]}),e.jsxs("div",{className:"text-gray-400",children:["Bitiş: ",e.jsx("span",{className:"text-white",children:a})]})]})]})})};var ft={VITE_APP_NAME:"OLEX Films®",VITE_APP_API_KEY:"AIzaSyDngyK-w3S7yGmtQa4EXWLaLfCJEqpUyVU",VITE_APP_AUTH_DOMAIN:"olex-6bc47.firebaseapp.com",VITE_APP_PROJECT_ID:"olex-6bc47",VITE_APP_STORAGE_BUCKET:"olex-6bc47.appspot.com",VITE_APP_MESSAGING_SENDER_ID:"852045853347",VITE_APP_APP_ID:"1:852045853347:web:ce59c95ea0d90bd10a4516",VITE_APP_MEASUREMENT_ID:"G-YSVP4EMESL",VITE_APP_VAPID_KEY:"BGU32plTKOAW6U4R5PhsBWEPr54Q34qNVfd7F9NAIoq7twYSo4GbkuyJvkNwKcR108nHz2HgF_Vqhud7HqPCgoI",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Tt=({customerB:t,csrf_token:r,hash:n,services:a})=>{const s=Re(),[o,b]=l.useState(s.props.customerB),[d,u]=l.useState(Object.entries(JSON.parse(o.notification_settings)).map(([i,m])=>({key:i,value:m}))),[k,g]=l.useState(!1),[N,w]=l.useState(!1),[O,f]=l.useState(!1),[j,q]=l.useState(""),B=i=>{u(d.map(m=>m.key===i?{...m,value:!m.value}:m))},[v,x]=l.useState(!1);l.useRef(null),l.useRef(null);const y=l.useRef(null),[z,V]=l.useState(o.player_id!==null),{VITE_APP_VAPID_KEY:Z}=ft,[M,H]=l.useState(null);l.useState(null);const[L,U]=l.useState(!1);l.useEffect(()=>{["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)&&U(!0),window.matchMedia("(display-mode: standalone)").matches&&U(!1),"serviceWorker"in navigator&&navigator.serviceWorker.register("/messaging-sw.js").then(function(i){H(i)}).catch(function(i){console.log("Service Worker kaydı başarısız:",i)})},[]);const[C,Q]=l.useState(Object.entries(JSON.parse(o.notification_settings)).map(([i,m])=>m?i:null).filter(i=>i!==null)),_=l.useMemo(()=>{let i=d.find(m=>m.key==="push");return i?i.value:!1},[d]),[le,K]=l.useState(!1);l.useEffect(()=>{let i=Object.entries(JSON.parse(o.notification_settings)).map(([m,I])=>I?m:null).filter(m=>m!==null);i.sort(),C.sort(),JSON.stringify(i)!==JSON.stringify(C)?K(!0):K(!1)},[C]);async function $(){const i=await Notification.requestPermission();if(i==="granted"){const m=await Je(Xe,{vapidKey:Z,serviceWorkerRegistration:M});x(!0);let I=new FormData;I.append("player_id",m),I.append("action","token"),fetch(route("customer.notifyUpdate",n),{method:"POST",headers:{"X-CSRF-TOKEN":r},body:I}).then(S=>S.json()).then(S=>{S.status?(y.current.show({severity:"success",summary:"Başarılı",detail:S.message,life:3e3}),V(!0),b(S.customer)):y.current.show({severity:"error",summary:"Hata",detail:S.message})}).catch(S=>{y.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{x(!1)})}else i==="denied"&&(y.current.show({severity:"error",summary:"Hata",detail:"Bildirimler Engellendi",life:3e3}),Q(C.filter(m=>m!=="push")))}const ee=()=>{["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)?"Notification"in window?(x(!0),$().then(i=>console.log())):y.current.show({severity:"info",summary:"Hata",detail:"Bildirimleri almak için tarayıcınızın URL bölümünde bulunan paylaş butonunu kullanarak uygulamamızı ana ekrana ekleyin. Bu sayede, uygulama yüklemeden hizmetlerinizi anında takip edebilirsiniz.",life:1e4}):(x(!0),$().then(i=>console.log()))};return e.jsxs(E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"min-h-screen bg-gradient-to-b font-avaganti from-[#005d37] via-30% via-[#121f1c] to-[#000] pb-4",children:[e.jsx(Ae,{title:"Müşteri Bilgileri"}),e.jsx(Ge,{ref:y}),e.jsx(lt,{customerName:o.name}),e.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-center text-lg font-semibold text-white",children:"Hizmetler"}),e.jsx("div",{className:"my-2",children:s.props.services.map(i=>e.jsx(bt,{serieName:i.car.brand+" "+i.car.model,modelName:i.car.generation,modelYear:i.car.year,carPlate:i.car.plate,serviceDayMonth:("0"+new Date(i.created_at).getDay()).slice(-2)+"."+("0"+(new Date(i.created_at).getMonth()+1)).slice(-2),serviceYear:new Date(i.created_at).getFullYear(),serviceUrl:route("warranty.index",i.service_no),brandLogo:i.car.brand_logo}))})]}),e.jsx("div",{className:"hidden justify-center text-lg font-semibold text-white",children:"Garanti Süreleri"}),e.jsxs("div",{className:"mt-2 mb-2 hidden",children:[e.jsx(X,{productName:"CARAT300",productCode:"PPF-2024-001",startDate:"01.01.2024",endDate:"01.01.2025",progress:75,status:"active"}),e.jsx(X,{productName:"CARAT300",productCode:"PPF-2024-001",startDate:"01.01.2024",endDate:"01.01.2025",progress:75,status:"active",isSkeleton:!0}),e.jsx(X,{productName:"CARAT300",productCode:"PPF-2024-001",startDate:"01.01.2024",endDate:"01.01.2025",progress:75,status:"active"}),e.jsx(X,{productName:"CARAT300",productCode:"PPF-2024-001",startDate:"01.01.2024",endDate:"01.01.2025",progress:75,status:"active"})]}),e.jsxs("div",{className:"max-w-4xl mx-auto flex flex-row gap-2 justify-between",children:[e.jsxs("button",{onClick:()=>f(!0),className:"flex-1 group relative overflow-hidden bg-gradient-to-br from-green-600/20 to-green-900/40 hover:from-green-500/30 hover:to-green-800/50 backdrop-blur-sm border border-green-900/30 text-white p-3 md:p-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-[1.02]",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"w-24 h-24 bg-green-500/20 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500"})}),e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsx("i",{className:"pi pi-bell text-xl md:text-2xl text-green-400"}),e.jsx("span",{className:" md:inline",children:"İletişim Seçenekleri"})]})]}),e.jsxs("button",{onClick:()=>g(!0),className:"flex-1 group relative overflow-hidden hidden bg-gradient-to-br from-blue-600/20 to-blue-900/40 hover:from-blue-500/30 hover:to-blue-800/50 backdrop-blur-sm border border-blue-900/30 text-white p-3 md:p-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-[1.02]",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"w-24 h-24 bg-blue-500/20 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500"})}),e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsx("i",{className:"pi pi-user-edit text-xl md:text-2xl text-blue-400"}),e.jsx("span",{className:"hidden md:inline",children:"Düzenle"})]})]})]})]}),e.jsx(Y,{visible:O,position:"right",onHide:()=>f(!1),className:"p-sidebar-md w-full md:w-[450px]",style:{backgroundColor:"#001800"},breakpoints:{"960px":"75vw","640px":"100vw"},blockScroll:!0,children:e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx("h2",{className:"text-white text-xl font-semibold mb-6",children:"İletişim Tercihleri"}),e.jsx("div",{className:"space-y-4",children:d.map(i=>e.jsx("div",{className:"bg-[#002200]/50 p-4 rounded-lg border border-green-900/20",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-white font-medium capitalize",children:i.key==="email"?"E-posta Bildirimleri":i.key==="sms"?"SMS Bildirimleri":"Push Bildirimleri"}),e.jsx("p",{className:"text-gray-400 text-sm mt-1",children:i.key==="email"?"Önemli güncellemeler ve teklifler için":i.key==="sms"?"Acil durumlar ve önemli hatırlatmalar":"Anlık bildirimler ve güncellemeler"})]}),e.jsx("button",{onClick:()=>B(i.key),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${i.value?"bg-green-600":"bg-gray-700"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${i.value?"translate-x-6":"translate-x-1"}`})})]})},i.key))}),L&&e.jsx("div",{className:"max-w-4xl mx-auto px-4",children:e.jsx("div",{className:"bg-[#E6B800]/10 border border-[#E6B800] rounded-lg p-4 mt-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("i",{className:"pi pi-info-circle text-[#E6B800] text-xl mr-3"}),e.jsx("p",{className:"text-[#E6B800]",children:"Bildirimleri almak için tarayıcınızın paylaş butonunu kullanarak uygulamamızı ana ekrana ekleyin."})]})})}),_&&e.jsxs(E.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.5},className:"bg-[#001800]/50 backdrop-blur-sm p-6 mt-3 rounded-xl border border-green-900/30 mb-8",children:[e.jsx("h2",{className:"text-xl font-semibold text-white mb-6",children:"Tarayıcı Bildirimleri"}),e.jsx("div",{className:"text-center",children:z===!0?e.jsx(Fe,{label:"Bildirimleri Etkinleştir",loading:v,onClick:ee,icon:"pi pi-bell",className:"bg-[#E6B800] hover:bg-[#FFD700] text-black font-medium border-none px-6 py-3"}):e.jsxs("div",{className:"text-[#E6B800] flex items-center justify-center gap-2",children:[e.jsx("i",{className:"pi pi-check-circle text-xl"}),e.jsx("span",{children:"Bildirimler Aktif"})]})})]})]}),e.jsxs("div",{className:"mt-8 flex gap-2 border-t border-green-900/30 pt-4",children:[e.jsx("button",{onClick:()=>f(!1),className:"flex-1 bg-[#002200]/50 hover:bg-[#003300]/50 text-white p-3 rounded-xl transition-colors duration-200",children:"Kapat"}),e.jsx("button",{onClick:()=>{f(!1)},className:"flex-1 bg-green-600/20 hover:bg-green-600/30 text-green-400 p-3 rounded-xl transition-colors duration-200",children:"Kaydet"})]})]})}),e.jsx(Y,{visible:k,position:"right",onHide:()=>g(!1),className:"p-sidebar-md w-full md:w-[450px]",style:{backgroundColor:"#001800"},breakpoints:{"960px":"75vw","640px":"100vw"},blockScroll:!0,children:e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx("h2",{className:"text-white text-xl font-semibold mb-6",children:"Profil Düzenle"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-gray-400 mb-2",children:"Ad Soyad"}),e.jsx(ae,{value:o.name,className:"p-inputtext-sm"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-gray-400 mb-2",children:"E-posta"}),e.jsx(ae,{value:o.email,className:"p-inputtext-sm"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-gray-400 mb-2",children:"Telefon"}),e.jsx(ae,{value:o.phone,className:"p-inputtext-sm"})]}),e.jsx("div",{className:"mt-8 pt-4 border-t border-green-900/30",children:e.jsxs("button",{onClick:()=>w(!0),className:"w-full bg-red-900/20 hover:bg-red-900/30 text-red-400 p-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2",children:[e.jsx("i",{className:"pi pi-trash"}),e.jsx("span",{children:"Hesabı Sil"})]})})]})]}),e.jsxs("div",{className:"mt-8 flex gap-2 border-t border-green-900/30 pt-4",children:[e.jsx("button",{onClick:()=>g(!1),className:"flex-1 bg-[#002200]/50 hover:bg-[#003300]/50 text-white p-3 rounded-xl transition-colors duration-200",children:"Kapat"}),e.jsx("button",{onClick:()=>{g(!1)},className:"flex-1 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 p-3 rounded-xl transition-colors duration-200",children:"Kaydet"})]})]})}),e.jsx(Y,{visible:N,position:"right",onHide:()=>w(!1),className:"p-sidebar-md w-full md:w-[450px]",style:{backgroundColor:"#001800"},breakpoints:{"960px":"75vw","640px":"100vw"},blockScroll:!0,children:e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx("h2",{className:"text-white text-xl font-semibold mb-6",children:"Hesabı Sil"}),e.jsxs("div",{className:"bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6",children:[e.jsxs("p",{className:"text-red-400",children:[e.jsx("i",{className:"pi pi-exclamation-triangle mr-2"}),"Dikkat! Bu işlem geri alınamaz. Hesabınızı sildiğinizde:"]}),e.jsxs("ul",{className:"list-disc list-inside text-red-400 mt-2 space-y-1",children:[e.jsx("li",{children:"Tüm hizmetleriniz silinecek"}),e.jsx("li",{children:"Garanti kayıtlarınız silinecek"}),e.jsx("li",{children:"İletişim tercihleriniz silinecek"})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-gray-400 mb-2",children:"Şifrenizi Girin"}),e.jsx($e,{value:j,onChange:i=>q(i.target.value),toggleMask:!0,feedback:!1})]})})]}),e.jsxs("div",{className:"mt-8 flex gap-2 border-t border-green-900/30 pt-4",children:[e.jsx("button",{onClick:()=>w(!1),className:"flex-1 bg-[#002200]/50 hover:bg-[#003300]/50 text-white p-3 rounded-xl transition-colors duration-200",children:"Vazgeç"}),e.jsx("button",{onClick:()=>{w(!1)},className:"flex-1 bg-red-900/20 hover:bg-red-900/30 text-red-400 p-3 rounded-xl transition-colors duration-200",disabled:!j,children:"Hesabı Sil"})]})]})})]})};export{Tt as default};

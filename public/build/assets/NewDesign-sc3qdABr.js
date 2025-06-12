import{r as l,P as fe,Z as ee,b as F,c as E,D as te,O as re,l as _e,I as Ie,j as e,K as Ce,L as De}from"./app-DZRt12gr.js";import{C as xe,u as he,a as ge,g as Re,h as Te,E as Be,i as Ae,j as ze,e as ne,f as Ve,P as He,R as Me}from"./ripple.esm-DhWGB1f6.js";import{C as de}from"./csstransition.esm-Cgnjg-zy.js";import{T as Le}from"./index.esm-Cwzze1wr.js";import{I as se}from"./inputtext.esm-D01KRESy.js";import{P as Ue}from"./password.esm-vhEc3Nje.js";import{B as Ke}from"./button.esm-YpR-gUOh.js";import{m as P}from"./motion-B0DhcIWL.js";import{T as $e}from"./toast.esm-B_ekDU8w.js";import{g as Ge,m as Je}from"./index-CNywltEg.js";import"./tooltip.esm-DS_YqtbC.js";import"./index.esm-Y5kux3kc.js";import"./overlayservice.esm-CS3FeIVU.js";import"./index.esm-BAT9upmF.js";import"./index.esm-CMPnDEQL.js";import"./index.esm-BVXiDbbQ.js";import"./index.esm-PfAdUoYd.js";import"./TransitionGroup-BCL1N9Mq.js";function D(){return D=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},D.apply(this,arguments)}function T(t){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},T(t)}function Xe(t,r){if(T(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,r||"default");if(T(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Ye(t){var r=Xe(t,"string");return T(r)==="symbol"?r:String(r)}function Fe(t,r,n){return r=Ye(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function We(t){if(Array.isArray(t))return t}function qe(t,r){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a,s,o,b,d=[],u=!0,w=!1;try{if(o=(n=n.call(t)).next,r===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(a=o.call(n)).done)&&(d.push(a.value),d.length!==r);u=!0);}catch(g){w=!0,s=g}finally{try{if(!u&&n.return!=null&&(b=n.return(),Object(b)!==b))return}finally{if(w)throw s}}return d}}function me(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,a=new Array(r);n<r;n++)a[n]=t[n];return a}function Ze(t,r){if(t){if(typeof t=="string")return me(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return me(t,r)}}function Qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae(t,r){return We(t)||qe(t,r)||Ze(t,r)||Qe()}var et={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(r){var n=r.props,a=r.maskVisibleState,s=["left","right","top","bottom"],o=s.find(function(b){return b===n.position});return E("p-sidebar-mask",o&&!n.fullScreen?"p-sidebar-".concat(o):"",{"p-component-overlay p-component-overlay-enter":n.modal,"p-sidebar-mask-scrollblocker":n.blockScroll,"p-sidebar-visible":a,"p-sidebar-full":n.fullScreen},n.maskClassName)},header:function(r){var n=r.props;return E("p-sidebar-header",{"p-sidebar-custom-header":n.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(r){var n=r.props,a=r.context;return E("p-sidebar p-component",n.className,{"p-input-filled":a&&a.inputStyle==="filled"||F.inputStyle==="filled","p-ripple-disabled":a&&a.ripple===!1||F.ripple===!1})},transition:"p-sidebar"},tt=`
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
`,rt={mask:function(r){var n=r.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n.position==="left"?"flex-start":n.position==="right"?"flex-end":"center",alignItems:n.position==="top"?"flex-start":n.position==="bottom"?"flex-end":"center"}}},J=xe.extend({defaultProps:{__TYPE:"Sidebar",appendTo:null,ariaCloseLabel:null,baseZIndex:0,blockScroll:!1,children:void 0,className:null,closeIcon:null,closeOnEscape:!0,content:null,dismissable:!0,fullScreen:!1,header:null,icons:null,id:null,maskClassName:null,maskStyle:null,modal:!0,onHide:null,onShow:null,position:"left",showCloseIcon:!0,style:null,transitionOptions:null,visible:!1},css:{classes:et,styles:tt,inlineStyles:rt}});function pe(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,a)}return n}function nt(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?pe(Object(n),!0).forEach(function(a){Fe(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}var Y=l.forwardRef(function(t,r){var n=he(),a=l.useContext(fe),s=J.getProps(t,a),o=l.useState(!1),b=ae(o,2),d=b[0],u=b[1],w=l.useState(!1),g=ae(w,2),N=g[0],S=g[1],O=J.setMetaData({props:s,state:{containerVisible:d}}),f=O.ptm,j=O.cx,W=O.sx,A=O.isUnstyled;ge(J.css.styles,A,{name:"sidebar"});var v=l.useRef(null),x=l.useRef(null),y=l.useRef(null),z=N&&s.closeOnEscape,V=Re("sidebar",z);Te({callback:function(c){_(c)},when:z&&V,priority:[Be.SIDEBAR,V]});var q=Ae({type:"click",listener:function(c){c.button===0&&U(c)&&_(c)}}),H=ae(q,2),M=H[0],L=H[1],U=function(c){return v&&v.current&&!v.current.contains(c.target)},C=function(){var c=document.activeElement,R=c&&v&&v.current.contains(c);!R&&s.showCloseIcon&&y.current&&y.current.focus()},Z=function(c){s.dismissable&&s.modal&&x.current===c.target&&_(c)},_=function(c){s.onHide(),c.preventDefault()},ie=function(){s.onShow&&s.onShow(),C(),Q()},K=function(){s.modal&&!A()&&te.addClass(x.current,"p-component-overlay-leave")},$=function(){ee.clear(x.current),u(!1),i()},Q=function(){s.dismissable&&!s.modal&&M(),s.blockScroll&&te.blockBodyScroll()},i=function(){L(),s.blockScroll&&te.unblockBodyScroll()};l.useImperativeHandle(r,function(){return{props:s,getElement:function(){return v.current},gteMask:function(){return x.current},getCloseIcon:function(){return y.current}}}),ze(function(){s.visible&&u(!0)}),ne(function(){s.visible&&!d&&u(!0),s.visible!==N&&d&&S(s.visible)}),ne(function(){d&&(ee.set("modal",x.current,a&&a.autoZIndex||F.autoZIndex,s.baseZIndex||a&&a.zIndex.modal||F.zIndex.modal),S(!0))},[d]),ne(function(){N&&(L(),s.dismissable&&!s.modal&&M())},[s.dismissable,s.modal,N]),Ve(function(){i(),x.current&&ee.clear(x.current)});var m=function(){var c=s.ariaCloseLabel||_e("close"),R=n({type:"button",ref:y,className:j("closeButton"),onClick:function(Oe){return _(Oe)},"aria-label":c},f("closeButton")),G=n({className:j("closeIcon")},f("closeIcon")),Ee=s.closeIcon||l.createElement(Le,G),Pe=Ie.getJSXIcon(Ee,nt({},G),{props:s});return s.showCloseIcon?l.createElement("button",R,Pe,l.createElement(Me,null)):null},I=function(){return s.header?re.getJSXElement(s.header,s):null},k=function(){return s.icons?re.getJSXElement(s.icons,s):null},le=n({ref:x,style:W("mask"),className:j("mask",{maskVisibleState:d}),onMouseDown:function(c){return Z(c)}},f("mask")),oe=n({id:s.id,className:j("root",{context:a}),style:s.style,role:"complementary"},J.getOtherProps(s),f("root")),ve=n({className:j("header")},f("header")),ye=n({className:j("content")},f("content")),je=n({className:j("icons")},f("icons")),we={enter:s.fullScreen?150:300,exit:s.fullScreen?150:300},ce=n({classNames:j("transition"),in:N,timeout:we,options:s.transitionOptions,unmountOnExit:!0,onEntered:ie,onExiting:K,onExited:$},f("transition")),Ne=function(){var c={closeIconRef:y,hide:_};return l.createElement("div",le,l.createElement(de,D({nodeRef:v},ce),l.createElement("div",D({ref:v},oe),re.getJSXElement(t.content,c))))},Se=function(){var c=m(),R=k(),G=I();return l.createElement("div",le,l.createElement(de,D({nodeRef:v},ce),l.createElement("div",D({ref:v},oe),l.createElement("div",ve,G,l.createElement("div",je,R,c)),l.createElement("div",ye,s.children))))},ke=function(){var c=t!=null&&t.content?Ne():Se();return l.createElement(He,{element:c,appendTo:s.appendTo,visible:!0})};return d&&ke()});Y.displayName="Sidebar";const st="/build/assets/porsche_car-ClARTfkE.png",at=({customerName:t})=>e.jsxs("div",{className:"relative h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 "}),e.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",backgroundSize:"32px 32px"}}),e.jsxs("div",{className:"relative max-w-4xl mx-auto px-4 h-full",children:[e.jsx(P.img,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},src:"/uploads/olex-logo-yatay.svg",alt:"OLEX®",className:"w-40 pt-8 lg:pt-12 md:pt-8 lg:w-64 md:w-48"}),e.jsxs(P.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},className:"absolute top-1/3 transform -translate-y-1/3",children:[e.jsx("h1",{className:"text-white text-4xl font-light mb-2",children:"Merhaba,"}),e.jsx("h2",{className:"text-white text-6xl font-bold tracking-wide tracking-tighter",children:t})]}),e.jsx(P.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:.8,delay:.3},className:"absolute bottom-0 right-0 flex justify-end",children:e.jsx("img",{src:st,alt:"OLEX Vehicle",className:"h-[190px] lg:h-[340px] md:h-[240px]",style:{filter:"drop-shadow(0 4px 20px rgba(0,0,0,0.3))"}})})]})]}),it="/build/assets/kontrol-randevusu-CDBpR6NP.svg";function B(t){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},B(t)}function lt(t,r){if(B(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,r||"default");if(B(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function ot(t){var r=lt(t,"string");return B(r)==="symbol"?r:String(r)}function ct(t,r,n){return r=ot(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var dt={root:function(r){var n=r.props;return E("p-skeleton p-component",{"p-skeleton-circle":n.shape==="circle","p-skeleton-none":n.animation==="none"})}},mt=`
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
`,pt={root:{position:"relative"}},X=xe.extend({defaultProps:{__TYPE:"Skeleton",shape:"rectangle",size:null,width:"100%",height:"1rem",borderRadius:null,animation:"wave",style:null,className:null},css:{classes:dt,inlineStyles:pt,styles:mt}});function ue(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,a)}return n}function be(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?ue(Object(n),!0).forEach(function(a){ct(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}var h=l.memo(l.forwardRef(function(t,r){var n=he(),a=l.useContext(fe),s=X.getProps(t,a),o=X.setMetaData({props:s}),b=o.ptm,d=o.cx,u=o.sx,w=o.isUnstyled;ge(X.css.styles,w,{name:"skeleton"});var g=l.useRef(null);l.useImperativeHandle(r,function(){return{props:s,getElement:function(){return g.current}}});var N=s.size?{width:s.size,height:s.size,borderRadius:s.borderRadius}:{width:s.width,height:s.height,borderRadius:s.borderRadius},S=n({ref:g,className:E(s.className,d("root")),style:be(be({},N),u("root")),"aria-hidden":!0},X.getOtherProps(s),b("root"));return l.createElement("div",S)}));h.displayName="Skeleton";const ut=({brandLogo:t="https://www.carlogos.org/car-logos/bmw-logo-2020-blue-white.png",serieName:r,modelName:n,modelYear:a,carPlate:s,serviceDayMonth:o,serviceYear:b,serviceUrl:d,isSkeleton:u=!1})=>e.jsxs(e.Fragment,{children:[u&&e.jsx("div",{className:E("bg-gradient-to-b from-[#2e2f31] to-[#1a1b1d] rounded-xl border border-[#373739] overflow-hidden mb-2",{hidden:!u}),children:e.jsxs("div",{className:"flex items-center justify-between p-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-12 h-12 flex-shrink-0",children:e.jsx(h,{shape:"square",size:"3rem",className:"mr-2"})}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-baseline",children:e.jsx(h,{className:"mb-2",width:"10rem"})}),e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(h,{shape:"text",className:"w-full",width:"2rem"}),e.jsx("span",{className:"text-gray-400",children:"|"}),e.jsx(h,{shape:"text",className:"w-full",width:"2rem"}),e.jsx("span",{className:"text-gray-400",children:"|"}),e.jsx(h,{shape:"text",className:"w-full",width:"4rem"})]})]})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("span",{className:"h-10 border border-green-900/30"}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-gray-400 text-sm mb-1",children:e.jsx(h,{shape:"text",className:"text-gray-400 text-sm",width:"2rem"})}),e.jsx("div",{className:"text-gray-400 font-medium text-sm",children:e.jsx(h,{shape:"text",className:"text-gray-400 font-medium text-sm",width:"2rem"})})]}),e.jsx("a",{href:"#",className:"bg-green-800/30 w-10 h-10 hover:bg-green-800/50 text-white rounded-lg border border-green-700/30 transition-colors duration-200 flex justify-center items-center space-x-2",children:e.jsx("img",{src:it,alt:"Check",className:"h-5 w-5"})})]})]})}),e.jsx("a",{href:d,target:"_blank",className:`${u?"hidden":""}`,children:e.jsx(P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},whileHover:{scale:1.02},transition:{duration:.3},className:E("bg-gradient-to-b from-[#2e2f31] cursor-pointer to-[#1a1b1d] rounded-xl border border-[#373739] overflow-hidden mb-2",{hidden:u}),children:e.jsxs("div",{className:"flex items-center justify-between p-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-12 h-12 flex-shrink-0",children:e.jsx("img",{src:t,alt:"Brand Logo",className:"w-full h-full object-contain"})}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-baseline",children:e.jsx("h3",{className:"text-white font-semibold",children:r})}),e.jsxs("div",{className:"flex items-center space-x-1 ",children:[e.jsx("span",{className:"text-gray-400 text-xs",children:a}),e.jsx("span",{className:"text-gray-400",children:"|"}),e.jsx("span",{className:"text-gray-400 text-xs",children:n}),e.jsx("span",{className:"text-gray-400",children:"|"}),e.jsx("span",{className:"text-gray-200 font-medium text-xs",children:s})]})]})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("span",{className:"h-10 border border-green-900/30"}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-gray-400 text-sm",children:o}),e.jsx("div",{className:"text-gray-400 font-medium text-sm",children:b})]})]})]})})})]}),bt=({productName:t,productCode:r,startDate:n,endDate:a,progress:s=75,status:o="active",isSkeleton:b=!1,carPlate:d=""})=>{const u=()=>{switch(o){case"active":return"from-green-500/20 to-green-500/40";case"warning":return"from-yellow-500/20 to-yellow-500/40";case"expired":return"from-red-500/20 to-red-500/40";default:return"from-green-500/20 to-green-500/40"}},w={initial:{width:0},animate:{width:`${s}%`,transition:{duration:1,ease:"easeOut"}}};return b?e.jsx("div",{className:"bg-gradient-to-b from-[#2e2f31] to-[#1a1b1d] rounded-xl border border-[#373739] overflow-hidden mb-2 p-4",children:e.jsxs("div",{className:"flex flex-col space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(h,{width:"150px",height:"20px"}),e.jsx(h,{width:"100px",height:"20px"})]}),e.jsx(h,{width:"100%",height:"8px",borderRadius:"4px"}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(h,{width:"80px",height:"16px"}),e.jsx(h,{width:"80px",height:"16px"})]})]})}):e.jsx(P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},whileHover:{scale:1.02},transition:{duration:.3},className:"bg-gradient-to-b from-[#2e2f31] to-[#1a1b1d] rounded-xl border border-[#373739] overflow-hidden mb-2",children:e.jsxs("div",{className:"p-4 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{className:"text-white font-medium",children:t}),e.jsxs("div",{className:"text-gray-400 text-sm",children:[r," - ",e.jsx("span",{className:"text-white",children:d})]})]}),e.jsx("div",{className:"relative h-2 bg-gray-700/30 rounded-full overflow-hidden",children:e.jsx(P.div,{variants:w,initial:"initial",animate:"animate",className:E("absolute h-full rounded-full bg-gradient-to-r",u())})}),e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsxs("div",{className:"text-gray-400",children:["Başlangıç: ",e.jsx("span",{className:"text-white",children:n})]}),e.jsxs("div",{className:"text-gray-400",children:["Bitiş: ",e.jsx("span",{className:"text-white",children:a})]})]})]})})};var ft={VITE_APP_NAME:"OLEX Films®",VITE_APP_API_KEY:"AIzaSyDngyK-w3S7yGmtQa4EXWLaLfCJEqpUyVU",VITE_APP_AUTH_DOMAIN:"olex-6bc47.firebaseapp.com",VITE_APP_PROJECT_ID:"olex-6bc47",VITE_APP_STORAGE_BUCKET:"olex-6bc47.appspot.com",VITE_APP_MESSAGING_SENDER_ID:"852045853347",VITE_APP_APP_ID:"1:852045853347:web:ce59c95ea0d90bd10a4516",VITE_APP_MEASUREMENT_ID:"G-YSVP4EMESL",VITE_APP_VAPID_KEY:"BGU32plTKOAW6U4R5PhsBWEPr54Q34qNVfd7F9NAIoq7twYSo4GbkuyJvkNwKcR108nHz2HgF_Vqhud7HqPCgoI",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Bt=({customerB:t,csrf_token:r,hash:n,services:a})=>{const s=Ce(),[o,b]=l.useState(s.props.customerB),[d,u]=l.useState(Object.entries(JSON.parse(o.notification_settings)).map(([i,m])=>({key:i,value:m}))),[w,g]=l.useState(!1),[N,S]=l.useState(!1),[O,f]=l.useState(!1),[j,W]=l.useState(""),A=i=>{u(d.map(m=>m.key===i?{...m,value:!m.value}:m))},[v,x]=l.useState(!1);l.useRef(null),l.useRef(null);const y=l.useRef(null),[z,V]=l.useState(o.player_id!==null),{VITE_APP_VAPID_KEY:q}=ft,[H,M]=l.useState(null);l.useState(null);const[L,U]=l.useState(!1);console.log(s.props.products),l.useEffect(()=>{["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)&&U(!0),window.matchMedia("(display-mode: standalone)").matches&&U(!1),"serviceWorker"in navigator&&navigator.serviceWorker.register("/messaging-sw.js").then(function(i){M(i)}).catch(function(i){console.log("Service Worker kaydı başarısız:",i)})},[]);const[C,Z]=l.useState(Object.entries(JSON.parse(o.notification_settings)).map(([i,m])=>m?i:null).filter(i=>i!==null)),_=l.useMemo(()=>{let i=d.find(m=>m.key==="push");return i?i.value:!1},[d]),[ie,K]=l.useState(!1);l.useEffect(()=>{let i=Object.entries(JSON.parse(o.notification_settings)).map(([m,I])=>I?m:null).filter(m=>m!==null);i.sort(),C.sort(),JSON.stringify(i)!==JSON.stringify(C)?K(!0):K(!1)},[C]);async function $(){const i=await Notification.requestPermission();if(i==="granted"){const m=await Ge(Je,{vapidKey:q,serviceWorkerRegistration:H});x(!0);let I=new FormData;I.append("player_id",m),I.append("action","token"),fetch(route("customer.notifyUpdate",n),{method:"POST",headers:{"X-CSRF-TOKEN":r},body:I}).then(k=>k.json()).then(k=>{k.status?(y.current.show({severity:"success",summary:"Başarılı",detail:k.message,life:3e3}),V(!0),b(k.customer)):y.current.show({severity:"error",summary:"Hata",detail:k.message})}).catch(k=>{y.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{x(!1)})}else i==="denied"&&(y.current.show({severity:"error",summary:"Hata",detail:"Bildirimler Engellendi",life:3e3}),Z(C.filter(m=>m!=="push")))}const Q=()=>{["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)?"Notification"in window?(x(!0),$().then(i=>console.log())):y.current.show({severity:"info",summary:"Hata",detail:"Bildirimleri almak için tarayıcınızın URL bölümünde bulunan paylaş butonunu kullanarak uygulamamızı ana ekrana ekleyin. Bu sayede, uygulama yüklemeden hizmetlerinizi anında takip edebilirsiniz.",life:1e4}):(x(!0),$().then(i=>console.log()))};return e.jsxs(P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"min-h-screen bg-gradient-to-b font-avaganti from-[#005d37] via-30% via-[#121f1c] to-[#000] pb-4",children:[e.jsx(De,{title:"Müşteri Bilgileri"}),e.jsx($e,{ref:y}),e.jsx(at,{customerName:o.name}),e.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-center text-lg font-semibold text-white",children:"Hizmetler"}),e.jsx("div",{className:"my-2",children:s.props.services.map(i=>e.jsx(ut,{serieName:i.car.brand+" "+i.car.model,modelName:i.car.generation,modelYear:i.car.year,carPlate:i.car.plate,serviceDayMonth:("0"+new Date(i.created_at).getDay()).slice(-2)+"."+("0"+(new Date(i.created_at).getMonth()+1)).slice(-2),serviceYear:new Date(i.created_at).getFullYear(),serviceUrl:route("warranty.index",i.service_no),brandLogo:i.car.brand_logo}))})]}),e.jsx("div",{className:"flex justify-center text-lg font-semibold text-white",children:"Garanti Süreleri"}),e.jsx("div",{className:"mt-2 mb-2",children:s.props.products.map(i=>e.jsx(bt,{productName:i.product.name,productCode:i.product_code,startDate:i.warranty.start_date,endDate:i.warranty.end_date,progress:i.warranty.rate,carPlate:i.car_plate}))}),e.jsxs("div",{className:"max-w-4xl mx-auto flex flex-row gap-2 justify-between",children:[e.jsxs("button",{onClick:()=>f(!0),className:"flex-1 group relative overflow-hidden bg-gradient-to-br from-green-600/20 to-green-900/40 hover:from-green-500/30 hover:to-green-800/50 backdrop-blur-sm border border-green-900/30 text-white p-3 md:p-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-[1.02]",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"w-24 h-24 bg-green-500/20 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500"})}),e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsx("i",{className:"pi pi-bell text-xl md:text-2xl text-green-400"}),e.jsx("span",{className:" md:inline",children:"İletişim Seçenekleri"})]})]}),e.jsxs("button",{onClick:()=>g(!0),className:"flex-1 group relative overflow-hidden hidden bg-gradient-to-br from-blue-600/20 to-blue-900/40 hover:from-blue-500/30 hover:to-blue-800/50 backdrop-blur-sm border border-blue-900/30 text-white p-3 md:p-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-[1.02]",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"w-24 h-24 bg-blue-500/20 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500"})}),e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsx("i",{className:"pi pi-user-edit text-xl md:text-2xl text-blue-400"}),e.jsx("span",{className:"hidden md:inline",children:"Düzenle"})]})]})]})]}),e.jsx(Y,{visible:O,position:"right",onHide:()=>f(!1),className:"p-sidebar-md w-full md:w-[450px]",style:{backgroundColor:"#001800"},breakpoints:{"960px":"75vw","640px":"100vw"},blockScroll:!0,children:e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx("h2",{className:"text-white text-xl font-semibold mb-6",children:"İletişim Tercihleri"}),e.jsx("div",{className:"space-y-4",children:d.map(i=>e.jsx("div",{className:"bg-[#002200]/50 p-4 rounded-lg border border-green-900/20",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-white font-medium capitalize",children:i.key==="email"?"E-posta Bildirimleri":i.key==="sms"?"SMS Bildirimleri":"Push Bildirimleri"}),e.jsx("p",{className:"text-gray-400 text-sm mt-1",children:i.key==="email"?"Önemli güncellemeler ve teklifler için":i.key==="sms"?"Acil durumlar ve önemli hatırlatmalar":"Anlık bildirimler ve güncellemeler"})]}),e.jsx("button",{onClick:()=>A(i.key),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${i.value?"bg-green-600":"bg-gray-700"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${i.value?"translate-x-6":"translate-x-1"}`})})]})},i.key))}),L&&e.jsx("div",{className:"max-w-4xl mx-auto px-4",children:e.jsx("div",{className:"bg-[#E6B800]/10 border border-[#E6B800] rounded-lg p-4 mt-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("i",{className:"pi pi-info-circle text-[#E6B800] text-xl mr-3"}),e.jsx("p",{className:"text-[#E6B800]",children:"Bildirimleri almak için tarayıcınızın paylaş butonunu kullanarak uygulamamızı ana ekrana ekleyin."})]})})}),_&&e.jsxs(P.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.5},className:"bg-[#001800]/50 backdrop-blur-sm p-6 mt-3 rounded-xl border border-green-900/30 mb-8",children:[e.jsx("h2",{className:"text-xl font-semibold text-white mb-6",children:"Tarayıcı Bildirimleri"}),e.jsx("div",{className:"text-center",children:z===!0?e.jsx(Ke,{label:"Bildirimleri Etkinleştir",loading:v,onClick:Q,icon:"pi pi-bell",className:"bg-[#E6B800] hover:bg-[#FFD700] text-black font-medium border-none px-6 py-3"}):e.jsxs("div",{className:"text-[#E6B800] flex items-center justify-center gap-2",children:[e.jsx("i",{className:"pi pi-check-circle text-xl"}),e.jsx("span",{children:"Bildirimler Aktif"})]})})]})]}),e.jsxs("div",{className:"mt-8 flex gap-2 border-t border-green-900/30 pt-4",children:[e.jsx("button",{onClick:()=>f(!1),className:"flex-1 bg-[#002200]/50 hover:bg-[#003300]/50 text-white p-3 rounded-xl transition-colors duration-200",children:"Kapat"}),e.jsx("button",{onClick:()=>{f(!1)},className:"flex-1 bg-green-600/20 hover:bg-green-600/30 text-green-400 p-3 rounded-xl transition-colors duration-200",children:"Kaydet"})]})]})}),e.jsx(Y,{visible:w,position:"right",onHide:()=>g(!1),className:"p-sidebar-md w-full md:w-[450px]",style:{backgroundColor:"#001800"},breakpoints:{"960px":"75vw","640px":"100vw"},blockScroll:!0,children:e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx("h2",{className:"text-white text-xl font-semibold mb-6",children:"Profil Düzenle"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-gray-400 mb-2",children:"Ad Soyad"}),e.jsx(se,{value:o.name,className:"p-inputtext-sm"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-gray-400 mb-2",children:"E-posta"}),e.jsx(se,{value:o.email,className:"p-inputtext-sm"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-gray-400 mb-2",children:"Telefon"}),e.jsx(se,{value:o.phone,className:"p-inputtext-sm"})]}),e.jsx("div",{className:"mt-8 pt-4 border-t border-green-900/30",children:e.jsxs("button",{onClick:()=>S(!0),className:"w-full bg-red-900/20 hover:bg-red-900/30 text-red-400 p-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2",children:[e.jsx("i",{className:"pi pi-trash"}),e.jsx("span",{children:"Hesabı Sil"})]})})]})]}),e.jsxs("div",{className:"mt-8 flex gap-2 border-t border-green-900/30 pt-4",children:[e.jsx("button",{onClick:()=>g(!1),className:"flex-1 bg-[#002200]/50 hover:bg-[#003300]/50 text-white p-3 rounded-xl transition-colors duration-200",children:"Kapat"}),e.jsx("button",{onClick:()=>{g(!1)},className:"flex-1 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 p-3 rounded-xl transition-colors duration-200",children:"Kaydet"})]})]})}),e.jsx(Y,{visible:N,position:"right",onHide:()=>S(!1),className:"p-sidebar-md w-full md:w-[450px]",style:{backgroundColor:"#001800"},breakpoints:{"960px":"75vw","640px":"100vw"},blockScroll:!0,children:e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx("h2",{className:"text-white text-xl font-semibold mb-6",children:"Hesabı Sil"}),e.jsxs("div",{className:"bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6",children:[e.jsxs("p",{className:"text-red-400",children:[e.jsx("i",{className:"pi pi-exclamation-triangle mr-2"}),"Dikkat! Bu işlem geri alınamaz. Hesabınızı sildiğinizde:"]}),e.jsxs("ul",{className:"list-disc list-inside text-red-400 mt-2 space-y-1",children:[e.jsx("li",{children:"Tüm hizmetleriniz silinecek"}),e.jsx("li",{children:"Garanti kayıtlarınız silinecek"}),e.jsx("li",{children:"İletişim tercihleriniz silinecek"})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"text-gray-400 mb-2",children:"Şifrenizi Girin"}),e.jsx(Ue,{value:j,onChange:i=>W(i.target.value),toggleMask:!0,feedback:!1})]})})]}),e.jsxs("div",{className:"mt-8 flex gap-2 border-t border-green-900/30 pt-4",children:[e.jsx("button",{onClick:()=>S(!1),className:"flex-1 bg-[#002200]/50 hover:bg-[#003300]/50 text-white p-3 rounded-xl transition-colors duration-200",children:"Vazgeç"}),e.jsx("button",{onClick:()=>{S(!1)},className:"flex-1 bg-red-900/20 hover:bg-red-900/30 text-red-400 p-3 rounded-xl transition-colors duration-200",disabled:!j,children:"Hesabı Sil"})]})]})})]})};export{Bt as default};

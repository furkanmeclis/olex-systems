import{c as v,r as o,P as I,O as g,I as C}from"./app-BzKgFMKw.js";import{C as M,b as N,c as k}from"./ripple.esm-BsUji4X7.js";import{C as _}from"./index.esm-CwJKro94.js";import{E as D,I as T}from"./index.esm-BSORfD1Z.js";import{T as R}from"./index.esm-hfNdV11_.js";function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f.apply(null,arguments)}function c(t){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(t)}function U(t,e){if(c(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(c(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function B(t){var e=U(t,"string");return c(e)=="symbol"?e:e+""}function d(t,e,n){return(e=B(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=M.extend({defaultProps:{__TYPE:"Message",id:null,className:null,style:null,text:null,icon:null,severity:"info",content:null,children:void 0},css:{classes:{root:function(e){var n=e.props.severity;return v("p-inline-message p-component",d({},"p-inline-message-".concat(n),n))},icon:"p-inline-message-icon",text:"p-inline-message-text"},styles:`
        @layer primereact {
            .p-inline-message {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                vertical-align: top;
            }

            .p-inline-message-icon {
                flex-shrink: 0;
            }
            
            .p-inline-message-icon-only .p-inline-message-text {
                visibility: hidden;
                width: 0;
            }
            
            .p-fluid .p-inline-message {
                display: flex;
            }        
        }
        `}});function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?b(Object(n),!0).forEach(function(r){d(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var X=o.memo(o.forwardRef(function(t,e){var n=N(),r=o.useContext(I),s=l.getProps(t,r),y=o.useRef(null),p=l.setMetaData({props:s}),m=p.ptm,u=p.cx,P=p.isUnstyled;k(l.css.styles,P,{name:"message"});var O=function(){if(s.content)return g.getJSXElement(s.content,s);var h=g.getJSXElement(s.text,s),i=n({className:u("icon")},m("icon")),a=s.icon;if(!a)switch(s.severity){case"info":a=o.createElement(T,i);break;case"warn":a=o.createElement(D,i);break;case"error":a=o.createElement(R,i);break;case"success":a=o.createElement(_,i);break}var w=C.getJSXIcon(a,J({},i),{props:s}),S=n({className:u("text")},m("text"));return o.createElement(o.Fragment,null,w,o.createElement("span",S,h))};o.useImperativeHandle(e,function(){return{props:s,getElement:function(){return y.current}}});var x=O(),j=n({className:v(s.className,u("root")),style:s.style,role:"alert","aria-live":"polite","aria-atomic":"true"},l.getOtherProps(s),m("root"));return o.createElement("div",f({id:s.id,ref:y},j),x)}));X.displayName="Message";export{X as M};

import{O as K,r as c,P as ue,c as P,U as pe,I as me,D as R}from"./app-BzKgFMKw.js";import{C as fe,b as ve,c as de,e as ye}from"./ripple.esm-BsUji4X7.js";function N(){return N=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)({}).hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},N.apply(null,arguments)}function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},S(t)}function be(t,n){if(S(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var s=r.call(t,n||"default");if(S(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function ge(t){var n=be(t,"string");return S(n)=="symbol"?n:n+""}function Ie(t,n,r){return(n=ge(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function Pe(t){if(Array.isArray(t))return t}function Se(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var s,o,h,f,p=[],b=!0,g=!1;try{if(h=(r=r.call(t)).next,n!==0)for(;!(b=(s=h.call(r)).done)&&(p.push(s.value),p.length!==n);b=!0);}catch(I){g=!0,o=I}finally{try{if(!b&&r.return!=null&&(f=r.return(),Object(f)!==f))return}finally{if(g)throw o}}return p}}function M(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,s=Array(n);r<n;r++)s[r]=t[r];return s}function he(t,n){if(t){if(typeof t=="string")return M(t,n);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(t,n):void 0}}function Oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function we(t,n){return Pe(t)||Se(t,n)||he(t,n)||Oe()}var xe={icon:function(n){var r=n.item;return P("p-menuitem-icon",r.icon)},label:"p-steps-title",step:"p-steps-number",action:"p-menuitem-link",menuitem:function(n){var r=n.active,s=n.disabled,o=n.item;return P("p-steps-item",o.className,{"p-highlight p-steps-current":r,"p-disabled":s})},root:function(n){var r=n.props;return P("p-steps p-component",{"p-readonly":r.readOnly})}},Ee=`
@layer primereact {
    .p-steps {
        position: relative;
    }

    .p-steps ol {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
    }

    .p-steps-item {
        position: relative;
        display: flex;
        justify-content: center;
        flex: 1 1 auto;
    }

    .p-steps-item .p-menuitem-link {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        text-decoration: none;
    }

    .p-steps.p-readonly .p-steps-item {
        cursor: auto;
    }

    .p-steps-item.p-steps-current .p-menuitem-link {
        cursor: default;
    }

    .p-steps-title {
        white-space: nowrap;
    }

    .p-steps-number {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-steps-title {
        display: block;
    }
}
`,y=fe.extend({defaultProps:{__TYPE:"Steps",id:null,model:null,activeIndex:0,readOnly:!0,style:null,className:null,onSelect:null,children:void 0},css:{classes:xe,styles:Ee},getCProp:function(n,r){return K.getComponentProp(n,r,y.defaultProps)}});function L(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,s)}return r}function U(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?L(Object(r),!0).forEach(function(s){Ie(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}var je=c.memo(c.forwardRef(function(t,n){var r=ve(),s=c.useContext(ue),o=y.getProps(t,s),h=c.useState(o.id),f=we(h,2),p=f[0],b=f[1],g=c.useRef(null),I=c.useRef(null),C=c.Children.count(o.children),D={props:o,state:{id:p,activeIndex:o.activeIndex}},O=y.setMetaData(U({},D)),v=O.ptm,B=O.ptmo,d=O.cx,H=O.isUnstyled;de(y.css.styles,H,{name:"steps"});var w=function(e,a,l){var u={parent:D,context:{index:l,count:C,first:l===0,last:l===C-1,active:l===o.activeIndex,disabled:k(e,"disabled")}};return r(v("step.".concat(a),{step:u}),v("steps.".concat(a),{steps:u}),v("steps.".concat(a),u),B(k(e,"pt"),a,u))},k=function(e,a){return y.getCProp(e,a)},E=function(e,a,l){if(o.readOnly||a.disabled){e.preventDefault();return}o.onSelect&&o.onSelect({originalEvent:e,item:a,index:l}),a.command&&a.command({originalEvent:e,item:a,index:l}),a.url||(e.preventDefault(),e.stopPropagation())},$=function(e,a,l){if(!o.readOnly)switch(e.code){case"ArrowRight":J(e.target),e.preventDefault();break;case"ArrowLeft":X(e.target),e.preventDefault();break;case"Home":q(e.target),e.preventDefault();break;case"End":W(e.target),e.preventDefault();break;case"Tab":break;case"Enter":case"NumpadEnter":case"Space":E(e,a,l),e.preventDefault();break}},J=function(e){var a=Y(e);a&&x(e,a)},X=function(e){var a=z(e);a&&x(e,a)},q=function(e){var a=F();a&&x(e,a)},W=function(e){var a=G();a&&x(e,a)},Y=function(e){var a=e.parentElement.nextElementSibling;return a?a.children[0]:null},z=function(e){var a=e.parentElement.previousElementSibling;return a?a.children[0]:null},F=function(){var e=R.findSingle(I.current,'[data-pc-section="menuitem"]');return e?e.children[0]:null},G=function(){var e=R.find(I.current,'[data-pc-section="menuitem"]');return e?e[e.length-1].children[0]:null},x=function(e,a){e.tabIndex="-1",a.tabIndex="0",setTimeout(function(){return a.focus()},0)},_=function(){var e=F();e.tabIndex="0",e.focus()},Q=function(e,a){if(e.visible===!1)return null;var l=e.id||p+"_"+a,u=a===o.activeIndex,A=e.disabled||a!==o.activeIndex&&o.readOnly,te=P("p-menuitem-icon",e.icon),ne=r({className:d("icon",{item:e})},w(e,"icon",a)),re=me.getJSXIcon(e.icon,U({},ne),{props:o}),ae=r({className:d("label")},w(e,"label",a)),oe=e.label&&c.createElement("span",ae,e.label),se=r({className:d("step")},w(e,"step",a)),ie=r({href:e.url||"#",className:d("action"),tabIndex:"-1",onFocus:function(m){return m.stopPropagation()},target:e.target,onKeyDown:function(m){return $(m,e,a)},onClick:function(m){return E(m,e,a)}},w(e,"action",a)),j=c.createElement("a",ie,c.createElement("span",se,a+1),re,oe);if(e.template){var le={onClick:function(m){return E(m,e,a)},className:"p-menuitem-link",labelClassName:"p-steps-title",numberClassName:"p-steps-number",iconClassName:te,"aria-current":u,element:j,props:o,active:u,disabled:A};j=K.getJSXElement(e.template,e,le)}var ce=r({id:l,className:d("menuitem",{active:u,disabled:A,item:e}),style:e.style},v("menuitem"));return c.createElement("li",N({},ce,{key:l}),j)},V=function(){var e=r({ref:I,tabIndex:o.readOnly?null:"0",onFocus:function(){o.readOnly||_()},onBlur:function(){return _}},v("menu"));if(o.model){var a=o.model.map(Q);return c.createElement("ol",e,a)}return null};ye(function(){p||b(pe())}),c.useImperativeHandle(n,function(){return{props:o,getElement:function(){return g.current}}});var Z=r({id:o.id,ref:g,className:P(o.className,d("root")),style:o.style},y.getOtherProps(o),v("root")),ee=V();return c.createElement("nav",Z,ee)}));je.displayName="Steps";export{je as S};

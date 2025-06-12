import{r as l,P as ne,c as O,U as re,I as ae,O as oe,D as k}from"./app-2dEnFbol.js";import{C as ie,u as se,a as le,j as ce}from"./ripple.esm-BzRUCNyJ.js";function g(t){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(t)}function ue(t,n){if(g(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,n||"default");if(g(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function pe(t){var n=ue(t,"string");return g(n)==="symbol"?n:String(n)}function me(t,n,r){return n=pe(n),n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function fe(t){if(Array.isArray(t))return t}function de(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i,o,I,f,u=[],d=!0,y=!1;try{if(I=(r=r.call(t)).next,n===0){if(Object(r)!==r)return;d=!1}else for(;!(d=(i=I.call(r)).done)&&(u.push(i.value),u.length!==n);d=!0);}catch(b){y=!0,o=b}finally{try{if(!d&&r.return!=null&&(f=r.return(),Object(f)!==f))return}finally{if(y)throw o}}return u}}function C(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=t[r];return i}function ve(t,n){if(t){if(typeof t=="string")return C(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(t,n)}}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function be(t,n){return fe(t)||de(t,n)||ve(t,n)||ye()}var ge={icon:function(n){var r=n.item;return O("p-menuitem-icon",r.icon)},label:"p-steps-title",step:"p-steps-number",action:"p-menuitem-link",menuitem:function(n){var r=n.active,i=n.disabled,o=n.item;return O("p-steps-item",o.className,{"p-highlight p-steps-current":r,"p-disabled":i})},root:function(n){var r=n.props;return O("p-steps p-component",{"p-readonly":r.readOnly},r.className)}},Ie=`
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
`,P=ie.extend({defaultProps:{__TYPE:"Steps",id:null,model:null,activeIndex:0,readOnly:!0,style:null,className:null,onSelect:null,children:void 0},css:{classes:ge,styles:Ie}});function _(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,i)}return r}function Se(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?_(Object(r),!0).forEach(function(i){me(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}var Pe=l.memo(l.forwardRef(function(t,n){var r=se(),i=l.useContext(ne),o=P.getProps(t,i),I=l.useState(o.id),f=be(I,2),u=f[0],d=f[1],y=l.useRef(null),b=l.useRef(null),h=P.setMetaData({props:o,state:{id:u}}),p=h.ptm,v=h.cx,F=h.isUnstyled;le(P.css.styles,F,{name:"steps"});var x=function(e,a,c){if(o.readOnly||a.disabled){e.preventDefault();return}o.onSelect&&o.onSelect({originalEvent:e,item:a,index:c}),a.command&&a.command({originalEvent:e,item:a,index:c}),a.url||(e.preventDefault(),e.stopPropagation())},A=function(e,a,c){if(!o.readOnly)switch(e.code){case"ArrowRight":R(e.target),e.preventDefault();break;case"ArrowLeft":M(e.target),e.preventDefault();break;case"Home":U(e.target),e.preventDefault();break;case"End":K(e.target),e.preventDefault();break;case"Tab":break;case"Enter":case"NumpadEnter":case"Space":x(e,a,c),e.preventDefault();break}},R=function(e){var a=L(e);a&&S(e,a)},M=function(e){var a=B(e);a&&S(e,a)},U=function(e){var a=j();a&&S(e,a)},K=function(e){var a=H();a&&S(e,a)},L=function(e){var a=e.parentElement.nextElementSibling;return a?a.children[0]:null},B=function(e){var a=e.parentElement.previousElementSibling;return a?a.children[0]:null},j=function(){var e=k.findSingle(b.current,'[data-pc-section="menuitem"]');return e?e.children[0]:null},H=function(){var e=k.find(b.current,'[data-pc-section="menuitem"]');return e?e[e.length-1].children[0]:null},S=function(e,a){e.tabIndex="-1",a.tabIndex="0",setTimeout(function(){return a.focus()},0)},T=function(){var e=j();e.tabIndex="0",e.focus()},$=function(e,a){if(e.visible===!1)return null;var c=e.id||u+"_"+a,w=a===o.activeIndex,D=e.disabled||a!==o.activeIndex&&o.readOnly,W=O("p-menuitem-icon",e.icon),Y=r({className:v("icon",{item:e})},p("icon")),z=ae.getJSXIcon(e.icon,Se({},Y),{props:o}),G=r({className:v("label")},p("label")),Q=e.label&&l.createElement("span",G,e.label),V=r({className:v("step")},p("step")),Z=r({href:e.url||"#",className:v("action"),tabIndex:"-1",onFocus:function(m){return m.stopPropagation()},target:e.target,onKeyDown:function(m){return A(m,e,a)},onClick:function(m){return x(m,e,a)}},p("action")),E=l.createElement("a",Z,l.createElement("span",V,a+1),z,Q);if(e.template){var ee={onClick:function(m){return x(m,e,a)},className:"p-menuitem-link",labelClassName:"p-steps-title",numberClassName:"p-steps-number",iconClassName:W,"aria-current":w,element:E,props:o,active:w,disabled:D};E=oe.getJSXElement(e.template,e,ee)}var te=r({key:c,id:c,className:v("menuitem",{active:w,disabled:D,item:e}),style:e.style},p("menuitem"));return l.createElement("li",te,E)},J=function(){var e=r({ref:b,tabIndex:o.readOnly?null:"0",onFocus:function(){o.readOnly||T()},onBlur:function(){return T}},p("menu"));if(o.model){var a=o.model.map($);return l.createElement("ol",e,a)}return null};ce(function(){u||d(re())}),l.useImperativeHandle(n,function(){return{props:o,getElement:function(){return y.current}}});var X=r({id:o.id,ref:y,className:v("root"),style:o.style},P.getOtherProps(o),p("root")),q=J();return l.createElement("nav",X,q)}));Pe.displayName="Steps";export{Pe as S};

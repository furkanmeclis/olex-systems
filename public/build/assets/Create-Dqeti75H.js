const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/quill-CMtG_o-l.js","assets/app-NbOgzo0a.js","assets/app-_84o0Y_-.css","assets/cloneDeep-DJN0yfLA.js"])))=>i.map(i=>d[i]);
import{R as L,P as Fe,O as D,U as _t,c as re,r as i,D as se,f as vt,I as On,l as jn,j as a,a as gt,_ as Pn,S as En,A as Cn}from"./app-NbOgzo0a.js";import{C as ht}from"./CarBody-Cs5DEnLe.js";import{A as Nn}from"./AuthenticatedLayout-eqiXu1kV.js";import{C as Re,u as fe,a as Ae,h as lt,i as De,R as In}from"./ripple.esm-iszc8HuC.js";import{C as Tn}from"./csstransition.esm-CexleeVb.js";import{B as ne}from"./button.esm-C_21beZQ.js";import{T as Ln}from"./tooltip.esm-CaSq0yzV.js";import{V as Dn,D as _n}from"./dropdown.esm-BqatRzVZ.js";import{S as Fn}from"./index.esm-B7ssj7dR.js";import{I as we}from"./inputtext.esm-DUPnnwIp.js";import{B as yt}from"./blockui.esm-C6JNy0D2.js";import{F as Te}from"./floatlabel.esm-DqCKrPgt.js";import{T as Rn}from"./toast.esm-B-h3ei72.js";import{D as An}from"./dataview.esm-DM5m5oK5.js";import{I as zn}from"./inputnumber.esm-D8wKIGNi.js";import"./index.esm-DojWKbcB.js";import"./index.esm-DgBw5XKU.js";import"./index.esm-DX4RB7kF.js";import"./index.esm-8vfgULLR.js";import"./index.esm-BuTox_UV.js";import"./scrollpanel.esm-CwWaszMg.js";import"./Dropdown-BrOQ2evR.js";import"./tag.esm-DyNsyPhU.js";import"./motion-D7F-e4S9.js";import"./index.esm-Bt0BBOx6.js";import"./overlayservice.esm-C0iVZ48H.js";import"./index.esm-DMwfTKGR.js";import"./index.esm-BtoT_sCL.js";import"./TransitionGroup-oiU1ns6w.js";import"./index.esm-BNpuDrTa.js";import"./paginator.esm-C4gZutTC.js";import"./index.esm-CWrvyTEZ.js";function ke(){return ke=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ke.apply(null,arguments)}function Se(e){"@babel/helpers - typeof";return Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Se(e)}function $n(e,n){if(Se(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n||"default");if(Se(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Mn(e){var n=$n(e,"string");return Se(n)=="symbol"?n:n+""}function Pe(e,n,t){return(n=Mn(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Kn(e){if(Array.isArray(e))return e}function Hn(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o,l,y,x,m=[],v=!0,g=!1;try{if(y=(t=t.call(e)).next,n!==0)for(;!(v=(o=y.call(t)).done)&&(m.push(o.value),m.length!==n);v=!0);}catch(j){g=!0,l=j}finally{try{if(!v&&t.return!=null&&(x=t.return(),Object(x)!==x))return}finally{if(g)throw l}}return m}}function xt(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}function Vn(e,n){if(e){if(typeof e=="string")return xt(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?xt(e,n):void 0}}function Gn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wt(e,n){return Kn(e)||Hn(e,n)||Vn(e,n)||Gn()}var Un={root:function(n){var t=n.props;return re("p-stepper p-component",{"p-stepper-horizontal":t.orientation==="horizontal","p-stepper-vertical":t.orientation==="vertical","p-readonly":t.linear})},nav:"p-stepper-nav",stepper:{header:function(n){var t=n.isStepActive,o=n.isItemDisabled,l=n.index,y=n.headerPosition,x=n.orientation;return re("p-stepper-header",Pe({"p-highlight":t(l),"p-disabled":o(l)},"p-stepper-header-".concat(y),x==="horizontal"))},action:"p-stepper-action p-component",number:"p-stepper-number",title:"p-stepper-title",separator:"p-stepper-separator",toggleableContent:"p-stepper-toggleable-content",content:function(n){var t=n.props;return re("p-stepper-content",{"p-toggleable-content":t.orientation==="vertical"})},panel:function(n){var t=n.props,o=n.isStepActive,l=n.index;return re("p-stepper-panel",{"p-stepper-panel-active":t.orientation==="vertical"&&o(l)})}},panelContainer:"p-stepper-panels",start:"p-stepper-start",end:"p-stepper-end"},Bn=`
@layer primereact {
    .p-stepper .p-stepper-nav {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow-x: auto;
    }

    .p-stepper-vertical .p-stepper-nav {
        flex-direction: column;
    }

    .p-stepper-header {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        align-items: center;

        &:last-of-type {
            flex: initial;
        }
    }

    .p-stepper-header-bottom {
        align-items: flex-start;
    }

    .p-stepper-header-top {
        align-items: flex-end;
    }

    .p-stepper-header-right, .p-stepper-header-left {
        align-items: center;
    }

    .p-stepper-header .p-stepper-action {
        border: 0 none;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;

        &:focus-visible {
            @include focused();
        }
    }

    .p-stepper-header-bottom .p-stepper-action {
        flex-direction: column;
    }

    .p-stepper-header-top .p-stepper-action {
        flex-direction: column-reverse;
    }

    .p-stepper-header-left .p-stepper-action {
        flex-direction: row-reverse;
    }

    .p-stepper.p-stepper-readonly .p-stepper-header {
        cursor: auto;
    }

    .p-stepper-header.p-highlight .p-stepper-action {
        cursor: default;
    }

    .p-stepper-title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }

    .p-stepper-number {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-stepper-separator {
        flex: 1 1 0;
    }
}
`,xe=Re.extend({defaultProps:{__TYPE:"Stepper",activeStep:0,orientation:"horizontal",headerPosition:"right",linear:!1,onChangeStep:null,start:null,end:null},css:{classes:Un,styles:Bn}});function kt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,o)}return t}function Xe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?kt(Object(t),!0).forEach(function(o){Pe(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):kt(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}var We=i.memo(i.forwardRef(function(e,n){var t=fe(),o=e.cx,l=t(Xe(Xe(Xe({ref:n,id:e.id,className:o("stepper.content",{stepperpanel:e.stepperpanel,index:e.index}),role:"tabpanel","aria-labelledby":e.ariaLabelledby},e.getStepPT(e.stepperpanel,"root",e.index)),e.getStepPT(e.stepperpanel,"content",e.index)),{},{"data-p-active":e.active})),y=function(){var m=e.template;return i.createElement(m,{index:e.index,active:e.active,highlighted:e.highlighted,clickCallback:function(g){return e.onItemClick(g,e.index)},prevCallback:function(g){return e.prevCallback(g,e.index)},nextCallback:function(g){return e.nextCallback(g,e.index)}})};return i.createElement("div",l,e.template?y():e.stepperpanel)}));We.displayName="StepperContent";function St(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,o)}return t}function Je(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?St(Object(t),!0).forEach(function(o){Pe(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):St(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}var Ze=i.memo(i.forwardRef(function(e,n){var t=fe(),o=e.cx,l=t(Je({ref:n,id:e.id,className:o("stepper.action"),role:"tab",type:"button",tabIndex:e.disabled?-1:void 0,"aria-controls":e.ariaControls,onClick:function(v){return e.clickCallback(v,e.index)}},e.getStepPT(e.stepperpanel,"action",e.index))),y=t(Je({className:o("stepper.number")},e.getStepPT(e.stepperpanel,"number",e.index))),x=t(Je({className:o("stepper.title")},e.getStepPT(e.stepperpanel,"title",e.index)));return e.template?e.template():i.createElement("button",l,i.createElement("span",y,e.index+1),i.createElement("span",x,e.getStepProp(e.stepperpanel,"header")))}));Ze.displayName="StepperHeader";function Ot(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,o)}return t}function Qn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ot(Object(t),!0).forEach(function(o){Pe(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ot(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}var et=i.memo(i.forwardRef(function(e,n){var t=fe(),o=t(Qn({ref:n,"aria-hidden":!0,className:e.separatorClass},e.getStepPT(e.stepperpanel,"separator",e.index)));return e.template?e.template():i.createElement("span",o)}));et.displayName="StepperSeparator";function jt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,o)}return t}function de(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?jt(Object(t),!0).forEach(function(o){Pe(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):jt(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}var Xn=L.memo(L.forwardRef(function(e,n){var t=fe(),o=L.useContext(Fe),l=xe.getProps(e,o),y=D.getJSXElement(l.start,l),x=D.getJSXElement(l.end,l),m=xe.setMetaData({props:l}),v=m.ptm,g=m.cx,j=m.isUnstyled,F=m.ptmo,k=L.useState(l.id),V=wt(k,2),G=V[0],A=V[1],_=L.useState(l.activeStep),B=wt(_,2),R=B[0],O=B[1],Q=L.useRef();Ae(xe.css.styles,j,{name:"stepper"});var le=t({className:g("start")},v("start")),ae=t({className:g("end")},v("end"));lt(function(){G||A(_t())}),De(function(){l.activeStep>=0&&l.activeStep<=z().length-1&&b(void 0,l.activeStep)},[l.activeStep]);var X=function(d,c){var I;return d==null||(I=d.props)===null||I===void 0?void 0:I[c]},oe=function(d,c){return X(d,"header")||c},Z=function(d){return d.type.displayName==="StepperPanel"},C=function(d){return R===d},E=function(d){return l.linear&&!C(d)},b=function(d,c){O(c),l.onChangeStep&&l.onChangeStep({originalEvent:d,index:c})},q=function(d){return"".concat(G,"_").concat(d,"_header_action")},P=function(d){return"".concat(G,"_").concat(d,"content")},z=function(){return L.Children.toArray(l.children).reduce(function(d,c){return Z(c)?d.push(c):c&&Array.isArray(c)&&L.Children.toArray(c.props.children).forEach(function(I){Z(I)&&d.push(I)}),d},[])},U=function(d,c){c!==0&&b(d,c-1)},J=function(d,c){c!==z().length-1&&b(d,c+1)},K=function(d,c,I){var H=z().length,Y={props:d.props,parent:{props:l},context:{index:I,count:H,first:I===0,last:I===H-1,active:C(I),highlighted:I<R,disabled:E(I)}};return t(v("stepperpanel.".concat(c),{stepperpanel:Y}),v("stepperpanel.".concat(c),Y),F(X(d,"pt"),c,Y))},ee=function(d,c){if(l.linear){d.preventDefault();return}c!==R&&b(d,c)},N=function(){return z().map(function(d,c){var I,H,Y=t(de({className:re(g("stepper.header",{isStepActive:C,isItemDisabled:E,step:d,index:c,headerPosition:l.headerPosition,orientation:l.orientation})),"aria-current":C(c)&&"step",role:"presentation","data-p-highlight":C(c),"data-p-disabled":E(c),"data-p-active":C(c)},K(d,"header",c)));return L.createElement("li",ke({key:oe(d,c)},Y),L.createElement(Ze,{id:q(c),template:(I=d.children)===null||I===void 0?void 0:I.header,stepperpanel:d,index:c,disabled:E(c),active:C(c),highlighted:c<R,ariaControls:P(c),clickCallback:ee,getStepPT:K,getStepProp:X,cx:g}),c!==z().length-1&&L.createElement(et,{template:(H=d.children)===null||H===void 0?void 0:H.separator,separatorClass:g("stepper.separator"),stepperpanel:d,index:c,active:C(c),highlighted:c<R,getStepPT:K}))})};L.useImperativeHandle(n,function(){return{getElement:function(){return Q.current},getActiveStep:function(){return R},setActiveStep:function(d){return O(d)},nextCallback:function(d){return J(d,R)},prevCallback:function(d){return U(d,R)}}});var ce=function(){return z().map(function(d,c){var I;return C(c)?L.createElement(We,{key:P(c),id:P(c),tempate:d==null||(I=d.children)===null||I===void 0?void 0:I.content,stepperpanel:d,index:c,active:C(c),highlighted:c<R,clickCallback:ee,prevCallback:U,nextCallback:J,getStepPT:K,ariaLabelledby:q(c),ptm:v,cx:g}):null})},f=function(){var d=N(),c=t({className:re(g("nav")),ref:Q},v("nav")),I=t({className:g("panelContainer")},v("panelContainer"));return L.createElement(L.Fragment,null,L.createElement("ul",c,d),L.createElement("div",I,ce()))},S=function(){return z().map(function(d,c){var I,H,Y,ge=L.createRef(null),ze=t(de(de(de({ref:Q,className:g("stepper.panel",{props:l,index:c,isStepActive:C}),"aria-current":C(c)&&"step"},K(d,"root",c)),K(d,"panel",c)),{},{"data-p-highlight":C(c),"data-p-disabled":E(c),"data-p-active":C(c)})),$e=t(de({className:g("stepper.header",{step:d,isStepActive:C,isItemDisabled:E,index:c})},K(d,"header",c))),Me=t(de(de({classNames:g("stepper.content")},K(d,"transition",c)),{},{timeout:{enter:1e3,exit:450},in:C(c),unmountOnExit:!0})),Ee=t(de({ref:ge,className:g("stepper.toggleableContent")},K(d,"toggleableContent",c)));return L.createElement("div",ke({key:oe(d,c)},ze),L.createElement("div",$e,L.createElement(Ze,{id:q(c),template:(I=d.children)===null||I===void 0?void 0:I.header,stepperpanel:d,index:c,disabled:E(c),active:C(c),highlighted:c<R,ariaControls:P(c),clickCallback:ee,getStepPT:K,getStepProp:X,cx:g})),L.createElement(Tn,ke({nodeRef:ge},Me),L.createElement("div",Ee,c!==z().length-1&&L.createElement(et,{template:(H=d.children)===null||H===void 0?void 0:H.separator,separatorClass:g("stepper.separator"),stepperpanel:d,index:c,active:C(c),highlighted:c<R,getStepPT:K}),L.createElement(We,{key:P(c),id:P(c),tempate:d==null||(Y=d.children)===null||Y===void 0?void 0:Y.content,stepperpanel:d,index:c,active:C(c),highlighted:c<R,clickCallback:ee,prevCallback:U,nextCallback:J,getStepPT:K,ariaLabelledby:q(c),ptm:v,cx:g}))))})},te=t({className:re(g("root")),role:"tablist"},xe.getOtherProps(l),v("root"));return L.createElement("div",te,y&&L.createElement("div",le,y),l.orientation==="horizontal"&&f(),l.orientation==="vertical"&&S(),x&&L.createElement("div",ae,x))}));xe.displayName="StepperBase";var Jn="",Ye=Re.extend({defaultProps:{__TYPE:"StepperPanel",children:void 0,header:null},css:{styles:Jn}}),qe=i.memo(i.forwardRef(function(e,n){var t=i.useContext(Fe),o=Ye.getProps(e,t),l=Ye.setMetaData({props:o}),y=l.isUnstyled;return Ae(Ye.css.styles,y,{name:"StepperPanel"}),i.createElement("span",{ref:n},o.children)}));qe.displayName="StepperPanel";function be(){return be=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},be.apply(null,arguments)}function Oe(e){"@babel/helpers - typeof";return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Oe(e)}function Yn(e,n){if(Oe(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n||"default");if(Oe(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Wn(e){var n=Yn(e,"string");return Oe(n)=="symbol"?n:n+""}function Ft(e,n,t){return(n=Wn(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function tt(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}function Zn(e){if(Array.isArray(e))return tt(e)}function el(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rt(e,n){if(e){if(typeof e=="string")return tt(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?tt(e,n):void 0}}function tl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pt(e){return Zn(e)||el(e)||Rt(e)||tl()}function nl(e){if(Array.isArray(e))return e}function ll(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o,l,y,x,m=[],v=!0,g=!1;try{if(y=(t=t.call(e)).next,n!==0)for(;!(v=(o=y.call(t)).done)&&(m.push(o.value),m.length!==n);v=!0);}catch(j){g=!0,l=j}finally{try{if(!v&&t.return!=null&&(x=t.return(),Object(x)!==x))return}finally{if(g)throw l}}return m}}function rl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ve(e,n){return nl(e)||ll(e,n)||Rt(e,n)||rl()}var ol={itemGroup:"p-listbox-item-group",emptyMessage:"p-listbox-empty-message",list:"p-listbox-list",wrapper:function(n){var t=n.props;return re("p-listbox-list-wrapper",t.listClassName)},root:function(n){var t=n.props;return re("p-listbox p-component",{"p-disabled":t.disabled,"p-invalid":t.invalid},t.className)},item:function(n){var t=n.props;return re("p-listbox-item",{"p-highlight":t.selected,"p-focus":t.focusedOptionIndex===t.index,"p-disabled":t.disabled},t.option.className)},filterContainer:"p-listbox-filter-container",filterIcon:"p-listbox-filter-icon",filterInput:"p-listbox-filter",header:"p-listbox-header"},il=`
@layer primereact {
    .p-listbox-list-wrapper {
        overflow: auto;
    }
    
    .p-listbox-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    
    .p-listbox-item {
        cursor: pointer;
        position: relative;
        overflow: hidden;
        outline: none;
    }
    
    .p-listbox-filter-container {
        position: relative;
    }
    
    .p-listbox-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }
    
    .p-listbox-filter {
        width: 100%;
    }
}
`,al={itemGroup:function(n){var t=n.scrollerOptions;return{height:t.props?t.props.itemSize:void 0}},list:function(n){var t=n.options,o=n.props;return o.virtualScrollerOptions?t.style:void 0}},ye=Re.extend({defaultProps:{__TYPE:"ListBox",className:null,dataKey:null,disabled:null,emptyFilterMessage:null,emptyMessage:null,filter:!1,filterIcon:null,filterBy:null,filterInputProps:null,filterLocale:void 0,filterMatchMode:"contains",filterPlaceholder:null,filterTemplate:null,filterValue:null,focusOnHover:!0,id:null,itemTemplate:null,invalid:!1,listClassName:null,listStyle:null,metaKeySelection:!1,selectOnFocus:!1,autoOptionFocus:!1,multiple:!1,onChange:null,onFilterValueChange:null,optionDisabled:null,optionGroupChildren:null,optionGroupLabel:null,optionGroupTemplate:null,optionLabel:null,optionValue:null,options:null,style:null,tabIndex:0,tooltip:null,tooltipOptions:null,value:null,virtualScrollerOptions:null,children:void 0},css:{classes:ol,styles:il,inlineStyles:al}});function Et(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,o)}return t}function Ct(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Et(Object(t),!0).forEach(function(o){Ft(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Et(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}var At=i.memo(function(e){var n=fe(),t=e.ptCallbacks,o=t.ptm,l=t.cx,y=function(F,k){return o(F,Ct({hostName:e.hostName},k))},x={filter:function(F){return m(F)},reset:function(){return e.resetFilter()}},m=function(F){e.onFilter&&e.onFilter({originalEvent:F,value:F.target.value})},v=function(){var F=n({className:l("filterIcon")},y("filterIcon")),k=e.filterIcon||i.createElement(Fn,F),V=On.getJSXIcon(k,Ct({},F),{props:e}),G=n({className:l("header")},y("header")),A=n({className:l("filterContainer")},y("filterContainer")),_=i.createElement("div",A,i.createElement(we,be({type:"text",value:e.filter,onChange:m,className:l("filterInput"),disabled:e.disabled,placeholder:e.filterPlaceholder},e.filterInputProps,{pt:o("filterInput"),unstyled:e.unstyled,__parentMetadata:{parent:e.metaData}})),V);if(e.filterTemplate){var B={className:"p-listbox-filter-container",element:_,filterOptions:x,filterInputChange:m,filterIconClassName:"p-dropdown-filter-icon",props:e};_=D.getJSXElement(e.filterTemplate,B)}return i.createElement("div",G,_)},g=v();return i.createElement(i.Fragment,null,g)});At.displayName="ListBoxHeader";var zt=i.memo(function(e){var n=i.useState(!1),t=ve(n,2),o=t[0],l=t[1],y=fe(),x=e.ptCallbacks,m=x.ptm,v=x.cx,g=function(_){return m(_,{hostName:e.hostName,context:{selected:e.selected,disabled:e.disabled,focused:o,focusedOptionIndex:e.focusedOptionIndex}})},j=function(_){l(!0)},F=function(_){l(!1)},k=function(_){e.onTouchEnd&&e.onTouchEnd({originalEvent:_,option:e.option})},V=e.template?D.getJSXElement(e.template,e.option):e.label,G=y({id:e.id,className:v("item",{props:e}),style:e.style,onClick:function(_){return e.onClick(_,e.option,e.index)},onTouchEnd:k,onFocus:j,onBlur:F,tabIndex:"-1",onMouseDown:function(_){return e.onOptionMouseDown(_,e.index)},onMouseMove:function(_){return e.onOptionMouseMove(_,e.index)},"aria-label":e.label,role:"option","aria-selected":e.selected,"aria-disabled":e.disabled,"data-p-disabled":e.disabled},g("item"));return i.createElement("li",be({},G,{key:e.optionKey}),V,i.createElement(In,null))});zt.displayName="ListBoxItem";function Nt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,o)}return t}function pe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Nt(Object(t),!0).forEach(function(o){Ft(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Nt(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}function sl(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=cl(e))||n){t&&(e=t);var o=0,l=function(){};return{s:l,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(g){throw g},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y,x=!0,m=!1;return{s:function(){t=t.call(e)},n:function(){var g=t.next();return x=g.done,g},e:function(g){m=!0,y=g},f:function(){try{x||t.return==null||t.return()}finally{if(m)throw y}}}}function cl(e,n){if(e){if(typeof e=="string")return It(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?It(e,n):void 0}}function It(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var _e=i.memo(i.forwardRef(function(e,n){var t=fe(),o=i.useContext(Fe),l=ye.getProps(e,o),y=i.useState(null),x=ve(y,2),m=x[0],v=x[1],g=i.useRef(null),j=i.useRef(null),F=i.useRef(null),k=i.useState(-1),V=ve(k,2),G=V[0],A=V[1],_=i.useState(!1),B=ve(_,2),R=B[0],O=B[1],Q=i.useState(""),le=ve(Q,2),ae=le[0],X=le[1],oe=i.useState(""),Z=ve(oe,2),C=Z[0],E=Z[1],b=i.useRef(null),q=i.useRef(null),P=i.useRef(null),z=i.useRef(null),U=i.useRef(!1),J=(l.onFilterValueChange?l.filterValue:ae)||"",K=J&&J.trim().length>0,ee={props:l,state:{filterValue:J}},N=ye.setMetaData(ee);Ae(ye.css.styles,N.isUnstyled,{name:"listbox"});var ce=function(r,s){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;l.disabled||Be(s)||(l.multiple?d(r.originalEvent,s):$(r.originalEvent,s),U.current=!1,u!==-1&&v(u))},f=function(r,s){ue(r,s)},S=function(r,s){l.focusOnHover&&R&&ue(r,s)},te=function(){l.disabled||(U.current=!0)},$=function(r,s){var u=Ne(s),h=!1,w=null,M=U.current?!1:l.metaKeySelection;if(M){var W=r.metaKey||r.ctrlKey;u?W&&(w=null,h=!0):(w=ie(s),h=!0)}else w=u?null:ie(s),h=!0;h&&Ve(r,w)},d=function(r,s){var u=Ne(s),h=!1,w=null,M=U?!1:l.metaKeySelection;if(M){var W=r.metaKey||r.ctrlKey;u?(W?w=st(s):w=[ie(s)],h=!0):(w=W?l.value||[]:[],w=[].concat(Pt(w),[ie(s)]),h=!0)}else u?w=st(s):w=[].concat(Pt(l.value||[]),[ie(s)]),h=!0;h&&l.onChange({originalEvent:r,value:w,stopPropagation:function(){r==null||r.stopPropagation()},preventDefault:function(){r==null||r.preventDefault()},target:{name:l.name,id:l.id,value:w}})},c=function(){return D.isNotEmpty(l.value)},I=function(r){return l.optionGroupLabel&&r.optionGroup&&r.group},H=function(r){return D.isNotEmpty(r)&&!(Be(r)||I(r))},Y=function(r){return H(r)&&Ne(r)},ge=function(){return T.findIndex(function(r){return H(r)})},ze=function(){return c()?D.findLastIndex(T,function(r){return Y(r)}):-1},$e=function(){if(c())if(l.multiple){for(var r=function(){var w=l.value[u],M=T.findIndex(function(W){return Y(W)&&Ge(w,ie(W))});if(M>-1)return{v:M}},s,u=l.value.length-1;u>=0;u--)if(s=r(),s)return s.v}else return T.findIndex(function(h){return Y(h)});return-1},Me=function(){return c()?T.findIndex(function(r){return Y(r)}):-1},Ee=function(){return D.findLastIndex(T,function(r){return H(r)})},Mt=function(r){var s=r<T.length-1?T.slice(r+1).findIndex(function(u){return H(u)}):-1;return s>-1?s+r+1:r},Kt=function(r){var s=r>0?D.findLastIndex(T.slice(0,r),function(u){return H(u)}):-1;return s>-1?s:r},Ht=function(){return m!==-1?"".concat(P.current,"_").concat(m):null},rt=function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=-1;return c()&&(s?(u=it(r),u=u===-1?ot(r):u):(u=ot(r),u=u===-1?it(r):u)),u>-1?u:r},Ke=function(r){var s;return H(r)&&((s=Ue(r))===null||s===void 0?void 0:s.toLocaleLowerCase(l.filterLocale).startsWith(C.toLocaleLowerCase(l.filterLocale)))},Vt=function(r,s){E((C||"")+s);var u=-1;D.isNotEmpty(C)&&(m!==-1?(u=T.slice(m).findIndex(function(h){return Ke(h)}),u=u===-1?T.slice(0,m).findIndex(function(h){return Ke(h)}):u+m):u=T.findIndex(function(h){return Ke(h)}),u===-1&&m===-1&&(u=Ce()),u!==-1&&ue(r,u)),g.current&&clearTimeout(g.current),g.current=setTimeout(function(){E(""),g.current=null},500)},ot=function(r){var s=c()&&r<T.length-1?T.slice(r+1).findIndex(function(u){return Y(u)}):-1;return s>-1?s+r+1:-1},it=function(r){var s=c()&&r>0?D.findLastIndex(T.slice(0,r),function(u){return Y(u)}):-1;return s>-1?s:-1},he=function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(s===-1&&(s=rt(u,!0)),u===-1&&(u=rt(s)),s!==-1&&u!==-1){var h=Math.min(s,u),w=Math.max(s,u),M=T.slice(h,w+1).filter(function(W){return H(W)}).map(function(W){return ie(W)});Ve(r,M)}},Ce=function(){var r=Me();return r<0?ge():r},Gt=function(){var r=ze();return r<0?Ee():r},ue=function(r,s){m!==s&&(v(s),He(),r&&l.selectOnFocus&&!l.multiple&&ce(r,T[s]))},Ut=function(r){var s=m!==-1?Mt(m):Ce();l.multiple&&r.shiftKey&&he(r,G,s),ue(r,s),r.preventDefault()},Bt=function(r){var s=m!==-1?Kt(m):Gt();l.multiple&&r.shiftKey&&he(r,s,G),ue(r,s),r.preventDefault()},Qt=function(r){m!==-1&&(l.multiple&&r.shiftKey?he(r,m):ce(r,T[m])),r.preventDefault()},Xt=function(r){Qt(r)},Jt=function(){A(m)},Yt=function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s)r.currentTarget.setSelectionRange(0,0),v(-1);else{var u=r.metaKey||r.ctrlKey,h=ge();l.multiple&&r.shiftKey&&u&&he(r,h,G),ue(r,h)}r.preventDefault()},Wt=function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s){var u=r.currentTarget,h=u.value.length;u.setSelectionRange(h,h),v(-1)}else{var w=r.metaKey||r.ctrlKey,M=Ee();l.multiple&&r.shiftKey&&w&&he(r,G,M),ue(r,M)}r.preventDefault()},Zt=function(r){He(0),r.preventDefault()},en=function(r){He(T.length-1),r.preventDefault()},at=function(r){var s=r.metaKey||r.ctrlKey;switch(r.code){case"ArrowDown":Ut(r);break;case"ArrowUp":Bt(r);break;case"Home":Yt(r);break;case"End":Wt(r);break;case"PageDown":en(r);break;case"PageUp":Zt(r);break;case"Enter":case"NumpadEnter":case"Space":Xt(r),r.preventDefault();break;case"Tab":break;case"ShiftLeft":case"ShiftRight":Jt();break;default:if(l.multiple&&r.key==="a"&&s){var u=T.filter(function(h){return H(h)}).map(function(h){return ie(h)});Ve(r,u),r.preventDefault();break}!s&&D.isPrintableCharacter(r.key)&&(Vt(r,r.key),r.preventDefault());break}},He=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;setTimeout(function(){if(z.current){var s=r!==-1?"".concat(P.current,"_").concat(r):Ht(),u=z.current.querySelector('li[id="'.concat(s,'"]'));u?u.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"}):l.virtualScrollerOptions&&q.current&&q.current.scrollToIndex(r!==-1?r:m)}},0)},tn=function(r){q.current&&q.current.scrollToIndex(0);var s=r.originalEvent,u=r.value;l.onFilterValueChange?l.onFilterValueChange({originalEvent:s,value:u}):X(u)},nn=function(){X(""),l.onFilter&&l.onFilter({filter:""})},ln=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:R;if(l.selectOnFocus&&l.autoOptionFocus&&!c()&&!l.multiple&&r){var s=Ce();ce(null,T[s]),v(s)}},Ve=function(r,s){l.onChange&&l.onChange({originalEvent:r,value:s,stopPropagation:function(){r==null||r.stopPropagation()},preventDefault:function(){r==null||r.preventDefault()},target:{name:l.name,id:l.id,value:s}})},st=function(r){return l.value.filter(function(s){return!D.equals(s,ie(r),l.dataKey)})},rn=function(){if(l.value!=null&&T)if(l.optionGroupLabel)for(var r=0;r<T.length;r++){var s=ut(l.value,Qe(T[r]));if(s!==-1)return{group:r,option:s}}else return ut(l.value,T);return-1},ct=function(){return l.optionValue?null:l.dataKey},ut=function(r,s){var u=ct();return s.findIndex(function(h){return D.equals(r,ie(h),u)})},Ge=function(r,s){return D.equals(r,s,ct())},Ne=function(r){var s=ie(r);return l.multiple?(l.value||[]).some(function(u){return Ge(u,s)}):Ge(l.value,s)},Ue=function(r){return l.optionLabel?D.resolveFieldData(r,l.optionLabel):r&&r.label!==void 0?r.label:r},ie=function(r){return l.optionValue?D.resolveFieldData(r,l.optionValue):r&&r.value!==void 0?r.value:r},on=function(r){return l.dataKey?D.resolveFieldData(r,l.dataKey):Ue(r)},Be=function(r){return l.optionDisabled?D.isFunction(l.optionDisabled)?l.optionDisabled(r):D.resolveFieldData(r,l.optionDisabled):r&&r.disabled!==void 0?r.disabled:!1},an=function(){se.focus(z.current);var r=se.getFirstFocusableElement(b.current,':not([data-p-hidden-focusable="true"])');F.current.tabIndex=se.isElement(r)?void 0:-1,j.current.tabIndex=-1,ue(null,0)},sn=function(r){var s=r.relatedTarget;if(s===z.current){var u=se.getFirstFocusableElement(b.current,':not([data-p-hidden-focusable="true"])');se.focus(u),j.current.tabIndex=void 0}else se.focus(j.current);F.current.tabIndex=-1},dt=function(){O(!0),v(m!==-1?m:l.autoOptionFocus?Ce():$e()),ln(!0)},pt=function(){O(!1),v(-1),A(-1),E("")},cn=function(r){return D.resolveFieldData(r,l.optionGroupLabel)},un=function(r){return D.resolveFieldData(r,l.optionGroupLabel)},Qe=function(r){return D.resolveFieldData(r,l.optionGroupChildren)},ft=function(r){return(r||[]).reduce(function(s,u,h){s.push({optionGroup:u,group:!0,index:h,code:u.code,label:u.label});var w=Qe(u);return w&&w.forEach(function(M){return s.push(M)}),s},[])},dn=function(){var r=l.optionGroupLabel?ft(l.options):l.options;if(K){var s=J.trim().toLocaleLowerCase(l.filterLocale),u=l.filterBy?l.filterBy.split(","):[l.optionLabel||"label"];if(l.optionGroupLabel){var h=[],w=sl(l.options),M;try{for(w.s();!(M=w.n()).done;){var W=M.value,me=vt.filter(Qe(W),u,s,l.filterMatchMode,l.filterLocale);me&&me.length&&h.push(pe(pe({},W),{items:me}))}}catch(Ie){w.e(Ie)}finally{w.f()}return ft(h)}return vt.filter(r,u,s,l.filterMatchMode,l.filterLocale)}return r},pn=function(){if(q.current){var r=rn();r!==-1&&setTimeout(function(){return q.current.scrollToIndex(r)},0)}};i.useImperativeHandle(n,function(){return{props:l,focus:function(){return se.focusFirstElement(b.current)},getElement:function(){return b.current},getVirtualScroller:function(){return q.current}}}),lt(function(){pn(),P.current=_t()});var fn=function(){return l.filter?i.createElement(At,{hostName:"ListBox",filter:J,filterIcon:l.filterIcon,onFilter:tn,resetFilter:nn,filterTemplate:l.filterTemplate,disabled:l.disabled,filterPlaceholder:l.filterPlaceholder,filterInputProps:l.filterInputProps,ptCallbacks:N,metaData:ee}):null},mt=function(r,s){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},h={height:u.props?u.props.itemSize:void 0};if(r.group&&r.optionGroup&&l.optionGroupLabel){var w=l.optionGroupTemplate?D.getJSXElement(l.optionGroupTemplate,r,s):un(r),M=s+"_"+cn(r),W=t({className:N.cx("itemGroup"),style:N.sx("itemGroup",{scrollerOptions:u}),role:"group"},N.ptm("itemGroup"));return i.createElement("li",be({},W,{key:M}),w)}var me=Ue(r),Ie=s+"_"+on(r),Sn=Be(r);return i.createElement(zt,{id:P.current+"_"+s,hostName:"ListBox",optionKey:Ie,key:Ie,label:me,index:s,onOptionMouseDown:f,onOptionMouseMove:S,focusedOptionIndex:m,option:r,style:h,template:l.itemTemplate,selected:Ne(r),onClick:ce,onTouchEnd:te,disabled:Sn,ptCallbacks:N,metaData:ee})},mn=function(){return D.isNotEmpty(T)?T.map(mt):K?qt(l.emptyFilterMessage,!0):qt(l.emptyMessage)},qt=function(r,s){var u=t({className:N.cx("emptyMessage")},N.ptm("emptyMessage")),h=D.getJSXElement(r,l)||jn(s?"emptyFilterMessage":"emptyMessage");return i.createElement("li",u,h)},qn=function(){if(l.virtualScrollerOptions){var r=pe(pe({},l.virtualScrollerOptions),{items:T,onLazyLoad:function(w){return l.virtualScrollerOptions.onLazyLoad(pe(pe({},w),{filter:T}))},itemTemplate:function(w,M){return w&&mt(w,M.index,M)},contentTemplate:function(w){var M=t(pe({ref:z,style:N.sx("list",{options:w}),className:N.cx("list",{options:w}),role:"listbox",tabIndex:"-1","aria-multiselectable":l.multiple,onFocus:dt,onBlur:pt,onKeyDown:at},bt),N.ptm("list"));return i.createElement("ul",M,w.children)}});return i.createElement(Dn,be({ref:q},r,{pt:N.ptm("virtualScroller")}))}var s=mn(),u=t(pe({ref:z,className:N.cx("list"),role:"listbox","aria-multiselectable":l.multiple,tabIndex:"-1",onFocus:dt,onBlur:pt,onKeyDown:at},bt),N.ptm("list"));return i.createElement("ul",u,s)},T=dn(),bn=D.isNotEmpty(l.tooltip),vn=ye.getOtherProps(l),bt=D.reduceKeys(vn,se.ARIA_PROPS),gn=qn(),hn=fn(),yn=t({className:N.cx("wrapper"),style:l.listStyle},N.ptm("wrapper")),xn=t({ref:b,id:l.id,className:N.cx("root"),style:l.style},ye.getOtherProps(l),N.ptm("root")),wn=t({ref:j,role:"presentation","aria-hidden":"true",className:"p-hidden-accessible p-hidden-focusable",tabIndex:l.disabled?-1:l.tabIndex,onFocus:an,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0},N.ptm("hiddenFirstFocusableEl")),kn=t({ref:F,role:"presentation","aria-hidden":"true",className:"p-hidden-accessible p-hidden-focusable",tabIndex:l.disabled?-1:l.tabIndex,onFocus:sn,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0},N.ptm("hiddenLastFocusableEl"));return i.createElement(i.Fragment,null,i.createElement("div",xn,i.createElement("span",wn),hn,i.createElement("div",yn,gn),i.createElement("span",kn)),bn&&i.createElement(Ln,be({target:b,content:l.tooltip,pt:N.ptm("tooltip")},l.tooltipOptions)))}));_e.displayName="ListBox";const ul=({selectedBrand:e,setSelectedBrand:n,selectedModel:t,setSelectedModel:o,selectedYear:l,setSelectedYear:y,onChange:x,onComplete:m})=>{const[v,g]=i.useState([]),[j,F]=i.useState([]),[k,V]=i.useState("");i.useState(!1);const[G,A]=i.useState(!1),[_,B]=i.useState(!1),R=i.useRef(null),O=i.useRef(null),Q=i.useRef(null),le=i.useRef(null);i.useEffect(()=>{(async()=>{try{A(!0);const q=await gt.post(route("super.car.brands.get"));g(q.data)}catch(q){console.error("Markalar yüklenirken hata oluştu:",q)}finally{A(!1)}})()},[]),i.useEffect(()=>{(async()=>{if(e)try{B(!0);const q=await gt.post(route("super.car.brands.models.get",e.id));F(q.data)}catch(q){console.error("Modeller yüklenirken hata oluştu:",q)}finally{B(!1)}else F([])})()},[e]),i.useEffect(()=>{if(l!==null&&m!==void 0){let b={brand:e,model:t,generation:{name:k,modelYear:"",non:!0},brandLogo:e==null?void 0:e.logo,year:l};m(b)}},[l]),i.useEffect(()=>{if(x!==void 0){let b={brand:e,model:t,generation:{name:k,modelYear:"",non:!0},brandLogo:e==null?void 0:e.logo,year:l};x(b,l!==null)}},[e,t,l,k]);async function ae(b){let q=[];for(let P=1975;P<=Number(new Date().getFullYear());P++)q.push({name:P});return q.sort((P,z)=>z.name-P.name),q}const X=b=>a.jsxs("div",{className:"flex items-center",children:[b.logo&&a.jsx("img",{src:b.logo,alt:b.name,className:"w-8 h-8 mr-2"}),a.jsx("span",{children:b.name})]}),oe=b=>a.jsxs("div",{className:"flex items-center",children:[(e==null?void 0:e.logo)&&a.jsx("img",{src:e.logo,alt:b.name,className:"w-8 h-8 mr-2"}),a.jsx("span",{children:b.name})]}),Z=b=>a.jsxs("div",{className:"flex items-center",children:[(e==null?void 0:e.logo)&&a.jsx("img",{src:e.logo,alt:b.name+" .yıl",className:"w-8 h-8 mr-2"}),a.jsx("span",{children:b.name})]}),[C,E]=i.useState([]);return i.useEffect(()=>{(async()=>{const q=await ae();E(q)})()},[]),i.useEffect(()=>{e&&R.current&&R.current.scrollIntoView({behavior:"smooth",block:"center"})},[e]),i.useEffect(()=>{t&&O.current&&O.current.scrollIntoView({behavior:"smooth",block:"center"})},[t]),i.useEffect(()=>{l&&Q.current&&(Q.current.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{var b;(b=le.current)==null||b.focus()},500))},[l]),a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"flex flex-col gap-2 mt-4",children:[a.jsx("label",{className:"font-medium",children:"Araç Markası"}),a.jsx(yt,{blocked:G,template:a.jsx("i",{className:"pi pi-spin pi-spinner text-3xl"}),children:a.jsx(_e,{value:e,onChange:b=>{n(b.value),o(null),y(null)},options:v,optionLabel:"name",placeholder:"Araç Markası Seçiniz",filter:!0,className:"w-full md:w-14rem",itemTemplate:X,listStyle:{height:"300px"}})})]}),e&&a.jsxs("div",{className:"flex flex-col gap-2 mt-4",ref:R,children:[a.jsx("label",{className:"font-medium",children:"Araç Modeli"}),a.jsx(yt,{blocked:_,template:a.jsx("i",{className:"pi pi-spin pi-spinner text-3xl"}),children:a.jsx(_e,{value:t,onChange:b=>{o(b.value),y(null)},options:j,optionLabel:"name",placeholder:"Araç Modelini Seçiniz",filter:!0,className:"w-full md:w-14rem",itemTemplate:oe,listStyle:{height:"300px"}})})]}),t&&a.jsxs("div",{className:"flex flex-col gap-2 mt-4",ref:O,children:[a.jsx("label",{className:"font-medium",children:"Araç Yılı"}),a.jsx(_e,{value:l,onChange:b=>y(b.value),options:C,placeholder:"Araç Yılı Seçiniz",optionLabel:"name",filter:!0,className:"w-full md:w-14rem",itemTemplate:Z,listStyle:{height:"300px"}})]}),t&&a.jsxs("div",{className:"flex flex-col gap-2 mt-4",ref:Q,children:[a.jsx("label",{className:"font-medium",children:"Paket Detayı"}),a.jsx(we,{ref:le,value:k,onChange:b=>V(b.target.value),className:"w-full md:w-14rem",placeholder:"Paket detayını giriniz"})]})]})};function nt(){return nt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},nt.apply(null,arguments)}function je(e){"@babel/helpers - typeof";return je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},je(e)}function dl(e,n){if(je(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n||"default");if(je(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function pl(e){var n=dl(e,"string");return je(n)=="symbol"?n:n+""}function fl(e,n,t){return(n=pl(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ml(e){if(Array.isArray(e))return e}function ql(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o,l,y,x,m=[],v=!0,g=!1;try{if(y=(t=t.call(e)).next,n!==0)for(;!(v=(o=y.call(t)).done)&&(m.push(o.value),m.length!==n);v=!0);}catch(j){g=!0,l=j}finally{try{if(!v&&t.return!=null&&(x=t.return(),Object(x)!==x))return}finally{if(g)throw l}}return m}}function Tt(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}function bl(e,n){if(e){if(typeof e=="string")return Tt(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Tt(e,n):void 0}}function vl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gl(e,n){return ml(e)||ql(e,n)||bl(e,n)||vl()}var hl={root:function(n){var t=n.props;return re("",t.className)},toolbar:"",content:""},yl=`
/*!
 * Quill Editor v2.0.2
 * https://quilljs.com
 * Copyright (c) 2017-2024, Slab
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
.ql-container {
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  height: 100%;
  margin: 0;
  position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
  visibility: hidden;
}
.ql-container:not(.ql-disabled) li[data-list="checked"] > .ql-ui,
.ql-container:not(.ql-disabled) li[data-list="unchecked"] > .ql-ui {
  cursor: pointer;
}
.ql-clipboard {
  left: -100000px;
  height: 1px;
  overflow-y: hidden;
  position: absolute;
  top: 50%;
}
.ql-clipboard p {
  margin: 0;
  padding: 0;
}
.ql-editor {
  box-sizing: border-box;
  counter-reset: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
    list-9;
  line-height: 1.42;
  height: 100%;
  outline: none;
  overflow-y: auto;
  padding: 12px 15px;
  tab-size: 4;
  -moz-tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.ql-editor > * {
  cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
  margin: 0;
  padding: 0;
}
@supports (counter-set: none) {
  .ql-editor p,
  .ql-editor h1,
  .ql-editor h2,
  .ql-editor h3,
  .ql-editor h4,
  .ql-editor h5,
  .ql-editor h6 {
    counter-set: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
      list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor p,
  .ql-editor h1,
  .ql-editor h2,
  .ql-editor h3,
  .ql-editor h4,
  .ql-editor h5,
  .ql-editor h6 {
    counter-reset: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7
      list-8 list-9;
  }
}
.ql-editor table {
  border-collapse: collapse;
}
.ql-editor td {
  border: 1px solid #000;
  padding: 2px 5px;
}
.ql-editor ol {
  padding-left: 1.5em;
}
.ql-editor li {
  list-style-type: none;
  padding-left: 1.5em;
  position: relative;
}
.ql-editor li > .ql-ui:before {
  display: inline-block;
  margin-left: -1.5em;
  margin-right: 0.3em;
  text-align: right;
  white-space: nowrap;
  width: 1.2em;
}
.ql-editor li[data-list="checked"] > .ql-ui,
.ql-editor li[data-list="unchecked"] > .ql-ui {
  color: #777;
}
.ql-editor li[data-list="bullet"] > .ql-ui:before {
  content: "\\2022";
}
.ql-editor li[data-list="checked"] > .ql-ui:before {
  content: "\\2611";
}
.ql-editor li[data-list="unchecked"] > .ql-ui:before {
  content: "\\2610";
}
@supports (counter-set: none) {
  .ql-editor li[data-list] {
    counter-set: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list] {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
      list-9;
  }
}
.ql-editor li[data-list="ordered"] {
  counter-increment: list-0;
}
.ql-editor li[data-list="ordered"] > .ql-ui:before {
  content: counter(list-0, decimal) ". ";
}
.ql-editor li[data-list="ordered"].ql-indent-1 {
  counter-increment: list-1;
}
.ql-editor li[data-list="ordered"].ql-indent-1 > .ql-ui:before {
  content: counter(list-1, lower-alpha) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-1 {
    counter-set: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-2 {
  counter-increment: list-2;
}
.ql-editor li[data-list="ordered"].ql-indent-2 > .ql-ui:before {
  content: counter(list-2, lower-roman) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-2 {
    counter-set: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-3 {
  counter-increment: list-3;
}
.ql-editor li[data-list="ordered"].ql-indent-3 > .ql-ui:before {
  content: counter(list-3, decimal) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-3 {
    counter-set: list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-4 {
  counter-increment: list-4;
}
.ql-editor li[data-list="ordered"].ql-indent-4 > .ql-ui:before {
  content: counter(list-4, lower-alpha) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-4 {
    counter-set: list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-5 {
  counter-increment: list-5;
}
.ql-editor li[data-list="ordered"].ql-indent-5 > .ql-ui:before {
  content: counter(list-5, lower-roman) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-5 {
    counter-set: list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-6 {
  counter-increment: list-6;
}
.ql-editor li[data-list="ordered"].ql-indent-6 > .ql-ui:before {
  content: counter(list-6, decimal) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-6 {
    counter-set: list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-7 {
  counter-increment: list-7;
}
.ql-editor li[data-list="ordered"].ql-indent-7 > .ql-ui:before {
  content: counter(list-7, lower-alpha) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-7 {
    counter-set: list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-7 {
    counter-reset: list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-8 {
  counter-increment: list-8;
}
.ql-editor li[data-list="ordered"].ql-indent-8 > .ql-ui:before {
  content: counter(list-8, lower-roman) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-8 {
    counter-set: list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-8 {
    counter-reset: list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-9 {
  counter-increment: list-9;
}
.ql-editor li[data-list="ordered"].ql-indent-9 > .ql-ui:before {
  content: counter(list-9, decimal) ". ";
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 3em;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 4.5em;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 3em;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 4.5em;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 6em;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 7.5em;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 6em;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 7.5em;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 9em;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 10.5em;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 9em;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 10.5em;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 12em;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 13.5em;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 12em;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 13.5em;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 15em;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 16.5em;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 15em;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 16.5em;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 18em;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 19.5em;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 18em;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 19.5em;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 21em;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 22.5em;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 21em;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 22.5em;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 24em;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 25.5em;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 24em;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 25.5em;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 27em;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 28.5em;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 27em;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 28.5em;
}
.ql-editor li.ql-direction-rtl {
  padding-right: 1.5em;
}
.ql-editor li.ql-direction-rtl > .ql-ui:before {
  margin-left: 0.3em;
  margin-right: -1.5em;
  text-align: left;
}
.ql-editor table {
  table-layout: fixed;
  width: 100%;
}
.ql-editor table td {
  outline: none;
}
.ql-editor .ql-code-block-container {
  font-family: monospace;
}
.ql-editor .ql-video {
  display: block;
  max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
  margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
  margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
  background-color: #000;
}
.ql-editor .ql-bg-red {
  background-color: #e60000;
}
.ql-editor .ql-bg-orange {
  background-color: #f90;
}
.ql-editor .ql-bg-yellow {
  background-color: #ff0;
}
.ql-editor .ql-bg-green {
  background-color: #008a00;
}
.ql-editor .ql-bg-blue {
  background-color: #06c;
}
.ql-editor .ql-bg-purple {
  background-color: #93f;
}
.ql-editor .ql-color-white {
  color: #fff;
}
.ql-editor .ql-color-red {
  color: #e60000;
}
.ql-editor .ql-color-orange {
  color: #f90;
}
.ql-editor .ql-color-yellow {
  color: #ff0;
}
.ql-editor .ql-color-green {
  color: #008a00;
}
.ql-editor .ql-color-blue {
  color: #06c;
}
.ql-editor .ql-color-purple {
  color: #93f;
}
.ql-editor .ql-font-serif {
  font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
  font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
  font-size: 0.75em;
}
.ql-editor .ql-size-large {
  font-size: 1.5em;
}
.ql-editor .ql-size-huge {
  font-size: 2.5em;
}
.ql-editor .ql-direction-rtl {
  direction: rtl;
  text-align: inherit;
}
.ql-editor .ql-align-center {
  text-align: center;
}
.ql-editor .ql-align-justify {
  text-align: justify;
}
.ql-editor .ql-align-right {
  text-align: right;
}
.ql-editor .ql-ui {
  position: absolute;
}
.ql-editor.ql-blank::before {
  color: rgba(0, 0, 0, 0.6);
  content: attr(data-placeholder);
  font-style: italic;
  left: 15px;
  pointer-events: none;
  position: absolute;
  right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
  clear: both;
  content: "";
  display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  float: left;
  height: 24px;
  padding: 3px 5px;
  width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
  float: left;
  height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
  outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type="file"],
.ql-snow .ql-toolbar input.ql-image[type="file"] {
  display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
  color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
  fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
  stroke: #06c;
}
@media (pointer: coarse) {
  .ql-snow.ql-toolbar button:hover:not(.ql-active),
  .ql-snow .ql-toolbar button:hover:not(.ql-active) {
    color: #444;
  }
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
    fill: #444;
  }
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
    stroke: #444;
  }
}
.ql-snow {
  box-sizing: border-box;
}
.ql-snow * {
  box-sizing: border-box;
}
.ql-snow .ql-hidden {
  display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
  visibility: hidden;
}
.ql-snow .ql-tooltip {
  position: absolute;
  transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
  cursor: pointer;
  text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
  transform: translateY(-10px);
}
.ql-snow .ql-formats {
  display: inline-block;
  vertical-align: middle;
}
.ql-snow .ql-formats:after {
  clear: both;
  content: "";
  display: table;
}
.ql-snow .ql-stroke {
  fill: none;
  stroke: #444;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
  fill: none;
  stroke: #444;
  stroke-miterlimit: 10;
  stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
  fill: #444;
}
.ql-snow .ql-empty {
  fill: none;
}
.ql-snow .ql-even {
  fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
  stroke-width: 1;
}
.ql-snow .ql-transparent {
  opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
  display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
  display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
  display: none;
}
.ql-snow .ql-editor h1 {
  font-size: 2em;
}
.ql-snow .ql-editor h2 {
  font-size: 1.5em;
}
.ql-snow .ql-editor h3 {
  font-size: 1.17em;
}
.ql-snow .ql-editor h4 {
  font-size: 1em;
}
.ql-snow .ql-editor h5 {
  font-size: 0.83em;
}
.ql-snow .ql-editor h6 {
  font-size: 0.67em;
}
.ql-snow .ql-editor a {
  text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
  border-left: 4px solid #ccc;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor .ql-code-block-container {
  background-color: #f0f0f0;
  border-radius: 3px;
}
.ql-snow .ql-editor .ql-code-block-container {
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 10px;
}
.ql-snow .ql-editor code {
  font-size: 85%;
  padding: 2px 4px;
}
.ql-snow .ql-editor .ql-code-block-container {
  background-color: #23241f;
  color: #f8f8f2;
  overflow: visible;
}
.ql-snow .ql-editor img {
  max-width: 100%;
}
.ql-snow .ql-picker {
  color: #444;
  display: inline-block;
  float: left;
  font-size: 14px;
  font-weight: 500;
  height: 24px;
  position: relative;
  vertical-align: middle;
}
.ql-snow .ql-picker-label {
  cursor: pointer;
  display: inline-block;
  height: 100%;
  padding-left: 8px;
  padding-right: 2px;
  position: relative;
  width: 100%;
}
.ql-snow .ql-picker-label::before {
  display: inline-block;
  line-height: 22px;
}
.ql-snow .ql-picker-options {
  background-color: #fff;
  display: none;
  min-width: 100%;
  padding: 4px 8px;
  position: absolute;
  white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
  cursor: pointer;
  display: block;
  padding-bottom: 5px;
  padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  color: #ccc;
  z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
  fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
  stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  display: block;
  margin-top: -1px;
  top: 100%;
  z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
  width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
  padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
  right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
  padding: 4px 0;
}
.ql-snow .ql-icon-picker .ql-picker-item {
  height: 24px;
  width: 24px;
  padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
  padding: 3px 5px;
  width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
  border: 1px solid transparent;
  float: left;
  height: 16px;
  margin: 2px;
  padding: 0;
  width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
  position: absolute;
  margin-top: -9px;
  right: 0;
  top: 50%;
  width: 18px;
}
.ql-snow
  .ql-picker.ql-header
  .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-font
  .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-size
  .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-header
  .ql-picker-item[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-font
  .ql-picker-item[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-size
  .ql-picker-item[data-label]:not([data-label=""])::before {
  content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
  width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: "Normal";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: "Heading 1";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: "Heading 2";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: "Heading 3";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: "Heading 4";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: "Heading 5";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: "Heading 6";
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  font-size: 2em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  font-size: 1.5em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  font-size: 1.17em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  font-size: 1em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  font-size: 0.83em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  font-size: 0.67em;
}
.ql-snow .ql-picker.ql-font {
  width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: "Sans Serif";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  content: "Serif";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  content: "Monospace";
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
  width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: "Normal";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  content: "Small";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  content: "Large";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  content: "Huge";
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
  background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
  background-color: #000;
}
.ql-code-block-container {
  position: relative;
}
.ql-code-block-container .ql-ui {
  right: 5px;
  top: 5px;
}
.ql-toolbar.ql-snow {
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
  margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
  border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
  border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
  border-top: 0;
}
.ql-snow .ql-tooltip {
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px #ddd;
  color: #444;
  padding: 5px 12px;
  white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
  content: "Visit URL:";
  line-height: 26px;
  margin-right: 8px;
}
.ql-snow .ql-tooltip input[type="text"] {
  display: none;
  border: 1px solid #ccc;
  font-size: 13px;
  height: 26px;
  margin: 0;
  padding: 3px 5px;
  width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
  display: inline-block;
  max-width: 200px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
  border-right: 1px solid #ccc;
  content: "Edit";
  margin-left: 16px;
  padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
  content: "Remove";
  margin-left: 8px;
}
.ql-snow .ql-tooltip a {
  line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
  display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type="text"] {
  display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0;
  content: "Save";
  padding-right: 0;
}
.ql-snow .ql-tooltip[data-mode="link"]::before {
  content: "Enter link:";
}
.ql-snow .ql-tooltip[data-mode="formula"]::before {
  content: "Enter formula:";
}
.ql-snow .ql-tooltip[data-mode="video"]::before {
  content: "Enter video:";
}
.ql-snow a {
  color: #06c;
}
.ql-container.ql-snow {
  border: 1px solid #ccc;
}
`,Le=Re.extend({defaultProps:{__TYPE:"Editor",id:null,value:null,style:null,className:null,placeholder:null,readOnly:!1,modules:null,formats:null,theme:"snow",showHeader:!0,headerTemplate:null,onTextChange:null,onSelectionChange:null,onLoad:null,maxLength:null,children:void 0},css:{classes:hl,styles:yl}});function Lt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,o)}return t}function Dt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Lt(Object(t),!0).forEach(function(o){fl(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Lt(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}var xl=function(){try{return Quill}catch{return null}}(),$t=i.memo(i.forwardRef(function(e,n){var t=fe(),o=i.useContext(Fe),l=Le.getProps(e,o),y=Le.setMetaData({props:l}),x=y.ptm,m=y.cx,v=y.isUnstyled;Ae(Le.css.styles,v,{name:"editor"});var g=i.useRef(null),j=i.useRef(null),F=i.useRef(null),k=i.useRef(null),V=i.useRef(!1),G=i.useState(!1),A=gl(G,2),_=A[0],B=A[1];lt(function(){if(!V.current){var E={modules:Dt({toolbar:l.showHeader?F.current:!1},l.modules),placeholder:l.placeholder,readOnly:l.readOnly,theme:l.theme,formats:l.formats};xl?le(new Quill(j.current,E)):Pn(()=>import("./quill-CMtG_o-l.js"),__vite__mapDeps([0,1,2,3])).then(function(b){if(b&&se.isExist(j.current)){var q;b.default?q=new b.default(j.current,E):q=new b(j.current,E),le(q)}}),V.current=!0}});var R=function(b,q,P){var z=j.current.children[0],U=z?z.innerHTML:null,J=k.current.getText();if(U==="<p><br></p>"&&(U=null),P==="api"){var K=j.current.children[0],ee=document.createElement("div");if(ee.innerHTML=l.value||"",se.isEqualElement(K,ee))return}if(l.maxLength){var N=k.current.getLength();N>l.maxLength&&k.current.deleteText(l.maxLength,N)}l.onTextChange&&l.onTextChange({htmlValue:U,textValue:J,delta:b,source:P})},O=function(b,q,P){l.onSelectionChange&&l.onSelectionChange({range:b,oldRange:q,source:P})},Q=i.useRef(l.value);Q.current=l.value;var le=function(b){k.current=b,Q.current&&b.setContents(b.clipboard.convert({html:Q.current,text:""})),B(!0)};De(function(){if(_)return k.current.on("text-change",R),k.current.on("selection-change",O),function(){k.current.off("text-change",R),k.current.off("selection-change",O)}}),De(function(){_&&k.current&&k.current.getModule("toolbar")&&l.onLoad&&l.onLoad(k.current)},[_]),De(function(){k.current&&!k.current.hasFocus()&&(l.value?k.current.setContents(k.current.clipboard.convert({html:l.value,text:""})):k.current.setText(""))},[l.value]),i.useImperativeHandle(n,function(){return{props:l,getQuill:function(){return k.current},getElement:function(){return g.current},getContent:function(){return j.current},getToolbar:function(){return F.current}}});var ae=function(){var b=t({ref:F,className:m("toolbar")},x("toolbar"));if(l.showHeader===!1)return null;if(l.headerTemplate)return i.createElement("div",b,l.headerTemplate);var q=function(U,J){return t(U&&Dt({},U),x(J))},P=t({className:"ql-formats"},x("formats"));return i.createElement("div",b,i.createElement("span",P,i.createElement("select",q({className:"ql-header",defaultValue:"0"},"header"),i.createElement("option",q({value:"1"},"option"),"Heading"),i.createElement("option",q({value:"2"},"option"),"Subheading"),i.createElement("option",q({value:"0"},"option"),"Normal")),i.createElement("select",q({className:"ql-font"},"font"),i.createElement("option",q(void 0,"option")),i.createElement("option",q({value:"serif"},"option")),i.createElement("option",q({value:"monospace"},"option")))),i.createElement("span",P,i.createElement("button",q({type:"button",className:"ql-bold","aria-label":"Bold"},"bold")),i.createElement("button",q({type:"button",className:"ql-italic","aria-label":"Italic"},"italic")),i.createElement("button",q({type:"button",className:"ql-underline","aria-label":"Underline"},"underline"))),i.createElement("span",P,i.createElement("select",q({className:"ql-color"},"color")),i.createElement("select",q({className:"ql-background"},"background"))),i.createElement("span",P,i.createElement("button",q({type:"button",className:"ql-list",value:"ordered","aria-label":"Ordered List"},"list")),i.createElement("button",q({type:"button",className:"ql-list",value:"bullet","aria-label":"Unordered List"},"list")),i.createElement("select",q({className:"ql-align"},"select"),i.createElement("option",q({defaultValue:!0},"option")),i.createElement("option",q({value:"center"},"option")),i.createElement("option",q({value:"right"},"option")),i.createElement("option",q({value:"justify"},"option")))),i.createElement("span",P,i.createElement("button",q({type:"button",className:"ql-link","aria-label":"Insert Link"},"link")),i.createElement("button",q({type:"button",className:"ql-image","aria-label":"Insert Image"},"image")),i.createElement("button",q({type:"button",className:"ql-code-block","aria-label":"Insert Code Block"},"codeBlock"))),i.createElement("span",P,i.createElement("button",q({type:"button",className:"ql-clean","aria-label":"Remove Styles"},"clean"))))},X=ae(),oe=t({ref:j,className:m("content"),style:l.style},x("content")),Z=i.createElement("div",oe),C=t({className:re(l.className,m("root"))},Le.getOtherProps(l),x("root"));return i.createElement("div",nt({id:l.id,ref:g},C),X,Z)}));$t.displayName="Editor";const er=({auth:e,csrf_token:n})=>{var J,K,ee,N,ce;const t=i.useRef(null),o=i.useRef(null),[l,y]=i.useState([]),[x,m]=i.useState(!1),[v,g]=i.useState(null),[j,F]=i.useState(""),[k,V]=i.useState([]),G=()=>{m(!0),fetch(route("worker.customers.getAll"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":n}}).then(f=>f.json()).then(f=>{y(f.customers)}).catch(f=>{console.log(f),t.current.show({severity:"error",summary:"Hata",detail:"Müşteriler getirilirken bir hata oluştu."})}).finally(()=>{m(!1)})};i.useEffect(()=>{G()},[]);const[A,_]=i.useState([]),[B,R]=i.useState({brand:null,model:null,generation:null,year:null}),[O,Q]=i.useState(null),[le,ae]=i.useState(!1),[X,oe]=i.useState(""),[Z,C]=i.useState(""),[E,b]=i.useState(null);i.useState(!1);const q=()=>{if(X===""){t.current.show({severity:"warn",summary:"Hata",detail:"Ürün kodu boş olamaz."});return}else if(k.filter(te=>te.code===X).length>0){t.current.show({severity:"warn",summary:"Hata",detail:"Ürün zaten ekli."});return}let f=new FormData;f.append("code",X),fetch(route("worker.products.checkProduct"),{method:"POST",headers:{"X-CSRF-TOKEN":n},body:f}).then(S=>S.json()).then(S=>{S.status?(t.current.show({severity:"success",summary:"Başarılı",detail:"Ürün başarıyla eklendi."}),V(te=>[...te,{...S.product,code:S.code}]),oe("")):t.current.show({severity:"error",summary:"Hata",detail:S.message})}).catch(S=>{t.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{m(!1)})},[P,z]=i.useState(""),U=()=>{let f=new FormData;f.append("customer_id",v.id),f.append("car_brand",O.brand.name),f.append("car_model",O.model.name),f.append("car_generation",O.generation.name),f.append("car_year",O.year.name),f.append("car_plate",Z),f.append("car_kilometer",E),f.append("service_no",j),f.append("notes",P),A.forEach((S,te)=>{f.append(`body[${te}]`,S)}),k.map(S=>({id:S.id,code:S.code})).map((S,te)=>{f.append(`products[${te}][id]`,S.id),f.append(`products[${te}][code]`,S.code)}),f.append("brand_logo",O.brandLogo),fetch(route("worker.services.store"),{method:"POST",headers:{"X-CSRF-TOKEN":n},body:f}).then(S=>S.json()).then(S=>{S.status?(t.current.show({severity:"success",summary:"Başarılı",detail:S.message}),setTimeout(()=>{Cn.visit(route("worker.services.index"))},3e3)):t.current.show({severity:"error",summary:"Hata",detail:S.message})}).catch(S=>{t.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{m(!1)})};return a.jsxs(Nn,{user:e.user,header:a.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Hizmet Kaydı Ekle"}),children:[a.jsx(En,{title:"Hizmet Kaydı Ekle"}),a.jsx(Rn,{ref:t}),a.jsx("div",{className:"py-6",children:a.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:a.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-3",children:a.jsxs(Xn,{ref:o,style:{flexBasis:"50rem"},orientation:"vertical",linear:!0,children:[a.jsxs(qe,{header:"Müşteri Seçimi",children:[a.jsx("div",{className:"flex flex-column h-12rem",children:a.jsxs(Te,{className:"w-full md:w-14rem",children:[a.jsx(_n,{value:v,filter:!0,showClear:!0,emptyFilterMessage:"Müşteri Bulunamadı",filterBy:"name,email,phone",onChange:f=>g(f.value),options:l,optionLabel:"name",className:"w-full"}),a.jsx("label",{htmlFor:"dd-city",children:"Müşteri Seçiniz"})]})}),a.jsx("div",{className:"flex py-4",children:a.jsx(ne,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:v===null,onClick:()=>o.current.nextCallback()})})]}),a.jsxs(qe,{header:"Araç Bilgileri",children:[a.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-3",children:a.jsx(ul,{onComplete:f=>{ae(!0),Q(f)},onChange:(f,S)=>{ae(S),Q(f)},selectedBrand:B.brand,setSelectedBrand:f=>R(S=>({...S,brand:f})),selectedModel:B.model,setSelectedModel:f=>R(S=>({...S,model:f})),selectedYear:B.year,setSelectedYear:f=>R(S=>({...S,year:f}))})}),a.jsxs("div",{className:"flex py-4 gap-2",children:[a.jsx(ne,{label:"Geri",severity:"secondary",size:"small",icon:"pi pi-arrow-left",onClick:()=>o.current.prevCallback()}),a.jsx(ne,{label:"İleri",icon:"pi pi-arrow-right",size:"small",disabled:!le,iconPos:"right",onClick:()=>o.current.nextCallback()})]})]}),a.jsxs(qe,{header:"Ürün Seçimi",children:[a.jsxs("div",{className:"grid grid-cols-3 lg:grid-cols-5 gap-2",children:[a.jsx("div",{className:"col-span-2 lg:col-span-4",children:a.jsx(we,{value:X,onChange:f=>oe(f.target.value),className:"w-full",placeholder:"Ürün Kodu Giriniz"})}),a.jsx("div",{children:a.jsx(ne,{onClick:q,label:"Ekle",icon:"pi pi-plus"})})]}),a.jsx(An,{dataKey:"id",value:k,onChange:f=>V(f.value),itemTemplate:f=>a.jsxs("div",{className:"flex flex-wrap p-2 align-items-center gap-3",children:[a.jsx("img",{className:"w-[4rem] h-auto shadow-lg flex-shrink-0 rounded",src:`${f.image}`,alt:f.name}),a.jsxs("div",{className:"flex-1 flex flex-col gap-2 xl:mr-8",children:[a.jsx("span",{className:"font-bold",children:f.name}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx("span",{children:"# SKU :"}),a.jsx("span",{children:f.sku})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("i",{className:"pi pi-tag"}),a.jsx("span",{children:f.category})]})]})]}),a.jsx("div",{className:"grid grid-rows-1",children:a.jsx("div",{className:"flex justify-end",children:a.jsx(ne,{severity:"danger",tooltip:"Listeden Çıkar",onClick:()=>V(S=>S.filter(te=>te.id!==f.id)),icon:"pi pi-trash"})})})]}),header:"Eklenen Ürünler",emptyMessage:"Ürün Bulunamadı Lütfen Üstteki Alandan Ürün Ekleyiniz."}),a.jsxs("div",{className:"flex py-4 gap-2",children:[a.jsx(ne,{label:"Geri",severity:"secondary",size:"small",icon:"pi pi-arrow-left",onClick:()=>o.current.prevCallback()}),a.jsx(ne,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:k.length===0,onClick:()=>o.current.nextCallback()})]})]}),a.jsx(qe,{header:"Gövde Seçimi",children:a.jsxs("div",{children:[a.jsx("div",{className:"flex flex-column",children:a.jsx(ht,{editable:!0,onChange:f=>{_(f)},value:A})}),a.jsxs("div",{className:"flex py-4 gap-2",children:[a.jsx(ne,{label:"Geri",size:"small",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>o.current.prevCallback()}),a.jsx(ne,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:A.length===0,onClick:()=>o.current.nextCallback()})]})]})}),a.jsx(qe,{header:"Notlar",children:a.jsxs("div",{children:[a.jsxs("div",{children:[a.jsx("div",{className:"my-4 mb-6",children:a.jsxs(Te,{children:[a.jsx(we,{className:"w-full",id:"plate-input",value:Z,onChange:f=>C(f.target.value)}),a.jsx("label",{htmlFor:"plate-input",children:"Araç Plakası"})]})}),a.jsx("div",{className:"mb-6",children:a.jsxs(Te,{children:[a.jsx(zn,{className:"w-full",id:"kilometer-input",value:E,onChange:f=>b(f.value)}),a.jsx("label",{htmlFor:"kilometer-input",children:"Araç Kilometresi"})]})}),a.jsx("div",{className:"mb-6",children:a.jsxs(Te,{children:[a.jsx(we,{className:"w-full",id:"service-number-input",value:j,onChange:f=>F(f.target.value)}),a.jsx("label",{htmlFor:"service-number-input",children:"Hizmet Numarası"})]})}),a.jsx("label",{htmlFor:"editor-notes",className:"font-semibold ",children:"Hizmet Notları"}),a.jsx($t,{className:"mt-3",itemID:"editor-notes",value:P,onTextChange:f=>z(f.htmlValue),style:{height:"320px"}})]}),a.jsxs("div",{className:"flex py-4 gap-2",children:[a.jsx(ne,{label:"Geri",size:"small",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>o.current.prevCallback()}),a.jsx(ne,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:P===""||Z===""||E===null||j==="",onClick:()=>o.current.nextCallback()})]})]})}),a.jsx(qe,{header:"Özet",children:a.jsxs("div",{children:[a.jsx("div",{children:a.jsxs("div",{className:"grid grid-cols-1 gap-2 lg:gap-3 lg:grid-cols-2",children:[a.jsxs("div",{className:"grid grid-rows-1 lg:grid-rows-3 gap-y-1 ",children:[a.jsxs("div",{children:[a.jsx("label",{className:"font-semibold",children:"Müşteri"}),a.jsx("div",{className:"flex items-center gap-2",children:a.jsx("span",{children:v==null?void 0:v.name})})]}),a.jsxs("div",{children:[a.jsx("label",{className:"font-semibold",children:"Ürünler"}),a.jsx("ul",{children:k.map(f=>a.jsxs("li",{className:"flex items-center gap-2 even:my-1",children:[a.jsx("img",{className:"w-8 h-8 rounded-full",src:f.image,alt:f.name}),a.jsxs("span",{children:[f.name," #",f.code]})]},f.id))})]}),a.jsxs("div",{children:[a.jsx("label",{className:"font-semibold",children:"Notlar"}),a.jsx("div",{dangerouslySetInnerHTML:{__html:P}})]}),a.jsxs("div",{children:[a.jsx("label",{className:"font-semibold",children:"Araç"}),a.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[a.jsx("img",{className:"w-8 h-8 rounded-full",src:O==null?void 0:O.brandLogo,alt:(J=O==null?void 0:O.brand)==null?void 0:J.name}),a.jsxs("span",{children:[(K=O==null?void 0:O.brand)==null?void 0:K.name," >> ",(ee=O==null?void 0:O.model)==null?void 0:ee.name," >> ",(N=O==null?void 0:O.generation)==null?void 0:N.name," (",(ce=O==null?void 0:O.year)==null?void 0:ce.name,")"]})]}),a.jsx("div",{className:"flex items-center gap-2 mb-3",children:a.jsxs("span",{children:[Z," - ",Number(E).toLocaleString(),"km"]})})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"font-semibold",children:"Gövde"}),a.jsx(ht,{editable:!1,value:A,onChange:()=>{}})]})]})}),a.jsxs("div",{className:"flex py-4 gap-2",children:[a.jsx(ne,{label:"Geri",size:"small",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>o.current.prevCallback()}),a.jsx(ne,{label:"Kaydet",icon:"pi pi-save",severity:"success",size:"small",iconPos:"right",disabled:P===""||Z===""||E===null||j==="",onClick:U})]})]})})]})})})})]})};export{er as default};

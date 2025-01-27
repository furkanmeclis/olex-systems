function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/quill-BJzZp0pX.js","assets/app-avhlPhiM.js","assets/app-uEvPIz_a.css","assets/_baseClone-BgPU1wOP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as D,P as Le,U as It,c as te,r as i,D as ae,O as F,h as mt,I as Sn,l as On,j as s,a as qt,_ as jn,L as Pn,S as En}from"./app-avhlPhiM.js";import{C as bt}from"./CarBody-DA2LYohb.js";import{A as Cn}from"./AuthenticatedLayout-DVLPCKAf.js";import{C as _e,u as de,a as De,h as Je,R as Nn,i as Ke}from"./ripple.esm-BqSoC-Lb.js";import{C as In}from"./csstransition.esm-C9aKmQMq.js";import{B as Q}from"./button.esm-COrztKzg.js";import{T as Tn}from"./tooltip.esm-DhBWKiHa.js";import{V as Ln,D as _n}from"./dropdown.esm-Dp1luOFL.js";import{S as Dn}from"./index.esm-B_jPINE7.js";import{I as ye}from"./inputtext.esm-CXUGpXfk.js";import{B as vt}from"./blockui.esm-Ch7Pd_XS.js";import{F as Ne}from"./floatlabel.esm-DUO93oFB.js";import{T as Fn}from"./toast.esm-Lu_Mlg_G.js";import{D as Rn}from"./dataview.esm-Bu4zy_tj.js";import{I as An}from"./inputnumber.esm-B3XHjAQO.js";import"./index.esm-CtV9PM-y.js";import"./index.esm-Cg0PB3KT.js";import"./index.esm-Cu_GlIwC.js";import"./index.esm-DLi-8pBF.js";import"./index.esm-CphapJgJ.js";import"./scrollpanel.esm-Dc5GXz-t.js";import"./Dropdown-B0ECQTEG.js";import"./tag.esm-DJb0svhm.js";import"./motion-DSpvOdeD.js";import"./index.esm-DwzZvLdg.js";import"./overlayservice.esm-Db8AW7VS.js";import"./index.esm-BpBvkme2.js";import"./index.esm-x39jFGr-.js";import"./TransitionGroup-CJ8oG1MC.js";import"./index.esm-BNJUmf-R.js";import"./paginator.esm-CJ8Cqlgs.js";import"./index.esm-DugfGM8L.js";function we(e){"@babel/helpers - typeof";return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},we(e)}function zn(e,n){if(we(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n||"default");if(we(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Mn(e){var n=zn(e,"string");return we(n)==="symbol"?n:String(n)}function We(e,n,t){return n=Mn(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},xe.apply(this,arguments)}function $n(e){if(Array.isArray(e))return e}function Kn(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o,r,w,v,f=[],b=!0,x=!1;try{if(w=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;b=!1}else for(;!(b=(o=w.call(t)).done)&&(f.push(o.value),f.length!==n);b=!0);}catch(j){x=!0,r=j}finally{try{if(!b&&t.return!=null&&(v=t.return(),Object(v)!==v))return}finally{if(x)throw r}}return f}}function gt(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function Hn(e,n){if(e){if(typeof e=="string")return gt(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gt(e,n)}}function Vn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(e,n){return $n(e)||Kn(e,n)||Hn(e,n)||Vn()}var Gn={root:function(n){var t=n.props;return te("p-stepper p-component",{"p-stepper-horizontal":t.orientation==="horizontal","p-stepper-vertical":t.orientation==="vertical","p-readonly":t.linear})},nav:"p-stepper-nav",stepper:{header:function(n){var t=n.isStepActive,o=n.isItemDisabled,r=n.index;return te("p-stepper-header",{"p-highlight":t(r),"p-disabled":o(r)})},action:"p-stepper-action",number:"p-stepper-number",title:"p-stepper-title",separator:"p-stepper-separator",toggleableContent:"p-stepper-toggleable-content",content:function(n){var t=n.props;return te("p-stepper-content",{"p-toggleable-content":t.orientation==="vertical"})}},panelContainer:"p-stepper-panels",panel:function(n){var t=n.props,o=n.isStepActive,r=n.index;return te("p-stepper-panel",{"p-stepper-panel-active":t.orientation==="vertical"&&o(r)})}},Un=`
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
`,he=_e.extend({defaultProps:{__TYPE:"Stepper",activeStep:0,orientation:"horizontal",linear:!1},css:{classes:Gn,styles:Un}});function yt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function He(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?yt(Object(t),!0).forEach(function(o){We(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):yt(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}var Ge=i.memo(i.forwardRef(function(e){var n=de(),t=e.cx,o=e.ptm,r=n(He(He(He({id:e.id,className:t("stepper.content",{stepperpanel:e.stepperpanel,index:e.index}),role:"tabpanel","aria-labelledby":e.ariaLabelledby},e.getStepPT(e.stepperpanel,"root",e.index)),e.getStepPT(e.stepperpanel,"content",e.index)),{},{"data-p-active":e.active}),o("stepperpanel")),w=function(){var f=e.template;return i.createElement(f,{index:e.index,active:e.active,highlighted:e.highlighted,clickCallback:function(x){return e.onItemClick(x,e.index)},prevCallback:function(x){return e.prevCallback(x,e.index)},nextCallback:function(x){return e.nextCallback(x,e.index)}})};return i.createElement("div",r,e.template?w():e.stepperpanel)}));Ge.displayName="StepperContent";var Ue=i.memo(i.forwardRef(function(e){var n=de(),t=e.cx,o=n({id:e.id,className:t("stepper.action"),role:"tab",tabIndex:e.disabled?-1:void 0,"aria-controls":e.ariaControls,onClick:function(w){return e.clickCallback(w,e.index)}});return e.template?e.template():i.createElement("button",o,i.createElement("span",{className:t("stepper.number")},e.index+1),i.createElement("span",{className:t("stepper.title")},e.getStepProp(e.stepperpanel,"header")))}));Ue.displayName="StepperHeader";function xt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function Bn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?xt(Object(t),!0).forEach(function(o){We(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):xt(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}var Be=i.memo(i.forwardRef(function(e){var n=de(),t=n(Bn({"aria-hidden":!0,className:e.separatorClass},e.getStepPT(e.stepperpanel,"separator",e.index)));return e.template?e.template():i.createElement("span",t)}));Be.displayName="StepperSeparator";function wt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function fe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?wt(Object(t),!0).forEach(function(o){We(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):wt(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}var Qn=D.memo(D.forwardRef(function(e,n){var t=de(),o=D.useContext(Le),r=he.getProps(e,o),w=he.setMetaData({props:r}),v=w.ptm,f=w.cx,b=w.isUnstyled,x=w.ptmo,j=D.useState(r.id),T=ht(j,2),g=T[0],K=T[1],G=D.useState(r.activeStep),R=ht(G,2),O=R[0],U=R[1],H=D.useRef();De(he.css.styles,b,{name:"stepper"}),Je(function(){g||K(It())});var k=function(a,c){var h;return a==null||(h=a.props)===null||h===void 0?void 0:h[c]},B=function(a,c){return k(a,"header")||c},Y=function(a){return a.type.displayName==="StepperPanel"},N=function(a){return O===a},$=function(a){return r.linear&&!N(a)},X=function(a,c){U(c),r.onChangeStep&&r.onChangeStep({originalEvent:a,index:c})},V=function(a){return"".concat(g,"_").concat(a,"_header_action")},_=function(a){return"".concat(g,"_").concat(a,"content")},P=function(){return D.Children.toArray(r.children).reduce(function(a,c){return Y(c)?a.push(c):c&&Array.isArray(c)&&D.Children.toArray(c.props.children).forEach(function(h){Y(h)&&a.push(h)}),a},[])},p=function(a,c){c!==0&&X(a,c-1)},y=function(a,c){c!==P().length-1&&X(a,c+1)},E=function(a,c,h){var ee=P().length,ne={props:a.props,parent:{props:r},context:{index:h,count:ee,first:h===0,last:h===ee-1,active:N(h),highlighted:h<O,disabled:$(h)}};return t(v("stepperpanel.".concat(c),{stepperpanel:ne}),v("stepperpanel.".concat(c),ne),x(k(a,"pt"),c,ne))},z=function(a,c){if(r.linear){a.preventDefault();return}c!==O&&X(a,c)},J=function(){return P().map(function(a,c){var h,ee,ne=t({className:te(f("stepper.header",{isStepActive:N,isItemDisabled:$,step:a,index:c})),"aria-current":N(c)&&"step",role:"presentation","data-p-highlight":N(c),"data-p-disabled":$(c),"data-p-active":N(c)},v("stepperpanel"));return D.createElement("li",xe({key:B(a,c)},ne),D.createElement(Ue,{id:V(c),template:(h=a.children)===null||h===void 0?void 0:h.header,stepperpanel:a,index:c,disabled:$(c),active:N(c),highlighted:c<O,ariaControls:_(c),clickCallback:z,getStepPT:E,getStepProp:k,cx:f}),c!==P().length-1&&D.createElement(Be,{template:(ee=a.children)===null||ee===void 0?void 0:ee.separator,separatorClass:f("stepper.separator"),stepperpanel:a,index:c,active:N(c),highlighted:c<O,getStepPT:E}))})};D.useImperativeHandle(n,function(){return{getElement:function(){return H.current},nextCallback:function(a){return y(a,O)},prevCallback:function(a){return p(a,O)}}});var W=function(){return P().map(function(a,c){var h;return N(c)?D.createElement(Ge,{key:_(c),id:_(c),tempate:a==null||(h=a.children)===null||h===void 0?void 0:h.content,stepperpanel:a,index:c,active:N(c),highlighted:c<O,clickCallback:z,prevCallback:p,nextCallback:y,getStepPT:E,ariaLabelledby:V(c),ptm:v,cx:f}):null})},re=function(){var a=J(),c=t({className:te(f("nav")),ref:H},v("nav")),h=t({className:f("panelContainer")},v("panelContainer"));return D.createElement(D.Fragment,null,D.createElement("ul",c,a),D.createElement("div",h,W()))},Z=function(){return P().map(function(a,c){var h,ee,ne,oe=D.createRef(null),Fe=t(fe(fe(fe({ref:H,className:f("panel",{props:r,index:c,isStepActive:N}),"aria-current":N(c)&&"step"},E(a,"root",c)),E(a,"panel",c)),{},{"data-p-highlight":N(c),"data-p-disabled":$(c),"data-p-active":N(c)}),v("nav")),ie=t(fe({className:f("stepper.header",{step:a,isStepActive:N,isItemDisabled:$,index:c})},E(a,"header",c))),se=t(fe(fe({classNames:f("stepper.content")},E(a,"transition",c)),{},{timeout:{enter:1e3,exit:450},in:N(c),unmountOnExit:!0})),je=t(fe({ref:oe,className:f("stepper.toggleableContent")},E(a,"toggleableContent",c)));return D.createElement("div",xe({key:B(a,c)},Fe),D.createElement("div",ie,D.createElement(Ue,{id:V(c),template:(h=a.children)===null||h===void 0?void 0:h.header,stepperpanel:a,index:c,disabled:$(c),active:N(c),highlighted:c<O,ariaControls:_(c),clickCallback:z,getStepPT:E,getStepProp:k,cx:f})),D.createElement(In,xe({nodeRef:oe},se),D.createElement("div",je,c!==P().length-1&&D.createElement(Be,{template:(ee=a.children)===null||ee===void 0?void 0:ee.separator,separatorClass:f("stepper.separator"),stepperpanel:a,index:c,active:N(c),highlighted:c<O,getStepPT:E}),D.createElement(Ge,{key:_(c),id:_(c),tempate:a==null||(ne=a.children)===null||ne===void 0?void 0:ne.content,stepperpanel:a,index:c,active:N(c),highlighted:c<O,clickCallback:z,prevCallback:p,nextCallback:y,getStepPT:E,ariaLabelledby:V(c),ptm:v,cx:f}))))})},L=t({className:te(f("root")),role:"tablist"},he.getOtherProps(r),v("root"));return D.createElement("div",L,r.start&&r.start(),r.orientation==="horizontal"&&re(),r.orientation==="vertical"&&Z(),r.end&&r.end())}));he.displayName="StepperBase";var Yn="",Ve=_e.extend({defaultProps:{__TYPE:"StepperPanel",children:void 0,header:null},css:{styles:Yn}}),me=i.memo(i.forwardRef(function(e){var n=i.useContext(Le),t=Ve.getProps(e,n),o=Ve.setMetaData({props:t}),r=o.isUnstyled;return De(Ve.css.styles,r,{name:"StepperPanel"}),i.createElement(i.Fragment,null,t.children)}));me.displayName="StepperPanel";function ke(){return ke=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ke.apply(this,arguments)}function Se(e){"@babel/helpers - typeof";return Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Se(e)}function Xn(e,n){if(Se(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n||"default");if(Se(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Jn(e){var n=Xn(e,"string");return Se(n)==="symbol"?n:String(n)}function Tt(e,n,t){return n=Jn(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Qe(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function Wn(e){if(Array.isArray(e))return Qe(e)}function Zn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lt(e,n){if(e){if(typeof e=="string")return Qe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Qe(e,n)}}function el(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kt(e){return Wn(e)||Zn(e)||Lt(e)||el()}function tl(e){throw new TypeError('"'+e+'" is read-only')}function nl(e){if(Array.isArray(e))return e}function ll(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o,r,w,v,f=[],b=!0,x=!1;try{if(w=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;b=!1}else for(;!(b=(o=w.call(t)).done)&&(f.push(o.value),f.length!==n);b=!0);}catch(j){x=!0,r=j}finally{try{if(!b&&t.return!=null&&(v=t.return(),Object(v)!==v))return}finally{if(x)throw r}}return f}}function rl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qe(e,n){return nl(e)||ll(e,n)||Lt(e,n)||rl()}var ol={itemGroup:"p-listbox-item-group",emptyMessage:"p-listbox-empty-message",list:"p-listbox-list",wrapper:function(n){var t=n.props;return te("p-listbox-list-wrapper",t.listClassName)},root:function(n){var t=n.props;return te("p-listbox p-component",{"p-disabled":t.disabled,"p-invalid":t.invalid},t.className)},item:function(n){var t=n.props;return te("p-listbox-item",{"p-highlight":t.selected,"p-focus":t.focusedOptionIndex===t.index,"p-disabled":t.disabled},t.option.className)},filterContainer:"p-listbox-filter-container",filterIcon:"p-listbox-filter-icon",filterInput:"p-listbox-filter",header:"p-listbox-header"},il=`
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
`,al={itemGroup:function(n){var t=n.scrollerOptions;return{height:t.props?t.props.itemSize:void 0}},list:function(n){var t=n.options,o=n.props;return o.virtualScrollerOptions?t.style:void 0}},ge=_e.extend({defaultProps:{__TYPE:"ListBox",className:null,dataKey:null,disabled:null,emptyFilterMessage:null,emptyMessage:null,filter:!1,filterIcon:null,filterBy:null,filterInputProps:null,filterLocale:void 0,filterMatchMode:"contains",filterPlaceholder:null,filterTemplate:null,filterValue:null,focusOnHover:!0,id:null,itemTemplate:null,invalid:!1,listClassName:null,listStyle:null,metaKeySelection:!1,selectOnFocus:!1,autoOptionFocus:!1,multiple:!1,onChange:null,onFilterValueChange:null,optionDisabled:null,optionGroupChildren:null,optionGroupLabel:null,optionGroupTemplate:null,optionLabel:null,optionValue:null,options:null,style:null,tabIndex:0,tooltip:null,tooltipOptions:null,value:null,virtualScrollerOptions:null,children:void 0},css:{classes:ol,styles:il,inlineStyles:al}});function St(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function Ot(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?St(Object(t),!0).forEach(function(o){Tt(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):St(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}var _t=i.memo(function(e){var n=de(),t=e.ptCallbacks,o=t.ptm,r=t.cx,w=function(T,g){return o(T,Ot({hostName:e.hostName},g))},v={filter:function(T){return f(T)},reset:function(){return e.resetFilter()}},f=function(T){e.onFilter&&e.onFilter({originalEvent:T,value:T.target.value})},b=function(){var T=n({className:r("filterIcon")},w("filterIcon")),g=e.filterIcon||i.createElement(Dn,T),K=Sn.getJSXIcon(g,Ot({},T),{props:e}),G=n({className:r("header")},w("header")),R=n({className:r("filterContainer")},w("filterContainer")),O=i.createElement("div",R,i.createElement(ye,ke({type:"text",value:e.filter,onChange:f,className:r("filterInput"),disabled:e.disabled,placeholder:e.filterPlaceholder},e.filterInputProps,{pt:o("filterInput"),unstyled:e.unstyled,__parentMetadata:{parent:e.metaData}})),K);if(e.filterTemplate){var U={className:"p-listbox-filter-container",element:O,filterOptions:v,filterInputChange:f,filterIconClassName:"p-dropdown-filter-icon",props:e};O=F.getJSXElement(e.filterTemplate,U)}return i.createElement("div",G,O)},x=b();return i.createElement(i.Fragment,null,x)});_t.displayName="ListBoxHeader";var Ye=i.memo(function(e){var n=i.useState(!1),t=qe(n,2),o=t[0],r=t[1],w=de(),v=e.ptCallbacks,f=v.ptm,b=v.cx,x=function(O){return f(O,{hostName:e.hostName,context:{selected:e.selected,disabled:e.disabled,focused:o,focusedOptionIndex:e.focusedOptionIndex}})},j=function(O){r(!0)},T=function(O){r(!1)},g=function(O){e.onTouchEnd&&e.onTouchEnd({originalEvent:O,option:e.option})},K=e.template?F.getJSXElement(e.template,e.option):e.label,G=w({id:e.id,className:b("item",{props:e}),style:e.style,onClick:function(O){return e.onClick(O,e.option,e.index)},onTouchEnd:g,onFocus:j,onBlur:T,tabIndex:"-1",onMouseDown:function(O){return e.onOptionMouseDown(O,e.index)},onMouseMove:function(O){return e.onOptionMouseMove(O,e.index)},"aria-label":e.label,key:e.optionKey,role:"option","aria-selected":e.selected,"aria-disabled":e.disabled,"data-p-disabled":e.disabled},x("item"));return i.createElement("li",G,K,i.createElement(Nn,null))});Ye.displayName="ListBoxItem";function jt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function ue(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?jt(Object(t),!0).forEach(function(o){Tt(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):jt(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}function sl(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=cl(e))||n&&e&&typeof e.length=="number"){t&&(e=t);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(x){throw x},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var w=!0,v=!1,f;return{s:function(){t=t.call(e)},n:function(){var x=t.next();return w=x.done,x},e:function(x){v=!0,f=x},f:function(){try{!w&&t.return!=null&&t.return()}finally{if(v)throw f}}}}function cl(e,n){if(e){if(typeof e=="string")return Pt(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Pt(e,n)}}function Pt(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var Te=i.memo(i.forwardRef(function(e,n){var t=de(),o=i.useContext(Le),r=ge.getProps(e,o),w=i.useState(null),v=qe(w,2),f=v[0],b=v[1],x=i.useRef(null),j=i.useRef(null),T=i.useRef(null),g=i.useState(-1),K=qe(g,2),G=K[0],R=K[1],O=i.useState(!1),U=qe(O,2),H=U[0],k=U[1],B=i.useState(""),Y=qe(B,2),N=Y[0],$=Y[1],X=i.useState(""),V=qe(X,2),_=V[0],P=V[1],p=i.useRef(null),y=i.useRef(null),E=i.useRef(null),z=i.useRef(null),J=i.useRef(!1),W=(r.onFilterValueChange?r.filterValue:N)||"",re=W&&W.trim().length>0,Z={props:r,state:{filterValue:W}},L=ge.setMetaData(Z);De(ge.css.styles,L.isUnstyled,{name:"listbox"});var I=function(l,u){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;r.disabled||Ce(u)||(r.multiple?ne(l.originalEvent,u):ee(l.originalEvent,u),J.current=!1,d!==-1&&b(d))},a=function(l,u){ce(l,u)},c=function(l,u){r.focusOnHover&&H&&ce(l,u)},h=function(){r.disabled||(J.current=!0)},ee=function(l,u){var d=ve(u),q=!1,S=null,A=J.current?!1:r.metaKeySelection;if(A){var M=l.metaKey||l.ctrlKey;d?M&&(S=null,q=!0):(S=le(u),q=!0)}else S=d?null:le(u),q=!0;q&&ze(l,S)},ne=function(l,u){var d=ve(u),q=!1,S=null,A=J?!1:r.metaKeySelection;if(A){var M=l.metaKey||l.ctrlKey;d?(M?S=rt(u):S=[le(u)],q=!0):(S=M?r.value||[]:[],S=[].concat(kt(S),[le(u)]),q=!0)}else d?S=rt(u):S=[].concat(kt(r.value||[]),[le(u)]),q=!0;q&&r.onChange({originalEvent:l,value:S,stopPropagation:function(){l==null||l.stopPropagation()},preventDefault:function(){l==null||l.preventDefault()},target:{name:r.name,id:r.id,value:S}})},oe=function(){return F.isNotEmpty(r.value)},Fe=function(l){return r.optionGroupLabel&&l.optionGroup&&l.group},ie=function(l){return F.isNotEmpty(l)&&!(Ce(l)||Fe(l))},se=function(l){return ie(l)&&ve(l)},je=function(){return C.findIndex(function(l){return ie(l)})},Ft=function(){return oe()?F.findLastIndex(C,function(l){return se(l)}):-1},Rt=function(){if(oe())if(r.multiple){for(var l=function(){var S=r.value[d],A=C.findIndex(function(M){return se(M)&&Me(S,le(M))});if(A>-1)return{v:A}},u,d=r.value.length-1;d>=0;d--)if(u=l(),u)return u.v}else return C.findIndex(function(q){return se(q)});return-1},At=function(){return oe()?C.findIndex(function(l){return se(l)}):-1},Ze=function(){return F.findLastIndex(C,function(l){return ie(l)})},zt=function(l){var u=l<C.length-1?C.slice(l+1).findIndex(function(d){return ie(d)}):-1;return u>-1?u+l+1:l},Mt=function(l){var u=l>0?F.findLastIndex(C.slice(0,l),function(d){return ie(d)}):-1;return u>-1?u:l},$t=function(){return f!==-1?"".concat(E.current,"_").concat(f):null},et=function(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=-1;return oe()&&(u?(d=nt(l),d=d===-1?tt(l):d):(d=tt(l),d=d===-1?nt(l):d)),d>-1?d:l},Re=function(l){var u;return ie(l)&&((u=Ee(l))===null||u===void 0?void 0:u.toLocaleLowerCase(r.filterLocale).startsWith(_.toLocaleLowerCase(r.filterLocale)))},Kt=function(l,u){P((_||"")+u);var d=-1;F.isNotEmpty(_)&&(f!==-1?(d=C.slice(f).findIndex(function(q){return Re(q)}),d=d===-1?C.slice(0,f).findIndex(function(q){return Re(q)}):d+f):d=C.findIndex(function(q){return Re(q)}),d===-1&&f===-1&&(d=Pe()),d!==-1&&ce(l,d)),x.current&&clearTimeout(x.current),x.current=setTimeout(function(){P(""),x.current=null},500)},tt=function(l){var u=oe()&&l<C.length-1?C.slice(l+1).findIndex(function(d){return se(d)}):-1;return u>-1?u+l+1:-1},nt=function(l){var u=oe()&&l>0?F.findLastIndex(C.slice(0,l),function(d){return se(d)}):-1;return u>-1?u:-1},be=function(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(u===-1&&(u=et(d,!0)),d===-1&&(d=et(u)),u!==-1&&d!==-1){var q=Math.min(u,d),S=Math.max(u,d),A=C.slice(q,S+1).filter(function(M){return ie(M)}).map(function(M){return le(M)});ze(l,A)}},Pe=function(){var l=At();return l<0?je():l},Ht=function(){var l=Ft();return l<0?Ze():l},ce=function(l,u){f!==u&&(b(u),Ae(),l&&r.selectOnFocus&&!r.multiple&&I(l,C[u]))},Vt=function(l){var u=f!==-1?zt(f):Pe();r.multiple&&l.shiftKey&&be(l,G,u),ce(l,u),l.preventDefault()},Gt=function(l){var u=f!==-1?Mt(f):Ht();r.multiple&&l.shiftKey&&be(l,u,G),ce(l,u),l.preventDefault()},Ut=function(l){f!==-1&&(r.multiple&&l.shiftKey?be(l,f):I(l,C[f])),l.preventDefault()},Bt=function(l){Ut(l)},Qt=function(){R(f)},Yt=function(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(u)l.currentTarget.setSelectionRange(0,0),b(-1);else{var d=l.metaKey||l.ctrlKey,q=je();r.multiple&&l.shiftKey&&d&&be(l,q,G),ce(l,q)}l.preventDefault()},Xt=function(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(u){var d=l.currentTarget,q=d.value.length;d.setSelectionRange(q,q),tl("focusedOptionIndex")}else{var S=l.metaKey||l.ctrlKey,A=Ze();r.multiple&&l.shiftKey&&S&&be(l,G,A),ce(l,A)}l.preventDefault()},Jt=function(l){Ae(0),l.preventDefault()},Wt=function(l){Ae(C.length-1),l.preventDefault()},lt=function(l){var u=l.metaKey||l.ctrlKey;switch(l.code){case"ArrowDown":Vt(l);break;case"ArrowUp":Gt(l);break;case"Home":Yt(l);break;case"End":Xt(l);break;case"PageDown":Wt(l);break;case"PageUp":Jt(l);break;case"Enter":case"NumpadEnter":case"Space":Bt(l),l.preventDefault();break;case"Tab":break;case"ShiftLeft":case"ShiftRight":Qt();break;default:if(r.multiple&&l.code==="KeyA"&&u){var d=C.filter(function(q){return ie(q)}).map(function(q){return le(q)});ze(l,d),l.preventDefault();break}!u&&F.isPrintableCharacter(l.key)&&(Kt(l,l.key),l.preventDefault());break}},Ae=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;setTimeout(function(){var u=l!==-1?"".concat(E.current,"_").concat(l):$t(),d=z.current.querySelector('li[id="'.concat(u,'"]'));d?d.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"}):r.virtualScrollerOptions&&y.current&&y.current.scrollToIndex(l!==-1?l:f)},0)},Zt=function(l){y.current&&y.current.scrollToIndex(0);var u=l.originalEvent,d=l.value;r.onFilterValueChange?r.onFilterValueChange({originalEvent:u,value:d}):$(d)},en=function(){$(""),r.onFilter&&r.onFilter({filter:""})},tn=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:H;if(r.selectOnFocus&&r.autoOptionFocus&&!oe()&&!r.multiple&&l){var u=Pe();I(null,C[u]),b(u)}},ze=function(l,u){r.onChange&&r.onChange({originalEvent:l,value:u,stopPropagation:function(){l==null||l.stopPropagation()},preventDefault:function(){l==null||l.preventDefault()},target:{name:r.name,id:r.id,value:u}})},rt=function(l){return r.value.filter(function(u){return!F.equals(u,le(l),r.dataKey)})},nn=function(){if(r.value!=null&&C)if(r.optionGroupLabel)for(var l=0;l<C.length;l++){var u=it(r.value,$e(C[l]));if(u!==-1)return{group:l,option:u}}else return it(r.value,C);return-1},ot=function(){return r.optionValue?null:r.dataKey},it=function(l,u){var d=ot();return u.findIndex(function(q){return F.equals(l,le(q),d)})},Me=function(l,u){return F.equals(l,u,ot())},ve=function(l){var u=le(l);return r.multiple?(r.value||[]).some(function(d){return Me(d,u)}):Me(r.value,u)},Ee=function(l){return r.optionLabel?F.resolveFieldData(l,r.optionLabel):l&&l.label!==void 0?l.label:l},le=function(l){return r.optionValue?F.resolveFieldData(l,r.optionValue):l&&l.value!==void 0?l.value:l},at=function(l){return r.dataKey?F.resolveFieldData(l,r.dataKey):Ee(l)},Ce=function(l){return r.optionDisabled?F.isFunction(r.optionDisabled)?r.optionDisabled(l):F.resolveFieldData(l,r.optionDisabled):l&&l.disabled!==void 0?l.disabled:!1},ln=function(){ae.focus(z.current);var l=ae.getFirstFocusableElement(p.current,':not([data-p-hidden-focusable="true"])');T.current.tabIndex=ae.isElement(l)?void 0:-1,j.current.tabIndex=-1,ce(null,0)},rn=function(l){var u=l.relatedTarget;if(u===z.current){var d=ae.getFirstFocusableElement(p.current,':not([data-p-hidden-focusable="true"])');ae.focus(d),j.current.tabIndex=void 0}else ae.focus(j.current);T.current.tabIndex=-1},st=function(){k(!0),b(f!==-1?f:r.autoOptionFocus?Pe():Rt()),tn(!0)},ct=function(l){k(!1),b(-1),R(-1),P("")},on=function(l){return F.resolveFieldData(l,r.optionGroupLabel)},an=function(l){return F.resolveFieldData(l,r.optionGroupLabel)},$e=function(l){return F.resolveFieldData(l,r.optionGroupChildren)},sn=function(){if(re){var l=W.trim().toLocaleLowerCase(r.filterLocale),u=r.filterBy?r.filterBy.split(","):[r.optionLabel||"label"];if(r.optionGroupLabel){var d=[],q=sl(r.options),S;try{for(q.s();!(S=q.n()).done;){var A=S.value,M=mt.filter($e(A),u,l,r.filterMatchMode,r.filterLocale);M&&M.length&&d.push(ue(ue({},A),{items:M}))}}catch(pe){q.e(pe)}finally{q.f()}return d}return mt.filter(r.options,u,l,r.filterMatchMode,r.filterLocale)}return r.options},cn=function(){if(y.current){var l=nn();l!==-1&&setTimeout(function(){return y.current.scrollToIndex(l)},0)}};i.useImperativeHandle(n,function(){return{props:r,focus:function(){return ae.focusFirstElement(p.current)},getElement:function(){return p.current},getVirtualScroller:function(){return y.current}}}),Je(function(){cn(),E.current=It()});var un=function(){return r.filter?i.createElement(_t,{hostName:"ListBox",filter:W,filterIcon:r.filterIcon,onFilter:Zt,resetFilter:en,filterTemplate:r.filterTemplate,disabled:r.disabled,filterPlaceholder:r.filterPlaceholder,filterInputProps:r.filterInputProps,ptCallbacks:L,metaData:Z}):null},dn=function(l,u){var d=$e(l);return d.map(function(q,S){var A=Ee(q),M=S+"_"+at(q),pe=Ce(q);return i.createElement(Ye,{id:E.current+"_"+S,hostName:"ListBox",optionKey:M,key:M,label:A,option:q,style:u,template:r.itemTemplate,selected:ve(q),onOptionMouseDown:a,onOptionMouseMove:c,onClick:I,index:S,focusedOptionIndex:f,onTouchEnd:h,disabled:pe,ptCallbacks:L,metaData:Z})})},ut=function(l,u){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},q={height:d.props?d.props.itemSize:void 0};if(r.optionGroupLabel){var S=r.optionGroupTemplate?F.getJSXElement(r.optionGroupTemplate,l,u):an(l),A=dn(l,q),M=u+"_"+on(l),pe=t({className:L.cx("itemGroup"),style:L.sx("itemGroup",{scrollerOptions:d}),role:"group"},L.ptm("itemGroup"));return i.createElement(i.Fragment,{key:M},i.createElement("li",pe,S),A)}var wn=Ee(l),ft=u+"_"+at(l),kn=Ce(l);return i.createElement(Ye,{id:E.current+"_"+u,hostName:"ListBox",optionKey:ft,key:ft,label:wn,index:u,onOptionMouseDown:a,onOptionMouseMove:c,focusedOptionIndex:f,option:l,style:q,template:r.itemTemplate,selected:ve(l),onClick:I,onTouchEnd:h,disabled:kn,ptCallbacks:L,metaData:Z})},pn=function(){return F.isNotEmpty(C)?C.map(ut):re?dt(r.emptyFilterMessage,!0):dt(r.emptyMessage)},dt=function(l,u){var d=t({className:L.cx("emptyMessage")},L.ptm("emptyMessage")),q=F.getJSXElement(l,r)||On(u?"emptyFilterMessage":"emptyMessage");return i.createElement("li",d,q)},fn=function(){if(r.virtualScrollerOptions){var l=ue(ue({},r.virtualScrollerOptions),{items:C,onLazyLoad:function(S){return r.virtualScrollerOptions.onLazyLoad(ue(ue({},S),{filter:C}))},itemTemplate:function(S,A){return S&&ut(S,A.index,A)},contentTemplate:function(S){var A=t(ue({ref:z,style:L.sx("list",{options:S}),className:L.cx("list",{options:S}),role:"listbox",tabIndex:"-1","aria-multiselectable":r.multiple,onFocus:st,onBlur:ct,onKeyDown:lt},pt),L.ptm("list"));return i.createElement("ul",A,S.children)}});return i.createElement(Ln,ke({ref:y},l,{pt:L.ptm("virtualScroller")}))}var u=pn(),d=t(ue({ref:z,className:L.cx("list"),role:"listbox","aria-multiselectable":r.multiple,tabIndex:"-1",onFocus:st,onBlur:ct,onKeyDown:lt},pt),L.ptm("list"));return i.createElement("ul",d,u)},C=sn(),mn=F.isNotEmpty(r.tooltip),qn=ge.getOtherProps(r),pt=F.reduceKeys(qn,ae.ARIA_PROPS),bn=fn(),vn=un(),gn=t({className:L.cx("wrapper"),style:r.listStyle},L.ptm("wrapper")),hn=t({ref:p,id:r.id,className:L.cx("root"),style:r.style},ge.getOtherProps(r),L.ptm("root")),yn=t({ref:j,role:"presentation","aria-hidden":"true",className:"p-hidden-accessible p-hidden-focusable",tabIndex:r.disabled?-1:r.tabIndex,onFocus:ln,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0},L.ptm("hiddenFirstFocusableEl")),xn=t({ref:T,role:"presentation","aria-hidden":"true",className:"p-hidden-accessible p-hidden-focusable",tabIndex:r.disabled?-1:r.tabIndex,onFocus:rn,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0},L.ptm("hiddenLastFocusableEl"));return i.createElement(i.Fragment,null,i.createElement("div",hn,i.createElement("span",yn),vn,i.createElement("div",gn,bn),i.createElement("span",xn)),mn&&i.createElement(Tn,ke({target:p,content:r.tooltip,pt:L.ptm("tooltip")},r.tooltipOptions)))}));Te.displayName="ListBox";const ul=({selectedBrand:e,setSelectedBrand:n,selectedModel:t,setSelectedModel:o,selectedYear:r,setSelectedYear:w,onChange:v,onComplete:f})=>{const[b,x]=i.useState([]),[j,T]=i.useState([]),[g,K]=i.useState("");i.useState(!1);const[G,R]=i.useState(!1),[O,U]=i.useState(!1),H=i.useRef(null),k=i.useRef(null),B=i.useRef(null),Y=i.useRef(null);i.useEffect(()=>{(async()=>{try{R(!0);const y=await qt.post(route("super.car.brands.get"));x(y.data)}catch(y){console.error("Markalar yüklenirken hata oluştu:",y)}finally{R(!1)}})()},[]),i.useEffect(()=>{(async()=>{if(e)try{U(!0);const y=await qt.post(route("super.car.brands.models.get",e.id));T(y.data)}catch(y){console.error("Modeller yüklenirken hata oluştu:",y)}finally{U(!1)}else T([])})()},[e]),i.useEffect(()=>{if(r!==null&&f!==void 0){let p={brand:e,model:t,generation:{name:g,modelYear:"",non:!0},brandLogo:e==null?void 0:e.logo,year:r};f(p)}},[r]),i.useEffect(()=>{if(v!==void 0){let p={brand:e,model:t,generation:{name:g,modelYear:"",non:!0},brandLogo:e==null?void 0:e.logo,year:r};v(p,r!==null)}},[e,t,r,g]);async function N(p){let y=[];for(let E=1975;E<=Number(new Date().getFullYear());E++)y.push({name:E});return y.sort((E,z)=>z.name-E.name),y}const $=p=>s.jsxs("div",{className:"flex items-center",children:[p.logo&&s.jsx("img",{src:p.logo,alt:p.name,className:"w-8 h-8 mr-2"}),s.jsx("span",{children:p.name})]}),X=p=>s.jsxs("div",{className:"flex items-center",children:[(e==null?void 0:e.logo)&&s.jsx("img",{src:e.logo,alt:p.name,className:"w-8 h-8 mr-2"}),s.jsx("span",{children:p.name})]}),V=p=>s.jsxs("div",{className:"flex items-center",children:[(e==null?void 0:e.logo)&&s.jsx("img",{src:e.logo,alt:p.name+" .yıl",className:"w-8 h-8 mr-2"}),s.jsx("span",{children:p.name})]}),[_,P]=i.useState([]);return i.useEffect(()=>{(async()=>{const y=await N();P(y)})()},[]),i.useEffect(()=>{e&&H.current&&H.current.scrollIntoView({behavior:"smooth",block:"center"})},[e]),i.useEffect(()=>{t&&k.current&&k.current.scrollIntoView({behavior:"smooth",block:"center"})},[t]),i.useEffect(()=>{r&&B.current&&(B.current.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{var p;(p=Y.current)==null||p.focus()},500))},[r]),s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-2 mt-4",children:[s.jsx("label",{className:"font-medium",children:"Araç Markası"}),s.jsx(vt,{blocked:G,template:s.jsx("i",{className:"pi pi-spin pi-spinner text-3xl"}),children:s.jsx(Te,{value:e,onChange:p=>{n(p.value),o(null),w(null)},options:b,optionLabel:"name",placeholder:"Araç Markası Seçiniz",filter:!0,className:"w-full md:w-14rem",itemTemplate:$,listStyle:{height:"300px"}})})]}),e&&s.jsxs("div",{className:"flex flex-col gap-2 mt-4",ref:H,children:[s.jsx("label",{className:"font-medium",children:"Araç Modeli"}),s.jsx(vt,{blocked:O,template:s.jsx("i",{className:"pi pi-spin pi-spinner text-3xl"}),children:s.jsx(Te,{value:t,onChange:p=>{o(p.value),w(null)},options:j,optionLabel:"name",placeholder:"Araç Modelini Seçiniz",filter:!0,className:"w-full md:w-14rem",itemTemplate:X,listStyle:{height:"300px"}})})]}),t&&s.jsxs("div",{className:"flex flex-col gap-2 mt-4",ref:k,children:[s.jsx("label",{className:"font-medium",children:"Araç Yılı"}),s.jsx(Te,{value:r,onChange:p=>w(p.value),options:_,placeholder:"Araç Yılı Seçiniz",optionLabel:"name",filter:!0,className:"w-full md:w-14rem",itemTemplate:V,listStyle:{height:"300px"}})]}),t&&s.jsxs("div",{className:"flex flex-col gap-2 mt-4",ref:B,children:[s.jsx("label",{className:"font-medium",children:"Paket Detayı"}),s.jsx(ye,{ref:Y,value:g,onChange:p=>K(p.target.value),className:"w-full md:w-14rem",placeholder:"Paket detayını giriniz"})]})]})};function Xe(){return Xe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Xe.apply(this,arguments)}function Oe(e){"@babel/helpers - typeof";return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Oe(e)}function dl(e,n){if(Oe(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n||"default");if(Oe(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function pl(e){var n=dl(e,"string");return Oe(n)==="symbol"?n:String(n)}function fl(e,n,t){return n=pl(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ml(e){if(Array.isArray(e))return e}function ql(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var o,r,w,v,f=[],b=!0,x=!1;try{if(w=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;b=!1}else for(;!(b=(o=w.call(t)).done)&&(f.push(o.value),f.length!==n);b=!0);}catch(j){x=!0,r=j}finally{try{if(!b&&t.return!=null&&(v=t.return(),Object(v)!==v))return}finally{if(x)throw r}}return f}}function Et(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function bl(e,n){if(e){if(typeof e=="string")return Et(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Et(e,n)}}function vl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gl(e,n){return ml(e)||ql(e,n)||bl(e,n)||vl()}var hl={root:function(n){var t=n.props;return te("p-component p-editor-container",t.className)},toolbar:"p-editor-toolbar",content:"p-editor-content"},yl=`
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0px;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
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
.ql-editor ul,
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
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-left: 1.5em;
}
.ql-editor ol > li,
.ql-editor ul > li {
    list-style-type: none;
}
.ql-editor ul > li::before {
    content: "\\2022";
}
.ql-editor ul[data-checked="true"],
.ql-editor ul[data-checked="false"] {
    pointer-events: none;
}
.ql-editor ul[data-checked="true"] > li *,
.ql-editor ul[data-checked="false"] > li * {
    pointer-events: all;
}
.ql-editor ul[data-checked="true"] > li::before,
.ql-editor ul[data-checked="false"] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked="true"] > li::before {
    content: "\\2611";
}
.ql-editor ul[data-checked="false"] > li::before {
    content: "\\2610";
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2em;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-left: -1.5em;
    margin-right: 0.3em;
    text-align: right;
}
.ql-editor li.ql-direction-rtl::before {
    margin-left: 0.3em;
    margin-right: -1.5em;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-left: 1.5em;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-right: 1.5em;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) ". ";
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) ". ";
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) ". ";
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) ". ";
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) ". ";
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) ". ";
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) ". ";
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) ". ";
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) ". ";
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
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
.ql-snow .ql-editor pre {
    background-color: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
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
    padding: 4px 0px;
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
    padding: 0px;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=""])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=""])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=""])::before {
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
    border-top: 0px;
}
.ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
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
    margin: 0px;
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
    border-right: 0px;
    content: "Save";
    padding-right: 0px;
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
`,Ie=_e.extend({defaultProps:{__TYPE:"Editor",id:null,value:null,style:null,className:null,placeholder:null,readOnly:!1,modules:null,formats:null,theme:"snow",showHeader:!0,headerTemplate:null,onTextChange:null,onSelectionChange:null,onLoad:null,maxLength:null,children:void 0},css:{classes:hl,styles:yl}});function Ct(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function Nt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ct(Object(t),!0).forEach(function(o){fl(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ct(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}var xl=function(){try{return Quill}catch{return null}}(),Dt=i.memo(i.forwardRef(function(e,n){var t=de(),o=i.useContext(Le),r=Ie.getProps(e,o),w=Ie.setMetaData({props:r}),v=w.ptm,f=w.cx,b=w.isUnstyled;De(Ie.css.styles,b,{name:"editor"});var x=i.useRef(null),j=i.useRef(null),T=i.useRef(null),g=i.useRef(null),K=i.useRef(!1),G=i.useState(!1),R=gl(G,2),O=R[0],U=R[1];Je(function(){if(!K.current){var _={modules:Nt({toolbar:r.showHeader?T.current:!1},r.modules),placeholder:r.placeholder,readOnly:r.readOnly,theme:r.theme,formats:r.formats};xl?B(new Quill(j.current,_)):jn(()=>import("./quill-BJzZp0pX.js"),__vite__mapDeps([0,1,2,3])).then(function(P){if(P&&ae.isExist(j.current)){var p;P.default?p=new P.default(j.current,_):p=new P(j.current,_),B(p)}}),K.current=!0}});var H=function(P,p,y){var E=j.current.children[0],z=E?E.innerHTML:null,J=g.current.getText();if(z==="<p><br></p>"&&(z=null),y==="api"){var W=j.current.children[0],re=document.createElement("div");if(re.innerHTML=r.value||"",ae.isEqualElement(W,re))return}if(r.maxLength){var Z=g.current.getLength();Z>r.maxLength&&g.current.deleteText(r.maxLength,Z)}r.onTextChange&&r.onTextChange({htmlValue:z,textValue:J,delta:P,source:y})},k=function(P,p,y){r.onSelectionChange&&r.onSelectionChange({range:P,oldRange:p,source:y})},B=function(P){g.current=P,r.value&&g.current.setContents(g.current.clipboard.convert(r.value)),U(!0)};Ke(function(){if(O)return g.current.on("text-change",H),g.current.on("selection-change",k),function(){g.current.off("text-change",H),g.current.off("selection-change",k)}}),Ke(function(){O&&g.current&&g.current.getModule("toolbar")&&r.onLoad&&r.onLoad(g.current)},[O]),Ke(function(){g.current&&!g.current.hasFocus()&&(r.value?g.current.setContents(g.current.clipboard.convert(r.value)):g.current.setText(""))},[r.value]),i.useImperativeHandle(n,function(){return{props:r,getQuill:function(){return g.current},getElement:function(){return x.current},getContent:function(){return j.current},getToolbar:function(){return T.current}}});var Y=function(){var P=t({ref:T,className:f("toolbar")},v("toolbar"));if(r.showHeader===!1)return null;if(r.headerTemplate)return i.createElement("div",P,r.headerTemplate);var p=function(z,J){return t(z&&Nt({},z),v(J))},y=t({className:"ql-formats"},v("formats"));return i.createElement("div",P,i.createElement("span",y,i.createElement("select",p({className:"ql-header",defaultValue:"0"},"header"),i.createElement("option",p({value:"1"},"option"),"Heading"),i.createElement("option",p({value:"2"},"option"),"Subheading"),i.createElement("option",p({value:"0"},"option"),"Normal")),i.createElement("select",p({className:"ql-font"},"font"),i.createElement("option",p(void 0,"option")),i.createElement("option",p({value:"serif"},"option")),i.createElement("option",p({value:"monospace"},"option")))),i.createElement("span",y,i.createElement("button",p({type:"button",className:"ql-bold","aria-label":"Bold"},"bold")),i.createElement("button",p({type:"button",className:"ql-italic","aria-label":"Italic"},"italic")),i.createElement("button",p({type:"button",className:"ql-underline","aria-label":"Underline"},"underline"))),i.createElement("span",y,i.createElement("select",p({className:"ql-color"},"color")),i.createElement("select",p({className:"ql-background"},"background"))),i.createElement("span",y,i.createElement("button",p({type:"button",className:"ql-list",value:"ordered","aria-label":"Ordered List"},"list")),i.createElement("button",p({type:"button",className:"ql-list",value:"bullet","aria-label":"Unordered List"},"list")),i.createElement("select",p({className:"ql-align"},"select"),i.createElement("option",p({defaultValue:!0},"option")),i.createElement("option",p({value:"center"},"option")),i.createElement("option",p({value:"right"},"option")),i.createElement("option",p({value:"justify"},"option")))),i.createElement("span",y,i.createElement("button",p({type:"button",className:"ql-link","aria-label":"Insert Link"},"link")),i.createElement("button",p({type:"button",className:"ql-image","aria-label":"Insert Image"},"image")),i.createElement("button",p({type:"button",className:"ql-code-block","aria-label":"Insert Code Block"},"codeBlock"))),i.createElement("span",y,i.createElement("button",p({type:"button",className:"ql-clean","aria-label":"Remove Styles"},"clean"))))},N=Y(),$=t({ref:j,className:f("content"),style:r.style},v("content")),X=i.createElement("div",$),V=t({className:te(r.className,f("root"))},Ie.getOtherProps(r),v("root"));return i.createElement("div",Xe({id:r.id,ref:x},V),N,X)}));Dt.displayName="Editor";const er=({auth:e,csrf_token:n})=>{var W,re,Z,L,I;const t=i.useRef(null),o=i.useRef(null),[r,w]=i.useState([]),[v,f]=i.useState(!1),[b,x]=i.useState(null),[j,T]=i.useState(""),[g,K]=i.useState([]),G=()=>{f(!0),fetch(route("worker.customers.getAll"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":n}}).then(a=>a.json()).then(a=>{w(a.customers)}).catch(a=>{console.log(a),t.current.show({severity:"error",summary:"Hata",detail:"Müşteriler getirilirken bir hata oluştu."})}).finally(()=>{f(!1)})};i.useEffect(()=>{G()},[]);const[R,O]=i.useState([]),[U,H]=i.useState({brand:null,model:null,generation:null,year:null}),[k,B]=i.useState(null),[Y,N]=i.useState(!1),[$,X]=i.useState(""),[V,_]=i.useState(""),[P,p]=i.useState(null);i.useState(!1);const y=()=>{if($===""){t.current.show({severity:"warn",summary:"Hata",detail:"Ürün kodu boş olamaz."});return}else if(g.filter(h=>h.code===$).length>0){t.current.show({severity:"warn",summary:"Hata",detail:"Ürün zaten ekli."});return}let a=new FormData;a.append("code",$),fetch(route("worker.products.checkProduct"),{method:"POST",headers:{"X-CSRF-TOKEN":n},body:a}).then(c=>c.json()).then(c=>{c.status?(t.current.show({severity:"success",summary:"Başarılı",detail:"Ürün başarıyla eklendi."}),K(h=>[...h,{...c.product,code:c.code}]),X("")):t.current.show({severity:"error",summary:"Hata",detail:c.message})}).catch(c=>{t.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{f(!1)})},[E,z]=i.useState(""),J=()=>{let a=new FormData;a.append("customer_id",b.id),a.append("car_brand",k.brand.name),a.append("car_model",k.model.name),a.append("car_generation",k.generation.name),a.append("car_year",k.year.name),a.append("car_plate",V),a.append("car_kilometer",P),a.append("service_no",j),a.append("notes",E),R.forEach((c,h)=>{a.append(`body[${h}]`,c)}),g.map(c=>({id:c.id,code:c.code})).map((c,h)=>{a.append(`products[${h}][id]`,c.id),a.append(`products[${h}][code]`,c.code)}),a.append("brand_logo",k.brandLogo),fetch(route("worker.services.store"),{method:"POST",headers:{"X-CSRF-TOKEN":n},body:a}).then(c=>c.json()).then(c=>{c.status?(t.current.show({severity:"success",summary:"Başarılı",detail:c.message}),setTimeout(()=>{En.visit(route("worker.services.index"))},3e3)):t.current.show({severity:"error",summary:"Hata",detail:c.message})}).catch(c=>{t.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{f(!1)})};return s.jsxs(Cn,{user:e.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Hizmet Kaydı Ekle"}),children:[s.jsx(Pn,{title:"Hizmet Kaydı Ekle"}),s.jsx(Fn,{ref:t}),s.jsx("div",{className:"py-6",children:s.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:s.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-3",children:s.jsxs(Qn,{ref:o,style:{flexBasis:"50rem"},orientation:"vertical",linear:!0,children:[s.jsxs(me,{header:"Müşteri Seçimi",children:[s.jsx("div",{className:"flex flex-column h-12rem",children:s.jsxs(Ne,{className:"w-full md:w-14rem",children:[s.jsx(_n,{value:b,filter:!0,showClear:!0,emptyFilterMessage:"Müşteri Bulunamadı",filterBy:"name,email,phone",onChange:a=>x(a.value),options:r,optionLabel:"name",className:"w-full"}),s.jsx("label",{htmlFor:"dd-city",children:"Müşteri Seçiniz"})]})}),s.jsx("div",{className:"flex py-4",children:s.jsx(Q,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:b===null,onClick:()=>o.current.nextCallback()})})]}),s.jsxs(me,{header:"Araç Bilgileri",children:[s.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-3",children:s.jsx(ul,{onComplete:a=>{N(!0),B(a)},onChange:(a,c)=>{N(c),B(a)},selectedBrand:U.brand,setSelectedBrand:a=>H(c=>({...c,brand:a})),selectedModel:U.model,setSelectedModel:a=>H(c=>({...c,model:a})),selectedYear:U.year,setSelectedYear:a=>H(c=>({...c,year:a}))})}),s.jsxs("div",{className:"flex py-4 gap-2",children:[s.jsx(Q,{label:"Geri",severity:"secondary",size:"small",icon:"pi pi-arrow-left",onClick:()=>o.current.prevCallback()}),s.jsx(Q,{label:"İleri",icon:"pi pi-arrow-right",size:"small",disabled:!Y,iconPos:"right",onClick:()=>o.current.nextCallback()})]})]}),s.jsxs(me,{header:"Ürün Seçimi",children:[s.jsxs("div",{className:"grid grid-cols-3 lg:grid-cols-5 gap-2",children:[s.jsx("div",{className:"col-span-2 lg:col-span-4",children:s.jsx(ye,{value:$,onChange:a=>X(a.target.value),className:"w-full",placeholder:"Ürün Kodu Giriniz"})}),s.jsx("div",{children:s.jsx(Q,{onClick:y,label:"Ekle",icon:"pi pi-plus"})})]}),s.jsx(Rn,{dataKey:"id",value:g,onChange:a=>K(a.value),itemTemplate:a=>s.jsxs("div",{className:"flex flex-wrap p-2 align-items-center gap-3",children:[s.jsx("img",{className:"w-[4rem] h-auto shadow-lg flex-shrink-0 rounded",src:`${a.image}`,alt:a.name}),s.jsxs("div",{className:"flex-1 flex flex-col gap-2 xl:mr-8",children:[s.jsx("span",{className:"font-bold",children:a.name}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("span",{children:"# SKU :"}),s.jsx("span",{children:a.sku})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("i",{className:"pi pi-tag"}),s.jsx("span",{children:a.category})]})]})]}),s.jsx("div",{className:"grid grid-rows-1",children:s.jsx("div",{className:"flex justify-end",children:s.jsx(Q,{severity:"danger",tooltip:"Listeden Çıkar",onClick:()=>K(c=>c.filter(h=>h.id!==a.id)),icon:"pi pi-trash"})})})]}),header:"Eklenen Ürünler",emptyMessage:"Ürün Bulunamadı Lütfen Üstteki Alandan Ürün Ekleyiniz."}),s.jsxs("div",{className:"flex py-4 gap-2",children:[s.jsx(Q,{label:"Geri",severity:"secondary",size:"small",icon:"pi pi-arrow-left",onClick:()=>o.current.prevCallback()}),s.jsx(Q,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:g.length===0,onClick:()=>o.current.nextCallback()})]})]}),s.jsx(me,{header:"Gövde Seçimi",children:s.jsxs("div",{children:[s.jsx("div",{className:"flex flex-column",children:s.jsx(bt,{editable:!0,onChange:a=>{O(a)},value:R})}),s.jsxs("div",{className:"flex py-4 gap-2",children:[s.jsx(Q,{label:"Geri",size:"small",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>o.current.prevCallback()}),s.jsx(Q,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:R.length===0,onClick:()=>o.current.nextCallback()})]})]})}),s.jsx(me,{header:"Notlar",children:s.jsxs("div",{children:[s.jsxs("div",{children:[s.jsx("div",{className:"my-4 mb-6",children:s.jsxs(Ne,{children:[s.jsx(ye,{className:"w-full",id:"plate-input",value:V,onChange:a=>_(a.target.value)}),s.jsx("label",{htmlFor:"plate-input",children:"Araç Plakası"})]})}),s.jsx("div",{className:"mb-6",children:s.jsxs(Ne,{children:[s.jsx(An,{className:"w-full",id:"kilometer-input",value:P,onChange:a=>p(a.value)}),s.jsx("label",{htmlFor:"kilometer-input",children:"Araç Kilometresi"})]})}),s.jsx("div",{className:"mb-6",children:s.jsxs(Ne,{children:[s.jsx(ye,{className:"w-full",id:"service-number-input",value:j,onChange:a=>T(a.target.value)}),s.jsx("label",{htmlFor:"service-number-input",children:"Hizmet Numarası"})]})}),s.jsx("label",{htmlFor:"editor-notes",className:"font-semibold ",children:"Hizmet Notları"}),s.jsx(Dt,{className:"mt-3",itemID:"editor-notes",value:E,onTextChange:a=>z(a.htmlValue),style:{height:"320px"}})]}),s.jsxs("div",{className:"flex py-4 gap-2",children:[s.jsx(Q,{label:"Geri",size:"small",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>o.current.prevCallback()}),s.jsx(Q,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:E===""||V===""||P===null||j==="",onClick:()=>o.current.nextCallback()})]})]})}),s.jsx(me,{header:"Özet",children:s.jsxs("div",{children:[s.jsx("div",{children:s.jsxs("div",{className:"grid grid-cols-1 gap-2 lg:gap-3 lg:grid-cols-2",children:[s.jsxs("div",{className:"grid grid-rows-1 lg:grid-rows-3 gap-y-1 ",children:[s.jsxs("div",{children:[s.jsx("label",{className:"font-semibold",children:"Müşteri"}),s.jsx("div",{className:"flex items-center gap-2",children:s.jsx("span",{children:b==null?void 0:b.name})})]}),s.jsxs("div",{children:[s.jsx("label",{className:"font-semibold",children:"Ürünler"}),s.jsx("ul",{children:g.map(a=>s.jsxs("li",{className:"flex items-center gap-2 even:my-1",children:[s.jsx("img",{className:"w-8 h-8 rounded-full",src:a.image,alt:a.name}),s.jsxs("span",{children:[a.name," #",a.code]})]},a.id))})]}),s.jsxs("div",{children:[s.jsx("label",{className:"font-semibold",children:"Notlar"}),s.jsx("div",{dangerouslySetInnerHTML:{__html:E}})]}),s.jsxs("div",{children:[s.jsx("label",{className:"font-semibold",children:"Araç"}),s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx("img",{className:"w-8 h-8 rounded-full",src:k==null?void 0:k.brandLogo,alt:(W=k==null?void 0:k.brand)==null?void 0:W.name}),s.jsxs("span",{children:[(re=k==null?void 0:k.brand)==null?void 0:re.name," >> ",(Z=k==null?void 0:k.model)==null?void 0:Z.name," >> ",(L=k==null?void 0:k.generation)==null?void 0:L.name," (",(I=k==null?void 0:k.year)==null?void 0:I.name,")"]})]}),s.jsx("div",{className:"flex items-center gap-2 mb-3",children:s.jsxs("span",{children:[V," - ",Number(P).toLocaleString(),"km"]})})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"font-semibold",children:"Gövde"}),s.jsx(bt,{editable:!1,value:R,onChange:()=>{}})]})]})}),s.jsxs("div",{className:"flex py-4 gap-2",children:[s.jsx(Q,{label:"Geri",size:"small",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>o.current.prevCallback()}),s.jsx(Q,{label:"Kaydet",icon:"pi pi-save",severity:"success",size:"small",iconPos:"right",disabled:E===""||V===""||P===null||j==="",onClick:J})]})]})})]})})})})]})};export{er as default};

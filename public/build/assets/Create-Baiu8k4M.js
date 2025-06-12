function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/quill-g1zj9Vpv.js","assets/app-2dEnFbol.js","assets/app-DPYoIlZM.css","assets/_baseClone-BgPU1wOP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as D,P as Le,U as It,c as ee,r as a,D as ae,O as F,h as mt,I as Sn,l as On,j as s,a as qt,_ as jn,L as Pn,S as En}from"./app-2dEnFbol.js";import{C as bt}from"./CarBody-BduS_Z5V.js";import{A as Cn}from"./AuthenticatedLayout-B6eXOzRi.js";import{C as _e,u as de,a as De,j as Je,R as Nn,e as $e}from"./ripple.esm-BzRUCNyJ.js";import{C as In}from"./csstransition.esm-CZRxnida.js";import{B as Y}from"./button.esm-BxCmjYrH.js";import{T as Tn}from"./tooltip.esm-B0SFQXmi.js";import{V as Ln,D as _n}from"./dropdown.esm-BVu1Wdrb.js";import{S as Dn}from"./index.esm-BaGNysXl.js";import{I as ye}from"./inputtext.esm-BElP5JEu.js";import{B as vt}from"./blockui.esm-BL2sCvlg.js";import{F as Ne}from"./floatlabel.esm-BNmHnXxI.js";import{T as Fn}from"./toast.esm-CYUjmINi.js";import{D as Rn}from"./dataview.esm-CPOiy62W.js";import{I as An}from"./inputnumber.esm-2HOoghO7.js";import"./index.esm-CJ0UbATh.js";import"./index.esm-BCqelGsY.js";import"./index.esm-BvN2aFpx.js";import"./index.esm-BD_l9FnN.js";import"./index.esm-DsEyknNI.js";import"./scrollpanel.esm-C6hLkUgj.js";import"./Dropdown-Bz8_Grql.js";import"./tag.esm-1aFfu_aU.js";import"./motion-CT3WypUb.js";import"./index.esm-DCNiD8Nv.js";import"./overlayservice.esm-hjHhmC6x.js";import"./index.esm-DffjiFPL.js";import"./index.esm-GJ4SfU9q.js";import"./TransitionGroup-B7gto3Pv.js";import"./index.esm-CTlmYQmh.js";import"./paginator.esm-D7V6fndz.js";import"./index.esm-CfbMo687.js";function we(e){"@babel/helpers - typeof";return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},we(e)}function zn(e,n){if(we(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var i=t.call(e,n||"default");if(we(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Mn(e){var n=zn(e,"string");return we(n)==="symbol"?n:String(n)}function We(e,n,t){return n=Mn(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},xe.apply(this,arguments)}function Kn(e){if(Array.isArray(e))return e}function $n(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i,r,w,g,p=[],v=!0,x=!1;try{if(w=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;v=!1}else for(;!(v=(i=w.call(t)).done)&&(p.push(i.value),p.length!==n);v=!0);}catch(j){x=!0,r=j}finally{try{if(!v&&t.return!=null&&(g=t.return(),Object(g)!==g))return}finally{if(x)throw r}}return p}}function gt(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function Hn(e,n){if(e){if(typeof e=="string")return gt(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gt(e,n)}}function Vn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(e,n){return Kn(e)||$n(e,n)||Hn(e,n)||Vn()}var Gn={root:function(n){var t=n.props;return ee("p-stepper p-component",{"p-stepper-horizontal":t.orientation==="horizontal","p-stepper-vertical":t.orientation==="vertical","p-readonly":t.linear})},nav:"p-stepper-nav",stepper:{header:function(n){var t=n.isStepActive,i=n.isItemDisabled,r=n.index;return ee("p-stepper-header",{"p-highlight":t(r),"p-disabled":i(r)})},action:"p-stepper-action",number:"p-stepper-number",title:"p-stepper-title",separator:"p-stepper-separator",toggleableContent:"p-stepper-toggleable-content",content:function(n){var t=n.props;return ee("p-stepper-content",{"p-toggleable-content":t.orientation==="vertical"})}},panelContainer:"p-stepper-panels",panel:function(n){var t=n.props,i=n.isStepActive,r=n.index;return ee("p-stepper-panel",{"p-stepper-panel-active":t.orientation==="vertical"&&i(r)})}},Un=`
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
`,he=_e.extend({defaultProps:{__TYPE:"Stepper",activeStep:0,orientation:"horizontal",linear:!1},css:{classes:Gn,styles:Un}});function yt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}function He(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?yt(Object(t),!0).forEach(function(i){We(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):yt(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}var Ge=a.memo(a.forwardRef(function(e){var n=de(),t=e.cx,i=e.ptm,r=n(He(He(He({id:e.id,className:t("stepper.content",{stepperpanel:e.stepperpanel,index:e.index}),role:"tabpanel","aria-labelledby":e.ariaLabelledby},e.getStepPT(e.stepperpanel,"root",e.index)),e.getStepPT(e.stepperpanel,"content",e.index)),{},{"data-p-active":e.active}),i("stepperpanel")),w=function(){var p=e.template;return a.createElement(p,{index:e.index,active:e.active,highlighted:e.highlighted,clickCallback:function(x){return e.onItemClick(x,e.index)},prevCallback:function(x){return e.prevCallback(x,e.index)},nextCallback:function(x){return e.nextCallback(x,e.index)}})};return a.createElement("div",r,e.template?w():e.stepperpanel)}));Ge.displayName="StepperContent";var Ue=a.memo(a.forwardRef(function(e){var n=de(),t=e.cx,i=n({id:e.id,className:t("stepper.action"),role:"tab",tabIndex:e.disabled?-1:void 0,"aria-controls":e.ariaControls,onClick:function(w){return e.clickCallback(w,e.index)}});return e.template?e.template():a.createElement("button",i,a.createElement("span",{className:t("stepper.number")},e.index+1),a.createElement("span",{className:t("stepper.title")},e.getStepProp(e.stepperpanel,"header")))}));Ue.displayName="StepperHeader";function xt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}function Bn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?xt(Object(t),!0).forEach(function(i){We(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):xt(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}var Be=a.memo(a.forwardRef(function(e){var n=de(),t=n(Bn({"aria-hidden":!0,className:e.separatorClass},e.getStepPT(e.stepperpanel,"separator",e.index)));return e.template?e.template():a.createElement("span",t)}));Be.displayName="StepperSeparator";function wt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}function fe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?wt(Object(t),!0).forEach(function(i){We(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):wt(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}var Qn=D.memo(D.forwardRef(function(e,n){var t=de(),i=D.useContext(Le),r=he.getProps(e,i),w=he.setMetaData({props:r}),g=w.ptm,p=w.cx,v=w.isUnstyled,x=w.ptmo,j=D.useState(r.id),N=ht(j,2),h=N[0],H=N[1],U=D.useState(r.activeStep),R=ht(U,2),O=R[0],B=R[1],V=D.useRef();De(he.css.styles,v,{name:"stepper"}),Je(function(){h||H(It())});var k=function(f,o){var q;return f==null||(q=f.props)===null||q===void 0?void 0:q[o]},Q=function(f,o){return k(f,"header")||o},X=function(f){return f.type.displayName==="StepperPanel"},I=function(f){return O===f},$=function(f){return r.linear&&!I(f)},J=function(f,o){B(o),r.onChangeStep&&r.onChangeStep({originalEvent:f,index:o})},G=function(f){return"".concat(h,"_").concat(f,"_header_action")},_=function(f){return"".concat(h,"_").concat(f,"content")},P=function(){return D.Children.toArray(r.children).reduce(function(f,o){return X(o)?f.push(o):o&&Array.isArray(o)&&D.Children.toArray(o.props.children).forEach(function(q){X(q)&&f.push(q)}),f},[])},d=function(f,o){o!==0&&J(f,o-1)},y=function(f,o){o!==P().length-1&&J(f,o+1)},E=function(f,o,q){var A=P().length,ne={props:f.props,parent:{props:r},context:{index:q,count:A,first:q===0,last:q===A-1,active:I(q),highlighted:q<O,disabled:$(q)}};return t(g("stepperpanel.".concat(o),{stepperpanel:ne}),g("stepperpanel.".concat(o),ne),x(k(f,"pt"),o,ne))},M=function(f,o){if(r.linear){f.preventDefault();return}o!==O&&J(f,o)},W=function(){return P().map(function(f,o){var q,A,ne=t({className:ee(p("stepper.header",{isStepActive:I,isItemDisabled:$,step:f,index:o})),"aria-current":I(o)&&"step",role:"presentation","data-p-highlight":I(o),"data-p-disabled":$(o),"data-p-active":I(o)},g("stepperpanel"));return D.createElement("li",xe({key:Q(f,o)},ne),D.createElement(Ue,{id:G(o),template:(q=f.children)===null||q===void 0?void 0:q.header,stepperpanel:f,index:o,disabled:$(o),active:I(o),highlighted:o<O,ariaControls:_(o),clickCallback:M,getStepPT:E,getStepProp:k,cx:p}),o!==P().length-1&&D.createElement(Be,{template:(A=f.children)===null||A===void 0?void 0:A.separator,separatorClass:p("stepper.separator"),stepperpanel:f,index:o,active:I(o),highlighted:o<O,getStepPT:E}))})};D.useImperativeHandle(n,function(){return{getElement:function(){return V.current},nextCallback:function(f){return y(f,O)},prevCallback:function(f){return d(f,O)}}});var te=function(){return P().map(function(f,o){var q;return I(o)?D.createElement(Ge,{key:_(o),id:_(o),tempate:f==null||(q=f.children)===null||q===void 0?void 0:q.content,stepperpanel:f,index:o,active:I(o),highlighted:o<O,clickCallback:M,prevCallback:d,nextCallback:y,getStepPT:E,ariaLabelledby:G(o),ptm:g,cx:p}):null})},re=function(){var f=W(),o=t({className:ee(p("nav")),ref:V},g("nav")),q=t({className:p("panelContainer")},g("panelContainer"));return D.createElement(D.Fragment,null,D.createElement("ul",o,f),D.createElement("div",q,te()))},Z=function(){return P().map(function(f,o){var q,A,ne,oe=D.createRef(null),Fe=t(fe(fe(fe({ref:V,className:p("panel",{props:r,index:o,isStepActive:I}),"aria-current":I(o)&&"step"},E(f,"root",o)),E(f,"panel",o)),{},{"data-p-highlight":I(o),"data-p-disabled":$(o),"data-p-active":I(o)}),g("nav")),ie=t(fe({className:p("stepper.header",{step:f,isStepActive:I,isItemDisabled:$,index:o})},E(f,"header",o))),se=t(fe(fe({classNames:p("stepper.content")},E(f,"transition",o)),{},{timeout:{enter:1e3,exit:450},in:I(o),unmountOnExit:!0})),je=t(fe({ref:oe,className:p("stepper.toggleableContent")},E(f,"toggleableContent",o)));return D.createElement("div",xe({key:Q(f,o)},Fe),D.createElement("div",ie,D.createElement(Ue,{id:G(o),template:(q=f.children)===null||q===void 0?void 0:q.header,stepperpanel:f,index:o,disabled:$(o),active:I(o),highlighted:o<O,ariaControls:_(o),clickCallback:M,getStepPT:E,getStepProp:k,cx:p})),D.createElement(In,xe({nodeRef:oe},se),D.createElement("div",je,o!==P().length-1&&D.createElement(Be,{template:(A=f.children)===null||A===void 0?void 0:A.separator,separatorClass:p("stepper.separator"),stepperpanel:f,index:o,active:I(o),highlighted:o<O,getStepPT:E}),D.createElement(Ge,{key:_(o),id:_(o),tempate:f==null||(ne=f.children)===null||ne===void 0?void 0:ne.content,stepperpanel:f,index:o,active:I(o),highlighted:o<O,clickCallback:M,prevCallback:d,nextCallback:y,getStepPT:E,ariaLabelledby:G(o),ptm:g,cx:p}))))})},L=t({className:ee(p("root")),role:"tablist"},he.getOtherProps(r),g("root"));return D.createElement("div",L,r.start&&r.start(),r.orientation==="horizontal"&&re(),r.orientation==="vertical"&&Z(),r.end&&r.end())}));he.displayName="StepperBase";var Yn="",Ve=_e.extend({defaultProps:{__TYPE:"StepperPanel",children:void 0,header:null},css:{styles:Yn}}),me=a.memo(a.forwardRef(function(e){var n=a.useContext(Le),t=Ve.getProps(e,n),i=Ve.setMetaData({props:t}),r=i.isUnstyled;return De(Ve.css.styles,r,{name:"StepperPanel"}),a.createElement(a.Fragment,null,t.children)}));me.displayName="StepperPanel";function ke(){return ke=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ke.apply(this,arguments)}function Se(e){"@babel/helpers - typeof";return Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Se(e)}function Xn(e,n){if(Se(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var i=t.call(e,n||"default");if(Se(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Jn(e){var n=Xn(e,"string");return Se(n)==="symbol"?n:String(n)}function Tt(e,n,t){return n=Jn(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Qe(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function Wn(e){if(Array.isArray(e))return Qe(e)}function Zn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lt(e,n){if(e){if(typeof e=="string")return Qe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Qe(e,n)}}function el(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kt(e){return Wn(e)||Zn(e)||Lt(e)||el()}function tl(e){throw new TypeError('"'+e+'" is read-only')}function nl(e){if(Array.isArray(e))return e}function ll(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i,r,w,g,p=[],v=!0,x=!1;try{if(w=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;v=!1}else for(;!(v=(i=w.call(t)).done)&&(p.push(i.value),p.length!==n);v=!0);}catch(j){x=!0,r=j}finally{try{if(!v&&t.return!=null&&(g=t.return(),Object(g)!==g))return}finally{if(x)throw r}}return p}}function rl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qe(e,n){return nl(e)||ll(e,n)||Lt(e,n)||rl()}var ol={itemGroup:"p-listbox-item-group",emptyMessage:"p-listbox-empty-message",list:"p-listbox-list",wrapper:function(n){var t=n.props;return ee("p-listbox-list-wrapper",t.listClassName)},root:function(n){var t=n.props;return ee("p-listbox p-component",{"p-disabled":t.disabled,"p-invalid":t.invalid},t.className)},item:function(n){var t=n.props;return ee("p-listbox-item",{"p-highlight":t.selected,"p-focus":t.focusedOptionIndex===t.index,"p-disabled":t.disabled},t.option.className)},filterContainer:"p-listbox-filter-container",filterIcon:"p-listbox-filter-icon",filterInput:"p-listbox-filter",header:"p-listbox-header"},il=`
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
`,al={itemGroup:function(n){var t=n.scrollerOptions;return{height:t.props?t.props.itemSize:void 0}},list:function(n){var t=n.options,i=n.props;return i.virtualScrollerOptions?t.style:void 0}},ge=_e.extend({defaultProps:{__TYPE:"ListBox",className:null,dataKey:null,disabled:null,emptyFilterMessage:null,emptyMessage:null,filter:!1,filterIcon:null,filterBy:null,filterInputProps:null,filterLocale:void 0,filterMatchMode:"contains",filterPlaceholder:null,filterTemplate:null,filterValue:null,focusOnHover:!0,id:null,itemTemplate:null,invalid:!1,listClassName:null,listStyle:null,metaKeySelection:!1,selectOnFocus:!1,autoOptionFocus:!1,multiple:!1,onChange:null,onFilterValueChange:null,optionDisabled:null,optionGroupChildren:null,optionGroupLabel:null,optionGroupTemplate:null,optionLabel:null,optionValue:null,options:null,style:null,tabIndex:0,tooltip:null,tooltipOptions:null,value:null,virtualScrollerOptions:null,children:void 0},css:{classes:ol,styles:il,inlineStyles:al}});function St(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}function Ot(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?St(Object(t),!0).forEach(function(i){Tt(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):St(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}var _t=a.memo(function(e){var n=de(),t=e.ptCallbacks,i=t.ptm,r=t.cx,w=function(N,h){return i(N,Ot({hostName:e.hostName},h))},g={filter:function(N){return p(N)},reset:function(){return e.resetFilter()}},p=function(N){e.onFilter&&e.onFilter({originalEvent:N,value:N.target.value})},v=function(){var N=n({className:r("filterIcon")},w("filterIcon")),h=e.filterIcon||a.createElement(Dn,N),H=Sn.getJSXIcon(h,Ot({},N),{props:e}),U=n({className:r("header")},w("header")),R=n({className:r("filterContainer")},w("filterContainer")),O=a.createElement("div",R,a.createElement(ye,ke({type:"text",value:e.filter,onChange:p,className:r("filterInput"),disabled:e.disabled,placeholder:e.filterPlaceholder},e.filterInputProps,{pt:i("filterInput"),unstyled:e.unstyled,__parentMetadata:{parent:e.metaData}})),H);if(e.filterTemplate){var B={className:"p-listbox-filter-container",element:O,filterOptions:g,filterInputChange:p,filterIconClassName:"p-dropdown-filter-icon",props:e};O=F.getJSXElement(e.filterTemplate,B)}return a.createElement("div",U,O)},x=v();return a.createElement(a.Fragment,null,x)});_t.displayName="ListBoxHeader";var Ye=a.memo(function(e){var n=a.useState(!1),t=qe(n,2),i=t[0],r=t[1],w=de(),g=e.ptCallbacks,p=g.ptm,v=g.cx,x=function(O){return p(O,{hostName:e.hostName,context:{selected:e.selected,disabled:e.disabled,focused:i,focusedOptionIndex:e.focusedOptionIndex}})},j=function(O){r(!0)},N=function(O){r(!1)},h=function(O){e.onTouchEnd&&e.onTouchEnd({originalEvent:O,option:e.option})},H=e.template?F.getJSXElement(e.template,e.option):e.label,U=w({id:e.id,className:v("item",{props:e}),style:e.style,onClick:function(O){return e.onClick(O,e.option,e.index)},onTouchEnd:h,onFocus:j,onBlur:N,tabIndex:"-1",onMouseDown:function(O){return e.onOptionMouseDown(O,e.index)},onMouseMove:function(O){return e.onOptionMouseMove(O,e.index)},"aria-label":e.label,key:e.optionKey,role:"option","aria-selected":e.selected,"aria-disabled":e.disabled,"data-p-disabled":e.disabled},x("item"));return a.createElement("li",U,H,a.createElement(Nn,null))});Ye.displayName="ListBoxItem";function jt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}function ue(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?jt(Object(t),!0).forEach(function(i){Tt(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):jt(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function sl(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=cl(e))||n&&e&&typeof e.length=="number"){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(x){throw x},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var w=!0,g=!1,p;return{s:function(){t=t.call(e)},n:function(){var x=t.next();return w=x.done,x},e:function(x){g=!0,p=x},f:function(){try{!w&&t.return!=null&&t.return()}finally{if(g)throw p}}}}function cl(e,n){if(e){if(typeof e=="string")return Pt(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Pt(e,n)}}function Pt(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}var Te=a.memo(a.forwardRef(function(e,n){var t=de(),i=a.useContext(Le),r=ge.getProps(e,i),w=a.useState(null),g=qe(w,2),p=g[0],v=g[1],x=a.useRef(null),j=a.useRef(null),N=a.useRef(null),h=a.useState(-1),H=qe(h,2),U=H[0],R=H[1],O=a.useState(!1),B=qe(O,2),V=B[0],k=B[1],Q=a.useState(""),X=qe(Q,2),I=X[0],$=X[1],J=a.useState(""),G=qe(J,2),_=G[0],P=G[1],d=a.useRef(null),y=a.useRef(null),E=a.useRef(null),M=a.useRef(null),W=a.useRef(!1),te=(r.onFilterValueChange?r.filterValue:I)||"",re=te&&te.trim().length>0,Z={props:r,state:{filterValue:te}},L=ge.setMetaData(Z);De(ge.css.styles,L.isUnstyled,{name:"listbox"});var T=function(l,c){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;r.disabled||Ce(c)||(r.multiple?ne(l.originalEvent,c):A(l.originalEvent,c),W.current=!1,u!==-1&&v(u))},f=function(l,c){ce(l,c)},o=function(l,c){r.focusOnHover&&V&&ce(l,c)},q=function(){r.disabled||(W.current=!0)},A=function(l,c){var u=ve(c),b=!1,S=null,z=W.current?!1:r.metaKeySelection;if(z){var K=l.metaKey||l.ctrlKey;u?K&&(S=null,b=!0):(S=le(c),b=!0)}else S=u?null:le(c),b=!0;b&&ze(l,S)},ne=function(l,c){var u=ve(c),b=!1,S=null,z=W?!1:r.metaKeySelection;if(z){var K=l.metaKey||l.ctrlKey;u?(K?S=rt(c):S=[le(c)],b=!0):(S=K?r.value||[]:[],S=[].concat(kt(S),[le(c)]),b=!0)}else u?S=rt(c):S=[].concat(kt(r.value||[]),[le(c)]),b=!0;b&&r.onChange({originalEvent:l,value:S,stopPropagation:function(){l==null||l.stopPropagation()},preventDefault:function(){l==null||l.preventDefault()},target:{name:r.name,id:r.id,value:S}})},oe=function(){return F.isNotEmpty(r.value)},Fe=function(l){return r.optionGroupLabel&&l.optionGroup&&l.group},ie=function(l){return F.isNotEmpty(l)&&!(Ce(l)||Fe(l))},se=function(l){return ie(l)&&ve(l)},je=function(){return C.findIndex(function(l){return ie(l)})},Ft=function(){return oe()?F.findLastIndex(C,function(l){return se(l)}):-1},Rt=function(){if(oe())if(r.multiple){for(var l=function(){var S=r.value[u],z=C.findIndex(function(K){return se(K)&&Me(S,le(K))});if(z>-1)return{v:z}},c,u=r.value.length-1;u>=0;u--)if(c=l(),c)return c.v}else return C.findIndex(function(b){return se(b)});return-1},At=function(){return oe()?C.findIndex(function(l){return se(l)}):-1},Ze=function(){return F.findLastIndex(C,function(l){return ie(l)})},zt=function(l){var c=l<C.length-1?C.slice(l+1).findIndex(function(u){return ie(u)}):-1;return c>-1?c+l+1:l},Mt=function(l){var c=l>0?F.findLastIndex(C.slice(0,l),function(u){return ie(u)}):-1;return c>-1?c:l},Kt=function(){return p!==-1?"".concat(E.current,"_").concat(p):null},et=function(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=-1;return oe()&&(c?(u=nt(l),u=u===-1?tt(l):u):(u=tt(l),u=u===-1?nt(l):u)),u>-1?u:l},Re=function(l){var c;return ie(l)&&((c=Ee(l))===null||c===void 0?void 0:c.toLocaleLowerCase(r.filterLocale).startsWith(_.toLocaleLowerCase(r.filterLocale)))},$t=function(l,c){P((_||"")+c);var u=-1;F.isNotEmpty(_)&&(p!==-1?(u=C.slice(p).findIndex(function(b){return Re(b)}),u=u===-1?C.slice(0,p).findIndex(function(b){return Re(b)}):u+p):u=C.findIndex(function(b){return Re(b)}),u===-1&&p===-1&&(u=Pe()),u!==-1&&ce(l,u)),x.current&&clearTimeout(x.current),x.current=setTimeout(function(){P(""),x.current=null},500)},tt=function(l){var c=oe()&&l<C.length-1?C.slice(l+1).findIndex(function(u){return se(u)}):-1;return c>-1?c+l+1:-1},nt=function(l){var c=oe()&&l>0?F.findLastIndex(C.slice(0,l),function(u){return se(u)}):-1;return c>-1?c:-1},be=function(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(c===-1&&(c=et(u,!0)),u===-1&&(u=et(c)),c!==-1&&u!==-1){var b=Math.min(c,u),S=Math.max(c,u),z=C.slice(b,S+1).filter(function(K){return ie(K)}).map(function(K){return le(K)});ze(l,z)}},Pe=function(){var l=At();return l<0?je():l},Ht=function(){var l=Ft();return l<0?Ze():l},ce=function(l,c){p!==c&&(v(c),Ae(),l&&r.selectOnFocus&&!r.multiple&&T(l,C[c]))},Vt=function(l){var c=p!==-1?zt(p):Pe();r.multiple&&l.shiftKey&&be(l,U,c),ce(l,c),l.preventDefault()},Gt=function(l){var c=p!==-1?Mt(p):Ht();r.multiple&&l.shiftKey&&be(l,c,U),ce(l,c),l.preventDefault()},Ut=function(l){p!==-1&&(r.multiple&&l.shiftKey?be(l,p):T(l,C[p])),l.preventDefault()},Bt=function(l){Ut(l)},Qt=function(){R(p)},Yt=function(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(c)l.currentTarget.setSelectionRange(0,0),v(-1);else{var u=l.metaKey||l.ctrlKey,b=je();r.multiple&&l.shiftKey&&u&&be(l,b,U),ce(l,b)}l.preventDefault()},Xt=function(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(c){var u=l.currentTarget,b=u.value.length;u.setSelectionRange(b,b),tl("focusedOptionIndex")}else{var S=l.metaKey||l.ctrlKey,z=Ze();r.multiple&&l.shiftKey&&S&&be(l,U,z),ce(l,z)}l.preventDefault()},Jt=function(l){Ae(0),l.preventDefault()},Wt=function(l){Ae(C.length-1),l.preventDefault()},lt=function(l){var c=l.metaKey||l.ctrlKey;switch(l.code){case"ArrowDown":Vt(l);break;case"ArrowUp":Gt(l);break;case"Home":Yt(l);break;case"End":Xt(l);break;case"PageDown":Wt(l);break;case"PageUp":Jt(l);break;case"Enter":case"NumpadEnter":case"Space":Bt(l),l.preventDefault();break;case"Tab":break;case"ShiftLeft":case"ShiftRight":Qt();break;default:if(r.multiple&&l.code==="KeyA"&&c){var u=C.filter(function(b){return ie(b)}).map(function(b){return le(b)});ze(l,u),l.preventDefault();break}!c&&F.isPrintableCharacter(l.key)&&($t(l,l.key),l.preventDefault());break}},Ae=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;setTimeout(function(){var c=l!==-1?"".concat(E.current,"_").concat(l):Kt(),u=M.current.querySelector('li[id="'.concat(c,'"]'));u?u.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"}):r.virtualScrollerOptions&&y.current&&y.current.scrollToIndex(l!==-1?l:p)},0)},Zt=function(l){y.current&&y.current.scrollToIndex(0);var c=l.originalEvent,u=l.value;r.onFilterValueChange?r.onFilterValueChange({originalEvent:c,value:u}):$(u)},en=function(){$(""),r.onFilter&&r.onFilter({filter:""})},tn=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V;if(r.selectOnFocus&&r.autoOptionFocus&&!oe()&&!r.multiple&&l){var c=Pe();T(null,C[c]),v(c)}},ze=function(l,c){r.onChange&&r.onChange({originalEvent:l,value:c,stopPropagation:function(){l==null||l.stopPropagation()},preventDefault:function(){l==null||l.preventDefault()},target:{name:r.name,id:r.id,value:c}})},rt=function(l){return r.value.filter(function(c){return!F.equals(c,le(l),r.dataKey)})},nn=function(){if(r.value!=null&&C)if(r.optionGroupLabel)for(var l=0;l<C.length;l++){var c=it(r.value,Ke(C[l]));if(c!==-1)return{group:l,option:c}}else return it(r.value,C);return-1},ot=function(){return r.optionValue?null:r.dataKey},it=function(l,c){var u=ot();return c.findIndex(function(b){return F.equals(l,le(b),u)})},Me=function(l,c){return F.equals(l,c,ot())},ve=function(l){var c=le(l);return r.multiple?(r.value||[]).some(function(u){return Me(u,c)}):Me(r.value,c)},Ee=function(l){return r.optionLabel?F.resolveFieldData(l,r.optionLabel):l&&l.label!==void 0?l.label:l},le=function(l){return r.optionValue?F.resolveFieldData(l,r.optionValue):l&&l.value!==void 0?l.value:l},at=function(l){return r.dataKey?F.resolveFieldData(l,r.dataKey):Ee(l)},Ce=function(l){return r.optionDisabled?F.isFunction(r.optionDisabled)?r.optionDisabled(l):F.resolveFieldData(l,r.optionDisabled):l&&l.disabled!==void 0?l.disabled:!1},ln=function(){ae.focus(M.current);var l=ae.getFirstFocusableElement(d.current,':not([data-p-hidden-focusable="true"])');N.current.tabIndex=ae.isElement(l)?void 0:-1,j.current.tabIndex=-1,ce(null,0)},rn=function(l){var c=l.relatedTarget;if(c===M.current){var u=ae.getFirstFocusableElement(d.current,':not([data-p-hidden-focusable="true"])');ae.focus(u),j.current.tabIndex=void 0}else ae.focus(j.current);N.current.tabIndex=-1},st=function(){k(!0),v(p!==-1?p:r.autoOptionFocus?Pe():Rt()),tn(!0)},ct=function(l){k(!1),v(-1),R(-1),P("")},on=function(l){return F.resolveFieldData(l,r.optionGroupLabel)},an=function(l){return F.resolveFieldData(l,r.optionGroupLabel)},Ke=function(l){return F.resolveFieldData(l,r.optionGroupChildren)},sn=function(){if(re){var l=te.trim().toLocaleLowerCase(r.filterLocale),c=r.filterBy?r.filterBy.split(","):[r.optionLabel||"label"];if(r.optionGroupLabel){var u=[],b=sl(r.options),S;try{for(b.s();!(S=b.n()).done;){var z=S.value,K=mt.filter(Ke(z),c,l,r.filterMatchMode,r.filterLocale);K&&K.length&&u.push(ue(ue({},z),{items:K}))}}catch(pe){b.e(pe)}finally{b.f()}return u}return mt.filter(r.options,c,l,r.filterMatchMode,r.filterLocale)}return r.options},cn=function(){if(y.current){var l=nn();l!==-1&&setTimeout(function(){return y.current.scrollToIndex(l)},0)}};a.useImperativeHandle(n,function(){return{props:r,focus:function(){return ae.focusFirstElement(d.current)},getElement:function(){return d.current},getVirtualScroller:function(){return y.current}}}),Je(function(){cn(),E.current=It()});var un=function(){return r.filter?a.createElement(_t,{hostName:"ListBox",filter:te,filterIcon:r.filterIcon,onFilter:Zt,resetFilter:en,filterTemplate:r.filterTemplate,disabled:r.disabled,filterPlaceholder:r.filterPlaceholder,filterInputProps:r.filterInputProps,ptCallbacks:L,metaData:Z}):null},dn=function(l,c){var u=Ke(l);return u.map(function(b,S){var z=Ee(b),K=S+"_"+at(b),pe=Ce(b);return a.createElement(Ye,{id:E.current+"_"+S,hostName:"ListBox",optionKey:K,key:K,label:z,option:b,style:c,template:r.itemTemplate,selected:ve(b),onOptionMouseDown:f,onOptionMouseMove:o,onClick:T,index:S,focusedOptionIndex:p,onTouchEnd:q,disabled:pe,ptCallbacks:L,metaData:Z})})},ut=function(l,c){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},b={height:u.props?u.props.itemSize:void 0};if(r.optionGroupLabel){var S=r.optionGroupTemplate?F.getJSXElement(r.optionGroupTemplate,l,c):an(l),z=dn(l,b),K=c+"_"+on(l),pe=t({className:L.cx("itemGroup"),style:L.sx("itemGroup",{scrollerOptions:u}),role:"group"},L.ptm("itemGroup"));return a.createElement(a.Fragment,{key:K},a.createElement("li",pe,S),z)}var wn=Ee(l),ft=c+"_"+at(l),kn=Ce(l);return a.createElement(Ye,{id:E.current+"_"+c,hostName:"ListBox",optionKey:ft,key:ft,label:wn,index:c,onOptionMouseDown:f,onOptionMouseMove:o,focusedOptionIndex:p,option:l,style:b,template:r.itemTemplate,selected:ve(l),onClick:T,onTouchEnd:q,disabled:kn,ptCallbacks:L,metaData:Z})},pn=function(){return F.isNotEmpty(C)?C.map(ut):re?dt(r.emptyFilterMessage,!0):dt(r.emptyMessage)},dt=function(l,c){var u=t({className:L.cx("emptyMessage")},L.ptm("emptyMessage")),b=F.getJSXElement(l,r)||On(c?"emptyFilterMessage":"emptyMessage");return a.createElement("li",u,b)},fn=function(){if(r.virtualScrollerOptions){var l=ue(ue({},r.virtualScrollerOptions),{items:C,onLazyLoad:function(S){return r.virtualScrollerOptions.onLazyLoad(ue(ue({},S),{filter:C}))},itemTemplate:function(S,z){return S&&ut(S,z.index,z)},contentTemplate:function(S){var z=t(ue({ref:M,style:L.sx("list",{options:S}),className:L.cx("list",{options:S}),role:"listbox",tabIndex:"-1","aria-multiselectable":r.multiple,onFocus:st,onBlur:ct,onKeyDown:lt},pt),L.ptm("list"));return a.createElement("ul",z,S.children)}});return a.createElement(Ln,ke({ref:y},l,{pt:L.ptm("virtualScroller")}))}var c=pn(),u=t(ue({ref:M,className:L.cx("list"),role:"listbox","aria-multiselectable":r.multiple,tabIndex:"-1",onFocus:st,onBlur:ct,onKeyDown:lt},pt),L.ptm("list"));return a.createElement("ul",u,c)},C=sn(),mn=F.isNotEmpty(r.tooltip),qn=ge.getOtherProps(r),pt=F.reduceKeys(qn,ae.ARIA_PROPS),bn=fn(),vn=un(),gn=t({className:L.cx("wrapper"),style:r.listStyle},L.ptm("wrapper")),hn=t({ref:d,id:r.id,className:L.cx("root"),style:r.style},ge.getOtherProps(r),L.ptm("root")),yn=t({ref:j,role:"presentation","aria-hidden":"true",className:"p-hidden-accessible p-hidden-focusable",tabIndex:r.disabled?-1:r.tabIndex,onFocus:ln,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0},L.ptm("hiddenFirstFocusableEl")),xn=t({ref:N,role:"presentation","aria-hidden":"true",className:"p-hidden-accessible p-hidden-focusable",tabIndex:r.disabled?-1:r.tabIndex,onFocus:rn,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0},L.ptm("hiddenLastFocusableEl"));return a.createElement(a.Fragment,null,a.createElement("div",hn,a.createElement("span",yn),vn,a.createElement("div",gn,bn),a.createElement("span",xn)),mn&&a.createElement(Tn,ke({target:d,content:r.tooltip,pt:L.ptm("tooltip")},r.tooltipOptions)))}));Te.displayName="ListBox";const ul=({selectedBrand:e,setSelectedBrand:n,selectedModel:t,setSelectedModel:i,selectedYear:r,setSelectedYear:w,onChange:g,onComplete:p})=>{const[v,x]=a.useState([]),[j,N]=a.useState([]),[h,H]=a.useState("");a.useState(!1);const[U,R]=a.useState(!1),[O,B]=a.useState(!1),V=a.useRef(null),k=a.useRef(null),Q=a.useRef(null),X=a.useRef(null);a.useEffect(()=>{(async()=>{try{R(!0);const y=await qt.post(route("super.car.brands.get"));x(y.data)}catch(y){console.error("Markalar yüklenirken hata oluştu:",y)}finally{R(!1)}})()},[]),a.useEffect(()=>{(async()=>{if(e)try{B(!0);const y=await qt.post(route("super.car.brands.models.get",e.id));N(y.data)}catch(y){console.error("Modeller yüklenirken hata oluştu:",y)}finally{B(!1)}else N([])})()},[e]),a.useEffect(()=>{if(r!==null&&p!==void 0){let d={brand:e,model:t,generation:{name:h,modelYear:"",non:!0},brandLogo:e==null?void 0:e.logo,year:r};p(d)}},[r]),a.useEffect(()=>{if(g!==void 0){let d={brand:e,model:t,generation:{name:h,modelYear:"",non:!0},brandLogo:e==null?void 0:e.logo,year:r};g(d,r!==null)}},[e,t,r,h]);async function I(d){let y=[];for(let E=1975;E<=Number(new Date().getFullYear());E++)y.push({name:E});return y.sort((E,M)=>M.name-E.name),y}const $=d=>s.jsxs("div",{className:"flex items-center",children:[d.logo&&s.jsx("img",{src:d.logo,alt:d.name,className:"w-8 h-8 mr-2"}),s.jsx("span",{children:d.name})]}),J=d=>s.jsxs("div",{className:"flex items-center",children:[(e==null?void 0:e.logo)&&s.jsx("img",{src:e.logo,alt:d.name,className:"w-8 h-8 mr-2"}),s.jsx("span",{children:d.name})]}),G=d=>s.jsxs("div",{className:"flex items-center",children:[(e==null?void 0:e.logo)&&s.jsx("img",{src:e.logo,alt:d.name+" .yıl",className:"w-8 h-8 mr-2"}),s.jsx("span",{children:d.name})]}),[_,P]=a.useState([]);return a.useEffect(()=>{(async()=>{const y=await I();P(y)})()},[]),a.useEffect(()=>{e&&V.current&&V.current.scrollIntoView({behavior:"smooth",block:"center"})},[e]),a.useEffect(()=>{t&&k.current&&k.current.scrollIntoView({behavior:"smooth",block:"center"})},[t]),a.useEffect(()=>{r&&Q.current&&(Q.current.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{var d;(d=X.current)==null||d.focus()},500))},[r]),s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-2 mt-4",children:[s.jsx("label",{className:"font-medium",children:"Araç Markası"}),s.jsx(vt,{blocked:U,template:s.jsx("i",{className:"pi pi-spin pi-spinner text-3xl"}),children:s.jsx(Te,{value:e,onChange:d=>{n(d.value),i(null),w(null)},options:v,optionLabel:"name",placeholder:"Araç Markası Seçiniz",filter:!0,className:"w-full md:w-14rem",itemTemplate:$,listStyle:{height:"300px"}})})]}),e&&s.jsxs("div",{className:"flex flex-col gap-2 mt-4",ref:V,children:[s.jsx("label",{className:"font-medium",children:"Araç Modeli"}),s.jsx(vt,{blocked:O,template:s.jsx("i",{className:"pi pi-spin pi-spinner text-3xl"}),children:s.jsx(Te,{value:t,onChange:d=>{i(d.value),w(null)},options:j,optionLabel:"name",placeholder:"Araç Modelini Seçiniz",filter:!0,className:"w-full md:w-14rem",itemTemplate:J,listStyle:{height:"300px"}})})]}),t&&s.jsxs("div",{className:"flex flex-col gap-2 mt-4",ref:k,children:[s.jsx("label",{className:"font-medium",children:"Araç Yılı"}),s.jsx(Te,{value:r,onChange:d=>w(d.value),options:_,placeholder:"Araç Yılı Seçiniz",optionLabel:"name",filter:!0,className:"w-full md:w-14rem",itemTemplate:G,listStyle:{height:"300px"}})]}),t&&s.jsxs("div",{className:"flex flex-col gap-2 mt-4",ref:Q,children:[s.jsx("label",{className:"font-medium",children:"Paket Detayı"}),s.jsx(ye,{ref:X,value:h,onChange:d=>H(d.target.value),className:"w-full md:w-14rem",placeholder:"Paket detayını giriniz"})]})]})};function Xe(){return Xe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Xe.apply(this,arguments)}function Oe(e){"@babel/helpers - typeof";return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Oe(e)}function dl(e,n){if(Oe(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var i=t.call(e,n||"default");if(Oe(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function pl(e){var n=dl(e,"string");return Oe(n)==="symbol"?n:String(n)}function fl(e,n,t){return n=pl(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ml(e){if(Array.isArray(e))return e}function ql(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i,r,w,g,p=[],v=!0,x=!1;try{if(w=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;v=!1}else for(;!(v=(i=w.call(t)).done)&&(p.push(i.value),p.length!==n);v=!0);}catch(j){x=!0,r=j}finally{try{if(!v&&t.return!=null&&(g=t.return(),Object(g)!==g))return}finally{if(x)throw r}}return p}}function Et(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function bl(e,n){if(e){if(typeof e=="string")return Et(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Et(e,n)}}function vl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gl(e,n){return ml(e)||ql(e,n)||bl(e,n)||vl()}var hl={root:function(n){var t=n.props;return ee("p-component p-editor-container",t.className)},toolbar:"p-editor-toolbar",content:"p-editor-content"},yl=`
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
`,Ie=_e.extend({defaultProps:{__TYPE:"Editor",id:null,value:null,style:null,className:null,placeholder:null,readOnly:!1,modules:null,formats:null,theme:"snow",showHeader:!0,headerTemplate:null,onTextChange:null,onSelectionChange:null,onLoad:null,maxLength:null,children:void 0},css:{classes:hl,styles:yl}});function Ct(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}function Nt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ct(Object(t),!0).forEach(function(i){fl(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ct(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}var xl=function(){try{return Quill}catch{return null}}(),Dt=a.memo(a.forwardRef(function(e,n){var t=de(),i=a.useContext(Le),r=Ie.getProps(e,i),w=Ie.setMetaData({props:r}),g=w.ptm,p=w.cx,v=w.isUnstyled;De(Ie.css.styles,v,{name:"editor"});var x=a.useRef(null),j=a.useRef(null),N=a.useRef(null),h=a.useRef(null),H=a.useRef(!1),U=a.useState(!1),R=gl(U,2),O=R[0],B=R[1];Je(function(){if(!H.current){var _={modules:Nt({toolbar:r.showHeader?N.current:!1},r.modules),placeholder:r.placeholder,readOnly:r.readOnly,theme:r.theme,formats:r.formats};xl?Q(new Quill(j.current,_)):jn(()=>import("./quill-g1zj9Vpv.js"),__vite__mapDeps([0,1,2,3])).then(function(P){if(P&&ae.isExist(j.current)){var d;P.default?d=new P.default(j.current,_):d=new P(j.current,_),Q(d)}}),H.current=!0}});var V=function(P,d,y){var E=j.current.children[0],M=E?E.innerHTML:null,W=h.current.getText();if(M==="<p><br></p>"&&(M=null),y==="api"){var te=j.current.children[0],re=document.createElement("div");if(re.innerHTML=r.value||"",ae.isEqualElement(te,re))return}if(r.maxLength){var Z=h.current.getLength();Z>r.maxLength&&h.current.deleteText(r.maxLength,Z)}r.onTextChange&&r.onTextChange({htmlValue:M,textValue:W,delta:P,source:y})},k=function(P,d,y){r.onSelectionChange&&r.onSelectionChange({range:P,oldRange:d,source:y})},Q=function(P){h.current=P,r.value&&h.current.setContents(h.current.clipboard.convert(r.value)),B(!0)};$e(function(){if(O)return h.current.on("text-change",V),h.current.on("selection-change",k),function(){h.current.off("text-change",V),h.current.off("selection-change",k)}}),$e(function(){O&&h.current&&h.current.getModule("toolbar")&&r.onLoad&&r.onLoad(h.current)},[O]),$e(function(){h.current&&!h.current.hasFocus()&&(r.value?h.current.setContents(h.current.clipboard.convert(r.value)):h.current.setText(""))},[r.value]),a.useImperativeHandle(n,function(){return{props:r,getQuill:function(){return h.current},getElement:function(){return x.current},getContent:function(){return j.current},getToolbar:function(){return N.current}}});var X=function(){var P=t({ref:N,className:p("toolbar")},g("toolbar"));if(r.showHeader===!1)return null;if(r.headerTemplate)return a.createElement("div",P,r.headerTemplate);var d=function(M,W){return t(M&&Nt({},M),g(W))},y=t({className:"ql-formats"},g("formats"));return a.createElement("div",P,a.createElement("span",y,a.createElement("select",d({className:"ql-header",defaultValue:"0"},"header"),a.createElement("option",d({value:"1"},"option"),"Heading"),a.createElement("option",d({value:"2"},"option"),"Subheading"),a.createElement("option",d({value:"0"},"option"),"Normal")),a.createElement("select",d({className:"ql-font"},"font"),a.createElement("option",d(void 0,"option")),a.createElement("option",d({value:"serif"},"option")),a.createElement("option",d({value:"monospace"},"option")))),a.createElement("span",y,a.createElement("button",d({type:"button",className:"ql-bold","aria-label":"Bold"},"bold")),a.createElement("button",d({type:"button",className:"ql-italic","aria-label":"Italic"},"italic")),a.createElement("button",d({type:"button",className:"ql-underline","aria-label":"Underline"},"underline"))),a.createElement("span",y,a.createElement("select",d({className:"ql-color"},"color")),a.createElement("select",d({className:"ql-background"},"background"))),a.createElement("span",y,a.createElement("button",d({type:"button",className:"ql-list",value:"ordered","aria-label":"Ordered List"},"list")),a.createElement("button",d({type:"button",className:"ql-list",value:"bullet","aria-label":"Unordered List"},"list")),a.createElement("select",d({className:"ql-align"},"select"),a.createElement("option",d({defaultValue:!0},"option")),a.createElement("option",d({value:"center"},"option")),a.createElement("option",d({value:"right"},"option")),a.createElement("option",d({value:"justify"},"option")))),a.createElement("span",y,a.createElement("button",d({type:"button",className:"ql-link","aria-label":"Insert Link"},"link")),a.createElement("button",d({type:"button",className:"ql-image","aria-label":"Insert Image"},"image")),a.createElement("button",d({type:"button",className:"ql-code-block","aria-label":"Insert Code Block"},"codeBlock"))),a.createElement("span",y,a.createElement("button",d({type:"button",className:"ql-clean","aria-label":"Remove Styles"},"clean"))))},I=X(),$=t({ref:j,className:p("content"),style:r.style},g("content")),J=a.createElement("div",$),G=t({className:ee(r.className,p("root"))},Ie.getOtherProps(r),g("root"));return a.createElement("div",Xe({id:r.id,ref:x},G),I,J)}));Dt.displayName="Editor";const er=({auth:e,csrf_token:n})=>{var re,Z,L,T,f;const t=a.useRef(null),i=a.useRef(null),[r,w]=a.useState([]),[g,p]=a.useState(!1),[v,x]=a.useState(null),[j,N]=a.useState(""),[h,H]=a.useState([]),U=()=>{p(!0),fetch(route("worker.customers.getAll"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":n}}).then(o=>o.json()).then(o=>{w(o.customers)}).catch(o=>{console.log(o),t.current.show({severity:"error",summary:"Hata",detail:"Müşteriler getirilirken bir hata oluştu."})}).finally(()=>{p(!1)})};a.useEffect(()=>{U()},[]);const[R,O]=a.useState([]),[B,V]=a.useState({brand:null,model:null,generation:null,year:null}),[k,Q]=a.useState(null),[X,I]=a.useState(!1),[$,J]=a.useState(""),[G,_]=a.useState(""),[P,d]=a.useState(null);a.useState(!1);const y=()=>{if($===""){t.current.show({severity:"warn",summary:"Hata",detail:"Ürün kodu boş olamaz."});return}else if(h.filter(A=>A.code===$).length>0){t.current.show({severity:"warn",summary:"Hata",detail:"Ürün zaten ekli."});return}let o=new FormData;o.append("code",$),fetch(route("worker.products.checkProduct"),{method:"POST",headers:{"X-CSRF-TOKEN":n},body:o}).then(q=>q.json()).then(q=>{q.status?(t.current.show({severity:"success",summary:"Başarılı",detail:"Ürün başarıyla eklendi."}),H(A=>[...A,{...q.product,code:q.code}]),J("")):t.current.show({severity:"error",summary:"Hata",detail:q.message})}).catch(q=>{t.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{p(!1)})},[E,M]=a.useState(""),W=()=>{let o=new FormData;o.append("customer_id",v.id),o.append("car_brand",k.brand.name),o.append("car_model",k.model.name),o.append("car_generation",k.generation.name),o.append("car_year",k.year.name),o.append("car_plate",G),o.append("car_kilometer",P),o.append("service_no",j),o.append("notes",E),R.forEach((q,A)=>{o.append(`body[${A}]`,q)}),h.map(q=>({id:q.id,code:q.code})).map((q,A)=>{o.append(`products[${A}][id]`,q.id),o.append(`products[${A}][code]`,q.code)}),o.append("brand_logo",k.brandLogo),fetch(route("worker.services.store"),{method:"POST",headers:{"X-CSRF-TOKEN":n},body:o}).then(q=>q.json()).then(q=>{q.status?(t.current.show({severity:"success",summary:"Başarılı",detail:q.message}),setTimeout(()=>{En.visit(route("worker.services.index"))},3e3)):t.current.show({severity:"error",summary:"Hata",detail:q.message})}).catch(q=>{t.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{p(!1)})},te=()=>{fetch(route("worker.services.getDigitalService"),{method:"POST",headers:{"X-CSRF-TOKEN":n}}).then(o=>o.json()).then(o=>{N(o.service_no)}).catch(o=>{t.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{p(!1)})};return s.jsxs(Cn,{user:e.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Hizmet Kaydı Ekle"}),children:[s.jsx(Pn,{title:"Hizmet Kaydı Ekle"}),s.jsx(Fn,{ref:t}),s.jsx("div",{className:"py-6",children:s.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:s.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-3",children:s.jsxs(Qn,{ref:i,style:{flexBasis:"50rem"},orientation:"vertical",linear:!0,children:[s.jsxs(me,{header:"Müşteri Seçimi",children:[s.jsx("div",{className:"flex flex-column h-12rem",children:s.jsxs(Ne,{className:"w-full md:w-14rem",children:[s.jsx(_n,{value:v,filter:!0,showClear:!0,emptyFilterMessage:"Müşteri Bulunamadı",filterBy:"name,email,phone",onChange:o=>x(o.value),options:r,optionLabel:"name",className:"w-full"}),s.jsx("label",{htmlFor:"dd-city",children:"Müşteri Seçiniz"})]})}),s.jsx("div",{className:"flex py-4",children:s.jsx(Y,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:v===null,onClick:()=>i.current.nextCallback()})})]}),s.jsxs(me,{header:"Araç Bilgileri",children:[s.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-3",children:s.jsx(ul,{onComplete:o=>{I(!0),Q(o)},onChange:(o,q)=>{I(q),Q(o)},selectedBrand:B.brand,setSelectedBrand:o=>V(q=>({...q,brand:o})),selectedModel:B.model,setSelectedModel:o=>V(q=>({...q,model:o})),selectedYear:B.year,setSelectedYear:o=>V(q=>({...q,year:o}))})}),s.jsxs("div",{className:"flex py-4 gap-2",children:[s.jsx(Y,{label:"Geri",severity:"secondary",size:"small",icon:"pi pi-arrow-left",onClick:()=>i.current.prevCallback()}),s.jsx(Y,{label:"İleri",icon:"pi pi-arrow-right",size:"small",disabled:!X,iconPos:"right",onClick:()=>i.current.nextCallback()})]})]}),s.jsxs(me,{header:"Ürün Seçimi",children:[s.jsxs("div",{className:"grid grid-cols-3 lg:grid-cols-5 gap-2",children:[s.jsx("div",{className:"col-span-2 lg:col-span-4",children:s.jsx(ye,{value:$,onChange:o=>J(o.target.value),className:"w-full",placeholder:"Ürün Kodu Giriniz"})}),s.jsx("div",{children:s.jsx(Y,{onClick:y,label:"Ekle",icon:"pi pi-plus"})})]}),s.jsx(Rn,{dataKey:"id",value:h,onChange:o=>H(o.value),itemTemplate:o=>s.jsxs("div",{className:"flex flex-wrap p-2 align-items-center gap-3",children:[s.jsx("img",{className:"w-[4rem] h-auto shadow-lg flex-shrink-0 rounded",src:`${o.image}`,alt:o.name}),s.jsxs("div",{className:"flex-1 flex flex-col gap-2 xl:mr-8",children:[s.jsx("span",{className:"font-bold",children:o.name}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("span",{children:"# SKU :"}),s.jsx("span",{children:o.sku})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("i",{className:"pi pi-tag"}),s.jsx("span",{children:o.category})]})]})]}),s.jsx("div",{className:"grid grid-rows-1",children:s.jsx("div",{className:"flex justify-end",children:s.jsx(Y,{severity:"danger",tooltip:"Listeden Çıkar",onClick:()=>H(q=>q.filter(A=>A.id!==o.id)),icon:"pi pi-trash"})})})]}),header:"Eklenen Ürünler",emptyMessage:"Ürün Bulunamadı Lütfen Üstteki Alandan Ürün Ekleyiniz."}),s.jsxs("div",{className:"flex py-4 gap-2",children:[s.jsx(Y,{label:"Geri",severity:"secondary",size:"small",icon:"pi pi-arrow-left",onClick:()=>i.current.prevCallback()}),s.jsx(Y,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:h.length===0,onClick:()=>i.current.nextCallback()})]})]}),s.jsx(me,{header:"Gövde Seçimi",children:s.jsxs("div",{children:[s.jsx("div",{className:"flex flex-column",children:s.jsx(bt,{editable:!0,onChange:o=>{O(o)},value:R})}),s.jsxs("div",{className:"flex py-4 gap-2",children:[s.jsx(Y,{label:"Geri",size:"small",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>i.current.prevCallback()}),s.jsx(Y,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:R.length===0,onClick:()=>i.current.nextCallback()})]})]})}),s.jsx(me,{header:"Notlar",children:s.jsxs("div",{children:[s.jsxs("div",{children:[s.jsx("div",{className:"my-4 mb-6",children:s.jsxs(Ne,{children:[s.jsx(ye,{className:"w-full",id:"plate-input",value:G,onChange:o=>_(o.target.value)}),s.jsx("label",{htmlFor:"plate-input",children:"Araç Plakası"})]})}),s.jsx("div",{className:"mb-6",children:s.jsxs(Ne,{children:[s.jsx(An,{className:"w-full",id:"kilometer-input",value:P,onChange:o=>d(o.value)}),s.jsx("label",{htmlFor:"kilometer-input",children:"Araç Kilometresi"})]})}),s.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[s.jsx("div",{className:"flex-1",children:s.jsxs(Ne,{children:[s.jsx(ye,{className:"w-full",id:"service-number-input",value:j,onChange:o=>N(o.target.value)}),s.jsx("label",{htmlFor:"service-number-input",children:"Hizmet Numarası"})]})}),s.jsx(Y,{icon:"pi pi-key",size:"small",label:"Dijital Kod Oluştur",loading:g,className:"p-button-success",onClick:te})]}),s.jsx("label",{htmlFor:"editor-notes",className:"font-semibold ",children:"Hizmet Notları"}),s.jsx(Dt,{className:"mt-3",itemID:"editor-notes",value:E,onTextChange:o=>M(o.htmlValue),style:{height:"320px"}})]}),s.jsxs("div",{className:"flex py-4 gap-2",children:[s.jsx(Y,{label:"Geri",size:"small",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>i.current.prevCallback()}),s.jsx(Y,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:E===""||G===""||P===null||j==="",onClick:()=>i.current.nextCallback()})]})]})}),s.jsx(me,{header:"Özet",children:s.jsxs("div",{children:[s.jsx("div",{children:s.jsxs("div",{className:"grid grid-cols-1 gap-2 lg:gap-3 lg:grid-cols-2",children:[s.jsxs("div",{className:"grid grid-rows-1 lg:grid-rows-3 gap-y-1 ",children:[s.jsxs("div",{children:[s.jsx("label",{className:"font-semibold",children:"Müşteri"}),s.jsx("div",{className:"flex items-center gap-2",children:s.jsx("span",{children:v==null?void 0:v.name})})]}),s.jsxs("div",{children:[s.jsx("label",{className:"font-semibold",children:"Ürünler"}),s.jsx("ul",{children:h.map(o=>s.jsxs("li",{className:"flex items-center gap-2 even:my-1",children:[s.jsx("img",{className:"w-8 h-8 rounded-full",src:o.image,alt:o.name}),s.jsxs("span",{children:[o.name," #",o.code]})]},o.id))})]}),s.jsxs("div",{children:[s.jsx("label",{className:"font-semibold",children:"Notlar"}),s.jsx("div",{dangerouslySetInnerHTML:{__html:E}})]}),s.jsxs("div",{children:[s.jsx("label",{className:"font-semibold",children:"Araç"}),s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx("img",{className:"w-8 h-8 rounded-full",src:k==null?void 0:k.brandLogo,alt:(re=k==null?void 0:k.brand)==null?void 0:re.name}),s.jsxs("span",{children:[(Z=k==null?void 0:k.brand)==null?void 0:Z.name," ",">>"," ",(L=k==null?void 0:k.model)==null?void 0:L.name," ",">>"," ",(T=k==null?void 0:k.generation)==null?void 0:T.name," (",(f=k==null?void 0:k.year)==null?void 0:f.name,")"]})]}),s.jsx("div",{className:"flex items-center gap-2 mb-3",children:s.jsxs("span",{children:[G," - ",Number(P).toLocaleString(),"km"]})})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"font-semibold",children:"Gövde"}),s.jsx(bt,{editable:!1,value:R,onChange:()=>{}})]})]})}),s.jsxs("div",{className:"flex py-4 gap-2",children:[s.jsx(Y,{label:"Geri",size:"small",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>i.current.prevCallback()}),s.jsx(Y,{label:"Kaydet",icon:"pi pi-save",severity:"success",size:"small",iconPos:"right",disabled:E===""||G===""||P===null||j==="",onClick:W})]})]})})]})})})})]})};export{er as default};

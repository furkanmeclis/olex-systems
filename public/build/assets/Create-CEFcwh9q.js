const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/quill-SXVkcst7.js","assets/app-DfHWa9Dj.js","assets/app-DclugBOS.css","assets/cloneDeep-DJN0yfLA.js"])))=>i.map(i=>d[i]);
import{R as h,P as ge,O as ye,U as Me,c as Y,r as i,j as l,a as xe,_ as Fe,D as je,S as Ke,A as Ue}from"./app-DfHWa9Dj.js";import{C as Se}from"./CarBody-H0XJjd-4.js";import{A as Ge}from"./AuthenticatedLayout-D7uggTCh.js";import{C as ve,u as re,a as we,h as De,i as se}from"./ripple.esm-BgxbDumr.js";import{C as Ve}from"./csstransition.esm-BhUmH3xQ.js";import{B as A}from"./button.esm-DX94dMwm.js";import{D as ce}from"./dropdown.esm-BY1Px5fx.js";import{F as J}from"./floatlabel.esm-i345XJPj.js";import{I as de}from"./inputtext.esm-CdzphA62.js";import{T as Qe}from"./toast.esm-CoMKgODT.js";import{D as Ye}from"./dataview.esm-5lEg82WY.js";import{I as Xe}from"./inputnumber.esm-tDfve9wj.js";import"./index.esm-Cq2hl7JN.js";import"./index.esm-CxUyxVcB.js";import"./index.esm-BhLCkf4C.js";import"./index.esm-t0ce8hpD.js";import"./index.esm-eg1Y0jZ8.js";import"./index.esm-DgpMajsY.js";import"./tooltip.esm-BOVBVbrd.js";import"./scrollpanel.esm-SkW0LBxI.js";import"./Dropdown-BIk6-XdJ.js";import"./tag.esm-zbDdFAbq.js";import"./motion-BG1YUUi8.js";import"./index.esm-Bck5B7Mr.js";import"./overlayservice.esm-BeGvTcOU.js";import"./index.esm-DfL7pt6i.js";import"./index.esm-Bxo1xCvC.js";import"./TransitionGroup-BYtBtipk.js";import"./index.esm-DK2z9ksQ.js";import"./paginator.esm-CImGPiRz.js";import"./index.esm-DsEs8f8S.js";function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne.apply(null,arguments)}function te(e){"@babel/helpers - typeof";return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},te(e)}function Je(e,t){if(te(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(te(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function We(e){var t=Je(e,"string");return te(t)=="symbol"?t:t+""}function oe(e,t,n){return(t=We(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ze(e){if(Array.isArray(e))return e}function Be(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,w,k,g=[],m=!0,q=!1;try{if(w=(n=n.call(e)).next,t!==0)for(;!(m=(r=w.call(n)).done)&&(g.push(r.value),g.length!==t);m=!0);}catch(C){q=!0,o=C}finally{try{if(!m&&n.return!=null&&(k=n.return(),Object(k)!==k))return}finally{if(q)throw o}}return g}}function Pe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function en(e,t){if(e){if(typeof e=="string")return Pe(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pe(e,t):void 0}}function nn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ce(e,t){return Ze(e)||Be(e,t)||en(e,t)||nn()}var tn={root:function(t){var n=t.props;return Y("p-stepper p-component",{"p-stepper-horizontal":n.orientation==="horizontal","p-stepper-vertical":n.orientation==="vertical","p-readonly":n.linear})},nav:"p-stepper-nav",stepper:{header:function(t){var n=t.isStepActive,r=t.isItemDisabled,o=t.index,w=t.headerPosition,k=t.orientation;return Y("p-stepper-header",oe({"p-highlight":n(o),"p-disabled":r(o)},"p-stepper-header-".concat(w),k==="horizontal"))},action:"p-stepper-action p-component",number:"p-stepper-number",title:"p-stepper-title",separator:"p-stepper-separator",toggleableContent:"p-stepper-toggleable-content",content:function(t){var n=t.props;return Y("p-stepper-content",{"p-toggleable-content":n.orientation==="vertical"})},panel:function(t){var n=t.props,r=t.isStepActive,o=t.index;return Y("p-stepper-panel",{"p-stepper-panel-active":n.orientation==="vertical"&&r(o)})}},panelContainer:"p-stepper-panels",start:"p-stepper-start",end:"p-stepper-end"},ln=`
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
`,ee=ve.extend({defaultProps:{__TYPE:"Stepper",activeStep:0,orientation:"horizontal",headerPosition:"right",linear:!1,onChangeStep:null,start:null,end:null},css:{classes:tn,styles:ln}});function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ne(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var me=i.memo(i.forwardRef(function(e,t){var n=re(),r=e.cx,o=n(pe(pe(pe({ref:t,id:e.id,className:r("stepper.content",{stepperpanel:e.stepperpanel,index:e.index}),role:"tabpanel","aria-labelledby":e.ariaLabelledby},e.getStepPT(e.stepperpanel,"root",e.index)),e.getStepPT(e.stepperpanel,"content",e.index)),{},{"data-p-active":e.active})),w=function(){var g=e.template;return i.createElement(g,{index:e.index,active:e.active,highlighted:e.highlighted,clickCallback:function(q){return e.onItemClick(q,e.index)},prevCallback:function(q){return e.prevCallback(q,e.index)},nextCallback:function(q){return e.nextCallback(q,e.index)}})};return i.createElement("div",o,e.template?w():e.stepperpanel)}));me.displayName="StepperContent";function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oe(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var fe=i.memo(i.forwardRef(function(e,t){var n=re(),r=e.cx,o=n(qe({ref:t,id:e.id,className:r("stepper.action"),role:"tab",type:"button",tabIndex:e.disabled?-1:void 0,"aria-controls":e.ariaControls,onClick:function(m){return e.clickCallback(m,e.index)}},e.getStepPT(e.stepperpanel,"action",e.index))),w=n(qe({className:r("stepper.number")},e.getStepPT(e.stepperpanel,"number",e.index))),k=n(qe({className:r("stepper.title")},e.getStepPT(e.stepperpanel,"title",e.index)));return e.template?e.template():i.createElement("button",o,i.createElement("span",w,e.index+1),i.createElement("span",k,e.getStepProp(e.stepperpanel,"header")))}));fe.displayName="StepperHeader";function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ee(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var be=i.memo(i.forwardRef(function(e,t){var n=re(),r=n(rn({ref:t,"aria-hidden":!0,className:e.separatorClass},e.getStepPT(e.stepperpanel,"separator",e.index)));return e.template?e.template():i.createElement("span",r)}));be.displayName="StepperSeparator";function ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ze(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ze(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var on=h.memo(h.forwardRef(function(e,t){var n=re(),r=h.useContext(ge),o=ee.getProps(e,r),w=ye.getJSXElement(o.start,o),k=ye.getJSXElement(o.end,o),g=ee.setMetaData({props:o}),m=g.ptm,q=g.cx,C=g.isUnstyled,I=g.ptmo,b=h.useState(o.id),L=Ce(b,2),M=L[0],z=L[1],V=h.useState(o.activeStep),D=Ce(V,2),N=D[0],f=D[1],d=h.useRef();we(ee.css.styles,C,{name:"stepper"});var S=n({className:q("start")},m("start")),R=n({className:q("end")},m("end"));De(function(){M||z(Me())}),se(function(){o.activeStep>=0&&o.activeStep<=T().length-1&&P(void 0,o.activeStep)},[o.activeStep]);var _=function(s,a){var v;return s==null||(v=s.props)===null||v===void 0?void 0:v[a]},W=function(s,a){return _(s,"header")||a},F=function(s){return s.type.displayName==="StepperPanel"},j=function(s){return N===s},y=function(s){return o.linear&&!j(s)},P=function(s,a){f(a),o.onChangeStep&&o.onChangeStep({originalEvent:s,index:a})},p=function(s){return"".concat(M,"_").concat(s,"_header_action")},x=function(s){return"".concat(M,"_").concat(s,"content")},T=function(){return h.Children.toArray(o.children).reduce(function(s,a){return F(a)?s.push(a):a&&Array.isArray(a)&&h.Children.toArray(a.props.children).forEach(function(v){F(v)&&s.push(v)}),s},[])},H=function(s,a){a!==0&&P(s,a-1)},K=function(s,a){a!==T().length-1&&P(s,a+1)},E=function(s,a,v){var G=T().length,Q={props:s.props,parent:{props:o},context:{index:v,count:G,first:v===0,last:v===G-1,active:j(v),highlighted:v<N,disabled:y(v)}};return n(m("stepperpanel.".concat(a),{stepperpanel:Q}),m("stepperpanel.".concat(a),Q),I(_(s,"pt"),a,Q))},U=function(s,a){if(o.linear){s.preventDefault();return}a!==N&&P(s,a)},Z=function(){return T().map(function(s,a){var v,G,Q=n(X({className:Y(q("stepper.header",{isStepActive:j,isItemDisabled:y,step:s,index:a,headerPosition:o.headerPosition,orientation:o.orientation})),"aria-current":j(a)&&"step",role:"presentation","data-p-highlight":j(a),"data-p-disabled":y(a),"data-p-active":j(a)},E(s,"header",a)));return h.createElement("li",ne({key:W(s,a)},Q),h.createElement(fe,{id:p(a),template:(v=s.children)===null||v===void 0?void 0:v.header,stepperpanel:s,index:a,disabled:y(a),active:j(a),highlighted:a<N,ariaControls:x(a),clickCallback:U,getStepPT:E,getStepProp:_,cx:q}),a!==T().length-1&&h.createElement(be,{template:(G=s.children)===null||G===void 0?void 0:G.separator,separatorClass:q("stepper.separator"),stepperpanel:s,index:a,active:j(a),highlighted:a<N,getStepPT:E}))})};h.useImperativeHandle(t,function(){return{getElement:function(){return d.current},getActiveStep:function(){return N},setActiveStep:function(s){return f(s)},nextCallback:function(s){return K(s,N)},prevCallback:function(s){return H(s,N)}}});var ie=function(){return T().map(function(s,a){var v;return j(a)?h.createElement(me,{key:x(a),id:x(a),tempate:s==null||(v=s.children)===null||v===void 0?void 0:v.content,stepperpanel:s,index:a,active:j(a),highlighted:a<N,clickCallback:U,prevCallback:H,nextCallback:K,getStepPT:E,ariaLabelledby:p(a),ptm:m,cx:q}):null})},c=function(){var s=Z(),a=n({className:Y(q("nav")),ref:d},m("nav")),v=n({className:q("panelContainer")},m("panelContainer"));return h.createElement(h.Fragment,null,h.createElement("ul",a,s),h.createElement("div",v,ie()))},u=function(){return T().map(function(s,a){var v,G,Q,ke=h.createRef(null),He=n(X(X(X({ref:d,className:q("stepper.panel",{props:o,index:a,isStepActive:j}),"aria-current":j(a)&&"step"},E(s,"root",a)),E(s,"panel",a)),{},{"data-p-highlight":j(a),"data-p-disabled":y(a),"data-p-active":j(a)})),$e=n(X({className:q("stepper.header",{step:s,isStepActive:j,isItemDisabled:y,index:a})},E(s,"header",a))),Le=n(X(X({classNames:q("stepper.content")},E(s,"transition",a)),{},{timeout:{enter:1e3,exit:450},in:j(a),unmountOnExit:!0})),Ie=n(X({ref:ke,className:q("stepper.toggleableContent")},E(s,"toggleableContent",a)));return h.createElement("div",ne({key:W(s,a)},He),h.createElement("div",$e,h.createElement(fe,{id:p(a),template:(v=s.children)===null||v===void 0?void 0:v.header,stepperpanel:s,index:a,disabled:y(a),active:j(a),highlighted:a<N,ariaControls:x(a),clickCallback:U,getStepPT:E,getStepProp:_,cx:q})),h.createElement(Ve,ne({nodeRef:ke},Le),h.createElement("div",Ie,a!==T().length-1&&h.createElement(be,{template:(G=s.children)===null||G===void 0?void 0:G.separator,separatorClass:q("stepper.separator"),stepperpanel:s,index:a,active:j(a),highlighted:a<N,getStepPT:E}),h.createElement(me,{key:x(a),id:x(a),tempate:s==null||(Q=s.children)===null||Q===void 0?void 0:Q.content,stepperpanel:s,index:a,active:j(a),highlighted:a<N,clickCallback:U,prevCallback:H,nextCallback:K,getStepPT:E,ariaLabelledby:p(a),ptm:m,cx:q}))))})},$=n({className:Y(q("root")),role:"tablist"},ee.getOtherProps(o),m("root"));return h.createElement("div",$,w&&h.createElement("div",S,w),o.orientation==="horizontal"&&c(),o.orientation==="vertical"&&u(),k&&h.createElement("div",R,k))}));ee.displayName="StepperBase";var an="",ue=ve.extend({defaultProps:{__TYPE:"StepperPanel",children:void 0,header:null},css:{styles:an}}),B=i.memo(i.forwardRef(function(e,t){var n=i.useContext(ge),r=ue.getProps(e,n),o=ue.setMetaData({props:r}),w=o.isUnstyled;return we(ue.css.styles,w,{name:"StepperPanel"}),i.createElement("span",{ref:t},r.children)}));B.displayName="StepperPanel";const sn=({selectedBrand:e,setSelectedBrand:t,selectedModel:n,setSelectedModel:r,selectedYear:o,setSelectedYear:w,onChange:k,onComplete:g})=>{const[m,q]=i.useState([]),[C,I]=i.useState([]),[b,L]=i.useState(""),[M,z]=i.useState(!1);i.useEffect(()=>{(async()=>{try{z(!0);const S=await xe.post(route("super.car.brands.get"));q(S.data)}catch(S){console.error("Markalar yüklenirken hata oluştu:",S)}finally{z(!1)}})()},[]),i.useEffect(()=>{(async()=>{if(e)try{z(!0);const S=await xe.post(route("super.car.brands.models.get",e.id));I(S.data)}catch(S){console.error("Modeller yüklenirken hata oluştu:",S)}finally{z(!1)}else I([])})()},[e]),i.useEffect(()=>{if(o!==null&&g!==void 0){let d={brand:e,model:n,generation:{name:b,modelYear:"",non:!0},brandLogo:e==null?void 0:e.logo,year:o};g(d)}},[o]),i.useEffect(()=>{if(k!==void 0){let d={brand:e,model:n,generation:{name:b,modelYear:"",non:!0},brandLogo:e==null?void 0:e.logo,year:o};k(d,o!==null)}},[e,n,o,b]);async function V(d){let S=[];for(let R=1975;R<=Number(new Date().getFullYear());R++)S.push({name:R});return S.sort((R,_)=>_.name-R.name),S}const D=(d,S)=>d?l.jsxs("div",{className:"flex items-center",children:[(e==null?void 0:e.logo)&&l.jsx("img",{src:e.logo,alt:d.name,className:"w-6 h-6 mr-2"}),l.jsx("span",{children:d.name})]}):l.jsx("span",{children:S.placeholder}),[N,f]=i.useState([]);return i.useEffect(()=>{(async()=>{const S=await V();f(S)})()},[]),l.jsxs(l.Fragment,{children:[l.jsxs(J,{className:"w-full md:w-14rem mt-4",children:[l.jsx(ce,{inputId:"dd-brand",value:e,valueTemplate:D,onChange:d=>{t(d.value),r(null),w(null)},options:m,optionLabel:"name",placeholder:"Araç Markası Seçiniz",virtualScrollerOptions:{itemSize:38},checkmark:!0,filter:!0,showFilterClear:!0,highlightOnSelect:!1,className:"w-full md:w-14rem",loading:M,itemTemplate:d=>l.jsxs("div",{className:"flex items-center",children:[d.logo&&l.jsx("img",{src:d.logo,alt:d.name,className:"w-8 h-8 mr-2"}),l.jsx("span",{children:d.name})]})}),l.jsx("label",{htmlFor:"dd-brand",children:"Araç Markası"})]}),e&&l.jsxs(J,{className:"w-full md:w-14rem mt-4",children:[l.jsx(ce,{inputId:"dd-model",value:n,onChange:d=>{r(d.value),w(null)},options:C,optionLabel:"name",placeholder:"Araç Modelini Seçiniz",valueTemplate:D,virtualScrollerOptions:{itemSize:38},checkmark:!0,filter:!0,showFilterClear:!0,highlightOnSelect:!1,className:"w-full md:w-14rem",loading:M,itemTemplate:d=>l.jsxs("div",{className:"flex items-center",children:[e.logo&&l.jsx("img",{src:e.logo,alt:d.name,className:"w-8 h-8 mr-2"}),l.jsx("span",{children:d.name})]})}),l.jsx("label",{htmlFor:"dd-model",children:"Araç Modeli"})]}),n&&l.jsxs(J,{className:"w-full md:w-14rem mt-4",children:[l.jsx(de,{id:"dd-generation-text",value:b,onChange:d=>L(d.target.value),className:"w-full md:w-14rem"}),l.jsx("label",{htmlFor:"dd-generation-text",children:"Paket Detayı"})]}),n&&l.jsxs(J,{className:"w-full md:w-14rem mt-4",children:[l.jsx(ce,{inputId:"dd-year",value:o,onChange:d=>w(d.value),options:N,placeholder:"Araç Yılı Seçiniz",virtualScrollerOptions:{itemSize:38},valueTemplate:D,checkmark:!0,optionLabel:"name",filter:!0,showFilterClear:!0,highlightOnSelect:!1,className:"w-full md:w-14rem",itemTemplate:d=>l.jsxs("div",{className:"flex items-center",children:[e.logo&&l.jsx("img",{src:e.logo,alt:d.name+" .yıl",className:"w-8 h-8 mr-2"}),l.jsx("span",{children:d.name})]})}),l.jsx("label",{htmlFor:"dd-year",children:"Araç Yılı"})]})]})};function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},he.apply(null,arguments)}function le(e){"@babel/helpers - typeof";return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},le(e)}function cn(e,t){if(le(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(le(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function dn(e){var t=cn(e,"string");return le(t)=="symbol"?t:t+""}function pn(e,t,n){return(t=dn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qn(e){if(Array.isArray(e))return e}function un(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,w,k,g=[],m=!0,q=!1;try{if(w=(n=n.call(e)).next,t!==0)for(;!(m=(r=w.call(n)).done)&&(g.push(r.value),g.length!==t);m=!0);}catch(C){q=!0,o=C}finally{try{if(!m&&n.return!=null&&(k=n.return(),Object(k)!==k))return}finally{if(q)throw o}}return g}}function Te(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function mn(e,t){if(e){if(typeof e=="string")return Te(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Te(e,t):void 0}}function fn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bn(e,t){return qn(e)||un(e,t)||mn(e,t)||fn()}var hn={root:function(t){var n=t.props;return Y("",n.className)},toolbar:"",content:""},gn=`
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
`,ae=ve.extend({defaultProps:{__TYPE:"Editor",id:null,value:null,style:null,className:null,placeholder:null,readOnly:!1,modules:null,formats:null,theme:"snow",showHeader:!0,headerTemplate:null,onTextChange:null,onSelectionChange:null,onLoad:null,maxLength:null,children:void 0},css:{classes:hn,styles:gn}});function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_e(Object(n),!0).forEach(function(r){pn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var vn=function(){try{return Quill}catch{return null}}(),Re=i.memo(i.forwardRef(function(e,t){var n=re(),r=i.useContext(ge),o=ae.getProps(e,r),w=ae.setMetaData({props:o}),k=w.ptm,g=w.cx,m=w.isUnstyled;we(ae.css.styles,m,{name:"editor"});var q=i.useRef(null),C=i.useRef(null),I=i.useRef(null),b=i.useRef(null),L=i.useRef(!1),M=i.useState(!1),z=bn(M,2),V=z[0],D=z[1];De(function(){if(!L.current){var y={modules:Ae({toolbar:o.showHeader?I.current:!1},o.modules),placeholder:o.placeholder,readOnly:o.readOnly,theme:o.theme,formats:o.formats};vn?S(new Quill(C.current,y)):Fe(()=>import("./quill-SXVkcst7.js"),__vite__mapDeps([0,1,2,3])).then(function(P){if(P&&je.isExist(C.current)){var p;P.default?p=new P.default(C.current,y):p=new P(C.current,y),S(p)}}),L.current=!0}});var N=function(P,p,x){var T=C.current.children[0],H=T?T.innerHTML:null,K=b.current.getText();if(H==="<p><br></p>"&&(H=null),x==="api"){var E=C.current.children[0],U=document.createElement("div");if(U.innerHTML=o.value||"",je.isEqualElement(E,U))return}if(o.maxLength){var Z=b.current.getLength();Z>o.maxLength&&b.current.deleteText(o.maxLength,Z)}o.onTextChange&&o.onTextChange({htmlValue:H,textValue:K,delta:P,source:x})},f=function(P,p,x){o.onSelectionChange&&o.onSelectionChange({range:P,oldRange:p,source:x})},d=i.useRef(o.value);d.current=o.value;var S=function(P){b.current=P,d.current&&P.setContents(P.clipboard.convert({html:d.current,text:""})),D(!0)};se(function(){if(V)return b.current.on("text-change",N),b.current.on("selection-change",f),function(){b.current.off("text-change",N),b.current.off("selection-change",f)}}),se(function(){V&&b.current&&b.current.getModule("toolbar")&&o.onLoad&&o.onLoad(b.current)},[V]),se(function(){b.current&&!b.current.hasFocus()&&(o.value?b.current.setContents(b.current.clipboard.convert({html:o.value,text:""})):b.current.setText(""))},[o.value]),i.useImperativeHandle(t,function(){return{props:o,getQuill:function(){return b.current},getElement:function(){return q.current},getContent:function(){return C.current},getToolbar:function(){return I.current}}});var R=function(){var P=n({ref:I,className:g("toolbar")},k("toolbar"));if(o.showHeader===!1)return null;if(o.headerTemplate)return i.createElement("div",P,o.headerTemplate);var p=function(H,K){return n(H&&Ae({},H),k(K))},x=n({className:"ql-formats"},k("formats"));return i.createElement("div",P,i.createElement("span",x,i.createElement("select",p({className:"ql-header",defaultValue:"0"},"header"),i.createElement("option",p({value:"1"},"option"),"Heading"),i.createElement("option",p({value:"2"},"option"),"Subheading"),i.createElement("option",p({value:"0"},"option"),"Normal")),i.createElement("select",p({className:"ql-font"},"font"),i.createElement("option",p(void 0,"option")),i.createElement("option",p({value:"serif"},"option")),i.createElement("option",p({value:"monospace"},"option")))),i.createElement("span",x,i.createElement("button",p({type:"button",className:"ql-bold","aria-label":"Bold"},"bold")),i.createElement("button",p({type:"button",className:"ql-italic","aria-label":"Italic"},"italic")),i.createElement("button",p({type:"button",className:"ql-underline","aria-label":"Underline"},"underline"))),i.createElement("span",x,i.createElement("select",p({className:"ql-color"},"color")),i.createElement("select",p({className:"ql-background"},"background"))),i.createElement("span",x,i.createElement("button",p({type:"button",className:"ql-list",value:"ordered","aria-label":"Ordered List"},"list")),i.createElement("button",p({type:"button",className:"ql-list",value:"bullet","aria-label":"Unordered List"},"list")),i.createElement("select",p({className:"ql-align"},"select"),i.createElement("option",p({defaultValue:!0},"option")),i.createElement("option",p({value:"center"},"option")),i.createElement("option",p({value:"right"},"option")),i.createElement("option",p({value:"justify"},"option")))),i.createElement("span",x,i.createElement("button",p({type:"button",className:"ql-link","aria-label":"Insert Link"},"link")),i.createElement("button",p({type:"button",className:"ql-image","aria-label":"Insert Image"},"image")),i.createElement("button",p({type:"button",className:"ql-code-block","aria-label":"Insert Code Block"},"codeBlock"))),i.createElement("span",x,i.createElement("button",p({type:"button",className:"ql-clean","aria-label":"Remove Styles"},"clean"))))},_=R(),W=n({ref:C,className:g("content"),style:o.style},k("content")),F=i.createElement("div",W),j=n({className:Y(o.className,g("root"))},ae.getOtherProps(o),k("root"));return i.createElement("div",he({id:o.id,ref:q},j),_,F)}));Re.displayName="Editor";const Wn=({auth:e,csrf_token:t})=>{var K,E,U,Z,ie;const n=i.useRef(null),r=i.useRef(null),[o,w]=i.useState([]),[k,g]=i.useState(!1),[m,q]=i.useState(null),[C,I]=i.useState(""),[b,L]=i.useState([]),M=()=>{g(!0),fetch(route("worker.customers.getAll"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":t}}).then(c=>c.json()).then(c=>{w(c.customers)}).catch(c=>{console.log(c),n.current.show({severity:"error",summary:"Hata",detail:"Müşteriler getirilirken bir hata oluştu."})}).finally(()=>{g(!1)})};i.useEffect(()=>{M()},[]);const[z,V]=i.useState([]),[D,N]=i.useState({brand:null,model:null,generation:null,year:null}),[f,d]=i.useState(null),[S,R]=i.useState(!1),[_,W]=i.useState(""),[F,j]=i.useState(""),[y,P]=i.useState(null);i.useState(!1);const p=()=>{if(_===""){n.current.show({severity:"warn",summary:"Hata",detail:"Ürün kodu boş olamaz."});return}else if(b.filter($=>$.code===_).length>0){n.current.show({severity:"warn",summary:"Hata",detail:"Ürün zaten ekli."});return}let c=new FormData;c.append("code",_),fetch(route("worker.products.checkProduct"),{method:"POST",headers:{"X-CSRF-TOKEN":t},body:c}).then(u=>u.json()).then(u=>{u.status?(n.current.show({severity:"success",summary:"Başarılı",detail:"Ürün başarıyla eklendi."}),L($=>[...$,{...u.product,code:u.code}]),W("")):n.current.show({severity:"error",summary:"Hata",detail:u.message})}).catch(u=>{n.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{g(!1)})},[x,T]=i.useState(""),H=()=>{let c=new FormData;c.append("customer_id",m.id),c.append("car_brand",f.brand.name),c.append("car_model",f.model.name),c.append("car_generation",f.generation.name),c.append("car_year",f.year.name),c.append("car_plate",F),c.append("car_kilometer",y),c.append("service_no",C),c.append("notes",x),z.forEach((u,$)=>{c.append(`body[${$}]`,u)}),b.map(u=>({id:u.id,code:u.code})).map((u,$)=>{c.append(`products[${$}][id]`,u.id),c.append(`products[${$}][code]`,u.code)}),c.append("brand_logo",f.brandLogo),fetch(route("worker.services.store"),{method:"POST",headers:{"X-CSRF-TOKEN":t},body:c}).then(u=>u.json()).then(u=>{u.status?(n.current.show({severity:"success",summary:"Başarılı",detail:u.message}),setTimeout(()=>{Ue.visit(route("worker.services.index"))},3e3)):n.current.show({severity:"error",summary:"Hata",detail:u.message})}).catch(u=>{n.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{g(!1)})};return l.jsxs(Ge,{user:e.user,header:l.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Hizmet Kaydı Ekle"}),children:[l.jsx(Ke,{title:"Hizmet Kaydı Ekle"}),l.jsx(Qe,{ref:n}),l.jsx("div",{className:"py-6",children:l.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:l.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-3",children:l.jsxs(on,{ref:r,style:{flexBasis:"50rem"},orientation:"vertical",linear:!0,children:[l.jsxs(B,{header:"Müşteri Seçimi",children:[l.jsx("div",{className:"flex flex-column h-12rem",children:l.jsxs(J,{className:"w-full md:w-14rem",children:[l.jsx(ce,{value:m,filter:!0,showClear:!0,emptyFilterMessage:"Müşteri Bulunamadı",filterBy:"name,email,phone",onChange:c=>q(c.value),options:o,optionLabel:"name",className:"w-full"}),l.jsx("label",{htmlFor:"dd-city",children:"Müşteri Seçiniz"})]})}),l.jsx("div",{className:"flex py-4",children:l.jsx(A,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:m===null,onClick:()=>r.current.nextCallback()})})]}),l.jsxs(B,{header:"Araç Bilgileri",children:[l.jsx("div",{className:"grid grid-cols-2 gap-3",children:l.jsx(sn,{onComplete:c=>{R(!0),d(c)},onChange:(c,u)=>{R(u),d(c)},selectedBrand:D.brand,setSelectedBrand:c=>N(u=>({...u,brand:c})),selectedModel:D.model,setSelectedModel:c=>N(u=>({...u,model:c})),selectedYear:D.year,setSelectedYear:c=>N(u=>({...u,year:c}))})}),l.jsxs("div",{className:"flex py-4 gap-2",children:[l.jsx(A,{label:"Geri",severity:"secondary",size:"small",icon:"pi pi-arrow-left",onClick:()=>r.current.prevCallback()}),l.jsx(A,{label:"İleri",icon:"pi pi-arrow-right",size:"small",disabled:!S,iconPos:"right",onClick:()=>r.current.nextCallback()})]})]}),l.jsxs(B,{header:"Ürün Seçimi",children:[l.jsxs("div",{className:"grid grid-cols-3 lg:grid-cols-5 gap-2",children:[l.jsx("div",{className:"col-span-2 lg:col-span-4",children:l.jsx(de,{value:_,onChange:c=>W(c.target.value),className:"w-full",placeholder:"Ürün Kodu Giriniz"})}),l.jsx("div",{children:l.jsx(A,{onClick:p,label:"Ekle",icon:"pi pi-plus"})})]}),l.jsx(Ye,{dataKey:"id",value:b,onChange:c=>L(c.value),itemTemplate:c=>l.jsxs("div",{className:"flex flex-wrap p-2 align-items-center gap-3",children:[l.jsx("img",{className:"w-[4rem] h-auto shadow-lg flex-shrink-0 rounded",src:`${c.image}`,alt:c.name}),l.jsxs("div",{className:"flex-1 flex flex-col gap-2 xl:mr-8",children:[l.jsx("span",{className:"font-bold",children:c.name}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("span",{children:"# SKU :"}),l.jsx("span",{children:c.sku})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("i",{className:"pi pi-tag"}),l.jsx("span",{children:c.category})]})]})]}),l.jsx("div",{className:"grid grid-rows-1",children:l.jsx("div",{className:"flex justify-end",children:l.jsx(A,{severity:"danger",tooltip:"Listeden Çıkar",onClick:()=>L(u=>u.filter($=>$.id!==c.id)),icon:"pi pi-trash"})})})]}),header:"Eklenen Ürünler",emptyMessage:"Ürün Bulunamadı Lütfen Üstteki Alandan Ürün Ekleyiniz."}),l.jsxs("div",{className:"flex py-4 gap-2",children:[l.jsx(A,{label:"Geri",severity:"secondary",size:"small",icon:"pi pi-arrow-left",onClick:()=>r.current.prevCallback()}),l.jsx(A,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:b.length===0,onClick:()=>r.current.nextCallback()})]})]}),l.jsx(B,{header:"Gövde Seçimi",children:l.jsxs("div",{children:[l.jsx("div",{className:"flex flex-column",children:l.jsx(Se,{editable:!0,onChange:c=>{V(c)},value:z})}),l.jsxs("div",{className:"flex py-4 gap-2",children:[l.jsx(A,{label:"Geri",size:"small",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>r.current.prevCallback()}),l.jsx(A,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:z.length===0,onClick:()=>r.current.nextCallback()})]})]})}),l.jsx(B,{header:"Notlar",children:l.jsxs("div",{children:[l.jsxs("div",{children:[l.jsx("div",{className:"my-4 mb-6",children:l.jsxs(J,{children:[l.jsx(de,{className:"w-full",id:"plate-input",value:F,onChange:c=>j(c.target.value)}),l.jsx("label",{htmlFor:"plate-input",children:"Araç Plakası"})]})}),l.jsx("div",{className:"mb-6",children:l.jsxs(J,{children:[l.jsx(Xe,{className:"w-full",id:"kilometer-input",value:y,onChange:c=>P(c.value)}),l.jsx("label",{htmlFor:"kilometer-input",children:"Araç Kilometresi"})]})}),l.jsx("div",{className:"mb-6",children:l.jsxs(J,{children:[l.jsx(de,{className:"w-full",id:"service-number-input",value:C,onChange:c=>I(c.target.value)}),l.jsx("label",{htmlFor:"service-number-input",children:"Hizmet Numarası"})]})}),l.jsx("label",{htmlFor:"editor-notes",className:"font-semibold ",children:"Hizmet Notları"}),l.jsx(Re,{className:"mt-3",itemID:"editor-notes",value:x,onTextChange:c=>T(c.htmlValue),style:{height:"320px"}})]}),l.jsxs("div",{className:"flex py-4 gap-2",children:[l.jsx(A,{label:"Geri",size:"small",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>r.current.prevCallback()}),l.jsx(A,{label:"İleri",icon:"pi pi-arrow-right",size:"small",iconPos:"right",disabled:x===""||F===""||y===null||C==="",onClick:()=>r.current.nextCallback()})]})]})}),l.jsx(B,{header:"Özet",children:l.jsxs("div",{children:[l.jsx("div",{children:l.jsxs("div",{className:"grid grid-cols-1 gap-2 lg:gap-3 lg:grid-cols-2",children:[l.jsxs("div",{className:"grid grid-rows-1 lg:grid-rows-3 gap-y-1 ",children:[l.jsxs("div",{children:[l.jsx("label",{className:"font-semibold",children:"Müşteri"}),l.jsx("div",{className:"flex items-center gap-2",children:l.jsx("span",{children:m==null?void 0:m.name})})]}),l.jsxs("div",{children:[l.jsx("label",{className:"font-semibold",children:"Ürünler"}),l.jsx("ul",{children:b.map(c=>l.jsxs("li",{className:"flex items-center gap-2 even:my-1",children:[l.jsx("img",{className:"w-8 h-8 rounded-full",src:c.image,alt:c.name}),l.jsxs("span",{children:[c.name," #",c.code]})]},c.id))})]}),l.jsxs("div",{children:[l.jsx("label",{className:"font-semibold",children:"Notlar"}),l.jsx("div",{dangerouslySetInnerHTML:{__html:x}})]}),l.jsxs("div",{children:[l.jsx("label",{className:"font-semibold",children:"Araç"}),l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("img",{className:"w-8 h-8 rounded-full",src:f==null?void 0:f.brandLogo,alt:(K=f==null?void 0:f.brand)==null?void 0:K.name}),l.jsxs("span",{children:[(E=f==null?void 0:f.brand)==null?void 0:E.name," >> ",(U=f==null?void 0:f.model)==null?void 0:U.name," >> ",(Z=f==null?void 0:f.generation)==null?void 0:Z.name," (",(ie=f==null?void 0:f.year)==null?void 0:ie.name,")"]})]}),l.jsx("div",{className:"flex items-center gap-2 mb-3",children:l.jsxs("span",{children:[F," - ",Number(y).toLocaleString(),"km"]})})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"font-semibold",children:"Gövde"}),l.jsx(Se,{editable:!1,value:z,onChange:()=>{}})]})]})}),l.jsxs("div",{className:"flex py-4 gap-2",children:[l.jsx(A,{label:"Geri",size:"small",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>r.current.prevCallback()}),l.jsx(A,{label:"Kaydet",icon:"pi pi-save",severity:"success",size:"small",iconPos:"right",disabled:x===""||F===""||y===null||C==="",onClick:H})]})]})})]})})})})]})};export{Wn as default};

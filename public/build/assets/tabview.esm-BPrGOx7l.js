import{O as I,r as u,P as Et,U as xt,c as L,D as p,I as D,f as ke}from"./app-avhlPhiM.js";import{C as _e,u as Ot,a as At,h as Nt,i as De,R as Q}from"./ripple.esm-BqSoC-Lb.js";import{C as kt}from"./index.esm-DpvTIFHU.js";import{C as Dt}from"./index.esm-DLi-8pBF.js";import{T as Bt}from"./index.esm-DwzZvLdg.js";function Z(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=n[r];return s}function Rt(n){if(Array.isArray(n))return Z(n)}function _t(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function je(n,t){if(n){if(typeof n=="string")return Z(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(n,t)}}function jt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ht(n){return Rt(n)||_t(n)||je(n)||jt()}function R(n){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(n)}function Kt(n,t){if(R(n)!=="object"||n===null)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var s=r.call(n,t||"default");if(R(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Ut(n){var t=Kt(n,"string");return R(t)==="symbol"?t:String(t)}function He(n,t,r){return t=Ut(t),t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function Lt(n){if(Array.isArray(n))return n}function $t(n,t){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var s,l,b,y,d=[],P=!0,_=!1;try{if(b=(r=r.call(n)).next,t===0){if(Object(r)!==r)return;P=!1}else for(;!(P=(s=b.call(r)).done)&&(d.push(s.value),d.length!==t);P=!0);}catch(j){_=!0,l=j}finally{try{if(!P&&r.return!=null&&(y=r.return(),Object(y)!==y))return}finally{if(_)throw l}}return d}}function Vt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(n,t){return Lt(n)||$t(n,t)||je(n,t)||Vt()}function Be(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),r.push.apply(r,s)}return r}function $(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Be(Object(r),!0).forEach(function(s){He(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}var Wt={navcontent:"p-tabview-nav-content",nav:"p-tabview-nav",inkbar:"p-tabview-ink-bar",panelcontainer:function(t){var r=t.props;return L("p-tabview-panels",r.panelContainerClassName)},prevbutton:"p-tabview-nav-prev p-tabview-nav-btn p-link",nextbutton:"p-tabview-nav-next p-tabview-nav-btn p-link",root:function(t){var r=t.props;return L("p-tabview p-component",{"p-tabview-scrollable":r.scrollable},r.className)},navcontainer:"p-tabview-nav-container",tab:{header:function(t){var r=t.selected,s=t.disabled,l=t.headerClassName,b=t._className;return L("p-unselectable-text",{"p-tabview-selected p-highlight":r,"p-disabled":s},l,b)},headertitle:"p-tabview-title",headeraction:"p-tabview-nav-link",closeIcon:"p-tabview-close",content:function(t){var r=t.props,s=t.selected,l=t.getTabProp,b=t.tab,y=t.isSelected,d=t.shouldUseTab,P=t.index;return d(b,P)&&(!r.renderActiveOnly||y(P))?L(l(b,"contentClassName"),l(b,"className"),"p-tabview-panel",{"p-hidden":!s}):void 0}}},Ft=`
@layer primereact {
    .p-tabview-nav-container {
        position: relative;
    }
    
    .p-tabview-scrollable .p-tabview-nav-container {
        overflow: hidden;
    }
    
    .p-tabview-nav-content {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
        position: relative;
    }
    
    .p-tabview-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex: 1 1 auto;
    }
    
    .p-tabview-nav-link {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        overflow: hidden;
    }
    
    .p-tabview-ink-bar {
        display: none;
        z-index: 1;
    }
    
    .p-tabview-nav-link:focus {
        z-index: 1;
    }
    
    .p-tabview-close {
        z-index: 1;
    }
    
    .p-tabview-title {
        line-height: 1;
        white-space: nowrap;
    }
    
    .p-tabview-nav-btn {
        position: absolute;
        top: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-tabview-nav-prev {
        left: 0;
    }
    
    .p-tabview-nav-next {
        right: 0;
    }
    
    .p-tabview-nav-content::-webkit-scrollbar {
        display: none;
    }
}
`,Jt={tab:{header:function(t){var r=t.headerStyle,s=t._style;return $($({},r||{}),s||{})},content:function(t){var r=t.props,s=t.getTabProp,l=t.tab,b=t.isSelected,y=t.shouldUseTab,d=t.index;return y(l,d)&&(!r.renderActiveOnly||b(d))?$($({},s(l,"contentStyle")||{}),s(l,"style")||{}):void 0}}},V=_e.extend({defaultProps:{__TYPE:"TabView",id:null,activeIndex:0,className:null,onBeforeTabChange:null,onBeforeTabClose:null,onTabChange:null,onTabClose:null,panelContainerClassName:null,panelContainerStyle:null,renderActiveOnly:!0,scrollable:!1,style:null,children:void 0},css:{classes:Wt,styles:Ft,inlineStyles:Jt}}),E=_e.extend({defaultProps:{__TYPE:"TabPanel",children:void 0,className:null,closable:!1,closeIcon:null,contentClassName:null,contentStyle:null,disabled:!1,header:null,headerClassName:null,headerStyle:null,headerTemplate:null,leftIcon:null,nextButton:null,prevButton:null,rightIcon:null,style:null,visible:!0},getCProp:function(t,r){return I.getComponentProp(t,r,E.defaultProps)},getCProps:function(t){return I.getComponentProps(t,E.defaultProps)},getCOtherProps:function(t){return I.getComponentDiffProps(t,E.defaultProps)}});function Re(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),r.push.apply(r,s)}return r}function W(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Re(Object(r),!0).forEach(function(s){He(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Re(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}var Mt=function(){},Xt=u.forwardRef(function(n,t){var r=Ot(),s=u.useContext(Et),l=V.getProps(n,s),b=u.useState(l.id),y=B(b,2),d=y[0],P=y[1],_=u.useState(!0),j=B(_,2),ee=j[0],te=j[1],Ke=u.useState(!1),ne=B(Ke,2),re=ne[0],ae=ne[1],Ue=u.useState([]),oe=B(Ue,2),T=oe[0],le=oe[1],Le=u.useState(l.activeIndex),ie=B(Le,2),H=ie[0],ce=ie[1],se=u.useRef(null),g=u.useRef(null),K=u.useRef(null),F=u.useRef(null),ue=u.useRef(null),de=u.useRef(null),J=u.useRef({}),M=l.onTabChange?l.activeIndex:H,pe=u.Children.count(l.children),ve={props:l,state:{id:d,isPrevButtonDisabled:ee,isNextButtonDisabled:re,hiddenTabsState:T,activeIndex:H}},x=V.setMetaData(W({},ve)),v=x.ptm,$e=x.ptmo,f=x.cx,fe=x.sx,Ve=x.isUnstyled;At(V.css.styles,Ve,{name:"tabview"});var S=function(e,a,o){var i={props:e.props,parent:ve,context:{index:o,count:pe,first:o===0,last:o===pe-1,active:o==H,disabled:w(e,"disabled")}};return r(v("tab.".concat(a),{tab:i}),v("tabpanel.".concat(a),{tabpanel:i}),v("tabpanel.".concat(a),i),$e(w(e,"pt"),a,i))},O=function(e){return e===M},w=function(e,a){return E.getCProp(e,a)},A=function(e){return e&&w(e,"visible")&&I.isValidChild(e,"TabPanel")&&T.every(function(a){return a!==e.key})},We=function(e){var a=u.Children.map(l.children,function(o,i){if(A(o))return{tab:o,index:i}});return a.find(function(o){var i=o.tab,m=o.index;return!w(i,"disabled")&&m>=e})||a.reverse().find(function(o){var i=o.tab,m=o.index;return!w(i,"disabled")&&e>m})},Fe=function(e,a){e.preventDefault();var o=l.onBeforeTabClose,i=l.onTabClose,m=l.children,C=m[a].key;o&&o({originalEvent:e,index:a})===!1||(le([].concat(Ht(T),[C])),i&&i({originalEvent:e,index:a}))},X=function(e,a,o){be(e,a,o)},be=function(e,a,o){if(e&&e.preventDefault(),!w(a,"disabled")){if(l.onBeforeTabChange&&l.onBeforeTabChange({originalEvent:e,index:o})===!1)return;l.onTabChange?l.onTabChange({originalEvent:e,index:o}):ce(o)}N({index:o})},me=function(e,a,o){switch(e.code){case"ArrowLeft":Me(e);break;case"ArrowRight":Je(e);break;case"Home":he(e);break;case"End":ye(e);break;case"PageDown":Xe(e);break;case"PageUp":ze(e);break;case"Enter":case"NumpadEnter":case"Space":Ye(e,a,o);break}},Je=function(e){var a=ge(e.target.parentElement);a?U(a):he(e),e.preventDefault()},Me=function(e){var a=we(e.target.parentElement);a?U(a):ye(e),e.preventDefault()},he=function(e){var a=qe();U(a),e.preventDefault()},ye=function(e){var a=Ge();U(a),e.preventDefault()},Xe=function(e){N({index:u.Children.count(l.children)-1}),e.preventDefault()},ze=function(e){N({index:0}),e.preventDefault()},Ye=function(e,a,o){be(e,a,o),e.preventDefault()},ge=function c(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=a?e:e.nextElementSibling;return o?p.getAttribute(o,"data-p-disabled")||p.getAttribute(o,"data-pc-section")==="inkbar"?c(o):p.findSingle(o,'[data-pc-section="headeraction"]'):null},we=function c(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=a?e:e.previousElementSibling;return o?p.getAttribute(o,"data-p-disabled")||p.getAttribute(o,"data-pc-section")==="inkbar"?c(o):p.findSingle(o,'[data-pc-section="headeraction"]'):null},qe=function(){return ge(K.current.firstElementChild,!0)},Ge=function(){return we(K.current.lastElementChild,!0)},U=function(e){e&&(p.focus(e),N({element:e}))},Qe=function(){var e=J.current["tab_".concat(M)];F.current.style.width=p.getWidth(e)+"px",F.current.style.left=p.getOffset(e).left-p.getOffset(K.current).left+"px"},N=function(e){var a=e.index,o=e.element,i=o||J.current["tab_".concat(a)];i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest"})},Pe=function(){var e=g.current,a=e.scrollLeft,o=e.scrollWidth,i=p.getWidth(g.current);te(a===0),ae(a===o-i)},Ze=function(e){l.scrollable&&Pe(),e.preventDefault()},Te=function(){return[ue.current,de.current].reduce(function(e,a){return a?e+p.getWidth(a):e},0)},et=function(){var e=p.getWidth(g.current)-Te(),a=g.current.scrollLeft-e;g.current.scrollLeft=a<=0?0:a},tt=function(){var e=p.getWidth(g.current)-Te(),a=g.current.scrollLeft+e,o=g.current.scrollWidth-e;g.current.scrollLeft=a>=o?o:a},nt=function(){te(!0),ae(!1),le([]),l.onTabChange?l.onTabChange({index:M}):ce(l.activeIndex)};u.useEffect(function(){Qe(),Pe()}),Nt(function(){d||P(xt())}),De(function(){if(I.isNotEmpty(T)){var c=We(T[T.length-1]);c&&X(null,c.tab,c.index)}},[T]),De(function(){l.activeIndex!==H&&N({index:l.activeIndex})},[l.activeIndex]),u.useImperativeHandle(t,function(){return{props:l,reset:nt,getElement:function(){return se.current}}});var rt=function(e,a){var o=O(a),i=E.getCProps(e),m=i.headerStyle,C=i.headerClassName,z=i.style,Y=i.className,q=i.disabled,Se=i.leftIcon,Ce=i.rightIcon,bt=i.header,Ie=i.headerTemplate,mt=i.closable,ht=i.closeIcon,yt=d+"_header_"+a,Ee=d+a+"_content",gt=q||!o?-1:0,xe=Se&&D.getJSXIcon(Se,void 0,{props:l}),wt=r({className:f("tab.headertitle")},S(e,"headertitle",a)),Oe=u.createElement("span",wt,bt),Ae=Ce&&D.getJSXIcon(Ce,void 0,{props:l}),Ne=r({className:f("tab.closeIcon"),onClick:function(h){return Fe(h,a)}},S(e,"closeIcon",a)),Pt=ht||u.createElement(Bt,Ne),Tt=mt?D.getJSXIcon(Pt,W({},Ne),{props:l}):null,St=r({id:yt,role:"tab",className:f("tab.headeraction"),tabIndex:gt,"aria-controls":Ee,"aria-selected":o,"aria-disabled":q,onClick:function(h){return X(h,e,a)},onKeyDown:function(h){return me(h,e,a)}},S(e,"headeraction",a)),G=u.createElement("a",St,xe,Oe,Ae,Tt,u.createElement(Q,null));if(Ie){var Ct={className:"p-tabview-nav-link",titleClassName:"p-tabview-title",onClick:function(h){return X(h,e,a)},onKeyDown:function(h){return me(h,e,a)},leftIconElement:xe,titleElement:Oe,rightIconElement:Ae,element:G,props:l,index:a,selected:o,ariaControls:Ee};G=I.getJSXElement(Ie,Ct)}var It=r({ref:function(h){return J.current["tab_".concat(a)]=h},className:f("tab.header",{selected:o,disabled:q,headerClassName:C,_className:Y}),style:fe("tab.header",{headerStyle:m,_style:z}),role:"presentation"},S(e,"root",a),S(e,"header",a));return u.createElement("li",It,G)},at=function(){return u.Children.map(l.children,function(e,a){if(A(e))return rt(e,a)})},ot=function(){var e=at(),a=r({id:d+"_navcontent",ref:g,className:f("navcontent"),style:l.style,onScroll:Ze},v("navcontent")),o=r({ref:K,className:f("nav"),role:"tablist"},v("nav")),i=r({ref:F,"aria-hidden":"true",role:"presentation",className:f("inkbar")},v("inkbar"));return u.createElement("div",a,u.createElement("ul",o,e,u.createElement("li",i)))},lt=function(){var e=r({className:f("panelcontainer"),style:l.panelContainerStyle},v("panelcontainer")),a=u.Children.map(l.children,function(o,i){if(A(o)&&(!l.renderActiveOnly||O(i))){var m=O(i),C=d+i+"_content",z=d+"_header_"+i,Y=r({id:C,className:f("tab.content",{props:l,selected:m,getTabProp:w,tab:o,isSelected:O,shouldUseTab:A,index:i}),style:fe("tab.content",{props:l,getTabProp:w,tab:o,isSelected:O,shouldUseTab:A,index:i}),role:"tabpanel","aria-labelledby":z},E.getCOtherProps(o),S(o,"root",i),S(o,"content",i));return u.createElement("div",Y,l.renderActiveOnly?m&&w(o,"children"):w(o,"children"))}});return u.createElement("div",e,a)},it=function(){var e=r({"aria-hidden":"true"},v("previcon")),a=l.prevButton||u.createElement(kt,e),o=D.getJSXIcon(a,W({},e),{props:l}),i=r({ref:ue,type:"button",className:f("prevbutton"),"aria-label":ke("previousPageLabel"),onClick:function(C){return et()}},v("prevbutton"));return l.scrollable&&!ee?u.createElement("button",i,o,u.createElement(Q,null)):null},ct=function(){var e=r({"aria-hidden":"true"},v("nexticon")),a=l.nextButton||u.createElement(Dt,e),o=D.getJSXIcon(a,W({},e),{props:l}),i=r({ref:de,type:"button",className:f("nextbutton"),"aria-label":ke("nextPageLabel"),onClick:function(C){return tt()}},v("nextbutton"));if(l.scrollable&&!re)return u.createElement("button",i,o,u.createElement(Q,null))},st=r({id:d,ref:se,style:l.style,className:f("root")},V.getOtherProps(l),v("root")),ut=r({className:f("navcontainer")},v("navcontainer")),dt=ot(),pt=lt(),vt=it(),ft=ct();return u.createElement("div",st,u.createElement("div",ut,vt,dt,ft),pt)});Mt.displayName="TabPanel";Xt.displayName="TabView";export{Xt as T,Mt as a};

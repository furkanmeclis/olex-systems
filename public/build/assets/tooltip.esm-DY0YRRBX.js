import{r as d,P as Qe,c as Oe,Z as k,D as y,O as et,d as Se}from"./app-Dz0Rbp0h.js";import{C as tt,u as nt,a as rt,f as ot,E as it,l as at,m as lt,h as ut,i as V,j as st,P as ct}from"./ripple.esm-CYZs3McG.js";function $(){return $=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var c in n)({}).hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},$.apply(null,arguments)}function O(t){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},O(t)}function pt(t,o){if(O(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var c=n.call(t,o||"default");if(O(c)!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(t)}function ft(t){var o=pt(t,"string");return O(o)=="symbol"?o:o+""}function xe(t,o,n){return(o=ft(o))in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}function q(t,o){(o==null||o>t.length)&&(o=t.length);for(var n=0,c=Array(o);n<o;n++)c[n]=t[n];return c}function dt(t){if(Array.isArray(t))return q(t)}function vt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Pe(t,o){if(t){if(typeof t=="string")return q(t,o);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(t,o):void 0}}function mt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(t){return dt(t)||vt(t)||Pe(t)||mt()}function yt(t){if(Array.isArray(t))return t}function bt(t,o){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var c,i,x,w,h=[],S=!0,P=!1;try{if(x=(n=n.call(t)).next,o!==0)for(;!(S=(c=x.call(n)).done)&&(h.push(c.value),h.length!==o);S=!0);}catch(R){P=!0,i=R}finally{try{if(!S&&n.return!=null&&(w=n.return(),Object(w)!==w))return}finally{if(P)throw i}}return h}}function gt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(t,o){return yt(t)||bt(t,o)||Pe(t,o)||gt()}var Et={root:function(o){var n=o.positionState,c=o.classNameState;return Oe("p-tooltip p-component",xe({},"p-tooltip-".concat(n),!0),c)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},wt={arrow:function(o){var n=o.context;return{top:n.bottom?"0":n.right||n.left||!n.right&&!n.left&&!n.top&&!n.bottom?"50%":null,bottom:n.top?"0":null,left:n.right||!n.right&&!n.left&&!n.top&&!n.bottom?"0":n.top||n.bottom?"50%":null,right:n.left?"0":null}}},St=`
@layer primereact {
    .p-tooltip {
        position: absolute;
        padding: .25em .5rem;
        /* #3687: Tooltip prevent scrollbar flickering */
        top: -9999px;
        left: -9999px;
    }
    
    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }
    
    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }
    
    .p-tooltip .p-tooltip-text {
       white-space: pre-line;
       word-break: break-word;
    }
    
    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    
    .p-tooltip-right .p-tooltip-arrow {
        top: 50%;
        left: 0;
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }
    
    .p-tooltip-left .p-tooltip-arrow {
        top: 50%;
        right: 0;
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }
    
    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }
    
    .p-tooltip-top .p-tooltip-arrow {
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }
    
    .p-tooltip-bottom .p-tooltip-arrow {
        top: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }

    .p-tooltip-target-wrapper {
        display: inline-flex;
    }
}
`,W=tt.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,closeOnEscape:!1,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:Et,styles:St,inlineStyles:wt}});function Te(t,o){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);o&&(c=c.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,c)}return n}function Tt(t){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?Te(Object(n),!0).forEach(function(c){xe(t,c,n[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach(function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(n,c))})}return t}var Ot=d.memo(d.forwardRef(function(t,o){var n=nt(),c=d.useContext(Qe),i=W.getProps(t,c),x=d.useState(!1),w=T(x,2),h=w[0],S=w[1],P=d.useState(i.position||"right"),R=T(P,2),E=R[0],B=R[1],Re=d.useState(""),J=T(Re,2),Q=J[0],ee=J[1],Ce=d.useState(!1),te=T(Ce,2),De=te[0],ne=te[1],re={props:i,state:{visible:h,position:E,className:Q},context:{right:E==="right",left:E==="left",top:E==="top",bottom:E==="bottom"}},C=W.setMetaData(re),U=C.ptm,Z=C.cx,je=C.sx,Ie=C.isUnstyled;rt(W.css.styles,Ie,{name:"tooltip"}),ot({callback:function(){b()},when:i.closeOnEscape,priority:[it.TOOLTIP,0]});var p=d.useRef(null),D=d.useRef(null),f=d.useRef(null),j=d.useRef(null),I=d.useRef(!0),oe=d.useRef({}),ie=d.useRef(null),Le=at({listener:function(e){!y.isTouchDevice()&&b(e)}}),ae=T(Le,2),Ae=ae[0],Me=ae[1],Ne=lt({target:f.current,listener:function(e){b(e)},when:h}),le=T(Ne,2),_e=le[0],He=le[1],ke=function(e){return!(i.content||v(e,"tooltip"))},We=function(e){return!(i.content||v(e,"tooltip")||i.children)},F=function(e){return v(e,"mousetrack")||i.mouseTrack},ue=function(e){return v(e,"disabled")==="true"||ce(e,"disabled")||i.disabled},se=function(e){return v(e,"showondisabled")||i.showOnDisabled},L=function(){return v(f.current,"autohide")||i.autoHide},v=function(e,r){return ce(e,"data-pr-".concat(r))?e.getAttribute("data-pr-".concat(r)):null},ce=function(e,r){return e&&e.hasAttribute(r)},pe=function(e){var r=[v(e,"showevent")||i.showEvent],s=[v(e,"hideevent")||i.hideEvent];if(F(e))r=["mousemove"],s=["mouseleave"];else{var l=v(e,"event")||i.event;l==="focus"&&(r=["focus"],s=["blur"]),l==="both"&&(r=["focus","mouseenter"],s=De?["blur"]:["mouseleave","blur"])}return{showEvents:r,hideEvents:s}},fe=function(e){return v(e,"position")||E},$e=function(e){var r=v(e,"mousetracktop")||i.mouseTrackTop,s=v(e,"mousetrackleft")||i.mouseTrackLeft;return{top:r,left:s}},de=function(e,r){if(D.current){var s=v(e,"tooltip")||i.content;s?(D.current.innerHTML="",D.current.appendChild(document.createTextNode(s)),r()):i.children&&r()}},ve=function(e){de(f.current,function(){var r=ie.current,s=r.pageX,l=r.pageY;i.autoZIndex&&!k.get(p.current)&&k.set("tooltip",p.current,c&&c.autoZIndex||Se.autoZIndex,i.baseZIndex||c&&c.zIndex.tooltip||Se.zIndex.tooltip),p.current.style.left="",p.current.style.top="",L()&&(p.current.style.pointerEvents="none");var u=F(f.current)||e==="mouse";(u&&!j.current||u)&&(j.current={width:y.getOuterWidth(p.current),height:y.getOuterHeight(p.current)}),me(f.current,{x:s,y:l},e)})},A=function(e){e.type&&e.type==="focus"&&ne(!0),f.current=e.currentTarget;var r=ue(f.current),s=We(se(f.current)&&r?f.current.firstChild:f.current);if(!(s||r))if(ie.current=e,h)M("updateDelay",ve);else{var l=N(i.onBeforeShow,{originalEvent:e,target:f.current});l&&M("showDelay",function(){S(!0),N(i.onShow,{originalEvent:e,target:f.current})})}},b=function(e){if(e&&e.type==="blur"&&ne(!1),he(),h){var r=N(i.onBeforeHide,{originalEvent:e,target:f.current});r&&M("hideDelay",function(){!L()&&I.current===!1||(k.clear(p.current),y.removeClass(p.current,"p-tooltip-active"),S(!1),N(i.onHide,{originalEvent:e,target:f.current}))})}},me=function(e,r,s){var l=0,u=0,m=s||E;if((F(e)||m=="mouse")&&r){var g={width:y.getOuterWidth(p.current),height:y.getOuterHeight(p.current)};l=r.x,u=r.y;var ge=$e(e),_=ge.top,H=ge.left;switch(m){case"left":l=l-(g.width+H),u=u-(g.height/2-_);break;case"right":case"mouse":l=l+H,u=u-(g.height/2-_);break;case"top":l=l-(g.width/2-H),u=u-(g.height+_);break;case"bottom":l=l-(g.width/2-H),u=u+_;break}l<=0||j.current.width>g.width?(p.current.style.left="0px",p.current.style.right=window.innerWidth-g.width-l+"px"):(p.current.style.right="",p.current.style.left=l+"px"),p.current.style.top=u+"px",y.addClass(p.current,"p-tooltip-active")}else{var X=y.findCollisionPosition(m),ze=v(e,"my")||i.my||X.my,Ve=v(e,"at")||i.at||X.at;p.current.style.padding="0px",y.flipfitCollision(p.current,e,ze,Ve,function(G){var Ee=G.at,z=Ee.x,qe=Ee.y,Je=G.my.x,we=i.at?z!=="center"&&z!==Je?z:qe:G.at["".concat(X.axis)];p.current.style.padding="",B(we),Be(we),y.addClass(p.current,"p-tooltip-active")})}},Be=function(e){if(p.current){var r=getComputedStyle(p.current);e==="left"?p.current.style.left=parseFloat(r.left)-parseFloat(r.paddingLeft)*2+"px":e==="top"&&(p.current.style.top=parseFloat(r.top)-parseFloat(r.paddingTop)*2+"px")}},Ue=function(){L()||(I.current=!1)},Ze=function(e){L()||(I.current=!0,b(e))},Fe=function(e){if(e){var r=pe(e),s=r.showEvents,l=r.hideEvents,u=ye(e);s.forEach(function(m){return u==null?void 0:u.addEventListener(m,A)}),l.forEach(function(m){return u==null?void 0:u.addEventListener(m,b)})}},Ke=function(e){if(e){var r=pe(e),s=r.showEvents,l=r.hideEvents,u=ye(e);s.forEach(function(m){return u==null?void 0:u.removeEventListener(m,A)}),l.forEach(function(m){return u==null?void 0:u.removeEventListener(m,b)})}},M=function(e,r){he();var s=v(f.current,e.toLowerCase())||i[e];s?oe.current["".concat(e)]=setTimeout(function(){return r()},s):r()},N=function(e){if(e){for(var r=arguments.length,s=new Array(r>1?r-1:0),l=1;l<r;l++)s[l-1]=arguments[l];var u=e.apply(void 0,s);return u===void 0&&(u=!0),u}return!0},he=function(){Object.values(oe.current).forEach(function(e){return clearTimeout(e)})},ye=function(e){if(e){if(se(e)){if(!e.hasWrapper){var r=document.createElement("div"),s=e.nodeName==="INPUT";return s?y.addMultipleClasses(r,"p-tooltip-target-wrapper p-inputwrapper"):y.addClass(r,"p-tooltip-target-wrapper"),e.parentNode.insertBefore(r,e),r.appendChild(e),e.hasWrapper=!0,r}return e.parentElement}else if(e.hasWrapper){var l;(l=e.parentElement).replaceWith.apply(l,ht(e.parentElement.childNodes)),delete e.hasWrapper}return e}return null},Ye=function(e){Y(e),K(e)},K=function(e){be(e||i.target,Fe)},Y=function(e){be(e||i.target,Ke)},be=function(e,r){if(e=et.getRefElement(e),e)if(y.isElement(e))r(e);else{var s=function(u){var m=y.find(document,u);m.forEach(function(g){r(g)})};e instanceof Array?e.forEach(function(l){s(l)}):s(e)}};ut(function(){h&&f.current&&ue(f.current)&&b()}),V(function(){return K(),function(){Y()}},[A,b,i.target]),V(function(){if(h){var a=fe(f.current),e=v(f.current,"classname");B(a),ee(e),ve(a),Ae(),_e()}else B(i.position||"right"),ee(""),f.current=null,j.current=null,I.current=!0;return function(){Me(),He()}},[h]),V(function(){var a=fe(f.current);h&&a!=="mouse"&&M("updateDelay",function(){de(f.current,function(){me(f.current)})})},[i.content]),st(function(){b(),k.clear(p.current)}),d.useImperativeHandle(o,function(){return{props:i,updateTargetEvents:Ye,loadTargetEvents:K,unloadTargetEvents:Y,show:A,hide:b,getElement:function(){return p.current},getTarget:function(){return f.current}}});var Xe=function(){var e=ke(f.current),r=n({id:i.id,className:Oe(i.className,Z("root",{positionState:E,classNameState:Q})),style:i.style,role:"tooltip","aria-hidden":h,onMouseEnter:function(m){return Ue()},onMouseLeave:function(m){return Ze(m)}},W.getOtherProps(i),U("root")),s=n({className:Z("arrow"),style:je("arrow",Tt({},re))},U("arrow")),l=n({className:Z("text")},U("text"));return d.createElement("div",$({ref:p},r),d.createElement("div",s),d.createElement("div",$({ref:D},l),e&&i.children))};if(h){var Ge=Xe();return d.createElement(ct,{element:Ge,appendTo:i.appendTo,visible:!0})}return null}));Ot.displayName="Tooltip";export{Ot as T};

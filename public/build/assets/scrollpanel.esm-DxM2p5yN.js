import{r as n,P as we,U as Se,c as xe,D as s}from"./app-BzKgFMKw.js";import{C as Re,b as Be,c as Me,e as De,g as Ce}from"./ripple.esm-BsUji4X7.js";function z(){return z=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var u in t)({}).hasOwnProperty.call(t,u)&&(r[u]=t[u])}return r},z.apply(null,arguments)}function Ae(r){if(Array.isArray(r))return r}function Le(r,a){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var u,l,x,v,h=[],g=!0,R=!1;try{if(x=(t=t.call(r)).next,a!==0)for(;!(g=(u=x.call(t)).done)&&(h.push(u.value),h.length!==a);g=!0);}catch(B){R=!0,l=B}finally{try{if(!g&&t.return!=null&&(v=t.return(),Object(v)!==v))return}finally{if(R)throw l}}return h}}function re(r,a){(a==null||a>r.length)&&(a=r.length);for(var t=0,u=Array(a);t<a;t++)u[t]=r[t];return u}function Te(r,a){if(r){if(typeof r=="string")return re(r,a);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?re(r,a):void 0}}function Ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(r,a){return Ae(r)||Le(r,a)||Te(r,a)||Ee()}var L=Re.extend({defaultProps:{__TYPE:"ScrollPanel",id:null,style:null,className:null,children:void 0,step:5},css:{classes:{root:"p-scrollpanel p-component",wrapper:"p-scrollpanel-wrapper",content:"p-scrollpanel-content",barx:"p-scrollpanel-bar p-scrollpanel-bar-x",bary:"p-scrollpanel-bar p-scrollpanel-bar-y"},styles:`
        @layer primereact {
            .p-scrollpanel-wrapper {
                overflow: hidden;
                width: 100%;
                height: 100%;
                position: relative;
                z-index: 1;
                float: left;
            }

            .p-scrollpanel-content {
                height: calc(100% + 18px);
                width: calc(100% + 18px);
                padding: 0 18px 18px 0;
                position: relative;
                overflow: auto;
                box-sizing: border-box;
            }

            .p-scrollpanel-bar {
                position: relative;
                background: #c1c1c1;
                border-radius: 3px;
                z-index: 2;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.25s linear;
            }

            .p-scrollpanel-bar-y {
                width: 9px;
                top: 0;
            }

            .p-scrollpanel-bar-x {
                height: 9px;
                bottom: 0;
            }

            .p-scrollpanel-hidden {
                visibility: hidden;
            }

            .p-scrollpanel:hover .p-scrollpanel-bar,
            .p-scrollpanel:active .p-scrollpanel-bar {
                opacity: 1;
            }

            .p-scrollpanel-grabbed {
                user-select: none;
            }
        }
        `}}),Pe=n.forwardRef(function(r,a){var t=Be(),u=n.useContext(we),l=L.getProps(r,u),x=n.useState(l.id),v=A(x,2),h=v[0],g=v[1],R=n.useState("vertical"),B=A(R,2),T=B[0],b=B[1],E=L.setMetaData({props:l}),y=E.ptm,w=E.cx,te=E.isUnstyled;Me(L.css.styles,te,{name:"scrollpanel"});var f=n.useRef(null),c=n.useRef(null),p=n.useRef(null),d=n.useRef(null),ne=n.useState(0),N=A(ne,2),k=N[0],ae=N[1],oe=n.useState(0),$=A(oe,2),W=$[0],le=$[1],P=n.useRef(!1),_=n.useRef(!1),H=n.useRef(null),F=n.useRef(null),M=n.useRef(null),D=n.useRef(null),S=n.useRef(null),K=n.useRef(!1),Y=n.useRef(null),O=h+"_content",se=function(){var e=getComputedStyle(f.current),i=getComputedStyle(p.current),X=s.getHeight(f.current)-parseInt(i.height,10);e["max-height"]!=="none"&&X===0&&(c.current.offsetHeight+parseInt(i.height,10)>parseInt(e["max-height"],10)?f.current.style.height=e["max-height"]:f.current.style.height=c.current.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},m=function(){var e=c.current.scrollWidth,i=c.current.clientWidth,X=(f.current.clientHeight-p.current.clientHeight)*-1;M.current=i/e;var ee=c.current.scrollHeight,be=c.current.clientHeight,ye=(f.current.clientWidth-d.current.clientWidth)*-1;D.current=be/ee,S.current=window.requestAnimationFrame(function(){M.current>=1?s.addClass(p.current,"p-scrollpanel-hidden"):(s.removeClass(p.current,"p-scrollpanel-hidden"),s.applyStyle(p.current,{width:Math.max(M.current*100,10)+"%",left:c.current.scrollLeft/e*100+"%",bottom:X+"px"})),D.current>=1?s.addClass(d.current,"p-scrollpanel-hidden"):(s.removeClass(d.current,"p-scrollpanel-hidden"),s.applyStyle(d.current,{height:Math.max(D.current*100,10)+"%",top:"calc("+c.current.scrollTop/ee*100+"% - "+p.current.clientHeight+"px)",right:ye+"px"}))})},j=function(e){p.current.isSameNode(e.target)?b("horizontal"):d.current.isSameNode(e.target)&&b("vertical")},q=function(){T==="horizontal"&&b("vertical")},ce=function(e){k!==e.target.scrollLeft?(ae(e.target.scrollLeft),b("horizontal")):W!==e.target.scrollTop&&(le(e.target.scrollTop),b("vertical")),m()},ie=function(e){_.current=!0,F.current=e.pageY,s.addClass(d.current,"p-scrollpanel-grabbed"),s.addClass(document.body,"p-scrollpanel-grabbed"),document.addEventListener("mousemove",I),document.addEventListener("mouseup",U),e.preventDefault()},ue=function(e){P.current=!0,H.current=e.pageX,s.addClass(p.current,"p-scrollpanel-grabbed"),s.addClass(document.body,"p-scrollpanel-grabbed"),document.addEventListener("mousemove",I),document.addEventListener("mouseup",U),e.preventDefault()},I=function(e){P.current?G(e):(_.current||G(e),J(e))},G=function(e){var i=e.pageX-H.current;H.current=e.pageX,S.current=window.requestAnimationFrame(function(){c.current.scrollLeft+=i/M.current})},J=function(e){var i=e.pageY-F.current;F.current=e.pageY,S.current=window.requestAnimationFrame(function(){c.current.scrollTop+=i/D.current})},U=function(e){s.removeClass(d.current,"p-scrollpanel-grabbed"),s.removeClass(p.current,"p-scrollpanel-grabbed"),s.removeClass(document.body,"p-scrollpanel-grabbed"),document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",U),P.current=!1,_.current=!1},Q=function(e){if(T==="vertical")switch(e.code){case"ArrowDown":{C("scrollTop",l.step),e.preventDefault();break}case"ArrowUp":{C("scrollTop",l.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(T==="horizontal")switch(e.code){case"ArrowRight":{C("scrollLeft",l.step),e.preventDefault();break}case"ArrowLeft":{C("scrollLeft",l.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},V=function(){Z()},pe=function(e,i){c.current[e]+=i,m()},C=function(e,i){Z(),Y.current=setTimeout(function(){pe(e,i)},40)},Z=function(){Y.current&&clearTimeout(Y.current)},de=function(){m()};De(function(){l.id||g(Se()),m(),window.addEventListener("resize",m),se(),K.current=!0}),Ce(function(){K.current&&window.removeEventListener("resize",m),S.current&&window.cancelAnimationFrame(S.current)}),n.useImperativeHandle(a,function(){return{props:l,refresh:de,getElement:function(){return f.current},getContent:function(){return c.current},getXBar:function(){return p.current},getYBar:function(){return d.current}}});var fe=t({id:l.id,ref:f,style:l.style,className:xe(l.className,w("root"))},L.getOtherProps(l),y("root")),me=t({className:w("wrapper")},y("wrapper")),ve=t({className:w("content"),onScroll:ce,onMouseEnter:m},y("content")),he=t({ref:p,role:"scrollbar",className:w("barx"),tabIndex:0,"aria-valuenow":W,"aria-controls":O,"aria-orientation":"horizontal",onFocus:j,onBlur:q,onKeyDown:Q,onKeyUp:V,onMouseDown:ue},y("barx")),ge=t({ref:d,role:"scrollbar",className:w("bary"),tabIndex:0,"aria-valuenow":k,"aria-controls":O,"aria-orientation":"vertical",onFocus:j,onBlur:q,onKeyDown:Q,onKeyUp:V,onMouseDown:ie},y("bary"));return n.createElement("div",fe,n.createElement("div",me,n.createElement("div",z({ref:c},ve),l.children)),n.createElement("div",he),n.createElement("div",ge))});Pe.displayName="ScrollPanel";export{Pe as S};

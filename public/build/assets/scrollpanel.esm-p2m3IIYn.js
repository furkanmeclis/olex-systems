import{c as we,r as n,P as xe,U as Se,D as i}from"./app-B0Xag5vm.js";import{C as Re,u as Be,a as Me,h as De,j as Ce}from"./ripple.esm-CDYa-oWb.js";function X(){return X=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},X.apply(this,arguments)}function Te(t){if(Array.isArray(t))return t}function Ae(t,a){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var u,l,S,m,g=[],h=!0,R=!1;try{if(S=(r=r.call(t)).next,a===0){if(Object(r)!==r)return;h=!1}else for(;!(h=(u=S.call(r)).done)&&(g.push(u.value),g.length!==a);h=!0);}catch(B){R=!0,l=B}finally{try{if(!h&&r.return!=null&&(m=r.return(),Object(m)!==m))return}finally{if(R)throw l}}return g}}function re(t,a){(a==null||a>t.length)&&(a=t.length);for(var r=0,u=new Array(a);r<a;r++)u[r]=t[r];return u}function Ee(t,a){if(t){if(typeof t=="string")return re(t,a);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return re(t,a)}}function Le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(t,a){return Te(t)||Ae(t,a)||Ee(t,a)||Le()}var A=Re.extend({defaultProps:{__TYPE:"ScrollPanel",id:null,style:null,className:null,children:void 0,step:5},css:{classes:{root:function(a){var r=a.props;return we("p-scrollpanel p-component",r.className)},wrapper:"p-scrollpanel-wrapper",content:"p-scrollpanel-content",barx:"p-scrollpanel-bar p-scrollpanel-bar-x",bary:"p-scrollpanel-bar p-scrollpanel-bar-y"},styles:`
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
        `}}),Pe=n.forwardRef(function(t,a){var r=Be(),u=n.useContext(xe),l=A.getProps(t,u),S=n.useState(l.id),m=T(S,2),g=m[0],h=m[1],R=n.useState("vertical"),B=T(R,2),E=B[0],b=B[1],L=A.setMetaData({props:l}),y=L.ptm,w=L.cx,te=L.isUnstyled;Me(A.css.styles,te,{name:"scrollpanel"});var d=n.useRef(null),s=n.useRef(null),p=n.useRef(null),f=n.useRef(null),ne=n.useState(0),z=T(ne,2),N=z[0],ae=z[1],oe=n.useState(0),O=T(oe,2),$=O[0],le=O[1],P=n.useRef(!1),_=n.useRef(!1),H=n.useRef(null),F=n.useRef(null),M=n.useRef(null),D=n.useRef(null),x=n.useRef(null),j=n.useRef(!1),Y=n.useRef(null),W=g+"_content",se=function(){var e=getComputedStyle(d.current),c=getComputedStyle(p.current),U=i.getHeight(d.current)-parseInt(c.height,10);e["max-height"]!=="none"&&U===0&&(s.current.offsetHeight+parseInt(c.height,10)>parseInt(e["max-height"],10)?d.current.style.height=e["max-height"]:d.current.style.height=s.current.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},v=function(){var e=s.current.scrollWidth,c=s.current.clientWidth,U=(d.current.clientHeight-p.current.clientHeight)*-1;M.current=c/e;var ee=s.current.scrollHeight,be=s.current.clientHeight,ye=(d.current.clientWidth-f.current.clientWidth)*-1;D.current=be/ee,x.current=window.requestAnimationFrame(function(){M.current>=1?i.addClass(p.current,"p-scrollpanel-hidden"):(i.removeClass(p.current,"p-scrollpanel-hidden"),p.current.style.cssText="width:"+Math.max(M.current*100,10)+"%; left:"+s.current.scrollLeft/e*100+"%;bottom:"+U+"px;"),D.current>=1?i.addClass(f.current,"p-scrollpanel-hidden"):(i.removeClass(f.current,"p-scrollpanel-hidden"),f.current.style.cssText="height:"+Math.max(D.current*100,10)+"%; top: calc("+s.current.scrollTop/ee*100+"% - "+p.current.clientHeight+"px);right:"+ye+"px;")})},k=function(e){p.current.isSameNode(e.target)?b("horizontal"):f.current.isSameNode(e.target)&&b("vertical")},K=function(){E==="horizontal"&&b("vertical")},ce=function(e){N!==e.target.scrollLeft?(ae(e.target.scrollLeft),b("horizontal")):$!==e.target.scrollTop&&(le(e.target.scrollTop),b("vertical")),v()},ie=function(e){_.current=!0,F.current=e.pageY,i.addClass(f.current,"p-scrollpanel-grabbed"),i.addClass(document.body,"p-scrollpanel-grabbed"),document.addEventListener("mousemove",I),document.addEventListener("mouseup",J),e.preventDefault()},ue=function(e){P.current=!0,H.current=e.pageX,i.addClass(p.current,"p-scrollpanel-grabbed"),i.addClass(document.body,"p-scrollpanel-grabbed"),document.addEventListener("mousemove",I),document.addEventListener("mouseup",J),e.preventDefault()},I=function(e){P.current?q(e):(_.current||q(e),G(e))},q=function(e){var c=e.pageX-H.current;H.current=e.pageX,x.current=window.requestAnimationFrame(function(){s.current.scrollLeft+=c/M.current})},G=function(e){var c=e.pageY-F.current;F.current=e.pageY,x.current=window.requestAnimationFrame(function(){s.current.scrollTop+=c/D.current})},J=function o(e){i.removeClass(f.current,"p-scrollpanel-grabbed"),i.removeClass(p.current,"p-scrollpanel-grabbed"),i.removeClass(document.body,"p-scrollpanel-grabbed"),document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",o),P.current=!1,_.current=!1},Q=function(e){if(E==="vertical")switch(e.code){case"ArrowDown":{C("scrollTop",l.step),e.preventDefault();break}case"ArrowUp":{C("scrollTop",l.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(E==="horizontal")switch(e.code){case"ArrowRight":{C("scrollLeft",l.step),e.preventDefault();break}case"ArrowLeft":{C("scrollLeft",l.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},V=function(){Z()},pe=function(e,c){s.current[e]+=c,v()},C=function(e,c){Z(),Y.current=setTimeout(function(){pe(e,c)},40)},Z=function(){Y.current&&clearTimeout(Y.current)},fe=function(){v()};De(function(){l.id||h(Se()),v(),window.addEventListener("resize",v),se(),j.current=!0}),Ce(function(){j.current&&window.removeEventListener("resize",v),x.current&&window.cancelAnimationFrame(x.current)}),n.useImperativeHandle(a,function(){return{props:l,refresh:fe,getElement:function(){return d.current},getContent:function(){return s.current},getXBar:function(){return p.current},getYBar:function(){return f.current}}});var de=r({id:l.id,ref:d,style:l.style,className:w("root")},A.getOtherProps(l),y("root")),ve=r({className:w("wrapper")},y("wrapper")),me=r({className:w("content"),onScroll:ce,onMouseEnter:v},y("content")),he=r({ref:p,role:"scrollbar",className:w("barx"),tabIndex:0,"aria-valuenow":$,"aria-controls":W,"aria-orientation":"horizontal",onFocus:k,onBlur:K,onKeyDown:Q,onKeyUp:V,onMouseDown:ue},y("barx")),ge=r({ref:f,role:"scrollbar",className:w("bary"),tabIndex:0,"aria-valuenow":N,"aria-controls":W,"aria-orientation":"vertical",onFocus:k,onBlur:K,onKeyDown:Q,onKeyUp:V,onMouseDown:ie},y("bary"));return n.createElement("div",de,n.createElement("div",ve,n.createElement("div",X({ref:s},me),l.children)),n.createElement("div",he),n.createElement("div",ge))});Pe.displayName="ScrollPanel";export{Pe as S};

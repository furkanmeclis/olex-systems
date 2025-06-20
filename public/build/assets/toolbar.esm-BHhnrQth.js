import{c as P,r as t,P as E,O as p}from"./app-nYLwBUIG.js";import{C as N,u as T,a as h}from"./ripple.esm-BAgIeJVD.js";var o=N.extend({defaultProps:{__TYPE:"Toolbar",id:null,style:null,className:null,left:null,right:null,start:null,center:null,end:null,children:void 0},css:{classes:{root:function(l){var r=l.props;return P("p-toolbar p-component",r.className)},start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},styles:`
        @layer primereact {
            .p-toolbar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
            }
            
            .p-toolbar-group-start,
            .p-toolbar-group-center,
            .p-toolbar-group-end {
                display: flex;
                align-items: center;
            }
            
            .p-toolbar-group-left,
            .p-toolbar-group-right {
                display: flex;
                align-items: center;
            }
        }
        `}}),w=t.memo(t.forwardRef(function(c,l){var r=T(),i=t.useContext(E),e=o.getProps(c,i),u=t.useRef(null),m=p.getJSXElement(e.left||e.start,e),d=p.getJSXElement(e.center,e),g=p.getJSXElement(e.right||e.end,e),s=o.setMetaData({props:e}),a=s.ptm,n=s.cx,f=s.isUnstyled;h(o.css.styles,f,{name:"toolbar"}),t.useImperativeHandle(l,function(){return{props:e,getElement:function(){return u.current}}});var b=r({className:n("start")},a("start")),v=r({className:n("center")},a("center")),y=r({className:n("end")},a("end")),x=r({id:e.id,ref:u,style:e.style,className:n("root"),role:"toolbar"},o.getOtherProps(e),a("root"));return t.createElement("div",x,t.createElement("div",b,m),t.createElement("div",v,d),t.createElement("div",y,g))}));w.displayName="Toolbar";export{w as T};

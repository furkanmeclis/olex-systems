import{c as P,r as t,P as E,O as p}from"./app-B6stv-QN.js";import{C as N,b as T,c as h}from"./ripple.esm-CvkIdw-B.js";var o=N.extend({defaultProps:{__TYPE:"Toolbar",id:null,style:null,className:null,left:null,right:null,start:null,center:null,end:null,children:void 0},css:{classes:{root:function(l){var r=l.props;return P("p-toolbar p-component",r.className)},start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},styles:`
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
        `}}),w=t.memo(t.forwardRef(function(c,l){var r=T(),m=t.useContext(E),e=o.getProps(c,m),i=t.useRef(null),u=p.getJSXElement(e.left||e.start,e),d=p.getJSXElement(e.center,e),g=p.getJSXElement(e.right||e.end,e),s=o.setMetaData({props:e}),a=s.ptm,n=s.cx,b=s.isUnstyled;h(o.css.styles,b,{name:"toolbar"}),t.useImperativeHandle(l,function(){return{props:e,getElement:function(){return i.current}}});var f=r({className:n("start")},a("start")),v=r({className:n("center")},a("center")),y=r({className:n("end")},a("end")),x=r({id:e.id,ref:i,style:e.style,className:n("root"),role:"toolbar"},o.getOtherProps(e),a("root"));return t.createElement("div",x,t.createElement("div",f,u),t.createElement("div",v,d),t.createElement("div",y,g))}));w.displayName="Toolbar";export{w as T};

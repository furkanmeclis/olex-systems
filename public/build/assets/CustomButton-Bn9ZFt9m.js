import{r,P as R,O as c,c as $,j as m}from"./app-BAn7_dTb.js";import{C as S,u as H,a as J}from"./ripple.esm-itjK-D4Y.js";import{m as X}from"./motion-D5m4JxCT.js";var k={root:function(a){var t=a.props;return $("p-card p-component",t.className)},header:"p-card-header",title:"p-card-title",subTitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer",body:"p-card-body"},M=`
@layer primereact {
    .p-card-header img {
        width: 100%;
    }
}
`,i=S.extend({defaultProps:{__TYPE:"Card",id:null,header:null,footer:null,title:null,subTitle:null,style:null,className:null,children:void 0},css:{classes:k,styles:M}}),O=r.forwardRef(function(d,a){var t=H(),p=r.useContext(R),e=i.getProps(d,p),l=r.useRef(a),n=i.setMetaData({props:e}),s=n.ptm,o=n.cx,v=n.isUnstyled;J(i.css.styles,v,{name:"card"});var b=function(){var u=t({className:o("header")},s("header"));return e.header?r.createElement("div",u,c.getJSXElement(e.header,e)):null},f=function(){var u=t({className:o("title")},s("title")),E=e.title&&r.createElement("div",u,c.getJSXElement(e.title,e)),P=t({className:o("subTitle")},s("subTitle")),C=e.subTitle&&r.createElement("div",P,c.getJSXElement(e.subTitle,e)),N=t({className:o("content")},s("content")),w=e.children&&r.createElement("div",N,e.children),T=t({className:o("footer")},s("footer")),B=e.footer&&r.createElement("div",T,c.getJSXElement(e.footer,e)),j=t({className:o("body")},s("body"));return r.createElement("div",j,E,C,w,B)};r.useEffect(function(){c.combinedRefs(l,a)},[l,a]);var h=t({id:e.id,ref:l,style:e.style,className:o("root")},i.getOtherProps(e),s("root")),g=b(),y=f();return r.createElement("div",h,g,y)});O.displayName="Card";const U=({label:d,icon:a,onClick:t,className:p="",color:e="blue"})=>{const l=`
        flex items-center justify-center gap-2 
        px-4 py-2 
        rounded-lg 
        font-semibold 
        text-white 
        shadow-lg 
        transition-all duration-300
        hover:shadow-xl
        active:scale-95
        disabled:opacity-50 
        disabled:cursor-not-allowed
    `,n={blue:"bg-blue-500 hover:bg-blue-600",green:"bg-green-500 hover:bg-green-600",yellow:"bg-yellow-500 hover:bg-yellow-600",purple:"bg-purple-500 hover:bg-purple-600",red:"bg-red-500 hover:bg-red-600",pink:"bg-pink-500 hover:bg-pink-600"};return m.jsxs(X.button,{whileHover:{scale:1.02},whileTap:{scale:.98},className:`${l} ${n[e]} ${p}`,onClick:t,children:[a&&m.jsx("i",{className:`pi ${a} text-lg`}),d]})},Y=U;export{Y as C,O as a};

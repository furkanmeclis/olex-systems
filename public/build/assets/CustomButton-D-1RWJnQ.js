import{r as t,P as R,O as d,c as S,j as m}from"./app-D0mPTlLT.js";import{C as $,u as H,a as J}from"./ripple.esm-Dp2KI1ix.js";import{m as X}from"./motion-Cy9_qeAM.js";var k={root:"p-card p-component",header:"p-card-header",title:"p-card-title",subTitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer",body:"p-card-body"},M=`
@layer primereact {
    .p-card-header img {
        width: 100%;
    }
}
`,c=$.extend({defaultProps:{__TYPE:"Card",id:null,header:null,footer:null,title:null,subTitle:null,style:null,className:null,children:void 0},css:{classes:k,styles:M}}),O=t.forwardRef(function(i,l){var r=H(),p=t.useContext(R),e=c.getProps(i,p),o=t.useRef(l),n=c.setMetaData({props:e}),a=n.ptm,s=n.cx,v=n.isUnstyled;J(c.css.styles,v,{name:"card"});var b=function(){var u=r({className:s("header")},a("header"));return e.header?t.createElement("div",u,d.getJSXElement(e.header,e)):null},h=function(){var u=r({className:s("title")},a("title")),E=e.title&&t.createElement("div",u,d.getJSXElement(e.title,e)),P=r({className:s("subTitle")},a("subTitle")),N=e.subTitle&&t.createElement("div",P,d.getJSXElement(e.subTitle,e)),C=r({className:s("content")},a("content")),w=e.children&&t.createElement("div",C,e.children),T=r({className:s("footer")},a("footer")),j=e.footer&&t.createElement("div",T,d.getJSXElement(e.footer,e)),B=r({className:s("body")},a("body"));return t.createElement("div",B,E,N,w,j)};t.useEffect(function(){d.combinedRefs(o,l)},[o,l]);var f=r({id:e.id,ref:o,style:e.style,className:S(e.className,s("root"))},c.getOtherProps(e),a("root")),g=b(),y=h();return t.createElement("div",f,g,y)});O.displayName="Card";const V=({label:i,icon:l,onClick:r,className:p="",color:e="blue"})=>{const o=`
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
    `,n={blue:"bg-blue-500 hover:bg-blue-600",green:"bg-green-500 hover:bg-green-600",yellow:"bg-yellow-500 hover:bg-yellow-600",purple:"bg-purple-500 hover:bg-purple-600",red:"bg-red-500 hover:bg-red-600",pink:"bg-pink-500 hover:bg-pink-600"};return m.jsxs(X.button,{whileHover:{scale:1.02},whileTap:{scale:.98},className:`${o} ${n[e]} ${p}`,onClick:r,children:[l&&m.jsx("i",{className:`pi ${l} text-lg`}),i]})};export{V as C,O as a};

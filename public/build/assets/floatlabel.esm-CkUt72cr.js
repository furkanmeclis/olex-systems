import{r as a,P as b,c}from"./app-BXkr8zNq.js";import{C as u,u as m,a as d}from"./ripple.esm-CO6ppkcz.js";var h={root:"p-float-label"},x=`
@layer primereact {
    .p-float-label {
        display: block;
        position: relative;
    }
    
    .p-float-label label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        margin-top: -.5rem;
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
    }
    
    .p-float-label:has(textarea) label {
        top: 1rem;
    }
    
    .p-float-label:has(input:focus) label,
    .p-float-label:has(input.p-filled) label,
    .p-float-label:has(input:-webkit-autofill) label,
    .p-float-label:has(textarea:focus) label,
    .p-float-label:has(textarea.p-filled) label,
    .p-float-label:has(.p-inputwrapper-focus) label,
    .p-float-label:has(.p-inputwrapper-filled) label {
        top: -.75rem;
        font-size: 12px;
    }
    
    .p-float-label .p-placeholder,
    .p-float-label input::placeholder,
    .p-float-label .p-inputtext::placeholder {
        opacity: 0;
        transition-property: all;
        transition-timing-function: ease;
    }
    
    .p-float-label .p-focus .p-placeholder,
    .p-float-label input:focus::placeholder,
    .p-float-label .p-inputtext:focus::placeholder {
        opacity: 1;
        transition-property: all;
        transition-timing-function: ease;
    }
}`,e=u.extend({defaultProps:{__TYPE:"FloatLabel",children:void 0},css:{classes:h,styles:x}}),y=a.memo(a.forwardRef(function(n){var o=m(),p=a.useContext(b),l=e.getProps(n,p),t=e.setMetaData({props:l}),s=t.ptm,r=t.cx,i=t.isUnstyled;d(e.css.styles,i,{name:"floatlabel"});var f=o({className:c(r("root"))},e.getOtherProps(l),s("root"));return a.createElement("span",f,l.children)}));y.displayName="FloatLabel";export{y as F};

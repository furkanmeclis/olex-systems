import{r as s,R as j,j as e,a as g,y as a}from"./app-C06Kjmxk.js";import{A as h}from"./AuthenticatedLayout-CoFeWjxL.js";import{C as c}from"./card.esm-CzMcFhUn.js";import{B as t}from"./button.esm-DCvNM1C8.js";import k from"./Create-xD96W6PL.js";import{D as v}from"./dialog.esm-CsSFZ9_e.js";import{T as C}from"./toast.esm-DiTTabRd.js";import"./ApplicationLogo-DSqVmwSA.js";import"./Dropdown-B4TP22Zb.js";import"./transition-CRyomFUz.js";import"./tag.esm-DaR0QQpM.js";import"./ripple.esm-CsFz5Fqa.js";import"./index.esm-CGvGAHiK.js";import"./tooltip.esm-BKYITgmf.js";import"./inputtext.esm-CVr_rsHb.js";import"./index.esm-Cz9gjibK.js";import"./formik.esm-dT2hvtnO.js";import"./_baseClone-BgPU1wOP.js";import"./message.esm-DwF8YMpw.js";import"./index.esm-hccNUhx6.js";import"./index.esm-BSupo2R5.js";import"./index.esm-zLfGjkYD.js";import"./badge.esm-BKODGsXE.js";import"./csstransition.esm-D6AyHK3D.js";import"./index.esm-D9cetd-B.js";function Q({auth:u,csrf_token:x,metrics:l}){const[i,f]=s.useState(!1),[r,m]=s.useState(!1),o=()=>{r&&m(!1)},[b,n]=s.useState(!1),p=j.useRef(null),d=s.useRef();return e.jsxs(h,{user:u.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Anasayfa"}),children:[e.jsx(g,{title:"Anasayfa"}),e.jsx(C,{ref:d}),e.jsx("div",{className:"py-6",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2",children:[e.jsxs(c,{title:"Müşteriler",subTitle:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"pi pi-users"})," ",l.customers," Adet Müşteri"]}),children:[e.jsx(t,{label:"Müşteriler",icon:"pi pi-users",className:"p-button-raised p-button-rounded mr-3",onClick:()=>{a.visit(route("worker.customers.index"))}}),e.jsx(t,{label:"Müşteri Ekle",icon:"pi pi-plus",className:"p-button-raised p-button-rounded",onClick:()=>{m(!0)}})]}),e.jsxs(c,{title:"Hizmetler",subTitle:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"pi pi-file"})," ",l.services," Adet Hizmet Kaydı"]}),children:[e.jsx(t,{label:"Hizmetler",icon:"pi pi-file",className:"p-button-raised p-button-rounded mr-3",onClick:()=>{a.visit(route("worker.services.index"))}}),e.jsx(t,{label:"Hizmet Ekle",icon:"pi pi-plus",className:"p-button-raised p-button-rounded",onClick:()=>{a.visit(route("worker.services.create"))}})]})]}),e.jsx(v,{header:"Müşteri Ekle",style:{width:"50vw"},breakpoints:{"960px":"75vw","641px":"100vw"},onHide:o,maximizable:!0,visible:r,footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Vazgeç",icon:"pi pi-times",size:"small",link:!0,onClick:o,loading:i}),e.jsx(t,{label:"Kaydet",icon:"pi pi-save",size:"small",type:"button",className:"p-button-success",loading:i,onClick:()=>{n(!0),p.current.click()}})]}),children:e.jsx(k,{createModal:r,csrf_token:x,toast:d,onHide:o,setUsers:()=>{},formRef:p,setFormSubmitted:n,workerHome:!0,formSubmitted:b,loading:i,setLoading:f})})]})})]})}export{Q as default};
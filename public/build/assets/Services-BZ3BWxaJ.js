import{j as e,r as s,F as z}from"./app-CVJZ1rcI.js";import"./Dropdown-vLFBetRL.js";import{T as L}from"./tag.esm-R7lHiOpe.js";import{T as O}from"./toast.esm-YLMMF5NU.js";import{D as R}from"./datatable.esm-CxOv3DFb.js";import{C as l}from"./column.esm-D98CmKFf.js";import{I as A}from"./inputtext.esm-DXx6Pg6G.js";import{B as n}from"./button.esm-BIF7ZDR2.js";import{T as D}from"./tooltip.esm-Cw7wRsUZ.js";import{C as E}from"./confirmpopup.esm-JCzDjJIv.js";import{T as B}from"./toolbar.esm-tMpu_sjq.js";import{O as u,C as G}from"./checkbox.esm-DlswQ5en.js";import{u as I}from"./ripple.esm-CUuqICLC.js";import{C as H}from"./CarBody-DszH-cIV.js";import"./transition-Bpse3GWM.js";import"./csstransition.esm-Cypi1K43.js";import"./index.esm-G63tnVm_.js";import"./index.esm-DBtDcsoH.js";import"./index.esm-B-7qKS2t.js";import"./index.esm-DNURKevS.js";import"./index.esm-2g_KHasO.js";import"./paginator.esm-DoER6ROs.js";import"./inputnumber.esm-Bh6skRq8.js";import"./index.esm-CHclCTdr.js";import"./dropdown.esm-B4P2N7CK.js";import"./index.esm-dx_Y6iUq.js";import"./overlayservice.esm-CGLbCpdx.js";import"./index.esm-ESICfo25.js";import"./index.esm-DDPajCZ5.js";import"./index.esm-BTVc7HnG.js";import"./index.esm-CztNWlA0.js";import"./scrollpanel.esm-ChVExyv4.js";function M({servicesAll:m}){const[b,K]=s.useState(!1),v=s.useRef(null),d=s.useRef(null),p=s.useRef(null),x=s.useRef(null);s.useState(!1);const[f,y]=s.useState({global:{value:null,matchMode:z.CONTAINS}}),[h,_]=s.useState(""),[k,Y]=s.useState(m),C=["id","service_no","customer_name","worker_name","warranty","status","car","updated_at","created_at","actions"],w={id:"ID",service_no:"Hizmet Numarası",customer_name:"Müşteri Adı",worker_name:"Ekleyen Çalışan",warranty:"Garanti Bilgileri",status:"Durumu",car:"Araç",updated_at:"Güncellenme Tarihi",created_at:"Eklenme Tarihi",actions:"İşlemler"},T="central-services-table-columns-2-23",[r,N]=I(["id","service_no","customer_name","worker_name","status","car","created_at","actions"],T),j=(t,a=!1)=>{const c=a?t:t.target.value;let o={...f};o.global.value=c,y(o),_(c)},S=e.jsx(e.Fragment,{children:e.jsx(B,{start:()=>e.jsx(e.Fragment,{children:e.jsx(n,{icon:"pi pi-bars",size:"small",severity:"info",tooltip:"Kolonları Yönet",tooltipOptions:{position:"top"},onClick:t=>{d.current.toggle(t)},className:"mr-2"})}),end:()=>e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"p-input-icon-left",children:[e.jsx("i",{className:"pi pi-search"}),e.jsx(A,{size:"small",value:h,onChange:j,placeholder:"Hizmetlerde Arama Yapın"})]}),h!==""&&e.jsx(n,{size:"small",icon:"pi pi-times",className:"p-button-info ml-2",onClick:()=>j("",!0),tooltip:"Filtreyi Temizle",tooltipOptions:{position:"top"}})]})})}),[i,g]=s.useState(null),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(D,{target:".custom-target-icon"}),e.jsx(E,{}),e.jsx(O,{ref:v}),e.jsx(u,{ref:d,children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h3",{children:"Kolonları Yönet"})}),e.jsxs("div",{className:"flex flex-col",children:[C.map((t,a)=>e.jsxs("div",{className:"flex my-1 items-center",children:[e.jsx(G,{inputId:t,checked:r.includes(t),onChange:c=>{let o=[...r];c.checked?o.push(t):o=o.filter(P=>P!==t),N(o)}}),e.jsx("label",{htmlFor:t,className:"ml-2",children:w[t]})]},a)),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx(n,{label:"Kaydet",severity:"success",size:"small",onClick:()=>{d.current.hide()}})})]})]})}),e.jsx(u,{ref:p,showCloseIcon:!0,closeOnEscape:!0,children:i&&i.status==="completed"&&e.jsx(e.Fragment,{children:e.jsx("ul",{children:i.warranty.map((t,a)=>e.jsxs("li",{children:[t.name," - ",t.label]}))})})}),e.jsx(u,{ref:x,showCloseIcon:!0,closeOnEscape:!0,children:e.jsx(H,{editable:!1,value:i==null?void 0:i.body,onChange:()=>{}})}),e.jsxs(R,{value:k,removableSort:!0,paginator:!0,paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",rowsPerPageOptions:[5,10,25,50],rows:10,dataKey:"id",filters:f,loading:b,globalFilterFields:["service_no","worker_name","car","customer_name","status"],header:S,emptyMessage:"Hizmet bulunamadı.",currentPageReportTemplate:"{first}. ile {last}. arası toplam {totalRecords} kayıttan",children:[r.includes("id")&&e.jsx(l,{field:"id",sortable:!0,header:"#"}),r.includes("service_no")&&e.jsx(l,{field:"service_no",sortable:!0,header:"Hizmet Numarası",body:({service_no:t})=>e.jsx(n,{label:t,link:!0,onClick:()=>{window.open(route("warranty.index",t),"_blank")}})}),r.includes("customer_name")&&e.jsx(l,{field:"customer.name",sortable:!0,header:"Müşteri Adı"}),r.includes("worker_name")&&e.jsx(l,{field:"worker.name",sortable:!0,header:"Ekleyen Çalışan"}),r.includes("warranty")&&e.jsx(l,{field:"warranty_x",align:"center",header:"Garanti Bilgileri",body:t=>e.jsx("div",{children:t.status==="completed"&&e.jsx(n,{icon:"pi pi-calendar",onClick:a=>{g(t),p.current.toggle(a)},tooltip:"Garanti Bilgileri",severity:"success"})})}),r.includes("status")&&e.jsx(l,{field:"status",sortable:!0,header:"Durumu",body:({status_label:t,status_severity:a})=>e.jsx(L,{value:t,severity:a})}),r.includes("car")&&e.jsx(l,{field:"car.brand",sortable:!0,header:"Araç",body:t=>e.jsx(n,{label:t.car.brand+"-"+t.car.model,size:"small",link:!0,onClick:a=>{g(t),x.current.toggle(a)}})}),r.includes("created_at")&&e.jsx(l,{field:"created_at",sortable:!0,header:"Eklenme Tarihi",body:t=>new Date(t.created_at).toLocaleString()}),r.includes("updated_at")&&e.jsx(l,{field:"updated_at",sortable:!0,header:"Güncellenme Tarihi",body:t=>new Date(t.updated_at).toLocaleString()})]})]});return e.jsx(F,{})}const Ce=m=>e.jsx("div",{children:e.jsx(M,{servicesAll:m.servicesAll})});export{Ce as default};
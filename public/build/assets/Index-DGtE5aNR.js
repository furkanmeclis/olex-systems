import{r as o,F as R,j as e,a as M}from"./app-Bhtd2so_.js";import{A}from"./AuthenticatedLayout-Bf69ZUn6.js";import{D as B}from"./datatable.esm-CdMsUngM.js";import{C as s}from"./column.esm-B1ecshoe.js";import{I as z}from"./inputtext.esm-DoEH5gtU.js";import{B as d}from"./button.esm-DHnRnYnu.js";import{T as E}from"./tooltip.esm-DpGcoAcr.js";import{C as H}from"./confirmpopup.esm-Dt0tS6AA.js";import{T as O}from"./toolbar.esm-C3AEMNwA.js";import{D as _}from"./dialog.esm-DMsSNw6I.js";import{T as q}from"./toast.esm-DebtePz8.js";import{T as f}from"./tag.esm-1ZNC7igu.js";import{D as I}from"./dropdown.esm-DTY3Z4Ks.js";import{D as G}from"./divider.esm-Cl3X8yYq.js";import"./ApplicationLogo-xWz2JCT2.js";import"./Dropdown-DyFXwSOI.js";import"./transition-B0MifrN8.js";import"./ripple.esm-Djw5BsU5.js";import"./index.esm-CUpLtHRy.js";import"./paginator.esm-yeGQTte6.js";import"./inputnumber.esm-BKeG49O9.js";import"./index.esm-Db9x0CYi.js";import"./index.esm-ChJheK5G.js";import"./index.esm-C4Afw053.js";import"./index.esm-eoHBwhS9.js";import"./index.esm-DyPh8Gts.js";import"./index.esm-C20aJjjy.js";import"./overlayservice.esm-Bl21pC8G.js";import"./csstransition.esm-_Klv9O-j.js";import"./index.esm-DRdpSAVi.js";import"./index.esm-CrsFoDzy.js";import"./index.esm-ksznoxKY.js";function Ne({auth:j,recordsAll:g,csrf_token:b,statuses:y}){const i=o.useRef(null),[m,v]=o.useState({global:{value:null,matchMode:R.CONTAINS}}),[p,c]=o.useState(!1),[n,w]=o.useState([]),[N,u]=o.useState(!1),[x,S]=o.useState(""),[k,T]=o.useState(g),h=(t,r=!1)=>{const a=r?t:t.target.value;let l={...m};l.global.value=a,v(l),S(a)},D=t=>e.jsx(I,{value:t.value,options:y,onChange:r=>t.editorCallback(r.value),optionLabel:"label",optionValue:"value",placeholder:"Select a Status",itemTemplate:r=>e.jsx(f,{value:r.label,severity:r.severity})}),C=()=>e.jsx(e.Fragment,{children:e.jsx(O,{end:()=>e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"p-input-icon-left",children:[e.jsx("i",{className:"pi pi-search"}),e.jsx(z,{size:"small",value:x,onChange:h,placeholder:"Stok Kayıtlarında Arama Yapın"})]}),x!==""&&e.jsx(d,{size:"small",icon:"pi pi-times",className:"p-button-info ml-2",onClick:()=>h("",!0),tooltip:"Filtreyi Temizle",tooltipOptions:{position:"top"}})]})})}),F=t=>e.jsx(f,{value:t.status_label,severity:t.status_severity}),P=C(),K=async t=>{const r={id:t.newData.id,quantity:t.newData.quantity,status:t.newData.status};u(!0),fetch(route("central.stock-management.update",r.id),{method:"PUT",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":b},body:JSON.stringify(r)}).then(a=>a.json()).then(a=>{a.status?(i.current.show({severity:"success",summary:"Başarılı",detail:a.message}),T(a.records)):i.current.show({severity:"error",summary:"Hata",detail:a.message})}).catch(a=>{i.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{u(!1)})};return e.jsxs(A,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Stok Kayıtları"}),children:[e.jsx(M,{title:"Stok Kayıtları"}),e.jsx(E,{target:".custom-target-icon"}),e.jsx(H,{}),e.jsx(q,{ref:i}),e.jsx("div",{className:"py-6",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs(B,{dragSelection:!0,value:k,removableSort:!0,paginator:!0,paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",rowsPerPageOptions:[5,10,25,50],rows:10,filters:m,loading:N,globalFilterFields:["product.name","dealer.name","status","quantity"],header:P,rowClassName:t=>"cursor-pointer",emptyMessage:"Kayıt bulunamadı.",onRowEditComplete:K,rowHover:!0,editMode:"row",dataKey:"id",currentPageReportTemplate:"{first}. ile {last}. arası toplam {totalRecords} kayıttan",children:[e.jsx(s,{field:"id",sortable:!0,header:"#"}),e.jsx(s,{field:"dealer.name",sortable:!0,header:"Bayi Adı"}),e.jsx(s,{field:"product.name",sortable:!0,header:"Ürün Adı"}),e.jsx(s,{field:"quantity",sortable:!0,header:"Ürün Adedi"}),e.jsx(s,{field:"status",editor:D,header:"Durumu",body:F}),e.jsx(s,{field:"note",header:"Not"}),e.jsx(s,{field:"updated_at",sortable:!0,header:"Son Değişiklik Tarihi",body:t=>new Date(t.updated_at).toLocaleString()}),e.jsx(s,{sortable:!0,header:"Ürün Kodları",body:t=>e.jsx(d,{icon:"pi pi-qrcode",tooltip:"Ürün Kodlarını Görüntüle",onClick:()=>{w(t.product),c(!0)}})}),e.jsx(s,{rowEditor:!0,headerStyle:{width:"10%",minWidth:"8rem"},bodyStyle:{textAlign:"center"}})]})})})}),e.jsx(_,{header:"Ürünler",style:{width:"50vw"},breakpoints:{"960px":"75vw","641px":"100vw"},onHide:()=>c(!1),maximizable:!0,visible:p,footer:()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Kapat",icon:"pi pi-times",onClick:()=>c(!1),severity:"warning",size:"small"}),e.jsx(d,{label:"Kaydet",icon:"pi pi-cloud-download",size:"small",severity:"success",onClick:()=>{if(n.codes.length===0){i.current.show({severity:"warn",summary:"Hata",detail:"Ürün Kodu Bulunamadı"});return}else{let t="";n.codes.map(({code:L})=>{t+=L+`
`});const r=new Blob([t],{type:"text/plain"}),a=URL.createObjectURL(r),l=document.createElement("a");l.href=a,l.download=n.name+" Ürün Kodları.txt",l.click()}}})]}),children:p&&e.jsxs("div",{className:"card flex flex-col",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex p-2 items-center gap-3 ",children:[e.jsx("span",{className:"font-bold flex-1",children:e.jsx("span",{className:"border-b",children:"Ürün Kodu"})}),e.jsx("span",{children:e.jsx("span",{className:"border-b",children:"Son Değişiklik Tarihi"})})]})}),n.codes.length===0&&e.jsx("div",{className:"flex p-2 items-center gap-3 ",children:e.jsx("span",{className:"font-bold flex-1 border-b border-dashed ",children:"Ürün Kodu Bulunamadı"})}),n.codes.map(({code:t,updated_at:r},a)=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex p-2 items-center gap-3 ",children:[e.jsx("span",{className:"font-bold flex-1",children:e.jsx("span",{className:"select-all",children:t})}),e.jsx("span",{children:new Date(r).toLocaleString()})]}),e.jsx(G,{})]},a))]})})]})}export{Ne as default};
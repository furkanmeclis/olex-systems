import{j as e,r as a,F as Se,a as be,y as we}from"./app-Bhtd2so_.js";import{A as Ce}from"./AuthenticatedLayout-Bf69ZUn6.js";import{D as Te}from"./datatable.esm-CdMsUngM.js";import{C as p}from"./column.esm-B1ecshoe.js";import{B as u}from"./button.esm-DHnRnYnu.js";import{T as ke}from"./tooltip.esm-DpGcoAcr.js";import{C as Ne,c as I}from"./confirmpopup.esm-Dt0tS6AA.js";import{T as Fe}from"./toolbar.esm-C3AEMNwA.js";import{D as S}from"./dialog.esm-DMsSNw6I.js";import{T as ze}from"./toast.esm-DebtePz8.js";import{T as De}from"./tag.esm-1ZNC7igu.js";import{D as B}from"./dropdown.esm-DTY3Z4Ks.js";import{O as Me,C as He}from"./checkbox.esm-C2AtcEvR.js";import Re from"./Create-CtouhluO.js";import Ee from"./Update-IRSzNj2B.js";import{I as Le}from"./image.esm-DrvVfQ0s.js";import{D as Pe}from"./divider.esm-Cl3X8yYq.js";import _e from"./ProductCodes-BoYejHv4.js";import"./ApplicationLogo-xWz2JCT2.js";import"./Dropdown-DyFXwSOI.js";import"./transition-B0MifrN8.js";import"./ripple.esm-Djw5BsU5.js";import"./index.esm-CUpLtHRy.js";import"./paginator.esm-yeGQTte6.js";import"./inputnumber.esm-BKeG49O9.js";import"./inputtext.esm-DoEH5gtU.js";import"./index.esm-Db9x0CYi.js";import"./index.esm-ChJheK5G.js";import"./index.esm-C4Afw053.js";import"./index.esm-eoHBwhS9.js";import"./index.esm-DyPh8Gts.js";import"./index.esm-C20aJjjy.js";import"./overlayservice.esm-Bl21pC8G.js";import"./csstransition.esm-_Klv9O-j.js";import"./index.esm-DRdpSAVi.js";import"./index.esm-CrsFoDzy.js";import"./index.esm-ksznoxKY.js";import"./steps.esm-BwhrkFMV.js";import"./floatlabel.esm-D3hKl8Rc.js";import"./multiselect.esm-B75YdUT4.js";import"./inputtextarea.esm-BfCGjZeQ.js";import"./index.esm-zmjat01w.js";import"./treetable.esm-MCz782w9.js";import"./index.esm-COGpqXA0.js";import"./formik.esm-DeB_CGcg.js";import"./_baseClone-BgPU1wOP.js";function Dt({auth:z,ordersAll:Y,csrf_token:m,statuses:j,salesmans:X,dealerPage:b=!1,dealerOrderPage:o=!1}){const D=()=>{const r=a.useRef(null),w=a.useRef(null);a.useState({global:{value:null,matchMode:Se.CONTAINS}});const[G,h]=a.useState(!1);a.useState("");const[M,f]=a.useState(Y),[H,$]=a.useState([]),[R,U]=a.useState([]),[q,J]=a.useState(null);a.useState([]);const[c,E]=a.useState(!1),[V,Q]=a.useState([]),L=["id","dealer","user","status","products_count","price","created_at","updated_at","actions"],[n,W]=a.useState(localStorage.getItem("selectedColumnsForOrdersTable")?JSON.parse(localStorage.getItem("selectedColumnsForOrdersTable")):L),Z={id:"ID",price:"Sipariş Tutarı",dealer:"Bayi",user:"Yetkili",status:"Durumu",products_count:"Ürün Adedi",updated_at:"Güncellenme Tarihi",created_at:"Eklenme Tarihi",actions:"İşlemler"},ee=()=>{h(!0),fetch(route("super.dealers.listAll"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":m}}).then(t=>t.json()).then(t=>{$(t.dealers)}).catch(t=>{console.log(t),r.current.show({severity:"error",summary:"Hata",detail:"Bayiler getirilirken bir hata oluştu."})}).finally(()=>{h(!1)})},te=()=>{h(!0),fetch(route("super.products.listAll"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":m}}).then(t=>t.json()).then(t=>{U(t.products.map(s=>(s.total=s.price,s.quantity=1,s)))}).catch(t=>{console.log(t),r.current.show({severity:"error",summary:"Hata",detail:"Ürünler getirilirken bir hata oluştu."})}).finally(()=>{h(!1)})},se=()=>{h(!0),fetch(route("super.orders.trashAll"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":m}}).then(t=>t.json()).then(t=>{Q(M),f(t.records),E(!0)}).catch(t=>{console.log(t),r.current.show({severity:"error",summary:"Hata",detail:"Çöp sepetindeki siparişler getirilirken bir hata oluştu."})}).finally(()=>{h(!1)})};a.useEffect(()=>{ee(),te()},[]),a.useEffect(()=>{localStorage.setItem("selectedColumnsForOrdersTable",JSON.stringify(n))},[n]);const[P,C]=a.useState(!1),[_,T]=a.useState(!1),[O,k]=a.useState(!1),[A,ae]=a.useState(!1),[re,ie]=a.useState(!1),[le,oe]=a.useState(e.jsx(e.Fragment,{})),[ne,ce]=a.useState(e.jsx(e.Fragment,{})),[x,g]=a.useState([]),[K,N]=a.useState(!1),[de,ue]=a.useState([]),[pe,me]=a.useState(e.jsx(e.Fragment,{})),he=t=>{N(!0),ue(t)},fe=()=>e.jsx(e.Fragment,{children:e.jsx(Fe,{start:()=>e.jsxs(e.Fragment,{children:[!b&&e.jsx(u,{icon:"pi pi-plus",size:"small",severity:"success",tooltip:"Yeni Sipariş Ekle",tooltipOptions:{position:"top"},onClick:()=>{C(!0)},className:"mr-2"}),e.jsx(u,{icon:"pi pi-bars",size:"small",severity:"info",tooltip:"Kolonları Yönet",tooltipOptions:{position:"top"},onClick:t=>{w.current.toggle(t)},className:"mr-2"}),!b&&!o&&e.jsx(u,{icon:c?"pi pi-folder-open":"pi pi-trash",size:"small",severity:"help",tooltip:c?"Çöp Sepetini Kapat":"Çöp Sepetini Görüntüle",tooltipOptions:{position:"top"},onClick:t=>{c?(f(V),E(!1)):se()},className:"mr-2"}),x.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(u,{size:"small",icon:"pi pi-times",className:"p-button-warning mr-2",onClick:()=>g([]),tooltip:"Seçimi Temizle",tooltipOptions:{position:"top"}}),e.jsx(u,{size:"small",onClick:t=>{I({target:t.currentTarget,message:c?`Seçilen ${g.length} siparişi geri yüklemek istediğinize emin misiniz?`:`Seçilen ${g.length} siparişi silmek istediğinize emin misiniz?`,icon:"pi pi-exclamation-triangle",defaultFocus:"reject",acceptClassName:"p-button-danger",accept:()=>{let s=c?route("super.orders.restore"):route("super.orders.multipleDestroy");fetch(s,{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":m},body:JSON.stringify({recordIds:x.map(i=>i.id)})}).then(async i=>{let l=await i.json();i.status===404?r.current.show({severity:"error",summary:"Hata",detail:l.message}):i.status===500?r.current.show({severity:"warning",summary:"Hata",detail:l.message}):i.status===200&&(r.current.show({severity:"success",summary:"Başarılı",detail:l.message}),f(l.records))}).catch(i=>{r.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{g([])})},acceptLabel:c?"Geri Yükle":"Sil",rejectLabel:"Vazgeç"})},icon:c?"pi pi-sync":"pi pi-trash",className:c?"p-button-success mr-2":"p-button-danger mr-2",tooltip:c?`Seçilen ${x.length} siparişi geri yükle`:`Seçilen ${x.length} siparişi Sil`,tooltipOptions:{position:"top"}})]})]}),center:()=>e.jsx(e.Fragment,{children:e.jsxs("p",{className:"flex flex-col items-center justify-center",children:[c&&e.jsx("h3",{className:"text-white font-semibold text-lg",children:"Çöp Sepeti"}),x.length>0&&e.jsxs("span",{children:[x.length," sipariş seçildi."]})]})})})}),xe=t=>e.jsx(De,{value:t.status_label,severity:t.status_severity}),ye=fe(),je=t=>{T(!0),ie(t)},ge=t=>{let s=t.newRowData,i=t.rowData,l=t.rowIndex,y=new FormData;y.append("status",s.status),y.append("_method","PUT"),s.status!==i.status&&(h(!0),fetch(route("super.orders.statusUpdate",s.id),{method:"POST",headers:{"X-CSRF-TOKEN":m},body:y}).then(d=>d.json()).then(d=>{d.status?(d==null?void 0:d.dirty)!==!1&&(f(ve=>{let v=[...ve];return v[l].status_severity=j.find(F=>F.value===s.status).severity,v[l].status_label=j.find(F=>F.value===s.status).label,v[l].status=s.status,v[l].updated_at=d.updated_at,v}),r.current.show({severity:"success",summary:"İşlem Başarılı",detail:d.message})):r.current.show({severity:"error",summary:"Hata",detail:d.message})}).catch(d=>{r.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{h(!1)}))};return e.jsxs(e.Fragment,{children:[e.jsx(be,{title:"Siparişler"}),e.jsx(ke,{target:".custom-target-icon"}),e.jsx(Ne,{}),e.jsx(ze,{ref:r}),e.jsx(Me,{ref:w,children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h3",{children:"Kolonları Yönet"})}),e.jsxs("div",{className:"flex flex-col",children:[L.map((t,s)=>e.jsxs("div",{className:"flex my-1 items-center",children:[e.jsx(He,{inputId:t,checked:n.includes(t),onChange:i=>{let l=[...n];i.checked?l.push(t):l=l.filter(y=>y!==t),W(l)}}),e.jsx("label",{htmlFor:t,className:"ml-2",children:Z[t]})]},s)),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx(u,{label:"Kaydet",severity:"success",size:"small",onClick:()=>{w.current.hide()}})})]})]})}),e.jsxs(Te,{editMode:"cell",dragSelection:!0,value:M,removableSort:!0,paginator:!0,paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",rowsPerPageOptions:[5,10,25,50],rows:10,filters:{"dealer.name":{value:"",matchMode:"contains"},"user.name":{value:"",matchMode:"contains"},status:{value:null,matchMode:"equals"}},filterDisplay:"row",loading:G,selectionMode:"checkbox",selection:x,onSelectionChange:t=>{o||g(t.value)},header:ye,rowClassName:t=>t.deleted_at!==null?"blur-[.8px] hover:blur-none  ease-in duration-300":"",emptyMessage:"Sipariş bulunamadı.",rowHover:!0,dataKey:"id",currentPageReportTemplate:"{first}. ile {last}. arası toplam {totalRecords} kayıttan",children:[!o&&e.jsx(p,{selectionMode:"multiple",headerStyle:{width:"3rem"}}),n.includes("id")&&e.jsx(p,{field:"id",header:"ID",sortable:!0}),n.includes("dealer")&&e.jsx(p,{field:"dealer.name",filter:!0,filterPlaceholder:"Bayi Adına Göre Filtreleyin",align:"center",body:t=>e.jsx(u,{link:!0,size:"small",label:t.dealer.name,onClick:()=>{o||we.visit(route("super.dealers.show",t.dealer.id))}}),sortable:!0,header:"Bayi Adı"}),n.includes("user")&&e.jsx(p,{field:"user.name",filter:!0,filterPlaceholder:"Yetkiliye Göre Filtreleyin",sortable:!0,header:"Yetkili"}),n.includes("status")&&e.jsx(p,{field:"status",header:"Durumu",body:xe,filter:!0,filterElement:t=>e.jsx(B,{value:t.value,onChange:s=>t.filterApplyCallback(s.value),options:j,optionLabel:"label",className:"p-column-filter",showClear:!0}),editor:c||o===!0?null:t=>(J(t.rowData.status),e.jsx(e.Fragment,{children:e.jsx(B,{value:q,onChange:s=>t.editorCallback(s.value),options:j,optionLabel:"label",className:"w-full"})})),onCellEditComplete:ge}),n.includes("products_count")&&e.jsx(p,{field:"products_count",body:t=>e.jsx(u,{link:!0,onClick:()=>{t.products_count===0?r.current.show({severity:"info",summary:"Bilgi",detail:"Siparişte ürün bulunmamaktadır."}):(k(!0),ae(t.products))},tooltip:"Detayları Görmek İçin Tıklayınız.",label:t.products_count+" Adet",size:"small"}),sortable:!0,header:"Ürün Adedi"}),n.includes("price")&&e.jsx(p,{field:"price",header:"Sipariş Tutarı",body:t=>Number(t.products.reduce((s,i)=>s+i.price,0)).toFixed(2)+" $",sortable:!0}),n.includes("created_at")&&e.jsx(p,{field:"created_at",sortable:!0,header:"Eklenme Tarihi",body:t=>new Date(t.created_at).toLocaleString()}),n.includes("updated_at")&&e.jsx(p,{field:"updated_at",sortable:!0,header:"Güncellenme Tarihi",body:t=>new Date(t.updated_at).toLocaleString()}),n.includes("actions")&&!c&&!o&&e.jsx(p,{field:"actions",header:"İşlemler",body:t=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex justify-center gap-x-2",children:[e.jsx(u,{icon:"pi pi-qrcode",size:"small",tooltip:"Ürün Kodları",onClick:()=>{he(t)},tooltipOptions:{position:"top"},severity:"success"}),!o&&e.jsx(u,{icon:"pi pi-pencil",size:"small",tooltip:"Siparişi Düzenle",onClick:()=>{je(t)},tooltipOptions:{position:"top"},severity:"warning"}),!o&&e.jsx(u,{icon:"pi pi-times",tooltip:"Siparişi Sil",tooltipOptions:{position:"top"},size:"small",onClick:s=>{I({target:s.currentTarget,message:"Siparişi silmek istediğinize emin misiniz?",icon:"pi pi-exclamation-triangle",acceptClassName:"p-button-danger",accept:()=>{fetch(route("super.orders.destroy",t.id),{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":m}}).then(async i=>{let l=await i.json();i.status===404?r.current.show({severity:"error",summary:"Hata",detail:l.message}):i.status===500?r.current.show({severity:"warning",summary:"Hata",detail:l.message}):i.status===200&&(r.current.show({severity:"success",summary:"Başarılı",detail:l.message}),f(y=>y.filter(d=>d.id!==t.id)))}).catch(i=>{r.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})})},acceptLabel:"Sil",rejectLabel:"Vazgeç"})},severity:"danger"})]})})})]}),e.jsx(S,{header:"Yeni Sipariş Ekle",style:{width:"70vw"},breakpoints:{"960px":"75vw","641px":"100vw"},onHide:()=>C(!1),maximizable:!0,visible:P,footer:le,children:e.jsx(Re,{addModal:P,csrf_token:m,dealers:H,products:R,toast:r,initialDealer:o?z.user:null,dealerOrderPage:o,onHide:()=>C(!1),setRecords:f,setAddModalFooter:oe})}),e.jsx(S,{header:"Ürünler",style:{width:"50vw"},breakpoints:{"960px":"75vw","641px":"100vw"},onHide:()=>k(!1),maximizable:!0,visible:O,footer:()=>e.jsx(u,{label:"Kapat",onClick:()=>k(!1),severity:"warning",size:"small"}),children:O&&e.jsxs("div",{className:"card flex flex-col",children:[A.map(t=>{let s=t.product;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex p-2 items-center gap-3 ",children:[e.jsx(Le,{className:"w-[4rem] shadow-2 flex-shrink-0 border-round",preview:!0,src:s.image,alt:s.name}),e.jsxs("span",{className:"font-bold flex-1",children:[t.quantity," Adet - ",s.name," (#",s.sku,")"]}),e.jsxs("span",{className:"font-bold text-900",children:["$ ",t.price]})]}),e.jsx(Pe,{})]})}),e.jsxs("div",{className:"flex p-2 items-center gap-3 ",children:[e.jsx("span",{className:"font-bold flex-1",children:"Toplam"}),e.jsxs("span",{className:"font-bold text-900",children:["$ ",A.reduce((t,s)=>t+s.price,0)]})]})]})}),!o&&e.jsx(S,{header:"Siparişi Düzenle",style:{width:"70vw"},breakpoints:{"960px":"75vw","641px":"100vw"},onHide:()=>T(!1),maximizable:!0,visible:_,footer:ne,children:e.jsx(Ee,{updateModal:_,salesmans:X,statuses:j,dealerOrderPage:o,csrf_token:m,dealers:H,products:R,record:re,toast:r,onHide:()=>T(!1),setRecords:f,setUpdateModalFooter:ce})}),e.jsx(S,{header:"Ürün Kodları",style:{width:"70vw"},breakpoints:{"960px":"75vw","641px":"100vw"},onHide:()=>N(!1),maximizable:!0,visible:K,footer:pe,children:e.jsx(_e,{productCodesModal:K,order:de,setRecords:f,csrf_token:m,toast:r,onHide:()=>N(!1),setFooter:me})})]})};return b||o?e.jsx(D,{}):e.jsx(Ce,{user:z.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Siparişler"}),children:e.jsx("div",{className:"py-6",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx(D,{})})})})})}export{Dt as default};
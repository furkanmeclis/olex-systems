import{j as e,r as a,F as Te,a as ke,y as Ne}from"./app-ByJu4dNU.js";import{A as Fe}from"./AuthenticatedLayout-BUm5pRRv.js";import{D as ze}from"./datatable.esm-oEDKHZEm.js";import{C as p}from"./column.esm-zi55Ootl.js";import{I as De}from"./inputtext.esm-B7bQ2xES.js";import{B as d}from"./button.esm-NdAN6Zra.js";import{T as Me}from"./tooltip.esm-Qbmp7RO6.js";import{C as He,c as X}from"./confirmpopup.esm-D1qz3Tmh.js";import{T as Re}from"./toolbar.esm-7VVT_FTd.js";import{D as b}from"./dialog.esm-73asXoq6.js";import{T as _e}from"./toast.esm-B3eWfIZr.js";import{T as Ee}from"./tag.esm-C8Bd4_E3.js";import{D as Oe}from"./dropdown.esm-DYKLOoBX.js";import{O as Le,C as Pe}from"./checkbox.esm-CTWFO_OP.js";import Ae from"./Create-RFPLEgC4.js";import Ie from"./Update-_oY_Lk3W.js";import{I as Ke}from"./image.esm-BP1l8xEN.js";import{D as Ye}from"./divider.esm-CspuJUG0.js";import Be from"./ProductCodes-BMebEx49.js";import"./ApplicationLogo-CH63_8P2.js";import"./Dropdown-C8_4X2gx.js";import"./transition-ChVoFVC_.js";import"./ripple.esm-DVOzkR0Z.js";import"./index.esm-B4IXFwYI.js";import"./paginator.esm-BgYLmhtY.js";import"./inputnumber.esm-CQmfIYN9.js";import"./index.esm-Y4mq6vV8.js";import"./index.esm-DVkhJMLF.js";import"./index.esm-BZ__EFKP.js";import"./index.esm-Bf7BvPu-.js";import"./index.esm-Cbc1Zeel.js";import"./index.esm-DJgHaFZm.js";import"./overlayservice.esm-61u2ope0.js";import"./csstransition.esm-YXMguxKw.js";import"./index.esm-Bx9LTo6Y.js";import"./index.esm-_S9D5RbG.js";import"./index.esm-DK5sDiZt.js";import"./steps.esm-CmH8q3M-.js";import"./floatlabel.esm-3Vyzzy8W.js";import"./multiselect.esm-MlNsfKvJ.js";import"./inputtextarea.esm-D9gc9WFT.js";import"./index.esm-DTpJTif_.js";import"./treetable.esm-D2rAISCI.js";import"./index.esm-DlsrUWVr.js";import"./formik.esm-CiEZ6rRD.js";import"./_baseClone-BgPU1wOP.js";function Ot({auth:z,ordersAll:G,csrf_token:m,statuses:S,salesmans:$,dealerPage:v=!1,dealerOrderPage:o=!1}){const D=()=>{const l=a.useRef(null),w=a.useRef(null),[M,U]=a.useState({global:{value:null,matchMode:Te.CONTAINS}}),[V,h]=a.useState(!1),[H,q]=a.useState(""),[R,x]=a.useState(G),[_,J]=a.useState([]),[E,Q]=a.useState([]),[W,Z]=a.useState(null);a.useState([]);const[n,O]=a.useState(!1),[ee,te]=a.useState([]),L=["id","dealer","user","status","products_count","price","created_at","updated_at","actions"],[c,se]=a.useState(localStorage.getItem("selectedColumnsForOrdersTable")?JSON.parse(localStorage.getItem("selectedColumnsForOrdersTable")):L),ae={id:"ID",price:"Sipariş Tutarı",dealer:"Bayi",user:"Yetkili",status:"Durumu",products_count:"Ürün Adedi",updated_at:"Güncellenme Tarihi",created_at:"Eklenme Tarihi",actions:"İşlemler"},ie=()=>{h(!0),fetch(route("super.dealers.listAll"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":m}}).then(t=>t.json()).then(t=>{J(t.dealers)}).catch(t=>{console.log(t),l.current.show({severity:"error",summary:"Hata",detail:"Bayiler getirilirken bir hata oluştu."})}).finally(()=>{h(!1)})},re=()=>{h(!0),fetch(route("super.products.listAll"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":m}}).then(t=>t.json()).then(t=>{Q(t.products.map(s=>(s.total=s.price,s.quantity=1,s)))}).catch(t=>{console.log(t),l.current.show({severity:"error",summary:"Hata",detail:"Ürünler getirilirken bir hata oluştu."})}).finally(()=>{h(!1)})},le=()=>{h(!0),fetch(route("super.orders.trashAll"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":m}}).then(t=>t.json()).then(t=>{te(R),x(t.records),O(!0)}).catch(t=>{console.log(t),l.current.show({severity:"error",summary:"Hata",detail:"Çöp sepetindeki siparişler getirilirken bir hata oluştu."})}).finally(()=>{h(!1)})};a.useEffect(()=>{ie(),re()},[]),a.useEffect(()=>{localStorage.setItem("selectedColumnsForOrdersTable",JSON.stringify(c))},[c]);const P=(t,s=!1)=>{const i=s?t:t.target.value;let r={...M};r.global.value=i,U(r),q(i)},[A,C]=a.useState(!1),[I,T]=a.useState(!1),[K,k]=a.useState(!1),[Y,oe]=a.useState(!1),[ne,ce]=a.useState(!1),[de,ue]=a.useState(e.jsx(e.Fragment,{})),[pe,me]=a.useState(e.jsx(e.Fragment,{})),[f,j]=a.useState([]),[B,N]=a.useState(!1),[he,xe]=a.useState([]),[fe,ye]=a.useState(e.jsx(e.Fragment,{})),je=t=>{N(!0),xe(t)},ge=()=>e.jsx(e.Fragment,{children:e.jsx(Re,{start:()=>e.jsxs(e.Fragment,{children:[!v&&e.jsx(d,{icon:"pi pi-plus",size:"small",severity:"success",tooltip:"Yeni Sipariş Ekle",tooltipOptions:{position:"top"},onClick:()=>{C(!0)},className:"mr-2"}),e.jsx(d,{icon:"pi pi-bars",size:"small",severity:"info",tooltip:"Kolonları Yönet",tooltipOptions:{position:"top"},onClick:t=>{w.current.toggle(t)},className:"mr-2"}),!v&&!o&&e.jsx(d,{icon:n?"pi pi-folder-open":"pi pi-trash",size:"small",severity:"help",tooltip:n?"Çöp Sepetini Kapat":"Çöp Sepetini Görüntüle",tooltipOptions:{position:"top"},onClick:t=>{n?(x(ee),O(!1)):le()},className:"mr-2"}),f.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(d,{size:"small",icon:"pi pi-times",className:"p-button-warning mr-2",onClick:()=>j([]),tooltip:"Seçimi Temizle",tooltipOptions:{position:"top"}}),e.jsx(d,{size:"small",onClick:t=>{X({target:t.currentTarget,message:n?`Seçilen ${j.length} siparişi geri yüklemek istediğinize emin misiniz?`:`Seçilen ${j.length} siparişi silmek istediğinize emin misiniz?`,icon:"pi pi-exclamation-triangle",defaultFocus:"reject",acceptClassName:"p-button-danger",accept:()=>{let s=n?route("super.orders.restore"):route("super.orders.multipleDestroy");fetch(s,{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":m},body:JSON.stringify({recordIds:f.map(i=>i.id)})}).then(async i=>{let r=await i.json();i.status===404?l.current.show({severity:"error",summary:"Hata",detail:r.message}):i.status===500?l.current.show({severity:"warning",summary:"Hata",detail:r.message}):i.status===200&&(l.current.show({severity:"success",summary:"Başarılı",detail:r.message}),x(r.records))}).catch(i=>{l.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{j([])})},acceptLabel:n?"Geri Yükle":"Sil",rejectLabel:"Vazgeç"})},icon:n?"pi pi-sync":"pi pi-trash",className:n?"p-button-success mr-2":"p-button-danger mr-2",tooltip:n?`Seçilen ${f.length} siparişi geri yükle`:`Seçilen ${f.length} siparişi Sil`,tooltipOptions:{position:"top"}})]})]}),center:()=>e.jsx(e.Fragment,{children:e.jsxs("p",{className:"flex flex-col items-center justify-center",children:[n&&e.jsx("h3",{className:"text-white font-semibold text-lg",children:"Çöp Sepeti"}),f.length>0&&e.jsxs("span",{children:[f.length," sipariş seçildi."]})]})}),end:()=>e.jsx(e.Fragment,{children:!n&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"p-input-icon-left",children:[e.jsx("i",{className:"pi pi-search"}),e.jsx(De,{size:"small",value:H,onChange:P,placeholder:"Siparişlerde Arama Yapın"})]}),H!==""&&e.jsx(d,{size:"small",icon:"pi pi-times",className:"p-button-info ml-2",onClick:()=>P("",!0),tooltip:"Filtreyi Temizle",tooltipOptions:{position:"top"}})]})})})}),Se=t=>e.jsx(Ee,{value:t.status_label,severity:t.status_severity}),be=ge(),ve=t=>{T(!0),ce(t)},we=t=>{let s=t.newRowData,i=t.rowData,r=t.rowIndex,y=new FormData;y.append("status",s.status),y.append("_method","PUT"),s.status!==i.status&&(h(!0),fetch(route("super.orders.statusUpdate",s.id),{method:"POST",headers:{"X-CSRF-TOKEN":m},body:y}).then(u=>u.json()).then(u=>{u.status?(u==null?void 0:u.dirty)!==!1&&(x(Ce=>{let g=[...Ce];return g[r].status_severity=S.find(F=>F.value===s.status).severity,g[r].status_label=S.find(F=>F.value===s.status).label,g[r].status=s.status,g[r].updated_at=u.updated_at,g}),l.current.show({severity:"success",summary:"İşlem Başarılı",detail:u.message})):l.current.show({severity:"error",summary:"Hata",detail:u.message})}).catch(u=>{l.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{h(!1)}))};return e.jsxs(e.Fragment,{children:[e.jsx(ke,{title:"Siparişler"}),e.jsx(Me,{target:".custom-target-icon"}),e.jsx(He,{}),e.jsx(_e,{ref:l}),e.jsx(Le,{ref:w,children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h3",{children:"Kolonları Yönet"})}),e.jsxs("div",{className:"flex flex-col",children:[L.map((t,s)=>e.jsxs("div",{className:"flex my-1 items-center",children:[e.jsx(Pe,{inputId:t,checked:c.includes(t),onChange:i=>{let r=[...c];i.checked?r.push(t):r=r.filter(y=>y!==t),se(r)}}),e.jsx("label",{htmlFor:t,className:"ml-2",children:ae[t]})]},s)),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx(d,{label:"Kaydet",severity:"success",size:"small",onClick:()=>{w.current.hide()}})})]})]})}),e.jsxs(ze,{editMode:"cell",dragSelection:!0,value:R,removableSort:!0,paginator:!0,paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",rowsPerPageOptions:[5,10,25,50],rows:10,filters:M,loading:V,globalFilterFields:[],selectionMode:"checkbox",selection:f,onSelectionChange:t=>{o||j(t.value)},header:be,rowClassName:t=>t.deleted_at!==null?"blur-[.8px] hover:blur-none  ease-in duration-300":"",emptyMessage:"Sipariş bulunamadı.",rowHover:!0,dataKey:"id",currentPageReportTemplate:"{first}. ile {last}. arası toplam {totalRecords} kayıttan",children:[!o&&e.jsx(p,{selectionMode:"multiple",headerStyle:{width:"3rem"}}),c.includes("id")&&e.jsx(p,{field:"id",header:"ID",sortable:!0}),c.includes("dealer")&&e.jsx(p,{field:"dealer.name",align:"center",body:t=>e.jsx(d,{link:!0,size:"small",label:t.dealer.name,onClick:()=>{o||Ne.visit(route("super.dealers.show",t.dealer.id))}}),sortable:!0,header:"Bayi Adı"}),c.includes("user")&&e.jsx(p,{field:"user.name",sortable:!0,header:"Yetkili"}),c.includes("status")&&e.jsx(p,{field:"status",header:"Durumu",body:Se,editor:n||o===!0?null:t=>(Z(t.rowData.status),e.jsx(e.Fragment,{children:e.jsx(Oe,{value:W,onChange:s=>t.editorCallback(s.value),options:S,optionLabel:"label",className:"w-full"})})),onCellEditComplete:we}),c.includes("products_count")&&e.jsx(p,{field:"products_count",body:t=>e.jsx(d,{link:!0,onClick:()=>{t.products_count===0?l.current.show({severity:"info",summary:"Bilgi",detail:"Siparişte ürün bulunmamaktadır."}):(k(!0),oe(t.products))},tooltip:"Detayları Görmek İçin Tıklayınız.",label:t.products_count+" Adet",size:"small"}),sortable:!0,header:"Ürün Adedi"}),c.includes("price")&&e.jsx(p,{field:"price",header:"Sipariş Tutarı",body:t=>Number(t.products.reduce((s,i)=>s+i.price,0)).toFixed(2)+" $",sortable:!0}),c.includes("created_at")&&e.jsx(p,{field:"created_at",sortable:!0,header:"Eklenme Tarihi",body:t=>new Date(t.created_at).toLocaleString()}),c.includes("updated_at")&&e.jsx(p,{field:"updated_at",sortable:!0,header:"Güncellenme Tarihi",body:t=>new Date(t.updated_at).toLocaleString()}),c.includes("actions")&&!n&&!o&&e.jsx(p,{field:"actions",header:"İşlemler",body:t=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex justify-center gap-x-2",children:[e.jsx(d,{icon:"pi pi-qrcode",size:"small",tooltip:"Ürün Kodları",onClick:()=>{je(t)},tooltipOptions:{position:"top"},severity:"success"}),!o&&e.jsx(d,{icon:"pi pi-pencil",size:"small",tooltip:"Siparişi Düzenle",onClick:()=>{ve(t)},tooltipOptions:{position:"top"},severity:"warning"}),!o&&e.jsx(d,{icon:"pi pi-times",tooltip:"Siparişi Sil",tooltipOptions:{position:"top"},size:"small",onClick:s=>{X({target:s.currentTarget,message:"Siparişi silmek istediğinize emin misiniz?",icon:"pi pi-exclamation-triangle",acceptClassName:"p-button-danger",accept:()=>{fetch(route("super.orders.destroy",t.id),{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":m}}).then(async i=>{let r=await i.json();i.status===404?l.current.show({severity:"error",summary:"Hata",detail:r.message}):i.status===500?l.current.show({severity:"warning",summary:"Hata",detail:r.message}):i.status===200&&(l.current.show({severity:"success",summary:"Başarılı",detail:r.message}),x(y=>y.filter(u=>u.id!==t.id)))}).catch(i=>{l.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})})},acceptLabel:"Sil",rejectLabel:"Vazgeç"})},severity:"danger"})]})})})]}),e.jsx(b,{header:"Yeni Sipariş Ekle",style:{width:"70vw"},breakpoints:{"960px":"75vw","641px":"100vw"},onHide:()=>C(!1),maximizable:!0,visible:A,footer:de,children:e.jsx(Ae,{addModal:A,csrf_token:m,dealers:_,products:E,toast:l,initialDealer:o?z.user:null,dealerOrderPage:o,onHide:()=>C(!1),setRecords:x,setAddModalFooter:ue})}),e.jsx(b,{header:"Ürünler",style:{width:"50vw"},breakpoints:{"960px":"75vw","641px":"100vw"},onHide:()=>k(!1),maximizable:!0,visible:K,footer:()=>e.jsx(d,{label:"Kapat",onClick:()=>k(!1),severity:"warning",size:"small"}),children:K&&e.jsxs("div",{className:"card flex flex-col",children:[Y.map(t=>{let s=t.product;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex p-2 items-center gap-3 ",children:[e.jsx(Ke,{className:"w-[4rem] shadow-2 flex-shrink-0 border-round",preview:!0,src:s.image,alt:s.name}),e.jsxs("span",{className:"font-bold flex-1",children:[t.quantity," Adet - ",s.name," (#",s.sku,")"]}),e.jsxs("span",{className:"font-bold text-900",children:["$ ",t.price]})]}),e.jsx(Ye,{})]})}),e.jsxs("div",{className:"flex p-2 items-center gap-3 ",children:[e.jsx("span",{className:"font-bold flex-1",children:"Toplam"}),e.jsxs("span",{className:"font-bold text-900",children:["$ ",Y.reduce((t,s)=>t+s.price,0)]})]})]})}),!o&&e.jsx(b,{header:"Siparişi Düzenle",style:{width:"70vw"},breakpoints:{"960px":"75vw","641px":"100vw"},onHide:()=>T(!1),maximizable:!0,visible:I,footer:pe,children:e.jsx(Ie,{updateModal:I,salesmans:$,statuses:S,dealerOrderPage:o,csrf_token:m,dealers:_,products:E,record:ne,toast:l,onHide:()=>T(!1),setRecords:x,setUpdateModalFooter:me})}),e.jsx(b,{header:"Ürün Kodları",style:{width:"70vw"},breakpoints:{"960px":"75vw","641px":"100vw"},onHide:()=>N(!1),maximizable:!0,visible:B,footer:fe,children:e.jsx(Be,{productCodesModal:B,order:he,setRecords:x,csrf_token:m,toast:l,onHide:()=>N(!1),setFooter:ye})})]})};return v||o?e.jsx(D,{}):e.jsx(Fe,{user:z.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Siparişler"}),children:e.jsx("div",{className:"py-6",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx(D,{})})})})})}export{Ot as default};
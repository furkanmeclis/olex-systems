import{r,j as t}from"./app-Bhtd2so_.js";import{D as S}from"./dropdown.esm-DTY3Z4Ks.js";import{F as m}from"./floatlabel.esm-D3hKl8Rc.js";import{B as F}from"./button.esm-DHnRnYnu.js";import{M as $}from"./multiselect.esm-B75YdUT4.js";import{D as H}from"./datatable.esm-CdMsUngM.js";import{C as d}from"./column.esm-B1ecshoe.js";import{I as K}from"./inputnumber.esm-BKeG49O9.js";import{I as U}from"./inputtextarea.esm-BfCGjZeQ.js";import"./ripple.esm-Djw5BsU5.js";import"./index.esm-eoHBwhS9.js";import"./index.esm-CUpLtHRy.js";import"./index.esm-C20aJjjy.js";import"./overlayservice.esm-Bl21pC8G.js";import"./tooltip.esm-DpGcoAcr.js";import"./csstransition.esm-_Klv9O-j.js";import"./index.esm-C4Afw053.js";import"./index.esm-ksznoxKY.js";import"./inputtext.esm-DoEH5gtU.js";import"./paginator.esm-yeGQTte6.js";import"./index.esm-Db9x0CYi.js";import"./index.esm-ChJheK5G.js";import"./index.esm-DyPh8Gts.js";import"./index.esm-DRdpSAVi.js";function ye({dealers:C,addModal:k,record:s,setUpdateModalFooter:B,onHide:g,products:T,csrf_token:_,toast:f,setRecords:D,statuses:z,salesmans:q}){const[u,E]=r.useState({id:s.dealer.id,name:s.dealer.name,email:s.dealer.email,phone:s.dealer.phone}),[p,L]=r.useState({id:s.user_id,label:s.user_label}),v=s.products.map(e=>{let a=e.product;return{category:a.category,id:a.id,name:a.name,price:a.price,sku:a.sku,quantity:e.quantity,total:Math.round(e.quantity*a.price*100)/100}}),[i,N]=r.useState(v),[c,M]=r.useState(s.note?s.note:""),[x,w]=r.useState(!1),[I,O]=r.useState(!1),[h,P]=r.useState(s.status),[y,j]=r.useState(!1);r.useEffect(()=>{let e=!1;if(i.forEach(a=>{s.products.find(n=>n.product_id===a.id)||(e=!0)}),s.products.forEach(a=>{i.find(n=>n.id===a.product_id)||(e=!0)}),(u==null?void 0:u.id)!==s.dealer.id||c!==s.note||h!==s.status||p.id!==s.user_id||e)j(!0);else{let a=v.reduce((n,o)=>n+o.total,0),l=i.reduce((n,o)=>n+o.total,0);j(a!==l)}O(!y)},[u,i,c,h,p,s]);const A=()=>{let e=new FormData;e.append("dealer_id",u.id),e.append("note",c);let a=i.map(l=>({product_id:l.id,quantity:l.quantity}));e.append("products",JSON.stringify(a)),e.append("_method","PUT"),e.append("status",h),e.append("user_id",p.id),w(!0),fetch(route("super.orders.update",s.id),{method:"POST",headers:{"X-CSRF-TOKEN":_},body:e}).then(l=>l.json()).then(l=>{l.status?(D(l.orders),f.current.show({severity:"success",summary:"İşlem Başarılı",detail:l.message}),g()):f.current.show({severity:"error",summary:"Hata",detail:l.message})}).catch(l=>{f.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{w(!1)})};r.useEffect(()=>{B(()=>t.jsxs(t.Fragment,{children:[t.jsx(F,{label:"Vazgeç",icon:"pi pi-times",size:"small",link:!0,onClick:g,loading:x}),t.jsx(F,{label:"Kaydet",icon:"pi pi-save",onClick:A,disabled:!y,size:"small",className:"p-button-success",loading:x})]}))},[k,u,x,I,y]);const R=(e,a)=>{let l=e.value;N(n=>{let o=[...n],b=o.findIndex(Y=>Y.id===a.id);return o[b].quantity=l,o[b].total=Math.round(l*o[b].price*100)/100,o})};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"py-10",children:[t.jsxs(m,{className:"w-full md:w-14rem mb-10",children:[t.jsx(S,{value:u,filter:!0,showClear:!0,emptyFilterMessage:"Bayi Bulunamadı",filterBy:"name,email,phone",onChange:e=>E(e.value),options:C,optionLabel:"name",className:"w-full"}),t.jsx("label",{htmlFor:"dd-city",children:"Bayi Seçiniz"})]}),t.jsxs(m,{className:"w-full mb-5",children:[t.jsx($,{panelFooterTemplate:()=>{const e=i?i.length:0;return t.jsxs("div",{className:"py-2 px-3",children:[t.jsx("b",{children:e})," ürün seçili."]})},filter:!0,showClear:!0,itemTemplate:e=>t.jsxs("span",{children:["#",e.sku," - ",e.name," - ",e.price," $"]}),virtualScrollerOptions:{itemSize:38},value:i,emptyFilterMessage:"Ürün Bulunamadı",filterBy:"name,sku,price",onChange:e=>N(e.value),options:T,optionLabel:"name",className:"w-full"}),t.jsx("label",{htmlFor:"ms-cities",children:"Ürünleri Seçiniz"})]}),t.jsxs(H,{value:i,showGridlines:!0,size:"small",className:i.length>0?"mx-auto":"hidden",children:[t.jsx(d,{field:"id",header:"#ID"}),t.jsx(d,{field:"name",header:"Ürün Adı"}),t.jsx(d,{field:"sku",header:"Ürün Stok kodu"}),t.jsx(d,{field:"price",header:"Ürün Fiyatı"}),t.jsx(d,{header:"Adet",align:"center",body:e=>t.jsx(K,{showButtons:!0,suffix:" Adet",value:e.quantity,onChange:a=>R(a,e)})}),t.jsx(d,{field:"total",header:"Tutar",body:e=>t.jsxs("span",{children:[e.total," $"]})})]}),i.length>0&&t.jsx("div",{className:"my-5",children:t.jsxs("h3",{children:["Toplam Tutar: ",i.reduce((e,a)=>e+a.total,0)," $"]})}),t.jsxs(m,{className:"mb-10",children:[t.jsx(U,{id:"order_note",value:c,onChange:e=>M(e.target.value),rows:5,className:"w-full"}),t.jsx("label",{htmlFor:"order_note",children:"Sipariş Notu"})]}),t.jsxs(m,{className:"w-full mb-10",children:[t.jsx(S,{value:h,onChange:e=>P(e.value),options:z,optionLabel:"label",className:"w-full"}),t.jsx("label",{htmlFor:"dd-city",children:"Sipariş Durumu"})]}),t.jsxs(m,{className:"w-full md:w-14rem mb-10",children:[t.jsx(S,{emptyFilterMessage:"Yetkili Bulunamadı",value:p,filter:!0,onChange:e=>L(e.value),options:q,optionLabel:"label",filterBy:"label",className:"w-full"}),t.jsx("label",{htmlFor:"dd-city",children:"Satış Yetkilisi"})]})]})})}export{ye as default};
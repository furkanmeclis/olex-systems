import{r as t,j as e,c as S}from"./app-ByJu4dNU.js";import{I as H}from"./inputtextarea.esm-D9gc9WFT.js";import{I as v}from"./inputtext.esm-B7bQ2xES.js";import{I as C}from"./inputnumber.esm-CQmfIYN9.js";import{D as P}from"./dropdown.esm-DYKLOoBX.js";import{B as w}from"./button.esm-NdAN6Zra.js";import{c as Y,a as F,d as R,B as A}from"./index.esm-Y-i7tGI1.js";import{u as U}from"./formik.esm-CiEZ6rRD.js";import{M as Z}from"./message.esm-NliSS8l_.js";import"./ripple.esm-DVOzkR0Z.js";import"./tooltip.esm-Qbmp7RO6.js";import"./index.esm-Bf7BvPu-.js";import"./index.esm-B4IXFwYI.js";import"./index.esm-DJgHaFZm.js";import"./overlayservice.esm-61u2ope0.js";import"./csstransition.esm-YXMguxKw.js";import"./index.esm-BZ__EFKP.js";import"./_baseClone-BgPU1wOP.js";import"./index.esm-_S9D5RbG.js";import"./index.esm-DK5sDiZt.js";function ue({categories:p,csrf_token:f,toast:l,onHide:h,setProducts:z,setAddModalFooter:T,addModal:B}){const x=t.useRef(null),[g,K]=t.useState(p[0]),[O,c]=t.useState(!1),[r,j]=t.useState(!1),[d,y]=t.useState(!1),[i,b]=t.useState(!1),N=t.useRef(),[D,I]=t.useState(!1),{values:o,handleSubmit:q,handleChange:m,setFieldValue:u,errors:k,setErrors:E}=U({initialValues:{name:"",sku:"",description:"",price:0,warranty:1},validationSchema:Y().shape({name:F().required("Ürün Adı Zorunludur."),sku:F().required("Ürün Stok Kodu Zorunludur."),price:R().required("Ürün Fiyatı Zorunludur."),warranty:R().required("Ürün Garanti Süresi Zorunludur.").min(1,"Ürün Garanti Süresi 1 Yıl'dan Az Olamaz.")}),onSubmit:s=>{if(r&&!r.status)return E({sku:`Stok Kodu Daha Önce Kullanılmış.
Lütfen Başka Bir Stok Kodu Giriniz.`}),!1;{y(!0);let a=new FormData;a.append("name",s.name),a.append("sku",s.sku),a.append("description",s.description),a.append("price",s.price),a.append("quantity",s.quantity),a.append("warranty",s.warranty),a.append("category",g.name),a.append("image",i),fetch(route("super.products.store"),{method:"POST",headers:{"X-CSRF-TOKEN":f},body:a}).then(n=>n.json()).then(n=>{n.status?(l.current.show({severity:"success",summary:"Başarılı",detail:n.message}),z(n.products),h()):l.current.show({severity:"error",summary:"Hata",detail:n.message})}).catch(n=>{l.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{y(!1)})}}}),G=s=>{if(s.target.value.length<5)return c(!1),j(!1),!1;if(s.target.value===r.sku)return!1;c(!0),fetch(route("super.products.controlSku"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":f},body:JSON.stringify({sku:s.target.value})}).then(a=>a.json()).then(a=>{j({status:a.status,message:a.message,sku:a.sku}),u("sku",a.sku)}).catch(a=>{l.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{c(!1)})},L=s=>{if(s.target.files.length===0)return b(!1),!1;const a=s.target.files[0];if(a.size>1024*1024*32)return l.current.show({severity:"error",summary:"Hata",detail:"Dosya Boyut 32MB'dan büyük olamaz."}),!1;if(!["image/jpeg","image/png","image/jpg"].includes(a.type))return l.current.show({severity:"error",summary:"Hata",detail:"Dosya Tipi Sadece JPG, JPEG, PNG olabilir."}),!1;b(a)};return t.useEffect(()=>{T(e.jsxs(e.Fragment,{children:[e.jsx(w,{label:"Vazgeç",icon:"pi pi-times",size:"small",link:!0,onClick:h,loading:d}),e.jsx(w,{label:"Kaydet",icon:"pi pi-save",size:"small",className:"p-button-success",loading:d,onClick:()=>{I(!0),N.current.click()}})]}))},[B]),e.jsx(A,{blocked:d,template:e.jsx("i",{className:"pi pi-spin pi-spinner",style:{fontSize:"3rem"}}),children:e.jsxs("form",{className:"p-fluid",onSubmit:q,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-x-3 gap-y-2 mb-3",children:[e.jsx("div",{className:"col-span-2 grid gap-y-2",children:D&&Object.keys(k).length>0&&e.jsx(e.Fragment,{children:Object.entries(k).map(([s,a])=>e.jsx(Z,{severity:"warn",text:a},s))})}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"name",className:"font-bold",children:["Ürün Adı ",e.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),e.jsx(v,{id:"name",name:"name",onChange:m,value:o.name,autoFocus:!0})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"sku",className:"font-bold",children:["Ürün Stok Kodu ",e.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),e.jsxs("div",{className:"p-inputgroup flex-1",children:[e.jsx("span",{className:"p-inputgroup-addon",children:e.jsx("i",{className:S("pi pi-barcode",{"text-green-400":r&&r.status,"text-red-400":r&&!r.status})})}),e.jsx(v,{name:"sku",onChange:m,value:o.sku,id:"sku",tooltip:r&&r.message,tooltipOptions:{position:"bottom"},onBlur:s=>G(s)}),O&&e.jsx("span",{className:"p-inputgroup-addon",children:e.jsx("i",{className:"pi pi-spin pi-spinner"})}),r&&r.status&&e.jsx("span",{className:"p-inputgroup-addon",children:e.jsx("i",{className:"pi pi-check text-green-400"})}),r&&!r.status&&e.jsx("span",{className:"p-inputgroup-addon",children:e.jsx("i",{className:"pi pi-times text-red-400"})})]})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"description",className:"font-bold",children:"Ürün Açıklaması"}),e.jsx(H,{id:"description",name:"description",onChange:m,value:o.description,rows:3,cols:20})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-3 mb-3",children:[e.jsxs("div",{className:"field col",children:[e.jsxs("label",{className:"font-bold",children:["Ürün Garanti Süresi (Yıl) ",e.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),e.jsx(C,{name:"warranty",value:o.warranty,onChange:s=>{u("warranty",s.value)},min:0,max:100,suffix:" Yıl"})]}),e.jsxs("div",{className:"field col",children:[e.jsx("label",{htmlFor:"quantity",className:"font-bold",children:"Ürün Kategorisi"}),e.jsx(P,{value:g,onChange:s=>K(s.value),options:p,optionLabel:"name",placeholder:"Kategori Seçin",className:"w-full md:w-14rem"})]})]}),e.jsx("div",{className:"mb-3",children:e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"price",className:"font-bold",children:["Ürün Fiyatı ",e.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),e.jsx(C,{id:"price",mode:"currency",name:"price",onChange:s=>{u("price",s.value)},currency:"USD",locale:"tr-TR"})]})}),e.jsx("label",{className:"font-bold ",htmlFor:"image",children:"Ürün Resmi"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-3 my-3",children:[e.jsxs("div",{className:"flex justify-center",children:[e.jsx("input",{id:"image",ref:x,type:"file",className:"hidden",accept:"image/*",onChange:L}),e.jsxs("div",{className:S("w-44 border-dashed border  h-44 cursor-pointer bg-gray-600/30 rounded-full flex justify-center items-center",{"border-orange-400":i===!1,"border-green-400":i!==!1}),onClick:()=>{x.current.click()},children:[i===!1&&e.jsx("i",{className:"pi pi-camera text-2xl text-orange-400"}),i!==!1&&e.jsx("i",{className:"pi pi-check text-2xl text-green-400"})]})]}),e.jsx("div",{children:i!==!1&&e.jsx("img",{src:URL.createObjectURL(i),alt:i.name,className:"w-full h-full max-h-44 bg-gray-300/10 border border-dashed object-contain rounded-lg"})})]}),e.jsx("button",{type:"submit",style:{display:"none"},ref:N})]})})}export{ue as default};
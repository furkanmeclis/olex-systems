import{r as t,j as e,c as P}from"./app-Bhtd2so_.js";import{u as z}from"./formik.esm-DeB_CGcg.js";import{c as O,a as d,b as _,B}from"./index.esm-CfXyJyKS.js";import{B as j}from"./button.esm-DHnRnYnu.js";import{M as R}from"./message.esm-CpTOhnCl.js";import{I as c}from"./inputtext.esm-DoEH5gtU.js";import{I}from"./inputswitch.esm-Cxmo9gxd.js";import{P as b}from"./password.esm-XLO9KV0o.js";import"./_baseClone-BgPU1wOP.js";import"./ripple.esm-Djw5BsU5.js";import"./index.esm-CUpLtHRy.js";import"./tooltip.esm-DpGcoAcr.js";import"./index.esm-C4Afw053.js";import"./index.esm-CrsFoDzy.js";import"./index.esm-ksznoxKY.js";import"./csstransition.esm-_Klv9O-j.js";import"./index.esm-zmjat01w.js";import"./overlayservice.esm-Bl21pC8G.js";const T=({onHide:p,addModal:y,setAddModalFooter:N,csrf_token:v,toast:n,setWorkers:w,dealerId:k})=>{const f=t.useRef(null),[m,u]=t.useState(!1),[r,h]=t.useState(!1),x=t.useRef(),[F,C]=t.useState(!1),{values:i,handleSubmit:S,handleChange:o,setFieldValue:A,errors:g,setErrors:q}=z({initialValues:{name:"",email:"",phone:"",active:!0,password:"",password_confirmation:""},validationSchema:O().shape({name:d().required("Çalışan Adı Zorunludur"),email:d().email("Geçerli Bir E-Posta Adresi Giriniz").required("E-Posta Adresi Zorunludur"),phone:d().required("Telefon Numarası Zorunludur"),password:d().required("Şifre Zorunludur").min(6,"Şifre En Az 6 Karakter Olmalıdır"),password_confirmation:d().required("Şifre Onayı Zorunludur").oneOf([_("password"),null],"Şifreler Eşleşmiyor")}),onSubmit:s=>{u(!0);let a=new FormData;a.append("dealer_id",k),a.append("name",s.name),a.append("email",s.email),a.append("phone",s.phone),a.append("active",s.active),a.append("password",s.password),a.append("password_confirmation",s.password_confirmation),a.append("image",r),fetch(route("dealer.workers.store"),{method:"POST",headers:{"X-CSRF-TOKEN":v},body:a}).then(l=>l.json()).then(l=>{l.status?(n.current.show({severity:"success",summary:"Başarılı",detail:l.message}),p(),w(l.workers)):n.current.show({severity:"error",summary:"Hata",detail:l.message})}).catch(l=>{n.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{u(!1)})}}),E=s=>{if(s.target.files.length===0)return h(!1),!1;const a=s.target.files[0];if(a.size>1024*1024*32)return n.current.show({severity:"error",summary:"Hata",detail:"Dosya Boyut 32MB'dan büyük olamaz."}),!1;if(!["image/jpeg","image/png","image/jpg"].includes(a.type))return n.current.show({severity:"error",summary:"Hata",detail:"Dosya Tipi Sadece JPG, JPEG, PNG olabilir."}),!1;h(a)};return t.useEffect(()=>{N(e.jsxs(e.Fragment,{children:[e.jsx(j,{label:"Vazgeç",icon:"pi pi-times",size:"small",link:!0,onClick:()=>{p()},loading:m}),e.jsx(j,{label:"Kaydet",icon:"pi pi-save",type:"button",size:"small",className:"p-button-success",loading:m,onClick:()=>{C(!0),x.current.click()}})]}))},[y]),e.jsx(B,{blocked:m,template:e.jsx("i",{className:"pi pi-spin pi-spinner",style:{fontSize:"3rem"}}),children:e.jsxs("form",{className:"p-fluid",onSubmit:S,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-x-3 gap-y-2 mb-3",children:[e.jsx("div",{className:"col-span-2 grid gap-y-2",children:F&&Object.keys(g).length>0&&e.jsx(e.Fragment,{children:Object.entries(g).map(([s,a])=>e.jsx(R,{severity:"warn",text:a},s))})}),e.jsxs("div",{className:"col-span-2",children:[e.jsxs("label",{htmlFor:"name",className:"font-bold",children:["Çalışan Adı ",e.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),e.jsx(c,{id:"name",name:"name",onChange:o,value:i.name,autoFocus:!0})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{htmlFor:"email",className:"font-bold",children:["Çalışan E-Posta Adresi ",e.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),e.jsx(c,{id:"email",type:"email",name:"email",onChange:o,value:i.email})]}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{htmlFor:"phone",className:"font-bold",children:["Çalışan Telefon No ",e.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),e.jsx(c,{id:"phone",type:"tel",name:"phone",onChange:o,value:i.phone})]}),e.jsxs("div",{className:"mb-3 flex justify-start items-center gap-x-2",children:[e.jsx(I,{checked:i.active,inputId:"dealerActive",onChange:s=>A("active",s.value)}),e.jsxs("label",{htmlFor:"dealerActive",className:"font-bold",children:["Üye Aktifliği (",i.active?"Aktif":"Pasif",")"]})]}),e.jsxs("div",{className:"mb-3 grid grid-cols-2 gap-x-3",children:[e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"password",className:"font-bold",children:["Çalışan Şifre ",e.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),e.jsx(b,{id:"password",name:"password",value:i.password,onChange:o,feedback:!1,toggleMask:!0})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"password_confirmation",className:"font-bold",children:["Çalışan Şifre Onayla",e.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),e.jsx(b,{id:"password_confirmation",name:"password_confirmation",value:i.password_confirmation,onChange:o,feedback:!1,toggleMask:!0})]})]}),e.jsx("label",{className:"font-bold ",htmlFor:"image",children:"Çalışan Avatar"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-3 my-3",children:[e.jsxs("div",{className:"flex justify-center",children:[e.jsx("input",{id:"image",ref:f,type:"file",className:"hidden",accept:"image/*",onChange:E}),e.jsxs("div",{className:P("w-44 border-dashed border  h-44 cursor-pointer bg-gray-600/30 rounded-full flex justify-center items-center",{"border-orange-400":r===!1,"border-green-400":r!==!1}),onClick:()=>{f.current.click()},children:[r===!1&&e.jsx("i",{className:"pi pi-camera text-2xl text-orange-400"}),r!==!1&&e.jsx("i",{className:"pi pi-check text-2xl text-green-400"})]})]}),e.jsx("div",{children:r!==!1&&e.jsx("img",{src:URL.createObjectURL(r),alt:r.name,className:"w-full h-full max-h-44 bg-gray-300/10 border border-dashed object-contain rounded-lg"})})]}),e.jsx("button",{type:"submit",style:{display:"none"},ref:x})]})})},re=T;export{re as default};
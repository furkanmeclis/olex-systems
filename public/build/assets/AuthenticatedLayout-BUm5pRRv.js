import{j as e,d as f,r as h,q as k}from"./app-ByJu4dNU.js";import{A as b}from"./ApplicationLogo-CH63_8P2.js";import{D as i}from"./Dropdown-C8_4X2gx.js";import{T as c}from"./tag.esm-C8Bd4_E3.js";import{T as j}from"./toast.esm-B3eWfIZr.js";function w({active:r=!1,className:t="",children:s,...a}){return e.jsx(f,{...a,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(r?"border-[var(--primary-400)] dark:border-[var(--primary-600)] text-gray-900 dark:text-gray-100 focus:border-[var(--primary-700)] ":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 ")+t,children:s})}function p({active:r=!1,className:t="",children:s,...a}){return e.jsx(f,{...a,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${r?"border-[var(--primary-400)] dark:border-[var(--primary-600)] text-[var(--primary-700)] dark:text-[var(--primary-300)] bg-[var(--primary-50)] dark:bg-[var(--primary-900)] focus:text-[var(--primary-800)] dark:focus:text-[var(--primary-200)] focus:bg-[var(--primary-100)] dark:focus:bg-[var(--primary-900)] focus:border-[var(--primary-700)] dark:focus:border-[var(--primary-300)]":"border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${t}`,children:s})}function A({user:r,header:t,children:s}){const a=h.useRef(null),[d,y]=h.useState(!1),{flash:n}=k().props;h.useEffect(()=>{n.success!==null&&a.current.show({severity:"success",summary:"İşlem Başarılı",detail:n.success}),n.error!==null&&a.current.show({severity:"error",summary:"Hata",detail:n.error})},[n]);const g=()=>{switch(r.role){case"super":return e.jsx(e.Fragment,{children:e.jsx(c,{severity:"danger",value:"Super"})});case"admin":return e.jsx(e.Fragment,{children:e.jsx(c,{severity:"warning",value:"Admin"})});case"worker":return e.jsx(e.Fragment,{children:e.jsx(c,{severity:"success",value:"Worker"})});default:return e.jsx(e.Fragment,{children:e.jsx(c,{severity:"help",value:"Central"})})}},v=[{name:"Anasayfa",href:route("dashboard"),active:route().current("dashboard"),roles:["super","central","central_salesman","central_contact","central_worker","admin"]},{name:"Merkez Çalışanları",href:route("super.central.index"),active:route().current("super.central*"),roles:["super"]},{name:"Bayiler",href:route("super.dealers.index"),active:route().current("super.dealers*"),roles:["super"]},{name:"Çalışanlar",href:route("super.workers.index"),active:route().current("super.workers*"),roles:["super"]},{name:"Ürünler",href:route("super.products.index"),active:route().current("super.products*"),roles:["super"]},{name:"Siparişler",href:route("super.orders.index"),active:route().current("super.orders*"),roles:["super"]},{name:"Stok Yönetimi",href:route("super.stock-management.index"),active:route().current("super.stock-management*"),roles:["super"]},{name:"Müşteriler",href:route("super.customers.index"),active:route().current("super.customers*"),roles:["super"]},{name:"Bayiler",href:route("central.dealers.index"),active:route().current("central.dealers*"),roles:["central","central_salesman","central_contact","central_worker"]},{name:"Çalışanlar",href:route("central.workers.index"),active:route().current("central.workers*"),roles:["central","central_salesman","central_contact","central_worker"]},{name:"Ürünler",href:route("central.products.index"),active:route().current("central.products*"),roles:["central","central_salesman","central_contact","central_worker"]},{name:"Siparişler",href:route("central.orders.index"),active:route().current("central.orders*"),roles:["central","central_salesman","central_contact","central_worker"]},{name:"Stok Yönetimi",href:route("central.stock-management.index"),active:route().current("central.stock-management*"),roles:["central","central_salesman","central_contact","central_worker"]},{name:"Müşteriler",href:route("central.customers.index"),active:route().current("central.customers*"),roles:["central","central_salesman","central_contact","central_worker"]},{name:"Siparişler",href:route("dealer.orders"),active:route().current("dealer.orders"),roles:["admin"]},{name:"Hizmetler",href:route("dealer.services"),active:route().current("dealer.services"),roles:["admin"]},{name:"Müşteriler",href:route("dealer.customers"),active:route().current("dealer.customers"),roles:["admin"]},{name:"Çalışanlar",href:route("dealer.workers.index"),active:route().current("dealer.workers*"),roles:["admin"]},{name:"Stok Kayıtları",href:route("dealer.stockRecords"),active:route().current("dealer.stockRecords"),roles:["admin"]},{name:"Bayi Ayarları",href:route("dealer.settings"),active:route().current("dealer.settings"),roles:["admin"]},{name:"Anasayfa",href:route("worker.index"),active:route().current("worker.index"),roles:["worker"]},{name:"Müşteriler",href:route("worker.customers.index"),active:route().current("worker.customers*"),roles:["worker"]},{name:"Hizmetler",href:route("worker.services.index"),active:route().current("worker.services*"),roles:["worker"]}];return e.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900",children:[e.jsx(j,{ref:a}),e.jsxs("nav",{className:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(f,{href:route("dashboard"),children:e.jsx(b,{className:"block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"})})}),e.jsx("div",{className:"hidden space-x-2 sm:-my-px sm:ms-10 sm:flex",children:v.map(({name:o,href:u,active:m,roles:l},x)=>l.includes(r.role)||l.includes("*")?e.jsx(w,{href:u,active:m,children:o},x):null)})]}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:e.jsx("div",{className:"ms-3 relative",children:e.jsxs(i,{children:[e.jsx(i.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",children:[e.jsxs("span",{children:[g()," ",r.name]}),e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(i.Content,{children:[e.jsx(i.Link,{href:route("profile.edit"),children:"Profil"}),e.jsx(i.Link,{href:route("logout"),method:"post",as:"button",children:"Çıkış Yap"})]})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>y(o=>!o),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:d?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:d?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(d?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:v.map(({name:o,href:u,active:m,roles:l},x)=>l.includes(r.role)||l.includes("*")?e.jsx(p,{href:u,active:m,children:o},x):null)}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600",children:[e.jsxs("div",{className:"px-4",children:[e.jsxs("div",{className:"font-medium text-base text-gray-800 dark:text-gray-200",children:[g()," ",r.name]}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:r.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(p,{href:route("profile.edit"),children:"Profil"}),e.jsx(p,{method:"post",href:route("logout"),as:"button",children:"Çıkış Yap"})]})]})]})]}),t&&e.jsx("header",{className:"bg-white dark:bg-gray-800 shadow",children:e.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t})}),e.jsx("main",{children:s})]})}export{A};
import{W as l,r as d,j as s,a as p}from"./app-Bhtd2so_.js";import{G as u}from"./GuestLayout-CgL33kK0.js";import{T as c,I as f}from"./TextInput-CxEMAOWo.js";import{I as x}from"./InputLabel-DyniHxj6.js";import{P as j}from"./PrimaryButton-DebNqv1o.js";import"./ApplicationLogo-xWz2JCT2.js";function N(){const{data:a,setData:e,post:t,processing:o,errors:n,reset:i}=l({password:""});d.useEffect(()=>()=>{i("password")},[]);const m=r=>{r.preventDefault(),t(route("password.confirm"))};return s.jsxs(u,{children:[s.jsx(p,{title:"Şifrenizi Onaylayın"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"Bu, uygulamanın güvenli bir alanıdır. Devam etmeden önce lütfen şifrenizi doğrulayın."}),s.jsxs("form",{onSubmit:m,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Şifre"}),s.jsx(c,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(f,{message:n.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(j,{className:"ms-4",disabled:o,children:"Onayla"})})]})]})}export{N as default};
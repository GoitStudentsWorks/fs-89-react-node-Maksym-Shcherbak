import{r as w,a as h,f as x,j as s,F as j,h as g}from"./index-91b8b8ac.js";import{n as f}from"./notiflix-aio-3.2.7.min-efb9066f.js";import{c as S,a as n,S as y,I as r,d as o,F as l,E as P,e as E,f as I,H as b,g as F,h as k,W as v,i as N,N as _,L as C}from"./SignupPage.styled-a9b5c1d4.js";import{C as W}from"./WelcomePage.styled-12e64ad6.js";const $={email:"",password:""},q=S().shape({email:n().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Email must contain only digits, letters and . - _ symbols. e.g. test@mail.com").email("Invalid email format, test@mail.com").required(!0),password:n().min(8,"Password must be at least 8 characters long").required(!0).matches(/[a-zA-Z]/,"Password must contain at least one letter").matches(/[0-9]/,"Password must contain at least one number")}),A=()=>{const[i,m]=w.useState(!1),c=h(),d=x(),p=()=>{m(!i)},u=async(e,{resetForm:a})=>{try{(await c(g(e))).payload.token?(a(),d("/home",{replace:!0})):f.Notify.failure("Password or email is invalide")}catch{a()}};return s.jsx(j,{initialValues:$,validationSchema:q,onSubmit:u,children:({values:e,errors:a,touched:t})=>s.jsxs(y,{children:[s.jsxs(s.Fragment,{children:[s.jsxs(r,{children:[s.jsx(o,{type:"email",name:"email",placeholder:"Email",error:a.email&&t.email?"true":"false",success:e.email&&!a.email?"true":"false"}),s.jsx(l,{name:"email"}),a.email&&t.email?s.jsx(P,{}):e.email&&!a.email?s.jsx(E,{}):null]}),s.jsxs(r,{children:[s.jsx(o,{type:i?"text":"password",value:e.password,name:"password",placeholder:"Password",error:a.password&&t.password?"true":"false",success:e.password&&!a.password?"true":"false"}),s.jsx(l,{name:"password"}),s.jsx(I,{type:"button",onClick:p,children:i?s.jsx(b,{}):s.jsx(F,{})})]})]}),s.jsx(k,{type:"submit",children:"Sign In"})]})})},U=()=>s.jsx(W,{children:s.jsxs(v,{children:[s.jsx(N,{title:"Sign In"}),s.jsx(A,{}),s.jsx(_,{children:s.jsx(C,{to:"/signup",children:"Sign Up"})})]})});export{U as default};

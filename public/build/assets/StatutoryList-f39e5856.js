import{o as p,c as _,w as i,a as s,t as f,b as o,u as r,Z as y}from"./app-ec8b9ce4.js";import{_ as x}from"./AuthenticatedLayout-5a58aa4e.js";import{S as h}from"./SectionBorder-8a4073ef.js";import{P as l,D as n,j as b,p as $}from"./buttons.colVis-d2c0bab3.js";import"./ApplicationLogo-2d8f8bcb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-f0ec292f.js";const v={class:"mb-1 text-3xl font-bold"},w={class:"mx-4"},B={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},S={class:"bg-white rounded-md shadow overflow-x-auto text-sm"},V={__name:"StatutoryList",props:{pay_statutories:Array,statutory_name:String,translations:Object,max_pay:String},setup(a){const m=a;l.use(n),n.Buttons.jszip(b),n.Buttons.pdfMake($);const d={dom:"Bfrtip",select:!1,responsive:!0},t=(e,c)=>m.translations[e]||e,u=[{data:"first_name",title:`${t("first name")}`},{data:"middle_name",title:`${t("middle name")}`},{data:"last_name",title:`${t("last name")}`},{data:"pay_number",title:`${t("pay")} #`},{data:"employee_statutory_no",title:`${t("number")}`},{data:"total",title:`${t("amount")}`}];return(e,c)=>(p(),_(x,{translations:a.translations},{header:i(()=>[s("h1",v,f(a.statutory_name+" "+t("details")+" for "+a.max_pay),1)]),default:i(()=>[s("div",w,[s("div",B,[o(r(y),{title:`${t("statutory list for ")+a.max_pay} `},null,8,["title"]),s("div",S,[o(r(l),{data:a.pay_statutories,columns:u,options:d,class:"display",width:"100%"},null,8,["data"])])]),o(h)])]),_:1},8,["translations"]))}};export{V as default};
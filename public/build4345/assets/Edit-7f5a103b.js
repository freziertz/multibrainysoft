import{_ as l}from"./AuthenticatedLayout-62b37a75.js";import m from"./EditForm-e3a7f529.js";import{o as c,c as d,w as n,a,t as p,b as o,u as _,Z as x}from"./app-2c7d1a44.js";import"./ApplicationLogo-ddd2dcec.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-cbada9db.js";import"./TextInput-c5171d56.js";import"./PrimaryButton-e0cb1bc2.js";const u={class:"font-semibold text-xl text-gray-800 leading-tight ml-4"},h={class:"py-12"},f={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"},g={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},O={__name:"Edit",props:{department:Object,translations:Object},setup(t){const r=t,s=(e,i)=>r.translations[e]||e;return(e,i)=>(c(),d(l,{translations:t.translations},{header:n(()=>[a("h2",u,p(s("department")),1)]),default:n(()=>[a("div",h,[a("div",f,[o(_(x),{title:`${s("edit")} ${s("department")}`},null,8,["title"]),a("div",g,[o(m,{department:t.department,translations:t.translations,class:"max-w-xl"},null,8,["department","translations"])])])])]),_:1},8,["translations"]))}};export{O as default};
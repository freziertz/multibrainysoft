import{_ as l}from"./AuthenticatedLayout-5a58aa4e.js";import c from"./EditForm-f5e9eaf8.js";import{o as m,c as d,w as o,a,t as p,b as e,u as _,Z as x}from"./app-ec8b9ce4.js";import"./ApplicationLogo-2d8f8bcb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-f0ec292f.js";import"./TextInput-e66e4902.js";import"./PrimaryButton-b3d0a216.js";const u={class:"font-semibold text-xl text-gray-800 leading-tight ml-4"},b={class:"py-12"},h={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"},f={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},N={__name:"Edit",props:{bank:Object,translations:Object},setup(t){const i=t,s=(n,r)=>i.translations[n]||n;return(n,r)=>(m(),d(l,{translations:t.translations},{header:o(()=>[a("h2",u,p(s("bank")),1)]),default:o(()=>[a("div",b,[a("div",h,[e(_(x),{title:`${s("edit")} ${s("bank")}`},null,8,["title"]),a("div",f,[e(c,{bank:t.bank,translations:t.translations,class:"max-w-xl"},null,8,["bank","translations"])])])])]),_:1},8,["translations"]))}};export{N as default};
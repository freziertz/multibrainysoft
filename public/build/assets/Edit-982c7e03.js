import{_ as l}from"./AuthenticatedLayout-eca58e6b.js";import c from"./EditForm-cc11db71.js";import{o as m,c as d,w as o,a,t as p,b as e,u as _,Z as x}from"./app-d0964fae.js";import"./ApplicationLogo-354255e7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-ab0782fb.js";import"./TextInput-2b094f06.js";import"./PrimaryButton-1b1765c1.js";const u={class:"font-semibold text-xl text-gray-800 leading-tight ml-4"},b={class:"py-12"},h={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"},f={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},N={__name:"Edit",props:{bank:Object,translations:Object},setup(t){const i=t,s=(n,r)=>i.translations[n]||n;return(n,r)=>(m(),d(l,{translations:t.translations},{header:o(()=>[a("h2",u,p(s("bank")),1)]),default:o(()=>[a("div",b,[a("div",h,[e(_(x),{title:`${s("edit")} ${s("bank")}`},null,8,["title"]),a("div",f,[e(c,{bank:t.bank,translations:t.translations,class:"max-w-xl"},null,8,["bank","translations"])])])])]),_:1},8,["translations"]))}};export{N as default};
import{_ as l}from"./AuthenticatedLayout-62b37a75.js";import c from"./CreateEmployeeForm-764907ea.js";import{o as m,c as d,w as r,a as s,t as u,b as n,u as p,Z as y}from"./app-2c7d1a44.js";import"./ApplicationLogo-ddd2dcec.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-cbada9db.js";import"./TextInput-c5171d56.js";import"./PrimaryButton-e0cb1bc2.js";const g={class:"font-semibold text-xl text-gray-800 leading-tight ml-4"},h={class:"py-12"},x={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"},f={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},j={__name:"Create",props:{user:Object,centers:Array,levels:Array,departments:Array,scales:Array,designations:Array,banks:Array,statutories:Array,translations:Object},setup(t){const o=t,a=(e,i)=>o.translations[e]||e;return(e,i)=>(m(),d(l,{translations:t.translations},{header:r(()=>[s("h2",g,u(a("employees")),1)]),default:r(()=>[s("div",h,[s("div",x,[n(p(y),{title:`${a("create")} ${a("employee")}`},null,8,["title"]),s("div",f,[n(c,{user:t.user,centers:t.centers,designations:t.designations,banks:t.banks,departments:t.departments,translations:t.translations},null,8,["user","centers","designations","banks","departments","translations"])])])])]),_:1},8,["translations"]))}};export{j as default};
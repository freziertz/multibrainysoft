import{_ as l}from"./AuthenticatedLayout-5a58aa4e.js";import m from"./EditEmployeeForm-0b251b83.js";import{S as c}from"./SectionBorder-8a4073ef.js";import{o as d,c as u,w as n,a as e,t as y,b as r,u as p,Z as b}from"./app-ec8b9ce4.js";import"./ApplicationLogo-2d8f8bcb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-f0ec292f.js";import"./TextInput-e66e4902.js";import"./PrimaryButton-b3d0a216.js";const f={class:"font-semibold text-xl text-gray-800 leading-tight ml-4"},x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={__name:"Edit",props:{user:Object,employee:Object,salary:Object,centers:Array,levels:Array,departments:Array,scales:Object,designations:Array,banks:Array,statutories:Array,translations:Object},setup(t){const i=t,a=(s,o)=>i.translations[s]||s;return(s,o)=>(d(),u(l,{translations:t.translations},{header:n(()=>[e("h2",f,y(a("users")),1)]),default:n(()=>[e("div",null,[r(p(b),{title:`${a("edit")} ${a("employee")}`},null,8,["title"]),e("div",x,[e("div",null,[r(m,{user:t.user,centers:t.centers,designations:t.designations,banks:t.banks,employee:t.employee,departments:t.departments,translations:t.translations,salary:t.salary},null,8,["user","centers","designations","banks","employee","departments","translations","salary"]),r(c)])])])]),_:1},8,["translations"]))}};export{w as default};
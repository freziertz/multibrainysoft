import{_ as l}from"./AuthenticatedLayout-62b37a75.js";import m from"./EditEmployeeForm-24ac2a2d.js";import{S as c}from"./SectionBorder-a8f1ddf7.js";import{o as d,c as u,w as n,a as e,t as y,b as r,u as p,Z as b}from"./app-2c7d1a44.js";import"./ApplicationLogo-ddd2dcec.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-cbada9db.js";import"./TextInput-c5171d56.js";import"./PrimaryButton-e0cb1bc2.js";const f={class:"font-semibold text-xl text-gray-800 leading-tight ml-4"},x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={__name:"Edit",props:{user:Object,employee:Object,salary:Object,centers:Array,levels:Array,departments:Array,scales:Object,designations:Array,banks:Array,statutories:Array,translations:Object},setup(t){const i=t,a=(s,o)=>i.translations[s]||s;return(s,o)=>(d(),u(l,{translations:t.translations},{header:n(()=>[e("h2",f,y(a("users")),1)]),default:n(()=>[e("div",null,[r(p(b),{title:`${a("edit")} ${a("employee")}`},null,8,["title"]),e("div",x,[e("div",null,[r(m,{user:t.user,centers:t.centers,designations:t.designations,banks:t.banks,employee:t.employee,departments:t.departments,translations:t.translations,salary:t.salary},null,8,["user","centers","designations","banks","employee","departments","translations","salary"]),r(c)])])])]),_:1},8,["translations"]))}};export{w as default};
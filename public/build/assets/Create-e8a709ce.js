import{_ as l}from"./AuthenticatedMainLayout-0180a7b4.js";import c from"./CreateUserForm-4e846a10.js";import{o as m,c as p,w as r,a as s,t as d,b as e,u,Z as _}from"./app-ec8b9ce4.js";import"./ApplicationLogo-2d8f8bcb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-f0ec292f.js";import"./TextInput-e66e4902.js";import"./PrimaryButton-b3d0a216.js";import"./Checkbox-4fba078f.js";const h={class:"font-semibold text-xl text-gray-800 leading-tight ml-4"},x={class:"py-12"},f={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"},g={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},V={__name:"Create",props:{permissions:Array,roles:Array,translations:Object},setup(t){const n=t,a=(o,i)=>n.translations[o]||o;return(o,i)=>(m(),p(l,{translations:t.translations},{header:r(()=>[s("h2",h,d(a("users")),1)]),default:r(()=>[s("div",x,[s("div",f,[e(u(_),{title:`${a("create")} ${a("user")}`},null,8,["title"]),s("div",g,[e(c,{roles:t.roles,translations:t.translations},null,8,["roles","translations"])])])])]),_:1},8,["translations"]))}};export{V as default};
import{_ as i}from"./AuthenticatedMainLayout-0180a7b4.js";import m from"./EditUserForm-c5d3f732.js";import{S as c}from"./SectionBorder-8a4073ef.js";import{o as u,c as d,w as o,a as s,t as p,b as a,u as f,Z as x}from"./app-ec8b9ce4.js";import"./ApplicationLogo-2d8f8bcb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-f0ec292f.js";import"./TextInput-e66e4902.js";import"./PrimaryButton-b3d0a216.js";import"./Checkbox-4fba078f.js";const h={class:"font-semibold text-xl text-gray-800 leading-tight ml-4"},_={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},S={__name:"Edit",props:{roles:Array,userRoles:Object,user:Object,translations:Object},setup(t){const l=t,e=(r,n)=>l.translations[r]||r;return(r,n)=>(u(),d(i,{translations:t.translations},{header:o(()=>[s("h2",h,p(e("users")),1)]),default:o(()=>[s("div",null,[a(f(x),{title:`${e("edit")} ${e("user")}`},null,8,["title"]),s("div",_,[s("div",null,[a(m,{roles:t.roles,user:t.user,userRoles:t.userRoles,translations:t.translations},null,8,["roles","user","userRoles","translations"]),a(c)])])])]),_:1},8,["translations"]))}};export{S as default};
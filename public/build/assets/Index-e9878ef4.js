import{r as V,d as D,o as c,c as f,w as i,a as e,t as a,b as r,u as m,Z as S,e as $,v as j,i as p,g as _,h as B,j as x,f as y,F as O,O as g}from"./app-ec8b9ce4.js";import{_ as N}from"./AuthenticatedLayout-5a58aa4e.js";import{S as I}from"./SectionBorder-8a4073ef.js";import{I as v}from"./Icon-16df6851.js";import{S as T,_ as C}from"./SearchFilter-6d09436f.js";import{D as R}from"./DeleteButton-6c29d04d.js";import"./ApplicationLogo-2d8f8bcb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-f0ec292f.js";const U={class:"mb-1 ml-4 text-3xl font-bold"},q={class:"mx-4"},E={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},F={class:"flex items-center justify-between mb-6"},L={class:"block text-gray-700"},M=e("option",{value:null},null,-1),P={value:"with"},Z={value:"only"},z={class:"hidden md:inline"},A={class:"bg-white rounded-md shadow overflow-x-auto"},G={class:"w-full whitespace-nowrap"},H={class:"text-left font-bold"},J={class:"pb-2 pt-2 px-6"},K={class:"pb-2 pt-2 px-6"},Q={class:"pb-2 pt-2 px-2"},W={class:"border-t"},X={class:"border-t"},Y={class:"border-t"},ee={key:0},te=e("td",{class:"px-6 py-4 border-t",colspan:"4"},"No remuneration_types found.",-1),se=[te],me={__name:"Index",props:{remuneration_types:Object,can:Object,translations:Object,filters:Object},setup(d){const h=d,w=s=>{g.delete(route("remuneration_types.destroy",s))},l=V({id:null,search:h.filters.search,trashed:h.filters.trashed});let b=null;D(l,function(s){clearTimeout(b),b=setTimeout(()=>{const n={};for(const u in s)s[u]!==null&&(n[u]=s[u]);const t={preserveState:!0};g.get("/remuneration_types",n,t)},150)},{deep:!0});const k=()=>{for(const s in l.value)l.value[s]=null},o=(s,n)=>h.translations[s]||s;return(s,n)=>(c(),f(N,{translations:d.translations},{header:i(()=>[e("h1",U,a(o("remuneration types")),1)]),default:i(()=>[e("div",q,[e("div",E,[r(m(S),{title:`${o("remuneration types")}`},null,8,["title"]),e("div",F,[r(T,{modelValue:l.value.search,"onUpdate:modelValue":n[1]||(n[1]=t=>l.value.search=t),transitions:d.translations,class:"mr-4 w-full max-w-md",onReset:k},{default:i(()=>[e("label",L,a(o("trashed:")),1),$(e("select",{"onUpdate:modelValue":n[0]||(n[0]=t=>l.value.trashed=t),class:"form-select mt-1 w-full"},[M,e("option",P,a(o("with trashed")),1),e("option",Z,a(o("only trashed")),1)],512),[[j,l.value.trashed]])]),_:1},8,["modelValue","transitions"]),r(m(p),{class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition",href:"/remuneration_types/create"},{default:i(()=>[e("span",null,a(o("create")),1),e("span",z," "+a(o("remuneration type")),1)]),_:1})]),e("div",A,[e("table",G,[e("thead",null,[e("tr",H,[e("th",J,a(o("name")),1),e("th",K,a(o("description")),1),e("th",Q,a(o("delete")),1)])]),e("tbody",null,[(c(!0),_(O,null,B(d.remuneration_types.data,t=>(c(),_("tr",{key:t.id,class:"hover:bg-gray-100 focus-within:bg-gray-100"},[e("td",W,[r(m(p),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/remuneration_types/${t.id}/edit`},{default:i(()=>[x(a(t.name)+" ",1),t.deleted_at?(c(),f(v,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):y("",!0)]),_:2},1032,["href"])]),e("td",X,[r(m(p),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/remuneration_types/${t.id}/edit`},{default:i(()=>[x(a(t.description)+" ",1),t.deleted_at?(c(),f(v,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):y("",!0)]),_:2},1032,["href"])]),e("td",Y,[r(R,{onDelete:u=>w(`${t.id}`)},{default:i(()=>[x("Delete")]),_:2},1032,["onDelete"])])]))),128)),d.remuneration_types.length===0?(c(),_("tr",ee,se)):y("",!0)])])]),r(C,{class:"mt-6",links:d.remuneration_types.links},null,8,["links"])]),r(I)])]),_:1},8,["translations"]))}};export{me as default};
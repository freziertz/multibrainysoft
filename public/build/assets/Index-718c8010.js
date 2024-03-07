import{r as D,d as V,o as i,c as m,w as d,a as e,t as a,b as c,u as h,Z as S,e as $,v as j,i as _,f,g as x,h as B,j as b,F as O,O as g}from"./app-ec8b9ce4.js";import{_ as N}from"./AuthenticatedLayout-5a58aa4e.js";import{S as I}from"./SectionBorder-8a4073ef.js";import{I as v}from"./Icon-16df6851.js";import{S as T,_ as C}from"./SearchFilter-6d09436f.js";import{D as U}from"./DeleteButton-6c29d04d.js";import"./ApplicationLogo-2d8f8bcb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-f0ec292f.js";const q={class:"mb-1 ml-4 text-3xl font-bold"},E={class:"mx-4"},F={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},L={class:"flex items-center justify-between mb-6"},M={class:"block text-gray-700"},P=e("option",{value:null},null,-1),R={value:"with"},Z={value:"only"},z={class:"hidden md:inline"},A={class:"bg-white rounded-md shadow overflow-x-auto"},G={class:"w-full whitespace-nowrap"},H={class:"text-left font-bold"},J={class:"pb-2 pt-2 px-6"},K={class:"pb-2 pt-2 px-6"},Q={class:"pb-2 pt-2 px-2"},W={class:"border-t"},X={class:"border-t"},Y={class:"border-t"},ee={key:0},te=e("td",{class:"px-6 py-4 border-t",colspan:"4"},"No departments found.",-1),se=[te],me={__name:"Index",props:{departments:Object,can:Object,translations:Object,filters:Object},setup(n){const p=n,w=s=>{g.delete(route("departments.destroy",s))},r=D({id:null,search:p.filters.search,trashed:p.filters.trashed});let y=null;V(r,function(s){clearTimeout(y),y=setTimeout(()=>{const l={};for(const u in s)s[u]!==null&&(l[u]=s[u]);const t={preserveState:!0};g.get("/departments",l,t)},150)},{deep:!0});const k=()=>{for(const s in r.value)r.value[s]=null},o=(s,l)=>p.translations[s]||s;return(s,l)=>(i(),m(N,{translations:n.translations},{header:d(()=>[e("h1",q,a(o("departments")),1)]),default:d(()=>[e("div",E,[e("div",F,[c(h(S),{title:`${o("departments")}`},null,8,["title"]),e("div",L,[c(T,{modelValue:r.value.search,"onUpdate:modelValue":l[1]||(l[1]=t=>r.value.search=t),transitions:n.translations,class:"mr-4 w-full max-w-md",onReset:k},{default:d(()=>[e("label",M,a(o("trashed:")),1),$(e("select",{"onUpdate:modelValue":l[0]||(l[0]=t=>r.value.trashed=t),class:"form-select mt-1 w-full"},[P,e("option",R,a(o("with trashed")),1),e("option",Z,a(o("only trashed")),1)],512),[[j,r.value.trashed]])]),_:1},8,["modelValue","transitions"]),n.can.create_department?(i(),m(h(_),{key:0,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition",href:"/departments/create"},{default:d(()=>[e("span",null,a(o("create")),1),e("span",z," "+a(o("department")),1)]),_:1})):f("",!0)]),e("div",A,[e("table",G,[e("thead",null,[e("tr",H,[e("th",J,a(o("name")),1),e("th",K,a(o("description")),1),e("th",Q,a(o("delete")),1)])]),e("tbody",null,[(i(!0),x(O,null,B(n.departments.data,t=>(i(),x("tr",{key:t.id,class:"hover:bg-gray-100 focus-within:bg-gray-100"},[e("td",W,[c(h(_),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/departments/${t.id}/edit`},{default:d(()=>[b(a(t.name)+" ",1),t.deleted_at?(i(),m(v,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):f("",!0)]),_:2},1032,["href"])]),e("td",X,[c(h(_),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/departments/${t.id}/edit`},{default:d(()=>[b(a(t.description)+" ",1),t.deleted_at?(i(),m(v,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):f("",!0)]),_:2},1032,["href"])]),e("td",Y,[c(U,{onDelete:u=>w(`${t.id}`)},{default:d(()=>[b("Delete")]),_:2},1032,["onDelete"])])]))),128)),n.departments.length===0?(i(),x("tr",ee,se)):f("",!0)])])]),c(C,{class:"mt-6",links:n.departments.links},null,8,["links"])]),c(I)])]),_:1},8,["translations"]))}};export{me as default};
import{r as w,d as v,o as l,c as o,w as r,a as t,t as s,b as i,u as d,Z as $,e as V,v as S,i as c,f as n,g as y,h as j,j as h,F as N,O}from"./app-2c7d1a44.js";import{_ as B}from"./AuthenticatedLayout-62b37a75.js";import{S as D}from"./SectionBorder-a8f1ddf7.js";import{I as f}from"./Icon-ea9a6cd1.js";import{S as I,_ as T}from"./SearchFilter-1eb49d33.js";import"./ApplicationLogo-ddd2dcec.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-cbada9db.js";const C={class:"mb-1 ml-4 text-3xl font-bold"},P={class:"mx-4"},U={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},q={class:"flex items-center justify-between mb-6"},E={class:"block text-gray-700"},F=t("option",{value:null},null,-1),L={value:"with"},M={value:"only"},R={class:"hidden md:inline"},Z={class:"bg-white rounded-md shadow overflow-x-auto"},z={class:"w-full whitespace-nowrap"},A={class:"text-left font-bold"},G={class:"pb-2 pt-2 px-6"},H={class:"pb-2 pt-2 px-6"},J={class:"pb-2 pt-2 px-6"},K={class:"pb-2 pt-2 px-2"},Q={class:"pb-2 pt-2 px-6"},W={class:"pb-2 pt-2 px-6"},X={class:"pb-2 pt-2 px-6"},Y={class:"pb-2 pt-2 px-6"},ee={class:"pb-2 pt-2 px-6"},te={class:"pb-2 pt-2 px-6"},se={class:"pb-2 pt-2 px-6"},ae={class:"pb-2 pt-2 px-6"},le={class:"pb-2 pt-2 px-6"},re={class:"pb-2 pt-2 px-6"},ie={class:"border-t"},oe={class:"border-t"},de={class:"border-t"},ne={class:"border-t"},ce={class:"border-t"},he={class:"border-t"},fe={class:"border-t"},_e={class:"border-t"},me={class:"border-t"},xe={class:"border-t"},ue={class:"border-t"},pe={class:"border-t"},be={class:"border-t"},ye={class:"border-t"},ge={key:0},ke=t("td",{class:"px-6 py-4 border-t",colspan:"4"},"No pays found.",-1),we=[ke],De={__name:"PayDetails",props:{pays:Object,max_pay:Number,can:Object,translations:Object,filters:Object},setup(m){const p=m,u=w({id:null,search:p.filters.search,trashed:p.filters.trashed});let g=null;v(u,function(_){clearTimeout(g),g=setTimeout(()=>{const x={};for(const b in _)_[b]!==null&&(x[b]=_[b]);const e={preserveState:!0};O.get("/pays",x,e)},150)},{deep:!0});const k=()=>{for(const _ in u.value)u.value[_]=null},a=(_,x)=>p.translations[_]||_;return(_,x)=>(l(),o(B,{translations:m.translations},{header:r(()=>[t("h1",C,s(a("pay details for"))+" "+s(m.max_pay),1)]),default:r(()=>[t("div",P,[t("div",U,[i(d($),{title:`${a("pay details")}`},null,8,["title"]),t("div",q,[i(I,{modelValue:u.value.search,"onUpdate:modelValue":x[1]||(x[1]=e=>u.value.search=e),transitions:m.translations,class:"mr-4 w-full max-w-md",onReset:k},{default:r(()=>[t("label",E,s(a("trashed:")),1),V(t("select",{"onUpdate:modelValue":x[0]||(x[0]=e=>u.value.trashed=e),class:"form-select mt-1 w-full"},[F,t("option",L,s(a("with trashed")),1),t("option",M,s(a("only trashed")),1)],512),[[S,u.value.trashed]])]),_:1},8,["modelValue","transitions"]),m.can.create_pay?(l(),o(d(c),{key:0,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition",href:"/pays/create"},{default:r(()=>[t("span",null,s(a("create")),1),t("span",R," "+s(a("pay")),1)]),_:1})):n("",!0)]),t("div",Z,[t("table",z,[t("thead",null,[t("tr",A,[t("th",G,s(a("first name")),1),t("th",H,s(a("last name")),1),t("th",J,s(a("run date")),1),t("th",K,s(a("pay"))+" #",1),t("th",Q,s(a("basic salary")),1),t("th",W,s(a("allowance")),1),t("th",X,s(a("gross")),1),t("th",Y,s(a("taxable pay")),1),t("th",ee,s(a("paye")),1),t("th",te,s(a("earning")),1),t("th",se,s(a("deduction")),1),t("th",ae,s(a("net")),1),t("th",le,s(a("paid")),1),t("th",re,s(a("net balance")),1)])]),t("tbody",null,[(l(!0),y(N,null,j(m.pays.data,e=>(l(),y("tr",{key:e.id,class:"hover:bg-gray-100 focus-within:bg-gray-100"},[t("td",ie,[i(d(c),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/pays/${e.id}/edit`},{default:r(()=>[h(s(e.first_name)+" ",1),e.deleted_at?(l(),o(f,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):n("",!0)]),_:2},1032,["href"])]),t("td",oe,[i(d(c),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/pays/${e.id}/edit`},{default:r(()=>[h(s(e.last_name)+" ",1),e.deleted_at?(l(),o(f,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):n("",!0)]),_:2},1032,["href"])]),t("td",de,[i(d(c),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/pays/${e.id}/edit`},{default:r(()=>[h(s(e.run_date)+" ",1),e.deleted_at?(l(),o(f,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):n("",!0)]),_:2},1032,["href"])]),t("td",ne,[i(d(c),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/pays/${e.id}/edit`},{default:r(()=>[h(s(e.pay_number)+" ",1),e.deleted_at?(l(),o(f,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):n("",!0)]),_:2},1032,["href"])]),t("td",ce,[i(d(c),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/pays/${e.id}/edit`},{default:r(()=>[h(s(e.basic_salary)+" ",1),e.deleted_at?(l(),o(f,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):n("",!0)]),_:2},1032,["href"])]),t("td",he,[i(d(c),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/pays/${e.id}/edit`},{default:r(()=>[h(s(e.allowance)+" ",1),e.deleted_at?(l(),o(f,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):n("",!0)]),_:2},1032,["href"])]),t("td",fe,[i(d(c),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/pays/${e.id}/edit`},{default:r(()=>[h(s(e.gloss)+" ",1),e.deleted_at?(l(),o(f,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):n("",!0)]),_:2},1032,["href"])]),t("td",_e,[i(d(c),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/pays/${e.id}/edit`},{default:r(()=>[h(s(e.taxable)+" ",1),e.deleted_at?(l(),o(f,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):n("",!0)]),_:2},1032,["href"])]),t("td",me,[i(d(c),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/pays/${e.id}/edit`},{default:r(()=>[h(s(e.paye)+" ",1),e.deleted_at?(l(),o(f,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):n("",!0)]),_:2},1032,["href"])]),t("td",xe,[i(d(c),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/pays/${e.id}/edit`},{default:r(()=>[h(s(e.monthly_earning)+" ",1),e.deleted_at?(l(),o(f,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):n("",!0)]),_:2},1032,["href"])]),t("td",ue,[i(d(c),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/pays/${e.id}/edit`},{default:r(()=>[h(s(e.deduction)+" ",1),e.deleted_at?(l(),o(f,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):n("",!0)]),_:2},1032,["href"])]),t("td",pe,[i(d(c),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/pays/${e.id}/edit`},{default:r(()=>[h(s(e.net)+" ",1),e.deleted_at?(l(),o(f,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):n("",!0)]),_:2},1032,["href"])]),t("td",be,[i(d(c),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/pays/${e.id}/edit`},{default:r(()=>[h(s(e.net_paid)+" ",1),e.deleted_at?(l(),o(f,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):n("",!0)]),_:2},1032,["href"])]),t("td",ye,[i(d(c),{class:"flex items-center px-6 py-2 focus:text-indigo-500 text-sm",href:`/pays/${e.id}/edit`},{default:r(()=>[h(s(e.net_balance)+" ",1),e.deleted_at?(l(),o(f,{key:0,name:"trash",class:"flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"})):n("",!0)]),_:2},1032,["href"])])]))),128)),m.pays.length===0?(l(),y("tr",ge,we)):n("",!0)])])]),i(T,{class:"mt-6",links:m.pays.links},null,8,["links"])]),i(D)])]),_:1},8,["translations"]))}};export{De as default};
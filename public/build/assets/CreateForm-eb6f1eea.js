import{r as w,T as h,o as l,g as i,a,t as u,b as r,u as s,e as _,v as b,F as g,h as v,w as y,k as S,l as B,j as N,f as $}from"./app-ec8b9ce4.js";import{_ as m,a as p,b as f}from"./TextInput-e66e4902.js";import{P as I}from"./PrimaryButton-b3d0a216.js";import"./_plugin-vue_export-helper-c27b6911.js";const U={class:"text-lg font-medium text-gray-900"},z=["onSubmit"],C=["error"],F=["value"],T=["error"],j=["value"],q={class:"col-span-6 sm:col-span-4"},A={class:"flex items-center gap-4"},D={key:0,class:"text-sm text-gray-600"},L={__name:"CreateForm",props:{translations:Object,banks:Array,statutory_types:Array},setup(c){const k=c,V=w(null),e=h({name:"",description:"",bank_id:"",statutory_type_id:"",account_number:""}),x=()=>{e.post(route("organizations.store"),{preserveScroll:!0,onSuccess:()=>e.reset(),onError:()=>{e.errors.id&&nameInput.value.focus()}})},n=(d,o)=>k.translations[d]||d;return(d,o)=>(l(),i("section",null,[a("header",null,[a("h2",U,u(n("create"))+" "+u(n("organization")),1)]),a("form",{onSubmit:B(x,["prevent"]),class:"mt-6 space-y-6"},[a("div",null,[r(m,{for:"name",value:`${n("name")}`},null,8,["value"]),r(p,{id:"name",ref:"nameInput",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=t=>s(e).name=t),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),r(f,{message:s(e).errors.name,class:"mt-2"},null,8,["message"])]),a("div",null,[_(a("select",{"onUpdate:modelValue":o[1]||(o[1]=t=>s(e).bank_id=t),error:s(e).errors.bank_id,class:"mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",label:"Bank",required:""},[(l(!0),i(g,null,v(c.banks,t=>(l(),i("option",{key:t.id,value:t.id},u(t.name),9,F))),128))],8,C),[[b,s(e).bank_id]])]),a("div",null,[_(a("select",{"onUpdate:modelValue":o[2]||(o[2]=t=>s(e).statutory_type_id=t),error:s(e).errors.statutory_type_id,class:"mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",label:"Bank",required:""},[(l(!0),i(g,null,v(c.statutory_types,t=>(l(),i("option",{key:t.id,value:t.id},u(t.name),9,j))),128))],8,T),[[b,s(e).statutory_type_id]])]),a("div",null,[r(m,{for:"account_number",value:`${n("account number")}`},null,8,["value"]),r(p,{id:"account_number",ref_key:"accountNumberInput",ref:V,modelValue:s(e).account_number,"onUpdate:modelValue":o[3]||(o[3]=t=>s(e).account_number=t),type:"text",class:"mt-1 block w-full",autocomplete:"account_number"},null,8,["modelValue"]),r(f,{message:s(e).errors.account_number,class:"mt-2"},null,8,["message"])]),a("div",q,[r(m,{for:"description",value:`${n("description")}`},null,8,["value"]),r(p,{id:"description",ref:"descriptionInput",modelValue:s(e).description,"onUpdate:modelValue":o[4]||(o[4]=t=>s(e).description=t),type:"text",class:"mt-1 block w-full",autocomplete:"description"},null,8,["modelValue"]),r(f,{message:s(e).errors.description,class:"mt-2"},null,8,["message"])]),a("div",A,[r(I,{disabled:s(e).processing},{default:y(()=>[N(u(n("save")),1)]),_:1},8,["disabled"]),r(S,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:y(()=>[s(e).recentlySuccessful?(l(),i("p",D,u(n("save"))+".",1)):$("",!0)]),_:1})])],40,z)]))}};export{L as default};
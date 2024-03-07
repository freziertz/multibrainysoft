import{r as b,T as V,o as d,g as i,a as r,t as u,b as a,e as w,v as x,u as t,F as k,h,w as v,k as S,l as $,j as B,f as N}from"./app-2c7d1a44.js";import{_ as m,a as _,b as p}from"./TextInput-c5171d56.js";import{P as U}from"./PrimaryButton-e0cb1bc2.js";import"./_plugin-vue_export-helper-c27b6911.js";const j={class:"text-lg font-medium text-gray-900"},I=["onSubmit"],T=["error"],E=["value"],F={class:"col-span-6 sm:col-span-4"},O={class:"flex items-center gap-4"},P={key:0,class:"text-sm text-gray-600"},L={__name:"EditForm",props:{remuneration:Object,remuneration_types:Object,remuneration_type_id:Number,translations:Object},setup(f){const l=f,y=b(null),n=(c,o)=>l.translations[c]||c,e=V({_method:"PUT",amount:l.remuneration.amount,start_date:l.remuneration.start_date,end_date:l.remuneration.end_date,employee_id:l.remuneration.employee_id,remuneration_type_id:l.remuneration.statutory_id}),g=()=>{e.post(route("remunerations.update",l.remuneration.id),{preserveScroll:!0,onSuccess:()=>e.reset(),onError:()=>{e.errors.id&&y.value.focus()}})};return(c,o)=>(d(),i("section",null,[r("header",null,[r("h2",j,u(n("edit"))+" "+u(n("remuneration type")),1)]),r("form",{onSubmit:$(g,["prevent"]),class:"mt-6 space-y-6"},[r("div",null,[a(m,{for:"remuneration_type_id",value:`${n("allowance type")}`},null,8,["value"]),w(r("select",{"onUpdate:modelValue":o[0]||(o[0]=s=>t(e).remuneration_type_id=s),error:t(e).errors.remuneration_type_id,class:"mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",label:"Bank",required:""},[(d(!0),i(k,null,h(f.remuneration_types,s=>(d(),i("option",{key:s.id,value:s.id},u(s.name),9,E))),128))],8,T),[[x,t(e).remuneration_type_id]])]),r("div",null,[a(m,{for:"start_date",value:`${n("start_date")}`},null,8,["value"]),a(_,{id:"start_date",ref:"start_dateInput",modelValue:t(e).start_date,"onUpdate:modelValue":o[1]||(o[1]=s=>t(e).start_date=s),type:"date",class:"mt-1 block w-full",autocomplete:"start_date"},null,8,["modelValue"]),a(p,{message:t(e).errors.start_date,class:"mt-2"},null,8,["message"])]),r("div",null,[a(m,{for:"end_date",value:`${n("end_date")}`},null,8,["value"]),a(_,{id:"end_date",ref:"end_dateInput",modelValue:t(e).end_date,"onUpdate:modelValue":o[2]||(o[2]=s=>t(e).end_date=s),type:"date",class:"mt-1 block w-full",autocomplete:"end_date"},null,8,["modelValue"]),a(p,{message:t(e).errors.end_date,class:"mt-2"},null,8,["message"])]),r("div",F,[a(m,{for:"amount",value:`${n("amount")}`},null,8,["value"]),a(_,{id:"amount",ref:"amountInput",modelValue:t(e).amount,"onUpdate:modelValue":o[3]||(o[3]=s=>t(e).amount=s),type:"text",class:"mt-1 block w-full",autocomplete:"amount"},null,8,["modelValue"]),a(p,{message:t(e).errors.amount,class:"mt-2"},null,8,["message"])]),r("div",O,[a(U,{disabled:t(e).processing},{default:v(()=>[B(u(n("save")),1)]),_:1},8,["disabled"]),a(S,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:v(()=>[t(e).recentlySuccessful?(d(),i("p",P,u(n("saved"))+".",1)):N("",!0)]),_:1})])],40,I)]))}};export{L as default};
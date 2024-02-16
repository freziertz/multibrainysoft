import{r as w,T as k,o as l,g as d,a as o,t as u,b as i,u as t,e as p,v as f,F as g,h as v,w as _,k as S,l as U,j as $,f as B}from"./app-2c7d1a44.js";import{_ as b,a as y,b as V}from"./TextInput-c5171d56.js";import{P as N}from"./PrimaryButton-e0cb1bc2.js";import"./_plugin-vue_export-helper-c27b6911.js";const T={class:"text-lg font-medium text-gray-900"},j=["onSubmit"],D=["error"],E=["value"],F=["error"],I=["value"],L={class:"flex items-center gap-4"},P={key:0,class:"text-sm text-gray-600"},O={__name:"EditForm",props:{levels:Array,scales:Array,designation:Object,translations:Object},setup(c){const n=c,x=w(null),r=(m,a)=>n.translations[m]||m,e=k({_method:"PUT",name:n.designation.name,description:n.designation.description,level_id:n.designation.level_id,scale_id:n.designation.scale_id}),h=()=>{e.post(route("designations.update",n.designation.id),{preserveScroll:!0,onSuccess:()=>e.reset(),onError:()=>{e.errors.id&&x.value.focus()}})};return(m,a)=>(l(),d("section",null,[o("header",null,[o("h2",T,u(r("edit"))+" "+u(r("designation")),1)]),o("form",{onSubmit:U(h,["prevent"]),class:"mt-6 space-y-6"},[o("div",null,[i(b,{for:"name",value:`${r("name")}`},null,8,["value"]),i(y,{id:"name",ref:"nameInput",modelValue:t(e).name,"onUpdate:modelValue":a[0]||(a[0]=s=>t(e).name=s),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),i(V,{message:t(e).errors.name,class:"mt-2"},null,8,["message"])]),o("div",null,[p(o("select",{"onUpdate:modelValue":a[1]||(a[1]=s=>t(e).level_id=s),error:t(e).errors.level_id,class:"mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",label:"Level",required:""},[(l(!0),d(g,null,v(c.levels,s=>(l(),d("option",{key:s.id,value:s.id},u(s.name),9,E))),128))],8,D),[[f,t(e).level_id]])]),o("div",null,[p(o("select",{"onUpdate:modelValue":a[2]||(a[2]=s=>t(e).scale_id=s),error:t(e).errors.scale_id,class:"mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",label:"Level",required:""},[(l(!0),d(g,null,v(c.scales,s=>(l(),d("option",{key:s.id,value:s.id},u(s.name),9,I))),128))],8,F),[[f,t(e).scale_id]])]),o("div",null,[i(b,{for:"description",value:`${r("description")}`},null,8,["value"]),i(y,{id:"description",ref:"descriptionInput",modelValue:t(e).description,"onUpdate:modelValue":a[3]||(a[3]=s=>t(e).description=s),type:"text",class:"mt-1 block w-full",autocomplete:"description"},null,8,["modelValue"]),i(V,{message:t(e).errors.description,class:"mt-2"},null,8,["message"])]),o("div",L,[i(N,{disabled:t(e).processing},{default:_(()=>[$(u(r("save")),1)]),_:1},8,["disabled"]),i(S,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:_(()=>[t(e).recentlySuccessful?(l(),d("p",P,u(r("saved"))+".",1)):B("",!0)]),_:1})])],40,j)]))}};export{O as default};
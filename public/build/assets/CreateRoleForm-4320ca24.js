import{r as x,T as y,o as n,g as l,a as s,t as m,b as o,u as t,F as g,h,w as p,k as b,l as k,j as S,f as V}from"./app-ec8b9ce4.js";import{_ as I,a as $,b as w}from"./TextInput-e66e4902.js";import{P as B}from"./PrimaryButton-b3d0a216.js";import{_ as N}from"./Checkbox-4fba078f.js";import"./_plugin-vue_export-helper-c27b6911.js";const j={class:"text-lg font-medium text-gray-900"},C=["onSubmit"],F={class:"flex items-center"},T={class:"ml-2 text-sm text-gray-600"},E={class:"flex items-center gap-4"},O={key:0,class:"text-sm text-gray-600"},L={__name:"CreateRoleForm",props:{permissions:Array,role:Object,translations:Object},setup(u){const f=u,d=x(null),e=y({name:"",permissionIds:[]}),_=()=>{e.post(route("roles.store"),{preserveScroll:!0,onSuccess:()=>e.reset(),onError:()=>{e.errors.name&&(console.log("error"),d.value.focus())}})},c=(i,r)=>f.translations[i]||i;return(i,r)=>(n(),l("section",null,[s("header",null,[s("h2",j,m(c("create"))+" "+m(c("role")),1)]),s("form",{onSubmit:k(_,["prevent"]),class:"mt-6 space-y-6"},[s("div",null,[o(I,{for:"name",value:`${c("name")}`},null,8,["value"]),o($,{id:"name",ref_key:"nameInput",ref:d,modelValue:t(e).name,"onUpdate:modelValue":r[0]||(r[0]=a=>t(e).name=a),type:"text",class:"mt-1 block w-full",autocomplete:"names"},null,8,["modelValue"]),o(w,{message:t(e).errors.name,class:"mt-2"},null,8,["message"])]),(n(!0),l(g,null,h(u.permissions,a=>(n(),l("div",{key:a.id,class:"col-span-6 sm:col-span-4"},[s("label",F,[o(N,{checked:t(e).permissionIds,"onUpdate:checked":r[1]||(r[1]=v=>t(e).permissionIds=v),id:a.id,value:a.id},null,8,["checked","id","value"]),s("span",T,m(a.name),1)])]))),128)),s("div",E,[o(B,{disabled:t(e).processing},{default:p(()=>[S("Save")]),_:1},8,["disabled"]),o(b,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:p(()=>[t(e).recentlySuccessful?(n(),l("p",O,"Saved.")):V("",!0)]),_:1})])],40,C)]))}};export{L as default};
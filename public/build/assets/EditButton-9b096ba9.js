import{_ as n}from"./_plugin-vue_export-helper-c27b6911.js";import{o as i,g as s}from"./app-d0964fae.js";const r={name:"EditButton",methods:{handleClick(){confirm("Are you sure you want to edit this item?")&&this.$emit("edit")}}};function a(c,t,d,u,_,e){return i(),s("button",{class:"edit-button transition ease-in-out duration-150",onClick:t[0]||(t[0]=(...o)=>e.handleClick&&e.handleClick(...o))}," Post Now ")}const f=n(r,[["render",a]]);export{f as E};
import{s as n,d as t,N as a,r as m,E as h,T as x,e as r,p as c,g as d}from"./chunks/framework.291945aa.js";import{a as f}from"./chunks/axios.4a70c6fc.js";const g=d(" 每日新闻"),w=t("span",{class:"inline-block text-xl i-carbon-update-now"},null,-1),b=[g,w],k=["onClick"],v={class:"pt-6 w-full md:p-8 text-center md:text-left space-y-4"},y={class:"m-auto max-w-3xl"},L={class:"text-lg font-bold flex"},P={class:"px-2 text-blue-500 bg-green inline-block cursor-pointer whitespace-nowrap"},N=d(),V={class:"text-underline"},q=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"","text":"~"},"features":[{"title":"Simplicity First","details":"Minimal setup with markdown-centered project structure helps you focus on writing."},{"title":"Vue-Powered","details":"Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue."},{"title":"Performant","details":"VitePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.","footer":"MIT Licensed | Copyright © 2019-present Evan You"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1691037939000}'),C={name:"index.md"},M=Object.assign(C,{setup(E){function u(){const s=x();function o(){f.get("https://news.topurl.cn/api").then(e=>{const l=e.data.data.newsList;s.value=l})}return o(),[s,o]}function p(s){window.open(s)}const[_,i]=u();return(s,o)=>(r(),n("div",null,[t("h1",{class:"font-bold text-xl text-center cursor-pointer",onClick:o[0]||(o[0]=(...e)=>a(i)&&a(i)(...e))},b),(r(!0),n(m,null,h(a(_),e=>(r(),n("figure",{key:e.url,onClick:l=>p(e.url),class:"md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 border max-w-3xl m-auto my-2 cursor-pointer hover:bg-slate-200"},[t("div",v,[t("blockquote",y,[t("p",L,[t("span",P,c(e.category),1),N,t("span",V,c(e.title),1)])])])],8,k))),128))]))}});export{q as __pageData,M as default};
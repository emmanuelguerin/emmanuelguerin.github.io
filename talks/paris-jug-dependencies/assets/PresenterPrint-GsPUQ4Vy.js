import{d as u,u as _,a as d,c as m,b as h,r as p,o as s,e as n,f as t,t as a,g as l,F as g,h as f,n as v,i as b,j as x,k as y,l as N,m as k,_ as P}from"./index-CHll8hlt.js";import{N as w}from"./NoteDisplay-9QfTGieo.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=u({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),d({title:`Notes - ${m.title}`});const i=h(()=>p.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(s(),n("div",{id:"page-root",style:v(l(b))},[t("div",V,[t("div",L,[t("h1",S,a(l(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(s(!0),n(g,null,f(i.value,(e,c)=>(s(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(l(x)),1),y(" "+a(e==null?void 0:e.title)+" ",1),j])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(s(),n("hr",z)):k("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/Users/e.guerin/dev/github/emmanuelguerin/emmanuelguerin.github.io/imp/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};

import{d as p,z as m,o as i,b as f,e as s,f as g,h as v,c as _,k,q as h,s as x,B as l}from"../modules/vue-3jFfoD2Z.js";import{u as d,f as $}from"./context-C9lxkuCn.js";import"../index-B8baXuGG.js";import"../modules/shiki-CaCLiKMr.js";function c(e){return e.startsWith("/")?"/talks/paris-jug-dependencies"+e.slice(1):e}function y(e,r=!1){const o=e&&["#","rgb","hsl"].some(n=>e.indexOf(n)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?r?`linear-gradient(#0005, #0008), url(${c(e)})`:`url("${c(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const b={class:"my-auto w-full"},C=p({__name:"cover",props:{background:{default:""}},setup(e){d();const r=e,o=m(()=>y(r.background,!0));return(t,n)=>(i(),f("div",{class:"slidev-layout cover",style:v(o.value)},[s("div",b,[g(t.$slots,"default")])],4))}}),R={__name:"slides.md__slidev_1",setup(e){const{$slidev:r,$nav:o,$clicksContext:t,$clicks:n,$page:B,$renderContext:w,$frontmatter:u}=d();return t.setup(),(z,a)=>(i(),_(C,h(x(l($)(l(u),0))),{default:k(()=>a[0]||(a[0]=[s("h1",null,"Dépendances à gogo",-1),s("h2",null,"une CI multi repository",-1),s("p",null,"Emmanuel Guérin",-1),s("div",{class:"rounded w-60 absolute bottom-1 right-2 opacity-80"},[s("img",{src:"https://imgs.xkcd.com/comics/compiling.png",class:"rounded"}),s("span",{class:"text-xs m-0 p-0"},"https://xkcd.com/303")],-1)])),_:1},16))}};export{R as default};

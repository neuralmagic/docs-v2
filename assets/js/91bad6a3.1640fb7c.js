"use strict";(self.webpackChunkdocs_neuralmagic_com=self.webpackChunkdocs_neuralmagic_com||[]).push([[8631],{5044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=n(4848),s=n(8453),r=n(3999);const o={sidebar_position:2},c="Models",d={id:"llms/models/index",title:"Models",description:"",source:"@site/versioned_docs/version-1.7.0/llms/models/index.mdx",sourceDirName:"llms/models",slug:"/llms/models/",permalink:"/docs-v2/llms/models/",draft:!1,unlisted:!1,editUrl:"https://github.com/neuralmagic/docs-v2/tree/main/docs/llms/models/index.mdx",tags:[],version:"1.7.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Serving LLMs",permalink:"/docs-v2/llms/serving-llms"},next:{title:"Hugging Face Hub Models",permalink:"/docs-v2/llms/models/huggingface-models"}},l={},a=[];function u(e){const t={h1:"h1",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"models",children:"Models"}),"\n","\n","\n",(0,i.jsx)(r.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5965:(e,t,n)=>{n.d(t,{A:()=>h});n(6540);var i=n(4164),s=n(8774),r=n(4142),o=n(6654),c=n(1312),d=n(1107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var a=n(4848);function u(e){let{href:t,children:n}=e;return(0,a.jsx)(s.A,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:r}=e;return(0,a.jsxs)(u,{href:t,children:[(0,a.jsxs)(d.A,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:s,children:[n," ",s]}),r&&(0,a.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:r,children:r})]})}function f(e){let{item:t}=e;const n=(0,r.Nr)(t);return n?(0,a.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(t.docId??void 0);return(0,a.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,a.jsx)(p,{item:t});case"category":return(0,a.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},2771:(e,t,n)=>{n.d(t,{_:()=>c,u:()=>d});var i=n(6540),s=n(9532),r=n(4848);const o=i.createContext(null);function c(e){let{children:t,content:n}=e;const s=function(e){return(0,i.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,r.jsx)(o.Provider,{value:s,children:t})}function d(){const e=(0,i.useContext)(o);if(null===e)throw new s.dV("DocProvider");return e}},3999:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var i=n(4142),s=n(5965);const r={section:"section_Pg8a"};var o=n(2771),c=n(6588),d=n(4848);function l(e){const{items:t,children:n}=e;if(n)return(0,d.jsx)("section",{className:r.section,children:n});let l=function(e){let t;if(Array.isArray(e)&&e.length>0&&"string"==typeof e[0]){const n=e.map((e=>(0,i.cC)(e))),{metadata:s}=(0,o.u)(),r=s.version,d=(0,c.Ay)("docusaurus-plugin-content-docs")["docusaurus-plugin-content-docs"].default.versions.find((e=>e.name===r)).docs.filter((e=>n.find((t=>t.id===e.id))));t=n.map((e=>{const t=d.find((t=>t.id===e.id));return{docId:e.id,href:t.path,label:e.title,type:"link",unlisted:!1}}))}else t=e||(0,i.$S)().items;return t=(0,i.d1)(t),t}(t);return(0,d.jsx)("section",{className:r.section,children:l.map(((e,t)=>(0,d.jsx)(s.A,{item:e},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
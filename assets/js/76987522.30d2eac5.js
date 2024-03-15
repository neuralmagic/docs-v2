"use strict";(self.webpackChunkdocs_neuralmagic_com=self.webpackChunkdocs_neuralmagic_com||[]).push([[4210],{1311:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=i(5893),n=i(1151);const a={sidebar_position:1,title:"Why is Sparsity Important for LLMs?"},r="Why is Weight Sparsity Important for Large Language Models (LLMs)?",o={id:"guides/why-weight-sparsity",title:"Why is Sparsity Important for LLMs?",description:"Large Language Models (LLMs) have a large size that often poses challenges in terms of computational efficiency and memory usage. Weight sparsity is a technique that can significantly alleviate these issues, enhancing the practicality and scalability of LLMs. Here we outline the key benefits of weight sparsity in LLMs, focusing on three main aspects:",source:"@site/docs/guides/why-weight-sparsity.mdx",sourceDirName:"guides",slug:"/guides/why-weight-sparsity",permalink:"/docs-v2/next/guides/why-weight-sparsity",draft:!1,unlisted:!1,editUrl:"https://github.com/neuralmagic/docs-v2/tree/main/docs/guides/why-weight-sparsity.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Why is Sparsity Important for LLMs?"},sidebar:"autogenerated_docs",previous:{title:"Guides",permalink:"/docs-v2/next/guides/"},next:{title:"Convert LLMs From Hugging Face",permalink:"/docs-v2/next/guides/hf-llm-to-deepsparse"}},l={},c=[{value:"Text Generation Decode Performance",id:"text-generation-decode-performance",level:2},{value:"Text Generation Prefill Performance",id:"text-generation-prefill-performance",level:2},{value:"Memory Benefits of Sparsity for LLMs",id:"memory-benefits-of-sparsity-for-llms",level:2}];function d(e){const t={h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"why-is-weight-sparsity-important-for-large-language-models-llms",children:"Why is Weight Sparsity Important for Large Language Models (LLMs)?"}),"\n",(0,s.jsx)(t.p,{children:"Large Language Models (LLMs) have a large size that often poses challenges in terms of computational efficiency and memory usage. Weight sparsity is a technique that can significantly alleviate these issues, enhancing the practicality and scalability of LLMs. Here we outline the key benefits of weight sparsity in LLMs, focusing on three main aspects:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Decode Performance (how fast we generate new text)"}),"\n",(0,s.jsx)(t.li,{children:"Prefill Performance (how fast we process existing text)"}),"\n",(0,s.jsx)(t.li,{children:"Memory Consumption"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"text-generation-decode-performance",children:"Text Generation Decode Performance"}),"\n",(0,s.jsx)(t.p,{children:'The process of "decoding" tokens is the core loop in text generation that you witness as words come streaming out. For each token produced, all of the LLM\'s weights must be read. Since these models are usually several gigabytes in size, this can take a lot of time and causes this portion of the pipeline to be highly memory-bound - meaning most of the time is spent waiting for the weights to be read. As a result, compression is king. If the model weights can be made smaller, then we can simply read less memory. This is where sparsity comes in since many weights are zero and can be efficieintly compressed. Compounded with other techniques like quantization, we can start to get really small models and excellent generation latency.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Text Generation Decode Performance Sparsity Scaling",src:i(8272).Z+"",width:"2094",height:"1476"})}),"\n",(0,s.jsx)(t.h2,{id:"text-generation-prefill-performance",children:"Text Generation Prefill Performance"}),"\n",(0,s.jsx)(t.p,{children:'Prefilling, the process of generating initial context or "priming" the model before actual text generation, is another critical aspect where sparsity plays a vital role. During prefill, the LLM quickly processes a large volume of context data to provide relevant and coherent continuation. Sparse models, due to their reduced number of parameters and effective removal of FLOPs, enable faster processing of this context data, leading to improved prefill performance. This efficiency is particularly beneficial in applications requiring real-time generation or interaction, where latency can significantly impact user experience.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Text Generation Prefill Performance Sparsity Scaling",src:i(4600).Z+"",width:"2094",height:"1476"})}),"\n",(0,s.jsx)(t.h2,{id:"memory-benefits-of-sparsity-for-llms",children:"Memory Benefits of Sparsity for LLMs"}),"\n",(0,s.jsx)(t.p,{children:"Sparse models require less memory for storage, as many weights are zero and can be efficiently compressed. This reduction in memory usage is crucial for deploying LLMs on devices with limited memory, such as mobile devices or edge computing platforms.\nAdditionally, the reduced memory footprint enables the parallelization of models on a single machine, allowing for more complex or multiple models to be run simultaneously. This scalability can be particularly beneficial in server environments where space and memory are at a premium.\nMoreover, the lower memory requirements translate into reduced data transfer costs, especially in cloud-based applications, making LLMs more accessible and cost-effective for a broader range of users and applications."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Text Generation Memory Sparsity Scaling",src:i(9642).Z+"",width:"2264",height:"1656"})})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8272:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/decode-performance-sparsity-scaling-99f60e37e383d839a469a3866617ed06.png"},9642:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/memory-usage-sparsity-scaling-861073f3dc690f4e1cd152d65b863784.png"},4600:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/prefill-performance-sparsity-scaling-abcc1506ed2af56d3b9c049daddfd3ca.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>r});var s=i(7294);const n={},a=s.createContext(n);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
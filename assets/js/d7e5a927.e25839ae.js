"use strict";(self.webpackChunkdocs_neuralmagic_com=self.webpackChunkdocs_neuralmagic_com||[]).push([[1291],{1976:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(5893),i=n(1151);const a={tags:["installation","setup","DeepSparse","SparseML","SparseZoo"],keywords:["Neural Magic installation","DeepSparse setup","SparseML setup","SparseZoo setup"],description:"Step-by-step guides for installing NeuralMagic Products such as DeepSparse, SparseML, and SparseZoo.",sidebar_label:"Install",sidebar_position:1},t="Installation",l={id:"get-started/install/index",title:"Installation",description:"Step-by-step guides for installing NeuralMagic Products such as DeepSparse, SparseML, and SparseZoo.",source:"@site/docs/get-started/install/index.mdx",sourceDirName:"get-started/install",slug:"/get-started/install/",permalink:"/docs-v2/get-started/install/",draft:!1,unlisted:!1,editUrl:"https://github.com/neuralmagic/docs-v2/tree/main/docs/get-started/install/index.mdx",tags:[{label:"installation",permalink:"/docs-v2/tags/installation"},{label:"setup",permalink:"/docs-v2/tags/setup"},{label:"DeepSparse",permalink:"/docs-v2/tags/deep-sparse"},{label:"SparseML",permalink:"/docs-v2/tags/sparse-ml"},{label:"SparseZoo",permalink:"/docs-v2/tags/sparse-zoo"}],version:"current",sidebarPosition:1,frontMatter:{tags:["installation","setup","DeepSparse","SparseML","SparseZoo"],keywords:["Neural Magic installation","DeepSparse setup","SparseML setup","SparseZoo setup"],description:"Step-by-step guides for installing NeuralMagic Products such as DeepSparse, SparseML, and SparseZoo.",sidebar_label:"Install",sidebar_position:1},sidebar:"autogenerated_docs",previous:{title:"Getting Started",permalink:"/docs-v2/get-started/"},next:{title:"DeepSparse",permalink:"/docs-v2/get-started/install/deepsparse"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deployment Hardware Requirements",id:"deployment-hardware-requirements",level:3},{value:"Training Hardware Requirements",id:"training-hardware-requirements",level:3},{value:"Software Requirements",id:"software-requirements",level:3},{value:"Task-Specific Installation",id:"task-specific-installation",level:2},{value:"LLMs - Causal Language Modeling",id:"llms---causal-language-modeling",level:3},{value:"Computer Vision: Object Detection",id:"computer-vision-object-detection",level:3},{value:"Computer Vision: Image Classification",id:"computer-vision-image-classification",level:3},{value:"Natural Language Processing",id:"natural-language-processing",level:3},{value:"Product Specific Installation",id:"product-specific-installation",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{DocCardList:n,VersionInjector:a}=s;return n||u("DocCardList",!0),a||u("VersionInjector",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(s.p,{children:"This page guides you through installing Neural Magic's core products \u2013 DeepSparse, SparseML, and SparseZoo.\nWe provide streamlined installation commands for common use cases and links for in-depth instructions."}),"\n",(0,r.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(s.p,{children:"Ensure your system meets the following requirements before proceeding with the installation based on your use case:"}),"\n",(0,r.jsx)(s.h3,{id:"deployment-hardware-requirements",children:"Deployment Hardware Requirements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("b",{children:"CPU"}),": x86 with AVX2 instructions (Intel Haswell or newer, AMD Zen 2 or newer) or ARM v8.2 or newer."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("b",{children:"RAM"}),": Minimum 1GB (model and configuration dependent)"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"training-hardware-requirements",children:"Training Hardware Requirements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("b",{children:"CPU:"})," Intel, AMD, or ARM"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("b",{children:"RAM:"})," 4GB+ recommended (depends on your models and workflows)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("b",{children:"GPU:"})," NVIDIA (recommended, 16GB+ VRAM); AMD (limited support)"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"software-requirements",children:"Software Requirements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("b",{children:"OS:"})," Linux (Ubuntu, CentOS, RedHat, etc.). MacOS (limited support)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("b",{children:"Python:"})," 3.8 - 3.11"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("b",{children:"PyTorch:"})," >= 1.1.0, < 2.2"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"task-specific-installation",children:"Task-Specific Installation"}),"\n",(0,r.jsx)(s.p,{children:"Choose the installation command tailored to your primary deep learning task."}),"\n",(0,r.jsx)(s.h3,{id:"llms---causal-language-modeling",children:"LLMs - Causal Language Modeling"}),"\n",(0,r.jsx)(a,{targetProduct:["deepsparse","sparseml"],targetVersion:"==VERSION",prepend:"==",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install deepsparse[llm,server]==VERSION sparseml[llm]==VERSION\n"})})}),"\n",(0,r.jsx)(s.h3,{id:"computer-vision-object-detection",children:"Computer Vision: Object Detection"}),"\n",(0,r.jsx)(a,{targetProduct:["deepsparse","sparseml"],targetVersion:"==VERSION",prepend:"==",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install deepsparse[yolov8,server]==VERSION sparseml[yolov8]==VERSION\n"})})}),"\n",(0,r.jsx)(s.h3,{id:"computer-vision-image-classification",children:"Computer Vision: Image Classification"}),"\n",(0,r.jsx)(a,{targetProduct:["deepsparse","sparseml"],targetVersion:"==VERSION",prepend:"==",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install deepsparse[torchvision,server]==VERSION sparseml[torchvision]==VERSION\n"})})}),"\n",(0,r.jsx)(s.h3,{id:"natural-language-processing",children:"Natural Language Processing"}),"\n",(0,r.jsx)(a,{targetProduct:["deepsparse","sparseml"],targetVersion:"==VERSION",prepend:"==",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install deepsparse[transformers,server]==VERSION sparseml[transformers]==VERSION\n"})})}),"\n",(0,r.jsx)(s.h2,{id:"product-specific-installation",children:"Product Specific Installation"}),"\n",(0,r.jsx)(s.p,{children:"For comprehensive installation guides and customization options, explore the dedicated pages for each product:"}),"\n",(0,r.jsx)(n,{})]})}function p(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function u(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>t});var r=n(7294);const i={},a=r.createContext(i);function t(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);
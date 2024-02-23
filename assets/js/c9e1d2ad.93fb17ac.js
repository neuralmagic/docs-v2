"use strict";(self.webpackChunkdocs_neuralmagic_com=self.webpackChunkdocs_neuralmagic_com||[]).push([[7934],{8678:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var o=r(5893),i=r(1151);const t={tags:["sparsezoo","installation","model repository","pre-sparsified models"],keywords:["SparseZoo installation","Neural Magic model repository"],description:"Install SparseZoo, Neural Magic's repository of pre-sparsified models, or learn how to access it through SparseML and DeepSparse.",sidebar_label:"SparseZoo",sidebar_position:2},n="Installing SparseZoo",a={id:"get-started/install/sparsezoo",title:"Installing SparseZoo",description:"Install SparseZoo, Neural Magic's repository of pre-sparsified models, or learn how to access it through SparseML and DeepSparse.",source:"@site/docs/get-started/install/sparsezoo.mdx",sourceDirName:"get-started/install",slug:"/get-started/install/sparsezoo",permalink:"/docs-v2/get-started/install/sparsezoo",draft:!1,unlisted:!1,editUrl:"https://github.com/neuralmagic/docs-v2/tree/main/docs/get-started/install/sparsezoo.mdx",tags:[{label:"sparsezoo",permalink:"/docs-v2/tags/sparsezoo"},{label:"installation",permalink:"/docs-v2/tags/installation"},{label:"model repository",permalink:"/docs-v2/tags/model-repository"},{label:"pre-sparsified models",permalink:"/docs-v2/tags/pre-sparsified-models"}],version:"current",sidebarPosition:2,frontMatter:{tags:["sparsezoo","installation","model repository","pre-sparsified models"],keywords:["SparseZoo installation","Neural Magic model repository"],description:"Install SparseZoo, Neural Magic's repository of pre-sparsified models, or learn how to access it through SparseML and DeepSparse.",sidebar_label:"SparseZoo",sidebar_position:2},sidebar:"autogenerated_docs",previous:{title:"SparseML",permalink:"/docs-v2/get-started/install/sparseml"},next:{title:"Deploy",permalink:"/docs-v2/get-started/deploy"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Software Requirements",id:"software-requirements",level:3},{value:"Installation",id:"installation",level:2},{value:"PyPI",id:"pypi",level:3},{value:"GitHub (Advanced)",id:"github-advanced",level:3}];function p(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{VersionInjector:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionInjector",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"installing-sparsezoo",children:"Installing SparseZoo"}),"\n",(0,o.jsx)(s.p,{children:"SparseZoo is Neural Magic's repository of pre-sparsified deep learning models across various domains (computer vision, NLP, etc.).\nThe easiest way to access and use these models is through:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)("b",{children:"SparseML:"})," For model optimization, integration into your training pipelines."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)("b",{children:"DeepSparse:"})," For high-performance deployment of sparsified models."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(s.h3,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)("b",{children:"CPU:"})," Intel, AMD, or ARM"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"software-requirements",children:"Software Requirements"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)("b",{children:"OS:"})," Linux (Ubuntu, CentOS, RedHat, etc.). MacOS (limited support)"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)("b",{children:"Python:"})," 3.8 - 3.11"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(s.h3,{id:"pypi",children:"PyPI"}),"\n",(0,o.jsx)(s.p,{children:"For the most common use case, install the current release version of SparseZoo using PyPi:"}),"\n",(0,o.jsx)(r,{targetProduct:"sparsezoo",targetVersion:"==VERSION",prepend:"==",children:(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"pip install sparsezoo==VERSION\n"})})}),"\n",(0,o.jsx)(s.h3,{id:"github-advanced",children:"GitHub (Advanced)"}),"\n",(0,o.jsx)(s.p,{children:"For development purposes or advanced use cases, install directly from the GitHub repository:"}),"\n",(0,o.jsx)(r,{targetProduct:"sparsezoo",prepend:"v",currentTag:"main",ignoreNightly:!0,children:(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"pip install git+https://github.com/neuralmagic/sparsezoo.git@VERSION[dev]\n"})})}),"\n",(0,o.jsx)(s.p,{children:"Or from a locally cloned repository:"}),"\n",(0,o.jsx)(r,{targetProduct:"sparsezoo",prepend:"tags/v",currentTag:"main",ignoreNightly:!0,children:(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"git clone https://github.com/neuralmagic/sparsezoo.git\ncd sparsezoo\ngit checkout VERSION\npip install -e .[dev]\n"})})})]})}function c(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>a,a:()=>n});var o=r(7294);const i={},t=o.createContext(i);function n(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);
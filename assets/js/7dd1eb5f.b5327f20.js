"use strict";(self.webpackChunkdocs_neuralmagic_com=self.webpackChunkdocs_neuralmagic_com||[]).push([[2107],{395:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(5893),t=n(1151);const a={tags:["SparseML","NeuralMagic","AI Optimization","Deep Learning"],keywords:["SparseML","NeuralMagic","AI Optimization","Sparsity"],description:"Step-by-step guide for installing NeuralMagic's SparseML.",sidebar_label:"SparseML",sidebar_position:1},r="Installing SparseML",l={id:"get-started/install/sparseml",title:"Installing SparseML",description:"Step-by-step guide for installing NeuralMagic's SparseML.",source:"@site/docs/get-started/install/sparseml.mdx",sourceDirName:"get-started/install",slug:"/get-started/install/sparseml",permalink:"/docs-v2/get-started/install/sparseml",draft:!1,unlisted:!1,editUrl:"https://github.com/neuralmagic/docs-v2/tree/main/docs/get-started/install/sparseml.mdx",tags:[{label:"SparseML",permalink:"/docs-v2/tags/sparse-ml"},{label:"NeuralMagic",permalink:"/docs-v2/tags/neural-magic"},{label:"AI Optimization",permalink:"/docs-v2/tags/ai-optimization"},{label:"Deep Learning",permalink:"/docs-v2/tags/deep-learning"}],version:"current",sidebarPosition:1,frontMatter:{tags:["SparseML","NeuralMagic","AI Optimization","Deep Learning"],keywords:["SparseML","NeuralMagic","AI Optimization","Sparsity"],description:"Step-by-step guide for installing NeuralMagic's SparseML.",sidebar_label:"SparseML",sidebar_position:1},sidebar:"autogenerated_docs",previous:{title:"DeepSparse",permalink:"/docs-v2/get-started/install/deepsparse"},next:{title:"SparseZoo",permalink:"/docs-v2/get-started/install/sparsezoo"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Software Requirements",id:"software-requirements",level:3},{value:"Installation",id:"installation",level:2},{value:"PyPI",id:"pypi",level:3},{value:"GitHub",id:"github",level:3},{value:"Specialized Installations",id:"specialized-installations",level:2},{value:"Generative AI: HuggingFace",id:"generative-ai-huggingface",level:3},{value:"Object Detection: YOLOv8",id:"object-detection-yolov8",level:3},{value:"Image Classification: TorchVision",id:"image-classification-torchvision",level:3},{value:"Natural Language Processing: HuggingFace",id:"natural-language-processing-huggingface",level:3},{value:"Development",id:"development",level:3}];function c(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{VersionInjector:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionInjector",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"installing-sparseml",children:"Installing SparseML"}),"\n",(0,s.jsx)(i.p,{children:"Welcome to the SparseML installation guide. Here, you'll find instructions for various installation methods including PyPI and advanced options via GitHub."}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:"The installation commands correspond to the version of SparseML you're viewing in the documentation."})}),"\n",(0,s.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(i.h3,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["CPU","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Intel, AMD, and ARM CPUs are all supported."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["RAM","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"4GB or more is recommended, but it depends on the flow and model being used."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["GPU","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"NVIDIA GPUs are supported and tested and it is recommended to have a GPU with at least 16GB of memory."}),"\n",(0,s.jsx)(i.li,{children:"AMD GPUs are supported but not actively tested."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"software-requirements",children:"Software Requirements"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["OS","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Linux is supported and is tested across Ubuntu, CentOS, and RedHat distributions."}),"\n",(0,s.jsx)(i.li,{children:"macOS is supported but not actively tested."}),"\n",(0,s.jsx)(i.li,{children:"Windows is not supported at this time. However, Windows users can install SparseML via Docker or a virtual machine."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:"Python 3.8-3.11"}),"\n",(0,s.jsx)(i.li,{children:"PyTorch >= 1.1.0, < 2.2"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(i.h3,{id:"pypi",children:"PyPI"}),"\n",(0,s.jsx)(i.p,{children:"To install the current version of SparseML via PyPI, utilize the following command:"}),"\n",(0,s.jsx)(n,{targetProduct:"sparseml",targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"pip install sparseml==VERSION\n"})})}),"\n",(0,s.jsx)(i.h3,{id:"github",children:"GitHub"}),"\n",(0,s.jsx)(i.p,{children:"Advanced users can install from source code by utilizing the following command:"}),"\n",(0,s.jsx)(n,{targetProduct:"sparseml",prepend:"v",currentTag:"main",ignoreNightly:!0,children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"pip install git+https://github.com/neuralmagic/sparseml.git@VERSION\n"})})}),"\n",(0,s.jsx)(i.p,{children:"Additionally, the following commands install via GitHub, but from a locally cloned repository:"}),"\n",(0,s.jsx)(n,{targetProduct:"sparseml",prepend:"tags/v",currentTag:"main",ignoreNightly:!0,children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"git clone https://github.com/neuralmagic/sparseml.git\ncd sparseml\ngit checkout VERSION\npip install -e .\n"})})}),"\n",(0,s.jsx)(i.h2,{id:"specialized-installations",children:"Specialized Installations"}),"\n",(0,s.jsx)(i.h3,{id:"generative-ai-huggingface",children:"Generative AI: HuggingFace"}),"\n",(0,s.jsx)(i.p,{children:"For generative AI, particularly transformer architectures, this extra provides built in support for models like Llama, Mistral, MPT, GPT, and others.\nIt enables compatibility of HuggingFace's transformers pipelines and models to SparseML allowing SOTA pruning, quantization, and other optimizations."}),"\n",(0,s.jsx)(n,{targetProduct:"sparseml[llm]",targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"pip install sparseml[llm]==VERSION\n"})})}),"\n",(0,s.jsx)(i.h3,{id:"object-detection-yolov8",children:"Object Detection: YOLOv8"}),"\n",(0,s.jsx)(i.p,{children:"For object detection, this extra provides built in support for YOLOv8 models.\nIt enables compatibility of YOLOv8 models to SparseML allowing SOTA pruning, quantization, and other optimizations."}),"\n",(0,s.jsx)(n,{targetProduct:"sparseml[yolov8]",targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"pip install sparseml[yolov8]==VERSION\n"})})}),"\n",(0,s.jsx)(i.h3,{id:"image-classification-torchvision",children:"Image Classification: TorchVision"}),"\n",(0,s.jsx)(i.p,{children:"For image classification, this extra provides built in support for TorchVision models.\nIt enables compatibility of TorchVision models to SparseML allowing SOTA pruning, quantization, and other optimizations."}),"\n",(0,s.jsx)(n,{targetProduct:"sparseml[torchvision]",targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"pip install sparseml[torchvision]==VERSION\n"})})}),"\n",(0,s.jsx)(i.h3,{id:"natural-language-processing-huggingface",children:"Natural Language Processing: HuggingFace"}),"\n",(0,s.jsx)(i.p,{children:"For natural language processing, this extra provides built in support for HuggingFace's transformers models.\nIt enables compatibility of HuggingFace models to SparseML allowing SOTA pruning, quantization, and other optimizations."}),"\n",(0,s.jsx)(n,{targetProduct:"sparseml[transformers]",targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"pip install sparseml[transformers]==VERSION\n"})})}),"\n",(0,s.jsx)(i.h3,{id:"development",children:"Development"}),"\n",(0,s.jsx)(i.p,{children:"For development purposes, this extra provides built in support for development tools."}),"\n",(0,s.jsx)(n,{targetProduct:"sparseml[dev]",targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"pip install sparseml[dev]==VERSION\n"})})})]})}function p(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>r});var s=n(7294);const t={},a=s.createContext(t);function r(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);
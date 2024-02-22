"use strict";(self.webpackChunkdocs_neuralmagic_com=self.webpackChunkdocs_neuralmagic_com||[]).push([[5350],{4430:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=i(5893),r=i(1151);const a={tags:["DeepSparse","NeuralMagic","Model Optimization","Deep Learning"],keywords:["DeepSparse","NeuralMagic","Model Optimization","Sparsity"],description:"Step-by-step guide for installing NeuralMagic's DeepSparse.",sidebar_label:"DeepSparse",sidebar_position:1},t="Installing DeepSparse",l={id:"get-started/install/deepsparse",title:"Installing DeepSparse",description:"Step-by-step guide for installing NeuralMagic's DeepSparse.",source:"@site/docs/get-started/install/deepsparse.mdx",sourceDirName:"get-started/install",slug:"/get-started/install/deepsparse",permalink:"/docs-v2/get-started/install/deepsparse",draft:!1,unlisted:!1,editUrl:"https://github.com/neuralmagic/docs-v2/tree/main/docs/get-started/install/deepsparse.mdx",tags:[{label:"DeepSparse",permalink:"/docs-v2/tags/deep-sparse"},{label:"NeuralMagic",permalink:"/docs-v2/tags/neural-magic"},{label:"Model Optimization",permalink:"/docs-v2/tags/model-optimization"},{label:"Deep Learning",permalink:"/docs-v2/tags/deep-learning"}],version:"current",sidebarPosition:1,frontMatter:{tags:["DeepSparse","NeuralMagic","Model Optimization","Deep Learning"],keywords:["DeepSparse","NeuralMagic","Model Optimization","Sparsity"],description:"Step-by-step guide for installing NeuralMagic's DeepSparse.",sidebar_label:"DeepSparse",sidebar_position:1},sidebar:"autogenerated_docs",previous:{title:"Install",permalink:"/docs-v2/get-started/install/"},next:{title:"SparseML",permalink:"/docs-v2/get-started/install/sparseml"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Software Requirements",id:"software-requirements",level:3},{value:"Community Installation",id:"community-installation",level:2},{value:"PyPI",id:"pypi",level:3},{value:"GitHub",id:"github",level:3},{value:"Enterprise Installation",id:"enterprise-installation",level:2},{value:"PyPI",id:"pypi-1",level:3},{value:"Specialized Installations",id:"specialized-installations",level:2},{value:"Generative AI: HuggingFace",id:"generative-ai-huggingface",level:3},{value:"Object Detection: YOLOv8",id:"object-detection-yolov8",level:3},{value:"Image Classification: TorchVision",id:"image-classification-torchvision",level:3},{value:"Natural Language Processing: HuggingFace",id:"natural-language-processing-huggingface",level:3},{value:"DeepSparse Server",id:"deepsparse-server",level:3},{value:"ONNX Runtime",id:"onnx-runtime",level:3},{value:"Development",id:"development",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Tooltip:i,VersionInjector:a}=n;return i||u("Tooltip",!0),a||u("VersionInjector",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installing-deepsparse",children:"Installing DeepSparse"}),"\n",(0,s.jsx)(n.p,{children:"Welcome to the DeepSparse installation guide.\nHere, you'll find instructions for various installation methods including PyPI, Docker, and advanced options via GitHub."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The installation commands correspond to the version of DeepSparse you're viewing in the documentation."})}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.h3,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["CPU","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["x86 CPUs with a minimum of ",(0,s.jsx)(i,{children:"AVX2"})," SIMD instructions such as Intel Haswell generation and later or AMD Zen 2 generation and later."]}),"\n",(0,s.jsx)(n.li,{children:"ARM CPUs with a minimum of v8.2."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["RAM","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"1 GB minimum; however the minimum memory needed will depend on the configuration and model being run."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"software-requirements",children:"Software Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["OS","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Linux is supported and is tested across Ubuntu, CentOS, and RedHat distributions."}),"\n",(0,s.jsx)(n.li,{children:"MacOS is currently in beta."}),"\n",(0,s.jsx)(n.li,{children:"Windows is not supported at this time. However, Windows users can install DeepSparse via Docker or a virtual machine."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Python 3.8-3.11"}),"\n",(0,s.jsx)(n.li,{children:"ONNX versions 1.5.0-1.15.0, ONNX opset version 11 or higher."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"community-installation",children:"Community Installation"}),"\n",(0,s.jsx)(n.h3,{id:"pypi",children:"PyPI"}),"\n",(0,s.jsx)(n.p,{children:"To install the current version of DeepSparse via PyPI, utilize the following command:"}),"\n",(0,s.jsx)(a,{targetProduct:"deepsparse",targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install deepsparse==VERSION\n"})})}),"\n",(0,s.jsx)(n.p,{children:"To install the current version of DeepSparse via Docker, utilize the following commands:"}),"\n",(0,s.jsx)(a,{targetProduct:"deepsparse",prepend:"v",currentTag:"latest",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker pull ghcr.io/neuralmagic/deepsparse:VERSION\ndocker run -it ghcr.io/neuralmagic/deepsparse:VERSION\n"})})}),"\n",(0,s.jsx)(n.h3,{id:"github",children:"GitHub"}),"\n",(0,s.jsx)(n.p,{children:"Advanced users can install from source code by utilizing the following command::"}),"\n",(0,s.jsx)(a,{targetProduct:"deepsparse",prepend:"v",currentTag:"main",ignoreNightly:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install git+https://github.com/neuralmagic/deepsparse.git@VERSION\n"})})}),"\n",(0,s.jsx)(n.p,{children:"Additionally, the following commands install via GitHub, but from a locally cloned repository:"}),"\n",(0,s.jsx)(a,{targetProduct:"deepsparse",prepend:"tags/v",currentTag:"main",ignoreNightly:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/neuralmagic/deepsparse.git\ncd deepsparse\ngit checkout VERSION\npip install -e .\n"})})}),"\n",(0,s.jsx)(n.h2,{id:"enterprise-installation",children:"Enterprise Installation"}),"\n",(0,s.jsx)(n.h3,{id:"pypi-1",children:"PyPI"}),"\n",(0,s.jsx)(n.p,{children:"DeepSparse Enterprise is available for companies to utilize in production environments and requires a license key to be installed alongside the package."}),"\n",(0,s.jsx)(n.p,{children:"To install the current version of DeepSparse Enterprise via PyPI, utilize the following command:"}),"\n",(0,s.jsx)(a,{targetProduct:"deepsparse-ent",ignoreNightly:!0,targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install deepsparse-ent==VERSION\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["To obtain a license key or for more information on how to install a license key, see the ",(0,s.jsx)(n.a,{href:"/guides/enterprise",children:"Enterprise Guide"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"specialized-installations",children:"Specialized Installations"}),"\n",(0,s.jsx)(n.h3,{id:"generative-ai-huggingface",children:"Generative AI: HuggingFace"}),"\n",(0,s.jsx)(n.p,{children:"For generative AI, particularly transformer architectures, this extra provides built in support for models like Llama, Mistral, MPT, GPT, and others.\nIt enables compatibility of HuggingFace's transformers pipelines and models to DeepSparse allowing performant and memory-efficient inference."}),"\n",(0,s.jsx)(a,{targetProduct:"deepsparse[llm]",targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install deepsparse[llm]==VERSION\n"})})}),"\n",(0,s.jsx)(n.h3,{id:"object-detection-yolov8",children:"Object Detection: YOLOv8"}),"\n",(0,s.jsx)(n.p,{children:"For object detection, this extra provides built in support for YOLOv8 models.\nIt enables compatibility of YOLOv8 models and pipelines to DeepSparse allowing performant and memory-efficient inference."}),"\n",(0,s.jsx)(a,{targetProduct:"deepsparse[yolov8]",targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install deepsparse[yolov8]==VERSION\n"})})}),"\n",(0,s.jsx)(n.h3,{id:"image-classification-torchvision",children:"Image Classification: TorchVision"}),"\n",(0,s.jsx)(n.p,{children:"For image classification, this extra provides built in support for TorchVision models.\nIt enables compatibility of TorchVision models and pipelines to DeepSparse allowing performant and memory-efficient inference."}),"\n",(0,s.jsx)(a,{targetProduct:"deepsparse[image_classification]",targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install deepsparse[image_classification]==VERSION\n"})})}),"\n",(0,s.jsx)(n.h3,{id:"natural-language-processing-huggingface",children:"Natural Language Processing: HuggingFace"}),"\n",(0,s.jsx)(n.p,{children:"For natural language processing, this extra provides built in support for HuggingFace's transformers models.\nIt enables compatibility of HuggingFace's transformers pipelines and models to DeepSparse allowing performant and memory-efficient inference."}),"\n",(0,s.jsx)(a,{targetProduct:"deepsparse[transformers]",targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install deepsparse[transformers]==VERSION\n"})})}),"\n",(0,s.jsx)(n.h3,{id:"deepsparse-server",children:"DeepSparse Server"}),"\n",(0,s.jsx)(n.p,{children:"For HTTP serving of DeepLearning models, this extra provides built in support for DeepSparse Server.\nIt enables any DeepSparse pipelines to be served via HTTP and can be combined with other extras for additional model support."}),"\n",(0,s.jsx)(a,{targetProduct:"deepsparse[server]",targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install deepsparse[server]==VERSION\n"})})}),"\n",(0,s.jsx)(n.h3,{id:"onnx-runtime",children:"ONNX Runtime"}),"\n",(0,s.jsx)(n.p,{children:"For benchmarking and comparison purposes, this extra provides built in support for ONNX Runtime.\nIt enables any DeepSparse pipelines to be run via ONNX Runtime and can be combined with other extras for additional model support."}),"\n",(0,s.jsx)(a,{targetProduct:"deepsparse[onnxruntime]",targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install deepsparse[onnxruntime]==VERSION\n"})})}),"\n",(0,s.jsx)(n.h3,{id:"development",children:"Development"}),"\n",(0,s.jsx)(n.p,{children:"For development purposes, this extra provides built in support for development tools."}),"\n",(0,s.jsx)(a,{targetProduct:"deepsparse[dev]",targetVersion:"==VERSION",prepend:"==",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install deepsparse[dev]==VERSION\n"})})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>t});var s=i(7294);const r={},a=s.createContext(r);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkdocs_neuralmagic_com=self.webpackChunkdocs_neuralmagic_com||[]).push([[7301],{3901:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var r=a(5893),s=a(1151);const t={tags:["deployment","llm","text generation","deepsparse","sparsezoo"],keywords:["LLM deployment","DeepSparse Server","model inference","Neural Magic deployment"],description:"Deploy large language models (LLMs) for text generation using Neural Magic's DeepSparse. This doc includes code examples, performance benchmarking, and server setup.",sidebar_label:"Deploy",sidebar_position:2},l="Deploying LLMs",i={id:"get-started/deploy",title:"Deploying LLMs",description:"Deploy large language models (LLMs) for text generation using Neural Magic's DeepSparse. This doc includes code examples, performance benchmarking, and server setup.",source:"@site/docs/get-started/deploy.mdx",sourceDirName:"get-started",slug:"/get-started/deploy",permalink:"/docs-v2/get-started/deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/neuralmagic/docs-v2/tree/main/docs/get-started/deploy.mdx",tags:[{label:"deployment",permalink:"/docs-v2/tags/deployment"},{label:"llm",permalink:"/docs-v2/tags/llm"},{label:"text generation",permalink:"/docs-v2/tags/text-generation"},{label:"deepsparse",permalink:"/docs-v2/tags/deepsparse"},{label:"sparsezoo",permalink:"/docs-v2/tags/sparsezoo"}],version:"current",sidebarPosition:2,frontMatter:{tags:["deployment","llm","text generation","deepsparse","sparsezoo"],keywords:["LLM deployment","DeepSparse Server","model inference","Neural Magic deployment"],description:"Deploy large language models (LLMs) for text generation using Neural Magic's DeepSparse. This doc includes code examples, performance benchmarking, and server setup.",sidebar_label:"Deploy",sidebar_position:2},sidebar:"autogenerated_docs",previous:{title:"SparseZoo",permalink:"/docs-v2/get-started/install/sparsezoo"},next:{title:"Sparsify",permalink:"/docs-v2/get-started/optimize"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploying a Sparsified Llama Model",id:"deploying-a-sparsified-llama-model",level:2},{value:"Pipeline",id:"pipeline",level:3},{value:"Server",id:"server",level:3},{value:"Performance",id:"performance",level:3},{value:"Benchmarking",id:"benchmarking",level:4},{value:"Accuracy",id:"accuracy",level:4}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Details:a,TabItem:t,Tabs:l}=n;return a||h("Details",!0),t||h("TabItem",!0),l||h("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deploying-llms",children:"Deploying LLMs"}),"\n",(0,r.jsx)(n.p,{children:"This guide focuses on the deployment of LLMs for text-generation tasks. You'll learn how to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("b",{children:"Create Pipelines:"})," Integrate sparsified LLMs from SparseZoo into your deployments at the Python API level."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("b",{children:"Set Up Servers:"})," Run LLMs as performant HTTP services using DeepSparse Server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("b",{children:"Benchmark Performance:"})," Measure and compare the speed and accuracy of sparsified vs. baseline models."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure you've installed the required packages and dependencies for Generative AI as outlined in the ",(0,r.jsx)(n.a,{href:"./install#generative-ai",children:"Install Guide"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Familiarity with ML model deployment through Python and HTTP APIs."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"deploying-a-sparsified-llama-model",children:"Deploying a Sparsified Llama Model"}),"\n",(0,r.jsx)(n.p,{children:"We'll use a sparsified Llama 2 7B model (chat-focused) from the SparseZoo to demonstrate the deployment process.\nThis model is pruned to 50% sparsity and quantized to 8 bits for weights and activations, resulting in a smaller, faster, and more efficient model.\nThe model is referenced by the following SparseZoo stub:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"zoo:llama2-7b-ultrachat200k_llama2_pretrain-pruned50_quantized\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For other models that work with these examples, browse through the ",(0,r.jsx)(n.a,{href:"https://sparsezoo.neuralmagic.com/?modelSet=generative_ai",children:"Generative AI models in the SparseZoo"})," to find one that fits your needs."]}),"\n",(0,r.jsx)(n.h3,{id:"pipeline",children:"Pipeline"}),"\n",(0,r.jsx)(n.p,{children:"In this section, you'll learn how to directly integrate a sparsified LLM from SparseZoo into your Python code, enabling text generation capabilities within your application.\nDeepSparse pipelines are designed to mirror the Hugging Face Transformers API closely, ensuring a familiar experience if you've worked with Transformers before.\nThe following code demonstrates how to create a pipeline for text generation using the sparsified Llama 2 7B model:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from deepsparse import TextGeneration\n\npipeline = TextGeneration(\n    "zoo:llama2-7b-ultrachat200k_llama2_pretrain-pruned50_quantized"\n)\nresult = pipeline("Large language models are")\nprint(result)\n'})}),"\n",(0,r.jsx)(n.p,{children:"The resulting output printed to the console will be the generated text from the model based on the input prompt."}),"\n",(0,r.jsx)(n.h3,{id:"server",children:"Server"}),"\n",(0,r.jsx)(n.p,{children:"To make your LLM accessible as a web service, you'll wrap it in a DeepSparse Server.\nThe Server lets you interact with the model using HTTP requests, making integrating with web applications, microservices, or other systems easy.\nDeepSparse Server has an OpenAI-compatible integration for request and response formats for seamless integration.\nThe following command starts a DeepSparse Server with the sparsified Llama 2 7B model:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'deepsparse.server \\\n  --integration openai \\\n  "zoo:llama2-7b-ultrachat200k_llama2_pretrain-pruned50_quantized"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["With the server running, you can send an HTTP request that conforms to the OpenAI spec to generate text.\nBelow are examples of using ",(0,r.jsx)(n.code,{children:"curl"})," and ",(0,r.jsx)(n.code,{children:"python"})," to send a request to the server:"]}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsx)(t,{value:"python",label:"Python",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import openai\n\nopenai.api_key = "EMPTY"\nopenai.api_base = "http://localhost:5543/v1"\n\ncompletion = openai.ChatCompletion.create(\nmessages="Neural Magic is",\nstream=True,\nmax_tokens=30,\nmodel="zoo:llama2-7b-ultrachat200k_llama2_pretrain-pruned50_quantized",\n)\nfor token in completion:\nprint(token)\n'})})}),(0,r.jsx)(t,{value:"bash",label:"Bash",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl http://localhost:5543/v1/chat/completions \\\n-H "Content-Type: application/json" \\\n-d \'{\n"model": "zoo:llama2-7b-ultrachat200k_llama2_pretrain-pruned50_quantized",\n"messages": "Neural Magic is",\n"stream": true\n}\'\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"The resulting output will be the generated text from the model based on the input prompt."}),"\n",(0,r.jsx)(n.h3,{id:"performance",children:"Performance"}),"\n",(0,r.jsx)(n.p,{children:"It's crucial to assess the performance of your deployed LLM.\nNeural Magic provides tools for benchmarking speed (e.g., tokens per second) and evaluating accuracy using established metrics like perplexity."}),"\n",(0,r.jsx)(n.h4,{id:"benchmarking",children:"Benchmarking"}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"Baseline"}),(0,r.jsx)(n.p,{children:"To compare the performance of the sparsified model, we utilize a baseline, unoptimized version of the model from the SparseZoo.\nThe stub for the corresponding model is:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"zoo:llama2-7b-llama2_pretrain-base\n"})}),(0,r.jsx)(n.p,{children:"The following command utilizes the baseline stub and DeepSparse to establish the unoptimized model's performance:"}),(0,r.jsxs)(l,{children:[(0,r.jsx)(t,{value:"python",label:"Python",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from deepsparse.benchmark import benchmark_model\n\nresult = benchmark_model("zoo:llama2-7b-llama2_pretrain-base")\nprint(result)\n'})})}),(0,r.jsx)(t,{value:"bash",label:"Bash",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'deepsparse.benchmark "zoo:llama2-7b-llama2_pretrain-base"\n'})})})]}),(0,r.jsxs)(n.p,{children:["On an 8-core AMD CPU, the baseline model achieves a throughput around ",(0,r.jsx)(n.code,{children:"2.7"})," tokens per second."]})]}),"\n",(0,r.jsx)(n.p,{children:"The following command utilizes the sparsified model and DeepSparse to establish the optimized model's performance:"}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsx)(t,{value:"python",label:"Python",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from deepsparse import benchmark\n\nresult = benchmark("zoo:llama2-7b-ultrachat200k_llama2_pretrain-pruned50_quantized")\nprint(result)\n'})})}),(0,r.jsx)(t,{value:"bash",label:"Bash",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'deepsparse.benchmark "zoo:llama2-7b-ultrachat200k_llama2_pretrain-pruned50_quantized"\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["On an 8-core AMD CPU, the sparsified model achieves a throughput of around ",(0,r.jsx)(n.code,{children:"13.1"})," tokens per second, which is ",(0,r.jsx)(n.code,{children:"4.9"})," times faster than the baseline model!"]}),"\n",(0,r.jsx)(n.h4,{id:"accuracy",children:"Accuracy"}),"\n",(0,r.jsx)(n.p,{children:"The following command utilizes the sparsified model and DeepSparse to establish the optimized model's perplexity on the OpenAI HumanEval dataset:"}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsx)(t,{value:"python",label:"Python",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from deepsparse import evaluate\n\nresult = evaluate(\n"zoo:llama2-7b-ultrachat200k_llama2_pretrain-pruned50_quantized",\ndatasets="openai_humaneval",\nintegration="perplexity"\n)\nprint(result)\n'})})}),(0,r.jsx)(t,{value:"bash",label:"Bash",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'deepsparse.evaluate \\\n"zoo:llama2-7b-ultrachat200k_llama2_pretrain-pruned50_quantized" \\\n--datasets "openai_humaneval" \\\n--integration "perplexity"\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The above command will result in a perplexity evaluation of around ",(0,r.jsx)(n.code,{children:"3.6"})," on the OpenAI HumanEval dataset."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"Want to dive into more about deployments with Neural Magic? Here are a few paths to consider:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("b",{children:"Specialize in LLMs:"})," Dive deeper into text generation techniques within our ",(0,r.jsx)(n.a,{href:"../llms",children:"LLMs section"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("b",{children:"Expand to Other Domains:"})," Explore how to deploy optimized models for ",(0,r.jsx)(n.a,{href:"../computer-vision",children:"Computer Vision"})," or ",(0,r.jsx)(n.a,{href:"../nlp",children:"Natural Language Processing"})," tasks."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("b",{children:"Tailor to Your Needs:"})," Learn about flexible deployment options in our ",(0,r.jsx)(n.a,{href:"../custom-integrations",children:"Custom Integrations section"}),"."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>l});var r=a(7294);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkdocs_neuralmagic_com=self.webpackChunkdocs_neuralmagic_com||[]).push([[7129],{8360:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(5893),r=n(1151);const i={tags:["optimization","llm","sparsification","sparsezoo","performance","neural magic"],keywords:["LLM optimization","model sparsification","sparse inference","efficient LLMs"],description:"Optimize large language models (LLMs) for efficient inference using one-shot pruning and quantization. Learn how to improve model performance and reduce costs without sacrificing accuracy.",sidebar_label:"Optimize",sidebar_position:3},t="Optimizing LLMs",o={id:"get-started/optimize",title:"Optimizing LLMs",description:"Optimize large language models (LLMs) for efficient inference using one-shot pruning and quantization. Learn how to improve model performance and reduce costs without sacrificing accuracy.",source:"@site/docs/get-started/optimize.mdx",sourceDirName:"get-started",slug:"/get-started/optimize",permalink:"/docs-v2/get-started/optimize",draft:!1,unlisted:!1,editUrl:"https://github.com/neuralmagic/docs-v2/tree/main/docs/get-started/optimize.mdx",tags:[{label:"optimization",permalink:"/docs-v2/tags/optimization"},{label:"llm",permalink:"/docs-v2/tags/llm"},{label:"sparsification",permalink:"/docs-v2/tags/sparsification"},{label:"sparsezoo",permalink:"/docs-v2/tags/sparsezoo"},{label:"performance",permalink:"/docs-v2/tags/performance"},{label:"neural magic",permalink:"/docs-v2/tags/neural-magic"}],version:"current",sidebarPosition:3,frontMatter:{tags:["optimization","llm","sparsification","sparsezoo","performance","neural magic"],keywords:["LLM optimization","model sparsification","sparse inference","efficient LLMs"],description:"Optimize large language models (LLMs) for efficient inference using one-shot pruning and quantization. Learn how to improve model performance and reduce costs without sacrificing accuracy.",sidebar_label:"Optimize",sidebar_position:3},sidebar:"autogenerated_docs",previous:{title:"Deploy",permalink:"/docs-v2/get-started/deploy"},next:{title:"Sparsify",permalink:"/docs-v2/get-started/transfer"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sparsifying a Llama Model",id:"sparsifying-a-llama-model",level:2},{value:"Data Preparation",id:"data-preparation",level:3},{value:"One Shot",id:"one-shot",level:3},{value:"Inference",id:"inference",level:3}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Details:n,TabItem:i,Tabs:t}=a;return n||p("Details",!0),i||p("TabItem",!0),t||p("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"optimizing-llms",children:"Optimizing LLMs"}),"\n",(0,s.jsx)(a.p,{children:"This guide delves into optimizing large language models (LLMs) for efficient text generation using neural network compression techniques like sparsification and quantization. You'll learn how to:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)("b",{children:"Sparsify Models:"})," Apply pruning techniques to eliminate redundant parameters from an LLM, reducing its size and computational requirements."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)("b",{children:"Quantize Models:"})," Lower the numerical precision of model weights and activations for faster inference with minimal impact on accuracy."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)("b",{children:"Evaluate Performance:"})," Measure the impact of sparsification and quantization on model performance and accuracy."]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)("b",{children:"Training Environment:"})," A system that meets the minimum hardware and software requirements as outlined in the ",(0,s.jsx)(a.a,{href:"./install/#prerequisites",children:"Install Guide"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)("b",{children:"SparseML LLM Installation:"})," An environment with DeepSparse for LLMs installed as outlined in the ",(0,s.jsx)(a.a,{href:"./install#llms---causal-language-modeling",children:"Install Guide"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)("b",{children:"Background:"})," Familiarity with Generative AI and working with large language models is recommended."]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"sparsifying-a-llama-model",children:"Sparsifying a Llama Model"}),"\n",(0,s.jsx)(a.p,{children:"We'll use a pre-trained Llama chat model from Hugging Face (HF) Transformers as our example.\nThe model is referenced by its Hugging Face model ID, which is the following:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-text",children:"meta-llama/Llama-2-7b-chat\n"})}),"\n",(0,s.jsxs)(a.p,{children:["For additional models, explore the ",(0,s.jsx)(a.a,{href:"https://sparsezoo.neuralmagic.com/?modelSet=generative_ai",children:"Generative AI models in the SparseZoo"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"data-preparation",children:"Data Preparation"}),"\n",(0,s.jsx)(a.p,{children:"SparseML requires a dataset to be used for calibration during the sparsification process.\nFor this example, we'll use the Open Platypus dataset, which is available in the Hugging Face dataset hub and can be loaded as follows:"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)(i,{value:"python",label:"Python",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'from datasets import load_dataset\n\ndataset = load_dataset("garage-bAInd/Open-Platypus")\n'})})}),(0,s.jsx)(i,{value:"bash",label:"Bash",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'--dataset "garage-bAInd/Open-Platypus"\n'})})})]}),"\n",(0,s.jsxs)(a.p,{children:["For comprehensive data preparation guidelines, including formats like CSV and JSONL, refer to our ",(0,s.jsx)(a.a,{href:"../llms/data",children:"detailed datasets guide"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"one-shot",children:"One Shot"}),"\n",(0,s.jsxs)(a.p,{children:["Applying pruning and quantization to an LLM without fine-tuning can be done utilizing recipes, the SparseGPT algorithm, and the ",(0,s.jsx)(a.code,{children:"compress"})," command in SparseML.\nThis combination enables a quick and easy way to sparsify a model, resulting in medium compression levels with minimal accuracy loss, enabling efficient inference."]}),"\n",(0,s.jsx)(a.p,{children:"The code below demonstrates applying one-shot sparsification to the Llama chat model utilizing a recipe.\nThe recipe specifies using the SparseGPTModifier to apply 50% sparsity and quantization (int8 weights and activations) to the targeted layers within the model."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)(i,{value:"python",label:"Python",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'from sparseml.transformers import (\nSparseAutoModelForCausalLM, SparseAutoTokenizer, load_dataset, compress\n)\n\nmodel = SparseAutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b-chat")\ntokenizer = SparseAutoTokenizer.from_pretrained("meta-llama/Llama-2-7b-chat")\ndataset = load_dataset("garage-bAInd/Open-Platypus")\n\nrecipe = """\ncompression_stage:\nrun_type: oneshot\nmodifiers:\n- !SparseGPTModifier\nsparsity: 0.5\nquantize: True\ntargets: [model.layers.0, model.layers.1, model.layers.2, model.layers.3, model.layers.4, model.layers.5, model.layers.6, model.layers.7, model.layers.8, model.layers.9, model.layers.10, model.layers.11, model.layers.12, model.layers.13, model.layers.14, model.layers.15, model.layers.16, model.layers.17, model.layers.18, model.layers.19, model.layers.20, model.layers.21, model.layers.22, model.layers.23, model.layers.24, model.layers.25, model.layers.26, model.layers.27, model.layers.28, model.layers.29, model.layers.30, model.layers.31, lm_head]\n"""\n\ncompress(\nmodel=model,\ntokenizer=tokenizer,\ndataset=dataset,\nmodifiers=modifier,\noutput_dir="./one-shot-example",\n)\n'})})}),(0,s.jsx)(i,{value:"bash",label:"Bash",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'echo "\ncompression_stage:\nrun_type: oneshot\nmodifiers:\n- !SparseGPTModifier\nsparsity: 0.5\nquantize: True\ntargets: [model.layers.0, model.layers.1, model.layers.2, model.layers.3, model.layers.4, model.layers.5, model.layers.6, model.layers.7, model.layers.8, model.layers.9, model.layers.10, model.layers.11, model.layers.12, model.layers.13, model.layers.14, model.layers.15, model.layers.16, model.layers.17, model.layers.18, model.layers.19, model.layers.20, model.layers.21, model.layers.22, model.layers.23, model.layers.24, model.layers.25, model.layers.26, model.layers.27, model.layers.28, model.layers.29, model.layers.30, model.layers.31, lm_head]\n" > one-shot.yaml\n\nsparseml.transformers.compress \\\n--model "meta-llama/Llama-2-7b-chat" \\\n--tokenizer "meta-llama/Llama-2-7b-chat" \\\n--dataset "garage-bAInd/Open-Platypus" \\\n--recipe "./one-shot.yaml" \\\n--output-dir "./one-shot-example"\n'})})})]}),"\n",(0,s.jsx)(a.p,{children:"After running the above code, the model is pruned and quantized, resulting in a smaller model ready for efficient inference."}),"\n",(0,s.jsx)(a.h3,{id:"inference",children:"Inference"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Evaluating Accuracy"}),(0,s.jsx)(a.p,{children:"Evaluating the model's accuracy is important to ensure it meets the desired performance requirements.\nTo do so, we can use the following code to evaluate the model's perplexity on a sample dataset:"}),(0,s.jsxs)(t,{children:[(0,s.jsx)(i,{value:"python",label:"Python",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'from sparseml import evaluate\n\nevaluate(\n"./one-shot-example",\ndatasets="openai_humaneval",\nintegration="perplexity"\n)\n'})})}),(0,s.jsx)(i,{value:"bash",label:"Bash",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'sparseml.evaluate \\\n"./one-shot-example" \\\n--datasets "openai_humaneval" \\\n--integration "perplexity"\n'})})})]})]}),"\n",(0,s.jsx)(a.p,{children:"After sparsifying the model, it is ready for evaluation and deployment.\nTo test the model's generation capabilities, we can use the following code to generate text utilizing PyTorch:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'from sparseml.transformers import SparseAutoModelForCausalLM, SparseAutoTokenizer\n\nmodel_path = "./one-shot-example"\nmodel = SparseAutoModelForCausalLM.from_pretrained(model_path)\ntokenizer = SparseAutoTokenizer.from_pretrained(model_path)\ninputs = tokenizer(["Large language models are"], return_tensors="pt")\ngenerated_ids = model.generate(**inputs)\noutputs = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)\nprint(outputs)\n'})}),"\n",(0,s.jsx)(a.p,{children:"The above code, however, does not leverage the sparsity within the model for efficient inference.\nTo do so, we need to export the model to ONNX to be ready for efficient inference on CPUs with DeepSparse.\nSparseML provides a simple export command to do so:"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)(i,{value:"python",label:"Python",default:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'from sparseml import export\n\nexport(\n"zoo:mistral-7b-open_platypus_orca_mistral_pretrain-pruned50_quantized",\ntask="text-generation",\nsequence_length=1024,\ntarget_path="./exported"\n)\n'})})}),(0,s.jsx)(i,{value:"bash",label:"Bash",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'sparseml.export \\\n"zoo:mistral-7b-open_platypus_orca_mistral_pretrain-pruned50_quantized" \\\n--task "text-generation" \\\n--sequence_length 1024 \\\n--target_path "./exported"\n'})})})]}),"\n",(0,s.jsxs)(a.p,{children:["The exported model located at ",(0,s.jsx)(a.code,{children:"./exported"})," can now be used for efficient inference with DeepSparse.\nTo do so, sub in the exported model within the previous ",(0,s.jsx)(a.a,{href:"./deploy",children:"Getting Started - Deploy"})," guide for your desired deployment method."]}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.p,{children:"Want to dive into more about one-shot sparsification with Neural Magic? Here are a few paths to consider:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)("b",{children:"Specialize in LLMs:"})," Dive deeper into text generation techniques within our ",(0,s.jsx)(a.a,{href:"../llms",children:"LLMs section"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)("b",{children:"Expand to Other Domains:"})," Explore how to optimize models for ",(0,s.jsx)(a.a,{href:"../computer-vision",children:"Computer Vision"})," or ",(0,s.jsx)(a.a,{href:"../nlp",children:"Natural Language Processing"})," tasks."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)("b",{children:"Tailor to Your Needs:"})," Learn about flexible sparsification options in our ",(0,s.jsx)(a.a,{href:"../custom-integrations",children:"Custom Integrations section"}),"."]}),"\n"]})]})}function m(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function p(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>t});var s=n(7294);const r={},i=s.createContext(r);function t(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);
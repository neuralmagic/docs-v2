"use strict";(self.webpackChunkdocs_neuralmagic_com=self.webpackChunkdocs_neuralmagic_com||[]).push([[5129],{4057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(5893),o=t(1151);const s={title:"Hugging Face Hub Models"},r="What are models on Hugging Face Hub?",i={id:"models/huggingface-models",title:"Hugging Face Hub Models",description:"Hugging Face Hub models are DeepSparse-ready models that haven't gone through rigorous testing to ensure they meet certain criteria such as the ones in the SparseZoo. The process enables us to produce models faster without having to wait for the entire quality-assurance process. However, you should always perform evaluation for ensure the model's results are not completely off.",source:"@site/docs/models/huggingface-models.mdx",sourceDirName:"models",slug:"/models/huggingface-models",permalink:"/docs-v2/models/huggingface-models",draft:!1,unlisted:!1,editUrl:"https://github.com/neuralmagic/docs-v2/tree/main/docs/models/huggingface-models.mdx",tags:[],version:"current",frontMatter:{title:"Hugging Face Hub Models"},sidebar:"autogenerated_docs",previous:{title:"Models",permalink:"/docs-v2/models/"},next:{title:"SparseZoo Models",permalink:"/docs-v2/models/sparsezoo-models"}},l={},c=[{value:"How to create your own HF model",id:"how-to-create-your-own-hf-model",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"what-are-models-on-hugging-face-hub",children:"What are models on Hugging Face Hub?"}),"\n",(0,a.jsx)(n.p,{children:"Hugging Face Hub models are DeepSparse-ready models that haven't gone through rigorous testing to ensure they meet certain criteria such as the ones in the SparseZoo. The process enables us to produce models faster without having to wait for the entire quality-assurance process. However, you should always perform evaluation for ensure the model's results are not completely off."}),"\n",(0,a.jsxs)(n.p,{children:["We have a ",(0,a.jsx)(n.a,{href:"https://huggingface.co/collections/neuralmagic/sparse-llms-659d61e81774dd48343642bf",children:"Sparse LLMs Collection"})," where we share the most interesting LLMs where we've pruned at least 50% of the weights and optimized them for inference."]}),"\n",(0,a.jsxs)(n.p,{children:["You can find official models that we have optimized for DeepSparse at the Neural Magic Organization page at ",(0,a.jsx)(n.a,{href:"https://huggingface.co/neuralmagic",children:"https://huggingface.co/neuralmagic"})," and more experimental models made by the community at ",(0,a.jsx)(n.a,{href:"https://huggingface.co/nm-testing",children:"https://huggingface.co/nm-testing"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-create-your-own-hf-model",children:"How to create your own HF model"}),"\n",(0,a.jsxs)(n.p,{children:["The first process in creating your own one-shot model is to identify a Hugging Face model you'd like to optimize. ",(0,a.jsx)(n.a,{href:"https://huggingface.co/TinyLlama/TinyLlama-1.1B-Chat-v1.0",children:"TinyLlama Chat v1.0"})," is a great choice for demos becasue if its size."]}),"\n",(0,a.jsx)(n.p,{children:"Ensure you have the lastest version of SparseML."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'git clone https://github.com/neuralmagic/sparseml\npip install -e "sparseml[transformers]"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Download a recipe and one shot the model.The recipe contains the hyperparameters for pruning and quantization."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://huggingface.co/nm-testing/TinyLlama-1.1B-Chat-v0.4-pruned50-quant/raw/main/recipe.yaml # download recipe\nsparseml.transformers.text_generation.oneshot --model_name TinyLlama/TinyLlama-1.1B-Chat-v1.0 --dataset_name open_platypus --recipe recipe.yaml --output_dir ./obcq_deployment --precision float16\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Next evaluate the model using ",(0,a.jsx)(n.code,{children:"lm-evaluation-harness"}),". Start by installing it:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/neuralmagic/lm-evaluation-harness.git\ncd lm-evaluation-harness\npip install -e \n"})}),"\n",(0,a.jsx)(n.p,{children:"Evaluate on hellaswag for example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'python main.py \\\n --model hf-causal-experimental \\\n --model_args pretrained=obcq_deployment,trust_remote_code=True \\\n --tasks hellaswag \\\n --batch_size 64 \\\n --no_cache \\\n --write_out \\\n --output_path "obcq_deployment/hellaswag.json" \\\n --device "cuda:0" \\\n --num_fewshot 0\n'})}),"\n",(0,a.jsx)(n.p,{children:"Once you are certain that the models performs well, you can export it for use in DeepSparse."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sparseml.export --task text-generation obcq_deployment/\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you have any queries about the entire process, ",(0,a.jsx)(n.a,{href:"https://join.slack.com/t/discuss-neuralmagic/shared_invite/zt-q1a1cnvo-YBoICSIw3L1dmQpjBeDurQ",children:"send us a message on Slack"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var a=t(7294);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
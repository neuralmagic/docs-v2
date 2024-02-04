"use strict";(self.webpackChunkdocs_neuralmagic_com=self.webpackChunkdocs_neuralmagic_com||[]).push([[6595],{9717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=t(5893),s=t(1151);const a={sidebar_position:1},i="Deployment",r={id:"computer-vision/object-detection/get-started/deploy",title:"Deployment",description:"CV - Object Detection",source:"@site/docs/computer-vision/object-detection/get-started/deploy.mdx",sourceDirName:"computer-vision/object-detection/get-started",slug:"/computer-vision/object-detection/get-started/deploy",permalink:"/docs-v2/computer-vision/object-detection/get-started/deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/neuralmagic/docs-v2/tree/main/docs/computer-vision/object-detection/get-started/deploy.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"autogenerated_docs",previous:{title:"Getting Started",permalink:"/docs-v2/computer-vision/object-detection/get-started/"},next:{title:"Finetune",permalink:"/docs-v2/computer-vision/object-detection/get-started/finetune"}},l={},c=[{value:"CV - Object Detection",id:"cv---object-detection",level:2},{value:"Pipeline",id:"pipeline",level:3},{value:"Server",id:"server",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:t,TabItem:a,Tabs:i}=n;return t||h("Details",!0),a||h("TabItem",!0),i||h("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"deployment",children:"Deployment"}),"\n",(0,o.jsx)(n.h2,{id:"cv---object-detection",children:"CV - Object Detection"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Ensure you've installed the necessary packages and dependencies for CV - Object Detection as outlined in the ",(0,o.jsx)(n.a,{href:"./install#object-detection",children:"Install Guide"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"This section covers deploying object detection models with DeepSparse including benchmarking, pipeline creation, and server setup utilizing a pre-sparsified model from the SparseZoo."}),"\n",(0,o.jsx)(n.p,{children:"The examples below use a sparse, quantized YOLOv8 L model to demonstrate the deployment process.\nThe model is referenced by the following SparseZoo stub for use in the Neural Magic suite:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"zoo:yolov8-l-coco-pruned85_quantized\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For other models that work with these examples, browse through the ",(0,o.jsx)(n.a,{href:"https://sparsezoo.neuralmagic.com/?architectures=yolov8&datasets=coco&tasks=detection&modelSet=computer_vision",children:"CV - Object Detection YOLOv8 models in the SparseZoo"})," to find one that fits your needs."]}),"\n",(0,o.jsxs)(n.p,{children:["Additionally, the Pipeline and Server examples expect an image to be located at ",(0,o.jsx)(n.code,{children:"image.jpg"})," in the current working directory.\nTo download an example image, run the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"wget -O image.jpg https://raw.githubusercontent.com/neuralmagic/deepsparse/main/src/deepsparse/yolo/sample_images/basilica.jpg\n"})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Benchmarking"}),(0,o.jsx)(n.p,{children:"Benchmarking is an optional step that demonstrates how to validate the performance for both dense and sparsified models, while showcasing the benefits of sparsity in the process."}),(0,o.jsx)(n.p,{children:"First benchmark an unoptimized version of the model to establish the baseline.\nThe SparseZoo stub for the dense model is:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"zoo:yolov8-l-coco-base\n"})}),(0,o.jsx)(n.p,{children:"Utilizing this stub, benchmark the dense, baseline model with the following command:"}),(0,o.jsxs)(i,{children:[(0,o.jsx)(a,{value:"bash",label:"Bash",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'deepsparse.benchmark "zoo:yolov8-l-coco-base"\n\n# <output>\n# TODO: add output\n# </output>\n'})})}),(0,o.jsx)(a,{value:"python",label:"Python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from deepsparse import benchmark\n\nresult = benchmark("zoo:yolov8-l-coco-base")\nprint(result)\n\n# <output>\n# TODO: add output\n# </output>\n'})})})]}),(0,o.jsxs)(n.p,{children:["As seen in the output, the baseline model achieves a throughput of ",(0,o.jsx)(n.code,{children:"x"})," images per second on a 4-core Intel CPU."]}),(0,o.jsx)(n.p,{children:"Next, benchmark the sparsified model to compare the performance:"}),(0,o.jsxs)(i,{children:[(0,o.jsx)(a,{value:"bash",label:"Bash",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'deepsparse.benchmark "zoo:yolov8-l-coco-pruned85_quantized"\n\n# <output>\n# TODO: add output\n# </output>\n'})})}),(0,o.jsx)(a,{value:"python",label:"Python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from deepsparse import benchmark\n\nresult = benchmark("zoo:yolov8-l-coco-pruned85_quantized")\nprint(result)\n\n# <output>\n# TODO: add output\n# </output>\n'})})})]}),(0,o.jsxs)(n.p,{children:["The sparsified model achieves a throughput of ",(0,o.jsx)(n.code,{children:"y"})," images per second on the same CPU, which is ",(0,o.jsx)(n.code,{children:"z"})," times faster than the baseline model!"]})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Evaluating"}),(0,o.jsx)(n.p,{children:"This is an optional step that demonstrates how to evaluate a model on a given dataset or set of datasets using DeepSparse to validate and compare the accuracies of dense and sparsified models."}),(0,o.jsx)(n.p,{children:"First, evaluate the baseline model to establish the accuracy baseline.\nThe SparseZoo stub for the dense model is:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"zoo:yolov8-l-coco-base\n"})}),(0,o.jsx)(n.p,{children:"Utilizing this stub, evaluate the dense, baseline model on the COCO128 dataset (default) with the following command:"}),(0,o.jsx)(i,{children:(0,o.jsx)(a,{value:"bash",label:"Bash",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'deepsparse.yolov8.eval --model_path "zoo:yolov8-l-coco-base"\n\n# <output>\n# TODO: add output\n# </output>\n'})})})}),(0,o.jsxs)(n.p,{children:["As seen in the output, the baseline model achieves a mAP of ",(0,o.jsx)(n.code,{children:"x"})," on the validation dataset."]}),(0,o.jsx)(n.p,{children:"Next, evaluate the sparsified model to compare the accuracy:"}),(0,o.jsx)(i,{children:(0,o.jsx)(a,{value:"bash",label:"Bash",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'deepsparse.yolov8.eval --model_path "zoo:yolov8-l-coco-pruned85_quantized"\n\n# <output>\n# TODO: add output\n# </output>\n'})})})}),(0,o.jsxs)(n.p,{children:["The sparsified model achieves a mAP of ",(0,o.jsx)(n.code,{children:"y"})," on the validation dataset, which is within ",(0,o.jsx)(n.code,{children:"z"})," of the baseline model!"]})]}),"\n",(0,o.jsx)(n.h3,{id:"pipeline",children:"Pipeline"}),"\n",(0,o.jsx)(n.p,{children:"DeepSparse pipelines for YOLOv8 models accept an image or images as inputs and return a list of bounding boxes and their associated classes and confidences.\nTo create an object detection pipeline for the example model and process an image, utilize the following code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from deepsparse import Pipeline\n\npipeline = Pipeline.create(task="yolov8", model_path="zoo:yolov8-l-coco-pruned85_quantized")\nresult = pipeline("basilica.jpg")\nprint(result)\n\n# <output>\n# TODO: add output\n# </output>\n'})}),"\n",(0,o.jsx)(n.p,{children:"This code initializes an object detection pipeline and processes an image."}),"\n",(0,o.jsx)(n.h3,{id:"server",children:"Server"}),"\n",(0,o.jsx)(n.p,{children:"The DeepSparse Server wraps a pipeline in a REST API, allowing for easy deployment and inference.\nFor object detection models, the server supports the MLServer inference standards, allowing for familiarity and easy integration with existing codebases."}),"\n",(0,o.jsx)(n.p,{children:"To create a DeepSparse Pipeline server that will run on port 5543 (default) with the MLServer specs, utilize the following code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'deepsparse.server "zoo:yolov8-l-coco-pruned85_quantized"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Now with the server running, you can send an HTTP request that conforms to the MLServer spec to process an image.\nBelow are examples for using ",(0,o.jsx)(n.code,{children:"curl"})," and ",(0,o.jsx)(n.code,{children:"python"})," to send a request to the server:"]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)(a,{value:"bash",label:"Bash",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:5543/predict \\\n-H "Content-Type: application/json" \\\n-d \'{"inputs": ["path/to/image.jpg"]}\'\n\n# <output>\n# TODO: add output\n# </output>\n'})})}),(0,o.jsx)(a,{value:"python",label:"Python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import requests\n\nresponse = requests.post(\n"http://localhost:5543/predict",\njson={"inputs": ["path/to/image.jpg"]}\n)\n\n# <output>\n# TODO: add output\n# </output>\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:"As seen in the output, the server processes the image and returns a list of bounding boxes and their associated classes and confidences."})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(7294);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);
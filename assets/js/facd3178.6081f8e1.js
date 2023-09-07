"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72819],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=l,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return t?r.createElement(h,o(o({ref:n},m),{},{components:t})):r.createElement(h,o({ref:n},m))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(87462),l=(t(67294),t(3905));const a={},o="vLLM",i={unversionedId:"integrations/llms/vllm",id:"integrations/llms/vllm",title:"vLLM",description:"vLLM is a fast and easy-to-use library for LLM inference and serving, offering:",source:"@site/docs/integrations/llms/vllm.md",sourceDirName:"integrations/llms",slug:"/integrations/llms/vllm",permalink:"/langchain/docs/integrations/llms/vllm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Tongyi Qwen",permalink:"/langchain/docs/integrations/llms/tongyi"},next:{title:"Writer",permalink:"/langchain/docs/integrations/llms/writer"}},s={},p=[{value:"Integrate the model in an LLMChain",id:"integrate-the-model-in-an-llmchain",level:2},{value:"Distributed Inference",id:"distributed-inference",level:2},{value:"OpenAI-Compatible Server",id:"openai-compatible-server",level:2},{value:"OpenAI-Compatible Completion",id:"openai-compatible-completion",level:3}],m=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var c;const u={toc:p},d="wrapper";function h(e){let{components:n,...t}=e;return(0,l.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vllm"},"vLLM"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://vllm.readthedocs.io/en/latest/index.html"},"vLLM")," is a fast and easy-to-use library for LLM inference and serving, offering:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"State-of-the-art serving throughput "),(0,l.kt)("li",{parentName:"ul"},"Efficient management of attention key and value memory with PagedAttention"),(0,l.kt)("li",{parentName:"ul"},"Continuous batching of incoming requests"),(0,l.kt)("li",{parentName:"ul"},"Optimized CUDA kernels")),(0,l.kt)("p",null,"This notebooks goes over how to use a LLM with langchain and vLLM."),(0,l.kt)("p",null,"To use, you should have the ",(0,l.kt)("inlineCode",{parentName:"p"},"vllm")," python package installed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"#!pip install vllm -q\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "VLLM", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.vllm.VLLM.html", "title": "vLLM"}]--\x3e\nfrom langchain.llms import VLLM\n\nllm = VLLM(model="mosaicml/mpt-7b",\n           trust_remote_code=True,  # mandatory for hf models\n           max_new_tokens=128,\n           top_k=10,\n           top_p=0.95,\n           temperature=0.8,\n)\n\nprint(llm("What is the capital of France ?"))\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    INFO 08-06 11:37:33 llm_engine.py:70] Initializing an LLM engine with config: model='mosaicml/mpt-7b', tokenizer='mosaicml/mpt-7b', tokenizer_mode=auto, trust_remote_code=True, dtype=torch.bfloat16, use_dummy_weights=False, download_dir=None, use_np_weights=False, tensor_parallel_size=1, seed=0)\n    INFO 08-06 11:37:41 llm_engine.py:196] # GPU blocks: 861, # CPU blocks: 512\n\n\n    Processed prompts: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 1/1 [00:00<00:00,  2.00it/s]\n\n    \n    What is the capital of France ? The capital of France is Paris.\n\n\n    \n"))),(0,l.kt)("h2",{id:"integrate-the-model-in-an-llmchain"},"Integrate the model in an LLMChain"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from langchain import PromptTemplate, LLMChain\n\ntemplate = """Question: {question}\n\nAnswer: Let\'s think step by step."""\nprompt = PromptTemplate(template=template, input_variables=["question"])\n\nllm_chain = LLMChain(prompt=prompt, llm=llm)\n\nquestion = "Who was the US president in the year the first Pokemon game was released?"\n\nprint(llm_chain.run(question))\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    Processed prompts: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 1/1 [00:01<00:00,  1.34s/it]\n\n    \n    \n    1. The first Pokemon game was released in 1996.\n    2. The president was Bill Clinton.\n    3. Clinton was president from 1993 to 2001.\n    4. The answer is Clinton.\n    \n\n\n    \n"))),(0,l.kt)("h2",{id:"distributed-inference"},"Distributed Inference"),(0,l.kt)("p",null,"vLLM supports distributed tensor-parallel inference and serving. "),(0,l.kt)("p",null,"To run multi-GPU inference with the LLM class, set the ",(0,l.kt)("inlineCode",{parentName:"p"},"tensor_parallel_size")," argument to the number of GPUs you want to use. For example, to run inference on 4 GPUs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "VLLM", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.vllm.VLLM.html", "title": "vLLM"}]--\x3e\nfrom langchain.llms import VLLM\n\nllm = VLLM(model="mosaicml/mpt-30b",\n           tensor_parallel_size=4,\n           trust_remote_code=True,  # mandatory for hf models\n)\n\nllm("What is the future of AI?")\n')),(0,l.kt)("h2",{id:"openai-compatible-server"},"OpenAI-Compatible Server"),(0,l.kt)("p",null,"vLLM can be deployed as a server that mimics the OpenAI API protocol. This allows vLLM to be used as a drop-in replacement for applications using OpenAI API."),(0,l.kt)("p",null,"This server can be queried in the same format as OpenAI API."),(0,l.kt)("h3",{id:"openai-compatible-completion"},"OpenAI-Compatible Completion"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "VLLMOpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.vllm.VLLMOpenAI.html", "title": "vLLM"}]--\x3e\nfrom langchain.llms import VLLMOpenAI\n\n\nllm = VLLMOpenAI(\n    openai_api_key="EMPTY",\n    openai_api_base="http://localhost:8000/v1",\n    model_name="tiiuae/falcon-7b",\n    model_kwargs={"stop": ["."]}\n)\nprint(llm("Rome is"))\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"     a city that is filled with history, ancient buildings, and art around every corner\n"))))}h.isMDXComponent=!0}}]);
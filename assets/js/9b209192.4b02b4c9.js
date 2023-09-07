"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=g(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,h=c["".concat(i,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var g={};for(var i in t)hasOwnProperty.call(t,i)&&(g[i]=t[i]);g.originalType=e,g[c]="string"==typeof e?e:o,s[1]=g;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>g,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={},s="HuggingGPT",g={unversionedId:"use_cases/more/agents/autonomous_agents/hugginggpt",id:"use_cases/more/agents/autonomous_agents/hugginggpt",title:"HuggingGPT",description:"Implementation of HuggingGPT. HuggingGPT is a system to connect LLMs (ChatGPT) with ML community (Hugging Face).",source:"@site/docs/use_cases/more/agents/autonomous_agents/hugginggpt.md",sourceDirName:"use_cases/more/agents/autonomous_agents",slug:"/use_cases/more/agents/autonomous_agents/hugginggpt",permalink:"/langchain/docs/use_cases/more/agents/autonomous_agents/hugginggpt",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"use_cases",previous:{title:"BabyAGI with Tools",permalink:"/langchain/docs/use_cases/more/agents/autonomous_agents/baby_agi_with_agent"},next:{title:"marathon_times",permalink:"/langchain/docs/use_cases/more/agents/autonomous_agents/marathon_times"}},i={},l=[{value:"Set up tools",id:"set-up-tools",level:2},{value:"Setup model and HuggingGPT",id:"setup-model-and-hugginggpt",level:2},{value:"Run an example",id:"run-an-example",level:2}],u={toc:l},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hugginggpt"},"HuggingGPT"),(0,o.kt)("p",null,"Implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/JARVIS"},"HuggingGPT"),". HuggingGPT is a system to connect LLMs (ChatGPT) with ML community (Hugging Face)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd25 Paper: ",(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2303.17580"},"https://arxiv.org/abs/2303.17580")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\ude80 Project: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/JARVIS"},"https://github.com/microsoft/JARVIS")),(0,o.kt)("li",{parentName:"ul"},"\ud83e\udd17 Space: ",(0,o.kt)("a",{parentName:"li",href:"https://huggingface.co/spaces/microsoft/HuggingGPT"},"https://huggingface.co/spaces/microsoft/HuggingGPT"))),(0,o.kt)("h2",{id:"set-up-tools"},"Set up tools"),(0,o.kt)("p",null,"We set up the tools available from ",(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/docs/transformers/transformers_agents#tools"},"Transformers Agent"),". It includes a library of tools supported by Transformers and some customized tools such as image generator, video generator, text downloader and other tools."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from transformers import load_tool\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'hf_tools = [\n    load_tool(tool_name)\n    for tool_name in [\n        "document-question-answering",\n        "image-captioning",\n        "image-question-answering",\n        "image-segmentation",\n        "speech-to-text",\n        "summarization",\n        "text-classification",\n        "text-question-answering",\n        "translation",\n        "huggingface-tools/text-to-image",\n        "huggingface-tools/text-to-video",\n        "text-to-speech",\n        "huggingface-tools/text-download",\n        "huggingface-tools/image-transformation",\n    ]\n]\n')),(0,o.kt)("h2",{id:"setup-model-and-hugginggpt"},"Setup model and HuggingGPT"),(0,o.kt)("p",null,"We create an instance of HuggingGPT and use ChatGPT as the controller to rule the above tools."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openai.OpenAI.html", "title": "HuggingGPT"}]--\x3e\nfrom langchain.llms import OpenAI\nfrom langchain_experimental.autonomous_agents import HuggingGPT\n# %env OPENAI_API_BASE=http://localhost:8000/v1\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'llm = OpenAI(model_name="gpt-3.5-turbo")\nagent = HuggingGPT(llm, hf_tools)\n')),(0,o.kt)("h2",{id:"run-an-example"},"Run an example"),(0,o.kt)("p",null,"Given a text, show a related image and video."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"agent.run(\"please show me a video and an image of 'a boy is running'\")\n")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65066],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return t?n.createElement(d,l(l({ref:r},c),{},{components:t})):n.createElement(d,l({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4816:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={},l="C Transformers",s={unversionedId:"integrations/providers/ctransformers",id:"integrations/providers/ctransformers",title:"C Transformers",description:"This page covers how to use the C Transformers library within LangChain.",source:"@site/docs/integrations/providers/ctransformers.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/ctransformers",permalink:"/langchain/docs/integrations/providers/ctransformers",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Confluence",permalink:"/langchain/docs/integrations/providers/confluence"},next:{title:"DashVector",permalink:"/langchain/docs/integrations/providers/dashvector"}},i={},p=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Wrappers",id:"wrappers",level:2},{value:"LLM",id:"llm",level:3}],c={toc:p},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"c-transformers"},"C Transformers"),(0,a.kt)("p",null,"This page covers how to use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marella/ctransformers"},"C Transformers")," library within LangChain.\nIt is broken into two parts: installation and setup, and then references to specific C Transformers wrappers."),(0,a.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install the Python package with ",(0,a.kt)("inlineCode",{parentName:"li"},"pip install ctransformers")),(0,a.kt)("li",{parentName:"ul"},"Download a supported ",(0,a.kt)("a",{parentName:"li",href:"https://huggingface.co/TheBloke"},"GGML model")," (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/marella/ctransformers#supported-models"},"Supported Models"),")")),(0,a.kt)("h2",{id:"wrappers"},"Wrappers"),(0,a.kt)("h3",{id:"llm"},"LLM"),(0,a.kt)("p",null,"There exists a CTransformers LLM wrapper, which you can access with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "CTransformers", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.ctransformers.CTransformers.html", "title": "C Transformers"}]--\x3e\nfrom langchain.llms import CTransformers\n')),(0,a.kt)("p",null,"It provides a unified interface for all models:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"llm = CTransformers(model='/path/to/ggml-gpt-2.bin', model_type='gpt2')\n\nprint(llm('AI is going to'))\n")),(0,a.kt)("p",null,"If you are getting ",(0,a.kt)("inlineCode",{parentName:"p"},"illegal instruction")," error, try using ",(0,a.kt)("inlineCode",{parentName:"p"},"lib='avx'")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"lib='basic'"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"llm = CTransformers(model='/path/to/ggml-gpt-2.bin', model_type='gpt2', lib='avx')\n")),(0,a.kt)("p",null,"It can be used with models hosted on the Hugging Face Hub:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"llm = CTransformers(model='marella/gpt-2-ggml')\n")),(0,a.kt)("p",null,"If a model repo has multiple model files (",(0,a.kt)("inlineCode",{parentName:"p"},".bin")," files), specify a model file using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"llm = CTransformers(model='marella/gpt-2-ggml', model_file='ggml-model.bin')\n")),(0,a.kt)("p",null,"Additional parameters can be passed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"config = {'max_new_tokens': 256, 'repetition_penalty': 1.1}\n\nllm = CTransformers(model='marella/gpt-2-ggml', config=config)\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marella/ctransformers#config"},"Documentation")," for a list of available parameters."),(0,a.kt)("p",null,"For a more detailed walkthrough of this, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/integrations/llms/ctransformers.html"},"this notebook"),"."))}u.isMDXComponent=!0}}]);
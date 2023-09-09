"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l="Llama.cpp",p={unversionedId:"integrations/providers/llamacpp",id:"integrations/providers/llamacpp",title:"Llama.cpp",description:"This page covers how to use llama.cpp within LangChain.",source:"@site/docs/integrations/providers/llamacpp.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/llamacpp",permalink:"/langchain/docs/integrations/providers/llamacpp",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"LangChain Decorators \u2728",permalink:"/langchain/docs/integrations/providers/langchain_decorators"},next:{title:"Log10",permalink:"/langchain/docs/integrations/providers/log10"}},i={},s=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Wrappers",id:"wrappers",level:2},{value:"LLM",id:"llm",level:3},{value:"Embeddings",id:"embeddings",level:3}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"llamacpp"},"Llama.cpp"),(0,a.kt)("p",null,"This page covers how to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ggerganov/llama.cpp"},"llama.cpp")," within LangChain.\nIt is broken into two parts: installation and setup, and then references to specific Llama-cpp wrappers."),(0,a.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install the Python package with ",(0,a.kt)("inlineCode",{parentName:"li"},"pip install llama-cpp-python")),(0,a.kt)("li",{parentName:"ul"},"Download one of the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ggerganov/llama.cpp#description"},"supported models")," and convert them to the llama.cpp format per the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ggerganov/llama.cpp"},"instructions"))),(0,a.kt)("h2",{id:"wrappers"},"Wrappers"),(0,a.kt)("h3",{id:"llm"},"LLM"),(0,a.kt)("p",null,"There exists a LlamaCpp LLM wrapper, which you can access with "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.llms import LlamaCpp\n")),(0,a.kt)("p",null,"For a more detailed walkthrough of this, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/integrations/llms/llamacpp.html"},"this notebook")),(0,a.kt)("h3",{id:"embeddings"},"Embeddings"),(0,a.kt)("p",null,"There exists a LlamaCpp Embeddings wrapper, which you can access with "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.embeddings import LlamaCppEmbeddings\n")),(0,a.kt)("p",null,"For a more detailed walkthrough of this, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/integrations/text_embedding/llamacpp.html"},"this notebook")))}d.isMDXComponent=!0}}]);
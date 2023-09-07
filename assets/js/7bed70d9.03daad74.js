"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={},a="NIBittensor",s={unversionedId:"integrations/providers/bittensor",id:"integrations/providers/bittensor",title:"NIBittensor",description:"This page covers how to use the BittensorLLM inference runtime within LangChain.",source:"@site/docs/integrations/providers/bittensor.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/bittensor",permalink:"/langchain/docs/integrations/providers/bittensor",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"BiliBili",permalink:"/langchain/docs/integrations/providers/bilibili"},next:{title:"Blackboard",permalink:"/langchain/docs/integrations/providers/blackboard"}},l={},p=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Wrappers",id:"wrappers",level:2},{value:"LLM",id:"llm",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nibittensor"},"NIBittensor"),(0,i.kt)("p",null,"This page covers how to use the BittensorLLM inference runtime within LangChain.\nIt is broken into two parts: installation and setup, and then examples of NIBittensorLLM usage."),(0,i.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install the Python package with ",(0,i.kt)("inlineCode",{parentName:"li"},"pip install langchain"))),(0,i.kt)("h2",{id:"wrappers"},"Wrappers"),(0,i.kt)("h3",{id:"llm"},"LLM"),(0,i.kt)("p",null,"There exists a NIBittensor LLM wrapper, which you can access with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "NIBittensorLLM", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.bittensor.NIBittensorLLM.html", "title": "NIBittensor"}]--\x3e\nfrom langchain.llms import NIBittensorLLM\n')),(0,i.kt)("p",null,"It provides a unified interface for all models:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"llm = NIBittensorLLM(system_prompt=\"Your task is to provide concise and accurate response based on user prompt\")\n\nprint(llm('Write a fibonacci function in python with golder ratio'))\n")),(0,i.kt)("p",null,"Multiple responses from top miners can be accessible using the ",(0,i.kt)("inlineCode",{parentName:"p"},"top_responses")," parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'multi_response_llm = NIBittensorLLM(top_responses=10)\nmulti_resp = multi_response_llm("What is Neural Network Feeding Mechanism?")\njson_multi_resp = json.loads(multi_resp)\n\nprint(json_multi_resp)\n')))}m.isMDXComponent=!0}}]);
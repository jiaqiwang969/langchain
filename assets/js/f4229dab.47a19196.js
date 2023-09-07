"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return n?o.createElement(d,a(a({ref:t},p),{},{components:n})):o.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[h]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={},a="Helicone",c={unversionedId:"integrations/providers/helicone",id:"integrations/providers/helicone",title:"Helicone",description:"This page covers how to use the Helicone ecosystem within LangChain.",source:"@site/docs/integrations/providers/helicone.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/helicone",permalink:"/langchain/docs/integrations/providers/helicone",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Hazy Research",permalink:"/langchain/docs/integrations/providers/hazy_research"},next:{title:"Hologres",permalink:"/langchain/docs/integrations/providers/hologres"}},l={},s=[{value:"What is Helicone?",id:"what-is-helicone",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"How to enable Helicone caching",id:"how-to-enable-helicone-caching",level:2},{value:"How to use Helicone custom properties",id:"how-to-use-helicone-custom-properties",level:2}],p={toc:s},h="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"helicone"},"Helicone"),(0,r.kt)("p",null,"This page covers how to use the ",(0,r.kt)("a",{parentName:"p",href:"https://helicone.ai"},"Helicone")," ecosystem within LangChain."),(0,r.kt)("h2",{id:"what-is-helicone"},"What is Helicone?"),(0,r.kt)("p",null,"Helicone is an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Helicone/helicone"},"open source")," observability platform that proxies your OpenAI traffic and provides you key insights into your spend, latency and usage."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Helicone",src:n(74270).Z,width:"2148",height:"1342"})),(0,r.kt)("h2",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"With your LangChain environment you can just add the following parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export OPENAI_API_BASE="https://oai.hconeai.com/v1"\n')),(0,r.kt)("p",null,"Now head over to ",(0,r.kt)("a",{parentName:"p",href:"https://helicone.ai/onboarding?step=2"},"helicone.ai")," to create your account, and add your OpenAI API key within our dashboard to view your logs."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Helicone",src:n(72430).Z,width:"2032",height:"926"})),(0,r.kt)("h2",{id:"how-to-enable-helicone-caching"},"How to enable Helicone caching"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openai.OpenAI.html", "title": "Helicone"}]--\x3e\nfrom langchain.llms import OpenAI\nimport openai\nopenai.api_base = "https://oai.hconeai.com/v1"\n\nllm = OpenAI(temperature=0.9, headers={"Helicone-Cache-Enabled": "true"})\ntext = "What is a helicone?"\nprint(llm(text))\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.helicone.ai/advanced-usage/caching"},"Helicone caching docs")),(0,r.kt)("h2",{id:"how-to-use-helicone-custom-properties"},"How to use Helicone custom properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openai.OpenAI.html", "title": "Helicone"}]--\x3e\nfrom langchain.llms import OpenAI\nimport openai\nopenai.api_base = "https://oai.hconeai.com/v1"\n\nllm = OpenAI(temperature=0.9, headers={\n        "Helicone-Property-Session": "24",\n        "Helicone-Property-Conversation": "support_issue_2",\n        "Helicone-Property-App": "mobile",\n      })\ntext = "What is a helicone?"\nprint(llm(text))\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.helicone.ai/advanced-usage/custom-properties"},"Helicone property docs")))}u.isMDXComponent=!0},74270:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/HeliconeDashboard-bc06f9888dbb03ff98d894fe9bec2b29.png"},72430:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/HeliconeKeys-9ff580101e3a63ee05e2fa67b8def03c.png"}}]);
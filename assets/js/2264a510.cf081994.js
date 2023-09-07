"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},i="PubMed",l={unversionedId:"integrations/tools/pubmed",id:"integrations/tools/pubmed",title:"PubMed",description:"PubMed\xae comprises more than 35 million citations for biomedical literature from MEDLINE, life science journals, and online books. Citations may include links to full text content from PubMed Central and publisher web sites.",source:"@site/docs/integrations/tools/pubmed.md",sourceDirName:"integrations/tools",slug:"/integrations/tools/pubmed",permalink:"/langchain/docs/integrations/tools/pubmed",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"OpenWeatherMap",permalink:"/langchain/docs/integrations/tools/openweathermap"},next:{title:"Requests",permalink:"/langchain/docs/integrations/tools/requests"}},s={},c=[],u=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const d={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pubmed"},"PubMed"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/"},"PubMed\xae")," comprises more than 35 million citations for biomedical literature from ",(0,r.kt)("inlineCode",{parentName:"p"},"MEDLINE"),", life science journals, and online books. Citations may include links to full text content from PubMed Central and publisher web sites.")),(0,r.kt)("p",null,"This notebook goes over how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"PubMed")," as a tool."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "PubmedQueryRun", "source": "langchain.tools", "docs": "https://api.python.langchain.com/en/latest/tools/langchain.tools.pubmed.tool.PubmedQueryRun.html", "title": "PubMed"}]--\x3e\nfrom langchain.tools import PubmedQueryRun\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"tool = PubmedQueryRun()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'tool.run("chatgpt")\n')),(0,r.kt)(u,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    'Published: <Year>2023</Year><Month>May</Month><Day>31</Day>\\nTitle: Dermatology in the wake of an AI revolution: who gets a say?\\nSummary: \\n\\nPublished: <Year>2023</Year><Month>May</Month><Day>30</Day>\\nTitle: What is ChatGPT and what do we do with it? Implications of the age of AI for nursing and midwifery practice and education: An editorial.\\nSummary: \\n\\nPublished: <Year>2023</Year><Month>Jun</Month><Day>02</Day>\\nTitle: The Impact of ChatGPT on the Nursing Profession: Revolutionizing Patient Care and Education.\\nSummary: The nursing field has undergone notable changes over time and is projected to undergo further modifications in the future, owing to the advent of sophisticated technologies and growing healthcare needs. The advent of ChatGPT, an AI-powered language model, is expected to exert a significant influence on the nursing profession, specifically in the domains of patient care and instruction. The present article delves into the ramifications of ChatGPT within the nursing domain and accentuates its capacity and constraints to transform the discipline.'\n"))))}f.isMDXComponent=!0}}]);
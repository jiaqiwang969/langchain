"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66225],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const a={},o="PipelineAI",l={unversionedId:"integrations/providers/pipelineai",id:"integrations/providers/pipelineai",title:"PipelineAI",description:"This page covers how to use the PipelineAI ecosystem within LangChain.",source:"@site/docs/integrations/providers/pipelineai.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/pipelineai",permalink:"/langchain/docs/integrations/providers/pipelineai",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Pinecone",permalink:"/langchain/docs/integrations/providers/pinecone"},next:{title:"Portkey",permalink:"/langchain/docs/integrations/providers/portkey/"}},p={},s=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Wrappers",id:"wrappers",level:2},{value:"LLM",id:"llm",level:3}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pipelineai"},"PipelineAI"),(0,i.kt)("p",null,"This page covers how to use the PipelineAI ecosystem within LangChain.\nIt is broken into two parts: installation and setup, and then references to specific PipelineAI wrappers."),(0,i.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install with ",(0,i.kt)("inlineCode",{parentName:"li"},"pip install pipeline-ai")),(0,i.kt)("li",{parentName:"ul"},"Get a Pipeline Cloud api key and set it as an environment variable (",(0,i.kt)("inlineCode",{parentName:"li"},"PIPELINE_API_KEY"),")")),(0,i.kt)("h2",{id:"wrappers"},"Wrappers"),(0,i.kt)("h3",{id:"llm"},"LLM"),(0,i.kt)("p",null,"There exists a PipelineAI LLM wrapper, which you can access with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "PipelineAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.pipelineai.PipelineAI.html", "title": "PipelineAI"}]--\x3e\nfrom langchain.llms import PipelineAI\n')))}d.isMDXComponent=!0}}]);
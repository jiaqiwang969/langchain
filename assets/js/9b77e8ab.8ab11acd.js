"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10821:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="Zep",s={unversionedId:"integrations/providers/zep",id:"integrations/providers/zep",title:"Zep",description:"Zep - A long-term memory store for LLM applications.",source:"@site/docs/integrations/providers/zep.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/zep",permalink:"/langchain/docs/integrations/providers/zep",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"YouTube",permalink:"/langchain/docs/integrations/providers/youtube"},next:{title:"Zilliz",permalink:"/langchain/docs/integrations/providers/zilliz"}},p={},l=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Retriever",id:"retriever",level:2}],c={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zep"},"Zep"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.getzep.com/"},"Zep")," - A long-term memory store for LLM applications.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"Zep")," stores, summarizes, embeds, indexes, and enriches conversational AI chat histories, and exposes them via simple, low-latency APIs."),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Long-term memory persistence, with access to historical messages irrespective of your summarization strategy."),(0,a.kt)("li",{parentName:"ul"},"Auto-summarization of memory messages based on a configurable message window. A series of summaries are stored, providing flexibility for future summarization strategies."),(0,a.kt)("li",{parentName:"ul"},"Vector search over memories, with messages automatically embedded on creation."),(0,a.kt)("li",{parentName:"ul"},"Auto-token counting of memories and summaries, allowing finer-grained control over prompt assembly."),(0,a.kt)("li",{parentName:"ul"},"Python and JavaScript SDKs."))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Zep")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/getzep/zep"},"project")," "),(0,a.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install zep_python\n")),(0,a.kt)("h2",{id:"retriever"},"Retriever"),(0,a.kt)("p",null,"See a ",(0,a.kt)("a",{parentName:"p",href:"/docs/integrations/retrievers/zep_memorystore"},"usage example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ZepRetriever", "source": "langchain.retrievers", "docs": "https://api.python.langchain.com/en/latest/retrievers/langchain.retrievers.zep.ZepRetriever.html", "title": "Zep"}]--\x3e\nfrom langchain.retrievers import ZepRetriever\n')))}u.isMDXComponent=!0}}]);
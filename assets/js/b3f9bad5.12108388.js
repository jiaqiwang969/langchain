"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12153],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},o="Writer",l={unversionedId:"integrations/providers/writer",id:"integrations/providers/writer",title:"Writer",description:"This page covers how to use the Writer ecosystem within LangChain.",source:"@site/docs/integrations/providers/writer.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/writer",permalink:"/langchain/docs/integrations/providers/writer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Wolfram Alpha",permalink:"/langchain/docs/integrations/providers/wolfram_alpha"},next:{title:"Xata",permalink:"/langchain/docs/integrations/providers/xata"}},s={},p=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Wrappers",id:"wrappers",level:2},{value:"LLM",id:"llm",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"writer"},"Writer"),(0,a.kt)("p",null,"This page covers how to use the Writer ecosystem within LangChain.\nIt is broken into two parts: installation and setup, and then references to specific Writer wrappers."),(0,a.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get an Writer api key and set it as an environment variable (",(0,a.kt)("inlineCode",{parentName:"li"},"WRITER_API_KEY"),")")),(0,a.kt)("h2",{id:"wrappers"},"Wrappers"),(0,a.kt)("h3",{id:"llm"},"LLM"),(0,a.kt)("p",null,"There exists an Writer LLM wrapper, which you can access with "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.llms import Writer\n")))}d.isMDXComponent=!0}}]);
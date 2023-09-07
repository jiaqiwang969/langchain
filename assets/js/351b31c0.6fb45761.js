"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},30098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o="StochasticAI",s={unversionedId:"integrations/providers/stochasticai",id:"integrations/providers/stochasticai",title:"StochasticAI",description:"This page covers how to use the StochasticAI ecosystem within LangChain.",source:"@site/docs/integrations/providers/stochasticai.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/stochasticai",permalink:"/langchain/docs/integrations/providers/stochasticai",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"StarRocks",permalink:"/langchain/docs/integrations/providers/starrocks"},next:{title:"Stripe",permalink:"/langchain/docs/integrations/providers/stripe"}},c={},l=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Wrappers",id:"wrappers",level:2},{value:"LLM",id:"llm",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stochasticai"},"StochasticAI"),(0,a.kt)("p",null,"This page covers how to use the StochasticAI ecosystem within LangChain.\nIt is broken into two parts: installation and setup, and then references to specific StochasticAI wrappers."),(0,a.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install with ",(0,a.kt)("inlineCode",{parentName:"li"},"pip install stochasticx")),(0,a.kt)("li",{parentName:"ul"},"Get an StochasticAI api key and set it as an environment variable (",(0,a.kt)("inlineCode",{parentName:"li"},"STOCHASTICAI_API_KEY"),")")),(0,a.kt)("h2",{id:"wrappers"},"Wrappers"),(0,a.kt)("h3",{id:"llm"},"LLM"),(0,a.kt)("p",null,"There exists an StochasticAI LLM wrapper, which you can access with "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.llms import StochasticAI\n")))}d.isMDXComponent=!0}}]);
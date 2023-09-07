"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="Bedrock",l={unversionedId:"integrations/providers/bedrock",id:"integrations/providers/bedrock",title:"Bedrock",description:"Amazon Bedrock is a fully managed service that makes FMs from leading AI startups and Amazon available via an API, so you can choose from a wide range of FMs to find the model that is best suited for your use case.",source:"@site/docs/integrations/providers/bedrock.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/bedrock",permalink:"/langchain/docs/integrations/providers/bedrock",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Beam",permalink:"/langchain/docs/integrations/providers/beam"},next:{title:"BiliBili",permalink:"/langchain/docs/integrations/providers/bilibili"}},s={},c=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"LLM",id:"llm",level:2},{value:"Text Embedding Models",id:"text-embedding-models",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bedrock"},"Bedrock"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/bedrock/"},"Amazon Bedrock")," is a fully managed service that makes FMs from leading AI startups and Amazon available via an API, so you can choose from a wide range of FMs to find the model that is best suited for your use case.")),(0,a.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install boto3\n")),(0,a.kt)("h2",{id:"llm"},"LLM"),(0,a.kt)("p",null,"See a ",(0,a.kt)("a",{parentName:"p",href:"/docs/integrations/llms/bedrock"},"usage example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "Bedrock", "source": "langchain.llms.bedrock", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.bedrock.Bedrock.html", "title": "Bedrock"}]--\x3e\nfrom langchain.llms.bedrock import Bedrock\n')),(0,a.kt)("h2",{id:"text-embedding-models"},"Text Embedding Models"),(0,a.kt)("p",null,"See a ",(0,a.kt)("a",{parentName:"p",href:"/docs/integrations/text_embedding/bedrock"},"usage example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "BedrockEmbeddings", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.bedrock.BedrockEmbeddings.html", "title": "Bedrock"}]--\x3e\nfrom langchain.embeddings import BedrockEmbeddings\n')))}m.isMDXComponent=!0}}]);
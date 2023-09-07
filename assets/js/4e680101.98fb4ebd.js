"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="Facebook Faiss",s={unversionedId:"integrations/providers/facebook_faiss",id:"integrations/providers/facebook_faiss",title:"Facebook Faiss",description:"Facebook AI Similarity Search (Faiss)",source:"@site/docs/integrations/providers/facebook_faiss.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/facebook_faiss",permalink:"/langchain/docs/integrations/providers/facebook_faiss",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Facebook Chat",permalink:"/langchain/docs/integrations/providers/facebook_chat"},next:{title:"Figma",permalink:"/langchain/docs/integrations/providers/figma"}},c={},l=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Vector Store",id:"vector-store",level:2}],p={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"facebook-faiss"},"Facebook Faiss"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://engineering.fb.com/2017/03/29/data-infrastructure/faiss-a-library-for-efficient-similarity-search/"},"Facebook AI Similarity Search (Faiss)"),"\nis a library for efficient similarity search and clustering of dense vectors. It contains algorithms that\nsearch in sets of vectors of any size, up to ones that possibly do not fit in RAM. It also contains supporting\ncode for evaluation and parameter tuning.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://faiss.ai/"},"Faiss documentation"),"."),(0,a.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,a.kt)("p",null,"We need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"faiss")," python package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install faiss-gpu # For CUDA 7.5+ supported GPU's.\n")),(0,a.kt)("p",null,"OR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install faiss-cpu # For CPU Installation\n")),(0,a.kt)("h2",{id:"vector-store"},"Vector Store"),(0,a.kt)("p",null,"See a ",(0,a.kt)("a",{parentName:"p",href:"/docs/integrations/vectorstores/faiss"},"usage example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "FAISS", "source": "langchain.vectorstores", "docs": "https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.faiss.FAISS.html", "title": "Facebook Faiss"}]--\x3e\nfrom langchain.vectorstores import FAISS\n')))}f.isMDXComponent=!0}}]);
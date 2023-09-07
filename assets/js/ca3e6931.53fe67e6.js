"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97093],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>b});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(i),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return i?n.createElement(b,a(a({ref:t},p),{},{components:i})):n.createElement(b,a({ref:t},p))}));function b(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},24133:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=i(87462),r=(i(67294),i(3905));const o={},a="BiliBili",l={unversionedId:"integrations/document_loaders/bilibili",id:"integrations/document_loaders/bilibili",title:"BiliBili",description:"Bilibili is one of the most beloved long-form video sites in China.",source:"@site/docs/integrations/document_loaders/bilibili.md",sourceDirName:"integrations/document_loaders",slug:"/integrations/document_loaders/bilibili",permalink:"/langchain/docs/integrations/document_loaders/bilibili",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"BibTeX",permalink:"/langchain/docs/integrations/document_loaders/bibtex"},next:{title:"Blackboard",permalink:"/langchain/docs/integrations/document_loaders/blackboard"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bilibili"},"BiliBili"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.bilibili.tv/"},"Bilibili")," is one of the most beloved long-form video sites in China.")),(0,r.kt)("p",null,"This loader utilizes the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MoyuScript/bilibili-api"},"bilibili-api")," to fetch the text transcript from ",(0,r.kt)("inlineCode",{parentName:"p"},"Bilibili"),"."),(0,r.kt)("p",null,"With this BiliBiliLoader, users can easily obtain the transcript of their desired video content on the platform."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#!pip install bilibili-api-python\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "BiliBiliLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.bilibili.BiliBiliLoader.html", "title": "BiliBili"}]--\x3e\nfrom langchain.document_loaders import BiliBiliLoader\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'loader = BiliBiliLoader(["https://www.bilibili.com/video/BV1xt411o7Xu/"])\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"loader.load()\n")))}d.isMDXComponent=!0}}]);
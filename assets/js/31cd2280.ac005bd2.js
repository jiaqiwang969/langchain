"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,g=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="College Confidential",l={unversionedId:"integrations/providers/college_confidential",id:"integrations/providers/college_confidential",title:"College Confidential",description:"College Confidential gives information on 3,800+ colleges and universities.",source:"@site/docs/integrations/providers/college_confidential.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/college_confidential",permalink:"/langchain/docs/integrations/providers/college_confidential",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Cohere",permalink:"/langchain/docs/integrations/providers/cohere"},next:{title:"Comet",permalink:"/langchain/docs/integrations/providers/comet_tracking"}},c={},s=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Document Loader",id:"document-loader",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"college-confidential"},"College Confidential"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://www.collegeconfidential.com/"},"College Confidential")," gives information on 3,800+ colleges and universities.")),(0,o.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,o.kt)("p",null,"There isn't any special setup for it."),(0,o.kt)("h2",{id:"document-loader"},"Document Loader"),(0,o.kt)("p",null,"See a ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/document_loaders/college_confidential"},"usage example"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "CollegeConfidentialLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.college_confidential.CollegeConfidentialLoader.html", "title": "College Confidential"}]--\x3e\nfrom langchain.document_loaders import CollegeConfidentialLoader\n')))}u.isMDXComponent=!0}}]);
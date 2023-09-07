"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26146],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},o="Arxiv",l={unversionedId:"integrations/providers/arxiv",id:"integrations/providers/arxiv",title:"Arxiv",description:"arXiv is an open-access archive for 2 million scholarly articles in the fields of physics,",source:"@site/docs/integrations/providers/arxiv.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/arxiv",permalink:"/langchain/docs/integrations/providers/arxiv",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Arthur",permalink:"/langchain/docs/integrations/providers/arthur_tracking"},next:{title:"Atlas",permalink:"/langchain/docs/integrations/providers/atlas"}},s={},c=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Document Loader",id:"document-loader",level:2},{value:"Retriever",id:"retriever",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"arxiv"},"Arxiv"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/"},"arXiv")," is an open-access archive for 2 million scholarly articles in the fields of physics,\nmathematics, computer science, quantitative biology, quantitative finance, statistics, electrical engineering and\nsystems science, and economics.")),(0,a.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,a.kt)("p",null,"First, you need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"arxiv")," python package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install arxiv\n")),(0,a.kt)("p",null,"Second, you need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"PyMuPDF")," python package which transforms PDF files downloaded from the ",(0,a.kt)("inlineCode",{parentName:"p"},"arxiv.org")," site into the text format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pymupdf\n")),(0,a.kt)("h2",{id:"document-loader"},"Document Loader"),(0,a.kt)("p",null,"See a ",(0,a.kt)("a",{parentName:"p",href:"/docs/integrations/document_loaders/arxiv"},"usage example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ArxivLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.arxiv.ArxivLoader.html", "title": "Arxiv"}]--\x3e\nfrom langchain.document_loaders import ArxivLoader\n')),(0,a.kt)("h2",{id:"retriever"},"Retriever"),(0,a.kt)("p",null,"See a ",(0,a.kt)("a",{parentName:"p",href:"/docs/integrations/retrievers/arxiv"},"usage example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ArxivRetriever", "source": "langchain.retrievers", "docs": "https://api.python.langchain.com/en/latest/retrievers/langchain.retrievers.arxiv.ArxivRetriever.html", "title": "Arxiv"}]--\x3e\nfrom langchain.retrievers import ArxivRetriever\n')))}d.isMDXComponent=!0}}]);
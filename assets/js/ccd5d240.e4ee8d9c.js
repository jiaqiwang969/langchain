"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84686],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83605:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="kNN",s={unversionedId:"integrations/retrievers/knn",id:"integrations/retrievers/knn",title:"kNN",description:"In statistics, the k-nearest neighbors algorithm (k-NN) is a non-parametric supervised learning method first developed by Evelyn Fix and Joseph Hodges in 1951, and later expanded by Thomas Cover. It is used for classification and regression.",source:"@site/docs/integrations/retrievers/knn.md",sourceDirName:"integrations/retrievers",slug:"/integrations/retrievers/knn",permalink:"/langchain/docs/integrations/retrievers/knn",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Google Drive Retriever",permalink:"/langchain/docs/integrations/retrievers/google_drive"},next:{title:"LOTR (Merger Retriever)",permalink:"/langchain/docs/integrations/retrievers/merger_retriever"}},l={},c=[{value:"Create New Retriever with Texts",id:"create-new-retriever-with-texts",level:2},{value:"Use Retriever",id:"use-retriever",level:2}],p=(d="CodeOutputBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const u={toc:c},m="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"knn"},"kNN"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In statistics, the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm"},"k-nearest neighbors algorithm (k-NN)")," is a non-parametric supervised learning method first developed by Evelyn Fix and Joseph Hodges in 1951, and later expanded by Thomas Cover. It is used for classification and regression.")),(0,a.kt)("p",null,"This notebook goes over how to use a retriever that under the hood uses an kNN."),(0,a.kt)("p",null,"Largely based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/karpathy/randomfun/blob/master/knn_vs_svm.html"},"https://github.com/karpathy/randomfun/blob/master/knn_vs_svm.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "KNNRetriever", "source": "langchain.retrievers", "docs": "https://api.python.langchain.com/en/latest/retrievers/langchain.retrievers.knn.KNNRetriever.html", "title": "kNN"}, {"imported": "OpenAIEmbeddings", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.openai.OpenAIEmbeddings.html", "title": "kNN"}]--\x3e\nfrom langchain.retrievers import KNNRetriever\nfrom langchain.embeddings import OpenAIEmbeddings\n')),(0,a.kt)("h2",{id:"create-new-retriever-with-texts"},"Create New Retriever with Texts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'retriever = KNNRetriever.from_texts(\n    ["foo", "bar", "world", "hello", "foo bar"], OpenAIEmbeddings()\n)\n')),(0,a.kt)("h2",{id:"use-retriever"},"Use Retriever"),(0,a.kt)("p",null,"We can now use the retriever!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'result = retriever.get_relevant_documents("foo")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"result\n")),(0,a.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [Document(page_content='foo', metadata={}),\n     Document(page_content='foo bar', metadata={}),\n     Document(page_content='hello', metadata={}),\n     Document(page_content='bar', metadata={})]\n"))))}g.isMDXComponent=!0}}]);
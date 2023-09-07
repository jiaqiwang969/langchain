"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),g=a,u=c["".concat(l,".").concat(g)]||c[g]||m[g]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},35018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="AwaEmbedding",d={unversionedId:"integrations/text_embedding/Awa",id:"integrations/text_embedding/Awa",title:"AwaEmbedding",description:"This notebook explains how to use AwaEmbedding, which is included in awadb, to embedding texts in langchain.",source:"@site/docs/integrations/text_embedding/Awa.md",sourceDirName:"integrations/text_embedding",slug:"/integrations/text_embedding/Awa",permalink:"/langchain/docs/integrations/text_embedding/Awa",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Text embedding models",permalink:"/langchain/docs/integrations/text_embedding/"},next:{title:"Aleph Alpha",permalink:"/langchain/docs/integrations/text_embedding/aleph_alpha"}},l={},s=[{value:"import the library",id:"import-the-library",level:2}],p={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"awaembedding"},"AwaEmbedding"),(0,a.kt)("p",null,"This notebook explains how to use AwaEmbedding, which is included in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/awa-ai/awadb"},"awadb"),", to embedding texts in langchain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# pip install awadb\n")),(0,a.kt)("h2",{id:"import-the-library"},"import the library"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "AwaEmbeddings", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.awa.AwaEmbeddings.html", "title": "AwaEmbedding"}]--\x3e\nfrom langchain.embeddings import AwaEmbeddings\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"Embedding = AwaEmbeddings()\n")),(0,a.kt)("h1",{id:"set-embedding-model"},"Set embedding model"),(0,a.kt)("p",null,"Users can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Embedding.set_model()")," to specify the embedding model. \\\nThe input of this function is a string which represents the model's name. \\\nThe list of currently supported models can be obtained ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/awa-ai/awadb"},"here")," \\ \\ "),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"default model")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"all-mpnet-base-v2"),", it can be used without setting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'text = "our embedding test"\n\nEmbedding.set_model("all-mpnet-base-v2")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'res_query = Embedding.embed_query("The test information")\nres_document = Embedding.embed_documents(["test1", "another test"])\n')))}m.isMDXComponent=!0}}]);
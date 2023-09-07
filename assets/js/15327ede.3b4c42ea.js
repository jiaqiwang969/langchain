"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10405],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),i=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=i(t),u=a,g=c["".concat(d,".").concat(u)]||c[u]||m[u]||o;return t?r.createElement(g,p(p({ref:n},s),{},{components:t})):r.createElement(g,p({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[c]="string"==typeof e?e:a,p[1]=l;for(var i=2;i<o;i++)p[i]=t[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},31824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const o={},p="OpenAI",l={unversionedId:"integrations/text_embedding/openai",id:"integrations/text_embedding/openai",title:"OpenAI",description:"Let's load the OpenAI Embedding class.",source:"@site/docs/integrations/text_embedding/openai.md",sourceDirName:"integrations/text_embedding",slug:"/integrations/text_embedding/openai",permalink:"/langchain/docs/integrations/text_embedding/openai",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"NLP Cloud",permalink:"/langchain/docs/integrations/text_embedding/nlp_cloud"},next:{title:"SageMaker Endpoint Embeddings",permalink:"/langchain/docs/integrations/text_embedding/sagemaker-endpoint"}},d={},i=[],s=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const m={toc:i},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openai"},"OpenAI"),(0,a.kt)("p",null,"Let's load the OpenAI Embedding class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAIEmbeddings", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.openai.OpenAIEmbeddings.html", "title": "OpenAI"}]--\x3e\nfrom langchain.embeddings import OpenAIEmbeddings\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"embeddings = OpenAIEmbeddings()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'text = "This is a test document."\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"query_result = embeddings.embed_query(text)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"query_result[:5]\n")),(0,a.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [-0.003186025367556387,\n     0.011071979803637493,\n     -0.004020420763285827,\n     -0.011658221276953042,\n     -0.0010534035786864363]\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"doc_result = embeddings.embed_documents([text])\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"doc_result[0][:5]\n")),(0,a.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [-0.003186025367556387,\n     0.011071979803637493,\n     -0.004020420763285827,\n     -0.011658221276953042,\n     -0.0010534035786864363]\n"))),(0,a.kt)("p",null,"Let's load the OpenAI Embedding class with first generation models (e.g. text-search-ada-doc-001/text-search-ada-query-001). Note: These are not recommended models - see ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/embeddings/what-are-embeddings"},"here")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAIEmbeddings", "source": "langchain.embeddings.openai", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.openai.OpenAIEmbeddings.html", "title": "OpenAI"}]--\x3e\nfrom langchain.embeddings.openai import OpenAIEmbeddings\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'embeddings = OpenAIEmbeddings(model="text-search-ada-doc-001")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'text = "This is a test document."\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"query_result = embeddings.embed_query(text)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"query_result[:5]\n")),(0,a.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [0.004452846988523035,\n     0.034550655976098514,\n     -0.015029939040690051,\n     0.03827273883655212,\n     0.005785414075152477]\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"doc_result = embeddings.embed_documents([text])\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"doc_result[0][:5]\n")),(0,a.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [0.004452846988523035,\n     0.034550655976098514,\n     -0.015029939040690051,\n     0.03827273883655212,\n     0.005785414075152477]\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# if you are behind an explicit proxy, you can use the OPENAI_PROXY environment variable to pass through\nos.environ["OPENAI_PROXY"] = "http://proxy.yourcompany.com:8080"\n')))}g.isMDXComponent=!0}}]);
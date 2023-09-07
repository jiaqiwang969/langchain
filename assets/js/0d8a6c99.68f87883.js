"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86400:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i="DocArray InMemorySearch",s={unversionedId:"integrations/vectorstores/docarray_in_memory",id:"integrations/vectorstores/docarray_in_memory",title:"DocArray InMemorySearch",description:"DocArrayInMemorySearch is a document index provided by Docarray that stores documents in memory. It is a great starting point for small datasets, where you may not want to launch a database server.",source:"@site/docs/integrations/vectorstores/docarray_in_memory.md",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/docarray_in_memory",permalink:"/langchain/docs/integrations/vectorstores/docarray_in_memory",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"DocArray HnswSearch",permalink:"/langchain/docs/integrations/vectorstores/docarray_hnsw"},next:{title:"Elasticsearch",permalink:"/langchain/docs/integrations/vectorstores/elasticsearch"}},c={},l=[{value:"Setup",id:"setup",level:2},{value:"Using DocArrayInMemorySearch",id:"using-docarrayinmemorysearch",level:2},{value:"Similarity search",id:"similarity-search",level:3},{value:"Similarity search with score",id:"similarity-search-with-score",level:3}],p=(d="CodeOutputBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:l},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docarray-inmemorysearch"},"DocArray InMemorySearch"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://docs.docarray.org/user_guide/storing/index_in_memory/"},"DocArrayInMemorySearch")," is a document index provided by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/docarray/docarray"},"Docarray")," that stores documents in memory. It is a great starting point for small datasets, where you may not want to launch a database server.")),(0,o.kt)("p",null,"This notebook shows how to use functionality related to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DocArrayInMemorySearch"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Uncomment the below cells to install docarray and get/set your OpenAI api key if you haven't already done so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# !pip install "docarray"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Get an OpenAI token: https://platform.openai.com/account/api-keys\n\n# import os\n# from getpass import getpass\n\n# OPENAI_API_KEY = getpass()\n\n# os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY\n')),(0,o.kt)("h2",{id:"using-docarrayinmemorysearch"},"Using DocArrayInMemorySearch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAIEmbeddings", "source": "langchain.embeddings.openai", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.openai.OpenAIEmbeddings.html", "title": "DocArray InMemorySearch"}, {"imported": "CharacterTextSplitter", "source": "langchain.text_splitter", "docs": "https://api.python.langchain.com/en/latest/text_splitter/langchain.text_splitter.CharacterTextSplitter.html", "title": "DocArray InMemorySearch"}, {"imported": "DocArrayInMemorySearch", "source": "langchain.vectorstores", "docs": "https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.docarray.in_memory.DocArrayInMemorySearch.html", "title": "DocArray InMemorySearch"}, {"imported": "TextLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.text.TextLoader.html", "title": "DocArray InMemorySearch"}]--\x3e\nfrom langchain.embeddings.openai import OpenAIEmbeddings\nfrom langchain.text_splitter import CharacterTextSplitter\nfrom langchain.vectorstores import DocArrayInMemorySearch\nfrom langchain.document_loaders import TextLoader\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'documents = TextLoader("../../../state_of_the_union.txt").load()\ntext_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)\ndocs = text_splitter.split_documents(documents)\n\nembeddings = OpenAIEmbeddings()\n\ndb = DocArrayInMemorySearch.from_documents(docs, embeddings)\n')),(0,o.kt)("h3",{id:"similarity-search"},"Similarity search"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'query = "What did the president say about Ketanji Brown Jackson"\ndocs = db.similarity_search(query)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print(docs[0].page_content)\n")),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \n    \n    Tonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \n    \n    One of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \n    \n    And I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.\n"))),(0,o.kt)("h3",{id:"similarity-search-with-score"},"Similarity search with score"),(0,o.kt)("p",null,"The returned distance score is cosine distance. Therefore, a lower score is better."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"docs = db.similarity_search_with_score(query)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"docs[0]\n")),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    (Document(page_content='Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \\n\\nTonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \\n\\nOne of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \\n\\nAnd I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.', metadata={}),\n     0.8154190158347903)\n"))))}h.isMDXComponent=!0}}]);
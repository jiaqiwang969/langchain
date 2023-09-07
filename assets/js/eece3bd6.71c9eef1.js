"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="Weaviate self-querying",s={unversionedId:"modules/data_connection/retrievers/self_query/weaviate_self_query",id:"modules/data_connection/retrievers/self_query/weaviate_self_query",title:"Weaviate self-querying",description:"Creating a Weaviate vector store",source:"@site/docs/modules/data_connection/retrievers/self_query/weaviate_self_query.md",sourceDirName:"modules/data_connection/retrievers/self_query",slug:"/modules/data_connection/retrievers/self_query/weaviate_self_query",permalink:"/langchain/docs/modules/data_connection/retrievers/self_query/weaviate_self_query",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Qdrant self-querying",permalink:"/langchain/docs/modules/data_connection/retrievers/self_query/qdrant_self_query"},next:{title:"Time-weighted vector store retriever",permalink:"/langchain/docs/modules/data_connection/retrievers/time_weighted_vectorstore"}},l={},c=[{value:"Creating a Weaviate vector store",id:"creating-a-weaviate-vector-store",level:2},{value:"Creating our self-querying retriever",id:"creating-our-self-querying-retriever",level:2},{value:"Testing it out",id:"testing-it-out",level:2},{value:"Filter k",id:"filter-k",level:2}],m=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const p={toc:c},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"weaviate-self-querying"},"Weaviate self-querying"),(0,a.kt)("h2",{id:"creating-a-weaviate-vector-store"},"Creating a Weaviate vector store"),(0,a.kt)("p",null,"First we'll want to create a Weaviate vector store and seed it with some data. We've created a small demo set of documents that contain summaries of movies."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," The self-query retriever requires you to have ",(0,a.kt)("inlineCode",{parentName:"p"},"lark")," installed (",(0,a.kt)("inlineCode",{parentName:"p"},"pip install lark"),"). We also need the ",(0,a.kt)("inlineCode",{parentName:"p"},"weaviate-client")," package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"#!pip install lark weaviate-client\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "Document", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.document.Document.html", "title": "Weaviate self-querying "}, {"imported": "OpenAIEmbeddings", "source": "langchain.embeddings.openai", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.openai.OpenAIEmbeddings.html", "title": "Weaviate self-querying "}, {"imported": "Weaviate", "source": "langchain.vectorstores", "docs": "https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.weaviate.Weaviate.html", "title": "Weaviate self-querying "}]--\x3e\nfrom langchain.schema import Document\nfrom langchain.embeddings.openai import OpenAIEmbeddings\nfrom langchain.vectorstores import Weaviate\nimport os\n\nembeddings = OpenAIEmbeddings()\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'docs = [\n    Document(\n        page_content="A bunch of scientists bring back dinosaurs and mayhem breaks loose",\n        metadata={"year": 1993, "rating": 7.7, "genre": "science fiction"},\n    ),\n    Document(\n        page_content="Leo DiCaprio gets lost in a dream within a dream within a dream within a ...",\n        metadata={"year": 2010, "director": "Christopher Nolan", "rating": 8.2},\n    ),\n    Document(\n        page_content="A psychologist / detective gets lost in a series of dreams within dreams within dreams and Inception reused the idea",\n        metadata={"year": 2006, "director": "Satoshi Kon", "rating": 8.6},\n    ),\n    Document(\n        page_content="A bunch of normal-sized women are supremely wholesome and some men pine after them",\n        metadata={"year": 2019, "director": "Greta Gerwig", "rating": 8.3},\n    ),\n    Document(\n        page_content="Toys come alive and have a blast doing so",\n        metadata={"year": 1995, "genre": "animated"},\n    ),\n    Document(\n        page_content="Three men walk into the Zone, three men walk out of the Zone",\n        metadata={\n            "year": 1979,\n            "rating": 9.9,\n            "director": "Andrei Tarkovsky",\n            "genre": "science fiction",\n            "rating": 9.9,\n        },\n    ),\n]\nvectorstore = Weaviate.from_documents(\n    docs, embeddings, weaviate_url="http://127.0.0.1:8080"\n)\n')),(0,a.kt)("h2",{id:"creating-our-self-querying-retriever"},"Creating our self-querying retriever"),(0,a.kt)("p",null,"Now we can instantiate our retriever. To do this we'll need to provide some information upfront about the metadata fields that our documents support and a short description of the document contents."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openai.OpenAI.html", "title": "Weaviate self-querying "}, {"imported": "SelfQueryRetriever", "source": "langchain.retrievers.self_query.base", "docs": "https://api.python.langchain.com/en/latest/retrievers/langchain.retrievers.self_query.base.SelfQueryRetriever.html", "title": "Weaviate self-querying "}, {"imported": "AttributeInfo", "source": "langchain.chains.query_constructor.base", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.query_constructor.schema.AttributeInfo.html", "title": "Weaviate self-querying "}]--\x3e\nfrom langchain.llms import OpenAI\nfrom langchain.retrievers.self_query.base import SelfQueryRetriever\nfrom langchain.chains.query_constructor.base import AttributeInfo\n\nmetadata_field_info = [\n    AttributeInfo(\n        name="genre",\n        description="The genre of the movie",\n        type="string or list[string]",\n    ),\n    AttributeInfo(\n        name="year",\n        description="The year the movie was released",\n        type="integer",\n    ),\n    AttributeInfo(\n        name="director",\n        description="The name of the movie director",\n        type="string",\n    ),\n    AttributeInfo(\n        name="rating", description="A 1-10 rating for the movie", type="float"\n    ),\n]\ndocument_content_description = "Brief summary of a movie"\nllm = OpenAI(temperature=0)\nretriever = SelfQueryRetriever.from_llm(\n    llm, vectorstore, document_content_description, metadata_field_info, verbose=True\n)\n')),(0,a.kt)("h2",{id:"testing-it-out"},"Testing it out"),(0,a.kt)("p",null,"And now we can try actually using our retriever!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# This example only specifies a relevant query\nretriever.get_relevant_documents("What are some movies about dinosaurs")\n')),(0,a.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    query='dinosaur' filter=None limit=None\n\n\n\n\n\n    [Document(page_content='A bunch of scientists bring back dinosaurs and mayhem breaks loose', metadata={'genre': 'science fiction', 'rating': 7.7, 'year': 1993}),\n     Document(page_content='Toys come alive and have a blast doing so', metadata={'genre': 'animated', 'rating': None, 'year': 1995}),\n     Document(page_content='Three men walk into the Zone, three men walk out of the Zone', metadata={'genre': 'science fiction', 'rating': 9.9, 'year': 1979}),\n     Document(page_content='A psychologist / detective gets lost in a series of dreams within dreams within dreams and Inception reused the idea', metadata={'genre': None, 'rating': 8.6, 'year': 2006})]\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# This example specifies a query and a filter\nretriever.get_relevant_documents("Has Greta Gerwig directed any movies about women")\n')),(0,a.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    query='women' filter=Comparison(comparator=<Comparator.EQ: 'eq'>, attribute='director', value='Greta Gerwig') limit=None\n\n\n\n\n\n    [Document(page_content='A bunch of normal-sized women are supremely wholesome and some men pine after them', metadata={'genre': None, 'rating': 8.3, 'year': 2019})]\n"))),(0,a.kt)("h2",{id:"filter-k"},"Filter k"),(0,a.kt)("p",null,"We can also use the self query retriever to specify ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),": the number of documents to fetch."),(0,a.kt)("p",null,"We can do this by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"enable_limit=True")," to the constructor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"retriever = SelfQueryRetriever.from_llm(\n    llm,\n    vectorstore,\n    document_content_description,\n    metadata_field_info,\n    enable_limit=True,\n    verbose=True,\n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# This example only specifies a relevant query\nretriever.get_relevant_documents("what are two movies about dinosaurs")\n')),(0,a.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    query='dinosaur' filter=None limit=2\n\n\n\n\n\n    [Document(page_content='A bunch of scientists bring back dinosaurs and mayhem breaks loose', metadata={'genre': 'science fiction', 'rating': 7.7, 'year': 1993}),\n     Document(page_content='Toys come alive and have a blast doing so', metadata={'genre': 'animated', 'rating': None, 'year': 1995})]\n"))))}g.isMDXComponent=!0}}]);
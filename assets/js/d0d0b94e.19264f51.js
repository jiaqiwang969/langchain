"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={},i="Weaviate Hybrid Search",c={unversionedId:"integrations/retrievers/weaviate-hybrid",id:"integrations/retrievers/weaviate-hybrid",title:"Weaviate Hybrid Search",description:"Weaviate is an open source vector database.",source:"@site/docs/integrations/retrievers/weaviate-hybrid.md",sourceDirName:"integrations/retrievers",slug:"/integrations/retrievers/weaviate-hybrid",permalink:"/langchain/docs/integrations/retrievers/weaviate-hybrid",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Vespa",permalink:"/langchain/docs/integrations/retrievers/vespa"},next:{title:"Wikipedia",permalink:"/langchain/docs/integrations/retrievers/wikipedia"}},s={},l=[],d=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const u={toc:l},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"weaviate-hybrid-search"},"Weaviate Hybrid Search"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://weaviate.io/developers/weaviate"},"Weaviate")," is an open source vector database.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://weaviate.io/blog/hybrid-search-explained"},"Hybrid search")," is a technique that combines multiple search algorithms to improve the accuracy and relevance of search results. It uses the best features of both keyword-based search algorithms with vector search techniques.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Hybrid search in Weaviate")," uses sparse and dense vectors to represent the meaning and context of search queries and documents.")),(0,o.kt)("p",null,"This notebook shows how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Weaviate hybrid search")," as a LangChain retriever."),(0,o.kt)("p",null,"Set up the retriever:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"#!pip install weaviate-client\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import weaviate\nimport os\n\nWEAVIATE_URL = os.getenv("WEAVIATE_URL")\nauth_client_secret = (weaviate.AuthApiKey(api_key=os.getenv("WEAVIATE_API_KEY")),)\nclient = weaviate.Client(\n    url=WEAVIATE_URL,\n    additional_headers={\n        "X-Openai-Api-Key": os.getenv("OPENAI_API_KEY"),\n    },\n)\n\n# client.schema.delete_all()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "WeaviateHybridSearchRetriever", "source": "langchain.retrievers.weaviate_hybrid_search", "docs": "https://api.python.langchain.com/en/latest/retrievers/langchain.retrievers.weaviate_hybrid_search.WeaviateHybridSearchRetriever.html", "title": "Weaviate Hybrid Search"}, {"imported": "Document", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.document.Document.html", "title": "Weaviate Hybrid Search"}]--\x3e\nfrom langchain.retrievers.weaviate_hybrid_search import WeaviateHybridSearchRetriever\nfrom langchain.schema import Document\n')),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'retriever = WeaviateHybridSearchRetriever(\n    client=client,\n    index_name="LangChain",\n    text_key="text",\n    attributes=[],\n    create_schema_if_missing=True,\n)\n')),(0,o.kt)("p",null,"Add some data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'docs = [\n    Document(\n        metadata={\n            "title": "Embracing The Future: AI Unveiled",\n            "author": "Dr. Rebecca Simmons",\n        },\n        page_content="A comprehensive analysis of the evolution of artificial intelligence, from its inception to its future prospects. Dr. Simmons covers ethical considerations, potentials, and threats posed by AI.",\n    ),\n    Document(\n        metadata={\n            "title": "Symbiosis: Harmonizing Humans and AI",\n            "author": "Prof. Jonathan K. Sterling",\n        },\n        page_content="Prof. Sterling explores the potential for harmonious coexistence between humans and artificial intelligence. The book discusses how AI can be integrated into society in a beneficial and non-disruptive manner.",\n    ),\n    Document(\n        metadata={"title": "AI: The Ethical Quandary", "author": "Dr. Rebecca Simmons"},\n        page_content="In her second book, Dr. Simmons delves deeper into the ethical considerations surrounding AI development and deployment. It is an eye-opening examination of the dilemmas faced by developers, policymakers, and society at large.",\n    ),\n    Document(\n        metadata={\n            "title": "Conscious Constructs: The Search for AI Sentience",\n            "author": "Dr. Samuel Cortez",\n        },\n        page_content="Dr. Cortez takes readers on a journey exploring the controversial topic of AI consciousness. The book provides compelling arguments for and against the possibility of true AI sentience.",\n    ),\n    Document(\n        metadata={\n            "title": "Invisible Routines: Hidden AI in Everyday Life",\n            "author": "Prof. Jonathan K. Sterling",\n        },\n        page_content="In his follow-up to \'Symbiosis\', Prof. Sterling takes a look at the subtle, unnoticed presence and influence of AI in our everyday lives. It reveals how AI has become woven into our routines, often without our explicit realization.",\n    ),\n]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"retriever.add_documents(docs)\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    ['3a27b0a5-8dbb-4fee-9eba-8b6bc2c252be',\n     'eeb9fd9b-a3ac-4d60-a55b-a63a25d3b907',\n     '7ebbdae7-1061-445f-a046-1989f2343d8f',\n     'c2ab315b-3cab-467f-b23a-b26ed186318d',\n     'b83765f2-e5d2-471f-8c02-c3350ade4c4f']\n"))),(0,o.kt)("p",null,"Do a hybrid search:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'retriever.get_relevant_documents("the ethical implications of AI")\n')),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    [Document(page_content='In her second book, Dr. Simmons delves deeper into the ethical considerations surrounding AI development and deployment. It is an eye-opening examination of the dilemmas faced by developers, policymakers, and society at large.', metadata={}),\n     Document(page_content='A comprehensive analysis of the evolution of artificial intelligence, from its inception to its future prospects. Dr. Simmons covers ethical considerations, potentials, and threats posed by AI.', metadata={}),\n     Document(page_content=\"In his follow-up to 'Symbiosis', Prof. Sterling takes a look at the subtle, unnoticed presence and influence of AI in our everyday lives. It reveals how AI has become woven into our routines, often without our explicit realization.\", metadata={}),\n     Document(page_content='Prof. Sterling explores the potential for harmonious coexistence between humans and artificial intelligence. The book discusses how AI can be integrated into society in a beneficial and non-disruptive manner.', metadata={})]\n"))),(0,o.kt)("p",null,"Do a hybrid search with where filter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'retriever.get_relevant_documents(\n    "AI integration in society",\n    where_filter={\n        "path": ["author"],\n        "operator": "Equal",\n        "valueString": "Prof. Jonathan K. Sterling",\n    },\n)\n')),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    [Document(page_content='Prof. Sterling explores the potential for harmonious coexistence between humans and artificial intelligence. The book discusses how AI can be integrated into society in a beneficial and non-disruptive manner.', metadata={}),\n     Document(page_content=\"In his follow-up to 'Symbiosis', Prof. Sterling takes a look at the subtle, unnoticed presence and influence of AI in our everyday lives. It reveals how AI has become woven into our routines, often without our explicit realization.\", metadata={})]\n"))),(0,o.kt)("p",null,"Do a hybrid search with scores:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'retriever.get_relevant_documents(\n    "AI integration in society",\n    score=True,\n)\n')),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    [Document(page_content='Prof. Sterling explores the potential for harmonious coexistence between humans and artificial intelligence. The book discusses how AI can be integrated into society in a beneficial and non-disruptive manner.', metadata={'_additional': {'explainScore': '(bm25)\\n(hybrid) Document eeb9fd9b-a3ac-4d60-a55b-a63a25d3b907 contributed 0.00819672131147541 to the score\\n(hybrid) Document eeb9fd9b-a3ac-4d60-a55b-a63a25d3b907 contributed 0.00819672131147541 to the score', 'score': '0.016393442'}}),\n     Document(page_content=\"In his follow-up to 'Symbiosis', Prof. Sterling takes a look at the subtle, unnoticed presence and influence of AI in our everyday lives. It reveals how AI has become woven into our routines, often without our explicit realization.\", metadata={'_additional': {'explainScore': '(bm25)\\n(hybrid) Document b83765f2-e5d2-471f-8c02-c3350ade4c4f contributed 0.0078125 to the score\\n(hybrid) Document b83765f2-e5d2-471f-8c02-c3350ade4c4f contributed 0.008064516129032258 to the score', 'score': '0.015877016'}}),\n     Document(page_content='In her second book, Dr. Simmons delves deeper into the ethical considerations surrounding AI development and deployment. It is an eye-opening examination of the dilemmas faced by developers, policymakers, and society at large.', metadata={'_additional': {'explainScore': '(bm25)\\n(hybrid) Document 7ebbdae7-1061-445f-a046-1989f2343d8f contributed 0.008064516129032258 to the score\\n(hybrid) Document 7ebbdae7-1061-445f-a046-1989f2343d8f contributed 0.0078125 to the score', 'score': '0.015877016'}}),\n     Document(page_content='A comprehensive analysis of the evolution of artificial intelligence, from its inception to its future prospects. Dr. Simmons covers ethical considerations, potentials, and threats posed by AI.', metadata={'_additional': {'explainScore': '(vector) [-0.0071824766 -0.0006682752 0.001723625 -0.01897258 -0.0045127636 0.0024410256 -0.020503938 0.013768672 0.009520169 -0.037972264]...  \\n(hybrid) Document 3a27b0a5-8dbb-4fee-9eba-8b6bc2c252be contributed 0.007936507936507936 to the score', 'score': '0.007936508'}})]\n"))))}h.isMDXComponent=!0}}]);
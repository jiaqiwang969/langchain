"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="ChatGPT Plugin",l={unversionedId:"integrations/retrievers/chatgpt-plugin",id:"integrations/retrievers/chatgpt-plugin",title:"ChatGPT Plugin",description:"OpenAI plugins connect ChatGPT to third-party applications. These plugins enable ChatGPT to interact with APIs defined by developers, enhancing ChatGPT's capabilities and allowing it to perform a wide range of actions.",source:"@site/docs/integrations/retrievers/chatgpt-plugin.md",sourceDirName:"integrations/retrievers",slug:"/integrations/retrievers/chatgpt-plugin",permalink:"/langchain/docs/integrations/retrievers/chatgpt-plugin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Chaindesk",permalink:"/langchain/docs/integrations/retrievers/chaindesk"},next:{title:"Cohere Reranker",permalink:"/langchain/docs/integrations/retrievers/cohere-reranker"}},c={},s=[{value:"Using the ChatGPT Retriever Plugin",id:"using-the-chatgpt-retriever-plugin",level:2}],p=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const d={toc:s},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chatgpt-plugin"},"ChatGPT Plugin"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/plugins/introduction"},"OpenAI plugins")," connect ChatGPT to third-party applications. These plugins enable ChatGPT to interact with APIs defined by developers, enhancing ChatGPT's capabilities and allowing it to perform a wide range of actions.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Plugins can allow ChatGPT to do things like:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Retrieve real-time information; e.g., sports scores, stock prices, the latest news, etc."),(0,o.kt)("li",{parentName:"ul"},"Retrieve knowledge-base information; e.g., company docs, personal notes, etc."),(0,o.kt)("li",{parentName:"ul"},"Perform actions on behalf of the user; e.g., booking a flight, ordering food, etc."))),(0,o.kt)("p",null,"This notebook shows how to use the ChatGPT Retriever Plugin within LangChain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "CSVLoader", "source": "langchain.document_loaders.csv_loader", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.csv_loader.CSVLoader.html", "title": "ChatGPT Plugin"}, {"imported": "Document", "source": "langchain.docstore.document", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.document.Document.html", "title": "ChatGPT Plugin"}]--\x3e\n# STEP 1: Load\n\n# Load documents using LangChain\'s DocumentLoaders\n# This is from https://langchain.readthedocs.io/en/latest/modules/document_loaders/examples/csv.html\n\nfrom langchain.document_loaders.csv_loader import CSVLoader\n\nloader = CSVLoader(\n    file_path="../../document_loaders/examples/example_data/mlb_teams_2012.csv"\n)\ndata = loader.load()\n\n\n# STEP 2: Convert\n\n# Convert Document to format expected by https://github.com/openai/chatgpt-retrieval-plugin\nfrom typing import List\nfrom langchain.docstore.document import Document\nimport json\n\n\ndef write_json(path: str, documents: List[Document]) -> None:\n    results = [{"text": doc.page_content} for doc in documents]\n    with open(path, "w") as f:\n        json.dump(results, f, indent=2)\n\n\nwrite_json("foo.json", data)\n\n# STEP 3: Use\n\n# Ingest this as you would any other json file in https://github.com/openai/chatgpt-retrieval-plugin/tree/main/scripts/process_json\n')),(0,o.kt)("h2",{id:"using-the-chatgpt-retriever-plugin"},"Using the ChatGPT Retriever Plugin"),(0,o.kt)("p",null,"Okay, so we've created the ChatGPT Retriever Plugin, but how do we actually use it?"),(0,o.kt)("p",null,"The below code walks through how to do that."),(0,o.kt)("p",null,"We want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatGPTPluginRetriever")," so we have to get the OpenAI API Key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport getpass\n\nos.environ["OPENAI_API_KEY"] = getpass.getpass("OpenAI API Key:")\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    OpenAI API Key: \xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ChatGPTPluginRetriever", "source": "langchain.retrievers", "docs": "https://api.python.langchain.com/en/latest/retrievers/langchain.retrievers.chatgpt_plugin_retriever.ChatGPTPluginRetriever.html", "title": "ChatGPT Plugin"}]--\x3e\nfrom langchain.retrievers import ChatGPTPluginRetriever\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'retriever = ChatGPTPluginRetriever(url="http://0.0.0.0:8000", bearer_token="foo")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'retriever.get_relevant_documents("alice\'s phone number")\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    [Document(page_content=\"This is Alice's phone number: 123-456-7890\", lookup_str='', metadata={'id': '456_0', 'metadata': {'source': 'email', 'source_id': '567', 'url': None, 'created_at': '1609592400.0', 'author': 'Alice', 'document_id': '456'}, 'embedding': None, 'score': 0.925571561}, lookup_index=0),\n     Document(page_content='This is a document about something', lookup_str='', metadata={'id': '123_0', 'metadata': {'source': 'file', 'source_id': 'https://example.com/doc1', 'url': 'https://example.com/doc1', 'created_at': '1609502400.0', 'author': 'Alice', 'document_id': '123'}, 'embedding': None, 'score': 0.6987589}, lookup_index=0),\n     Document(page_content='Team: Angels \"Payroll (millions)\": 154.49 \"Wins\": 89', lookup_str='', metadata={'id': '59c2c0c1-ae3f-4272-a1da-f44a723ea631_0', 'metadata': {'source': None, 'source_id': None, 'url': None, 'created_at': None, 'author': None, 'document_id': '59c2c0c1-ae3f-4272-a1da-f44a723ea631'}, 'embedding': None, 'score': 0.697888613}, lookup_index=0)]\n"))))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},i="Question Answering",s={unversionedId:"use_cases/question_answering/question_answering",id:"use_cases/question_answering/question_answering",title:"Question Answering",description:"Open In Collab",source:"@site/docs/use_cases/question_answering/question_answering.md",sourceDirName:"use_cases/question_answering",slug:"/use_cases/question_answering/",permalink:"/langchain/docs/use_cases/question_answering/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"use_cases",previous:{title:"Use cases",permalink:"/langchain/docs/use_cases"},next:{title:"QA using a Retriever",permalink:"/langchain/docs/use_cases/question_answering/how_to/vector_db_qa"}},l={},p=[{value:"Use case",id:"use-case",level:2},{value:"Overview",id:"overview",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Step 1. Load",id:"step-1-load",level:2},{value:"Go deeper",id:"go-deeper",level:3},{value:"Step 2. Split",id:"step-2-split",level:2},{value:"Go deeper",id:"go-deeper-1",level:3},{value:"Step 3. Store",id:"step-3-store",level:2},{value:"Go deeper",id:"go-deeper-2",level:3},{value:"Step 4. Retrieve",id:"step-4-retrieve",level:2},{value:"Go deeper",id:"go-deeper-3",level:3},{value:"Step 5. Generate",id:"step-5-generate",level:2},{value:"Go deeper",id:"go-deeper-4",level:3},{value:"Choosing LLMs",id:"choosing-llms",level:4},{value:"Customizing the prompt",id:"customizing-the-prompt",level:4},{value:"Return source documents",id:"return-source-documents",level:4},{value:"Return citations",id:"return-citations",level:4},{value:"Customizing retrieved document processing",id:"customizing-retrieved-document-processing",level:4},{value:"Step 6. Chat",id:"step-6-chat",level:2}],c=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const m={toc:p},h="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"question-answering"},"Question Answering"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/langchain-ai/langchain/blob/master/docs/extras/use_cases/question_answering/qa.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Collab"}))),(0,o.kt)("h2",{id:"use-case"},"Use case"),(0,o.kt)("p",null,"Suppose you have some text documents (PDF, blog, Notion pages, etc.) and want to ask questions related to the contents of those documents. LLMs, given their proficiency in understanding text, are a great tool for this."),(0,o.kt)("p",null,"In this walkthrough we'll go over how to build a question-answering over documents application using LLMs. Two very related use cases which we cover elsewhere are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/use_cases/sql"},"QA over structured data")," (e.g., SQL)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/use_cases/code_understanding"},"QA over code")," (e.g., Python)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"intro.png",src:n(2292).Z,width:"1393",height:"697"})),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The pipeline for converting raw unstructured data into a QA chain looks like this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Loading"),": First we need to load our data. Unstructured data can be loaded from many sources. Use the ",(0,o.kt)("a",{parentName:"li",href:"https://integrations.langchain.com/"},"LangChain integration hub")," to browse the full set of loaders.\nEach loader returns data as a LangChain ",(0,o.kt)("a",{parentName:"li",href:"/docs/components/schema/document"},(0,o.kt)("inlineCode",{parentName:"a"},"Document")),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Splitting"),": ",(0,o.kt)("a",{parentName:"li",href:"/docs/modules/data_connection/document_transformers/"},"Text splitters")," break ",(0,o.kt)("inlineCode",{parentName:"li"},"Documents")," into splits of specified size"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Storage"),": Storage (e.g., often a ",(0,o.kt)("a",{parentName:"li",href:"/docs/modules/data_connection/vectorstores/"},"vectorstore"),") will house ",(0,o.kt)("a",{parentName:"li",href:"https://www.pinecone.io/learn/vector-embeddings/"},"and often embed")," the splits"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Retrieval"),": The app retrieves splits from storage (e.g., often ",(0,o.kt)("a",{parentName:"li",href:"https://www.pinecone.io/learn/k-nearest-neighbor/"},"with similar embeddings")," to the input question)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Generation"),": An ",(0,o.kt)("a",{parentName:"li",href:"/docs/modules/model_io/models/llms/"},"LLM")," produces an answer using a prompt that includes the question and the retrieved data"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Conversation")," (Extension): Hold a multi-turn conversation by adding ",(0,o.kt)("a",{parentName:"li",href:"/docs/modules/memory/"},"Memory")," to your QA chain.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"flow.jpeg",src:n(7142).Z,width:"2468",height:"707"})),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"To give you a sneak preview, the above pipeline can be all be wrapped in a single object: ",(0,o.kt)("inlineCode",{parentName:"p"},"VectorstoreIndexCreator"),". Suppose we want a QA app over this ",(0,o.kt)("a",{parentName:"p",href:"https://lilianweng.github.io/posts/2023-06-23-agent/"},"blog post"),". We can create this in a few lines of code. First set environment variables and install packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install openai chromadb\n\n# Set env var OPENAI_API_KEY or load from a .env file\n# import dotenv\n\n# dotenv.load_dotenv()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "WebBaseLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.web_base.WebBaseLoader.html", "title": "Question Answering"}, {"imported": "VectorstoreIndexCreator", "source": "langchain.indexes", "docs": "https://api.python.langchain.com/en/latest/indexes/langchain.indexes.vectorstore.VectorstoreIndexCreator.html", "title": "Question Answering"}]--\x3e\nfrom langchain.document_loaders import WebBaseLoader\nfrom langchain.indexes import VectorstoreIndexCreator\n\nloader = WebBaseLoader("https://lilianweng.github.io/posts/2023-06-23-agent/")\nindex = VectorstoreIndexCreator().from_loaders([loader])\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'index.query("What is Task Decomposition?")\n')),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    ' Task decomposition is a technique used to break down complex tasks into smaller and simpler steps. It can be done using LLM with simple prompting, task-specific instructions, or with human inputs. Tree of Thoughts (Yao et al. 2023) is an extension of Chain of Thought (Wei et al. 2022) which explores multiple reasoning possibilities at each step.'\n"))),(0,o.kt)("p",null,"Ok, but what's going on under the hood, and how could we customize this for our specific use case? For that, let's take a look at how we can construct this pipeline piece by piece."),(0,o.kt)("h2",{id:"step-1-load"},"Step 1. Load"),(0,o.kt)("p",null,"Specify a ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentLoader")," to load in your unstructured data as ",(0,o.kt)("inlineCode",{parentName:"p"},"Documents"),". A ",(0,o.kt)("inlineCode",{parentName:"p"},"Document")," is a piece of text (the ",(0,o.kt)("inlineCode",{parentName:"p"},"page_content"),") and associated metadata."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "WebBaseLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.web_base.WebBaseLoader.html", "title": "Question Answering"}]--\x3e\nfrom langchain.document_loaders import WebBaseLoader\n\nloader = WebBaseLoader("https://lilianweng.github.io/posts/2023-06-23-agent/")\ndata = loader.load()\n')),(0,o.kt)("h3",{id:"go-deeper"},"Go deeper"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Browse the > 120 data loader integrations ",(0,o.kt)("a",{parentName:"li",href:"https://integrations.langchain.com/"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"See further documentation on loaders ",(0,o.kt)("a",{parentName:"li",href:"/docs/modules/data_connection/document_loaders/"},"here"),".")),(0,o.kt)("h2",{id:"step-2-split"},"Step 2. Split"),(0,o.kt)("p",null,"Split the ",(0,o.kt)("inlineCode",{parentName:"p"},"Document")," into chunks for embedding and vector storage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "RecursiveCharacterTextSplitter", "source": "langchain.text_splitter", "docs": "https://api.python.langchain.com/en/latest/text_splitter/langchain.text_splitter.RecursiveCharacterTextSplitter.html", "title": "Question Answering"}]--\x3e\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\n\ntext_splitter = RecursiveCharacterTextSplitter(chunk_size = 500, chunk_overlap = 0)\nall_splits = text_splitter.split_documents(data)\n')),(0,o.kt)("h3",{id:"go-deeper-1"},"Go deeper"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DocumentSplitters")," are just one type of the more generic ",(0,o.kt)("inlineCode",{parentName:"li"},"DocumentTransformers"),", which can all be useful in this preprocessing step."),(0,o.kt)("li",{parentName:"ul"},"See further documentation on transformers ",(0,o.kt)("a",{parentName:"li",href:"/docs/modules/data_connection/document_transformers/"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Context-aware splitters"),' keep the location ("context") of each split in the original ',(0,o.kt)("inlineCode",{parentName:"li"},"Document"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/use_cases/question_answering/how_to/document-context-aware-QA"},"Markdown files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"docs/integrations/document_loaders/source_code"},"Code (py or js)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/integrations/document_loaders/grobid"},"Documents"))))),(0,o.kt)("h2",{id:"step-3-store"},"Step 3. Store"),(0,o.kt)("p",null,"To be able to look up our document splits, we first need to store them where we can later look them up.\nThe most common way to do this is to embed the contents of each document then store the embedding and document in a vector store, with the embedding being used to index the document."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAIEmbeddings", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.openai.OpenAIEmbeddings.html", "title": "Question Answering"}, {"imported": "Chroma", "source": "langchain.vectorstores", "docs": "https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.chroma.Chroma.html", "title": "Question Answering"}]--\x3e\nfrom langchain.embeddings import OpenAIEmbeddings\nfrom langchain.vectorstores import Chroma\n\nvectorstore = Chroma.from_documents(documents=all_splits, embedding=OpenAIEmbeddings())\n')),(0,o.kt)("h3",{id:"go-deeper-2"},"Go deeper"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Browse the > 40 vectorstores integrations ",(0,o.kt)("a",{parentName:"p",href:"https://integrations.langchain.com/"},"here"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"See further documentation on vectorstores ",(0,o.kt)("a",{parentName:"p",href:"/docs/modules/data_connection/vectorstores/"},"here"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Browse the > 30 text embedding integrations ",(0,o.kt)("a",{parentName:"p",href:"https://integrations.langchain.com/"},"here"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"See further documentation on embedding models ",(0,o.kt)("a",{parentName:"p",href:"/docs/modules/data_connection/text_embedding/"},"here"),"."),(0,o.kt)("p",{parentName:"li"},"Here are Steps 1-3:"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"lc.png",src:n(77445).Z,width:"1578",height:"809"})),(0,o.kt)("h2",{id:"step-4-retrieve"},"Step 4. Retrieve"),(0,o.kt)("p",null,"Retrieve relevant splits for any question using ",(0,o.kt)("a",{parentName:"p",href:"https://www.pinecone.io/learn/what-is-similarity-search/"},"similarity search"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'question = "What are the approaches to Task Decomposition?"\ndocs = vectorstore.similarity_search(question)\nlen(docs)\n')),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    4\n"))),(0,o.kt)("h3",{id:"go-deeper-3"},"Go deeper"),(0,o.kt)("p",null,"Vectorstores are commonly used for retrieval, but they are not the only option. For example, SVMs (see thread ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/karpathy/status/1647025230546886658?s=20"},"here"),") can also be used."),(0,o.kt)("p",null,"LangChain ",(0,o.kt)("a",{parentName:"p",href:"/docs/modules/data_connection/retrievers/"},"has many retrievers")," including, but not limited to, vectorstores. All retrievers implement a common method ",(0,o.kt)("inlineCode",{parentName:"p"},"get_relevant_documents()")," (and its asynchronous variant ",(0,o.kt)("inlineCode",{parentName:"p"},"aget_relevant_documents()"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "SVMRetriever", "source": "langchain.retrievers", "docs": "https://api.python.langchain.com/en/latest/retrievers/langchain.retrievers.svm.SVMRetriever.html", "title": "Question Answering"}]--\x3e\nfrom langchain.retrievers import SVMRetriever\n\nsvm_retriever = SVMRetriever.from_documents(all_splits,OpenAIEmbeddings())\ndocs_svm=svm_retriever.get_relevant_documents(question)\nlen(docs_svm)\n')),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    4\n"))),(0,o.kt)("p",null,"Some common ways to improve on vector similarity search include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MultiQueryRetriever")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/modules/data_connection/retrievers/MultiQueryRetriever"},"generates variants of the input question")," to improve retrieval."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Max marginal relevance")," selects for ",(0,o.kt)("a",{parentName:"li",href:"https://www.cs.cmu.edu/~jgc/publication/The_Use_MMR_Diversity_Based_LTMIR_1998.pdf"},"relevance and diversity")," among the retrieved documents."),(0,o.kt)("li",{parentName:"ul"},"Documents can be filtered during retrieval using ",(0,o.kt)("a",{parentName:"li",href:"/docs/use_cases/question_answering/how_to/document-context-aware-QA"},(0,o.kt)("inlineCode",{parentName:"a"},"metadata")," filters"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Question Answering"}, {"imported": "MultiQueryRetriever", "source": "langchain.retrievers.multi_query", "docs": "https://api.python.langchain.com/en/latest/retrievers/langchain.retrievers.multi_query.MultiQueryRetriever.html", "title": "Question Answering"}]--\x3e\nimport logging\n\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.retrievers.multi_query import MultiQueryRetriever\n\nlogging.basicConfig()\nlogging.getLogger(\'langchain.retrievers.multi_query\').setLevel(logging.INFO)\n\nretriever_from_llm = MultiQueryRetriever.from_llm(retriever=vectorstore.as_retriever(),\n                                                  llm=ChatOpenAI(temperature=0))\nunique_docs = retriever_from_llm.get_relevant_documents(query=question)\nlen(unique_docs)\n')),(0,o.kt)("h2",{id:"step-5-generate"},"Step 5. Generate"),(0,o.kt)("p",null,"Distill the retrieved documents into an answer using an LLM/Chat model (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"gpt-3.5-turbo"),") with ",(0,o.kt)("inlineCode",{parentName:"p"},"RetrievalQA")," chain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "RetrievalQA", "source": "langchain.chains", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.retrieval_qa.base.RetrievalQA.html", "title": "Question Answering"}, {"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Question Answering"}]--\x3e\nfrom langchain.chains import RetrievalQA\nfrom langchain.chat_models import ChatOpenAI\n\nllm = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0)\nqa_chain = RetrievalQA.from_chain_type(llm,retriever=vectorstore.as_retriever())\nqa_chain({"query": question})\n')),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    {'query': 'What are the approaches to Task Decomposition?',\n     'result': 'The approaches to task decomposition include:\\n\\n1. Simple prompting: This approach involves using simple prompts or questions to guide the agent in breaking down a task into smaller subgoals. For example, the agent can be prompted with \"Steps for XYZ\" or \"What are the subgoals for achieving XYZ?\" to facilitate task decomposition.\\n\\n2. Task-specific instructions: In this approach, task-specific instructions are provided to the agent to guide the decomposition process. For example, if the task is to write a novel, the agent can be instructed to \"Write a story outline\" as a step in the task decomposition.\\n\\n3. Human inputs: This approach involves incorporating human inputs in the task decomposition process. Humans can provide guidance, feedback, and assistance to the agent in breaking down complex tasks into manageable subgoals.\\n\\nThese approaches aim to enable efficient handling of complex tasks by breaking them down into smaller, more manageable subgoals.'}\n"))),(0,o.kt)("p",null,"Note, you can pass in an ",(0,o.kt)("inlineCode",{parentName:"p"},"LLM")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatModel")," (like we did here) to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RetrievalQA")," chain."),(0,o.kt)("h3",{id:"go-deeper-4"},"Go deeper"),(0,o.kt)("h4",{id:"choosing-llms"},"Choosing LLMs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Browse the > 55 LLM and chat model integrations ",(0,o.kt)("a",{parentName:"li",href:"https://integrations.langchain.com/"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"See further documentation on LLMs and chat models ",(0,o.kt)("a",{parentName:"li",href:"/docs/modules/model_io/models/"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"See a guide on local LLMS ",(0,o.kt)("a",{parentName:"li",href:"/docs/modules/use_cases/question_answering/how_to/local_retrieval_qa"},"here"),".")),(0,o.kt)("h4",{id:"customizing-the-prompt"},"Customizing the prompt"),(0,o.kt)("p",null,"The prompt in ",(0,o.kt)("inlineCode",{parentName:"p"},"RetrievalQA")," chain can be easily customized."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "RetrievalQA", "source": "langchain.chains", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.retrieval_qa.base.RetrievalQA.html", "title": "Question Answering"}, {"imported": "PromptTemplate", "source": "langchain.prompts", "docs": "https://api.python.langchain.com/en/latest/prompts/langchain.prompts.prompt.PromptTemplate.html", "title": "Question Answering"}]--\x3e\nfrom langchain.chains import RetrievalQA\nfrom langchain.prompts import PromptTemplate\n\ntemplate = """Use the following pieces of context to answer the question at the end. \nIf you don\'t know the answer, just say that you don\'t know, don\'t try to make up an answer. \nUse three sentences maximum and keep the answer as concise as possible. \nAlways say "thanks for asking!" at the end of the answer. \n{context}\nQuestion: {question}\nHelpful Answer:"""\nQA_CHAIN_PROMPT = PromptTemplate.from_template(template)\n\nllm = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0)\nqa_chain = RetrievalQA.from_chain_type(\n    llm,\n    retriever=vectorstore.as_retriever(),\n    chain_type_kwargs={"prompt": QA_CHAIN_PROMPT}\n)\nresult = qa_chain({"query": question})\nresult["result"]\n')),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    'The approaches to Task Decomposition are (1) using simple prompting by LLM, (2) using task-specific instructions, and (3) incorporating human inputs. Thanks for asking!'\n"))),(0,o.kt)("p",null,"We can also store and fetch prompts from the LangChain prompt hub."),(0,o.kt)("p",null,"This will work with your ",(0,o.kt)("a",{parentName:"p",href:"https://docs.smith.langchain.com/"},"LangSmith API key"),"."),(0,o.kt)("p",null,"For example, see ",(0,o.kt)("a",{parentName:"p",href:"https://smith.langchain.com/hub/rlm/rag-prompt"},"here")," is a common prompt for RAG."),(0,o.kt)("p",null,"We can load this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install langchainhub\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# RAG prompt\nfrom langchain import hub\nQA_CHAIN_PROMPT_HUB = hub.pull("rlm/rag-prompt")\n\nqa_chain = RetrievalQA.from_chain_type(\n    llm,\n    retriever=vectorstore.as_retriever(),\n    chain_type_kwargs={"prompt": QA_CHAIN_PROMPT_HUB}\n)\nresult = qa_chain({"query": question})\nresult["result"]\n')),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    'The approaches to task decomposition include using LLM with simple prompting, task-specific instructions, and human inputs.'\n"))),(0,o.kt)("h4",{id:"return-source-documents"},"Return source documents"),(0,o.kt)("p",null,"The full set of retrieved documents used for answer distillation can be returned using ",(0,o.kt)("inlineCode",{parentName:"p"},"return_source_documents=True"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "RetrievalQA", "source": "langchain.chains", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.retrieval_qa.base.RetrievalQA.html", "title": "Question Answering"}]--\x3e\nfrom langchain.chains import RetrievalQA\n\nqa_chain = RetrievalQA.from_chain_type(llm,retriever=vectorstore.as_retriever(),\n                                       return_source_documents=True)\nresult = qa_chain({"query": question})\nprint(len(result[\'source_documents\']))\nresult[\'source_documents\'][0]\n')),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    4\n\n\n\n\n\n    Document(page_content='Task decomposition can be done (1) by LLM with simple prompting like \"Steps for XYZ.\\\\n1.\", \"What are the subgoals for achieving XYZ?\", (2) by using task-specific instructions; e.g. \"Write a story outline.\" for writing a novel, or (3) with human inputs.', metadata={'description': 'Building agents with LLM (large language model) as its core controller is a cool concept. Several proof-of-concepts demos, such as AutoGPT, GPT-Engineer and BabyAGI, serve as inspiring examples. The potentiality of LLM extends beyond generating well-written copies, stories, essays and programs; it can be framed as a powerful general problem solver.\\nAgent System Overview In a LLM-powered autonomous agent system, LLM functions as the agent\u2019s brain, complemented by several key components:', 'language': 'en', 'source': 'https://lilianweng.github.io/posts/2023-06-23-agent/', 'title': \"LLM Powered Autonomous Agents | Lil'Log\"})\n"))),(0,o.kt)("h4",{id:"return-citations"},"Return citations"),(0,o.kt)("p",null,"Answer citations can be returned using ",(0,o.kt)("inlineCode",{parentName:"p"},"RetrievalQAWithSourcesChain"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "RetrievalQAWithSourcesChain", "source": "langchain.chains", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.qa_with_sources.retrieval.RetrievalQAWithSourcesChain.html", "title": "Question Answering"}]--\x3e\nfrom langchain.chains import RetrievalQAWithSourcesChain\n\nqa_chain = RetrievalQAWithSourcesChain.from_chain_type(llm,retriever=vectorstore.as_retriever())\n\nresult = qa_chain({"question": question})\nresult\n')),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    {'question': 'What are the approaches to Task Decomposition?',\n     'answer': 'The approaches to Task Decomposition include:\\n1. Using LLM with simple prompting, such as providing steps or subgoals for achieving a task.\\n2. Using task-specific instructions, such as providing a specific instruction like \"Write a story outline\" for writing a novel.\\n3. Using human inputs to decompose the task.\\nAnother approach is the Tree of Thoughts, which extends the Chain of Thought (CoT) technique by exploring multiple reasoning possibilities at each step and generating multiple thoughts per step, creating a tree structure. The search process can be BFS or DFS, and each state can be evaluated by a classifier or majority vote.\\nSources: https://lilianweng.github.io/posts/2023-06-23-agent/',\n     'sources': ''}\n"))),(0,o.kt)("h4",{id:"customizing-retrieved-document-processing"},"Customizing retrieved document processing"),(0,o.kt)("p",null,"Retrieved documents can be fed to an LLM for answer distillation in a few different ways."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"stuff"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"refine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"map-reduce"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"map-rerank")," chains for passing documents to an LLM prompt are well summarized ",(0,o.kt)("a",{parentName:"p",href:"/docs/modules/chains/document/"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"stuff"),' is commonly used because it simply "stuffs" all retrieved documents into the prompt.'),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/use_cases/question_answering/how_to/question_answering.html"},"load_qa_chain")," is an easy way to pass documents to an LLM using these various approaches (e.g., see ",(0,o.kt)("inlineCode",{parentName:"p"},"chain_type"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "load_qa_chain", "source": "langchain.chains.question_answering", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.question_answering.load_qa_chain.html", "title": "Question Answering"}]--\x3e\nfrom langchain.chains.question_answering import load_qa_chain\n\nchain = load_qa_chain(llm, chain_type="stuff")\nchain({"input_documents": unique_docs, "question": question},return_only_outputs=True)\n')),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    {\'output_text\': \'The approaches to task decomposition mentioned in the provided context are:\\n\\n1. Chain of thought (CoT): This approach involves instructing the language model to "think step by step" and decompose complex tasks into smaller and simpler steps. It enhances model performance on complex tasks by utilizing more test-time computation.\\n\\n2. Tree of Thoughts: This approach extends CoT by exploring multiple reasoning possibilities at each step. It decomposes the problem into multiple thought steps and generates multiple thoughts per step, creating a tree structure. The search process can be BFS or DFS, and each state is evaluated by a classifier or majority vote.\\n\\n3. LLM with simple prompting: This approach involves using a language model with simple prompts like "Steps for XYZ" or "What are the subgoals for achieving XYZ?" to perform task decomposition.\\n\\n4. Task-specific instructions: This approach involves providing task-specific instructions to guide the language model in decomposing the task. For example, providing the instruction "Write a story outline" for the task of writing a novel.\\n\\n5. Human inputs: Task decomposition can also be done with human inputs, where humans provide guidance and input to break down the task into smaller subtasks.\'}\n'))),(0,o.kt)("p",null,"We can also pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"chain_type")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"RetrievalQA"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'qa_chain = RetrievalQA.from_chain_type(llm,retriever=vectorstore.as_retriever(),\n                                       chain_type="stuff")\nresult = qa_chain({"query": question})\n')),(0,o.kt)("p",null,"In summary, the user can choose the desired level of abstraction for QA:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"summary_chains.png",src:n(43934).Z,width:"1690",height:"797"})),(0,o.kt)("h2",{id:"step-6-chat"},"Step 6. Chat"),(0,o.kt)("p",null,"See our ",(0,o.kt)("a",{parentName:"p",href:"/docs/use_cases/chatbots"},"use-case on chat")," for detail on this!"))}d.isMDXComponent=!0},77445:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/qa_data_load-70fac3ea6593b986613784dc056df21a.png"},7142:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/qa_flow-9fbd91de9282eb806bda1c6db501ecec.jpeg"},2292:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/qa_intro-9b468dbffe1cbe7f0bd822b28648db9e.png"},43934:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/summary_chains-593fd101c40fe9b151634e5299d02665.png"}}]);
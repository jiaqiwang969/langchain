"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55382],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>g});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=d(t),u=i,g=c["".concat(l,".").concat(u)]||c[u]||p[u]||o;return t?n.createElement(g,s(s({ref:r},m),{},{components:t})):n.createElement(g,s({ref:r},m))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=u;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[c]="string"==typeof e?e:i,s[1]=a;for(var d=2;d<o;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},23030:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=t(87462),i=(t(67294),t(3905));const o={},s="LOTR (Merger Retriever)",a={unversionedId:"integrations/retrievers/merger_retriever",id:"integrations/retrievers/merger_retriever",title:"LOTR (Merger Retriever)",description:"Lord of the Retrievers, also known as MergerRetriever, takes a list of retrievers as input and merges the results of their getrelevantdocuments() methods into a single list. The merged results will be a list of documents that are relevant to the query and that have been ranked by the different retrievers.",source:"@site/docs/integrations/retrievers/merger_retriever.md",sourceDirName:"integrations/retrievers",slug:"/integrations/retrievers/merger_retriever",permalink:"/langchain/docs/integrations/retrievers/merger_retriever",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"kNN",permalink:"/langchain/docs/integrations/retrievers/knn"},next:{title:"Metal",permalink:"/langchain/docs/integrations/retrievers/metal"}},l={},d=[{value:"Remove redundant results from the merged retrievers.",id:"remove-redundant-results-from-the-merged-retrievers",level:2},{value:"Pick a representative sample of documents from the merged retrievers.",id:"pick-a-representative-sample-of-documents-from-the-merged-retrievers",level:2},{value:"Re-order results to avoid performance degradation.",id:"re-order-results-to-avoid-performance-degradation",level:2}],m={toc:d},c="wrapper";function p(e){let{components:r,...t}=e;return(0,i.kt)(c,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lotr-merger-retriever"},"LOTR (Merger Retriever)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Lord of the Retrievers"),", also known as ",(0,i.kt)("inlineCode",{parentName:"p"},"MergerRetriever"),", takes a list of retrievers as input and merges the results of their get_relevant_documents() methods into a single list. The merged results will be a list of documents that are relevant to the query and that have been ranked by the different retrievers."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MergerRetriever")," class can be used to improve the accuracy of document retrieval in a number of ways. First, it can combine the results of multiple retrievers, which can help to reduce the risk of bias in the results. Second, it can rank the results of the different retrievers, which can help to ensure that the most relevant documents are returned first."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "MergerRetriever", "source": "langchain.retrievers.merger_retriever", "docs": "https://api.python.langchain.com/en/latest/retrievers/langchain.retrievers.merger_retriever.MergerRetriever.html", "title": "LOTR (Merger Retriever)"}, {"imported": "Chroma", "source": "langchain.vectorstores", "docs": "https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.chroma.Chroma.html", "title": "LOTR (Merger Retriever)"}, {"imported": "HuggingFaceEmbeddings", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.huggingface.HuggingFaceEmbeddings.html", "title": "LOTR (Merger Retriever)"}, {"imported": "OpenAIEmbeddings", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.openai.OpenAIEmbeddings.html", "title": "LOTR (Merger Retriever)"}, {"imported": "EmbeddingsRedundantFilter", "source": "langchain.document_transformers", "docs": "https://api.python.langchain.com/en/latest/document_transformers/langchain.document_transformers.embeddings_redundant_filter.EmbeddingsRedundantFilter.html", "title": "LOTR (Merger Retriever)"}, {"imported": "EmbeddingsClusteringFilter", "source": "langchain.document_transformers", "docs": "https://api.python.langchain.com/en/latest/document_transformers/langchain.document_transformers.embeddings_redundant_filter.EmbeddingsClusteringFilter.html", "title": "LOTR (Merger Retriever)"}, {"imported": "DocumentCompressorPipeline", "source": "langchain.retrievers.document_compressors", "docs": "https://api.python.langchain.com/en/latest/retrievers/langchain.retrievers.document_compressors.base.DocumentCompressorPipeline.html", "title": "LOTR (Merger Retriever)"}, {"imported": "ContextualCompressionRetriever", "source": "langchain.retrievers", "docs": "https://api.python.langchain.com/en/latest/retrievers/langchain.retrievers.contextual_compression.ContextualCompressionRetriever.html", "title": "LOTR (Merger Retriever)"}]--\x3e\nimport os\nimport chromadb\nfrom langchain.retrievers.merger_retriever import MergerRetriever\nfrom langchain.vectorstores import Chroma\nfrom langchain.embeddings import HuggingFaceEmbeddings\nfrom langchain.embeddings import OpenAIEmbeddings\nfrom langchain.document_transformers import (\n    EmbeddingsRedundantFilter,\n    EmbeddingsClusteringFilter,\n)\nfrom langchain.retrievers.document_compressors import DocumentCompressorPipeline\nfrom langchain.retrievers import ContextualCompressionRetriever\n\n# Get 3 diff embeddings.\nall_mini = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")\nmulti_qa_mini = HuggingFaceEmbeddings(model_name="multi-qa-MiniLM-L6-dot-v1")\nfilter_embeddings = OpenAIEmbeddings()\n\nABS_PATH = os.path.dirname(os.path.abspath(__file__))\nDB_DIR = os.path.join(ABS_PATH, "db")\n\n# Instantiate 2 diff cromadb indexs, each one with a diff embedding.\nclient_settings = chromadb.config.Settings(\n    is_persistent=True,\n    persist_directory=DB_DIR,\n    anonymized_telemetry=False,\n)\ndb_all = Chroma(\n    collection_name="project_store_all",\n    persist_directory=DB_DIR,\n    client_settings=client_settings,\n    embedding_function=all_mini,\n)\ndb_multi_qa = Chroma(\n    collection_name="project_store_multi",\n    persist_directory=DB_DIR,\n    client_settings=client_settings,\n    embedding_function=multi_qa_mini,\n)\n\n# Define 2 diff retrievers with 2 diff embeddings and diff search type.\nretriever_all = db_all.as_retriever(\n    search_type="similarity", search_kwargs={"k": 5, "include_metadata": True}\n)\nretriever_multi_qa = db_multi_qa.as_retriever(\n    search_type="mmr", search_kwargs={"k": 5, "include_metadata": True}\n)\n\n# The Lord of the Retrievers will hold the ouput of boths retrievers and can be used as any other\n# retriever on different types of chains.\nlotr = MergerRetriever(retrievers=[retriever_all, retriever_multi_qa])\n')),(0,i.kt)("h2",{id:"remove-redundant-results-from-the-merged-retrievers"},"Remove redundant results from the merged retrievers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# We can remove redundant results from both retrievers using yet another embedding.\n# Using multiples embeddings in diff steps could help reduce biases.\nfilter = EmbeddingsRedundantFilter(embeddings=filter_embeddings)\npipeline = DocumentCompressorPipeline(transformers=[filter])\ncompression_retriever = ContextualCompressionRetriever(\n    base_compressor=pipeline, base_retriever=lotr\n)\n")),(0,i.kt)("h2",{id:"pick-a-representative-sample-of-documents-from-the-merged-retrievers"},"Pick a representative sample of documents from the merged retrievers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# This filter will divide the documents vectors into clusters or "centers" of meaning.\n# Then it will pick the closest document to that center for the final results.\n# By default the result document will be ordered/grouped by clusters.\nfilter_ordered_cluster = EmbeddingsClusteringFilter(\n    embeddings=filter_embeddings,\n    num_clusters=10,\n    num_closest=1,\n)\n\n# If you want the final document to be ordered by the original retriever scores\n# you need to add the "sorted" parameter.\nfilter_ordered_by_retriever = EmbeddingsClusteringFilter(\n    embeddings=filter_embeddings,\n    num_clusters=10,\n    num_closest=1,\n    sorted=True,\n)\n\npipeline = DocumentCompressorPipeline(transformers=[filter_ordered_by_retriever])\ncompression_retriever = ContextualCompressionRetriever(\n    base_compressor=pipeline, base_retriever=lotr\n)\n')),(0,i.kt)("h2",{id:"re-order-results-to-avoid-performance-degradation"},"Re-order results to avoid performance degradation."),(0,i.kt)("p",null,"No matter the architecture of your model, there is a sustancial performance degradation when you include 10+ retrieved documents.\nIn brief: When models must access relevant information  in the middle of long contexts, then tend to ignore the provided documents.\nSee: ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs//2307.03172"},"https://arxiv.org/abs//2307.03172")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "LongContextReorder", "source": "langchain.document_transformers", "docs": "https://api.python.langchain.com/en/latest/document_transformers/langchain.document_transformers.long_context_reorder.LongContextReorder.html", "title": "LOTR (Merger Retriever)"}]--\x3e\n# You can use an additional document transformer to reorder documents after removing redudance.\nfrom langchain.document_transformers import LongContextReorder\n\nfilter = EmbeddingsRedundantFilter(embeddings=filter_embeddings)\nreordering = LongContextReorder()\npipeline = DocumentCompressorPipeline(transformers=[filter, reordering])\ncompression_retriever_reordered = ContextualCompressionRetriever(\n    base_compressor=pipeline, base_retriever=lotr\n)\n')))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={},i="Neo4j Vector Index",s={unversionedId:"integrations/vectorstores/neo4jvector",id:"integrations/vectorstores/neo4jvector",title:"Neo4j Vector Index",description:"Neo4j is an open-source graph database with integrated support for vector similarity search",source:"@site/docs/integrations/vectorstores/neo4jvector.md",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/neo4jvector",permalink:"/langchain/docs/integrations/vectorstores/neo4jvector",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"MyScale",permalink:"/langchain/docs/integrations/vectorstores/myscale"},next:{title:"nucliadb_vectorstore",permalink:"/langchain/docs/integrations/vectorstores/nucliadb_vectorstore"}},c={},l=[{value:"Similarity Search with Cosine Distance (Default)",id:"similarity-search-with-cosine-distance-default",level:2},{value:"Working with vectorstore",id:"working-with-vectorstore",level:2},{value:"Add documents",id:"add-documents",level:3},{value:"Retriever options",id:"retriever-options",level:3},{value:"Question Answering with Sources",id:"question-answering-with-sources",level:2}],d=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const m={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"neo4j-vector-index"},"Neo4j Vector Index"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://neo4j.com/"},"Neo4j")," is an open-source graph database with integrated support for vector similarity search")),(0,a.kt)("p",null,"It supports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"approximate nearest neighbor search"),(0,a.kt)("li",{parentName:"ul"},"L2 distance and cosine distance")),(0,a.kt)("p",null,"This notebook shows how to use the Neo4j vector index (",(0,a.kt)("inlineCode",{parentName:"p"},"Neo4jVector"),")."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/operations-manual/current/installation/"},"installation instruction"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Pip install necessary package\npip install neo4j\npip install openai\npip install tiktoken\n")),(0,a.kt)(d,{lang:"bash",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Requirement already satisfied: neo4j in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (5.11.0)\n    Requirement already satisfied: pytz in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from neo4j) (2023.3)\n    Requirement already satisfied: openai in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (0.27.6)\n    Requirement already satisfied: requests>=2.20 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from openai) (2.31.0)\n    Requirement already satisfied: tqdm in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from openai) (4.66.1)\n    Requirement already satisfied: aiohttp in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from openai) (3.8.5)\n    Requirement already satisfied: charset-normalizer<4,>=2 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from requests>=2.20->openai) (3.2.0)\n    Requirement already satisfied: idna<4,>=2.5 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from requests>=2.20->openai) (3.4)\n    Requirement already satisfied: urllib3<3,>=1.21.1 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from requests>=2.20->openai) (2.0.4)\n    Requirement already satisfied: certifi>=2017.4.17 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from requests>=2.20->openai) (2023.7.22)\n    Requirement already satisfied: attrs>=17.3.0 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from aiohttp->openai) (23.1.0)\n    Requirement already satisfied: multidict<7.0,>=4.5 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from aiohttp->openai) (6.0.4)\n    Requirement already satisfied: async-timeout<5.0,>=4.0.0a3 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from aiohttp->openai) (4.0.3)\n    Requirement already satisfied: yarl<2.0,>=1.0 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from aiohttp->openai) (1.9.2)\n    Requirement already satisfied: frozenlist>=1.1.1 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from aiohttp->openai) (1.4.0)\n    Requirement already satisfied: aiosignal>=1.1.2 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from aiohttp->openai) (1.3.1)\n    Requirement already satisfied: tiktoken in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (0.4.0)\n    Requirement already satisfied: regex>=2022.1.18 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from tiktoken) (2023.8.8)\n    Requirement already satisfied: requests>=2.26.0 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from tiktoken) (2.31.0)\n    Requirement already satisfied: charset-normalizer<4,>=2 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from requests>=2.26.0->tiktoken) (3.2.0)\n    Requirement already satisfied: idna<4,>=2.5 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from requests>=2.26.0->tiktoken) (3.4)\n    Requirement already satisfied: urllib3<3,>=1.21.1 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from requests>=2.26.0->tiktoken) (2.0.4)\n    Requirement already satisfied: certifi>=2017.4.17 in /home/tomaz/anaconda3/envs/myenv/lib/python3.11/site-packages (from requests>=2.26.0->tiktoken) (2023.7.22)\n"))),(0,a.kt)("p",null,"We want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenAIEmbeddings")," so we have to get the OpenAI API Key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport getpass\n\nos.environ["OPENAI_API_KEY"] = getpass.getpass("OpenAI API Key:")\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    OpenAI API Key: \xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAIEmbeddings", "source": "langchain.embeddings.openai", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.openai.OpenAIEmbeddings.html", "title": "Neo4j Vector Index"}, {"imported": "CharacterTextSplitter", "source": "langchain.text_splitter", "docs": "https://api.python.langchain.com/en/latest/text_splitter/langchain.text_splitter.CharacterTextSplitter.html", "title": "Neo4j Vector Index"}, {"imported": "Neo4jVector", "source": "langchain.vectorstores", "docs": "https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.neo4j_vector.Neo4jVector.html", "title": "Neo4j Vector Index"}, {"imported": "TextLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.text.TextLoader.html", "title": "Neo4j Vector Index"}, {"imported": "Document", "source": "langchain.docstore.document", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.document.Document.html", "title": "Neo4j Vector Index"}]--\x3e\nfrom langchain.embeddings.openai import OpenAIEmbeddings\nfrom langchain.text_splitter import CharacterTextSplitter\nfrom langchain.vectorstores import Neo4jVector\nfrom langchain.document_loaders import TextLoader\nfrom langchain.docstore.document import Document\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'loader = TextLoader("../../../state_of_the_union.txt")\ndocuments = loader.load()\ntext_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)\ndocs = text_splitter.split_documents(documents)\n\nembeddings = OpenAIEmbeddings()\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Neo4jVector requires the Neo4j database credentials\n\nurl = "bolt://localhost:7687"\nusername = "neo4j"\npassword = "pleaseletmein"\n\n# You can also use environment variables instead of directly passing named parameters\n#os.environ["NEO4J_URL"] = "bolt://localhost:7687"\n#os.environ["NEO4J_USERNAME"] = "neo4j"\n#os.environ["NEO4J_PASSWORD"] = "pleaseletmein"\n')),(0,a.kt)("h2",{id:"similarity-search-with-cosine-distance-default"},"Similarity Search with Cosine Distance (Default)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# The Neo4jVector Module will connect to Neo4j and create a vector index if needed.\n\ndb = Neo4jVector.from_documents(\n    docs, OpenAIEmbeddings(), url=url, username=username, password=password\n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'query = "What did the president say about Ketanji Brown Jackson"\ndocs_with_score = db.similarity_search_with_score(query)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'for doc, score in docs_with_score:\n    print("-" * 80)\n    print("Score: ", score)\n    print(doc.page_content)\n    print("-" * 80)\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    --------------------------------------------------------------------------------\n    Score:  0.9077161550521851\n    Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \n    \n    Tonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \n    \n    One of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \n    \n    And I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.\n    --------------------------------------------------------------------------------\n    --------------------------------------------------------------------------------\n    Score:  0.9077161550521851\n    Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \n    \n    Tonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \n    \n    One of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \n    \n    And I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.\n    --------------------------------------------------------------------------------\n    --------------------------------------------------------------------------------\n    Score:  0.891287088394165\n    A former top litigator in private practice. A former federal public defender. And from a family of public school educators and police officers. A consensus builder. Since she\u2019s been nominated, she\u2019s received a broad range of support\u2014from the Fraternal Order of Police to former judges appointed by Democrats and Republicans. \n    \n    And if we are to advance liberty and justice, we need to secure the Border and fix the immigration system. \n    \n    We can do both. At our border, we\u2019ve installed new technology like cutting-edge scanners to better detect drug smuggling.  \n    \n    We\u2019ve set up joint patrols with Mexico and Guatemala to catch more human traffickers.  \n    \n    We\u2019re putting in place dedicated immigration judges so families fleeing persecution and violence can have their cases heard faster. \n    \n    We\u2019re securing commitments and supporting partners in South and Central America to host more refugees and secure their own borders.\n    --------------------------------------------------------------------------------\n    --------------------------------------------------------------------------------\n    Score:  0.891287088394165\n    A former top litigator in private practice. A former federal public defender. And from a family of public school educators and police officers. A consensus builder. Since she\u2019s been nominated, she\u2019s received a broad range of support\u2014from the Fraternal Order of Police to former judges appointed by Democrats and Republicans. \n    \n    And if we are to advance liberty and justice, we need to secure the Border and fix the immigration system. \n    \n    We can do both. At our border, we\u2019ve installed new technology like cutting-edge scanners to better detect drug smuggling.  \n    \n    We\u2019ve set up joint patrols with Mexico and Guatemala to catch more human traffickers.  \n    \n    We\u2019re putting in place dedicated immigration judges so families fleeing persecution and violence can have their cases heard faster. \n    \n    We\u2019re securing commitments and supporting partners in South and Central America to host more refugees and secure their own borders.\n    --------------------------------------------------------------------------------\n"))),(0,a.kt)("h2",{id:"working-with-vectorstore"},"Working with vectorstore"),(0,a.kt)("p",null,"Above, we created a vectorstore from scratch. However, often times we want to work with an existing vectorstore.\nIn order to do that, we can initialize it directly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'index_name = "vector"  # default index name\n\nstore = Neo4jVector.from_existing_index(\n    OpenAIEmbeddings(),\n    url=url,\n    username=username,\n    password=password,\n    index_name=index_name,\n)\n')),(0,a.kt)("h3",{id:"add-documents"},"Add documents"),(0,a.kt)("p",null,"We can add documents to the existing vectorstore."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'store.add_documents([Document(page_content="foo")])\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    ['2f70679a-4416-11ee-b7c3-d46a6aa24f5b']\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'docs_with_score = store.similarity_search_with_score("foo")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"docs_with_score[0]\n")),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    (Document(page_content='foo', metadata={}), 1.0)\n"))),(0,a.kt)("h3",{id:"retriever-options"},"Retriever options"),(0,a.kt)("p",null,"This section shows how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Neo4jVector")," as a retriever."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"retriever = store.as_retriever()\nretriever.get_relevant_documents(query)[0]\n")),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Document(page_content='Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \\n\\nTonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \\n\\nOne of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \\n\\nAnd I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.', metadata={'source': '../../modules/state_of_the_union.txt'})\n"))),(0,a.kt)("h2",{id:"question-answering-with-sources"},"Question Answering with Sources"),(0,a.kt)("p",null,"This section goes over how to do question-answering with sources over an Index. It does this by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"RetrievalQAWithSourcesChain"),", which does the lookup of the documents from an Index. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "RetrievalQAWithSourcesChain", "source": "langchain.chains", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.qa_with_sources.retrieval.RetrievalQAWithSourcesChain.html", "title": "Neo4j Vector Index"}, {"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Neo4j Vector Index"}]--\x3e\nfrom langchain.chains import RetrievalQAWithSourcesChain\nfrom langchain.chat_models import ChatOpenAI\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'chain = RetrievalQAWithSourcesChain.from_chain_type(\n    ChatOpenAI(temperature=0), chain_type="stuff", retriever=retriever\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'chain(\n    {"question": "What did the president say about Justice Breyer"},\n    return_only_outputs=True,\n)\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    {'answer': \"The president honored Justice Stephen Breyer, who is retiring from the United States Supreme Court, and thanked him for his service. The president also mentioned that he nominated Circuit Court of Appeals Judge Ketanji Brown Jackson to continue Justice Breyer's legacy of excellence. \\n\",\n     'sources': '../../modules/state_of_the_union.txt'}\n"))))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73407],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={},o="Vector SQL Retriever with MyScale",s={unversionedId:"use_cases/qa_structured/integrations/myscale_vector_sql",id:"use_cases/qa_structured/integrations/myscale_vector_sql",title:"Vector SQL Retriever with MyScale",description:"MyScale is an integrated vector database. You can access your database in SQL and also from here, LangChain. MyScale can make a use of various data types and functions for filters. It will boost up your LLM app no matter if you are scaling up your data or expand your system to broader application.",source:"@site/docs/use_cases/qa_structured/integrations/myscale_vector_sql.md",sourceDirName:"use_cases/qa_structured/integrations",slug:"/use_cases/qa_structured/integrations/myscale_vector_sql",permalink:"/langchain/docs/use_cases/qa_structured/integrations/myscale_vector_sql",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"use_cases",previous:{title:"Elasticsearch",permalink:"/langchain/docs/use_cases/qa_structured/integrations/elasticsearch"},next:{title:"Interacting with APIs",permalink:"/langchain/docs/use_cases/apis"}},c={},l=[{value:"SQL Database as Retriever",id:"sql-database-as-retriever",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vector-sql-retriever-with-myscale"},"Vector SQL Retriever with MyScale"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://docs.myscale.com/en/"},"MyScale")," is an integrated vector database. You can access your database in SQL and also from here, LangChain. MyScale can make a use of ",(0,r.kt)("a",{parentName:"p",href:"https://blog.myscale.com/2023/06/06/why-integrated-database-solution-can-boost-your-llm-apps/#filter-on-anything-without-constraints"},"various data types and functions for filters"),". It will boost up your LLM app no matter if you are scaling up your data or expand your system to broader application.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install clickhouse-sqlalchemy InstructorEmbedding sentence_transformers openai langchain-experimental\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from os import environ\nimport getpass\nfrom typing import Dict, Any\nfrom langchain import OpenAI, SQLDatabase, LLMChain\nfrom langchain_experimental.sql.vector_sql import VectorSQLDatabaseChain\nfrom sqlalchemy import create_engine, Column, MetaData\nfrom langchain import PromptTemplate\n\n\nfrom sqlalchemy import create_engine\n\nMYSCALE_HOST = "msc-1decbcc9.us-east-1.aws.staging.myscale.cloud"\nMYSCALE_PORT = 443\nMYSCALE_USER = "chatdata"\nMYSCALE_PASSWORD = "myscale_rocks"\nOPENAI_API_KEY = getpass.getpass("OpenAI API Key:")\n\nengine = create_engine(\n    f"clickhouse://{MYSCALE_USER}:{MYSCALE_PASSWORD}@{MYSCALE_HOST}:{MYSCALE_PORT}/default?protocol=https"\n)\nmetadata = MetaData(bind=engine)\nenviron["OPENAI_API_KEY"] = OPENAI_API_KEY\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "HuggingFaceInstructEmbeddings", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.huggingface.HuggingFaceInstructEmbeddings.html", "title": "Vector SQL Retriever with MyScale"}]--\x3e\nfrom langchain.embeddings import HuggingFaceInstructEmbeddings\nfrom langchain_experimental.sql.vector_sql import VectorSQLOutputParser\n\noutput_parser = VectorSQLOutputParser.from_embeddings(\n    model=HuggingFaceInstructEmbeddings(\n        model_name="hkunlp/instructor-xl", model_kwargs={"device": "cpu"}\n    )\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openai.OpenAI.html", "title": "Vector SQL Retriever with MyScale"}, {"imported": "StdOutCallbackHandler", "source": "langchain.callbacks", "docs": "https://api.python.langchain.com/en/latest/callbacks/langchain.callbacks.stdout.StdOutCallbackHandler.html", "title": "Vector SQL Retriever with MyScale"}, {"imported": "SQLDatabase", "source": "langchain.utilities.sql_database", "docs": "https://api.python.langchain.com/en/latest/utilities/langchain.utilities.sql_database.SQLDatabase.html", "title": "Vector SQL Retriever with MyScale"}]--\x3e\nfrom langchain.llms import OpenAI\nfrom langchain.callbacks import StdOutCallbackHandler\n\nfrom langchain.utilities.sql_database import SQLDatabase\nfrom langchain_experimental.sql.prompt import MYSCALE_PROMPT\nfrom langchain_experimental.sql.vector_sql import VectorSQLDatabaseChain\n\nchain = VectorSQLDatabaseChain(\n    llm_chain=LLMChain(\n        llm=OpenAI(openai_api_key=OPENAI_API_KEY, temperature=0),\n        prompt=MYSCALE_PROMPT,\n    ),\n    top_k=10,\n    return_direct=True,\n    sql_cmd_parser=output_parser,\n    database=SQLDatabase(engine, None, metadata),\n)\n\nimport pandas as pd\n\npd.DataFrame(\n    chain.run(\n        "Please give me 10 papers to ask what is PageRank?",\n        callbacks=[StdOutCallbackHandler()],\n    )\n)\n')),(0,r.kt)("h2",{id:"sql-database-as-retriever"},"SQL Database as Retriever"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Vector SQL Retriever with MyScale"}, {"imported": "RetrievalQAWithSourcesChain", "source": "langchain.chains.qa_with_sources.retrieval", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.qa_with_sources.retrieval.RetrievalQAWithSourcesChain.html", "title": "Vector SQL Retriever with MyScale"}]--\x3e\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.chains.qa_with_sources.retrieval import RetrievalQAWithSourcesChain\n\nfrom langchain_experimental.sql.vector_sql import VectorSQLDatabaseChain\nfrom langchain_experimental.retrievers.vector_sql_database \\\n    import VectorSQLDatabaseChainRetriever\nfrom langchain_experimental.sql.prompt import MYSCALE_PROMPT\nfrom langchain_experimental.sql.vector_sql import VectorSQLRetrieveAllOutputParser\n\noutput_parser_retrieve_all = VectorSQLRetrieveAllOutputParser.from_embeddings(\n    output_parser.model\n)\n\nchain = VectorSQLDatabaseChain.from_llm(\n    llm=OpenAI(openai_api_key=OPENAI_API_KEY, temperature=0),\n    prompt=MYSCALE_PROMPT,\n    top_k=10,\n    return_direct=True,\n    db=SQLDatabase(engine, None, metadata),\n    sql_cmd_parser=output_parser_retrieve_all,\n    native_format=True,\n)\n\n# You need all those keys to get docs\nretriever = VectorSQLDatabaseChainRetriever(sql_db_chain=chain, page_content_key="abstract")\n\ndocument_with_metadata_prompt = PromptTemplate(\n    input_variables=["page_content", "id", "title", "authors", "pubdate", "categories"],\n    template="Content:\\n\\tTitle: {title}\\n\\tAbstract: {page_content}\\n\\tAuthors: {authors}\\n\\tDate of Publication: {pubdate}\\n\\tCategories: {categories}\\nSOURCE: {id}",\n)\n\nchain = RetrievalQAWithSourcesChain.from_chain_type(\n    ChatOpenAI(\n        model_name="gpt-3.5-turbo-16k", openai_api_key=OPENAI_API_KEY, temperature=0.6\n    ),\n    retriever=retriever,\n    chain_type="stuff",\n    chain_type_kwargs={\n        "document_prompt": document_with_metadata_prompt,\n    },\n    return_source_documents=True,\n)\nans = chain("Please give me 10 papers to ask what is PageRank?",\n            callbacks=[StdOutCallbackHandler()])\nprint(ans["answer"])\n')))}u.isMDXComponent=!0}}]);
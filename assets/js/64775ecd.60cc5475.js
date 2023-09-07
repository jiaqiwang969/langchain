"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66031],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,m=u["".concat(c,".").concat(p)]||u[p]||h[p]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="Azure Cognitive Search",s={unversionedId:"integrations/vectorstores/azuresearch",id:"integrations/vectorstores/azuresearch",title:"Azure Cognitive Search",description:"Azure Cognitive Search (formerly known as Azure Search) is a cloud search service that gives developers infrastructure, APIs, and tools for building a rich search experience over private, heterogeneous content in web, mobile, and enterprise applications.",source:"@site/docs/integrations/vectorstores/azuresearch.md",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/azuresearch",permalink:"/langchain/docs/integrations/vectorstores/azuresearch",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"AwaDB",permalink:"/langchain/docs/integrations/vectorstores/awadb"},next:{title:"BagelDB",permalink:"/langchain/docs/integrations/vectorstores/bageldb"}},c={},l=[{value:"Import required libraries",id:"import-required-libraries",level:2},{value:"Configure OpenAI settings",id:"configure-openai-settings",level:2},{value:"Configure vector store settings",id:"configure-vector-store-settings",level:2},{value:"Create embeddings and vector store instances",id:"create-embeddings-and-vector-store-instances",level:2},{value:"Insert text and embeddings into vector store",id:"insert-text-and-embeddings-into-vector-store",level:2},{value:"Perform a vector similarity search",id:"perform-a-vector-similarity-search",level:2},{value:"Perform a vector similarity search with relevance scores",id:"perform-a-vector-similarity-search-with-relevance-scores",level:2},{value:"Perform a Hybrid Search",id:"perform-a-hybrid-search",level:2}],d=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const h={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"azure-cognitive-search"},"Azure Cognitive Search"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/search/search-what-is-azure-search"},"Azure Cognitive Search")," (formerly known as ",(0,a.kt)("inlineCode",{parentName:"p"},"Azure Search"),") is a cloud search service that gives developers infrastructure, APIs, and tools for building a rich search experience over private, heterogeneous content in web, mobile, and enterprise applications."),(0,a.kt)("p",null,"Vector search is currently in public preview. It's available through the Azure portal, preview REST API and beta client libraries. ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/search/vector-search-overview"},"More info")," Beta client libraries are subject to potential breaking changes, please be sure to use the SDK package version identified below. azure-search-documents==11.4.0b8"),(0,a.kt)("h1",{id:"install-azure-cognitive-search-sdk"},"Install Azure Cognitive Search SDK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install azure-search-documents==11.4.0b8\npip install azure-identity\n")),(0,a.kt)("h2",{id:"import-required-libraries"},"Import required libraries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAIEmbeddings", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.openai.OpenAIEmbeddings.html", "title": "Azure Cognitive Search"}, {"imported": "AzureSearch", "source": "langchain.vectorstores.azuresearch", "docs": "https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.azuresearch.AzureSearch.html", "title": "Azure Cognitive Search"}]--\x3e\nimport openai\nimport os\nfrom langchain.embeddings import OpenAIEmbeddings\nfrom langchain.vectorstores.azuresearch import AzureSearch\n')),(0,a.kt)("h2",{id:"configure-openai-settings"},"Configure OpenAI settings"),(0,a.kt)("p",null,"Configure the OpenAI settings to use Azure OpenAI or OpenAI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'os.environ["OPENAI_API_TYPE"] = "azure"\nos.environ["OPENAI_API_BASE"] = "YOUR_OPENAI_ENDPOINT"\nos.environ["OPENAI_API_KEY"] = "YOUR_OPENAI_API_KEY"\nos.environ["OPENAI_API_VERSION"] = "2023-05-15"\nmodel: str = "text-embedding-ada-002"\n')),(0,a.kt)("h2",{id:"configure-vector-store-settings"},"Configure vector store settings"),(0,a.kt)("p",null,"Set up the vector store settings using environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'vector_store_address: str = "YOUR_AZURE_SEARCH_ENDPOINT"\nvector_store_password: str = "YOUR_AZURE_SEARCH_ADMIN_KEY"\n')),(0,a.kt)("h2",{id:"create-embeddings-and-vector-store-instances"},"Create embeddings and vector store instances"),(0,a.kt)("p",null,"Create instances of the OpenAIEmbeddings and AzureSearch classes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'embeddings: OpenAIEmbeddings = OpenAIEmbeddings(deployment=model, chunk_size=1)\nindex_name: str = "langchain-vector-demo"\nvector_store: AzureSearch = AzureSearch(\n    azure_search_endpoint=vector_store_address,\n    azure_search_key=vector_store_password,\n    index_name=index_name,\n    embedding_function=embeddings.embed_query,\n)\n')),(0,a.kt)("h2",{id:"insert-text-and-embeddings-into-vector-store"},"Insert text and embeddings into vector store"),(0,a.kt)("p",null,"Add texts and metadata from the JSON data to the vector store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "TextLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.text.TextLoader.html", "title": "Azure Cognitive Search"}, {"imported": "CharacterTextSplitter", "source": "langchain.text_splitter", "docs": "https://api.python.langchain.com/en/latest/text_splitter/langchain.text_splitter.CharacterTextSplitter.html", "title": "Azure Cognitive Search"}]--\x3e\nfrom langchain.document_loaders import TextLoader\nfrom langchain.text_splitter import CharacterTextSplitter\n\nloader = TextLoader("../../../state_of_the_union.txt", encoding="utf-8")\n\ndocuments = loader.load()\ntext_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)\ndocs = text_splitter.split_documents(documents)\n\nvector_store.add_documents(documents=docs)\n')),(0,a.kt)("h2",{id:"perform-a-vector-similarity-search"},"Perform a vector similarity search"),(0,a.kt)("p",null,"Execute a pure vector similarity search using the similarity_search() method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Perform a similarity search\ndocs = vector_store.similarity_search(\n    query="What did the president say about Ketanji Brown Jackson",\n    k=3,\n    search_type="similarity",\n)\nprint(docs[0].page_content)\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \n    \n    Tonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \n    \n    One of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \n    \n    And I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.\n"))),(0,a.kt)("h2",{id:"perform-a-vector-similarity-search-with-relevance-scores"},"Perform a vector similarity search with relevance scores"),(0,a.kt)("p",null,"Execute a pure vector similarity search using the similarity_search_with_relevance_scores() method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'docs_and_scores = vector_store.similarity_search_with_relevance_scores(query="What did the president say about Ketanji Brown Jackson", k=4, score_threshold=0.80)\nfrom pprint import pprint\npprint(docs_and_scores)\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [(Document(page_content='Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \\n\\nTonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \\n\\nOne of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \\n\\nAnd I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.', metadata={'source': 'C:\\\\repos\\\\langchain-fruocco-acs\\\\langchain\\\\docs\\\\extras\\\\modules\\\\state_of_the_union.txt'}),\n      0.8441472),\n     (Document(page_content='Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \\n\\nTonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \\n\\nOne of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \\n\\nAnd I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.', metadata={'source': 'C:\\\\repos\\\\langchain-fruocco-acs\\\\langchain\\\\docs\\\\extras\\\\modules\\\\state_of_the_union.txt'}),\n      0.8441472),\n     (Document(page_content='A former top litigator in private practice. A former federal public defender. And from a family of public school educators and police officers. A consensus builder. Since she\u2019s been nominated, she\u2019s received a broad range of support\u2014from the Fraternal Order of Police to former judges appointed by Democrats and Republicans. \\n\\nAnd if we are to advance liberty and justice, we need to secure the Border and fix the immigration system. \\n\\nWe can do both. At our border, we\u2019ve installed new technology like cutting-edge scanners to better detect drug smuggling.  \\n\\nWe\u2019ve set up joint patrols with Mexico and Guatemala to catch more human traffickers.  \\n\\nWe\u2019re putting in place dedicated immigration judges so families fleeing persecution and violence can have their cases heard faster. \\n\\nWe\u2019re securing commitments and supporting partners in South and Central America to host more refugees and secure their own borders.', metadata={'source': 'C:\\\\repos\\\\langchain-fruocco-acs\\\\langchain\\\\docs\\\\extras\\\\modules\\\\state_of_the_union.txt'}),\n      0.82153815),\n     (Document(page_content='A former top litigator in private practice. A former federal public defender. And from a family of public school educators and police officers. A consensus builder. Since she\u2019s been nominated, she\u2019s received a broad range of support\u2014from the Fraternal Order of Police to former judges appointed by Democrats and Republicans. \\n\\nAnd if we are to advance liberty and justice, we need to secure the Border and fix the immigration system. \\n\\nWe can do both. At our border, we\u2019ve installed new technology like cutting-edge scanners to better detect drug smuggling.  \\n\\nWe\u2019ve set up joint patrols with Mexico and Guatemala to catch more human traffickers.  \\n\\nWe\u2019re putting in place dedicated immigration judges so families fleeing persecution and violence can have their cases heard faster. \\n\\nWe\u2019re securing commitments and supporting partners in South and Central America to host more refugees and secure their own borders.', metadata={'source': 'C:\\\\repos\\\\langchain-fruocco-acs\\\\langchain\\\\docs\\\\extras\\\\modules\\\\state_of_the_union.txt'}),\n      0.82153815)]\n"))),(0,a.kt)("h2",{id:"perform-a-hybrid-search"},"Perform a Hybrid Search"),(0,a.kt)("p",null,"Execute hybrid search using the search_type or hybrid_search() method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Perform a hybrid search\ndocs = vector_store.similarity_search(\n    query="What did the president say about Ketanji Brown Jackson",\n    k=3, \n    search_type="hybrid"\n)\nprint(docs[0].page_content)\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \n    \n    Tonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \n    \n    One of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \n    \n    And I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Perform a hybrid search\ndocs = vector_store.hybrid_search(\n    query="What did the president say about Ketanji Brown Jackson", \n    k=3\n)\nprint(docs[0].page_content)\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \n    \n    Tonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \n    \n    One of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \n    \n    And I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.\n"))),(0,a.kt)("h1",{id:"create-a-new-index-with-custom-filterable-fields"},"Create a new index with custom filterable fields"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from azure.search.documents.indexes.models import (\n    SearchableField,\n    SearchField,\n    SearchFieldDataType,\n    SimpleField,\n    ScoringProfile,\n    TextWeights,\n)\n\nembeddings: OpenAIEmbeddings = OpenAIEmbeddings(deployment=model, chunk_size=1)\nembedding_function = embeddings.embed_query\n\nfields = [\n    SimpleField(\n        name="id",\n        type=SearchFieldDataType.String,\n        key=True,\n        filterable=True,\n    ),\n    SearchableField(\n        name="content",\n        type=SearchFieldDataType.String,\n        searchable=True,\n    ),\n    SearchField(\n        name="content_vector",\n        type=SearchFieldDataType.Collection(SearchFieldDataType.Single),\n        searchable=True,\n        vector_search_dimensions=len(embedding_function("Text")),\n        vector_search_configuration="default",\n    ),\n    SearchableField(\n        name="metadata",\n        type=SearchFieldDataType.String,\n        searchable=True,\n    ),\n    # Additional field to store the title\n    SearchableField(\n        name="title",\n        type=SearchFieldDataType.String,\n        searchable=True,\n    ),\n    # Additional field for filtering on document source\n    SimpleField(\n        name="source",\n        type=SearchFieldDataType.String,\n        filterable=True,\n    ),\n]\n\nindex_name: str = "langchain-vector-demo-custom"\n\nvector_store: AzureSearch = AzureSearch(\n    azure_search_endpoint=vector_store_address,\n    azure_search_key=vector_store_password,\n    index_name=index_name,\n    embedding_function=embedding_function,\n    fields=fields,\n)\n')),(0,a.kt)("h1",{id:"perform-a-query-with-a-custom-filter"},"Perform a query with a custom filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Data in the metadata dictionary with a corresponding field in the index will be added to the index\n# In this example, the metadata dictionary contains a title, a source and a random field\n# The title and the source will be added to the index as separate fields, but the random won\'t. (as it is not defined in the fields list)\n# The random field will be only stored in the metadata field\nvector_store.add_texts(\n    ["Test 1", "Test 2", "Test 3"],\n    [\n        {"title": "Title 1", "source": "A", "random": "10290"},\n        {"title": "Title 2", "source": "A", "random": "48392"},\n        {"title": "Title 3", "source": "B", "random": "32893"},\n    ],\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'res = vector_store.similarity_search(query="Test 3 source1", k=3, search_type="hybrid")\nres\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [Document(page_content='Test 3', metadata={'title': 'Title 3', 'source': 'B', 'random': '32893'}),\n     Document(page_content='Test 1', metadata={'title': 'Title 1', 'source': 'A', 'random': '10290'}),\n     Document(page_content='Test 2', metadata={'title': 'Title 2', 'source': 'A', 'random': '48392'})]\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'res = vector_store.similarity_search(query="Test 3 source1", k=3, search_type="hybrid", filters="source eq \'A\'")\nres\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [Document(page_content='Test 1', metadata={'title': 'Title 1', 'source': 'A', 'random': '10290'}),\n     Document(page_content='Test 2', metadata={'title': 'Title 2', 'source': 'A', 'random': '48392'})]\n"))),(0,a.kt)("h1",{id:"create-a-new-index-with-a-scoring-profile"},"Create a new index with a Scoring Profile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from azure.search.documents.indexes.models import (\n    SearchableField,\n    SearchField,\n    SearchFieldDataType,\n    SimpleField,\n    ScoringProfile,\n    TextWeights,\n    ScoringFunction,\n    FreshnessScoringFunction,\n    FreshnessScoringParameters\n)\n\nembeddings: OpenAIEmbeddings = OpenAIEmbeddings(deployment=model, chunk_size=1)\nembedding_function = embeddings.embed_query\n\nfields = [\n    SimpleField(\n        name="id",\n        type=SearchFieldDataType.String,\n        key=True,\n        filterable=True,\n    ),\n    SearchableField(\n        name="content",\n        type=SearchFieldDataType.String,\n        searchable=True,\n    ),\n    SearchField(\n        name="content_vector",\n        type=SearchFieldDataType.Collection(SearchFieldDataType.Single),\n        searchable=True,\n        vector_search_dimensions=len(embedding_function("Text")),\n        vector_search_configuration="default",\n    ),\n    SearchableField(\n        name="metadata",\n        type=SearchFieldDataType.String,\n        searchable=True,\n    ),\n    # Additional field to store the title\n    SearchableField(\n        name="title",\n        type=SearchFieldDataType.String,\n        searchable=True,\n    ),\n    # Additional field for filtering on document source\n    SimpleField(\n        name="source",\n        type=SearchFieldDataType.String,\n        filterable=True,\n    ),\n    # Additional data field for last doc update\n    SimpleField(\n        name="last_update",\n        type=SearchFieldDataType.DateTimeOffset,\n        searchable=True,\n        filterable=True\n    )\n]\n# Adding a custom scoring profile with a freshness function\nsc_name = "scoring_profile"\nsc = ScoringProfile(\n    name=sc_name,\n    text_weights=TextWeights(weights={"title": 5}),\n    function_aggregation="sum",\n    functions=[\n        FreshnessScoringFunction(\n            field_name="last_update",\n            boost=100,\n            parameters=FreshnessScoringParameters(boosting_duration="P2D"),\n            interpolation="linear"\n        )\n    ]\n)\n\nindex_name = "langchain-vector-demo-custom-scoring-profile"\n\nvector_store: AzureSearch = AzureSearch(\n    azure_search_endpoint=vector_store_address,\n    azure_search_key=vector_store_password,\n    index_name=index_name,\n    embedding_function=embeddings.embed_query,\n    fields=fields,\n    scoring_profiles = [sc],\n    default_scoring_profile = sc_name\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Adding same data with different last_update to show Scoring Profile effect\nfrom datetime import datetime, timedelta\n\ntoday = datetime.utcnow().strftime(\'%Y-%m-%dT%H:%M:%S-00:00\')\nyesterday = (datetime.utcnow() - timedelta(days=1)).strftime(\'%Y-%m-%dT%H:%M:%S-00:00\')\none_month_ago = (datetime.utcnow() - timedelta(days=30)).strftime(\'%Y-%m-%dT%H:%M:%S-00:00\')\n\nvector_store.add_texts(\n    ["Test 1", "Test 1", "Test 1"],\n    [\n        {"title": "Title 1", "source": "source1", "random": "10290", "last_update": today},\n        {"title": "Title 1", "source": "source1", "random": "48392", "last_update": yesterday},\n        {"title": "Title 1", "source": "source1", "random": "32893", "last_update": one_month_ago},\n    ],\n)\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    ['NjQyNTI5ZmMtNmVkYS00Njg5LTk2ZDgtMjM3OTY4NTJkYzFj',\n     'M2M0MGExZjAtMjhiZC00ZDkwLThmMTgtODNlN2Y2ZDVkMTMw',\n     'ZmFhMDE1NzMtMjZjNS00MTFiLTk0MTEtNGRkYjgwYWQwOTI0']\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'res = vector_store.similarity_search(query="Test 1", k=3, search_type="similarity")\nres\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [Document(page_content='Test 1', metadata={'title': 'Title 1', 'source': 'source1', 'random': '10290', 'last_update': '2023-07-13T10:47:39-00:00'}),\n     Document(page_content='Test 1', metadata={'title': 'Title 1', 'source': 'source1', 'random': '48392', 'last_update': '2023-07-12T10:47:39-00:00'}),\n     Document(page_content='Test 1', metadata={'title': 'Title 1', 'source': 'source1', 'random': '32893', 'last_update': '2023-06-13T10:47:39-00:00'})]\n"))))}m.isMDXComponent=!0}}]);
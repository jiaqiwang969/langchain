"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23401],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),o=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=o(r),h=n,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return r?a.createElement(m,s(s({ref:t},d),{},{components:r})):a.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var o=2;o<i;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},56054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const i={},s="Elasticsearch",l={unversionedId:"integrations/providers/elasticsearch",id:"integrations/providers/elasticsearch",title:"Elasticsearch",description:"Elasticsearch is a distributed, RESTful search and analytics engine.",source:"@site/docs/integrations/providers/elasticsearch.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/elasticsearch",permalink:"/langchain/docs/integrations/providers/elasticsearch",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"DuckDB",permalink:"/langchain/docs/integrations/providers/duckdb"},next:{title:"Epsilla",permalink:"/langchain/docs/integrations/providers/epsilla"}},c={},o=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Install Elasticsearch on your local machine via docker",id:"install-elasticsearch-on-your-local-machine-via-docker",level:4},{value:"Deploy Elasticsearch on Elastic Cloud",id:"deploy-elasticsearch-on-elastic-cloud",level:4},{value:"Install Client",id:"install-client",level:3},{value:"Vector Store",id:"vector-store",level:2}],d={toc:o},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"elasticsearch"},"Elasticsearch"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/elasticsearch/"},"Elasticsearch")," is a distributed, RESTful search and analytics engine.\nIt provides a distributed, multi-tenant-capable full-text search engine with an HTTP web interface and schema-free\nJSON documents.")),(0,n.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,n.kt)("p",null,"There are two ways to get started with Elasticsearch:"),(0,n.kt)("h4",{id:"install-elasticsearch-on-your-local-machine-via-docker"},"Install Elasticsearch on your local machine via docker"),(0,n.kt)("p",null,"Example: Run a single-node Elasticsearch instance with security disabled. This is not recommended for production use."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'    docker run -p 9200:9200 -e "discovery.type=single-node" -e "xpack.security.enabled=false" -e "xpack.security.http.ssl.enabled=false" docker.elastic.co/elasticsearch/elasticsearch:8.9.0\n')),(0,n.kt)("h4",{id:"deploy-elasticsearch-on-elastic-cloud"},"Deploy Elasticsearch on Elastic Cloud"),(0,n.kt)("p",null,"Elastic Cloud is a managed Elasticsearch service. Signup for a ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.elastic.co/registration?storm=langchain-notebook"},"free trial"),"."),(0,n.kt)("h3",{id:"install-client"},"Install Client"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip install elasticsearch\n")),(0,n.kt)("h2",{id:"vector-store"},"Vector Store"),(0,n.kt)("p",null,"The vector store is a simple wrapper around Elasticsearch. It provides a simple interface to store and retrieve vectors."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.vectorstores import ElasticsearchStore\n\nfrom langchain.document_loaders import TextLoader\nfrom langchain.text_splitter import CharacterTextSplitter\n\nloader = TextLoader("./state_of_the_union.txt")\ndocuments = loader.load()\ntext_splitter = CharacterTextSplitter(chunk_size=500, chunk_overlap=0)\ndocs = text_splitter.split_documents(documents)\n\nembeddings = OpenAIEmbeddings()\n\ndb = ElasticsearchStore.from_documents(\n    docs, embeddings, es_url="http://localhost:9200", index_name="test-basic",\n)\n\ndb.client.indices.refresh(index="test-basic")\n\nquery = "What did the president say about Ketanji Brown Jackson"\nresults = db.similarity_search(query)\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9996],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58366:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},s="Atlas",i={unversionedId:"integrations/vectorstores/atlas",id:"integrations/vectorstores/atlas",title:"Atlas",description:"Atlas is a platform by Nomic made for interacting with both small and internet scale unstructured datasets. It enables anyone to visualize, search, and share massive datasets in their browser.",source:"@site/docs/integrations/vectorstores/atlas.md",sourceDirName:"integrations/vectorstores",slug:"/integrations/vectorstores/atlas",permalink:"/langchain/docs/integrations/vectorstores/atlas",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Annoy",permalink:"/langchain/docs/integrations/vectorstores/annoy"},next:{title:"AwaDB",permalink:"/langchain/docs/integrations/vectorstores/awadb"}},l={},c=[{value:"Load Packages",id:"load-packages",level:3},{value:"Prepare the Data",id:"prepare-the-data",level:3},{value:"Map the Data using Nomic&#39;s Atlas",id:"map-the-data-using-nomics-atlas",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"atlas"},"Atlas"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://docs.nomic.ai/index.html"},"Atlas")," is a platform by Nomic made for interacting with both small and internet scale unstructured datasets. It enables anyone to visualize, search, and share massive datasets in their browser.")),(0,r.kt)("p",null,"This notebook shows you how to use functionality related to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AtlasDB")," vectorstore."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install spacy\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m spacy download en_core_web_sm\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install nomic\n")),(0,r.kt)("h3",{id:"load-packages"},"Load Packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAIEmbeddings", "source": "langchain.embeddings.openai", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.openai.OpenAIEmbeddings.html", "title": "Atlas"}, {"imported": "SpacyTextSplitter", "source": "langchain.text_splitter", "docs": "https://api.python.langchain.com/en/latest/text_splitter/langchain.text_splitter.SpacyTextSplitter.html", "title": "Atlas"}, {"imported": "AtlasDB", "source": "langchain.vectorstores", "docs": "https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.atlas.AtlasDB.html", "title": "Atlas"}, {"imported": "TextLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.text.TextLoader.html", "title": "Atlas"}]--\x3e\nimport time\nfrom langchain.embeddings.openai import OpenAIEmbeddings\nfrom langchain.text_splitter import SpacyTextSplitter\nfrom langchain.vectorstores import AtlasDB\nfrom langchain.document_loaders import TextLoader\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'ATLAS_TEST_API_KEY = "7xDPkYXSYDc1_ErdTPIcoAR9RNd8YDlkS3nVNXcVoIMZ6"\n')),(0,r.kt)("h3",{id:"prepare-the-data"},"Prepare the Data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'loader = TextLoader("../../../state_of_the_union.txt")\ndocuments = loader.load()\ntext_splitter = SpacyTextSplitter(separator="|")\ntexts = []\nfor doc in text_splitter.split_documents(documents):\n    texts.extend(doc.page_content.split("|"))\n\ntexts = [e.strip() for e in texts]\n')),(0,r.kt)("h3",{id:"map-the-data-using-nomics-atlas"},"Map the Data using Nomic's Atlas"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'db = AtlasDB.from_texts(\n    texts=texts,\n    name="test_index_" + str(time.time()),  # unique name for your vector store\n    description="test_index",  # a description for your vector store\n    api_key=ATLAS_TEST_API_KEY,\n    index_kwargs={"build_topic_model": True},\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"db.project.wait_for_project_lock()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"db.project\n")),(0,r.kt)("p",null,"Here is a map with the result of this code. This map displays the texts of the State of the Union.\n",(0,r.kt)("a",{parentName:"p",href:"https://atlas.nomic.ai/map/3e4de075-89ff-486a-845c-36c23f30bb67/d8ce2284-8edb-4050-8b9b-9bb543d7f647"},"https://atlas.nomic.ai/map/3e4de075-89ff-486a-845c-36c23f30bb67/d8ce2284-8edb-4050-8b9b-9bb543d7f647")))}m.isMDXComponent=!0}}]);
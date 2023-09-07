"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41993],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,u=d["".concat(p,".").concat(m)]||d[m]||h[m]||l;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19054:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={},o="Aleph Alpha",i={unversionedId:"integrations/providers/aleph_alpha",id:"integrations/providers/aleph_alpha",title:"Aleph Alpha",description:"Aleph Alpha was founded in 2019 with the mission to research and build the foundational technology for an era of strong AI. The team of international scientists, engineers, and innovators researches, develops, and deploys transformative AI like large language and multimodal models and runs the fastest European commercial AI cluster.",source:"@site/docs/integrations/providers/aleph_alpha.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/aleph_alpha",permalink:"/langchain/docs/integrations/providers/aleph_alpha",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Airtable",permalink:"/langchain/docs/integrations/providers/airtable"},next:{title:"Alibaba Cloud Opensearch",permalink:"/langchain/docs/integrations/providers/alibabacloud_opensearch"}},p={},s=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"LLM",id:"llm",level:2},{value:"Text Embedding Models",id:"text-embedding-models",level:2}],c={toc:s},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aleph-alpha"},"Aleph Alpha"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aleph-alpha.com/"},"Aleph Alpha")," was founded in 2019 with the mission to research and build the foundational technology for an era of strong AI. The team of international scientists, engineers, and innovators researches, develops, and deploys transformative AI like large language and multimodal models and runs the fastest European commercial AI cluster.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aleph-alpha.com/docs/introduction/luminous/"},"The Luminous series")," is a family of large language models.")),(0,r.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install aleph-alpha-client\n")),(0,r.kt)("p",null,"You have to create a new token. Please, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aleph-alpha.com/docs/account/#create-a-new-token"},"instructions"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from getpass import getpass\n\nALEPH_ALPHA_API_KEY = getpass()\n")),(0,r.kt)("h2",{id:"llm"},"LLM"),(0,r.kt)("p",null,"See a ",(0,r.kt)("a",{parentName:"p",href:"/docs/integrations/llms/aleph_alpha"},"usage example"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "AlephAlpha", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.aleph_alpha.AlephAlpha.html", "title": "Aleph Alpha"}]--\x3e\nfrom langchain.llms import AlephAlpha\n')),(0,r.kt)("h2",{id:"text-embedding-models"},"Text Embedding Models"),(0,r.kt)("p",null,"See a ",(0,r.kt)("a",{parentName:"p",href:"/docs/integrations/text_embedding/aleph_alpha"},"usage example"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "AlephAlphaSymmetricSemanticEmbedding", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.aleph_alpha.AlephAlphaSymmetricSemanticEmbedding.html", "title": "Aleph Alpha"}, {"imported": "AlephAlphaAsymmetricSemanticEmbedding", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.aleph_alpha.AlephAlphaAsymmetricSemanticEmbedding.html", "title": "Aleph Alpha"}]--\x3e\nfrom langchain.embeddings import AlephAlphaSymmetricSemanticEmbedding, AlephAlphaAsymmetricSemanticEmbedding\n')))}h.isMDXComponent=!0}}]);
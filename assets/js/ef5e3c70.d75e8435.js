"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12206],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=c(t),p=o,u=h["".concat(l,".").concat(p)]||h[p]||m[p]||s;return t?a.createElement(u,i(i({ref:n},d),{},{components:t})):a.createElement(u,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=p;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[h]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},13960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const s={},i="2Markdown",r={unversionedId:"integrations/document_loaders/tomarkdown",id:"integrations/document_loaders/tomarkdown",title:"2Markdown",description:"2markdown service transforms website content into structured markdown files.",source:"@site/docs/integrations/document_loaders/tomarkdown.md",sourceDirName:"integrations/document_loaders",slug:"/integrations/document_loaders/tomarkdown",permalink:"/langchain/docs/integrations/document_loaders/tomarkdown",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"TensorFlow Datasets",permalink:"/langchain/docs/integrations/document_loaders/tensorflow_datasets"},next:{title:"TOML",permalink:"/langchain/docs/integrations/document_loaders/toml"}},l={},c=[],d=(h="CodeOutputBlock",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var h;const m={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2markdown"},"2Markdown"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://2markdown.com/"},"2markdown")," service transforms website content into structured markdown files.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# You will need to get your own API key. See https://2markdown.com/login\n\napi_key = ""\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ToMarkdownLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.tomarkdown.ToMarkdownLoader.html", "title": "2Markdown"}]--\x3e\nfrom langchain.document_loaders import ToMarkdownLoader\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'loader = ToMarkdownLoader.from_api_key(\n    url="https://python.langchain.com/en/latest/", api_key=api_key\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"docs = loader.load()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print(docs[0].page_content)\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    ## Contents\n    \n    - [Getting Started](#getting-started)\n    - [Modules](#modules)\n    - [Use Cases](#use-cases)\n    - [Reference Docs](#reference-docs)\n    - [LangChain Ecosystem](#langchain-ecosystem)\n    - [Additional Resources](#additional-resources)\n    \n    ## Welcome to LangChain [\\#](\\#welcome-to-langchain "Permalink to this headline")\n    \n    **LangChain** is a framework for developing applications powered by language models. We believe that the most powerful and differentiated applications will not only call out to a language model, but will also be:\n    \n    1. _Data-aware_: connect a language model to other sources of data\n    \n    2. _Agentic_: allow a language model to interact with its environment\n    \n    \n    The LangChain framework is designed around these principles.\n    \n    This is the Python specific portion of the documentation. For a purely conceptual guide to LangChain, see [here](https://docs.langchain.com/docs/). For the JavaScript documentation, see [here](https://js.langchain.com/docs/).\n    \n    ## Getting Started [\\#](\\#getting-started "Permalink to this headline")\n    \n    How to get started using LangChain to create an Language Model application.\n    \n    - [Quickstart Guide](https://python.langchain.com/en/latest/getting_started/getting_started.html)\n    \n    \n    Concepts and terminology.\n    \n    - [Concepts and terminology](https://python.langchain.com/en/latest/getting_started/concepts.html)\n    \n    \n    Tutorials created by community experts and presented on YouTube.\n    \n    - [Tutorials](https://python.langchain.com/en/latest/getting_started/tutorials.html)\n    \n    \n    ## Modules [\\#](\\#modules "Permalink to this headline")\n    \n    These modules are the core abstractions which we view as the building blocks of any LLM-powered application.\n    \n    For each module LangChain provides standard, extendable interfaces. LanghChain also provides external integrations and even end-to-end implementations for off-the-shelf use.\n    \n    The docs for each module contain quickstart examples, how-to guides, reference docs, and conceptual guides.\n    \n    The modules are (from least to most complex):\n    \n    - [Models](https://python.langchain.com/docs/modules/model_io/models/): Supported model types and integrations.\n    \n    - [Prompts](https://python.langchain.com/en/latest/modules/prompts.html): Prompt management, optimization, and serialization.\n    \n    - [Memory](https://python.langchain.com/en/latest/modules/memory.html): Memory refers to state that is persisted between calls of a chain/agent.\n    \n    - [Indexes](https://python.langchain.com/en/latest/modules/data_connection.html): Language models become much more powerful when combined with application-specific data - this module contains interfaces and integrations for loading, querying and updating external data.\n    \n    - [Chains](https://python.langchain.com/en/latest/modules/chains.html): Chains are structured sequences of calls (to an LLM or to a different utility).\n    \n    - [Agents](https://python.langchain.com/en/latest/modules/agents.html): An agent is a Chain in which an LLM, given a high-level directive and a set of tools, repeatedly decides an action, executes the action and observes the outcome until the high-level directive is complete.\n    \n    - [Callbacks](https://python.langchain.com/en/latest/modules/callbacks/getting_started.html): Callbacks let you log and stream the intermediate steps of any chain, making it easy to observe, debug, and evaluate the internals of an application.\n    \n    \n    ## Use Cases [\\#](\\#use-cases "Permalink to this headline")\n    \n    Best practices and built-in implementations for common LangChain use cases:\n    \n    - [Autonomous Agents](https://python.langchain.com/en/latest/use_cases/autonomous_agents.html): Autonomous agents are long-running agents that take many steps in an attempt to accomplish an objective. Examples include AutoGPT and BabyAGI.\n    \n    - [Agent Simulations](https://python.langchain.com/en/latest/use_cases/agent_simulations.html): Putting agents in a sandbox and observing how they interact with each other and react to events can be an effective way to evaluate their long-range reasoning and planning abilities.\n    \n    - [Personal Assistants](https://python.langchain.com/en/latest/use_cases/personal_assistants.html): One of the primary LangChain use cases. Personal assistants need to take actions, remember interactions, and have knowledge about your data.\n    \n    - [Question Answering](https://python.langchain.com/en/latest/use_cases/question_answering.html): Another common LangChain use case. Answering questions over specific documents, only utilizing the information in those documents to construct an answer.\n    \n    - [Chatbots](https://python.langchain.com/en/latest/use_cases/chatbots.html): Language models love to chat, making this a very natural use of them.\n    \n    - [Querying Tabular Data](https://python.langchain.com/en/latest/use_cases/tabular.html): Recommended reading if you want to use language models to query structured data (CSVs, SQL, dataframes, etc).\n    \n    - [Code Understanding](https://python.langchain.com/en/latest/use_cases/code.html): Recommended reading if you want to use language models to analyze code.\n    \n    - [Interacting with APIs](https://python.langchain.com/en/latest/use_cases/apis.html): Enabling language models to interact with APIs is extremely powerful. It gives them access to up-to-date information and allows them to take actions.\n    \n    - [Extraction](https://python.langchain.com/en/latest/use_cases/extraction.html): Extract structured information from text.\n    \n    - [Summarization](https://python.langchain.com/en/latest/use_cases/summarization.html): Compressing longer documents. A type of Data-Augmented Generation.\n    \n    - [Evaluation](https://python.langchain.com/en/latest/use_cases/evaluation.html): Generative models are hard to evaluate with traditional metrics. One promising approach is to use language models themselves to do the evaluation.\n    \n    \n    ## Reference Docs [\\#](\\#reference-docs "Permalink to this headline")\n    \n    Full documentation on all methods, classes, installation methods, and integration setups for LangChain.\n    \n    - [Reference Documentation](https://python.langchain.com/en/latest/reference.html)\n    \n    \n    ## LangChain Ecosystem [\\#](\\#langchain-ecosystem "Permalink to this headline")\n    \n    Guides for how other companies/products can be used with LangChain.\n    \n    - [LangChain Ecosystem](https://python.langchain.com/en/latest/ecosystem.html)\n    \n    \n    ## Additional Resources [\\#](\\#additional-resources "Permalink to this headline")\n    \n    Additional resources we think may be useful as you develop your application!\n    \n    - [LangChainHub](https://github.com/hwchase17/langchain-hub): The LangChainHub is a place to share and explore other prompts, chains, and agents.\n    \n    - [Gallery](https://python.langchain.com/en/latest/additional_resources/gallery.html): A collection of our favorite projects that use LangChain. Useful for finding inspiration or seeing how things were done in other applications.\n    \n    - [Deployments](https://python.langchain.com/en/latest/additional_resources/deployments.html): A collection of instructions, code snippets, and template repositories for deploying LangChain apps.\n    \n    - [Tracing](https://python.langchain.com/en/latest/additional_resources/tracing.html): A guide on using tracing in LangChain to visualize the execution of chains and agents.\n    \n    - [Model Laboratory](https://python.langchain.com/en/latest/additional_resources/model_laboratory.html): Experimenting with different prompts, models, and chains is a big part of developing the best possible application. The ModelLaboratory makes it easy to do so.\n    \n    - [Discord](https://discord.gg/6adMQxSpJS): Join us on our Discord to discuss all things LangChain!\n    \n    - [YouTube](https://python.langchain.com/en/latest/additional_resources/youtube.html): A collection of the LangChain tutorials and videos.\n    \n    - [Production Support](https://forms.gle/57d8AmXBYp8PP8tZA): As you move your LangChains into production, we\u2019d love to offer more comprehensive support. Please fill out this form and we\u2019ll set up a dedicated support Slack channel.\n'))))}u.isMDXComponent=!0}}]);
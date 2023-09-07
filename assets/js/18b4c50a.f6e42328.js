"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28060],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},h=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return t?a.createElement(d,i(i({ref:n},h),{},{components:t})):a.createElement(d,i({ref:n},h))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const o={},i="BabyAGI User Guide",s={unversionedId:"use_cases/more/agents/autonomous_agents/baby_agi",id:"use_cases/more/agents/autonomous_agents/baby_agi",title:"BabyAGI User Guide",description:"This notebook demonstrates how to implement BabyAGI by Yohei Nakajima. BabyAGI is an AI agent that can generate and pretend to execute tasks based on a given objective.",source:"@site/docs/use_cases/more/agents/autonomous_agents/baby_agi.md",sourceDirName:"use_cases/more/agents/autonomous_agents",slug:"/use_cases/more/agents/autonomous_agents/baby_agi",permalink:"/langchain/docs/use_cases/more/agents/autonomous_agents/baby_agi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"use_cases",previous:{title:"AutoGPT",permalink:"/langchain/docs/use_cases/more/agents/autonomous_agents/autogpt"},next:{title:"BabyAGI with Tools",permalink:"/langchain/docs/use_cases/more/agents/autonomous_agents/baby_agi_with_agent"}},c={},l=[{value:"Install and Import Required Modules",id:"install-and-import-required-modules",level:2},{value:"Connect to the Vector Store",id:"connect-to-the-vector-store",level:2},{value:"Run the BabyAGI",id:"run-the-babyagi",level:3}],h=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const m={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babyagi-user-guide"},"BabyAGI User Guide"),(0,r.kt)("p",null,"This notebook demonstrates how to implement ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yoheinakajima/babyagi/tree/main"},"BabyAGI")," by ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/yoheinakajima"},"Yohei Nakajima"),". BabyAGI is an AI agent that can generate and pretend to execute tasks based on a given objective."),(0,r.kt)("p",null,"This guide will help you understand the components to create your own recursive agents."),(0,r.kt)("p",null,"Although BabyAGI uses specific vectorstores/model providers (Pinecone, OpenAI), one of the benefits of implementing it with LangChain is that you can easily swap those out for different options. In this implementation we use a FAISS vectorstore (because it runs locally and is free)."),(0,r.kt)("h2",{id:"install-and-import-required-modules"},"Install and Import Required Modules"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAIEmbeddings", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.openai.OpenAIEmbeddings.html", "title": "BabyAGI User Guide"}, {"imported": "BaseLLM", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.base.BaseLLM.html", "title": "BabyAGI User Guide"}, {"imported": "VectorStore", "source": "langchain.vectorstores.base", "docs": "https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.base.VectorStore.html", "title": "BabyAGI User Guide"}, {"imported": "Chain", "source": "langchain.chains.base", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.base.Chain.html", "title": "BabyAGI User Guide"}]--\x3e\nimport os\nfrom collections import deque\nfrom typing import Dict, List, Optional, Any\n\nfrom langchain import LLMChain, OpenAI, PromptTemplate\nfrom langchain.embeddings import OpenAIEmbeddings\nfrom langchain.llms import BaseLLM\nfrom langchain.vectorstores.base import VectorStore\nfrom pydantic import BaseModel, Field\nfrom langchain.chains.base import Chain\nfrom langchain_experimental.autonomous_agents import BabyAGI\n')),(0,r.kt)("h2",{id:"connect-to-the-vector-store"},"Connect to the Vector Store"),(0,r.kt)("p",null,"Depending on what vectorstore you use, this step may look different."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "FAISS", "source": "langchain.vectorstores", "docs": "https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.faiss.FAISS.html", "title": "BabyAGI User Guide"}, {"imported": "InMemoryDocstore", "source": "langchain.docstore", "docs": "https://api.python.langchain.com/en/latest/docstore/langchain.docstore.in_memory.InMemoryDocstore.html", "title": "BabyAGI User Guide"}]--\x3e\nfrom langchain.vectorstores import FAISS\nfrom langchain.docstore import InMemoryDocstore\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Define your embedding model\nembeddings_model = OpenAIEmbeddings()\n# Initialize the vectorstore as empty\nimport faiss\n\nembedding_size = 1536\nindex = faiss.IndexFlatL2(embedding_size)\nvectorstore = FAISS(embeddings_model.embed_query, index, InMemoryDocstore({}), {})\n")),(0,r.kt)("h3",{id:"run-the-babyagi"},"Run the BabyAGI"),(0,r.kt)("p",null,"Now it's time to create the BabyAGI controller and watch it try to accomplish your objective."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'OBJECTIVE = "Write a weather report for SF today"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"llm = OpenAI(temperature=0)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Logging of LLMChains\nverbose = False\n# If None, will keep on going forever\nmax_iterations: Optional[int] = 3\nbaby_agi = BabyAGI.from_llm(\n    llm=llm, vectorstore=vectorstore, verbose=verbose, max_iterations=max_iterations\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'baby_agi({"objective": OBJECTIVE})\n')),(0,r.kt)(h,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    *****TASK LIST*****\n    \n    1: Make a todo list\n    \n    *****NEXT TASK*****\n    \n    1: Make a todo list\n    \n    *****TASK RESULT*****\n    \n    \n    \n    1. Check the weather forecast for San Francisco today\n    2. Make note of the temperature, humidity, wind speed, and other relevant weather conditions\n    3. Write a weather report summarizing the forecast\n    4. Check for any weather alerts or warnings\n    5. Share the report with the relevant stakeholders\n    \n    *****TASK LIST*****\n    \n    2: Check the current temperature in San Francisco\n    3: Check the current humidity in San Francisco\n    4: Check the current wind speed in San Francisco\n    5: Check for any weather alerts or warnings in San Francisco\n    6: Check the forecast for the next 24 hours in San Francisco\n    7: Check the forecast for the next 48 hours in San Francisco\n    8: Check the forecast for the next 72 hours in San Francisco\n    9: Check the forecast for the next week in San Francisco\n    10: Check the forecast for the next month in San Francisco\n    11: Check the forecast for the next 3 months in San Francisco\n    1: Write a weather report for SF today\n    \n    *****NEXT TASK*****\n    \n    2: Check the current temperature in San Francisco\n    \n    *****TASK RESULT*****\n    \n    \n    \n    I will check the current temperature in San Francisco. I will use an online weather service to get the most up-to-date information.\n    \n    *****TASK LIST*****\n    \n    3: Check the current UV index in San Francisco.\n    4: Check the current air quality in San Francisco.\n    5: Check the current precipitation levels in San Francisco.\n    6: Check the current cloud cover in San Francisco.\n    7: Check the current barometric pressure in San Francisco.\n    8: Check the current dew point in San Francisco.\n    9: Check the current wind direction in San Francisco.\n    10: Check the current humidity levels in San Francisco.\n    1: Check the current temperature in San Francisco to the average temperature for this time of year.\n    2: Check the current visibility in San Francisco.\n    11: Write a weather report for SF today.\n    \n    *****NEXT TASK*****\n    \n    3: Check the current UV index in San Francisco.\n    \n    *****TASK RESULT*****\n    \n    \n    \n    The current UV index in San Francisco is moderate. The UV index is expected to remain at moderate levels throughout the day. It is recommended to wear sunscreen and protective clothing when outdoors.\n    \n    *****TASK ENDING*****\n    \n\n\n\n\n\n    {'objective': 'Write a weather report for SF today'}\n"))))}d.isMDXComponent=!0}}]);
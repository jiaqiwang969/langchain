"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[434],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),s=c(t),h=r,d=s["".concat(p,".").concat(h)]||s[h]||u[h]||o;return t?a.createElement(d,i(i({ref:n},l),{},{components:t})):a.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var m={};for(var p in n)hasOwnProperty.call(n,p)&&(m[p]=n[p]);m.originalType=e,m[s]="string"==typeof e?e:r,i[1]=m;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},62985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={},i="Mot\xf6rhead Memory (Managed)",m={unversionedId:"integrations/memory/motorhead_memory_managed",id:"integrations/memory/motorhead_memory_managed",title:"Mot\xf6rhead Memory (Managed)",description:"Mot\xf6rhead is a memory server implemented in Rust. It automatically handles incremental summarization in the background and allows for stateless applications.",source:"@site/docs/integrations/memory/motorhead_memory_managed.md",sourceDirName:"integrations/memory",slug:"/integrations/memory/motorhead_memory_managed",permalink:"/langchain/docs/integrations/memory/motorhead_memory_managed",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Mot\xf6rhead Memory",permalink:"/langchain/docs/integrations/memory/motorhead_memory"},next:{title:"Postgres Chat Message History",permalink:"/langchain/docs/integrations/memory/postgres_chat_message_history"}},p={},c=[{value:"Setup",id:"setup",level:2}],l=(s="CodeOutputBlock",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var s;const u={toc:c},h="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(h,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mot\xf6rhead-memory-managed"},"Mot\xf6rhead Memory (Managed)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/getmetal/motorhead"},"Mot\xf6rhead")," is a memory server implemented in Rust. It automatically handles incremental summarization in the background and allows for stateless applications."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"See instructions at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getmetal.io/motorhead/introduction"},"Mot\xf6rhead")," for running the managed version of Motorhead. You can retrieve your ",(0,r.kt)("inlineCode",{parentName:"p"},"api_key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"client_id")," by creating an account on ",(0,r.kt)("a",{parentName:"p",href:"https://getmetal.io"},"Metal"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "MotorheadMemory", "source": "langchain.memory.motorhead_memory", "docs": "https://api.python.langchain.com/en/latest/memory/langchain.memory.motorhead_memory.MotorheadMemory.html", "title": "Mot\\u00f6rhead Memory (Managed)"}]--\x3e\nfrom langchain.memory.motorhead_memory import MotorheadMemory\nfrom langchain import OpenAI, LLMChain, PromptTemplate\n\ntemplate = """You are a chatbot having a conversation with a human.\n\n{chat_history}\nHuman: {human_input}\nAI:"""\n\nprompt = PromptTemplate(\n    input_variables=["chat_history", "human_input"], \n    template=template\n)\nmemory = MotorheadMemory(\n    api_key="YOUR_API_KEY",\n    client_id="YOUR_CLIENT_ID"\n    session_id="testing-1",\n    memory_key="chat_history"\n)\n\nawait memory.init();  # loads previous state from Mot\xf6rhead \ud83e\udd18\n\nllm_chain = LLMChain(\n    llm=OpenAI(), \n    prompt=prompt, \n    verbose=True, \n    memory=memory,\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'llm_chain.run("hi im bob")\n')),(0,r.kt)(l,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    You are a chatbot having a conversation with a human.\n    \n    \n    Human: hi im bob\n    AI:\n    \n    > Finished chain.\n\n\n\n\n\n    ' Hi Bob, nice to meet you! How are you doing today?'\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'llm_chain.run("whats my name?")\n')),(0,r.kt)(l,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    You are a chatbot having a conversation with a human.\n    \n    Human: hi im bob\n    AI:  Hi Bob, nice to meet you! How are you doing today?\n    Human: whats my name?\n    AI:\n    \n    > Finished chain.\n\n\n\n\n\n    ' You said your name is Bob. Is that correct?'\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'llm_chain.run("whats for dinner?")\n')),(0,r.kt)(l,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    You are a chatbot having a conversation with a human.\n    \n    Human: hi im bob\n    AI:  Hi Bob, nice to meet you! How are you doing today?\n    Human: whats my name?\n    AI:  You said your name is Bob. Is that correct?\n    Human: whats for dinner?\n    AI:\n    \n    > Finished chain.\n\n\n\n\n\n    \"  I'm sorry, I'm not sure what you're asking. Could you please rephrase your question?\"\n"))))}d.isMDXComponent=!0}}]);
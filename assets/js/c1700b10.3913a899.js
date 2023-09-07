"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=l(n),u=o,d=h["".concat(p,".").concat(u)]||h[u]||c[u]||r;return n?a.createElement(d,m(m({ref:t},s),{},{components:n})):a.createElement(d,m({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,m=new Array(r);m[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[h]="string"==typeof e?e:o,m[1]=i;for(var l=2;l<r;l++)m[l]=n[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={},m="Memory in LLMChain",i={unversionedId:"modules/memory/adding_memory",id:"modules/memory/adding_memory",title:"Memory in LLMChain",description:"This notebook goes over how to use the Memory class with an LLMChain.",source:"@site/docs/modules/memory/adding_memory.md",sourceDirName:"modules/memory",slug:"/modules/memory/adding_memory",permalink:"/langchain/docs/modules/memory/adding_memory",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Backed by a Vector Store",permalink:"/langchain/docs/modules/memory/types/vectorstore_retriever_memory"},next:{title:"Memory in the Multi-Input Chain",permalink:"/langchain/docs/modules/memory/adding_memory_chain_multiple_inputs"}},p={},l=[{value:"Adding Memory to a chat model-based <code>LLMChain</code>",id:"adding-memory-to-a-chat-model-based-llmchain",level:2}],s=(h="CodeOutputBlock",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var h;const c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"memory-in-llmchain"},"Memory in LLMChain"),(0,o.kt)("p",null,"This notebook goes over how to use the Memory class with an ",(0,o.kt)("inlineCode",{parentName:"p"},"LLMChain"),". "),(0,o.kt)("p",null,"We will add  the ",(0,o.kt)("a",{parentName:"p",href:"https://api.python.langchain.com/en/latest/memory/langchain.memory.buffer.ConversationBufferMemory.html#langchain.memory.buffer.ConversationBufferMemory"},"ConversationBufferMemory")," class, although this can be any memory class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "LLMChain", "source": "langchain.chains", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.llm.LLMChain.html", "title": "Memory in LLMChain"}, {"imported": "OpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openai.OpenAI.html", "title": "Memory in LLMChain"}, {"imported": "ConversationBufferMemory", "source": "langchain.memory", "docs": "https://api.python.langchain.com/en/latest/memory/langchain.memory.buffer.ConversationBufferMemory.html", "title": "Memory in LLMChain"}, {"imported": "PromptTemplate", "source": "langchain.prompts", "docs": "https://api.python.langchain.com/en/latest/prompts/langchain.prompts.prompt.PromptTemplate.html", "title": "Memory in LLMChain"}]--\x3e\nfrom langchain.chains import LLMChain\nfrom langchain.llms import OpenAI\nfrom langchain.memory import ConversationBufferMemory\nfrom langchain.prompts import PromptTemplate\n')),(0,o.kt)("p",null,"The most important step is setting up the prompt correctly. In the below prompt, we have two input keys: one for the actual input, another for the input from the Memory class. Importantly, we make sure the keys in the ",(0,o.kt)("inlineCode",{parentName:"p"},"PromptTemplate")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationBufferMemory")," match up (",(0,o.kt)("inlineCode",{parentName:"p"},"chat_history"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'template = """You are a chatbot having a conversation with a human.\n\n{chat_history}\nHuman: {human_input}\nChatbot:"""\n\nprompt = PromptTemplate(\n    input_variables=["chat_history", "human_input"], template=template\n)\nmemory = ConversationBufferMemory(memory_key="chat_history")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"llm = OpenAI()\nllm_chain = LLMChain(\n    llm=llm,\n    prompt=prompt,\n    verbose=True,\n    memory=memory,\n)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'llm_chain.predict(human_input="Hi there my friend")\n')),(0,o.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    You are a chatbot having a conversation with a human.\n    \n    \n    Human: Hi there my friend\n    Chatbot:\n    \n    > Finished chain.\n\n\n\n\n\n    ' Hi there! How can I help you today?'\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'llm_chain.predict(human_input="Not too bad - how are you?")\n')),(0,o.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    You are a chatbot having a conversation with a human.\n    \n    Human: Hi there my friend\n    AI:  Hi there! How can I help you today?\n    Human: Not too bad - how are you?\n    Chatbot:\n    \n    > Finished chain.\n\n\n\n\n\n    " I\'m doing great, thanks for asking! How are you doing?"\n'))),(0,o.kt)("h2",{id:"adding-memory-to-a-chat-model-based-llmchain"},"Adding Memory to a chat model-based ",(0,o.kt)("inlineCode",{parentName:"h2"},"LLMChain")),(0,o.kt)("p",null,"The above works for completion-style ",(0,o.kt)("inlineCode",{parentName:"p"},"LLM"),"s, but if you are using a chat model, you will likely get better performance using structured chat messages. Below is an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Memory in LLMChain"}, {"imported": "SystemMessage", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.messages.SystemMessage.html", "title": "Memory in LLMChain"}, {"imported": "ChatPromptTemplate", "source": "langchain.prompts", "docs": "https://api.python.langchain.com/en/latest/prompts/langchain.prompts.chat.ChatPromptTemplate.html", "title": "Memory in LLMChain"}, {"imported": "HumanMessagePromptTemplate", "source": "langchain.prompts", "docs": "https://api.python.langchain.com/en/latest/prompts/langchain.prompts.chat.HumanMessagePromptTemplate.html", "title": "Memory in LLMChain"}, {"imported": "MessagesPlaceholder", "source": "langchain.prompts", "docs": "https://api.python.langchain.com/en/latest/prompts/langchain.prompts.chat.MessagesPlaceholder.html", "title": "Memory in LLMChain"}]--\x3e\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.schema import SystemMessage\nfrom langchain.prompts import ChatPromptTemplate, HumanMessagePromptTemplate, MessagesPlaceholder\n')),(0,o.kt)("p",null,"We will use the ",(0,o.kt)("a",{parentName:"p",href:"https://api.python.langchain.com/en/latest/prompts/langchain.prompts.chat.ChatPromptTemplate.html"},"ChatPromptTemplate")," class to set up the chat prompt."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://api.python.langchain.com/en/latest/prompts/langchain.prompts.chat.ChatPromptTemplate.html#langchain.prompts.chat.ChatPromptTemplate.from_messages"},"from_messages")," method creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatPromptTemplate")," from a list of messages (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"SystemMessage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"HumanMessage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AIMessage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatMessage"),", etc.) or message templates, such as the ",(0,o.kt)("a",{parentName:"p",href:"https://api.python.langchain.com/en/latest/prompts/langchain.prompts.chat.MessagesPlaceholder.html#langchain.prompts.chat.MessagesPlaceholder"},"MessagesPlaceholder")," below."),(0,o.kt)("p",null,"The configuration below makes it so the memory will be injected to the middle of the chat prompt, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"chat_history")," key, and the user's inputs will be added in a human/user message to the end of the chat prompt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'prompt = ChatPromptTemplate.from_messages([\n    SystemMessage(content="You are a chatbot having a conversation with a human."), # The persistent system prompt\n    MessagesPlaceholder(variable_name="chat_history"), # Where the memory will be stored.\n    HumanMessagePromptTemplate.from_template("{human_input}"), # Where the human input will injected\n])\n    \nmemory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"llm = ChatOpenAI()\n\nchat_llm_chain = LLMChain(\n    llm=llm,\n    prompt=prompt,\n    verbose=True,\n    memory=memory,\n)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'chat_llm_chain.predict(human_input="Hi there my friend")\n')),(0,o.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    System: You are a chatbot having a conversation with a human.\n    Human: Hi there my friend\n    \n    > Finished chain.\n\n\n\n\n\n    'Hello! How can I assist you today, my friend?'\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'chat_llm_chain.predict(human_input="Not too bad - how are you?")\n')),(0,o.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    System: You are a chatbot having a conversation with a human.\n    Human: Hi there my friend\n    AI: Hello! How can I assist you today, my friend?\n    Human: Not too bad - how are you?\n    \n    > Finished chain.\n\n\n\n\n\n    \"I'm an AI chatbot, so I don't have feelings, but I'm here to help and chat with you! Is there something specific you would like to talk about or any questions I can assist you with?\"\n"))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52e3],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(t),h=a,f=c["".concat(l,".").concat(h)]||c[h]||p[h]||r;return t?o.createElement(f,i(i({ref:n},m),{},{components:t})):o.createElement(f,i({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},14336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=t(87462),a=(t(67294),t(3905));const r={},i="Conversation Token Buffer",s={unversionedId:"modules/memory/types/token_buffer",id:"modules/memory/types/token_buffer",title:"Conversation Token Buffer",description:"ConversationTokenBufferMemory keeps a buffer of recent interactions in memory, and uses token length rather than number of interactions to determine when to flush interactions.",source:"@site/docs/modules/memory/types/token_buffer.md",sourceDirName:"modules/memory/types",slug:"/modules/memory/types/token_buffer",permalink:"/langchain/docs/modules/memory/types/token_buffer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Conversation Summary Buffer",permalink:"/langchain/docs/modules/memory/types/summary_buffer"},next:{title:"Backed by a Vector Store",permalink:"/langchain/docs/modules/memory/types/vectorstore_retriever_memory"}},l={},u=[{value:"Using memory with LLM",id:"using-memory-with-llm",level:2},{value:"Using in a chain",id:"using-in-a-chain",level:2}],m=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const p={toc:u},h="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(h,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"conversation-token-buffer"},"Conversation Token Buffer"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ConversationTokenBufferMemory")," keeps a buffer of recent interactions in memory, and uses token length rather than number of interactions to determine when to flush interactions."),(0,a.kt)("p",null,"Let's first walk through how to use the utilities."),(0,a.kt)("h2",{id:"using-memory-with-llm"},"Using memory with LLM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ConversationTokenBufferMemory", "source": "langchain.memory", "docs": "https://api.python.langchain.com/en/latest/memory/langchain.memory.token_buffer.ConversationTokenBufferMemory.html", "title": "Conversation Token Buffer"}, {"imported": "OpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openai.OpenAI.html", "title": "Conversation Token Buffer"}]--\x3e\nfrom langchain.memory import ConversationTokenBufferMemory\nfrom langchain.llms import OpenAI\n\nllm = OpenAI()\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'memory = ConversationTokenBufferMemory(llm=llm, max_token_limit=10)\nmemory.save_context({"input": "hi"}, {"output": "whats up"})\nmemory.save_context({"input": "not much you"}, {"output": "not much"})\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"memory.load_memory_variables({})\n")),(0,a.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    {'history': 'Human: not much you\\nAI: not much'}\n"))),(0,a.kt)("p",null,"We can also get the history as a list of messages (this is useful if you are using this with a chat model)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'memory = ConversationTokenBufferMemory(\n    llm=llm, max_token_limit=10, return_messages=True\n)\nmemory.save_context({"input": "hi"}, {"output": "whats up"})\nmemory.save_context({"input": "not much you"}, {"output": "not much"})\n')),(0,a.kt)("h2",{id:"using-in-a-chain"},"Using in a chain"),(0,a.kt)("p",null,"Let's walk through an example, again setting ",(0,a.kt)("inlineCode",{parentName:"p"},"verbose=True")," so we can see the prompt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ConversationChain", "source": "langchain.chains", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.conversation.base.ConversationChain.html", "title": "Conversation Token Buffer"}]--\x3e\nfrom langchain.chains import ConversationChain\n\nconversation_with_summary = ConversationChain(\n    llm=llm,\n    # We set a very low max_token_limit for the purposes of testing.\n    memory=ConversationTokenBufferMemory(llm=OpenAI(), max_token_limit=60),\n    verbose=True,\n)\nconversation_with_summary.predict(input="Hi, what\'s up?")\n')),(0,a.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new ConversationChain chain...\n    Prompt after formatting:\n    The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.\n    \n    Current conversation:\n    \n    Human: Hi, what's up?\n    AI:\n    \n    > Finished chain.\n\n\n\n\n\n    \" Hi there! I'm doing great, just enjoying the day. How about you?\"\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'conversation_with_summary.predict(input="Just working on writing some documentation!")\n')),(0,a.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new ConversationChain chain...\n    Prompt after formatting:\n    The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.\n    \n    Current conversation:\n    Human: Hi, what's up?\n    AI:  Hi there! I'm doing great, just enjoying the day. How about you?\n    Human: Just working on writing some documentation!\n    AI:\n    \n    > Finished chain.\n\n\n\n\n\n    ' Sounds like a productive day! What kind of documentation are you writing?'\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'conversation_with_summary.predict(input="For LangChain! Have you heard of it?")\n')),(0,a.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new ConversationChain chain...\n    Prompt after formatting:\n    The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.\n    \n    Current conversation:\n    Human: Hi, what's up?\n    AI:  Hi there! I'm doing great, just enjoying the day. How about you?\n    Human: Just working on writing some documentation!\n    AI:  Sounds like a productive day! What kind of documentation are you writing?\n    Human: For LangChain! Have you heard of it?\n    AI:\n    \n    > Finished chain.\n\n\n\n\n\n    \" Yes, I have heard of LangChain! It is a decentralized language-learning platform that connects native speakers and learners in real time. Is that the documentation you're writing about?\"\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# We can see here that the buffer is updated\nconversation_with_summary.predict(\n    input="Haha nope, although a lot of people confuse it for that"\n)\n')),(0,a.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new ConversationChain chain...\n    Prompt after formatting:\n    The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.\n    \n    Current conversation:\n    Human: For LangChain! Have you heard of it?\n    AI:  Yes, I have heard of LangChain! It is a decentralized language-learning platform that connects native speakers and learners in real time. Is that the documentation you're writing about?\n    Human: Haha nope, although a lot of people confuse it for that\n    AI:\n    \n    > Finished chain.\n\n\n\n\n\n    \" Oh, I see. Is there another language learning platform you're referring to?\"\n"))))}f.isMDXComponent=!0}}]);
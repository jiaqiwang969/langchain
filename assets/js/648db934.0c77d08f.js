"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(n),u=o,d=c["".concat(l,".").concat(u)]||c[u]||h[u]||r;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var m=2;m<r;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:1,title:"Chatbots"},s=void 0,i={unversionedId:"use_cases/chatbots",id:"use_cases/chatbots",title:"Chatbots",description:"Open In Collab",source:"@site/docs/use_cases/chatbots.md",sourceDirName:"use_cases",slug:"/use_cases/chatbots",permalink:"/langchain/docs/use_cases/chatbots",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Chatbots"},sidebar:"use_cases",previous:{title:"Interacting with APIs",permalink:"/langchain/docs/use_cases/apis"},next:{title:"Code understanding",permalink:"/langchain/docs/use_cases/code_understanding"}},l={},m=[{value:"Use case",id:"use-case",level:2},{value:"Overview",id:"overview",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Memory",id:"memory",level:2},{value:"Conversation",id:"conversation",level:2},{value:"Chat Retrieval",id:"chat-retrieval",level:2},{value:"Going deeper",id:"going-deeper",level:3}],p=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const h={toc:m},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/langchain-ai/langchain/blob/master/docs/extras/use_cases/chatbots.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Collab"}))),(0,o.kt)("h2",{id:"use-case"},"Use case"),(0,o.kt)("p",null,"Chatbots are one of the central LLM use-cases. The core features of chatbots are that they can have long-running conversations and have access to information that users want to know about."),(0,o.kt)("p",null,"Aside from basic prompting and LLMs, memory and retrieval are the core components of a chatbot. Memory allows a chatbot to remember past interactions, and retrieval provides a chatbot with up-to-date, domain-specific information."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image description",src:n(58807).Z,width:"1201",height:"566"})),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The chat model interface is based around messages rather than raw text. Several components are important to consider for chat:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chat model"),": See ",(0,o.kt)("a",{parentName:"li",href:"/docs/integrations/chat"},"here")," for a list of chat model integrations and ",(0,o.kt)("a",{parentName:"li",href:"/docs/modules/model_io/models/chat"},"here")," for documentation on the chat model interface in LangChain. You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"LLMs")," (see ",(0,o.kt)("a",{parentName:"li",href:"/docs/modules/model_io/models/llms"},"here"),") for chatbots as well, but chat models have a more conversational tone and natively support a message interface."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prompt template"),": Prompt templates make it easy to assemble prompts that combine default messages, user input, chat history, and (optionally) additional retrieved context."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memory"),": ",(0,o.kt)("a",{parentName:"li",href:"/docs/modules/memory/"},"See here")," for in-depth documentation on memory types"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"retriever")," (optional): ",(0,o.kt)("a",{parentName:"li",href:"/docs/modules/data_connection/retrievers"},"See here")," for in-depth documentation on retrieval systems. These are useful if you want to build a chatbot with domain-specific knowledge.")),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"Here's a quick preview of how we can create chatbot interfaces. First let's install some dependencies and set the required credentials:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install langchain openai \n\n# Set env var OPENAI_API_KEY or load from a .env file:\n# import dotenv\n# dotenv.load_dotenv()\n")),(0,o.kt)("p",null,"With a plain chat model, we can get chat completions by ",(0,o.kt)("a",{parentName:"p",href:"/docs/modules/model_io/models/chat"},"passing one or more messages")," to the model."),(0,o.kt)("p",null,"The chat model will respond with a message."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.schema import (\n    AIMessage,\n    HumanMessage,\n    SystemMessage\n)\nfrom langchain.chat_models import ChatOpenAI\n\nchat = ChatOpenAI()\nchat([HumanMessage(content="Translate this sentence from English to French: I love programming.")])\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    AIMessage(content="J\'adore la programmation.", additional_kwargs={}, example=False)\n'))),(0,o.kt)("p",null,"And if we pass in a list of messages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'messages = [\n    SystemMessage(content="You are a helpful assistant that translates English to French."),\n    HumanMessage(content="I love programming.")\n]\nchat(messages)\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    AIMessage(content="J\'adore la programmation.", additional_kwargs={}, example=False)\n'))),(0,o.kt)("p",null,"We can then wrap our chat model in a ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationChain"),", which has built-in memory for remembering past user inputs and model outputs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.chains import ConversationChain  \n  \nconversation = ConversationChain(llm=chat)  \nconversation.run("Translate this sentence from English to French: I love programming.")\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    'Je adore la programmation.'\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'conversation.run("Translate it to German.")\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    'Ich liebe Programmieren.'\n"))),(0,o.kt)("h2",{id:"memory"},"Memory"),(0,o.kt)("p",null,"As we mentioned above, the core component of chatbots is the memory system. One of the simplest and most commonly used forms of memory is ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationBufferMemory"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This memory allows for storing of messages in a ",(0,o.kt)("inlineCode",{parentName:"li"},"buffer")),(0,o.kt)("li",{parentName:"ul"},"When called in a chain, it returns all of the messages it has stored")),(0,o.kt)("p",null,"LangChain comes with many other types of memory, too. ",(0,o.kt)("a",{parentName:"p",href:"/docs/modules/memory/"},"See here")," for in-depth documentation on memory types."),(0,o.kt)("p",null,"For now let's take a quick look at ConversationBufferMemory. We can manually add a few chat messages to the memory like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.memory import ConversationBufferMemory\n\nmemory = ConversationBufferMemory()\nmemory.chat_memory.add_user_message("hi!")\nmemory.chat_memory.add_ai_message("whats up?")\n')),(0,o.kt)("p",null,"And now we can load from our memory. The key method exposed by all ",(0,o.kt)("inlineCode",{parentName:"p"},"Memory")," classes is ",(0,o.kt)("inlineCode",{parentName:"p"},"load_memory_variables"),". This takes in any initial chain input and returns a list of memory variables which are added to the chain input. "),(0,o.kt)("p",null,"Since this simple memory type doesn't actually take into account the chain input when loading memory, we can pass in an empty input for now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"memory.load_memory_variables({})\n")),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    {'history': 'Human: hi!\\nAI: whats up?'}\n"))),(0,o.kt)("p",null,"We can also keep a sliding window of the most recent ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," interactions using ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationBufferWindowMemory"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.memory import ConversationBufferWindowMemory\n\nmemory = ConversationBufferWindowMemory(k=1)\nmemory.save_context({"input": "hi"}, {"output": "whats up"})\nmemory.save_context({"input": "not much you"}, {"output": "not much"})\nmemory.load_memory_variables({})\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    {'history': 'Human: not much you\\nAI: not much'}\n"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ConversationSummaryMemory")," is an extension of this theme."),(0,o.kt)("p",null,"It creates a summary of the conversation over time. "),(0,o.kt)("p",null,"This memory is most useful for longer conversations where the full message history would consume many tokens."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.llms import OpenAI\nfrom langchain.memory import ConversationSummaryMemory\n\nllm = OpenAI(temperature=0)\nmemory = ConversationSummaryMemory(llm=llm)\nmemory.save_context({"input": "hi"},{"output": "whats up"})\nmemory.save_context({"input": "im working on better docs for chatbots"},{"output": "oh, that sounds like a lot of work"})\nmemory.save_context({"input": "yes, but it\'s worth the effort"},{"output": "agreed, good docs are important!"})\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"memory.load_memory_variables({})\n")),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    {'history': '\\nThe human greets the AI, to which the AI responds. The human then mentions they are working on better docs for chatbots, to which the AI responds that it sounds like a lot of work. The human agrees that it is worth the effort, and the AI agrees that good docs are important.'}\n"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ConversationSummaryBufferMemory")," extends this a bit further:"),(0,o.kt)("p",null,"It uses token length rather than number of interactions to determine when to flush interactions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.memory import ConversationSummaryBufferMemory\nmemory = ConversationSummaryBufferMemory(llm=llm, max_token_limit=10)\nmemory.save_context({"input": "hi"}, {"output": "whats up"})\nmemory.save_context({"input": "not much you"}, {"output": "not much"})\n')),(0,o.kt)("h2",{id:"conversation"},"Conversation"),(0,o.kt)("p",null,"We can unpack what goes under the hood with ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationChain"),". "),(0,o.kt)("p",null,"We can specify our memory, ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationSummaryMemory")," and we can specify the prompt. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.prompts import (\n    ChatPromptTemplate,\n    MessagesPlaceholder,\n    SystemMessagePromptTemplate,\n    HumanMessagePromptTemplate,\n)\nfrom langchain.chains import LLMChain\n\n# LLM\nllm = ChatOpenAI()\n\n# Prompt \nprompt = ChatPromptTemplate(\n    messages=[\n        SystemMessagePromptTemplate.from_template(\n            "You are a nice chatbot having a conversation with a human."\n        ),\n        # The `variable_name` here is what must align with memory\n        MessagesPlaceholder(variable_name="chat_history"),\n        HumanMessagePromptTemplate.from_template("{question}")\n    ]\n)\n\n# Notice that we `return_messages=True` to fit into the MessagesPlaceholder\n# Notice that `"chat_history"` aligns with the MessagesPlaceholder name\nmemory = ConversationBufferMemory(memory_key="chat_history",return_messages=True)\nconversation = LLMChain(\n    llm=llm,\n    prompt=prompt,\n    verbose=True,\n    memory=memory\n)\n\n# Notice that we just pass in the `question` variables - `chat_history` gets populated by memory\nconversation({"question": "hi"})\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    System: You are a nice chatbot having a conversation with a human.\n    Human: hi\n    \n    > Finished chain.\n\n\n\n\n\n    {'question': 'hi',\n     'chat_history': [HumanMessage(content='hi', additional_kwargs={}, example=False),\n      AIMessage(content='Hello! How can I assist you today?', additional_kwargs={}, example=False)],\n     'text': 'Hello! How can I assist you today?'}\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'conversation({"question": "Translate this sentence from English to French: I love programming."})\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    System: You are a nice chatbot having a conversation with a human.\n    Human: hi\n    AI: Hello! How can I assist you today?\n    Human: Translate this sentence from English to French: I love programming.\n    \n    > Finished chain.\n\n\n\n\n\n    {'question': 'Translate this sentence from English to French: I love programming.',\n     'chat_history': [HumanMessage(content='hi', additional_kwargs={}, example=False),\n      AIMessage(content='Hello! How can I assist you today?', additional_kwargs={}, example=False),\n      HumanMessage(content='Translate this sentence from English to French: I love programming.', additional_kwargs={}, example=False),\n      AIMessage(content='Sure! The translation of \"I love programming\" from English to French is \"J\\'adore programmer.\"', additional_kwargs={}, example=False)],\n     'text': 'Sure! The translation of \"I love programming\" from English to French is \"J\\'adore programmer.\"'}\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'conversation({"question": "Now translate the sentence to German."})\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    System: You are a nice chatbot having a conversation with a human.\n    Human: hi\n    AI: Hello! How can I assist you today?\n    Human: Translate this sentence from English to French: I love programming.\n    AI: Sure! The translation of \"I love programming\" from English to French is \"J'adore programmer.\"\n    Human: Now translate the sentence to German.\n    \n    > Finished chain.\n\n\n\n\n\n    {'question': 'Now translate the sentence to German.',\n     'chat_history': [HumanMessage(content='hi', additional_kwargs={}, example=False),\n      AIMessage(content='Hello! How can I assist you today?', additional_kwargs={}, example=False),\n      HumanMessage(content='Translate this sentence from English to French: I love programming.', additional_kwargs={}, example=False),\n      AIMessage(content='Sure! The translation of \"I love programming\" from English to French is \"J\\'adore programmer.\"', additional_kwargs={}, example=False),\n      HumanMessage(content='Now translate the sentence to German.', additional_kwargs={}, example=False),\n      AIMessage(content='Certainly! The translation of \"I love programming\" from English to German is \"Ich liebe das Programmieren.\"', additional_kwargs={}, example=False)],\n     'text': 'Certainly! The translation of \"I love programming\" from English to German is \"Ich liebe das Programmieren.\"'}\n"))),(0,o.kt)("p",null,"We can see the chat history preserved in the prompt using the ",(0,o.kt)("a",{parentName:"p",href:"https://smith.langchain.com/public/dce34c57-21ca-4283-9020-a8e0d78a59de/r"},"LangSmith trace"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image description",src:n(33298).Z,width:"1447",height:"877"})),(0,o.kt)("h2",{id:"chat-retrieval"},"Chat Retrieval"),(0,o.kt)("p",null,"Now, suppose we want to ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/mayowaoshin/status/1640385062708424708?s=20"},"chat with documents")," or some other source of knowledge."),(0,o.kt)("p",null,"This is popular use case, combining chat with ",(0,o.kt)("a",{parentName:"p",href:"/docs/use_cases/question_answering"},"document retrieval"),"."),(0,o.kt)("p",null,"It allows us to chat with specific information that the model was not trained on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install tiktoken chromadb\n")),(0,o.kt)("p",null,"Load a blog post."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.document_loaders import WebBaseLoader\n\nloader = WebBaseLoader("https://lilianweng.github.io/posts/2023-06-23-agent/")\ndata = loader.load()\n')),(0,o.kt)("p",null,"Split and store this in a vector."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.text_splitter import RecursiveCharacterTextSplitter\n\ntext_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=0)\nall_splits = text_splitter.split_documents(data)\n\nfrom langchain.embeddings import OpenAIEmbeddings\nfrom langchain.vectorstores import Chroma\n\nvectorstore = Chroma.from_documents(documents=all_splits, embedding=OpenAIEmbeddings())\n")),(0,o.kt)("p",null,"Create our memory, as before, but's let's use ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationSummaryMemory"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'memory = ConversationSummaryMemory(llm=llm,memory_key="chat_history",return_messages=True)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.chat_models import ChatOpenAI\nfrom langchain.chains import ConversationalRetrievalChain\n\nllm = ChatOpenAI()\nretriever = vectorstore.as_retriever()\nqa = ConversationalRetrievalChain.from_llm(llm, retriever=retriever, memory=memory)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'qa("How do agents use Task decomposition?")\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    {'question': 'How do agents use Task decomposition?',\n     'chat_history': [SystemMessage(content='', additional_kwargs={})],\n     'answer': 'Agents can use task decomposition in several ways:\\n\\n1. Simple prompting: Agents can use Language Model based prompting to break down tasks into subgoals. For example, by providing prompts like \"Steps for XYZ\" or \"What are the subgoals for achieving XYZ?\", the agent can generate a sequence of smaller steps that lead to the completion of the overall task.\\n\\n2. Task-specific instructions: Agents can be given task-specific instructions to guide their planning process. For example, if the task is to write a novel, the agent can be instructed to \"Write a story outline.\" This provides a high-level structure for the task and helps in breaking it down into smaller components.\\n\\n3. Human inputs: Agents can also take inputs from humans to decompose tasks. This can be done through direct communication or by leveraging human expertise. Humans can provide guidance and insights to help the agent break down complex tasks into manageable subgoals.\\n\\nOverall, task decomposition allows agents to break down large tasks into smaller, more manageable subgoals, enabling them to plan and execute complex tasks efficiently.'}\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'qa("What are the various ways to implemet memory to support it?")\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    {'question': 'What are the various ways to implemet memory to support it?',\n     'chat_history': [SystemMessage(content='The human asks how agents use task decomposition. The AI explains that agents can use task decomposition in several ways, including simple prompting, task-specific instructions, and human inputs. Task decomposition allows agents to break down large tasks into smaller, more manageable subgoals, enabling them to plan and execute complex tasks efficiently.', additional_kwargs={})],\n     'answer': 'There are several ways to implement memory to support task decomposition:\\n\\n1. Long-Term Memory Management: This involves storing and organizing information in a long-term memory system. The agent can retrieve past experiences, knowledge, and learned strategies to guide the task decomposition process.\\n\\n2. Internet Access: The agent can use internet access to search for relevant information and gather resources to aid in task decomposition. This allows the agent to access a vast amount of information and utilize it in the decomposition process.\\n\\n3. GPT-3.5 Powered Agents: The agent can delegate simple tasks to GPT-3.5 powered agents. These agents can perform specific tasks or provide assistance in task decomposition, allowing the main agent to focus on higher-level planning and decision-making.\\n\\n4. File Output: The agent can store the results of task decomposition in files or documents. This allows for easy retrieval and reference during the execution of the task.\\n\\nThese memory resources help the agent in organizing and managing information, making informed decisions, and effectively decomposing complex tasks into smaller, manageable subgoals.'}\n"))),(0,o.kt)("p",null,"Again, we can use the ",(0,o.kt)("a",{parentName:"p",href:"https://smith.langchain.com/public/18460363-0c70-4c72-81c7-3b57253bb58c/r"},"LangSmith trace")," to explore the prompt structure."),(0,o.kt)("h3",{id:"going-deeper"},"Going deeper"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Agents, such as the ",(0,o.kt)("a",{parentName:"li",href:"/docs/use_cases/question_answering/how_to/conversational_retrieval_agents"},"conversational retrieval agent"),", can be used for retrieval when necessary while also holding a conversation.")))}d.isMDXComponent=!0},58807:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chat_use_case-eb8a4883931d726e9f23628a0d22e315.png"},33298:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chat_use_case_2-a76871806149f125d08ff149363e0c2c.png"}}]);
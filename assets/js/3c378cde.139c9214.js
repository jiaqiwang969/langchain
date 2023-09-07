"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},s="Conversational Retrieval Agent",i={unversionedId:"use_cases/question_answering/how_to/conversational_retrieval_agents",id:"use_cases/question_answering/how_to/conversational_retrieval_agents",title:"Conversational Retrieval Agent",description:"This is an agent specifically optimized for doing retrieval when necessary and also holding a conversation.",source:"@site/docs/use_cases/question_answering/how_to/conversational_retrieval_agents.md",sourceDirName:"use_cases/question_answering/how_to",slug:"/use_cases/question_answering/how_to/conversational_retrieval_agents",permalink:"/langchain/docs/use_cases/question_answering/how_to/conversational_retrieval_agents",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"use_cases",previous:{title:"Analyze Document",permalink:"/langchain/docs/use_cases/question_answering/how_to/analyze_document"},next:{title:"Perform context-aware text splitting",permalink:"/langchain/docs/use_cases/question_answering/how_to/document-context-aware-QA"}},l={},c=[{value:"The Retriever",id:"the-retriever",level:2},{value:"Retriever Tool",id:"retriever-tool",level:2},{value:"Agent Constructor",id:"agent-constructor",level:2},{value:"Creating from components",id:"creating-from-components",level:2},{value:"The Memory",id:"the-memory",level:3},{value:"The Prompt Template",id:"the-prompt-template",level:2},{value:"The Agent",id:"the-agent",level:2},{value:"The Agent Executor",id:"the-agent-executor",level:2}],p=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const m={toc:c},h="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conversational-retrieval-agent"},"Conversational Retrieval Agent"),(0,o.kt)("p",null,"This is an agent specifically optimized for doing retrieval when necessary and also holding a conversation."),(0,o.kt)("p",null,"To start, we will set up the retriever we want to use, and then turn it into a retriever tool. Next, we will use the high level constructor for this type of agent. Finally, we will walk through how to construct a conversational retrieval agent from components."),(0,o.kt)("h2",{id:"the-retriever"},"The Retriever"),(0,o.kt)("p",null,"To start, we need a retriever to use! The code here is mostly just example code. Feel free to use your own retriever and skip to the section on creating a retriever tool."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "TextLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.text.TextLoader.html", "title": "Conversational Retrieval Agent"}]--\x3e\nfrom langchain.document_loaders import TextLoader\nloader = TextLoader(\'../../../../../docs/extras/modules/state_of_the_union.txt\')\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "CharacterTextSplitter", "source": "langchain.text_splitter", "docs": "https://api.python.langchain.com/en/latest/text_splitter/langchain.text_splitter.CharacterTextSplitter.html", "title": "Conversational Retrieval Agent"}, {"imported": "FAISS", "source": "langchain.vectorstores", "docs": "https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.faiss.FAISS.html", "title": "Conversational Retrieval Agent"}, {"imported": "OpenAIEmbeddings", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.openai.OpenAIEmbeddings.html", "title": "Conversational Retrieval Agent"}]--\x3e\nfrom langchain.text_splitter import CharacterTextSplitter\nfrom langchain.vectorstores import FAISS\nfrom langchain.embeddings import OpenAIEmbeddings\n\ndocuments = loader.load()\ntext_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)\ntexts = text_splitter.split_documents(documents)\nembeddings = OpenAIEmbeddings()\ndb = FAISS.from_documents(texts, embeddings)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"retriever = db.as_retriever()\n")),(0,o.kt)("h2",{id:"retriever-tool"},"Retriever Tool"),(0,o.kt)("p",null,"Now we need to create a tool for our retriever. The main things we need to pass in are a name for the retriever as well as a description. These will both be used by the language model, so they should be informative."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "create_retriever_tool", "source": "langchain.agents.agent_toolkits", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.agent_toolkits.conversational_retrieval.tool.create_retriever_tool.html", "title": "Conversational Retrieval Agent"}]--\x3e\nfrom langchain.agents.agent_toolkits import create_retriever_tool\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'tool = create_retriever_tool(\n    retriever, \n    "search_state_of_union",\n    "Searches and returns documents regarding the state-of-the-union."\n)\ntools = [tool]\n')),(0,o.kt)("h2",{id:"agent-constructor"},"Agent Constructor"),(0,o.kt)("p",null,"Here, we will use the high level ",(0,o.kt)("inlineCode",{parentName:"p"},"create_conversational_retrieval_agent")," API to construct the agent."),(0,o.kt)("p",null,"Notice that beside the list of tools, the only thing we need to pass in is a language model to use.\nUnder the hood, this agent is using the OpenAIFunctionsAgent, so we need to use an ChatOpenAI model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "create_conversational_retrieval_agent", "source": "langchain.agents.agent_toolkits", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.agent_toolkits.conversational_retrieval.openai_functions.create_conversational_retrieval_agent.html", "title": "Conversational Retrieval Agent"}]--\x3e\nfrom langchain.agents.agent_toolkits import create_conversational_retrieval_agent\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Conversational Retrieval Agent"}]--\x3e\nfrom langchain.chat_models import ChatOpenAI\nllm = ChatOpenAI(temperature = 0)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"agent_executor = create_conversational_retrieval_agent(llm, tools, verbose=True)\n")),(0,o.kt)("p",null,"We can now try it out!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'result = agent_executor({"input": "hi, im bob"})\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    Hello Bob! How can I assist you today?\n    \n    > Finished chain.\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'result["output"]\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    'Hello Bob! How can I assist you today?'\n"))),(0,o.kt)("p",null,"Notice that it remembers your name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'result = agent_executor({"input": "whats my name?"})\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    Your name is Bob.\n    \n    > Finished chain.\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'result["output"]\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    'Your name is Bob.'\n"))),(0,o.kt)("p",null,"Notice that it now does retrieval"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'result = agent_executor({"input": "what did the president say about kentaji brown jackson in the most recent state of the union?"})\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    \n    Invoking: `search_state_of_union` with `{'query': 'Kentaji Brown Jackson'}`\n    \n    \n    [Document(page_content='Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \\n\\nTonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \\n\\nOne of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \\n\\nAnd I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.', metadata={'source': '../../../../../docs/extras/modules/state_of_the_union.txt'}), Document(page_content='One was stationed at bases and breathing in toxic smoke from \u201cburn pits\u201d that incinerated wastes of war\u2014medical and hazard material, jet fuel, and more. \\n\\nWhen they came home, many of the world\u2019s fittest and best trained warriors were never the same. \\n\\nHeadaches. Numbness. Dizziness. \\n\\nA cancer that would put them in a flag-draped coffin. \\n\\nI know. \\n\\nOne of those soldiers was my son Major Beau Biden. \\n\\nWe don\u2019t know for sure if a burn pit was the cause of his brain cancer, or the diseases of so many of our troops. \\n\\nBut I\u2019m committed to finding out everything we can. \\n\\nCommitted to military families like Danielle Robinson from Ohio. \\n\\nThe widow of Sergeant First Class Heath Robinson.  \\n\\nHe was born a soldier. Army National Guard. Combat medic in Kosovo and Iraq. \\n\\nStationed near Baghdad, just yards from burn pits the size of football fields. \\n\\nHeath\u2019s widow Danielle is here with us tonight. They loved going to Ohio State football games. He loved building Legos with their daughter.', metadata={'source': '../../../../../docs/extras/modules/state_of_the_union.txt'}), Document(page_content='A former top litigator in private practice. A former federal public defender. And from a family of public school educators and police officers. A consensus builder. Since she\u2019s been nominated, she\u2019s received a broad range of support\u2014from the Fraternal Order of Police to former judges appointed by Democrats and Republicans. \\n\\nAnd if we are to advance liberty and justice, we need to secure the Border and fix the immigration system. \\n\\nWe can do both. At our border, we\u2019ve installed new technology like cutting-edge scanners to better detect drug smuggling.  \\n\\nWe\u2019ve set up joint patrols with Mexico and Guatemala to catch more human traffickers.  \\n\\nWe\u2019re putting in place dedicated immigration judges so families fleeing persecution and violence can have their cases heard faster. \\n\\nWe\u2019re securing commitments and supporting partners in South and Central America to host more refugees and secure their own borders.', metadata={'source': '../../../../../docs/extras/modules/state_of_the_union.txt'}), Document(page_content='We can\u2019t change how divided we\u2019ve been. But we can change how we move forward\u2014on COVID-19 and other issues we must face together. \\n\\nI recently visited the New York City Police Department days after the funerals of Officer Wilbert Mora and his partner, Officer Jason Rivera. \\n\\nThey were responding to a 9-1-1 call when a man shot and killed them with a stolen gun. \\n\\nOfficer Mora was 27 years old. \\n\\nOfficer Rivera was 22. \\n\\nBoth Dominican Americans who\u2019d grown up on the same streets they later chose to patrol as police officers. \\n\\nI spoke with their families and told them that we are forever in debt for their sacrifice, and we will carry on their mission to restore the trust and safety every community deserves. \\n\\nI\u2019ve worked on these issues a long time. \\n\\nI know what works: Investing in crime preventionand community police officers who\u2019ll walk the beat, who\u2019ll know the neighborhood, and who can restore trust and safety.', metadata={'source': '../../../../../docs/extras/modules/state_of_the_union.txt'})]In the most recent state of the union, the President mentioned Kentaji Brown Jackson. The President nominated Circuit Court of Appeals Judge Ketanji Brown Jackson to serve on the United States Supreme Court. The President described Judge Ketanji Brown Jackson as one of our nation's top legal minds who will continue Justice Breyer's legacy of excellence.\n    \n    > Finished chain.\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'result["output"]\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \"In the most recent state of the union, the President mentioned Kentaji Brown Jackson. The President nominated Circuit Court of Appeals Judge Ketanji Brown Jackson to serve on the United States Supreme Court. The President described Judge Ketanji Brown Jackson as one of our nation's top legal minds who will continue Justice Breyer's legacy of excellence.\"\n"))),(0,o.kt)("p",null,"Notice that the follow up question asks about information previously retrieved, so no need to do another retrieval"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'result = agent_executor({"input": "how long ago did he nominate her?"})\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    The President nominated Judge Ketanji Brown Jackson four days ago.\n    \n    > Finished chain.\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'result["output"]\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    'The President nominated Judge Ketanji Brown Jackson four days ago.'\n"))),(0,o.kt)("h2",{id:"creating-from-components"},"Creating from components"),(0,o.kt)("p",null,"What actually is going on underneath the hood? Let's take a look so we can understand how to modify going forward."),(0,o.kt)("p",null,"There are a few components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The memory"),(0,o.kt)("li",{parentName:"ul"},"The prompt template"),(0,o.kt)("li",{parentName:"ul"},"The agent"),(0,o.kt)("li",{parentName:"ul"},"The agent executor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# This is needed for both the memory and the prompt\nmemory_key = "history"\n')),(0,o.kt)("h3",{id:"the-memory"},"The Memory"),(0,o.kt)("p",null,"In this example, we want the agent to remember not only previous conversations, but also previous intermediate steps. For that, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"AgentTokenBufferMemory"),". Note that if you want to change whether the agent remembers intermediate steps, or how the long the buffer is, or anything like that you should change this part."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "AgentTokenBufferMemory", "source": "langchain.agents.openai_functions_agent.agent_token_buffer_memory", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.openai_functions_agent.agent_token_buffer_memory.AgentTokenBufferMemory.html", "title": "Conversational Retrieval Agent"}]--\x3e\nfrom langchain.agents.openai_functions_agent.agent_token_buffer_memory import AgentTokenBufferMemory\n\nmemory = AgentTokenBufferMemory(memory_key=memory_key, llm=llm)\n')),(0,o.kt)("h2",{id:"the-prompt-template"},"The Prompt Template"),(0,o.kt)("p",null,"For the prompt template, we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenAIFunctionsAgent")," default way of creating one, but pass in a system prompt and a placeholder for memory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAIFunctionsAgent", "source": "langchain.agents.openai_functions_agent.base", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.openai_functions_agent.base.OpenAIFunctionsAgent.html", "title": "Conversational Retrieval Agent"}, {"imported": "SystemMessage", "source": "langchain.schema.messages", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.messages.SystemMessage.html", "title": "Conversational Retrieval Agent"}, {"imported": "MessagesPlaceholder", "source": "langchain.prompts", "docs": "https://api.python.langchain.com/en/latest/prompts/langchain.prompts.chat.MessagesPlaceholder.html", "title": "Conversational Retrieval Agent"}]--\x3e\nfrom langchain.agents.openai_functions_agent.base import OpenAIFunctionsAgent\nfrom langchain.schema.messages import SystemMessage\nfrom langchain.prompts import MessagesPlaceholder\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'system_message = SystemMessage(\n        content=(\n            "Do your best to answer the questions. "\n            "Feel free to use any tools available to look up "\n            "relevant information, only if neccessary"\n        )\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"prompt = OpenAIFunctionsAgent.create_prompt(\n        system_message=system_message,\n        extra_prompt_messages=[MessagesPlaceholder(variable_name=memory_key)]\n    )\n")),(0,o.kt)("h2",{id:"the-agent"},"The Agent"),(0,o.kt)("p",null,"We will use the OpenAIFunctionsAgent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"agent = OpenAIFunctionsAgent(llm=llm, tools=tools, prompt=prompt)\n")),(0,o.kt)("h2",{id:"the-agent-executor"},"The Agent Executor"),(0,o.kt)("p",null,"Importantly, we pass in ",(0,o.kt)("inlineCode",{parentName:"p"},"return_intermediate_steps=True")," since we are recording that with our memory object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "AgentExecutor", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.agent.AgentExecutor.html", "title": "Conversational Retrieval Agent"}]--\x3e\nfrom langchain.agents import AgentExecutor\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"agent_executor = AgentExecutor(agent=agent, tools=tools, memory=memory, verbose=True,\n                                   return_intermediate_steps=True)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'result = agent_executor({"input": "hi, im bob"})\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    Hello Bob! How can I assist you today?\n    \n    > Finished chain.\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'result = agent_executor({"input": "whats my name"})\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    Your name is Bob.\n    \n    > Finished chain.\n"))))}d.isMDXComponent=!0}}]);
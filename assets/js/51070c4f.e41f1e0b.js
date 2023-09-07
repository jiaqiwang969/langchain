"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,d=c["".concat(i,".").concat(u)]||c[u]||h[u]||l;return n?a.createElement(d,r(r({ref:t},m),{},{components:n})):a.createElement(d,r({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const l={},r="Use local LLMs",s={unversionedId:"use_cases/question_answering/how_to/local_retrieval_qa",id:"use_cases/question_answering/how_to/local_retrieval_qa",title:"Use local LLMs",description:"The popularity of projects like PrivateGPT, llama.cpp, and GPT4All underscore the importance of running LLMs locally.",source:"@site/docs/use_cases/question_answering/how_to/local_retrieval_qa.md",sourceDirName:"use_cases/question_answering/how_to",slug:"/use_cases/question_answering/how_to/local_retrieval_qa",permalink:"/langchain/docs/use_cases/question_answering/how_to/local_retrieval_qa",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"use_cases",previous:{title:"Improve document indexing with HyDE",permalink:"/langchain/docs/use_cases/question_answering/how_to/hyde"},next:{title:"Dynamically select from multiple retrievers",permalink:"/langchain/docs/use_cases/question_answering/how_to/multi_retrieval_qa_router"}},i={},p=[{value:"Document Loading",id:"document-loading",level:2},{value:"Model",id:"model",level:2},{value:"LLaMA2",id:"llama2",level:3},{value:"GPT4All",id:"gpt4all",level:3},{value:"LLMChain",id:"llmchain",level:2},{value:"QA Chain",id:"qa-chain",level:2},{value:"RetrievalQA",id:"retrievalqa",level:2}],m=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const h={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-local-llms"},"Use local LLMs"),(0,o.kt)("p",null,"The popularity of projects like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/imartinez/privateGPT"},"PrivateGPT"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ggerganov/llama.cpp"},"llama.cpp"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nomic-ai/gpt4all"},"GPT4All")," underscore the importance of running LLMs locally."),(0,o.kt)("p",null,"LangChain has ",(0,o.kt)("a",{parentName:"p",href:"https://integrations.langchain.com/"},"integrations")," with many open source LLMs that can be run locally."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"docs/guides/local_llms"},"here")," for setup instructions for these LLMs. "),(0,o.kt)("p",null,"For example, here we show how to run ",(0,o.kt)("inlineCode",{parentName:"p"},"GPT4All")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"LLaMA2")," locally (e.g., on your laptop) using local embeddings and a local LLM."),(0,o.kt)("h2",{id:"document-loading"},"Document Loading"),(0,o.kt)("p",null,"First, install packages needed for local embeddings and vector storage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install gpt4all chromadb langchainhub\n")),(0,o.kt)("p",null,"Load and split an example docucment."),(0,o.kt)("p",null,"We'll use a blog post on agents as an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "WebBaseLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.web_base.WebBaseLoader.html", "title": "Use local LLMs"}, {"imported": "RecursiveCharacterTextSplitter", "source": "langchain.text_splitter", "docs": "https://api.python.langchain.com/en/latest/text_splitter/langchain.text_splitter.RecursiveCharacterTextSplitter.html", "title": "Use local LLMs"}]--\x3e\nfrom langchain.document_loaders import WebBaseLoader\n\nloader = WebBaseLoader("https://lilianweng.github.io/posts/2023-06-23-agent/")\ndata = loader.load()\n\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\n\ntext_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=0)\nall_splits = text_splitter.split_documents(data)\n')),(0,o.kt)("p",null,"Next, the below steps will download the ",(0,o.kt)("inlineCode",{parentName:"p"},"GPT4All")," embeddings locally (if you don't already have them)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "Chroma", "source": "langchain.vectorstores", "docs": "https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.chroma.Chroma.html", "title": "Use local LLMs"}, {"imported": "GPT4AllEmbeddings", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.gpt4all.GPT4AllEmbeddings.html", "title": "Use local LLMs"}]--\x3e\nfrom langchain.vectorstores import Chroma\nfrom langchain.embeddings import GPT4AllEmbeddings\n\nvectorstore = Chroma.from_documents(documents=all_splits, embedding=GPT4AllEmbeddings())\n')),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Found model file at  /Users/rlm/.cache/gpt4all/ggml-all-MiniLM-L6-v2-f16.bin\n\n\n    objc[49534]: Class GGMLMetalClass is implemented in both /Users/rlm/miniforge3/envs/llama2/lib/python3.9/site-packages/gpt4all/llmodel_DO_NOT_MODIFY/build/libreplit-mainline-metal.dylib (0x131614208) and /Users/rlm/miniforge3/envs/llama2/lib/python3.9/site-packages/gpt4all/llmodel_DO_NOT_MODIFY/build/libllamamodel-mainline-metal.dylib (0x131988208). One of the two will be used. Which one is undefined.\n"))),(0,o.kt)("p",null,"Test similarity search is working with our local embeddings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'question = "What are the approaches to Task Decomposition?"\ndocs = vectorstore.similarity_search(question)\nlen(docs)\n')),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    4\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"docs[0]\n")),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Document(page_content='Task decomposition can be done (1) by LLM with simple prompting like \"Steps for XYZ.\\\\n1.\", \"What are the subgoals for achieving XYZ?\", (2) by using task-specific instructions; e.g. \"Write a story outline.\" for writing a novel, or (3) with human inputs.', metadata={'description': 'Building agents with LLM (large language model) as its core controller is a cool concept. Several proof-of-concepts demos, such as AutoGPT, GPT-Engineer and BabyAGI, serve as inspiring examples. The potentiality of LLM extends beyond generating well-written copies, stories, essays and programs; it can be framed as a powerful general problem solver.\\nAgent System Overview In a LLM-powered autonomous agent system, LLM functions as the agent\u2019s brain, complemented by several key components:', 'language': 'en', 'source': 'https://lilianweng.github.io/posts/2023-06-23-agent/', 'title': \"LLM Powered Autonomous Agents | Lil'Log\"})\n"))),(0,o.kt)("h2",{id:"model"},"Model"),(0,o.kt)("h3",{id:"llama2"},"LLaMA2"),(0,o.kt)("p",null,"Note: new versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"llama-cpp-python")," use GGUF model files (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/abetlen/llama-cpp-python/pull/633"},"here"),")."),(0,o.kt)("p",null,"If you have an existing GGML model, see ",(0,o.kt)("a",{parentName:"p",href:"docs/integrations/llms/llamacpp"},"here")," for instructions for conversion for GGUF. "),(0,o.kt)("p",null,"And / or, you can download a GGUF converted model (e.g., ",(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/TheBloke"},"here"),")."),(0,o.kt)("p",null,"Finally, as noted in detail ",(0,o.kt)("a",{parentName:"p",href:"docs/guides/local_llms"},"here")," install ",(0,o.kt)("inlineCode",{parentName:"p"},"llama-cpp-python")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install llama-cpp-python\n")),(0,o.kt)("p",null,"To enable use of GPU on Apple Silicon, follow the steps ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/abetlen/llama-cpp-python/blob/main/docs/install/macos.md"},"here")," to use the Python binding ",(0,o.kt)("inlineCode",{parentName:"p"},"with Metal support"),"."),(0,o.kt)("p",null,"In particular, ensure that ",(0,o.kt)("inlineCode",{parentName:"p"},"conda")," is using the correct virtual enviorment that you created (",(0,o.kt)("inlineCode",{parentName:"p"},"miniforge3"),")."),(0,o.kt)("p",null,"E.g., for me:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"conda activate /Users/rlm/miniforge3/envs/llama\n")),(0,o.kt)("p",null,"With this confirmed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'CMAKE_ARGS="-DLLAMA_METAL=on" FORCE_CMAKE=1 /Users/rlm/miniforge3/envs/llama/bin/pip install -U llama-cpp-python --no-cache-dir\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "LlamaCpp", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.llamacpp.LlamaCpp.html", "title": "Use local LLMs"}, {"imported": "CallbackManager", "source": "langchain.callbacks.manager", "docs": "https://api.python.langchain.com/en/latest/callbacks/langchain.callbacks.manager.CallbackManager.html", "title": "Use local LLMs"}, {"imported": "StreamingStdOutCallbackHandler", "source": "langchain.callbacks.streaming_stdout", "docs": "https://api.python.langchain.com/en/latest/callbacks/langchain.callbacks.streaming_stdout.StreamingStdOutCallbackHandler.html", "title": "Use local LLMs"}]--\x3e\nfrom langchain.llms import LlamaCpp\nfrom langchain.callbacks.manager import CallbackManager\nfrom langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler\n')),(0,o.kt)("p",null,"Setting model parameters as noted in the ",(0,o.kt)("a",{parentName:"p",href:"https://python.langchain.com/docs/integrations/llms/llamacpp"},"llama.cpp docs"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'n_gpu_layers = 1  # Metal set to 1 is enough.\nn_batch = 512  # Should be between 1 and n_ctx, consider the amount of RAM of your Apple Silicon Chip.\ncallback_manager = CallbackManager([StreamingStdOutCallbackHandler()])\n\n# Make sure the model path is correct for your system!\nllm = LlamaCpp(\n    model_path="/Users/rlm/Desktop/Code/llama.cpp/models/llama-2-13b-chat.ggufv3.q4_0.bin",\n    n_gpu_layers=n_gpu_layers,\n    n_batch=n_batch,\n    n_ctx=2048,\n    f16_kv=True,  # MUST set to True, otherwise you will run into problem after a couple of calls\n    callback_manager=callback_manager,\n    verbose=True,\n)\n')),(0,o.kt)("p",null,"Note that these indicate that ",(0,o.kt)("a",{parentName:"p",href:"https://python.langchain.com/docs/integrations/llms/llamacpp"},"Metal was enabled properly"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ggml_metal_init: allocating\nggml_metal_init: using MPS\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'llm("Simulate a rap battle between Stephen Colbert and John Oliver")\n')),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Llama.generate: prefix-match hit\n\n\n    by jonathan \n    \n    Here's the hypothetical rap battle:\n    \n    [Stephen Colbert]: Yo, this is Stephen Colbert, known for my comedy show. I'm here to put some sense in your mind, like an enema do-go. Your opponent? A man of laughter and witty quips, John Oliver! Now let's see who gets the most laughs while taking shots at each other\n    \n    [John Oliver]: Yo, this is John Oliver, known for my own comedy show. I'm here to take your mind on an adventure through wit and humor. But first, allow me to you to our contestant: Stephen Colbert! His show has been around since the '90s, but it's time to see who can out-rap whom\n    \n    [Stephen Colbert]: You claim to be a witty man, John Oliver, with your British charm and clever remarks. But my knows that I'm America's funnyman! Who's the one taking you? Nobody!\n    \n    [John Oliver]: Hey Stephen Colbert, don't get too cocky. You may\n\n    \n    llama_print_timings:        load time =  4481.74 ms\n    llama_print_timings:      sample time =   183.05 ms /   256 runs   (    0.72 ms per token,  1398.53 tokens per second)\n    llama_print_timings: prompt eval time =   456.05 ms /    13 tokens (   35.08 ms per token,    28.51 tokens per second)\n    llama_print_timings:        eval time =  7375.20 ms /   255 runs   (   28.92 ms per token,    34.58 tokens per second)\n    llama_print_timings:       total time =  8388.92 ms\n\n\n\n\n\n    \"by jonathan \\n\\nHere's the hypothetical rap battle:\\n\\n[Stephen Colbert]: Yo, this is Stephen Colbert, known for my comedy show. I'm here to put some sense in your mind, like an enema do-go. Your opponent? A man of laughter and witty quips, John Oliver! Now let's see who gets the most laughs while taking shots at each other\\n\\n[John Oliver]: Yo, this is John Oliver, known for my own comedy show. I'm here to take your mind on an adventure through wit and humor. But first, allow me to you to our contestant: Stephen Colbert! His show has been around since the '90s, but it's time to see who can out-rap whom\\n\\n[Stephen Colbert]: You claim to be a witty man, John Oliver, with your British charm and clever remarks. But my knows that I'm America's funnyman! Who's the one taking you? Nobody!\\n\\n[John Oliver]: Hey Stephen Colbert, don't get too cocky. You may\"\n"))),(0,o.kt)("h3",{id:"gpt4all"},"GPT4All"),(0,o.kt)("p",null,"Similarly, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"GPT4All"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://python.langchain.com/docs/integrations/llms/gpt4all"},"Download the GPT4All model binary"),"."),(0,o.kt)("p",null,"The Model Explorer on the ",(0,o.kt)("a",{parentName:"p",href:"https://gpt4all.io/index.html"},"GPT4All")," is a great way to choose and download a model."),(0,o.kt)("p",null,"Then, specify the path that you downloaded to to."),(0,o.kt)("p",null,"E.g., for me, the model lives here:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/Users/rlm/Desktop/Code/gpt4all/models/nous-hermes-13b.ggmlv3.q4_0.bin")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "GPT4All", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.gpt4all.GPT4All.html", "title": "Use local LLMs"}]--\x3e\nfrom langchain.llms import GPT4All\n\nllm = GPT4All(\n    model="/Users/rlm/Desktop/Code/gpt4all/models/nous-hermes-13b.ggmlv3.q4_0.bin",\n    max_tokens=2048,\n)\n')),(0,o.kt)("h2",{id:"llmchain"},"LLMChain"),(0,o.kt)("p",null,"Run an ",(0,o.kt)("inlineCode",{parentName:"p"},"LLMChain")," (see ",(0,o.kt)("a",{parentName:"p",href:"https://python.langchain.com/docs/modules/chains/foundational/llm_chain"},"here"),") with either model by passing in the retrieved docs and a simple prompt."),(0,o.kt)("p",null,"It formats the prompt template using the input key values provided and passes the formatted string to ",(0,o.kt)("inlineCode",{parentName:"p"},"GPT4All"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LLama-V2"),", or another specified LLM."),(0,o.kt)("p",null,"In this case, the list of retrieved documents (",(0,o.kt)("inlineCode",{parentName:"p"},"docs"),") above are pass into ",(0,o.kt)("inlineCode",{parentName:"p"},"{context}"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain import PromptTemplate, LLMChain\n\n# Prompt\nprompt = PromptTemplate.from_template(\n    "Summarize the main themes in these retrieved docs: {docs}"\n)\n\n# Chain\nllm_chain = LLMChain(llm=llm, prompt=prompt)\n\n# Run\nquestion = "What are the approaches to Task Decomposition?"\ndocs = vectorstore.similarity_search(question)\nresult = llm_chain(docs)\n\n# Output\nresult["text"]\n')),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Llama.generate: prefix-match hit\n\n\n    \n    Based on the retrieved documents, the main themes are:\n    1. Task decomposition: The ability to break down complex tasks into smaller subtasks, which can be handled by an LLM or other components of the agent system.\n    2. LLM as the core controller: The use of a large language model (LLM) as the primary controller of an autonomous agent system, complemented by other key components such as a knowledge graph and a planner.\n    3. Potentiality of LLM: The idea that LLMs have the potential to be used as powerful general problem solvers, not just for generating well-written copies but also for solving complex tasks and achieving human-like intelligence.\n    4. Challenges in long-term planning: The challenges in planning over a lengthy history and effectively exploring the solution space, which are important limitations of current LLM-based autonomous agent systems.\n\n    \n    llama_print_timings:        load time =  1191.88 ms\n    llama_print_timings:      sample time =   134.47 ms /   193 runs   (    0.70 ms per token,  1435.25 tokens per second)\n    llama_print_timings: prompt eval time = 39470.18 ms /  1055 tokens (   37.41 ms per token,    26.73 tokens per second)\n    llama_print_timings:        eval time =  8090.85 ms /   192 runs   (   42.14 ms per token,    23.73 tokens per second)\n    llama_print_timings:       total time = 47943.12 ms\n\n\n\n\n\n    '\\nBased on the retrieved documents, the main themes are:\\n1. Task decomposition: The ability to break down complex tasks into smaller subtasks, which can be handled by an LLM or other components of the agent system.\\n2. LLM as the core controller: The use of a large language model (LLM) as the primary controller of an autonomous agent system, complemented by other key components such as a knowledge graph and a planner.\\n3. Potentiality of LLM: The idea that LLMs have the potential to be used as powerful general problem solvers, not just for generating well-written copies but also for solving complex tasks and achieving human-like intelligence.\\n4. Challenges in long-term planning: The challenges in planning over a lengthy history and effectively exploring the solution space, which are important limitations of current LLM-based autonomous agent systems.'\n"))),(0,o.kt)("h2",{id:"qa-chain"},"QA Chain"),(0,o.kt)("p",null,"We can use a ",(0,o.kt)("inlineCode",{parentName:"p"},"QA chain")," to handle our question above."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'chain_type="stuff"')," (see ",(0,o.kt)("a",{parentName:"p",href:"https://python.langchain.com/docs/modules/chains/document/stuff"},"here"),") means that all the docs will be added (stuffed) into a prompt."),(0,o.kt)("p",null,"We can also use the LangChain Prompt Hub to store and fetch prompts that are model-specific."),(0,o.kt)("p",null,"This will work with your ",(0,o.kt)("a",{parentName:"p",href:"https://docs.smith.langchain.com/"},"LangSmith API key"),"."),(0,o.kt)("p",null,"Let's try with a default RAG prompt, ",(0,o.kt)("a",{parentName:"p",href:"https://smith.langchain.com/hub/rlm/rag-prompt"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install langchainhub\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "load_qa_chain", "source": "langchain.chains.question_answering", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.question_answering.load_qa_chain.html", "title": "Use local LLMs"}]--\x3e\n# Prompt \nfrom langchain import hub\nrag_prompt = hub.pull("rlm/rag-prompt")\nfrom langchain.chains.question_answering import load_qa_chain\n# Chain\nchain = load_qa_chain(llm, chain_type="stuff", prompt=rag_prompt)\n# Run\nchain({"input_documents": docs, "question": question}, return_only_outputs=True)\n')),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    Llama.generate: prefix-match hit\n\n\n    \n    Task can be done by down a task into smaller subtasks, using simple prompting like "Steps for XYZ." or task-specific like "Write a story outline" for writing a novel.\n\n    \n    llama_print_timings:        load time = 11326.20 ms\n    llama_print_timings:      sample time =    33.03 ms /    47 runs   (    0.70 ms per token,  1422.86 tokens per second)\n    llama_print_timings: prompt eval time =  1387.31 ms /   242 tokens (    5.73 ms per token,   174.44 tokens per second)\n    llama_print_timings:        eval time =  1321.62 ms /    46 runs   (   28.73 ms per token,    34.81 tokens per second)\n    llama_print_timings:       total time =  2801.08 ms\n\n\n\n\n\n    {\'output_text\': \'\\nTask can be done by down a task into smaller subtasks, using simple prompting like "Steps for XYZ." or task-specific like "Write a story outline" for writing a novel.\'}\n'))),(0,o.kt)("p",null,"Now, let's try with ",(0,o.kt)("a",{parentName:"p",href:"https://smith.langchain.com/hub/rlm/rag-prompt-llama"},"a prompt specifically for LLaMA"),", which ",(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/blog/llama2#how-to-prompt-llama-2"},"includes special tokens"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Prompt\nrag_prompt_llama = hub.pull("rlm/rag-prompt-llama")\nrag_prompt_llama\n')),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    ChatPromptTemplate(input_variables=['question', 'context'], output_parser=None, partial_variables={}, messages=[HumanMessagePromptTemplate(prompt=PromptTemplate(input_variables=['question', 'context'], output_parser=None, partial_variables={}, template=\"[INST]<<SYS>> You are an assistant for question-answering tasks. Use the following pieces of retrieved context to answer the question. If you don't know the answer, just say that you don't know. Use three sentences maximum and keep the answer concise.<</SYS>> \\nQuestion: {question} \\nContext: {context} \\nAnswer: [/INST]\", template_format='f-string', validate_template=True), additional_kwargs={})])\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Chain\nchain = load_qa_chain(llm, chain_type="stuff", prompt=rag_prompt_llama)\n# Run\nchain({"input_documents": docs, "question": question}, return_only_outputs=True)\n')),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    Llama.generate: prefix-match hit\n\n\n      Sure, I\'d be happy to help! Based on the context, here are some to task:\n    \n    1. LLM with simple prompting: This using a large model (LLM) with simple prompts like "Steps for XYZ" or "What are the subgoals for achieving XYZ?" to decompose tasks into smaller steps.\n    2. Task-specific: Another is to use task-specific, such as "Write a story outline" for writing a novel, to guide the of tasks.\n    3. Human inputs:, human inputs can be used to supplement the process, in cases where the task a high degree of creativity or expertise.\n    \n    As fores in long-term and task, one major is that LLMs to adjust plans when faced with errors, making them less robust to humans who learn from trial and error.\n\n    \n    llama_print_timings:        load time = 11326.20 ms\n    llama_print_timings:      sample time =   144.81 ms /   207 runs   (    0.70 ms per token,  1429.47 tokens per second)\n    llama_print_timings: prompt eval time =  1506.13 ms /   258 tokens (    5.84 ms per token,   171.30 tokens per second)\n    llama_print_timings:        eval time =  6231.92 ms /   206 runs   (   30.25 ms per token,    33.06 tokens per second)\n    llama_print_timings:       total time =  8158.41 ms\n\n\n\n\n\n    {\'output_text\': \'  Sure, I\\\'d be happy to help! Based on the context, here are some to task:\\n\\n1. LLM with simple prompting: This using a large model (LLM) with simple prompts like "Steps for XYZ" or "What are the subgoals for achieving XYZ?" to decompose tasks into smaller steps.\\n2. Task-specific: Another is to use task-specific, such as "Write a story outline" for writing a novel, to guide the of tasks.\\n3. Human inputs:, human inputs can be used to supplement the process, in cases where the task a high degree of creativity or expertise.\\n\\nAs fores in long-term and task, one major is that LLMs to adjust plans when faced with errors, making them less robust to humans who learn from trial and error.\'}\n'))),(0,o.kt)("h2",{id:"retrievalqa"},"RetrievalQA"),(0,o.kt)("p",null,"For an even simpler flow, use ",(0,o.kt)("inlineCode",{parentName:"p"},"RetrievalQA"),"."),(0,o.kt)("p",null,"This will use a QA default prompt (shown ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchain/blob/275b926cf745b5668d3ea30236635e20e7866442/langchain/chains/retrieval_qa/prompt.py#L4"},"here"),") and will retrieve from the vectorDB."),(0,o.kt)("p",null,"But, you can still pass in a prompt, as before, if desired."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "RetrievalQA", "source": "langchain.chains", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.retrieval_qa.base.RetrievalQA.html", "title": "Use local LLMs"}]--\x3e\nfrom langchain.chains import RetrievalQA\n\nqa_chain = RetrievalQA.from_chain_type(\n    llm,\n    retriever=vectorstore.as_retriever(),\n    chain_type_kwargs={"prompt": rag_prompt_llama},\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'qa_chain({"query": question})\n')),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    Llama.generate: prefix-match hit\n\n\n      Sure! Based on the context, here\'s my answer to your:\n    \n    There are several to task,:\n    \n    1. LLM-based with simple prompting, such as "Steps for XYZ" or "What are the subgoals for achieving XYZ?"\n    2. Task-specific, like "Write a story outline" for writing a novel.\n    3. Human inputs to guide the process.\n    \n    These can be used to decompose complex tasks into smaller, more manageable subtasks, which can help improve the and effectiveness of task. However, long-term and task can being due to the need to plan over a lengthy history and explore the space., LLMs may to adjust plans when faced with errors, making them less robust to human learners who can learn from trial and error.\n\n    \n    llama_print_timings:        load time = 11326.20 ms\n    llama_print_timings:      sample time =   139.20 ms /   200 runs   (    0.70 ms per token,  1436.76 tokens per second)\n    llama_print_timings: prompt eval time =  1532.26 ms /   258 tokens (    5.94 ms per token,   168.38 tokens per second)\n    llama_print_timings:        eval time =  5977.62 ms /   199 runs   (   30.04 ms per token,    33.29 tokens per second)\n    llama_print_timings:       total time =  7916.21 ms\n\n\n\n\n\n    {\'query\': \'What are the approaches to Task Decomposition?\',\n     \'result\': \'  Sure! Based on the context, here\\\'s my answer to your:\\n\\nThere are several to task,:\\n\\n1. LLM-based with simple prompting, such as "Steps for XYZ" or "What are the subgoals for achieving XYZ?"\\n2. Task-specific, like "Write a story outline" for writing a novel.\\n3. Human inputs to guide the process.\\n\\nThese can be used to decompose complex tasks into smaller, more manageable subtasks, which can help improve the and effectiveness of task. However, long-term and task can being due to the need to plan over a lengthy history and explore the space., LLMs may to adjust plans when faced with errors, making them less robust to human learners who can learn from trial and error.\'}\n'))))}d.isMDXComponent=!0}}]);
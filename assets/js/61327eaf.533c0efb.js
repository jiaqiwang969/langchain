"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47985],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=s,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},22290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));const r={},o="iMessage",i={unversionedId:"integrations/chat_loaders/imessage",id:"integrations/chat_loaders/imessage",title:"iMessage",description:"This notebook shows how to use the iMessage chat loader. This class helps convert iMessage conversations to LangChain chat messages.",source:"@site/docs/integrations/chat_loaders/imessage.md",sourceDirName:"integrations/chat_loaders",slug:"/integrations/chat_loaders/imessage",permalink:"/langchain/docs/integrations/chat_loaders/imessage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"GMail",permalink:"/langchain/docs/integrations/chat_loaders/gmail"},next:{title:"Slack",permalink:"/langchain/docs/integrations/chat_loaders/slack"}},l={},p=[{value:"1. Access Chat DB",id:"1-access-chat-db",level:2},{value:"2. Create the Chat Loader",id:"2-create-the-chat-loader",level:2},{value:"3. Load messages",id:"3-load-messages",level:2},{value:"3. Prepare for fine-tuning",id:"3-prepare-for-fine-tuning",level:2},{value:"4. Fine-tune the model",id:"4-fine-tune-the-model",level:2},{value:"5. Use in LangChain",id:"5-use-in-langchain",level:2}],c=(m="CodeOutputBlock",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)});var m;const d={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"imessage"},"iMessage"),(0,s.kt)("p",null,"This notebook shows how to use the iMessage chat loader. This class helps convert iMessage conversations to LangChain chat messages."),(0,s.kt)("p",null,"On MacOS, iMessage stores conversations in a sqlite database at ",(0,s.kt)("inlineCode",{parentName:"p"},"~/Library/Messages/chat.db")," (at least for macOS Ventura 13.4).\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"IMessageChatLoader")," loads from this database file. "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create the ",(0,s.kt)("inlineCode",{parentName:"li"},"IMessageChatLoader")," with the file path pointed to ",(0,s.kt)("inlineCode",{parentName:"li"},"chat.db")," database you'd like to process."),(0,s.kt)("li",{parentName:"ol"},"Call ",(0,s.kt)("inlineCode",{parentName:"li"},"loader.load()")," (or ",(0,s.kt)("inlineCode",{parentName:"li"},"loader.lazy_load()"),") to perform the conversion. Optionally use ",(0,s.kt)("inlineCode",{parentName:"li"},"merge_chat_runs")," to combine message from the same sender in sequence, and/or ",(0,s.kt)("inlineCode",{parentName:"li"},"map_ai_messages"),' to convert messages from the specified sender to the "AIMessage" class.')),(0,s.kt)("h2",{id:"1-access-chat-db"},"1. Access Chat DB"),(0,s.kt)("p",null,"It's likely that your terminal is denied access to ",(0,s.kt)("inlineCode",{parentName:"p"},"~/Library/Messages"),". To use this class, you can copy the DB to an accessible directory (e.g., Documents) and load from there. Alternatively (and not recommended), you can grant full disk access for your terminal emulator in System Settings > Securityand Privacy > Full Disk Access."),(0,s.kt)("p",null,"We have created an example database you can use at ",(0,s.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1NebNKqTA2NXApCmeH6mu0unJD2tANZzo/view?usp=sharing"},"this linked drive file"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# This uses some example data\nimport requests\n\ndef download_drive_file(url: str, output_path: str = 'chat.db') -> None:\n    file_id = url.split('/')[-2]\n    download_url = f'https://drive.google.com/uc?export=download&id={file_id}'\n\n    response = requests.get(download_url)\n    if response.status_code != 200:\n        print('Failed to download the file.')\n        return\n\n    with open(output_path, 'wb') as file:\n        file.write(response.content)\n        print(f'File {output_path} downloaded.')\n\nurl = 'https://drive.google.com/file/d/1NebNKqTA2NXApCmeH6mu0unJD2tANZzo/view?usp=sharing'\n\n# Download file to chat.db\ndownload_drive_file(url)\n")),(0,s.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    File chat.db downloaded.\n"))),(0,s.kt)("h2",{id:"2-create-the-chat-loader"},"2. Create the Chat Loader"),(0,s.kt)("p",null,"Provide the loader with the file path to the zip directory. You can optionally specify the user id that maps to an ai message as well an configure whether to merge message runs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "IMessageChatLoader", "source": "langchain.chat_loaders.imessage", "docs": "https://api.python.langchain.com/en/latest/chat_loaders/langchain.chat_loaders.imessage.IMessageChatLoader.html", "title": "iMessage"}]--\x3e\nfrom langchain.chat_loaders.imessage import IMessageChatLoader\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'loader = IMessageChatLoader(\n    path="./chat.db",\n)\n')),(0,s.kt)("h2",{id:"3-load-messages"},"3. Load messages"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"load()")," (or ",(0,s.kt)("inlineCode",{parentName:"p"},"lazy_load"),') methods return a list of "ChatSessions" that currently just contain a list of messages per loaded conversation. All messages are mapped to "HumanMessage" objects to start. '),(0,s.kt)("p",null,'You can optionally choose to merge message "runs" (consecutive messages from the same sender) and select a sender to represent the "AI". The fine-tuned LLM will learn to generate these AI messages.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ChatSession", "source": "langchain.chat_loaders.base", "docs": "https://api.python.langchain.com/en/latest/chat_loaders/langchain.chat_loaders.base.ChatSession.html", "title": "iMessage"}, {"imported": "map_ai_messages", "source": "langchain.chat_loaders.utils", "docs": "https://api.python.langchain.com/en/latest/chat_loaders/langchain.chat_loaders.utils.map_ai_messages.html", "title": "iMessage"}, {"imported": "merge_chat_runs", "source": "langchain.chat_loaders.utils", "docs": "https://api.python.langchain.com/en/latest/chat_loaders/langchain.chat_loaders.utils.merge_chat_runs.html", "title": "iMessage"}]--\x3e\nfrom typing import List\nfrom langchain.chat_loaders.base import ChatSession\nfrom langchain.chat_loaders.utils import (\n    map_ai_messages,\n    merge_chat_runs,\n)\n\nraw_messages = loader.lazy_load()\n# Merge consecutive messages from the same sender into a single message\nmerged_messages = merge_chat_runs(raw_messages)\n# Convert messages from "Tortoise" to AI messages. Do you have a guess who these conversations are between?\nchat_sessions: List[ChatSession] = list(map_ai_messages(merged_messages, sender="Tortoise"))\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Now all of the Tortoise's messages will take the AI message class\n# which maps to the 'assistant' role in OpenAI's training format\nalternating_sessions[0]['messages'][:3]\n")),(0,s.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    [AIMessage(content=\"Slow and steady, that's my motto.\", additional_kwargs={'message_time': 1693182723, 'sender': 'Tortoise'}, example=False),\n     HumanMessage(content='Speed is key!', additional_kwargs={'message_time': 1693182753, 'sender': 'Hare'}, example=False),\n     AIMessage(content='A balanced approach is more reliable.', additional_kwargs={'message_time': 1693182783, 'sender': 'Tortoise'}, example=False)]\n"))),(0,s.kt)("h2",{id:"3-prepare-for-fine-tuning"},"3. Prepare for fine-tuning"),(0,s.kt)("p",null,"Now it's time to convert our chat  messages to OpenAI dictionaries. We can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"convert_messages_for_finetuning")," utility to do so."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "convert_messages_for_finetuning", "source": "langchain.adapters.openai", "docs": "https://api.python.langchain.com/en/latest/adapters/langchain.adapters.openai.convert_messages_for_finetuning.html", "title": "iMessage"}]--\x3e\nfrom langchain.adapters.openai import convert_messages_for_finetuning\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'training_data = convert_messages_for_finetuning(alternating_sessions)\nprint(f"Prepared {len(training_data)} dialogues for training")\n')),(0,s.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    Prepared 10 dialogues for training\n"))),(0,s.kt)("h2",{id:"4-fine-tune-the-model"},"4. Fine-tune the model"),(0,s.kt)("p",null,"It's time to fine-tune the model. Make sure you have ",(0,s.kt)("inlineCode",{parentName:"p"},"openai")," installed\nand have set your ",(0,s.kt)("inlineCode",{parentName:"p"},"OPENAI_API_KEY")," appropriately"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# %pip install -U openai --quiet\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import json\nfrom io import BytesIO\nimport time\n\nimport openai\n\n# We will write the jsonl file in memory\nmy_file = BytesIO()\nfor m in training_data:\n    my_file.write((json.dumps({"messages": m}) + "\\n").encode(\'utf-8\'))\n\nmy_file.seek(0)\ntraining_file = openai.File.create(\n  file=my_file,\n  purpose=\'fine-tune\'\n)\n\n# OpenAI audits each training file for compliance reasons.\n# This make take a few minutes\nstatus = openai.File.retrieve(training_file.id).status\nstart_time = time.time()\nwhile status != "processed":\n    print(f"Status=[{status}]... {time.time() - start_time:.2f}s", end="\\r", flush=True)\n    time.sleep(5)\n    status = openai.File.retrieve(training_file.id).status\nprint(f"File {training_file.id} ready after {time.time() - start_time:.2f} seconds.")\n')),(0,s.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    File file-zHIgf4r8LltZG3RFpkGd4Sjf ready after 10.19 seconds.\n"))),(0,s.kt)("p",null,"With the file ready, it's time to kick off a training job."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'job = openai.FineTuningJob.create(\n    training_file=training_file.id,\n    model="gpt-3.5-turbo",\n)\n')),(0,s.kt)("p",null,"Grab a cup of tea while your model is being prepared. This may take some time!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'status = openai.FineTuningJob.retrieve(job.id).status\nstart_time = time.time()\nwhile status != "succeeded":\n    print(f"Status=[{status}]... {time.time() - start_time:.2f}s", end="\\r", flush=True)\n    time.sleep(5)\n    job = openai.FineTuningJob.retrieve(job.id)\n    status = job.status\n')),(0,s.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    Status=[running]... 524.95s\n"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"print(job.fine_tuned_model)\n")),(0,s.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    ft:gpt-3.5-turbo-0613:personal::7sKoRdlz\n"))),(0,s.kt)("h2",{id:"5-use-in-langchain"},"5. Use in LangChain"),(0,s.kt)("p",null,"You can use the resulting model ID directly the ",(0,s.kt)("inlineCode",{parentName:"p"},"ChatOpenAI")," model class."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "iMessage"}]--\x3e\nfrom langchain.chat_models import ChatOpenAI\n\nmodel = ChatOpenAI(\n    model=job.fine_tuned_model,\n    temperature=1,\n)\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ChatPromptTemplate", "source": "langchain.prompts", "docs": "https://api.python.langchain.com/en/latest/prompts/langchain.prompts.chat.ChatPromptTemplate.html", "title": "iMessage"}, {"imported": "StrOutputParser", "source": "langchain.schema.output_parser", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.output_parser.StrOutputParser.html", "title": "iMessage"}]--\x3e\nfrom langchain.prompts import ChatPromptTemplate\nfrom langchain.schema.output_parser import StrOutputParser\n\nprompt = ChatPromptTemplate.from_messages(\n    [\n        ("system", "You are speaking to hare."),\n        ("human", "{input}"),\n    ]\n)\n\nchain = prompt | model | StrOutputParser()\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'for tok in chain.stream({"input": "What\'s the golden thread?"}):\n    print(tok, end="", flush=True)\n')),(0,s.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    A symbol of interconnectedness.\n"))))}h.isMDXComponent=!0}}]);
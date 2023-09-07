"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52251],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(a),d=o,u=h["".concat(i,".").concat(d)]||h[d]||m[d]||r;return a?n.createElement(u,s(s({ref:t},p),{},{components:a})):n.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},75518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={},s="Slack",l={unversionedId:"integrations/chat_loaders/slack",id:"integrations/chat_loaders/slack",title:"Slack",description:"This notebook shows how to use the Slack chat loader. This class helps map exported slack conversations to LangChain chat messages.",source:"@site/docs/integrations/chat_loaders/slack.md",sourceDirName:"integrations/chat_loaders",slug:"/integrations/chat_loaders/slack",permalink:"/langchain/docs/integrations/chat_loaders/slack",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"iMessage",permalink:"/langchain/docs/integrations/chat_loaders/imessage"},next:{title:"Telegram",permalink:"/langchain/docs/integrations/chat_loaders/telegram"}},i={},c=[{value:"1. Creat message dump",id:"1-creat-message-dump",level:2},{value:"2. Create the Chat Loader",id:"2-create-the-chat-loader",level:2},{value:"3. Load messages",id:"3-load-messages",level:2},{value:"Next Steps",id:"next-steps",level:3}],p=(h="CodeOutputBlock",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var h;const m={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slack"},"Slack"),(0,o.kt)("p",null,"This notebook shows how to use the Slack chat loader. This class helps map exported slack conversations to LangChain chat messages."),(0,o.kt)("p",null,"The process has three steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Export the desired conversation thread by following the ",(0,o.kt)("a",{parentName:"li",href:"https://slack.com/help/articles/1500001548241-Request-to-export-all-conversations"},"instructions here"),"."),(0,o.kt)("li",{parentName:"ol"},"Create the ",(0,o.kt)("inlineCode",{parentName:"li"},"SlackChatLoader")," with the file path pointed to the json file or directory of JSON files"),(0,o.kt)("li",{parentName:"ol"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"loader.load()")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"loader.lazy_load()"),") to perform the conversion. Optionally use ",(0,o.kt)("inlineCode",{parentName:"li"},"merge_chat_runs")," to combine message from the same sender in sequence, and/or ",(0,o.kt)("inlineCode",{parentName:"li"},"map_ai_messages"),' to convert messages from the specified sender to the "AIMessage" class.')),(0,o.kt)("h2",{id:"1-creat-message-dump"},"1. Creat message dump"),(0,o.kt)("p",null,"Currently (2023/08/23) this loader best supports a zip directory of files in the format generated by exporting your a direct message converstion from Slack. Follow up-to-date instructions from slack on how to do so."),(0,o.kt)("p",null,"We have an example in the LangChain repo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\npermalink = "https://raw.githubusercontent.com/langchain-ai/langchain/342087bdfa3ac31d622385d0f2d09cf5e06c8db3/libs/langchain/tests/integration_tests/examples/slack_export.zip"\nresponse = requests.get(permalink)\nwith open("slack_dump.zip", "wb") as f:\n    f.write(response.content)\n')),(0,o.kt)("h2",{id:"2-create-the-chat-loader"},"2. Create the Chat Loader"),(0,o.kt)("p",null,"Provide the loader with the file path to the zip directory. You can optionally specify the user id that maps to an ai message as well an configure whether to merge message runs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "SlackChatLoader", "source": "langchain.chat_loaders.slack", "docs": "https://api.python.langchain.com/en/latest/chat_loaders/langchain.chat_loaders.slack.SlackChatLoader.html", "title": "Slack"}]--\x3e\nfrom langchain.chat_loaders.slack import SlackChatLoader\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'loader = SlackChatLoader(\n    path="slack_dump.zip",\n)\n')),(0,o.kt)("h2",{id:"3-load-messages"},"3. Load messages"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"load()")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"lazy_load"),') methods return a list of "ChatSessions" that currently just contain a list of messages per loaded conversation.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ChatSession", "source": "langchain.chat_loaders.base", "docs": "https://api.python.langchain.com/en/latest/chat_loaders/langchain.chat_loaders.base.ChatSession.html", "title": "Slack"}, {"imported": "map_ai_messages", "source": "langchain.chat_loaders.utils", "docs": "https://api.python.langchain.com/en/latest/chat_loaders/langchain.chat_loaders.utils.map_ai_messages.html", "title": "Slack"}, {"imported": "merge_chat_runs", "source": "langchain.chat_loaders.utils", "docs": "https://api.python.langchain.com/en/latest/chat_loaders/langchain.chat_loaders.utils.merge_chat_runs.html", "title": "Slack"}]--\x3e\nfrom typing import List\nfrom langchain.chat_loaders.base import ChatSession\nfrom langchain.chat_loaders.utils import (\n    map_ai_messages,\n    merge_chat_runs,\n)\n\nraw_messages = loader.lazy_load()\n# Merge consecutive messages from the same sender into a single message\nmerged_messages = merge_chat_runs(raw_messages)\n# Convert messages from "U0500003428" to AI messages\nmessages: List[ChatSession] = list(map_ai_messages(merged_messages, sender="U0500003428"))\n')),(0,o.kt)("h3",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"You can then use these messages how you see fit, such as finetuning a model, few-shot example selection, or directly make predictions for the next message. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Slack"}]--\x3e\nfrom langchain.chat_models import ChatOpenAI\n\nllm = ChatOpenAI()\n\nfor chunk in llm.stream(messages[1][\'messages\']):\n    print(chunk.content, end="", flush=True)\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Hi, \n    \n    I hope you're doing well. I wanted to reach out and ask if you'd be available to meet up for coffee sometime next week. I'd love to catch up and hear about what's been going on in your life. Let me know if you're interested and we can find a time that works for both of us. \n    \n    Looking forward to hearing from you!\n    \n    Best, [Your Name]\n"))))}u.isMDXComponent=!0}}]);
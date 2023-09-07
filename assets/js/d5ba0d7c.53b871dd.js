"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75810],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),h=l,u=m["".concat(i,".").concat(h)]||m[h]||d[h]||r;return t?n.createElement(u,o(o({ref:a},s),{},{components:t})):n.createElement(u,o({ref:a},s))}));function u(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=h;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[m]="string"==typeof e?e:l,o[1]=p;for(var c=2;c<r;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},87602:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var n=t(87462),l=(t(67294),t(3905));const r={},o="PromptLayer",p={unversionedId:"integrations/callbacks/promptlayer",id:"integrations/callbacks/promptlayer",title:"PromptLayer",description:"PromptLayer",source:"@site/docs/integrations/callbacks/promptlayer.md",sourceDirName:"integrations/callbacks",slug:"/integrations/callbacks/promptlayer",permalink:"/langchain/docs/integrations/callbacks/promptlayer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"LLMonitor",permalink:"/langchain/docs/integrations/callbacks/llmonitor"},next:{title:"Streamlit",permalink:"/langchain/docs/integrations/callbacks/streamlit"}},i={},c=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Getting API Credentials",id:"getting-api-credentials",level:3},{value:"Usage",id:"usage",level:3},{value:"Simple OpenAI Example",id:"simple-openai-example",level:3},{value:"GPT4All Example",id:"gpt4all-example",level:3},{value:"Full Featured Example",id:"full-featured-example",level:3}],s={toc:c},m="wrapper";function d(e){let{components:a,...t}=e;return(0,l.kt)(m,(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"promptlayer"},"PromptLayer"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://promptlayer.com/text_logo.png",alt:"PromptLayer"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://promptlayer.com"},"PromptLayer")," is a an LLM observability platform that lets you visualize requests, version prompts, and track usage. In this guide we will go over how to setup the ",(0,l.kt)("inlineCode",{parentName:"p"},"PromptLayerCallbackHandler"),". "),(0,l.kt)("p",null,"While PromptLayer does have LLMs that integrate directly with LangChain (e.g. ",(0,l.kt)("a",{parentName:"p",href:"https://python.langchain.com/docs/integrations/llms/promptlayer_openai"},(0,l.kt)("inlineCode",{parentName:"a"},"PromptLayerOpenAI")),"), this callback is the recommended way to integrate PromptLayer with LangChain."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://docs.promptlayer.com/languages/langchain"},"our docs")," for more information."),(0,l.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install promptlayer --upgrade\n")),(0,l.kt)("h3",{id:"getting-api-credentials"},"Getting API Credentials"),(0,l.kt)("p",null,"If you do not have a PromptLayer account, create one on ",(0,l.kt)("a",{parentName:"p",href:"https://www.promptlayer.com"},"promptlayer.com"),". Then get an API key by clicking on the settings cog in the navbar and\nset it as an environment variabled called ",(0,l.kt)("inlineCode",{parentName:"p"},"PROMPTLAYER_API_KEY")),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Getting started with ",(0,l.kt)("inlineCode",{parentName:"p"},"PromptLayerCallbackHandler")," is fairly simple, it takes two optional arguments:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"pl_tags")," - an optional list of strings that will be tracked as tags on PromptLayer."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"pl_id_callback")," - an optional function that will take ",(0,l.kt)("inlineCode",{parentName:"li"},"promptlayer_request_id")," as an argument. This ID can be used with all of PromptLayer's tracking features to track, metadata, scores, and prompt usage.")),(0,l.kt)("h3",{id:"simple-openai-example"},"Simple OpenAI Example"),(0,l.kt)("p",null,"In this simple example we use ",(0,l.kt)("inlineCode",{parentName:"p"},"PromptLayerCallbackHandler")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"ChatOpenAI"),". We add a PromptLayer tag named ",(0,l.kt)("inlineCode",{parentName:"p"},"chatopenai")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "PromptLayerCallbackHandler", "source": "langchain.callbacks", "docs": "https://api.python.langchain.com/en/latest/callbacks/langchain.callbacks.promptlayer_callback.PromptLayerCallbackHandler.html", "title": "PromptLayer"}, {"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "PromptLayer"}, {"imported": "HumanMessage", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.messages.HumanMessage.html", "title": "PromptLayer"}]--\x3e\nimport promptlayer  # Don\'t forget this \ud83c\udf70\nfrom langchain.callbacks import PromptLayerCallbackHandler\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.schema import (\n    HumanMessage,\n)\n\nchat_llm = ChatOpenAI(\n    temperature=0,\n    callbacks=[PromptLayerCallbackHandler(pl_tags=["chatopenai"])],\n)\nllm_results = chat_llm(\n    [\n        HumanMessage(content="What comes after 1,2,3 ?"),\n        HumanMessage(content="Tell me another joke?"),\n    ]\n)\nprint(llm_results)\n')),(0,l.kt)("h3",{id:"gpt4all-example"},"GPT4All Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "PromptLayerCallbackHandler", "source": "langchain.callbacks", "docs": "https://api.python.langchain.com/en/latest/callbacks/langchain.callbacks.promptlayer_callback.PromptLayerCallbackHandler.html", "title": "PromptLayer"}, {"imported": "GPT4All", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.gpt4all.GPT4All.html", "title": "PromptLayer"}]--\x3e\nimport promptlayer  # Don\'t forget this \ud83c\udf70\nfrom langchain.callbacks import PromptLayerCallbackHandler\n\nfrom langchain.llms import GPT4All\n\nmodel = GPT4All(model="./models/gpt4all-model.bin", n_ctx=512, n_threads=8)\n\nresponse = model(\n    "Once upon a time, ",\n    callbacks=[PromptLayerCallbackHandler(pl_tags=["langchain", "gpt4all"])],\n)\n')),(0,l.kt)("h3",{id:"full-featured-example"},"Full Featured Example"),(0,l.kt)("p",null,"In this example we unlock more of the power of PromptLayer."),(0,l.kt)("p",null,"PromptLayer allows you to visually create, version, and track prompt templates. Using the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.promptlayer.com/features/prompt-registry"},"Prompt Registry"),", we can programatically fetch the prompt template called ",(0,l.kt)("inlineCode",{parentName:"p"},"example"),"."),(0,l.kt)("p",null,"We also define a ",(0,l.kt)("inlineCode",{parentName:"p"},"pl_id_callback")," function which takes in the ",(0,l.kt)("inlineCode",{parentName:"p"},"promptlayer_request_id")," and logs a score, metadata and links the prompt template used. Read more about tracking on ",(0,l.kt)("a",{parentName:"p",href:"https://docs.promptlayer.com/features/prompt-history/request-id"},"our docs"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "PromptLayerCallbackHandler", "source": "langchain.callbacks", "docs": "https://api.python.langchain.com/en/latest/callbacks/langchain.callbacks.promptlayer_callback.PromptLayerCallbackHandler.html", "title": "PromptLayer"}, {"imported": "OpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openai.OpenAI.html", "title": "PromptLayer"}]--\x3e\nimport promptlayer  # Don\'t forget this \ud83c\udf70\nfrom langchain.callbacks import PromptLayerCallbackHandler\nfrom langchain.llms import OpenAI\n\n\ndef pl_id_callback(promptlayer_request_id):\n    print("prompt layer id ", promptlayer_request_id)\n    promptlayer.track.score(\n        request_id=promptlayer_request_id, score=100\n    )  # score is an integer 0-100\n    promptlayer.track.metadata(\n        request_id=promptlayer_request_id, metadata={"foo": "bar"}\n    )  # metadata is a dictionary of key value pairs that is tracked on PromptLayer\n    promptlayer.track.prompt(\n        request_id=promptlayer_request_id,\n        prompt_name="example",\n        prompt_input_variables={"product": "toasters"},\n        version=1,\n    )  # link the request to a prompt template\n\n\nopenai_llm = OpenAI(\n    model_name="text-davinci-002",\n    callbacks=[PromptLayerCallbackHandler(pl_id_callback=pl_id_callback)],\n)\n\nexample_prompt = promptlayer.prompts.get("example", version=1, langchain=True)\nopenai_llm(example_prompt.format(product="toasters"))\n')),(0,l.kt)("p",null,"That is all it takes! After setup all your requests will show up on the PromptLayer dashboard.\nThis callback also works with any LLM implemented on LangChain."))}d.isMDXComponent=!0}}]);
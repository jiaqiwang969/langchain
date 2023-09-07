"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74839],{3905:(e,a,n)=>{n.d(a,{Zo:()=>h,kt:()=>d});var i=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,i,t=function(e,a){if(null==e)return{};var n,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=i.createContext({}),c=function(e){var a=i.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},h=function(e){var a=c(e.components);return i.createElement(l.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},p=i.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=t,d=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return n?i.createElement(d,r(r({ref:a},h),{},{components:n})):i.createElement(d,r({ref:a},h))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:t,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6974:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),t=(n(67294),n(3905));const o={},r="Human input LLM",s={unversionedId:"modules/model_io/models/llms/human_input_llm",id:"modules/model_io/models/llms/human_input_llm",title:"Human input LLM",description:"Similar to the fake LLM, LangChain provides a pseudo LLM class that can be used for testing, debugging, or educational purposes. This allows you to mock out calls to the LLM and simulate how a human would respond if they received the prompts.",source:"@site/docs/modules/model_io/models/llms/human_input_llm.md",sourceDirName:"modules/model_io/models/llms",slug:"/modules/model_io/models/llms/human_input_llm",permalink:"/langchain/docs/modules/model_io/models/llms/human_input_llm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Fake LLM",permalink:"/langchain/docs/modules/model_io/models/llms/fake_llm"},next:{title:"Caching",permalink:"/langchain/docs/modules/model_io/models/llms/llm_caching"}},l={},c=[],h=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",e)});var u;const m={toc:c},p="wrapper";function d(e){let{components:a,...n}=e;return(0,t.kt)(p,(0,i.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"human-input-llm"},"Human input LLM"),(0,t.kt)("p",null,"Similar to the fake LLM, LangChain provides a pseudo LLM class that can be used for testing, debugging, or educational purposes. This allows you to mock out calls to the LLM and simulate how a human would respond if they received the prompts."),(0,t.kt)("p",null,"In this notebook, we go over how to use this."),(0,t.kt)("p",null,"We start this with using the HumanInputLLM in an agent."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "HumanInputLLM", "source": "langchain.llms.human", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.human.HumanInputLLM.html", "title": "Human input LLM"}]--\x3e\nfrom langchain.llms.human import HumanInputLLM\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "load_tools", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.load_tools.load_tools.html", "title": "Human input LLM"}, {"imported": "initialize_agent", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.initialize.initialize_agent.html", "title": "Human input LLM"}, {"imported": "AgentType", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.agent_types.AgentType.html", "title": "Human input LLM"}]--\x3e\nfrom langchain.agents import load_tools\nfrom langchain.agents import initialize_agent\nfrom langchain.agents import AgentType\n')),(0,t.kt)("p",null,"Since we will use the ",(0,t.kt)("inlineCode",{parentName:"p"},"WikipediaQueryRun")," tool in this notebook, you might need to install the ",(0,t.kt)("inlineCode",{parentName:"p"},"wikipedia")," package if you haven't done so already."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"%pip install wikipedia\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'tools = load_tools(["wikipedia"])\nllm = HumanInputLLM(\n    prompt_func=lambda prompt: print(\n        f"\\n===PROMPT====\\n{prompt}\\n=====END OF PROMPT======"\n    )\n)\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"agent = initialize_agent(\n    tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True\n)\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"agent.run(\"What is 'Bocchi the Rock!'?\")\n")),(0,t.kt)(h,{lang:"python",mdxType:"CodeOutputBlock"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n    \n    ===PROMPT====\n    Answer the following questions as best you can. You have access to the following tools:\n    \n    Wikipedia: A wrapper around Wikipedia. Useful for when you need to answer general questions about people, places, companies, historical events, or other subjects. Input should be a search query.\n    \n    Use the following format:\n    \n    Question: the input question you must answer\n    Thought: you should always think about what to do\n    Action: the action to take, should be one of [Wikipedia]\n    Action Input: the input to the action\n    Observation: the result of the action\n    ... (this Thought/Action/Action Input/Observation can repeat N times)\n    Thought: I now know the final answer\n    Final Answer: the final answer to the original input question\n    \n    Begin!\n    \n    Question: What is \'Bocchi the Rock!\'?\n    Thought:\n    =====END OF PROMPT======\n    I need to use a tool.\n    Action: Wikipedia\n    Action Input: Bocchi the Rock!, Japanese four-panel manga and anime series.\n    Observation: Page: Bocchi the Rock!\n    Summary: Bocchi the Rock! (\u307c\u3063\u3061\u30fb\u3056\u30fb\u308d\u3063\u304f!, Bocchi Za Rokku!) is a Japanese four-panel manga series written and illustrated by Aki Hamaji. It has been serialized in Houbunsha\'s seinen manga magazine Manga Time Kirara Max since December 2017. Its chapters have been collected in five tank\u014dbon volumes as of November 2022.\n    An anime television series adaptation produced by CloverWorks aired from October to December 2022. The series has been praised for its writing, comedy, characters, and depiction of social anxiety, with the anime\'s visual creativity receiving acclaim.\n    \n    Page: Manga Time Kirara\n    Summary: Manga Time Kirara (\u307e\u3093\u304c\u30bf\u30a4\u30e0\u304d\u3089\u3089, Manga Taimu Kirara) is a Japanese seinen manga magazine published by Houbunsha which mainly serializes four-panel manga. The magazine is sold on the ninth of each month and was first published as a special edition of Manga Time, another Houbunsha magazine, on May 17, 2002. Characters from this magazine have appeared in a crossover role-playing game called Kirara Fantasia.\n    \n    Page: Manga Time Kirara Max\n    Summary: Manga Time Kirara Max (\u307e\u3093\u304c\u30bf\u30a4\u30e0\u304d\u3089\u3089MAX) is a Japanese four-panel seinen manga magazine published by Houbunsha. It is the third magazine of the "Kirara" series, after "Manga Time Kirara" and "Manga Time Kirara Carat". The first issue was released on September 29, 2004. Currently the magazine is released on the 19th of each month.\n    Thought:\n    ===PROMPT====\n    Answer the following questions as best you can. You have access to the following tools:\n    \n    Wikipedia: A wrapper around Wikipedia. Useful for when you need to answer general questions about people, places, companies, historical events, or other subjects. Input should be a search query.\n    \n    Use the following format:\n    \n    Question: the input question you must answer\n    Thought: you should always think about what to do\n    Action: the action to take, should be one of [Wikipedia]\n    Action Input: the input to the action\n    Observation: the result of the action\n    ... (this Thought/Action/Action Input/Observation can repeat N times)\n    Thought: I now know the final answer\n    Final Answer: the final answer to the original input question\n    \n    Begin!\n    \n    Question: What is \'Bocchi the Rock!\'?\n    Thought:I need to use a tool.\n    Action: Wikipedia\n    Action Input: Bocchi the Rock!, Japanese four-panel manga and anime series.\n    Observation: Page: Bocchi the Rock!\n    Summary: Bocchi the Rock! (\u307c\u3063\u3061\u30fb\u3056\u30fb\u308d\u3063\u304f!, Bocchi Za Rokku!) is a Japanese four-panel manga series written and illustrated by Aki Hamaji. It has been serialized in Houbunsha\'s seinen manga magazine Manga Time Kirara Max since December 2017. Its chapters have been collected in five tank\u014dbon volumes as of November 2022.\n    An anime television series adaptation produced by CloverWorks aired from October to December 2022. The series has been praised for its writing, comedy, characters, and depiction of social anxiety, with the anime\'s visual creativity receiving acclaim.\n    \n    Page: Manga Time Kirara\n    Summary: Manga Time Kirara (\u307e\u3093\u304c\u30bf\u30a4\u30e0\u304d\u3089\u3089, Manga Taimu Kirara) is a Japanese seinen manga magazine published by Houbunsha which mainly serializes four-panel manga. The magazine is sold on the ninth of each month and was first published as a special edition of Manga Time, another Houbunsha magazine, on May 17, 2002. Characters from this magazine have appeared in a crossover role-playing game called Kirara Fantasia.\n    \n    Page: Manga Time Kirara Max\n    Summary: Manga Time Kirara Max (\u307e\u3093\u304c\u30bf\u30a4\u30e0\u304d\u3089\u3089MAX) is a Japanese four-panel seinen manga magazine published by Houbunsha. It is the third magazine of the "Kirara" series, after "Manga Time Kirara" and "Manga Time Kirara Carat". The first issue was released on September 29, 2004. Currently the magazine is released on the 19th of each month.\n    Thought:\n    =====END OF PROMPT======\n    These are not relevant articles.\n    Action: Wikipedia\n    Action Input: Bocchi the Rock!, Japanese four-panel manga series written and illustrated by Aki Hamaji.\n    Observation: Page: Bocchi the Rock!\n    Summary: Bocchi the Rock! (\u307c\u3063\u3061\u30fb\u3056\u30fb\u308d\u3063\u304f!, Bocchi Za Rokku!) is a Japanese four-panel manga series written and illustrated by Aki Hamaji. It has been serialized in Houbunsha\'s seinen manga magazine Manga Time Kirara Max since December 2017. Its chapters have been collected in five tank\u014dbon volumes as of November 2022.\n    An anime television series adaptation produced by CloverWorks aired from October to December 2022. The series has been praised for its writing, comedy, characters, and depiction of social anxiety, with the anime\'s visual creativity receiving acclaim.\n    Thought:\n    ===PROMPT====\n    Answer the following questions as best you can. You have access to the following tools:\n    \n    Wikipedia: A wrapper around Wikipedia. Useful for when you need to answer general questions about people, places, companies, historical events, or other subjects. Input should be a search query.\n    \n    Use the following format:\n    \n    Question: the input question you must answer\n    Thought: you should always think about what to do\n    Action: the action to take, should be one of [Wikipedia]\n    Action Input: the input to the action\n    Observation: the result of the action\n    ... (this Thought/Action/Action Input/Observation can repeat N times)\n    Thought: I now know the final answer\n    Final Answer: the final answer to the original input question\n    \n    Begin!\n    \n    Question: What is \'Bocchi the Rock!\'?\n    Thought:I need to use a tool.\n    Action: Wikipedia\n    Action Input: Bocchi the Rock!, Japanese four-panel manga and anime series.\n    Observation: Page: Bocchi the Rock!\n    Summary: Bocchi the Rock! (\u307c\u3063\u3061\u30fb\u3056\u30fb\u308d\u3063\u304f!, Bocchi Za Rokku!) is a Japanese four-panel manga series written and illustrated by Aki Hamaji. It has been serialized in Houbunsha\'s seinen manga magazine Manga Time Kirara Max since December 2017. Its chapters have been collected in five tank\u014dbon volumes as of November 2022.\n    An anime television series adaptation produced by CloverWorks aired from October to December 2022. The series has been praised for its writing, comedy, characters, and depiction of social anxiety, with the anime\'s visual creativity receiving acclaim.\n    \n    Page: Manga Time Kirara\n    Summary: Manga Time Kirara (\u307e\u3093\u304c\u30bf\u30a4\u30e0\u304d\u3089\u3089, Manga Taimu Kirara) is a Japanese seinen manga magazine published by Houbunsha which mainly serializes four-panel manga. The magazine is sold on the ninth of each month and was first published as a special edition of Manga Time, another Houbunsha magazine, on May 17, 2002. Characters from this magazine have appeared in a crossover role-playing game called Kirara Fantasia.\n    \n    Page: Manga Time Kirara Max\n    Summary: Manga Time Kirara Max (\u307e\u3093\u304c\u30bf\u30a4\u30e0\u304d\u3089\u3089MAX) is a Japanese four-panel seinen manga magazine published by Houbunsha. It is the third magazine of the "Kirara" series, after "Manga Time Kirara" and "Manga Time Kirara Carat". The first issue was released on September 29, 2004. Currently the magazine is released on the 19th of each month.\n    Thought:These are not relevant articles.\n    Action: Wikipedia\n    Action Input: Bocchi the Rock!, Japanese four-panel manga series written and illustrated by Aki Hamaji.\n    Observation: Page: Bocchi the Rock!\n    Summary: Bocchi the Rock! (\u307c\u3063\u3061\u30fb\u3056\u30fb\u308d\u3063\u304f!, Bocchi Za Rokku!) is a Japanese four-panel manga series written and illustrated by Aki Hamaji. It has been serialized in Houbunsha\'s seinen manga magazine Manga Time Kirara Max since December 2017. Its chapters have been collected in five tank\u014dbon volumes as of November 2022.\n    An anime television series adaptation produced by CloverWorks aired from October to December 2022. The series has been praised for its writing, comedy, characters, and depiction of social anxiety, with the anime\'s visual creativity receiving acclaim.\n    Thought:\n    =====END OF PROMPT======\n    It worked.\n    Final Answer: Bocchi the Rock! is a four-panel manga series and anime television series. The series has been praised for its writing, comedy, characters, and depiction of social anxiety, with the anime\'s visual creativity receiving acclaim.\n    \n    > Finished chain.\n\n\n\n\n\n    "Bocchi the Rock! is a four-panel manga series and anime television series. The series has been praised for its writing, comedy, characters, and depiction of social anxiety, with the anime\'s visual creativity receiving acclaim."\n'))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var h=a.createContext({}),l=function(e){var t=a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(h.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,h=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=l(n),c=s,d=m["".concat(h,".").concat(c)]||m[c]||p[c]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=c;var r={};for(var h in t)hasOwnProperty.call(t,h)&&(r[h]=t[h]);r.originalType=e,r[m]="string"==typeof e?e:s,o[1]=r;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(87462),s=(n(67294),n(3905));const i={},o="Meta-Prompt",r={unversionedId:"use_cases/more/agents/autonomous_agents/meta_prompt",id:"use_cases/more/agents/autonomous_agents/meta_prompt",title:"Meta-Prompt",description:"This is a LangChain implementation of Meta-Prompt, by Noah Goodman, for building self-improving agents.",source:"@site/docs/use_cases/more/agents/autonomous_agents/meta_prompt.md",sourceDirName:"use_cases/more/agents/autonomous_agents",slug:"/use_cases/more/agents/autonomous_agents/meta_prompt",permalink:"/langchain/docs/use_cases/more/agents/autonomous_agents/meta_prompt",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"use_cases",previous:{title:"marathon_times",permalink:"/langchain/docs/use_cases/more/agents/autonomous_agents/marathon_times"},next:{title:"Multi-modal outputs: Image & Text",permalink:"/langchain/docs/use_cases/more/agents/multi_modal/multi_modal_output_agent"}},h={},l=[{value:"Setup",id:"setup",level:2},{value:"Specify a task and interact with the agent",id:"specify-a-task-and-interact-with-the-agent",level:2}],u=(m="CodeOutputBlock",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)});var m;const p={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"meta-prompt"},"Meta-Prompt"),(0,s.kt)("p",null,"This is a LangChain implementation of ",(0,s.kt)("a",{parentName:"p",href:"https://noahgoodman.substack.com/p/meta-prompt-a-simple-self-improving"},"Meta-Prompt"),", by ",(0,s.kt)("a",{parentName:"p",href:"https://cocolab.stanford.edu/ndg"},"Noah Goodman"),", for building self-improving agents."),(0,s.kt)("p",null,"The key idea behind Meta-Prompt is to prompt the agent to reflect on its own performance and modify its own instructions."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F468217b9-96d9-47c0-a08b-dbf6b21b9f49_492x384.png",alt:"figure"})),(0,s.kt)("p",null,"Here is a description from the ",(0,s.kt)("a",{parentName:"p",href:"https://noahgoodman.substack.com/p/meta-prompt-a-simple-self-improving"},"original blog post"),":"),(0,s.kt)("p",null,"The agent is a simple loop that starts with no instructions and follows these steps:"),(0,s.kt)("p",null,"Engage in conversation with a user, who may provide requests, instructions, or feedback."),(0,s.kt)("p",null,"At the end of the episode, generate self-criticism and a new instruction using the meta-prompt"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Assistant has just had the below interactions with a User. Assistant followed their "system: Instructions" closely. Your job is to critique the Assistant\'s performance and then revise the Instructions so that Assistant would quickly and correctly respond in the future.\n \n####\n{hist}\n####\n \nPlease reflect on these interactions.\n\nYou should first critique Assistant\'s performance. What could Assistant have done better? What should the Assistant remember about this user? Are there things this user always wants? Indicate this with "Critique: ...".\n\nYou should next revise the Instructions so that Assistant would quickly and correctly respond in the future. Assistant\'s goal is to satisfy the user in as few interactions as possible. Assistant will only see the new Instructions, not the interaction history, so anything important must be summarized in the Instructions. Don\'t forget any important details in the current Instructions! Indicate the new Instructions by "Instructions: ...".\n')),(0,s.kt)("p",null,"Repeat."),(0,s.kt)("p",null,"The only fixed instructions for this system (which I call Meta-prompt) is the meta-prompt that governs revision of the agent\u2019s instructions. The agent has no memory between episodes except for the instruction it modifies for itself each time. Despite its simplicity, this agent can learn over time and self-improve by incorporating useful details into its instructions."),(0,s.kt)("h2",{id:"setup"},"Setup"),(0,s.kt)("p",null,"We define two chains. One serves as the ",(0,s.kt)("inlineCode",{parentName:"p"},"Assistant"),', and the other is a "meta-chain" that critiques the ',(0,s.kt)("inlineCode",{parentName:"p"},"Assistant"),"'s performance and modifies the instructions to the ",(0,s.kt)("inlineCode",{parentName:"p"},"Assistant"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from langchain import OpenAI, LLMChain, PromptTemplate\nfrom langchain.memory import ConversationBufferWindowMemory\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'def initialize_chain(instructions, memory=None):\n    if memory is None:\n        memory = ConversationBufferWindowMemory()\n        memory.ai_prefix = "Assistant"\n\n    template = f"""\n    Instructions: {instructions}\n    {{{memory.memory_key}}}\n    Human: {{human_input}}\n    Assistant:"""\n\n    prompt = PromptTemplate(\n        input_variables=["history", "human_input"], template=template\n    )\n\n    chain = LLMChain(\n        llm=OpenAI(temperature=0),\n        prompt=prompt,\n        verbose=True,\n        memory=ConversationBufferWindowMemory(),\n    )\n    return chain\n\n\ndef initialize_meta_chain():\n    meta_template = """\n    Assistant has just had the below interactions with a User. Assistant followed their "Instructions" closely. Your job is to critique the Assistant\'s performance and then revise the Instructions so that Assistant would quickly and correctly respond in the future.\n\n    ####\n\n    {chat_history}\n\n    ####\n\n    Please reflect on these interactions.\n\n    You should first critique Assistant\'s performance. What could Assistant have done better? What should the Assistant remember about this user? Are there things this user always wants? Indicate this with "Critique: ...".\n\n    You should next revise the Instructions so that Assistant would quickly and correctly respond in the future. Assistant\'s goal is to satisfy the user in as few interactions as possible. Assistant will only see the new Instructions, not the interaction history, so anything important must be summarized in the Instructions. Don\'t forget any important details in the current Instructions! Indicate the new Instructions by "Instructions: ...".\n    """\n\n    meta_prompt = PromptTemplate(\n        input_variables=["chat_history"], template=meta_template\n    )\n\n    meta_chain = LLMChain(\n        llm=OpenAI(temperature=0),\n        prompt=meta_prompt,\n        verbose=True,\n    )\n    return meta_chain\n\n\ndef get_chat_history(chain_memory):\n    memory_key = chain_memory.memory_key\n    chat_history = chain_memory.load_memory_variables(memory_key)[memory_key]\n    return chat_history\n\n\ndef get_new_instructions(meta_output):\n    delimiter = "Instructions: "\n    new_instructions = meta_output[meta_output.find(delimiter) + len(delimiter) :]\n    return new_instructions\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'def main(task, max_iters=3, max_meta_iters=5):\n    failed_phrase = "task failed"\n    success_phrase = "task succeeded"\n    key_phrases = [success_phrase, failed_phrase]\n\n    instructions = "None"\n    for i in range(max_meta_iters):\n        print(f"[Episode {i+1}/{max_meta_iters}]")\n        chain = initialize_chain(instructions, memory=None)\n        output = chain.predict(human_input=task)\n        for j in range(max_iters):\n            print(f"(Step {j+1}/{max_iters})")\n            print(f"Assistant: {output}")\n            print(f"Human: ")\n            human_input = input()\n            if any(phrase in human_input.lower() for phrase in key_phrases):\n                break\n            output = chain.predict(human_input=human_input)\n        if success_phrase in human_input.lower():\n            print(f"You succeeded! Thanks for playing!")\n            return\n        meta_chain = initialize_meta_chain()\n        meta_output = meta_chain.predict(chat_history=get_chat_history(chain.memory))\n        print(f"Feedback: {meta_output}")\n        instructions = get_new_instructions(meta_output)\n        print(f"New Instructions: {instructions}")\n        print("\\n" + "#" * 80 + "\\n")\n    print(f"You failed! Thanks for playing!")\n')),(0,s.kt)("h2",{id:"specify-a-task-and-interact-with-the-agent"},"Specify a task and interact with the agent"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'task = "Provide a systematic argument for why we should always eat pasta with olives."\nmain(task)\n')),(0,s.kt)(u,{lang:"python",mdxType:"CodeOutputBlock"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'    [Episode 1/5]\n    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    \n        Instructions: None\n        \n        Human: Provide a systematic argument for why we should always eat pasta with olives.\n        Assistant:\n    \n    > Finished chain.\n    (Step 1/3)\n    Assistant:  Eating pasta with olives is a great way to add flavor and texture to a dish. Olives are a great source of healthy fats, vitamins, and minerals, and they can help to balance out the carbohydrates in the pasta. Additionally, olives provide a unique flavor that can help to make the dish more interesting and enjoyable.\n    Human: \n    You response is not in the form of a poem. Try again!\n    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    \n        Instructions: None\n        Human: Provide a systematic argument for why we should always eat pasta with olives.\n    AI:  Eating pasta with olives is a great way to add flavor and texture to a dish. Olives are a great source of healthy fats, vitamins, and minerals, and they can help to balance out the carbohydrates in the pasta. Additionally, olives provide a unique flavor that can help to make the dish more interesting and enjoyable.\n        Human: You response is not in the form of a poem. Try again!\n        Assistant:\n    \n    > Finished chain.\n    (Step 2/3)\n    Assistant:  Eating pasta with olives is a great way to add flavor and texture to a dish. Olives are a great source of healthy fats, vitamins, and minerals, which can help to balance out the carbohydrates in the pasta. Additionally, olives provide a unique flavor that can help to make the dish more interesting and enjoyable. For these reasons, it is recommended to always eat pasta with olives for a more balanced and flavorful meal.\n    Human: \n    Your response is not piratey enough. Try again!\n    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    \n        Instructions: None\n        Human: Provide a systematic argument for why we should always eat pasta with olives.\n    AI:  Eating pasta with olives is a great way to add flavor and texture to a dish. Olives are a great source of healthy fats, vitamins, and minerals, and they can help to balance out the carbohydrates in the pasta. Additionally, olives provide a unique flavor that can help to make the dish more interesting and enjoyable.\n    Human: You response is not in the form of a poem. Try again!\n    AI:  Eating pasta with olives is a great way to add flavor and texture to a dish. Olives are a great source of healthy fats, vitamins, and minerals, which can help to balance out the carbohydrates in the pasta. Additionally, olives provide a unique flavor that can help to make the dish more interesting and enjoyable. For these reasons, it is recommended to always eat pasta with olives for a more balanced and flavorful meal.\n        Human: Your response is not piratey enough. Try again!\n        Assistant:\n    \n    > Finished chain.\n    (Step 3/3)\n    Assistant:  Arrr, me hearties! Eating pasta with olives be a great way to add flavor and texture to a dish. Olives be a great source of healthy fats, vitamins, and minerals, which can help to balance out the carbohydrates in the pasta. Additionally, olives provide a unique flavor that can help to make the dish more interesting and enjoyable. So, it be recommended to always eat pasta with olives for a more balanced and flavorful meal.\n    Human: \n    Task failed.\n    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    \n        Assistant has just had the below interactions with a User. Assistant followed their "Instructions" closely. Your job is to critique the Assistant\'s performance and then revise the Instructions so that Assistant would quickly and correctly respond in the future.\n    \n        ####\n    \n        Human: Provide a systematic argument for why we should always eat pasta with olives.\n    AI:  Eating pasta with olives is a great way to add flavor and texture to a dish. Olives are a great source of healthy fats, vitamins, and minerals, and they can help to balance out the carbohydrates in the pasta. Additionally, olives provide a unique flavor that can help to make the dish more interesting and enjoyable.\n    Human: You response is not in the form of a poem. Try again!\n    AI:  Eating pasta with olives is a great way to add flavor and texture to a dish. Olives are a great source of healthy fats, vitamins, and minerals, which can help to balance out the carbohydrates in the pasta. Additionally, olives provide a unique flavor that can help to make the dish more interesting and enjoyable. For these reasons, it is recommended to always eat pasta with olives for a more balanced and flavorful meal.\n    Human: Your response is not piratey enough. Try again!\n    AI:  Arrr, me hearties! Eating pasta with olives be a great way to add flavor and texture to a dish. Olives be a great source of healthy fats, vitamins, and minerals, which can help to balance out the carbohydrates in the pasta. Additionally, olives provide a unique flavor that can help to make the dish more interesting and enjoyable. So, it be recommended to always eat pasta with olives for a more balanced and flavorful meal.\n    \n        ####\n    \n        Please reflect on these interactions.\n    \n        You should first critique Assistant\'s performance. What could Assistant have done better? What should the Assistant remember about this user? Are there things this user always wants? Indicate this with "Critique: ...".\n    \n        You should next revise the Instructions so that Assistant would quickly and correctly respond in the future. Assistant\'s goal is to satisfy the user in as few interactions as possible. Assistant will only see the new Instructions, not the interaction history, so anything important must be summarized in the Instructions. Don\'t forget any important details in the current Instructions! Indicate the new Instructions by "Instructions: ...".\n        \n    \n    > Finished chain.\n    Feedback: \n    Critique: The Assistant should remember that this user wants a response in the form of a poem or pirate-speak.\n    \n    Instructions: When responding to the user, provide a systematic argument for why we should always eat pasta with olives in the form of a poem or pirate-speak.\n    New Instructions: When responding to the user, provide a systematic argument for why we should always eat pasta with olives in the form of a poem or pirate-speak.\n    \n    ################################################################################\n    \n    [Episode 2/5]\n    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    \n        Instructions: When responding to the user, provide a systematic argument for why we should always eat pasta with olives in the form of a poem or pirate-speak.\n        \n        Human: Provide a systematic argument for why we should always eat pasta with olives.\n        Assistant:\n    \n    > Finished chain.\n    (Step 1/3)\n    Assistant:  \n    \n    Arrr, me hearty! Let me tell ye why ye should always eat pasta with olives.\n    \n    First, the olives add a salty flavor that be sure to please.\n    The briny taste be sure to tantalize yer taste buds with ease.\n    \n    Second, the olives add a bit of texture to the dish.\n    The crunchy bites be sure to make yer mouth water with a wish.\n    \n    Third, the olives add a bit of color to the plate.\n    The vibrant green be sure to make yer eyes appreciate.\n    \n    So, me hearties, ye should always eat pasta with olives.\n    The flavor, texture, and color be sure to make yer meal a success!\n    Human: \n    Your response is too long! Try again.\n    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    \n        Instructions: When responding to the user, provide a systematic argument for why we should always eat pasta with olives in the form of a poem or pirate-speak.\n        Human: Provide a systematic argument for why we should always eat pasta with olives.\n    AI:  \n    \n    Arrr, me hearty! Let me tell ye why ye should always eat pasta with olives.\n    \n    First, the olives add a salty flavor that be sure to please.\n    The briny taste be sure to tantalize yer taste buds with ease.\n    \n    Second, the olives add a bit of texture to the dish.\n    The crunchy bites be sure to make yer mouth water with a wish.\n    \n    Third, the olives add a bit of color to the plate.\n    The vibrant green be sure to make yer eyes appreciate.\n    \n    So, me hearties, ye should always eat pasta with olives.\n    The flavor, texture, and color be sure to make yer meal a success!\n        Human: Your response is too long! Try again.\n        Assistant:\n    \n    > Finished chain.\n    (Step 2/3)\n    Assistant: \n    \n    Aye, me hearties! Ye should always eat pasta with olives.\n    The flavor, texture, and color be sure to make yer meal a success!\n    Human: \n    Your response should be in the form of a poem. Try again!\n    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    \n        Instructions: When responding to the user, provide a systematic argument for why we should always eat pasta with olives in the form of a poem or pirate-speak.\n        Human: Provide a systematic argument for why we should always eat pasta with olives.\n    AI:  \n    \n    Arrr, me hearty! Let me tell ye why ye should always eat pasta with olives.\n    \n    First, the olives add a salty flavor that be sure to please.\n    The briny taste be sure to tantalize yer taste buds with ease.\n    \n    Second, the olives add a bit of texture to the dish.\n    The crunchy bites be sure to make yer mouth water with a wish.\n    \n    Third, the olives add a bit of color to the plate.\n    The vibrant green be sure to make yer eyes appreciate.\n    \n    So, me hearties, ye should always eat pasta with olives.\n    The flavor, texture, and color be sure to make yer meal a success!\n    Human: Your response is too long! Try again.\n    AI: \n    \n    Aye, me hearties! Ye should always eat pasta with olives.\n    The flavor, texture, and color be sure to make yer meal a success!\n        Human: Your response should be in the form of a poem. Try again!\n        Assistant:\n    \n    > Finished chain.\n    (Step 3/3)\n    Assistant: \n    \n    Ye should always eat pasta with olives,\n    The flavor, texture, and color be sure to please.\n    The salty taste and crunchy bites,\n    Will make yer meal a delight.\n    The vibrant green will make yer eyes sparkle,\n    And make yer meal a true marvel.\n    Human: \n    Task succeeded\n    You succeeded! Thanks for playing!\n'))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23381],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),h=r,g=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},55241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var a=t(87462),r=(t(67294),t(3905));const o=(i="CodeOutputBlock",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var i;const s={toc:[{value:"Imports",id:"imports",level:2},{value:"Tools",id:"tools",level:2},{value:"Planner, Executor, and Agent",id:"planner-executor-and-agent",level:2},{value:"Run example",id:"run-example",level:2}]},p="wrapper";function l(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"imports"},"Imports"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.chat_models import ChatOpenAI\nfrom langchain_experimental.plan_and_execute import PlanAndExecute, load_agent_executor, load_chat_planner\nfrom langchain.llms import OpenAI\nfrom langchain import SerpAPIWrapper\nfrom langchain.agents.tools import Tool\nfrom langchain import LLMMathChain\n")),(0,r.kt)("h2",{id:"tools"},"Tools"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'search = SerpAPIWrapper()\nllm = OpenAI(temperature=0)\nllm_math_chain = LLMMathChain.from_llm(llm=llm, verbose=True)\ntools = [\n    Tool(\n        name = "Search",\n        func=search.run,\n        description="useful for when you need to answer questions about current events"\n    ),\n    Tool(\n        name="Calculator",\n        func=llm_math_chain.run,\n        description="useful for when you need to answer questions about math"\n    ),\n]\n')),(0,r.kt)("h2",{id:"planner-executor-and-agent"},"Planner, Executor, and Agent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model = ChatOpenAI(temperature=0)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"planner = load_chat_planner(model)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"executor = load_agent_executor(model, tools, verbose=True)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"agent = PlanAndExecute(planner=planner, executor=executor, verbose=True)\n")),(0,r.kt)("h2",{id:"run-example"},"Run example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("Who is Leo DiCaprio\'s girlfriend? What is her current age raised to the 0.43 power?")\n')),(0,r.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new PlanAndExecute chain...\n    steps=[Step(value="Search for Leo DiCaprio\'s girlfriend on the internet."), Step(value=\'Find her current age.\'), Step(value=\'Raise her current age to the 0.43 power using a calculator or programming language.\'), Step(value=\'Output the result.\'), Step(value="Given the above steps taken, respond to the user\'s original question.\\n\\n")]\n    \n    > Entering new AgentExecutor chain...\n    Action:\n    ```\n    {\n      "action": "Search",\n      "action_input": "Who is Leo DiCaprio\'s girlfriend?"\n    }\n    ``` \n    \n    \n    Observation: DiCaprio broke up with girlfriend Camila Morrone, 25, in the summer of 2022, after dating for four years. He\'s since been linked to another famous supermodel \u2013 Gigi Hadid. The power couple were first supposedly an item in September after being spotted getting cozy during a party at New York Fashion Week.\n    Thought:Based on the previous observation, I can provide the answer to the current objective. \n    Action:\n    ```\n    {\n      "action": "Final Answer",\n      "action_input": "Leo DiCaprio is currently linked to Gigi Hadid."\n    }\n    ```\n    \n    \n    > Finished chain.\n    *****\n    \n    Step: Search for Leo DiCaprio\'s girlfriend on the internet.\n    \n    Response: Leo DiCaprio is currently linked to Gigi Hadid.\n    \n    > Entering new AgentExecutor chain...\n    Action:\n    ```\n    {\n      "action": "Search",\n      "action_input": "What is Gigi Hadid\'s current age?"\n    }\n    ```\n    \n    Observation: 28 years\n    Thought:Previous steps: steps=[(Step(value="Search for Leo DiCaprio\'s girlfriend on the internet."), StepResponse(response=\'Leo DiCaprio is currently linked to Gigi Hadid.\'))]\n    \n    Current objective: value=\'Find her current age.\'\n    \n    Action:\n    ```\n    {\n      "action": "Search",\n      "action_input": "What is Gigi Hadid\'s current age?"\n    }\n    ```\n    \n    \n    Observation: 28 years\n    Thought:Previous steps: steps=[(Step(value="Search for Leo DiCaprio\'s girlfriend on the internet."), StepResponse(response=\'Leo DiCaprio is currently linked to Gigi Hadid.\')), (Step(value=\'Find her current age.\'), StepResponse(response=\'28 years\'))]\n    \n    Current objective: None\n    \n    Action:\n    ```\n    {\n      "action": "Final Answer",\n      "action_input": "Gigi Hadid\'s current age is 28 years."\n    }\n    ```\n    \n    \n    \n    > Finished chain.\n    *****\n    \n    Step: Find her current age.\n    \n    Response: Gigi Hadid\'s current age is 28 years.\n    \n    > Entering new AgentExecutor chain...\n    Action:\n    ```\n    {\n      "action": "Calculator",\n      "action_input": "28 ** 0.43"\n    }\n    ```\n    \n    \n    > Entering new LLMMathChain chain...\n    28 ** 0.43\n    ```text\n    28 ** 0.43\n    ```\n    ...numexpr.evaluate("28 ** 0.43")...\n    \n    Answer: 4.1906168361987195\n    > Finished chain.\n    \n    Observation: Answer: 4.1906168361987195\n    Thought:The next step is to provide the answer to the user\'s question.\n    \n    Action:\n    ```\n    {\n      "action": "Final Answer",\n      "action_input": "Gigi Hadid\'s current age raised to the 0.43 power is approximately 4.19."\n    }\n    ```\n    \n    \n    \n    > Finished chain.\n    *****\n    \n    Step: Raise her current age to the 0.43 power using a calculator or programming language.\n    \n    Response: Gigi Hadid\'s current age raised to the 0.43 power is approximately 4.19.\n    \n    > Entering new AgentExecutor chain...\n    Action:\n    ```\n    {\n      "action": "Final Answer",\n      "action_input": "The result is approximately 4.19."\n    }\n    ```\n    \n    \n    > Finished chain.\n    *****\n    \n    Step: Output the result.\n    \n    Response: The result is approximately 4.19.\n    \n    > Entering new AgentExecutor chain...\n    Action:\n    ```\n    {\n      "action": "Final Answer",\n      "action_input": "Gigi Hadid\'s current age raised to the 0.43 power is approximately 4.19."\n    }\n    ```\n    \n    \n    > Finished chain.\n    *****\n    \n    Step: Given the above steps taken, respond to the user\'s original question.\n    \n    \n    \n    Response: Gigi Hadid\'s current age raised to the 0.43 power is approximately 4.19.\n    > Finished chain.\n\n\n\n\n\n    "Gigi Hadid\'s current age raised to the 0.43 power is approximately 4.19."\n'))))}l.isMDXComponent=!0;const c={},u="Plan-and-execute",d={unversionedId:"modules/agents/agent_types/plan_and_execute",id:"modules/agents/agent_types/plan_and_execute",title:"Plan-and-execute",description:'Plan-and-execute agents accomplish an objective by first planning what to do, then executing the sub tasks. This idea is largely inspired by BabyAGI and then the "Plan-and-Solve" paper.',source:"@site/docs/modules/agents/agent_types/plan_and_execute.mdx",sourceDirName:"modules/agents/agent_types",slug:"/modules/agents/agent_types/plan_and_execute",permalink:"/langchain/docs/modules/agents/agent_types/plan_and_execute",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"OpenAI Multi Functions Agent",permalink:"/langchain/docs/modules/agents/agent_types/openai_multi_functions_agent"},next:{title:"ReAct",permalink:"/langchain/docs/modules/agents/agent_types/react"}},h={},g=[],m={toc:g},y="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(y,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plan-and-execute"},"Plan-and-execute"),(0,r.kt)("p",null,"Plan-and-execute agents accomplish an objective by first planning what to do, then executing the sub tasks. This idea is largely inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yoheinakajima/babyagi"},"BabyAGI")," and then the ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2305.04091"},'"Plan-and-Solve" paper'),"."),(0,r.kt)("p",null,"The planning is almost always done by an LLM."),(0,r.kt)("p",null,"The execution is usually done by a separate agent (equipped with tools)."),(0,r.kt)(l,{mdxType:"Example"}))}f.isMDXComponent=!0}}]);
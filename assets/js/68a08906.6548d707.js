"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38020],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?o.createElement(h,i(i({ref:n},c),{},{components:t})):o.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61569:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const r={},i="Access intermediate steps",s={unversionedId:"modules/agents/how_to/intermediate_steps",id:"modules/agents/how_to/intermediate_steps",title:"Access intermediate steps",description:"In order to get more visibility into what an agent is doing, we can also return intermediate steps. This comes in the form of an extra key in the return value, which is a list of (action, observation) tuples.",source:"@site/docs/modules/agents/how_to/intermediate_steps.md",sourceDirName:"modules/agents/how_to",slug:"/modules/agents/how_to/intermediate_steps",permalink:"/langchain/docs/modules/agents/how_to/intermediate_steps",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Handle parsing errors",permalink:"/langchain/docs/modules/agents/how_to/handle_parsing_errors"},next:{title:"Cap the max number of iterations",permalink:"/langchain/docs/modules/agents/how_to/max_iterations"}},l={},p=[],c=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:p},m="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"access-intermediate-steps"},"Access intermediate steps"),(0,a.kt)("p",null,"In order to get more visibility into what an agent is doing, we can also return intermediate steps. This comes in the form of an extra key in the return value, which is a list of (action, observation) tuples."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "load_tools", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.load_tools.load_tools.html", "title": "Access intermediate steps"}, {"imported": "initialize_agent", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.initialize.initialize_agent.html", "title": "Access intermediate steps"}, {"imported": "AgentType", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.agent_types.AgentType.html", "title": "Access intermediate steps"}, {"imported": "OpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openai.OpenAI.html", "title": "Access intermediate steps"}]--\x3e\nfrom langchain.agents import load_tools\nfrom langchain.agents import initialize_agent\nfrom langchain.agents import AgentType\nfrom langchain.llms import OpenAI\n')),(0,a.kt)("p",null,"Initialize the components needed for the agent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'llm = OpenAI(temperature=0, model_name="text-davinci-002")\ntools = load_tools(["serpapi", "llm-math"], llm=llm)\n')),(0,a.kt)("p",null,"Initialize the agent with ",(0,a.kt)("inlineCode",{parentName:"p"},"return_intermediate_steps=True"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"agent = initialize_agent(\n    tools,\n    llm,\n    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,\n    verbose=True,\n    return_intermediate_steps=True,\n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'response = agent(\n    {\n        "input": "Who is Leo DiCaprio\'s girlfriend? What is her current age raised to the 0.43 power?"\n    }\n)\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n     I should look up who Leo DiCaprio is dating\n    Action: Search\n    Action Input: "Leo DiCaprio girlfriend"\n    Observation: Camila Morrone\n    Thought: I should look up how old Camila Morrone is\n    Action: Search\n    Action Input: "Camila Morrone age"\n    Observation: 25 years\n    Thought: I should calculate what 25 years raised to the 0.43 power is\n    Action: Calculator\n    Action Input: 25^0.43\n    Observation: Answer: 3.991298452658078\n    \n    Thought: I now know the final answer\n    Final Answer: Camila Morrone is Leo DiCaprio\'s girlfriend and she is 3.991298452658078 years old.\n    \n    > Finished chain.\n'))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# The actual return type is a NamedTuple for the agent action, and then an observation\nprint(response["intermediate_steps"])\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [(AgentAction(tool='Search', tool_input='Leo DiCaprio girlfriend', log=' I should look up who Leo DiCaprio is dating\\nAction: Search\\nAction Input: \"Leo DiCaprio girlfriend\"'), 'Camila Morrone'), (AgentAction(tool='Search', tool_input='Camila Morrone age', log=' I should look up how old Camila Morrone is\\nAction: Search\\nAction Input: \"Camila Morrone age\"'), '25 years'), (AgentAction(tool='Calculator', tool_input='25^0.43', log=' I should calculate what 25 years raised to the 0.43 power is\\nAction: Calculator\\nAction Input: 25^0.43'), 'Answer: 3.991298452658078\\n')]\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import json\n\nprint(json.dumps(response["intermediate_steps"], indent=2))\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    [\n      [\n        [\n          "Search",\n          "Leo DiCaprio girlfriend",\n          " I should look up who Leo DiCaprio is dating\\nAction: Search\\nAction Input: \\"Leo DiCaprio girlfriend\\""\n        ],\n        "Camila Morrone"\n      ],\n      [\n        [\n          "Search",\n          "Camila Morrone age",\n          " I should look up how old Camila Morrone is\\nAction: Search\\nAction Input: \\"Camila Morrone age\\""\n        ],\n        "25 years"\n      ],\n      [\n        [\n          "Calculator",\n          "25^0.43",\n          " I should calculate what 25 years raised to the 0.43 power is\\nAction: Calculator\\nAction Input: 25^0.43"\n        ],\n        "Answer: 3.991298452658078\\n"\n      ]\n    ]\n'))))}h.isMDXComponent=!0}}]);
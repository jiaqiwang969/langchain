"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16145],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(t),d=r,u=h["".concat(p,".").concat(d)]||h[d]||g[d]||o;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const o={},i="Pandas Dataframe",s={unversionedId:"integrations/toolkits/pandas",id:"integrations/toolkits/pandas",title:"Pandas Dataframe",description:"This notebook shows how to use agents to interact with a Pandas DataFrame. It is mostly optimized for question answering.",source:"@site/docs/integrations/toolkits/pandas.md",sourceDirName:"integrations/toolkits",slug:"/integrations/toolkits/pandas",permalink:"/langchain/docs/integrations/toolkits/pandas",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Natural Language APIs",permalink:"/langchain/docs/integrations/toolkits/openapi_nla"},next:{title:"PlayWright Browser",permalink:"/langchain/docs/integrations/toolkits/playwright"}},p={},l=[{value:"Using <code>ZERO_SHOT_REACT_DESCRIPTION</code>",id:"using-zero_shot_react_description",level:2},{value:"Using OpenAI Functions",id:"using-openai-functions",level:2},{value:"Multi DataFrame Example",id:"multi-dataframe-example",level:2}],c=(h="CodeOutputBlock",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var h;const g={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pandas-dataframe"},"Pandas Dataframe"),(0,r.kt)("p",null,"This notebook shows how to use agents to interact with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Pandas DataFrame"),". It is mostly optimized for question answering."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE: this agent calls the ",(0,r.kt)("inlineCode",{parentName:"strong"},"Python")," agent under the hood, which executes LLM generated Python code - this can be bad if the LLM generated Python code is harmful. Use cautiously.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "create_pandas_dataframe_agent", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.agent_toolkits.pandas.base.create_pandas_dataframe_agent.html", "title": "Pandas Dataframe"}, {"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Pandas Dataframe"}, {"imported": "AgentType", "source": "langchain.agents.agent_types", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.agent_types.AgentType.html", "title": "Pandas Dataframe"}]--\x3e\nfrom langchain.agents import create_pandas_dataframe_agent\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.agents.agent_types import AgentType\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openai.OpenAI.html", "title": "Pandas Dataframe"}]--\x3e\nfrom langchain.llms import OpenAI\nimport pandas as pd\n\ndf = pd.read_csv("titanic.csv")\n')),(0,r.kt)("h2",{id:"using-zero_shot_react_description"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"ZERO_SHOT_REACT_DESCRIPTION")),(0,r.kt)("p",null,"This shows how to initialize the agent using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZERO_SHOT_REACT_DESCRIPTION")," agent type. Note that this is an alternative to the above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"agent = create_pandas_dataframe_agent(OpenAI(temperature=0), df, verbose=True)\n")),(0,r.kt)("h2",{id:"using-openai-functions"},"Using OpenAI Functions"),(0,r.kt)("p",null,"This shows how to initialize the agent using the OPENAI_FUNCTIONS agent type. Note that this is an alternative to the above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent = create_pandas_dataframe_agent(\n    ChatOpenAI(temperature=0, model="gpt-3.5-turbo-0613"),\n    df,\n    verbose=True,\n    agent_type=AgentType.OPENAI_FUNCTIONS,\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("how many rows are there?")\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new  chain...\n    \n    Invoking: `python_repl_ast` with `df.shape[0]`\n    \n    \n    891There are 891 rows in the dataframe.\n    \n    > Finished chain.\n\n\n\n\n\n    'There are 891 rows in the dataframe.'\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("how many people have more than 3 siblings")\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    Thought: I need to count the number of people with more than 3 siblings\n    Action: python_repl_ast\n    Action Input: df[df['SibSp'] > 3].shape[0]\n    Observation: 30\n    Thought: I now know the final answer\n    Final Answer: 30 people have more than 3 siblings.\n    \n    > Finished chain.\n\n\n\n\n\n    '30 people have more than 3 siblings.'\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("whats the square root of the average age?")\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    Thought: I need to calculate the average age first\n    Action: python_repl_ast\n    Action Input: df['Age'].mean()\n    Observation: 29.69911764705882\n    Thought: I now need to calculate the square root of the average age\n    Action: python_repl_ast\n    Action Input: math.sqrt(df['Age'].mean())\n    Observation: NameError(\"name 'math' is not defined\")\n    Thought: I need to import the math library\n    Action: python_repl_ast\n    Action Input: import math\n    Observation: \n    Thought: I now need to calculate the square root of the average age\n    Action: python_repl_ast\n    Action Input: math.sqrt(df['Age'].mean())\n    Observation: 5.449689683556195\n    Thought: I now know the final answer\n    Final Answer: The square root of the average age is 5.449689683556195.\n    \n    > Finished chain.\n\n\n\n\n\n    'The square root of the average age is 5.449689683556195.'\n"))),(0,r.kt)("h2",{id:"multi-dataframe-example"},"Multi DataFrame Example"),(0,r.kt)("p",null,"This next part shows how the agent can interact with multiple dataframes passed in as a list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'df1 = df.copy()\ndf1["Age"] = df1["Age"].fillna(df1["Age"].mean())\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent = create_pandas_dataframe_agent(OpenAI(temperature=0), [df, df1], verbose=True)\nagent.run("how many rows in the age column are different?")\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    Thought: I need to compare the age columns in both dataframes\n    Action: python_repl_ast\n    Action Input: len(df1[df1['Age'] != df2['Age']])\n    Observation: 177\n    Thought: I now know the final answer\n    Final Answer: 177 rows in the age column are different.\n    \n    > Finished chain.\n\n\n\n\n\n    '177 rows in the age column are different.'\n"))))}u.isMDXComponent=!0}}]);
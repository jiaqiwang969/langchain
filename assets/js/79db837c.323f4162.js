"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24351],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,d=c["".concat(s,".").concat(g)]||c[g]||u[g]||o;return n?a.createElement(d,i(i({ref:t},h),{},{components:n})):a.createElement(d,i({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},96264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="GraphQL",l={unversionedId:"integrations/tools/graphql",id:"integrations/tools/graphql",title:"GraphQL",description:"GraphQL is a query language for APIs and a runtime for executing those queries against your data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.",source:"@site/docs/integrations/tools/graphql.md",sourceDirName:"integrations/tools",slug:"/integrations/tools/graphql",permalink:"/langchain/docs/integrations/tools/graphql",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Gradio",permalink:"/langchain/docs/integrations/tools/gradio_tools"},next:{title:"HuggingFace Hub Tools",permalink:"/langchain/docs/integrations/tools/huggingface_tools"}},s={},p=[],h=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const u={toc:p},g="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"graphql"},"GraphQL"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," is a query language for APIs and a runtime for executing those queries against your data. ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQL")," provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.")),(0,r.kt)("p",null,"By including a ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseGraphQLTool")," in the list of tools provided to an Agent, you can grant your Agent the ability to query data from GraphQL APIs for any purposes you need."),(0,r.kt)("p",null,"This Jupyter Notebook demonstrates how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLAPIWrapper")," component with an Agent."),(0,r.kt)("p",null,"In this example, we'll be using the public ",(0,r.kt)("inlineCode",{parentName:"p"},"Star Wars GraphQL API")," available at the following endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://swapi-graphql.netlify.app/.netlify/functions/index"},"https://swapi-graphql.netlify.app/.netlify/functions/index"),"."),(0,r.kt)("p",null,"First, you need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"httpx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"gql")," Python packages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pip install httpx gql > /dev/null\n")),(0,r.kt)("p",null,"Now, let's create a BaseGraphQLTool instance with the specified Star Wars API endpoint and initialize an Agent with the tool."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "load_tools", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.load_tools.load_tools.html", "title": "GraphQL"}, {"imported": "initialize_agent", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.initialize.initialize_agent.html", "title": "GraphQL"}, {"imported": "AgentType", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.agent_types.AgentType.html", "title": "GraphQL"}, {"imported": "GraphQLAPIWrapper", "source": "langchain.utilities", "docs": "https://api.python.langchain.com/en/latest/utilities/langchain.utilities.graphql.GraphQLAPIWrapper.html", "title": "GraphQL"}]--\x3e\nfrom langchain import OpenAI\nfrom langchain.agents import load_tools, initialize_agent, AgentType\nfrom langchain.utilities import GraphQLAPIWrapper\n\nllm = OpenAI(temperature=0)\n\ntools = load_tools(\n    ["graphql"],\n    graphql_endpoint="https://swapi-graphql.netlify.app/.netlify/functions/index",\n)\n\nagent = initialize_agent(\n    tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True\n)\n')),(0,r.kt)("p",null,"Now, we can use the Agent to run queries against the Star Wars GraphQL API. Let's ask the Agent to list all the Star Wars films and their release dates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'graphql_fields = """allFilms {\n    films {\n      title\n      director\n      releaseDate\n      speciesConnection {\n        species {\n          name\n          classification\n          homeworld {\n            name\n          }\n        }\n      }\n    }\n  }\n\n"""\n\nsuffix = "Search for the titles of all the stawars films stored in the graphql database that has this schema "\n\n\nagent.run(suffix + graphql_fields)\n')),(0,r.kt)(h,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n     I need to query the graphql database to get the titles of all the star wars films\n    Action: query_graphql\n    Action Input: query { allFilms { films { title } } }\n    Observation: "{\\n  \\"allFilms\\": {\\n    \\"films\\": [\\n      {\\n        \\"title\\": \\"A New Hope\\"\\n      },\\n      {\\n        \\"title\\": \\"The Empire Strikes Back\\"\\n      },\\n      {\\n        \\"title\\": \\"Return of the Jedi\\"\\n      },\\n      {\\n        \\"title\\": \\"The Phantom Menace\\"\\n      },\\n      {\\n        \\"title\\": \\"Attack of the Clones\\"\\n      },\\n      {\\n        \\"title\\": \\"Revenge of the Sith\\"\\n      }\\n    ]\\n  }\\n}"\n    Thought: I now know the titles of all the star wars films\n    Final Answer: The titles of all the star wars films are: A New Hope, The Empire Strikes Back, Return of the Jedi, The Phantom Menace, Attack of the Clones, and Revenge of the Sith.\n    \n    > Finished chain.\n\n\n\n\n\n    \'The titles of all the star wars films are: A New Hope, The Empire Strikes Back, Return of the Jedi, The Phantom Menace, Attack of the Clones, and Revenge of the Sith.\'\n'))))}d.isMDXComponent=!0}}]);
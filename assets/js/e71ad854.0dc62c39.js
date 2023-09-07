"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8975],{3905:(t,e,n)=>{n.d(e,{Zo:()=>h,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=a.createContext({}),c=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},h=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},p="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,s=t.originalType,i=t.parentName,h=r(t,["components","mdxType","originalType","parentName"]),p=c(n),u=o,m=p["".concat(i,".").concat(u)]||p[u]||g[u]||s;return n?a.createElement(m,l(l({ref:e},h),{},{components:n})):a.createElement(m,l({ref:e},h))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=n.length,l=new Array(s);l[0]=u;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=t,r[p]="string"==typeof t?t:o,l[1]=r;for(var c=2;c<s;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85682:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const s={},l="Shell (bash)",r={unversionedId:"integrations/tools/bash",id:"integrations/tools/bash",title:"Shell (bash)",description:"Giving agents access to the shell is powerful (though risky outside a sandboxed environment).",source:"@site/docs/integrations/tools/bash.md",sourceDirName:"integrations/tools",slug:"/integrations/tools/bash",permalink:"/langchain/docs/integrations/tools/bash",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"AWS Lambda",permalink:"/langchain/docs/integrations/tools/awslambda"},next:{title:"Bing Search",permalink:"/langchain/docs/integrations/tools/bing_search"}},i={},c=[{value:"Use with Agents",id:"use-with-agents",level:3}],h=(p="CodeOutputBlock",function(t){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)});var p;const g={toc:c},u="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shell-bash"},"Shell (bash)"),(0,o.kt)("p",null,"Giving agents access to the shell is powerful (though risky outside a sandboxed environment)."),(0,o.kt)("p",null,"The LLM can use it to execute any shell commands. A common use case for this is letting the LLM interact with your local file system."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Shell tool does not work with Windows OS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ShellTool", "source": "langchain.tools", "docs": "https://api.python.langchain.com/en/latest/tools/langchain.tools.shell.tool.ShellTool.html", "title": "Shell (bash)"}]--\x3e\nfrom langchain.tools import ShellTool\n\nshell_tool = ShellTool()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'print(shell_tool.run({"commands": ["echo \'Hello World!\'", "time"]}))\n')),(0,o.kt)(h,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Hello World!\n    \n    real    0m0.000s\n    user    0m0.000s\n    sys 0m0.000s\n    \n\n\n    /Users/wfh/code/lc/lckg/langchain/tools/shell/tool.py:34: UserWarning: The shell tool has no safeguards by default. Use at your own risk.\n      warnings.warn(\n"))),(0,o.kt)("h3",{id:"use-with-agents"},"Use with Agents"),(0,o.kt)("p",null,"As with all tools, these can be given to an agent to accomplish more complex tasks. Let's have the agent fetch some links from a web page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Shell (bash)"}, {"imported": "initialize_agent", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.initialize.initialize_agent.html", "title": "Shell (bash)"}, {"imported": "AgentType", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.agent_types.AgentType.html", "title": "Shell (bash)"}]--\x3e\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.agents import initialize_agent\nfrom langchain.agents import AgentType\n\nllm = ChatOpenAI(temperature=0)\n\nshell_tool.description = shell_tool.description + f"args {shell_tool.args}".replace(\n    "{", "{{"\n).replace("}", "}}")\nself_ask_with_search = initialize_agent(\n    [shell_tool], llm, agent=AgentType.CHAT_ZERO_SHOT_REACT_DESCRIPTION, verbose=True\n)\nself_ask_with_search.run(\n    "Download the langchain.com webpage and grep for all urls. Return only a sorted list of them. Be sure to use double quotes."\n)\n')),(0,o.kt)(h,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n    Question: What is the task?\n    Thought: We need to download the langchain.com webpage and extract all the URLs from it. Then we need to sort the URLs and return them.\n    Action:\n    ```\n    {\n      "action": "shell",\n      "action_input": {\n        "commands": [\n          "curl -s https://langchain.com | grep -o \'http[s]*://[^\\" ]*\' | sort"\n        ]\n      }\n    }\n    ```\n\n\n    /Users/wfh/code/lc/lckg/langchain/tools/shell/tool.py:34: UserWarning: The shell tool has no safeguards by default. Use at your own risk.\n      warnings.warn(\n\n\n    \n    Observation: https://blog.langchain.dev/\n    https://discord.gg/6adMQxSpJS\n    https://docs.langchain.com/docs/\n    https://github.com/hwchase17/chat-langchain\n    https://github.com/hwchase17/langchain\n    https://github.com/hwchase17/langchainjs\n    https://github.com/sullivan-sean/chat-langchainjs\n    https://js.langchain.com/docs/\n    https://python.langchain.com/en/latest/\n    https://twitter.com/langchainai\n    \n    Thought:The URLs have been successfully extracted and sorted. We can return the list of URLs as the final answer.\n    Final Answer: ["https://blog.langchain.dev/", "https://discord.gg/6adMQxSpJS", "https://docs.langchain.com/docs/", "https://github.com/hwchase17/chat-langchain", "https://github.com/hwchase17/langchain", "https://github.com/hwchase17/langchainjs", "https://github.com/sullivan-sean/chat-langchainjs", "https://js.langchain.com/docs/", "https://python.langchain.com/en/latest/", "https://twitter.com/langchainai"]\n    \n    > Finished chain.\n\n\n\n\n\n    \'["https://blog.langchain.dev/", "https://discord.gg/6adMQxSpJS", "https://docs.langchain.com/docs/", "https://github.com/hwchase17/chat-langchain", "https://github.com/hwchase17/langchain", "https://github.com/hwchase17/langchainjs", "https://github.com/sullivan-sean/chat-langchainjs", "https://js.langchain.com/docs/", "https://python.langchain.com/en/latest/", "https://twitter.com/langchainai"]\'\n'))))}m.isMDXComponent=!0}}]);
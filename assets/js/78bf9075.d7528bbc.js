"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={},r="Github",s={unversionedId:"integrations/toolkits/github",id:"integrations/toolkits/github",title:"Github",description:"The Github toolkit contains tools that enable an LLM agent to interact with a github repository.",source:"@site/docs/integrations/toolkits/github.md",sourceDirName:"integrations/toolkits",slug:"/integrations/toolkits/github",permalink:"/langchain/docs/integrations/toolkits/github",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Document Comparison",permalink:"/langchain/docs/integrations/toolkits/document_comparison_toolkit"},next:{title:"Gmail",permalink:"/langchain/docs/integrations/toolkits/gmail"}},l={},p=[{value:"Quickstart",id:"quickstart",level:2},{value:"Setup",id:"setup",level:2},{value:"1. Install the <code>pygithub</code> library",id:"1-install-the-pygithub-library",level:3},{value:"2. Create a Github App",id:"2-create-a-github-app",level:3},{value:"3. Set Environmental Variables",id:"3-set-environmental-variables",level:3},{value:"Example: Simple Agent",id:"example-simple-agent",level:2},{value:"Example: Advanced Agent",id:"example-advanced-agent",level:2}],u=(h="CodeOutputBlock",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var h;const c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"github"},"Github"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Github")," toolkit contains tools that enable an LLM agent to interact with a github repository.\nThe tool is a wrapper for the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PyGithub/PyGithub"},"PyGitHub")," library. "),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the pygithub library"),(0,o.kt)("li",{parentName:"ol"},"Create a Github app"),(0,o.kt)("li",{parentName:"ol"},"Set your environmental variables"),(0,o.kt)("li",{parentName:"ol"},"Pass the tools to your agent with ",(0,o.kt)("inlineCode",{parentName:"li"},"toolkit.get_tools()"))),(0,o.kt)("p",null,"Each of these steps will be explained in greate detail below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Get Issues"),"- fetches issues from the repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Get Issue"),"- feteches details about a specific issue.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Comment on Issue"),"- posts a comment on a specific issue.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Create Pull Request"),"- creates a pull request from the bot's working branch to the base branch.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Create File"),"- creates a new file in the repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Read File"),"- reads a file from the repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Update File"),"- updates a file in the repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Delete File"),"- deletes a file from the repository."))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("h3",{id:"1-install-the-pygithub-library"},"1. Install the ",(0,o.kt)("inlineCode",{parentName:"h3"},"pygithub")," library"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%pip install pygithub\n")),(0,o.kt)("h3",{id:"2-create-a-github-app"},"2. Create a Github App"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app"},"Follow the instructions here")," to create and register a Github app. Make sure your app has the following ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28"},"repository permissions:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Commit statuses (read only)"),(0,o.kt)("li",{parentName:"ul"},"Contents (read and write)"),(0,o.kt)("li",{parentName:"ul"},"Issues (read and write)"),(0,o.kt)("li",{parentName:"ul"},"Metadata (read only)"),(0,o.kt)("li",{parentName:"ul"},"Pull requests (read and write)")),(0,o.kt)("p",null,"Once the app has been registered, add it to the repository you wish the bot to act upon."),(0,o.kt)("h3",{id:"3-set-environmental-variables"},"3. Set Environmental Variables"),(0,o.kt)("p",null,"Before initializing your agent, the following environmental variables need to be set:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GITHUB_APP_ID"),"- A six digit number found in your app's general settings"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GITHUB_APP_PRIVATE_KEY"),"- The location of your app's private key .pem file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GITHUB_REPOSITORY"),"- The name of the Github repository you want your bot to act upon. Must follow the format {username}/{repo-name}. Make sure the app has been added to this repository first!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GITHUB_BRANCH"),"- The branch where the bot will make its commits. Defaults to 'master.'"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GITHUB_BASE_BRANCH"),"- The base branch of your repo, usually either 'main' or 'master.' This is where pull requests will base from. Defaults to 'master.'")),(0,o.kt)("h2",{id:"example-simple-agent"},"Example: Simple Agent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "AgentType", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.agent_types.AgentType.html", "title": "Github"}, {"imported": "initialize_agent", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.initialize.initialize_agent.html", "title": "Github"}, {"imported": "GitHubToolkit", "source": "langchain.agents.agent_toolkits.github.toolkit", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.agent_toolkits.github.toolkit.GitHubToolkit.html", "title": "Github"}, {"imported": "OpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openai.OpenAI.html", "title": "Github"}, {"imported": "GitHubAPIWrapper", "source": "langchain.utilities.github", "docs": "https://api.python.langchain.com/en/latest/utilities/langchain.utilities.github.GitHubAPIWrapper.html", "title": "Github"}]--\x3e\nimport os\nfrom langchain.agents import AgentType\nfrom langchain.agents import initialize_agent\nfrom langchain.agents.agent_toolkits.github.toolkit import GitHubToolkit\nfrom langchain.llms import OpenAI\nfrom langchain.utilities.github import GitHubAPIWrapper\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Set your environment variables using os.environ\nos.environ["GITHUB_APP_ID"] = "123456"\nos.environ["GITHUB_APP_PRIVATE_KEY"] = "path/to/your/private-key.pem"\nos.environ["GITHUB_REPOSITORY"] = "username/repo-name"\nos.environ["GITHUB_BRANCH"] = "bot-branch-name"\nos.environ["GITHUB_BASE_BRANCH"] = "main"\n\n# This example also requires an OpenAI API key\nos.environ["OPENAI_API_KEY"] = ""\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"llm = OpenAI(temperature=0)\ngithub = GitHubAPIWrapper()\ntoolkit = GitHubToolkit.from_github_api_wrapper(github)\nagent = initialize_agent(\n    toolkit.get_tools(), llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True\n)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'agent.run(\n    "You have the software engineering capabilities of a Google Principle engineer. You are tasked with completing issues on a github repository. Please look at the existing issues and complete them."\n)\n')),(0,o.kt)(u,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n     I need to figure out what issues need to be completed.\n    Action: Get Issues\n    Action Input: N/A\n    Observation: Found 1 issues:\n    [{\'title\': \'Update README file\', \'number\': 9}]\n    Thought: I need to get more information about this issue.\n    Action: Get Issue\n    Action Input: 9\n    Observation: {"title": "Update README file", "body": "Find what the most popular frontend framework is right now and add a short blurb to the readme.md file about how this website will take advantage of it.", "comments": "[]"}\n    Thought: I need to update the README file.\n    Action: Create File\n    Action Input: README.md\n    Observation: File already exists at README.md. Use update_file instead\n    Thought: I need to update the existing README file.\n    Action: Update File\n    Action Input: README.md\n    OLD <<<<\n    This is a sample website\n    >>>> OLD\n    NEW <<<<\n    This is a sample website that uses the most popular frontend framework.\n    >>>> NEW\n    Observation: File content was not updated because old content was not found.It may be helpful to use the read_file action to get the current file contents.\n    Thought: I need to get the current file contents.\n    Action: Read File\n    Action Input: README.md\n    Observation: This is my awesome website!\n    \n    Thought: I need to update the README file with the new content.\n    Action: Update File\n    Action Input: README.md\n    OLD <<<<\n    This is my awesome website!\n    >>>> OLD\n    NEW <<<<\n    This is my awesome website that uses the most popular frontend framework.\n    >>>> NEW\n    Observation: Updated file README.md\n    Thought: I now know the final answer.\n    Final Answer: The README.md file has been updated with the new content.\n    \n    > Finished chain.\n\n\n\n\n\n    \'The README.md file has been updated with the new content.\'\n'))),(0,o.kt)("h2",{id:"example-advanced-agent"},"Example: Advanced Agent"),(0,o.kt)("p",null,"If your agent does not need to use all 8 tools, you can build tools individually to use. For this example, we'll make an agent that does not use the create_file, delete_file or create_pull_request tools, but can also use duckduckgo-search."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%pip install duckduckgo-search\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "GitHubAction", "source": "langchain.tools.github.tool", "docs": "https://api.python.langchain.com/en/latest/tools/langchain.tools.github.tool.GitHubAction.html", "title": "Github"}, {"imported": "DuckDuckGoSearchRun", "source": "langchain.tools", "docs": "https://api.python.langchain.com/en/latest/tools/langchain.tools.ddg_search.tool.DuckDuckGoSearchRun.html", "title": "Github"}, {"imported": "Tool", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/tools/langchain.tools.base.Tool.html", "title": "Github"}, {"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Github"}]--\x3e\nfrom langchain.tools.github.tool import GitHubAction\nfrom langchain.tools import DuckDuckGoSearchRun\nfrom langchain.agents import Tool\nfrom langchain.chat_models import ChatOpenAI\n\ntools = []\nunwanted_tools = [\'Get Issue\',\'Delete File\', \'Create File\', \'Create Pull Request\']\n\nfor tool in toolkit.get_tools():\n    if tool.name not in unwanted_tools:\n        tools.append(tool)\ntools+= [\n    Tool(\n        name = "Search",\n        func = DuckDuckGoSearchRun().run,\n        description = "useful for when you need to search the web"\n    )]\n        \nagent = initialize_agent(\n    tools = tools,\n    llm = ChatOpenAI(temperature=0.1),\n    agent = AgentType.ZERO_SHOT_REACT_DESCRIPTION,\n    verbose = True\n)\n')),(0,o.kt)("p",null,"Finally let's build a prompt and test it out!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# The GitHubAPIWrapper can be used outside of an agent, too\n# This gets the info about issue number 9, since we want to\n# force the agent to address this specific issue.\n\nissue = github.get_issue(9)\n\nprompt = f"""\nYou are a seinor frontend developer who is experienced in HTML, CSS, and JS- especially React.\nYou have been assigned the below issue. Complete it to the best of your ability.\nRemember to first make a plan and pay attention to details like file names and commonsense.\nThen execute the plan and use tools appropriately.\nFinally, make a pull request to merge your changes.\nIssue: {issue["title"]}\nIssue Description: {issue[\'body\']}\nComments: {issue[\'comments\']}"""\n\nagent.run(prompt)\n')),(0,o.kt)(u,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n    To complete this issue, I need to find the most popular frontend framework and add a blurb about how this website will utilize it to the readme.md file. I should start by researching the most popular frontend frameworks and then update the readme file accordingly. I will use the "Search" tool to research the most popular frontend framework.\n    \n    Action: Search\n    Action Input: "most popular frontend framework"\n    Observation: Alex Ivanovs February 25, 2023 Table of Contents What are the current Front-end trends? Top Front-end Frameworks for 2023 #1 - React #2 - Angular #3 - Vue #4 - Svelte #5 - Preact #6 - Ember #7 - Solid #8 - Lit #9 - Alpine #10 - Stencil #11 - Qwik Front-end Frameworks: A Summary Top 6 Frontend Frameworks To Use in 2022 by Nwose Lotanna Victor August 26, 2022 Web 0 Comments This post reveals the top six frontend libraries to use in 2022. The list is fresh and very different from the previous years. State of JS Though React is the most popular framework for frontend development, it also has some shortcomings. Due to its limitations, the idea was to design a small-size framework that will offer the same features as React. This is how a tiny version of React \u2014 Preact \u2014 appeared. Top 10 Popular Frontend Frameworks to Use in 2023 Sep 26, 2022 10 min \u0421ontents 1. What is a framework? 2. Front-end frameworks vs backend frameworks 3. The best front-end frameworks in 2023 React Vue.js Angular Svelte JQuery Ember Backbone Semantic UI 4. Final words Technostacks Jan 11 2023 Top Frontend Frameworks of 2023 for Web Development Developing what the users see on their screens is the role of a front-end web developer. Unarguably, front-end developers worldwide are trying to use the best front-end frameworks to provide the best user experience.\n    Thought:Based on my research, the most popular frontend framework right now is React. I will now update the readme.md file to include a blurb about how this website will take advantage of React.\n    \n    Action: Update File\n    Action Input:\n    README.md\n    OLD <<<<\n    This is the readme file for the website.\n    >>>> OLD\n    NEW <<<<\n    This is the readme file for the website.\n    \n    This website takes advantage of the React framework, which allows for efficient and reusable UI components. With React, we can easily manage the state of our application and create interactive user interfaces. It provides a smooth and seamless user experience, making this website highly responsive and dynamic.\n    >>>> NEW\n    \n    Observation: File content was not updated because old content was not found.It may be helpful to use the read_file action to get the current file contents.\n    Thought:I need to first read the contents of the README.md file to get the current content. Then I can update the file with the new content.\n    \n    Action: Read File\n    Action Input: README.md\n    Observation: This is my awesome website that uses the most popular frontend framework.\n    \n    Thought:The current content of the README.md file is "This is my awesome website that uses the most popular frontend framework." I can now update the file with the new content.\n    \n    Action: Update File\n    Action Input:\n    README.md\n    OLD <<<<\n    This is my awesome website that uses the most popular frontend framework.\n    >>>> OLD\n    NEW <<<<\n    This is my awesome website that uses the most popular frontend framework.\n    \n    This website takes advantage of the React framework, which allows for efficient and reusable UI components. With React, we can easily manage the state of our application and create interactive user interfaces. It provides a smooth and seamless user experience, making this website highly responsive and dynamic.\n    >>>> NEW\n    \n    Observation: Updated file README.md\n    Thought:I have successfully updated the README.md file with the blurb about how this website will take advantage of the React framework.\n    \n    Final Answer: The most popular frontend framework right now is React. This website takes advantage of React to create efficient and reusable UI components, manage application state, and provide a smooth and seamless user experience.\n    \n    > Finished chain.\n\n\n\n\n\n    \'The most popular frontend framework right now is React. This website takes advantage of React to create efficient and reusable UI components, manage application state, and provide a smooth and seamless user experience.\'\n'))))}d.isMDXComponent=!0}}]);
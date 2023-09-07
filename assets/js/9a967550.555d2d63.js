"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95891],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),c=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(m.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,d=u["".concat(m,".").concat(g)]||u[g]||p[g]||s;return t?a.createElement(d,o(o({ref:n},l),{},{components:t})):a.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=g;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},46097:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const s={},o="Simulated Environment: Gymnasium",i={unversionedId:"use_cases/more/agents/agent_simulations/gymnasium",id:"use_cases/more/agents/agent_simulations/gymnasium",title:"Simulated Environment: Gymnasium",description:"For many applications of LLM agents, the environment is real (internet, database, REPL, etc). However, we can also define agents to interact in simulated environments like text-based games. This is an example of how to create a simple agent-environment interaction loop with Gymnasium (formerly OpenAI Gym).",source:"@site/docs/use_cases/more/agents/agent_simulations/gymnasium.md",sourceDirName:"use_cases/more/agents/agent_simulations",slug:"/use_cases/more/agents/agent_simulations/gymnasium",permalink:"/langchain/docs/use_cases/more/agents/agent_simulations/gymnasium",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"use_cases",previous:{title:"Generative Agents in LangChain",permalink:"/langchain/docs/use_cases/more/agents/agent_simulations/characters"},next:{title:"Multi-Player Dungeons & Dragons",permalink:"/langchain/docs/use_cases/more/agents/agent_simulations/multi_player_dnd"}},m={},c=[{value:"Define the agent",id:"define-the-agent",level:2},{value:"Initialize the simulated environment and agent",id:"initialize-the-simulated-environment-and-agent",level:2},{value:"Main loop",id:"main-loop",level:2}],l=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const p={toc:c},g="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"simulated-environment-gymnasium"},"Simulated Environment: Gymnasium"),(0,r.kt)("p",null,"For many applications of LLM agents, the environment is real (internet, database, REPL, etc). However, we can also define agents to interact in simulated environments like text-based games. This is an example of how to create a simple agent-environment interaction loop with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Farama-Foundation/Gymnasium"},"Gymnasium")," (formerly ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openai/gym"},"OpenAI Gym"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install gymnasium\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Simulated Environment: Gymnasium"}, {"imported": "AIMessage", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.messages.AIMessage.html", "title": "Simulated Environment: Gymnasium"}, {"imported": "HumanMessage", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.messages.HumanMessage.html", "title": "Simulated Environment: Gymnasium"}, {"imported": "SystemMessage", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.messages.SystemMessage.html", "title": "Simulated Environment: Gymnasium"}, {"imported": "BaseMessage", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.messages.BaseMessage.html", "title": "Simulated Environment: Gymnasium"}, {"imported": "RegexParser", "source": "langchain.output_parsers", "docs": "https://api.python.langchain.com/en/latest/output_parsers/langchain.output_parsers.regex.RegexParser.html", "title": "Simulated Environment: Gymnasium"}]--\x3e\nimport gymnasium as gym\nimport inspect\nimport tenacity\n\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.schema import (\n    AIMessage,\n    HumanMessage,\n    SystemMessage,\n    BaseMessage,\n)\nfrom langchain.output_parsers import RegexParser\n')),(0,r.kt)("h2",{id:"define-the-agent"},"Define the agent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class GymnasiumAgent:\n    @classmethod\n    def get_docs(cls, env):\n        return env.unwrapped.__doc__\n\n    def __init__(self, model, env):\n        self.model = model\n        self.env = env\n        self.docs = self.get_docs(env)\n\n        self.instructions = """\nYour goal is to maximize your return, i.e. the sum of the rewards you receive.\nI will give you an observation, reward, terminiation flag, truncation flag, and the return so far, formatted as:\n\nObservation: <observation>\nReward: <reward>\nTermination: <termination>\nTruncation: <truncation>\nReturn: <sum_of_rewards>\n\nYou will respond with an action, formatted as:\n\nAction: <action>\n\nwhere you replace <action> with your actual action.\nDo nothing else but return the action.\n"""\n        self.action_parser = RegexParser(\n            regex=r"Action: (.*)", output_keys=["action"], default_output_key="action"\n        )\n\n        self.message_history = []\n        self.ret = 0\n\n    def random_action(self):\n        action = self.env.action_space.sample()\n        return action\n\n    def reset(self):\n        self.message_history = [\n            SystemMessage(content=self.docs),\n            SystemMessage(content=self.instructions),\n        ]\n\n    def observe(self, obs, rew=0, term=False, trunc=False, info=None):\n        self.ret += rew\n\n        obs_message = f"""\nObservation: {obs}\nReward: {rew}\nTermination: {term}\nTruncation: {trunc}\nReturn: {self.ret}\n        """\n        self.message_history.append(HumanMessage(content=obs_message))\n        return obs_message\n\n    def _act(self):\n        act_message = self.model(self.message_history)\n        self.message_history.append(act_message)\n        action = int(self.action_parser.parse(act_message.content)["action"])\n        return action\n\n    def act(self):\n        try:\n            for attempt in tenacity.Retrying(\n                stop=tenacity.stop_after_attempt(2),\n                wait=tenacity.wait_none(),  # No waiting time between retries\n                retry=tenacity.retry_if_exception_type(ValueError),\n                before_sleep=lambda retry_state: print(\n                    f"ValueError occurred: {retry_state.outcome.exception()}, retrying..."\n                ),\n            ):\n                with attempt:\n                    action = self._act()\n        except tenacity.RetryError as e:\n            action = self.random_action()\n        return action\n')),(0,r.kt)("h2",{id:"initialize-the-simulated-environment-and-agent"},"Initialize the simulated environment and agent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'env = gym.make("Blackjack-v1")\nagent = GymnasiumAgent(model=ChatOpenAI(temperature=0.2), env=env)\n')),(0,r.kt)("h2",{id:"main-loop"},"Main loop"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'observation, info = env.reset()\nagent.reset()\n\nobs_message = agent.observe(observation)\nprint(obs_message)\n\nwhile True:\n    action = agent.act()\n    observation, reward, termination, truncation, info = env.step(action)\n    obs_message = agent.observe(observation, reward, termination, truncation, info)\n    print(f"Action: {action}")\n    print(obs_message)\n\n    if termination or truncation:\n        print("break", termination, truncation)\n        break\nenv.close()\n')),(0,r.kt)(l,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    Observation: (15, 4, 0)\n    Reward: 0\n    Termination: False\n    Truncation: False\n    Return: 0\n            \n    Action: 1\n    \n    Observation: (25, 4, 0)\n    Reward: -1.0\n    Termination: True\n    Truncation: False\n    Return: -1.0\n            \n    break True False\n"))))}d.isMDXComponent=!0}}]);
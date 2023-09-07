"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51114],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||l;return t?o.createElement(d,r(r({ref:n},c),{},{components:t})):o.createElement(d,r({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87442:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const l={},r="Tool Input Schema",i={unversionedId:"modules/agents/tools/tool_input_validation",id:"modules/agents/tools/tool_input_validation",title:"Tool Input Schema",description:"By default, tools infer the argument schema by inspecting the function signature. For more strict requirements, custom input schema can be specified, along with custom validation logic.",source:"@site/docs/modules/agents/tools/tool_input_validation.md",sourceDirName:"modules/agents/tools",slug:"/modules/agents/tools/tool_input_validation",permalink:"/langchain/docs/modules/agents/tools/tool_input_validation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Multi-Input Tools",permalink:"/langchain/docs/modules/agents/tools/multi_input_tool"},next:{title:"Tools as OpenAI Functions",permalink:"/langchain/docs/modules/agents/tools/tools_as_openai_functions"}},s={},p=[],c=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const g={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tool-input-schema"},"Tool Input Schema"),(0,a.kt)("p",null,"By default, tools infer the argument schema by inspecting the function signature. For more strict requirements, custom input schema can be specified, along with custom validation logic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "AgentType", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.agent_types.AgentType.html", "title": "Tool Input Schema"}, {"imported": "initialize_agent", "source": "langchain.agents", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.initialize.initialize_agent.html", "title": "Tool Input Schema"}, {"imported": "OpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openai.OpenAI.html", "title": "Tool Input Schema"}, {"imported": "RequestsGetTool", "source": "langchain.tools.requests.tool", "docs": "https://api.python.langchain.com/en/latest/tools/langchain.tools.requests.tool.RequestsGetTool.html", "title": "Tool Input Schema"}, {"imported": "TextRequestsWrapper", "source": "langchain.tools.requests.tool", "docs": "https://api.python.langchain.com/en/latest/utilities/langchain.utilities.requests.TextRequestsWrapper.html", "title": "Tool Input Schema"}]--\x3e\nfrom typing import Any, Dict\n\nfrom langchain.agents import AgentType, initialize_agent\nfrom langchain.llms import OpenAI\nfrom langchain.tools.requests.tool import RequestsGetTool, TextRequestsWrapper\nfrom pydantic import BaseModel, Field, root_validator\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"llm = OpenAI(temperature=0)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install tldextract > /dev/null\n")),(0,a.kt)(c,{lang:"bash",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    [notice] A new release of pip is available: 23.0.1 -> 23.1\n    [notice] To update, run: pip install --upgrade pip\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import tldextract\n\n_APPROVED_DOMAINS = {\n    "langchain",\n    "wikipedia",\n}\n\n\nclass ToolInputSchema(BaseModel):\n    url: str = Field(...)\n\n    @root_validator\n    def validate_query(cls, values: Dict[str, Any]) -> Dict:\n        url = values["url"]\n        domain = tldextract.extract(url).domain\n        if domain not in _APPROVED_DOMAINS:\n            raise ValueError(\n                f"Domain {domain} is not on the approved list:"\n                f" {sorted(_APPROVED_DOMAINS)}"\n            )\n        return values\n\n\ntool = RequestsGetTool(\n    args_schema=ToolInputSchema, requests_wrapper=TextRequestsWrapper()\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"agent = initialize_agent(\n    [tool], llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=False\n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# This will succeed, since there aren't any arguments that will be triggered during validation\nanswer = agent.run(\"What's the main title on langchain.com?\")\nprint(answer)\n")),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    The main title of langchain.com is "LANG CHAIN \ud83e\udd9c\ufe0f\ud83d\udd17 Official Home Page"\n'))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("What\'s the main title on google.com?")\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    ---------------------------------------------------------------------------\n\n    ValidationError                           Traceback (most recent call last)\n\n    Cell In[7], line 1\n    ----\x3e 1 agent.run("What\'s the main title on google.com?")\n\n\n    File ~/code/lc/lckg/langchain/chains/base.py:213, in Chain.run(self, *args, **kwargs)\n        211     if len(args) != 1:\n        212         raise ValueError("`run` supports only one positional argument.")\n    --\x3e 213     return self(args[0])[self.output_keys[0]]\n        215 if kwargs and not args:\n        216     return self(kwargs)[self.output_keys[0]]\n\n\n    File ~/code/lc/lckg/langchain/chains/base.py:116, in Chain.__call__(self, inputs, return_only_outputs)\n        114 except (KeyboardInterrupt, Exception) as e:\n        115     self.callback_manager.on_chain_error(e, verbose=self.verbose)\n    --\x3e 116     raise e\n        117 self.callback_manager.on_chain_end(outputs, verbose=self.verbose)\n        118 return self.prep_outputs(inputs, outputs, return_only_outputs)\n\n\n    File ~/code/lc/lckg/langchain/chains/base.py:113, in Chain.__call__(self, inputs, return_only_outputs)\n        107 self.callback_manager.on_chain_start(\n        108     {"name": self.__class__.__name__},\n        109     inputs,\n        110     verbose=self.verbose,\n        111 )\n        112 try:\n    --\x3e 113     outputs = self._call(inputs)\n        114 except (KeyboardInterrupt, Exception) as e:\n        115     self.callback_manager.on_chain_error(e, verbose=self.verbose)\n\n\n    File ~/code/lc/lckg/langchain/agents/agent.py:792, in AgentExecutor._call(self, inputs)\n        790 # We now enter the agent loop (until it returns something).\n        791 while self._should_continue(iterations, time_elapsed):\n    --\x3e 792     next_step_output = self._take_next_step(\n        793         name_to_tool_map, color_mapping, inputs, intermediate_steps\n        794     )\n        795     if isinstance(next_step_output, AgentFinish):\n        796         return self._return(next_step_output, intermediate_steps)\n\n\n    File ~/code/lc/lckg/langchain/agents/agent.py:695, in AgentExecutor._take_next_step(self, name_to_tool_map, color_mapping, inputs, intermediate_steps)\n        693         tool_run_kwargs["llm_prefix"] = ""\n        694     # We then call the tool on the tool input to get an observation\n    --\x3e 695     observation = tool.run(\n        696         agent_action.tool_input,\n        697         verbose=self.verbose,\n        698         color=color,\n        699         **tool_run_kwargs,\n        700     )\n        701 else:\n        702     tool_run_kwargs = self.agent.tool_run_logging_kwargs()\n\n\n    File ~/code/lc/lckg/langchain/tools/base.py:110, in BaseTool.run(self, tool_input, verbose, start_color, color, **kwargs)\n        101 def run(\n        102     self,\n        103     tool_input: Union[str, Dict],\n       (...)\n        107     **kwargs: Any,\n        108 ) -> str:\n        109     """Run the tool."""\n    --\x3e 110     run_input = self._parse_input(tool_input)\n        111     if not self.verbose and verbose is not None:\n        112         verbose_ = verbose\n\n\n    File ~/code/lc/lckg/langchain/tools/base.py:71, in BaseTool._parse_input(self, tool_input)\n         69 if issubclass(input_args, BaseModel):\n         70     key_ = next(iter(input_args.__fields__.keys()))\n    ---\x3e 71     input_args.parse_obj({key_: tool_input})\n         72 # Passing as a positional argument is more straightforward for\n         73 # backwards compatability\n         74 return tool_input\n\n\n    File ~/code/lc/lckg/.venv/lib/python3.11/site-packages/pydantic/main.py:526, in pydantic.main.BaseModel.parse_obj()\n\n\n    File ~/code/lc/lckg/.venv/lib/python3.11/site-packages/pydantic/main.py:341, in pydantic.main.BaseModel.__init__()\n\n\n    ValidationError: 1 validation error for ToolInputSchema\n    __root__\n      Domain google is not on the approved list: [\'langchain\', \'wikipedia\'] (type=value_error)\n'))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89033],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),h=o,u=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return t?a.createElement(u,r(r({ref:n},m),{},{components:t})):a.createElement(u,r({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const i={},r="Amazon Comprehend Moderation Chain",l={unversionedId:"guides/safety/amazon_comprehend_chain",id:"guides/safety/amazon_comprehend_chain",title:"Amazon Comprehend Moderation Chain",description:"---",source:"@site/docs/guides/safety/amazon_comprehend_chain.md",sourceDirName:"guides/safety",slug:"/guides/safety/amazon_comprehend_chain",permalink:"/langchain/docs/guides/safety/amazon_comprehend_chain",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Moderation",permalink:"/langchain/docs/guides/safety/"},next:{title:"Self-critique chain with constitutional AI",permalink:"/langchain/docs/guides/safety/constitutional_chain"}},s={},p=[{value:"Using <code>moderation_config</code> to customize your moderation",id:"using-moderation_config-to-customize-your-moderation",level:2},{value:"Unique ID, and Moderation Callbacks",id:"unique-id-and-moderation-callbacks",level:2},{value:"<code>moderation_config</code> and moderation execution order",id:"moderation_config-and-moderation-execution-order",level:2},{value:"With Hugging Face Hub Models",id:"with-hugging-face-hub-models",level:2},{value:"With Amazon SageMaker Jumpstart",id:"with-amazon-sagemaker-jumpstart",level:2}],m={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"amazon-comprehend-moderation-chain"},"Amazon Comprehend Moderation Chain"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%pip install boto3 nltk\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import boto3\n\ncomprehend_client = boto3.client('comprehend', region_name='us-east-1')\n")),(0,o.kt)("p",null,"Import ",(0,o.kt)("inlineCode",{parentName:"p"},"AmazonComprehendModerationChain")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain_experimental.comprehend_moderation import AmazonComprehendModerationChain\n")),(0,o.kt)("p",null,"Initialize an instance of the Amazon Comprehend Moderation Chain to be used with your LLM chain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"comprehend_moderation = AmazonComprehendModerationChain(\n    client=comprehend_client, #optional\n    verbose=True\n)\n")),(0,o.kt)("p",null,"Using it with your LLM chain. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": The example below uses the ",(0,o.kt)("em",{parentName:"p"},"Fake LLM")," from LangChain, but same concept could be applied to other LLMs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "FakeListLLM", "source": "langchain.llms.fake", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.fake.FakeListLLM.html", "title": "Amazon Comprehend Moderation Chain"}]--\x3e\nfrom langchain import PromptTemplate, LLMChain\nfrom langchain.llms.fake import FakeListLLM\nfrom langchain_experimental.comprehend_moderation.base_moderation_exceptions import ModerationPiiError\n\ntemplate = """Question: {question}\n\nAnswer:"""\n\nprompt = PromptTemplate(template=template, input_variables=["question"])\n\nresponses = [\n    "Final Answer: A credit card number looks like 1289-2321-1123-2387. A fake SSN number looks like 323-22-9980. John Doe\'s phone number is (999)253-9876.", \n    "Final Answer: This is a really shitty way of constructing a birdhouse. This is fucking insane to think that any birds would actually create their motherfucking nests here."\n]\nllm = FakeListLLM(responses=responses)\n\nllm_chain = LLMChain(prompt=prompt, llm=llm)\n\nchain = (\n    prompt \n    | comprehend_moderation \n    | {llm_chain.input_keys[0]: lambda x: x[\'output\'] }  \n    | llm_chain \n    | { "input": lambda x: x[\'text\'] } \n    | comprehend_moderation \n)\n\ntry:\n    response = chain.invoke({"question": "A sample SSN number looks like this 123-456-7890. Can you give me some more samples?"})\nexcept ModerationPiiError as e:\n    print(e.message)\nelse:\n    print(response[\'output\'])\n')),(0,o.kt)("h2",{id:"using-moderation_config-to-customize-your-moderation"},"Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"moderation_config")," to customize your moderation"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Use Amazon Comprehend Moderation with a configuration to control what moderations you wish to perform and what actions should be taken for each of them. There are three different moderations that happen when no configuration is passed as demonstrated above. These moderations are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PII (Personally Identifiable Information) checks "),(0,o.kt)("li",{parentName:"ul"},"Toxicity content detection"),(0,o.kt)("li",{parentName:"ul"},"Intention detection")),(0,o.kt)("p",null,"Here is an example of a moderation config."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain_experimental.comprehend_moderation import BaseModerationActions, BaseModerationFilters\n\nmoderation_config = { \n        "filters":[ \n                BaseModerationFilters.PII, \n                BaseModerationFilters.TOXICITY,\n                BaseModerationFilters.INTENT\n        ],\n        "pii":{ \n                "action": BaseModerationActions.ALLOW, \n                "threshold":0.5, \n                "labels":["SSN"],\n                "mask_character": "X"\n        },\n        "toxicity":{ \n                "action": BaseModerationActions.STOP, \n                "threshold":0.5\n        },\n        "intent":{ \n                "action": BaseModerationActions.STOP, \n                "threshold":0.5\n        }\n}\n')),(0,o.kt)("p",null,"At the core of the configuration you have three filters specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"filters")," key:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"BaseModerationFilters.PII")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"BaseModerationFilters.TOXICITY")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"BaseModerationFilters.INTENT"))),(0,o.kt)("p",null,"And an ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," key that defines two possible actions for each moderation function:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"BaseModerationActions.ALLOW")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"allows")," the prompt to pass through but masks detected PII in case of PII check. The default behavior is to run and redact all PII entities. If there is an entity specified in the ",(0,o.kt)("inlineCode",{parentName:"li"},"labels")," field, then only those entities will go through the PII check and masked."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"BaseModerationActions.STOP")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"stops")," the prompt from passing through to the next step in case any PII, Toxicity, or incorrect Intent is detected. The action of ",(0,o.kt)("inlineCode",{parentName:"li"},"BaseModerationActions.STOP")," will raise a Python ",(0,o.kt)("inlineCode",{parentName:"li"},"Exception")," essentially stopping the chain in progress.")),(0,o.kt)("p",null,"Using the configuration in the previous cell will perform PII checks and will allow the prompt to pass through however it will mask any SSN numbers present in either the prompt or the LLM output."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"comp_moderation_with_config = AmazonComprehendModerationChain(\n    moderation_config=moderation_config, #specify the configuration\n    client=comprehend_client,            #optionally pass the Boto3 Client\n    verbose=True\n)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'template = """Question: {question}\n\nAnswer:"""\n\nprompt = PromptTemplate(template=template, input_variables=["question"])\n\nresponses = [\n    "Final Answer: A credit card number looks like 1289-2321-1123-2387. A fake SSN number looks like 323-22-9980. John Doe\'s phone number is (999)253-9876.", \n    "Final Answer: This is a really shitty way of constructing a birdhouse. This is fucking insane to think that any birds would actually create their motherfucking nests here."\n]\nllm = FakeListLLM(responses=responses)\n\nllm_chain = LLMChain(prompt=prompt, llm=llm)\n\nchain = ( \n    prompt \n    | comp_moderation_with_config \n    | {llm_chain.input_keys[0]: lambda x: x[\'output\'] }  \n    | llm_chain \n    | { "input": lambda x: x[\'text\'] } \n    | comp_moderation_with_config \n)\n\ntry:\n    response = chain.invoke({"question": "A sample SSN number looks like this 123-456-7890. Can you give me some more samples?"})\nexcept Exception as e:\n    print(str(e))\nelse:\n    print(response[\'output\'])\n')),(0,o.kt)("h2",{id:"unique-id-and-moderation-callbacks"},"Unique ID, and Moderation Callbacks"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When Amazon Comprehend moderation action is specified as ",(0,o.kt)("inlineCode",{parentName:"p"},"STOP"),", the chain will raise one of the following exceptions-"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- `ModerationPiiError`, for PII checks\n- `ModerationToxicityError`, for Toxicity checks \n- `ModerationIntentionError` for Intent checks\n")),(0,o.kt)("p",null,"In addition to the moderation configuration, the ",(0,o.kt)("inlineCode",{parentName:"p"},"AmazonComprehendModerationChain")," can also be initialized with the following parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"unique_id")," ","[Optional]"," a string parameter. This parameter can be used to pass any string value or ID. For example, in a chat application you may want to keep track of abusive users, in this case you can pass the user's username/email id etc. This defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"moderation_callback")," ","[Optional]"," the ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseModerationCallbackHandler")," that will be called asynchronously (non-blocking to the chain). Callback functions are useful when you want to perform additional actions when the moderation functions are executed, for example logging into a database, or writing a log file. You can override three functions by subclassing ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseModerationCallbackHandler")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"on_after_pii()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"on_after_toxicity()"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"on_after_intent()"),". Note that all three functions must be ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," functions. These callback functions receive two arguments:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"moderation_beacon")," a dictionary that will contain information about the moderation function, the full response from Amazon Comprehend model, a unique chain id, the moderation status, and the input string which was validated. The dictionary is of the following schema-"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"{ \n    'moderation_chain_id': 'xxx-xxx-xxx', # Unique chain ID\n    'moderation_type': 'Toxicity' | 'PII' | 'Intent', \n    'moderation_status': 'LABELS_FOUND' | 'LABELS_NOT_FOUND',\n    'moderation_input': 'A sample SSN number looks like this 123-456-7890. Can you give me some more samples?',\n    'moderation_output': {...} #Full Amazon Comprehend PII, Toxicity, or Intent Model Output\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"unique_id")," if passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AmazonComprehendModerationChain")))))),(0,o.kt)("div",{class:"alert alert-block alert-info"}," ",(0,o.kt)("b",null,"NOTE:")," ",(0,o.kt)("code",null,"moderation_callback")," is different from LangChain Chain Callbacks. You can still use LangChain Chain callbacks with ",(0,o.kt)("code",null,"AmazonComprehendModerationChain")," via the callbacks parameter. Example: ",(0,o.kt)("br",null),(0,o.kt)("pre",null,"from langchain.callbacks.stdout import StdOutCallbackHandler comp_moderation_with_config = AmazonComprehendModerationChain(verbose=True, callbacks=[StdOutCallbackHandler()])")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain_experimental.comprehend_moderation import BaseModerationCallbackHandler\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Define callback handlers by subclassing BaseModerationCallbackHandler\n\nclass MyModCallback(BaseModerationCallbackHandler):\n    \n    async def on_after_pii(self, output_beacon, unique_id):\n        import json\n        moderation_type = output_beacon['moderation_type']\n        chain_id = output_beacon['moderation_chain_id']\n        with open(f'output-{moderation_type}-{chain_id}.json', 'w') as file:\n            data = { 'beacon_data': output_beacon, 'unique_id': unique_id }\n            json.dump(data, file)\n    \n    '''\n    async def on_after_toxicity(self, output_beacon, unique_id):\n        pass\n    \n    async def on_after_intent(self, output_beacon, unique_id):\n        pass\n    '''\n    \n\nmy_callback = MyModCallback()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'moderation_config = { \n        "filters": [ \n                BaseModerationFilters.PII, \n                BaseModerationFilters.TOXICITY\n        ],\n        "pii":{ \n                "action": BaseModerationActions.STOP, \n                "threshold":0.5, \n                "labels":["SSN"], \n                "mask_character": "X" \n        },\n        "toxicity":{ \n                "action": BaseModerationActions.STOP, \n                "threshold":0.5 \n        }\n}\n\ncomp_moderation_with_config = AmazonComprehendModerationChain(\n        moderation_config=moderation_config, # specify the configuration\n        client=comprehend_client,            # optionally pass the Boto3 Client\n        unique_id=\'john.doe@email.com\',      # A unique ID\n        moderation_callback=my_callback,     # BaseModerationCallbackHandler\n        verbose=True\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "FakeListLLM", "source": "langchain.llms.fake", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.fake.FakeListLLM.html", "title": "Amazon Comprehend Moderation Chain"}]--\x3e\nfrom langchain import PromptTemplate, LLMChain\nfrom langchain.llms.fake import FakeListLLM\n\ntemplate = """Question: {question}\n\nAnswer:"""\n\nprompt = PromptTemplate(template=template, input_variables=["question"])\n\nresponses = [\n    "Final Answer: A credit card number looks like 1289-2321-1123-2387. A fake SSN number looks like 323-22-9980. John Doe\'s phone number is (999)253-9876.", \n    "Final Answer: This is a really shitty way of constructing a birdhouse. This is fucking insane to think that any birds would actually create their motherfucking nests here."\n]\n\nllm = FakeListLLM(responses=responses)\n\nllm_chain = LLMChain(prompt=prompt, llm=llm)\n\nchain = (\n    prompt \n    | comp_moderation_with_config \n    | {llm_chain.input_keys[0]: lambda x: x[\'output\'] }  \n    | llm_chain \n    | { "input": lambda x: x[\'text\'] } \n    | comp_moderation_with_config \n) \n\ntry:\n    response = chain.invoke({"question": "A sample SSN number looks like this 123-456-7890. Can you give me some more samples?"})\nexcept Exception as e:\n    print(str(e))\nelse:\n    print(response[\'output\'])\n')),(0,o.kt)("h2",{id:"moderation_config-and-moderation-execution-order"},(0,o.kt)("inlineCode",{parentName:"h2"},"moderation_config")," and moderation execution order"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"AmazonComprehendModerationChain")," is not initialized with any ",(0,o.kt)("inlineCode",{parentName:"p"},"moderation_config")," then the default action is ",(0,o.kt)("inlineCode",{parentName:"p"},"STOP")," and default order of moderation check is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"AmazonComprehendModerationChain\n\u2502\n\u2514\u2500\u2500Check PII with Stop Action\n    \u251c\u2500\u2500 Callback (if available)\n    \u251c\u2500\u2500 Label Found \u27f6 [Error Stop]\n    \u2514\u2500\u2500 No Label Found \n        \u2514\u2500\u2500Check Toxicity with Stop Action\n            \u251c\u2500\u2500 Callback (if available)\n            \u251c\u2500\u2500 Label Found \u27f6 [Error Stop]\n            \u2514\u2500\u2500 No Label Found\n                \u2514\u2500\u2500Check Intent with Stop Action\n                    \u251c\u2500\u2500 Callback (if available)\n                    \u251c\u2500\u2500 Label Found \u27f6 [Error Stop]\n                    \u2514\u2500\u2500 No Label Found\n                        \u2514\u2500\u2500 Return Prompt\n")),(0,o.kt)("p",null,"If any of the check raises exception then the subsequent checks will not be performed. If a ",(0,o.kt)("inlineCode",{parentName:"p"},"callback")," is provided in this case, then it will be called for each of the checks that have been performed. For example, in the case above, if the Chain fails due to presence of PII then the Toxicity and Intent checks will not be performed."),(0,o.kt)("p",null,"You can override the execution order by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"moderation_config")," and simply specifying the desired order in the ",(0,o.kt)("inlineCode",{parentName:"p"},"filters")," key of the configuration. In case you use ",(0,o.kt)("inlineCode",{parentName:"p"},"moderation_config")," then the order of the checks as specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"filters")," key will be maintained. For example, in the configuration below, first Toxicity check will be performed, then PII, and finally Intent validation will be performed. In this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"AmazonComprehendModerationChain")," will perform the desired checks in the specified order with default values of each model ",(0,o.kt)("inlineCode",{parentName:"p"},"kwargs"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'moderation_config = { \n        "filters":[ BaseModerationFilters.TOXICITY, \n                    BaseModerationFilters.PII, \n                    BaseModerationFilters.INTENT]\n   }\n')),(0,o.kt)("p",null,"Model ",(0,o.kt)("inlineCode",{parentName:"p"},"kwargs")," are specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"pii"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"toxicity"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"intent")," keys within the ",(0,o.kt)("inlineCode",{parentName:"p"},"moderation_config")," dictionary. For example, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"moderation_config")," below, the default order of moderation is overriden and the ",(0,o.kt)("inlineCode",{parentName:"p"},"pii")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"toxicity")," model ",(0,o.kt)("inlineCode",{parentName:"p"},"kwargs")," have been overriden. For ",(0,o.kt)("inlineCode",{parentName:"p"},"intent")," the chain's default ",(0,o.kt)("inlineCode",{parentName:"p"},"kwargs")," will be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},' moderation_config = { \n        "filters":[ BaseModerationFilters.TOXICITY, \n                    BaseModerationFilters.PII, \n                    BaseModerationFilters.INTENT],\n        "pii":{ "action": BaseModerationActions.ALLOW, \n                "threshold":0.5, \n                "labels":["SSN"], \n                "mask_character": "X" },\n        "toxicity":{ "action": BaseModerationActions.STOP, \n                     "threshold":0.5 }\n   }\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"For a list of PII labels see Amazon Comprehend Universal PII entity types - ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/comprehend/latest/dg/how-pii.html#how-pii-types"},"https://docs.aws.amazon.com/comprehend/latest/dg/how-pii.html#how-pii-types")),(0,o.kt)("li",{parentName:"ol"},"Following are the list of available Toxicity labels-",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HATE_SPEECH"),": Speech that criticizes, insults, denounces or dehumanizes a person or a group on the basis of an identity, be it race, ethnicity, gender identity, religion, sexual orientation, ability, national origin, or another identity-group."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GRAPHIC"),": Speech that uses visually descriptive, detailed and unpleasantly vivid imagery is considered as graphic. Such language is often made verbose so as to amplify an insult, discomfort or harm to the recipient."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HARASSMENT_OR_ABUSE"),": Speech that imposes disruptive power dynamics between the speaker and hearer, regardless of intent, seeks to affect the psychological well-being of the recipient, or objectifies a person should be classified as Harassment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SEXUAL"),': Speech that indicates sexual interest, activity or arousal by using direct or indirect references to body parts or physical traits or sex is considered as toxic with toxicityType "sexual". '),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VIOLENCE_OR_THREAT"),": Speech that includes threats which seek to inflict pain, injury or hostility towards a person or group."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"INSULT"),": Speech that includes demeaning, humiliating, mocking, insulting, or belittling language."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PROFANITY"),": Speech that contains words, phrases or acronyms that are impolite, vulgar, or offensive is considered as profane."))),(0,o.kt)("li",{parentName:"ol"},"For a list of Intent labels refer to documentation ","[link here]")),(0,o.kt)("h1",{id:"examples"},"Examples"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"with-hugging-face-hub-models"},"With Hugging Face Hub Models"),(0,o.kt)("p",null,"Get your API Key from Hugging Face hub - ",(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/docs/api-inference/quicktour#get-your-api-token"},"https://huggingface.co/docs/api-inference/quicktour#get-your-api-token")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%pip install huggingface_hub\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'%env HUGGINGFACEHUB_API_TOKEN="<HUGGINGFACEHUB_API_TOKEN>"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# See https://huggingface.co/models?pipeline_tag=text-generation&sort=downloads for some other options\nrepo_id = "google/flan-t5-xxl"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain import HuggingFaceHub\nfrom langchain import PromptTemplate, LLMChain\n\ntemplate = """Question: {question}\n\nAnswer:"""\n\nprompt = PromptTemplate(template=template, input_variables=["question"])\n\nllm = HuggingFaceHub(\n    repo_id=repo_id, model_kwargs={"temperature": 0.5, "max_length": 256}\n)\nllm_chain = LLMChain(prompt=prompt, llm=llm)\n')),(0,o.kt)("p",null,"Create a configuration and initialize an Amazon Comprehend Moderation chain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'moderation_config = { \n        "filters":[ BaseModerationFilters.PII, BaseModerationFilters.TOXICITY, BaseModerationFilters.INTENT ],\n        "pii":{"action": BaseModerationActions.ALLOW, "threshold":0.5, "labels":["SSN","CREDIT_DEBIT_NUMBER"], "mask_character": "X"},\n        "toxicity":{"action": BaseModerationActions.STOP, "threshold":0.5},\n        "intent":{"action": BaseModerationActions.ALLOW, "threshold":0.5,},\n   }\n\n# without any callback\namazon_comp_moderation = AmazonComprehendModerationChain(moderation_config=moderation_config, \n                                                         client=comprehend_client,\n                                                         verbose=True)\n\n# with callback\namazon_comp_moderation_out = AmazonComprehendModerationChain(moderation_config=moderation_config, \n                                                         client=comprehend_client,\n                                                         moderation_callback=my_callback,\n                                                         verbose=True)\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"moderation_config")," will now prevent any inputs and model outputs containing obscene words or sentences, bad intent, or PII with entities other than SSN with score above threshold or 0.5 or 50%. If it finds Pii entities - SSN - it will redact them before allowing the call to proceed. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"chain = (\n    prompt \n    | amazon_comp_moderation \n    | {llm_chain.input_keys[0]: lambda x: x['output'] }  \n    | llm_chain \n    | { \"input\": lambda x: x['text'] } \n    | amazon_comp_moderation_out\n)\n\ntry:\n    response = chain.invoke({\"question\": \"My AnyCompany Financial Services, LLC credit card account 1111-0000-1111-0008 has 24$ due by July 31st. Can you give me some more credit car number samples?\"})\nexcept Exception as e:\n    print(str(e))\nelse:\n    print(response['output'])\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"with-amazon-sagemaker-jumpstart"},"With Amazon SageMaker Jumpstart"),(0,o.kt)("p",null,"The exmaple below shows how to use Amazon Comprehend Moderation chain with an Amazon SageMaker Jumpstart hosted LLM. You should have an Amazon SageMaker Jumpstart hosted LLM endpoint within your AWS Account. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'endpoint_name = "<SAGEMAKER_ENDPOINT_NAME>" # replace with your SageMaker Endpoint name\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "LLMContentHandler", "source": "langchain.llms.sagemaker_endpoint", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.sagemaker_endpoint.LLMContentHandler.html", "title": "Amazon Comprehend Moderation Chain"}, {"imported": "LLMChain", "source": "langchain.chains", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.llm.LLMChain.html", "title": "Amazon Comprehend Moderation Chain"}, {"imported": "load_prompt", "source": "langchain.prompts", "docs": "https://api.python.langchain.com/en/latest/prompts/langchain.prompts.loading.load_prompt.html", "title": "Amazon Comprehend Moderation Chain"}, {"imported": "PromptTemplate", "source": "langchain.prompts", "docs": "https://api.python.langchain.com/en/latest/prompts/langchain.prompts.prompt.PromptTemplate.html", "title": "Amazon Comprehend Moderation Chain"}]--\x3e\nfrom langchain import SagemakerEndpoint\nfrom langchain.llms.sagemaker_endpoint import LLMContentHandler\nfrom langchain.chains import LLMChain\nfrom langchain.prompts import load_prompt, PromptTemplate\nimport json\n\nclass ContentHandler(LLMContentHandler):\n    content_type = "application/json"\n    accepts = "application/json"\n\n    def transform_input(self, prompt: str, model_kwargs: dict) -> bytes:\n        input_str = json.dumps({"text_inputs": prompt,  **model_kwargs})\n        return input_str.encode(\'utf-8\')\n    \n    def transform_output(self, output: bytes) -> str:\n        response_json = json.loads(output.read().decode("utf-8"))\n        return response_json[\'generated_texts\'][0]\n\ncontent_handler = ContentHandler()\n\n#prompt template for input text\nllm_prompt = PromptTemplate(input_variables=["input_text"], template="{input_text}")\n\nllm_chain = LLMChain(\n    llm=SagemakerEndpoint(\n        endpoint_name=endpoint_name, \n        region_name=\'us-east-1\',\n        model_kwargs={"temperature":0.97,\n                      "max_length": 200,\n                      "num_return_sequences": 3,\n                      "top_k": 50,\n                      "top_p": 0.95,\n                      "do_sample": True},\n        content_handler=content_handler\n    ),\n    prompt=llm_prompt\n)\n')),(0,o.kt)("p",null,"Create a configuration and initialize an Amazon Comprehend Moderation chain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'moderation_config = { \n        "filters":[ BaseModerationFilters.PII, BaseModerationFilters.TOXICITY ],\n        "pii":{"action": BaseModerationActions.ALLOW, "threshold":0.5, "labels":["SSN"], "mask_character": "X"},\n        "toxicity":{"action": BaseModerationActions.STOP, "threshold":0.5},\n        "intent":{"action": BaseModerationActions.ALLOW, "threshold":0.5,},\n   }\n\namazon_comp_moderation = AmazonComprehendModerationChain(moderation_config=moderation_config, \n                                                         client=comprehend_client ,\n                                                         verbose=True)\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"moderation_config")," will now prevent any inputs and model outputs containing obscene words or sentences, bad intent, or Pii with entities other than SSN with score above threshold or 0.5 or 50%. If it finds Pii entities - SSN - it will redact them before allowing the call to proceed. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"chain = (\n    prompt \n    | amazon_comp_moderation \n    | {llm_chain.input_keys[0]: lambda x: x['output'] }  \n    | llm_chain \n    | { \"input\": lambda x: x['text'] } \n    | amazon_comp_moderation \n)\n\ntry:\n    response = chain.invoke({\"question\": \"My AnyCompany Financial Services, LLC credit card account 1111-0000-1111-0008 has 24$ due by July 31st. Can you give me some more samples?\"})\nexcept Exception as e:\n    print(str(e))\nelse:\n    print(response['output'])\n")))}d.isMDXComponent=!0}}]);
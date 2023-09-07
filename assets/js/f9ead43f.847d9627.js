"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99409],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(t),d=o,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return t?a.createElement(h,l(l({ref:n},m),{},{components:t})):a.createElement(h,l({ref:n},m))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const r={},l="Modal",i={unversionedId:"integrations/llms/modal",id:"integrations/llms/modal",title:"Modal",description:"The Modal cloud platform provides convenient, on-demand access to serverless cloud compute from Python scripts on your local computer.",source:"@site/docs/integrations/llms/modal.md",sourceDirName:"integrations/llms",slug:"/integrations/llms/modal",permalink:"/langchain/docs/integrations/llms/modal",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Minimax",permalink:"/langchain/docs/integrations/llms/minimax"},next:{title:"MosaicML",permalink:"/langchain/docs/integrations/llms/mosaicml"}},p={},s=[],m=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const u={toc:s},d="wrapper";function h(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modal"},"Modal"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://modal.com/docs/guide"},"Modal cloud platform")," provides convenient, on-demand access to serverless cloud compute from Python scripts on your local computer.\nUse ",(0,o.kt)("inlineCode",{parentName:"p"},"modal")," to run your own custom LLM models instead of depending on LLM APIs."),(0,o.kt)("p",null,"This example goes over how to use LangChain to interact with a ",(0,o.kt)("inlineCode",{parentName:"p"},"modal")," HTTPS ",(0,o.kt)("a",{parentName:"p",href:"https://modal.com/docs/guide/webhooks"},"web endpoint"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://modal.com/docs/guide/ex/potus_speech_qanda"},(0,o.kt)("em",{parentName:"a"},"Question-answering with LangChain"))," is another example of how to use LangChain alonside ",(0,o.kt)("inlineCode",{parentName:"p"},"Modal"),". In that example, Modal runs the LangChain application end-to-end and uses OpenAI as its LLM API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install modal\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Register an account with Modal and get a new token.\nmodal token new\n")),(0,o.kt)(m,{lang:"bash",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Launching login page in your browser window...\n    If this is not showing up, please copy this URL into your web browser manually:\n    https://modal.com/token-flow/tf-Dzm3Y01234mqmm1234Vcu3\n"))),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchain/blame/master/langchain/llms/modal.py"},(0,o.kt)("inlineCode",{parentName:"a"},"langchain.llms.modal.Modal"))," integration class requires that you deploy a Modal application with a web endpoint that complies with the following JSON interface:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The LLM prompt is accepted as a ",(0,o.kt)("inlineCode",{parentName:"li"},"str")," value under the key ",(0,o.kt)("inlineCode",{parentName:"li"},'"prompt"')),(0,o.kt)("li",{parentName:"ol"},"The LLM response returned as a ",(0,o.kt)("inlineCode",{parentName:"li"},"str")," value under the key ",(0,o.kt)("inlineCode",{parentName:"li"},'"prompt"'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example request JSON:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "prompt": "Identify yourself, bot!",\n    "extra": "args are allowed",\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example response JSON:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "prompt": "This is the LLM speaking",\n}\n')),(0,o.kt)("p",null,"An example 'dummy' Modal web endpoint function fulfilling this interface would be"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'...\n...\n\nclass Request(BaseModel):\n    prompt: str\n\n@stub.function()\n@modal.web_endpoint(method="POST")\ndef web(request: Request):\n    _ = request  # ignore input\n    return {"prompt": "hello world"}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"See Modal's ",(0,o.kt)("a",{parentName:"li",href:"https://modal.com/docs/guide/webhooks#passing-arguments-to-web-endpoints"},"web endpoints")," guide for the basics of setting up an endpoint that fulfils this interface."),(0,o.kt)("li",{parentName:"ul"},"See Modal's ",(0,o.kt)("a",{parentName:"li",href:"https://modal.com/docs/guide/ex/falcon_gptq"},"'Run Falcon-40B with AutoGPTQ'")," open-source LLM example as a starting point for your custom LLM!")),(0,o.kt)("p",null,"Once you have a deployed Modal web endpoint, you can pass its URL into the ",(0,o.kt)("inlineCode",{parentName:"p"},"langchain.llms.modal.Modal")," LLM class. This class can then function as a building block in your chain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "Modal", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.modal.Modal.html", "title": "Modal"}]--\x3e\nfrom langchain.llms import Modal\nfrom langchain import PromptTemplate, LLMChain\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'template = """Question: {question}\n\nAnswer: Let\'s think step by step."""\n\nprompt = PromptTemplate(template=template, input_variables=["question"])\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'endpoint_url = "https://ecorp--custom-llm-endpoint.modal.run"  # REPLACE ME with your deployed Modal web endpoint\'s URL\nllm = Modal(endpoint_url=endpoint_url)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"llm_chain = LLMChain(prompt=prompt, llm=llm)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'question = "What NFL team won the Super Bowl in the year Justin Beiber was born?"\n\nllm_chain.run(question)\n')))}h.isMDXComponent=!0}}]);
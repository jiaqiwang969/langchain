"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88003],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={},l="Ray Serve",i={unversionedId:"integrations/providers/ray_serve",id:"integrations/providers/ray_serve",title:"Ray Serve",description:"Ray Serve is a scalable model serving library for building online inference APIs. Serve is particularly well suited for system composition, enabling you to build a complex inference service consisting of multiple chains and business logic all in Python code.",source:"@site/docs/integrations/providers/ray_serve.md",sourceDirName:"integrations/providers",slug:"/integrations/providers/ray_serve",permalink:"/langchain/docs/integrations/providers/ray_serve",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Qdrant",permalink:"/langchain/docs/integrations/providers/qdrant"},next:{title:"Rebuff",permalink:"/langchain/docs/integrations/providers/rebuff"}},s={},p=[{value:"Goal of this notebook",id:"goal-of-this-notebook",level:2},{value:"Setup Ray Serve",id:"setup-ray-serve",level:2},{value:"General Skeleton",id:"general-skeleton",level:2},{value:"Example of deploying and OpenAI chain with custom prompts",id:"example-of-deploying-and-openai-chain-with-custom-prompts",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ray-serve"},"Ray Serve"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.ray.io/en/latest/serve/index.html"},"Ray Serve")," is a scalable model serving library for building online inference APIs. Serve is particularly well suited for system composition, enabling you to build a complex inference service consisting of multiple chains and business logic all in Python code. "),(0,o.kt)("h2",{id:"goal-of-this-notebook"},"Goal of this notebook"),(0,o.kt)("p",null,"This notebook shows a simple example of how to deploy an OpenAI chain into production. You can extend it to deploy your own self-hosted models where you can easily define amount of hardware resources (GPUs and CPUs) needed to run your model in production efficiently. Read more about available options including autoscaling in the Ray Serve ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ray.io/en/latest/serve/getting_started.html"},"documentation"),"."),(0,o.kt)("h2",{id:"setup-ray-serve"},"Setup Ray Serve"),(0,o.kt)("p",null,"Install ray with ",(0,o.kt)("inlineCode",{parentName:"p"},"pip install ray[serve]"),". "),(0,o.kt)("h2",{id:"general-skeleton"},"General Skeleton"),(0,o.kt)("p",null,"The general skeleton for deploying a service is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# 0: Import ray serve and request from starlette\nfrom ray import serve\nfrom starlette.requests import Request\n\n\n# 1: Define a Ray Serve deployment.\n@serve.deployment\nclass LLMServe:\n    def __init__(self) -> None:\n        # All the initialization code goes here\n        pass\n\n    async def __call__(self, request: Request) -> str:\n        # You can parse the request here\n        # and return a response\n        return "Hello World"\n\n\n# 2: Bind the model to deployment\ndeployment = LLMServe.bind()\n\n# 3: Run the deployment\nserve.api.run(deployment)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Shutdown the deployment\nserve.api.shutdown()\n")),(0,o.kt)("h2",{id:"example-of-deploying-and-openai-chain-with-custom-prompts"},"Example of deploying and OpenAI chain with custom prompts"),(0,o.kt)("p",null,"Get an OpenAI API key from ",(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/account/api-keys"},"here"),". By running the following code, you will be asked to provide your API key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openai.OpenAI.html", "title": "Ray Serve"}]--\x3e\nfrom langchain.llms import OpenAI\nfrom langchain import PromptTemplate, LLMChain\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from getpass import getpass\n\nOPENAI_API_KEY = getpass()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@serve.deployment\nclass DeployLLM:\n    def __init__(self):\n        # We initialize the LLM, template and the chain here\n        llm = OpenAI(openai_api_key=OPENAI_API_KEY)\n        template = "Question: {question}\\n\\nAnswer: Let\'s think step by step."\n        prompt = PromptTemplate(template=template, input_variables=["question"])\n        self.chain = LLMChain(llm=llm, prompt=prompt)\n\n    def _run_chain(self, text: str):\n        return self.chain(text)\n\n    async def __call__(self, request: Request):\n        # 1. Parse the request\n        text = request.query_params["text"]\n        # 2. Run the chain\n        resp = self._run_chain(text)\n        # 3. Return the response\n        return resp["text"]\n')),(0,o.kt)("p",null,"Now we can bind the deployment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Bind the model to deployment\ndeployment = DeployLLM.bind()\n")),(0,o.kt)("p",null,"We can assign the port number and host when we want to run the deployment. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Example port number\nPORT_NUMBER = 8282\n# Run the deployment\nserve.api.run(deployment, port=PORT_NUMBER)\n")),(0,o.kt)("p",null,"Now that service is deployed on port ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8282")," we can send a post request to get the results back."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\ntext = "What NFL team won the Super Bowl in the year Justin Beiber was born?"\nresponse = requests.post(f"http://localhost:{PORT_NUMBER}/?text={text}")\nprint(response.content.decode())\n')))}d.isMDXComponent=!0}}]);
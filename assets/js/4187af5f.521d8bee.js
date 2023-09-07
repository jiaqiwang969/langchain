"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98881],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),y=r,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||l;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},91737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={},o="Anyscale",i={unversionedId:"integrations/llms/anyscale",id:"integrations/llms/anyscale",title:"Anyscale",description:"Anyscale is a fully-managed Ray platform, on which you can build, deploy, and manage scalable AI and Python applications",source:"@site/docs/integrations/llms/anyscale.md",sourceDirName:"integrations/llms",slug:"/integrations/llms/anyscale",permalink:"/langchain/docs/integrations/llms/anyscale",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Amazon API Gateway",permalink:"/langchain/docs/integrations/llms/amazon_api_gateway"},next:{title:"Azure ML",permalink:"/langchain/docs/integrations/llms/azure_ml"}},s={},p=[],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anyscale"},"Anyscale"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.anyscale.com/"},"Anyscale")," is a fully-managed ",(0,r.kt)("a",{parentName:"p",href:"https://www.ray.io/"},"Ray")," platform, on which you can build, deploy, and manage scalable AI and Python applications"),(0,r.kt)("p",null,"This example goes over how to use LangChain to interact with ",(0,r.kt)("inlineCode",{parentName:"p"},"Anyscale")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.anyscale.com/productionize/services-v2/get-started"},"service"),". "),(0,r.kt)("p",null,"It will send the requests to Anyscale Service endpoint, which is concatenate ",(0,r.kt)("inlineCode",{parentName:"p"},"ANYSCALE_SERVICE_URL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ANYSCALE_SERVICE_ROUTE"),", with a token defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"ANYSCALE_SERVICE_TOKEN")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nos.environ["ANYSCALE_SERVICE_URL"] = ANYSCALE_SERVICE_URL\nos.environ["ANYSCALE_SERVICE_ROUTE"] = ANYSCALE_SERVICE_ROUTE\nos.environ["ANYSCALE_SERVICE_TOKEN"] = ANYSCALE_SERVICE_TOKEN\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "Anyscale", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.anyscale.Anyscale.html", "title": "Anyscale"}]--\x3e\nfrom langchain.llms import Anyscale\nfrom langchain import PromptTemplate, LLMChain\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'template = """Question: {question}\n\nAnswer: Let\'s think step by step."""\n\nprompt = PromptTemplate(template=template, input_variables=["question"])\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"llm = Anyscale()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"llm_chain = LLMChain(prompt=prompt, llm=llm)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'question = "When was George Washington president?"\n\nllm_chain.run(question)\n')),(0,r.kt)("p",null,"With Ray, we can distribute the queries without asyncrhonized implementation. This not only applies to Anyscale LLM model, but to any other Langchain LLM models which do not have ",(0,r.kt)("inlineCode",{parentName:"p"},"_acall")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"_agenerate")," implemented"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'prompt_list = [\n    "When was George Washington president?",\n    "Explain to me the difference between nuclear fission and fusion.",\n    "Give me a list of 5 science fiction books I should read next.",\n    "Explain the difference between Spark and Ray.",\n    "Suggest some fun holiday ideas.",\n    "Tell a joke.",\n    "What is 2+2?",\n    "Explain what is machine learning like I am five years old.",\n    "Explain what is artifical intelligence.",\n]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import ray\n\n\n@ray.remote\ndef send_query(llm, prompt):\n    resp = llm(prompt)\n    return resp\n\n\nfutures = [send_query.remote(llm, prompt) for prompt in prompt_list]\nresults = ray.get(futures)\n")))}u.isMDXComponent=!0}}]);
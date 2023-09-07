"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78613],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={},i="OpenLM",l={unversionedId:"integrations/llms/openlm",id:"integrations/llms/openlm",title:"OpenLM",description:"OpenLM is a zero-dependency OpenAI-compatible LLM provider that can call different inference endpoints directly via HTTP.",source:"@site/docs/integrations/llms/openlm.md",sourceDirName:"integrations/llms",slug:"/integrations/llms/openlm",permalink:"/langchain/docs/integrations/llms/openlm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"OpenLLM",permalink:"/langchain/docs/integrations/llms/openllm"},next:{title:"Petals",permalink:"/langchain/docs/integrations/llms/petals"}},p={},s=[{value:"Setup",id:"setup",level:3},{value:"Using LangChain with OpenLM",id:"using-langchain-with-openlm",level:3}],c=(m="CodeOutputBlock",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const u={toc:s},d="wrapper";function g(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openlm"},"OpenLM"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/r2d4/openlm"},"OpenLM")," is a zero-dependency OpenAI-compatible LLM provider that can call different inference endpoints directly via HTTP. "),(0,o.kt)("p",null,"It implements the OpenAI Completion class so that it can be used as a drop-in replacement for the OpenAI API. This changeset utilizes BaseOpenAI for minimal added code."),(0,o.kt)("p",null,"This examples goes over how to use LangChain to interact with both OpenAI and HuggingFace. You'll need API keys from both."),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Install dependencies and set API keys."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Uncomment to install openlm and openai if you haven't already\n\n# !pip install openlm\n# !pip install openai\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from getpass import getpass\nimport os\nimport subprocess\n\n\n# Check if OPENAI_API_KEY environment variable is set\nif "OPENAI_API_KEY" not in os.environ:\n    print("Enter your OpenAI API key:")\n    os.environ["OPENAI_API_KEY"] = getpass()\n\n# Check if HF_API_TOKEN environment variable is set\nif "HF_API_TOKEN" not in os.environ:\n    print("Enter your HuggingFace Hub API key:")\n    os.environ["HF_API_TOKEN"] = getpass()\n')),(0,o.kt)("h3",{id:"using-langchain-with-openlm"},"Using LangChain with OpenLM"),(0,o.kt)("p",null,"Here we're going to call two models in an LLMChain, ",(0,o.kt)("inlineCode",{parentName:"p"},"text-davinci-003")," from OpenAI and ",(0,o.kt)("inlineCode",{parentName:"p"},"gpt2")," on HuggingFace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenLM", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openlm.OpenLM.html", "title": "OpenLM"}]--\x3e\nfrom langchain.llms import OpenLM\nfrom langchain import PromptTemplate, LLMChain\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'question = "What is the capital of France?"\ntemplate = """Question: {question}\n\nAnswer: Let\'s think step by step."""\n\nprompt = PromptTemplate(template=template, input_variables=["question"])\n\nfor model in ["text-davinci-003", "huggingface.co/gpt2"]:\n    llm = OpenLM(model=model)\n    llm_chain = LLMChain(prompt=prompt, llm=llm)\n    result = llm_chain.run(question)\n    print(\n        """Model: {}\nResult: {}""".format(\n            model, result\n        )\n    )\n')),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Model: text-davinci-003\n    Result:  France is a country in Europe. The capital of France is Paris.\n    Model: huggingface.co/gpt2\n    Result: Question: What is the capital of France?\n    \n    Answer: Let's think step by step. I am not going to lie, this is a complicated issue, and I don't see any solutions to all this, but it is still far more\n"))))}g.isMDXComponent=!0}}]);
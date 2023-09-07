"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),c=l(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return n?o.createElement(f,p(p({ref:t},i),{},{components:n})):o.createElement(f,p({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[c]="string"==typeof e?e:r,p[1]=m;for(var l=2;l<a;l++)p[l]=n[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},p="Custom prompt template",m={unversionedId:"modules/model_io/prompts/prompt_templates/custom_prompt_template",id:"modules/model_io/prompts/prompt_templates/custom_prompt_template",title:"Custom prompt template",description:"Let's suppose we want the LLM to generate English language explanations of a function given its name. To achieve this task, we will create a custom prompt template that takes in the function name as input, and formats the prompt template to provide the source code of the function.",source:"@site/docs/modules/model_io/prompts/prompt_templates/custom_prompt_template.md",sourceDirName:"modules/model_io/prompts/prompt_templates",slug:"/modules/model_io/prompts/prompt_templates/custom_prompt_template",permalink:"/langchain/docs/modules/model_io/prompts/prompt_templates/custom_prompt_template",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Connecting to a Feature Store",permalink:"/langchain/docs/modules/model_io/prompts/prompt_templates/connecting_to_a_feature_store"},next:{title:"Few-shot prompt templates",permalink:"/langchain/docs/modules/model_io/prompts/prompt_templates/few_shot_examples"}},s={},l=[{value:"Why are custom prompt templates needed?",id:"why-are-custom-prompt-templates-needed",level:2},{value:"Creating a custom prompt template",id:"creating-a-custom-prompt-template",level:2},{value:"Use the custom prompt template",id:"use-the-custom-prompt-template",level:2}],i=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const u={toc:l},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-prompt-template"},"Custom prompt template"),(0,r.kt)("p",null,"Let's suppose we want the LLM to generate English language explanations of a function given its name. To achieve this task, we will create a custom prompt template that takes in the function name as input, and formats the prompt template to provide the source code of the function."),(0,r.kt)("h2",{id:"why-are-custom-prompt-templates-needed"},"Why are custom prompt templates needed?"),(0,r.kt)("p",null,"LangChain provides a set of ",(0,r.kt)("a",{parentName:"p",href:"/docs/modules/model_io/prompts/prompt_templates/"},"default prompt templates")," that can be used to generate prompts for a variety of tasks. However, there may be cases where the default prompt templates do not meet your needs. For example, you may want to create a prompt template with specific dynamic instructions for your language model. In such cases, you can create a custom prompt template."),(0,r.kt)("h2",{id:"creating-a-custom-prompt-template"},"Creating a custom prompt template"),(0,r.kt)("p",null,"There are essentially two distinct prompt templates available - string prompt templates and chat prompt templates. String prompt templates provides a simple prompt in string format, while chat prompt templates produces a more structured prompt to be used with a chat API."),(0,r.kt)("p",null,"In this guide, we will create a custom prompt using a string prompt template. "),(0,r.kt)("p",null,"To create a custom string prompt template, there are two requirements:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It has an input_variables attribute that exposes what input variables the prompt template expects."),(0,r.kt)("li",{parentName:"ol"},"It defines a format method that takes in keyword arguments corresponding to the expected input_variables and returns the formatted prompt.")),(0,r.kt)("p",null,"We will create a custom prompt template that takes in the function name as input and formats the prompt to provide the source code of the function. To achieve this, let's first create a function that will return the source code of a function given its name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import inspect\n\n\ndef get_source_code(function_name):\n    # Get the source code of the function\n    return inspect.getsource(function_name)\n")),(0,r.kt)("p",null,"Next, we'll create a custom prompt template that takes in the function name as input, and formats the prompt template to provide the source code of the function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "StringPromptTemplate", "source": "langchain.prompts", "docs": "https://api.python.langchain.com/en/latest/prompts/langchain.prompts.base.StringPromptTemplate.html", "title": "Custom prompt template"}]--\x3e\nfrom langchain.prompts import StringPromptTemplate\nfrom pydantic import BaseModel, validator\n\nPROMPT = """\\\nGiven the function name and source code, generate an English language explanation of the function.\nFunction Name: {function_name}\nSource Code:\n{source_code}\nExplanation:\n"""\n\n\nclass FunctionExplainerPromptTemplate(StringPromptTemplate, BaseModel):\n    """A custom prompt template that takes in the function name as input, and formats the prompt template to provide the source code of the function."""\n\n    @validator("input_variables")\n    def validate_input_variables(cls, v):\n        """Validate that the input variables are correct."""\n        if len(v) != 1 or "function_name" not in v:\n            raise ValueError("function_name must be the only input_variable.")\n        return v\n\n    def format(self, **kwargs) -> str:\n        # Get the source code of the function\n        source_code = get_source_code(kwargs["function_name"])\n\n        # Generate the prompt to be sent to the language model\n        prompt = PROMPT.format(\n            function_name=kwargs["function_name"].__name__, source_code=source_code\n        )\n        return prompt\n\n    def _prompt_type(self):\n        return "function-explainer"\n')),(0,r.kt)("h2",{id:"use-the-custom-prompt-template"},"Use the custom prompt template"),(0,r.kt)("p",null,"Now that we have created a custom prompt template, we can use it to generate prompts for our task."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'fn_explainer = FunctionExplainerPromptTemplate(input_variables=["function_name"])\n\n# Generate a prompt for the function "get_source_code"\nprompt = fn_explainer.format(function_name=get_source_code)\nprint(prompt)\n')),(0,r.kt)(i,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Given the function name and source code, generate an English language explanation of the function.\n    Function Name: get_source_code\n    Source Code:\n    def get_source_code(function_name):\n        # Get the source code of the function\n        return inspect.getsource(function_name)\n    \n    Explanation:\n    \n"))))}f.isMDXComponent=!0}}]);
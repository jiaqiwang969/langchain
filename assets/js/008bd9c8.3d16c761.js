"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31205],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(t),f=r,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?a.createElement(g,i(i({ref:n},s),{},{components:t})):a.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[p]="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62620:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={},i="TruLens",u={unversionedId:"integrations/providers/trulens",id:"integrations/providers/trulens",title:"TruLens",description:"This page covers how to use TruLens to evaluate and track LLM apps built on langchain.",source:"@site/docs/integrations/providers/trulens.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/trulens",permalink:"/langchain/docs/integrations/providers/trulens",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Trello",permalink:"/langchain/docs/integrations/providers/trello"},next:{title:"Twitter",permalink:"/langchain/docs/integrations/providers/twitter"}},l={},c=[{value:"What is TruLens?",id:"what-is-trulens",level:2},{value:"Quick start",id:"quick-start",level:2}],s={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"trulens"},"TruLens"),(0,r.kt)("p",null,"This page covers how to use ",(0,r.kt)("a",{parentName:"p",href:"https://trulens.org"},"TruLens")," to evaluate and track LLM apps built on langchain."),(0,r.kt)("h2",{id:"what-is-trulens"},"What is TruLens?"),(0,r.kt)("p",null,"TruLens is an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/truera/trulens"},"opensource")," package that provides instrumentation and evaluation tools for large language model (LLM) based applications."),(0,r.kt)("h2",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"Once you've created your LLM chain, you can use TruLens for evaluation and tracking. TruLens has a number of ",(0,r.kt)("a",{parentName:"p",href:"https://www.trulens.org/trulens_eval/feedback_functions/"},"out-of-the-box Feedback Functions"),", and is also an extensible framework for LLM evaluation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# create a feedback function\n\nfrom trulens_eval.feedback import Feedback, Huggingface, OpenAI\n# Initialize HuggingFace-based feedback function collection class:\nhugs = Huggingface()\nopenai = OpenAI()\n\n# Define a language match feedback function using HuggingFace.\nlang_match = Feedback(hugs.language_match).on_input_output()\n# By default this will check language match on the main app input and main app\n# output.\n\n# Question/answer relevance between overall question and answer.\nqa_relevance = Feedback(openai.relevance).on_input_output()\n# By default this will evaluate feedback on main app input and main app output.\n\n# Toxicity of input\ntoxicity = Feedback(openai.toxicity).on_input()\n\n")),(0,r.kt)("p",null,"After you've set up Feedback Function(s) for evaluating your LLM, you can wrap your application with TruChain to get detailed tracing, logging and evaluation of your LLM app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# wrap your chain with TruChain\ntruchain = TruChain(\n    chain,\n    app_id='Chain1_ChatApplication',\n    feedbacks=[lang_match, qa_relevance, toxicity]\n)\n# Note: any `feedbacks` specified here will be evaluated and logged whenever the chain is used.\ntruchain(\"que hora es?\")\n")),(0,r.kt)("p",null,"Now you can explore your LLM-based application!"),(0,r.kt)("p",null,"Doing so will help you understand how your LLM application is performing at a glance. As you iterate new versions of your LLM application, you can compare their performance across all of the different quality metrics you've set up. You'll also be able to view evaluations at a record level, and explore the chain metadata for each record."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"tru.run_dashboard() # open a Streamlit app to explore\n")),(0,r.kt)("p",null,"For more information on TruLens, visit ",(0,r.kt)("a",{parentName:"p",href:"https://www.trulens.org/"},"trulens.org")))}d.isMDXComponent=!0}}]);
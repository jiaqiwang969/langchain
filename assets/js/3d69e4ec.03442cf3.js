"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26121],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),m=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(r),u=n,f=c["".concat(i,".").concat(u)]||c[u]||d[u]||o;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:n,l[1]=p;for(var m=2;m<o;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},80393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const o={},l="Validate template",p={unversionedId:"modules/model_io/prompts/prompt_templates/validate",id:"modules/model_io/prompts/prompt_templates/validate",title:"Validate template",description:"By default, PromptTemplate will validate the template string by checking whether the inputvariables match the variables defined in template. You can disable this behavior by setting validatetemplate to False.",source:"@site/docs/modules/model_io/prompts/prompt_templates/validate.mdx",sourceDirName:"modules/model_io/prompts/prompt_templates",slug:"/modules/model_io/prompts/prompt_templates/validate",permalink:"/langchain/docs/modules/model_io/prompts/prompt_templates/validate",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Prompt pipelining",permalink:"/langchain/docs/modules/model_io/prompts/prompt_templates/prompts_pipelining"},next:{title:"Example selectors",permalink:"/langchain/docs/modules/model_io/prompts/example_selectors/"}},i={},m=[],s={toc:m},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"validate-template"},"Validate template"),(0,n.kt)("p",null,"By default, ",(0,n.kt)("inlineCode",{parentName:"p"},"PromptTemplate")," will validate the ",(0,n.kt)("inlineCode",{parentName:"p"},"template")," string by checking whether the ",(0,n.kt)("inlineCode",{parentName:"p"},"input_variables")," match the variables defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"template"),". You can disable this behavior by setting ",(0,n.kt)("inlineCode",{parentName:"p"},"validate_template")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'template = "I am learning langchain because {reason}."\n\nprompt_template = PromptTemplate(template=template,\n                                 input_variables=["reason", "foo"]) # ValueError due to extra variables\nprompt_template = PromptTemplate(template=template,\n                                 input_variables=["reason", "foo"],\n                                 validate_template=False) # No error\n')))}d.isMDXComponent=!0}}]);
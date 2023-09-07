"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(67294),a=n(86010),i=n(53438),o=n(39960),l=n(13919),s=n(95999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",c.cardContainer)},n)}function p(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",c.cardTitle),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",c.cardDescription),title:o},o))}function d(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(f,e);const o=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},12250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),i=n(52991);const o={sidebar_position:2},l="String Evaluators",s={unversionedId:"guides/evaluation/string/index",id:"guides/evaluation/string/index",title:"String Evaluators",description:"A string evaluator is a component within LangChain designed to assess the performance of a language model by comparing its generated outputs (predictions) to a reference string or an input. This comparison is a crucial step in the evaluation of language models, providing a measure of the accuracy or quality of the generated text.",source:"@site/docs/guides/evaluation/string/index.mdx",sourceDirName:"guides/evaluation/string",slug:"/guides/evaluation/string/",permalink:"/langchain/docs/guides/evaluation/string/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Evaluation",permalink:"/langchain/docs/guides/evaluation/"},next:{title:"Criteria Evaluation",permalink:"/langchain/docs/guides/evaluation/string/criteria_eval_chain"}},c={},u=[],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"string-evaluators"},"String Evaluators"),(0,a.kt)("p",null,"A string evaluator is a component within LangChain designed to assess the performance of a language model by comparing its generated outputs (predictions) to a reference string or an input. This comparison is a crucial step in the evaluation of language models, providing a measure of the accuracy or quality of the generated text."),(0,a.kt)("p",null,"In practice, string evaluators are typically used to evaluate a predicted string against a given input, such as a question or a prompt. Often, a reference label or context string is provided to define what a correct or ideal response would look like. These evaluators can be customized to tailor the evaluation process to fit your application's specific requirements."),(0,a.kt)("p",null,"To create a custom string evaluator, inherit from the ",(0,a.kt)("inlineCode",{parentName:"p"},"StringEvaluator")," class and implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"_evaluate_strings")," method. If you require asynchronous support, also implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"_aevaluate_strings")," method."),(0,a.kt)("p",null,"Here's a summary of the key attributes and methods associated with a string evaluator:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"evaluation_name"),": Specifies the name of the evaluation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requires_input"),": Boolean attribute that indicates whether the evaluator requires an input string. If True, the evaluator will raise an error when the input isn't provided. If False, a warning will be logged if an input ",(0,a.kt)("em",{parentName:"li"},"is")," provided, indicating that it will not be considered in the evaluation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requires_reference"),": Boolean attribute specifying whether the evaluator requires a reference label. If True, the evaluator will raise an error when the reference isn't provided. If False, a warning will be logged if a reference ",(0,a.kt)("em",{parentName:"li"},"is")," provided, indicating that it will not be considered in the evaluation.")),(0,a.kt)("p",null,"String evaluators also implement the following methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aevaluate_strings"),": Asynchronously evaluates the output of the Chain or Language Model, with support for optional input and label."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"evaluate_strings"),": Synchronously evaluates the output of the Chain or Language Model, with support for optional input and label.")),(0,a.kt)("p",null,"The following sections provide detailed information on available string evaluator implementations as well as how to create a custom string evaluator."),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);
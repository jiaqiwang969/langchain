"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>w});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,w=h["".concat(i,".").concat(u)]||h[u]||d[u]||r;return n?o.createElement(w,l(l({ref:t},m),{},{components:n})):o.createElement(w,l({ref:t},m))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[h]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>g,frontMatter:()=>m,metadata:()=>d,toc:()=>w});var o=n(87462),a=(n(67294),n(3905));const r=(l="CodeOutputBlock",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var l;const s={toc:[{value:"Use Case",id:"use-case",level:3},{value:"Using an example set",id:"using-an-example-set",level:2},{value:"Create the example set",id:"create-the-example-set",level:3},{value:"Create a formatter for the few-shot examples",id:"create-a-formatter-for-the-few-shot-examples",level:3},{value:"Feed examples and formatter to <code>FewShotPromptTemplate</code>",id:"feed-examples-and-formatter-to-fewshotprompttemplate",level:3},{value:"Using an example selector",id:"using-an-example-selector",level:2},{value:"Feed examples into <code>ExampleSelector</code>",id:"feed-examples-into-exampleselector",level:3},{value:"Feed example selector into <code>FewShotPromptTemplate</code>",id:"feed-example-selector-into-fewshotprompttemplate",level:3}]},i="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"use-case"},"Use Case"),(0,a.kt)("p",null,"In this tutorial, we'll configure few-shot examples for self-ask with search."),(0,a.kt)("h2",{id:"using-an-example-set"},"Using an example set"),(0,a.kt)("h3",{id:"create-the-example-set"},"Create the example set"),(0,a.kt)("p",null,"To get started, create a list of few-shot examples. Each example should be a dictionary with the keys being the input variables and the values being the values for those input variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.prompts.few_shot import FewShotPromptTemplate\nfrom langchain.prompts.prompt import PromptTemplate\n\nexamples = [\n  {\n    "question": "Who lived longer, Muhammad Ali or Alan Turing?",\n    "answer": \n"""\nAre follow up questions needed here: Yes.\nFollow up: How old was Muhammad Ali when he died?\nIntermediate answer: Muhammad Ali was 74 years old when he died.\nFollow up: How old was Alan Turing when he died?\nIntermediate answer: Alan Turing was 41 years old when he died.\nSo the final answer is: Muhammad Ali\n"""\n  },\n  {\n    "question": "When was the founder of craigslist born?",\n    "answer": \n"""\nAre follow up questions needed here: Yes.\nFollow up: Who was the founder of craigslist?\nIntermediate answer: Craigslist was founded by Craig Newmark.\nFollow up: When was Craig Newmark born?\nIntermediate answer: Craig Newmark was born on December 6, 1952.\nSo the final answer is: December 6, 1952\n"""\n  },\n  {\n    "question": "Who was the maternal grandfather of George Washington?",\n    "answer":\n"""\nAre follow up questions needed here: Yes.\nFollow up: Who was the mother of George Washington?\nIntermediate answer: The mother of George Washington was Mary Ball Washington.\nFollow up: Who was the father of Mary Ball Washington?\nIntermediate answer: The father of Mary Ball Washington was Joseph Ball.\nSo the final answer is: Joseph Ball\n"""\n  },\n  {\n    "question": "Are both the directors of Jaws and Casino Royale from the same country?",\n    "answer":\n"""\nAre follow up questions needed here: Yes.\nFollow up: Who is the director of Jaws?\nIntermediate Answer: The director of Jaws is Steven Spielberg.\nFollow up: Where is Steven Spielberg from?\nIntermediate Answer: The United States.\nFollow up: Who is the director of Casino Royale?\nIntermediate Answer: The director of Casino Royale is Martin Campbell.\nFollow up: Where is Martin Campbell from?\nIntermediate Answer: New Zealand.\nSo the final answer is: No\n"""\n  }\n]\n')),(0,a.kt)("h3",{id:"create-a-formatter-for-the-few-shot-examples"},"Create a formatter for the few-shot examples"),(0,a.kt)("p",null,"Configure a formatter that will format the few-shot examples into a string. This formatter should be a ",(0,a.kt)("inlineCode",{parentName:"p"},"PromptTemplate")," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'example_prompt = PromptTemplate(input_variables=["question", "answer"], template="Question: {question}\\n{answer}")\n\nprint(example_prompt.format(**examples[0]))\n')),(0,a.kt)(r,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Question: Who lived longer, Muhammad Ali or Alan Turing?\n    \n    Are follow up questions needed here: Yes.\n    Follow up: How old was Muhammad Ali when he died?\n    Intermediate answer: Muhammad Ali was 74 years old when he died.\n    Follow up: How old was Alan Turing when he died?\n    Intermediate answer: Alan Turing was 41 years old when he died.\n    So the final answer is: Muhammad Ali\n    \n"))),(0,a.kt)("h3",{id:"feed-examples-and-formatter-to-fewshotprompttemplate"},"Feed examples and formatter to ",(0,a.kt)("inlineCode",{parentName:"h3"},"FewShotPromptTemplate")),(0,a.kt)("p",null,"Finally, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"FewShotPromptTemplate")," object. This object takes in the few-shot examples and the formatter for the few-shot examples."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'prompt = FewShotPromptTemplate(\n    examples=examples, \n    example_prompt=example_prompt, \n    suffix="Question: {input}", \n    input_variables=["input"]\n)\n\nprint(prompt.format(input="Who was the father of Mary Ball Washington?"))\n')),(0,a.kt)(r,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Question: Who lived longer, Muhammad Ali or Alan Turing?\n    \n    Are follow up questions needed here: Yes.\n    Follow up: How old was Muhammad Ali when he died?\n    Intermediate answer: Muhammad Ali was 74 years old when he died.\n    Follow up: How old was Alan Turing when he died?\n    Intermediate answer: Alan Turing was 41 years old when he died.\n    So the final answer is: Muhammad Ali\n    \n    \n    Question: When was the founder of craigslist born?\n    \n    Are follow up questions needed here: Yes.\n    Follow up: Who was the founder of craigslist?\n    Intermediate answer: Craigslist was founded by Craig Newmark.\n    Follow up: When was Craig Newmark born?\n    Intermediate answer: Craig Newmark was born on December 6, 1952.\n    So the final answer is: December 6, 1952\n    \n    \n    Question: Who was the maternal grandfather of George Washington?\n    \n    Are follow up questions needed here: Yes.\n    Follow up: Who was the mother of George Washington?\n    Intermediate answer: The mother of George Washington was Mary Ball Washington.\n    Follow up: Who was the father of Mary Ball Washington?\n    Intermediate answer: The father of Mary Ball Washington was Joseph Ball.\n    So the final answer is: Joseph Ball\n    \n    \n    Question: Are both the directors of Jaws and Casino Royale from the same country?\n    \n    Are follow up questions needed here: Yes.\n    Follow up: Who is the director of Jaws?\n    Intermediate Answer: The director of Jaws is Steven Spielberg.\n    Follow up: Where is Steven Spielberg from?\n    Intermediate Answer: The United States.\n    Follow up: Who is the director of Casino Royale?\n    Intermediate Answer: The director of Casino Royale is Martin Campbell.\n    Follow up: Where is Martin Campbell from?\n    Intermediate Answer: New Zealand.\n    So the final answer is: No\n    \n    \n    Question: Who was the father of Mary Ball Washington?\n"))),(0,a.kt)("h2",{id:"using-an-example-selector"},"Using an example selector"),(0,a.kt)("h3",{id:"feed-examples-into-exampleselector"},"Feed examples into ",(0,a.kt)("inlineCode",{parentName:"h3"},"ExampleSelector")),(0,a.kt)("p",null,"We will reuse the example set and the formatter from the previous section. However, instead of feeding the examples directly into the ",(0,a.kt)("inlineCode",{parentName:"p"},"FewShotPromptTemplate")," object, we will feed them into an ",(0,a.kt)("inlineCode",{parentName:"p"},"ExampleSelector")," object."),(0,a.kt)("p",null,"In this tutorial, we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"SemanticSimilarityExampleSelector")," class. This class selects few-shot examples based on their similarity to the input. It uses an embedding model to compute the similarity between the input and the few-shot examples, as well as a vector store to perform the nearest neighbor search."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.prompts.example_selector import SemanticSimilarityExampleSelector\nfrom langchain.vectorstores import Chroma\nfrom langchain.embeddings import OpenAIEmbeddings\n\n\nexample_selector = SemanticSimilarityExampleSelector.from_examples(\n    # This is the list of examples available to select from.\n    examples,\n    # This is the embedding class used to produce embeddings which are used to measure semantic similarity.\n    OpenAIEmbeddings(),\n    # This is the VectorStore class that is used to store the embeddings and do a similarity search over.\n    Chroma,\n    # This is the number of examples to produce.\n    k=1\n)\n\n# Select the most similar example to the input.\nquestion = "Who was the father of Mary Ball Washington?"\nselected_examples = example_selector.select_examples({"question": question})\nprint(f"Examples most similar to the input: {question}")\nfor example in selected_examples:\n    print("\\n")\n    for k, v in example.items():\n        print(f"{k}: {v}")\n')),(0,a.kt)(r,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Running Chroma using direct local API.\n    Using DuckDB in-memory for database. Data will be transient.\n    Examples most similar to the input: Who was the father of Mary Ball Washington?\n    \n    \n    question: Who was the maternal grandfather of George Washington?\n    answer: \n    Are follow up questions needed here: Yes.\n    Follow up: Who was the mother of George Washington?\n    Intermediate answer: The mother of George Washington was Mary Ball Washington.\n    Follow up: Who was the father of Mary Ball Washington?\n    Intermediate answer: The father of Mary Ball Washington was Joseph Ball.\n    So the final answer is: Joseph Ball\n    \n"))),(0,a.kt)("h3",{id:"feed-example-selector-into-fewshotprompttemplate"},"Feed example selector into ",(0,a.kt)("inlineCode",{parentName:"h3"},"FewShotPromptTemplate")),(0,a.kt)("p",null,"Finally, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"FewShotPromptTemplate")," object. This object takes in the example selector and the formatter for the few-shot examples."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'prompt = FewShotPromptTemplate(\n    example_selector=example_selector, \n    example_prompt=example_prompt, \n    suffix="Question: {input}", \n    input_variables=["input"]\n)\n\nprint(prompt.format(input="Who was the father of Mary Ball Washington?"))\n')),(0,a.kt)(r,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Question: Who was the maternal grandfather of George Washington?\n    \n    Are follow up questions needed here: Yes.\n    Follow up: Who was the mother of George Washington?\n    Intermediate answer: The mother of George Washington was Mary Ball Washington.\n    Follow up: Who was the father of Mary Ball Washington?\n    Intermediate answer: The father of Mary Ball Washington was Joseph Ball.\n    So the final answer is: Joseph Ball\n    \n    \n    Question: Who was the father of Mary Ball Washington?\n"))))}p.isMDXComponent=!0;const m={},h="Few-shot prompt templates",d={unversionedId:"modules/model_io/prompts/prompt_templates/few_shot_examples",id:"modules/model_io/prompts/prompt_templates/few_shot_examples",title:"Few-shot prompt templates",description:"In this tutorial, we'll learn how to create a prompt template that uses few-shot examples. A few-shot prompt template can be constructed from either a set of examples, or from an Example Selector object.",source:"@site/docs/modules/model_io/prompts/prompt_templates/few_shot_examples.mdx",sourceDirName:"modules/model_io/prompts/prompt_templates",slug:"/modules/model_io/prompts/prompt_templates/few_shot_examples",permalink:"/langchain/docs/modules/model_io/prompts/prompt_templates/few_shot_examples",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Custom prompt template",permalink:"/langchain/docs/modules/model_io/prompts/prompt_templates/custom_prompt_template"},next:{title:"Few-shot examples for chat models",permalink:"/langchain/docs/modules/model_io/prompts/prompt_templates/few_shot_examples_chat"}},u={},w=[],f={toc:w},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"few-shot-prompt-templates"},"Few-shot prompt templates"),(0,a.kt)("p",null,"In this tutorial, we'll learn how to create a prompt template that uses few-shot examples. A few-shot prompt template can be constructed from either a set of examples, or from an Example Selector object."),(0,a.kt)(p,{mdxType:"Example"}))}g.isMDXComponent=!0}}]);
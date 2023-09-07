"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10020],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||i;return t?a.createElement(d,r(r({ref:n},p),{},{components:t})):a.createElement(d,r({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const i={},r="Using OpenAI functions",s={unversionedId:"modules/chains/how_to/openai_functions",id:"modules/chains/how_to/openai_functions",title:"Using OpenAI functions",description:"This walkthrough demonstrates how to incorporate OpenAI function-calling API's in a chain. We'll go over:",source:"@site/docs/modules/chains/how_to/openai_functions.md",sourceDirName:"modules/chains/how_to",slug:"/modules/chains/how_to/openai_functions",permalink:"/langchain/docs/modules/chains/how_to/openai_functions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Adding memory (state)",permalink:"/langchain/docs/modules/chains/how_to/memory"},next:{title:"Serialization",permalink:"/langchain/docs/modules/chains/how_to/serialization"}},c={},l=[{value:"Getting structured outputs",id:"getting-structured-outputs",level:2},{value:"Using Pydantic classes",id:"using-pydantic-classes",level:3},{value:"Using JsonSchema",id:"using-jsonschema",level:3},{value:"Creating a generic OpenAI functions chain",id:"creating-a-generic-openai-functions-chain",level:2},{value:"Using Pydantic classes",id:"using-pydantic-classes-1",level:3},{value:"Using Python functions",id:"using-python-functions",level:3},{value:"Other Chains using OpenAI functions",id:"other-chains-using-openai-functions",level:2}],p=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const h={toc:l},m="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-openai-functions"},"Using OpenAI functions"),(0,o.kt)("p",null,"This walkthrough demonstrates how to incorporate OpenAI function-calling API's in a chain. We'll go over: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"How to use functions to get structured outputs from ChatOpenAI"),(0,o.kt)("li",{parentName:"ol"},"How to create a generic chain that uses (multiple) functions"),(0,o.kt)("li",{parentName:"ol"},"How to create a chain that actually executes the chosen function")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "create_openai_fn_chain", "source": "langchain.chains.openai_functions", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.openai_functions.base.create_openai_fn_chain.html", "title": "Using OpenAI functions"}, {"imported": "create_structured_output_chain", "source": "langchain.chains.openai_functions", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.openai_functions.base.create_structured_output_chain.html", "title": "Using OpenAI functions"}, {"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Using OpenAI functions"}, {"imported": "ChatPromptTemplate", "source": "langchain.prompts", "docs": "https://api.python.langchain.com/en/latest/prompts/langchain.prompts.chat.ChatPromptTemplate.html", "title": "Using OpenAI functions"}, {"imported": "HumanMessagePromptTemplate", "source": "langchain.prompts", "docs": "https://api.python.langchain.com/en/latest/prompts/langchain.prompts.chat.HumanMessagePromptTemplate.html", "title": "Using OpenAI functions"}, {"imported": "HumanMessage", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.messages.HumanMessage.html", "title": "Using OpenAI functions"}, {"imported": "SystemMessage", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.messages.SystemMessage.html", "title": "Using OpenAI functions"}]--\x3e\nfrom typing import Optional\n\nfrom langchain.chains.openai_functions import (\n    create_openai_fn_chain,\n    create_structured_output_chain,\n)\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.prompts import ChatPromptTemplate, HumanMessagePromptTemplate\nfrom langchain.schema import HumanMessage, SystemMessage\n')),(0,o.kt)("h2",{id:"getting-structured-outputs"},"Getting structured outputs"),(0,o.kt)("p",null,"We can take advantage of OpenAI functions to try and force the model to return a particular kind of structured output. We'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"create_structured_output_chain")," to create our chain, which takes the desired structured output either as a Pydantic class or as JsonSchema."),(0,o.kt)("p",null,"See here for relevant ",(0,o.kt)("a",{parentName:"p",href:"https://api.python.langchain.com/en/latest/chains/langchain.chains.openai_functions.base.create_structured_output_chain.html"},"reference docs"),"."),(0,o.kt)("h3",{id:"using-pydantic-classes"},"Using Pydantic classes"),(0,o.kt)("p",null,"When passing in Pydantic classes to structure our text, we need to make sure to have a docstring description for the class. It also helps to have descriptions for each of the classes attributes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pydantic import BaseModel, Field\n\n\nclass Person(BaseModel):\n    """Identifying information about a person."""\n\n    name: str = Field(..., description="The person\'s name")\n    age: int = Field(..., description="The person\'s age")\n    fav_food: Optional[str] = Field(None, description="The person\'s favorite food")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# If we pass in a model explicitly, we need to make sure it supports the OpenAI function-calling API.\nllm = ChatOpenAI(model="gpt-4", temperature=0)\nprompt = ChatPromptTemplate.from_messages(\n    [\n        ("system", "You are a world class algorithm for extracting information in structured formats."),\n        ("human", "Use the given format to extract information from the following input: {input}"),\n        ("human", "Tip: Make sure to answer in the correct format"),\n    ]\n)\n\nchain = create_structured_output_chain(Person, llm, prompt, verbose=True)\nchain.run("Sally is 13")\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    System: You are a world class algorithm for extracting information in structured formats.\n    Human: Use the given format to extract information from the following input: Sally is 13\n    Human: Tip: Make sure to answer in the correct format\n    \n    > Finished chain.\n\n\n\n\n\n    Person(name='Sally', age=13, fav_food='Unknown')\n"))),(0,o.kt)("p",null,"To extract arbitrarily many structured outputs of a given format, we can just create a wrapper Pydantic class  that takes a sequence of the original class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from typing import Sequence\n\n\nclass People(BaseModel):\n    """Identifying information about all people in a text."""\n\n    people: Sequence[Person] = Field(..., description="The people in the text")\n\n\nchain = create_structured_output_chain(People, llm, prompt, verbose=True)\nchain.run(\n    "Sally is 13, Joey just turned 12 and loves spinach. Caroline is 10 years older than Sally."\n)\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    System: You are a world class algorithm for extracting information in structured formats.\n    Human: Use the given format to extract information from the following input: Sally is 13, Joey just turned 12 and loves spinach. Caroline is 10 years older than Sally.\n    Human: Tip: Make sure to answer in the correct format\n    \n    > Finished chain.\n\n\n\n\n\n    People(people=[Person(name='Sally', age=13, fav_food=''), Person(name='Joey', age=12, fav_food='spinach'), Person(name='Caroline', age=23, fav_food='')])\n"))),(0,o.kt)("h3",{id:"using-jsonschema"},"Using JsonSchema"),(0,o.kt)("p",null,"We can also pass in JsonSchema instead of Pydantic classes to specify the desired structure. When we do this, our chain will output JSON corresponding to the properties described in the JsonSchema, instead of a Pydantic class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'json_schema = {\n    "title": "Person",\n    "description": "Identifying information about a person.",\n    "type": "object",\n    "properties": {\n        "name": {"title": "Name", "description": "The person\'s name", "type": "string"},\n        "age": {"title": "Age", "description": "The person\'s age", "type": "integer"},\n        "fav_food": {\n            "title": "Fav Food",\n            "description": "The person\'s favorite food",\n            "type": "string",\n        },\n    },\n    "required": ["name", "age"],\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'chain = create_structured_output_chain(json_schema, llm, prompt, verbose=True)\nchain.run("Sally is 13")\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    System: You are a world class algorithm for extracting information in structured formats.\n    Human: Use the given format to extract information from the following input: Sally is 13\n    Human: Tip: Make sure to answer in the correct format\n    \n    > Finished chain.\n\n\n\n\n\n    {'name': 'Sally', 'age': 13}\n"))),(0,o.kt)("h2",{id:"creating-a-generic-openai-functions-chain"},"Creating a generic OpenAI functions chain"),(0,o.kt)("p",null,"To create a generic OpenAI functions chain, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"create_openai_fn_chain")," method. This is the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"create_structured_output_chain")," except that instead of taking a single output schema, it takes a sequence of function definitions."),(0,o.kt)("p",null,"Functions can be passed in as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"dicts conforming to OpenAI functions spec,"),(0,o.kt)("li",{parentName:"ul"},"Pydantic classes, in which case they should have docstring descriptions of the function they represent and descriptions for each of the parameters,"),(0,o.kt)("li",{parentName:"ul"},"Python functions, in which case they should have docstring descriptions of the function and args, along with type hints.")),(0,o.kt)("p",null,"See here for relevant ",(0,o.kt)("a",{parentName:"p",href:"https://api.python.langchain.com/en/latest/chains/langchain.chains.openai_functions.base.create_openai_fn_chain.html"},"reference docs"),"."),(0,o.kt)("h3",{id:"using-pydantic-classes-1"},"Using Pydantic classes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class RecordPerson(BaseModel):\n    """Record some identifying information about a pe."""\n\n    name: str = Field(..., description="The person\'s name")\n    age: int = Field(..., description="The person\'s age")\n    fav_food: Optional[str] = Field(None, description="The person\'s favorite food")\n\n\nclass RecordDog(BaseModel):\n    """Record some identifying information about a dog."""\n\n    name: str = Field(..., description="The dog\'s name")\n    color: str = Field(..., description="The dog\'s color")\n    fav_food: Optional[str] = Field(None, description="The dog\'s favorite food")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'prompt = ChatPromptTemplate.from_messages(\n    [\n        ("system", "You are a world class algorithm for recording entities."),\n        ("human", "Make calls to the relevant function to record the entities in the following input: {input}"),\n        ("human", "Tip: Make sure to answer in the correct format"),\n    ]\n)\n\nchain = create_openai_fn_chain([RecordPerson, RecordDog], llm, prompt, verbose=True)\nchain.run("Harry was a chubby brown beagle who loved chicken")\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    System: You are a world class algorithm for recording entities.\n    Human: Make calls to the relevant function to record the entities in the following input: Harry was a chubby brown beagle who loved chicken\n    Human: Tip: Make sure to answer in the correct format\n    \n    > Finished chain.\n\n\n\n\n\n    RecordDog(name='Harry', color='brown', fav_food='chicken')\n"))),(0,o.kt)("h3",{id:"using-python-functions"},"Using Python functions"),(0,o.kt)("p",null,"We can pass in functions as Pydantic classes, directly as OpenAI function dicts, or Python functions. To pass Python function in directly, we'll want to make sure our parameters have type hints, we have a docstring, and we use ",(0,o.kt)("a",{parentName:"p",href:"https://google.github.io/styleguide/pyguide.html#doc-function-args"},"Google Python style docstrings")," to describe the parameters."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": To use Python functions, make sure the function arguments are of primitive types (str, float, int, bool) or that they are Pydantic objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class OptionalFavFood(BaseModel):\n    """Either a food or null."""\n\n    food: Optional[str] = Field(\n        None,\n        description="Either the name of a food or null. Should be null if the food isn\'t known.",\n    )\n\n\ndef record_person(name: str, age: int, fav_food: OptionalFavFood) -> str:\n    """Record some basic identifying information about a person.\n\n    Args:\n        name: The person\'s name.\n        age: The person\'s age in years.\n        fav_food: An OptionalFavFood object that either contains the person\'s favorite food or a null value. Food should be null if it\'s not known.\n    """\n    return f"Recording person {name} of age {age} with favorite food {fav_food.food}!"\n\n\nchain = create_openai_fn_chain([record_person], llm, prompt, verbose=True)\nchain.run(\n    "The most important thing to remember about Tommy, my 12 year old, is that he\'ll do anything for apple pie."\n)\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    System: You are a world class algorithm for recording entities.\n    Human: Make calls to the relevant function to record the entities in the following input: The most important thing to remember about Tommy, my 12 year old, is that he'll do anything for apple pie.\n    Human: Tip: Make sure to answer in the correct format\n    \n    > Finished chain.\n\n\n\n\n\n    {'name': 'Tommy', 'age': 12, 'fav_food': {'food': 'apple pie'}}\n"))),(0,o.kt)("p",null,"If we pass in multiple Python functions or OpenAI functions, then the returned output will be of the form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'{"name": "<<function_name>>", "arguments": {<<function_arguments>>}}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def record_dog(name: str, color: str, fav_food: OptionalFavFood) -> str:\n    """Record some basic identifying information about a dog.\n\n    Args:\n        name: The dog\'s name.\n        color: The dog\'s color.\n        fav_food: An OptionalFavFood object that either contains the dog\'s favorite food or a null value. Food should be null if it\'s not known.\n    """\n    return f"Recording dog {name} of color {color} with favorite food {fav_food}!"\n\n\nchain = create_openai_fn_chain([record_person, record_dog], llm, prompt, verbose=True)\nchain.run(\n    "I can\'t find my dog Henry anywhere, he\'s a small brown beagle. Could you send a message about him?"\n)\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    System: You are a world class algorithm for recording entities.\n    Human: Make calls to the relevant function to record the entities in the following input: I can't find my dog Henry anywhere, he's a small brown beagle. Could you send a message about him?\n    Human: Tip: Make sure to answer in the correct format\n    \n    > Finished chain.\n\n\n\n\n\n    {'name': 'record_dog',\n     'arguments': {'name': 'Henry', 'color': 'brown', 'fav_food': {'food': None}}}\n"))),(0,o.kt)("h2",{id:"other-chains-using-openai-functions"},"Other Chains using OpenAI functions"),(0,o.kt)("p",null,"There are a number of more specific chains that use OpenAI functions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/modules/chains/additional/extraction"},"Extraction"),": very similar to structured output chain, intended for information/entity extraction specifically."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/use_cases/tagging"},"Tagging"),": tag inputs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/use_cases/apis/openapi_openai"},"OpenAPI"),": take an OpenAPI spec and create + execute valid requests against the API, using OpenAI functions under the hood."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/use_cases/question_answering/how_to/qa_citations"},"QA with citations"),": use OpenAI functions ability to extract citations from text.")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91155],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,y=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return n?o.createElement(y,r(r({ref:t},p),{},{components:n})):o.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var m=2;m<i;m++)r[m]=n[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=n(87462),a=(n(67294),n(3905));const i={},r="Custom Memory",s={unversionedId:"modules/memory/custom_memory",id:"modules/memory/custom_memory",title:"Custom Memory",description:"Although there are a few predefined types of memory in LangChain, it is highly possible you will want to add your own type of memory that is optimal for your application. This notebook covers how to do that.",source:"@site/docs/modules/memory/custom_memory.md",sourceDirName:"modules/memory",slug:"/modules/memory/custom_memory",permalink:"/langchain/docs/modules/memory/custom_memory",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Customizing Conversational Memory",permalink:"/langchain/docs/modules/memory/conversational_customization"},next:{title:"Multiple Memory classes",permalink:"/langchain/docs/modules/memory/multiple_memory"}},l={},m=[],p=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const u={toc:m},d="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-memory"},"Custom Memory"),(0,a.kt)("p",null,"Although there are a few predefined types of memory in LangChain, it is highly possible you will want to add your own type of memory that is optimal for your application. This notebook covers how to do that."),(0,a.kt)("p",null,"For this notebook, we will add a custom memory type to ",(0,a.kt)("inlineCode",{parentName:"p"},"ConversationChain"),". In order to add a custom memory class, we need to import the base memory class and subclass it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "BaseMemory", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.memory.BaseMemory.html", "title": "Custom Memory"}]--\x3e\nfrom langchain import OpenAI, ConversationChain\nfrom langchain.schema import BaseMemory\nfrom pydantic import BaseModel\nfrom typing import List, Dict, Any\n')),(0,a.kt)("p",null,"In this example, we will write a custom memory class that uses spaCy to extract entities and save information about them in a simple hash table. Then, during the conversation, we will look at the input text, extract any entities, and put any information about them into the context."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please note that this implementation is pretty simple and brittle and probably not useful in a production setting. Its purpose is to showcase that you can add custom memory implementations.")),(0,a.kt)("p",null,"For this, we will need spaCy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# !pip install spacy\n# !python -m spacy download en_core_web_lg\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import spacy\n\nnlp = spacy.load("en_core_web_lg")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class SpacyEntityMemory(BaseMemory, BaseModel):\n    """Memory class for storing information about entities."""\n\n    # Define dictionary to store information about entities.\n    entities: dict = {}\n    # Define key to pass information about entities into prompt.\n    memory_key: str = "entities"\n\n    def clear(self):\n        self.entities = {}\n\n    @property\n    def memory_variables(self) -> List[str]:\n        """Define the variables we are providing to the prompt."""\n        return [self.memory_key]\n\n    def load_memory_variables(self, inputs: Dict[str, Any]) -> Dict[str, str]:\n        """Load the memory variables, in this case the entity key."""\n        # Get the input text and run through spaCy\n        doc = nlp(inputs[list(inputs.keys())[0]])\n        # Extract known information about entities, if they exist.\n        entities = [\n            self.entities[str(ent)] for ent in doc.ents if str(ent) in self.entities\n        ]\n        # Return combined information about entities to put into context.\n        return {self.memory_key: "\\n".join(entities)}\n\n    def save_context(self, inputs: Dict[str, Any], outputs: Dict[str, str]) -> None:\n        """Save context from this conversation to buffer."""\n        # Get the input text and run through spaCy\n        text = inputs[list(inputs.keys())[0]]\n        doc = nlp(text)\n        # For each entity that was mentioned, save this information to the dictionary.\n        for ent in doc.ents:\n            ent_str = str(ent)\n            if ent_str in self.entities:\n                self.entities[ent_str] += f"\\n{text}"\n            else:\n                self.entities[ent_str] = text\n')),(0,a.kt)("p",null,"We now define a prompt that takes in information about entities as well as user input."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "PromptTemplate", "source": "langchain.prompts.prompt", "docs": "https://api.python.langchain.com/en/latest/prompts/langchain.prompts.prompt.PromptTemplate.html", "title": "Custom Memory"}]--\x3e\nfrom langchain.prompts.prompt import PromptTemplate\n\ntemplate = """The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know. You are provided with information about entities the Human mentions, if relevant.\n\nRelevant entity information:\n{entities}\n\nConversation:\nHuman: {input}\nAI:"""\nprompt = PromptTemplate(input_variables=["entities", "input"], template=template)\n')),(0,a.kt)("p",null,"And now we put it all together!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"llm = OpenAI(temperature=0)\nconversation = ConversationChain(\n    llm=llm, prompt=prompt, verbose=True, memory=SpacyEntityMemory()\n)\n")),(0,a.kt)("p",null,'In the first example, with no prior knowledge about Harrison, the "Relevant entity information" section is empty.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'conversation.predict(input="Harrison likes machine learning")\n')),(0,a.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new ConversationChain chain...\n    Prompt after formatting:\n    The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know. You are provided with information about entities the Human mentions, if relevant.\n    \n    Relevant entity information:\n    \n    \n    Conversation:\n    Human: Harrison likes machine learning\n    AI:\n    \n    > Finished ConversationChain chain.\n\n\n\n\n\n    " That\'s great to hear! Machine learning is a fascinating field of study. It involves using algorithms to analyze data and make predictions. Have you ever studied machine learning, Harrison?"\n'))),(0,a.kt)("p",null,"Now in the second example, we can see that it pulls in information about Harrison."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'conversation.predict(\n    input="What do you think Harrison\'s favorite subject in college was?"\n)\n')),(0,a.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new ConversationChain chain...\n    Prompt after formatting:\n    The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know. You are provided with information about entities the Human mentions, if relevant.\n    \n    Relevant entity information:\n    Harrison likes machine learning\n    \n    Conversation:\n    Human: What do you think Harrison's favorite subject in college was?\n    AI:\n    \n    > Finished ConversationChain chain.\n\n\n\n\n\n    ' From what I know about Harrison, I believe his favorite subject in college was machine learning. He has expressed a strong interest in the subject and has mentioned it often.'\n"))),(0,a.kt)("p",null,"Again, please note that this implementation is pretty simple and brittle and probably not useful in a production setting. Its purpose is to showcase that you can add custom memory implementations."))}y.isMDXComponent=!0}}]);
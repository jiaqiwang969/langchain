"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81270],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),i=m(t),p=o,h=i["".concat(s,".").concat(p)]||i[p]||d[p]||l;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[i]="string"==typeof e?e:o,r[1]=c;for(var m=2;m<l;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},90039:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=t(87462),o=(t(67294),t(3905));const l={},r="Custom callback handlers",c={unversionedId:"modules/callbacks/custom_callbacks",id:"modules/callbacks/custom_callbacks",title:"Custom callback handlers",description:"You can create a custom handler to set on the object as well. In the example below, we'll implement streaming with a custom handler.",source:"@site/docs/modules/callbacks/custom_callbacks.md",sourceDirName:"modules/callbacks",slug:"/modules/callbacks/custom_callbacks",permalink:"/langchain/docs/modules/callbacks/custom_callbacks",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Async callbacks",permalink:"/langchain/docs/modules/callbacks/async_callbacks"},next:{title:"Callbacks for custom chains",permalink:"/langchain/docs/modules/callbacks/custom_chain"}},s={},m=[],u=(i="CodeOutputBlock",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var i;const d={toc:m},p="wrapper";function h(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-callback-handlers"},"Custom callback handlers"),(0,o.kt)("p",null,"You can create a custom handler to set on the object as well. In the example below, we'll implement streaming with a custom handler."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "BaseCallbackHandler", "source": "langchain.callbacks.base", "docs": "https://api.python.langchain.com/en/latest/callbacks/langchain.callbacks.base.BaseCallbackHandler.html", "title": "Custom callback handlers"}, {"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Custom callback handlers"}, {"imported": "HumanMessage", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.messages.HumanMessage.html", "title": "Custom callback handlers"}]--\x3e\nfrom langchain.callbacks.base import BaseCallbackHandler\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.schema import HumanMessage\n\n\nclass MyCustomHandler(BaseCallbackHandler):\n    def on_llm_new_token(self, token: str, **kwargs) -> None:\n        print(f"My custom handler, token: {token}")\n\n\n# To enable streaming, we pass in `streaming=True` to the ChatModel constructor\n# Additionally, we pass in a list with our custom handler\nchat = ChatOpenAI(max_tokens=25, streaming=True, callbacks=[MyCustomHandler()])\n\nchat([HumanMessage(content="Tell me a joke")])\n')),(0,o.kt)(u,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    My custom handler, token: \n    My custom handler, token: Why\n    My custom handler, token:  don\n    My custom handler, token: 't\n    My custom handler, token:  scientists\n    My custom handler, token:  trust\n    My custom handler, token:  atoms\n    My custom handler, token: ?\n    My custom handler, token:  \n    \n    \n    My custom handler, token: Because\n    My custom handler, token:  they\n    My custom handler, token:  make\n    My custom handler, token:  up\n    My custom handler, token:  everything\n    My custom handler, token: .\n    My custom handler, token: \n\n\n\n\n\n    AIMessage(content=\"Why don't scientists trust atoms? \\n\\nBecause they make up everything.\", additional_kwargs={}, example=False)\n"))))}h.isMDXComponent=!0}}]);
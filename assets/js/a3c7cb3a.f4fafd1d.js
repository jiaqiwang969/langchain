"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=m(n),d=o,y=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(y,s(s({ref:t},l),{},{components:n})):r.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var m=2;m<a;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>y});var r=n(87462),o=(n(67294),n(3905));const a=(s="CodeOutputBlock",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var s;const i={toc:[]},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.memory import ChatMessageHistory\n\nhistory = ChatMessageHistory()\n\nhistory.add_user_message("hi!")\n\nhistory.add_ai_message("whats up?")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"history.messages\n")),(0,o.kt)(a,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    [HumanMessage(content='hi!', additional_kwargs={}),\n     AIMessage(content='whats up?', additional_kwargs={})]\n"))))}m.isMDXComponent=!0;const l={sidebar_position:1},p="Chat Messages",u={unversionedId:"modules/memory/chat_messages/index",id:"modules/memory/chat_messages/index",title:"Chat Messages",description:"Head to Integrations for documentation on built-in memory integrations with 3rd-party databases and tools.",source:"@site/docs/modules/memory/chat_messages/index.mdx",sourceDirName:"modules/memory/chat_messages",slug:"/modules/memory/chat_messages/",permalink:"/langchain/docs/modules/memory/chat_messages/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Memory",permalink:"/langchain/docs/modules/memory/"},next:{title:"Memory types",permalink:"/langchain/docs/modules/memory/types/"}},d={},y=[],g={toc:y},f="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chat-messages"},"Chat Messages"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Head to ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/memory/"},"Integrations")," for documentation on built-in memory integrations with 3rd-party databases and tools.")),(0,o.kt)("p",null,"One of the core utility classes underpinning most (if not all) memory modules is the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatMessageHistory")," class.\nThis is a super lightweight wrapper which provides convenience methods for saving HumanMessages, AIMessages, and then fetching them all."),(0,o.kt)("p",null,"You may want to use this class directly if you are managing memory outside of a chain."),(0,o.kt)(m,{mdxType:"GetStarted"}))}h.isMDXComponent=!0}}]);
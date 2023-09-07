"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24699],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="Discord",s={unversionedId:"integrations/providers/discord",id:"integrations/providers/discord",title:"Discord",description:"Discord is a VoIP and instant messaging social platform. Users have the ability to communicate",source:"@site/docs/integrations/providers/discord.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/discord",permalink:"/langchain/docs/integrations/providers/discord",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Dingo",permalink:"/langchain/docs/integrations/providers/dingo"},next:{title:"DocArray",permalink:"/langchain/docs/integrations/providers/docarray"}},l={},c=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Document Loader",id:"document-loader",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"discord"},"Discord"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://discord.com/"},"Discord"),' is a VoIP and instant messaging social platform. Users have the ability to communicate\nwith voice calls, video calls, text messaging, media and files in private chats or as part of communities called\n"servers". A server is a collection of persistent chat rooms and voice channels which can be accessed via invite links.')),(0,a.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pandas\n")),(0,a.kt)("p",null,"Follow these steps to download your ",(0,a.kt)("inlineCode",{parentName:"p"},"Discord")," data:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to your ",(0,a.kt)("strong",{parentName:"li"},"User Settings")),(0,a.kt)("li",{parentName:"ol"},"Then go to ",(0,a.kt)("strong",{parentName:"li"},"Privacy and Safety")),(0,a.kt)("li",{parentName:"ol"},"Head over to the ",(0,a.kt)("strong",{parentName:"li"},"Request all of my Data")," and click on ",(0,a.kt)("strong",{parentName:"li"},"Request Data")," button")),(0,a.kt)("p",null,"It might take 30 days for you to receive your data. You'll receive an email at the address which is registered\nwith Discord. That email will have a download button using which you would be able to download your personal Discord data."),(0,a.kt)("h2",{id:"document-loader"},"Document Loader"),(0,a.kt)("p",null,"See a ",(0,a.kt)("a",{parentName:"p",href:"/docs/integrations/document_loaders/discord"},"usage example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "DiscordChatLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.discord.DiscordChatLoader.html", "title": "Discord"}]--\x3e\nfrom langchain.document_loaders import DiscordChatLoader\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s="WhatsApp",i={unversionedId:"integrations/providers/whatsapp",id:"integrations/providers/whatsapp",title:"WhatsApp",description:"WhatsApp (also called WhatsApp Messenger) is a freeware, cross-platform, centralized instant messaging (IM) and voice-over-IP (VoIP) service. It allows users to send text and voice messages, make voice and video calls, and share images, documents, user locations, and other content.",source:"@site/docs/integrations/providers/whatsapp.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/whatsapp",permalink:"/langchain/docs/integrations/providers/whatsapp",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Weaviate",permalink:"/langchain/docs/integrations/providers/weaviate"},next:{title:"WhyLabs",permalink:"/langchain/docs/integrations/providers/whylabs_profiling"}},p={},l=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Document Loader",id:"document-loader",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whatsapp"},"WhatsApp"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.whatsapp.com/"},"WhatsApp")," (also called ",(0,a.kt)("inlineCode",{parentName:"p"},"WhatsApp Messenger"),") is a freeware, cross-platform, centralized instant messaging (IM) and voice-over-IP (VoIP) service. It allows users to send text and voice messages, make voice and video calls, and share images, documents, user locations, and other content.")),(0,a.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,a.kt)("p",null,"There isn't any special setup for it."),(0,a.kt)("h2",{id:"document-loader"},"Document Loader"),(0,a.kt)("p",null,"See a ",(0,a.kt)("a",{parentName:"p",href:"/docs/integrations/document_loaders/whatsapp_chat"},"usage example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.document_loaders import WhatsAppChatLoader\n")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i="Notion DB",l={unversionedId:"integrations/providers/notion",id:"integrations/providers/notion",title:"Notion DB",description:"Notion is a collaboration platform with modified Markdown support that integrates kanban",source:"@site/docs/integrations/providers/notion.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/notion",permalink:"/langchain/docs/integrations/providers/notion",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"NLPCloud",permalink:"/langchain/docs/integrations/providers/nlpcloud"},next:{title:"Obsidian",permalink:"/langchain/docs/integrations/providers/obsidian"}},s={},p=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Document Loader",id:"document-loader",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"notion-db"},"Notion DB"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/"},"Notion")," is a collaboration platform with modified Markdown support that integrates kanban\nboards, tasks, wikis and databases. It is an all-in-one workspace for notetaking, knowledge and data management,\nand project and task management.")),(0,o.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,o.kt)("p",null,"All instructions are in examples below."),(0,o.kt)("h2",{id:"document-loader"},"Document Loader"),(0,o.kt)("p",null,"We have two different loaders: ",(0,o.kt)("inlineCode",{parentName:"p"},"NotionDirectoryLoader")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NotionDBLoader"),"."),(0,o.kt)("p",null,"See a ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/document_loaders/notion.html"},"usage example for the NotionDirectoryLoader"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.document_loaders import NotionDirectoryLoader\n")),(0,o.kt)("p",null,"See a ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/document_loaders/notiondb.html"},"usage example for the NotionDBLoader"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.document_loaders import NotionDBLoader\n")))}u.isMDXComponent=!0}}]);
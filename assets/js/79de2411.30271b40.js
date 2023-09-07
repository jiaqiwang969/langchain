"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="Slack",l={unversionedId:"integrations/document_loaders/slack",id:"integrations/document_loaders/slack",title:"Slack",description:"Slack is an instant messaging program.",source:"@site/docs/integrations/document_loaders/slack.md",sourceDirName:"integrations/document_loaders",slug:"/integrations/document_loaders/slack",permalink:"/langchain/docs/integrations/document_loaders/slack",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Sitemap",permalink:"/langchain/docs/integrations/document_loaders/sitemap"},next:{title:"Snowflake",permalink:"/langchain/docs/integrations/document_loaders/snowflake"}},c={},s=[{value:"\ud83e\uddd1 Instructions for ingesting your own dataset",id:"-instructions-for-ingesting-your-own-dataset",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slack"},"Slack"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://slack.com/"},"Slack")," is an instant messaging program.")),(0,o.kt)("p",null,"This notebook covers how to load documents from a Zipfile generated from a ",(0,o.kt)("inlineCode",{parentName:"p"},"Slack")," export."),(0,o.kt)("p",null,"In order to get this ",(0,o.kt)("inlineCode",{parentName:"p"},"Slack")," export, follow these instructions:"),(0,o.kt)("h2",{id:"-instructions-for-ingesting-your-own-dataset"},"\ud83e\uddd1 Instructions for ingesting your own dataset"),(0,o.kt)("p",null,"Export your Slack data. You can do this by going to your Workspace Management page and clicking the Import/Export option ({your_slack_domain}.slack.com/services/export). Then, choose the right date range and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Start export"),". Slack will send you an email and a DM when the export is ready."),(0,o.kt)("p",null,"The download will produce a ",(0,o.kt)("inlineCode",{parentName:"p"},".zip")," file in your Downloads folder (or wherever your downloads can be found, depending on your OS configuration)."),(0,o.kt)("p",null,"Copy the path to the ",(0,o.kt)("inlineCode",{parentName:"p"},".zip")," file, and assign it as ",(0,o.kt)("inlineCode",{parentName:"p"},"LOCAL_ZIPFILE")," below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "SlackDirectoryLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.slack_directory.SlackDirectoryLoader.html", "title": "Slack"}]--\x3e\nfrom langchain.document_loaders import SlackDirectoryLoader\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Optionally set your Slack URL. This will give you proper URLs in the docs sources.\nSLACK_WORKSPACE_URL = "https://xxx.slack.com"\nLOCAL_ZIPFILE = ""  # Paste the local paty to your Slack zip file here.\n\nloader = SlackDirectoryLoader(LOCAL_ZIPFILE, SLACK_WORKSPACE_URL)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"docs = loader.load()\ndocs\n")))}u.isMDXComponent=!0}}]);
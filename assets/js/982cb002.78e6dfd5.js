"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85056],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},36057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={},o="Anyscale",l={unversionedId:"integrations/providers/anyscale",id:"integrations/providers/anyscale",title:"Anyscale",description:"This page covers how to use the Anyscale ecosystem within LangChain.",source:"@site/docs/integrations/providers/anyscale.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/anyscale",permalink:"/langchain/docs/integrations/providers/anyscale",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Annoy",permalink:"/langchain/docs/integrations/providers/annoy"},next:{title:"Apify",permalink:"/langchain/docs/integrations/providers/apify"}},s={},c=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Wrappers",id:"wrappers",level:2},{value:"LLM",id:"llm",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anyscale"},"Anyscale"),(0,a.kt)("p",null,"This page covers how to use the Anyscale ecosystem within LangChain.\nIt is broken into two parts: installation and setup, and then references to specific Anyscale wrappers."),(0,a.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get an Anyscale Service URL, route and API key and set them as environment variables (",(0,a.kt)("inlineCode",{parentName:"li"},"ANYSCALE_SERVICE_URL"),",",(0,a.kt)("inlineCode",{parentName:"li"},"ANYSCALE_SERVICE_ROUTE"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ANYSCALE_SERVICE_TOKEN"),"). "),(0,a.kt)("li",{parentName:"ul"},"Please see ",(0,a.kt)("a",{parentName:"li",href:"https://docs.anyscale.com/productionize/services-v2/get-started"},"the Anyscale docs")," for more details.")),(0,a.kt)("h2",{id:"wrappers"},"Wrappers"),(0,a.kt)("h3",{id:"llm"},"LLM"),(0,a.kt)("p",null,"There exists an Anyscale LLM wrapper, which you can access with "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "Anyscale", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.anyscale.Anyscale.html", "title": "Anyscale"}]--\x3e\nfrom langchain.llms import Anyscale\n')))}d.isMDXComponent=!0}}]);
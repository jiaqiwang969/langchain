"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="Stripe",s={unversionedId:"integrations/providers/stripe",id:"integrations/providers/stripe",title:"Stripe",description:"Stripe is an Irish-American financial services and software as a service (SaaS) company. It offers payment-processing software and application programming interfaces for e-commerce websites and mobile applications.",source:"@site/docs/integrations/providers/stripe.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/stripe",permalink:"/langchain/docs/integrations/providers/stripe",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"StochasticAI",permalink:"/langchain/docs/integrations/providers/stochasticai"},next:{title:"Supabase (Postgres)",permalink:"/langchain/docs/integrations/providers/supabase"}},c={},p=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Document Loader",id:"document-loader",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stripe"},"Stripe"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://stripe.com/en-ca"},"Stripe")," is an Irish-American financial services and software as a service (SaaS) company. It offers payment-processing software and application programming interfaces for e-commerce websites and mobile applications.")),(0,a.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/integrations/document_loaders/stripe.html"},"setup instructions"),"."),(0,a.kt)("h2",{id:"document-loader"},"Document Loader"),(0,a.kt)("p",null,"See a ",(0,a.kt)("a",{parentName:"p",href:"/docs/integrations/document_loaders/stripe"},"usage example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "StripeLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.stripe.StripeLoader.html", "title": "Stripe"}]--\x3e\nfrom langchain.document_loaders import StripeLoader\n')))}d.isMDXComponent=!0}}]);
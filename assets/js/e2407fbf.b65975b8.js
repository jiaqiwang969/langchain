"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||c;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const c={},a="Tencent COS Directory",i={unversionedId:"integrations/document_loaders/tencent_cos_directory",id:"integrations/document_loaders/tencent_cos_directory",title:"Tencent COS Directory",description:"This covers how to load document objects from a Tencent COS Directory.",source:"@site/docs/integrations/document_loaders/tencent_cos_directory.md",sourceDirName:"integrations/document_loaders",slug:"/integrations/document_loaders/tencent_cos_directory",permalink:"/langchain/docs/integrations/document_loaders/tencent_cos_directory",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Telegram",permalink:"/langchain/docs/integrations/document_loaders/telegram"},next:{title:"Tencent COS File",permalink:"/langchain/docs/integrations/document_loaders/tencent_cos_file"}},l={},s=[{value:"Specifying a prefix",id:"specifying-a-prefix",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tencent-cos-directory"},"Tencent COS Directory"),(0,o.kt)("p",null,"This covers how to load document objects from a ",(0,o.kt)("inlineCode",{parentName:"p"},"Tencent COS Directory"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"#! pip install cos-python-sdk-v5\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "TencentCOSDirectoryLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.tencent_cos_directory.TencentCOSDirectoryLoader.html", "title": "Tencent COS Directory"}]--\x3e\nfrom langchain.document_loaders import TencentCOSDirectoryLoader\nfrom qcloud_cos import CosConfig\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'conf = CosConfig(\n    Region="your cos region",\n    SecretId="your cos secret_id",\n    SecretKey="your cos secret_key",\n)\nloader = TencentCOSDirectoryLoader(conf=conf, bucket="you_cos_bucket")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"loader.load()\n")),(0,o.kt)("h2",{id:"specifying-a-prefix"},"Specifying a prefix"),(0,o.kt)("p",null,"You can also specify a prefix for more finegrained control over what files to load."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'loader = TencentCOSDirectoryLoader(conf=conf, bucket="you_cos_bucket", prefix="fake")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"loader.load()\n")))}u.isMDXComponent=!0}}]);
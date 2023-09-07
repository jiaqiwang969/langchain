"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37039],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={},a="Microsoft OneDrive",c={unversionedId:"integrations/providers/microsoft_onedrive",id:"integrations/providers/microsoft_onedrive",title:"Microsoft OneDrive",description:"Microsoft OneDrive (formerly SkyDrive) is a file-hosting service operated by Microsoft.",source:"@site/docs/integrations/providers/microsoft_onedrive.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/microsoft_onedrive",permalink:"/langchain/docs/integrations/providers/microsoft_onedrive",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Metal",permalink:"/langchain/docs/integrations/providers/metal"},next:{title:"Microsoft PowerPoint",permalink:"/langchain/docs/integrations/providers/microsoft_powerpoint"}},s={},l=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Document Loader",id:"document-loader",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"microsoft-onedrive"},"Microsoft OneDrive"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OneDrive"},"Microsoft OneDrive")," (formerly ",(0,o.kt)("inlineCode",{parentName:"p"},"SkyDrive"),") is a file-hosting service operated by Microsoft.")),(0,o.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,o.kt)("p",null,"First, you need to install a python package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install o365\n")),(0,o.kt)("p",null,"Then follow instructions ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/document_loaders/microsoft_onedrive.html"},"here"),"."),(0,o.kt)("h2",{id:"document-loader"},"Document Loader"),(0,o.kt)("p",null,"See a ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/document_loaders/microsoft_onedrive"},"usage example"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OneDriveLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.onedrive.OneDriveLoader.html", "title": "Microsoft OneDrive"}]--\x3e\nfrom langchain.document_loaders import OneDriveLoader\n')))}u.isMDXComponent=!0}}]);
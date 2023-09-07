"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={},i="XML",l={unversionedId:"integrations/document_loaders/xml",id:"integrations/document_loaders/xml",title:"XML",description:"The UnstructuredXMLLoader is used to load XML files. The loader works with .xml files. The page content will be the text extracted from the XML tags.",source:"@site/docs/integrations/document_loaders/xml.md",sourceDirName:"integrations/document_loaders",slug:"/integrations/document_loaders/xml",permalink:"/langchain/docs/integrations/document_loaders/xml",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Wikipedia",permalink:"/langchain/docs/integrations/document_loaders/wikipedia"},next:{title:"Xorbits Pandas DataFrame",permalink:"/langchain/docs/integrations/document_loaders/xorbits"}},c={},d=[],s=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const u={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"xml"},"XML"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"UnstructuredXMLLoader")," is used to load ",(0,o.kt)("inlineCode",{parentName:"p"},"XML")," files. The loader works with ",(0,o.kt)("inlineCode",{parentName:"p"},".xml")," files. The page content will be the text extracted from the XML tags."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "UnstructuredXMLLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.xml.UnstructuredXMLLoader.html", "title": "XML"}]--\x3e\nfrom langchain.document_loaders import UnstructuredXMLLoader\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'loader = UnstructuredXMLLoader(\n    "example_data/factbook.xml",\n)\ndocs = loader.load()\ndocs[0]\n')),(0,o.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Document(page_content='United States\\n\\nWashington, DC\\n\\nJoe Biden\\n\\nBaseball\\n\\nCanada\\n\\nOttawa\\n\\nJustin Trudeau\\n\\nHockey\\n\\nFrance\\n\\nParis\\n\\nEmmanuel Macron\\n\\nSoccer\\n\\nTrinidad & Tobado\\n\\nPort of Spain\\n\\nKeith Rowley\\n\\nTrack & Field', metadata={'source': 'example_data/factbook.xml'})\n"))))}f.isMDXComponent=!0}}]);
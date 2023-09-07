"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>_,frontMatter:()=>p,metadata:()=>d,toc:()=>f});var r=n(87462),o=(n(67294),n(3905));const a=(s="CodeOutputBlock",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var s;const l={toc:[]},i="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# This is a long document we can split up.\nwith open('../../../state_of_the_union.txt') as f:\n    state_of_the_union = f.read()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.text_splitter import RecursiveCharacterTextSplitter\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"text_splitter = RecursiveCharacterTextSplitter(\n    # Set a really small chunk size, just to show.\n    chunk_size = 100,\n    chunk_overlap  = 20,\n    length_function = len,\n    is_separator_regex = False,\n)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"texts = text_splitter.create_documents([state_of_the_union])\nprint(texts[0])\nprint(texts[1])\n")),(0,o.kt)(a,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    page_content='Madam Speaker, Madam Vice President, our First Lady and Second Gentleman. Members of Congress and' lookup_str='' metadata={} lookup_index=0\n    page_content='of Congress and the Cabinet. Justices of the Supreme Court. My fellow Americans.' lookup_str='' metadata={} lookup_index=0\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"text_splitter.split_text(state_of_the_union)[:2]\n")),(0,o.kt)(a,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    ['Madam Speaker, Madam Vice President, our First Lady and Second Gentleman. Members of Congress and',\n     'of Congress and the Cabinet. Justices of the Supreme Court. My fellow Americans.']\n"))))}c.isMDXComponent=!0;const p={},u="Recursively split by character",d={unversionedId:"modules/data_connection/document_transformers/text_splitters/recursive_text_splitter",id:"modules/data_connection/document_transformers/text_splitters/recursive_text_splitter",title:"Recursively split by character",description:'This text splitter is the recommended one for generic text. It is parameterized by a list of characters. It tries to split on them in order until the chunks are small enough. The default list is ["\\n\\n", "\\n", " ", ""]. This has the effect of trying to keep all paragraphs (and then sentences, and then words) together as long as possible, as those would generically seem to be the strongest semantically related pieces of text.',source:"@site/docs/modules/data_connection/document_transformers/text_splitters/recursive_text_splitter.mdx",sourceDirName:"modules/data_connection/document_transformers/text_splitters",slug:"/modules/data_connection/document_transformers/text_splitters/recursive_text_splitter",permalink:"/langchain/docs/modules/data_connection/document_transformers/text_splitters/recursive_text_splitter",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MarkdownHeaderTextSplitter",permalink:"/langchain/docs/modules/data_connection/document_transformers/text_splitters/markdown_header_metadata"},next:{title:"Split by tokens",permalink:"/langchain/docs/modules/data_connection/document_transformers/text_splitters/split_by_token"}},m={},f=[],h={toc:f},y="wrapper";function _(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"recursively-split-by-character"},"Recursively split by character"),(0,o.kt)("p",null,"This text splitter is the recommended one for generic text. It is parameterized by a list of characters. It tries to split on them in order until the chunks are small enough. The default list is ",(0,o.kt)("inlineCode",{parentName:"p"},'["\\n\\n", "\\n", " ", ""]'),". This has the effect of trying to keep all paragraphs (and then sentences, and then words) together as long as possible, as those would generically seem to be the strongest semantically related pieces of text."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"How the text is split: by list of characters."),(0,o.kt)("li",{parentName:"ol"},"How the chunk size is measured: by number of characters.")),(0,o.kt)(c,{mdxType:"Example"}))}_.isMDXComponent=!0}}]);
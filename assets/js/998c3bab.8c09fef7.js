"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},a="PubMed",s={unversionedId:"integrations/retrievers/pubmed",id:"integrations/retrievers/pubmed",title:"PubMed",description:"PubMed\xae by The National Center for Biotechnology Information, National Library of Medicine comprises more than 35 million citations for biomedical literature from MEDLINE, life science journals, and online books. Citations may include links to full text content from PubMed Central and publisher web sites.",source:"@site/docs/integrations/retrievers/pubmed.md",sourceDirName:"integrations/retrievers",slug:"/integrations/retrievers/pubmed",permalink:"/langchain/docs/integrations/retrievers/pubmed",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Pinecone Hybrid Search",permalink:"/langchain/docs/integrations/retrievers/pinecone_hybrid_search"},next:{title:"RePhraseQueryRetriever",permalink:"/langchain/docs/integrations/retrievers/re_phrase"}},l={},c=[],d=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const p={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pubmed"},"PubMed"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/"},"PubMed\xae")," by ",(0,o.kt)("inlineCode",{parentName:"p"},"The National Center for Biotechnology Information, National Library of Medicine")," comprises more than 35 million citations for biomedical literature from ",(0,o.kt)("inlineCode",{parentName:"p"},"MEDLINE"),", life science journals, and online books. Citations may include links to full text content from ",(0,o.kt)("inlineCode",{parentName:"p"},"PubMed Central")," and publisher web sites.")),(0,o.kt)("p",null,"This notebook goes over how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"PubMed")," as a retriever"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "PubMedRetriever", "source": "langchain.retrievers", "docs": "https://api.python.langchain.com/en/latest/retrievers/langchain.retrievers.pubmed.PubMedRetriever.html", "title": "PubMed"}]--\x3e\nfrom langchain.retrievers import PubMedRetriever\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"retriever = PubMedRetriever()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'retriever.get_relevant_documents("chatgpt")\n')),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    [Document(page_content='', metadata={'uid': '37549050', 'Title': 'ChatGPT: \"To Be or Not to Be\" in Bikini Bottom.', 'Published': '--', 'Copyright Information': ''}),\n     Document(page_content=\"BACKGROUND: ChatGPT is a large language model that has performed well on professional examinations in the fields of medicine, law, and business. However, it is unclear how ChatGPT would perform on an examination assessing professionalism and situational judgement for doctors.\\nOBJECTIVE: We evaluated the performance of ChatGPT on the Situational Judgement Test (SJT): a national examination taken by all final-year medical students in the United Kingdom. This examination is designed to assess attributes such as communication, teamwork, patient safety, prioritization skills, professionalism, and ethics.\\nMETHODS: All questions from the UK Foundation Programme Office's (UKFPO's) 2023 SJT practice examination were inputted into ChatGPT. For each question, ChatGPT's answers and rationales were recorded and assessed on the basis of the official UK Foundation Programme Office scoring template. Questions were categorized into domains of Good Medical Practice on the basis of the domains referenced in the rationales provided in the scoring sheet. Questions without clear domain links were screened by reviewers and assigned one or multiple domains. ChatGPT's overall performance, as well as its performance across the domains of Good Medical Practice, was evaluated.\\nRESULTS: Overall, ChatGPT performed well, scoring 76% on the SJT but scoring full marks on only a few questions (9%), which may reflect possible flaws in ChatGPT's situational judgement or inconsistencies in the reasoning across questions (or both) in the examination itself. ChatGPT demonstrated consistent performance across the 4 outlined domains in Good Medical Practice for doctors.\\nCONCLUSIONS: Further research is needed to understand the potential applications of large language models, such as ChatGPT, in medical education for standardizing questions and providing consistent rationales for examinations assessing professionalism and ethics.\", metadata={'uid': '37548997', 'Title': 'Performance of ChatGPT on the Situational Judgement Test-A Professional Dilemmas-Based Examination for Doctors in the United Kingdom.', 'Published': '2023-08-07', 'Copyright Information': '\xa9Robin J Borchert, Charlotte R Hickman, Jack Pepys, Timothy J Sadler. Originally published in JMIR Medical Education (https://mededu.jmir.org), 07.08.2023.'}),\n     Document(page_content='', metadata={'uid': '37548971', 'Title': \"Large Language Models Answer Medical Questions Accurately, but Can't Match Clinicians' Knowledge.\", 'Published': '2023-08-07', 'Copyright Information': ''})]\n"))))}f.isMDXComponent=!0}}]);
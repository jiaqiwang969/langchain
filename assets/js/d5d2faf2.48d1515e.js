"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(p,".").concat(d)]||u[d]||k[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},i="AINetwork",l={unversionedId:"integrations/providers/ainetwork",id:"integrations/providers/ainetwork",title:"AINetwork",description:"AI Network is a layer 1 blockchain designed to accommodate",source:"@site/docs/integrations/providers/ainetwork.mdx",sourceDirName:"integrations/providers",slug:"/integrations/providers/ainetwork",permalink:"/langchain/docs/integrations/providers/ainetwork",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Aim",permalink:"/langchain/docs/integrations/providers/aim_tracking"},next:{title:"Airbyte",permalink:"/langchain/docs/integrations/providers/airbyte"}},p={},c=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Toolkit",id:"toolkit",level:2}],s={toc:c},u="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ainetwork"},"AINetwork"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://www.ainetwork.ai/build-on-ain"},"AI Network")," is a layer 1 blockchain designed to accommodate\nlarge-scale AI models, utilizing a decentralized GPU network powered by the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ainetwork.ai/token"},"$AIN token"),", enriching AI-driven ",(0,o.kt)("inlineCode",{parentName:"p"},"NFTs")," (",(0,o.kt)("inlineCode",{parentName:"p"},"AINFTs"),").")),(0,o.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,o.kt)("p",null,"You need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"ain-py")," python package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install ain-py\n")),(0,o.kt)("p",null,"You need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"AIN_BLOCKCHAIN_ACCOUNT_PRIVATE_KEY")," environmental variable to your AIN Blockchain Account Private Key."),(0,o.kt)("h2",{id:"toolkit"},"Toolkit"),(0,o.kt)("p",null,"See a ",(0,o.kt)("a",{parentName:"p",href:"/docs/integrations/toolkits/ainetwork"},"usage example"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "AINetworkToolkit", "source": "langchain.agents.agent_toolkits.ainetwork.toolkit", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.agent_toolkits.ainetwork.toolkit.AINetworkToolkit.html", "title": "AINetwork"}]--\x3e\nfrom langchain.agents.agent_toolkits.ainetwork.toolkit import AINetworkToolkit\n')))}k.isMDXComponent=!0}}]);
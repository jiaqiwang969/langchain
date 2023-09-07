"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={},i="Huawei OBS File",c={unversionedId:"integrations/document_loaders/huawei_obs_file",id:"integrations/document_loaders/huawei_obs_file",title:"Huawei OBS File",description:"The following code demonstrates how to load an object from the Huawei OBS (Object Storage Service) as document.",source:"@site/docs/integrations/document_loaders/huawei_obs_file.md",sourceDirName:"integrations/document_loaders",slug:"/integrations/document_loaders/huawei_obs_file",permalink:"/langchain/docs/integrations/document_loaders/huawei_obs_file",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Huawei OBS Directory",permalink:"/langchain/docs/integrations/document_loaders/huawei_obs_directory"},next:{title:"HuggingFace dataset",permalink:"/langchain/docs/integrations/document_loaders/hugging_face_dataset"}},l={},s=[{value:"Each Loader with Separate Authentication Information",id:"each-loader-with-separate-authentication-information",level:2},{value:"Get Authentication Information from ECS",id:"get-authentication-information-from-ecs",level:2},{value:"Access a Publicly Accessible Object",id:"access-a-publicly-accessible-object",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"huawei-obs-file"},"Huawei OBS File"),(0,a.kt)("p",null,"The following code demonstrates how to load an object from the Huawei OBS (Object Storage Service) as document."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Install the required package\n# pip install esdk-obs-python\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OBSFileLoader", "source": "langchain.document_loaders.obs_file", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.obs_file.OBSFileLoader.html", "title": "Huawei OBS File"}]--\x3e\nfrom langchain.document_loaders.obs_file import OBSFileLoader\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'endpoint = "your-endpoint"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from obs import ObsClient\nobs_client = ObsClient(access_key_id="your-access-key", secret_access_key="your-secret-key", server=endpoint)\nloader = OBSFileLoader("your-bucket-name", "your-object-key", client=obs_client)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"loader.load()\n")),(0,a.kt)("h2",{id:"each-loader-with-separate-authentication-information"},"Each Loader with Separate Authentication Information"),(0,a.kt)("p",null,"If you don't need to reuse OBS connections between different loaders, you can directly configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"config"),". The loader will use the config information to initialize its own OBS client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Configure your access credentials\\n\nconfig = {\n    "ak": "your-access-key",\n    "sk": "your-secret-key"\n}\nloader = OBSFileLoader("your-bucket-name", "your-object-key",endpoint=endpoint, config=config)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"loader.load()\n")),(0,a.kt)("h2",{id:"get-authentication-information-from-ecs"},"Get Authentication Information from ECS"),(0,a.kt)("p",null,"If your langchain is deployed on Huawei Cloud ECS and ",(0,a.kt)("a",{parentName:"p",href:"https://support.huaweicloud.com/intl/en-us/usermanual-ecs/ecs_03_0166.html#section7"},"Agency is set up"),", the loader can directly get the security token from ECS without needing access key and secret key. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'config = {"get_token_from_ecs": True}\nloader = OBSFileLoader("your-bucket-name", "your-object-key", endpoint=endpoint, config=config)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"loader.load()\n")),(0,a.kt)("h2",{id:"access-a-publicly-accessible-object"},"Access a Publicly Accessible Object"),(0,a.kt)("p",null,"If the object you want to access allows anonymous user access (anonymous users have ",(0,a.kt)("inlineCode",{parentName:"p"},"GetObject")," permission), you can directly load the object without configuring the ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'loader = OBSFileLoader("your-bucket-name", "your-object-key", endpoint=endpoint)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"loader.load()\n")))}d.isMDXComponent=!0}}]);
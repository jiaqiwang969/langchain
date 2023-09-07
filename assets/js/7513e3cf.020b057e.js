"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46858],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),i=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},c=function(t){var e=i(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=i(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,d(d({ref:e},c),{},{components:n})):r.createElement(f,d({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,d=new Array(o);d[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:a,d[1]=s;for(var i=2;i<o;i++)d[i]=n[i];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23534:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={},d="TSV",s={unversionedId:"integrations/document_loaders/tsv",id:"integrations/document_loaders/tsv",title:"TSV",description:"A tab-separated values (TSV) file is a simple, text-based file format for storing tabular data.[3] Records are separated by newlines, and values within a record are separated by tab characters.",source:"@site/docs/integrations/document_loaders/tsv.md",sourceDirName:"integrations/document_loaders",slug:"/integrations/document_loaders/tsv",permalink:"/langchain/docs/integrations/document_loaders/tsv",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Trello",permalink:"/langchain/docs/integrations/document_loaders/trello"},next:{title:"Twitter",permalink:"/langchain/docs/integrations/document_loaders/twitter"}},l={},i=[{value:"<code>UnstructuredTSVLoader</code>",id:"unstructuredtsvloader",level:2}],c=(u="CodeOutputBlock",function(t){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)});var u;const p={toc:i},m="wrapper";function f(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tsv"},"TSV"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tab-separated_values"},"tab-separated values (TSV)")," file is a simple, text-based file format for storing tabular data.","[3]"," Records are separated by newlines, and values within a record are separated by tab characters.")),(0,a.kt)("h2",{id:"unstructuredtsvloader"},(0,a.kt)("inlineCode",{parentName:"h2"},"UnstructuredTSVLoader")),(0,a.kt)("p",null,"You can also load the table using the ",(0,a.kt)("inlineCode",{parentName:"p"},"UnstructuredTSVLoader"),". One advantage of using ",(0,a.kt)("inlineCode",{parentName:"p"},"UnstructuredTSVLoader")," is that if you use it in ",(0,a.kt)("inlineCode",{parentName:"p"},'"elements"')," mode, an HTML representation of the table will be available in the metadata."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "UnstructuredTSVLoader", "source": "langchain.document_loaders.tsv", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.tsv.UnstructuredTSVLoader.html", "title": "TSV"}]--\x3e\nfrom langchain.document_loaders.tsv import UnstructuredTSVLoader\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'loader = UnstructuredTSVLoader(\n    file_path="example_data/mlb_teams_2012.csv", mode="elements"\n)\ndocs = loader.load()\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'print(docs[0].metadata["text_as_html"])\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    <table border="1" class="dataframe">\n      <tbody>\n        <tr>\n          <td>Nationals,     81.34, 98</td>\n        </tr>\n        <tr>\n          <td>Reds,          82.20, 97</td>\n        </tr>\n        <tr>\n          <td>Yankees,      197.96, 95</td>\n        </tr>\n        <tr>\n          <td>Giants,       117.62, 94</td>\n        </tr>\n        <tr>\n          <td>Braves,        83.31, 94</td>\n        </tr>\n        <tr>\n          <td>Athletics,     55.37, 94</td>\n        </tr>\n        <tr>\n          <td>Rangers,      120.51, 93</td>\n        </tr>\n        <tr>\n          <td>Orioles,       81.43, 93</td>\n        </tr>\n        <tr>\n          <td>Rays,          64.17, 90</td>\n        </tr>\n        <tr>\n          <td>Angels,       154.49, 89</td>\n        </tr>\n        <tr>\n          <td>Tigers,       132.30, 88</td>\n        </tr>\n        <tr>\n          <td>Cardinals,    110.30, 88</td>\n        </tr>\n        <tr>\n          <td>Dodgers,       95.14, 86</td>\n        </tr>\n        <tr>\n          <td>White Sox,     96.92, 85</td>\n        </tr>\n        <tr>\n          <td>Brewers,       97.65, 83</td>\n        </tr>\n        <tr>\n          <td>Phillies,     174.54, 81</td>\n        </tr>\n        <tr>\n          <td>Diamondbacks,  74.28, 81</td>\n        </tr>\n        <tr>\n          <td>Pirates,       63.43, 79</td>\n        </tr>\n        <tr>\n          <td>Padres,        55.24, 76</td>\n        </tr>\n        <tr>\n          <td>Mariners,      81.97, 75</td>\n        </tr>\n        <tr>\n          <td>Mets,          93.35, 74</td>\n        </tr>\n        <tr>\n          <td>Blue Jays,     75.48, 73</td>\n        </tr>\n        <tr>\n          <td>Royals,        60.91, 72</td>\n        </tr>\n        <tr>\n          <td>Marlins,      118.07, 69</td>\n        </tr>\n        <tr>\n          <td>Red Sox,      173.18, 69</td>\n        </tr>\n        <tr>\n          <td>Indians,       78.43, 68</td>\n        </tr>\n        <tr>\n          <td>Twins,         94.08, 66</td>\n        </tr>\n        <tr>\n          <td>Rockies,       78.06, 64</td>\n        </tr>\n        <tr>\n          <td>Cubs,          88.19, 61</td>\n        </tr>\n        <tr>\n          <td>Astros,        60.65, 55</td>\n        </tr>\n      </tbody>\n    </table>\n'))))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34851],{3905:(n,t,e)=>{e.d(t,{Zo:()=>d,kt:()=>g});var a=e(67294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function r(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function i(n,t){if(null==n)return{};var e,a,o=function(n,t){if(null==n)return{};var e,a,o={},l=Object.keys(n);for(a=0;a<l.length;a++)e=l[a],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)e=l[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var s=a.createContext({}),m=function(n){var t=a.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):r(r({},t),n)),e},d=function(n){var t=m(n.components);return a.createElement(s.Provider,{value:t},n.children)},c="mdxType",p={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(n,t){var e=n.components,o=n.mdxType,l=n.originalType,s=n.parentName,d=i(n,["components","mdxType","originalType","parentName"]),c=m(e),u=o,g=c["".concat(s,".").concat(u)]||c[u]||p[u]||l;return e?a.createElement(g,r(r({ref:t},d),{},{components:e})):a.createElement(g,r({ref:t},d))}));function g(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var l=e.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=n,i[c]="string"==typeof n?n:o,r[1]=i;for(var m=2;m<l;m++)r[m]=e[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,e)}u.displayName="MDXCreateElement"},94091:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=e(87462),o=(e(67294),e(3905));const l={},r="Xorbits Pandas DataFrame",i={unversionedId:"integrations/document_loaders/xorbits",id:"integrations/document_loaders/xorbits",title:"Xorbits Pandas DataFrame",description:"This notebook goes over how to load data from a xorbits.pandas DataFrame.",source:"@site/docs/integrations/document_loaders/xorbits.md",sourceDirName:"integrations/document_loaders",slug:"/integrations/document_loaders/xorbits",permalink:"/langchain/docs/integrations/document_loaders/xorbits",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"XML",permalink:"/langchain/docs/integrations/document_loaders/xml"},next:{title:"Loading documents from a YouTube url",permalink:"/langchain/docs/integrations/document_loaders/youtube_audio"}},s={},m=[],d=n=>function(t){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=d("HTMLOutputBlock"),p=d("CodeOutputBlock"),u={toc:m},g="wrapper";function y(n){let{components:t,...e}=n;return(0,o.kt)(g,(0,a.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"xorbits-pandas-dataframe"},"Xorbits Pandas DataFrame"),(0,o.kt)("p",null,"This notebook goes over how to load data from a ",(0,o.kt)("a",{parentName:"p",href:"https://doc.xorbits.io/en/latest/reference/pandas/frame.html"},"xorbits.pandas")," DataFrame."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"#!pip install xorbits\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import xorbits.pandas as pd\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'df = pd.read_csv("example_data/mlb_teams_2012.csv")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"df.head()\n")),(0,o.kt)(c,{mdxType:"HTMLOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  0%|          |   0.00/100 [00:00<?, ?it/s]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n<style scoped>\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n</style>\n<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>Team</th>\n      <th>"Payroll (millions)"</th>\n      <th>"Wins"</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>0</th>\n      <td>Nationals</td>\n      <td>81.34</td>\n      <td>98</td>\n    </tr>\n    <tr>\n      <th>1</th>\n      <td>Reds</td>\n      <td>82.20</td>\n      <td>97</td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td>Yankees</td>\n      <td>197.96</td>\n      <td>95</td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td>Giants</td>\n      <td>117.62</td>\n      <td>94</td>\n    </tr>\n    <tr>\n      <th>4</th>\n      <td>Braves</td>\n      <td>83.31</td>\n      <td>94</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "XorbitsLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.xorbits.XorbitsLoader.html", "title": "Xorbits Pandas DataFrame"}]--\x3e\nfrom langchain.document_loaders import XorbitsLoader\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'loader = XorbitsLoader(df, page_content_column="Team")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"loader.load()\n")),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      0%|          |   0.00/100 [00:00<?, ?it/s]\n\n\n\n\n\n    [Document(page_content='Nationals', metadata={' \"Payroll (millions)\"': 81.34, ' \"Wins\"': 98}),\n     Document(page_content='Reds', metadata={' \"Payroll (millions)\"': 82.2, ' \"Wins\"': 97}),\n     Document(page_content='Yankees', metadata={' \"Payroll (millions)\"': 197.96, ' \"Wins\"': 95}),\n     Document(page_content='Giants', metadata={' \"Payroll (millions)\"': 117.62, ' \"Wins\"': 94}),\n     Document(page_content='Braves', metadata={' \"Payroll (millions)\"': 83.31, ' \"Wins\"': 94}),\n     Document(page_content='Athletics', metadata={' \"Payroll (millions)\"': 55.37, ' \"Wins\"': 94}),\n     Document(page_content='Rangers', metadata={' \"Payroll (millions)\"': 120.51, ' \"Wins\"': 93}),\n     Document(page_content='Orioles', metadata={' \"Payroll (millions)\"': 81.43, ' \"Wins\"': 93}),\n     Document(page_content='Rays', metadata={' \"Payroll (millions)\"': 64.17, ' \"Wins\"': 90}),\n     Document(page_content='Angels', metadata={' \"Payroll (millions)\"': 154.49, ' \"Wins\"': 89}),\n     Document(page_content='Tigers', metadata={' \"Payroll (millions)\"': 132.3, ' \"Wins\"': 88}),\n     Document(page_content='Cardinals', metadata={' \"Payroll (millions)\"': 110.3, ' \"Wins\"': 88}),\n     Document(page_content='Dodgers', metadata={' \"Payroll (millions)\"': 95.14, ' \"Wins\"': 86}),\n     Document(page_content='White Sox', metadata={' \"Payroll (millions)\"': 96.92, ' \"Wins\"': 85}),\n     Document(page_content='Brewers', metadata={' \"Payroll (millions)\"': 97.65, ' \"Wins\"': 83}),\n     Document(page_content='Phillies', metadata={' \"Payroll (millions)\"': 174.54, ' \"Wins\"': 81}),\n     Document(page_content='Diamondbacks', metadata={' \"Payroll (millions)\"': 74.28, ' \"Wins\"': 81}),\n     Document(page_content='Pirates', metadata={' \"Payroll (millions)\"': 63.43, ' \"Wins\"': 79}),\n     Document(page_content='Padres', metadata={' \"Payroll (millions)\"': 55.24, ' \"Wins\"': 76}),\n     Document(page_content='Mariners', metadata={' \"Payroll (millions)\"': 81.97, ' \"Wins\"': 75}),\n     Document(page_content='Mets', metadata={' \"Payroll (millions)\"': 93.35, ' \"Wins\"': 74}),\n     Document(page_content='Blue Jays', metadata={' \"Payroll (millions)\"': 75.48, ' \"Wins\"': 73}),\n     Document(page_content='Royals', metadata={' \"Payroll (millions)\"': 60.91, ' \"Wins\"': 72}),\n     Document(page_content='Marlins', metadata={' \"Payroll (millions)\"': 118.07, ' \"Wins\"': 69}),\n     Document(page_content='Red Sox', metadata={' \"Payroll (millions)\"': 173.18, ' \"Wins\"': 69}),\n     Document(page_content='Indians', metadata={' \"Payroll (millions)\"': 78.43, ' \"Wins\"': 68}),\n     Document(page_content='Twins', metadata={' \"Payroll (millions)\"': 94.08, ' \"Wins\"': 66}),\n     Document(page_content='Rockies', metadata={' \"Payroll (millions)\"': 78.06, ' \"Wins\"': 64}),\n     Document(page_content='Cubs', metadata={' \"Payroll (millions)\"': 88.19, ' \"Wins\"': 61}),\n     Document(page_content='Astros', metadata={' \"Payroll (millions)\"': 60.65, ' \"Wins\"': 55})]\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Use lazy load for larger table, which won't read the full table into memory\nfor i in loader.lazy_load():\n    print(i)\n")),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      0%|          |   0.00/100 [00:00<?, ?it/s]\n\n\n    page_content='Nationals' metadata={' \"Payroll (millions)\"': 81.34, ' \"Wins\"': 98}\n    page_content='Reds' metadata={' \"Payroll (millions)\"': 82.2, ' \"Wins\"': 97}\n    page_content='Yankees' metadata={' \"Payroll (millions)\"': 197.96, ' \"Wins\"': 95}\n    page_content='Giants' metadata={' \"Payroll (millions)\"': 117.62, ' \"Wins\"': 94}\n    page_content='Braves' metadata={' \"Payroll (millions)\"': 83.31, ' \"Wins\"': 94}\n    page_content='Athletics' metadata={' \"Payroll (millions)\"': 55.37, ' \"Wins\"': 94}\n    page_content='Rangers' metadata={' \"Payroll (millions)\"': 120.51, ' \"Wins\"': 93}\n    page_content='Orioles' metadata={' \"Payroll (millions)\"': 81.43, ' \"Wins\"': 93}\n    page_content='Rays' metadata={' \"Payroll (millions)\"': 64.17, ' \"Wins\"': 90}\n    page_content='Angels' metadata={' \"Payroll (millions)\"': 154.49, ' \"Wins\"': 89}\n    page_content='Tigers' metadata={' \"Payroll (millions)\"': 132.3, ' \"Wins\"': 88}\n    page_content='Cardinals' metadata={' \"Payroll (millions)\"': 110.3, ' \"Wins\"': 88}\n    page_content='Dodgers' metadata={' \"Payroll (millions)\"': 95.14, ' \"Wins\"': 86}\n    page_content='White Sox' metadata={' \"Payroll (millions)\"': 96.92, ' \"Wins\"': 85}\n    page_content='Brewers' metadata={' \"Payroll (millions)\"': 97.65, ' \"Wins\"': 83}\n    page_content='Phillies' metadata={' \"Payroll (millions)\"': 174.54, ' \"Wins\"': 81}\n    page_content='Diamondbacks' metadata={' \"Payroll (millions)\"': 74.28, ' \"Wins\"': 81}\n    page_content='Pirates' metadata={' \"Payroll (millions)\"': 63.43, ' \"Wins\"': 79}\n    page_content='Padres' metadata={' \"Payroll (millions)\"': 55.24, ' \"Wins\"': 76}\n    page_content='Mariners' metadata={' \"Payroll (millions)\"': 81.97, ' \"Wins\"': 75}\n    page_content='Mets' metadata={' \"Payroll (millions)\"': 93.35, ' \"Wins\"': 74}\n    page_content='Blue Jays' metadata={' \"Payroll (millions)\"': 75.48, ' \"Wins\"': 73}\n    page_content='Royals' metadata={' \"Payroll (millions)\"': 60.91, ' \"Wins\"': 72}\n    page_content='Marlins' metadata={' \"Payroll (millions)\"': 118.07, ' \"Wins\"': 69}\n    page_content='Red Sox' metadata={' \"Payroll (millions)\"': 173.18, ' \"Wins\"': 69}\n    page_content='Indians' metadata={' \"Payroll (millions)\"': 78.43, ' \"Wins\"': 68}\n    page_content='Twins' metadata={' \"Payroll (millions)\"': 94.08, ' \"Wins\"': 66}\n    page_content='Rockies' metadata={' \"Payroll (millions)\"': 78.06, ' \"Wins\"': 64}\n    page_content='Cubs' metadata={' \"Payroll (millions)\"': 88.19, ' \"Wins\"': 61}\n    page_content='Astros' metadata={' \"Payroll (millions)\"': 60.65, ' \"Wins\"': 55}\n"))))}y.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={},i="RSS Feeds",s={unversionedId:"integrations/document_loaders/rss",id:"integrations/document_loaders/rss",title:"RSS Feeds",description:"This covers how to load HTML news articles from a list of RSS feed URLs into a document format that we can use downstream.",source:"@site/docs/integrations/document_loaders/rss.md",sourceDirName:"integrations/document_loaders",slug:"/integrations/document_loaders/rss",permalink:"/langchain/docs/integrations/document_loaders/rss",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Rockset",permalink:"/langchain/docs/integrations/document_loaders/rockset"},next:{title:"RST",permalink:"/langchain/docs/integrations/document_loaders/rst"}},l={},d=[],c=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const p={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rss-feeds"},"RSS Feeds"),(0,r.kt)("p",null,"This covers how to load HTML news articles from a list of RSS feed URLs into a document format that we can use downstream."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install feedparser newspaper3k listparser\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "RSSFeedLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.rss.RSSFeedLoader.html", "title": "RSS Feeds"}]--\x3e\nfrom langchain.document_loaders import RSSFeedLoader\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'urls = ["https://news.ycombinator.com/rss"]\n')),(0,r.kt)("p",null,"Pass in urls to load them into Documents"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"loader = RSSFeedLoader(urls=urls)\ndata = loader.load()\nprint(len(data))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(data[0].page_content)\n")),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    (next Rich)\n    \n    04 August 2023\n    \n    Rich Hickey\n    \n    It is with a mixture of heartache and optimism that I announce today my (long planned) retirement from commercial software development, and my employment at Nubank. It\u2019s been thrilling to see Clojure and Datomic successfully applied at scale.\n    \n    I look forward to continuing to lead ongoing work maintaining and enhancing Clojure with Alex, Stu, Fogus and many others, as an independent developer once again. We have many useful things planned for 1.12 and beyond. The community remains friendly, mature and productive, and is taking Clojure into many interesting new domains.\n    \n    I want to highlight and thank Nubank for their ongoing sponsorship of Alex, Fogus and the core team, as well as the Clojure community at large.\n    \n    Stu will continue to lead the development of Datomic at Nubank, where the Datomic team grows and thrives. I\u2019m particularly excited to see where the new free availability of Datomic will lead.\n    \n    My time with Cognitect remains the highlight of my career. I have learned from absolutely everyone on our team, and am forever grateful to all for our interactions. There are too many people to thank here, but I must extend my sincerest appreciation and love to Stu and Justin for (repeatedly) taking a risk on me and my ideas, and for being the best of partners and friends, at all times fully embodying the notion of integrity. And of course to Alex Miller - who possesses in abundance many skills I lack, and without whose indomitable spirit, positivity and friendship Clojure would not have become what it did.\n    \n    I have made many friends through Clojure and Cognitect, and I hope to nurture those friendships moving forward.\n    \n    Retirement returns me to the freedom and independence I had when originally developing Clojure. The journey continues!\n"))),(0,r.kt)("p",null,"You can pass arguments to the NewsURLLoader which it uses to load articles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"loader = RSSFeedLoader(urls=urls, nlp=True)\ndata = loader.load()\nprint(len(data))\n")),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Error fetching or processing https://twitter.com/andrewmccalip/status/1687405505604734978, exception: You must `parse()` an article first!\n    Error processing entry https://twitter.com/andrewmccalip/status/1687405505604734978, exception: list index out of range\n\n\n    13\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data[0].metadata['keywords']\n")),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    ['nubank',\n     'alex',\n     'stu',\n     'taking',\n     'team',\n     'remains',\n     'rich',\n     'clojure',\n     'thank',\n     'planned',\n     'datomic']\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data[0].metadata['summary']\n")),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    'It\u2019s been thrilling to see Clojure and Datomic successfully applied at scale.\\nI look forward to continuing to lead ongoing work maintaining and enhancing Clojure with Alex, Stu, Fogus and many others, as an independent developer once again.\\nThe community remains friendly, mature and productive, and is taking Clojure into many interesting new domains.\\nI want to highlight and thank Nubank for their ongoing sponsorship of Alex, Fogus and the core team, as well as the Clojure community at large.\\nStu will continue to lead the development of Datomic at Nubank, where the Datomic team grows and thrives.'\n"))),(0,r.kt)("p",null,"You can also use an OPML file such as a Feedly export.  Pass in either a URL or the OPML contents."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'with open("example_data/sample_rss_feeds.opml", "r") as f:\n    loader = RSSFeedLoader(opml=f.read())\ndata = loader.load()\nprint(len(data))\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Error fetching http://www.engadget.com/rss-full.xml, exception: Error fetching http://www.engadget.com/rss-full.xml, exception: document declared as us-ascii, but parsed as utf-8\n\n\n    20\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data[0].page_content\n")),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    'The electric vehicle startup Fisker made a splash in Huntington Beach last night, showing off a range of new EVs it plans to build alongside the Fisker Ocean, which is slowly beginning deliveries in Europe and the US. With shades of Lotus circa 2010, it seems there\\'s something for most tastes, with a powerful four-door GT, a versatile pickup truck, and an affordable electric city car.\\n\\n\"We want the world to know that we have big plans and intend to move into several different segments, redefining each with our unique blend of design, innovation, and sustainability,\" said CEO Henrik Fisker.\\n\\nStarting with the cheapest, the Fisker PEAR\u2014a cutesy acronym for \"Personal Electric Automotive Revolution\"\u2014is said to use 35 percent fewer parts than other small EVs. Although it\\'s a smaller car, the PEAR seats six thanks to front and rear bench seats. Oh, and it has a frunk, which the company is calling the \"froot,\" something that will satisfy some British English speakers like Ars\\' friend and motoring journalist Jonny Smith.\\n\\nBut most exciting is the price\u2014starting at $29,900 and scheduled for 2025. Fisker plans to contract with Foxconn to build the PEAR in Lordstown, Ohio, meaning it would be eligible for federal tax incentives.\\n\\nAdvertisement\\n\\nThe Fisker Alaska is the company\\'s pickup truck, built on a modified version of the platform used by the Ocean. It has an extendable cargo bed, which can be as little as 4.5 feet (1,371 mm) or as much as 9.2 feet (2,804 mm) long. Fisker claims it will be both the lightest EV pickup on sale and the most sustainable pickup truck in the world. Range will be an estimated 230\u2013240 miles (370\u2013386 km).\\n\\nThis, too, is slated for 2025, and also at a relatively affordable price, starting at $45,400. Fisker hopes to build this car in North America as well, although it isn\\'t saying where that might take place.\\n\\nFinally, there\\'s the Ronin, a four-door GT that bears more than a passing resemblance to the Fisker Karma, Henrik Fisker\\'s 2012 creation. There\\'s no price for this one, but Fisker says its all-wheel drive powertrain will boast 1,000 hp (745 kW) and will hit 60 mph from a standing start in two seconds\u2014just about as fast as modern tires will allow. Expect a massive battery in this one, as Fisker says it\\'s targeting a 600-mile (956 km) range.\\n\\n\"Innovation and sustainability, along with design, are our three brand values. By 2027, we intend to produce the world\u2019s first climate-neutral vehicle, and as our customers reinvent their relationships with mobility, we want to be a leader in software-defined transportation,\" Fisker said.'\n"))))}h.isMDXComponent=!0}}]);
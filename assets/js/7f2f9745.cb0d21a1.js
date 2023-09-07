"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1,title:"Web scraping"},i=void 0,s={unversionedId:"use_cases/web_scraping",id:"use_cases/web_scraping",title:"Web scraping",description:"Open In Collab",source:"@site/docs/use_cases/web_scraping.md",sourceDirName:"use_cases",slug:"/use_cases/web_scraping",permalink:"/langchain/docs/use_cases/web_scraping",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Web scraping"},sidebar:"use_cases",previous:{title:"Tagging",permalink:"/langchain/docs/use_cases/tagging"},next:{title:"Agents",permalink:"/langchain/docs/use_cases/more/agents/"}},l={},c=[{value:"Use case",id:"use-case",level:2},{value:"Overview",id:"overview",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Loader",id:"loader",level:2},{value:"AsyncHtmlLoader",id:"asynchtmlloader",level:3},{value:"AsyncChromiumLoader",id:"asyncchromiumloader",level:3},{value:"Transformer",id:"transformer",level:2},{value:"HTML2Text",id:"html2text",level:3},{value:"Beautiful Soup",id:"beautiful-soup",level:3},{value:"Scraping with extraction",id:"scraping-with-extraction",level:2},{value:"LLM with function calling",id:"llm-with-function-calling",level:3},{value:"Define a schema",id:"define-a-schema",level:3},{value:"Run the web scraper w/ BeautifulSoup",id:"run-the-web-scraper-w-beautifulsoup",level:3},{value:"Research automation",id:"research-automation",level:2},{value:"Going deeper",id:"going-deeper",level:3}],p=(m="CodeOutputBlock",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const h={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/langchain-ai/langchain/blob/master/docs/extras/use_cases/web_scraping.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Collab"}))),(0,r.kt)("h2",{id:"use-case"},"Use case"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.langchain.dev/automating-web-research/"},"Web research")," is one of the killer LLM applications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users have ",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/GregKamradt/status/1679913813297225729?s=20"},"highlighted it")," as one of his top desired AI tools. "),(0,r.kt)("li",{parentName:"ul"},"OSS repos like ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/assafelovic/gpt-researcher"},"gpt-researcher")," are growing in popularity. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image description",src:n(69277).Z,width:"1659",height:"549"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Gathering content from the web has a few components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Search"),": Query to url (e.g., using ",(0,r.kt)("inlineCode",{parentName:"li"},"GoogleSearchAPIWrapper"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Loading"),": Url to HTML  (e.g., using ",(0,r.kt)("inlineCode",{parentName:"li"},"AsyncHtmlLoader"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"AsyncChromiumLoader"),", etc)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Transforming"),": HTML to formatted text (e.g., using ",(0,r.kt)("inlineCode",{parentName:"li"},"HTML2Text")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Beautiful Soup"),").")),(0,r.kt)("h2",{id:"quickstart"},"Quickstart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pip install -q openai langchain playwright beautifulsoup4\nplaywright install\n\n# Set env var OPENAI_API_KEY or load from a .env file:\n# import dotenv\n# dotenv.load_dotenv()\n")),(0,r.kt)("p",null,"Scraping HTML content using a headless instance of Chromium."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The async nature of the scraping process is handled using Python's asyncio library."),(0,r.kt)("li",{parentName:"ul"},"The actual interaction with the web pages is handled by Playwright.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "AsyncChromiumLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.chromium.AsyncChromiumLoader.html", "title": "Set env var OPENAI_API_KEY or load from a .env file:"}, {"imported": "BeautifulSoupTransformer", "source": "langchain.document_transformers", "docs": "https://api.python.langchain.com/en/latest/document_transformers/langchain.document_transformers.beautiful_soup_transformer.BeautifulSoupTransformer.html", "title": "Set env var OPENAI_API_KEY or load from a .env file:"}]--\x3e\nfrom langchain.document_loaders import AsyncChromiumLoader\nfrom langchain.document_transformers import BeautifulSoupTransformer\n\n# Load HTML\nloader = AsyncChromiumLoader(["https://www.wsj.com"])\nhtml = loader.load()\n')),(0,r.kt)("p",null,"Scrape text content tags such as ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>, <li>, <div>, and <a>")," tags from the HTML content:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<p>"),": The paragraph tag. It defines a paragraph in HTML and is used to group together related sentences and/or phrases.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<li>"),": The list item tag. It is used within ordered (",(0,r.kt)("inlineCode",{parentName:"p"},"<ol>"),") and unordered (",(0,r.kt)("inlineCode",{parentName:"p"},"<ul>"),") lists to define individual items within the list.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<div>"),": The division tag. It is a block-level element used to group other inline or block-level elements.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<a>"),": The anchor tag. It is used to define hyperlinks.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<span>"),":  an inline container used to mark up a part of a text, or a part of a document. "))),(0,r.kt)("p",null,"For many news websites (e.g., WSJ, CNN), headlines and summaries are all in ",(0,r.kt)("inlineCode",{parentName:"p"},"<span>")," tags."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Transform\nbs_transformer = BeautifulSoupTransformer()\ndocs_transformed = bs_transformer.transform_documents(html,tags_to_extract=["span"])\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Result\ndocs_transformed[0].page_content[0:500]\n")),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    'English EditionEnglish\u4e2d\u6587 (Chinese)\u65e5\u672c\u8a9e (Japanese) More Other Products from WSJBuy Side from WSJWSJ ShopWSJ Wine Other Products from WSJ Search Quotes and Companies Search Quotes and Companies 0.15% 0.03% 0.12% -0.42% 4.102% -0.69% -0.25% -0.15% -1.82% 0.24% 0.19% -1.10% About Evan His Family Reflects His Reporting How You Can Help Write a Message Life in Detention Latest News Get Email Updates Four Americans Released From Iranian Prison The Americans will remain under house arrest until they are '\n"))),(0,r.kt)("p",null,"These ",(0,r.kt)("inlineCode",{parentName:"p"},"Documents")," now are staged for downstream usage in various LLM apps, as discussed below."),(0,r.kt)("h2",{id:"loader"},"Loader"),(0,r.kt)("h3",{id:"asynchtmlloader"},"AsyncHtmlLoader"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"docs/integrations/document_loaders/async_html"},"AsyncHtmlLoader")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"aiohttp")," library to make asynchronous HTTP requests, suitable for simpler and lightweight scraping."),(0,r.kt)("h3",{id:"asyncchromiumloader"},"AsyncChromiumLoader"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"docs/integrations/document_loaders/async_chromium"},"AsyncChromiumLoader")," uses Playwright to launch a Chromium instance, which can handle JavaScript rendering and more complex web interactions."),(0,r.kt)("p",null,"Chromium is one of the browsers supported by Playwright, a library used to control browser automation. "),(0,r.kt)("p",null,"Headless mode means that the browser is running without a graphical user interface, which is commonly used for web scraping."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "AsyncHtmlLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.async_html.AsyncHtmlLoader.html", "title": "Set env var OPENAI_API_KEY or load from a .env file:"}]--\x3e\nfrom langchain.document_loaders import AsyncHtmlLoader\nurls = ["https://www.espn.com","https://lilianweng.github.io/posts/2023-06-23-agent/"]\nloader = AsyncHtmlLoader(urls)\ndocs = loader.load()\n')),(0,r.kt)("h2",{id:"transformer"},"Transformer"),(0,r.kt)("h3",{id:"html2text"},"HTML2Text"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"docs/integrations/document_transformers/html2text"},"HTML2Text")," provides a straightforward conversion of HTML content into plain text (with markdown-like formatting) without any specific tag manipulation. "),(0,r.kt)("p",null,"It's best suited for scenarios where the goal is to extract human-readable text without needing to manipulate specific HTML elements."),(0,r.kt)("h3",{id:"beautiful-soup"},"Beautiful Soup"),(0,r.kt)("p",null,"Beautiful Soup offers more fine-grained control over HTML content, enabling specific tag extraction, removal, and content cleaning. "),(0,r.kt)("p",null,"It's suited for cases where you want to extract specific information and clean up the HTML content according to your needs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "AsyncHtmlLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.async_html.AsyncHtmlLoader.html", "title": "Set env var OPENAI_API_KEY or load from a .env file:"}]--\x3e\nfrom langchain.document_loaders import AsyncHtmlLoader\nurls = ["https://www.espn.com", "https://lilianweng.github.io/posts/2023-06-23-agent/"]\nloader = AsyncHtmlLoader(urls)\ndocs = loader.load()\n')),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Fetching pages: 100%|#############################################################################################################| 2/2 [00:00<00:00,  7.01it/s]\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "Html2TextTransformer", "source": "langchain.document_transformers", "docs": "https://api.python.langchain.com/en/latest/document_transformers/langchain.document_transformers.html2text.Html2TextTransformer.html", "title": "Set env var OPENAI_API_KEY or load from a .env file:"}]--\x3e\nfrom langchain.document_transformers import Html2TextTransformer\nhtml2text = Html2TextTransformer()\ndocs_transformed = html2text.transform_documents(docs)\ndocs_transformed[0].page_content[0:500]\n')),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    "Skip to main content  Skip to navigation\\n\\n<\\n\\n>\\n\\nMenu\\n\\n## ESPN\\n\\n  * Search\\n\\n  *   * scores\\n\\n  * NFL\\n  * MLB\\n  * NBA\\n  * NHL\\n  * Soccer\\n  * NCAAF\\n  * \u2026\\n\\n    * Women\'s World Cup\\n    * LLWS\\n    * NCAAM\\n    * NCAAW\\n    * Sports Betting\\n    * Boxing\\n    * CFL\\n    * NCAA\\n    * Cricket\\n    * F1\\n    * Golf\\n    * Horse\\n    * MMA\\n    * NASCAR\\n    * NBA G League\\n    * Olympic Sports\\n    * PLL\\n    * Racing\\n    * RN BB\\n    * RN FB\\n    * Rugby\\n    * Tennis\\n    * WNBA\\n    * WWE\\n    * X Games\\n    * XFL\\n\\n  * More"\n'))),(0,r.kt)("h2",{id:"scraping-with-extraction"},"Scraping with extraction"),(0,r.kt)("h3",{id:"llm-with-function-calling"},"LLM with function calling"),(0,r.kt)("p",null,"Web scraping is challenging for many reasons. "),(0,r.kt)("p",null,"One of them is the changing nature of modern websites' layouts and content, which requires modifying scraping scripts to accommodate the changes."),(0,r.kt)("p",null,"Using Function (e.g., OpenAI) with an extraction chain, we avoid having to change your code constantly when websites change. "),(0,r.kt)("p",null,"We're using ",(0,r.kt)("inlineCode",{parentName:"p"},"gpt-3.5-turbo-0613")," to guarantee access to OpenAI Functions feature (although this might be available to everyone by time of writing). "),(0,r.kt)("p",null,"We're also keeping ",(0,r.kt)("inlineCode",{parentName:"p"},"temperature")," at ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to keep randomness of the LLM down."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ChatOpenAI", "source": "langchain.chat_models", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Set env var OPENAI_API_KEY or load from a .env file:"}]--\x3e\nfrom langchain.chat_models import ChatOpenAI\nllm = ChatOpenAI(temperature=0, model="gpt-3.5-turbo-0613")\n')),(0,r.kt)("h3",{id:"define-a-schema"},"Define a schema"),(0,r.kt)("p",null,"Next, you define a schema to specify what kind of data you want to extract. "),(0,r.kt)("p",null,"Here, the key names matter as they tell the LLM what kind of information they want. "),(0,r.kt)("p",null,"So, be as detailed as possible. "),(0,r.kt)("p",null,"In this example, we want to scrape only news article's name and summary from The Wall Street Journal website."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "create_extraction_chain", "source": "langchain.chains", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.openai_functions.extraction.create_extraction_chain.html", "title": "Set env var OPENAI_API_KEY or load from a .env file:"}]--\x3e\nfrom langchain.chains import create_extraction_chain\n\nschema = {\n    "properties": {\n        "news_article_title": {"type": "string"},\n        "news_article_summary": {"type": "string"},\n    },\n    "required": ["news_article_title", "news_article_summary"],\n}\n\ndef extract(content: str, schema: dict):\n    return create_extraction_chain(schema=schema, llm=llm).run(content)\n')),(0,r.kt)("h3",{id:"run-the-web-scraper-w-beautifulsoup"},"Run the web scraper w/ BeautifulSoup"),(0,r.kt)("p",null,"As shown above, we'll using ",(0,r.kt)("inlineCode",{parentName:"p"},"BeautifulSoupTransformer"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "RecursiveCharacterTextSplitter", "source": "langchain.text_splitter", "docs": "https://api.python.langchain.com/en/latest/text_splitter/langchain.text_splitter.RecursiveCharacterTextSplitter.html", "title": "Set env var OPENAI_API_KEY or load from a .env file:"}]--\x3e\nimport pprint\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\n\ndef scrape_with_playwright(urls, schema):\n    \n    loader = AsyncChromiumLoader(urls)\n    docs = loader.load()\n    bs_transformer = BeautifulSoupTransformer()\n    docs_transformed = bs_transformer.transform_documents(docs,tags_to_extract=["span"])\n    print("Extracting content with LLM")\n    \n    # Grab the first 1000 tokens of the site\n    splitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(chunk_size=1000, \n                                                                    chunk_overlap=0)\n    splits = splitter.split_documents(docs_transformed)\n    \n    # Process the first split \n    extracted_content = extract(\n        schema=schema, content=splits[0].page_content\n    )\n    pprint.pprint(extracted_content)\n    return extracted_content\n\nurls = ["https://www.wsj.com"]\nextracted_content = scrape_with_playwright(urls, schema=schema)\n')),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Extracting content with LLM\n    [{'news_article_summary': 'The Americans will remain under house arrest until '\n                              'they are allowed to return to the U.S. in coming '\n                              'weeks, following a monthslong diplomatic push by '\n                              'the Biden administration.',\n      'news_article_title': 'Four Americans Released From Iranian Prison'},\n     {'news_article_summary': 'Price pressures continued cooling last month, with '\n                              'the CPI rising a mild 0.2% from June, likely '\n                              'deterring the Federal Reserve from raising interest '\n                              'rates at its September meeting.',\n      'news_article_title': 'Cooler July Inflation Opens Door to Fed Pause on '\n                            'Rates'},\n     {'news_article_summary': 'The company has decided to eliminate 27 of its 30 '\n                              'clothing labels, such as Lark & Ro and Goodthreads, '\n                              'as it works to fend off antitrust scrutiny and cut '\n                              'costs.',\n      'news_article_title': 'Amazon Cuts Dozens of House Brands'},\n     {'news_article_summary': 'President Biden\u2019s order comes on top of a slowing '\n                              'Chinese economy, Covid lockdowns and rising '\n                              'tensions between the two powers.',\n      'news_article_title': 'U.S. Investment Ban on China Poised to Deepen Divide'},\n     {'news_article_summary': 'The proposed trial date in the '\n                              'election-interference case comes on the same day as '\n                              'the former president\u2019s not guilty plea on '\n                              'additional Mar-a-Lago charges.',\n      'news_article_title': 'Trump Should Be Tried in January, Prosecutors Tell '\n                            'Judge'},\n     {'news_article_summary': 'The CEO who started in June says the platform has '\n                              '\u201can entirely different road map\u201d for the future.',\n      'news_article_title': 'Yaccarino Says X Is Watching Threads but Has Its Own '\n                            'Vision'},\n     {'news_article_summary': 'Students foot the bill for flagship state '\n                              'universities that pour money into new buildings and '\n                              'programs with little pushback.',\n      'news_article_title': 'Colleges Spend Like There\u2019s No Tomorrow. \u2018These '\n                            'Places Are Just Devouring Money.\u2019'},\n     {'news_article_summary': 'Wildfires fanned by hurricane winds have torn '\n                              'through parts of the Hawaiian island, devastating '\n                              'the popular tourist town of Lahaina.',\n      'news_article_title': 'Maui Wildfires Leave at Least 36 Dead'},\n     {'news_article_summary': 'After its large armored push stalled, Kyiv has '\n                              'fallen back on the kind of tactics that brought it '\n                              'success earlier in the war.',\n      'news_article_title': 'Ukraine Uses Small-Unit Tactics to Retake Captured '\n                            'Territory'},\n     {'news_article_summary': 'President Guillermo Lasso says the Aug. 20 election '\n                              'will proceed, as the Andean country grapples with '\n                              'rising drug gang violence.',\n      'news_article_title': 'Ecuador Declares State of Emergency After '\n                            'Presidential Hopeful Killed'},\n     {'news_article_summary': 'This year\u2019s hurricane season, which typically runs '\n                              'from June to the end of November, has been '\n                              'difficult to predict, climate scientists said.',\n      'news_article_title': 'Atlantic Hurricane Season Prediction Increased to '\n                            '\u2018Above Normal,\u2019 NOAA Says'},\n     {'news_article_summary': 'The NFL is raising the price of its NFL+ streaming '\n                              'packages as it adds the NFL Network and RedZone.',\n      'news_article_title': 'NFL to Raise Price of NFL+ Streaming Packages as It '\n                            'Adds NFL Network, RedZone'},\n     {'news_article_summary': 'Russia is planning a moon mission as part of the '\n                              'new space race.',\n      'news_article_title': 'Russia\u2019s Moon Mission and the New Space Race'},\n     {'news_article_summary': 'Tapestry\u2019s $8.5 billion acquisition of Capri would '\n                              'create a conglomerate with more than $12 billion in '\n                              'annual sales, but it would still lack the '\n                              'high-wattage labels and diversity that have fueled '\n                              'LVMH\u2019s success.',\n      'news_article_title': \"Why the Coach and Kors Marriage Doesn't Scare LVMH\"},\n     {'news_article_summary': 'The Supreme Court has blocked Purdue Pharma\u2019s $6 '\n                              'billion Sackler opioid settlement.',\n      'news_article_title': 'Supreme Court Blocks Purdue Pharma\u2019s $6 Billion '\n                            'Sackler Opioid Settlement'},\n     {'news_article_summary': 'The Social Security COLA is expected to rise in '\n                              '2024, but not by a lot.',\n      'news_article_title': 'Social Security COLA Expected to Rise in 2024, but '\n                            'Not by a Lot'}]\n"))),(0,r.kt)("p",null,"We can compare the headlines scraped to the page:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image description",src:n(61573).Z,width:"1280",height:"799"})),(0,r.kt)("p",null,"Looking at the ",(0,r.kt)("a",{parentName:"p",href:"https://smith.langchain.com/public/c3070198-5b13-419b-87bf-3821cdf34fa6/r"},"LangSmith trace"),", we can see what is going on under the hood:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It's following what is explained in the ",(0,r.kt)("a",{parentName:"li",href:"docs/use_cases/extraction"},"extraction"),"."),(0,r.kt)("li",{parentName:"ul"},"We call the ",(0,r.kt)("inlineCode",{parentName:"li"},"information_extraction")," function on the input text."),(0,r.kt)("li",{parentName:"ul"},"It will attempt to populate the provided schema from the url content.")),(0,r.kt)("h2",{id:"research-automation"},"Research automation"),(0,r.kt)("p",null,"Related to scraping, we may want to answer specific questions using searched content."),(0,r.kt)("p",null,"We can automate the process of ",(0,r.kt)("a",{parentName:"p",href:"https://blog.langchain.dev/automating-web-research/"},"web research")," using a retriver, such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"WebResearchRetriever")," (",(0,r.kt)("a",{parentName:"p",href:"https://python.langchain.com/docs/modules/data_connection/retrievers/web_research"},"docs"),")."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image description",src:n(8568).Z,width:"1722",height:"655"})),(0,r.kt)("p",null,"Copy requirments ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/langchain-ai/web-explorer/blob/main/requirements.txt"},"from here"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pip install -r requirements.txt")),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"GOOGLE_CSE_ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GOOGLE_API_KEY"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "Chroma", "source": "langchain.vectorstores", "docs": "https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.chroma.Chroma.html", "title": "Set env var OPENAI_API_KEY or load from a .env file:"}, {"imported": "OpenAIEmbeddings", "source": "langchain.embeddings", "docs": "https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.openai.OpenAIEmbeddings.html", "title": "Set env var OPENAI_API_KEY or load from a .env file:"}, {"imported": "ChatOpenAI", "source": "langchain.chat_models.openai", "docs": "https://api.python.langchain.com/en/latest/chat_models/langchain.chat_models.openai.ChatOpenAI.html", "title": "Set env var OPENAI_API_KEY or load from a .env file:"}, {"imported": "GoogleSearchAPIWrapper", "source": "langchain.utilities", "docs": "https://api.python.langchain.com/en/latest/utilities/langchain.utilities.google_search.GoogleSearchAPIWrapper.html", "title": "Set env var OPENAI_API_KEY or load from a .env file:"}, {"imported": "WebResearchRetriever", "source": "langchain.retrievers.web_research", "docs": "https://api.python.langchain.com/en/latest/retrievers/langchain.retrievers.web_research.WebResearchRetriever.html", "title": "Set env var OPENAI_API_KEY or load from a .env file:"}]--\x3e\nfrom langchain.vectorstores import Chroma\nfrom langchain.embeddings import OpenAIEmbeddings\nfrom langchain.chat_models.openai import ChatOpenAI\nfrom langchain.utilities import GoogleSearchAPIWrapper\nfrom langchain.retrievers.web_research import WebResearchRetriever\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Vectorstore\nvectorstore = Chroma(embedding_function=OpenAIEmbeddings(),persist_directory="./chroma_db_oai")\n\n# LLM\nllm = ChatOpenAI(temperature=0)\n\n# Search \nsearch = GoogleSearchAPIWrapper()\n')),(0,r.kt)("p",null,"Initialize retriever with the above tools to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use an LLM to generate multiple relevant search queries (one LLM call)"),(0,r.kt)("li",{parentName:"ul"},"Execute a search for each query"),(0,r.kt)("li",{parentName:"ul"},"Choose the top K links per query  (multiple search calls in parallel)"),(0,r.kt)("li",{parentName:"ul"},"Load the information from all chosen links (scrape pages in parallel)"),(0,r.kt)("li",{parentName:"ul"},"Index those documents into a vectorstore"),(0,r.kt)("li",{parentName:"ul"},"Find the most relevant documents for each original generated search query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Initialize\nweb_research_retriever = WebResearchRetriever.from_llm(\n    vectorstore=vectorstore,\n    llm=llm, \n    search=search)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "RetrievalQAWithSourcesChain", "source": "langchain.chains", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.qa_with_sources.retrieval.RetrievalQAWithSourcesChain.html", "title": "Set env var OPENAI_API_KEY or load from a .env file:"}]--\x3e\n# Run\nimport logging\nlogging.basicConfig()\nlogging.getLogger("langchain.retrievers.web_research").setLevel(logging.INFO)\nfrom langchain.chains import RetrievalQAWithSourcesChain\nuser_input = "How do LLM Powered Autonomous Agents work?"\nqa_chain = RetrievalQAWithSourcesChain.from_chain_type(llm,retriever=web_research_retriever)\nresult = qa_chain({"question": user_input})\nresult\n')),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    INFO:langchain.retrievers.web_research:Generating questions for Google Search ...\n    INFO:langchain.retrievers.web_research:Questions for Google Search (raw): {'question': 'How do LLM Powered Autonomous Agents work?', 'text': LineList(lines=['1. What is the functioning principle of LLM Powered Autonomous Agents?\\n', '2. How do LLM Powered Autonomous Agents operate?\\n'])}\n    INFO:langchain.retrievers.web_research:Questions for Google Search: ['1. What is the functioning principle of LLM Powered Autonomous Agents?\\n', '2. How do LLM Powered Autonomous Agents operate?\\n']\n    INFO:langchain.retrievers.web_research:Searching for relevat urls ...\n    INFO:langchain.retrievers.web_research:Searching for relevat urls ...\n    INFO:langchain.retrievers.web_research:Search results: [{'title': 'LLM Powered Autonomous Agents | Hacker News', 'link': 'https://news.ycombinator.com/item?id=36488871', 'snippet': 'Jun 26, 2023 ... Exactly. A temperature of 0 means you always pick the highest probability token (i.e. the \"max\" function), while a temperature of 1 means you\\xa0...'}]\n    INFO:langchain.retrievers.web_research:Searching for relevat urls ...\n    INFO:langchain.retrievers.web_research:Search results: [{'title': \"LLM Powered Autonomous Agents | Lil'Log\", 'link': 'https://lilianweng.github.io/posts/2023-06-23-agent/', 'snippet': 'Jun 23, 2023 ... Task decomposition can be done (1) by LLM with simple prompting like \"Steps for XYZ.\\\\n1.\" , \"What are the subgoals for achieving XYZ?\" , (2) by\\xa0...'}]\n    INFO:langchain.retrievers.web_research:New URLs to load: []\n    INFO:langchain.retrievers.web_research:Grabbing most relevant splits from urls...\n\n\n\n\n\n    {'question': 'How do LLM Powered Autonomous Agents work?',\n     'answer': \"LLM-powered autonomous agents work by using LLM as the agent's brain, complemented by several key components such as planning, memory, and tool use. In terms of planning, the agent breaks down large tasks into smaller subgoals and can reflect and refine its actions based on past experiences. Memory is divided into short-term memory, which is used for in-context learning, and long-term memory, which allows the agent to retain and recall information over extended periods. Tool use involves the agent calling external APIs for additional information. These agents have been used in various applications, including scientific discovery and generative agents simulation.\",\n     'sources': ''}\n"))),(0,r.kt)("h3",{id:"going-deeper"},"Going deeper"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here's a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/langchain-ai/web-explorer/tree/main"},"app")," that wraps this retriver with a lighweight UI.")))}d.isMDXComponent=!0},8568:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web_research-f87a6bc469722c6804652383a65306de.png"},69277:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web_scraping-001e2279b9e46c696012ac26d7f218a2.png"},61573:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wsj_page-1d5d8a3de02ec7579f5b0200dcb929b6.png"}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57248],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return a?n.createElement(h,s(s({ref:t},m),{},{components:a})):n.createElement(h,s({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26780:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={},s="Amazon Textract",i={unversionedId:"integrations/document_loaders/pdf-amazonTextractPDFLoader",id:"integrations/document_loaders/pdf-amazonTextractPDFLoader",title:"Amazon Textract",description:"Amazon Textract is a machine learning (ML) service that automatically extracts text, handwriting, and data from scanned documents. It goes beyond simple optical character recognition (OCR) to identify, understand, and extract data from forms and tables. Today, many companies manually extract data from scanned documents such as PDFs, images, tables, and forms, or through simple OCR software that requires manual configuration (which often must be updated when the form changes). To overcome these manual and expensive processes, Textract uses ML to read and process any type of document, accurately extracting text, handwriting, tables, and other data with no manual effort. You can quickly automate document processing and act on the information extracted, whether you\u2019re automating loans processing or extracting information from invoices and receipts. Textract can extract the data in minutes instead of hours or days.",source:"@site/docs/integrations/document_loaders/pdf-amazonTextractPDFLoader.md",sourceDirName:"integrations/document_loaders",slug:"/integrations/document_loaders/pdf-amazonTextractPDFLoader",permalink:"/langchain/docs/integrations/document_loaders/pdf-amazonTextractPDFLoader",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Pandas DataFrame",permalink:"/langchain/docs/integrations/document_loaders/pandas_dataframe"},next:{title:"Polars DataFrame",permalink:"/langchain/docs/integrations/document_loaders/polars_dataframe"}},l={},c=[{value:"Sample 1",id:"sample-1",level:2},{value:"Sample 2",id:"sample-2",level:2},{value:"Sample 3",id:"sample-3",level:2},{value:"Using the AmazonTextractPDFLoader in an LangChain chain (e. g. OpenAI)",id:"using-the-amazontextractpdfloader-in-an-langchain-chain-e-g-openai",level:2}],m=(d="CodeOutputBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const p={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"amazon-textract"},"Amazon Textract"),(0,o.kt)("p",null,"Amazon Textract is a machine learning (ML) service that automatically extracts text, handwriting, and data from scanned documents. It goes beyond simple optical character recognition (OCR) to identify, understand, and extract data from forms and tables. Today, many companies manually extract data from scanned documents such as PDFs, images, tables, and forms, or through simple OCR software that requires manual configuration (which often must be updated when the form changes). To overcome these manual and expensive processes, Textract uses ML to read and process any type of document, accurately extracting text, handwriting, tables, and other data with no manual effort. You can quickly automate document processing and act on the information extracted, whether you\u2019re automating loans processing or extracting information from invoices and receipts. Textract can extract the data in minutes instead of hours or days."),(0,o.kt)("p",null,"This sample demonstrates the use of Amazon Textract in combination with LangChain as a DocumentLoader."),(0,o.kt)("p",null,"Textract supports PDF, TIFF, PNG and JPEG format."),(0,o.kt)("p",null,"Check ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/textract/latest/dg/limits-document.html"},"https://docs.aws.amazon.com/textract/latest/dg/limits-document.html")," for supported document sizes, languages and characters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install langchain boto3 openai tiktoken python-dotenv -q\n")),(0,o.kt)(m,{lang:"bash",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    [notice] A new release of pip is available: 23.2 -> 23.2.1\n    [notice] To update, run: python -m pip install --upgrade pip\n"))),(0,o.kt)("h2",{id:"sample-1"},"Sample 1"),(0,o.kt)("p",null,"The first example uses a local file, which internally will be send to Amazon Textract sync API ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/textract/latest/dg/API_DetectDocumentText.html"},"DetectDocumentText"),". "),(0,o.kt)("p",null,"Local files or URL endpoints like HTTP:// are limited to one page documents for Textract.\nMulti-page documents have to reside on S3. This sample file is a jpeg."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "AmazonTextractPDFLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.pdf.AmazonTextractPDFLoader.html", "title": "Amazon Textract "}]--\x3e\nfrom langchain.document_loaders import AmazonTextractPDFLoader\nloader = AmazonTextractPDFLoader("example_data/alejandro_rosalez_sample-small.jpeg")\ndocuments = loader.load()\n')),(0,o.kt)("p",null,"Output from the file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"documents\n")),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    [Document(page_content='Patient Information First Name: ALEJANDRO Last Name: ROSALEZ Date of Birth: 10/10/1982 Sex: M Marital Status: MARRIED Email Address: Address: 123 ANY STREET City: ANYTOWN State: CA Zip Code: 12345 Phone: 646-555-0111 Emergency Contact 1: First Name: CARLOS Last Name: SALAZAR Phone: 212-555-0150 Relationship to Patient: BROTHER Emergency Contact 2: First Name: JANE Last Name: DOE Phone: 650-555-0123 Relationship FRIEND to Patient: Did you feel fever or feverish lately? Yes No Are you having shortness of breath? Yes No Do you have a cough? Yes No Did you experience loss of taste or smell? Yes No Where you in contact with any confirmed COVID-19 positive patients? Yes No Did you travel in the past 14 days to any regions affected by COVID-19? Yes No Patient Information First Name: ALEJANDRO Last Name: ROSALEZ Date of Birth: 10/10/1982 Sex: M Marital Status: MARRIED Email Address: Address: 123 ANY STREET City: ANYTOWN State: CA Zip Code: 12345 Phone: 646-555-0111 Emergency Contact 1: First Name: CARLOS Last Name: SALAZAR Phone: 212-555-0150 Relationship to Patient: BROTHER Emergency Contact 2: First Name: JANE Last Name: DOE Phone: 650-555-0123 Relationship FRIEND to Patient: Did you feel fever or feverish lately? Yes No Are you having shortness of breath? Yes No Do you have a cough? Yes No Did you experience loss of taste or smell? Yes No Where you in contact with any confirmed COVID-19 positive patients? Yes No Did you travel in the past 14 days to any regions affected by COVID-19? Yes No ', metadata={'source': 'example_data/alejandro_rosalez_sample-small.jpeg', 'page': 1})]\n"))),(0,o.kt)("h2",{id:"sample-2"},"Sample 2"),(0,o.kt)("p",null,"The next sample loads a file from an HTTPS endpoint.\nIt has to be single page, as Amazon Textract requires all multi-page documents to be stored on S3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "AmazonTextractPDFLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.pdf.AmazonTextractPDFLoader.html", "title": "Amazon Textract "}]--\x3e\nfrom langchain.document_loaders import AmazonTextractPDFLoader\nloader = AmazonTextractPDFLoader("https://amazon-textract-public-content.s3.us-east-2.amazonaws.com/langchain/alejandro_rosalez_sample_1.jpg")\ndocuments = loader.load()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"documents\n")),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    [Document(page_content='Patient Information First Name: ALEJANDRO Last Name: ROSALEZ Date of Birth: 10/10/1982 Sex: M Marital Status: MARRIED Email Address: Address: 123 ANY STREET City: ANYTOWN State: CA Zip Code: 12345 Phone: 646-555-0111 Emergency Contact 1: First Name: CARLOS Last Name: SALAZAR Phone: 212-555-0150 Relationship to Patient: BROTHER Emergency Contact 2: First Name: JANE Last Name: DOE Phone: 650-555-0123 Relationship FRIEND to Patient: Did you feel fever or feverish lately? Yes No Are you having shortness of breath? Yes No Do you have a cough? Yes No Did you experience loss of taste or smell? Yes No Where you in contact with any confirmed COVID-19 positive patients? Yes No Did you travel in the past 14 days to any regions affected by COVID-19? Yes No Patient Information First Name: ALEJANDRO Last Name: ROSALEZ Date of Birth: 10/10/1982 Sex: M Marital Status: MARRIED Email Address: Address: 123 ANY STREET City: ANYTOWN State: CA Zip Code: 12345 Phone: 646-555-0111 Emergency Contact 1: First Name: CARLOS Last Name: SALAZAR Phone: 212-555-0150 Relationship to Patient: BROTHER Emergency Contact 2: First Name: JANE Last Name: DOE Phone: 650-555-0123 Relationship FRIEND to Patient: Did you feel fever or feverish lately? Yes No Are you having shortness of breath? Yes No Do you have a cough? Yes No Did you experience loss of taste or smell? Yes No Where you in contact with any confirmed COVID-19 positive patients? Yes No Did you travel in the past 14 days to any regions affected by COVID-19? Yes No ', metadata={'source': 'example_data/alejandro_rosalez_sample-small.jpeg', 'page': 1})]\n"))),(0,o.kt)("h2",{id:"sample-3"},"Sample 3"),(0,o.kt)("p",null,"Processing a multi-page document requires the document to be on S3. The sample document resides in a bucket in us-east-2 and Textract needs to be called in that same region to be successful, so we set the region_name on the client and pass that in to the loader to ensure Textract is called from us-east-2. You could also to have your notebook running in us-east-2, setting the AWS_DEFAULT_REGION set to us-east-2 or when running in a different environment, pass in a boto3 Textract client with that region name like in the cell below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import boto3\ntextract_client = boto3.client('textract', region_name='us-east-2')\n\nfile_path = \"s3://amazon-textract-public-content/langchain/layout-parser-paper.pdf\"\nloader = AmazonTextractPDFLoader(file_path, client=textract_client)\ndocuments = loader.load()\n")),(0,o.kt)("p",null,"Now getting the number of pages to validate the response (printing out the full response would be quite long...). We expect 16 pages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"len(documents)\n")),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    16\n"))),(0,o.kt)("h2",{id:"using-the-amazontextractpdfloader-in-an-langchain-chain-e-g-openai"},"Using the AmazonTextractPDFLoader in an LangChain chain (e. g. OpenAI)"),(0,o.kt)("p",null,"The AmazonTextractPDFLoader can be used in a chain the same way the other loaders are used.\nTextract itself does have a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/textract/latest/dg/API_Query.html"},"Query feature"),", which offers similar functionality to the QA chain in this sample, which is worth checking out as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# You can store your OPENAI_API_KEY in a .env file as well\n# import os \n# from dotenv import load_dotenv\n\n# load_dotenv()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Or set the OpenAI key in the environment directly\nimport os \nos.environ["OPENAI_API_KEY"] = "your-OpenAI-API-key"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "OpenAI", "source": "langchain.llms", "docs": "https://api.python.langchain.com/en/latest/llms/langchain.llms.openai.OpenAI.html", "title": "Amazon Textract "}, {"imported": "load_qa_chain", "source": "langchain.chains.question_answering", "docs": "https://api.python.langchain.com/en/latest/chains/langchain.chains.question_answering.load_qa_chain.html", "title": "Amazon Textract "}]--\x3e\nfrom langchain.llms import OpenAI\nfrom langchain.chains.question_answering import load_qa_chain\n\nchain = load_qa_chain(llm=OpenAI(), chain_type="map_reduce")\nquery = ["Who are the autors?"]\n\nchain.run(input_documents=documents, question=query)\n')),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    ' The authors are Zejiang Shen, Ruochen Zhang, Melissa Dell, Benjamin Charles Germain Lee, Jacob Carlson, Weining Li, Gardner, M., Grus, J., Neumann, M., Tafjord, O., Dasigi, P., Liu, N., Peters, M., Schmitz, M., Zettlemoyer, L., Lukasz Garncarek, Powalski, R., Stanislawek, T., Topolski, B., Halama, P., Gralinski, F., Graves, A., Fern\xe1ndez, S., Gomez, F., Schmidhuber, J., Harley, A.W., Ufkes, A., Derpanis, K.G., He, K., Gkioxari, G., Doll\xe1r, P., Girshick, R., He, K., Zhang, X., Ren, S., Sun, J., Kay, A., Lamiroy, B., Lopresti, D., Mears, J., Jakeway, E., Ferriter, M., Adams, C., Yarasavage, N., Thomas, D., Zwaard, K., Li, M., Cui, L., Huang,'\n"))))}h.isMDXComponent=!0}}]);
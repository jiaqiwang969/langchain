"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79227],{3905:(t,o,e)=>{e.d(o,{Zo:()=>l,kt:()=>g});var n=e(67294);function r(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}function i(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,n)}return e}function a(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?i(Object(e),!0).forEach((function(o){r(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}function s(t,o){if(null==t)return{};var e,n,r=function(t,o){if(null==t)return{};var e,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],o.indexOf(e)>=0||(r[e]=t[e]);return r}(t,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var c=n.createContext({}),d=function(t){var o=n.useContext(c),e=o;return t&&(e="function"==typeof t?t(o):a(a({},o),t)),e},l=function(t){var o=d(t.components);return n.createElement(c.Provider,{value:o},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var o=t.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(t,o){var e=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=d(e),u=r,g=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return e?n.createElement(g,a(a({ref:o},l),{},{components:e})):n.createElement(g,a({ref:o},l))}));function g(t,o){var e=arguments,r=o&&o.mdxType;if("string"==typeof t||r){var i=e.length,a=new Array(i);a[0]=u;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=t,s[p]="string"==typeof t?t:r,a[1]=s;for(var d=2;d<i;d++)a[d]=e[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},94998:(t,o,e)=>{e.r(o),e.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=e(87462),r=(e(67294),e(3905));const i={},a="GitBook",s={unversionedId:"integrations/document_loaders/gitbook",id:"integrations/document_loaders/gitbook",title:"GitBook",description:"GitBook is a modern documentation platform where teams can document everything from products to internal knowledge bases and APIs.",source:"@site/docs/integrations/document_loaders/gitbook.md",sourceDirName:"integrations/document_loaders",slug:"/integrations/document_loaders/gitbook",permalink:"/langchain/docs/integrations/document_loaders/gitbook",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Git",permalink:"/langchain/docs/integrations/document_loaders/git"},next:{title:"GitHub",permalink:"/langchain/docs/integrations/document_loaders/github"}},c={},d=[{value:"Load from single GitBook page",id:"load-from-single-gitbook-page",level:3},{value:"Load from all paths in a given GitBook",id:"load-from-all-paths-in-a-given-gitbook",level:3}],l=(p="CodeOutputBlock",function(t){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)});var p;const m={toc:d},u="wrapper";function g(t){let{components:o,...e}=t;return(0,r.kt)(u,(0,n.Z)({},m,e,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gitbook"},"GitBook"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://docs.gitbook.com/"},"GitBook")," is a modern documentation platform where teams can document everything from products to internal knowledge bases and APIs.")),(0,r.kt)("p",null,"This notebook shows how to pull page data from any ",(0,r.kt)("inlineCode",{parentName:"p"},"GitBook"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "GitbookLoader", "source": "langchain.document_loaders", "docs": "https://api.python.langchain.com/en/latest/document_loaders/langchain.document_loaders.gitbook.GitbookLoader.html", "title": "GitBook"}]--\x3e\nfrom langchain.document_loaders import GitbookLoader\n')),(0,r.kt)("h3",{id:"load-from-single-gitbook-page"},"Load from single GitBook page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'loader = GitbookLoader("https://docs.gitbook.com")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"page_data = loader.load()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"page_data\n")),(0,r.kt)(l,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    [Document(page_content='Introduction to GitBook\\nGitBook is a modern documentation platform where teams can document everything from products to internal knowledge bases and APIs.\\nWe want to help \\nteams to work more efficiently\\n by creating a simple yet powerful platform for them to \\nshare their knowledge\\n.\\nOur mission is to make a \\nuser-friendly\\n and \\ncollaborative\\n product for everyone to create, edit and share knowledge through documentation.\\nPublish your documentation in 5 easy steps\\nImport\\n\\nMove your existing content to GitBook with ease.\\nGit Sync\\n\\nBenefit from our bi-directional synchronisation with GitHub and GitLab.\\nOrganise your content\\n\\nCreate pages and spaces and organize them into collections\\nCollaborate\\n\\nInvite other users and collaborate asynchronously with ease.\\nPublish your docs\\n\\nShare your documentation with selected users or with everyone.\\nNext\\n - Getting started\\nOverview\\nLast modified \\n3mo ago', lookup_str='', metadata={'source': 'https://docs.gitbook.com', 'title': 'Introduction to GitBook'}, lookup_index=0)]\n"))),(0,r.kt)("h3",{id:"load-from-all-paths-in-a-given-gitbook"},"Load from all paths in a given GitBook"),(0,r.kt)("p",null,"For this to work, the GitbookLoader needs to be initialized with the root path (",(0,r.kt)("inlineCode",{parentName:"p"},"https://docs.gitbook.com")," in this example) and have ",(0,r.kt)("inlineCode",{parentName:"p"},"load_all_paths")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'loader = GitbookLoader("https://docs.gitbook.com", load_all_paths=True)\nall_pages_data = loader.load()\n')),(0,r.kt)(l,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Fetching text from https://docs.gitbook.com/\n    Fetching text from https://docs.gitbook.com/getting-started/overview\n    Fetching text from https://docs.gitbook.com/getting-started/import\n    Fetching text from https://docs.gitbook.com/getting-started/git-sync\n    Fetching text from https://docs.gitbook.com/getting-started/content-structure\n    Fetching text from https://docs.gitbook.com/getting-started/collaboration\n    Fetching text from https://docs.gitbook.com/getting-started/publishing\n    Fetching text from https://docs.gitbook.com/tour/quick-find\n    Fetching text from https://docs.gitbook.com/tour/editor\n    Fetching text from https://docs.gitbook.com/tour/customization\n    Fetching text from https://docs.gitbook.com/tour/member-management\n    Fetching text from https://docs.gitbook.com/tour/pdf-export\n    Fetching text from https://docs.gitbook.com/tour/activity-history\n    Fetching text from https://docs.gitbook.com/tour/insights\n    Fetching text from https://docs.gitbook.com/tour/notifications\n    Fetching text from https://docs.gitbook.com/tour/internationalization\n    Fetching text from https://docs.gitbook.com/tour/keyboard-shortcuts\n    Fetching text from https://docs.gitbook.com/tour/seo\n    Fetching text from https://docs.gitbook.com/advanced-guides/custom-domain\n    Fetching text from https://docs.gitbook.com/advanced-guides/advanced-sharing-and-security\n    Fetching text from https://docs.gitbook.com/advanced-guides/integrations\n    Fetching text from https://docs.gitbook.com/billing-and-admin/account-settings\n    Fetching text from https://docs.gitbook.com/billing-and-admin/plans\n    Fetching text from https://docs.gitbook.com/troubleshooting/faqs\n    Fetching text from https://docs.gitbook.com/troubleshooting/hard-refresh\n    Fetching text from https://docs.gitbook.com/troubleshooting/report-bugs\n    Fetching text from https://docs.gitbook.com/troubleshooting/connectivity-issues\n    Fetching text from https://docs.gitbook.com/troubleshooting/support\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'print(f"fetched {len(all_pages_data)} documents.")\n# show second document\nall_pages_data[2]\n')),(0,r.kt)(l,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    fetched 28 documents.\n\n\n\n\n\n    Document(page_content=\"Import\\nFind out how to easily migrate your existing documentation and which formats are supported.\\nThe import function allows you to migrate and unify existing documentation in GitBook. You can choose to import single or multiple pages although limits apply. \\nPermissions\\nAll members with editor permission or above can use the import feature.\\nSupported formats\\nGitBook supports imports from websites or files that are:\\nMarkdown (.md or .markdown)\\nHTML (.html)\\nMicrosoft Word (.docx).\\nWe also support import from:\\nConfluence\\nNotion\\nGitHub Wiki\\nQuip\\nDropbox Paper\\nGoogle Docs\\nYou can also upload a ZIP\\n \\ncontaining HTML or Markdown files when \\nimporting multiple pages.\\nNote: this feature is in beta.\\nFeel free to suggest import sources we don't support yet and \\nlet us know\\n if you have any issues.\\nImport panel\\nWhen you create a new space, you'll have the option to import content straight away:\\nThe new page menu\\nImport a page or subpage by selecting \\nImport Page\\n from the New Page menu, or \\nImport Subpage\\n in the page action menu, found in the table of contents:\\nImport from the page action menu\\nWhen you choose your input source, instructions will explain how to proceed.\\nAlthough GitBook supports importing content from different kinds of sources, the end result might be different from your source due to differences in product features and document format.\\nLimits\\nGitBook currently has the following limits for imported content:\\nThe maximum number of pages that can be uploaded in a single import is \\n20.\\nThe maximum number of files (images etc.) that can be uploaded in a single import is \\n20.\\nGetting started - \\nPrevious\\nOverview\\nNext\\n - Getting started\\nGit Sync\\nLast modified \\n4mo ago\", lookup_str='', metadata={'source': 'https://docs.gitbook.com/getting-started/import', 'title': 'Import'}, lookup_index=0)\n"))))}g.isMDXComponent=!0}}]);
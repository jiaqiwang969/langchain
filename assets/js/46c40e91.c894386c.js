"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[570],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,h=p["".concat(s,".").concat(d)]||p[d]||g[d]||l;return a?o.createElement(h,r(r({ref:t},m),{},{components:a})):o.createElement(h,r({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98e3:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const l={},r="File System",i={unversionedId:"integrations/tools/filesystem",id:"integrations/tools/filesystem",title:"File System",description:"LangChain provides tools for interacting with a local file system out of the box. This notebook walks through some of them.",source:"@site/docs/integrations/tools/filesystem.md",sourceDirName:"integrations/tools",slug:"/integrations/tools/filesystem",permalink:"/langchain/docs/integrations/tools/filesystem",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Eden AI",permalink:"/langchain/docs/integrations/tools/edenai_tools"},next:{title:"Golden Query",permalink:"/langchain/docs/integrations/tools/golden_query"}},s={},c=[{value:"The FileManagementToolkit",id:"the-filemanagementtoolkit",level:2},{value:"Selecting File System Tools",id:"selecting-file-system-tools",level:3}],m=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var p;const g={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"file-system"},"File System"),(0,n.kt)("p",null,"LangChain provides tools for interacting with a local file system out of the box. This notebook walks through some of them."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," these tools are not recommended for use outside a sandboxed environment! "),(0,n.kt)("p",null,"First, we'll import the tools."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "ReadFileTool", "source": "langchain.tools.file_management", "docs": "https://api.python.langchain.com/en/latest/tools/langchain.tools.file_management.read.ReadFileTool.html", "title": "File System"}, {"imported": "CopyFileTool", "source": "langchain.tools.file_management", "docs": "https://api.python.langchain.com/en/latest/tools/langchain.tools.file_management.copy.CopyFileTool.html", "title": "File System"}, {"imported": "DeleteFileTool", "source": "langchain.tools.file_management", "docs": "https://api.python.langchain.com/en/latest/tools/langchain.tools.file_management.delete.DeleteFileTool.html", "title": "File System"}, {"imported": "MoveFileTool", "source": "langchain.tools.file_management", "docs": "https://api.python.langchain.com/en/latest/tools/langchain.tools.file_management.move.MoveFileTool.html", "title": "File System"}, {"imported": "WriteFileTool", "source": "langchain.tools.file_management", "docs": "https://api.python.langchain.com/en/latest/tools/langchain.tools.file_management.write.WriteFileTool.html", "title": "File System"}, {"imported": "ListDirectoryTool", "source": "langchain.tools.file_management", "docs": "https://api.python.langchain.com/en/latest/tools/langchain.tools.file_management.list_dir.ListDirectoryTool.html", "title": "File System"}, {"imported": "FileManagementToolkit", "source": "langchain.agents.agent_toolkits", "docs": "https://api.python.langchain.com/en/latest/agents/langchain.agents.agent_toolkits.file_management.toolkit.FileManagementToolkit.html", "title": "File System"}]--\x3e\nfrom langchain.tools.file_management import (\n    ReadFileTool,\n    CopyFileTool,\n    DeleteFileTool,\n    MoveFileTool,\n    WriteFileTool,\n    ListDirectoryTool,\n)\nfrom langchain.agents.agent_toolkits import FileManagementToolkit\nfrom tempfile import TemporaryDirectory\n\n# We\'ll make a temporary directory to avoid clutter\nworking_directory = TemporaryDirectory()\n')),(0,n.kt)("h2",{id:"the-filemanagementtoolkit"},"The FileManagementToolkit"),(0,n.kt)("p",null,"If you want to provide all the file tooling to your agent, it's easy to do so with the toolkit. We'll pass the temporary directory in as a root directory as a workspace for the LLM."),(0,n.kt)("p",null,"It's recommended to always pass in a root directory, since without one, it's easy for the LLM to pollute the working directory, and without one, there isn't any validation against\nstraightforward prompt injection."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"toolkit = FileManagementToolkit(\n    root_dir=str(working_directory.name)\n)  # If you don't provide a root_dir, operations will default to the current working directory\ntoolkit.get_tools()\n")),(0,n.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    [CopyFileTool(name='copy_file', description='Create a copy of a file in a specified location', args_schema=<class 'langchain.tools.file_management.copy.FileCopyInput'>, return_direct=False, verbose=False, callback_manager=<langchain.callbacks.shared.SharedCallbackManager object at 0x1156f4350>, root_dir='/var/folders/gf/6rnp_mbx5914kx7qmmh7xzmw0000gn/T/tmpxb8c3aug'),\n     DeleteFileTool(name='file_delete', description='Delete a file', args_schema=<class 'langchain.tools.file_management.delete.FileDeleteInput'>, return_direct=False, verbose=False, callback_manager=<langchain.callbacks.shared.SharedCallbackManager object at 0x1156f4350>, root_dir='/var/folders/gf/6rnp_mbx5914kx7qmmh7xzmw0000gn/T/tmpxb8c3aug'),\n     FileSearchTool(name='file_search', description='Recursively search for files in a subdirectory that match the regex pattern', args_schema=<class 'langchain.tools.file_management.file_search.FileSearchInput'>, return_direct=False, verbose=False, callback_manager=<langchain.callbacks.shared.SharedCallbackManager object at 0x1156f4350>, root_dir='/var/folders/gf/6rnp_mbx5914kx7qmmh7xzmw0000gn/T/tmpxb8c3aug'),\n     MoveFileTool(name='move_file', description='Move or rename a file from one location to another', args_schema=<class 'langchain.tools.file_management.move.FileMoveInput'>, return_direct=False, verbose=False, callback_manager=<langchain.callbacks.shared.SharedCallbackManager object at 0x1156f4350>, root_dir='/var/folders/gf/6rnp_mbx5914kx7qmmh7xzmw0000gn/T/tmpxb8c3aug'),\n     ReadFileTool(name='read_file', description='Read file from disk', args_schema=<class 'langchain.tools.file_management.read.ReadFileInput'>, return_direct=False, verbose=False, callback_manager=<langchain.callbacks.shared.SharedCallbackManager object at 0x1156f4350>, root_dir='/var/folders/gf/6rnp_mbx5914kx7qmmh7xzmw0000gn/T/tmpxb8c3aug'),\n     WriteFileTool(name='write_file', description='Write file to disk', args_schema=<class 'langchain.tools.file_management.write.WriteFileInput'>, return_direct=False, verbose=False, callback_manager=<langchain.callbacks.shared.SharedCallbackManager object at 0x1156f4350>, root_dir='/var/folders/gf/6rnp_mbx5914kx7qmmh7xzmw0000gn/T/tmpxb8c3aug'),\n     ListDirectoryTool(name='list_directory', description='List files and directories in a specified folder', args_schema=<class 'langchain.tools.file_management.list_dir.DirectoryListingInput'>, return_direct=False, verbose=False, callback_manager=<langchain.callbacks.shared.SharedCallbackManager object at 0x1156f4350>, root_dir='/var/folders/gf/6rnp_mbx5914kx7qmmh7xzmw0000gn/T/tmpxb8c3aug')]\n"))),(0,n.kt)("h3",{id:"selecting-file-system-tools"},"Selecting File System Tools"),(0,n.kt)("p",null,"If you only want to select certain tools, you can pass them in as arguments when initializing the toolkit, or you can individually initialize the desired tools."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'tools = FileManagementToolkit(\n    root_dir=str(working_directory.name),\n    selected_tools=["read_file", "write_file", "list_directory"],\n).get_tools()\ntools\n')),(0,n.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    [ReadFileTool(name='read_file', description='Read file from disk', args_schema=<class 'langchain.tools.file_management.read.ReadFileInput'>, return_direct=False, verbose=False, callback_manager=<langchain.callbacks.shared.SharedCallbackManager object at 0x1156f4350>, root_dir='/var/folders/gf/6rnp_mbx5914kx7qmmh7xzmw0000gn/T/tmpxb8c3aug'),\n     WriteFileTool(name='write_file', description='Write file to disk', args_schema=<class 'langchain.tools.file_management.write.WriteFileInput'>, return_direct=False, verbose=False, callback_manager=<langchain.callbacks.shared.SharedCallbackManager object at 0x1156f4350>, root_dir='/var/folders/gf/6rnp_mbx5914kx7qmmh7xzmw0000gn/T/tmpxb8c3aug'),\n     ListDirectoryTool(name='list_directory', description='List files and directories in a specified folder', args_schema=<class 'langchain.tools.file_management.list_dir.DirectoryListingInput'>, return_direct=False, verbose=False, callback_manager=<langchain.callbacks.shared.SharedCallbackManager object at 0x1156f4350>, root_dir='/var/folders/gf/6rnp_mbx5914kx7qmmh7xzmw0000gn/T/tmpxb8c3aug')]\n"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'read_tool, write_tool, list_tool = tools\nwrite_tool.run({"file_path": "example.txt", "text": "Hello World!"})\n')),(0,n.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    'File written successfully to example.txt.'\n"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# List files in the working directory\nlist_tool.run({})\n")),(0,n.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    'example.txt'\n"))))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11725],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>u});var a=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)s=o[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)s=o[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=m(s),p=n,u=g["".concat(l,".").concat(p)]||g[p]||h[p]||o;return s?a.createElement(u,r(r({ref:t},c),{},{components:s})):a.createElement(u,r({ref:t},c))}));function u(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=s.length,r=new Array(o);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[g]="string"==typeof e?e:n,r[1]=i;for(var m=2;m<o;m++)r[m]=s[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,s)}p.displayName="MDXCreateElement"},43892:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=s(87462),n=(s(67294),s(3905));const o={},r="SQL Chat Message History",i={unversionedId:"integrations/memory/sql_chat_message_history",id:"integrations/memory/sql_chat_message_history",title:"SQL Chat Message History",description:"This notebook goes over a SQLChatMessageHistory class that allows to store chat history in any database supported by SQLAlchemy.",source:"@site/docs/integrations/memory/sql_chat_message_history.md",sourceDirName:"integrations/memory",slug:"/integrations/memory/sql_chat_message_history",permalink:"/langchain/docs/integrations/memory/sql_chat_message_history",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrations",previous:{title:"Rockset Chat Message History",permalink:"/langchain/docs/integrations/memory/rockset_chat_message_history"},next:{title:"Streamlit Chat Message History",permalink:"/langchain/docs/integrations/memory/streamlit_chat_message_history"}},l={},m=[{value:"Basic Usage",id:"basic-usage",level:3},{value:"Custom Storage Format",id:"custom-storage-format",level:3}],c=(g="CodeOutputBlock",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var g;const h={toc:m},p="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sql-chat-message-history"},"SQL Chat Message History"),(0,n.kt)("p",null,"This notebook goes over a ",(0,n.kt)("strong",{parentName:"p"},"SQLChatMessageHistory")," class that allows to store chat history in any database supported by SQLAlchemy."),(0,n.kt)("p",null,"Please note that to use it with databases other than SQLite, you will need to install the corresponding database driver."),(0,n.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("p",null,"To use the storage you need to provide only 2 things:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Session Id - a unique identifier of the session, like user name, email, chat id etc."),(0,n.kt)("li",{parentName:"ol"},"Connection string - a string that specifies the database connection. It will be passed to SQLAlchemy create_engine function.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "SQLChatMessageHistory", "source": "langchain.memory.chat_message_histories", "docs": "https://api.python.langchain.com/en/latest/memory/langchain.memory.chat_message_histories.sql.SQLChatMessageHistory.html", "title": "SQL Chat Message History"}]--\x3e\nfrom langchain.memory.chat_message_histories import SQLChatMessageHistory\n\nchat_message_history = SQLChatMessageHistory(\n    session_id=\'test_session\',\n    connection_string=\'sqlite:///sqlite.db\'\n)\n\nchat_message_history.add_user_message(\'Hello\')\nchat_message_history.add_ai_message(\'Hi\')\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"chat_message_history.messages\n")),(0,n.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    [HumanMessage(content='Hello', additional_kwargs={}, example=False),\n     AIMessage(content='Hi', additional_kwargs={}, example=False)]\n"))),(0,n.kt)("h3",{id:"custom-storage-format"},"Custom Storage Format"),(0,n.kt)("p",null,"By default, only the session id and message dictionary are stored in the table."),(0,n.kt)("p",null,"However, sometimes you might want to store some additional information, like message date, author, language etc."),(0,n.kt)("p",null,"To do that, you can create a custom message converter, by implementing ",(0,n.kt)("strong",{parentName:"p"},"BaseMessageConverter")," interface."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'\x3c!--IMPORTS:[{"imported": "BaseMessage", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.messages.BaseMessage.html", "title": "SQL Chat Message History"}, {"imported": "HumanMessage", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.messages.HumanMessage.html", "title": "SQL Chat Message History"}, {"imported": "AIMessage", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.messages.AIMessage.html", "title": "SQL Chat Message History"}, {"imported": "SystemMessage", "source": "langchain.schema", "docs": "https://api.python.langchain.com/en/latest/schema/langchain.schema.messages.SystemMessage.html", "title": "SQL Chat Message History"}, {"imported": "BaseMessageConverter", "source": "langchain.memory.chat_message_histories.sql", "docs": "https://api.python.langchain.com/en/latest/memory/langchain.memory.chat_message_histories.sql.BaseMessageConverter.html", "title": "SQL Chat Message History"}]--\x3e\nfrom datetime import datetime\nfrom langchain.schema import BaseMessage, HumanMessage, AIMessage, SystemMessage\nfrom typing import Any\nfrom sqlalchemy import Column, Integer, Text, DateTime\nfrom sqlalchemy.orm import declarative_base\nfrom langchain.memory.chat_message_histories.sql import BaseMessageConverter\n\n\nBase = declarative_base()\n\n\nclass CustomMessage(Base):\n    __tablename__ = \'custom_message_store\'\n\n    id = Column(Integer, primary_key=True)\n    session_id = Column(Text)\n    type = Column(Text)\n    content = Column(Text)\n    created_at = Column(DateTime)\n    author_email = Column(Text)\n\n\nclass CustomMessageConverter(BaseMessageConverter):\n    def __init__(self, author_email: str):\n        self.author_email = author_email\n    \n    def from_sql_model(self, sql_message: Any) -> BaseMessage:\n        if sql_message.type == \'human\':\n            return HumanMessage(\n                content=sql_message.content,\n            )\n        elif sql_message.type == \'ai\':\n            return AIMessage(\n                content=sql_message.content,\n            )\n        elif sql_message.type == \'system\':\n            return SystemMessage(\n                content=sql_message.content,\n            )\n        else:\n            raise ValueError(f\'Unknown message type: {sql_message.type}\')\n    \n    def to_sql_model(self, message: BaseMessage, session_id: str) -> Any:\n        now = datetime.now()\n        return CustomMessage(\n            session_id=session_id,\n            type=message.type,\n            content=message.content,\n            created_at=now,\n            author_email=self.author_email\n        )\n    \n    def get_sql_model_class(self) -> Any:\n        return CustomMessage\n\n\nchat_message_history = SQLChatMessageHistory(\n    session_id=\'test_session\',\n    connection_string=\'sqlite:///sqlite.db\',\n    custom_message_converter=CustomMessageConverter(\n        author_email=\'test@example.com\'\n    )\n)\n\nchat_message_history.add_user_message(\'Hello\')\nchat_message_history.add_ai_message(\'Hi\')\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"chat_message_history.messages\n")),(0,n.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    [HumanMessage(content='Hello', additional_kwargs={}, example=False),\n     AIMessage(content='Hi', additional_kwargs={}, example=False)]\n"))),(0,n.kt)("p",null,"You also might want to change the name of session_id column. In this case you'll need to specify ",(0,n.kt)("inlineCode",{parentName:"p"},"session_id_field_name")," parameter."))}u.isMDXComponent=!0}}]);
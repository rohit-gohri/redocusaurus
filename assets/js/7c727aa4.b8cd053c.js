"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[233],{51628:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var s=t(62540),n=t(43023);const o={title:"Showing Multiple APIs",sidebar_position:2},r=void 0,d={id:"guides/multiple-apis",title:"Showing Multiple APIs",description:"Nested View with MDX",source:"@site/docs/guides/multiple-apis.md",sourceDirName:"guides",slug:"/guides/multiple-apis",permalink:"/redocusaurus/docs/guides/multiple-apis",draft:!1,unlisted:!1,editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/website/docs/guides/multiple-apis.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Showing Multiple APIs",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Schema Imports",permalink:"/redocusaurus/docs/guides/schema-imports"},next:{title:"Build Time Rendering",permalink:"/redocusaurus/docs/guides/build-time-rendering"}},l={},u=[{value:"Nested View with MDX",id:"nested-view-with-mdx",level:2},{value:"Full Pages with links in Dropdown",id:"full-pages-with-links-in-dropdown",level:2}];function a(e){const i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"nested-view-with-mdx",children:"Nested View with MDX"}),"\n",(0,s.jsxs)(i.p,{children:["To display multiple API docs with the Docusaurus sidebar for navigation you can use the MDX component ",(0,s.jsx)(i.code,{children:"@theme/ApiDocMdx"})," along with the setting ",(0,s.jsx)(i.code,{children:"hide_table_of_contents"}),' for the file. For an example check the "Nested Docs Example" section in the sidebar.']}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-mdx",children:"---\ntitle: API 1 - Swagger Petstore\nhide_table_of_contents: true\n---\n\nimport ApiDocMdx from '@theme/ApiDocMdx';\n\n<ApiDocMdx id=\"using-single-yaml\" />\n"})}),"\n",(0,s.jsxs)(i.p,{children:["The output of the above is viewable here: ",(0,s.jsx)(i.a,{href:"/docs/nested/nested-1",children:"Nested API 1"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"full-pages-with-links-in-dropdown",children:"Full Pages with links in Dropdown"}),"\n",(0,s.jsxs)(i.p,{children:["For a simpler solution just add all the routes in a Navbar Dropdown (see ",(0,s.jsx)(i.a,{href:"https://docusaurus.io/docs/api/themes/configuration#navbar-dropdown",children:"docs"}),'). This is how the "Examples" of this website is structured.']})]})}function c(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},43023:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>d});var s=t(63696);const n={},o=s.createContext(n);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);
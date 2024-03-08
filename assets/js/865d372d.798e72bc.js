"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[902],{50145:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=o(62540),n=o(43023);const r={title:"Plugin Options",sidebar_position:1,author:"Rohit Gohri",author_url:"https://rohit.page"},s=void 0,a={id:"getting-started/plugin-options",title:"Plugin Options",description:"spec (required, string: file path or remote absolute url)",source:"@site/docs/getting-started/plugin-options.md",sourceDirName:"getting-started",slug:"/getting-started/plugin-options",permalink:"/redocusaurus/docs/getting-started/plugin-options",draft:!1,unlisted:!1,editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/website/docs/getting-started/plugin-options.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Plugin Options",sidebar_position:1,author:"Rohit Gohri",author_url:"https://rohit.page"},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/redocusaurus/docs/getting-started/Installation"},next:{title:"Theme Options",permalink:"/redocusaurus/docs/getting-started/theme-options"}},l={},u=[{value:"spec (required, string: file path or remote absolute url)",id:"spec-required-string-file-path-or-remote-absolute-url",level:3},{value:"route (optional, string: relative uri)",id:"route-optional-string-relative-uri",level:3},{value:"url (optional, string: download url)",id:"url-optional-string-download-url",level:3},{value:"layout (optional, object: layoutProps)",id:"layout-optional-object-layoutprops",level:3},{value:"config (optional)",id:"config-optional",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"spec-required-string-file-path-or-remote-absolute-url",children:"spec (required, string: file path or remote absolute url)"}),"\n",(0,i.jsxs)(t.p,{children:["Either a file path to an OpenAPI YAML/JSON file, or a url to one hosted on some website (not the same docusaurus website). Will be ",(0,i.jsx)(t.strong,{children:"parsed"})," at build time and forwarded to Redoc component. We will also automatically generate a single downloadable YAML and add it as a static asset to be used as the download url."]}),"\n",(0,i.jsx)(t.h3,{id:"route-optional-string-relative-uri",children:"route (optional, string: relative uri)"}),"\n",(0,i.jsxs)(t.p,{children:["Route URL at which docs would be available, this will use the theme component ",(0,i.jsx)(t.code,{children:"@theme/ApiDoc"})," from ",(0,i.jsx)(t.code,{children:"docusaurus-theme-redoc"})," to render the page. You can also skip this option and render the docs as you wish using a custom page."]}),"\n",(0,i.jsx)(t.h3,{id:"url-optional-string-download-url",children:"url (optional, string: download url)"}),"\n",(0,i.jsx)(t.p,{children:"A url pointing to an OpenAPI spec. This will be used as download url and spec will be used for rendering. This might be needed because by default the download url will point to a processed and parsed file generated by redocusaurus."}),"\n",(0,i.jsx)(t.h3,{id:"layout-optional-object-layoutprops",children:"layout (optional, object: layoutProps)"}),"\n",(0,i.jsxs)(t.p,{children:["An object to pass as layout props. Useful to set title/description of the page. See all properties available ",(0,i.jsx)(t.a,{href:"https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-plugin-redoc/src/options.ts#L3",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"config-optional",children:"config (optional)"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["Deprecated: Use ",(0,i.jsx)(t.code,{children:"redocly.yaml"})," to specify theme. See ",(0,i.jsx)(t.a,{href:"https://github.com/rohit-gohri/redocusaurus/blob/main/website/redocly.yaml",children:"example"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["Same as config option in ",(0,i.jsx)(t.a,{href:"/redocusaurus/docs/getting-started/Installation#config-optional",children:"root options"})," but specific for loading data."]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},43023:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var i=o(63696);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
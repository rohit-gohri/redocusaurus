/*! For license information please see 257de05e.11991af0.js.LICENSE.txt */
(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[84],{56202:(e,s,t)=>{"use strict";t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>a});var o=t(62540),r=t(43023),n=t(68599);const u={title:"API 2 - Swagger Petstore",hide_table_of_contents:!0},i=void 0,c={id:"nested/nested-2",title:"API 2 - Swagger Petstore",description:"",source:"@site/docs/nested/nested-2.mdx",sourceDirName:"nested",slug:"/nested/nested-2",permalink:"/redocusaurus/docs/nested/nested-2",draft:!1,unlisted:!1,editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/website/docs/nested/nested-2.mdx",tags:[],version:"current",frontMatter:{title:"API 2 - Swagger Petstore",hide_table_of_contents:!0},sidebar:"defaultSidebar",previous:{title:"API 1 - Swagger Petstore",permalink:"/redocusaurus/docs/nested/nested-1"},next:{title:"Who is using Redocusaurus?",permalink:"/redocusaurus/docs/who-is-using-redocusaurus"}},d={},a=[];function l(e){return(0,o.jsx)(n.A,{id:"using-swagger-json"})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l()}},93985:(e,s,t)=>{"use strict";t(16655).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0)},68599:(e,s,t)=>{"use strict";t.d(s,{A:()=>i});var o=t(63696),r=t(8432),n=t(69461),u=t(62540);const i=e=>{let{id:s}=e;const t=(0,n.A)(s),i=(0,o.useMemo)((()=>({theme:{breakpoints:{medium:"130rem",large:"130rem"}}})),[]);return(0,u.jsx)(r.A,{...t,optionsOverrides:i})}},8432:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});t(63696);var o=t(68017),r=(t(93985),t(57654)),n=t(14358),u=t(59598),i=t(62540);function c(e){return(0,i.jsx)("div",{className:"redocusaurus-styles"})}const d=function(e){const{className:s,optionsOverrides:t,...n}=e,{store:d,darkThemeOptions:a,lightThemeOptions:l,hasLogo:m}=(0,u.r)(n,t);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{specProps:n,lightThemeOptions:l,darkThemeOptions:a}),(0,i.jsx)("div",{className:(0,o.A)(["redocusaurus",m&&"redocusaurus-has-logo",s]),children:(0,i.jsx)(r.Redoc,{store:d})})]})};const a=function(e){const{className:s,optionsOverrides:t,spec:u,url:c,themeId:a,isSpecFile:l}=e,{options:m}=(0,n.X)(a,t);return u?(0,i.jsx)(d,{...e,spec:u}):(0,i.jsx)("div",{className:(0,o.A)(["redocusaurus",s]),children:(0,i.jsx)(r.RedocStandalone,{specUrl:c,options:m})})}},69461:(e,s,t)=>{"use strict";t.d(s,{A:()=>n,p:()=>r});var o=t(25466);function r(e){var s;const t=(0,o.kh)("docusaurus-plugin-redoc");return e?null==t?void 0:t[e]:null==(s=Object.values(null!=t?t:{}))?void 0:s[0]}const n=r},59598:(e,s,t)=>{"use strict";t.d(s,{r:()=>a});var o=t(63696),r=t(10883),n=t(86681),u=t(72363),i=(t(93985),t(57654)),c=t(14358);let d=null;function a(e,s){let{spec:t,url:a,themeId:l}=e;const m=(0,c.X)(l,s),p=(0,r.A)(a,{absolute:!0}),h=(0,n.A)(),f="dark"===(0,u.G)().colorMode,g=(0,o.useMemo)((()=>{var e;return null!==d&&h&&d.dispose(),d=new i.AppStore(t,p,m.options),{...m,hasLogo:!(null==(e=t.info)||!e["x-logo"]),store:d}}),[h,t,p,m]);return(0,o.useEffect)((()=>{g.store.onDidMount()}),[g,h,f]),g}},14358:(e,s,t)=>{"use strict";t.d(s,{X:()=>d});var o=t(63696),r=t(86681),n=t(25466),u=t(72363),i=t(25632),c=t.n(i);t(93985);function d(e,s){void 0===e&&(e="theme-redoc");const t=(0,r.A)(),i="dark"===(0,u.G)().colorMode,d=(0,n.kh)("docusaurus-theme-redoc",{failfast:!0}),a=(0,n.P_)("docusaurus-theme-redoc",e)||Object.values(d)[0];return(0,o.useMemo)((()=>{const{lightTheme:e,darkTheme:o,options:r}=a,n={scrollYOffset:t||"string"!=typeof r.scrollYOffset?r.scrollYOffset:0},u=c()({...r,...n,theme:e},s),d=c()({...r,...n,theme:o},s);return{options:t&&i?d:u,darkThemeOptions:d,lightThemeOptions:u}}),[t,i,a,s])}},16820:()=>{},59990:()=>{},3836:()=>{},94033:()=>{},35725:()=>{},67279:()=>{},78237:()=>{},43023:(e,s,t)=>{"use strict";t.d(s,{R:()=>u,x:()=>i});var o=t(63696);const r={},n=o.createContext(r);function u(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:u(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);
/*! For license information please see f0ad3fbb.10008ee6.js.LICENSE.txt */
(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[612],{9949:(e,s,o)=>{"use strict";o(161).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0)},5110:(e,s,o)=>{"use strict";o.r(s),o.d(s,{default:()=>c});o(7378);var t=o(8788),r=o(1550),n=o(4246);const c=function(e){var s,o;let{layoutProps:c,specProps:u}=e;const i=(null==(s=u.spec)||null==(s=s.info)?void 0:s.title)||"API Docs",l=(null==(o=u.spec)||null==(o=o.info)?void 0:o.description)||"Open API Reference Docs for the API";return(0,n.jsx)(t.Z,{title:i,description:l,...c,children:(0,n.jsx)(r.Z,{...u})})}},1550:(e,s,o)=>{"use strict";o.d(s,{Z:()=>d});o(7378);var t=o(8944),r=(o(9949),o(7725)),n=o(6216),c=o(3542),u=o(4246);function i(e){return(0,u.jsx)("div",{className:"redocusaurus-styles"})}const l=function(e){const{className:s,optionsOverrides:o,...n}=e,{store:l,darkThemeOptions:d,lightThemeOptions:a,hasLogo:p}=(0,c.U)(n,o);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{specProps:n,lightThemeOptions:a,darkThemeOptions:d}),(0,u.jsx)("div",{className:(0,t.Z)(["redocusaurus",p&&"redocusaurus-has-logo",s]),children:(0,u.jsx)(r.Redoc,{store:l})})]})};const d=function(e){const{className:s,optionsOverrides:o,spec:c,url:i,themeId:d,isSpecFile:a}=e,{options:p}=(0,n.N)(d,o);return c?(0,u.jsx)(l,{...e,spec:c}):(0,u.jsx)("div",{className:(0,t.Z)(["redocusaurus",s]),children:(0,u.jsx)(r.RedocStandalone,{specUrl:i,options:p})})}},3542:(e,s,o)=>{"use strict";o.d(s,{U:()=>d});var t=o(7378),r=o(8948),n=o(6457),c=o(5421),u=(o(9949),o(7725)),i=o(6216);let l=null;function d(e,s){let{spec:o,url:d,themeId:a}=e;const p=(0,i.N)(a,s),h=(0,r.Z)(d,{absolute:!0}),m=(0,n.Z)(),f="dark"===(0,c.I)().colorMode,v=(0,t.useMemo)((()=>{var e;return null!==l&&m&&l.dispose(),l=new u.AppStore(o,h,p.options),{...p,hasLogo:!(null==(e=o.info)||!e["x-logo"]),store:l}}),[m,o,h,p]);return(0,t.useEffect)((()=>{v.store.onDidMount()}),[v,m,f]),v}},6216:(e,s,o)=>{"use strict";o.d(s,{N:()=>l});var t=o(7378),r=o(6457),n=o(1869),c=o(5421),u=o(5409),i=o.n(u);o(9949);function l(e,s){void 0===e&&(e="theme-redoc");const o=(0,r.Z)(),u="dark"===(0,c.I)().colorMode,l=(0,n.OD)("docusaurus-theme-redoc",{failfast:!0}),d=(0,n.eZ)("docusaurus-theme-redoc",e)||Object.values(l)[0];return(0,t.useMemo)((()=>{const{lightTheme:e,darkTheme:t,options:r}=d,n={scrollYOffset:o||"string"!=typeof r.scrollYOffset?r.scrollYOffset:0},c=i()({...r,...n,theme:e},s),l=i()({...r,...n,theme:t},s);return{options:o&&u?l:c,darkThemeOptions:l,lightThemeOptions:c}}),[o,u,d,s])}},9184:()=>{},6016:()=>{},3715:()=>{},259:()=>{},3421:()=>{},8002:()=>{},7622:()=>{}}]);
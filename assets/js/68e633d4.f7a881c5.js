"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[843],{4142:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(808),a=n(7378),u=n(4289),i=n(353),l=n(5626),o=n(161),c=(0,a.createContext)({collectLink:function(){}}),s=n(8948),d=n(1721),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,m=e.to,b=e.href,h=e.activeClassName,_=e.isActive,g=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,p=void 0===E||E,k=(0,r.Z)(e,f),w=(0,i.Z)().siteConfig,C=w.trailingSlash,y=w.baseUrl,N=(0,s.C)().withBaseUrl,Z=(0,a.useContext)(c),O=m||b,U=(0,l.Z)(O),S=null==O?void 0:O.replace("pathname://",""),L=void 0!==S?(n=S,p&&function(e){return e.startsWith("/")}(n)?N(n):n):void 0;L&&U&&(L=(0,d.applyTrailingSlash)(L,{trailingSlash:C,baseUrl:y}));var M,j=(0,a.useRef)(!1),B=v?u.OL:u.rU,P=o.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!P&&U&&null!=L&&window.docusaurus.prefetch(L),function(){P&&M&&M.disconnect()}}),[L,P,U]);var W=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,A=!L||!U||W;return L&&U&&!W&&!g&&Z.collectLink(L),A?a.createElement("a",Object.assign({href:L},O&&!U&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(B,Object.assign({},k,{onMouseEnter:function(){j.current||null==L||(window.docusaurus.preload(L),j.current=!0)},innerRef:function(e){var t,n;P&&e&&U&&(t=e,n=function(){null!=L&&window.docusaurus.prefetch(L)},(M=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),n())}))}))).observe(t))},to:L||""},v&&{isActive:_,activeClassName:h}))}},5626:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},8948:function(e,t,n){n.d(t,{C:function(){return u},Z:function(){return i}});var r=n(353),a=n(5626);function u(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,u=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var u=void 0===r?{}:r,i=u.forcePrependBaseUrl,l=void 0!==i&&i,o=u.absolute,c=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(u,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,u().withBaseUrl)(e,t)}},9765:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7378),a=n(5361),u=n(4142),i="container_iLOz",l="nav_2vnD",o="navlink_kL_s",c=function(e){var t=e.to,n=e.children;return r.createElement(u.Z,{className:o,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)};var s=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(a.Z,null,r.createElement("html",{lang:"en"}),r.createElement("title",null,"Docusaurus debug panel")),r.createElement("div",null,r.createElement("nav",{className:l},r.createElement(c,{to:"/__docusaurus/debug"},"Config"),r.createElement(c,{to:"/__docusaurus/debug/metadata"},"Metadata"),r.createElement(c,{to:"/__docusaurus/debug/registry"},"Registry"),r.createElement(c,{to:"/__docusaurus/debug/routes"},"Routes"),r.createElement(c,{to:"/__docusaurus/debug/content"},"Content"),r.createElement(c,{to:"/__docusaurus/debug/globalData"},"Global data")),r.createElement("main",{className:i},t)))}},3027:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(7378),a=n(9765),u=n(353),i="sectionTitle_2Z_6",l="list_3SIz",o="listItem_2ulV",c="version_GR1M",s="name_23Qg";var d=function(){var e=(0,u.Z)().siteMetadata;return r.createElement(a.Z,null,r.createElement("h2",null,"Site Metadata"),r.createElement("div",null,"Docusaurus Version: ",r.createElement("code",null,e.docusaurusVersion)),r.createElement("div",null,"Site Version:"," ",r.createElement("code",null,e.siteVersion||"No version specified")),r.createElement("h3",{className:i},"Plugins and themes"),r.createElement("ul",{className:l},Object.entries(e.pluginVersions).map((function(e){var t=e[0],n=e[1];return r.createElement("li",{key:t,className:o},n.version&&r.createElement("div",{className:c},r.createElement("code",null,n.version)),r.createElement("div",{className:s},t),r.createElement("div",null,"Type: ",n.type))}))))}},2520:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,u=e.split(/[#?]/)[0],i="/"===u||u===r?u:(a=u,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(u,i)}},1721:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(2520);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var u=n(9219);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(u).default}})},9219:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);
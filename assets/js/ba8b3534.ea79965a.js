"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[815],{56037:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});t(63696);var a=t(46445),l=t(58227),s=t(62540);function o(e){let{pluginId:n,pluginInstanceContent:t}=e;return(0,s.jsxs)("section",{style:{marginBottom:30},children:[(0,s.jsx)("code",{children:n}),(0,s.jsx)(l.A,{src:t,collapseDepth:2})]})}function r(e){let{pluginName:n,pluginContent:t}=e;return(0,s.jsxs)("section",{style:{marginBottom:60},children:[(0,s.jsx)("h3",{children:n}),(0,s.jsx)("div",{children:Object.entries(t).filter((e=>{let[,n]=e;return!!n})).map((e=>{let[n,t]=e;return(0,s.jsx)(o,{pluginId:n,pluginInstanceContent:t},n)}))})]})}function c(e){let{allContent:n}=e;return(0,s.jsxs)(a.A,{children:[(0,s.jsx)("h2",{children:"Plugin content"}),(0,s.jsx)("div",{children:Object.entries(n).filter((e=>{let[,n]=e;return Object.values(n).some((e=>!!e))})).map((e=>{let[n,t]=e;return(0,s.jsx)(r,{pluginName:n,pluginContent:t},n)}))})]})}},58227:(e,n,t)=>{t.d(n,{A:()=>D});var a=t(63696);const l=e=>"boolean"==typeof e||e instanceof Boolean,s=e=>"number"==typeof e||e instanceof Number,o=e=>"bigint"==typeof e||e instanceof BigInt,r=e=>!!e&&e instanceof Date,c=e=>"string"==typeof e||e instanceof String,u=e=>Array.isArray(e),i=e=>e instanceof Object&&null!==e;let d=1;const m=()=>d++;function p(e){let{field:n,value:t,data:l,lastElement:s,openBracket:o,closeBracket:r,level:c,style:u,shouldExpandNode:i}=e;const d=(0,a.useRef)(!1),[p,b,_]=function(e){const[n,t]=(0,a.useState)(e());return[n,()=>t((e=>!e)),t]}((()=>i(c,t,n)));(0,a.useEffect)((()=>{d.current?_(i(c,t,n)):d.current=!0}),[i]);const h=p?u.collapseIcon:u.expandIcon,f=p?"collapse JSON":"expand JSON",x=function(){const e=(0,a.useRef)();return void 0===e.current&&(e.current=`:jsnvw:${m()}:`),e.current}(),g=c+1,j=l.length-1,E=e=>{" "===e.key&&b()};return(0,a.createElement)("div",{className:u.basicChildStyle,role:"list"},(0,a.createElement)("span",{className:h,onClick:b,onKeyDown:E,role:"button",tabIndex:0,"aria-label":f,"aria-expanded":p,"aria-controls":p?x:void 0}),n&&(0,a.createElement)("span",{className:u.label},n,":"),(0,a.createElement)("span",{className:u.punctuation},o),p?(0,a.createElement)("div",{id:x},l.map(((e,n)=>(0,a.createElement)(v,{key:e[0]||n,field:e[0],value:e[1],style:u,lastElement:n===j,level:g,shouldExpandNode:i})))):(0,a.createElement)("span",{className:u.collapsedContent,onClick:b,onKeyDown:E,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":f,"aria-expanded":p}),(0,a.createElement)("span",{className:u.punctuation},r),!s&&(0,a.createElement)("span",{className:u.punctuation},","))}function b(e){let{field:n,value:t,style:a,lastElement:l,shouldExpandNode:s,level:o}=e;return p({field:n,value:t,lastElement:l||!1,level:o,openBracket:"{",closeBracket:"}",style:a,shouldExpandNode:s,data:Object.keys(t).map((e=>[e,t[e]]))})}function _(e){let{field:n,value:t,style:a,lastElement:l,level:s,shouldExpandNode:o}=e;return p({field:n,value:t,lastElement:l||!1,level:s,openBracket:"[",closeBracket:"]",style:a,shouldExpandNode:o,data:t.map((e=>[void 0,e]))})}function h(e){let{field:n,value:t,style:u,lastElement:i}=e,d=t,m=u.otherValue;return null===t?(d="null",m=u.nullValue):void 0===t?(d="undefined",m=u.undefinedValue):c(t)?(d=`"${t}"`,m=u.stringValue):l(t)?(d=t?"true":"false",m=u.booleanValue):s(t)?(d=t.toString(),m=u.numberValue):o(t)?(d=`${t.toString()}n`,m=u.numberValue):d=r(t)?t.toISOString():t.toString(),""===n&&(n='""'),(0,a.createElement)("div",{className:u.basicChildStyle,role:"listitem"},n&&(0,a.createElement)("span",{className:u.label},n,":"),(0,a.createElement)("span",{className:m},d),!i&&(0,a.createElement)("span",{className:u.punctuation},","))}function v(e){const n=e.value;return u(n)?(0,a.createElement)(_,Object.assign({},e)):i(n)&&!r(n)?(0,a.createElement)(b,Object.assign({},e)):(0,a.createElement)(h,Object.assign({},e))}var f="_2bkNM";const x={container:"_2IvMF _GzYRV",basicChildStyle:f,label:"_1MGIk",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti"},g=()=>!0,j=e=>{let{data:n,style:t=x,shouldExpandNode:l=g}=e;return(0,a.createElement)("div",{className:t.container},(0,a.createElement)(v,{value:n,style:t,lastElement:!0,level:0,shouldExpandNode:l}))},E="containerParaiso_r9la",y="basicElementParaiso_fYQq",N="labelParaiso_EV7e",V="nullValueParaiso_WHpW",I="undefinedValueParaiso_wwoQ",k="stringValueParaiso_erYZ",C="booleanValueParaiso_GQMq",S="numberValueParaiso_bjhG",P="otherValueParaiso_pQsq",O="punctuationParaiso_emZI",A="expandIconParaiso_R7Sg",B="collapseIconParaiso_ImSD",w="collapseContentParaiso_IGoJ";var G=t(62540);const M={container:E,basicChildStyle:y,label:N,nullValue:V,undefinedValue:I,stringValue:k,booleanValue:C,numberValue:S,otherValue:P,punctuation:O,collapseIcon:B,expandIcon:A,collapsedContent:w};function D(e){let{src:n,collapseDepth:t}=e;return(0,G.jsx)(j,{data:n,shouldExpandNode:(e,n)=>Array.isArray(n)?n.length<5:void 0!==t&&e<t,style:M})}},46445:(e,n,t)=>{t.d(n,{A:()=>c});t(63696);var a=t(57854),l=t(45968);const s={container:"container_LJlz",nav:"nav_ZFRq",navlink:"navlink_VL2M",active:"active_L_yI"};var o=t(62540);function r(e){let{to:n,children:t}=e;return(0,o.jsx)(l.A,{className:s.navlink,isNavLink:!0,to:n,exact:!0,activeStyle:{backgroundColor:"#363739"},children:t})}function c(e){let{children:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.A,{children:[(0,o.jsx)("html",{lang:"en"}),(0,o.jsx)("title",{children:"Docusaurus debug panel"}),(0,o.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("nav",{className:s.nav,children:[(0,o.jsx)(r,{to:"/__docusaurus/debug",children:"Config"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/content",children:"Content"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,o.jsx)("main",{className:s.container,children:n})]})]})}}}]);
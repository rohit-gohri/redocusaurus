"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[610],{58227:(e,a,n)=>{n.d(a,{A:()=>O});var t=n(63696);const l=e=>"boolean"==typeof e||e instanceof Boolean,s=e=>"number"==typeof e||e instanceof Number,o=e=>"bigint"==typeof e||e instanceof BigInt,r=e=>!!e&&e instanceof Date,c=e=>"string"==typeof e||e instanceof String,u=e=>Array.isArray(e),i=e=>e instanceof Object&&null!==e;let d=1;const m=()=>d++;function p(e){let{field:a,value:n,data:l,lastElement:s,openBracket:o,closeBracket:r,level:c,style:u,shouldExpandNode:i}=e;const d=(0,t.useRef)(!1),[p,_,h]=function(e){const[a,n]=(0,t.useState)(e());return[a,()=>n((e=>!e)),n]}((()=>i(c,n,a)));(0,t.useEffect)((()=>{d.current?h(i(c,n,a)):d.current=!0}),[i]);const b=p?u.collapseIcon:u.expandIcon,x=p?"collapse JSON":"expand JSON",f=function(){const e=(0,t.useRef)();return void 0===e.current&&(e.current=`:jsnvw:${m()}:`),e.current}(),E=c+1,N=l.length-1,y=e=>{" "===e.key&&_()};return(0,t.createElement)("div",{className:u.basicChildStyle,role:"list"},(0,t.createElement)("span",{className:b,onClick:_,onKeyDown:y,role:"button",tabIndex:0,"aria-label":x,"aria-expanded":p,"aria-controls":p?f:void 0}),a&&(0,t.createElement)("span",{className:u.label},a,":"),(0,t.createElement)("span",{className:u.punctuation},o),p?(0,t.createElement)("div",{id:f},l.map(((e,a)=>(0,t.createElement)(v,{key:e[0]||a,field:e[0],value:e[1],style:u,lastElement:a===N,level:E,shouldExpandNode:i})))):(0,t.createElement)("span",{className:u.collapsedContent,onClick:_,onKeyDown:y,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":x,"aria-expanded":p}),(0,t.createElement)("span",{className:u.punctuation},r),!s&&(0,t.createElement)("span",{className:u.punctuation},","))}function _(e){let{field:a,value:n,style:t,lastElement:l,shouldExpandNode:s,level:o}=e;return p({field:a,value:n,lastElement:l||!1,level:o,openBracket:"{",closeBracket:"}",style:t,shouldExpandNode:s,data:Object.keys(n).map((e=>[e,n[e]]))})}function h(e){let{field:a,value:n,style:t,lastElement:l,level:s,shouldExpandNode:o}=e;return p({field:a,value:n,lastElement:l||!1,level:s,openBracket:"[",closeBracket:"]",style:t,shouldExpandNode:o,data:n.map((e=>[void 0,e]))})}function b(e){let{field:a,value:n,style:u,lastElement:i}=e,d=n,m=u.otherValue;return null===n?(d="null",m=u.nullValue):void 0===n?(d="undefined",m=u.undefinedValue):c(n)?(d=`"${n}"`,m=u.stringValue):l(n)?(d=n?"true":"false",m=u.booleanValue):s(n)?(d=n.toString(),m=u.numberValue):o(n)?(d=`${n.toString()}n`,m=u.numberValue):d=r(n)?n.toISOString():n.toString(),""===a&&(a='""'),(0,t.createElement)("div",{className:u.basicChildStyle,role:"listitem"},a&&(0,t.createElement)("span",{className:u.label},a,":"),(0,t.createElement)("span",{className:m},d),!i&&(0,t.createElement)("span",{className:u.punctuation},","))}function v(e){const a=e.value;return u(a)?(0,t.createElement)(h,Object.assign({},e)):i(a)&&!r(a)?(0,t.createElement)(_,Object.assign({},e)):(0,t.createElement)(b,Object.assign({},e))}var x="_2bkNM";const f={container:"_2IvMF _GzYRV",basicChildStyle:x,label:"_1MGIk",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti"},E=()=>!0,N=e=>{let{data:a,style:n=f,shouldExpandNode:l=E}=e;return(0,t.createElement)("div",{className:n.container},(0,t.createElement)(v,{value:a,style:n,lastElement:!0,level:0,shouldExpandNode:l}))},y="containerParaiso_r9la",g="basicElementParaiso_fYQq",j="labelParaiso_EV7e",V="nullValueParaiso_WHpW",I="undefinedValueParaiso_wwoQ",k="stringValueParaiso_erYZ",S="booleanValueParaiso_GQMq",C="numberValueParaiso_bjhG",P="otherValueParaiso_pQsq",A="punctuationParaiso_emZI",R="expandIconParaiso_R7Sg",w="collapseIconParaiso_ImSD",B="collapseContentParaiso_IGoJ";var G=n(62540);const M={container:y,basicChildStyle:g,label:j,nullValue:V,undefinedValue:I,stringValue:k,booleanValue:S,numberValue:C,otherValue:P,punctuation:A,collapseIcon:w,expandIcon:R,collapsedContent:B};function O(e){let{src:a,collapseDepth:n}=e;return(0,G.jsx)(N,{data:a,shouldExpandNode:(e,a)=>Array.isArray(a)?a.length<5:void 0!==n&&e<n,style:M})}},46445:(e,a,n)=>{n.d(a,{A:()=>c});n(63696);var t=n(57854),l=n(45968);const s={container:"container_LJlz",nav:"nav_ZFRq",navlink:"navlink_VL2M",active:"active_L_yI"};var o=n(62540);function r(e){let{to:a,children:n}=e;return(0,o.jsx)(l.A,{className:s.navlink,isNavLink:!0,to:a,exact:!0,activeStyle:{backgroundColor:"#363739"},children:n})}function c(e){let{children:a}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.A,{children:[(0,o.jsx)("html",{lang:"en"}),(0,o.jsx)("title",{children:"Docusaurus debug panel"}),(0,o.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("nav",{className:s.nav,children:[(0,o.jsx)(r,{to:"/__docusaurus/debug",children:"Config"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/content",children:"Content"}),(0,o.jsx)(r,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,o.jsx)("main",{className:s.container,children:a})]})]})}},88657:(e,a,n)=>{n.r(a),n.d(a,{default:()=>c});n(63696);var t=n(85253),l=n(46445),s=n(58227);const o={listItem:"listItem_VdZP",route:"route_tney",routeName:"routeName_iKQy"};var r=n(62540);function c(){return(0,r.jsxs)(l.A,{children:[(0,r.jsx)("h2",{children:"Routes"}),(0,r.jsx)("ul",{className:"clean-list",children:t.A.map((e=>{let{path:a,exact:n,routes:t}=e;return(0,r.jsxs)("li",{className:o.listItem,children:[(0,r.jsx)("div",{className:o.route,children:(0,r.jsx)("code",{className:o.routeName,children:a})}),(0,r.jsxs)("div",{children:["Is exact: ",(0,r.jsx)("code",{children:String(Boolean(n))})]}),t&&(0,r.jsxs)("div",{children:["Child Routes:",(0,r.jsx)(s.A,{src:t})]})]},a)}))})]})}}}]);
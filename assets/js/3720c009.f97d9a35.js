"use strict";(self.webpackChunkhanamaru_openchat_pages=self.webpackChunkhanamaru_openchat_pages||[]).push([[787],{2194:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});a(6540);var s=a(4164),n=a(1213),r=a(7559),l=a(6820),c=a(2557),i=a(1463),g=a(1107),o=a(4848);function u(e){let{title:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.be,{title:t}),(0,o.jsx)(i.A,{tag:"doc_tags_list"})]})}function h(e){let{tags:t,title:a}=e;return(0,o.jsx)(n.e3,{className:(0,s.A)(r.G.page.docsTagsListPage),children:(0,o.jsx)("div",{className:"container margin-vert--lg",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,o.jsx)(g.A,{as:"h1",children:a}),(0,o.jsx)(c.A,{tags:t})]})})})})}function d(e){const t=(0,l.b)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{...e,title:t}),(0,o.jsx)(h,{...e,title:t})]})}},6133:(e,t,a)=>{a.d(t,{A:()=>c});a(6540);var s=a(4164),n=a(8774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=a(4848);function c(e){let{permalink:t,label:a,count:c}=e;return(0,l.jsxs)(n.A,{href:t,className:(0,s.A)(r.tag,c?r.tagWithCount:r.tagRegular),children:[a,c&&(0,l.jsx)("span",{children:c})]})}},2557:(e,t,a)=>{a.d(t,{A:()=>g});a(6540);var s=a(6820),n=a(6133),r=a(1107);const l={tag:"tag_Nnez"};var c=a(4848);function i(e){let{letterEntry:t}=e;return(0,c.jsxs)("article",{children:[(0,c.jsx)(r.A,{as:"h2",id:t.letter,children:t.letter}),(0,c.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,c.jsx)("li",{className:l.tag,children:(0,c.jsx)(n.A,{...e})},e.permalink)))}),(0,c.jsx)("hr",{})]})}function g(e){let{tags:t}=e;const a=(0,s.Q)(t);return(0,c.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,c.jsx)(i,{letterEntry:e},e.letter)))})}},6820:(e,t,a)=>{a.d(t,{Q:()=>r,b:()=>n});var s=a(1312);const n=()=>(0,s.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);
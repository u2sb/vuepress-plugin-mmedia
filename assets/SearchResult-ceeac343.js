import{u as te,a as x,O as ae,b as le,l as b,W as ne,c as oe}from"./app-78152aec.js";import{r as L,h as z,c as se,u as re,L as ie,a8 as ce,o as ue,n as de,j as l,a9 as P,z as ve,K as he,i as fe}from"./framework-0a2caba1.js";function pe(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}else return Array.from(t)}var R=!1;if(typeof window<"u"){var I={get passive(){R=!0}};window.addEventListener("testPassive",null,I),window.removeEventListener("testPassive",null,I)}var G=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),w=[],B=!1,A=-1,H=void 0,S=void 0,q=function(e){return w.some(function(a){return!!(a.options.allowTouchMove&&a.options.allowTouchMove(e))})},O=function(e){var a=e||window.event;return q(a.target)||a.touches.length>1?!0:(a.preventDefault&&a.preventDefault(),!1)},ye=function(e){if(S===void 0){var a=!!e&&e.reserveScrollBarGap===!0,n=window.innerWidth-document.documentElement.clientWidth;a&&n>0&&(S=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}H===void 0&&(H=document.body.style.overflow,document.body.style.overflow="hidden")},me=function(){S!==void 0&&(document.body.style.paddingRight=S,S=void 0),H!==void 0&&(document.body.style.overflow=H,H=void 0)},ge=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},we=function(e,a){var n=e.targetTouches[0].clientY-A;return q(e.target)?!1:a&&a.scrollTop===0&&n>0||ge(a)&&n<0?O(e):(e.stopPropagation(),!0)},Le=function(e,a){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!w.some(function(o){return o.targetElement===e})){var n={targetElement:e,options:a||{}};w=[].concat(pe(w),[n]),G?(e.ontouchstart=function(o){o.targetTouches.length===1&&(A=o.targetTouches[0].clientY)},e.ontouchmove=function(o){o.targetTouches.length===1&&we(o,e)},B||(document.addEventListener("touchmove",O,R?{passive:!1}:void 0),B=!0)):ye(a)}},He=function(){G?(w.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),B&&(document.removeEventListener("touchmove",O,R?{passive:!1}:void 0),B=!1),A=-1):me(),w=[]};const Se="eJyFUV1LG0EU/SvLPAcLfcxbodBSKAgthVL6EM2YLGwTyc5CiwSW6qrp7nZjIlLjFqs2NU1N8KHKms3Hj3Hu7OyTf8GJq+soiC/DnDP3njn33CX0BGXFUTDUPL66EpVoGGURDe0odFEGzZdLBJeIjrIfllAR5/K4Ij/rmlF4oBzRwKRBly+PwO8o7wy8WMG6rtCgB5N/sbnLvAZYbeg26KjJfq1FvXHUWhEkDU+FEDgWs4/oaJUGLg2teLtOB99p2KaBzRo9tjmG7c7FsCUqny1quS/CVQa9xkQtFV69EdfnKQnNTWj+TU4BeXsSNX1+uBrvbwj4vmy8NebwVKZCZpOej9WMNCpb2eXH+7ejplgelflH8d5ZtNOn45/8ZCvxmTCPO5R/Fn/frEMt6SSnaTNF8kmTV5OkB0MTDu0HFwT9Gj+wbl2n+I5rrx79HghS2ISaqzyd+ayw3gEMvai2zic/mN8FbwOC5YuhkwhAw2E7/9nWceybrGbDtw5z1qDfEvUignPz6zThSZ3vOfdSjC03Gk2zuPaTYsnP3Q4IB7wvdaRYniAhEzFFL5YNLT9bwQuYzBezykJO03HmnhHw3PjPuiR7g2XZFyp5acxdraNavQTfB3zD";const V=()=>l(b,{name:"close"},()=>l("path",{d:"m925.468 822.294-303.27-310.288L925.51 201.674c34.683-27.842 38.3-75.802 8.122-107.217-30.135-31.37-82.733-34.259-117.408-6.463L512.001 399.257 207.777 87.993C173.1 60.197 120.504 63.087 90.369 94.456c-30.179 31.415-26.561 79.376 8.122 107.217L401.8 512.005l-303.27 310.29c-34.724 27.82-38.34 75.846-8.117 107.194 30.135 31.437 82.729 34.327 117.408 6.486L512 624.756l304.177 311.22c34.68 27.84 87.272 24.95 117.408-6.487 30.223-31.348 26.56-79.375-8.118-107.195z"}));V.displayName="CloseIcon";const W=()=>l(b,{name:"heading"},()=>l("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));W.displayName="HeadingIcon";const Y=()=>l(b,{name:"heart"},()=>l("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));Y.displayName="HeartIcon";const K=()=>l(b,{name:"history"},()=>l("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));K.displayName="HistoryIcon";const Z=()=>l(b,{name:"title"},()=>l("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));Z.displayName="TitleIcon";const be={},Te=300,U=5,Ce={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",select:"选择",navigate:"切换",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},ze="search-pro-history-results",m=te(ze,[]),Be=()=>({history:m,addHistory:t=>{m.value.length<U?m.value=[t,...m.value]:m.value=[t,...m.value.slice(0,U-1)]},removeHistory:t=>{m.value=[...m.value.slice(0,t),...m.value.slice(t+1)]}}),Oe=L(Se),je=z(()=>JSON.parse(ne(Oe.value))),C=(t,e)=>{const a=t.toLowerCase(),n=e.toLowerCase(),o=[];let r=0,v=0;const h=(s,f=!1)=>{let i="";v===0?i=s.length>20?`… ${s.slice(-20)}`:s:f?i=s.length+v>100?`${s.slice(0,100-v)}… `:s:i=s.length>20?`${s.slice(0,20)} … ${s.slice(-20)}`:s,i&&o.push(i),v+=i.length,f||(o.push(["strong",e]),v+=e.length,v>=100&&o.push(" …"))};let p=a.indexOf(n,r);if(p===-1)return null;for(;p>=0;){const s=p+n.length;if(h(t.slice(r,p)),r=s,v>100)break;p=a.indexOf(n,r)}return v<100&&h(t.slice(r),!0),o},$=t=>t.reduce((e,{type:a})=>e+(a==="title"?50:a==="heading"?20:a==="custom"?10:1),0),ke=(t,e)=>{var a;const n={};for(const[o,r]of Object.entries(e)){const v=((a=e[o.replace(/\/[^\\]*$/,"")])==null?void 0:a.title)||"",h=`${v?`${v} > `:""}${r.title}`,p=C(r.title,t);p&&(n[h]=[...n[h]||[],{type:"title",path:o,display:p}]),r.customFields&&Object.entries(r.customFields).forEach(([s,f])=>{f.forEach(i=>{const c=C(i,t);c&&(n[h]=[...n[h]||[],{type:"custom",path:o,index:s,display:c}])})});for(const s of r.contents){const f=C(s.header,t);f&&(n[h]=[...n[h]||[],{type:"heading",path:o+(s.slug?`#${s.slug}`:""),display:f}]);for(const i of s.contents){const c=C(i,t);c&&(n[h]=[...n[h]||[],{type:"content",header:s.header,path:o+(s.slug?`#${s.slug}`:""),display:c}])}}}return Object.keys(n).sort((o,r)=>$(n[o])-$(n[r])).map(o=>({title:o,contents:n[o]}))},Ee=t=>{const e=x(),a=L([]),n=z(()=>je.value[e.value]),o=oe(r=>{a.value=r?ke(r,n.value):[]},Te);return ve([t,e],()=>{o(t.value)}),a};var De=se({name:"SearchResult",props:{query:{type:String,required:!0}},emits:{close:()=>!0,updateQuery:t=>!0},setup(t,{emit:e}){const a=re(),n=ie(),o=x(),r=ae(Ce),{history:v,addHistory:h,removeHistory:p}=Be(),s=ce(t,"query"),f=Ee(s),i=L(0),c=L(0),D=L(),j=z(()=>f.value.length>0),k=z(()=>f.value[i.value]||null),Q=()=>{i.value=i.value>0?i.value-1:f.value.length-1,c.value=k.value.contents.length-1},J=()=>{i.value=i.value<f.value.length-1?i.value+1:0,c.value=0},X=()=>{c.value<k.value.contents.length-1?c.value=c.value+1:J()},_=()=>{c.value>0?c.value=c.value-1:Q()},F=u=>u.map(d=>fe(d)?d:l(d[0],d[1])),M=u=>{if(u.type==="custom"){const d=be[u.index]||"$content",[g,T=""]=he(d)?d[o.value].split("$content"):d.split("$content");return F([g,...u.display,T])}return F(u.display)},E=()=>{i.value=0,c.value=0,e("updateQuery",""),e("close")};return ue(()=>{le("keydown",u=>{if(j.value){if(u.key==="ArrowUp")_();else if(u.key==="ArrowDown")X();else if(u.key==="Enter"){const d=k.value.contents[c.value];n.path!==d.path&&(h(d),a.push(d.path),E())}}}),Le(D.value,{reserveScrollBarGap:!0})}),de(()=>{He()}),()=>l("div",{class:["search-pro-result",{empty:s.value===""?v.value.length===0:!j.value}],ref:D},s.value===""?v.value.length?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},r.value.history),v.value.map((u,d)=>l(P,{to:u.path,class:["search-pro-result-item",{active:c.value===d}],onClick:()=>{console.log("click"),E()}},()=>[l(K,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[u.type==="content"&&u.header?l("div",{class:"content-header"},u.header):null,l("div",M(u))]),l("button",{class:"search-pro-close-icon",onClick:g=>{g.preventDefault(),g.stopPropagation(),p(d)}},l(V))]))])):r.value.emptyHistory:j.value?l("ul",{class:"search-pro-result-list"},f.value.map(({title:u,contents:d},g)=>{const T=i.value===g;return l("li",{class:["search-pro-result-list-item",{active:T}]},[l("div",{class:"search-pro-result-title"},u||"Documentation"),d.map((y,ee)=>{const N=T&&c.value===ee;return l(P,{to:y.path,class:["search-pro-result-item",{active:N,"aria-selected":N}],onClick:()=>{h(y),E()}},()=>[y.type==="content"?null:l(y.type==="title"?Z:y.type==="heading"?W:Y,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[y.type==="content"&&y.header?l("div",{class:"content-header"},y.header):null,l("div",M(y))])])})])})):r.value.emptyResult)}});export{De as default};

import{u as U,f as ee,n as B,p as M,q as le,t as ae,v as se,g as x,h as b,x as te,y as Y,l as a,z as _,A as F,R as I,B as ue,C as re,D as ne,E as ie,F as oe,O as ce,s as ve,k as pe,G as he,H as ye,I as de,J as me,K as E,L as fe}from"./app-fb5286f1.js";const ge="SEARCH_PRO_QUERY_HISTORY",y=U(ge,[]),Re=()=>{const{queryHistoryCount:u}=E,i=u>0;return{enabled:i,queryHistory:y,addQueryHistory:t=>{i&&(y.value.length<u?y.value=Array.from(new Set([t,...y.value])):y.value=Array.from(new Set([t,...y.value.slice(0,u-1)])))},removeQueryHistory:t=>{y.value=[...y.value.slice(0,t),...y.value.slice(t+1)]}}},He="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:D}=E,d=U(He,[]),Qe=()=>{const u=B(),i=D>0,t=s=>u.resolve({name:s.key,..."anchor"in s?{hash:`#${s.anchor}`}:{}}).fullPath;return{enabled:i,resultHistory:d,addResultHistory:s=>{if(i){const r={link:t(s),display:s.display};"header"in s&&(r.header=s.header),d.value.length<D?d.value=[r,...d.value]:d.value=[r,...d.value.slice(0,D-1)]}},removeResultHistory:s=>{d.value=[...d.value.slice(0,s),...d.value.slice(s+1)]}}},ke=u=>{const i=oe(),t=M(),{search:s,terminate:r}=ce(),f=x(!1),g=ve([]);return pe(()=>{const m=()=>{g.value=[],f.value=!1},w=fe(R=>{f.value=!0,R?s({type:"search",query:R,locale:t.value,options:i}).then(h=>{g.value=h,f.value=!1}).catch(h=>{console.error(h),m()}):m()},E.searchDelay);Y([u,t],()=>w(u.value),{immediate:!0}),he(()=>{r()})}),{searching:f,results:g}};var we=ee({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(u,{emit:i}){const t=B(),s=M(),r=le(ae),{enabled:f,addQueryHistory:g,queryHistory:m,removeQueryHistory:w}=Re(),{enabled:R,resultHistory:h,addResultHistory:L,removeResultHistory:z}=Qe(),O=f||R,S=se(u,"query"),{results:H,searching:G}=ke(S),o=x({isQuery:!0,index:0}),p=x(0),c=x(0),P=b(()=>O&&(m.value.length>0||h.value.length>0)),C=b(()=>H.value.length>0),q=b(()=>H.value[p.value]||null),T=e=>t.resolve({name:e.key,..."anchor"in e?{hash:`#${e.anchor}`}:{}}).fullPath,J=()=>{const{isQuery:e,index:l}=o.value;l===0?o.value={isQuery:!e,index:e?h.value.length-1:m.value.length-1}:o.value={isQuery:e,index:l-1}},K=()=>{const{isQuery:e,index:l}=o.value;l===(e?m.value.length-1:h.value.length-1)?o.value={isQuery:!e,index:0}:o.value={isQuery:e,index:l+1}},V=()=>{p.value=p.value>0?p.value-1:H.value.length-1,c.value=q.value.contents.length-1},j=()=>{p.value=p.value<H.value.length-1?p.value+1:0,c.value=0},N=()=>{c.value<q.value.contents.length-1?c.value=c.value+1:j()},W=()=>{c.value>0?c.value=c.value-1:V()},A=e=>e.map(l=>ye(l)?l:a(l[0],l[1])),X=e=>{if(e.type==="customField"){const l=de[e.index]||"$content",[n,k=""]=me(l)?l[s.value].split("$content"):l.split("$content");return e.display.map(v=>A([n,...v,k])).flat()}return e.display.map(l=>A(l)).flat()},Q=()=>{p.value=0,c.value=0,i("updateQuery",""),i("close")};return te("keydown",e=>{if(u.isFocusing){if(C.value){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const l=q.value.contents[c.value],n=T(l);g(u.query),L(l),t.push(n),Q()}}else if(R){if(e.key==="ArrowUp")J();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const{index:l}=o.value;o.value.isQuery?(i("updateQuery",m.value[l]),e.preventDefault()):(t.push(h.value[l].link),Q())}}}}),Y([p,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:S.value?!C.value:!P.value}],id:"search-pro-results"},S.value===""?O?P.value?[f?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},r.value.history),m.value.map((e,l)=>a("div",{class:["search-pro-result-item",{active:o.value.isQuery&&o.value.index===l}],onClick:()=>{i("updateQuery",e)}},[a(_,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-close-icon",innerHTML:F,onClick:n=>{n.preventDefault(),n.stopPropagation(),w(l)}})]))])):null,R?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},r.value.history),h.value.map((e,l)=>a(I,{to:e.link,class:["search-pro-result-item",{active:!o.value.isQuery&&o.value.index===l}],onClick:()=>{Q()}},()=>[a(_,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(n=>A(n)).flat())]),a("button",{class:"search-pro-close-icon",innerHTML:F,onClick:n=>{n.preventDefault(),n.stopPropagation(),z(l)}})]))])):null]:r.value.emptyHistory:r.value.emptyResult:G.value?a(ue,{hint:r.value.searching}):C.value?a("ul",{class:"search-pro-result-list"},H.value.map(({title:e,contents:l},n)=>{const k=p.value===n;return a("li",{class:["search-pro-result-list-item",{active:k}]},[a("div",{class:"search-pro-result-title"},e||r.value.defaultTitle),l.map((v,Z)=>{const $=k&&c.value===Z;return a(I,{to:T(v),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{g(u.query),L(v),Q()}},()=>[v.type==="text"?null:a(v.type==="title"?re:v.type==="heading"?ne:ie,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[v.type==="text"&&v.header?a("div",{class:"content-header"},v.header):null,a("div",X(v))])])})])})):r.value.emptyResult)}});export{we as default};

(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(5),r=c.n(s),a=c(2),i=c.n(a),j=c(4),d=c(6),h=c(0),o=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],r=function(){var e=Object(j.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c.statewise),s(c.statewise);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(j.a)(i.a.mark((function e(){var t,c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/summary");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=c.Countries[76].NewConfirmed,alert("New Confirmed Cases in India : ".concat(n," \n        Stay Safe! India"));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r(),a()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container mt-5",children:[Object(h.jsx)("div",{className:"main-heading",children:Object(h.jsxs)("h1",{className:"mb-5 text-center",children:["COVID-19 Dashboard ",Object(h.jsx)("br",{})," ",Object(h.jsx)("span",{children:"INDIA"})]})}),Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)("table",{className:"table table-hover ",children:[Object(h.jsx)("thead",{className:"table-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"State"}),Object(h.jsx)("th",{children:"Confirmed"}),Object(h.jsx)("th",{children:"Active"}),Object(h.jsx)("th",{children:"Recoverd"}),Object(h.jsx)("th",{children:"Deaths"}),Object(h.jsx)("th",{children:"Last Update"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.state}),Object(h.jsx)("td",{children:e.confirmed}),Object(h.jsx)("td",{children:e.active}),Object(h.jsx)("td",{children:e.recovered}),Object(h.jsx)("td",{children:e.deaths}),Object(h.jsx)("td",{children:e.lastupdatedtime})]})}))})]})})]}),Object(h.jsx)("h6",{children:"-Harsh Nigam"})]})},b=(c(13),c(14),function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(o,{})})});r.a.render(Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.65ab19e3.chunk.js.map
(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{31:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(23),n=c.n(s),r=c(11),i=c(3),j=c(2),l=c.n(j),d=c(8),b=c(17),o=c(16),h=c(0),x=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],n=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,s(c.statewise),a=c.cases_time_series[c.cases_time_series.length-1],console.log(c),alert('New covid cases  "'.concat(a.dailyconfirmed,'" on ').concat(a.date)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert(" ".concat(e.t0,", Please try again after sometime. . \u2757"));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){n()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container mt-5",children:[Object(h.jsx)("div",{className:"main-heading",children:Object(h.jsxs)("h1",{className:"mb-5 text-center",children:["COVID-19 Dashboard of ",Object(h.jsx)("br",{})," ",Object(h.jsxs)("b",{children:[Object(h.jsx)("span",{children:"INDIA"})," "]})," ",Object(h.jsx)("br",{}),Object(h.jsx)("p",{style:{fontSize:"50%"},children:Object(h.jsx)(o.a,{loop:1/0,steps:["\ud83d\ude37 Wear Mask \ud83d\ude37",4e3,"\ud83c\udfe1 Stay Home \ud83c\udfe1",4e3,"\ud83d\ude42 Stay Safe \ud83d\ude42",4e3]})})]})}),Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)("table",{className:"table table-hover ",children:[Object(h.jsx)("thead",{className:"table-dark ",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"State"}),Object(h.jsx)("th",{children:"Confirmed"}),Object(h.jsx)("th",{children:"Active"}),Object(h.jsx)("th",{children:"Recoverd"}),Object(h.jsx)("th",{children:"Deaths"}),Object(h.jsx)("th",{children:"Last Update"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.state}),Object(h.jsx)("td",{children:e.confirmed}),Object(h.jsx)("td",{children:e.active}),Object(h.jsx)("td",{children:e.recovered}),Object(h.jsx)("td",{children:e.deaths}),Object(h.jsx)("td",{children:e.lastupdatedtime})]})}))})]})})]}),Object(h.jsx)("h6",{children:"-Harsh Nigam"})]})},O=(c(31),c(32),function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],n=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,s(c.cases_time_series),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(" ".concat(e.t0,", Please try again after sometime. . \u2757"));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){n()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container mt-5",children:[Object(h.jsx)("div",{className:"main-heading",children:Object(h.jsxs)("h1",{className:"mb-5 text-center",children:[Object(h.jsx)("b",{children:"Daily"})," cases of Covid-19 (India)",Object(h.jsx)("p",{style:{fontSize:"50%"},children:Object(h.jsx)(o.a,{loop:1/0,steps:["\ud83d\ude37 Wear Mask \ud83d\ude37",3e3,"\ud83c\udfe1 Stay Home \ud83c\udfe1",3e3,"\ud83d\ude42 Stay Safe \ud83d\ude42",3e3]})})]})}),Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)("table",{className:"table table-hover ",children:[Object(h.jsx)("thead",{className:"table-dark ",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Last Update"}),Object(h.jsx)("th",{children:"Daily Confirmed"}),Object(h.jsx)("th",{children:"Daily Deaths"}),Object(h.jsx)("th",{children:"Daily Recoverd"})]})}),Object(h.jsx)("tbody",{children:c.reverse().map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.date}),Object(h.jsx)("td",{children:e.dailyconfirmed}),Object(h.jsx)("td",{children:e.dailydeceased}),Object(h.jsx)("td",{children:e.dailyrecovered})]})}))})]})})]}),Object(h.jsx)("h6",{children:"-Harsh Nigam"})]})}),v=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(h.jsxs)("div",{class:"container-fluid",children:[Object(h.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{class:"navbar-toggler-icon"})}),Object(h.jsx)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(h.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(r.b,{exact:!0,activeClassName:"nav-link active active_class",style:{textDecoration:"none"},to:"/covid-19",children:"  Daily Data  "})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(r.b,{exact:!0,activeClassName:"nav-link active active_class",style:{textDecoration:"none"},to:"/covid-19/statewise",children:" Statewise Data   "})})]})})]})})})},m=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/covid-19",component:O}),Object(h.jsx)(i.a,{exact:!0,path:"/covid-19/statewise",component:x})]})]})};n.a.render(Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(r.a,{children:Object(h.jsx)(m,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f96d8c0c.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[22],{22:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=t(433),i=t(439),r=t(154),c=t(791),s=t(861),o=t(687),l=t.n(o),u=t(243),h={method:"GET",url:"https://api.themoviedb.org/3/trending/all/day?api_key=e3d680b6e1d63d40d03962db80e2a1a0rfvb ",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2Q2ODBiNmUxZDYzZDQwZDAzOTYyZGI4MGUyYTFhMCIsInN1YiI6IjY0NjRjMmU2ZDA1YTAzMDExOWRlYzU2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q0ZQUwtEPrByjiIx7f7hGYHdbh5ojLcYEsIIKeW2RXE")}},d=function(){var e=(0,s.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.Z.request(h).then((function(e){return e.data})).catch((function(e){console.error(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=t(565),f=t(689),Z=t(87),p=t(184),j="idle",_="panding",I="rejected",v="resolved",x=function(){var e=(0,m.a)().setId,n=(0,c.useState)([]),t=(0,i.Z)(n,2),s=t[0],o=t[1],l=(0,c.useState)(j),u=(0,i.Z)(l,2),h=u[0],x=u[1],N=(0,f.TH)();(0,c.useEffect)((function(){x(_),d().then((function(e){o((0,a.Z)(e.results)),x(v)})).catch((function(e){console.error(e),x(I)}))}),[]);var y=function(n){e(n)};return(0,p.jsxs)("div",{className:r.Z.home,children:[(0,p.jsx)("h1",{className:r.Z.home_title,children:"Trending Today"}),h===_&&(0,p.jsx)("p",{className:r.Z.home_title,children:"Loading..."}),h===v&&(0,p.jsx)("ul",{className:r.Z.home_list,children:s.map((function(e){var n=e.title,t=e.id,a=e.name;return n?(0,p.jsx)("li",{onClick:function(){y(t)},className:r.Z.home_item,children:(0,p.jsx)(Z.rU,{className:r.Z.home_link,to:"/movies/".concat(t),state:{from:N},children:n})},t):(0,p.jsx)("li",{onClick:function(){y(t)},className:r.Z.home_item,children:(0,p.jsx)(Z.rU,{className:r.Z.home_link,to:"/movies/".concat(t),state:{from:N},children:a})},t)}))})]})}}}]);
//# sourceMappingURL=22.24a95a8a.chunk.js.map
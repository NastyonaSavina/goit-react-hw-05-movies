"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{545:function(n,e,t){t.d(e,{O:function(){return m}});var r,c,o,a,i=t(689),u=t(168),s=t(87),f=t(444),l=f.ZP.ul(r||(r=(0,u.Z)(["\nlist-style-type: circle;\nmargin-left: 20px;\n\n"]))),d=f.ZP.li(c||(c=(0,u.Z)(["\n    color: black;\n    :hover {\n        color: #0920e7;}\n\n"]))),p=(0,f.ZP)(s.rU)(o||(o=(0,u.Z)(["\n    text-decoration: none;\n    color: black;\n    :hover {\n        color: #0920e7;}\n"]))),h=f.ZP.p(a||(a=(0,u.Z)(["\n    padding: 5px;\n    margin-top: 0px;\n    margin-bottom: 0;\n"]))),v=t(184);function m(n){var e=n.movies,t=(0,i.TH)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(l,{children:e.map((function(n){return[(0,v.jsx)(d,{children:(0,v.jsx)(p,{to:"/movies/".concat(n.id),state:{from:t},children:(0,v.jsx)(h,{children:n.title})})},n.id)]}))})})}},485:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r,c=t(439),o=t(52),a=t(791),i=t(545),u=t(168),s=t(444).ZP.h1(r||(r=(0,u.Z)(["\n    margin-left: 20px;\n"]))),f=t(184),l=function(){var n=(0,a.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1];return(0,a.useEffect)((function(){(0,o.kI)().then((function(n){r(n.results)}))}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{children:" Tranding today:"}),0!==t.length&&(0,f.jsx)(i.O,{movies:t})]})}},52:function(n,e,t){t.d(e,{DG:function(){return l},Eb:function(){return d},Ph:function(){return h},kI:function(){return f},tx:function(){return p}});var r=t(861),c=t(757),o=t.n(c),a="10612ebbbeaf2ad5999e09badf85e183",i="https://api.themoviedb.org/3/";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(o().mark((function n(){var e,t,r,c=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return u("".concat(i,"trending/movie/day?api_key=").concat(a))}function l(n){return u("".concat(i,"/movie/").concat(n,"?api_key=").concat(a,"&language=en-US"))}function d(n){return u("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(a,"&language=en-US"))}function p(n){return u("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}function h(n){return u("".concat(i,"/search/movie?api_key=").concat(a,"&language=en-US&page=1&include_adult=false&query=").concat(n))}},861:function(n,e,t){function r(n,e,t,r,c,o,a){try{var i=n[o](a),u=i.value}catch(s){return void t(s)}i.done?e(u):Promise.resolve(u).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,o){var a=n.apply(e,t);function i(n){r(a,c,o,i,u,"next",n)}function u(n){r(a,c,o,i,u,"throw",n)}i(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=485.0e68539c.chunk.js.map
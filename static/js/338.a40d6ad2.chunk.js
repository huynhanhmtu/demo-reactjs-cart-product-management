"use strict";(self.webpackChunkdemo_reactjs_movie=self.webpackChunkdemo_reactjs_movie||[]).push([[338],{7338:function(e,n,i){i.r(n),i.d(n,{default:function(){return v}});var t=i(2791),c=i(6030),a=i(4191),s=i(1523),r=i(184);function o(e){var n=e.movie;return(0,r.jsx)("div",{className:"col-md-3 p-3",children:(0,r.jsxs)("div",{className:"card overflow-hidden",children:[(0,r.jsx)("img",{className:"card-img-top d-inline-block",src:n.hinhAnh,alt:n.biDanh,style:{height:350,minWidth:"100%"}}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("h5",{className:"card-title",children:[n.tenPhim.substring(0,18),n.tenPhim.length>18?"...":""]}),(0,r.jsx)(s.rU,{className:"btn btn-success",to:"./detail/".concat(n.maPhim),children:"Detail"})]})]})})}var u=i(462),d=i(8639),l=function(){return{type:u.$E}},h=function(e){return{type:u.z8,payload:e}},m=function(e){return{type:u.EG,payload:e}};function v(){var e=(0,c.I0)(),n=(0,c.v9)((function(e){return e.listMoviesReducer.listMovie})),i=(0,c.v9)((function(e){return e.listMoviesReducer.loading})),s=(0,c.v9)((function(e){return e.listMoviesReducer.error}));return(0,t.useEffect)((function(){e((function(e){e(l()),d.Z.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP02").then((function(n){e(h(n.data.content))})).catch((function(n){e(m(n))}))}))}),[]),i?(0,r.jsx)(a.Z,{}):(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:s?(0,r.jsx)("div",{className:"m-auto p-3",children:s}):n?n.map((function(e){return(0,r.jsx)(o,{movie:e},e.maPhim)})):void 0})})}}}]);
//# sourceMappingURL=338.a40d6ad2.chunk.js.map
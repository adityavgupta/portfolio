(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{32:function(e,t){},40:function(e,t,c){},41:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},75:function(e,t){},76:function(e,t){},77:function(e,t){},78:function(e,t){},79:function(e,t){},80:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(33),i=c.n(a),s=(c(40),c(41),c(6)),r=c(7),j=c(9),o=c(8),l=[{title:"Home",url:"/portfolio",cName:"nav-links"},{title:"About",url:"/about",cName:"nav-links"},{title:"Education",url:"/education",cName:"nav-links"},{title:"Resume",url:"/resume",cName:"nav-links"}],b=c(18),u=c(2),h=function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsx)("li",{id:this.props.item,children:Object(u.jsx)(b.b,{to:this.props.tolink,className:this.props.clName,children:this.props.item})})}}]),c}(n.Component),d=c(5),O=(c(47),function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("nav",{className:"NavbarItems",children:[Object(u.jsx)("h1",{className:"navbar-logo",children:"Aditya V. Gupta "}),Object(u.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(u.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(u.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:l.map((function(t,c){return Object(u.jsx)(h,{item:t.title,tolink:t.url,clName:e.state.clicked?t.cName+" active":t.cName},c)}))})]})}}]),c}(n.Component)),m=Object(d.f)(O),p=c(35),f=c.n(p),x=c.p+"static/media/Home_avg.391adf84.jpeg",v=function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"social",children:[Object(u.jsx)("a",{href:"https://github.com/adityavgupta",rel:"noreferrer",target:"_blank",children:Object(u.jsx)("i",{className:"fab fa-github"})}),Object(u.jsx)("a",{href:"https://www.instagram.com/adityag112/",rel:"noreferrer",target:"_blank",children:Object(u.jsx)("i",{className:"fab fa-instagram"})}),Object(u.jsx)("a",{href:"https://www.facebook.com/gupta.adityav/",rel:"noreferrer",target:"_blank",children:Object(u.jsx)("i",{className:"fab fa-facebook-f"})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/aditya-vikram-gupta-614692146/",rel:"noreferrer",target:"_blank",children:Object(u.jsx)("i",{className:"fab fa-linkedin-in"})})]})}}]),c}(n.Component),k=function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"condiv_home",children:[Object(u.jsx)("div",{className:"child",children:Object(u.jsx)("img",{src:x,className:"ProfilePic",alt:""})}),Object(u.jsxs)("div",{className:"child",children:[Object(u.jsx)("h1",{className:"HomeText",children:Object(u.jsx)(f.a,{text:["Hi, I am Aditya."],speed:100,eraseDelay:5e5})}),Object(u.jsx)("hr",{}),Object(u.jsx)("h2",{children:" Developer "}),Object(u.jsx)("h2",{children:" Student "}),Object(u.jsx)("h2",{children:" Researcher "}),Object(u.jsx)("h2",{children:" ML Enthusiast "}),Object(u.jsx)("hr",{}),Object(u.jsx)("h1",{children:"Let's stay connected!"}),Object(u.jsx)("h3",{children:"Ph: +1 (217)904-9045"}),Object(u.jsx)("h3",{children:"Email: gupta.adityav@gmail.com"}),Object(u.jsx)("hr",{}),Object(u.jsx)(v,{})]})]})}}]),c}(n.Component),N=function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"condiv",children:[Object(u.jsx)("h1",{className:"subtopic",children:"About Me"}),Object(u.jsx)("h4",{children:"Hey there,"}),Object(u.jsx)("h1",{children:"I'm Aditya Vikram Gupta"}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"Stuff will go here."})]})}}]),c}(n.Component),g=(c(48),function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"widecard",children:Object(u.jsxs)("div",{className:this.props.name?"widecard "+this.props.name:"none",children:[Object(u.jsx)("h3",{children:this.props.title}),Object(u.jsx)("h4",{className:"secondtext",children:this.props.where}),Object(u.jsxs)("h4",{className:"secondtext",children:[this.props.from," - ",this.props.to]})]})})}}]),c}(n.Component)),y=function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"condiv",children:[Object(u.jsx)("h1",{className:"subtopic",children:"My Education"}),Object(u.jsx)("hr",{}),Object(u.jsx)(g,{name:"umich",title:"M.S. Signal and Image Processing and Machine Learning (EECS)",where:"University of Michigan Ann-Arbor",from:"August 2021",to:"Present"}),Object(u.jsx)(g,{name:"uiuc",title:"B.S. Computer Engineering",where:"University of Illinois at Urbana-Champaign",from:"August 2017",to:"May 2021"})]})}}]),c}(n.Component),w=c(26),C=c(17);c(80);function S(e){var t=Object(n.useState)(null),c=Object(w.a)(t,2),a=c[0],i=c[1],s=Object(n.useState)(1),r=Object(w.a)(s,2),j=r[0],o=r[1];function l(e){o((function(t){return t+e}))}var b=e.pdf;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(C.a,{file:b,options:{workerSrc:"//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(C.c.version,"/pdf.worker.js")},onLoadSuccess:function(e){var t=e.numPages;i(t),o(1)},children:Object(u.jsx)(C.b,{pageNumber:j})}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Page ",j||(a?1:"--")," of ",a||"--"]}),Object(u.jsx)("button",{type:"button",disabled:j<=1,onClick:function(){l(-1)},children:"Previous"}),Object(u.jsx)("button",{type:"button",disabled:j>=a,onClick:function(){l(1)},children:"Next"})]})]})}C.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(C.c.version,"/pdf.worker.js");var A=c.p+"static/media/resume.72f10b79.pdf",E=function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"Resume",children:Object(u.jsx)(S,{pdf:A})})}}]),c}(n.Component);var P=function(){return Object(u.jsx)(b.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/portfolio/",component:k}),Object(u.jsx)(d.a,{path:"/about",component:N}),Object(u.jsx)(d.a,{path:"/education",component:y}),Object(u.jsx)(d.a,{path:"/resume",component:E})]})]})})};i.a.render(Object(u.jsx)(P,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.fefe4415.chunk.js.map
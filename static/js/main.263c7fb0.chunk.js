(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},16:function(t,n,e){"use strict";e.r(n);var c=e(3),s=e.n(c),a=e(1),i=e.n(a),o=(e(12),e(4)),r=e(5),u=e(7),d=e(6),b=(e(13),e(0)),l=function(t){Object(u.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(o.a)(this,e);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=n.call.apply(n,[this].concat(s))).state={count:0},t.addOne=function(){t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){t.setState((function(t){return{count:t.count+100}}))},t.increase=function(){t.state.count%5===0&&t.add100(),t.addOne()},t}return Object(r.a)(e,[{key:"render",value:function(){var t=this.state.count;return Object(b.jsxs)("div",{className:"box column is-half",children:[Object(b.jsx)("h1",{className:"title is-1",children:"Count: ".concat(t)}),Object(b.jsxs)("div",{className:"btn-wrapper",children:[Object(b.jsx)("button",{type:"button",className:"btn button is-primary is-medium",onClick:this.addOne,children:"Add 1"}),Object(b.jsx)("button",{type:"button",className:"btn button is-success is-medium",onClick:this.add100,children:"Add 100"}),Object(b.jsx)("button",{type:"button",className:"btn button is-danger is-medium",onClick:this.increase,children:"Increase"})]})]})}}]),e}(i.a.Component),j=function(){return Object(b.jsx)("div",{className:"counter",children:Object(b.jsx)(l,{})})};e(15);s.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.263c7fb0.chunk.js.map
(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(5),c=a(2),s=a(6),o=(a(14),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=a(9),d=a.n(u),m=a(0),j=function(e){var t=e.user,a=t.email,n=t.name;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},b=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=void 0===i||i,c=t.user;return Object(m.jsxs)("article",{"data-id":a,className:d()("TodoInfo",{"TodoInfo--completed":r}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),c&&Object(m.jsx)(j,{user:c})]})},h=(a(16),function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:Object(m.jsx)("ul",{children:t.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(b,{todo:e},e.id)})}))})})}),O=function(e,t){return t.find((function(t){return t.id===e}))},f=function(e){var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(r.a)(t))+1},p=function(e){var t=e.users,a=e.onSubmit,n=e.todosArr,i=Object(o.useState)(""),r=Object(c.a)(i,2),s=r[0],l=r[1],u=Object(o.useState)(0),d=Object(c.a)(u,2),j=d[0],b=d[1],h=Object(o.useState)(!1),p=Object(c.a)(h,2),x=p[0],v=p[1],S=Object(o.useState)(!1),y=Object(c.a)(S,2),I=y[0],N=y[1];return Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),v(!s),N(!j),s.trim()&&j&&(a({title:s,userId:j,completed:!1,user:O(j,t),id:f(n)}),l(""),b(0))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"titleInput",children:"Title: "}),Object(m.jsx)("input",{id:"titleInput",type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:s,onChange:function(e){l(e.target.value),v(!1)}}),x&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"userSelect",children:"User: "}),Object(m.jsxs)("select",{"data-cy":"userSelect",id:"userSelect",value:j,onChange:function(e){b(+e.target.value),N(!1)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),t.map((function(e){var t=e.id,a=e.name;return Object(m.jsx)("option",{value:t,children:a},t)}))]}),I&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},x=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:O(e.userId,l)})})),v=function(){var e=Object(o.useState)(x),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsx)(p,{users:l,onSubmit:function(e){n((function(t){return[].concat(Object(r.a)(t),[Object(s.a)({},e)])}))},todosArr:a}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a2307612.chunk.js.map
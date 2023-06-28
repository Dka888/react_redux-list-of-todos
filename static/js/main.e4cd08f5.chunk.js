(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n,a=c(7),s=c.n(a),r=c(6),l=c(14),i=c(5),o=c(12),d=c(13),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(4);!function(e){e.All="All",e.Completed="Completed",e.Active="Active"}(n||(n={}));var f="Todos/SET_QUERY",m="Todos/SET_FILTER",O=function(e){return{type:f,payload:e}},x=function(e){return{type:m,payload:e}},v={query:"",filter:n.All},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(h.a)(Object(h.a)({},e),{},{filter:t.payload});case f:return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});default:return e}},y="todos/SET_TODOS",N=[],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type===y?t.payload:e},T=Object(i.combineReducers)({currentTodo:b,filter:p,todos:g}),k=Object(i.createStore)(T,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(d.a))),E=c(3),S=c(0),w=(c(22),c(23),r.b),C=r.c,A=c(1),_=function(e){var t=e.todos,c=C((function(e){return e.currentTodo})),n=w();return Object(A.jsx)(A.Fragment,{children:0===t.length?Object(A.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}):Object(A.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"#"}),Object(A.jsx)("th",{children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:"fas fa-check"})})}),Object(A.jsx)("th",{children:"Title"}),Object(A.jsx)("th",{children:" "})]})}),Object(A.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,s=e.completed;return Object(A.jsxs)("tr",{"data-cy":"todo",className:(null===c||void 0===c?void 0:c.id)===e.id?"has-background-info-light":"",children:[Object(A.jsx)("td",{className:"is-vcentered",children:t}),Object(A.jsx)("td",{className:"is-vcentered",children:s&&Object(A.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(A.jsx)("i",{className:"fas fa-check"})})}),Object(A.jsx)("td",{className:"is-vcentered is-expanded",children:Object(A.jsx)("p",{className:s?"has-text-success":"has-text-danger",children:a})}),Object(A.jsx)("td",{className:"has-text-right is-vcentered",children:Object(A.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){n(u(e))}(e)},children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:(null===c||void 0===c?void 0:c.id)===e.id?"far fa-eye-slash":"far fa-eye"})})})})]},t)}))})]})})},R=function(){var e=w(),t=C((function(e){return e.filter})).query;return Object(A.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(A.jsx)("p",{className:"control",children:Object(A.jsx)("span",{className:"select",children:Object(A.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){return function(t){switch(t){case"all":e(x(n.All));break;case"completed":e(x(n.Completed));break;case"active":e(x(n.Active));break;default:throw Error()}}(t.target.value)},children:[Object(A.jsx)("option",{value:"all",children:"All"}),Object(A.jsx)("option",{value:"active",children:"Active"}),Object(A.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(A.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(A.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(t){return e(O(t.target.value))}}),Object(A.jsx)("span",{className:"icon is-left",children:Object(A.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(A.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(A.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return e(O(""))}})})]})]})};function q(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(25);var D=function(){return Object(A.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(A.jsx)("div",{className:"Loader__content"})})},I=function(){var e=Object(S.useState)(null),t=Object(E.a)(e,2),c=t[0],n=t[1],a=Object(S.useState)(!0),s=Object(E.a)(a,2),r=s[0],l=s[1],i=C((function(e){return e.currentTodo})),o=w();return Object(S.useEffect)((function(){var e;i&&(e=i.userId,q("/users/".concat(e))).then((function(e){return n(e)})).finally((function(){return l(!1)}))}),[i]),Object(A.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(A.jsx)("div",{className:"modal-background"}),r?Object(A.jsx)(D,{}):Object(A.jsxs)("div",{className:"modal-card",children:[Object(A.jsxs)("header",{className:"modal-card-head",children:[Object(A.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",null===i||void 0===i?void 0:i.id]}),Object(A.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return o(j())}})]}),Object(A.jsxs)("div",{className:"modal-card-body",children:[Object(A.jsx)("p",{className:"block","data-cy":"modal-title",children:null===i||void 0===i?void 0:i.title}),Object(A.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==i&&void 0!==i&&i.completed?Object(A.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(A.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(A.jsx)("a",{href:"mailto:".concat(null===c||void 0===c?void 0:c.email),children:null===c||void 0===c?void 0:c.name})]})]})]})]})},M=function(){var e=Object(S.useState)(!1),t=Object(E.a)(e,2),c=t[0],a=t[1],s=C((function(e){return e.todos})),r=C((function(e){return e.filter})),l=C((function(e){return e.currentTodo})),i=w();Object(S.useEffect)((function(){a(!0),q("/todos").then((function(e){i(function(e){return{type:y,payload:e}}(e))})).finally((function(){return a(!1)}))}),[i]);var o=Object(S.useMemo)((function(){var e=s,t=r.query.trim();switch(t&&(e=e.filter((function(e){return e.title.includes(t)}))),r.filter){case n.Completed:e=e.filter((function(e){return e.completed}));break;case n.Active:e=e.filter((function(e){return!e.completed}));break;default:return e}return e}),[s,r]);return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"section",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("div",{className:"box",children:[Object(A.jsx)("h1",{className:"title",children:"Todos:"}),Object(A.jsx)("div",{className:"block",children:Object(A.jsx)(R,{})}),Object(A.jsx)("div",{className:"block",children:c?Object(A.jsx)(D,{}):Object(A.jsx)(_,{todos:o})})]})})}),l&&Object(A.jsx)(I,{})]})},B=function(){return Object(A.jsx)(r.a,{store:k,children:Object(A.jsx)(l.a,{children:Object(A.jsx)(M,{})})})};s.a.render(Object(A.jsx)(B,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.e4cd08f5.chunk.js.map
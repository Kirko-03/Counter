(this.webpackJsonpcounterts=this.webpackJsonpcounterts||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(12),c=a.n(s),u=(a(19),a(6)),l=(a(20),a(3)),o=a.n(l),b=a(1),i=function(e){var t=e.value,a=e.setValue,n=e.maxValue,s=e.startValue,c=e.remember;Object(r.useEffect)((function(){var e=localStorage.getItem("value");if(e){var t=JSON.parse(e);a(t)}}),[a]),Object(r.useEffect)((function(){localStorage.setItem("value",JSON.stringify(t))}),[t]);var u={color:s<0||s>n?"black":"",background:s<0||n===s||s>n?"red":"green"};return Object(b.jsxs)("div",{className:o.a.counterForm,children:[Object(b.jsx)("div",{className:o.a.value,style:{color:t>=n&&!c||n<=s||t===s&&!c||s<0?"red":""},children:s<0||n<=s?"Incorrect value":c?"enter values and press 'set'":t}),Object(b.jsxs)("div",{className:o.a.form,children:[Object(b.jsx)("button",{disabled:c||t>=n||s<0||s===n,style:u&&{background:t>=n?"red":"green",margin:"10px"},onClick:function(){t<=n&&a(t+1)},className:o.a.button,children:"inc"}),Object(b.jsx)("button",{disabled:c||t<=s||s<0,style:u&&{background:t<=s||s===n||s<0?"red":"green"},onClick:function(){t>s&&a(t-1)},className:o.a.button,children:"dec"}),Object(b.jsx)("button",{onClick:function(){return a(s)},style:{width:"80px"},disabled:c||t===s,className:o.a.button,children:"reset"})]})]})},m=a(4),d=a.n(m),j=function(e){var t=e.max,a=e.min,r=e.setRemember,n=e.setMax;return Object(b.jsxs)("div",{className:d.a.nameBoard,children:["Max value ",Object(b.jsx)("input",{type:"number",className:d.a.value,style:{background:a===t||a>t||t<0?"rebeccapurple":"cyan",borderColor:a===t||a>t||t<0?"red":""},value:t,onChange:function(e){n(+e.currentTarget.value),r(!0)}})]})},x=function(e){var t=e.maxValue,a=e.startValue,n=e.setRemember,s=e.remember,c=e.setValue,u=e.setMax,l=e.setStart;Object(r.useEffect)((function(){var e=localStorage.getItem("maxValue");if(e){var t=JSON.parse(e);u(t)}var a=localStorage.getItem("startValue");if(a){var r=JSON.parse(a);l(r)}}),[l,u]),Object(r.useEffect)((function(){localStorage.setItem("maxValue",JSON.stringify(t)),localStorage.setItem("startValue",JSON.stringify(a))}),[t,a]);return Object(b.jsx)("div",{children:Object(b.jsx)("button",{disabled:!s||a<0||a===t,onClick:function(){n(!1),c(a)},className:o.a.button,style:{background:"blueviolet"},children:"Set"})})},v=function(e){var t=e.start,a=e.setStart,r=e.max,n=e.setRemember;return Object(b.jsxs)("div",{className:d.a.nameBoard,children:["Start value ",Object(b.jsx)("input",{type:"number",className:d.a.value,style:{background:t<0||t===r||t>r?"rebeccapurple":"cyan",borderColor:t<0||t===r||t>r?"red":""},value:t,onChange:function(e){a(+e.currentTarget.value),n(!0)}})]})},O=function(e){var t=e.max,a=e.setMax,r=e.start,n=e.setStart,s=e.setRemember,c=e.remember,u=e.setValue;return Object(b.jsxs)("div",{className:o.a.counterForm,children:[Object(b.jsx)(j,{setRemember:s,remember:c,max:t,setMax:a,min:r}),Object(b.jsx)(v,{setRemember:s,start:r,setStart:n,max:t}),Object(b.jsx)(x,{startValue:r,setStart:n,setMax:a,setValue:u,setRemember:s,remember:c,maxValue:t})]})};var f=function(){var e=Object(r.useState)(0),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(10),c=Object(u.a)(s,2),l=c[0],o=c[1],m=Object(r.useState)(0),d=Object(u.a)(m,2),j=d[0],x=d[1],v=Object(r.useState)(!1),f=Object(u.a)(v,2),g=f[0],S=f[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"App-header",children:[Object(b.jsx)(O,{value:a,setValue:n,remember:g,setRemember:S,start:j,setStart:x,setMax:o,max:l}),Object(b.jsx)(i,{value:a,remember:g,setValue:n,maxValue:l,startValue:j})]})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))},S=a(14);c.a.render(Object(b.jsx)(S.a,{children:Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(f,{})})}),document.getElementById("root")),g()},3:function(e,t,a){e.exports={counterForm:"Counter_counterForm__3dQON",form:"Counter_form__3d3eQ",value:"Counter_value__2081a",button:"Counter_button__SQsxO"}},4:function(e,t,a){e.exports={value:"CountBuilder_value__223TF",nameBoard:"CountBuilder_nameBoard__3zz1Y"}}},[[27,1,2]]]);
//# sourceMappingURL=main.19ed1575.chunk.js.map
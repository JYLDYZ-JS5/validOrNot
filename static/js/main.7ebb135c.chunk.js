(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{11:function(e,r,t){"use strict";t.r(r);var n=t(3),l=t.n(n),a=(t(9),t(4)),o=t(1),c=function(e){var r={enteredValue:"",isTouched:!1},t=Object(o.useReducer)((function(e,t){return"CHANGE"===t.type?{enteredValue:t.value,isTouched:e.isTouched}:"ONBLUR"===t.type?{isTouched:!0,enteredValue:e.enteredValue}:r}),r),n=Object(a.a)(t,2),l=n[0],c=n[1],i=e(l.enteredValue),s=!i&&l.isTouched;return{value:l.enteredValue,isValid:i,hasError:s,EnteredValueHandler:function(e){return c({type:"CHANGE",value:e.target.value})},onBlurHandler:function(){return c({type:"ONBLUR"})}}},i=t(0),s=function(){var e=c((function(e){return""!==e.trim()})),r=e.value,t=e.isValid,n=e.hasError,l=e.EnteredValueHandler,a=e.onBlurHandler,o=c((function(e){return""!==e.trim()})),s=o.value,u=o.isValid,d=o.hasError,m=o.EnteredValueHandler,j=o.onBlurHandler,h=c((function(e){return""!==e.trim()&&e.includes("@")})),b=h.value,v=h.isValid,f=h.hasError,x=h.EnteredValueHandler,p=h.onBlurHandler,O=n?"form-control invalid":"form-control",N=f?"form-control invalid":"form-control",V=d?"form-control invalid":"form-control",E=n?"error-text":"",H=f?"error-text":"",B=d?"error-text":"",g=!1;return t&&u&&v&&(g=!0),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t&&console.log("Hello")},children:[Object(i.jsxs)("div",{className:"control-group",children:[Object(i.jsxs)("div",{className:O,children:[Object(i.jsx)("label",{htmlFor:"name",className:E,children:"First Name"}),Object(i.jsx)("input",{type:"text",id:"name",htmlFor:"first name",onChange:l,value:r,onBlur:a})]}),Object(i.jsxs)("div",{className:V,children:[Object(i.jsx)("label",{htmlFor:"name",className:B,children:"Last Name"}),Object(i.jsx)("input",{type:"text",id:"name",htmlFor:"last name",onChange:m,value:s,onBlur:j})]})]}),Object(i.jsxs)("div",{className:N,children:[Object(i.jsx)("label",{htmlFor:"name",className:H,children:"E-Mail Address"}),Object(i.jsx)("input",{type:"text",id:"name",htmlFor:"email",onChange:x,value:b,onBlur:p})]}),Object(i.jsx)("div",{className:"form-actions",children:Object(i.jsx)("button",{disabled:!g,children:"Submit"})})]})};var u=function(){return Object(i.jsx)("div",{className:"app",children:Object(i.jsx)(s,{})})};l.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))},9:function(e,r,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.7ebb135c.chunk.js.map
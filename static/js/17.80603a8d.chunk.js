(this["webpackJsonpbeauty-links"]=this["webpackJsonpbeauty-links"]||[]).push([[17],{154:function(e,t,a){e.exports={"break-xs":"560px",break_sm:"576px",break_md:"768px",break_lg:"992px",break_lm:"1100px",break_xl:"1200px",block:"InvitePage_block__B4qS9",header:"InvitePage_header__2AUzn",form:"InvitePage_form__2bJth"}},191:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a.n(n),i=a(30),l=a(5),s=a(0),o=a.n(s),u=a(64),c=a(72),p=a(68),d=a(16),b=a(65),_=a(154),m=a.n(_);t.default=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],_=Object(s.useState)(""),f=Object(l.a)(_,2),v=f[0],g=f[1],x=Object(s.useState)(!0),k=Object(l.a)(x,2),h=k[0],O=k[1],E=(Object(s.useContext)(d.a).token,Object(b.a)()),j=E.request,w=E.loading;Object(s.useEffect)((function(){O(""===a)}),[a]);var y=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,j("/api/v1.0/invite","POST",{email:a},{});case 4:200===e.sent.status&&(alert("\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e!"),n("")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(p.a,{title:"\u041f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c \u043b\u044e\u0434\u0435\u0439",subTitle:"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043f\u0440\u043e\u0448\u043b\u044b\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u043f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u044d\u0442\u043e\u043c \u0441\u0430\u0439\u0442\u0435, \u0442\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u0437\u0434\u0435\u0441\u044c."}),o.a.createElement("div",{className:m.a.block},o.a.createElement("h1",{className:m.a.header},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f"),o.a.createElement("form",{className:m.a.form},o.a.createElement(c.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",value:a,onChange:function(e){!function(e){/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(e)?g(""):g("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 e-mail")}(e.target.value),n(e.target.value)},error:v}),o.a.createElement(u.a,{text:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435",disabled:!!v||h,loading:w,onClick:y}))))}},64:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(67),l=a.n(i);t.a=function(e){var t=e.text,a=e.filled,n=void 0===a||a,i=e.onClick,s=void 0===i?function(){return!0}:i,o=e.disabled,u=void 0!==o&&o,c=e.type,p=e.loading;return r.a.createElement("button",{type:c,className:u?l.a.disabledButton:p?l.a.loadingButton:n?l.a.filledButton:l.a.plainButton,onClick:s,disabled:u},t)}},65:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(21),r=a.n(n),i=a(13),l=a(30),s=a(5),o=a(0),u=function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],u=Object(o.useState)(null),c=Object(s.a)(u,2),p=c[0],d=c[1];return{loading:a,request:Object(o.useCallback)(function(){var e=Object(l.a)(r.a.mark((function e(t){var a,l,s,o,u,c,p=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>1&&void 0!==p[1]?p[1]:"GET",l=p.length>2&&void 0!==p[2]?p[2]:null,s=p.length>3&&void 0!==p[3]?p[3]:{},n(!0),e.prev=4,l&&(s["Content-Type"]="application/json",s.Accept="application/json"),o="https://api.beautylinks.com",e.next=9,fetch(o+t,{method:a,body:l?JSON.stringify(l):null,headers:s});case 9:return u=e.sent,console.log(u),e.next=13,u.json();case 13:if(c=e.sent,u.ok){e.next=16;break}throw new Error(c.message||"Something went wrong. Check your internet connection.");case 16:return n(!1),e.abrupt("return",Object(i.a)(Object(i.a)({},c),{},{status:u.status}));case 20:throw e.prev=20,e.t0=e.catch(4),n(!1),d(e.t0.message),e.t0;case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:p,clearError:function(){d(null)}}}},67:function(e,t,a){e.exports={"break-xs":"560px",break_sm:"576px",break_md:"768px",break_lg:"992px",break_lm:"1100px",break_xl:"1200px",filledButton:"btn_filledButton__2I0A7",plainButton:"btn_plainButton__dNEOV",loadingButton:"btn_loadingButton__2Nqzw",disabledButton:"btn_disabledButton__2Adg1"}},68:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(69),l=a.n(i);t.a=function(e){var t=e.title,a=e.subTitle;return r.a.createElement("div",{className:l.a.titleWrap},r.a.createElement("h3",{className:l.a.title},t),r.a.createElement("h4",{className:l.a.subTitle},a))}},69:function(e,t,a){e.exports={"break-xs":"560px",break_sm:"576px",break_md:"768px",break_lg:"992px",break_lm:"1100px",break_xl:"1200px",titleWrap:"ProfileTitle_titleWrap__sURJO",title:"ProfileTitle_title__2dCYb",subTitle:"ProfileTitle_subTitle__OBGgs"}},72:function(e,t,a){"use strict";var n=a(5),r=a(0),i=a.n(r),l=a(77),s=a.n(l);t.a=function(e){var t=e.name,a=e.type,l=void 0===a?"text":a,o=e.required,u=void 0!==o&&o,c=e.disabled,p=void 0!==c&&c,d=e.minLength,b=void 0===d?0:d,_=e.maxlength,m=void 0===_?200:_,f=e.error,v=void 0===f?null:f,g=e.value,x=e.onChange,k=e.placeholder,h=void 0===k?"":k,O=e.filled,E=void 0!==O&&O,j=Object(r.useState)(!1),w=Object(n.a)(j,2),y=w[0],B=w[1];return i.a.createElement("div",{className:s.a.inputWrap},i.a.createElement("input",{placeholder:h,type:y?"text":l,id:t,name:t,minLength:b,maxLength:m,required:u,value:g,onChange:x,disabled:p,className:E?s.a.filledInput:s.a.Input}),"password"===l&&i.a.createElement("div",{className:s.a.seePassword,onClick:function(){return B(!y)},style:y?{backgroundImage:"url('/assets/img/icons/vis.png')"}:{backgroundImage:"url('/assets/img/icons/unvis.png')"}}),v&&i.a.createElement("span",{className:s.a.inputError},v))}},77:function(e,t,a){e.exports={inputWrap:"input_inputWrap__YFzyn",Input:"input_Input__30CPJ",filledInput:"input_filledInput__2GsRC",inputError:"input_inputError__2REtn",seePassword:"input_seePassword__2UZ2y"}}}]);
//# sourceMappingURL=17.80603a8d.chunk.js.map
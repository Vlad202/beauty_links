(this["webpackJsonpbeauty-links"]=this["webpackJsonpbeauty-links"]||[]).push([[19],{162:function(e,t,n){e.exports={mapContainer:"MasterLocations_mapContainer__2qtBt",address:"MasterLocations_address__1ubi_"}},205:function(e,t,n){"use strict";n.r(t);var a=n(21),r=n.n(a),o=n(13),l=n(30),s=n(5),c=n(0),i=n.n(c),u=n(31),d=n(68),p=n(64),v=n(16),_=n(65),b=n(175),m=function(e){var t=Object(b.c)({googleMapsApiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_GMAPS}),n=t.isLoaded;return t.loadError?i.a.createElement("div",null,"error"):n?i.a.createElement(b.a,{mapContainerStyle:{width:"100%",height:"100%"},zoom:18,center:e.marker,onClick:e.sendLocation},i.a.createElement(b.b,{clickable:!1,position:e.marker,icon:{url:"/assets/img/mapMarker.svg",scaledSize:new window.google.maps.Size(50,50)}})):i.a.createElement(u.a,null)},f=n(162),g=n.n(f);t.default=function(e){var t,n,a,b,f,O,k,x,E,h,j=Object(c.useState)(null),y=Object(s.a)(j,2),T=y[0],S=y[1],C=Object(c.useState)(!1),w=Object(s.a)(C,2),B=w[0],P=w[1],A=Object(_.a)(),N=A.request,L=A.loading,W=Object(c.useContext)(v.a).token,D=function(){var e=Object(l.a)(r.a.mark((function e(t){var n,a,l,s,c,i,u,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),e.next=4,N("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(t.latLng.lat(),",").concat(t.latLng.lng(),"&key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_GMAPS,"&language=en&region=UA"));case 4:delete(u=e.sent).status,d={country_name:null===(n=u.results[0].address_components.filter((function(e){return e.types.includes("country")}))[0])||void 0===n?void 0:n.long_name,country_id:null===(a=u.results[0].address_components.filter((function(e){return e.types.includes("country")}))[0])||void 0===a?void 0:a.short_name,city:null===(l=u.results[0].address_components.filter((function(e){return e.types.includes("locality")}))[0])||void 0===l?void 0:l.long_name,address:"".concat(null===(s=u.results[0].address_components.filter((function(e){return e.types.includes("route")}))[0])||void 0===s?void 0:s.long_name,", ").concat(null===(c=u.results[0].address_components.filter((function(e){return e.types.includes("street_number")}))[0])||void 0===c?void 0:c.long_name),postcode:null===(i=u.results[0].address_components.filter((function(e){return e.types.includes("postal_code")}))[0])||void 0===i?void 0:i.long_name},S((function(e){return Object(o.a)(Object(o.a)({},e),{},{salon:Object(o.a)(Object(o.a)({},e.salon),{},{address:Object(o.a)(Object(o.a)({},d),{},{location:{lat:t.latLng.lat(),lng:t.latLng.lng()}})})})})),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),K=Object(c.useCallback)(Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N("/api/v1.0/profile/master/locationtypes","GET",null,{Authorization:"Bearer ".concat(W)});case 3:delete(t=e.sent).status,S(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),[N,W]),R=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N("/api/v1.0/profile/master/locationtypes","PUT",T,{Authorization:"Bearer ".concat(W)});case 3:200===e.sent.status&&(P(!1),alert("\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b!")),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=K();S(e)}),[K]),i.a.createElement("div",{className:g.a.basicsWrap},i.a.createElement(d.a,{title:"\u041b\u043e\u043a\u0430\u0446\u0438\u0438",subTitle:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435"}),L?i.a.createElement(u.a,null):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:g.a.address},"".concat(null===T||void 0===T||null===(t=T.salon)||void 0===t||null===(n=t.address)||void 0===n?void 0:n.country_name,", ").concat(null===T||void 0===T||null===(a=T.salon)||void 0===a||null===(b=a.address)||void 0===b?void 0:b.city,", ").concat(null===T||void 0===T||null===(f=T.salon)||void 0===f||null===(O=f.address)||void 0===O?void 0:O.address,", ").concat(null===T||void 0===T||null===(k=T.salon)||void 0===k||null===(x=k.address)||void 0===x?void 0:x.postcode)),i.a.createElement("div",{className:g.a.mapContainer},i.a.createElement(m,{marker:null===T||void 0===T||null===(E=T.salon)||void 0===E||null===(h=E.address)||void 0===h?void 0:h.location,sendLocation:D}))),B&&i.a.createElement(p.a,{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:R}))}},64:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(67),l=n.n(o);t.a=function(e){var t=e.text,n=e.filled,a=void 0===n||n,o=e.onClick,s=void 0===o?function(){return!0}:o,c=e.disabled,i=void 0!==c&&c,u=e.type,d=e.loading;return r.a.createElement("button",{type:u,className:i?l.a.disabledButton:d?l.a.loadingButton:a?l.a.filledButton:l.a.plainButton,onClick:s,disabled:i},t)}},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(21),r=n.n(a),o=n(13),l=n(30),s=n(5),c=n(0),i=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(null),u=Object(s.a)(i,2),d=u[0],p=u[1];return{loading:n,request:Object(c.useCallback)(function(){var e=Object(l.a)(r.a.mark((function e(t){var n,l,s,c,i,u,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>1&&void 0!==d[1]?d[1]:"GET",l=d.length>2&&void 0!==d[2]?d[2]:null,s=d.length>3&&void 0!==d[3]?d[3]:{},a(!0),e.prev=4,l&&(s["Content-Type"]="application/json",s.Accept="application/json"),c="https://api.beautylinks.com",e.next=9,fetch(c+t,{method:n,body:l?JSON.stringify(l):null,headers:s});case 9:return i=e.sent,console.log(i),e.next=13,i.json();case 13:if(u=e.sent,i.ok){e.next=16;break}throw new Error(u.message||"Something went wrong. Check your internet connection.");case 16:return a(!1),e.abrupt("return",Object(o.a)(Object(o.a)({},u),{},{status:i.status}));case 20:throw e.prev=20,e.t0=e.catch(4),a(!1),p(e.t0.message),e.t0;case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:d,clearError:function(){p(null)}}}},67:function(e,t,n){e.exports={"break-xs":"560px",break_sm:"576px",break_md:"768px",break_lg:"992px",break_lm:"1100px",break_xl:"1200px",filledButton:"btn_filledButton__2I0A7",plainButton:"btn_plainButton__dNEOV",loadingButton:"btn_loadingButton__2Nqzw",disabledButton:"btn_disabledButton__2Adg1"}},68:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(69),l=n.n(o);t.a=function(e){var t=e.title,n=e.subTitle;return r.a.createElement("div",{className:l.a.titleWrap},r.a.createElement("h3",{className:l.a.title},t),r.a.createElement("h4",{className:l.a.subTitle},n))}},69:function(e,t,n){e.exports={"break-xs":"560px",break_sm:"576px",break_md:"768px",break_lg:"992px",break_lm:"1100px",break_xl:"1200px",titleWrap:"ProfileTitle_titleWrap__sURJO",title:"ProfileTitle_title__2dCYb",subTitle:"ProfileTitle_subTitle__OBGgs"}}}]);
//# sourceMappingURL=19.f67294e6.chunk.js.map
import{s as l,q as h,x as p}from"./index.eace6088.js";var S=["xxxl","xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)",xxxl:"(min-width: 2000px)"},s=new Map,c=-1,d={},E={matchHandlers:{},dispatch:function(e){return d=e,s.forEach(function(n){return n(d)}),s.size>=1},subscribe:function(e){return s.size||this.register(),c+=1,s.set(c,e),e(d),c},unsubscribe:function(e){s.delete(e),s.size||this.unregister()},unregister:function(){var e=this;Object.keys(a).forEach(function(n){var i=a[n],r=e.matchHandlers[i];r==null||r.mql.removeListener(r==null?void 0:r.listener)}),s.clear()},register:function(){var e=this;Object.keys(a).forEach(function(n){var i=a[n],r=function(v){var f=v.matches;e.dispatch(l(l({},d),{},h({},n,f)))},u=window.matchMedia(i);u.addListener(r),e.matchHandlers[i]={mql:u,listener:r},r(u)})}},x=function(){return p()&&window.document.documentElement},m=function(e){if(p()&&window.document.documentElement){var n=Array.isArray(e)?e:[e],i=window.document.documentElement;return n.some(function(r){return r in i.style})}return!1},b=function(e,n){if(!m(e))return!1;var i=document.createElement("div"),r=i.style[e];return i.style[e]=n,i.style[e]!==r};function g(t,e){return!Array.isArray(t)&&e!==void 0?b(t,e):m(t)}var o,A=function(){if(!x())return!1;if(o!==void 0)return o;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),o=e.scrollHeight===1,document.body.removeChild(e),o};export{S as a,A as d,g as i,E as r};

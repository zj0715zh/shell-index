import{a_ as v,d as u,h as w,o as f,a as x,c as g,e as _}from"./index.eace6088.js";const h={space:7,canvasElement:m("charVideoCanvas"),width:800,height:450};function s(t=h){var e,a,n,i;this.space=t.space||h.space,this.width=Math.ceil(((e=h.width)!=null?e:window.innerWidth)/this.space),this.height=Math.ceil(((a=h.height)!=null?a:window.innerHeight)/this.space),this.data={},this.cav={},this.ctx={},this.charVedio=t.canvasElement,this.charVedio.width=(n=h.width)!=null?n:window.innerWidth,this.charVedio.height=(i=h.height)!=null?i:window.innerHeight,this.textCtx=this.charVedio.getContext("2d"),this.init()}s.prototype.init=function(){this.initVideo(),this.initCanvas()};s.prototype.initVideo=function(t){this.video||(this.video=document.createElement("video")),t&&(this.video.src=t)};s.prototype.initCanvas=function(){this.cav=document.createElement("canvas"),this.ctx=this.cav.getContext("2d"),this.cav.width=this.width,this.cav.height=this.height};s.prototype.loadData=function(){return this.ctx.getImageData(0,0,this.width,this.height)};s.prototype.reDraw=function(t){for(var e=0,a=t.data.length;e<a;e+=4){var n=t.data[e],i=t.data[e+1],o=t.data[e+2];t.data[e]=t.data[e+1]=t.data[e+2]=255-(n+i+o)/3|0}this.data=t,this.ctx.putImageData(t,0,0,0,0,this.width,this.height)};s.prototype.drawText=function(){this.textCtx.clearRect(0,0,window.innerWidth,window.innerHeight);for(var t=this.data.data,e=' .,`"^:!?o+*wU$HB%@&#M'.split(""),a=0,n=t.length;a<n;a+=4){this.textCtx.fillStyle="#333";var i=(a/4|0)%this.width,o=Math.ceil(a/4/this.width),r=i*this.space,c=o*this.space,d=t[a]|0,p=Math.ceil(255/e.length),l=e[d/p|0];this.textCtx.font="12px courier",this.textCtx.fillText(l,r,c)}};s.prototype.interval=function(){var t=this;requestAnimationFrame(function(){if(!t.video.paused){t.ctx.drawImage(t.video,0,0,t.width,t.height);var e=t.loadData();t.reDraw(e),t.drawText()}t.interval()})};s.prototype.playFile=function(t){this.src=URL.createObjectURL(t),this.initVideo(this.src),this.interval(),this.video.play()};function m(t){return document.getElementById(t)}const y={style:{margin:"8px 0"}},C=u({__name:"IkunBox",setup(t){const e=()=>new Promise(n=>{const i=new XMLHttpRequest;i.open("GET","https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/ikun.mp4",!0),i.responseType="blob",i.onload=()=>{i.status===200&&n(i.response)},i.send()}),a=w();return f(async()=>{const n=await e();n&&new s({canvasElement:a.value}).playFile(n)}),(n,i)=>(x(),g("div",y,[_("canvas",{ref_key:"canvasRef",ref:a,class:"charVideoCanvas"},null,512)]))}});var B=v(C,[["__scopeId","data-v-330db0a4"]]);export{B as default};

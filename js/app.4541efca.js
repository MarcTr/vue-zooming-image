(function(e){function t(t){for(var r,p,c=t[0],a=t[1],i=t[2],l=0,f=[];l<c.length;l++)p=c[l],Object.prototype.hasOwnProperty.call(o,p)&&o[p]&&f.push(o[p][0]),o[p]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(s.splice(t--,1),e=p(p.s=n[0]))}return e}var r={},o={app:0},s=[];function p(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,p),n.l=!0,n.exports}p.m=e,p.c=r,p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,t){if(1&t&&(e=p(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)p.d(n,r,function(t){return e[t]}.bind(null,r));return n},p.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/vue-zooming-image/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=a;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},e._l(e.imgsWText,(function(t){return n("ZoomingImage",{key:t.text,staticClass:"image",attrs:{src:t.src,width:"375px",height:"250px"}},[n("div",{staticClass:"slot-content"},[e._v(e._s(t.text))])])})),1)},s=[],p=n("10b6"),c=n.n(p),a={name:"App",components:{ZoomingImage:c.a},data:function(){return{imgsWText:[{src:"https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",text:"Image 1"},{src:"https://images.pexels.com/photos/1055297/pexels-photo-1055297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",text:"Image 2"},{src:"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",text:"Image 3"}]}}},i=a,u=(n("034f"),n("2877")),l=Object(u["a"])(i,o,s,!1,null,null,null),f=l.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.4541efca.js.map
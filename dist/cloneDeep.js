var t="object"==typeof global&&global&&global.Object===Object&&global,e="object"==typeof self&&self&&self.Object===Object&&self,r=t||e||Function("return this")(),n=r.Symbol,o=Object.prototype,c=o.hasOwnProperty,a=o.toString,u=n?n.toStringTag:void 0;var i=Object.prototype.toString;var s=n?n.toStringTag:void 0;function f(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?function(t){var e=c.call(t,u),r=t[u];try{t[u]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(e?t[u]=r:delete t[u]),o}(t):function(t){return i.call(t)}(t)}function p(t){return null!=t&&"object"==typeof t}var b=Array.isArray;function l(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function y(t){if(!l(t))return!1;var e=f(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}var j,v=r["__core-js_shared__"],h=(j=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var _=Function.prototype.toString;function d(t){if(null!=t){try{return _.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var g=/^\[object .+?Constructor\]$/,O=Function.prototype,w=Object.prototype,A=O.toString,m=w.hasOwnProperty,x=RegExp("^"+A.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function S(t){return!(!l(t)||(e=t,h&&h in e))&&(y(t)?x:g).test(d(t));var e}function z(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return S(r)?r:void 0}var P=z(r,"WeakMap"),F=Object.create,U=function(){function t(){}return function(e){if(!l(e))return{};if(F)return F(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var I=function(){try{var t=z(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var M=/^(?:0|[1-9]\d*)$/;function E(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&M.test(t))&&t>-1&&t%1==0&&t<e}function B(t,e,r){"__proto__"==e&&I?I(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function T(t,e){return t===e||t!=t&&e!=e}var D=Object.prototype.hasOwnProperty;function k(t,e,r){var n=t[e];D.call(t,e)&&T(n,r)&&(void 0!==r||e in t)||B(t,e,r)}function $(t,e,r,n){var o=!r;r||(r={});for(var c=-1,a=e.length;++c<a;){var u=e[c],i=n?n(r[u],t[u],u,r,t):void 0;void 0===i&&(i=t[u]),o?B(r,u,i):k(r,u,i)}return r}function V(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function R(t){return null!=t&&V(t.length)&&!y(t)}var W=Object.prototype;function C(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||W)}function N(t){return p(t)&&"[object Arguments]"==f(t)}var L=Object.prototype,q=L.hasOwnProperty,G=L.propertyIsEnumerable,H=N(function(){return arguments}())?N:function(t){return p(t)&&q.call(t,"callee")&&!G.call(t,"callee")};var J="object"==typeof exports&&exports&&!exports.nodeType&&exports,K=J&&"object"==typeof module&&module&&!module.nodeType&&module,Q=K&&K.exports===J?r.Buffer:void 0,X=(Q?Q.isBuffer:void 0)||function(){return!1},Y={};function Z(t){return function(e){return t(e)}}Y["[object Float32Array]"]=Y["[object Float64Array]"]=Y["[object Int8Array]"]=Y["[object Int16Array]"]=Y["[object Int32Array]"]=Y["[object Uint8Array]"]=Y["[object Uint8ClampedArray]"]=Y["[object Uint16Array]"]=Y["[object Uint32Array]"]=!0,Y["[object Arguments]"]=Y["[object Array]"]=Y["[object ArrayBuffer]"]=Y["[object Boolean]"]=Y["[object DataView]"]=Y["[object Date]"]=Y["[object Error]"]=Y["[object Function]"]=Y["[object Map]"]=Y["[object Number]"]=Y["[object Object]"]=Y["[object RegExp]"]=Y["[object Set]"]=Y["[object String]"]=Y["[object WeakMap]"]=!1;var tt="object"==typeof exports&&exports&&!exports.nodeType&&exports,et=tt&&"object"==typeof module&&module&&!module.nodeType&&module,rt=et&&et.exports===tt&&t.process,nt=function(){try{var t=et&&et.require&&et.require("util").types;return t||rt&&rt.binding&&rt.binding("util")}catch(t){}}(),ot=nt&&nt.isTypedArray,ct=ot?Z(ot):function(t){return p(t)&&V(t.length)&&!!Y[f(t)]},at=Object.prototype.hasOwnProperty;function ut(t,e){var r=b(t),n=!r&&H(t),o=!r&&!n&&X(t),c=!r&&!n&&!o&&ct(t),a=r||n||o||c,u=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],i=u.length;for(var s in t)!e&&!at.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||c&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||E(s,i))||u.push(s);return u}function it(t,e){return function(r){return t(e(r))}}var st=it(Object.keys,Object),ft=Object.prototype.hasOwnProperty;function pt(t){return R(t)?ut(t):function(t){if(!C(t))return st(t);var e=[];for(var r in Object(t))ft.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}var bt=Object.prototype.hasOwnProperty;function lt(t){if(!l(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=C(t),r=[];for(var n in t)("constructor"!=n||!e&&bt.call(t,n))&&r.push(n);return r}function yt(t){return R(t)?ut(t,!0):lt(t)}var jt=z(Object,"create");var vt=Object.prototype.hasOwnProperty;var ht=Object.prototype.hasOwnProperty;function _t(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function dt(t,e){for(var r=t.length;r--;)if(T(t[r][0],e))return r;return-1}_t.prototype.clear=function(){this.__data__=jt?jt(null):{},this.size=0},_t.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},_t.prototype.get=function(t){var e=this.__data__;if(jt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return vt.call(e,t)?e[t]:void 0},_t.prototype.has=function(t){var e=this.__data__;return jt?void 0!==e[t]:ht.call(e,t)},_t.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=jt&&void 0===e?"__lodash_hash_undefined__":e,this};var gt=Array.prototype.splice;function Ot(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ot.prototype.clear=function(){this.__data__=[],this.size=0},Ot.prototype.delete=function(t){var e=this.__data__,r=dt(e,t);return!(r<0)&&(r==e.length-1?e.pop():gt.call(e,r,1),--this.size,!0)},Ot.prototype.get=function(t){var e=this.__data__,r=dt(e,t);return r<0?void 0:e[r][1]},Ot.prototype.has=function(t){return dt(this.__data__,t)>-1},Ot.prototype.set=function(t,e){var r=this.__data__,n=dt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var wt=z(r,"Map");function At(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function mt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}mt.prototype.clear=function(){this.size=0,this.__data__={hash:new _t,map:new(wt||Ot),string:new _t}},mt.prototype.delete=function(t){var e=At(this,t).delete(t);return this.size-=e?1:0,e},mt.prototype.get=function(t){return At(this,t).get(t)},mt.prototype.has=function(t){return At(this,t).has(t)},mt.prototype.set=function(t,e){var r=At(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};var St=it(Object.getPrototypeOf,Object);function zt(t){var e=this.__data__=new Ot(t);this.size=e.size}zt.prototype.clear=function(){this.__data__=new Ot,this.size=0},zt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},zt.prototype.get=function(t){return this.__data__.get(t)},zt.prototype.has=function(t){return this.__data__.has(t)},zt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Ot){var n=r.__data__;if(!wt||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new mt(n)}return r.set(t,e),this.size=r.size,this};var Pt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Ft=Pt&&"object"==typeof module&&module&&!module.nodeType&&module,Ut=Ft&&Ft.exports===Pt?r.Buffer:void 0,It=Ut?Ut.allocUnsafe:void 0;function Mt(){return[]}var Et=Object.prototype.propertyIsEnumerable,Bt=Object.getOwnPropertySymbols,Tt=Bt?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,c=[];++r<n;){var a=t[r];e(a,r,t)&&(c[o++]=a)}return c}(Bt(t),(function(e){return Et.call(t,e)})))}:Mt;var Dt=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)xt(e,Tt(t)),t=St(t);return e}:Mt;function kt(t,e,r){var n=e(t);return b(t)?n:xt(n,r(t))}function $t(t){return kt(t,pt,Tt)}function Vt(t){return kt(t,yt,Dt)}var Rt=z(r,"DataView"),Wt=z(r,"Promise"),Ct=z(r,"Set"),Nt=d(Rt),Lt=d(wt),qt=d(Wt),Gt=d(Ct),Ht=d(P),Jt=f;(Rt&&"[object DataView]"!=Jt(new Rt(new ArrayBuffer(1)))||wt&&"[object Map]"!=Jt(new wt)||Wt&&"[object Promise]"!=Jt(Wt.resolve())||Ct&&"[object Set]"!=Jt(new Ct)||P&&"[object WeakMap]"!=Jt(new P))&&(Jt=function(t){var e=f(t),r="[object Object]"==e?t.constructor:void 0,n=r?d(r):"";if(n)switch(n){case Nt:return"[object DataView]";case Lt:return"[object Map]";case qt:return"[object Promise]";case Gt:return"[object Set]";case Ht:return"[object WeakMap]"}return e});var Kt=Jt,Qt=Object.prototype.hasOwnProperty;var Xt=r.Uint8Array;function Yt(t){var e=new t.constructor(t.byteLength);return new Xt(e).set(new Xt(t)),e}var Zt=/\w*$/;var te=n?n.prototype:void 0,ee=te?te.valueOf:void 0;function re(t,e,r){var n,o,c,a=t.constructor;switch(e){case"[object ArrayBuffer]":return Yt(t);case"[object Boolean]":case"[object Date]":return new a(+t);case"[object DataView]":return function(t,e){var r=e?Yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?Yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,r);case"[object Map]":return new a;case"[object Number]":case"[object String]":return new a(t);case"[object RegExp]":return(c=new(o=t).constructor(o.source,Zt.exec(o))).lastIndex=o.lastIndex,c;case"[object Set]":return new a;case"[object Symbol]":return n=t,ee?Object(ee.call(n)):{}}}var ne=nt&&nt.isMap,oe=ne?Z(ne):function(t){return p(t)&&"[object Map]"==Kt(t)};var ce=nt&&nt.isSet,ae=ce?Z(ce):function(t){return p(t)&&"[object Set]"==Kt(t)},ue={};function ie(t,e,r,n,o,c){var a,u=1&e,i=2&e,s=4&e;if(r&&(a=o?r(t,n,o,c):r(t)),void 0!==a)return a;if(!l(t))return t;var f=b(t);if(f){if(a=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&Qt.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(t),!u)return function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(t,a)}else{var p=Kt(t),y="[object Function]"==p||"[object GeneratorFunction]"==p;if(X(t))return function(t,e){if(e)return t.slice();var r=t.length,n=It?It(r):new t.constructor(r);return t.copy(n),n}(t,u);if("[object Object]"==p||"[object Arguments]"==p||y&&!o){if(a=i||y?{}:function(t){return"function"!=typeof t.constructor||C(t)?{}:U(St(t))}(t),!u)return i?function(t,e){return $(t,Dt(t),e)}(t,function(t,e){return t&&$(e,yt(e),t)}(a,t)):function(t,e){return $(t,Tt(t),e)}(t,function(t,e){return t&&$(e,pt(e),t)}(a,t))}else{if(!ue[p])return o?t:{};a=re(t,p,u)}}c||(c=new zt);var j=c.get(t);if(j)return j;c.set(t,a),ae(t)?t.forEach((function(n){a.add(ie(n,e,r,n,t,c))})):oe(t)&&t.forEach((function(n,o){a.set(o,ie(n,e,r,o,t,c))}));var v=f?void 0:(s?i?Vt:$t:i?yt:pt)(t);return function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););}(v||t,(function(n,o){v&&(n=t[o=n]),k(a,o,ie(n,e,r,o,t,c))})),a}ue["[object Arguments]"]=ue["[object Array]"]=ue["[object ArrayBuffer]"]=ue["[object DataView]"]=ue["[object Boolean]"]=ue["[object Date]"]=ue["[object Float32Array]"]=ue["[object Float64Array]"]=ue["[object Int8Array]"]=ue["[object Int16Array]"]=ue["[object Int32Array]"]=ue["[object Map]"]=ue["[object Number]"]=ue["[object Object]"]=ue["[object RegExp]"]=ue["[object Set]"]=ue["[object String]"]=ue["[object Symbol]"]=ue["[object Uint8Array]"]=ue["[object Uint8ClampedArray]"]=ue["[object Uint16Array]"]=ue["[object Uint32Array]"]=!0,ue["[object Error]"]=ue["[object Function]"]=ue["[object WeakMap]"]=!1;console.log(ie({b:1,c:2},5));

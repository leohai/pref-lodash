var t="object"==typeof global&&global&&global.Object===Object&&global,e="object"==typeof self&&self&&self.Object===Object&&self,r=t||e||Function("return this")(),n=r.Symbol,o=Object.prototype,u=o.hasOwnProperty,a=o.toString,i=n?n.toStringTag:void 0;var c=Object.prototype.toString;var f=n?n.toStringTag:void 0;function s(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":f&&f in Object(t)?function(t){var e=u.call(t,i),r=t[i];try{t[i]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(e?t[i]=r:delete t[i]),o}(t):function(t){return c.call(t)}(t)}function l(t){return null!=t&&"object"==typeof t}function p(t){return"symbol"==typeof t||l(t)&&"[object Symbol]"==s(t)}function v(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}var h=Array.isArray,b=n?n.prototype:void 0,y=b?b.toString:void 0;function _(t){if("string"==typeof t)return t;if(h(t))return v(t,_)+"";if(p(t))return y?y.call(t):"";var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}function d(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function j(t){return t}function g(t){if(!d(t))return!1;var e=s(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}var O,m=r["__core-js_shared__"],w=(O=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"";var A=Function.prototype.toString;function z(t){if(null!=t){try{return A.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var S=/^\[object .+?Constructor\]$/,x=Function.prototype,P=Object.prototype,k=x.toString,E=P.hasOwnProperty,$=RegExp("^"+k.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function F(t){return!(!d(t)||(e=t,w&&w in e))&&(g(t)?$:S).test(z(t));var e}function M(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return F(r)?r:void 0}var T=M(r,"WeakMap"),I=/^(?:0|[1-9]\d*)$/;function B(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&I.test(t))&&t>-1&&t%1==0&&t<e}function D(t,e){return t===e||t!=t&&e!=e}function U(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function C(t){return null!=t&&U(t.length)&&!g(t)}var L=Object.prototype;function V(t){return l(t)&&"[object Arguments]"==s(t)}var R=Object.prototype,W=R.hasOwnProperty,N=R.propertyIsEnumerable,q=V(function(){return arguments}())?V:function(t){return l(t)&&W.call(t,"callee")&&!N.call(t,"callee")};var G="object"==typeof exports&&exports&&!exports.nodeType&&exports,H=G&&"object"==typeof module&&module&&!module.nodeType&&module,J=H&&H.exports===G?r.Buffer:void 0,K=(J?J.isBuffer:void 0)||function(){return!1},Q={};Q["[object Float32Array]"]=Q["[object Float64Array]"]=Q["[object Int8Array]"]=Q["[object Int16Array]"]=Q["[object Int32Array]"]=Q["[object Uint8Array]"]=Q["[object Uint8ClampedArray]"]=Q["[object Uint16Array]"]=Q["[object Uint32Array]"]=!0,Q["[object Arguments]"]=Q["[object Array]"]=Q["[object ArrayBuffer]"]=Q["[object Boolean]"]=Q["[object DataView]"]=Q["[object Date]"]=Q["[object Error]"]=Q["[object Function]"]=Q["[object Map]"]=Q["[object Number]"]=Q["[object Object]"]=Q["[object RegExp]"]=Q["[object Set]"]=Q["[object String]"]=Q["[object WeakMap]"]=!1;var X,Y="object"==typeof exports&&exports&&!exports.nodeType&&exports,Z=Y&&"object"==typeof module&&module&&!module.nodeType&&module,tt=Z&&Z.exports===Y&&t.process,et=function(){try{var t=Z&&Z.require&&Z.require("util").types;return t||tt&&tt.binding&&tt.binding("util")}catch(t){}}(),rt=et&&et.isTypedArray,nt=rt?(X=rt,function(t){return X(t)}):function(t){return l(t)&&U(t.length)&&!!Q[s(t)]},ot=Object.prototype.hasOwnProperty;function ut(t,e){var r=h(t),n=!r&&q(t),o=!r&&!n&&K(t),u=!r&&!n&&!o&&nt(t),a=r||n||o||u,i=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=i.length;for(var f in t)!e&&!ot.call(t,f)||a&&("length"==f||o&&("offset"==f||"parent"==f)||u&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||B(f,c))||i.push(f);return i}var at=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),it=Object.prototype.hasOwnProperty;function ct(t){if(r=(e=t)&&e.constructor,e!==("function"==typeof r&&r.prototype||L))return at(t);var e,r,n=[];for(var o in Object(t))it.call(t,o)&&"constructor"!=o&&n.push(o);return n}function ft(t){return C(t)?ut(t):ct(t)}var st=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,lt=/^\w*$/;function pt(t,e){if(h(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!p(t))||(lt.test(t)||!st.test(t)||null!=e&&t in Object(e))}var vt=M(Object,"create");var ht=Object.prototype.hasOwnProperty;var bt=Object.prototype.hasOwnProperty;function yt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function _t(t,e){for(var r=t.length;r--;)if(D(t[r][0],e))return r;return-1}yt.prototype.clear=function(){this.__data__=vt?vt(null):{},this.size=0},yt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},yt.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return ht.call(e,t)?e[t]:void 0},yt.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:bt.call(e,t)},yt.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=vt&&void 0===e?"__lodash_hash_undefined__":e,this};var dt=Array.prototype.splice;function jt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}jt.prototype.clear=function(){this.__data__=[],this.size=0},jt.prototype.delete=function(t){var e=this.__data__,r=_t(e,t);return!(r<0)&&(r==e.length-1?e.pop():dt.call(e,r,1),--this.size,!0)},jt.prototype.get=function(t){var e=this.__data__,r=_t(e,t);return r<0?void 0:e[r][1]},jt.prototype.has=function(t){return _t(this.__data__,t)>-1},jt.prototype.set=function(t,e){var r=this.__data__,n=_t(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var gt=M(r,"Map");function Ot(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function mt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}mt.prototype.clear=function(){this.size=0,this.__data__={hash:new yt,map:new(gt||jt),string:new yt}},mt.prototype.delete=function(t){var e=Ot(this,t).delete(t);return this.size-=e?1:0,e},mt.prototype.get=function(t){return Ot(this,t).get(t)},mt.prototype.has=function(t){return Ot(this,t).has(t)},mt.prototype.set=function(t,e){var r=Ot(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function wt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],u=r.cache;if(u.has(o))return u.get(o);var a=t.apply(this,n);return r.cache=u.set(o,a)||u,a};return r.cache=new(wt.Cache||mt),r}wt.Cache=mt;var At=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zt=/\\(\\)?/g,St=function(t){var e=wt(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(At,(function(t,r,n,o){e.push(n?o.replace(zt,"$1"):r||t)})),e}));function xt(t,e){return h(t)?t:pt(t,e)?[t]:St(function(t){return null==t?"":_(t)}(t))}function Pt(t){if("string"==typeof t||p(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}function kt(t,e){for(var r=0,n=(e=xt(e,t)).length;null!=t&&r<n;)t=t[Pt(e[r++])];return r&&r==n?t:void 0}function Et(t){var e=this.__data__=new jt(t);this.size=e.size}Et.prototype.clear=function(){this.__data__=new jt,this.size=0},Et.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof jt){var n=r.__data__;if(!gt||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new mt(n)}return r.set(t,e),this.size=r.size,this};var $t=Object.prototype.propertyIsEnumerable,Ft=Object.getOwnPropertySymbols,Mt=Ft?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,u=[];++r<n;){var a=t[r];e(a,r,t)&&(u[o++]=a)}return u}(Ft(t),(function(e){return $t.call(t,e)})))}:function(){return[]};function Tt(t){return function(t,e,r){var n=e(t);return h(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,ft,Mt)}var It=M(r,"DataView"),Bt=M(r,"Promise"),Dt=M(r,"Set"),Ut=z(It),Ct=z(gt),Lt=z(Bt),Vt=z(Dt),Rt=z(T),Wt=s;(It&&"[object DataView]"!=Wt(new It(new ArrayBuffer(1)))||gt&&"[object Map]"!=Wt(new gt)||Bt&&"[object Promise]"!=Wt(Bt.resolve())||Dt&&"[object Set]"!=Wt(new Dt)||T&&"[object WeakMap]"!=Wt(new T))&&(Wt=function(t){var e=s(t),r="[object Object]"==e?t.constructor:void 0,n=r?z(r):"";if(n)switch(n){case Ut:return"[object DataView]";case Ct:return"[object Map]";case Lt:return"[object Promise]";case Vt:return"[object Set]";case Rt:return"[object WeakMap]"}return e});var Nt=Wt,qt=r.Uint8Array;function Gt(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new mt;++e<r;)this.add(t[e])}function Ht(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}Gt.prototype.add=Gt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Gt.prototype.has=function(t){return this.__data__.has(t)};function Jt(t,e,r,n,o,u){var a=1&r,i=t.length,c=e.length;if(i!=c&&!(a&&c>i))return!1;var f=u.get(t),s=u.get(e);if(f&&s)return f==e&&s==t;var l=-1,p=!0,v=2&r?new Gt:void 0;for(u.set(t,e),u.set(e,t);++l<i;){var h=t[l],b=e[l];if(n)var y=a?n(b,h,l,e,t,u):n(h,b,l,t,e,u);if(void 0!==y){if(y)continue;p=!1;break}if(v){if(!Ht(e,(function(t,e){if(a=e,!v.has(a)&&(h===t||o(h,t,r,n,u)))return v.push(e);var a}))){p=!1;break}}else if(h!==b&&!o(h,b,r,n,u)){p=!1;break}}return u.delete(t),u.delete(e),p}function Kt(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function Qt(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var Xt=n?n.prototype:void 0,Yt=Xt?Xt.valueOf:void 0;var Zt=Object.prototype.hasOwnProperty;var te="[object Object]",ee=Object.prototype.hasOwnProperty;function re(t,e,r,n,o,u){var a=h(t),i=h(e),c=a?"[object Array]":Nt(t),f=i?"[object Array]":Nt(e),s=(c="[object Arguments]"==c?te:c)==te,l=(f="[object Arguments]"==f?te:f)==te,p=c==f;if(p&&K(t)){if(!K(e))return!1;a=!0,s=!1}if(p&&!s)return u||(u=new Et),a||nt(t)?Jt(t,e,r,n,o,u):function(t,e,r,n,o,u,a){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!u(new qt(t),new qt(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return D(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var i=Kt;case"[object Set]":var c=1&n;if(i||(i=Qt),t.size!=e.size&&!c)return!1;var f=a.get(t);if(f)return f==e;n|=2,a.set(t,e);var s=Jt(i(t),i(e),n,o,u,a);return a.delete(t),s;case"[object Symbol]":if(Yt)return Yt.call(t)==Yt.call(e)}return!1}(t,e,c,r,n,o,u);if(!(1&r)){var v=s&&ee.call(t,"__wrapped__"),b=l&&ee.call(e,"__wrapped__");if(v||b){var y=v?t.value():t,_=b?e.value():e;return u||(u=new Et),o(y,_,r,n,u)}}return!!p&&(u||(u=new Et),function(t,e,r,n,o,u){var a=1&r,i=Tt(t),c=i.length;if(c!=Tt(e).length&&!a)return!1;for(var f=c;f--;){var s=i[f];if(!(a?s in e:Zt.call(e,s)))return!1}var l=u.get(t),p=u.get(e);if(l&&p)return l==e&&p==t;var v=!0;u.set(t,e),u.set(e,t);for(var h=a;++f<c;){var b=t[s=i[f]],y=e[s];if(n)var _=a?n(y,b,s,e,t,u):n(b,y,s,t,e,u);if(!(void 0===_?b===y||o(b,y,r,n,u):_)){v=!1;break}h||(h="constructor"==s)}if(v&&!h){var d=t.constructor,j=e.constructor;d==j||!("constructor"in t)||!("constructor"in e)||"function"==typeof d&&d instanceof d&&"function"==typeof j&&j instanceof j||(v=!1)}return u.delete(t),u.delete(e),v}(t,e,r,n,o,u))}function ne(t,e,r,n,o){return t===e||(null==t||null==e||!l(t)&&!l(e)?t!=t&&e!=e:re(t,e,r,n,ne,o))}function oe(t){return t==t&&!d(t)}function ue(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}}function ae(t){var e=function(t){for(var e=ft(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,oe(o)]}return e}(t);return 1==e.length&&e[0][2]?ue(e[0][0],e[0][1]):function(r){return r===t||function(t,e,r,n){var o=r.length,u=o,a=!n;if(null==t)return!u;for(t=Object(t);o--;){var i=r[o];if(a&&i[2]?i[1]!==t[i[0]]:!(i[0]in t))return!1}for(;++o<u;){var c=(i=r[o])[0],f=t[c],s=i[1];if(a&&i[2]){if(void 0===f&&!(c in t))return!1}else{var l=new Et;if(n)var p=n(f,s,c,t,e,l);if(!(void 0===p?ne(s,f,3,n,l):p))return!1}}return!0}(r,t,e)}}function ie(t,e){return null!=t&&e in Object(t)}function ce(t,e){return null!=t&&function(t,e,r){for(var n=-1,o=(e=xt(e,t)).length,u=!1;++n<o;){var a=Pt(e[n]);if(!(u=null!=t&&r(t,a)))break;t=t[a]}return u||++n!=o?u:!!(o=null==t?0:t.length)&&U(o)&&B(a,o)&&(h(t)||q(t))}(t,e,ie)}function fe(t,e){return pt(t)&&oe(e)?ue(Pt(t),e):function(r){var n=function(t,e,r){var n=null==t?void 0:kt(t,e);return void 0===n?r:n}(r,t);return void 0===n&&n===e?ce(r,t):ne(e,n,3)}}function se(t){return pt(t)?(e=Pt(t),function(t){return null==t?void 0:t[e]}):function(t){return function(e){return kt(e,t)}}(t);var e}var le,pe=function(t,e,r){for(var n=-1,o=Object(t),u=r(t),a=u.length;a--;){var i=u[le?a:++n];if(!1===e(o[i],i,o))break}return t};var ve=function(t,e){return function(r,n){if(null==r)return r;if(!C(r))return t(r,n);for(var o=r.length,u=e?o:-1,a=Object(r);(e?u--:++u<o)&&!1!==n(a[u],u,a););return r}}((function(t,e){return t&&pe(t,e,ft)}));function he(t,e){var r=-1,n=C(t)?Array(t.length):[];return ve(t,(function(t,o,u){n[++r]=e(t,o,u)})),n}function be(t,e){var r;return(h(t)?v:he)(t,"function"==typeof(r=e)?r:null==r?j:"object"==typeof r?h(r)?fe(r[0],r[1]):ae(r):se(r))}console.log(be([4,8],(t=>t*t)));console.log(be([{user:"barney"},{user:"fred"}],"user")),be([{id:1,name:"王五"},{id:2,name:"李四"},{id:3,name:"王五"}],{name:"王五"}),be([{a:{b:1}},{a:{b:2}}],"a.b");
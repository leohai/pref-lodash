var u="object"==typeof global&&global&&global.Object===Object&&global,f="object"==typeof self&&self&&self.Object===Object&&self,e=(u||f||Function("return this")()).Symbol,t=Object.prototype,n=t.hasOwnProperty,r=t.toString,o=e?e.toStringTag:void 0;var d=Object.prototype.toString;var a=e?e.toStringTag:void 0;function i(u){return null==u?void 0===u?"[object Undefined]":"[object Null]":a&&a in Object(u)?function(u){var f=n.call(u,o),e=u[o];try{u[o]=void 0;var t=!0}catch(u){}var d=r.call(u);return t&&(f?u[o]=e:delete u[o]),d}(u):function(u){return d.call(u)}(u)}var c=Array.isArray,l=e?e.prototype:void 0,x=l?l.toString:void 0;function b(u){if("string"==typeof u)return u;if(c(u))return function(u,f){for(var e=-1,t=null==u?0:u.length,n=Array(t);++e<t;)n[e]=f(u[e],e,u);return n}(u,b)+"";if(function(u){return"symbol"==typeof u||function(u){return null!=u&&"object"==typeof u}(u)&&"[object Symbol]"==i(u)}(u))return x?x.call(u):"";var f=u+"";return"0"==f&&1/u==-Infinity?"-0":f}function v(u){return null==u?"":b(u)}function g(u,f,e){var t=u.length;return e=void 0===e?t:e,!f&&e>=t?u:function(u,f,e){var t=-1,n=u.length;f<0&&(f=-f>n?0:n+f),(e=e>n?n:e)<0&&(e+=n),n=f>e?0:e-f>>>0,f>>>=0;for(var r=Array(n);++t<n;)r[t]=u[t+f];return r}(u,f,e)}var s=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function j(u){return s.test(u)}var p="[\\ud800-\\udfff]",A="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",y="\\ud83c[\\udffb-\\udfff]",E="[^\\ud800-\\udfff]",O="(?:\\ud83c[\\udde6-\\uddff]){2}",h="[\\ud800-\\udbff][\\udc00-\\udfff]",S="(?:"+A+"|"+y+")"+"?",U="[\\ufe0e\\ufe0f]?"+S+("(?:\\u200d(?:"+[E,O,h].join("|")+")[\\ufe0e\\ufe0f]?"+S+")*"),z="(?:"+[E+A+"?",A,O,h,p].join("|")+")",I=RegExp(y+"(?="+y+")|"+z+U,"g");function L(u){return j(u)?function(u){return u.match(I)||[]}(u):function(u){return u.split("")}(u)}var R,Z=(R="toUpperCase",function(u){var f=j(u=v(u))?L(u):void 0,e=f?f[0]:u.charAt(0),t=f?g(f,1).join(""):u.slice(1);return e[R]()+t});var T,m=(T={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},function(u){return null==T?void 0:T[u]}),C=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,D=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var N=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var w=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var G="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",H="["+G+"]",Y="\\d+",k="[\\u2700-\\u27bf]",J="[a-z\\xdf-\\xf6\\xf8-\\xff]",M="[^\\ud800-\\udfff"+G+Y+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",V="(?:\\ud83c[\\udde6-\\uddff]){2}",$="[\\ud800-\\udbff][\\udc00-\\udfff]",_="[A-Z\\xc0-\\xd6\\xd8-\\xde]",F="(?:"+J+"|"+M+")",K="(?:"+_+"|"+M+")",P="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",W="[\\ufe0e\\ufe0f]?"+P+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",V,$].join("|")+")[\\ufe0e\\ufe0f]?"+P+")*"),q="(?:"+[k,V,$].join("|")+")"+W,B=RegExp([_+"?"+J+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[H,_,"$"].join("|")+")",K+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[H,_+F,"$"].join("|")+")",_+"?"+F+"+(?:['’](?:d|ll|m|re|s|t|ve))?",_+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Y,q].join("|"),"g");function Q(u,f,e){return u=v(u),void 0===(f=e?void 0:f)?function(u){return w.test(u)}(u)?function(u){return u.match(B)||[]}(u):function(u){return u.match(N)||[]}(u):u.match(f)||[]}var X=RegExp("['’]","g");var uu,fu=(uu=function(u,f,e){return f=f.toLowerCase(),u+(e?Z(v(f).toLowerCase()):f)},function(u){return function(u,f,e,t){var n=-1,r=null==u?0:u.length;for(t&&r&&(e=u[++n]);++n<r;)e=f(e,u[n],n,u);return e}(Q(function(u){return(u=v(u))&&u.replace(C,m).replace(D,"")}(u).replace(X,"")),uu,"")});console.log(fu("a-b-c"));

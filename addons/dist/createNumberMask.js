!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.createNumberMask=t():e.createNumberMask=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t){"use strict";function o(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.prefix,o=void 0===t?c:t,y=e.suffix,b=void 0===y?u:y,h=e.includeThousandsSeparator,x=void 0===h||h,g=e.thousandsSeparatorSymbol,S=void 0===g?l:g,j=e.allowDecimal,D=void 0!==j&&j,M=e.decimalSymbol,N=void 0===M?a:M,k=e.decimalLimit,w=void 0===k?2:k,O=e.requireDecimal,_=void 0!==O&&O,q=e.allowNegative,B=void 0!==q&&q,I=o.length;return function(e){var t=e.length;if(e===u||e[0]===o[0]&&1===t)return o.split(u).concat([v]).concat(b.split(u));var c=e.lastIndexOf(N),l=c!==-1,a=e[0]===f&&B,y=void 0,h=void 0,g=void 0;if(l&&(D||_)?(y=e.slice(0,c),h=e.slice(c+1,t),h=n(h.replace(s,u))):y=e,y=y.replace(s,u),y=x?r(y,S):y,g=n(y),l&&D||_===!0)if(e[c-1]!==N&&g.push(m),g.push(N,m),h)("undefined"==typeof w?"undefined":i(w))===p&&(h=h.slice(0,w)),g=g.concat(h);else if(_===!0)for(var j=0;j<w;j++)g.push(v);return I>0&&(g=o.split(u).concat(g)),a&&(g.length===I&&g.push(v),g=[d].concat(g)),b.length>0&&(g=g.concat(b.split(u))),g}}function n(e){return e.split(u).map(function(e){return v.test(e)?v:e})}function r(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=o;var c="$",u="",l=",",a=".",f="-",d=/-/,s=/\D+/g,p="number",v=/\d/,m="[]"}])});
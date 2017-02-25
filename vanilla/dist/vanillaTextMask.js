!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.vanillaTextMask=r():e.vanillaTextMask=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r=e.inputElement,t=(0,u.default)(e),n=function(e){var r=e.target.value;return t.update(r)};return r.addEventListener("input",n),t.update(r.value),{textMaskInputElement:t,destroy:function(){r.removeEventListener("input",n)}}}Object.defineProperty(r,"__esModule",{value:!0}),r.conformToMask=void 0,r.maskInput=o;var i=t(2);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(i).default}});var a=t(5),u=n(a);r.default=o},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,l=t.previousConformedValue,s=void 0===l?a:l,f=t.placeholderChar,d=void 0===f?i.placeholderChar:f,c=t.placeholder,v=void 0===c?(0,o.convertMaskToPlaceholder)(r,d):c,p=t.currentCaretPosition,h=t.keepCharPositions,m=u===!1&&void 0!==s,g=e.length,y=s.length,C=v.length,b=r.length,x=g-y,k=x>0,P=p+(k?-x:0),O=P+Math.abs(x);if(h===!0&&!k){for(var T=a,M=P;M<O;M++)v[M]===d&&(T+=d);e=e.slice(0,P)+T+e.slice(P,g)}for(var _=e.split(a).map(function(e,r){return{char:e,isNew:r>=P&&r<O}}),j=g-1;j>=0;j--){var w=_[j].char;if(w!==d){var S=j>=P&&y===b;w===v[S?j-x:j]&&_.splice(j,1)}}var V=a,N=!1;e:for(var E=0;E<C;E++){var I=v[E];if(I===d){if(_.length>0)for(;_.length>0;){var L=_.shift(),R=L.char,A=L.isNew;if(R===d&&m!==!0){V+=d;continue e}if(r[E].test(R)){if(h===!0&&A!==!1&&s!==a&&u!==!1&&k){for(var J=_.length,W=null,q=0;q<J;q++){var z=_[q];if(z.char!==d&&z.isNew===!1)break;if(z.char===d){W=q;break}}null!==W?(V+=R,_.splice(W,1)):E--}else V+=R;continue e}N=!0}m===!1&&(V+=v.substr(E,C));break}V+=I}if(m&&k===!1){for(var B=null,D=0;D<V.length;D++)v[D]===d&&(B=D);V=null!==B?V.substr(0,B+1):a}return{conformedValue:V,meta:{someCharsRejected:N}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(3),i=t(1),a=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var r=[],t=void 0;t=e.indexOf(s),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=i,r.processCaretTraps=a;var u=t(1),l=[],s="[]"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.currentCaretPosition,a=void 0===i?0:i,u=e.conformedValue,l=e.rawValue,s=e.placeholderChar,f=e.placeholder,d=e.indexesOfPipedChars,c=void 0===d?n:d,v=e.caretTrapIndexes,p=void 0===v?n:v;if(0===a)return 0;var h=l.length,m=t.length,g=f.length,y=u.length,C=h-m,b=C>0,x=0===m,k=C>1&&!b&&!x;if(k)return a;var P=b&&(t===u||u===f),O=0;if(P?O=a-C:!function(){for(var e=u.toLowerCase(),r=l.toLowerCase(),t=r.substr(0,a).split(o),n=t.filter(function(r){return e.indexOf(r)!==-1}),i=n[n.length-1],d=c.map(function(r){return e[r]}),v=d.filter(function(e){return e===i}).length,p=n.filter(function(e){return e===i}).length,h=f.substr(0,f.indexOf(s)).split(o).filter(function(e,r){return e===i&&l[r]!==e}).length,m=h+p+v,g=0,C=0;C<y;C++){var b=e[C];if(O=C+1,b===i&&g++,g>=m)break}}(),b){for(var T=O,M=O;M<=g;M++)if(f[M]===s&&(T=M),f[M]===s||p.indexOf(M)!==-1||M===g)return T}else for(var _=O;_>=0;_--)if(f[_-1]===s||p.indexOf(_)!==-1||0===_)return _}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r=e.inputElement,t=e.mask,n=e.guide,o=e.pipe,s=e.placeholderChar,d=void 0===s?p.placeholderChar:s,g=e.keepCharPositions,C=void 0!==g&&g;("undefined"==typeof t?"undefined":l(t))===y&&void 0!==t.pipe&&void 0!==t.mask&&(o=t.pipe,t=t.mask);var b={previousConformedValue:m},x=void 0,k=void 0;return t instanceof Array&&(x=(0,v.convertMaskToPlaceholder)(t,d)),{state:b,update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.value;if(t!==!1&&e!==b.previousConformedValue){var s=a(e),p=r.selectionStart,g=b.previousConformedValue,y=void 0;if(("undefined"==typeof t?"undefined":l(t))===h){if(k=t(s,{currentCaretPosition:p,previousConformedValue:g,placeholderChar:d}),k===!1)return;var P=(0,v.processCaretTraps)(k),O=P.maskWithoutCaretTraps,T=P.indexes;k=O,y=T,x=(0,v.convertMaskToPlaceholder)(k,d)}else k=t;var M={previousConformedValue:g,guide:n,placeholderChar:d,pipe:o,placeholder:x,currentCaretPosition:p,keepCharPositions:C},_=(0,c.default)(s,k,M),j=_.conformedValue,w=("undefined"==typeof o?"undefined":l(o))===h,S={};w&&(S=o(j,u({rawValue:s},M)),S===!1?S={value:g,rejected:!0}:(0,v.isString)(S)&&(S={value:S}));var V=w?S.value:j,N=(0,f.default)({previousConformedValue:g,conformedValue:V,placeholder:x,rawValue:s,currentCaretPosition:p,placeholderChar:d,indexesOfPipedChars:S.indexesOfPipedChars,caretTrapIndexes:y}),E=V===x&&0===N,I=E?m:V;b.previousConformedValue=I,r.value!==I&&(r.value=I,i(r,N))}}}}function i(e,r){document.activeElement===e&&(C?setTimeout(function(){return e.setSelectionRange(r,r,g)},0):e.setSelectionRange(r,r,g))}function a(e){if((0,v.isString)(e))return e;if((0,v.isNumber)(e))return String(e);if(void 0===e||null===e)return m;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(4),f=n(s),d=t(2),c=n(d),v=t(3),p=t(1),h="function",m="",g="none",y="object",C=/Android/i.test(navigator&&navigator.userAgent)}])});
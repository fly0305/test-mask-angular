!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.vanillaTextMask=r():e.vanillaTextMask=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var r=e.inputElement,t=(0,i["default"])(e),n=function(e){var r=e.target.value;return t.update(r)};return r.addEventListener("input",n),{control:t,destroy:function(){r.removeEventListener("input",n)}}}Object.defineProperty(r,"__esModule",{value:!0}),r.maskInput=a;var o=t(5),i=n(o);r["default"]=a},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},r.maskingCharacters=["1","A","?","U","L","*"],r.placeholderChar="_"},function(e,r,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?h:arguments[0],r=arguments.length<=1||void 0===arguments[1]?d.placeholderChar:arguments[1];if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));for(var t=!1,n=h,a=0;a<e.length;a++){var o=e[a];"\\"!==o||t===!0?t!==!0?n+=d.maskingCharacters.indexOf(o)!==-1?r:o:(t=!1,n+=o):(t=!0,n+=h)}return n}function a(){var e=arguments.length<=0||void 0===arguments[0]?h:arguments[0];return e.split(h)}function o(){var e=arguments.length<=0||void 0===arguments[0]?h:arguments[0],r=arguments[1];switch(r){case d.maskingCharactersEnums.numeric:return s(e);case d.maskingCharactersEnums.uppercase:case d.maskingCharactersEnums.lowercase:case d.maskingCharactersEnums.alphabetic:return u(e);case d.maskingCharactersEnums.alphanumeric:return s(e)||u(e);case d.maskingCharactersEnums.any:return p.test(e)===!1;default:return!1}}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments[1];switch(r){case d.maskingCharactersEnums.uppercase:return e.toUpperCase();case d.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function s(e){return!isNaN(e)&&p.test(e)!==!0}function u(e){return v.test(e)}function l(e){return"string"==typeof e||e instanceof String}function c(e){return e&&void 0===e.length&&!isNaN(e)}function f(e){for(var r=[],t=e,n=void 0;n=t.indexOf(m),n!==-1;)r.push(n),t=t.slice(0,n)+t.slice(n+m.length,t.length);return{maskWithoutCaretTraps:e.replace(g,h),indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.tokenize=a,r.isAcceptableChar=o,r.potentiallyTransformChar=i,r.isString=l,r.isNumber=c,r.processCaretTraps=f;var d=t(1),h="",p=/\s/g,v=/^[a-zA-Z]+$/,m="[]",g=new RegExp("["+m+"]","g")},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?"":r,a=e.currentCaretPosition,o=void 0===a?0:a,i=e.conformedValue,s=e.rawValue,u=e.placeholderChar,l=e.placeholder,c=e.indexesOfPipedChars,f=void 0===c?n:c,d=e.caretTrapIndexes,h=void 0===d?n:d;if(0===o)return 0;var p=s.length,v=t.length,m=l.length,g=i.length,C=p-v,k=C>0,b=1===p,y=C>1&&!k&&!b;if(y)return o;var x=k&&(t===i||i===l),P=0;if(x?P=o-C:!function(){for(var e=i.toLowerCase(),r=s.toLowerCase(),t=r.substr(0,o).split(""),n=t.filter(function(r){return e.indexOf(r)!==-1}),a=n[n.length-1],u=f.map(function(r){return e[r]}),l=u.filter(function(e){return e===a}).length,c=n.filter(function(e){return e===a}).length,d=c+l,h=0,p=0;p<g;p++){var v=e[p];if(P=p+1,v===a&&h++,h>=d)break}}(),k){for(var w=P,T=P;T<=m;T++)if(l[T]===u&&(w=T),l[T]===u||h.indexOf(T)!==-1||T===m)return w}else for(var O=P;O>=0;O--)if(l[O-1]===u||h.indexOf(O)!==-1||0===O)return O}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=t;var n=[]},function(e,r,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments.length<=1||void 0===arguments[1]?"":arguments[1],t=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=t.guide,i=void 0===n||n,s=t.previousConformedValue,u=void 0===s?"":s,l=t.placeholderChar,c=void 0===l?o.placeholderChar:l,f=t.placeholder,d=void 0===f?(0,a.convertMaskToPlaceholder)(r,c):f,h=t.currentCaretPosition,p=t.keepCharPositions,v=i===!1&&void 0!==u,m=e.length,g=u.length,C=d.length,k=m-g,b=k>0,y=h+(b?-k:0),x=y+Math.abs(k);if(p===!0&&!b){for(var P="",w=y;w<x;w++)d[w]===c&&(P+=c);e=e.slice(0,y)+P+e.slice(y,m)}for(var T=r.replace(/\\./g," "),O=e.split("").map(function(e,r){return{"char":e,isNew:r>=y&&r<x}}),j=0,E=0;E<C;E++){var _=E>=y&&""!==u,M=(_?E+k:E)-j,V=O[M];void 0!==V&&d[E]===V["char"]&&V["char"]!==c&&(O.splice(M,1),j++)}var N="",S=!1;e:for(var A=0;A<C;A++){var L=d[A];if(L===c){if(O.length>0)for(;O.length>0;){var R=O.shift(),I=R["char"],J=R.isNew;if(I===c&&v!==!0){N+=c;continue e}if((0,a.isAcceptableChar)(I,T[A])){if(p===!0&&J!==!1&&""!==u&&i!==!1&&b){for(var U=O.length,z=null,W=0;W<U;W++){var Z=O[W];if(Z["char"]!==c&&Z.isNew===!1)break;if(Z["char"]===c){z=W;break}}null!==z?(N+=(0,a.potentiallyTransformChar)(I,T[A]),O.splice(z,1)):A--}else N+=(0,a.potentiallyTransformChar)(I,T[A]);continue e}S=!0}v===!1&&(N+=d.substr(A,C));break}N+=L}if(v&&b===!1){for(var $=null,q=0;q<N.length;q++)d[q]===c&&($=q);N=null!==$?N.substr(0,$+1):""}return{conformedValue:N,meta:{someCharsRejected:S}}}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var a=t(2),o=t(1)},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var r=e.inputElement,t=e.mask,n=e.guide,a=e.pipe,s=e.placeholderChar,l=void 0===s?d.placeholderChar:s,h=e.onAccept,p=e.onReject,v=e.keepCharPositions,m=void 0!==v&&v,g={previousConformedValue:""},C=void 0,k=void 0;return(0,f.isString)(t)&&(C=(0,f.convertMaskToPlaceholder)(t,l)),""===r.placeholder&&r.setAttribute("placeholder",C),{state:g,update:function(){var e=arguments.length<=0||void 0===arguments[0]?r.value:arguments[0];if(e!==g.previousConformedValue){var s=i(e),d=r.selectionStart,v=g.previousConformedValue,b=void 0;if("function"==typeof t){k=t(s,{currentCaretPosition:d,previousConformedValue:v});var y=(0,f.processCaretTraps)(k),x=y.maskWithoutCaretTraps,P=y.indexes;k=x,b=P,C=(0,f.convertMaskToPlaceholder)(k,l)}else k=t;var w={previousConformedValue:v,guide:n,placeholderChar:l,pipe:a,placeholder:C,currentCaretPosition:d,keepCharPositions:m},T=(0,c["default"])(s,k,w),O=T.conformedValue,j=T.meta.someCharsRejected,E="function"==typeof a,_={};E&&(_=a(O,w),_===!1&&(_={value:v,rejected:!0}));var M=E?_.value:O,V=(0,u["default"])({previousConformedValue:v,conformedValue:M,placeholder:C,rawValue:s,currentCaretPosition:d,placeholderChar:l,indexesOfPipedChars:_.indexesOfPipedChars,caretTrapIndexes:b}),N=M===C&&0===V,S=N?"":M;r.value=S,o(r,V),g.previousConformedValue=S,"function"==typeof h&&S!==v&&h();var A=s.length<v.length;"function"==typeof p&&(j||_.rejected)&&A===!1&&p({conformedValue:M,pipeRejection:_.rejected,maskRejection:j})}}}}function o(e,r){document.activeElement===e&&e.setSelectionRange(r,r,"none")}function i(e){if((0,f.isString)(e))return e;if((0,f.isNumber)(e))return String(e);if(void 0===e||null===e)return"";throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=a;var s=t(3),u=n(s),l=t(4),c=n(l),f=t(2),d=t(1)}])});
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=35)}({0:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.pushInDataLayer=void 0;t.pushInDataLayer=function(e){return window.dataLayer||(window.dataLayer=[]),(e||"object"===n(e))&&window.dataLayer.push(e),e}},35:function(e,t,r){"use strict";var n=r(36),o=r(0),i=r(37);document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelectorAll("#search-filters form"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){"Refine"===e.target.value&&(e.preventDefault(),(0,o.pushInDataLayer)((0,n.buildFilterTrackingObj)(e.target.name,(0,i.checkFilters)(e.currentTarget))),this.submit())})})},36:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildFilterTrackingObj=void 0;t.buildFilterTrackingObj=function(e,t){return"string"==typeof e&&Array.isArray(t)?{event:"Discovery",eventCategory:"Discovery",eventAction:e,eventLabel:t.toString()}:"The parameters are of the incorrect data type."}},37:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkFilters=void 0;var n=r(38);t.checkFilters=function(e){for(var t,r=[],o=e.querySelectorAll("input"),i=0;i<o.length;i++)(t=o[i]).checked&&r.push((0,n.cleanLabelName)(t.nextElementSibling.textContent));return r}},38:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cleanLabelName=void 0;t.cleanLabelName=function(e){return"string"==typeof e?(e=e.split("("))[0].trim():"The parameters are of the incorrect data type."}}});
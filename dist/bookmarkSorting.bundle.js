!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=42)}({0:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.pushInDataLayer=void 0;t.pushInDataLayer=function(e){return window.dataLayer||(window.dataLayer=[]),(e||"object"===r(e))&&window.dataLayer.push(e),e}},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.capitalizeFirstLetter=void 0;t.capitalizeFirstLetter=function(e){return"string"!=typeof e?null:e[0].toUpperCase()+e.slice(1)}},42:function(e,t,n){"use strict";var r=n(8),o=n(0),i=n(43);document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("sortOptions"),t=document.getElementById("sortOptions2");e&&t&&(e.addEventListener("change",function(){(0,o.pushInDataLayer)((0,r.renderObjFunc)("discovery","discovery","bookmark sorting",(0,i.getOptionTextById)("sortOptions")))},!1),t.addEventListener("change",function(){(0,o.pushInDataLayer)((0,r.renderObjFunc)("discovery","discovery","bookmark sorting",(0,i.getOptionTextById)("sortOptions2")))},!1))})},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOptionTextById=void 0;t.getOptionTextById=function(e){if("string"!=typeof e)return null;var t=document.getElementById(e);return t?-1===t.selectedIndex?null:t.options[t.selectedIndex].text:null}},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderObjFunc=void 0;var r=n(3);t.renderObjFunc=function(e,t,n,o){return"string"!=typeof e||"string"!=typeof t||"string"!=typeof n||"string"!=typeof o?null:{event:(0,r.capitalizeFirstLetter)(e),eventCategory:(0,r.capitalizeFirstLetter)(t),eventAction:(0,r.capitalizeFirstLetter)(n),eventLabel:o}}}});
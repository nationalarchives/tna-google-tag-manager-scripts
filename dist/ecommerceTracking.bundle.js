!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.removeNullValues=function e(t){return Object.keys(t).forEach(function(r){t[r]===Object(t[r])?e(t[r]):null!==t[r]&&void 0!==t[r]||delete t[r]}),t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.extractMetaTagContent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=document.querySelector("meta[name = "+e+" ]");return t?t.getAttribute("content"):null}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildEcommerceObj=void 0;var n=r(14);t.buildEcommerceObj=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=t[0],a=t[1],u=t[2],i=t[3],c=t[4],l=t[5],s=t[6],f=t[7],d=t[8],y=t[9],p=t[10];return(0,n.stringOrNull)(t)&&Array.isArray(p)?{event:a,ecommerce:function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({actionField:{step:u,option:i},currencyCode:c},o,{actionField:{id:l,affiliation:s,revenue:f,tax:d,shipping:y},products:p})}:"The parameters are of the incorrect data type."}},,,,,,,,function(e,t,r){"use strict";var n=r(11),o=r(12),a=r(1),u=r(13),i=r(2),c=r(15),l=r(16),s=r(17),f=r(18),d=r(19),y=r(0),p=r(20),v=(0,a.extractMetaTagContent)("WT\\.si_p"),b=(0,p.splitToArray)((0,a.extractMetaTagContent)("WT\\.pn_fa")),m=(0,p.splitToArray)((0,a.extractMetaTagContent)("WT\\.pn_sku")),_=(0,p.splitToArray)((0,a.extractMetaTagContent)("WT\\.tx_s")),O=(0,o.buildProductsObjArray)((0,u.extractProductName)(m),m,_,b,(0,n.calculateQuantity)(m)),h={".removeLink":(0,l.removeBasketItem)(O),".text_sketch.call-to-action-link":(0,s.submitOrder)(O,(0,a.extractMetaTagContent)("WT\\.tx_total"))};window.dataLayer=window.dataLayer||[],document.addEventListener("DOMContentLoaded",function(){(0,c.buttonsExist)(h)}),(v&&"Step 1"===v||"Step 2"===v||"Step 4"===v)&&window.dataLayer.push((0,y.removeNullValues)((0,i.buildEcommerceObj)("purchase",(0,f.verifyEvent)(v),(0,d.verifyOption)(v),(0,a.extractMetaTagContent)("WT\\.si_p"),null,(0,a.extractMetaTagContent)("WT\\.tx_id"),(0,a.extractMetaTagContent)("WT\\.si_n"),(0,a.extractMetaTagContent)("WT\\.tx_total"),(0,a.extractMetaTagContent)("WT\\.tax"),(0,a.extractMetaTagContent)("WT\\.shipping"),O)))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.calculateQuantity=function(e){var t={};return Array.isArray(e)?(e.forEach(function(e,r){t[e]?t[e].push(r):t[e]=[r]}),t):"The parameter is of the incorrect data type."}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildProductsObjArray=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r(1);t.buildProductsObjArray=function(e,t,r,a,u){if(Array.isArray(e)&&Array.isArray(t)&&Array.isArray(r)&&Array.isArray(a)&&"object"===(void 0===u?"undefined":n(u))){for(var i=[],c=0;c<t.length;c++)i.push({name:e[c],price:r[c],brand:(0,o.extractMetaTagContent)("WT\\.pn_gr"),category:a[c],variant:t[c],quantity:u[t[c].split(",")[0]].length});return i}return"The parameters are of the incorrect data type."}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.extractProductName=function(e){if(Array.isArray(e)){var t=[],r=!0,n=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done);r=!0){var i=a.value,c=i.indexOf("/");t.push(i.slice(0,c))}}catch(e){n=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(n)throw o}}return t}return"The parameter is of the incorrect data type."}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.stringOrNull=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Array.isArray(e)?e.forEach(function(e){Array.isArray(e)||(t=!("string"!=typeof e&&null!==e))}):t=!1,t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.buttonsExist=function(e){Object.keys(e).forEach(function(t){document.querySelectorAll(t).forEach(function(r){r.addEventListener("click",e[t])})})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeBasketItem=void 0;var n=r(2),o=r(0);t.removeBasketItem=function(e){return function(){var t=event.target.parentElement.parentElement,r=parseInt(t.children[0].innerHTML[0])-1,a=e.slice(r,r+1),u=(0,o.removeNullValues)((0,n.buildEcommerceObj)("remove","removeFromCart",null,null,"GBP",null,null,null,null,null,a));window.dataLayer.push(u)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.submitOrder=void 0;var n=r(2),o=r(0);t.submitOrder=function(e,t){return function(){var r=t,a=(0,o.removeNullValues)((0,n.buildEcommerceObj)("purchase","transaction",null,"Step 3",null,null,"Discovery store",r,"0","0",e));window.dataLayer.push(a)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.verifyEvent=function(e){var t=void 0;switch(e){case"Step 1":case"Step 2":t="checkout";break;case"Step 4":t="checkoutOption";break;default:t="Invalid step"}return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.verifyOption=function(e){return"Step 4"===e?"Receipt":null}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.splitToArray=function(e){return null===e?[]:e.split(";")}}]);
(()=>{var e={2239:(e,t,r)=>{"use strict";r.r(t)},9559:(e,t,r)=>{"use strict";r.r(t)},3303:(e,t,r)=>{"use strict";r.r(t)},9980:e=>{e.exports={get:function(e){return document.querySelector(e)},getAll:function(e){return document.querySelector(e)}}}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{r(2239),r(9559),r(3303);const e=r(9980);document.addEventListener("DOMContentLoaded",(function(){let t=5,r=setInterval((function(){let n=e.get("span");t--,0===t&&(clearInterval(r),location.href="./login.html"),console.log(t),n.innerText=t}),1e3)}))})()})();
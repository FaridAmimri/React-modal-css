"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".background{align-items:center;background-color:#c8c8c8;display:flex;height:85vh;justify-content:center;position:fixed;top:86px;width:100vw;z-index:10}.container{background-color:#fff;border-radius:12px;box-shadow:0 5px 15px rgba(0,0,0,.35);display:flex;flex-direction:column;padding:25px;width:500px}.header{display:flex;justify-content:flex-end}.title{color:#14ab10}.body,.title{display:inline-block;text-align:center}.body{margin-bottom:20px}.footer{align-items:center;display:flex;flex:20%;justify-content:center}.btnHeader{background-color:transparent;font-size:25px}.btnFooter,.btnHeader{border:none;cursor:pointer}.btnFooter{border-radius:8px;color:#fff;font-size:20px;height:45px;margin:10px;width:150px}.btnFooter a{color:#fff;text-decoration-line:none}#greyBtn{background-color:transparent}#crimsonBtn{background-color:crimson}#blueBtn{background-color:#6495ed}"),exports.Modal=function({title:e,content:n,closeIcon:o="X",onClick:a,openModal:r,setOpenModal:l}){return t.default.createElement("div",{className:"background"},t.default.createElement("div",{className:"container"},t.default.createElement("div",{className:"header"},t.default.createElement("button",{className:"btnHeader",onClick:a},o)),t.default.createElement("div",{className:"title"},e),t.default.createElement("div",{className:"body"},n),t.default.createElement("div",{className:"footer"},t.default.createElement("button",{className:"btnFooter",id:"crimsonBtn",onClick:a},"Back"),t.default.createElement("button",{className:"btnFooter",id:"blueBtn",onClick:a},"Ok"))))};

"use strict";(self.webpackChunkdash_pager=self.webpackChunkdash_pager||[]).push([[119],{993:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(609),a=r.n(n),o=r(120),i=r.n(o);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function c(e,t,r){return t=p(t),function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,s()?Reflect.construct(t,r||[],p(e).constructor):t.apply(e,r))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function f(e,t,r){return(t=b(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}var y=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return f(e=c(this,t,[].concat(n)),"visibleVal",null),f(e,"updateInterval",(function(t){var r=t.tempVal,n=e.visibleVal[0],a=e.visibleVal[1];if(r){"MM"===r?n=e.props.minValue:"M"===r?n-=1:"PP"===r?a=e.props.maxValue:"P"===r?a+=1:r.startsWith("F")&&isNaN(n=parseInt(r.replace("F","")))?n=r.replace("F",""):r.startsWith("T")&&isNaN(a=parseInt(r.replace("T","")))&&(a=r.replace("T",""));var o=[n,a];"number"==typeof n&&e.props.value[0]!=n&&n>=1&&n<=e.props.maxValue?(o=[n,e.props.value[1]],e.props.setProps({value:o})):"number"==typeof a&&e.props.value[1]!=a&&a>=e.props.value[0]&&a<=e.props.maxValue&&(o=[e.props.value[0],a],e.props.setProps({value:o})),e.visibleVal=o}e.forceUpdate()})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=this.props,r=t.id,n=t.value,o=t.maxValue,i=t.minValue,l=t.symbols,u=t.style;t.setProps,this.visibleVal||(this.visibleVal=n);var c=this.visibleVal[0],s=this.visibleVal[1];return a().createElement("div",{id:r+"-container",className:"form-row",style:u},a().createElement("button",{id:r+"-mm",className:"btn btn-outline-primary me-2",type:"button",onClick:function(t){return e.updateInterval({tempVal:"MM"})}},a().createElement("i",{className:"bi bi-chevron-double-left"}),l[0]),a().createElement("button",{id:r+"-m",className:"btn btn-outline-primary me-2",type:"button",onClick:function(t){return e.updateInterval({tempVal:"M"})}},a().createElement("i",{className:"bi bi-chevron-left"}),l[1]),a().createElement("span",{className:"me-2"}," From "),a().createElement("input",{id:r+"-ip-from",value:c,onChange:function(t){return e.updateInterval({tempVal:"F"+t.target.value})},type:"number",style:{width:"10ch",display:"inline"},className:"form-control"+(c!=n[0]||c<i||c>s?" is-invalid":"")}),a().createElement("span",{className:"me-2"}," to "),a().createElement("input",{id:r+"-ip-to",value:s,onChange:function(t){return e.updateInterval({tempVal:"T"+t.target.value})},type:"number",style:{width:"10ch",display:"inline"},className:"form-control"+(s!=n[1]||s>o||s<c?" is-invalid":"")}),a().createElement("span",{className:"me-2"}," of ",o," "),a().createElement("button",{id:r+"-p",className:"btn btn-outline-primary me-2",type:"button",onClick:function(t){return e.updateInterval({tempVal:"P"})}},a().createElement("i",{className:"bi bi-chevron-right"}),l[2]),a().createElement("button",{id:r+"-pp",className:"btn btn-outline-primary me-2",type:"button",onClick:function(t){return e.updateInterval({tempVal:"PP"})}},a().createElement("i",{className:"bi bi-chevron-double-right"}),l[3]),a().createElement("input",{id:r,value:n,type:"hidden"}))}}])&&u(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(n.Component);y.defaultProps={value:[0,0],minValue:0,maxValue:0,symbols:["","","",""]},y.propTypes={id:i().string,value:i().arrayOf(i().number),maxValue:i().number,minValue:i().number,symbols:i().arrayOf(i().string),style:i().object,setProps:i().func}}}]);
//# sourceMappingURL=async-Pager.js.map
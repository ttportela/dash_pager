"use strict";(self.webpackChunkdash_pager=self.webpackChunkdash_pager||[]).push([[119],{993:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(609),o=n.n(r),i=n(120),a=n.n(i);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function c(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}function s(e,t,n){return t=m(t),function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,p()?Reflect.construct(t,n||[],m(e).constructor):t.apply(e,n))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.id,n=e.value,r=e.maxValue,i=e.minValue,a=e.symbols,l=e.tempVal,u=e.style,c=e.setProps,s=n[0],p=n[1];return l&&("MM"===l?s=i:"M"===l?s-=1:"PP"===l?p=r:"P"===l?p+=1:l.startsWith("F")&&isNaN(s=parseInt(l.replace("F","")))?s=l.replace("F",""):l.startsWith("T")&&isNaN(p=parseInt(l.replace("T","")))&&(p=l.replace("T","")),"number"==typeof s&&n[0]!=s&&s>=1&&s<=r&&this.props.setProps({value:[s,n[1]],tempVal:null}),"number"==typeof p&&n[1]!=p&&p>=n[0]&&p<=r&&this.props.setProps({value:[n[0],p],tempVal:null})),o().createElement("div",{id:t+"-container",className:"form-row",style:u},o().createElement("button",{id:t+"-mm",className:"btn btn-outline-primary me-2",type:"button",onClick:function(e){return c({tempVal:"MM"})}},o().createElement("i",{className:"bi bi-chevron-double-left"}),a[0]),o().createElement("button",{id:t+"-m",className:"btn btn-outline-primary me-2",type:"button",onClick:function(e){return c({tempVal:"M"})}},o().createElement("i",{className:"bi bi-chevron-left"}),a[1]),o().createElement("span",{className:"me-2"}," From "),o().createElement("input",{id:t+"-ip-from",value:s,onChange:function(e){return c({tempVal:"F"+e.target.value})},type:"number",style:{width:"10ch",display:"inline"},className:"form-control"+(s!=n[0]||s<i||s>p?" is-invalid":"")}),o().createElement("span",{className:"me-2"}," to "),o().createElement("input",{id:t+"-ip-to",value:p,onChange:function(e){return c({tempVal:"T"+e.target.value})},type:"number",style:{width:"10ch",display:"inline"},className:"form-control"+(p!=n[1]||p>r||p<s?" is-invalid":"")}),o().createElement("span",{className:"me-2"}," of ",r," "),o().createElement("button",{id:t+"-p",className:"btn btn-outline-primary me-2",type:"button",onClick:function(e){return c({tempVal:"P"})}},o().createElement("i",{className:"bi bi-chevron-right"}),a[2]),o().createElement("button",{id:t+"-pp",className:"btn btn-outline-primary me-2",type:"button",onClick:function(e){return c({tempVal:"PP"})}},o().createElement("i",{className:"bi bi-chevron-double-right"}),a[3]),o().createElement("input",{id:t,value:n,type:"hidden"}))}}])&&u(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(r.Component);b.defaultProps={minValue:1,symbols:["","","",""]},b.propTypes={id:a().string,value:a().arrayOf(a().number),maxValue:a().number.isRequired,minValue:a().number,symbols:a().arrayOf(a().string),style:a().object,tempVal:a().string,setProps:a().func}}}]);
//# sourceMappingURL=async-Pager.js.map
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Biu=t():e.Biu=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){var n=0,r=e.toString(),i=t.toString();try{n+=r.split(".")[1].length}catch(e){}try{n+=i.split(".")[1].length}catch(e){}return Number(r.replace(".",""))*Number(i.replace(".",""))/Math.pow(10,n)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var o=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"dicData",[]),a(this,"dicId",null),a(this,"config",{label:"label",value:"value",childrens:"childrens",name:"title",code:"code",children:"childrens"}),this.dicId=t,n&&this.setDicData(n),r&&(this.config=Object.assign(this.config,r))}var t,n,r;return t=e,(n=[{key:"setDicData",value:function(e){this.dicData=e}},{key:"findTreeEnd",value:function(e,t){var n=this,r=[];return function e(t){Array.isArray(t)?t.forEach((function(t){t[n.config.childrens]&&t[n.config.childrens].length>0&&e(t[n.config.childrens]),(void 0===t[n.config.childrens]||Array.isArray(t[n.config.childrens])&&t[n.config.childrens].length<=0)&&r.push(t)})):(t[n.config.childrens]&&t[n.config.childrens].length>0&&e(c[n.config.childrens]),(void 0===t[n.config.childrens]||Array.isArray(t[n.config.childrens])&&t[n.config.childrens].length<=0)&&r.push(c))}(n.find(e,t)),r}},{key:"find",value:function(e,t){var n=this,r=null;try{return function e(t,i,c){if(Array.isArray(t))t.forEach((function(t){t[n.config.childrens]&&t[n.config.childrens].length>0&&e(t[n.config.childrens],i,c),t[n.config.label]!==i||t[n.config.value]!==c||(r=t)}));else{if(t[n.config.label]===i&&t[n.config.value]===c)return void(r=t);t[n.config.childrens]&&t[n.config.childrens].length>0&&e(t[n.config.childrens],i,c)}}(n.dicData,e,t),r}catch(e){return console.log("[error happened in find()]",e),null}}},{key:"toCnName",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.dicData,n=arguments.length>2?arguments[2]:void 0,r=this;n&&(r.config=Object.assign(r.config,n));var i=function e(t,n){Array.isArray(t)?t.forEach((function(t){t[r.config.name]&&t[r.config.code]&&(n[t[r.config.code]]=t[r.config.name]),t[r.config.children]&&t[r.config.children].length>0&&e(t[r.config.children],n)})):(t[r.config.name]&&t[r.config.code]&&(n[t[r.config.code]]=t[r.config.name]),t[r.config.children]&&t[r.config.children].length>0&&e(t[r.config.children],n))},c=function(e){var t={};return i(e,t),t},a=function(e){return'"'+e+'"'};try{var o=JSON.stringify(e),u=c(t);for(var l in u)o=o.replace(new RegExp(a(l),"g"),a(u[l]));return JSON.parse(o)}catch(t){return console.log("[error happened in toCnName()]",t),e}}}])&&i(t.prototype,n),r&&i(t,r),e}();function u(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e){var t=e.split("-"),n=t[0],r=t[1],i=t[2],c=n,a=parseInt(r)+1;13===a&&(c=parseInt(c)+1,a=1);var o=i,u=new Date(c,a,0);return o>(u=u.getDate())&&(o=u),a<10&&(a="0"+a),c+"-"+a+(o?"'-' + day2":"")}function f(e){var t=new Date;e&&(t=new Date(e));var n=new Date;return n.setFullYear(t.getFullYear()+1),n=n.toLocaleDateString().replace(new RegExp("/","g"),"-")}function g(e){var t=new Date(e);return h("YYYY-mm-dd",new Date(t.getTime()+864e5))}function h(e,t){var n,r={"Y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"H+":t.getHours().toString(),"M+":t.getMinutes().toString(),"S+":t.getSeconds().toString()};for(var i in r)(n=new RegExp("("+i+")").exec(e))&&(e=e.replace(n[1],1===n[1].length?r[i]:r[i].padStart(n[1].length,"0")));return e}function d(e){return!((e%4||!(e%100))&&e%400)}t.default={unique:function(e){return u(new Set(e))},plus:function(e,t){var n,r,i;try{n=e.toString().split(".")[1].length}catch(e){n=0}try{r=t.toString().split(".")[1].length}catch(e){r=0}return(e*(i=Math.pow(10,Math.max(n,r)))+t*i)/i},division:function(e,t){var n=0,i=0;try{n=e.toString().split(".")[1].length}catch(e){}try{i=t.toString().split(".")[1].length}catch(e){}return r(Number(e.toString().replace(".",""))/Number(t.toString().replace(".","")),Math.pow(10,i-n))},multiplication:r,subtraction:function(e,t){var n,r,i;try{n=e.toString().split(".")[1].length}catch(e){n=0}try{r=t.toString().split(".")[1].length}catch(e){r=0}return((e*(i=Math.pow(10,Math.max(n,r)))-t*i)/i).toFixed(n>=r?n:r)},getPreDay:function(e){var t=new Date(e);return h("YYYY-mm-dd",new Date(t.getTime()-864e5))},getNextDay:g,getPreWeek:function(e){var t=new Date;e&&(t=new Date(e));var n=new Date;n.setDate(t.getDate()-6);var r=n.getDate(),i=n.getMonth()+1;return n.getFullYear()+"-"+i+"-"+r},getNextWeek:function(e){var t=new Date;e&&(t=new Date(e));var n=new Date;n.setDate(t.getDate()+6);var r=n.getDate(),i=n.getMonth()+1;return n.getFullYear()+"-"+i+"-"+r},getPreMouth:function(e){var t=new Date;e&&(t=new Date(e));var n=new Date;return n.setMonth(t.getMonth()-1),n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()},getNextMouth:l,getPreYear:function(e){var t=new Date;e&&(t=new Date(e));var n=new Date;return n.setFullYear(t.getFullYear()-1),n=n.toLocaleDateString().replace(new RegExp("/","g"),"-")},getNextYear:f,getPreThreeMouth:function(e){var t=new Date;e&&(t=new Date(e));var n=new Date;return n.setMonth(t.getMonth()-2),n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()},dateFormat:h,isLeapYear:d,getDaysForMonth:function(e,t){return 2===t&&d(e)?29:[31,31,28,31,30,31,30,31,31,30,31,30,31][t]},getDateDistance:function(e,t){var n=[],r="",i=e.length;return n.push(e),function e(t,c){Date.parse(t)>=Date.parse(c)||(i>=4&&i<=5?r=h("YYYY",new Date(f(t))):i>=6&&i<=7?r=h("YYYY-mm",new Date(l(t))):i>=8&&i<=10&&(r=h("YYYY-mm-dd",new Date(g(t)))),n.push(r),e(r,c))}(e,t),n},getExplore:function(){var e,t={},n=navigator.userAgent.toLowerCase();return(e=n.match(/rv:([\d.]+)\) like gecko/))?t.ie=e[1]:(e=n.match(/msie ([\d\.]+)/))?t.ie=e[1]:(e=n.match(/edge\/([\d\.]+)/))?t.edge=e[1]:(e=n.match(/firefox\/([\d\.]+)/))?t.firefox=e[1]:(e=n.match(/(?:opera|opr).([\d\.]+)/))?t.opera=e[1]:(e=n.match(/chrome\/([\d\.]+)/))?t.chrome=e[1]:(e=n.match(/version\/([\d\.]+).*safari/))&&(t.safari=e[1]),t.ie?"IE: "+t.ie:t.edge?"EDGE: "+t.edge:t.firefox?"Firefox: "+t.firefox:t.chrome?"Chrome: "+t.chrome:t.opera?"Opera: "+t.opera:t.safari?"Safari: "+t.safari:"Unkonwn"},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))},trimLeft:function(e){return e.replace(/(^\s*)/g,"")},trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(e){return e.replace(/(\s*$)/g,"")},codeToName:function(e,t,n){var r={name:"title",code:"code",children:"childrens"};n&&(r=Object.assign(r,n));var i=function(e){return'"'+e+'"'};try{var c=JSON.stringify(e),a=function(e){var t={};return function e(t,n){Array.isArray(t)?t.forEach((function(t){t[r.name]&&t[r.code]&&(n[t[r.code]]=t[r.name]),t[r.children]&&t[r.children].length>0&&e(t[r.children],n)})):(t[r.name]&&t[r.code]&&(n[t[r.code]]=t[r.name]),t[r.children]&&t[r.children].length>0&&e(t[r.children],n))}(e,t),t}(t);for(var o in a)c=c.replace(new RegExp(i(o),"g"),i(a[o]));return JSON.parse(c)}catch(t){return console.log("[error in areaCodeToChinese]",t),e}},DictionaryUtil:o,numberToChinese:function(e){for(var t=new Array("零","一","二","三","四","五","六","七","八","九","十"),n=new Array("","十","百","仟","萬","億","点",""),r=(""+e).replace(/(^0*)/g,"").split("."),i=0,c="",a=r[0].length-1;a>=0;a--){switch(i){case 0:c=n[7]+c;break;case 4:new RegExp("0{4}//d{"+(r[0].length-a-1)+"}$").test(r[0])||(c=n[4]+c);break;case 8:c=n[5]+c,n[7]=n[5],i=0}i%4==2&&0!=r[0].charAt(a+2)&&0==r[0].charAt(a+1)&&(c=t[0]+c),0!=r[0].charAt(a)&&(c=t[r[0].charAt(a)]+n[i%4]+c),i++}if(r.length>1){c+=n[6];for(var o=0;o<r[1].length;o++)c+=t[r[1].charAt(o)]}return"一十"==c&&(c="十"),c.match(/^一/)&&3==c.length&&(c=c.replace("一","")),c},checkPhone:function(e){return/(1[3-9]\d{9}$)/.test(e)},checkTelephone:function(e){return/^\d{3,4}\-\d{7,8}$/.test(e)},checkBankCard:function(e){return/^[0-9]{16,19}$/.test(e)},checkEmail:function(e){return/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(e)},checkIdCard:function(e){return/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e)},isObj:function(e){return"Object"===Object.prototype.toString.call(e).slice(8,-1)},isArray:function(e){return"Array"===Object.prototype.toString.call(e).slice(8,-1)},isEmpty:function(e){return!(e&&void 0!==e||0===e&&"0"===e)},checkNumber:function(e){return null==e.match(/\D/)},checkDecimal:function(e){return null!=e.match(/^-?\d+(\.\d+)?$/g)},checkInteger:function(e){return null!=e.match(/^[-+]?\d*$/)},checkNoCnString:function(e){return!/[^\x00-\xff]/g.test(e)},checkChinese:function(e){return-1!=escape(e).indexOf("%u")},checkQQ:function(e){return null!=e.match(/^\d{5,10}$/)},checkIP:function(e){return null!=e.match(/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/)},checkURL:function(e){return null!=e.match(/(http[s]?|ftp):\/\/[^\/\.]+?\..+\w$/i)},checkQuote:function(e){var t=new Array("~","`","!","@","#","$","%","^","&","*","{","}","[","]","(",")");t.push(":",";","'","|","\\","<",">","?","/","<<",">>","||","//"),t.push("admin","administrators","administrator","管理员","系统管理员"),t.push("select","delete","update","insert","create","drop","alter","trancate"),e=e.toLowerCase();for(var n=0;n<t.length;n++)if(e.indexOf(t[n])>=0)return!0;return!1},checkDate:function(e){var t=e.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);if(null==t)return!1;var n=new Date(t[1],t[3]-1,t[4]);return n.getFullYear()==t[1]&&n.getMonth()+1==t[3]&&n.getDate()==t[4]},checkTime:function(e){var t=e.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);return null!=t&&!(t[1]>24||t[3]>60||t[4]>60)},checkFullTime:function(e){return null!=e.match(/^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/)},checkSexByIdCard:function(e){var t;return t=e.replace(/ /g,""),15==(e=t.replace(/(^\s*)|(\s*$)/g,"")).length?e.substring(14,15)%2==0?0:1:18==e.length?e.substring(14,17)%2==0?0:1:-1},checkEnStrRange:function(e,t,n){var r=0,i=20;return void 0!==t&&void 0!==n&&Number.isInteger(t)&&Number.isInteger(n)&&(r=t,i=n),!!new RegExp("^[a-z0-9A-Z]{"+r+","+i+"}$").test(e)}}}])}));
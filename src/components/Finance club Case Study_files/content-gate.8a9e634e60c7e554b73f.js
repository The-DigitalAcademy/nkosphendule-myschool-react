(self.webpackChunk=self.webpackChunk||[]).push([[8429,7154,6138],{38268:function(e,t,n){"use strict";n.r(t),n.d(t,{slides:function(){return r},slideContainer:function(){return o},slideImages:function(){return i},firstImage:function(){return s},currentImage:function(){return a},playerNavcurrentSlideNumber:function(){return c},stage:function(){return u},progressBar:function(){return l},player:function(){return d},toolbar:function(){return f},fullscreenOverlay:function(){return p},fullscreenOverlayPreviousSlide:function(){return h},cssFullscreenOverlayBackdrop:function(){return w},getSlideSelectorByIndex:function(){return g},TOOLBAR_HEIGHT:function(){return m},SLIDE_MARGIN:function(){return v}});const r=$("#new-player .slide"),o=$("#slide-container"),i=$("#new-player .slide-image"),s=i.first(),a=$("#new-player .slide.current .slide-image"),c=$("#new-player .current-slide-number"),u=$("#new-player #stage"),l=$("#progress-bar"),d=$("#new-player"),f=$("#player-toolbar"),p=$("#player-fullscreen-overlay"),h=$("#player-fullscreen-overlay #overlay-previous-slide"),w=$("#fullscreen-css-backdrop"),g=e=>`#new-player #slide-${e}`,m=50,v=7},86544:function(e,t,n){"use strict";n.r(t);var r=n(20923);t.default=e=>{const t={from_source:e.from_source||"/",initial_view:e.initial_view||"join",slideshow_id:e.slideshow_id,slideshow_key:e.slideshow_key,device_id:"undefined"!=typeof amplitude&&amplitude.getInstance()&&amplitude.getInstance().options?amplitude.getInstance().options.deviceId:"",download:e.isDownload,content_gate:e.isContentGate},n=new FormData;for(let[e,r]of Object.entries(t))r&&n.append(e,r);(0,r.default)().then((e=>fetch("/scribd/authorize",{credentials:"same-origin",headers:{"X-CSRF-Token":e},method:"POST",body:n}).then((e=>e.json())).then((e=>{const t=[];for(let[n,r]of Object.entries(e.params))r&&t.push(`${encodeURIComponent(n)}=${encodeURIComponent(r)}`);const n=t.join("&"),r=`${e.url}?${n}`;window.location.href=r}))))}},95318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},78846:function(e,t,n){("undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{}).SENTRY_RELEASE={id:"6cd5e312c297e9fe340fd324edc5508176878ec4"}},9669:function(e,t,n){e.exports=n(51609)},55448:function(e,t,n){"use strict";var r=n(64867),o=n(36026),i=n(4372),s=n(15327),a=n(94097),c=n(84109),u=n(67985),l=n(85061),d=n(45655),f=n(65263);e.exports=function(e){return new Promise((function(t,n){var p,h=e.data,w=e.headers,g=e.responseType;function m(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(h)&&delete w["Content-Type"];var v=new XMLHttpRequest;if(e.auth){var _=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";w.Authorization="Basic "+btoa(_+":"+y)}var b=a(e.baseURL,e.url);function T(){if(v){var r="getAllResponseHeaders"in v?c(v.getAllResponseHeaders()):null,i={data:g&&"text"!==g&&"json"!==g?v.response:v.responseText,status:v.status,statusText:v.statusText,headers:r,config:e,request:v};o((function(e){t(e),m()}),(function(e){n(e),m()}),i),v=null}}if(v.open(e.method.toUpperCase(),s(b,e.params,e.paramsSerializer),!0),v.timeout=e.timeout,"onloadend"in v?v.onloadend=T:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&setTimeout(T)},v.onabort=function(){v&&(n(l("Request aborted",e,"ECONNABORTED",v)),v=null)},v.onerror=function(){n(l("Network Error",e,null,v)),v=null},v.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||d.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",v)),v=null},r.isStandardBrowserEnv()){var S=(e.withCredentials||u(b))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;S&&(w[e.xsrfHeaderName]=S)}"setRequestHeader"in v&&r.forEach(w,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete w[t]:v.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(v.withCredentials=!!e.withCredentials),g&&"json"!==g&&(v.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&v.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){v&&(n(!e||e&&e.type?new f("canceled"):e),v.abort(),v=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),h||(h=null),v.send(h)}))}},51609:function(e,t,n){"use strict";var r=n(64867),o=n(91849),i=n(30321),s=n(47185),a=function e(t){var n=new i(t),a=o(i.prototype.request,n);return r.extend(a,i.prototype,n),r.extend(a,n),a.create=function(n){return e(s(t,n))},a}(n(45655));a.Axios=i,a.Cancel=n(65263),a.CancelToken=n(14972),a.isCancel=n(26502),a.VERSION=n(97288).version,a.all=function(e){return Promise.all(e)},a.spread=n(8713),a.isAxiosError=n(16268),e.exports=a,e.exports.default=a},65263:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},14972:function(e,t,n){"use strict";var r=n(65263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},26502:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},30321:function(e,t,n){"use strict";var r=n(64867),o=n(15327),i=n(80782),s=n(13572),a=n(47185),c=n(54875),u=c.validators;function l(e){this.defaults=e,this.interceptors={request:new i,response:new i}}l.prototype.request=function(e,t){if("string"==typeof e?(t=t||{}).url=e:t=e||{},!t.url)throw new Error("Provided config url is not valid");(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,l=[];if(this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)})),!o){var d=[s,void 0];for(Array.prototype.unshift.apply(d,r),d=d.concat(l),i=Promise.resolve(t);d.length;)i=i.then(d.shift(),d.shift());return i}for(var f=t;r.length;){var p=r.shift(),h=r.shift();try{f=p(f)}catch(e){h(e);break}}try{i=s(f)}catch(e){return Promise.reject(e)}for(;l.length;)i=i.then(l.shift(),l.shift());return i},l.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=l},80782:function(e,t,n){"use strict";var r=n(64867);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},94097:function(e,t,n){"use strict";var r=n(91793),o=n(7303);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},85061:function(e,t,n){"use strict";var r=n(80481);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},13572:function(e,t,n){"use strict";var r=n(64867),o=n(18527),i=n(26502),s=n(45655),a=n(65263);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},80481:function(e){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},47185:function(e,t,n){"use strict";var r=n(64867);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function s(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function c(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||i,o=t(e);r.isUndefined(o)&&t!==c||(n[e]=o)})),n}},36026:function(e,t,n){"use strict";var r=n(85061);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},18527:function(e,t,n){"use strict";var r=n(64867),o=n(45655);e.exports=function(e,t,n){var i=this||o;return r.forEach(n,(function(n){e=n.call(i,e,t)})),e}},45655:function(e,t,n){"use strict";var r=n(64867),o=n(16016),i=n(80481),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=n(55448)),c),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||u.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw i(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(s)})),e.exports=u},97288:function(e){e.exports={version:"0.25.0"}},91849:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},15327:function(e,t,n){"use strict";var r=n(64867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},7303:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4372:function(e,t,n){"use strict";var r=n(64867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},91793:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},16268:function(e,t,n){"use strict";var r=n(64867);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},67985:function(e,t,n){"use strict";var r=n(64867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16016:function(e,t,n){"use strict";var r=n(64867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},84109:function(e,t,n){"use strict";var r=n(64867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},8713:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},54875:function(e,t,n){"use strict";var r=n(97288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var i={};o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,s){if(!1===e)throw new Error(o(r," has been removed"+(t?" in "+t:"")));return t&&!i[r]&&(i[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],s=t[i];if(s){var a=e[i],c=void 0===a||s(a,i,e);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+i)}},validators:o}},64867:function(e,t,n){"use strict";var r=n(91849),o=Object.prototype.toString;function i(e){return Array.isArray(e)}function s(e){return void 0===e}function a(e){return"[object ArrayBuffer]"===o.call(e)}function c(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===o.call(e)}function d(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:a,isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===o.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&a(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:u,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:l,isStream:function(e){return c(e)&&l(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===o.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:d,merge:function e(){var t={};function n(n,r){u(t[r])&&u(n)?t[r]=e(t[r],n):u(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)d(arguments[r],n);return t},extend:function(e,t,n){return d(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},89994:function(e,t,n){"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.trackView=t.showLimitOverlay=t.logViewRestrictionEvent=t.isRevisit=t.hideLimitOverlay=t.handleBannerNotification=t.getShouldShowReaderBlur=t.getShouldShowBannerNotificationsUX=t.getIsValidIsoDate=t.getContentGateDataFromStorage=t.CONTENT_COUNT_TO_START_RENDERING_BANNER_NOTIFICATIONS=t.ALLOWED_CONTENT_COUNT_WITHOUT_SUBSCRIPTION=void 0;var o=n(63911),i=n(97695),s=r(n(87804)),a=r(n(86544)),c=n(38268);t.ALLOWED_CONTENT_COUNT_WITHOUT_SUBSCRIPTION=5,t.CONTENT_COUNT_TO_START_RENDERING_BANNER_NOTIFICATIONS=2;const u="contentGateV3",l=()=>{let e=(0,o.loadFromStorage)(u);return Array.isArray(e.documents)||(e.documents=[]),e.documents};t.getContentGateDataFromStorage=l,t.isRevisit=e=>{const t=l(),n=t.findIndex((t=>t.id===e));return n>-1&&t[n].revisitAllowed},t.trackView=e=>{let t=l();const n=new Date((0,i.getDateNow)().getTime()-2592e6).toISOString();return t=t.filter(f).filter((e=>e.at>n)),-1===t.findIndex((t=>t.id===e))&&(t.length>=5?t.push({id:e,at:(0,i.getDateNow)(),revisitAllowed:!1}):t.push({id:e,at:(0,i.getDateNow)(),revisitAllowed:!0})),(0,o.saveToStorage)(u,{documents:t}),t.length};const d=e=>!!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(e)&&new Date(e).toISOString()===e;function f(e){return!!(n=e.id)&&"string"==typeof n&&!!(t=e.at)&&d(t);var t,n}t.getIsValidIsoDate=d,t.getShouldShowBannerNotificationsUX=(e,t,n)=>({shouldShowBanner:e-t<=n,remainingDocCount:e-t}),t.getShouldShowReaderBlur=(e,t)=>t>e,t.logViewRestrictionEvent=e=>{const t=6===e;3===e&&(0,s.default)("view_restriction_banner_shown"),t&&(0,s.default)("view_restriction_threshold_hit")};const p=()=>{const e=window.slideshare_object,t=e&&e.slideshow;(0,a.default)({from_source:`${t.ss_url}?subscription_success_banner=show`,slideshow_id:t.id,isContentGate:!0})};t.handleBannerNotification=(e,t)=>{const n=$(".limit-notification"),r=n.find("#notification-warning-text");r.empty(),r.append(((e,t)=>{const n=t.utils;return e<0?n.i18n("slideshow.foundation_slideview.limit_content_without_account.notification_banner_ran_out_text"):0===e?n.i18n("slideshow.foundation_slideview.limit_content_without_account.notification_banner_last_document_text"):n.i18n("slideshow.foundation_slideview.limit_content_without_accoun.notification_banner_text",{count:e})})(e,t)),n.find("#notification-warning-link").on("click",p),n.css("opacity",0).slideDown(400).animate({opacity:1},{queue:!1,duration:400})},t.showLimitOverlay=()=>{const e=$(".limit-overlay");e.find("#sign-up-with-scribd").on("click",p),e.css("display",""),c.player.addClass("guest-limit")},t.hideLimitOverlay=()=>{$(".limit-overlay").css("display","none"),c.player.removeClass("guest-limit")}},32591:function(e,t,n){"use strict";var r=n(89994),o=n(38268),i=n(63911),s=n(64888),a=n(15130);const c=async e=>{const t=await(0,a.getFlagValue)("view_restriction_without_subscription_after_five"),n=slideshare_object.isShowingAds;if(!t||!e||n)return(0,s.logSlideshowViewed)({viewRestrictionState:null,viewRestrictionCounter:null}),!1;if(!(0,i.isLocalStorageEnabled)())return(0,s.logSlideshowViewed)({viewRestrictionState:"not supported",viewRestrictionCounter:null}),!1;if(!e.view_restriction_eligible)return(0,s.logSlideshowViewed)({viewRestrictionState:"unrestricted",viewRestrictionCounter:null}),!1;if((0,r.isRevisit)(e.id)){const e=(0,r.getContentGateDataFromStorage)().length;return(0,s.logSlideshowViewed)({viewRestrictionState:"revisit",viewRestrictionCounter:e}),!1}return!0};function u(e){const t=r.ALLOWED_CONTENT_COUNT_WITHOUT_SUBSCRIPTION-r.CONTENT_COUNT_TO_START_RENDERING_BANNER_NOTIFICATIONS;return e<t?"unrestricted":e>=t&&e<=r.ALLOWED_CONTENT_COUNT_WITHOUT_SUBSCRIPTION?"warning":"restricted"}window.addEventListener("DOMContentLoaded",(async()=>{const e=window.slideshare_object,t=e&&e.slideshow;if(await c(t)){const e=(0,r.trackView)(t.id);(0,r.logViewRestrictionEvent)(e),(0,s.logSlideshowViewed)({viewRestrictionState:u(e),viewRestrictionCounter:e}),function(e){const t=window.slideshare_object,{shouldShowBanner:n,remainingDocCount:i}=(0,r.getShouldShowBannerNotificationsUX)(r.ALLOWED_CONTENT_COUNT_WITHOUT_SUBSCRIPTION,e,r.CONTENT_COUNT_TO_START_RENDERING_BANNER_NOTIFICATIONS),s=(0,r.getShouldShowReaderBlur)(r.ALLOWED_CONTENT_COUNT_WITHOUT_SUBSCRIPTION,e);n&&(0,r.handleBannerNotification)(i,t),s&&o.player.attr("data-shouldblurreader",s)}(e)}}))},38239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.trackABTestsUpdate=t.amplitudeABTestIdentify=void 0;var r=n(15130);const o=e=>{if("undefined"!=typeof amplitude&&e){const t=new amplitude.Identify;Object.keys(e).forEach((n=>{const r=e[n].value;let o=n;e[n].version>0&&(o=`${o}:${e[n].version}`),"none"!==r&&t.set(o,r)})),amplitude.getInstance().identify(t)}};t.trackABTestsUpdate=o,t.amplitudeABTestIdentify=async()=>{if("undefined"!=typeof amplitude){const e=await(0,r.getTests)();o(e)}}},87804:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,t.navigateAfterTracking=void 0;var r=n(38652),o=n(64888);function i(e,t,n,o){if(void 0===window.amplitude)return;const i={browserId:(0,r.getCookie)("browser_id")},s=Object.assign({},t,i);window.amplitude.getInstance().logEvent(e,s,n,o)}t.navigateAfterTracking=(e,t,n)=>{const r=n??(null==t?void 0:t.currentTarget.href);t&&t.preventDefault(),i(e,(0,o.getSlideshowViewEventOptions)(),(()=>window.location.href=r))}},64888:function(e,t,n){"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.logSlideshowViewed=t.initializeSlideshowEvents=t.getSlideshowViewEventOptions=void 0;var o=r(n(87804));const i=()=>{const e=window.slideshare_object.slideshow;return{slideshow_id:e.id,slideshow_created_at:e.created_at,slideshow_category:slideshare_object.gam_cat_name,slideshow_language:e.language,slideshow_format:e.type,source:"slideshow_view"}};function s(e){const t=$.extend({},i(),{social:e});(0,o.default)("slideshow_share_interacted",t)}t.getSlideshowViewEventOptions=i,t.logSlideshowViewed=e=>{let{viewRestrictionState:t,viewRestrictionCounter:n}=e;const r=$.extend({},i(),{adblock_enabled:0===document.querySelector(".ad-zone").offsetHeight,slideshow_num_pages:window.slideshare_object.slideshow.total_slides,view_restriction_state:t,view_restriction_counter:n});(0,o.default)("slideshow_viewed",r)};const a=e=>{const t=window.slideshare_object.slideshow,n={from_slideshow_id:t.id,from_slideshow_created_at:t.created_at,from_slideshow_category:slideshare_object.gam_cat_name,from_slideshow_language:t.language,from_slideshow_format:t.type,source:"slideshow_view",to_slideshow_id:e.currentTarget.dataset.recId,recommendation_location:e.currentTarget.dataset.index,recommendation_source:e.currentTarget.dataset.sourceName,recommendation_type:e.currentTarget.dataset.recommendationType,recommendation_module_position:e.currentTarget.dataset.recommendationModulePosition};(0,o.default)("slideshow_recommendation_click",n)};t.initializeSlideshowEvents=()=>{window.addEventListener("DOMContentLoaded",(()=>{$(".facebook .share-link").click((function(){s("facebook")})),$(".twitter .share-link").click((function(){s("twitter")})),$(".linkedin .share-link").click((function(){s("linkedin")})),$(".j-share-embed").click((function(){s("embed")})),$(".wordpress-container").click((function(){s("wordpress")})),$(".share-link-container").click((function(){s("link")})),$(".share-event-logging").click((function(){(0,o.default)("slideshow_share_initiated",i())})),$(".clip-button").click((function(e){e.preventDefault(),e.stopPropagation(),(0,o.default)("slideshow_clipped",i())})),$("#mobile-clip-button").click((function(){(0,o.default)("slideshow_clipped",i())})),$(".clipping-indicator.top-clip").click((function(){(0,o.default)("slideshow_jumped_to_clip",i())})),$(".carousel-link").click(a),$(".j-related-impression").click(a)}))}},38652:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendTrackingEventBatch=t.sendTrackingEvent=t.getSlideshowId=t.getPageKey=t.getCookie=void 0;const n=(e,t)=>{if(t.append("authenticity_token",$('meta[name="csrf-token"]').attr("content")),navigator.sendBeacon)try{navigator.sendBeacon(e,t)}catch{console.warn(`Failed to send tracking event to ${e}`)}else $.ajax({url:e,data:t,processData:!1,contentType:!1,type:"POST",success:function(t){t&&!t.success&&console.warn(`Failed to send tracking event to ${e}`)}})},r=e=>{const t=new FormData;return Object.keys(e).forEach((n=>{t.append(n,JSON.stringify(e[n]))})),t};t.sendTrackingEvent=(e,t)=>{n("/frontend_tracking/track_event",r({event_name:e,event_body:t}))},t.sendTrackingEventBatch=e=>{n("/frontend_tracking/track_batch",r({events:e}))},t.getCookie=e=>{if(document.cookie){const t=document.cookie.split("; ").find((t=>t.startsWith(`${e}=`)));return t?t.split("=")[1]:""}return""},t.getPageKey=()=>window.slideshare_object&&window.slideshare_object.page_key||null,t.getSlideshowId=()=>window.slideshare_object&&window.slideshare_object.slideshow&&window.slideshare_object.slideshow.id||"-1"},15130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadTests=t.getTests=t.getTestValue=t.getFlags=t.getFlagValue=void 0;var r=n(63409),o=n(38239);let i=null;const s=e=>window.ab_tests[e]?window.ab_tests[e].value:null,a=e=>Array.isArray(e)&&e.length,c=e=>{let t=[];return a(e)&&(t=e.filter((e=>!s(e)))),a(t)?t:null},u=async e=>{const t=c(e);if(!i||t){const e=(e=>{const t=c(e);return t?`?${t.map((e=>`assign[]=${e}`)).join("&")}`:""})(t);i=(0,r.get)(`/ab_tests${e}`)}const n=await i;n&&200===n.status?(window.feature_flags=n.data.feature_flags,window.ab_tests=n.data.ab_tests,t&&(0,o.trackABTestsUpdate)(window.ab_tests)):console.warn("Failed to load AB test assignments")};t.loadTests=u,t.getFlagValue=async e=>(window.feature_flags||await u(),(e=>e in window.feature_flags?window.feature_flags[e]:null)(e)),t.getTestValue=async e=>(s(e)||await u([e]),s(e)),t.getTests=async e=>(!c(e)&&window.ab_tests||await u(e),window.ab_tests),t.getFlags=async()=>(window.feature_flags||await u(),window.feature_flags)},20923:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=async function(){const e=document.querySelector('meta[name="csrf-token"]');if(e)return e.getAttribute("content");if(null!==n)return n;let t=await fetch("/csrf_token",{credentials:"same-origin",method:"GET"});if(!t.ok)throw new Error(`csrf token http error: ${t.status}`);return t=await t.json(),n=t.csrf_token,n};let n=null},97695:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDateNow=void 0,t.getDateNow=()=>new Date},63911:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.saveToStorage=t.loadFromStorage=t.isLocalStorageEnabled=void 0;let n=null;const r=()=>{if(null!==n)return n;try{return window.localStorage.setItem("slideshare_test","test"),window.localStorage.removeItem("slideshare_test"),n=!0,n}catch(e){return n=!1,n}};t.isLocalStorageEnabled=r,t.loadFromStorage=e=>r()?JSON.parse(window.localStorage.getItem(e)||"{}"):null,t.saveToStorage=(e,t)=>{if(!r())return null;window.localStorage.setItem(e,JSON.stringify(t))}},63409:function(e,t,n){"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.putFile=t.postFormData=t.post=t.getCSRFToken=t.get=void 0;var o=r(n(9669));let i;const s=async()=>{if(i)return i;const e=document.querySelector('meta[name="csrf-token"]');if(e)return e.getAttribute("content");const t=await o.default.get("/csrf_token",{headers:{credentials:"same-origin",method:"GET"}});if(200!==t.status)throw new Error(t.status);return i=t.data.csrf_token,t.data.csrf_token};t.getCSRFToken=s,t.postFormData=async(e,t,n)=>{const r=new FormData;for(let[e,n]of Object.entries(t))r.append(e,n);return await a(e,r,n)},t.putFile=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>{};const i=new FormData;i.append("file",t,t.originalname);const s=await o.default.put(e,i,{...n,onUploadProgress:e=>r(e.loaded)});return s};const a=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;const i=await s(),a=await o.default.post(e,t,{headers:{...n,"X-CSRF-Token":i},onUploadProgress:r?e=>r(e.loaded):null});return a};t.post=a,t.get=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=await s(),r=await o.default.get(e,{headers:{...t,"X-CSRF-Token":n}});return r}}},function(e){var t=function(t){return e(e.s=t)};t(78846),t(32591)}]);
//# sourceMappingURL=content-gate.8a9e634e60c7e554b73f.js.map
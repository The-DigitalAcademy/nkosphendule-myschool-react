(self.webpackChunk=self.webpackChunk||[]).push([[1978],{33405:function(){!function(o){function e(o,e,n,r){if(void 0===n&&(n=function(){}),void 0===r&&(r={}),!o)throw new Error("Target element to observe should be a valid DOM Node");var t=Object.assign({},{viewport:null,modTop:"0px",modRight:"0px",modBottom:"0px",modLeft:"0px",threshold:[0]},r),i=t.viewport,u=t.modTop,f=t.modLeft,d=t.modBottom,s=t.modRight,a=t.threshold;if(!Array.isArray(a)&&"number"!=typeof a)throw new Error("threshold should be a number or an array of numbers");var c=Array.isArray(a)?a.map((function(o){return Math.floor(o%101)/100})):[Math.floor(a?a%101:0)/100],h=Math.min.apply(Math,c),l={root:i instanceof Node?i:null,rootMargin:u+" "+s+" "+d+" "+f,threshold:c},p=new IntersectionObserver((function(r,t){var i=r.filter((function(e){return e.target===o}))[0],u=function(){return t.unobserve(o)};i&&(i.isInViewport=i.isIntersecting&&i.intersectionRatio>=h,i.isInViewport?e(i,u,o):n(i,u,o))}),l);return p.observe(o),function(){return p.unobserve(o)}}o.observeElementInViewport=e,o.isInViewport=function(o,n){return void 0===n&&(n={}),new Promise((function(r,t){try{e(o,(function(o,e){e(),r(!0)}),(function(o,e){e(),r(!1)}),n)}catch(o){t(o)}}))}}(window)},78846:function(o,e,n){("undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{}).SENTRY_RELEASE={id:"6cd5e312c297e9fe340fd324edc5508176878ec4"}}},function(o){var e=function(e){return o(o.s=e)};e(78846),e(33405)}]);
//# sourceMappingURL=observe_element_in_viewport.38bd8e92c5b806bbef6c.js.map
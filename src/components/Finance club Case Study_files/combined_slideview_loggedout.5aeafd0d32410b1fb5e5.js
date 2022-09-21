/*! For license information please see combined_slideview_loggedout.5aeafd0d32410b1fb5e5.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[6866,4420,6138],{89835:function(e,t,o){"use strict";o(25840);var i=o(87804),s=o(86544);$((function(){const e=window.slideshare_object,t=window.slideshare_object.utils;function o(e,t,o){let s={slideshow_id:e.id,slideshow_created_at:e.createdAt,slideshow_language:e.language,slideshow_format:e.format,source:o||window.location.pathname};(0,i.default)(t,s)}function n(){let e=new Date;return e.setTime(e.getTime()+12e4)}function a(e,t,i){let s=e.data("download"),n=e.data("event-tracking-source");e.attr("disabled",!0),$.post(s,(function(s){if(s.success&&s.url){!function(){const e=$("#j-downloading-alert");$(window).scrollTop()>0?e.addClass("sticky-alert"):e.removeClass("sticky-alert"),e.show(),setTimeout((function(){e.hide()}),3e3)}(),o(t,"slideshow_download_init",n);const e=document.createElement("iframe");e.src=s.url,e.style.display="none",document.body.appendChild(e)}else"error"==s.action?function(e){let t=$("#alert-modal");t.find("p").html(e),t.foundation("reveal","open")}(s.error):"subscription_required"!=s.action||i||d(t);e.removeAttr("disabled")}))}function d(t,o=""){const i=e.slideshow&&t.id==e.slideshow.id?e.key:void 0;$.cookie("logout_action","save",{path:"/",expires:n()}),(0,s.default)({from_source:`${t.url}?from_action=save${o}`,slideshow_id:t.id,slideshow_key:i,isDownload:!0})}function l(t){let o=e.slideshow;return o?{id:o.id,url:o.ss_url,createdAt:o.created_at,category:e.gam_cat_name,language:o.language,format:o.type,subscriptionRequired:o.subscription_required}:{id:$(t).attr("data-ssid"),url:$(t).attr("data-ss-url"),createdAt:$(t).attr("data-ss-created-at"),language:$(t).attr("data-ss-language"),format:$(t).attr("data-ss-format"),subscriptionRequired:"true"===$(t).attr("data-subscription-required")}}$("[data-download]").click((function(e){e.preventDefault(),e.stopPropagation();const i=$(this),s=l(i);o(s,"slideshow_download_attempt",$(i).data("event-tracking-source")),t.isUserAuthenticated()?a(i,s,!1):d(s)})),$((function(){$("[data-download-start-automatically]").each((function(){let e=l($(this));a($(this),e,!0)}))}))}))},91805:function(e,t,o){"use strict";o(84613),o(38091),o(89835),o(2555),o(86257),o(64888)},86257:function(e,t,o){"use strict";var i=o(87804),s=o(86544),n=o(64487);$((function(){const e=window.slideshare_object,t=window.slideshare_object.utils;let o,a=!1;function d(t){const o=e.slideshow,s={slideshow_id:o.id,slideshow_created_at:o.created_at,slideshow_category:e.gam_cat_name,slideshow_language:o.language,slideshow_format:o.type,source:"slideshow_view"};(0,i.default)(t,s)}function l(e){let o=$(".j-like-count");for(let i=0;i<o.length;i++){const s=$(o[i]);let n=parseInt(s.attr("data-favorites-count"),10)+e,a=s.attr("data-populate-favorites-count-only");s.attr("data-favorites-count",n),"true"===a?s.text(n):s.text(t.i18n("slideshow.foundation_slideview.likes_count",[{count:n}]))}}function r(){return{slideshow_id:e.presentationId,user_id:e.user.id,source:"slideviewer"}}function c(){$("#report-slideshow-modal").addClass("hidden"),$("body").removeClass("no_scroll"),$(".tos-update-banner, #main-nav, .wrapper").removeAttr("aria-hidden"),$(".more-options-dropdown-trigger").focus()}function u(){$("#slideshow-likes-modal").addClass("hidden"),$("body").removeClass("no_scroll"),$(".tos-update-banner, #main-nav, .wrapper").removeAttr("aria-hidden"),$(".slideshow-likes-modal-trigger").focus()}function f(){$("#slideshow-views-modal").addClass("hidden"),$("body").removeClass("no_scroll"),$(".tos-update-banner, #main-nav, .wrapper").removeAttr("aria-hidden"),$(".slideshow-views-modal-trigger").focus()}function p(){$("#subscription-success-learn-more-modal").addClass("hidden"),$("body").removeClass("no_scroll"),$(".tos-update-banner, #main-nav, .wrapper").removeAttr("aria-hidden"),$(".subscription-success-notification .learn-more-link").focus()}function h(e,t){const o=document.createElement(e);return o.setAttribute("class",t),o}function w(e,t){const o=document.createElement(e);for(let e in t)o.setAttribute(e,t[e]);return o}function m(e,t){e&&t.appendChild(document.createTextNode(e))}function _(){d("exit_promo_dismissed"),$.cookie("scribd_ad_exit_slideshow_page",!0,{path:"/",expires:1}),$("#scribd-ad-exit-modal").addClass("hidden")}$(".j-like-button").on("click",(function(){const o=$(".j-like-button").attr("data-action");if(t.isUserAuthenticated())"like"===o?$.post(e.favorites.create_url,r()).then((function(){$(".j-like-button").addClass("liked").attr("data-action","unlike").children("i").removeClass("icon-heart").addClass("icon-heart-filled"),l(1),d("slideshow_liked")})):"unlike"===o&&$.post(e.favorites.delete_url,r()).then((function(){$(".j-like-button").removeClass("liked").attr("data-action","like").children("i").removeClass("icon-heart-filled").addClass("icon-heart"),l(-1),d("slideshow_unliked")}));else{let t={event:"like",data:{slideshow_id:e.slideshow.id}};e.addAfterLoginEvent(t),(0,s.default)({from_source:window.location.pathname,slideshow_id:e.slideshow.id})}})),$(".slideshow-likes-modal-trigger").on("click",(function(){$("#slideshow-likes-modal").removeClass("hidden"),$("#slideshow-likes-modal .close").focus(),$("body").addClass("no_scroll"),$(".tos-update-banner, #main-nav, .wrapper").attr("aria-hidden",!0),$("#slideshow-likes-modal").on("keydown",(e=>{!function(e,t){const i=$("a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled])"),s=t.find(i).filter(":visible"),n=s[0],a=s[s.length-1];("Tab"===e.key||9===e.keyCode)&&(e.shiftKey?(o&&$(e.target).hasClass("j-more-favs")&&($(".likes-row-"+(o-1)).focus(),o=0,e.preventDefault()),document.activeElement===n&&(a.focus(),e.preventDefault())):o&&$(e.target).hasClass("j-more-favs")?($(`.likes-row-${o}`).focus(),o=0,e.preventDefault()):document.activeElement===a&&(n.focus(),e.preventDefault()))}(e,$("#slideshow-likes-modal"))}))})),$("#slideshow-likes-modal .close").on("click",u),$("#slideshow-likes-modal .mobile-back-button").on("click",u),$("#slideshow-likes-modal-backdrop").on("click",u),$("#slideshow-views-modal .close").on("click",f),$("#slideshow-views-modal .mobile-back-button").on("click",f),$("#slideshow-views-modal-backdrop").on("click",f),$(".report").on("click",(function(o){t.isUserAuthenticated()?($("#report-slideshow-modal").removeClass("hidden"),$("#report-slideshow-modal .close").focus(),$("body").addClass("no_scroll"),$(".tos-update-banner, #main-nav, .wrapper").attr("aria-hidden",!0),$("#report-slideshow-modal").on("keydown",(e=>{(0,n.S)(e,$("#report-slideshow-modal"))}))):(o.preventDefault(),o.stopPropagation(),null!==window.cookie("after_login_action")&&window.cookie("after_login_action","",{path:"/","max-age":-1}),(0,s.default)({from_source:window.location.pathname,slideshow_id:e.slideshow.id}))})),$("#report-slideshow-modal .close").on("click",c),$("#report-slideshow-modal-backdrop").on("click",c),$(".js-expand-description").on("click",(function(){$(".fade-slideshow-description").addClass("hidden"),$(".js-expand-description").addClass("hidden"),$(".slideshow-description-text-wrapper").removeClass("truncated")})),$(".j-more-favs").on("click",(function(){const{total:t,url:i}=e.activities.favorites;let s=i;const n=$("#favs-list"),a=$(".likes-row"),d="offset="+a.length;s.indexOf("?")>=0?s+="&"+d:s+="?"+d,fetch(s,{method:"GET"}).then((e=>e.ok?e.json():e.json().then((e=>Promise.reject({status:e.status,message:"Please try again in sometime."}))))).then((e=>{const i=e.reduce(((e,t,o)=>{const i=a.length+o,s=document.createElement("li"),n=w("a",{class:`likes-row likes-row-${i}`,href:`/${t.login}?utm_campaign=profiletracking&utm_medium=sssite&utm_source=ssslideshow`}),d=h("div","author-photo-thumbnail"),l=w("img",{class:"lazy-thumb-img",alt:"",src:t.photo,"data-original":t.photo}),r=h("div","author-info"),c=h("div","username-time"),u=h("span","username");m(t.user_name,u);const f=h("span","liked-time");m(t.summary,f);const p=h("div","user-info"),_=h("span","favoriter-role");m(t.user_occupation,_);const g=h("span","favoriter-org");return g.appendChild(document.createTextNode(t.user_organization)),m(t.user_organization,g),d.appendChild(l),c.appendChild(u),c.appendChild(f),p.appendChild(_),p.appendChild(g),r.appendChild(c),r.appendChild(p),n.appendChild(d),n.appendChild(r),s.appendChild(n),e.appendChild(s),e}),document.createDocumentFragment());o=$(".likes-row").length,n.append(i),$(".likes-row").length===t&&($(`.likes-row-${o}`).focus(),$(".more-container").hide())})).catch((()=>{throw new Error("Error fetching more favorites information")}))})),$(".subscription-success-notification .learn-more-link").on("click",(function(){$("#subscription-success-learn-more-modal").removeClass("hidden"),$("#subscription-success-learn-more-modal .close").focus(),$("body").addClass("no_scroll"),$(".tos-update-banner, #main-nav, .wrapper").attr("aria-hidden",!0),$("#subscription-success-learn-more-modal").on("keydown",(e=>{(0,n.S)(e,$("#subscription-success-learn-more-modal"))}))})),$("#subscription-success-learn-more-modal .close").on("click",p),$("#subscription-success-learn-more-modal-backdrop").on("click",p),$(".subscription-success-notification .close").on("click",(function(){$(".subscription-success-notification").addClass("hidden")})),$("#scribd-ad-exit-backdrop").on("click",_),$("#scribd-ad-exit-modal .close").on("click",_),$("#scribd-ad-exit-modal .cta").on("click",(function(){d("exit_promo_cta_clicked"),$.cookie("scribd_ad_exit_slideshow_page",!0,{path:"/",expires:365}),$("#scribd-ad-exit-modal").addClass("hidden")})),$(document).on("mouseleave",(function(){$.cookie("scribd_ad_exit_slideshow_page")||(a||(d("exit_promo_shown"),a=!0),$("#scribd-ad-exit-modal").removeClass("hidden"),$("#scribd-ad-exit-modal .close").focus(),$(".tos-update-banner, #main-nav, .wrapper").attr("aria-hidden",!0),$("#scribd-ad-exit-modal").on("keydown",(e=>{(0,n.S)(e,$("#scribd-ad-exit-modal"))})))})),$(document).on("keyup",(function(e){"Escape"!==e.key&&27!==e.keyCode||($("#scribd-ad-exit-modal").is(":visible")&&_(),$("#slideshow-likes-modal").is(":visible")&&u(),$("#slideshow-views-modal").is(":visible")&&f(),$("#report-slideshow-modal").is(":visible")&&c(),$("#subscription-success-learn-more-modal").is(":visible")&&p())}))})),window.addEventListener("DOMContentLoaded",(()=>{!function(){const e=$(".slideshow-information.mobile .slideshow-description-text").height(),t=$(".slideshow-information.desktop .slideshow-description-text").height();e>110?($(".slideshow-information.mobile .js-expand-description").removeClass("hidden"),$(".slideshow-information.mobile .fade-slideshow-description").removeClass("hidden"),$(".slideshow-information.mobile .slideshow-description-text-wrapper").addClass("truncated")):t>110&&($(".slideshow-information.desktop .js-expand-description").removeClass("hidden"),$(".slideshow-information.desktop .fade-slideshow-description").removeClass("hidden"),$(".slideshow-information.desktop .slideshow-description-text-wrapper").addClass("truncated"))}()}))},84613:function(e,t,o){"use strict";var i=o(86544);function s(e){void 0!==e&&this.setup_slideview_contacts_interaction(e)}s.prototype.add_contact=function(e,t,o){$.ajax({url:"/contact/create",type:"POST",dataType:"json",data:{contactee:e},success:function(e){e.suspended?window.location.replace("/login"):e.follow_limit_reached?window.location.reload():t(e)},error:o})},s.prototype.delete_contact=function(e,t,o){$.ajax({url:"/contact/delete",type:"POST",dataType:"json",data:{contactee:e},success:function(e){e.success?t(e):o(e)},error:function(e){o(e)}})},s.prototype.setup_slideview_contacts_interaction=function(e){let t=!1,o=this;$(".j-follow").on("click",(function(s){let n=$(this),a=n.data("contactee-id");if(e.user.loggedin){s.preventDefault();let e=n.hasClass("following")?"unfollow":"follow";t||(n.addClass("loading"),n.find(".j-follow-progress").removeClass("hide"),function(e,i,s){t=!0;let n="authorthumbnail>"+e;window._gaq.push(["_trackEvent","bigfoot_slideview",n]);let a=function(e){i.removeClass("loading"),e.success?(i.toggleClass("following"),i.find(".j-follow-progress").addClass("hide"),window._gaq.push(["_trackEvent","bigfoot_slideview",n+"_failed"]),t=!1):d()};var d=function(e){i.removeClass("loading"),window._gaq.push(["_trackEvent","bigfoot_slideview",n+"_failed"]),t=!1};let l=$(".check-circle-icon");"follow"===e?(l.addClass("following"),o.add_contact(s,a,d)):"unfollow"===e&&(l.removeClass("following"),o.delete_contact(s,a,d))}(e,n,a))}else{s.preventDefault(),s.stopPropagation();let t={event:"follow",data:{contactee:a}};e.addAfterLoginEvent(t),(0,i.default)({from_source:window.location.pathname})}}))},window.SSContactsFollow=s,t.Z=s},38091:function(){!function(e){let t=".action-flag .flag",o="span.flagged",i="a.action-flag",s=".flag-inappropriate .action-submit",n="#flag-error-alert",a=".report-dropdown";function d(){$(o).addClass("hide"),$(t).removeClass("hide"),$(i).removeClass("hide"),$(a).removeClass("hide")}function l(){$(o).removeClass("hide"),$(t).addClass("hide"),$(i).click((function(e){e.preventDefault()})),$(i).removeClass("hide"),$(a).addClass("hide")}e.setup_flagging_interaction=function(){let t=!!this.flagging.flagged_value;$.extend(this.flagging,{postUpdate:function(){let t=$(".flag-inappropriate form select").val();$(s).prop("disabled",!0),$.post(e.flagging.update_url,{ia_value:t,slideshow_id:e.presentationId,source:"slideviewer"},(function(e){log("POST Success: "+e),$("#report-slideshow-modal").foundation("reveal","close"),$(n).addClass("hide"),$("#slideview-report-notice").removeClass("hide"),$(i).attr("disabled",!0),l(),$(window).scrollTop(0)})).fail((function(e){log(e),$(n).removeClass("hide")})).always((function(){$(s).prop("disabled",!1)}))}}),this.user.loggedin?t?l():($(i).attr("disabled",!1),$(s).click((function(t){t.stopPropagation(),t.preventDefault(),e.flagging.postUpdate()})),d()):d()}}(window.slideshare_object)},2555:function(e,t,o){"use strict";var i=o(84613),s=o(64487);!function(){let e=!1;$(".slideshow-views-modal-trigger").on("click",(function(){!function(){if(e)return;e=!0;let t={id:slideshare_object.slideshow.id};slideshare_object.analytics_api_enabled&&$.ajax({type:"GET",url:"/slideshow/stats",data:t,dataType:"json",success:function(e){let t=$(".j-info-embeds"),o=t.find(".j-embeds-container");if($(".j-slideshare-views").text(e.slideshow_analytics_on_ss),$(".j-embed-views").text(e.slideshow_analytics_views_from_embeds),e.slideshow_analytics_top_embeds.length>0){for(let t=0;t<e.slideshow_analytics_top_embeds.length;t++){let i=e.slideshow_analytics_top_embeds[t];o.append('<div class="small-8 columns stat-label">'+i.url+'</div><div class="small-4 columns stat-value text-right">'+i.hits+"</div>")}t.find(".j-no-embeds").remove(),o.show()}}})}(),$("#slideshow-views-modal").removeClass("hidden"),$("#slideshow-views-modal .close").focus(),$(".tos-update-banner, #main-nav, .wrapper").attr("aria-hidden",!0),$("body").addClass("no_scroll"),$("#slideshow-views-modal").on("keydown",(function(e){(0,s.S)(e,$(this))}))})),new i.Z(slideshare_object),slideshare_object.setup_flagging_interaction()}()},86544:function(e,t,o){"use strict";o.r(t);var i=o(20923);t.default=e=>{const t={from_source:e.from_source||"/",initial_view:e.initial_view||"join",slideshow_id:e.slideshow_id,slideshow_key:e.slideshow_key,device_id:"undefined"!=typeof amplitude&&amplitude.getInstance()&&amplitude.getInstance().options?amplitude.getInstance().options.deviceId:"",download:e.isDownload,content_gate:e.isContentGate},o=new FormData;for(let[e,i]of Object.entries(t))i&&o.append(e,i);(0,i.default)().then((e=>fetch("/scribd/authorize",{credentials:"same-origin",headers:{"X-CSRF-Token":e},method:"POST",body:o}).then((e=>e.json())).then((e=>{const t=[];for(let[o,i]of Object.entries(e.params))i&&t.push(`${encodeURIComponent(o)}=${encodeURIComponent(i)}`);const o=t.join("&"),i=`${e.url}?${o}`;window.location.href=i}))))}},25840:function(){!function(e){function t(e){return a.raw?e:encodeURIComponent(e)}function o(e){return a.raw?e:decodeURIComponent(e)}function i(e){return t(a.json?JSON.stringify(e):String(e))}function s(t,o){var i=a.raw?t:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),a.json?JSON.parse(e):e}catch(e){}}(t);return e.isFunction(o)?o(i):i}var n=/\+/g,a=e.cookie=function(n,d,l){if(void 0!==d&&!e.isFunction(d)){if("number"==typeof(l=e.extend({},a.defaults,l)).expires){var r=l.expires,c=l.expires=new Date;c.setTime(+c+864e5*r)}return document.cookie=[t(n),"=",i(d),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var u=n?void 0:{},f=document.cookie?document.cookie.split("; "):[],p=0,h=f.length;h>p;p++){var w=f[p].split("="),m=o(w.shift()),_=w.join("=");if(n&&n===m){u=s(_,d);break}n||void 0===(_=s(_))||(u[m]=_)}return u};a.defaults={},e.removeCookie=function(t,o){return void 0!==e.cookie(t)&&(e.cookie(t,"",e.extend({},o,{expires:-1})),!e.cookie(t))}}($)},95318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},78846:function(e,t,o){("undefined"!=typeof window?window:void 0!==o.g?o.g:"undefined"!=typeof self?self:{}).SENTRY_RELEASE={id:"6cd5e312c297e9fe340fd324edc5508176878ec4"}},87804:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,t.navigateAfterTracking=void 0;var i=o(38652),s=o(64888);function n(e,t,o,s){if(void 0===window.amplitude)return;const n={browserId:(0,i.getCookie)("browser_id")},a=Object.assign({},t,n);window.amplitude.getInstance().logEvent(e,a,o,s)}t.navigateAfterTracking=(e,t,o)=>{const i=o??(null==t?void 0:t.currentTarget.href);t&&t.preventDefault(),n(e,(0,s.getSlideshowViewEventOptions)(),(()=>window.location.href=i))}},64888:function(e,t,o){"use strict";var i=o(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.logSlideshowViewed=t.initializeSlideshowEvents=t.getSlideshowViewEventOptions=void 0;var s=i(o(87804));const n=()=>{const e=window.slideshare_object.slideshow;return{slideshow_id:e.id,slideshow_created_at:e.created_at,slideshow_category:slideshare_object.gam_cat_name,slideshow_language:e.language,slideshow_format:e.type,source:"slideshow_view"}};function a(e){const t=$.extend({},n(),{social:e});(0,s.default)("slideshow_share_interacted",t)}t.getSlideshowViewEventOptions=n,t.logSlideshowViewed=e=>{let{viewRestrictionState:t,viewRestrictionCounter:o}=e;const i=$.extend({},n(),{adblock_enabled:0===document.querySelector(".ad-zone").offsetHeight,slideshow_num_pages:window.slideshare_object.slideshow.total_slides,view_restriction_state:t,view_restriction_counter:o});(0,s.default)("slideshow_viewed",i)};const d=e=>{const t=window.slideshare_object.slideshow,o={from_slideshow_id:t.id,from_slideshow_created_at:t.created_at,from_slideshow_category:slideshare_object.gam_cat_name,from_slideshow_language:t.language,from_slideshow_format:t.type,source:"slideshow_view",to_slideshow_id:e.currentTarget.dataset.recId,recommendation_location:e.currentTarget.dataset.index,recommendation_source:e.currentTarget.dataset.sourceName,recommendation_type:e.currentTarget.dataset.recommendationType,recommendation_module_position:e.currentTarget.dataset.recommendationModulePosition};(0,s.default)("slideshow_recommendation_click",o)};t.initializeSlideshowEvents=()=>{window.addEventListener("DOMContentLoaded",(()=>{$(".facebook .share-link").click((function(){a("facebook")})),$(".twitter .share-link").click((function(){a("twitter")})),$(".linkedin .share-link").click((function(){a("linkedin")})),$(".j-share-embed").click((function(){a("embed")})),$(".wordpress-container").click((function(){a("wordpress")})),$(".share-link-container").click((function(){a("link")})),$(".share-event-logging").click((function(){(0,s.default)("slideshow_share_initiated",n())})),$(".clip-button").click((function(e){e.preventDefault(),e.stopPropagation(),(0,s.default)("slideshow_clipped",n())})),$("#mobile-clip-button").click((function(){(0,s.default)("slideshow_clipped",n())})),$(".clipping-indicator.top-clip").click((function(){(0,s.default)("slideshow_jumped_to_clip",n())})),$(".carousel-link").click(d),$(".j-related-impression").click(d)}))}},38652:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendTrackingEventBatch=t.sendTrackingEvent=t.getSlideshowId=t.getPageKey=t.getCookie=void 0;const o=(e,t)=>{if(t.append("authenticity_token",$('meta[name="csrf-token"]').attr("content")),navigator.sendBeacon)try{navigator.sendBeacon(e,t)}catch{console.warn(`Failed to send tracking event to ${e}`)}else $.ajax({url:e,data:t,processData:!1,contentType:!1,type:"POST",success:function(t){t&&!t.success&&console.warn(`Failed to send tracking event to ${e}`)}})},i=e=>{const t=new FormData;return Object.keys(e).forEach((o=>{t.append(o,JSON.stringify(e[o]))})),t};t.sendTrackingEvent=(e,t)=>{o("/frontend_tracking/track_event",i({event_name:e,event_body:t}))},t.sendTrackingEventBatch=e=>{o("/frontend_tracking/track_batch",i({events:e}))},t.getCookie=e=>{if(document.cookie){const t=document.cookie.split("; ").find((t=>t.startsWith(`${e}=`)));return t?t.split("=")[1]:""}return""},t.getPageKey=()=>window.slideshare_object&&window.slideshare_object.page_key||null,t.getSlideshowId=()=>window.slideshare_object&&window.slideshare_object.slideshow&&window.slideshare_object.slideshow.id||"-1"},64487:function(e,t){"use strict";t.S=void 0,t.S=(e,t)=>{const o=$("a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled])"),i=t.find(o).filter(":visible"),s=i[0],n=i[i.length-1];("Tab"===e.key||9===e.keyCode)&&(e.shiftKey?document.activeElement===s&&(n.focus(),e.preventDefault()):document.activeElement===n&&(s.focus(),e.preventDefault()))}},20923:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=async function(){const e=document.querySelector('meta[name="csrf-token"]');if(e)return e.getAttribute("content");if(null!==o)return o;let t=await fetch("/csrf_token",{credentials:"same-origin",method:"GET"});if(!t.ok)throw new Error(`csrf token http error: ${t.status}`);return t=await t.json(),o=t.csrf_token,o};let o=null}},function(e){var t=function(t){return e(e.s=t)};t(78846),t(91805)}]);
//# sourceMappingURL=combined_slideview_loggedout.5aeafd0d32410b1fb5e5.js.map
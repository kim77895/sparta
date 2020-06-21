(function (w) {
// Begin doc

var is_dev = false;

if ( false ) {
  is_dev = true;
}

var disable_sync = false;

if ( true ) {
  disable_sync = true
}

var globals={load_num:0,init:!1,addr:is_dev?"http://127.0.0.1":"https://east.srv.stackadapt.com",aid:"",impid:"",default_params:"",landing_page:"",secs_passed:0,tec_secs_passed:0,hidden:!1,host:window.location.protocol+"//"+window.location.host,sa_debug_key:"sa_debug"},hidden="hidden",window_status="visible";function onhiddenchange(e){var o="visible",n="hidden",t={focus:o,focusin:o,pageshow:o,blur:n,focusout:n,pagehide:n};e=e||window.event,window_status=e.type in t?t[e.type]:this[hidden]?"hidden":"visible"}hidden in document?document.addEventListener("visibilitychange",onhiddenchange):(hidden="mozHidden")in document?document.addEventListener("mozvisibilitychange",onhiddenchange):(hidden="webkitHidden")in document?document.addEventListener("webkitvisibilitychange",onhiddenchange):(hidden="msHidden")in document?document.addEventListener("msvisibilitychange",onhiddenchange):"onfocusin"in document?document.onfocusin=document.onfocusout=onhiddenchange:window.onpageshow=window.onpagehide=window.onfocus=window.onblur=onhiddenchange,void 0!==document[hidden]&&onhiddenchange({type:document[hidden]?"blur":"focus"});var Cookies=function(e,o,n){return 1===arguments.length?Cookies.get(e):Cookies.set(e,o,n)};function currentLandingURL(){var e=getBasePageUrl(),o=e.split(/\?(.+)?/)[0],n=e.split(/\?(.+)?/)[1]||"prev_window_param=none";return[o=o.replace(/#/g,""),n=n.replace(/#/g,""),e]}function getBasePageUrl(){var e=window.location.ancestorOrigins;if(e&&e.length>1){var o=e[e.length-1];if(o)return o}return window.self!==window.top&&window.document.referrer?window.document.referrer:e&&e[0]?e[0]:window.location.href}function currentLandingURLKeepGet(){if(window.self!==window.top)var e=document.referrer;else e=window.location.href;return e=e.replace(/#/g,"")}function loadConv(e,o){var n=new Image;function t(){document.body.removeChild(n)}if(res=currentLandingURL(),landing_url=res[0],current_window_url_param=res[1],e){var a=sa_url+"/conv?cid="+e+"&url="+encodeURIComponent(landing_url)+"&is_js=true&rnd="+Math.random();if(o)for(var r in o){var i=o[r];0!=r.indexOf("sa_conv_data_")&&(r="sa_conv_data_"+r),a+="&"+encodeURIComponent(r),a+="="+encodeURIComponent(i)}return current_window_url_param&&current_window_url_param.indexOf(globals.sa_debug_key)>-1&&console.log("SA/conv"),n.onerror=t,n.onload=t,n.src=a,document.body.appendChild(n),!0}}function loadRt(e){return loadRtHelper(sa_url,e),!0}function loadRtHelper(e,o){var n=new Image;function t(){document.body.removeChild(n)}res=currentLandingURL(),landing_url=res[0],current_window_url_param=res[1],o&&(n.onerror=t,n.onload=t,n.src=e+"/rt?sid="+o+"&url="+encodeURIComponent(landing_url),document.body.appendChild(n),current_window_url_param&&current_window_url_param.indexOf(globals.sa_debug_key)>-1&&console.log("SA/RT"))}function loadLal(e){return loadLalHelper(sa_url,e),!0}function loadLalHelper(e,o){var n=new Image;function t(){document.body.removeChild(n)}res=currentLandingURL(),landing_url=res[0],current_window_url_param=res[1],o&&(n.onerror=t,n.onload=t,n.src=e+"/lal?sid="+o+"&url="+encodeURIComponent(landing_url),document.body.appendChild(n),current_window_url_param&&current_window_url_param.indexOf(globals.sa_debug_key)>-1&&console.log("SA/LAL"))}function loadDrt(e,o){return loadDrtHelper(sa_url,e,o),!0}function loadDrtHelper(e,o,n){var t=new Image;function a(){document.body.removeChild(t)}landing_url=currentLandingURLKeepGet(),n&&(t.onerror=a,t.onload=a,t.src=e+"/rt?drt=true&sid="+o+"&url="+encodeURIComponent(landing_url)+"&args="+encodeURIComponent(JSON.stringify(n)),document.body.appendChild(t))}function loadTs(e,o){if(loadUniversalPixel(e,o),document.tsPixelLoaded||(document.tsPixelLoaded={}),!document.tsPixelLoaded.sa_pixel_loaded){document.tsPixelLoaded.sa_pixel_loaded=!0;var n="",t="",a="",r=!1;n&&t||(n=Cookies.get("sa_aid_pv"),t=Cookies.get("sa_"+n+"_sid"),a=Cookies.get("sa_"+n+"_adurl"),r=!0),is_dev&&(a="http://127.0.0.1"),a&&!is_dev&&(a.indexOf("eu.srv.stackadapt.com")>-1?globals.addr="https://eu.srv.stackadapt.com":a.indexOf("uw.srv.stackadapt.com")>-1?globals.addr="https://uw.srv.stackadapt.com":globals.addr="https://east.srv.stackadapt.com"),document.referrer||(document.referrer="");document.referrer;if(res=currentLandingURL(),landing_url=res[0],current_window_url_param=res[1],jsPing(e=e.replace(/#/g,""),n),current_window_url_param&&current_window_url_param.indexOf(globals.sa_debug_key)>-1&&console.log("SA/TS"),n&&t){globals.default_params="aid="+n+"&imp="+t;setInterval(function(){globals.secs_passed>3600||"visible"==window_status&&(globals.secs_passed++,url=globals.addr+"/ifr_ts?"+globals.default_params+"&first=false&is_js=true&host="+globals.host,makeCorsRequest(url))},1e3),r?makeCorsRequest(globals.addr+"/ifr_pv?"+globals.default_params+"&is_js=true&host="+globals.host):(Cookies.set("sa_aid_pv",n,{expires:3600}),Cookies.set("sa_"+n+"_sid",t,{expires:3600}),Cookies.set("sa_"+n+"_adurl",globals.addr,{expires:3600})),makeCorsRequest(globals.addr+"/ifr_ts?"+globals.default_params+"&first=true&is_js=true&host="+globals.host+"&uid="+encodeURIComponent(e))}}}function loadUniversalPixel(e,o){if(e){var n="";if(o)for(var t in o)n+="&"+encodeURIComponent("sa_conv_data_"+t),n+="="+encodeURIComponent(o[t]);landing_url=currentLandingURL()[2],createCORSRequest("GET",(is_dev?globals.addr:"https://tags.srv.stackadapt.com")+"/saq_pxl?uid="+e+"&is_js=true&landing_url="+encodeURIComponent(landing_url)+"&host="+globals.host+n,function(e){},function(e){})}}function loadSyncPixelHelper(e){return sync_pixel_map.forEach(function(o){if(!e[o.partner]){var n="";if("plain"==o.encoding?n="0-2678ded5-5a38-4a89-5c3b-763a0419b515$ip$58.236.9.127":"b64"==o.encoding&&(n="Jnje1Vo4SolcO3Y6BBm1FTrsCX8"),n.length>0)try{var t=new Image;function a(){t.parentNode===document.body&&document.body.removeChild(t)}t.onerror=a,t.onload=a,t.src=o.url+n,document.body.appendChild(t)}catch(e){console.log(e)}}}),!0}function jsPing(e,o){var n=currentLandingURL()[0],t="https://tags.srv.stackadapt.com/js_tracking?url="+encodeURIComponent(n)+"&uid="+encodeURIComponent(e)+"&host="+globals.host;is_dev&&(t=globals.addr+"/js_tracking?url="+encodeURIComponent(n)+"&uid="+encodeURIComponent(e)+"&host="+globals.host),o&&(t+="&aid="+o),makeCorsRequest(t)}function createCORSRequest(e,o,n,t){var a;try{a=new XMLHttpRequest}catch(e){}a&&"withCredentials"in a?(a.open(e,o,!0),a.withCredentials=!0):"undefined"!=typeof XDomainRequest?(a=new XDomainRequest).open(e,o):"undefined"!=typeof ActiveXObject?(a=new ActiveXObject("Microsoft.XMLHTTP")).open(e,o):a=null,a&&(a.onload=function(){n(a)},a.onerror=function(){t(a)},setTimeout(function(){a.send()},0))}function makeCorsRequest(e){createCORSRequest("GET",e,function(e){},function(e){})}Cookies._document=document,Cookies._navigator=navigator,Cookies.defaults={path:"/"},Cookies.get=function(e){return Cookies._cachedDocumentCookie!==Cookies._document.cookie&&Cookies._renewCache(),Cookies._cache[e]},Cookies.set=function(e,o,n){return(n=Cookies._getExtendedOptions(n)).expires=Cookies._getExpiresDate(void 0===o?-1:n.expires),Cookies._document.cookie=Cookies._generateCookieString(e,o,n),Cookies},Cookies.expire=function(e,o){return Cookies.set(e,void 0,o)},Cookies._getExtendedOptions=function(e){return{path:e&&e.path||Cookies.defaults.path,domain:e&&e.domain||Cookies.defaults.domain,expires:e&&e.expires||Cookies.defaults.expires,secure:e&&void 0!==e.secure?e.secure:Cookies.defaults.secure}},Cookies._isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},Cookies._getExpiresDate=function(e,o){switch(o=o||new Date,typeof e){case"number":e=new Date(o.getTime()+1e3*e);break;case"string":e=new Date(e)}if(e&&!Cookies._isValidDate(e))throw new Error("`expires` parameter cannot be converted to a valid Date instance");return e},Cookies._generateCookieString=function(e,o,n){var t=(e=(e=e.replace(/[^#$&+\^`|]/g,encodeURIComponent)).replace(/\(/g,"%28").replace(/\)/g,"%29"))+"="+(o=(o+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent));return t+=(n=n||{}).path?";path="+n.path:"",t+=n.domain?";domain="+n.domain:"",t+=n.expires?";expires="+n.expires.toUTCString():"",t+=n.secure?";secure":""},Cookies._getCookieObjectFromString=function(e){for(var o={},n=e?e.split("; "):[],t=0;t<n.length;t++){var a=Cookies._getKeyValuePairFromCookieString(n[t]);void 0===o[a.key]&&(o[a.key]=a.value)}return o},Cookies._getKeyValuePairFromCookieString=function(e){var o=e.indexOf("=");o=o<0?e.length:o;try{return{key:decodeURIComponent(e.substr(0,o)),value:decodeURIComponent(e.substr(o+1))}}catch(n){return{key:decodeURIComponent(e.substr(0,o)),value:e.substr(o+1)}}},Cookies._renewCache=function(){Cookies._cache=Cookies._getCookieObjectFromString(Cookies._document.cookie),Cookies._cachedDocumentCookie=Cookies._document.cookie};try{var sa_url="https://srv.stackadapt.com",sa_url_uw="https://uw.srv.stackadapt.com",sa_url_eu="https://eu.srv.stackadapt.com",sync_pixel_map=[];is_dev&&(sa_url="http://127.0.0.1",sa_url_uw="http://192.168.50.5",sa_url_eu="http://192.168.50.6");var sa_params=w.saq,bus=Array.prototype.slice,landing_url=currentLandingURL()[0],blacklisted_partners={};disable_sync||loadSyncPixelHelper(blacklisted_partners),sa_params.callMethod=function(e){var o=bus.call(arguments);switch(1===o.length&&"undefined"!=typeof i&&i.isArray(o[0])&&(o=o[0]),o.shift()){case"conv":return loadConv.apply(this,o);case"rt":return loadRt.apply(this,o);case"ts":return loadTs.apply(this,o);case"drt":return loadDrt.apply(this,o);case"lal":return loadLal.apply(this,o);default:console.log("unknown function")}};for(var x=sa_params.queue.slice(),y=0,z=x.length;y<z;y++)sa_params.callMethod.apply(sa_params,x[y])}catch(e){console.log(e.stack)}

// End doc
})(window,document,location,history);
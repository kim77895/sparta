/*! kenshoo 0.0.1 2020-05-17 */
var Ken_Infinity_Tag_Consts=function(){var n="ken_gclid",e="ken_hgclid",t="ken_amp_gclid",r="ken_uc",i="ken_xd";return{KENSHOO_CLICK_ID_COOKIE_NAME:"ken_kclid",LANDING_PAGE_KCLID_PARAM_NAME:"kclid",KENSHOO_GCLID_NAME:n,KENSHOO_HGCLID_NAME:e,KENSHOO_KEN_XD_NAME:i,GOOGLE_CLICK_ID_PARAM_NAME:"gclid",BING_CLICK_ID_PARAM_NAME:"msclkid",JAVASCRIPT_PARAM_NAME:"js",KEN_AMP_GCLID_COOKIE_NAME:t,KENSHOO_UC_COOKIE_NAME:r,KENSHOO_VALID_COOKIE_NAMES:[n,e,t,r,i]}}(),Kenshoo_Helpers=function(){var i=function(n){var e=new XMLHttpRequest;return"withCredentials"in e?e.open("GET",n,!0):"undefined"!=typeof XDomainRequest?(e=new XDomainRequest).open("GET",n):e=null,e},o=function(n){return s("k_user_id",n)},s=function(n,e){if(e||(e=c()),n){var t=new Date;t.setTime(t.getTime()+31536e6);var r="; expires="+t.toGMTString();return document.cookie=n+"="+e+r+"; path=/",e}},c=function(){return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()},n=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return{loadPixel:function(n,e){var t="https:",r=new Image(1,1);return r.onload=e,r.src=t+"//"+n,r},getParameter:function(n,e){e||(e=window.location.href);var t=e.indexOf("?");if(-1==t)return null;for(var r=e.substring(t+1).split("&"),i=0;i<r.length;i++){var o=r[i].split("=");if(o[0]===n)return o[1]}return null},generateUUID:function(){return c()},getCookie:function(e){var n=this.getParameter("k_user_id");if(n)return e(n);var t=this.getDomainCookie();if(t)return e(t);var r=i("https://services.xg4ken.com/kid");r&&(r.onload=function(){if(200==r.status){var n=r.responseText;o(n),e(n)}else 404==r.status&&(o(),e(null))},r.onerror=function(){o(),e(null)},r.send())},getDomainCookie:function(n){n||(n="k_user_id");for(var e=n+"=",t=document.cookie.split(";"),r=0;r<t.length;r++){for(var i=t[r];" "==i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(e))return i.substring(e.length,i.length)}return null},createDomainCookie:function(n,e,t,r){if(n){e||(e=c()),t||(t=31536e6);var i=new Date;i.setTime(i.getTime()+t);var o="; expires="+i.toGMTString(),a="";return r&&(a="; domain="+r),document.cookie=n+"="+e+o+a+"; path=/",e}},createRandomDomainCookie:function(n,e){return this.createDomainCookie(n,"",e)},paramsToString:function(n,e,t){var r=t||"",i="";if(null!==n){for(var o in n)""!==i&&(i+="&"),i+=r+o+"="+n[o];""!==i&&(i=e+i)}return i},isEmptyString:function(n){return null==n||(Kenshoo_Helpers.isString(n)?""===Kenshoo_Helpers.trim(n):!Kenshoo_Helpers.isNumber(n))},isNumber:function(n){return"number"==typeof n},isString:function(n){return"string"==typeof n},trim:function(n){return n.replace(/^\s+|\s+$/g,"")},findGroupForCookie:function(n,e){e||(e="");var t=this.getDomainCookie("k_rlsa");t||(t=s("k_rlsa")),t+="_"+e;for(var r=0,i=0;i<t.length;i++)r+=t.charCodeAt(i);r=Math.abs(r),n||(n=[1,1]);var o=0;for(i=0;i<n.length;i++)o+=1*n[i];var a=r%o,c=0;for(i=0;i<n.length;i++){if(a<(c+=n[i]))return String.fromCharCode(97+i)}return null},getDomain:function(){return window.location.host},getRandomNumber:function(n,e){return Math.floor(Math.random()*(e+1)+n)},makeCORSRequestGET:function(n,e){this.makeCORSRequest(n,e,"GET")},makeCORSRequest:function(n,e,t,r){var i=new XMLHttpRequest;"withCredentials"in i?(i.open(t,n,!0),i.withCredentials=!0):"undefined"!=typeof XDomainRequest?(i=new XDomainRequest).open(t,n):i=null,i&&(i.onload=function(){200==i.status?e(i.responseText):404==i.status&&e(null)},i.onerror=function(){e(null)},i.send(r))},isValidUUID:function(n){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(n)},isValidGclid:function(n){return/^[A-Za-z0-9_-]{20,120}$/.test(n)},isValidMsclkid:function(n){return/^[A-Fa-f0-9]{32}$/.test(n)},getSecondLevelDomain:function(n){if(!n)return null;var e=["ac","ad","ae","aero","af","ag","ai","al","am","an","ao","aq","ar","arpa","as","asia","at","au","aw","ax","az","ba","bb","bd","be","bf","bg","bh","bi","biz","bj","bm","bn","bo","br","bs","bt","bv","bw","by","bz","ca","cat","cc","cd","cf","cg","ch","ci","ck","cl","cm","cn","co","com","coop","cr","cu","cv","cx","cy","cz","de","dj","dk","dm","do","dz","ec","edu","ee","eg","er","es","et","eu","fi","fj","fk","fm","fo","fr","ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gov","gp","gq","gr","gs","gt","gu","gw","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","info","int","io","iq","ir","is","it","je","jm","jo","jobs","jp","ke","kg","kh","ki","km","kn","kp","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","me","mg","mh","mil","mk","ml","mm","mn","mo","mobi","mp","mq","mr","ms","mt","mu","museum","mv","mw","mx","my","mz","na","name","nc","ne","net","nf","ng","ni","nl","no","np","nr","nu","nz","om","org","pa","pe","pf","pg","ph","pk","pl","pm","pn","pr","pro","ps","pt","pw","py","qa","re","ro","rs","ru","rw","sa","sb","sc","sd","se","sg","sh","si","sj","sk","sl","sm","sn","so","sr","st","su","sv","sy","sz","tc","td","tel","tf","tg","th","tj","tk","tl","tm","tn","to","tp","tr","travel","tt","tv","tw","tz","ua","ug","uk","us","uy","uz","va","vc","ve","vg","vi","vn","vu","wf","ws","xn--0zwm56d","xn--11b5bs3a9aj6g","xn--3e0b707e","xn--45brj9c","xn--80akhbyknj4f","xn--90a3ac","xn--9t4b11yi5a","xn--clchc0ea0b2g2a9gcd","xn--deba0ad","xn--fiqs8s","xn--fiqz9s","xn--fpcrj9c3d","xn--fzc2c9e2c","xn--g6w251d","xn--gecrj9c","xn--h2brj9c","xn--hgbk6aj7f53bba","xn--hlcj6aya9esc7a","xn--j6w193g","xn--jxalpdlp","xn--kgbechtv","xn--kprw13d","xn--kpry57d","xn--lgbbat1ad8j","xn--mgbaam7a8h","xn--mgbayh7gpa","xn--mgbbh1a71e","xn--mgbc0a9azcg","xn--mgberp4a5d4ar","xn--o3cw4h","xn--ogbpf8fl","xn--p1ai","xn--pgbs0dh","xn--s9brj9c","xn--wgbh1c","xn--wgbl6a","xn--xkc2al3hye2a","xn--xkc2dl3a5ee0h","xn--yfro4i67o","xn--ygbi2ammx","xn--zckzah","xxx","ye","yt","za","zm","zw"].join(),t=n.split(".");"www"===t[0]&&"com"!==t[1]&&t.shift();for(var r,i=t.length,o=i,a=t[t.length-1].length;null!==(r=t[--o]);)if(0===o||o<i-2||r.length<a||e.indexOf(r)<0&&o<i-1)return t.slice(o,t.length).join(".");return n},createSecondLevelDomainCookie:function(n,e,t){if(n&&e){var r=this.getSecondLevelDomain(t);this.createDomainCookie(n,e,null,r)}},storeChannelClickId:function(){var n=this.getValidGclidFromUrl();n||(n=this.getValidMsclkidFromUrl()),n&&this.createSecondLevelDomainCookie(Ken_Infinity_Tag_Consts.KENSHOO_GCLID_NAME,n,document.domain)},readParameterFromUrl:function(n){var e=this.getParameter(n);if(e)return e.split("#")[0]},getValidGclidFromUrl:function(){var n=this.readParameterFromUrl(Ken_Infinity_Tag_Consts.GOOGLE_CLICK_ID_PARAM_NAME);if(this.isValidGclid(n))return n},getValidMsclkidFromUrl:function(){var n=this.readParameterFromUrl(Ken_Infinity_Tag_Consts.BING_CLICK_ID_PARAM_NAME);if(this.isValidMsclkid(n))return n}}}(),kenshoo=function(){var i=Kenshoo_Helpers,o=function(n,e){var t=n+".xg4ken.com/media/redir.php";t+=i.paramsToString(e,"?"),i.loadPixel(t)},r=function(n,e,t){var r=n+".xg4ken.com/pixel/v1?track=1&token="+e;r+=i.paramsToString(t,"&"),r+=a(),r+="&"+Ken_Infinity_Tag_Consts.JAVASCRIPT_PARAM_NAME+"=1",i.loadPixel(r)},a=function(){for(var n="",e=0;e<Ken_Infinity_Tag_Consts.KENSHOO_VALID_COOKIE_NAMES.length;e++){var t=Ken_Infinity_Tag_Consts.KENSHOO_VALID_COOKIE_NAMES[e],r=i.getDomainCookie(t);r&&(n+="&"+t+"="+r)}return n},c=function(n,e){var t="googleads.g.doubleclick.net/pagead/viewthroughconversion/"+n+"/?value=0&guid=ON&script=0";t+=i.paramsToString(e,"&","data."),t+="&random="+(new Date).getTime(),i.loadPixel(t)},s=function(n,e,t,r){var i=n[e];u(i,t,r)},u=function(n,e,t){if(n){var r="www.facebook.com/tr/?ev="+n;e&&(r+="&cd[value]="+e),t&&(r+="&cd[currency]="+t),r+="&noscript=1",i.loadPixel(r)}},n=function(){i.getCookie(function(n){var e=i.getParameter("ken_ks"),t=i.getParameter("ken_prf"),r=i.getParameter("ken_cid");n&&e&&t&&r&&o(e,{k_user_id:n,prof:t,affcode:r,url:"http://"+e+".xg4ken.com"})})};return{trackConversion:function(n,e,t){r(n,e,t)},trackClick:function(){n()},trackRLSA:function(n,e){c(n,e)},trackRLSAExperiment:function(n,e,t){var r=i.findGroupForCookie(t,e);n&&e&&null!==r&&c(n,{kenshoo_experiment:e,kenshoo_group:r})},trackOCPM:function(n,e,t){u(n,e,t)},trackOCPMWithConversionTypeMapping:function(n,e,t,r){s(n,e,t,r)},match:function(n){Uds_Pixel.matchAndSync(n)},trackEvent:function(n,e,t,r){n&&e&&t&&"landingPage"===n&&LP_Pixel.storeKenshooIdFromUrlParam()},setupCrossDomainTracking:function(n){n&&LP_Pixel.storeKenshooIdFromCrossDomain(n)}}}(),LP_Pixel=function(){var r=Kenshoo_Helpers,t=function(n,e){if(e&&r.isValidUUID(e)){var t=r.getDomainCookie(n);t&&t===e||r.createSecondLevelDomainCookie(n,e,document.domain)}};return{storeKenshooIdFromUrlParam:function(n){n||(n=Ken_Infinity_Tag_Consts.LANDING_PAGE_KCLID_PARAM_NAME);var e=r.getParameter(n);t(Ken_Infinity_Tag_Consts.KENSHOO_CLICK_ID_COOKIE_NAME,e)},storeKenshooIdFromCrossDomain:function(n){n&&r.makeCORSRequestGET(n,function(n){n&&t(Ken_Infinity_Tag_Consts.KENSHOO_CLICK_ID_COOKIE_NAME,n)})}}}(),Uds_Pixel=function(){var n=Kenshoo_Helpers,t="https://services.xg4ken.com/kid?client_domain=".concat(n.getDomain()),e=function(e){(User_Match.shouldPerformMatch(e)||User_Sync.shouldPerformSync())&&n.makeCORSRequestGET(t,function(n){User_Match.match(e,n),User_Sync.sync(n)})};return{matchAndSync:function(n){e(n)}}}(),User_Match=function(){var r="kenshoo_id_match",i=Kenshoo_Helpers,o=function(n,e,t){return"services.xg4ken.com/services/uds/match?source="+n+"&ken_id="+e+"&partner_uid="+t+"&hmac="};return{match:function(n,e){if(this.shouldPerformMatch(n)&&!i.isEmptyString(e)){var t=o(i.getDomain(),e,n);i.loadPixel(t,function(){i.createRandomDomainCookie(r,6048e5)})}},shouldPerformMatch:function(n){return i.isEmptyString(i.getDomainCookie(r))&&!i.isEmptyString(n)&&"null"!==n.toLowerCase()&&"undefined"!==n.toLowerCase()}}}(),User_Sync=function(){var r=Kenshoo_Helpers,t=[{prefix:"pixel.tapad.com/idsync/ex/receive?partner_id=2978&partner_device_id=",syncCookieName:"kenshoo_tapad_id_sync",cookieExpiry:864e5}],i=function(n,e){return n+e},o=function(n){return r.isEmptyString(r.getDomainCookie(n))},a=function(n,e){if(o(n.syncCookieName)){var t=i(n.prefix,e);r.loadPixel(t,function(){r.createRandomDomainCookie(n.syncCookieName,n.cookieExpiry)})}};return{sync:function(n){for(var e=0;e<t.length;e++)a(t[e],n)},shouldPerformSync:function(){for(var n=0;n<t.length;n++)if(o(t[n].syncCookieName))return!0;return!1}}}();
//# sourceMappingURL=kenshoo.js.map
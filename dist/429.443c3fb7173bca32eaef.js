(self.webpackChunkunit_demo_cra=self.webpackChunkunit_demo_cra||[]).push([[429],{584:(t,n,e)=>{"use strict";e.d(n,{lX:()=>w,q_:()=>O,ob:()=>p,PP:()=>k,Ep:()=>f});var r=e(123);function o(t){return"/"===t.charAt(0)}function i(t,n){for(var e=n,r=e+1,o=t.length;r<o;e+=1,r+=1)t[e]=t[r];t.pop()}var a=e(287);function c(t){return"/"===t.charAt(0)?t:"/"+t}function u(t){return"/"===t.charAt(0)?t.substr(1):t}function s(t,n){return function(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}(t,n)?t.substr(n.length):t}function l(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function f(t){var n=t.pathname,e=t.search,r=t.hash,o=n||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function p(t,n,e,a){var c;"string"==typeof t?(c=function(t){var n=t||"/",e="",r="",o=n.indexOf("#");-1!==o&&(r=n.substr(o),n=n.substr(0,o));var i=n.indexOf("?");return-1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}}(t),c.state=n):(void 0===(c=(0,r.Z)({},t)).pathname&&(c.pathname=""),c.search?"?"!==c.search.charAt(0)&&(c.search="?"+c.search):c.search="",c.hash?"#"!==c.hash.charAt(0)&&(c.hash="#"+c.hash):c.hash="",void 0!==n&&void 0===c.state&&(c.state=n));try{c.pathname=decodeURI(c.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+c.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(c.key=e),a?c.pathname?"/"!==c.pathname.charAt(0)&&(c.pathname=function(t,n){void 0===n&&(n="");var e,r=t&&t.split("/")||[],a=n&&n.split("/")||[],c=t&&o(t),u=n&&o(n),s=c||u;if(t&&o(t)?a=r:r.length&&(a.pop(),a=a.concat(r)),!a.length)return"/";if(a.length){var l=a[a.length-1];e="."===l||".."===l||""===l}else e=!1;for(var f=0,p=a.length;p>=0;p--){var h=a[p];"."===h?i(a,p):".."===h?(i(a,p),f++):f&&(i(a,p),f--)}if(!s)for(;f--;f)a.unshift("..");!s||""===a[0]||a[0]&&o(a[0])||a.unshift("");var d=a.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d}(c.pathname,a.pathname)):c.pathname=a.pathname:c.pathname||(c.pathname="/"),c}function h(){var t=null,n=[];return{setPrompt:function(n){return t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,r,o){if(null!=t){var i="function"==typeof t?t(n,e):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var e=!0;function r(){e&&t.apply(void 0,arguments)}return n.push(r),function(){e=!1,n=n.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.forEach((function(t){return t.apply(void 0,e)}))}}}var d=!("undefined"==typeof window||!window.document||!window.document.createElement);function v(t,n){n(window.confirm(t))}var m="popstate",y="hashchange";function g(){try{return window.history.state||{}}catch(t){return{}}}function w(t){void 0===t&&(t={}),d||(0,a.Z)(!1);var n,e=window.history,o=(-1===(n=window.navigator.userAgent).indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),u=t,w=u.forceRefresh,x=void 0!==w&&w,b=u.getUserConfirmation,E=void 0===b?v:b,P=u.keyLength,C=void 0===P?6:P,O=t.basename?l(c(t.basename)):"";function T(t){var n=t||{},e=n.key,r=n.state,o=window.location,i=o.pathname+o.search+o.hash;return O&&(i=s(i,O)),p(i,r,e)}function k(){return Math.random().toString(36).substr(2,C)}var A=h();function R(t){(0,r.Z)(N,t),N.length=e.length,A.notifyListeners(N.location,N.action)}function _(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||Z(T(t.state))}function L(){Z(T(g()))}var S=!1;function Z(t){S?(S=!1,R()):A.confirmTransitionTo(t,"POP",E,(function(n){n?R({action:"POP",location:t}):function(t){var n=N.location,e=M.indexOf(n.key);-1===e&&(e=0);var r=M.indexOf(t.key);-1===r&&(r=0);var o=e-r;o&&(S=!0,I(o))}(t)}))}var U=T(g()),M=[U.key];function j(t){return O+f(t)}function I(t){e.go(t)}var B=0;function $(t){1===(B+=t)&&1===t?(window.addEventListener(m,_),i&&window.addEventListener(y,L)):0===B&&(window.removeEventListener(m,_),i&&window.removeEventListener(y,L))}var H=!1,N={length:e.length,action:"POP",location:U,createHref:j,push:function(t,n){var r="PUSH",i=p(t,n,k(),N.location);A.confirmTransitionTo(i,r,E,(function(t){if(t){var n=j(i),a=i.key,c=i.state;if(o)if(e.pushState({key:a,state:c},null,n),x)window.location.href=n;else{var u=M.indexOf(N.location.key),s=M.slice(0,u+1);s.push(i.key),M=s,R({action:r,location:i})}else window.location.href=n}}))},replace:function(t,n){var r="REPLACE",i=p(t,n,k(),N.location);A.confirmTransitionTo(i,r,E,(function(t){if(t){var n=j(i),a=i.key,c=i.state;if(o)if(e.replaceState({key:a,state:c},null,n),x)window.location.replace(n);else{var u=M.indexOf(N.location.key);-1!==u&&(M[u]=i.key),R({action:r,location:i})}else window.location.replace(n)}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(t){void 0===t&&(t=!1);var n=A.setPrompt(t);return H||($(1),H=!0),function(){return H&&(H=!1,$(-1)),n()}},listen:function(t){var n=A.appendListener(t);return $(1),function(){$(-1),n()}}};return N}var x="hashchange",b={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+u(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:u,decodePath:c},slash:{encodePath:c,decodePath:c}};function E(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n)}function P(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)}function C(t){window.location.replace(E(window.location.href)+"#"+t)}function O(t){void 0===t&&(t={}),d||(0,a.Z)(!1);var n=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),t),o=e.getUserConfirmation,i=void 0===o?v:o,u=e.hashType,m=void 0===u?"slash":u,y=t.basename?l(c(t.basename)):"",g=b[m],w=g.encodePath,O=g.decodePath;function T(){var t=O(P());return y&&(t=s(t,y)),p(t)}var k=h();function A(t){(0,r.Z)(H,t),H.length=n.length,k.notifyListeners(H.location,H.action)}var R=!1,_=null;function L(){var t,n,e=P(),r=w(e);if(e!==r)C(r);else{var o=T(),a=H.location;if(!R&&(n=o,(t=a).pathname===n.pathname&&t.search===n.search&&t.hash===n.hash))return;if(_===f(o))return;_=null,function(t){if(R)R=!1,A();else{k.confirmTransitionTo(t,"POP",i,(function(n){n?A({action:"POP",location:t}):function(t){var n=H.location,e=M.lastIndexOf(f(n));-1===e&&(e=0);var r=M.lastIndexOf(f(t));-1===r&&(r=0);var o=e-r;o&&(R=!0,j(o))}(t)}))}}(o)}}var S=P(),Z=w(S);S!==Z&&C(Z);var U=T(),M=[f(U)];function j(t){n.go(t)}var I=0;function B(t){1===(I+=t)&&1===t?window.addEventListener(x,L):0===I&&window.removeEventListener(x,L)}var $=!1,H={length:n.length,action:"POP",location:U,createHref:function(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=E(window.location.href)),e+"#"+w(y+f(t))},push:function(t,n){var e="PUSH",r=p(t,void 0,void 0,H.location);k.confirmTransitionTo(r,e,i,(function(t){if(t){var n=f(r),o=w(y+n);if(P()!==o){_=n,function(t){window.location.hash=t}(o);var i=M.lastIndexOf(f(H.location)),a=M.slice(0,i+1);a.push(n),M=a,A({action:e,location:r})}else A()}}))},replace:function(t,n){var e="REPLACE",r=p(t,void 0,void 0,H.location);k.confirmTransitionTo(r,e,i,(function(t){if(t){var n=f(r),o=w(y+n);P()!==o&&(_=n,C(o));var i=M.indexOf(f(H.location));-1!==i&&(M[i]=n),A({action:e,location:r})}}))},go:j,goBack:function(){j(-1)},goForward:function(){j(1)},block:function(t){void 0===t&&(t=!1);var n=k.setPrompt(t);return $||(B(1),$=!0),function(){return $&&($=!1,B(-1)),n()}},listen:function(t){var n=k.appendListener(t);return B(1),function(){B(-1),n()}}};return H}function T(t,n,e){return Math.min(Math.max(t,n),e)}function k(t){void 0===t&&(t={});var n=t,e=n.getUserConfirmation,o=n.initialEntries,i=void 0===o?["/"]:o,a=n.initialIndex,c=void 0===a?0:a,u=n.keyLength,s=void 0===u?6:u,l=h();function d(t){(0,r.Z)(x,t),x.length=x.entries.length,l.notifyListeners(x.location,x.action)}function v(){return Math.random().toString(36).substr(2,s)}var m=T(c,0,i.length-1),y=i.map((function(t){return p(t,void 0,"string"==typeof t?v():t.key||v())})),g=f;function w(t){var n=T(x.index+t,0,x.entries.length-1),r=x.entries[n];l.confirmTransitionTo(r,"POP",e,(function(t){t?d({action:"POP",location:r,index:n}):d()}))}var x={length:y.length,action:"POP",location:y[m],index:m,entries:y,createHref:g,push:function(t,n){var r="PUSH",o=p(t,n,v(),x.location);l.confirmTransitionTo(o,r,e,(function(t){if(t){var n=x.index+1,e=x.entries.slice(0);e.length>n?e.splice(n,e.length-n,o):e.push(o),d({action:r,location:o,index:n,entries:e})}}))},replace:function(t,n){var r="REPLACE",o=p(t,n,v(),x.location);l.confirmTransitionTo(o,r,e,(function(t){t&&(x.entries[x.index]=o,d({action:r,location:o}))}))},go:w,goBack:function(){w(-1)},goForward:function(){w(1)},canGo:function(t){var n=x.index+t;return n>=0&&n<x.entries.length},block:function(t){return void 0===t&&(t=!1),l.setPrompt(t)},listen:function(t){return l.appendListener(t)}};return x}},368:t=>{t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},508:(t,n,e)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var o=e(368);t.exports=function t(n,e,r){return o(e)||(r=e||r,e=[]),r=r||{},n instanceof RegExp?function(t,n){var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(t,n)}(n,e):o(n)?function(n,e,r){for(var o=[],i=0;i<n.length;i++)o.push(t(n[i],e,r).source);return f(new RegExp("(?:"+o.join("|")+")",p(r)),e)}(n,e,r):function(t,n,e){return h(a(t,e),n,e)}(n,e,r)},t.exports.parse=a,t.exports.compile=function(t,n){return u(a(t,n),n)},t.exports.tokensToFunction=u,t.exports.tokensToRegExp=h;var i=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t,n){for(var e,r=[],o=0,a=0,c="",u=n&&n.delimiter||"/";null!=(e=i.exec(t));){var f=e[0],p=e[1],h=e.index;if(c+=t.slice(a,h),a=h+f.length,p)c+=p[1];else{var d=t[a],v=e[2],m=e[3],y=e[4],g=e[5],w=e[6],x=e[7];c&&(r.push(c),c="");var b=null!=v&&null!=d&&d!==v,E="+"===w||"*"===w,P="?"===w||"*"===w,C=e[2]||u,O=y||g;r.push({name:m||o++,prefix:v||"",delimiter:C,optional:P,repeat:E,partial:b,asterisk:!!x,pattern:O?l(O):x?".*":"[^"+s(C)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function c(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function u(t,n){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===r(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$",p(n)));return function(n,r){for(var i="",a=n||{},u=(r||{}).pretty?c:encodeURIComponent,s=0;s<t.length;s++){var l=t[s];if("string"!=typeof l){var f,p=a[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(o(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!e[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===h?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(p),!e[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function s(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function f(t,n){return t.keys=n,t}function p(t){return t&&t.sensitive?"":"i"}function h(t,n,e){o(n)||(e=n||e,n=[]);for(var r=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<t.length;c++){var u=t[c];if("string"==typeof u)a+=s(u);else{var l=s(u.prefix),h="(?:"+u.pattern+")";n.push(u),u.repeat&&(h+="(?:"+l+h+")*"),a+=h=u.optional?u.partial?l+"("+h+")?":"(?:"+l+"("+h+"))?":l+"("+h+")"}}var d=s(e.delimiter||"/"),v=a.slice(-d.length)===d;return r||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":r&&v?"":"(?="+d+"|$)",f(new RegExp("^"+a,p(e)),n)}},433:(t,n,e)=>{"use strict";var r=e(642);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,n,e,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return t}t.isRequired=t;var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},74:(t,n,e)=>{t.exports=e(433)()},642:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},429:(t,n,e)=>{"use strict";e.d(n,{VK:()=>l,rU:()=>m});var r=e(640),o=e(177),i=e(466),a=e(584),c=e(123),u=e(958),s=e(287),l=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=(0,a.lX)(n.props),n}return(0,o.Z)(n,t),n.prototype.render=function(){return i.createElement(r.F0,{history:this.history,children:this.props.children})},n}(i.Component);i.Component;var f=function(t,n){return"function"==typeof t?t(n):t},p=function(t,n){return"string"==typeof t?(0,a.ob)(t,null,null,n):t},h=function(t){return t},d=i.forwardRef;void 0===d&&(d=h);var v=d((function(t,n){var e=t.innerRef,r=t.navigate,o=t.onClick,a=(0,u.Z)(t,["innerRef","navigate","onClick"]),s=a.target,l=(0,c.Z)({},a,{onClick:function(t){try{o&&o(t)}catch(n){throw t.preventDefault(),n}t.defaultPrevented||0!==t.button||s&&"_self"!==s||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return l.ref=h!==d&&n||e,i.createElement("a",l)})),m=d((function(t,n){var e=t.component,o=void 0===e?v:e,l=t.replace,m=t.to,y=t.innerRef,g=(0,u.Z)(t,["component","replace","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(t){t||(0,s.Z)(!1);var e=t.history,r=p(f(m,t.location),t.location),u=r?e.createHref(r):"",v=(0,c.Z)({},g,{href:u,navigate:function(){var n=f(m,t.location),r=(0,a.Ep)(t.location)===(0,a.Ep)(p(n));(l||r?e.replace:e.push)(n)}});return h!==d?v.ref=n||y:v.innerRef=y,i.createElement(o,v)}))})),y=function(t){return t},g=i.forwardRef;void 0===g&&(g=y),g((function(t,n){var e=t["aria-current"],o=void 0===e?"page":e,a=t.activeClassName,l=void 0===a?"active":a,h=t.activeStyle,d=t.className,v=t.exact,w=t.isActive,x=t.location,b=t.sensitive,E=t.strict,P=t.style,C=t.to,O=t.innerRef,T=(0,u.Z)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(t){t||(0,s.Z)(!1);var e=x||t.location,a=p(f(C,e),e),u=a.pathname,k=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),A=k?(0,r.LX)(e.pathname,{path:k,exact:v,sensitive:b,strict:E}):null,R=!!(w?w(A,e):A),_="function"==typeof d?d(R):d,L="function"==typeof P?P(R):P;R&&(_=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return t})).join(" ")}(_,l),L=(0,c.Z)({},L,h));var S=(0,c.Z)({"aria-current":R&&o||null,className:_,style:L,to:a},T);return y!==g?S.ref=n||O:S.innerRef=O,i.createElement(m,S)}))}))},640:(t,n,e)=>{"use strict";e.d(n,{AW:()=>E,F0:()=>g,LX:()=>b,rs:()=>P,s6:()=>y});var r=e(177),o=e(466),i=e(74),a=e.n(i),c=(e(584),e(287)),u=e(123),s=e(508),l=e.n(s),f=(e(972),e(958),e(773),1073741823),p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function h(t){var n=[];return{on:function(t){n.push(t)},off:function(t){n=n.filter((function(n){return n!==t}))},get:function(){return t},set:function(e,r){t=e,n.forEach((function(n){return n(t,r)}))}}}var d=o.createContext||function(t,n){var e,i,c,u="__create-react-context-"+((p[c="__global_unique_id__"]=(p[c]||0)+1)+"__"),s=function(t){function e(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).emitter=h(n.props.value),n}(0,r.Z)(e,t);var o=e.prototype;return o.getChildContext=function(){var t;return(t={})[u]=this.emitter,t},o.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof n?n(r,o):f,0!=(e|=0)&&this.emitter.set(t.value,e))}var i,a},o.render=function(){return this.props.children},e}(o.Component);s.childContextTypes=((e={})[u]=a().object.isRequired,e);var l=function(n){function e(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).observedBits=void 0,t.state={value:t.getValue()},t.onUpdate=function(n,e){0!=((0|t.observedBits)&e)&&t.setState({value:t.getValue()})},t}(0,r.Z)(e,n);var o=e.prototype;return o.componentWillReceiveProps=function(t){var n=t.observedBits;this.observedBits=null==n?f:n},o.componentDidMount=function(){this.context[u]&&this.context[u].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?f:t},o.componentWillUnmount=function(){this.context[u]&&this.context[u].off(this.onUpdate)},o.getValue=function(){return this.context[u]?this.context[u].get():t},o.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},e}(o.Component);return l.contextTypes=((i={})[u]=a().object,i),{Provider:s,Consumer:l}},v=function(t){var n=d();return n.displayName=t,n},m=v("Router-History"),y=v("Router"),g=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._pendingLocation=t}))),e}(0,r.Z)(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){var t=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen((function(n){t._isMounted&&t.setState({location:n})}))),this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},e.render=function(){return o.createElement(y.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.createElement(m.Provider,{children:this.props.children||null,value:this.props.history}))},n}(o.Component);o.Component,o.Component;var w={},x=0;function b(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=w[e]||(w[e]={});if(r[t])return r[t];var o=[],i={regexp:l()(t,o,n),keys:o};return x<1e4&&(r[t]=i,x++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var f=u[0],p=u.slice(1),h=t===f;return i&&!h?null:{path:e,url:"/"===e&&""===f?"/":f,isExact:h,params:a.reduce((function(t,n,e){return t[n.name]=p[e],t}),{})}}),null)}var E=function(t){function n(){return t.apply(this,arguments)||this}return(0,r.Z)(n,t),n.prototype.render=function(){var t=this;return o.createElement(y.Consumer,null,(function(n){n||(0,c.Z)(!1);var e=t.props.location||n.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?b(e.pathname,t.props):n.match,i=(0,u.Z)({},n,{location:e,match:r}),a=t.props,s=a.children,l=a.component,f=a.render;return Array.isArray(s)&&function(t){return 0===o.Children.count(t)}(s)&&(s=null),o.createElement(y.Provider,{value:i},i.match?s?"function"==typeof s?s(i):s:l?o.createElement(l,i):f?f(i):null:"function"==typeof s?s(i):null)}))},n}(o.Component);o.Component;var P=function(t){function n(){return t.apply(this,arguments)||this}return(0,r.Z)(n,t),n.prototype.render=function(){var t=this;return o.createElement(y.Consumer,null,(function(n){n||(0,c.Z)(!1);var e,r,i=t.props.location||n.location;return o.Children.forEach(t.props.children,(function(t){if(null==r&&o.isValidElement(t)){e=t;var a=t.props.path||t.props.from;r=a?b(i.pathname,(0,u.Z)({},t.props,{path:a})):n.match}})),r?o.cloneElement(e,{location:i,computedMatch:r}):null}))},n}(o.Component);o.useContext},177:(t,n,e)=>{"use strict";function r(t,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},r(t,n)}function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,r(t,n)}e.d(n,{Z:()=>o})},958:(t,n,e)=>{"use strict";function r(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}e.d(n,{Z:()=>r})},287:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});function r(t,n){if(!t)throw new Error("Invariant failed")}}}]);
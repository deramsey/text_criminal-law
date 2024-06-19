/*
goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.ui.AdvancedTooltip');
goog.require('goog.ui.ScrollFloater');

function replace_iframe(node) {
  var div = document.createElement('div');
  div.innerHTML = node.getAttribute('data-iframe-code');
  div.className = 'replaced-iframe-container';
  
  node.parentNode.replaceChild(div, node);
  return false;
}
window['replaceIframe'] = replace_iframe;

function togglePrefaceDetails() {
  var details = document.getElementById('preface-details');
  details.style.display = (details.style.display == '') ? 'none' : '';
  return false;
}
window['togglePrefaceDetails'] = togglePrefaceDetails;

var scrollfloater = new goog.ui.ScrollFloater();
scrollfloater.decorate(goog.dom.getElement('navbar-top'));
//scrollfloater.setScrollingEnabled(true);

var glossterms = goog.dom.getElementsByClass('glossterm');
goog.array.forEach(glossterms, function(term) {
  var tooltip = new goog.ui.AdvancedTooltip();
  tooltip.setCursorTracking(true);
  tooltip.setHideDelayMs(250);
  tooltip.className = 'glossdef-tooltip';
  tooltip.setHtml(goog.dom.getNextElementSibling(term).innerHTML);
  tooltip.attach(term);
});
*/
function f(a){throw a;}var i=void 0,l=!0,m=null,r=!1;function s(a){return function(){return this[a]}}var u,y=this;function aa(){}
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ca(a){return"array"==ba(a)}function da(a){var b=ba(a);return"array"==b||"object"==b&&"number"==typeof a.length}function z(a){return"string"==typeof a}function ea(a){return"function"==ba(a)}function fa(a){var b=typeof a;return"object"==b&&a!=m||"function"==b}function ga(a){return a[ha]||(a[ha]=++ia)}var ha="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),ia=0;
function ja(a,b,c){return a.call.apply(a.bind,arguments)}function ka(a,b,c){a||f(Error());if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function A(a,b,c){A=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return A.apply(m,arguments)}
function la(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}}var ma=Date.now||function(){return+new Date};function B(a,b){function c(){}c.prototype=b.prototype;a.i=b.prototype;a.prototype=new c};function na(a){if(!oa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(pa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(qa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ra,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(sa,"&quot;"));return a}var pa=/&/g,qa=/</g,ra=/>/g,sa=/\"/g,oa=/[&<>\"]/;var C=Array.prototype,ta=C.indexOf?function(a,b,c){return C.indexOf.call(a,b,c)}:function(a,b,c){c=c==m?0:0>c?Math.max(0,a.length+c):c;if(z(a))return!z(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ua=C.forEach?function(a,b,c){C.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,g=z(a)?a.split(""):a,e=0;e<d;e++)e in g&&b.call(c,g[e],e,a)};function va(a,b){var c=ta(a,b);0<=c&&C.splice.call(a,c,1)}
function wa(a,b,c){return 2>=arguments.length?C.slice.call(a,b):C.slice.call(a,b,c)};var xa,ya,za,Aa,Ba,Ca;function Da(){return y.navigator?y.navigator.userAgent:m}function Ea(){return y.navigator}Ba=Aa=za=ya=xa=r;var Fa;if(Fa=Da()){var Ga=Ea();xa=0==Fa.indexOf("Opera");ya=!xa&&-1!=Fa.indexOf("MSIE");Aa=(za=!xa&&-1!=Fa.indexOf("WebKit"))&&-1!=Fa.indexOf("Mobile");Ba=!xa&&!za&&"Gecko"==Ga.product}var Ha=xa,D=ya,E=Ba,F=za,Ia=Aa,Ja=Ea();Ca=-1!=(Ja&&Ja.platform||"").indexOf("Mac");var Ka=!!Ea()&&-1!=(Ea().appVersion||"").indexOf("X11"),La;
a:{var Ma="",Na;if(Ha&&y.opera)var Oa=y.opera.version,Ma="function"==typeof Oa?Oa():Oa;else if(E?Na=/rv\:([^\);]+)(\)|;)/:D?Na=/MSIE\s+([^\);]+)(\)|;)/:F&&(Na=/WebKit\/(\S+)/),Na)var Pa=Na.exec(Da()),Ma=Pa?Pa[1]:"";if(D){var Qa,Ra=y.document;Qa=Ra?Ra.documentMode:i;if(Qa>parseFloat(Ma)){La=String(Qa);break a}}La=Ma}var Sa={};
function G(a){var b;if(!(b=Sa[a])){b=0;for(var c=String(La).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),g=Math.max(c.length,d.length),e=0;0==b&&e<g;e++){var h=c[e]||"",j=d[e]||"",k=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var q=k.exec(h)||["","",""],n=p.exec(j)||["","",""];if(0==q[0].length&&0==n[0].length)break;b=((0==q[1].length?0:parseInt(q[1],10))<(0==n[1].length?0:parseInt(n[1],10))?-1:(0==q[1].length?0:parseInt(q[1],
10))>(0==n[1].length?0:parseInt(n[1],10))?1:0)||((0==q[2].length)<(0==n[2].length)?-1:(0==q[2].length)>(0==n[2].length)?1:0)||(q[2]<n[2]?-1:q[2]>n[2]?1:0)}while(0==b)}b=Sa[a]=0<=b}return b}var Ta={};function Ua(a){return Ta[a]||(Ta[a]=D&&!!document.documentMode&&document.documentMode>=a)};var Va,Wa=!D||Ua(9);!E&&!D||D&&Ua(9)||E&&G("1.9.1");D&&G("9");function Xa(a,b){var c;c=a.className;c=z(c)&&c.match(/\S+/g)||[];for(var d=wa(arguments,1),g=c.length+d.length,e=c,h=0;h<d.length;h++)0<=ta(e,d[h])||e.push(d[h]);a.className=c.join(" ");return c.length==g};function H(a,b){this.x=a!==i?a:0;this.y=b!==i?b:0}H.prototype.o=function(){return new H(this.x,this.y)};H.prototype.toString=function(){return"("+this.x+", "+this.y+")"};function Ya(a,b){return new H(a.x-b.x,a.y-b.y)};function J(a,b){this.width=a;this.height=b}J.prototype.o=function(){return new J(this.width,this.height)};J.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};J.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};J.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Za(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function $a(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}var ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bb(a,b){for(var c,d,g=1;g<arguments.length;g++){d=arguments[g];for(c in d)a[c]=d[c];for(var e=0;e<ab.length;e++)c=ab[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function K(a){return a?new cb(L(a)):Va||(Va=new cb)}function db(){var a,b,c,d;a=document;if(a.querySelectorAll&&a.querySelector)return a.querySelectorAll(".glossterm");if(a.getElementsByClassName){var g=a.getElementsByClassName("glossterm");return g}g=a.getElementsByTagName("*");d={};for(b=c=0;a=g[b];b++){var e=a.className;"function"==typeof e.split&&0<=ta(e.split(/\s+/),"glossterm")&&(d[c++]=a)}d.length=c;return d}
var eb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function M(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function L(a){return 9==a.nodeType?a:a.ownerDocument||a.document}function cb(a){this.b=a||y.document||document}u=cb.prototype;u.g=K;function fb(a){return a.b}u.a=function(a){return z(a)?this.b.getElementById(a):a};
u.B=function(a,b,c){var d=this.b,g=arguments,e=g[0],h=g[1];if(!Wa&&h&&(h.name||h.type)){e=["<",e];h.name&&e.push(' name="',na(h.name),'"');if(h.type){e.push(' type="',na(h.type),'"');var j={};bb(j,h);h=j;delete h.type}e.push(">");e=e.join("")}e=d.createElement(e);if(h)if(z(h))e.className=h;else if(ca(h))Xa.apply(m,[e].concat(h));else{var k=e;Za(h,function(a,b){"style"==b?k.style.cssText=a:"class"==b?k.className=a:"for"==b?k.htmlFor=a:b in eb?k.setAttribute(eb[b],a):0==b.lastIndexOf("aria-",0)||0==
b.lastIndexOf("data-",0)?k.setAttribute(b,a):k[b]=a})}if(2<g.length)for(var p=d,q=e,d=g,g=function(a){a&&q.appendChild(z(a)?p.createTextNode(a):a)},h=2;h<d.length;h++){var n=d[h];if(da(n)&&!(fa(n)&&0<n.nodeType)){var t;a:{if(n&&"number"==typeof n.length){if(fa(n)){t="function"==typeof n.item||"string"==typeof n.item;break a}if(ea(n)){t="function"==typeof n.item;break a}}t=r}j=ua;if(t)if(t=n.length,0<t){for(var x=Array(t),N=0;N<t;N++)x[N]=n[N];n=x}else n=[];j(n,g)}else g(n)}return e};
u.createElement=function(a){return this.b.createElement(a)};u.createTextNode=function(a){return this.b.createTextNode(a)};function gb(a){return"CSS1Compat"==a.b.compatMode}function hb(a){var b=a.b,a=!F&&"CSS1Compat"==b.compatMode?b.documentElement:b.body,b=b.parentWindow||b.defaultView;return new H(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)}u.ea=function(a){var b;a:{a=a||this.b;try{b=a&&a.activeElement;break a}catch(c){}b=m}return b};u.appendChild=function(a,b){a.appendChild(b)};
u.contains=M;function ib(){this.M=r};!D||Ua(9);var jb=!D||Ua(9),kb=D&&!G("8");!F||G("528");E&&G("1.9b")||D&&G("8")||Ha&&G("9.5")||F&&G("528");E&&!G("8")||D&&G("9");function lb(a,b){this.type=a;this.currentTarget=this.target=b}u=lb.prototype;u.t=r;u.defaultPrevented=r;u.X=l;u.stopPropagation=function(){this.t=l};u.preventDefault=function(){this.defaultPrevented=l;this.X=r};function nb(a){nb[" "](a);return a}nb[" "]=aa;function ob(a,b){a&&this.S(a,b)}B(ob,lb);u=ob.prototype;u.target=m;u.relatedTarget=m;u.offsetX=0;u.offsetY=0;u.clientX=0;u.clientY=0;u.screenX=0;u.screenY=0;u.button=0;u.keyCode=0;u.charCode=0;u.ctrlKey=r;u.altKey=r;u.shiftKey=r;u.metaKey=r;u.eb=r;u.q=m;
u.S=function(a,b){var c=this.type=a.type;lb.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(E){var g;a:{try{nb(d.nodeName);g=l;break a}catch(e){}g=r}g||(d=m)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=F||a.offsetX!==i?a.offsetX:a.layerX;this.offsetY=F||a.offsetY!==i?a.offsetY:a.layerY;this.clientX=a.clientX!==i?a.clientX:a.pageX;this.clientY=a.clientY!==i?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.eb=Ca?a.metaKey:a.ctrlKey;this.state=a.state;this.q=a;a.defaultPrevented&&this.preventDefault();delete this.t};u.stopPropagation=function(){ob.i.stopPropagation.call(this);this.q.stopPropagation?this.q.stopPropagation():this.q.cancelBubble=l};
u.preventDefault=function(){ob.i.preventDefault.call(this);var a=this.q;if(a.preventDefault)a.preventDefault();else if(a.returnValue=r,kb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};u.Va=s("q");function pb(){}var qb=0;u=pb.prototype;u.key=0;u.w=r;u.ba=r;u.S=function(a,b,c,d,g,e){ea(a)?this.Ga=l:a&&a.handleEvent&&ea(a.handleEvent)?this.Ga=r:f(Error("Invalid listener argument"));this.H=a;this.Pa=b;this.src=c;this.type=d;this.capture=!!g;this.ha=e;this.ba=r;this.key=++qb;this.w=r};u.handleEvent=function(a){return this.Ga?this.H.call(this.ha||this.src,a):this.H.handleEvent.call(this.H,a)};var O={},P={},rb={},sb={};
function S(a,b,c,d,g){if(b){if(ca(b)){for(var e=0;e<b.length;e++)S(a,b[e],c,d,g);return m}var d=!!d,h=P;b in h||(h[b]={f:0,k:0});h=h[b];d in h||(h[d]={f:0,k:0},h.f++);var h=h[d],j=ga(a),k;h.k++;if(h[j]){k=h[j];for(e=0;e<k.length;e++)if(h=k[e],h.H==c&&h.ha==g){if(h.w)break;return k[e].key}}else k=h[j]=[],h.f++;var p=tb,q=jb?function(a){return p.call(q.src,q.key,a)}:function(a){a=p.call(q.src,q.key,a);if(!a)return a},e=q;e.src=a;h=new pb;h.S(c,e,a,b,d,g);c=h.key;e.key=c;k.push(h);O[c]=h;rb[j]||(rb[j]=
[]);rb[j].push(h);a.addEventListener?(a==y||!a.xa)&&a.addEventListener(b,e,d):a.attachEvent(b in sb?sb[b]:sb[b]="on"+b,e);return c}f(Error("Invalid event type"))}function ub(a,b,c,d,g){if(ca(b))for(var e=0;e<b.length;e++)ub(a,b[e],c,d,g);else a=S(a,b,c,d,g),O[a].ba=l}
function vb(a,b,c,d,g){if(ca(b))for(var e=0;e<b.length;e++)vb(a,b[e],c,d,g);else{d=!!d;a:{e=P;if(b in e&&(e=e[b],d in e&&(e=e[d],a=ga(a),e[a]))){a=e[a];break a}a=m}if(a)for(e=0;e<a.length;e++)if(a[e].H==c&&a[e].capture==d&&a[e].ha==g){wb(a[e].key);break}}}
function wb(a){if(!O[a])return r;var b=O[a];if(b.w)return r;var c=b.src,d=b.type,g=b.Pa,e=b.capture;c.removeEventListener?(c==y||!c.xa)&&c.removeEventListener(d,g,e):c.detachEvent&&c.detachEvent(d in sb?sb[d]:sb[d]="on"+d,g);c=ga(c);rb[c]&&(g=rb[c],va(g,b),0==g.length&&delete rb[c]);b.w=l;if(b=P[d][e][c])b.Ka=l,xb(d,e,c,b);delete O[a];return l}
function xb(a,b,c,d){if(!d.U&&d.Ka){for(var g=0,e=0;g<d.length;g++)d[g].w?d[g].Pa.src=m:(g!=e&&(d[e]=d[g]),e++);d.length=e;d.Ka=r;0==e&&(delete P[a][b][c],P[a][b].f--,0==P[a][b].f&&(delete P[a][b],P[a].f--),0==P[a].f&&delete P[a])}}function yb(a,b,c,d,g){var e=1,b=ga(b);if(a[b]){a.k--;a=a[b];a.U?a.U++:a.U=1;try{for(var h=a.length,j=0;j<h;j++){var k=a[j];k&&!k.w&&(e&=zb(k,g)!==r)}}finally{a.U--,xb(c,d,b,a)}}return Boolean(e)}function zb(a,b){a.ba&&wb(a.key);return a.handleEvent(b)}
function tb(a,b){if(!O[a])return l;var c=O[a],d=c.type,g=P;if(!(d in g))return l;var g=g[d],e,h;if(!jb){var j;if(!(j=b))a:{j=["window","event"];for(var k=y;e=j.shift();)if(k[e]!=m)k=k[e];else{j=m;break a}j=k}e=j;j=l in g;k=r in g;if(j){if(0>e.keyCode||e.returnValue!=i)return l;a:{var p=r;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(q){p=l}if(p||e.returnValue==i)e.returnValue=l}}p=new ob;p.S(e,this);e=l;try{if(j){for(var n=[],t=p.currentTarget;t;t=t.parentNode)n.push(t);h=g[l];h.k=h.f;for(var x=
n.length-1;!p.t&&0<=x&&h.k;x--)p.currentTarget=n[x],e&=yb(h,n[x],d,l,p);if(k){h=g[r];h.k=h.f;for(x=0;!p.t&&x<n.length&&h.k;x++)p.currentTarget=n[x],e&=yb(h,n[x],d,r,p)}}else e=zb(c,p)}finally{n&&(n.length=0)}return e}d=new ob(b,this);return e=zb(c,d)};function Ab(){this.M=r}B(Ab,ib);u=Ab.prototype;u.xa=l;u.la=m;u.ra=function(a){this.la=a};u.addEventListener=function(a,b,c,d){S(this,a,b,c,d)};u.removeEventListener=function(a,b,c,d){vb(this,a,b,c,d)};
u.dispatchEvent=function(a){var b=a.type||a,c=P;if(b in c){if(z(a))a=new lb(a,this);else if(a instanceof lb)a.target=a.target||this;else{var d=a,a=new lb(b,this);bb(a,d)}var d=1,g,c=c[b],b=l in c,e;if(b){g=[];for(e=this;e;e=e.la)g.push(e);e=c[l];e.k=e.f;for(var h=g.length-1;!a.t&&0<=h&&e.k;h--)a.currentTarget=g[h],d&=yb(e,g[h],a.type,l,a)&&a.X!=r}if(r in c)if(e=c[r],e.k=e.f,b)for(h=0;!a.t&&h<g.length&&e.k;h++)a.currentTarget=g[h],d&=yb(e,g[h],a.type,r,a)&&a.X!=r;else for(g=this;!a.t&&g&&e.k;g=g.la)a.currentTarget=
g,d&=yb(e,g,a.type,r,a)&&a.X!=r;a=Boolean(d)}else a=l;return a};var Bb=y.window;function Cb(a,b,c){ea(a)?c&&(a=A(a,c)):a&&"function"==typeof a.handleEvent?a=A(a.handleEvent,a):f(Error("Invalid listener argument"));return 2147483647<b?-1:Bb.setTimeout(a,b||0)};function T(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}T.prototype.o=function(){return new T(this.top,this.right,this.bottom,this.left)};T.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};T.prototype.contains=function(a){return!this||!a?r:a instanceof T?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom};
function Db(a,b){var c=b.x<a.left?b.x-a.left:b.x>a.right?b.x-a.right:0,d=b.y<a.top?b.y-a.top:b.y>a.bottom?b.y-a.bottom:0;return Math.sqrt(c*c+d*d)};function U(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}U.prototype.o=function(){return new U(this.left,this.top,this.width,this.height)};function Eb(a){return new T(a.top,a.left+a.width,a.top+a.height,a.left)}U.prototype.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};
U.prototype.Fa=function(a){var b=Math.max(this.left,a.left),c=Math.min(this.left+this.width,a.left+a.width);if(b<=c){var d=Math.max(this.top,a.top),a=Math.min(this.top+this.height,a.top+a.height);if(d<=a)return this.left=b,this.top=d,this.width=c-b,this.height=a-d,l}return r};
U.prototype.contains=function(a){return a instanceof U?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};function Fb(a,b,c){a.style[String(c).replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})]=b}function V(a,b){var c=L(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,m))?c[b]||c.getPropertyValue(b)||"":""}function W(a,b){return V(a,b)||(a.currentStyle?a.currentStyle[b]:m)||a.style&&a.style[b]}function Gb(a){a=a?L(a):document;return D&&!Ua(9)&&!gb(K(a))?a.body:a.documentElement}
function Hb(a){if(Ia&&F){var b=a.ownerDocument.defaultView;if(b!=b.top)return r}return!!a.getBoundingClientRect}function Ib(a){var b=a.getBoundingClientRect();D&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Jb(a){if(D&&!Ua(8))return a.offsetParent;for(var b=L(a),c=W(a,"position"),d="fixed"==c||"absolute"==c,a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=W(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return m}
function Kb(a){for(var b=new T(0,Infinity,Infinity,0),c=K(a),d=c.b.body,g=c.b.documentElement,e=!F&&"CSS1Compat"==c.b.compatMode?c.b.documentElement:c.b.body;a=Jb(a);)if((!D||0!=a.clientWidth)&&(!F||0!=a.clientHeight||a!=d)&&a!=d&&a!=g&&"visible"!=W(a,"overflow")){var h=X(a),j;j=a;if(E&&!G("1.9")){var k=parseFloat(V(j,"borderLeftWidth"));if(Lb(j))var p=j.offsetWidth-j.clientWidth-k-parseFloat(V(j,"borderRightWidth")),k=k+p;j=new H(k,parseFloat(V(j,"borderTopWidth")))}else j=new H(j.clientLeft,j.clientTop);
h.x+=j.x;h.y+=j.y;b.top=Math.max(b.top,h.y);b.right=Math.min(b.right,h.x+a.clientWidth);b.bottom=Math.min(b.bottom,h.y+a.clientHeight);b.left=Math.max(b.left,h.x)}d=e.scrollLeft;e=e.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,e);c=(c.b.parentWindow||c.b.defaultView||window).document;c="CSS1Compat"==c.compatMode?c.documentElement:c.body;c=new J(c.clientWidth,c.clientHeight);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,e+c.height);return 0<=b.top&&0<=b.left&&b.bottom>
b.top&&b.right>b.left?b:m}
function X(a){var b,c=L(a),d=W(a,"position"),g=E&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),e=new H(0,0),h=Gb(c);if(a==h)return e;if(Hb(a))b=Ib(a),a=hb(K(c)),e.x=b.left+a.x,e.y=b.top+a.y;else if(c.getBoxObjectFor&&!g)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(h),e.x=b.screenX-a.screenX,e.y=b.screenY-a.screenY;else{b=a;do{e.x+=b.offsetLeft;e.y+=b.offsetTop;b!=a&&(e.x+=b.clientLeft||0,e.y+=b.clientTop||0);if(F&&"fixed"==W(b,"position")){e.x+=
c.body.scrollLeft;e.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(Ha||F&&"absolute"==d)e.y-=c.body.offsetTop;for(b=a;(b=Jb(b))&&b!=c.body&&b!=h;)if(e.x-=b.scrollLeft,!Ha||"TR"!=b.tagName)e.y-=b.scrollTop}return e}function Mb(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Nb(a){if("none"!=W(a,"display"))return Ob(a);var b=a.style,c=b.display,d=b.visibility,g=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=Ob(a);b.display=c;b.position=g;b.visibility=d;return a}function Ob(a){var b=a.offsetWidth,c=a.offsetHeight,d=F&&!b&&!c;return(b===i||d)&&a.getBoundingClientRect?(a=Ib(a),new J(a.right-a.left,a.bottom-a.top)):new J(b,c)}function Pb(a){var b=X(a),a=Nb(a);return new U(b.x,b.y,a.width,a.height)}
function Qb(a,b){a.style.display=b?"":"none"}function Lb(a){return"rtl"==W(a,"direction")}function Rb(a,b,c,d){if(/^\d+px?$/.test(b))return parseInt(b,10);var g=a.style[c],e=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=g;a.runtimeStyle[c]=e;return b}function Sb(a,b){return Rb(a,a.currentStyle?a.currentStyle[b]:m,"left","pixelLeft")}
function Tb(a){if(D){var b=Sb(a,"paddingLeft"),c=Sb(a,"paddingRight"),d=Sb(a,"paddingTop"),a=Sb(a,"paddingBottom");return new T(d,c,a,b)}b=V(a,"paddingLeft");c=V(a,"paddingRight");d=V(a,"paddingTop");a=V(a,"paddingBottom");return new T(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))}var Ub={thin:2,medium:4,thick:6};
function Vb(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:m))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:m;return c in Ub?Ub[c]:Rb(a,c,"left","pixelLeft")}function Wb(a){if(D){var b=Vb(a,"borderLeft"),c=Vb(a,"borderRight"),d=Vb(a,"borderTop"),a=Vb(a,"borderBottom");return new T(d,c,a,b)}b=V(a,"borderLeftWidth");c=V(a,"borderRightWidth");d=V(a,"borderTopWidth");a=V(a,"borderBottomWidth");return new T(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))}var Xb=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;function Yb(a,b,c,d,g,e,h,j){var k,p;if(k=c.offsetParent){var q="HTML"==k.tagName||"BODY"==k.tagName;if(!q||"static"!=W(k,"position"))p=X(k),q||(q=(q=Lb(k))&&E?-k.scrollLeft:q&&(!D||!G("8"))?k.scrollWidth-k.clientWidth-k.scrollLeft:k.scrollLeft,p=Ya(p,new H(q,k.scrollTop)))}k=p||new H;p=Pb(a);(q=Kb(a))&&p.Fa(new U(q.left,q.top,q.right-q.left,q.bottom-q.top));var q=K(a),n=K(c);if(q.b!=n.b){var t=q.b.body,n=n.b.parentWindow||n.b.defaultView,x=new H(0,0),N=L(t)?L(t).parentWindow||L(t).defaultView:window,
mb=t;do{var v;if(N==n)v=X(mb);else{v=mb;var Q=new H;if(1==v.nodeType){if(Hb(v)){var w=Ib(v);Q.x=w.left;Q.y=w.top}else{var w=hb(K(v)),I=X(v);Q.x=I.x-w.x;Q.y=I.y-w.y}E&&!G(12)&&(w=i,w=i,D?w="-ms-transform":F?w="-webkit-transform":Ha?w="-o-transform":E&&(w="-moz-transform"),I=i,w&&(I=W(v,w)),I||(I=W(v,"transform")),I?(v=I.match(Xb),w=!v?new H(0,0):new H(parseFloat(v[1]),parseFloat(v[2]))):w=new H(0,0),Q=new H(Q.x+w.x,Q.y+w.y))}else w=ea(v.Va),I=v,v.targetTouches?I=v.targetTouches[0]:w&&v.q.targetTouches&&
(I=v.q.targetTouches[0]),Q.x=I.clientX,Q.y=I.clientY;v=Q}x.x+=v.x;x.y+=v.y}while(N&&N!=n&&(mb=N.frameElement)&&(N=N.parent));t=Ya(x,X(t));D&&!gb(q)&&(t=Ya(t,hb(q)));p.left+=t.x;p.top+=t.y}a=(b&4&&Lb(a)?b^2:b)&-5;b=new H(a&2?p.left+p.width:p.left,a&1?p.top+p.height:p.top);b=Ya(b,k);g&&(b.x+=(a&2?-1:1)*g.x,b.y+=(a&1?-1:1)*g.y);var R;if(h&&(R=Kb(c)))R.top-=k.y,R.right-=k.x,R.bottom-=k.y,R.left-=k.x;return Zb(b,c,d,e,R,h,j)}
function Zb(a,b,c,d,g,e,h){var a=a.o(),j=0,k=(c&4&&Lb(b)?c^2:c)&-5,c=Nb(b),h=h?h.o():c.o();if(d||0!=k)k&2?a.x-=h.width+(d?d.right:0):d&&(a.x+=d.left),k&1?a.y-=h.height+(d?d.bottom:0):d&&(a.y+=d.top);if(e){if(g){j=a;d=0;if(65==(e&65)&&(j.x<g.left||j.x>=g.right))e&=-2;if(132==(e&132)&&(j.y<g.top||j.y>=g.bottom))e&=-5;j.x<g.left&&e&1&&(j.x=g.left,d|=1);j.x<g.left&&(j.x+h.width>g.right&&e&16)&&(h.width=Math.max(h.width-(j.x+h.width-g.right),0),d|=4);j.x+h.width>g.right&&e&1&&(j.x=Math.max(g.right-h.width,
g.left),d|=1);e&2&&(d|=(j.x<g.left?16:0)|(j.x+h.width>g.right?32:0));j.y<g.top&&e&4&&(j.y=g.top,d|=2);j.y>=g.top&&(j.y+h.height>g.bottom&&e&32)&&(h.height=Math.max(h.height-(j.y+h.height-g.bottom),0),d|=8);j.y+h.height>g.bottom&&e&4&&(j.y=Math.max(g.bottom-h.height,g.top),d|=2);e&8&&(d|=(j.y<g.top?64:0)|(j.y+h.height>g.bottom?128:0));j=d}else j=256;if(j&496)return j}e=a;g=E&&(Ca||Ka)&&G("1.9");e instanceof H?(a=e.x,e=e.y):(a=e,e=i);b.style.left=Mb(a,g);b.style.top=Mb(e,g);if(!(c==h||(!c||!h?0:c.width==
h.width&&c.height==h.height)))a=gb(K(L(b))),D&&(!a||!G("8"))?(c=b.style,a?(a=Tb(b),b=Wb(b),c.pixelWidth=h.width-b.left-a.left-a.right-b.right,c.pixelHeight=h.height-b.top-a.top-a.bottom-b.bottom):(c.pixelWidth=h.width,c.pixelHeight=h.height)):(b=b.style,E?b.MozBoxSizing="border-box":F?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(h.width,0)+"px",b.height=Math.max(h.height,0)+"px");return j};function $b(){}$b.prototype.n=function(){};function ac(a,b,c){this.element=a;this.va=b;this.cb=c}B(ac,$b);ac.prototype.n=function(a,b,c){Yb(this.element,this.va,a,b,i,c,this.cb)};function bc(a,b){this.da=a instanceof H?a:new H(a,b)}B(bc,$b);bc.prototype.n=function(a,b,c,d){Yb(Gb(a),0,a,b,this.da,c,m,d)};function cc(a){if("function"==typeof a.C)return a.C();if(z(a))return a.split("");if(da(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return $a(a)};function dc(a,b){this.j={};this.d=[];var c=arguments.length;if(1<c){c%2&&f(Error("Uneven number of arguments"));for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.$(a)}u=dc.prototype;u.f=0;u.Ra=0;u.C=function(){ec(this);for(var a=[],b=0;b<this.d.length;b++)a.push(this.j[this.d[b]]);return a};u.remove=function(a){return Object.prototype.hasOwnProperty.call(this.j,a)?(delete this.j[a],this.f--,this.Ra++,this.d.length>2*this.f&&ec(this),l):r};
function ec(a){if(a.f!=a.d.length){for(var b=0,c=0;b<a.d.length;){var d=a.d[b];Object.prototype.hasOwnProperty.call(a.j,d)&&(a.d[c++]=d);b++}a.d.length=c}if(a.f!=a.d.length){for(var g={},c=b=0;b<a.d.length;)d=a.d[b],Object.prototype.hasOwnProperty.call(g,d)||(a.d[c++]=d,g[d]=1),b++;a.d.length=c}}u.set=function(a,b){Object.prototype.hasOwnProperty.call(this.j,a)||(this.f++,this.d.push(a),this.Ra++);this.j[a]=b};
u.$=function(a){var b;if(a instanceof dc)ec(a),b=a.d.concat(),a=a.C();else{b=[];var c=0,d;for(d in a)b[c++]=d;a=$a(a)}for(c=0;c<b.length;c++)this.set(b[c],a[c])};u.o=function(){return new dc(this)};function fc(a){this.j=new dc;a&&this.$(a)}function gc(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ga(a):b.substr(0,1)+a}u=fc.prototype;u.add=function(a){this.j.set(gc(a),a)};u.$=function(a){for(var a=cc(a),b=a.length,c=0;c<b;c++)this.add(a[c])};u.oa=function(a){for(var a=cc(a),b=a.length,c=0;c<b;c++)this.remove(a[c])};u.remove=function(a){return this.j.remove(gc(a))};u.contains=function(a){a=gc(a);return Object.prototype.hasOwnProperty.call(this.j.j,a)};
u.Fa=function(a){for(var b=new fc,a=cc(a),c=0;c<a.length;c++){var d=a[c];this.contains(d)&&b.add(d)}return b};u.C=function(){return this.j.C()};u.o=function(){return new fc(this)};function hc(a){this.M=r;this.p=a;this.d=[]}B(hc,ib);var ic=[];function jc(a,b,c,d,g){ca(c)||(ic[0]=c,c=ic);for(var e=0;e<c.length;e++){var h=S(b,c[e],d||a,g||r,a.p||a);a.d.push(h)}}hc.prototype.oa=function(){ua(this.d,wb);this.d.length=0};hc.prototype.handleEvent=function(){f(Error("EventHandler.handleEvent not implemented"))};function kc(a,b){this.M=r;this.p=new hc(this);this.qa(a||m);b&&(this.z=b)}B(kc,Ab);u=kc.prototype;u.c=m;u.Sa=l;u.ta=m;u.h=r;u.hb=r;u.ia=-1;u.Ha=-1;u.Za=r;u.Ua=l;u.z="toggle_display";u.a=s("c");u.qa=function(a){this.h&&f(Error("Can not change this state of the popup while showing."));this.c=a};
function lc(a,b){a.Z&&a.Z.stop();a.Q&&a.Q.stop();if(b){if(!a.h&&a.ja()){a.c||f(Error("Caller must call setElement before trying to show the popup"));a.n();var c=L(a.c);a.Za&&jc(a.p,c,"keydown",a.bb,l);if(a.Sa)if(jc(a.p,c,"mousedown",a.Ma,l),D){var d;try{d=c.activeElement}catch(g){}for(;d&&"IFRAME"==d.nodeName;){try{var e=d.contentDocument||d.contentWindow.document}catch(h){break}c=e;d=c.activeElement}jc(a.p,c,"mousedown",a.Ma,l);jc(a.p,c,"deactivate",a.La)}else jc(a.p,c,"blur",a.La);"toggle_display"==
a.z?(a.c.style.visibility="visible",Qb(a.c,l)):"move_offscreen"==a.z&&a.n();a.h=l;a.Z?(ub(a.Z,"end",a.V,r,a),a.Z.play()):a.V()}}else mc(a)}u.n=aa;function mc(a,b){if(!a.h||!a.dispatchEvent({type:"beforehide",target:b}))return r;a.p&&a.p.oa();a.h=r;a.Ha=ma();a.Q?(ub(a.Q,"end",la(a.ua,b),r,a),a.Q.play()):a.ua(b);return l}u.ua=function(a){"toggle_display"==this.z?this.hb?Cb(this.Ca,0,this):this.Ca():"move_offscreen"==this.z&&(this.c.style.left="-200px",this.c.style.top="-200px");this.I(a)};
u.Ca=function(){this.c.style.visibility="hidden";Qb(this.c,r)};u.ja=function(){return this.dispatchEvent("beforeshow")};u.V=function(){this.ia=ma();this.Ha=-1;this.dispatchEvent("show")};u.I=function(a){this.dispatchEvent({type:"hide",target:a})};u.Ma=function(a){a=a.target;!M(this.c,a)&&((!this.ta||M(this.ta,a))&&!(150>ma()-this.ia))&&mc(this,a)};u.bb=function(a){27==a.keyCode&&mc(this,a.target)&&(a.preventDefault(),a.stopPropagation())};
u.La=function(a){if(this.Ua){var b=L(this.c);if(D||Ha){if(a=b.activeElement,!a||M(this.c,a)||"BODY"==a.tagName)return}else if(a.target!=b)return;150>ma()-this.ia||mc(this)}};function nc(a,b){this.fb=4;this.na=b||i;kc.call(this,a)}B(nc,kc);nc.prototype.n=function(){if(this.na){var a=!this.h&&"move_offscreen"!=this.z,b=this.a();a&&(b.style.visibility="hidden",Qb(b,l));this.na.n(b,this.fb,this.jb);a&&Qb(b,r)}};function oc(a,b,c){this.l=c||(a?K(z(a)?document.getElementById(a):a):K());nc.call(this,this.l.B("div",{style:"position:absolute;display:none;"}));this.s=new H(1,1);this.N=new fc;a&&pc(this,a);if(b!=m)if(a=this.a(),"textContent"in a)a.textContent=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(;c=a.firstChild;)a.removeChild(c);a.appendChild(L(a).createTextNode(b))}}B(oc,nc);var qc=[];u=oc.prototype;u.e=m;
u.className="goog-tooltip";u.Qa=500;u.Ba=0;u.g=s("l");function pc(a,b){b=z(b)?document.getElementById(b):b;a.N.add(b);S(b,"mouseover",a.Xa,r,a);S(b,"mouseout",a.za,r,a);S(b,"mousemove",a.F,r,a);S(b,"focus",a.Wa,r,a);S(b,"blur",a.za,r,a)}u.fa=s("Ba");u.qa=function(a){var b=this.a();b&&b&&b.parentNode&&b.parentNode.removeChild(b);oc.i.qa.call(this,a);a&&(b=this.l.b.body,b.insertBefore(a,b.lastChild))};function rc(a){return a.r?a.h?4:1:a.v?3:a.h?2:0}
u.T=function(a){if(!this.h)return r;var b=X(this.a()),c=Nb(this.a());return b.x<=a.x&&a.x<=b.x+c.width&&b.y<=a.y&&a.y<=b.y+c.height};u.ja=function(){if(!kc.prototype.ja.call(this))return r;if(this.anchor)for(var a,b=0;a=qc[b];b++)M(a.a(),this.anchor)||lc(a,r);0<=ta(qc,this)||qc.push(this);a=this.a();a.className=this.className;sc(this);S(a,"mouseover",this.ga,r,this);S(a,"mouseout",this.Aa,r,this);tc(this);return l};
u.I=function(){va(qc,this);for(var a=this.a(),b,c=0;b=qc[c];c++)b.anchor&&M(a,b.anchor)&&lc(b,r);this.Oa&&uc(this.Oa);vb(a,"mouseover",this.ga,r,this);vb(a,"mouseout",this.Aa,r,this);this.anchor=i;0==rc(this)&&(this.Y=r);kc.prototype.I.call(this)};u.Ja=function(a,b){this.anchor==a&&this.N.contains(this.anchor)&&(this.Y||!this.kb?(lc(this,r),this.h||(this.anchor=a,this.na=b||vc(this,0)||i,this.h&&this.n(),lc(this,l))):this.anchor=i);this.r=i};u.ea=s("e");
u.Ia=function(a){this.v=i;a==this.anchor&&(this.e==m||this.e!=this.a()&&!this.N.contains(this.e))&&(!this.u||!this.u.e)&&lc(this,r)};function wc(a,b){var c=hb(a.l);a.s.x=b.clientX+c.x;a.s.y=b.clientY+c.y}u.Xa=function(a){var b=xc(this,a.target);this.e=b;sc(this);b!=this.anchor&&(this.anchor=b,this.r||(this.r=Cb(A(this.Ja,this,b,i),this.Qa)),yc(this),wc(this,a))};function xc(a,b){try{for(;b&&!a.N.contains(b);)b=b.parentNode;return b}catch(c){return m}}u.F=function(a){wc(this,a);this.Y=l};
u.Wa=function(a){this.e=a=xc(this,a.target);this.Y=l;if(this.anchor!=a){this.anchor=a;var b=vc(this,1);sc(this);this.r||(this.r=Cb(A(this.Ja,this,a,b),this.Qa));yc(this)}};function vc(a,b){if(0==b){var c=a.s.o();return new zc(c)}return new Ac(a.e)}function yc(a){if(a.anchor)for(var b,c=0;b=qc[c];c++)M(b.a(),a.anchor)&&(b.u=a,a.Oa=b)}
u.za=function(a){var b=xc(this,a.target),c=xc(this,a.relatedTarget);b!=c&&(b==this.e&&(this.e=m),tc(this),this.Y=r,this.h&&(!a.relatedTarget||!M(this.a(),a.relatedTarget))?uc(this):this.anchor=i)};u.ga=function(){var a=this.a();this.e!=a&&(sc(this),this.e=a)};u.Aa=function(a){var b=this.a();if(this.e==b&&(!a.relatedTarget||!M(b,a.relatedTarget)))this.e=m,uc(this)};function tc(a){a.r&&(Bb.clearTimeout(a.r),a.r=i)}function uc(a){2==rc(a)&&(a.v=Cb(A(a.Ia,a,a.anchor),a.fa()))}
function sc(a){a.v&&(Bb.clearTimeout(a.v),a.v=i)}function zc(a,b){bc.call(this,a,b)}B(zc,bc);zc.prototype.n=function(a,b,c){b=Gb(a);b=Kb(b);c=c?new T(c.top+10,c.right,c.bottom,c.left+10):new T(10,0,0,10);Zb(this.da,a,4,c,b,9)&496&&Zb(this.da,a,4,c,b,5)};function Ac(a){ac.call(this,a,3)}B(Ac,ac);Ac.prototype.n=function(a,b,c){var d=new H(10,0);Yb(this.element,this.va,a,b,d,c,9)&496&&Yb(this.element,2,a,1,d,c,5)};function Y(a,b,c){oc.call(this,a,b,c)}B(Y,oc);u=Y.prototype;u.wa=r;u.Ta=100;u.J=r;u.V=function(){Y.i.V.call(this);this.K=Eb(Pb(this.a()));this.anchor&&(this.aa=Eb(Pb(this.anchor)));this.J=this.wa;S(fb(this.g()),"mousemove",this.F,r,this)};u.I=function(){vb(fb(this.g()),"mousemove",this.F,r,this);this.aa=this.K=m;this.J=r;Y.i.I.call(this)};
u.T=function(a){if(this.R){var b=X(this.a()),c=Nb(this.a());return b.x-this.R.left<=a.x&&a.x<=b.x+c.width+this.R.right&&b.y-this.R.top<=a.y&&a.y<=b.y+c.height+this.R.bottom}return Y.i.T.call(this,a)};function Bc(a,b){if(a.aa&&a.aa.contains(b)||a.T(b))return l;var c=a.u;return!!c&&c.T(b)}u.Ia=function(a){this.v=i;a==this.anchor&&(!Bc(this,this.s)&&(!this.ea()&&(!this.u||!this.u.e))&&(!E||!(0==this.s.x&&0==this.s.y)))&&lc(this,r)};
u.F=function(a){var b=this.h;if(this.K){var c=hb(this.g()),c=new H(a.clientX+c.x,a.clientY+c.y);Bc(this,c)?b=r:this.J&&(b=Db(this.K,c)>=Db(this.K,this.s))}if(b){if(uc(this),this.e=m,b=this.u)b.e=m}else 3==rc(this)&&sc(this);Y.i.F.call(this,a)};u.ga=function(){this.ea()!=this.a()&&(this.J=r,this.e=this.a())};u.fa=function(){return this.J?this.Ta:Y.i.fa.call(this)};function Z(){}Z.ya=function(){return Z.Ea?Z.Ea:Z.Ea=new Z};Z.prototype.ab=0;Z.ya();function Cc(a){this.M=r;this.l=a||K();this.gb=Dc}B(Cc,Ab);Cc.prototype.$a=Z.ya();var Dc=m;u=Cc.prototype;u.Da=m;u.G=r;u.c=m;u.gb=m;u.ma=m;u.A=m;u.ca=m;u.ib=r;u.a=s("c");u.ra=function(a){this.ma&&this.ma!=a&&f(Error("Method not supported"));Cc.i.ra.call(this,a)};u.g=s("l");u.B=function(){this.c=this.l.createElement("div")};u.L=function(a){this.c=a};u.O=function(){function a(a){!a.G&&a.a()&&a.O()}this.G=l;this.A&&ua(this.A,a,i)};
function Ec(a){function b(a){a.G&&Ec(a)}a.A&&ua(a.A,b,i);a.D&&a.D.oa();a.G=r}u.removeChild=function(a,b){if(a){var c=z(a)?a:a.Da||(a.Da=":"+(a.$a.ab++).toString(36)),d;this.ca&&c?(d=this.ca,d=(c in d?d[c]:i)||m):d=m;a=d;c&&a&&(d=this.ca,c in d&&delete d[c],va(this.A,a),b&&(Ec(a),a.c&&(c=a.c)&&c.parentNode&&c.parentNode.removeChild(c)),c=a,c==m&&f(Error("Unable to set parent component")),c.ma=m,Cc.i.ra.call(c,m))}a||f(Error("Child is not in parent component"));return a};function $(a,b){var c=a?K(a):b;Cc.call(this,c);this.ka=a||fb(this.g()).body;this.W={}}B($,Cc);$.prototype.pa=l;$.prototype.P=r;var Fc=["position","top","left","width","cssFloat"],Gc="position top left display cssFloat marginTop marginLeft marginRight marginBottom".split(" ");u=$.prototype;u.B=function(){$.i.B.call(this);this.L(this.a())};u.L=function(a){$.i.L.call(this,a);Xa(a,"goog-scrollfloater")};
u.O=function(){$.i.O.call(this);this.m||(this.m=this.g().B("div",{style:"visibility:hidden"}));this.Na=X(this.a()).y;var a=this.pa;if(this.pa=a){if(Hc(this)&&(a=fb(this.g()),a=Gb(a),"none"==a.currentStyle.backgroundImage)){var b=a.style,c=this.g();b.backgroundImage="https:"==(c.b.parentWindow||c.b.defaultView).location.protocol?"url(https:///)":"url(about:blank)";a.style.backgroundAttachment="fixed"}this.sa()}else Ic(this);jc(this.D||(this.D=new hc(this)),window,"scroll",this.sa);jc(this.D||(this.D=
new hc(this)),window,"resize",this.Ya)};
u.sa=function(){if(this.pa)if(this.g(),hb(this.g()).y>this.Na){if(!this.P&&this.dispatchEvent("float")){var a=this.a();this.g();var b=X(a).x,c;var d=L(a);if((c=D&&a.currentStyle)&&gb(K(d))&&"auto"!=c.width&&"auto"!=c.height&&!c.boxSizing)d=Rb(a,c.width,"width","pixelWidth"),c=Rb(a,c.height,"height","pixelHeight"),c=new J(d,c);else{c=new J(a.offsetWidth,a.offsetHeight);var d=Tb(a),g=Wb(a);c=new J(c.width-g.left-d.left-d.right-g.right,c.height-g.top-d.top-d.bottom-g.bottom)}c=c.width;this.W={};Za(Fc,
function(b){this.W[b]=a.style[b]},this);Za(Gc,function(b){this.m.style[b]=a.style[b]||(a.currentStyle?a.currentStyle[b]:m)||V(a,b)},this);var d=this.m,g=a.offsetWidth,e=a.offsetHeight;g instanceof J?(e=g.height,g=g.width):e==i&&f(Error("missing height argument"));d.style.width=Mb(g,l);d.style.height=Mb(e,l);b={left:b+"px",width:c+"px",cssFloat:"none"};z(b)?Fb(a,i,b):Za(b,la(Fb,a));a.parentNode==this.ka?a.parentNode.insertBefore(this.m,a):(a.parentNode.replaceChild(this.m,a),this.ka.appendChild(a));
Hc(this)?(a.style.position="absolute",a.style.setExpression("top",'document.compatMode=="CSS1Compat"?documentElement.scrollTop:document.body.scrollTop')):(a.style.position="fixed",a.style.top="0");this.P=l}}else Ic(this)};function Ic(a){if(a.P&&a.dispatchEvent("dock")){var b=a.a(),c;for(c in a.W)b.style[c]=a.W[c];Hc(a)&&b.style.removeExpression("top");a.m.parentNode==a.ka?a.m.parentNode.removeChild(a.m):a.m.parentNode.replaceChild(b,a.m);a.P=r}}u.Ya=function(){Ic(this);this.Na=X(this.a()).y;this.sa()};
function Hc(a){return D&&!(G("7")&&gb(a.g()))};window.replaceIframe=function(a){var b=document.createElement("div");b.innerHTML=a.getAttribute("data-iframe-code");b.className="replaced-iframe-container";a.parentNode.replaceChild(b,a);return r};window.togglePrefaceDetails=function(){var a=document.getElementById("preface-details");a.style.display=""==a.style.display?"none":"";return r};var Jc=new $,Kc=z("navbar-top")?document.getElementById("navbar-top"):"navbar-top";Jc.G&&f(Error("Component already rendered"));
if(Kc){Jc.ib=l;if(!Jc.l||Jc.l.b!=L(Kc))Jc.l=K(Kc);Jc.L(Kc);Jc.O()}else f(Error("Invalid element to decorate"));var Lc,Mc=document;Lc=Mc.querySelectorAll&&Mc.querySelector?Mc.querySelectorAll(".glossterm"):Mc.getElementsByClassName?Mc.getElementsByClassName("glossterm"):db();ua(Lc,function(a){var b=new Y;b.wa=l;b.Ba=250;b.className="glossdef-tooltip";var c;if(a.nextElementSibling!=i)c=a.nextElementSibling;else for(c=a.nextSibling;c&&1!=c.nodeType;)c=c.nextSibling;b.a().innerHTML=c.innerHTML;pc(b,a)});

const addAlt = () => {
  let l = document.querySelectorAll(".left");
  let m = document.querySelectorAll(".middle");
  let r = document.querySelectorAll(".right");

  for(const i of l){
    i.querySelector("img").setAttribute("alt", "back to previous section")
  }

  for(const j of m){
    j.querySelector("img").setAttribute("alt", "go to table of contents")
  }

  for(const a of r){
    a.querySelector("img").setAttribute("alt", "go to next section")
  }
}

const addDeco = () => {
  document.querySelector("html").setAttribute("lang",  "en" );
  var images = document.querySelectorAll('img');

  // Loop through each image
  images.forEach(function(image) {
    if (!image.hasAttribute('alt')) {
      image.setAttribute('alt', ' ');
      console.log('Empty alt attribute added to an image.');
    }
  });
}

document.addEventListener("DOMContentLoaded", addAlt);
document.addEventListener("DOMContentLoaded", addDeco);
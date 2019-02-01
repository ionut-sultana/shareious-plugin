/*
A simple jQuery function that can add listeners on attribute change.
http://meetselva.github.io/attrchange/
About License:
Copyright (C) 2013-2014 Selvakumar Arumugam
You may use attrchange plugin under the terms of the MIT Licese.
https://github.com/meetselva/attrchange/blob/master/MIT-License.txt
*/
!function(a){function b(){var a=document.createElement("p"),b=!1;if(a.addEventListener)a.addEventListener("DOMAttrModified",function(){b=!0},!1);else{if(!a.attachEvent)return!1;a.attachEvent("onDOMAttrModified",function(){b=!0})}return a.setAttribute("id","target"),b}function c(b,c){if(b){var d=this.data("attr-old-value");if(c.attributeName.indexOf("style")>=0){d.style||(d.style={});var e=c.attributeName.split(".");c.attributeName=e[0],c.oldValue=d.style[e[1]],c.newValue=e[1]+":"+this.prop("style")[a.camelCase(e[1])],d.style[e[1]]=c.newValue}else c.oldValue=d[c.attributeName],c.newValue=this.attr(c.attributeName),d[c.attributeName]=c.newValue;this.data("attr-old-value",d)}}var d=window.MutationObserver||window.WebKitMutationObserver;a.fn.attrchange=function(e,f){if("object"==typeof e){var g={trackValues:!1,callback:a.noop};if("function"==typeof e?g.callback=e:a.extend(g,e),g.trackValues&&this.each(function(b,c){for(var e,d={},b=0,f=c.attributes,g=f.length;b<g;b++)e=f.item(b),d[e.nodeName]=e.value;a(this).data("attr-old-value",d)}),d){var h={subtree:!1,attributes:!0,attributeOldValue:g.trackValues},i=new d(function(b){b.forEach(function(b){var c=b.target;g.trackValues&&(b.newValue=a(c).attr(b.attributeName)),"connected"===a(c).data("attrchange-status")&&g.callback.call(c,b)})});return this.data("attrchange-method","Mutation Observer").data("attrchange-status","connected").data("attrchange-obs",i).each(function(){i.observe(this,h)})}return b()?this.data("attrchange-method","DOMAttrModified").data("attrchange-status","connected").on("DOMAttrModified",function(b){b.originalEvent&&(b=b.originalEvent),b.attributeName=b.attrName,b.oldValue=b.prevValue,"connected"===a(this).data("attrchange-status")&&g.callback.call(this,b)}):"onpropertychange"in document.body?this.data("attrchange-method","propertychange").data("attrchange-status","connected").on("propertychange",function(b){b.attributeName=window.event.propertyName,c.call(a(this),g.trackValues,b),"connected"===a(this).data("attrchange-status")&&g.callback.call(this,b)}):this}if("string"==typeof e&&a.fn.attrchange.hasOwnProperty("extensions")&&a.fn.attrchange.extensions.hasOwnProperty(e))return a.fn.attrchange.extensions[e].call(this,f)}}(jQuery);

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);


/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");



(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));



(function(e){
  'use strict';

 $.fn.shareious = function (options){

    var defaults = {
     
      socials: {
        facebook:true,
        twitter: true,
        pinterest: true,
        googlePlus: true
      },
      effect : {
        in: 'bounceIn',
        out: 'bounceOut'
      },
      add_delay: false
    }

    var settings = {
      socials : {
        facebook : true,
        twitter : true,
        tumblr : true,
        pinterest: true
      },
      effect : { 
        in: 'zoomIn',
        out: 'zoomOut'
      },
      ignoreImg: {
          img:'.noShareio',
          smallerThanWidth:150,
          smallerThanHeight:150,
      },
       title: "", 
       shareiousCompact : false
    }
     
     
    var ignore= '';

var level2NestedObject = (((options.ignoreImg || {}).img || {} ));

if (typeof level2NestedObject == 'object'){
    ignore = settings.ignoreImg.img;
} else {
    ignore = settings.ignoreImg.img + ', ' + options.ignoreImg.img; 
}

    
   
    var opts = $.extend(true, settings, options);
    var $this = $(this);
    var result = {}, isMobile;

/* ================================================================================================================================================================================================================================================================================
    Global Variables useful on drag and drop actions
================================================================================================================================================================================================================================================================================*/

            var ms_ie = false,
            ua = window.navigator.userAgent,
            old_ie = ua.indexOf('MSIE '),
            new_ie = ua.indexOf('Trident/'),
            $slideDownStripe_i ,
            $slideDownStripe ,
            $slideDownStripe_i_drop ,
            i_width,
            height = 0,
            i_position,
            i_index,
            topValue,
            imgHeight,
            countI,
            windowHeight,
            iconHeight= 0,
            iconH,
            $shareioCompact;


                   function whichAnimationEvent(){
          var t,
              el = document.createElement("fakeelement");

          var animations = {
            "animation"      : "animationend",
            "OAnimation"     : "oAnimationEnd",
            "MozAnimation"   : "animationend",
            "WebkitAnimation": "webkitAnimationEnd"
          }

          for (t in animations){
            if (el.style[t] !== undefined){
              return animations[t];
            }
          }
        }

        var animationEvent = whichAnimationEvent();


/* ================================================================================================================================================================================================================================================================================
Result object  - Result object  Result object  - Result object  Result object  - Result object  Result object  - Result object  Result object  - Result object  Result object  - Result object
================================================================================================================================================================================================================================================================================*/
      result = {
      addFontawesome: function(){
          (!$('.fontawesome_stylesheet').length) ? $('head').append('<link class="fontawesome_stylesheet"type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">') : 'do nothing' ;
      },
      shareData: function(element, network) {

        var summaryObject = {};
        var o = $(element);
        console.log(o)

        summaryObject.w_size = result.windowSize(network);
        summaryObject.media = o.data("media") ? o.data("media") : o[0].src;

        summaryObject.hash = opts.scroll ? "#" + result.createImgHash(s.media) : "";
        summaryObject.title = o.data("title") ? o.data("title") : o.attr("title") ? o.attr("title") : opts.title ? opts.title : document.title;
        summaryObject.summary = o.data("summary") ? o.data("summary") : o.attr("alt") ? o.attr("alt") : opts.summary ? opts.summary : "";

        console.log(summaryObject.media);

        summaryObject.local = location.href.replace(/\?img.*$/, "").replace(/\&img.*$/, "").replace(/#.*$/, "");
        summaryObject.schar = summaryObject.local.indexOf("?") != -1 ? "&" : "?";
        summaryObject.link = summaryObject.local + summaryObject.hash;
        summaryObject.page = opts.sharer ? opts.sharer + "?url=" + encodeURIComponent(summaryObject.link) + "&img=" + summaryObject.media + "&title=" + result.replaceChars(summaryObject.title) + "&desc=" + result.replaceChars(summaryObject.summary) + summaryObject.hash : summaryObject.local + summaryObject.schar + "img=" + summaryObject.media + "&title=" + result.replaceChars(summaryObject.title) + "&desc=" + result.replaceChars(summaryObject.summary) + summaryObject.hash;
 
        result.share(network, summaryObject);
      },
      windowSize: function(e) {
        switch (e) {
          case "facebook":
          return "width=670,height=320";
          break;
          case "twitter":
          return "width=626,height=252";
          break;
          case "google":
          return "width=520,height=550";
          break;
          case "linkedin":
          return "width=620,height=450";
          break;
          case "delicious":
          return "width=800,height=600";
          break;
          default:
          return "width=800,height=350"
        }
      },
      replaceChars: function(e) {
        return encodeURIComponent(e.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ""))
      },
      share: function(e, t) {

        var i = "";
        switch (e) {
          case "facebook":
          if (opts.fb_app) {
            i += "https://www.facebook.com/dialog/feed?";
            i += "app_id=" + opts.fb_app;
            i += "&display=popup";
            i += "&link=" + encodeURIComponent(t.link);
            i += "&picture=" + encodeURIComponent(t.media);
            i += "&name=" + encodeURIComponent(t.title);
            i += "&description=" + encodeURIComponent(t.media);
            i += "&redirect_uri=" + encodeURIComponent(t.local + t.schar + "close=1")
          } else {
              if(result.isMobile() == true){
                i += "http://m.facebook.com/sharer.php?";
                i += "u=" + encodeURIComponent(t.media)      
              } else {
                i += "http://facebook.com/sharer.php?s=100";
                i += "&p[url]=" + encodeURIComponent(t.media)      
              }
            
          } 
          break;
          case "google-plus":
          i += "https://plus.google.com/share?";
          i += "url=" + encodeURIComponent(t.media);
          break;
          case "linkedin":
          i += "http://www.linkedin.com/shareArticle?mini=true";
          i += "&url=" + encodeURIComponent(t.media);
          break;
          case "vk":
          i += "http://vk.com/share.php?";
          i += "url=" + encodeURIComponent(t.link);
          i += "&title=" + encodeURIComponent(t.title);
          i += "&description=" + encodeURIComponent(t.summary);
          i += "&image=" + encodeURIComponent(t.media);
          i += "&noparse=true";
          break;
          case "odnoklassniki":
          i += "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1";
          i += "&st.comments=" + encodeURIComponent(t.title);
          i += "&st._surl=" + encodeURIComponent(t.page);
          break;
          case "twitter":
          i += "https://twitter.com/intent/tweet?";
          i += "text=" + encodeURIComponent(t.title);
          i += "&url=" + encodeURIComponent(t.page);
          break;
          case "pinterest":
          i += "http://pinterest.com/pin/create/button/?";
          i += "url=" + encodeURIComponent(t.link);
          i += "&media=" + encodeURIComponent(t.media);
          i += "&description=" + encodeURIComponent(t.title);
          break;
          case "tumblr":
          i += "http://www.tumblr.com/share/photo?";
          i += "source=" + encodeURIComponent(t.media);
          i += "&caption=" + encodeURIComponent(t.summary);
          i += "&click_thru=" + encodeURIComponent(t.link);
          break;
          case "reddit":
          i += "http://reddit.com/submit?";
          i += "url=" + encodeURIComponent(t.media);
          i += "&title=" + encodeURIComponent(t.title);
          i += "&text=" + encodeURIComponent(t.summary);
          break;
          case "digg":
          i += "http://digg.com/submit?phase=2&";
          i += "url=" + encodeURIComponent(t.media);
          i += "&title=" + encodeURIComponent(t.title);
          i += "&bodytext=" + encodeURIComponent(t.summary);
          break;
          case "delicious":
          i += "http://delicious.com/post?";
          i += "url=" + encodeURIComponent(t.media);
          i += "&title=" + encodeURIComponent(t.title);
          break
        }
        result.openPopup(i, t.w_size)
      },

      openPopup: function(link, measures) {
        window.open(link, "Share This Image", measures + ",status=0,toolbar=0,menubar=0,location=1,scrollbars=1")
      },

      isMobile : function(){
         if(Modernizr.touchevents) { return  true  }
                             else  { return  false }
      },

      mobileStyle : function(e){
          var $shareioWrapper, runOnce = false;

          if(!$('body').find('#shareioWraper').length){
           
             $('body').append('<div id="shareioWraper"><span class="close_shareio fa fa-times-circle-o "></span></div>');
             $shareioWrapper = $('#shareioWraper');
             $shareioWrapper.append('<div class="iconsWrapper"></div>');

          }

             e.hammer().off('press');
             e.hammer().on('press', function(event){
                $('body').addClass('shareioOn');
                  
                  result.append_socials($('.iconsWrapper'), 'mobile');
                  result.getHeight();
                  $(window).trigger('getcustomHeight');

                  $('#shareioWraper').show().find('i')
                  .removeClass(opts.effect.out + ' animated')
                  .addClass(opts.effect.in + ' animated');

                   setTimeout(function(){
                        $('#shareioWraper').addClass('animationDone');
                   }, 1200);

                   $(this).addClass('imgActive');
                   console.log('press me baby')
                   runOnce = false;
             });

             $('#shareioWraper').hammer().on('panleft panright', function(ev){
                if(runOnce == false) {
                      runOnce = true;
                      $('body').removeClass('shareioOn');

               setTimeout(function(){
                        $('#shareioWraper').hide().find('i').remove();
                           $('img.imgActive').removeClass('imgActive');
                           $('#shareioWraper').removeClass('animationDone');
               }, 1100) 

               $('#shareioWraper').find('i').removeClass(opts.effect.in + ' animated')
                                            .addClass(opts.effect.out + ' animated');

                }
             });

            $(document).off('click', '.iconsWrapper i');
             $(document).on('click', '.iconsWrapper i' ,function(event){
                  var item_selected = $(this).data('network');
                  result.shareData($('.imgActive'), item_selected);
             });

      },

      getHeight : function (e) {
          var possibleIconsCount = {
              1:1,
              3:2,
              5:3,
              7:4,
              9:5,
              11:6
          }

        window.addEventListener("orientationchange", function() {
            get_height();
        }, false);


        function get_height(){
             countI = ($('.iconsWrapper i.fa').length),
              windowHeight = $(window).height(),
              iconHeight = (windowHeight / countI);


            if ( countI % 2 == 1) {
              var multiply = possibleIconsCount[countI]
              var nr = countI / multiply;
              iconHeight *= nr;

              $('#shareioWraper').show().find('i').height(iconHeight).css('line-height', iconHeight + 'px');
            } else {
              $('#shareioWraper').show().find('i').height(iconHeight * 2).css('line-height', iconHeight * 2 + 'px').addClass('shareioEven');
            }
        }

        $(window).on('load resize getcustomHeight', function (element) {
              get_height();
        });
      },

      remove_Wrapper: function(e, calledFrom){

       if (calledFrom == undefined){
           $('.shareious div i, .shareious p').removeClass(opts.effect.in + ' animated').addClass(opts.effect.out + ' animated');

        $('.shareious div i, .shareious p').one(animationEvent,
                      function(event) {
              $('body').removeClass('shareioOn');
              $('.shareious').removeClass('on').remove();
        });

       } else if (calledFrom == 'add_wraper'){
           $('.shareious').removeClass('on').remove();
       }

      },

      getCoordinates: function(e, res){

            var width,height,left,top,width2,height2,left2,top2;
            if(typeof e == "object"){

            width = e[0].getBoundingClientRect().width;
            height = e[0].getBoundingClientRect().height;
            top = $(e[0]).offset().top ;
            left = $(e[0]).offset().left;

          var c = {
             left: left,
             top: top,
             width: width,
             heightt:height - 49
          }

          var c2 = {
             left: left,
             top: top,
             midHeight: height / 2,
             height: top + height / 2,
             midWidth : (width / 2 ) - 18 
          }


          var style = "",
              style2 = '', i;

          if(res =="for_add_wrapper"){

              for(i in c){
                  style += i + ':' + c[i] + 'px;';
              }
              return style ;

            } else if (res == 'for_drag' || res == 'shareioCompact'){

              for (i in c2){
                style2 += c2[i] + ', '
              }

              var last_comma_position = style2.lastIndexOf(', ');
              style2 = style2.substr(0, last_comma_position);
              var style2 = JSON.parse("[" + style2 + "]");

              return style2
            }

         }

      },
      add_wraper: function(e){
         result.remove_Wrapper(null, 'add_wraper');
         var coordinates = result.getCoordinates(e, 'for_add_wrapper');

         if(opts.add_delay === true){
             $('body').append('<div style="'+coordinates+'" data-hovered="1" class="shareious shareiousDesktop add_delay "/>');
         } else {
              $('body').append('<div style="'+coordinates+'" data-hovered="1" class="shareious shareiousDesktop "/>');
         }

         result.append_socials($('.shareious'));
         result.wrapSocials($('.shareious'));
         result.setWidth($('.shareious'));
        }

         , append_socials : function(shareious, mobile, src){

             /******************************************************************************************************************************************

                If social icons are provided in options

             ********************************************************************************************************************************************/
             if (Object.prototype.hasOwnProperty.call(options, 'socials')){
                var socials_obj = [];
                if (mobile == undefined){
                  $.each(options.socials, function append_soc(key, val){

                      if(key == "vkontakte"){
                          socials_obj += ['<i data-network="vk" class ="fa draggable fa-vk"></i><i data-network="vk" class="fa droppable fa-vk"/></i>'];
                      } else if (key == "googlePlus") {
                          socials_obj += ['<i data-network="google-plus" class ="fa draggable fa-google-plus"></i><i data-network="google-plus" class="fa droppable fa-google-plus"/></i>'];
                      } else {
                          socials_obj += ['<i data-network="'+key+'" class ="fa draggable fa-'+key+'"></i><i data-network="'+key+'" class="fa droppable fa-'+key+'"/></i>'];
                      }
                 });
                 shareious.append($(socials_obj));
               } else {
                 $.each(options.socials, function append_soc(key, val){

                     if(key == "vkontakte"){
                         socials_obj += ['<i data-network="vk" class ="fa draggable fa-vk"></i>'];
                     } else if (key == "googlePlus") {
                         socials_obj += ['<i data-network="google-plus" class ="fa draggable fa-google-plus"></i>'];
                     } else {
                         socials_obj += ['<i data-network="'+key+'" class ="fa draggable fa-'+key+'"></i>'];
                     }
                });

                shareious.append($(socials_obj));
               }

            } else {

              /******************************************************************************************************************************************

                If social icons are not provided in options


             ********************************************************************************************************************************************/

                var socials_obj = [];
                if (mobile == undefined){

                $.each(defaults.socials, function append_soc(key, val){

                    if(key == "vkontakte"){
                        socials_obj += ['<i data-network="vk" class ="fa draggable fa-vk"></i><i data-network="vk" class="fa droppable fa-vk"/></i>'];
                    } else if (key == "googlePlus") {
                        socials_obj += ['<i data-network="google-plus" class ="fa draggable fa-google-plus"></i><i data-network="google-plus" class="fa droppable fa-google-plus"/></i>'];
                    } else {
                        socials_obj += ['<i data-network="'+key+'" class ="fa draggable fa-'+key+'"></i><i data-network="'+key+'" class="fa droppable fa-'+key+'"/></i>'];
                    }

                });
                shareious.append($(socials_obj));
             }
               else {
                 $.each(defaults.socials, function append_soc(key, val){

                     if(key == "vkontakte"){
                         socials_obj += ['<i data-network="vk" class ="fa draggable fa-vk"></i>'];
                     } else if (key == "googlePlus") {
                         socials_obj += ['<i data-network="google-plus" class ="fa draggable fa-google-plus"></i>'];
                     } else {
                         socials_obj += ['<i data-network="'+key+'" class ="fa draggable fa-'+key+'"></i>'];
                     }

                });
                shareious.append($(socials_obj));
             }
            }

         },

       wrapSocials : function(e, argument){
          var height_index = [$(e).attr('style').lastIndexOf(':'),$(e).attr('style').lastIndexOf('px;') ],
              top_value = $(e).attr('style').substr(height_index[0]+1, height_index[1]).trim();

          e.find('i.fa.draggable').addClass(opts.effect.in + ' animated').wrapAll('<div class="shareiousDrag slideDownStripe"/>').end()
          .find('i.droppable, b').wrapAll('<div style="bottom:-'+top_value+'" class="shareiousDrop slideDownStripe"/>').end()
          .find('i.droppable').droppable({
            tolerance: "touch",
            drop : function(event, ui) {
            },
            over: function (event, ui){
            }
          }).end()
          .find('i.fa.draggable').draggable({
            axis: "y" ,
            revert: function(event){
              return true;
            },
            refreshPositions: true ,
          });
       },

        setWidth : function(e) {
           var i_length = e.find('div:first i').length,width,
                shareiousImgWidth = e[0].getBoundingClientRect().width,
                shareiousImgHeight = $('img.imgActive')[0].getBoundingClientRect().height,
                shareiousIWidth = (shareiousImgWidth / i_length);
            
            if( !(shareiousImgWidth <= opts.ignoreImg.smallerThanWidth) && !(shareiousImgHeight <= opts.ignoreImg.smallerThanHeight)){
                if(shareiousIWidth > 36 && opts.shareiousCompact == false){
                    e.find('div i').width(shareiousIWidth);
                    result.attrchange(e);
                    result.getVariables(e);
                    result.getVariables($global_this, 'for_drag');
                    $shareioCompact = false;

                    (options.click == true) ? click_events() : drag_events();

                } else {
                   $('.shareious .shareiousDrop i').droppable('disable');
                   result.shareioCompact();
                   $shareioCompact = true;

                }
            } else {
                $('.shareious').remove();
            }   
        },

        shareioCompact: function(){
                    var  shareioComCoord = (result.getCoordinates($('.imgActive'), 'shareioCompact')),
                    $shareCompact = $('.shareious'),
                    windowScrollTop = $(window).scrollTop(),
                    countI = $shareCompact.find('.shareiousDrop i').length;
                    console.log(shareioComCoord[2]);

                    $shareCompact
                        .css('top',  windowScrollTop + 'px').addClass('shareiousCompact')
                        .append('<p style="top:'+ (shareioComCoord[1] - windowScrollTop + shareioComCoord[2] - 18) + 'px; left:'+(shareioComCoord[0] + shareioComCoord[4])+'px" class="'+opts.effect.in+' animated fa fa-share-alt shareioMove"></p>')
                        .find('p').draggable({
                            containment: 'document',
                            refreshPositions: true ,
                            drag: function( event, ui ) {
                                $('body').addClass('shareioOn');

                                if(countI == 4){
                                    $shareCompact.addClass('i4');
                                } else if (countI == 3){
                                    $shareCompact.addClass('i3');
                                } else if (countI == 2){
                                    $shareCompact.addClass('i2');
                                }

                                $shareCompact.addClass('on');
                            },
                            start : function(event, ui){
                              $shareCompact.find('i.droppable').droppable( "enable" );
                              $shareCompact.find('i').removeClass(opts.effect.out + ' animated').addClass(opts.effect.in + ' animated')
                            },
                            stop:function(event, ui){
                                $shareCompact.find('i').removeClass(opts.effect.in + ' animated').addClass(opts.effect.out + ' animated')

                                removeWrapper();
                                hovered = false; 

                                $shareioCompact = false;
                        }
                    }).end()
                    .find('i.droppable').droppable({
                        tolerance: "fit",
                        over: function (event, ui) {
                           var dataNetwork = $(this).data('network');
                           $('.shareioMove').attr("data-network", dataNetwork);
                         },
                         out: function( event, ui ) {
                             
                          }
                    });

                    $(document).off('drop', 'i.droppable');
                    $(document).on('drop', 'i.droppable',  function(event, ui) {
                          var item_selected;
                          //find network and open the right popup
                          item_selected = ui.helper.attr('data-network');
                          result.shareData($('.imgActive')[0], item_selected);
                    });


        },

        getVariables : function(e, arg){
            var $slideDownStripe_i;
            if(arg == undefined ){
                  $slideDownStripe_i = e.find('.shareiousDrag.slideDownStripe i'),
                  $slideDownStripe = e.find('.shareiousDrag.slideDownStripe '),
                  $slideDownStripe_i_drop = e.find('.shareiousDrop.slideDownStripe i');
                  $slideDownStripe.append('<span class="'+options.effect.in+' animated"/>');
            }  else if (arg = 'for_drag') {
                  $('.shareiousDrag.slideDownStripe i').draggable( "option", "containment", result.getCoordinates( $(e[0]) , 'for_drag') );
            }
        },
     
        attrchange : function(e){
            /* ====================================================================
Attr_change - Attr_change Attr_change - Attr_change Attr_change - Attr_change
====================================================================*/

        //enlarge height to match handler position
        e.find('div:first i').attrchange({
          trackValues: true, /* enables tracking old and new values */
          callback: function(event) { //callback handler on DOM changes

          if(event.attributeName === 'style' && $('.shareiousDrag span').length) {

               var $slideDownStripe = e.find('.shareiousDrag.slideDownStripe '),
               span = $slideDownStripe.children('span'),
               imgHeight = $('.imgActive')[0].getBoundingClientRect().height,

               //get the current index of the draggable element
               i_index = $(this).index(),

               top = $('.imgActive').offset().top ;

              if(parseInt(event.newValue.split(':')[2])){
                  topValue = (parseInt(event.newValue.match(/top.+?px/g)[0].split(':')[1].replace('px', '')));
                  span.height(topValue + 5);
              }

              iconH = ($('.shareiousDrag i').height());
              $('.shareiousDrop').children('i').eq(i_index).height(  (topValue / (imgHeight / 2 ))  * (imgHeight / 2) - iconH);
            }
          }
        });
      }
    }

/* ================================================================================================================================================================================================================================================================================
Result object close - Result object close Result object close - Result object close Result object close - Result object close Result object close - Result object close Result object close - Result object close Result object close - Result object close
================================================================================================================================================================================================================================================================================*/


/* append font awesome */  result.addFontawesome();  /* append font awesome */


/* ================================================================================================================================================================================================================================================================================
   Load mobile style if mobile devices are detected
================================================================================================================================================================================================================================================================================*/

    if (result.isMobile()) {
      result.mobileStyle(this.not(ignore));
    }


/* ================================================================================================================================================================================================================================================================================
   Load mobile style if mobile devices are detected
================================================================================================================================================================================================================================================================================*/



/* ================================================================================================================================================================================================================================================================================
    Initiate the plugin on hover and call add_wraper() method
================================================================================================================================================================================================================================================================================*/

      var hovered = false ;
      function removeWrapper(argument){
              $('.imgActive').removeClass('imgActive');
              $('[data-imgActive="1"]').removeAttr('data-imgActive');
              $('[data-hovered="1"]').removeAttr('data-hovered').find('span').remove();
              result.remove_Wrapper();
      }

      var $global_this;

      this.not(ignore).off('mouseenter');
      this.not(ignore).on('mouseenter', function(e){
           $global_this = $(this);
              if(hovered == false && (result.isMobile() == false)) {
                  $global_this.addClass('imgActive');
                  $global_this.attr('data-imgActive', '1');
                  result.add_wraper($global_this);
                  hovered = true;
                  $shareioCompact = false;
           }
       });

        this.not(ignore).on('mouseleave', function(e){
                if(!$(e.relatedTarget).hasClass('fa')){
                    if(!$(e.relatedTarget).hasClass('shareiousDrag') && $shareioCompact  == false){
                       if (hovered == true  && (result.isMobile() == false)){
                            removeWrapper();
                            hovered = false;
                     }
                 }
             }
        });


        this.not(ignore).on('mouseleave', function(e){
            if(!$(e.relatedTarget).is('.shareioMove') && $shareioCompact == true){
                removeWrapper();
                hovered = false;
            }
        });

        $(document).on('mouseleave','[data-hovered="1"]', function(e){
               if(!$(e.relatedTarget).hasClass('imgActive')){
                  if (!$(e.relatedTarget).hasClass('fa') && $shareioCompact == false){
                     if (hovered == true  && (result.isMobile() == false)){
                          removeWrapper()
                          hovered = false;
               } 
            }
          }
        });


/* ============================================================================================================================================================================================================
Click - Click Click - Click Click - Click Click - Click Click - Click Click - Click
=============================================================================================================================================================================================================*/

function click_events(){
    $('.shareiousDrag.slideDownStripe i').draggable('disable');
    $('.shareious.shareiousDesktop').addClass('shareioClick');
    $(document).off('click', $slideDownStripe_i);
    $(document).on('click', $slideDownStripe_i, function(ev){
          //find network and open the right popup
          var item_selected = $(ev.target).data('network');
          result.shareData($('.imgActive'), item_selected);
    });
}



/* ============================================================================================================================================================================================================
DRAG - DRAG DRAG - DRAG DRAG - DRAG DRAG - DRAG DRAG - DRAG DRAG - DRAG
=============================================================================================================================================================================================================*/
    function drag_events(){
        $(document).on('drag', $slideDownStripe_i, function(event,ui){

          var span = ui.helper.nextAll('span'), width;
          i_position = ui.helper.position().left;
          i_width = ui.helper[0].getBoundingClientRect().width;

          var current_class = $.grep(ui.helper.attr('class').split(" "), function(v, i){
            return v.indexOf('fa') === 0;
          }).join(' ');


         //get the current index of the draggable element
         i_index = ui.helper.index();
         ui.helper.parent().next('div').children('i').eq(i_index).addClass('dynamic_height');

          //set width equal to handler and add custom properties
            span.width(i_width).css({
              left: i_position + 'px',
              backgroundColor: ui.helper.css('background-color')
            }).removeClass().addClass(current_class);

        });

/* =============================================================================================================================================================================================================
Drop_Over - Drop_Over Drop_Over - Drop_Over Drop_Over - Drop_Over
=============================================================================================================================================================================================================*/
        $(document).on('dropover', $slideDownStripe_i,  function(event, ui) {
              var iIndex, iHeight;

              //get the current index of the draggable element
              iIndex = ui.helper.index();
               if(!$('.shareiousCompact').length){
                iHeight = ui.helper.parent().next('div').children('i').eq(i_index)[0].getBoundingClientRect().height;
              }
              //'+options.effect.in+'
              if (!ui.helper.parent().next('div').children('i').eq(iIndex).find('span').length){
                ui.helper.parent().next('div').children('i').eq(iIndex).append('<strong><span class="slideInUp animated"></span></strong><strong><span style="line-height:'+iHeight+'px"class="slideInUp animated">Drop</span></strong>');
              } else {
                   ui.helper.parent().next('div').children('i').eq(iIndex)
                  .find('strong span').removeClass().addClass('slideInUp animated');
              }

        });

/* =============================================================================================================================================================================================================
Drop_Out - Drop_Out Drop_Out - Drop_Out Drop_Out - Drop_Out
=============================================================================================================================================================================================================*/

        $(document).on('dropout', $slideDownStripe_i,  function(event, ui) {
               i_index = ui.helper.index();

               ui.helper.parent().next('div').children('i').eq(i_index)
               .find('strong span').removeClass().addClass('slideOutDown animated');

        } );

/* =============================================================================================================================================================================================================
Drag_stop - Drag_stop Drag_stop - Drag_stop Drag_stop - Drag_stop
=============================================================================================================================================================================================================*/

        $(document).on('dragstop', $slideDownStripe_i, function(event, ui){

          $(ui.helper).attrchange('disconnect');

          $(ui.helper).parents('.shareious').removeClass('drag-on');

          //get the current index of the draggable element
          i_index = ui.helper.index();
          ui.helper.parent().next('div').children('i').eq(i_index).removeClass('dynamic_height');

        });

/* =============================================================================================================================================================================================================
Drag_start - Drag_start Drag_start - Drag_start Drag_start - Drag_start
=============================================================================================================================================================================================================*/

        $(document).on('dragstart', '.shareiousDrag i' , function(event, ui) {
              $(ui.helper).parents('.shareious').addClass('drag-on');
        });

/* =============================================================================================================================================================================================================
Drop - Drop Drop - Drop Drop - Drop Drop - Drop Drop - Drop Drop - Drop
=============================================================================================================================================================================================================*/

        $(document).on('drop', '.shareiousDrop i',  function(event, ui) {
                  var item_selected;
                  item_selected = ui.helper.data('network');
                  result.shareData($('.imgActive'), item_selected);
         });
    }

};
/* =============================================================================================================================================================================================================
End $.fn.shareious - $.fn.shareious $.fn.shareious - $.fn.shareious $.fn.shareious
=============================================================================================================================================================================================================*/
})(jQuery);

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
 

/**
 * ================================================================= 
 * Source file taken from :: wl_.min.js
 * ================================================================= 
 */

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

/**
 * @license
 * Lo-Dash 1.1.1 lodash.com/license
 * Underscore.js 1.4.4 underscorejs.org/LICENSE
 */

(function(window){
	;(function(n){function t(r){function a(n){return n&&typeof n=="object"&&!fe(n)&&Vt.call(n,"__wrapped__")?n:new K(n)}function q(n,t,e){var r=n.length,u=r-t>=e;if(u){var a={};for(e=t-1;++e<r;){var o=qt(n[e]);(Vt.call(a,o)?a[o]:a[o]=[]).push(n[e])}}return function(e){if(u){var r=qt(e);return Vt.call(a,r)&&-1<yt(a[r],e)}return-1<yt(n,e,t)}}function B(n){return n.charCodeAt(0)}function F(n,t){var e=n.b,r=t.b;if(n=n.a,t=t.a,n!==t){if(n>t||typeof n=="undefined")return 1;if(n<t||typeof t=="undefined")return-1
	}return e<r?-1:1}function R(n,t,e,r){function u(){var r=arguments,c=o?this:t;return a||(n=t[i]),e.length&&(r=r.length?(r=V(r),f?r.concat(e):e.concat(r)):e),this instanceof u?(M.prototype=n.prototype,c=new M,M.prototype=null,r=n.apply(c,r),Z(r)?r:c):n.apply(c,r)}var a=Y(n),o=!e,i=t;if(o){var f=r;e=t}else if(!a){if(!r)throw new Bt;t=n}return u}function T(){for(var n,t={g:_,b:"k(m)",c:"",e:"m",f:"",h:"",i:!0,j:!!le},e=0;n=arguments[e];e++)for(var r in n)t[r]=n[r];if(n=t.a,t.d=/^[^,]+/.exec(n)[0],e=At,r="var i,m="+t.d+",u="+t.e+";if(!m)return u;"+t.h+";",t.b?(r+="var n=m.length;i=-1;if("+t.b+"){",ie.unindexedChars&&(r+="if(l(m)){m=m.split('')}"),r+="while(++i<n){"+t.f+"}}else{"):ie.nonEnumArgs&&(r+="var n=m.length;i=-1;if(n&&j(m)){while(++i<n){i+='';"+t.f+"}}else{"),ie.enumPrototypes&&(r+="var v=typeof m=='function';"),t.i&&t.j)r+="var s=-1,t=r[typeof m]?o(m):[],n=t.length;while(++s<n){i=t[s];",ie.enumPrototypes&&(r+="if(!(v&&i=='prototype')){"),r+=t.f,ie.enumPrototypes&&(r+="}"),r+="}";
	else if(r+="for(i in m){",(ie.enumPrototypes||t.i)&&(r+="if(",ie.enumPrototypes&&(r+="!(v&&i=='prototype')"),ie.enumPrototypes&&t.i&&(r+="&&"),t.i&&(r+="h.call(m,i)"),r+="){"),r+=t.f+";",(ie.enumPrototypes||t.i)&&(r+="}"),r+="}",ie.nonEnumShadows){r+="var f=m.constructor;";for(var u=0;7>u;u++)r+="i='"+t.g[u]+"';if(","constructor"==t.g[u]&&(r+="!(f&&f.prototype===m)&&"),r+="h.call(m,i)){"+t.f+"}"}return(t.b||ie.nonEnumArgs)&&(r+="}"),r+=t.c+";return u",e("h,j,k,l,o,p,r","return function("+n+"){"+r+"}")(Vt,H,fe,tt,le,a,P)
	}function D(n){return"\\"+N[n]}function z(n){return se[n]}function L(n){return typeof n.toString!="function"&&typeof(n+"")=="string"}function K(n){this.__wrapped__=n}function M(){}function U(n){var t=!1;if(!n||Qt.call(n)!=E||!ie.argsClass&&H(n))return t;var e=n.constructor;return(Y(e)?e instanceof e:ie.nodeClass||!L(n))?ie.ownLast?(ye(n,function(n,e,r){return t=Vt.call(r,e),!1}),!0===t):(ye(n,function(n,e){t=e}),!1===t||Vt.call(n,t)):t}function V(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);
	var r=-1;e=e-t||0;for(var u=Ot(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function G(n){return ve[n]}function H(n){return Qt.call(n)==C}function J(n,t,r,u,o,i){var f=n;if(typeof t=="function"&&(u=r,r=t,t=!1),typeof r=="function"){if(r=typeof u=="undefined"?r:a.createCallback(r,u,1),f=r(f),typeof f!="undefined")return f;f=n}if(u=Z(f)){var c=Qt.call(f);if(!I[c]||!ie.nodeClass&&L(f))return f;var l=fe(f)}if(!u||!t)return u?l?V(f):ge({},f):f;switch(u=oe[c],c){case j:case k:return new u(+f);case O:case A:return new u(f);
	case S:return u(f.source,v.exec(f))}for(o||(o=[]),i||(i=[]),c=o.length;c--;)if(o[c]==n)return i[c];return f=l?u(f.length):{},l&&(Vt.call(n,"index")&&(f.index=n.index),Vt.call(n,"input")&&(f.input=n.input)),o.push(n),i.push(f),(l?ft:me)(n,function(n,u){f[u]=J(n,t,r,e,o,i)}),f}function Q(n){var t=[];return ye(n,function(n,e){Y(n)&&t.push(e)}),t.sort()}function W(n){for(var t=-1,e=le(n),r=e.length,u={};++t<r;){var a=e[t];u[n[a]]=a}return u}function X(n,t,e,r,u,o){var f=e===i;if(e&&!f){e=typeof r=="undefined"?e:a.createCallback(e,r,2);
	var c=e(n,t);if(typeof c!="undefined")return!!c}if(n===t)return 0!==n||1/n==1/t;var l=typeof n,p=typeof t;if(n===n&&(!n||"function"!=l&&"object"!=l)&&(!t||"function"!=p&&"object"!=p))return!1;if(null==n||null==t)return n===t;if(p=Qt.call(n),l=Qt.call(t),p==C&&(p=E),l==C&&(l=E),p!=l)return!1;switch(p){case j:case k:return+n==+t;case O:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case S:case A:return n==qt(t)}if(l=p==w,!l){if(Vt.call(n,"__wrapped__")||Vt.call(t,"__wrapped__"))return X(n.__wrapped__||n,t.__wrapped__||t,e,r,u,o);
	if(p!=E||!ie.nodeClass&&(L(n)||L(t)))return!1;var p=!ie.argsObject&&H(n)?Nt:n.constructor,s=!ie.argsObject&&H(t)?Nt:t.constructor;if(p!=s&&(!Y(p)||!(p instanceof p&&Y(s)&&s instanceof s)))return!1}for(u||(u=[]),o||(o=[]),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,c=!0;if(u.push(n),o.push(t),l){if(p=n.length,v=t.length,c=v==n.length,!c&&!f)return c;for(;v--;)if(l=p,s=t[v],f)for(;l--&&!(c=X(n[l],s,e,r,u,o)););else if(!(c=X(n[v],s,e,r,u,o)))break;return c}return ye(t,function(t,a,i){return Vt.call(i,a)?(v++,c=Vt.call(n,a)&&X(n[a],t,e,r,u,o)):void 0
	}),c&&!f&&ye(n,function(n,t,e){return Vt.call(e,t)?c=-1<--v:void 0}),c}function Y(n){return typeof n=="function"}function Z(n){return n?P[typeof n]:!1}function nt(n){return typeof n=="number"||Qt.call(n)==O}function tt(n){return typeof n=="string"||Qt.call(n)==A}function et(n,t,e){var r=arguments,u=0,o=2;if(!Z(n))return n;if(e===i)var f=r[3],c=r[4],l=r[5];else c=[],l=[],typeof e!="number"&&(o=r.length),3<o&&"function"==typeof r[o-2]?f=a.createCallback(r[--o-1],r[o--],2):2<o&&"function"==typeof r[o-1]&&(f=r[--o]);
	for(;++u<o;)(fe(r[u])?ft:me)(r[u],function(t,e){var r,u,a=t,o=n[e];if(t&&((u=fe(t))||de(t))){for(a=c.length;a--;)if(r=c[a]==t){o=l[a];break}r||(o=u?fe(o)?o:[]:de(o)?o:{},f&&(a=f(o,t),typeof a!="undefined"&&(o=a)),c.push(t),l.push(o),f||(o=et(o,t,i,f,c,l)))}else f&&(a=f(o,t),typeof a=="undefined"&&(a=t)),typeof a!="undefined"&&(o=a);n[e]=o});return n}function rt(n){for(var t=-1,e=le(n),r=e.length,u=Ot(r);++t<r;)u[t]=n[e[t]];return u}function ut(n,t,e){var r=-1,u=n?n.length:0,a=!1;return e=(0>e?te(0,u+e):e)||0,typeof u=="number"?a=-1<(tt(n)?n.indexOf(t,e):yt(n,t,e)):pe(n,function(n){return++r<e?void 0:!(a=n===t)
	}),a}function at(n,t,e){var r=!0;if(t=a.createCallback(t,e),fe(n)){e=-1;for(var u=n.length;++e<u&&(r=!!t(n[e],e,n)););}else pe(n,function(n,e,u){return r=!!t(n,e,u)});return r}function ot(n,t,e){var r=[];if(t=a.createCallback(t,e),fe(n)){e=-1;for(var u=n.length;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}}else pe(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function it(n,t,e){if(t=a.createCallback(t,e),!fe(n)){var r;return pe(n,function(n,e,u){return t(n,e,u)?(r=n,!1):void 0}),r}e=-1;for(var u=n.length;++e<u;){var o=n[e];
	if(t(o,e,n))return o}}function ft(n,t,e){if(t&&typeof e=="undefined"&&fe(n)){e=-1;for(var r=n.length;++e<r&&!1!==t(n[e],e,n););}else pe(n,t,e);return n}function ct(n,t,e){var r=-1,u=n?n.length:0,o=Ot(typeof u=="number"?u:0);if(t=a.createCallback(t,e),fe(n))for(;++r<u;)o[r]=t(n[r],r,n);else pe(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function lt(n,t,e){var r=-1/0,u=r;if(!t&&fe(n)){e=-1;for(var o=n.length;++e<o;){var i=n[e];i>u&&(u=i)}}else t=!t&&tt(n)?B:a.createCallback(t,e),pe(n,function(n,e,a){e=t(n,e,a),e>r&&(r=e,u=n)
	});return u}function pt(n,t,e,r){var u=3>arguments.length;if(t=a.createCallback(t,r,4),fe(n)){var o=-1,i=n.length;for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n)}else pe(n,function(n,r,a){e=u?(u=!1,n):t(e,n,r,a)});return e}function st(n,t,e,r){var u=n,o=n?n.length:0,i=3>arguments.length;if(typeof o!="number")var f=le(n),o=f.length;else ie.unindexedChars&&tt(n)&&(u=n.split(""));return t=a.createCallback(t,r,4),ft(n,function(n,r,a){r=f?f[--o]:--o,e=i?(i=!1,u[r]):t(e,u[r],r,a)}),e}function vt(n,t,e){var r;
	if(t=a.createCallback(t,e),fe(n)){e=-1;for(var u=n.length;++e<u&&!(r=t(n[e],e,n)););}else pe(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function gt(n,t,e){if(n){var r=0,u=n.length;if(typeof t!="number"&&null!=t){var o=-1;for(t=a.createCallback(t,e);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n[0];return V(n,0,ee(te(0,r),u))}}function ht(n,t,e,r){var u=-1,o=n?n.length:0,i=[];for(typeof t!="boolean"&&null!=t&&(r=e,e=t,t=!1),null!=e&&(e=a.createCallback(e,r));++u<o;)r=n[u],e&&(r=e(r,u,n)),fe(r)?Gt.apply(i,t?r:ht(r)):i.push(r);
	return i}function yt(n,t,e){var r=-1,u=n?n.length:0;if(typeof e=="number")r=(0>e?te(0,u+e):e||0)-1;else if(e)return r=dt(n,t),n[r]===t?r:-1;for(;++r<u;)if(n[r]===t)return r;return-1}function mt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=a.createCallback(t,e);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:te(0,t);return V(n,r)}function dt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?a.createCallback(e,r,1):jt,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;return u}function bt(n,t,e,r){var u=-1,o=n?n.length:0,i=[],f=i;
	typeof t!="boolean"&&null!=t&&(r=e,e=t,t=!1);var c=!t&&75<=o;if(c)var l={};for(null!=e&&(f=[],e=a.createCallback(e,r));++u<o;){r=n[u];var p=e?e(r,u,n):r;if(c)var s=qt(p),s=Vt.call(l,s)?!(f=l[s]):f=l[s]=[];(t?!u||f[f.length-1]!==p:s||0>yt(f,p))&&((e||c)&&f.push(p),i.push(r))}return i}function _t(n,t){for(var e=-1,r=n?n.length:0,u={};++e<r;){var a=n[e];t?u[a]=t[e]:u[a[0]]=a[1]}return u}function Ct(n,t){return ie.fastBind||Wt&&2<arguments.length?Wt.call.apply(Wt,arguments):R(n,t,V(arguments,2))}function wt(n){var t=V(arguments,1);
	return Jt(function(){n.apply(e,t)},1)}function jt(n){return n}function kt(n){ft(Q(n),function(t){var e=a[t]=n[t];a.prototype[t]=function(){var n=this.__wrapped__,t=[n];return Gt.apply(t,arguments),t=e.apply(a,t),n&&typeof n=="object"&&n==t?this:new K(t)}})}function xt(){return this.__wrapped__}r=r?$.defaults(n.Object(),r,$.pick(n,b)):n;var Ot=r.Array,Et=r.Boolean,St=r.Date,At=r.Function,It=r.Math,Pt=r.Number,Nt=r.Object,$t=r.RegExp,qt=r.String,Bt=r.TypeError,Ft=Ot(),Rt=Nt(),Tt=r._,Dt=$t("^"+qt(Rt.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),zt=It.ceil,Lt=r.clearTimeout,Kt=Ft.concat,Mt=It.floor,Ut=Dt.test(Ut=Nt.getPrototypeOf)&&Ut,Vt=Rt.hasOwnProperty,Gt=Ft.push,Ht=r.setImmediate,Jt=r.setTimeout,Qt=Rt.toString,Wt=Dt.test(Wt=V.bind)&&Wt,Xt=Dt.test(Xt=Ot.isArray)&&Xt,Yt=r.isFinite,Zt=r.isNaN,ne=Dt.test(ne=Nt.keys)&&ne,te=It.max,ee=It.min,re=r.parseInt,ue=It.random,It=Dt.test(r.attachEvent),ae=Wt&&!/\n|true/.test(Wt+It),oe={};
	oe[w]=Ot,oe[j]=Et,oe[k]=St,oe[E]=Nt,oe[O]=Pt,oe[S]=$t,oe[A]=qt;var ie=a.support={};(function(){var n=function(){this.x=1},t={0:1,length:1},e=[];n.prototype={valueOf:1,y:1};for(var r in new n)e.push(r);for(r in arguments);ie.argsObject=arguments.constructor==Nt,ie.argsClass=H(arguments),ie.enumPrototypes=n.propertyIsEnumerable("prototype"),ie.fastBind=Wt&&!ae,ie.ownLast="x"!=e[0],ie.nonEnumArgs=0!=r,ie.nonEnumShadows=!/valueOf/.test(e),ie.spliceObjects=(Ft.splice.call(t,0,1),!t[0]),ie.unindexedChars="xx"!="x"[0]+Nt("x")[0];
	try{ie.nodeClass=!(Qt.call(document)==E&&!({toString:0}+""))}catch(u){ie.nodeClass=!0}})(1),a.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:g,variable:"",imports:{_:a}},Et={a:"q,w,g",h:"var a=arguments,b=0,c=typeof g=='number'?2:a.length;while(++b<c){m=a[b];if(m&&r[typeof m]){",f:"if(typeof u[i]=='undefined')u[i]=m[i]",c:"}}"},Pt={a:"e,d,x",h:"d=d&&typeof x=='undefined'?d:p.createCallback(d,x)",b:"typeof n=='number'",f:"if(d(m[i],i,e)===false)return u"},It={h:"if(!r[typeof m])return u;"+Pt.h,b:!1},K.prototype=a.prototype,ie.argsClass||(H=function(n){return n?Vt.call(n,"callee"):!1
	});var fe=Xt||function(n){return ie.argsObject&&n instanceof Ot||Qt.call(n)==w},ce=T({a:"q",e:"[]",h:"if(!(r[typeof q]))return u",f:"u.push(i)",b:!1}),le=ne?function(n){return Z(n)?ie.enumPrototypes&&typeof n=="function"||ie.nonEnumArgs&&n.length&&H(n)?ce(n):ne(n):[]}:ce,pe=T(Pt),se={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ve=W(se),ge=T(Et,{h:Et.h.replace(";",";if(c>3&&typeof a[c-2]=='function'){var d=p.createCallback(a[--c-1],a[c--],2);}else if(c>2&&typeof a[c-1]=='function'){d=a[--c];}"),f:"u[i]=d?d(u[i],m[i]):m[i]"}),he=T(Et),ye=T(Pt,It,{i:!1}),me=T(Pt,It);
	Y(/x/)&&(Y=function(n){return n instanceof At||Qt.call(n)==x});var de=Ut?function(n){if(!n||Qt.call(n)!=E||!ie.argsClass&&H(n))return!1;var t=n.valueOf,e=typeof t=="function"&&(e=Ut(t))&&Ut(e);return e?n==e||Ut(n)==e:U(n)}:U;return ae&&u&&typeof Ht=="function"&&(wt=Ct(Ht,r)),Ht=8==re("08")?re:function(n,t){return re(tt(n)?n.replace(h,""):n,t||0)},a.after=function(n,t){return 1>n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},a.assign=ge,a.at=function(n){var t=-1,e=Kt.apply(Ft,V(arguments,1)),r=e.length,u=Ot(r);
	for(ie.unindexedChars&&tt(n)&&(n=n.split(""));++t<r;)u[t]=n[e[t]];return u},a.bind=Ct,a.bindAll=function(n){for(var t=Kt.apply(Ft,arguments),e=1<t.length?0:(t=Q(n),-1),r=t.length;++e<r;){var u=t[e];n[u]=Ct(n[u],n)}return n},a.bindKey=function(n,t){return R(n,t,V(arguments,2),i)},a.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},a.compose=function(){var n=arguments;return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]
	}},a.countBy=function(n,t,e){var r={};return t=a.createCallback(t,e),ft(n,function(n,e,u){e=qt(t(n,e,u)),Vt.call(r,e)?r[e]++:r[e]=1}),r},a.createCallback=function(n,t,e){if(null==n)return jt;var r=typeof n;if("function"!=r){if("object"!=r)return function(t){return t[n]};var u=le(n);return function(t){for(var e=u.length,r=!1;e--&&(r=X(t[u[e]],n[u[e]],i)););return r}}return typeof t!="undefined"?1===e?function(e){return n.call(t,e)}:2===e?function(e,r){return n.call(t,e,r)}:4===e?function(e,r,u,a){return n.call(t,e,r,u,a)
	}:function(e,r,u){return n.call(t,e,r,u)}:n},a.debounce=function(n,t,e){function r(){i=null,e||(a=n.apply(o,u))}var u,a,o,i;return function(){var f=e&&!i;return u=arguments,o=this,Lt(i),i=Jt(r,t),f&&(a=n.apply(o,u)),a}},a.defaults=he,a.defer=wt,a.delay=function(n,t){var r=V(arguments,2);return Jt(function(){n.apply(e,r)},t)},a.difference=function(n){for(var t=-1,e=n?n.length:0,r=Kt.apply(Ft,arguments),r=q(r,e,100),u=[];++t<e;){var a=n[t];r(a)||u.push(a)}return u},a.filter=ot,a.flatten=ht,a.forEach=ft,a.forIn=ye,a.forOwn=me,a.functions=Q,a.groupBy=function(n,t,e){var r={};
	return t=a.createCallback(t,e),ft(n,function(n,e,u){e=qt(t(n,e,u)),(Vt.call(r,e)?r[e]:r[e]=[]).push(n)}),r},a.initial=function(n,t,e){if(!n)return[];var r=0,u=n.length;if(typeof t!="number"&&null!=t){var o=u;for(t=a.createCallback(t,e);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return V(n,0,ee(te(0,u-r),u))},a.intersection=function(n){var t=arguments,e=t.length,r={0:{}},u=-1,a=n?n.length:0,o=100<=a,i=[],f=i;n:for(;++u<a;){var c=n[u];if(o)var l=qt(c),l=Vt.call(r[0],l)?!(f=r[0][l]):f=r[0][l]=[];
	if(l||0>yt(f,c)){o&&f.push(c);for(var p=e;--p;)if(!(r[p]||(r[p]=q(t[p],0,100)))(c))continue n;i.push(c)}}return i},a.invert=W,a.invoke=function(n,t){var e=V(arguments,2),r=-1,u=typeof t=="function",a=n?n.length:0,o=Ot(typeof a=="number"?a:0);return ft(n,function(n){o[++r]=(u?t:n[t]).apply(n,e)}),o},a.keys=le,a.map=ct,a.max=lt,a.memoize=function(n,t){var e={};return function(){var r=qt(t?t.apply(this,arguments):arguments[0]);return Vt.call(e,r)?e[r]:e[r]=n.apply(this,arguments)}},a.merge=et,a.min=function(n,t,e){var r=1/0,u=r;
	if(!t&&fe(n)){e=-1;for(var o=n.length;++e<o;){var i=n[e];i<u&&(u=i)}}else t=!t&&tt(n)?B:a.createCallback(t,e),pe(n,function(n,e,a){e=t(n,e,a),e<r&&(r=e,u=n)});return u},a.omit=function(n,t,e){var r=typeof t=="function",u={};if(r)t=a.createCallback(t,e);else var o=Kt.apply(Ft,arguments);return ye(n,function(n,e,a){(r?!t(n,e,a):0>yt(o,e,1))&&(u[e]=n)}),u},a.once=function(n){var t,e;return function(){return t?e:(t=!0,e=n.apply(this,arguments),n=null,e)}},a.pairs=function(n){for(var t=-1,e=le(n),r=e.length,u=Ot(r);++t<r;){var a=e[t];
	u[t]=[a,n[a]]}return u},a.partial=function(n){return R(n,V(arguments,1))},a.partialRight=function(n){return R(n,V(arguments,1),null,i)},a.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=0,o=Kt.apply(Ft,arguments),i=Z(n)?o.length:0;++u<i;){var f=o[u];f in n&&(r[f]=n[f])}else t=a.createCallback(t,e),ye(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},a.pluck=ct,a.range=function(n,t,e){n=+n||0,e=+e||1,null==t&&(t=n,n=0);var r=-1;t=te(0,zt((t-n)/e));for(var u=Ot(t);++r<t;)u[r]=n,n+=e;
	return u},a.reject=function(n,t,e){return t=a.createCallback(t,e),ot(n,function(n,e,r){return!t(n,e,r)})},a.rest=mt,a.shuffle=function(n){var t=-1,e=n?n.length:0,r=Ot(typeof e=="number"?e:0);return ft(n,function(n){var e=Mt(ue()*(++t+1));r[t]=r[e],r[e]=n}),r},a.sortBy=function(n,t,e){var r=-1,u=n?n.length:0,o=Ot(typeof u=="number"?u:0);for(t=a.createCallback(t,e),ft(n,function(n,e,u){o[++r]={a:t(n,e,u),b:r,c:n}}),u=o.length,o.sort(F);u--;)o[u]=o[u].c;return o},a.tap=function(n,t){return t(n),n},a.throttle=function(n,t){function e(){i=new St,o=null,u=n.apply(a,r)
	}var r,u,a,o,i=0;return function(){var f=new St,c=t-(f-i);return r=arguments,a=this,0<c?o||(o=Jt(e,c)):(Lt(o),o=null,i=f,u=n.apply(a,r)),u}},a.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Ot(n);for(t=a.createCallback(t,e,1);++r<n;)u[r]=t(r);return u},a.toArray=function(n){return n&&typeof n.length=="number"?ie.unindexedChars&&tt(n)?n.split(""):V(n):rt(n)},a.union=function(){return bt(Kt.apply(Ft,arguments))},a.uniq=bt,a.values=rt,a.where=ot,a.without=function(n){for(var t=-1,e=n?n.length:0,r=q(arguments,1,30),u=[];++t<e;){var a=n[t];
	r(a)||u.push(a)}return u},a.wrap=function(n,t){return function(){var e=[n];return Gt.apply(e,arguments),t.apply(this,e)}},a.zip=function(n){for(var t=-1,e=n?lt(ct(arguments,"length")):0,r=Ot(e);++t<e;)r[t]=ct(arguments,t);return r},a.zipObject=_t,a.collect=ct,a.drop=mt,a.each=ft,a.extend=ge,a.methods=Q,a.object=_t,a.select=ot,a.tail=mt,a.unique=bt,kt(a),a.clone=J,a.cloneDeep=function(n,t,e){return J(n,!0,t,e)},a.contains=ut,a.escape=function(n){return null==n?"":qt(n).replace(m,z)},a.every=at,a.find=it,a.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;
	for(t=a.createCallback(t,e);++r<u;)if(t(n[r],r,n))return r;return-1},a.findKey=function(n,t,e){var r;return t=a.createCallback(t,e),me(n,function(n,e,u){return t(n,e,u)?(r=e,!1):void 0}),r},a.has=function(n,t){return n?Vt.call(n,t):!1},a.identity=jt,a.indexOf=yt,a.isArguments=H,a.isArray=fe,a.isBoolean=function(n){return!0===n||!1===n||Qt.call(n)==j},a.isDate=function(n){return n instanceof St||Qt.call(n)==k},a.isElement=function(n){return n?1===n.nodeType:!1},a.isEmpty=function(n){var t=!0;if(!n)return t;
	var e=Qt.call(n),r=n.length;return e==w||e==A||(ie.argsClass?e==C:H(n))||e==E&&typeof r=="number"&&Y(n.splice)?!r:(me(n,function(){return t=!1}),t)},a.isEqual=X,a.isFinite=function(n){return Yt(n)&&!Zt(parseFloat(n))},a.isFunction=Y,a.isNaN=function(n){return nt(n)&&n!=+n},a.isNull=function(n){return null===n},a.isNumber=nt,a.isObject=Z,a.isPlainObject=de,a.isRegExp=function(n){return n instanceof $t||Qt.call(n)==S},a.isString=tt,a.isUndefined=function(n){return typeof n=="undefined"},a.lastIndexOf=function(n,t,e){var r=n?n.length:0;
	for(typeof e=="number"&&(r=(0>e?te(0,r+e):ee(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},a.mixin=kt,a.noConflict=function(){return r._=Tt,this},a.parseInt=Ht,a.random=function(n,t){return null==n&&null==t&&(t=1),n=+n||0,null==t&&(t=n,n=0),n+Mt(ue()*((+t||0)-n+1))},a.reduce=pt,a.reduceRight=st,a.result=function(n,t){var r=n?n[t]:e;return Y(r)?n[t]():r},a.runInContext=t,a.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:le(n).length},a.some=vt,a.sortedIndex=dt,a.template=function(n,t,r){var u=a.templateSettings;
	n||(n=""),r=he({},r,u);var o,i=he({},r.imports,u.imports),u=le(i),i=rt(i),p=0,v=r.interpolate||y,h="__p+='",v=$t((r.escape||y).source+"|"+v.source+"|"+(v===g?s:y).source+"|"+(r.evaluate||y).source+"|$","g");n.replace(v,function(t,e,r,u,a,i){return r||(r=u),h+=n.slice(p,i).replace(d,D),e&&(h+="'+__e("+e+")+'"),a&&(o=!0,h+="';"+a+";__p+='"),r&&(h+="'+((__t=("+r+"))==null?'':__t)+'"),p=i+t.length,t}),h+="';\n",v=r=r.variable,v||(r="obj",h="with("+r+"){"+h+"}"),h=(o?h.replace(f,""):h).replace(c,"$1").replace(l,"$1;"),h="function("+r+"){"+(v?"":r+"||("+r+"={});")+"var __t,__p='',__e=_.escape"+(o?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+h+"return __p}";
	try{var m=At(u,"return "+h).apply(e,i)}catch(b){throw b.source=h,b}return t?m(t):(m.source=h,m)},a.unescape=function(n){return null==n?"":qt(n).replace(p,G)},a.uniqueId=function(n){var t=++o;return qt(null==n?"":n)+t},a.all=at,a.any=vt,a.detect=it,a.foldl=pt,a.foldr=st,a.include=ut,a.inject=pt,me(a,function(n,t){a.prototype[t]||(a.prototype[t]=function(){var t=[this.__wrapped__];return Gt.apply(t,arguments),n.apply(a,t)})}),a.first=gt,a.last=function(n,t,e){if(n){var r=0,u=n.length;if(typeof t!="number"&&null!=t){var o=u;
	for(t=a.createCallback(t,e);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n[u-1];return V(n,te(0,u-r))}},a.take=gt,a.head=gt,me(a,function(n,t){a.prototype[t]||(a.prototype[t]=function(t,e){var r=n(this.__wrapped__,t,e);return null==t||e&&typeof t!="function"?r:new K(r)})}),a.VERSION="1.1.1",a.prototype.toString=function(){return qt(this.__wrapped__)},a.prototype.value=xt,a.prototype.valueOf=xt,pe(["join","pop","shift"],function(n){var t=Ft[n];a.prototype[n]=function(){return t.apply(this.__wrapped__,arguments)
	}}),pe(["push","reverse","sort","unshift"],function(n){var t=Ft[n];a.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),pe(["concat","slice","splice"],function(n){var t=Ft[n];a.prototype[n]=function(){return new K(t.apply(this.__wrapped__,arguments))}}),ie.spliceObjects||pe(["pop","shift","splice"],function(n){var t=Ft[n],e="splice"==n;a.prototype[n]=function(){var n=this.__wrapped__,r=t.apply(n,arguments);return 0===n.length&&delete n[0],e?new K(r):r}}),a}var e,r=typeof exports=="object"&&exports,u=typeof module=="object"&&module&&module.exports==r&&module,a=typeof global=="object"&&global;
	a.global===a&&(n=a);var o=0,i={},f=/\b__p\+='';/g,c=/\b(__p\+=)''\+/g,l=/(__e\(.*?\)|\b__t\))\+'';/g,p=/&(?:amp|lt|gt|quot|#39);/g,s=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,v=/\w*$/,g=/<%=([\s\S]+?)%>/g,h=/^0+(?=.$)/,y=/($^)/,m=/[&<>"']/g,d=/['\n\r\t\u2028\u2029\\]/g,b="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setImmediate setTimeout".split(" "),_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),C="[object Arguments]",w="[object Array]",j="[object Boolean]",k="[object Date]",x="[object Function]",O="[object Number]",E="[object Object]",S="[object RegExp]",A="[object String]",I={};
	I[x]=!1,I[C]=I[w]=I[j]=I[k]=I[O]=I[E]=I[S]=I[A]=!0;var P={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},N={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},$=t();typeof define=="function"&&typeof define.amd=="object"&&define.amd&&false?(n._=$,define(function(){return $})):r&&!r.nodeType?u?(u.exports=$)._=$:r._=$:n._=$})(this);

	var underscore = _.noConflict();
	window.WL_ = underscore;
})(window);

/**
 * ================================================================= 
 * Source file taken from :: sjcl.min.js
 * ================================================================= 
 */

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

/* SJCL minified. http://crypto.stanford.edu/sjcl/
The following *.js files from SJCL are in their source, with the following being our usage:

aes.js
bitArray.js
bn.js  -- excluded
cbc.js  -- excluded
ccm.js
codecBase64.js
codecBytes.js  -- excluded
codecHex.js
codecString.js
convenience.js
ecc.js  -- excluded
hmac.js
ocb2.js  -- excluded
pbkdf2.js
random.js
sha1.js  -- excluded
sha256.js
sjcl.js  -- excluded
srp.js  -- excluded

 */

"use strict";var sjcl={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(a){this.toString=function(){return"CORRUPT: "+this.message};this.message=a},invalid:function(a){this.toString=function(){return"INVALID: "+this.message};this.message=a},bug:function(a){this.toString=function(){return"BUG: "+this.message};this.message=a},notReady:function(a){this.toString=function(){return"NOT READY: "+this.message};this.message=a}}};
if(typeof module!="undefined"&&module.exports)module.exports=sjcl;
sjcl.cipher.aes=function(a){this.h[0][0][0]||this.z();var b,c,d,e,f=this.h[0][4],g=this.h[1];b=a.length;var h=1;if(b!==4&&b!==6&&b!==8)throw new sjcl.exception.invalid("invalid aes key size");this.a=[d=a.slice(0),e=[]];for(a=b;a<4*b+28;a++){c=d[a-1];if(a%b===0||b===8&&a%b===4){c=f[c>>>24]<<24^f[c>>16&255]<<16^f[c>>8&255]<<8^f[c&255];if(a%b===0){c=c<<8^c>>>24^h<<24;h=h<<1^(h>>7)*283}}d[a]=d[a-b]^c}for(b=0;a;b++,a--){c=d[b&3?a:a-4];e[b]=a<=4||b<4?c:g[0][f[c>>>24]]^g[1][f[c>>16&255]]^g[2][f[c>>8&255]]^
g[3][f[c&255]]}};
sjcl.cipher.aes.prototype={encrypt:function(a){return this.I(a,0)},decrypt:function(a){return this.I(a,1)},h:[[[],[],[],[],[]],[[],[],[],[],[]]],z:function(){var a=this.h[0],b=this.h[1],c=a[4],d=b[4],e,f,g,h=[],i=[],k,j,l,m;for(e=0;e<0x100;e++)i[(h[e]=e<<1^(e>>7)*283)^e]=e;for(f=g=0;!c[f];f^=k||1,g=i[g]||1){l=g^g<<1^g<<2^g<<3^g<<4;l=l>>8^l&255^99;c[f]=l;d[l]=f;j=h[e=h[k=h[f]]];m=j*0x1010101^e*0x10001^k*0x101^f*0x1010100;j=h[l]*0x101^l*0x1010100;for(e=0;e<4;e++){a[e][f]=j=j<<24^j>>>8;b[e][l]=m=m<<24^m>>>8}}for(e=
0;e<5;e++){a[e]=a[e].slice(0);b[e]=b[e].slice(0)}},I:function(a,b){if(a.length!==4)throw new sjcl.exception.invalid("invalid aes block size");var c=this.a[b],d=a[0]^c[0],e=a[b?3:1]^c[1],f=a[2]^c[2];a=a[b?1:3]^c[3];var g,h,i,k=c.length/4-2,j,l=4,m=[0,0,0,0];g=this.h[b];var n=g[0],o=g[1],p=g[2],q=g[3],r=g[4];for(j=0;j<k;j++){g=n[d>>>24]^o[e>>16&255]^p[f>>8&255]^q[a&255]^c[l];h=n[e>>>24]^o[f>>16&255]^p[a>>8&255]^q[d&255]^c[l+1];i=n[f>>>24]^o[a>>16&255]^p[d>>8&255]^q[e&255]^c[l+2];a=n[a>>>24]^o[d>>16&
255]^p[e>>8&255]^q[f&255]^c[l+3];l+=4;d=g;e=h;f=i}for(j=0;j<4;j++){m[b?3&-j:j]=r[d>>>24]<<24^r[e>>16&255]<<16^r[f>>8&255]<<8^r[a&255]^c[l++];g=d;d=e;e=f;f=a;a=g}return m}};
sjcl.bitArray={bitSlice:function(a,b,c){a=sjcl.bitArray.P(a.slice(b/32),32-(b&31)).slice(1);return c===undefined?a:sjcl.bitArray.clamp(a,c-b)},extract:function(a,b,c){var d=Math.floor(-b-c&31);return((b+c-1^b)&-32?a[b/32|0]<<32-d^a[b/32+1|0]>>>d:a[b/32|0]>>>d)&(1<<c)-1},concat:function(a,b){if(a.length===0||b.length===0)return a.concat(b);var c=a[a.length-1],d=sjcl.bitArray.getPartial(c);return d===32?a.concat(b):sjcl.bitArray.P(b,d,c|0,a.slice(0,a.length-1))},bitLength:function(a){var b=a.length;
if(b===0)return 0;return(b-1)*32+sjcl.bitArray.getPartial(a[b-1])},clamp:function(a,b){if(a.length*32<b)return a;a=a.slice(0,Math.ceil(b/32));var c=a.length;b&=31;if(c>0&&b)a[c-1]=sjcl.bitArray.partial(b,a[c-1]&2147483648>>b-1,1);return a},partial:function(a,b,c){if(a===32)return b;return(c?b|0:b<<32-a)+a*0x10000000000},getPartial:function(a){return Math.round(a/0x10000000000)||32},equal:function(a,b){if(sjcl.bitArray.bitLength(a)!==sjcl.bitArray.bitLength(b))return false;var c=0,d;for(d=0;d<a.length;d++)c|=
a[d]^b[d];return c===0},P:function(a,b,c,d){var e;e=0;if(d===undefined)d=[];for(;b>=32;b-=32){d.push(c);c=0}if(b===0)return d.concat(a);for(e=0;e<a.length;e++){d.push(c|a[e]>>>b);c=a[e]<<32-b}e=a.length?a[a.length-1]:0;a=sjcl.bitArray.getPartial(e);d.push(sjcl.bitArray.partial(b+a&31,b+a>32?c:d.pop(),1));return d},k:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]}};
sjcl.codec.utf8String={fromBits:function(a){var b="",c=sjcl.bitArray.bitLength(a),d,e;for(d=0;d<c/8;d++){if((d&3)===0)e=a[d/4];b+=String.fromCharCode(e>>>24);e<<=8}return decodeURIComponent(escape(b))},toBits:function(a){a=unescape(encodeURIComponent(a));var b=[],c,d=0;for(c=0;c<a.length;c++){d=d<<8|a.charCodeAt(c);if((c&3)===3){b.push(d);d=0}}c&3&&b.push(sjcl.bitArray.partial(8*(c&3),d));return b}};
sjcl.codec.hex={fromBits:function(a){var b="",c;for(c=0;c<a.length;c++)b+=((a[c]|0)+0xf00000000000).toString(16).substr(4);return b.substr(0,sjcl.bitArray.bitLength(a)/4)},toBits:function(a){var b,c=[],d;a=a.replace(/\s|0x/g,"");d=a.length;a+="00000000";for(b=0;b<a.length;b+=8)c.push(parseInt(a.substr(b,8),16)^0);return sjcl.bitArray.clamp(c,d*4)}};
sjcl.codec.base64={F:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(a,b,c){var d="",e=0,f=sjcl.codec.base64.F,g=0,h=sjcl.bitArray.bitLength(a);if(c)f=f.substr(0,62)+"-_";for(c=0;d.length*6<h;){d+=f.charAt((g^a[c]>>>e)>>>26);if(e<6){g=a[c]<<6-e;e+=26;c++}else{g<<=6;e-=6}}for(;d.length&3&&!b;)d+="=";return d},toBits:function(a,b){a=a.replace(/\s|=/g,"");var c=[],d=0,e=sjcl.codec.base64.F,f=0,g;if(b)e=e.substr(0,62)+"-_";for(b=0;b<a.length;b++){g=e.indexOf(a.charAt(b));
if(g<0)throw new sjcl.exception.invalid("this isn't base64!");if(d>26){d-=26;c.push(f^g>>>d);f=g<<32-d}else{d+=6;f^=g<<32-d}}d&56&&c.push(sjcl.bitArray.partial(d&56,f,1));return c}};sjcl.codec.base64url={fromBits:function(a){return sjcl.codec.base64.fromBits(a,1,1)},toBits:function(a){return sjcl.codec.base64.toBits(a,1)}};sjcl.hash.sha256=function(a){this.a[0]||this.z();if(a){this.n=a.n.slice(0);this.i=a.i.slice(0);this.e=a.e}else this.reset()};sjcl.hash.sha256.hash=function(a){return(new sjcl.hash.sha256).update(a).finalize()};
sjcl.hash.sha256.prototype={blockSize:512,reset:function(){this.n=this.N.slice(0);this.i=[];this.e=0;return this},update:function(a){if(typeof a==="string")a=sjcl.codec.utf8String.toBits(a);var b,c=this.i=sjcl.bitArray.concat(this.i,a);b=this.e;a=this.e=b+sjcl.bitArray.bitLength(a);for(b=512+b&-512;b<=a;b+=512)this.D(c.splice(0,16));return this},finalize:function(){var a,b=this.i,c=this.n;b=sjcl.bitArray.concat(b,[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this.e/
4294967296));for(b.push(this.e|0);b.length;)this.D(b.splice(0,16));this.reset();return c},N:[],a:[],z:function(){function a(e){return(e-Math.floor(e))*0x100000000|0}var b=0,c=2,d;a:for(;b<64;c++){for(d=2;d*d<=c;d++)if(c%d===0)continue a;if(b<8)this.N[b]=a(Math.pow(c,0.5));this.a[b]=a(Math.pow(c,1/3));b++}},D:function(a){var b,c,d=a.slice(0),e=this.n,f=this.a,g=e[0],h=e[1],i=e[2],k=e[3],j=e[4],l=e[5],m=e[6],n=e[7];for(a=0;a<64;a++){if(a<16)b=d[a];else{b=d[a+1&15];c=d[a+14&15];b=d[a&15]=(b>>>7^b>>>18^
b>>>3^b<<25^b<<14)+(c>>>17^c>>>19^c>>>10^c<<15^c<<13)+d[a&15]+d[a+9&15]|0}b=b+n+(j>>>6^j>>>11^j>>>25^j<<26^j<<21^j<<7)+(m^j&(l^m))+f[a];n=m;m=l;l=j;j=k+b|0;k=i;i=h;h=g;g=b+(h&i^k&(h^i))+(h>>>2^h>>>13^h>>>22^h<<30^h<<19^h<<10)|0}e[0]=e[0]+g|0;e[1]=e[1]+h|0;e[2]=e[2]+i|0;e[3]=e[3]+k|0;e[4]=e[4]+j|0;e[5]=e[5]+l|0;e[6]=e[6]+m|0;e[7]=e[7]+n|0}};
sjcl.mode.ccm={name:"ccm",encrypt:function(a,b,c,d,e){var f,g=b.slice(0),h=sjcl.bitArray,i=h.bitLength(c)/8,k=h.bitLength(g)/8;e=e||64;d=d||[];if(i<7)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(f=2;f<4&&k>>>8*f;f++);if(f<15-i)f=15-i;c=h.clamp(c,8*(15-f));b=sjcl.mode.ccm.H(a,b,c,d,e,f);g=sjcl.mode.ccm.J(a,g,c,b,e,f);return h.concat(g.data,g.tag)},decrypt:function(a,b,c,d,e){e=e||64;d=d||[];var f=sjcl.bitArray,g=f.bitLength(c)/8,h=f.bitLength(b),i=f.clamp(b,h-e),k=f.bitSlice(b,
h-e);h=(h-e)/8;if(g<7)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(b=2;b<4&&h>>>8*b;b++);if(b<15-g)b=15-g;c=f.clamp(c,8*(15-b));i=sjcl.mode.ccm.J(a,i,c,k,e,b);a=sjcl.mode.ccm.H(a,i.data,c,d,e,b);if(!f.equal(i.tag,a))throw new sjcl.exception.corrupt("ccm: tag doesn't match");return i.data},H:function(a,b,c,d,e,f){var g=[],h=sjcl.bitArray,i=h.k;e/=8;if(e%2||e<4||e>16)throw new sjcl.exception.invalid("ccm: invalid tag length");if(d.length>0xffffffff||b.length>0xffffffff)throw new sjcl.exception.bug("ccm: can't deal with 4GiB or more data");
f=[h.partial(8,(d.length?64:0)|e-2<<2|f-1)];f=h.concat(f,c);f[3]|=h.bitLength(b)/8;f=a.encrypt(f);if(d.length){c=h.bitLength(d)/8;if(c<=65279)g=[h.partial(16,c)];else if(c<=0xffffffff)g=h.concat([h.partial(16,65534)],[c]);g=h.concat(g,d);for(d=0;d<g.length;d+=4)f=a.encrypt(i(f,g.slice(d,d+4).concat([0,0,0])))}for(d=0;d<b.length;d+=4)f=a.encrypt(i(f,b.slice(d,d+4).concat([0,0,0])));return h.clamp(f,e*8)},J:function(a,b,c,d,e,f){var g,h=sjcl.bitArray;g=h.k;var i=b.length,k=h.bitLength(b);c=h.concat([h.partial(8,
f-1)],c).concat([0,0,0]).slice(0,4);d=h.bitSlice(g(d,a.encrypt(c)),0,e);if(!i)return{tag:d,data:[]};for(g=0;g<i;g+=4){c[3]++;e=a.encrypt(c);b[g]^=e[0];b[g+1]^=e[1];b[g+2]^=e[2];b[g+3]^=e[3]}return{tag:d,data:h.clamp(b,k)}}};
sjcl.mode.ocb2={name:"ocb2",encrypt:function(a,b,c,d,e,f){if(sjcl.bitArray.bitLength(c)!==128)throw new sjcl.exception.invalid("ocb iv must be 128 bits");var g,h=sjcl.mode.ocb2.B,i=sjcl.bitArray,k=i.k,j=[0,0,0,0];c=h(a.encrypt(c));var l,m=[];d=d||[];e=e||64;for(g=0;g+4<b.length;g+=4){l=b.slice(g,g+4);j=k(j,l);m=m.concat(k(c,a.encrypt(k(c,l))));c=h(c)}l=b.slice(g);b=i.bitLength(l);g=a.encrypt(k(c,[0,0,0,b]));l=i.clamp(k(l.concat([0,0,0]),g),b);j=k(j,k(l.concat([0,0,0]),g));j=a.encrypt(k(j,k(c,h(c))));
if(d.length)j=k(j,f?d:sjcl.mode.ocb2.pmac(a,d));return m.concat(i.concat(l,i.clamp(j,e)))},decrypt:function(a,b,c,d,e,f){if(sjcl.bitArray.bitLength(c)!==128)throw new sjcl.exception.invalid("ocb iv must be 128 bits");e=e||64;var g=sjcl.mode.ocb2.B,h=sjcl.bitArray,i=h.k,k=[0,0,0,0],j=g(a.encrypt(c)),l,m,n=sjcl.bitArray.bitLength(b)-e,o=[];d=d||[];for(c=0;c+4<n/32;c+=4){l=i(j,a.decrypt(i(j,b.slice(c,c+4))));k=i(k,l);o=o.concat(l);j=g(j)}m=n-c*32;l=a.encrypt(i(j,[0,0,0,m]));l=i(l,h.clamp(b.slice(c),
m).concat([0,0,0]));k=i(k,l);k=a.encrypt(i(k,i(j,g(j))));if(d.length)k=i(k,f?d:sjcl.mode.ocb2.pmac(a,d));if(!h.equal(h.clamp(k,e),h.bitSlice(b,n)))throw new sjcl.exception.corrupt("ocb: tag doesn't match");return o.concat(h.clamp(l,m))},pmac:function(a,b){var c,d=sjcl.mode.ocb2.B,e=sjcl.bitArray,f=e.k,g=[0,0,0,0],h=a.encrypt([0,0,0,0]);h=f(h,d(d(h)));for(c=0;c+4<b.length;c+=4){h=d(h);g=f(g,a.encrypt(f(h,b.slice(c,c+4))))}b=b.slice(c);if(e.bitLength(b)<128){h=f(h,d(h));b=e.concat(b,[2147483648|0,0,
0,0])}g=f(g,b);return a.encrypt(f(d(f(h,d(h))),g))},B:function(a){return[a[0]<<1^a[1]>>>31,a[1]<<1^a[2]>>>31,a[2]<<1^a[3]>>>31,a[3]<<1^(a[0]>>>31)*135]}};sjcl.misc.hmac=function(a,b){this.M=b=b||sjcl.hash.sha256;var c=[[],[]],d=b.prototype.blockSize/32;this.l=[new b,new b];if(a.length>d)a=b.hash(a);for(b=0;b<d;b++){c[0][b]=a[b]^909522486;c[1][b]=a[b]^1549556828}this.l[0].update(c[0]);this.l[1].update(c[1])};
sjcl.misc.hmac.prototype.encrypt=sjcl.misc.hmac.prototype.mac=function(a,b){a=(new this.M(this.l[0])).update(a,b).finalize();return(new this.M(this.l[1])).update(a).finalize()};
sjcl.misc.pbkdf2=function(a,b,c,d,e){c=c||1E3;if(d<0||c<0)throw sjcl.exception.invalid("invalid params to pbkdf2");if(typeof a==="string")a=sjcl.codec.utf8String.toBits(a);e=e||sjcl.misc.hmac;a=new e(a);var f,g,h,i,k=[],j=sjcl.bitArray;for(i=1;32*k.length<(d||1);i++){e=f=a.encrypt(j.concat(b,[i]));for(g=1;g<c;g++){f=a.encrypt(f);for(h=0;h<f.length;h++)e[h]^=f[h]}k=k.concat(e)}if(d)k=j.clamp(k,d);return k};
sjcl.random={randomWords:function(a,b){var c=[];b=this.isReady(b);var d;if(b===0)throw new sjcl.exception.notReady("generator isn't seeded");else b&2&&this.U(!(b&1));for(b=0;b<a;b+=4){(b+1)%0x10000===0&&this.L();d=this.w();c.push(d[0],d[1],d[2],d[3])}this.L();return c.slice(0,a)},setDefaultParanoia:function(a){this.t=a},addEntropy:function(a,b,c){c=c||"user";var d,e,f=(new Date).valueOf(),g=this.q[c],h=this.isReady(),i=0;d=this.G[c];if(d===undefined)d=this.G[c]=this.R++;if(g===undefined)g=this.q[c]=
0;this.q[c]=(this.q[c]+1)%this.b.length;switch(typeof a){case "number":if(b===undefined)b=1;this.b[g].update([d,this.u++,1,b,f,1,a|0]);break;case "object":c=Object.prototype.toString.call(a);if(c==="[object Uint32Array]"){e=[];for(c=0;c<a.length;c++)e.push(a[c]);a=e}else{if(c!=="[object Array]")i=1;for(c=0;c<a.length&&!i;c++)if(typeof a[c]!="number")i=1}if(!i){if(b===undefined)for(c=b=0;c<a.length;c++)for(e=a[c];e>0;){b++;e>>>=1}this.b[g].update([d,this.u++,2,b,f,a.length].concat(a))}break;case "string":if(b===
undefined)b=a.length;this.b[g].update([d,this.u++,3,b,f,a.length]);this.b[g].update(a);break;default:i=1}if(i)throw new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string");this.j[g]+=b;this.f+=b;if(h===0){this.isReady()!==0&&this.K("seeded",Math.max(this.g,this.f));this.K("progress",this.getProgress())}},isReady:function(a){a=this.C[a!==undefined?a:this.t];return this.g&&this.g>=a?this.j[0]>80&&(new Date).valueOf()>this.O?3:1:this.f>=a?2:0},getProgress:function(a){a=
this.C[a?a:this.t];return this.g>=a?1:this.f>a?1:this.f/a},startCollectors:function(){if(!this.m){if(window.addEventListener){window.addEventListener("load",this.o,false);window.addEventListener("mousemove",this.p,false)}else if(document.attachEvent){document.attachEvent("onload",this.o);document.attachEvent("onmousemove",this.p)}else throw new sjcl.exception.bug("can't attach event");this.m=true}},stopCollectors:function(){if(this.m){if(window.removeEventListener){window.removeEventListener("load",
this.o,false);window.removeEventListener("mousemove",this.p,false)}else if(window.detachEvent){window.detachEvent("onload",this.o);window.detachEvent("onmousemove",this.p)}this.m=false}},addEventListener:function(a,b){this.r[a][this.Q++]=b},removeEventListener:function(a,b){var c;a=this.r[a];var d=[];for(c in a)a.hasOwnProperty(c)&&a[c]===b&&d.push(c);for(b=0;b<d.length;b++){c=d[b];delete a[c]}},b:[new sjcl.hash.sha256],j:[0],A:0,q:{},u:0,G:{},R:0,g:0,f:0,O:0,a:[0,0,0,0,0,0,0,0],d:[0,0,0,0],s:undefined,
t:6,m:false,r:{progress:{},seeded:{}},Q:0,C:[0,48,64,96,128,192,0x100,384,512,768,1024],w:function(){for(var a=0;a<4;a++){this.d[a]=this.d[a]+1|0;if(this.d[a])break}return this.s.encrypt(this.d)},L:function(){this.a=this.w().concat(this.w());this.s=new sjcl.cipher.aes(this.a)},T:function(a){this.a=sjcl.hash.sha256.hash(this.a.concat(a));this.s=new sjcl.cipher.aes(this.a);for(a=0;a<4;a++){this.d[a]=this.d[a]+1|0;if(this.d[a])break}},U:function(a){var b=[],c=0,d;this.O=b[0]=(new Date).valueOf()+3E4;for(d=
0;d<16;d++)b.push(Math.random()*0x100000000|0);for(d=0;d<this.b.length;d++){b=b.concat(this.b[d].finalize());c+=this.j[d];this.j[d]=0;if(!a&&this.A&1<<d)break}if(this.A>=1<<this.b.length){this.b.push(new sjcl.hash.sha256);this.j.push(0)}this.f-=c;if(c>this.g)this.g=c;this.A++;this.T(b)},p:function(a){sjcl.random.addEntropy([a.x||a.clientX||a.offsetX,a.y||a.clientY||a.offsetY],2,"mouse")},o:function(){sjcl.random.addEntropy((new Date).valueOf(),2,"loadtime")},K:function(a,b){var c;a=sjcl.random.r[a];
var d=[];for(c in a)a.hasOwnProperty(c)&&d.push(a[c]);for(c=0;c<d.length;c++)d[c](b)}};try{var s=new Uint32Array(32);crypto.getRandomValues(s);sjcl.random.addEntropy(s,1024,"crypto['getRandomValues']")}catch(t){}
sjcl.json={defaults:{v:1,iter:1E3,ks:128,ts:64,mode:"ccm",adata:"",cipher:"aes"},encrypt:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json,f=e.c({iv:sjcl.random.randomWords(4,0)},e.defaults),g;e.c(f,c);c=f.adata;if(typeof f.salt==="string")f.salt=sjcl.codec.base64.toBits(f.salt);if(typeof f.iv==="string")f.iv=sjcl.codec.base64.toBits(f.iv);if(!sjcl.mode[f.mode]||!sjcl.cipher[f.cipher]||typeof a==="string"&&f.iter<=100||f.ts!==64&&f.ts!==96&&f.ts!==128||f.ks!==128&&f.ks!==192&&f.ks!==0x100||f.iv.length<
2||f.iv.length>4)throw new sjcl.exception.invalid("json encrypt: invalid parameters");if(typeof a==="string"){g=sjcl.misc.cachedPbkdf2(a,f);a=g.key.slice(0,f.ks/32);f.salt=g.salt}if(typeof b==="string")b=sjcl.codec.utf8String.toBits(b);if(typeof c==="string")c=sjcl.codec.utf8String.toBits(c);g=new sjcl.cipher[f.cipher](a);e.c(d,f);d.key=a;f.ct=sjcl.mode[f.mode].encrypt(g,b,f.iv,c,f.ts);return e.encode(f)},decrypt:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json;b=e.c(e.c(e.c({},e.defaults),e.decode(b)),
c,true);var f;c=b.adata;if(typeof b.salt==="string")b.salt=sjcl.codec.base64.toBits(b.salt);if(typeof b.iv==="string")b.iv=sjcl.codec.base64.toBits(b.iv);if(!sjcl.mode[b.mode]||!sjcl.cipher[b.cipher]||typeof a==="string"&&b.iter<=100||b.ts!==64&&b.ts!==96&&b.ts!==128||b.ks!==128&&b.ks!==192&&b.ks!==0x100||!b.iv||b.iv.length<2||b.iv.length>4)throw new sjcl.exception.invalid("json decrypt: invalid parameters");if(typeof a==="string"){f=sjcl.misc.cachedPbkdf2(a,b);a=f.key.slice(0,b.ks/32);b.salt=f.salt}if(typeof c===
"string")c=sjcl.codec.utf8String.toBits(c);f=new sjcl.cipher[b.cipher](a);c=sjcl.mode[b.mode].decrypt(f,b.ct,b.iv,c,b.ts);e.c(d,b);d.key=a;return sjcl.codec.utf8String.fromBits(c)},encode:function(a){var b,c="{",d="";for(b in a)if(a.hasOwnProperty(b)){if(!b.match(/^[a-z0-9]+$/i))throw new sjcl.exception.invalid("json encode: invalid property name");c+=d+'"'+b+'":';d=",";switch(typeof a[b]){case "number":case "boolean":c+=a[b];break;case "string":c+='"'+escape(a[b])+'"';break;case "object":c+='"'+
sjcl.codec.base64.fromBits(a[b],1)+'"';break;default:throw new sjcl.exception.bug("json encode: unsupported type");}}return c+"}"},decode:function(a){a=a.replace(/\s/g,"");if(!a.match(/^\{.*\}$/))throw new sjcl.exception.invalid("json decode: this isn't json!");a=a.replace(/^\{|\}$/g,"").split(/,/);var b={},c,d;for(c=0;c<a.length;c++){if(!(d=a[c].match(/^(?:(["']?)([a-z][a-z0-9]*)\1):(?:(\d+)|"([a-z0-9+\/%*_.@=\-]*)")$/i)))throw new sjcl.exception.invalid("json decode: this isn't json!");b[d[2]]=
d[3]?parseInt(d[3],10):d[2].match(/^(ct|salt|iv)$/)?sjcl.codec.base64.toBits(d[4]):unescape(d[4])}return b},c:function(a,b,c){if(a===undefined)a={};if(b===undefined)return a;var d;for(d in b)if(b.hasOwnProperty(d)){if(c&&a[d]!==undefined&&a[d]!==b[d])throw new sjcl.exception.invalid("required parameter overridden");a[d]=b[d]}return a},W:function(a,b){var c={},d;for(d in a)if(a.hasOwnProperty(d)&&a[d]!==b[d])c[d]=a[d];return c},V:function(a,b){var c={},d;for(d=0;d<b.length;d++)if(a[b[d]]!==undefined)c[b[d]]=
a[b[d]];return c}};sjcl.encrypt=sjcl.json.encrypt;sjcl.decrypt=sjcl.json.decrypt;sjcl.misc.S={};sjcl.misc.cachedPbkdf2=function(a,b){var c=sjcl.misc.S,d;b=b||{};d=b.iter||1E3;c=c[a]=c[a]||{};d=c[d]=c[d]||{firstSalt:b.salt&&b.salt.length?b.salt.slice(0):sjcl.random.randomWords(2,0)};c=b.salt===undefined?d.firstSalt:b.salt;d[c]=d[c]||sjcl.misc.pbkdf2(a,c,b.iter);return{key:d[c].slice(0),salt:c.slice(0)}};

/*
  sha1.js
*/
sjcl.hash.sha1=function(a){a?(this._h=a._h.slice(0),this._buffer=a._buffer.slice(0),this._length=a._length):this.reset()};sjcl.hash.sha1.hash=function(a){return(new sjcl.hash.sha1).update(a).finalize()};
sjcl.hash.sha1.prototype={blockSize:512,reset:function(){this._h=this._init.slice(0);this._buffer=[];this._length=0;return this},update:function(a){"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));var b,c=this._buffer=sjcl.bitArray.concat(this._buffer,a);b=this._length;a=this._length=b+sjcl.bitArray.bitLength(a);for(b=this.blockSize+b&-this.blockSize;b<=a;b+=this.blockSize)this._block(c.splice(0,16));return this},finalize:function(){var a,b=this._buffer,c=this._h,b=sjcl.bitArray.concat(b,
[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this._length/4294967296));for(b.push(this._length|0);b.length;)this._block(b.splice(0,16));this.reset();return c},_init:[1732584193,4023233417,2562383102,271733878,3285377520],_key:[1518500249,1859775393,2400959708,3395469782],_f:function(a,b,c,e){if(19>=a)return b&c|~b&e;if(39>=a)return b^c^e;if(59>=a)return b&c|b&e|c&e;if(79>=a)return b^c^e},_S:function(a,b){return b<<a|b>>>32-a},_block:function(a){var b,c,e,g,h,
k,f=a.slice(0),d=this._h;c=d[0];e=d[1];g=d[2];h=d[3];k=d[4];for(a=0;79>=a;a++)16<=a&&(f[a]=this._S(1,f[a-3]^f[a-8]^f[a-14]^f[a-16])),b=this._S(5,c)+this._f(a,e,g,h)+k+f[a]+this._key[Math.floor(a/20)]|0,k=h,h=g,g=this._S(30,e),e=c,c=b;d[0]=d[0]+c|0;d[1]=d[1]+e|0;d[2]=d[2]+g|0;d[3]=d[3]+h|0;d[4]=d[4]+k|0}};


/**
 * ================================================================= 
 * Source file taken from :: stacktrace.min.js
 * ================================================================= 
 */

// Domain Public by Eric Wendelin http://eriwen.com/ (2008)
//                  Luke Smith http://lucassmith.name/ (2008)
//                  Loic Dachary <loic@dachary.org> (2008)
//                  Johan Euphrosine <proppy@aminche.com> (2008)
//                  Oyvind Sean Kinsey http://kinsey.no/blog (2010)
//                  Victor Homyakov <victor-homyakov@users.sourceforge.net> (2010)
// https://github.com/eriwen/javascript-stacktrace/blob/v0.5.0/stacktrace.js
function printStackTrace(e){e=e||{guess:true};var t=e.e||null,n=!!e.guess;var r=new printStackTrace.implementation,i=r.run(t);return n?r.guessAnonymousFunctions(i):i}if(typeof module!=="undefined"&&module.exports){module.exports=printStackTrace}printStackTrace.implementation=function(){};printStackTrace.implementation.prototype={run:function(e,t){e=e||this.createException();t=t||this.mode(e);if(t==="other"){return this.other(arguments.callee)}else{return this[t](e)}},createException:function(){try{this.undef()}catch(e){return e}},mode:function(e){if(e["arguments"]&&e.stack){return"chrome"}else if(e.stack&&e.sourceURL){return"safari"}else if(e.stack&&e.number){return"ie"}else if(typeof e.message==="string"&&typeof window!=="undefined"&&window.opera){if(!e.stacktrace){return"opera9"}if(e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length){return"opera9"}if(!e.stack){return"opera10a"}if(e.stacktrace.indexOf("called from line")<0){return"opera10b"}return"opera11"}else if(e.stack){return"firefox"}return"other"},instrumentFunction:function(e,t,n){e=e||window;var r=e[t];e[t]=function(){n.call(this,printStackTrace().slice(4));return e[t]._instrumented.apply(this,arguments)};e[t]._instrumented=r},deinstrumentFunction:function(e,t){if(e[t].constructor===Function&&e[t]._instrumented&&e[t]._instrumented.constructor===Function){e[t]=e[t]._instrumented}},chrome:function(e){var t=(e.stack+"\n").replace(/^\S[^\(]+?[\n$]/gm,"").replace(/^\s+(at eval )?at\s+/gm,"").replace(/^([^\(]+?)([\n$])/gm,"{anonymous}()@$1$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm,"{anonymous}()@$1").split("\n");t.pop();return t},safari:function(e){return e.stack.replace(/\[native code\]\n/m,"").replace(/^(?=\w+Error\:).*$\n/m,"").replace(/^@/gm,"{anonymous}()@").split("\n")},ie:function(e){var t=/^.*at (\w+) \(([^\)]+)\)$/gm;return e.stack.replace(/at Anonymous function /gm,"{anonymous}()@").replace(/^(?=\w+Error\:).*$\n/m,"").replace(t,"$1@$2").split("\n")},firefox:function(e){return e.stack.replace(/(?:\n@:0)?\s+$/m,"").replace(/^[\(@]/gm,"{anonymous}()@").split("\n")},opera11:function(e){var t="{anonymous}",n=/^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/;var r=e.stacktrace.split("\n"),i=[];for(var s=0,o=r.length;s<o;s+=2){var u=n.exec(r[s]);if(u){var a=u[4]+":"+u[1]+":"+u[2];var f=u[3]||"global code";f=f.replace(/<anonymous function: (\S+)>/,"$1").replace(/<anonymous function>/,t);i.push(f+"@"+a+" -- "+r[s+1].replace(/^\s+/,""))}}return i},opera10b:function(e){var t=/^(.*)@(.+):(\d+)$/;var n=e.stacktrace.split("\n"),r=[];for(var i=0,s=n.length;i<s;i++){var o=t.exec(n[i]);if(o){var u=o[1]?o[1]+"()":"global code";r.push(u+"@"+o[2]+":"+o[3])}}return r},opera10a:function(e){var t="{anonymous}",n=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;var r=e.stacktrace.split("\n"),i=[];for(var s=0,o=r.length;s<o;s+=2){var u=n.exec(r[s]);if(u){var a=u[3]||t;i.push(a+"()@"+u[2]+":"+u[1]+" -- "+r[s+1].replace(/^\s+/,""))}}return i},opera9:function(e){var t="{anonymous}",n=/Line (\d+).*script (?:in )?(\S+)/i;var r=e.message.split("\n"),i=[];for(var s=2,o=r.length;s<o;s+=2){var u=n.exec(r[s]);if(u){i.push(t+"()@"+u[2]+":"+u[1]+" -- "+r[s+1].replace(/^\s+/,""))}}return i},other:function(e){var t="{anonymous}",n=/function\s*([\w\-$]+)?\s*\(/i,r=[],i,s,o=10;while(e&&e["arguments"]&&r.length<o){i=n.test(e.toString())?RegExp.$1||t:t;s=Array.prototype.slice.call(e["arguments"]||[]);r[r.length]=i+"("+this.stringifyArguments(s)+")";e=e.caller}return r},stringifyArguments:function(e){var t=[];var n=Array.prototype.slice;for(var r=0;r<e.length;++r){var i=e[r];if(i===undefined){t[r]="undefined"}else if(i===null){t[r]="null"}else if(i.constructor){if(i.constructor===Array){if(i.length<3){t[r]="["+this.stringifyArguments(i)+"]"}else{t[r]="["+this.stringifyArguments(n.call(i,0,1))+"..."+this.stringifyArguments(n.call(i,-1))+"]"}}else if(i.constructor===Object){t[r]="#object"}else if(i.constructor===Function){t[r]="#function"}else if(i.constructor===String){t[r]='"'+i+'"'}else if(i.constructor===Number){t[r]=i}}}return t.join(",")},sourceCache:{},ajax:function(e){var t=this.createXMLHTTPObject();if(t){try{t.open("GET",e,false);t.send(null);return t.responseText}catch(n){}}return""},createXMLHTTPObject:function(){var e,t=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];for(var n=0;n<t.length;n++){try{e=t[n]();this.createXMLHTTPObject=t[n];return e}catch(r){}}},isSameDomain:function(e){return typeof location!=="undefined"&&e.indexOf(location.hostname)!==-1},getSource:function(e){if(!(e in this.sourceCache)){this.sourceCache[e]=this.ajax(e).split("\n")}return this.sourceCache[e]},guessAnonymousFunctions:function(e){for(var t=0;t<e.length;++t){var n=/\{anonymous\}\(.*\)@(.*)/,r=/^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/,i=e[t],s=n.exec(i);if(s){var o=r.exec(s[1]);if(o){var u=o[1],a=o[2],f=o[3]||0;if(u&&this.isSameDomain(u)&&a){var l=this.guessAnonymousFunction(u,a,f);e[t]=i.replace("{anonymous}",l)}}}}return e},guessAnonymousFunction:function(e,t,n){var r;try{r=this.findFunctionName(this.getSource(e),t)}catch(i){r="getSource failed with url: "+e+", exception: "+i.toString()}return r},findFunctionName:function(e,t){var n=/function\s+([^(]*?)\s*\(([^)]*)\)/;var r=/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/;var i=/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/;var s="",o,u=Math.min(t,20),a,f;for(var l=0;l<u;++l){o=e[t-l-1];f=o.indexOf("//");if(f>=0){o=o.substr(0,f)}if(o){s=o+s;a=r.exec(s);if(a&&a[1]){return a[1]}a=n.exec(s);if(a&&a[1]){return a[1]}a=i.exec(s);if(a&&a[1]){return a[1]}}}return"(?)"}}


/**
 * ================================================================= 
 * Source file taken from :: wljsx.js
 * ================================================================= 
 */

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

 /*globals WLJSX, WLJQ*/

/*jshint unused:false*/
function __WL() {}
var WL = WL ? WL : {};

window.WLJSX = {

  /*jshint strict:false*/

  /*
   * Constant values, required for prototype.js functionality
   */
  emptyFunction: function() {},

  /**
   * Search for an element with a specified ID and returns it as a DOM element.
   * Returns null if element is not found
   *
   * @Param selector - a string with the requires DOM element's Id
   */
  $: function(id) {
    var elements = WLJQ('#' + id);
    if (elements.length === 0) {
      return null;
    } else {
      return elements[0];
    }
  },

  /**
   * Searches for the elements with a specified selector and returns them as an array of DOM elements
   *
   * @Param selector - a string representing a CSS selector
   */
  $$: function(selector) {
    return WLJQ(selector);
  },

  $$$: function(elem) {
    var elements = WLJQ(elem);
    if (elements.length === 0) {
      return null;
    } else {
      return elements[0];
    }
  },

  /**
   * Same as $$ but searches inside of a given element only. Returns array of DOM elements
   *
   * @Param el - the DOM element to search inside of
   * @Param selector - a string representing a CSS selector
   */
  find: function(el, selector) {
    return WLJQ(el).find(selector);
  },

  /**
   * Creates a new DOM element and returns it
   *
   * @Param type - a string representing the element type (tag name, e.g. '<div/>')
   * @Param attrs - an object of attributes to be added to newly created element
   */
  newElement: function(type, attrs) {
    return WLJQ(type, attrs)[0];
  },

  /**
   * Appends the content before the end of a DOM element
   *
   * @Param el - the DOM element (or CSS selector string) to append content to
   * @Param content - new content to be appended
   */
  append: function(el, content) {
    WLJQ(el).append(content);
  },

  /**
   * Prepends the content at the beginning of a DOM element
   *
   * @Param el - the DOM element (or CSS selector string) to prepend content to
   * @Param content - new content to be prepended
   */
  prepend: function(el, content) {
    WLJQ(el).prepend(content);
  },

  /**
   * Sets or Gets DOM element's content
   *
   * @Param el - the DOM element to update content in
   * @Param content - new content, can be string or other DOM elements
   */
  html: function(el, content) {
    if (content) {
      WLJQ(el).html(content);
    } else {
      return WLJQ(el).html();
    }
  },

  /**
   * Empties the content of a given DOM element
   *
   * @Param el - the DOM element (or CSS selector string) to empty
   */
  empty: function(el) {
    WLJQ(el).empty();
  },

  /**
   * Shows a DOM element (makes visible)
   *
   * @Param el - the DOM element (or CSS selector string) to make visible
   */
  show: function(el) {
    WLJQ(el).show();
  },

  /**
   * Hides a DOM element (makes invisible)
   *
   * @Param el - the DOM element (or CSS selector string) to hide
   */
  hide: function(el) {
    WLJQ(el).hide();
  },

  /**
   * Adds a specified CSS class to DOM elements
   *
   * @Param el - the DOM element (or CSS selector string) to add the CSS class to
   * @Param className - string with the class' name
   */
  addClass: function(el, className) {
    WLJQ(el).addClass(className);
  },

  /**
   * Removes a specified CSS class from DOM elements
   *
   * @Param el - the DOM element (or CSS selector string) to remove the CSS class from
   * @Param className - string with the class' name
   */
  removeClass: function(el, className) {
    WLJQ(el).removeClass(className);
  },

  /**
   * Sets or Gets the width of a DOM element (first one in case several elements fit CSS selector)
   *
   * @Param el - the DOM element to get/set width
   * @Param width - new width to set
   */
  width: function(el, width) {
    if (width) {
      WLJQ(el).width(width);
    } else {
      return WLJQ(el).width();
    }
  },

  /**
   * Sets or Gets the height of a DOM element (first one in case several elements fit CSS selector)
   *
   * @Param el - the DOM element to get/set height
   * @Param height - new height to set
   */
  height: function(el, height) {
    if (height) {
      WLJQ(el).height(height);
    } else {
      return WLJQ(el).height();
    }
  },

  /**
   * Removes an element from the DOM.
   *
   * @Param el - the DOM element (or CSS selector string) to remove
   */
  remove: function(el) {
    WLJQ(el).remove();
  },

  /**
   * Sets specific CSS style on the DOM elements
   *
   * @Param el - the DOM element (or CSS selector string) to set CSS style on
   * @Param style - an object of CSS styles to be set
   */
  css: function(el, style) {
    WLJQ(el).css(style);
  },

  /**
   * Sets or Gets the attribute of a DOM element
   *
   * @Param el - the DOM element to get/set attribute
   * @Param attrName - the name of an attribute
   * @Param attrValue - the new value of the attribute
   */
  attr: function(el, attrName, attrValue) {
    if (attrValue) {
      WLJQ(el).attr(attrName, attrValue);
    } else {
      return WLJQ(el).attr(attrName);
    }
  },

  /**
   * Adds the event listener to DOM elements for a specified event
   *
   * @Param el - the DOM element (or CSS selector string) to add event listener to
   * @Param event - string with the event's name, e.g. 'click', 'change' etc.
   * @Param callback - a JavaScript function to be invoked once event is triggered
   */
  bind: function(el, event, callback) {
    WLJQ(el).bind(event, callback);
  },

  /**
   * Removes the event listener from DOM elements
   *
   * @Param el - the DOM element (or CSS selector string) to remove event listener form
   * @Param event - string with the event's name, e.g. 'click', 'change' etc.
   */
  unbind: function(el, event) {
    if (event) {
      WLJQ(el).unbind(event);
    } else {
      WLJQ(el).unbind();
    }
  },

  /**
   * Triggers a specific event on DOM elements
   *
   * @Param el - the DOM element (or CSS selector string) to trigger the event on
   * @Param event - string with the event's name, e.g. 'click', 'change' etc.
   */
  trigger: function(el, event) {
    WLJQ(el).trigger(event);
  },

  /**
   * Retrieves the element that triggered the event (event's target)
   *
   * @Param event - event to get the target from
   */
  eventTarget: function(event) {
    return event.target;
  },

  /*
   * Detects browser types. Implementation taken from Prototype.js
   */
  detectBrowser: function() {
    var userAgent = navigator.userAgent;
    /*jshint eqeqeq:false*/
    var isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]';
    return {
      isIE: !!window.attachEvent && !isOpera,
      isOpera: isOpera,
      isWebKit: userAgent.indexOf('AppleWebKit/') > -1,
      isGecko: userAgent.indexOf('Gecko') > -1 && userAgent.indexOf('KHTML') === -1,
      isMobileSafari: /Apple.*Mobile/.test(userAgent),
      isWP81RT: userAgent.indexOf('Windows Phone 8.1') > -1
    };
  },

  /*
   * Returns viewport root element depending on a browser. Implementation taken from Prototype.js
   */
  getViewportRootElement: function() {
    var browser = WLJSX.detectBrowser();

    if (browser.isWebKit && !document.evaluate) {
      return document;
    }

    if (browser.isOpera && window.parseFloat(window.opera.version()) < 9.5) {
      return document.body;
    }

    return document.documentElement;
  },

  /*
   * Returns the width of a viewport
   */
  getViewportWidth: function() {
    return (this.getViewportRootElement())['clientWidth'];
  },

  /*
   * Returns the height of a viewport
   */
  getViewportHeight: function() {
    return (this.getViewportRootElement())['clientHeight'];
  },

  isEmptyObject: function(obj) {
    return WLJQ.isEmptyObject(obj);
  }


};

/*
 * The following namespaces are taken from prototypejs framework and adopted to work with MobileFirst Platform
 */

/*
 * Class object defines a Class.create API for object oriented JS approach
 */
window.WLJSX.Class = (function() {
  var IS_DONTENUM_BUGGY = (function() {
    for (var p in {
        toString: 1
      }) {
      if (p === 'toString') {
        return false;
      }
    }
    return true;
  })();

  function subclass() {}

  function create() {
    var parent = null;
    var properties = WLJSX.Object.toArray(arguments);

    if (WLJSX.Object.isFunction(properties[0])) {
      parent = properties.shift();
    }

    function klass() {
      this.initialize.apply(this, arguments);
    }

    WLJSX.Object.extend(klass, WLJSX.Class.Methods);
    klass.superclass = parent;
    klass.subclasses = [];

    if (parent) {
      subclass.prototype = parent.prototype;
      /*jshint newcap:false*/
      klass.prototype = new subclass();
      parent.subclasses.push(klass);
    }

    for (var i = 0, length = properties.length; i < length; i++) {
      klass.addMethods(properties[i]);
    }

    if (!klass.prototype.initialize) {
      klass.prototype.initialize = WLJSX.emptyFunction;
    }

    klass.prototype.constructor = klass;
    return klass;
  }

  function addMethods(source) {
    var ancestor = this.superclass && this.superclass.prototype,
      properties = WLJSX.Object.keys(source);

    if (IS_DONTENUM_BUGGY) {
      /*jshint eqeqeq:false*/
      if (source.toString != Object.prototype.toString) {
        properties.push('toString');
      }
      if (source.valueOf != Object.prototype.valueOf) {
        properties.push('valueOf');
      }
    }

    for (var i = 0, length = properties.length; i < length; i++) {
      var property = properties[i],
        value = source[property];

      if (ancestor && WLJSX.Object.isFunction(value) && value.argumentNames()[0] == '__super') {
        var method = value;
        /*jshint -W083*/
        value = (function(m) {
          return function() {
            return ancestor[m].apply(this, arguments);
          };
        })
        (property).wrap(method);

        value.valueOf = method.valueOf.bind(method);
        value.toString = method.toString.bind(method);
      }
      this.prototype[property] = value;
    }
    return this;
  }

  return {
    create: create,
    Methods: {
      addMethods: addMethods
    }
  };
})();

/*
 * WLJSX.Object APIs are responsible for Object related functionality
 *
 * WLJSX.Object.objectSize(obj) - returns the number of properties in the supplied object
 * WLJSX.Object.toArray(iterable) - coverts object to array
 * WLJSX.Object.toJSON(obj) - converts object to it's JSON representation
 * WLJSX.Object.extend(destination, source) - extends destination object with properties from the source object
 * WLJSX.Object.toQueryString(obj) - converts object to a query string
 * WLJSX.Object.keys(obj) - returns object keys as array
 * WLJSX.Object.clone(obj) - returns a new copy of a supplied object
 * WLJSX.Object.isArray(obj) - checks whether object is an array
 * WLJSX.Object.isFunction(obj) - checks whether object is a function
 * WLJSX.Object.isString(obj) - checks whether object is a string
 * WLJSX.Object.isNumber(obj) - checks whether object is a number
 * WLJSX.Object.isDate(obj) - checks whether object is a date
 * WLJSX.Object.isUndefined(obj) - checks whether object is undefined
 */
window.WLJSX.Object = {
  _toString: Object.prototype.toString,
  NULL_TYPE: 'Null',
  UNDEFINED_TYPE: 'Undefined',
  BOOLEAN_TYPE: 'Boolean',
  NUMBER_TYPE: 'Number',
  STRING_TYPE: 'String',
  OBJECT_TYPE: 'Object',
  FUNCTION_CLASS: '[object Function]',
  BOOLEAN_CLASS: '[object Boolean]',
  NUMBER_CLASS: '[object Number]',
  STRING_CLASS: '[object String]',
  ARRAY_CLASS: '[object Array]',
  DATE_CLASS: '[object Date]',

  NATIVE_JSON_STRINGIFY_SUPPORT: (window.JSON &&
    typeof JSON.stringify === 'function' &&
    JSON.stringify(0) === '0' &&
    typeof JSON.stringify(function(x) {
      return x;
    }) === 'undefined'),

  objectSize: function(obj) {
    var count = 0;
    /*jshint forin:false*/
    for (var key in obj) {
      count++;
    }
    return count;
  },

  toArray: function(iterable) {
    if (!iterable) {
      return [];
    }
    if ('toArray' in Object(iterable)) {
      return iterable.toArray();
    }
    var length = iterable.length || 0;
    var result = new Array(length);
    while (length--) {
      result[length] = iterable[length];
    }
    return result;
  },

  Type: function(o) {
    switch (o) {
      case null:
        return WLJSX.Object.NULL_TYPE;
      case (void 0):
        return WLJSX.Object.UNDEFINED_TYPE;
    }
    var type = typeof o;
    switch (type) {
      case 'boolean':
        return WLJSX.Object.BOOLEAN_TYPE;
      case 'number':
        return WLJSX.Object.NUMBER_TYPE;
      case 'string':
        return WLJSX.Object.STRING_TYPE;
    }
    return WLJSX.Object.OBJECT_TYPE;
  },

  extend: function(destination, source) {
    /*jshint forin:false*/
    for (var property in source) {
      destination[property] = source[property];
    }
    return destination;
  },

  toJSON: function(object) {
    if (WLJSX.Object.NATIVE_JSON_STRINGIFY_SUPPORT) {
      return JSON.stringify(object);
    }
    else {
      return WLJSX.Object.Str('', {
        '': object
      }, []);
    }
  },

  Str: function(key, holder, stack) {
    var value = holder[key];
    var type = typeof value;
    if (WLJSX.Object.Type(value) === WLJSX.Object.OBJECT_TYPE && typeof value.toJSON === 'function') {
      value = value.toJSON(key);
    }
    var _class = WLJSX.Object._toString.call(value);
    switch (_class) {
      case WLJSX.Object.NUMBER_CLASS:
      case WLJSX.Object.BOOLEAN_CLASS:
      case WLJSX.Object.STRING_CLASS:
        value = value.valueOf();
    }
    switch (value) {
      case null:
        return 'null';
      case true:
        return 'true';
      case false:
        return 'false';
    }
    type = typeof value;
    switch (type) {
      case 'string':
        return value;
      case 'number':
        return isFinite(value) ? String(value) : 'null';
      case 'object':
        for (var i = 0, length = stack.length; i < length; i++) {
          if (stack[i] === value) {
            throw new TypeError();
          }
        }
        stack.push(value);
        var partial = [];
        if (_class === WLJSX.Object.ARRAY_CLASS) {
          for (i = 0, length = value.length; i < length; i++) {
            var str = WLJSX.Object.Str(i, value, stack);
            partial.push(typeof str === 'undefined' ? 'null' : str);
          }
          partial = '[' + partial.join(',') + ']';
        } else {
          var keys = WLJSX.Object.keys(value);
          for (i = 0, length = keys.length; i < length; i++) {
            key = keys[i];
            var strResult = WLJSX.Object.Str(key, value, stack);
            if (typeof strResult !== 'undefined') {
              partial.push(WLJSX.String.inspect(key, true) + ':' + strResult);
            }
          }
          partial = '{' + partial.join(',') + '}';
        }
        stack.pop();
        return partial;
    }
  },

  toQueryString: function(object) {
    var results = [];

    /*jshint forin:false*/
    for (var key in object) {
      key = encodeURIComponent(key);
      var value = object[key];
      var queryPair = (WLJSX.Object.isUndefined(value)) ? key : key + '=' + encodeURIComponent(WLJSX.String.interpret(value));
      results.push(queryPair);
    }
    return results.join('&');
  },

  keys: function(object) {
    if (WLJSX.Object.Type(object) !== WLJSX.Object.OBJECT_TYPE) {
      throw new TypeError();
    }
    var results = [];
    for (var property in object) {
      if (object.hasOwnProperty(property)) {
        results.push(property);
      }
    }
    return results;
  },

  clone: function(object) {
    return WLJSX.Object.extend({}, object);
  },

  isArray: function(object) {
    if ((typeof Array.isArray === 'function') && Array.isArray([]) && !Array.isArray({})) {
      return Array.isArray(object);
    } else {
      return WLJSX.Object._toString.call(object) === WLJSX.Object.ARRAY_CLASS;
    }
  },

  isFunction: function(object) {
    return WLJSX.Object._toString.call(object) === WLJSX.Object.FUNCTION_CLASS;
  },

  isString: function(object) {
    return WLJSX.Object._toString.call(object) === WLJSX.Object.STRING_CLASS;
  },

  isNumber: function(object) {
    return WLJSX.Object._toString.call(object) === WLJSX.Object.NUMBER_CLASS;
  },

  isDate: function(object) {
    return WLJSX.Object._toString.call(object) === WLJSX.Object.DATE_CLASS;
  },

  isUndefined: function(object) {
    return typeof object === 'undefined';
  }
};

/*jshint -W100*/

/*
 * WLJSX.String APIs are responsible for String related functionality
 *
 * WLJSX.String.stripScripts(str) - stripts <script> tags from string
 * WLJSX.String.escapeHTML(str) - replaces &, < and > characters with their escaped HTML values
 * WLJSX.String.inspect(str) - Returns a debug-oriented version of the string (i.e. wrapped in single or double quotes, with backslashes and quotes escaped)
 * WLJSX.String.interpret(str) - Forces value into a string. Returns an empty string for null
 * WLJSX.String.strip(str) - Strips all leading and trailing whitespace from a string
 * WLJSX.String.isJSON(str) - validates whether string is a valid JSON representation
 * WLJSX.String.isBlank(str) - Check if the string is 'blank' � either empty (length of 0) or containing only whitespace.
 * WLJSX.String.unfilterJSON(str) - Strips comment delimiters around Ajax JSON or JavaScript responses. This security method is called internally
 * WLJSX.String.evalJSON(str) - Evaluates the JSON in the string and returns the resulting object
 * WLJSX.String.parseResponseHeaders(str) - Parses the string returned by the XMLHttpRequest.getAllResponseHeaders() method and returns an map holding the response headers
 * WLJSX.String.getHeaderByKey(headers, key) - case insenstive search in a map for a given key, Returns the header as json
 */
window.WLJSX.String = {
  specialChar: {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '\\': '\\\\'
  },
  stripScripts: function(str) {
    return str.replace(new RegExp('<script[^>]*>([\\S\\s]*?)<\/script>', 'img'), '');
  },

  escapeHTML: function(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  },

  interpret: function(str) {
    return str === null ? '' : String(str);
  },

  strip: function(str) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
  },

  toQueryParams: function(str) {
    var match = WLJSX.String.strip(str).match(/([^?#]*)(#.*)?$/);
    if (!match) {
      return {};
    }

    var paramsArray = match[1].split('&');
    var paramsObj = {};
    for (var i = 0; i < paramsArray.length; i++) {
      var pair = paramsArray[i].split('=');
      if (pair[0]) {
        (pair.shift()).toString().replace(/%/g , '%25');
        var key = decodeURIComponent(pair.shift());
        var value = pair.length > 1 ? pair.join('=') : pair[0];
        if (value !== undefined) {
          value = decodeURIComponent(value);
        }
        paramsObj[key] = value;
      }
    }
    return paramsObj;
  },

  isJSON: function(str) {
    if (WLJSX.String.isBlank(str)) {
      return false;
    }
    str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
    str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
    str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
    return (/^[\],:{}\s]*$/).test(str);
  },

  isBlank: function(str) {
    return (/^\s*$/).test(str);
  },

  inspect: function(str, useDoubleQuotes) {
    var escapedString = str.replace(/[\x00-\x1f\\]/g, function(character) {
      if (character in WLJSX.String.specialChar) {
        return WLJSX.String.specialChar[character];
      }
      return '\\u00' + character.charCodeAt().toPaddedString(2, 16);
    });
    if (useDoubleQuotes) {
      return '"' + escapedString.replace(/"/g, '\\"') + '"';
    }
    return '\'' + escapedString.replace(/'/g, '\\\'') + '\'';
  },

  unfilterJSON: function(str) {
    return str.replace(/^\/\*-secure-([\s\S]*)\*\/\s*$/, '$1');
  },

  evalJSON: function(str, sanitize) {
    var json = WLJSX.String.unfilterJSON(str);
    if (window.JSON && typeof JSON.parse === 'function' && JSON.parse('{"test": true}').test) {
      // Native json parse support
      return JSON.parse(json);
    } else {
      // No native json parse support
      var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
      if (cx.test(json)) {
        json = json.replace(cx, function(a) {
          return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        });
      }
      try {
        if (!sanitize || WLJSX.String.isJSON(json)) {
          /*jshint evil:true*/
          return eval('(' + json + ')');
        }
      } catch (e) {}
      throw new SyntaxError('Badly formed JSON string: ' + WLJSX.String.inspect(str));
    }
  },
  
  parseResponseHeaders: function(responseHeadersString) {
    var responseHeaders = {};
    if (responseHeadersString !== null && typeof (responseHeadersString) !== 'undefined') {
       var delimiter = responseHeadersString.indexOf('\r') > -1 ? '\r\n' : '\n';
       var allHeaders = responseHeadersString.split(delimiter);

       /*jshint maxdepth:4*/
       for (var i = 0; i < allHeaders.length; i++) {
         var pair = allHeaders[i];
         var index = pair.indexOf(': ');
         /*jshint maxdepth:5*/
         if (index > 0) {
           var key = pair.substring(0, index);
           var value = pair.substring(index + 2);
           responseHeaders[key] = value;
         }
       }
    }
    return responseHeaders;
  },
  
  getHeaderByKey: function(headers, key) {
	//case insensitive search
	for (var headerKey in headers) {
		if (headerKey.toLowerCase() === key.toLowerCase()) {
			var jsonHeader = {};
			jsonHeader[key] = headers[headerKey];
			return jsonHeader;
		}
	}
	return null;
  }
};

/*
 * WLJSX.PeriodicalExecuter APIs are responsible for PeriodicalExecuter related functionality
 *
 * WLJSX.Object.execute() - Executes a callback supplied at initialization
 * WLJSX.Object.stop() - Stops the timer interval execution
 * new WLJSX.PeriodicalExecuter(callback, frequency) - returns new WLJSX.PeriodicalExecuter() object
 * which will call callback at specified frequencies (in seconds)
 */
window.WLJSX.PeriodicalExecuter = function(callback, frequency) {
  var currentlyExecuting = false;

  function onTimerEvent() {
    if (!currentlyExecuting) {
      try {
        currentlyExecuting = true;
        callback();
        currentlyExecuting = false;
      } catch (e) {
        currentlyExecuting = false;
        throw e;
      }
    }
  }

  var timer = setInterval(onTimerEvent.bind(this), frequency * 1000);

  return {
    execute: function() {
      callback(this);
    },

    stop: function() {
      if (!timer) {
        return;
      }
      clearInterval(timer);
      timer = null;
    }
  };
};


/*
 * Extends JavaScript Function object
 *
 * Public API:
 * functionName.argumentNames - http://api.prototypejs.org/language/Function/prototype/argumentNames/
 * finctionName.bind - http://api.prototypejs.org/language/Function/prototype/bind/
 * functionName.bindAsEventListener - http://api.prototypejs.org/language/Function/prototype/bindAsEventListener/
 * functionName.curry - http://api.prototypejs.org/language/Function/prototype/curry/
 * functionName.delay - http://api.prototypejs.org/language/Function/prototype/delay/
 * functionName.defer - http://api.prototypejs.org/language/Function/prototype/defer/
 * functionName.wrap - http://api.prototypejs.org/language/Function/prototype/wrap/
 */
WLJSX.Object.extend(Function.prototype, (function() {
  var slice = Array.prototype.slice;

  function update(array, args) {
    var arrayLength = array.length,
      length = args.length;
    while (length--) {
      array[arrayLength + length] = args[length];
    }
    return array;
  }

  function merge(array, args) {
    array = slice.call(array, 0);
    return update(array, args);
  }

  function argumentNames() {
    var names = this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
      .replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '')
      .replace(/\s+/g, '').split(',');
    /*jshint eqeqeq:false*/
    return names.length == 1 && !names[0] ? [] : names;
  }

  function bind(obj) {
      var args = Array.prototype.slice.call(arguments, 1),
          self = this,
          Nop = function() {
          },
          bound = function() {
              return self.apply(
                  this instanceof Nop ? this : (obj || {}), args.concat(
                      Array.prototype.slice.call(arguments)
                  )
              );
          };
      Nop.prototype = this.prototype || {};
      bound.prototype = new Nop();
      return bound;
  }

  function bindAsEventListener(context) {
    var __method = this,
      args = slice.call(arguments, 1);
    return function(event) {
      var a = update([event || window.event], args);
      return __method.apply(context, a);
    };
  }

  function curry() {
    if (!arguments.length) {
      return this;
    }
    var __method = this,
      args = slice.call(arguments, 0);
    return function() {
      var a = merge(args, arguments);
      return __method.apply(this, a);
    };
  }

  function delay(timeout) {
    var __method = this,
      args = slice.call(arguments, 1);
    timeout = timeout * 1000;
    return window.setTimeout(function() {
      return __method.apply(__method, args);
    }, timeout);
  }

  function defer() {
    var args = update([0.01], arguments);
    return this.delay.apply(this, args);
  }

  function wrap(wrapper) {
    var __method = this;
    return function() {
      var a = update([__method.bind(this)], arguments);
      return wrapper.apply(this, a);
    };
  }

  return {
    argumentNames: argumentNames,
    bind: bind,
    bindAsEventListener: bindAsEventListener,
    curry: curry,
    delay: delay,
    defer: defer,
    wrap: wrap
  };
})());


/**
 * ================================================================= 
 * Source file taken from :: ajax.js
 * ================================================================= 
 */

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

 /*globals WLJSX, WL, escape, unescape*/

 /*jshint strict:false*/

window.WLJSX.Ajax = {
  getTransport: function() {
    var tr = null;
    try {
      tr = new XMLHttpRequest();
      if (tr === null) {
        tr = new ActiveXObject('Msxml2.XMLHTTP');
      }
      if (tr === null) {
        tr = new ActiveXObject('Microsoft.XMLHTTP');
      }
    } catch (e) {}

    return tr;
  }
};

window.WLJSX.Ajax.Request = WLJSX.Class.create({
  _complete: false,

  initialize: function(url, options) {
    this.options = {
      method: 'post',
      asynchronous: true,
      contentType: 'application/json',
      encoding: 'UTF-8',
      parameters: '',
      evalJSON: true,
      evalJS: true
    };
    WLJSX.Object.extend(this.options, options || {});

    this.options.method = this.options.method.toLowerCase();
    this.transport = window.WLJSX.Ajax.getTransport();

    if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_NATIVE_XHR)) {
      this.transport.timeout = options.timeout || 60 * 1000;
    }

    this.request(url);
  },

  request: function(url) {
    this.url = url;
    this.method = this.options.method;
    var params = WLJSX.Object.isString(this.options.parameters) ?
      this.options.parameters : WLJSX.Object.toJSON(this.options.parameters);

    if (this.method !== 'get' && this.method !== 'post' && this.method !== 'put') {
      params += (params ? '&' : '') + '_method=' + this.method;
      this.method = 'post';
    }

    if (params && this.method === 'get') {

      this.url += ((this.url.indexOf('?') > -1) ? '&' : '?') + params;
    }

    if (!this.options.skipQueryParam) {
      this.parameters = WLJSX.String.toQueryParams(params);
    }

    try {
      var response = new window.WLJSX.Ajax.Response(this);
      if (this.options.onCreate) {
        this.options.onCreate(response);
      }

      this.transport.open(this.method.toUpperCase(), this.url, this.options.asynchronous);

      if (this.options.asynchronous) {
        this.respondToReadyState.bind(this).defer(1);
      }

      this.transport.onreadystatechange = this.onStateChange.bind(this);
      this.setRequestHeaders();

      WL.Analytics._logOutboundRequest(this);

      /*jshint eqeqeq:false*/
      this.body = (this.method == 'post' || this.method == 'put')? (this.options.postBody || params) : null;
      this.transport.send(this.body);

      /* Force Firefox to handle ready state 4 for synchronous requests */
      if (!this.options.asynchronous && this.transport.overrideMimeType) {
        this.onStateChange();
      }

    } catch (e) {
      this.dispatchException(e);
    }
  },

  onStateChange: function() {
    var readyState = this.transport.readyState;
    /*jshint eqeqeq:false*/
    if (readyState > 1 && !((readyState == 4) && this._complete)) {
      this.respondToReadyState(this.transport.readyState);
    }
  },

  setRequestHeaders: function() {
    var headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'text/javascript, text/html, application/xml, text/xml, */*',
      'Accept-Language': WL.App.__getDeviceLocale()
    };

    this.trackingId = WL.Analytics._getTrackingId();
    if (this.trackingId !== null) {
      headers['x-wl-analytics-tracking-id'] = this.trackingId;
    }

    /*jshint eqeqeq:false*/
    if (this.method == 'post') {
      headers['Content-type'] = this.options.contentType + (this.options.encoding ? '; charset=' + this.options.encoding : '');

      /* Force "Connection: close" for older Mozilla browsers to work
       * around a bug where XMLHttpRequest sends an incorrect
       * Content-length header. See Mozilla Bugzilla #246651.
       */
      if (this.transport.overrideMimeType && (navigator.userAgent.match(/Gecko\/(\d{4})/) || [0, 2005])[1] < 2005) {
        headers['Connection'] = 'close';
      }
    }

    if (typeof this.options.requestHeaders == 'object') {
      var extras = this.options.requestHeaders;

      if (WLJSX.Object.isFunction(extras.push)) {
        for (var i = 0, length = extras.length; i < length; i += 2) {
          headers[extras[i]] = extras[i + 1];
        }
      }
      else {
        /*jshint forin:false*/
        for (var key in extras) {
          var value = extras[key];
          headers[key] = (value === null || typeof(value) == 'undefined') ? '' : value;
        }
      }
    }
    for (var name in headers) {
      this.transport.setRequestHeader(name, unescape(encodeURIComponent(headers[name])));
    }
  },

  success: function() {
    var status = this.getStatus();
    if (status === 0 && this.isSameOrigin() === false) {
      return false;
    }
    /*jshint eqeqeq:false*/
    return !status || (status >= 200 && status < 300) || status == 304 || status == 302;
  },

  getStatus: function() {
    try {
      if (this.transport.status === 1223) {
        return 204;
      }
      return this.transport.status || 0;
    } catch (e) {
      return 0;
    }
  },

  respondToReadyState: function(readyState) {
    var state = window.WLJSX.Ajax.Request.Events[readyState],
      response = new window.WLJSX.Ajax.Response(this);

    /*jshint eqeqeq:false*/
    if (state == 'Complete') {
      try {
        this._complete = true;
        (this.options['on' + response.status] || this.options['on' + (this.success() ? 'Success' : 'Failure')] || WLJSX.emptyFunction)(response, response.headerJSON);
      } catch (e) {
        this.dispatchException(e);
      }

      var contentType = response.getHeader('Content-type');
      if (this.options.evalJS == 'force' || (this.options.evalJS &&
          this.isSameOrigin() &&
          contentType &&
          contentType.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i))) {
        this.evalResponse();
      }
    }

    try {
      (this.options['on' + state] || WLJSX.emptyFunction)(response, response.headerJSON);
    } catch (e) {
      this.dispatchException(e);
    }

    if (state == 'Complete') {
      this.transport.onreadystatechange = WLJSX.emptyFunction;
    }
  },

  isSameOrigin: function() {
    var m = this.url.match(/^\s*https?:\/\/[^\/]*/);
    var url = location.protocol + '//' + document.domain;
    if (location.port) {
      url += ':' + location.port;
    }
    /*jshint eqeqeq:false*/
    return (!m || (m[0] == url));
  },

  getHeader: function(name) {
    try {
      return this.transport.getResponseHeader(name) || null;
    } catch (e) {
      return null;
    }
  },

  evalResponse: function() {
    try {
      /*jshint evil:true*/
      return eval(WLJSX.String.unfilterJSON(this.transport.responseText || ''));
    } catch (e) {
      this.dispatchException(e);
    }
  },

  dispatchException: function(exception) {
    (this.options.onException || WLJSX.emptyFunction)(this, exception);
  }
});

window.WLJSX.Ajax.Request.Events = ['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete'];

window.WLJSX.Ajax.Response = WLJSX.Class.create({
  initialize: function(request) {
    this.request = request;
    var transport = this.transport = request.transport,
      readyState = this.readyState = transport.readyState;

    /*jshint eqeqeq:false*/
    if ((readyState > 2 && !WLJSX.detectBrowser().isIE) || readyState == 4) {
      this.status = this.getStatus();
      this.statusText = this.getStatusText();
      this.responseText = WLJSX.String.interpret(transport.responseText);
      this.headerJSON = this._getHeaderJSON();
    }

    if (readyState == 4) {
      var xml = transport.responseXML;
      this.responseXML = WLJSX.Object.isUndefined(xml) ? null : xml;
      this.responseJSON = this._getResponseJSON();

      WL.Analytics._logInboundResponse(request, this);
    }
  },

  status: 0,

  statusText: '',

  getStatus: window.WLJSX.Ajax.Request.prototype.getStatus,

  getStatusText: function() {
    try {
      return this.transport.statusText || '';
    } catch (e) {
      return '';
    }
  },

  getHeader: window.WLJSX.Ajax.Request.prototype.getHeader,

  getAllHeaders: function() {
    try {
      return this.getAllResponseHeaders();
    } catch (e) {
      return null;
    }
  },

  getResponseHeader: function(name) {
    return this.transport.getResponseHeader(name);
  },

  getAllResponseHeaders: function() {
    return this.transport.getAllResponseHeaders();
  },

  _getHeaderJSON: function() {
    var json = this.getHeader('X-JSON');
    if (!json) {
      return null;
    }
    json = decodeURIComponent(escape(json));
    try {
      return String.wl.evalJSON(json, this.request.options.sanitizeJSON || !this.request.isSameOrigin());
    } catch (e) {
      this.request.dispatchException(e);
    }
  },

  _getResponseJSON: function() {
    //Assume JSON is returned regardless, and only throw an exception
    //if we expected JSON and JSON was not returned
    var options = this.request.options;
    try {
      return WLJSX.String.evalJSON(this.responseText, (options.sanitizeJSON || !this.request.isSameOrigin()));
    } catch (e) {
      /*jshint eqeqeq:false*/
      if (!options.evalJSON || (options.evalJSON != 'force' && (this.getHeader('Content-type') || '').indexOf('application/json') < 0) || WLJSX.String.isBlank(this.responseText)) {
        return null;
      } else {
        this.request.dispatchException(e);
      }
    }
  }
});

/**
 * ================================================================= 
 * Source file taken from :: dialogwindow.js
 * ================================================================= 
 */

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/*globals WL, WLJSX, WLJQ*/

/* JavaScript content from wlclient/js/window.js in Common Resources */
WL.DialogWindow = WLJSX.Class.create();
WL.DialogWindow.prototype = {

  /*jshint strict:false*/

  initialize: function() {
    this.options = WLJSX.Object.extend({
      className: 'modalWindow',
      title: '&nbsp;',
      body: '&nbsp;',
      buttons: [{}],
      width: 200,
      height: 300
    }, arguments[0] || {});

    /*jshint unused:false*/
    var win, overlay, dialog, content, viewportWidth, viewportHeight, dialogWidth, dialogHeight, wlDialogTitle, wlDialogBody, langDirection;
    // remove old dialogs if exists
    var oldDialog = WLJSX.$('WLdialogContainer');
    if (oldDialog) {
      WLJSX.remove(oldDialog);
    }

    // create new dialog with children elements
    win = WLJSX.newElement('<div/>', {
      'id': 'WLdialogContainer'
    });

    // To get the language (WL.ClientMessages.lang injected by server) used by the browser in preview environment
    /*jshint eqeqeq:false*/
    if (WL.StaticAppProps.ENVIRONMENT == WL.Environment.PREVIEW && WL.StaticAppProps.PREVIEW_ENVIRONMENT == 'common' && typeof WL.ClientMessages.lang !== undefined) {
      langDirection = WL.Utils.getLanguageDirectionality(WL.ClientMessages.lang);
    } else {
      langDirection = WL.Utils.getLanguageDirectionality();
    }

    if (langDirection === WL.Language.DIRECTION_RTL) {
      win.dir = 'rtl';
    }

    overlay = WLJSX.newElement('<div/>', {
      'id': 'WLdialogOverlay'
    });

    dialog = WLJSX.newElement('<div/>', {
      'id': 'WLdialog'
    });

    wlDialogTitle = WLJSX.newElement('<h1/>', {
      'id': 'WLdialogTitle'
    });

    wlDialogBody = WLJSX.newElement('<p/>', {
      'id': 'WLdialogBody'
    });

    WLJSX.html(wlDialogTitle, this.options.title);
    WLJSX.html(wlDialogBody, this.options.body);

    WLJSX.prepend(dialog, wlDialogTitle);
    WLJSX.append(dialog, wlDialogBody);

    WLJSX.prepend(win, overlay);
    WLJSX.append(win, dialog);

    // append dialog to the body element
    WLJSX.prepend(WLJSX.$$$('body'), win);

    // position the dialog in the middle of the screen
    viewportWidth = WLJSX.getViewportWidth();
    viewportHeight = WLJSX.getViewportHeight();
    dialogWidth = WLJQ(dialog).outerWidth();
    dialogHeight = WLJQ(dialog).outerHeight();

    WLJSX.css(dialog, {
      left: viewportWidth / 2 - dialogWidth / 2 + 'px',
      top: viewportHeight / 2 - dialogHeight / 2 + 'px'
    });
  },

  setTitle: function(title) {
    if (!title || title === '') {
      title = '&nbsp;';
    }
    var dialogTitle = WLJSX.$('WLdialogTitle');
    WLJSX.html(dialogTitle, title);
  },

  setHTMLContent: function(html) {
    var dialogBody = WLJSX.$('WLdialogBody');
    WLJSX.html(dialogBody, html);
  },

  setContent: function(html) {
    var dialogBody = WLJSX.$('WLdialogBody');
    WLJSX.html(dialogBody, html);
  },

  showCenter: function() {
    this.show();
  },

  show: function() {
    // hack for Safari
    if (typeof this.overlayOpacity === 'undefined') {
      var that = this;
      setTimeout(function() {
        that.show();
      }, 10);
      return;
    }
    var wlDialogContainer = WLJSX.$('WLdialogContainer');
    WLJSX.show(wlDialogContainer);
  },

  hide: function() {
    var wlDialogContainer = WLJSX.$('WLdialogContainer');
    WLJSX.hide(wlDialogContainer);
  },

  destroy: function() {
    var wlDialogContainer = WLJSX.$('WLdialogContainer');
    WLJSX.remove(wlDialogContainer);
  }
};


/**
 * A Wrapper for the dialog required libraries:
 *
 * @author Benny Weingarten, Raanan Avidor
 * @require window.js
 */
WL.Dialog = WLJSX.Class.create();
WL.Dialog.prototype = {

  __dialog: null,
  __options: {
    title: '',
    text: ''
  },

  /**
   * The constructor creates the dialog but does not display it. Call the show() method to display the
   * dialog.
   *
   * @param options Optional. An object of the following form: { title: string, text: string }
   */
  initialize: function(containerId, options) {
    WL.Validators.validateOptions({
      title: 'string',
      text: 'string'
    }, options, 'new WL.Dialog');

    WLJSX.Object.extend(this.__options, options || {});

    this.__dialog = new WL.DialogWindow({
      title: this.__options.title,
      text: this.__options.text
    });
    this.setText(this.__options.text);
  },

  /**
   * Sets the title of the dialog.
   * @param titleText the title of the dialog.
   */
  setTitle: function(titleText) {
    this.__dialog.setTitle(titleText);
  },

  /**
   * Sets text within the dialog.
   * @param text text within the dialog.
   */
  setText: function(text) {
    this.__dialog.setHTMLContent(text);
  },

  /**
   * Shows the dialog.
   */
  show: function() {
    this.__dialog.showCenter();
  },

  /**
   * Hides the dialog.
   */
  hide: function() {
    this.__dialog.hide();
  },

  /**
   * Destroys the dialog.
   */
  destroy: function() {
    this.__dialog.destroy();
  }
};

/**
 * ================================================================= 
 * Source file taken from :: wlutils.js
 * ================================================================= 
 */

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/*globals WL, WL_, __WL, WLJSX, WLJQ, WL_LOADER_CHECKSUM, WL_I18N_MESSAGES, WL_CLASS_NAME_TRANSLATE*/

/*
 * IBM MobileFirst Platform Utils
 */
var __WLUtils = function () {

  /*jshint strict:false*/

  // ........................Private methods........................

  function getStyle(element, cssprop) {
    if (element.currentStyle) { // IE
      return element.currentStyle[cssprop];
    } else if (document.defaultView && document.defaultView.getComputedStyle) { // Firefox
      return document.defaultView.getComputedStyle(element, '')[cssprop];
    } else { // try and get inline style
      return element.style[cssprop];
    }
  }

  function getWidth(element) {
    var maxWidth = getStyle(element, 'width');
    var isPercentage = (maxWidth + '').indexOf('%') > -1;
    maxWidth = parseInt(maxWidth, 10);
    if (maxWidth === null || isNaN(maxWidth) || maxWidth === 0 || isPercentage) {
      maxWidth = getStyle(element, 'maxWidth');
      isPercentage = (maxWidth + '').indexOf('%') > -1;
      maxWidth = parseInt(maxWidth, 10);
      if (maxWidth === null || isNaN(maxWidth) || maxWidth === 0 || isPercentage) {
        maxWidth = WLJSX.width(element);
        maxWidth = parseInt(maxWidth, 10);
        if (maxWidth === null || isNaN(maxWidth)) {
          maxWidth = 0;
        }
      }
    }
    return maxWidth;
  }

  // @Deprecated
  function doEllipsis(elm, options) {
    var currentOptions = {
      maxWidth: 0,
      addTitle: false
    };

    WLJSX.Object.extend(currentOptions, options || {});
    var origText = elm.innerHTML;
    var display = elm.style.display;
    elm.style.display = 'inline';
    var whiteSpace = elm.style.whiteSpace;
    elm.style.whiteSpace = 'nowrap';
    var maxWidth = currentOptions.maxWidth > 0 ? currentOptions.maxWidth : getWidth(elm);
    var width = elm.style.width;
    elm.style.width = 'auto';
    // Can't get the width of the element, no ellipsis is performed.
    if (maxWidth === 0 || WLJSX.width(elm) <= maxWidth) {
      elm.style.display = display;
      elm.style.width = width;
      elm.style.whiteSpace = whiteSpace;
      return;
    }
    // Reset content of element
    var text = origText;

    // Start width - assume min 3px per char
    var maxNumberOfChars = Math.ceil(maxWidth / 3);
    text = text.substring(0, maxNumberOfChars);

    // First reduce text size to fit the element
    while (WLJSX.width(elm) >= maxWidth && text.length > 3) {
      text = text.substr(0, text.length - 2);
      WLJSX.html(elm, text);
    }

    do {
      text = text.substr(0, text.length - 1);
      WLJSX.html(elm, text + '...');
    } while (WLJSX.width(elm) > maxWidth && text.length > 3);

    if (text !== origText && currentOptions.addTitle) {
      elm.title = origText;
    }
    elm.style.display = display;
    elm.style.width = width;
    elm.style.whiteSpace = whiteSpace;
  }

  function findCordovaPath() {
    var path = null;
    var scripts = document.getElementsByTagName('script');
    var startterm = '/cordova.';
    var term = '/cordova.js';
    for (var n = scripts.length - 1; n > -1; n--) {
      var src = scripts[n].src.replace(/\?.*$/, ''); // Strip any query param (CB-6007).
      // Fix:421 findCordovaPath function to work with hashed builds.
      var idx = src.indexOf(startterm);
      if (idx >= 0 && src.substring(idx).replace(/cordova\.[^\.\/]*\.js/, 'cordova.js') === term) {
        term = src.substring(idx);
      }
      if (src.indexOf(term) === (src.length - term.length)) {
        path = src.substring(0, src.length - term.length) + '/';
        break;
      }
    }
    return path;
  }

  function loadWLClientMessages(lang) {
    var url;
    
  //Windows 8 does not allow ajax calls to local json files. For Windows 8 environment set isLocal option in the ajax call to false.
    //For other environments keep it as true.         
    var isLocal = true;
    if (lang.indexOf('en') !== 0 && (WL.Client.getEnvironment() === WL.Environment.WINDOWS8 || WL.Client.getEnvironment() === WL.Environment.WINDOWS || WL.Client.getEnvironment() === WL.Environment.WINDOWSPHONE8)) {
      isLocal = false;
      lang = 'windows_' + lang;
    }

    var isAsyncRequest = false;
    // Fix for Ionic 4 WKWebview iOS issue. WKWebview reloads the app for sync http requests to local files, Hence we are making request as async to read messages.json file.
    var isIonicApp = (typeof window.Ionic !== 'undefined');
    if (isIonicApp && (WL.Client.getEnvironment() === WL.Env.IPHONE || WL.Client.getEnvironment() === WL.Env.IPAD)) {
      isAsyncRequest = true;
    }

    if (WL.StaticAppProps.MESSAGES_DIR) {
      url = findCordovaPath() + WL.StaticAppProps.MESSAGES_DIR + '/' + lang + '/messages.json';
      if (lang === null || typeof lang === 'undefined' || lang.indexOf('en') === 0) {
        url = findCordovaPath() + WL.StaticAppProps.MESSAGES_DIR + '/messages.json';
      }
    } else {
      url = 'worklight/messages/' + lang + '/messages.json';
      if (lang === null || typeof lang === 'undefined' || lang.indexOf('en') === 0) {
        // why indexOf? check 41118
        url = 'worklight/messages/messages.json';
      }
    }

    // try-catch block required.In Windows 8 if load does not succeed, it does not go to error callback.
    // Instead throws an exception and execution ends.
    try {
      WLJQ.ajax({
        async: isAsyncRequest,
        isLocal: isLocal,
        dataType: 'json',
        url: url,
        success: function (data) {
          WL.ClientMessages = data;
        },
        error: function () {}
      });
    } catch (e) {}
  }

  this.wlReachableCallback = function () {};

  // .................... Public methods ...........................

  this.__networkCheckTimeout = function () {
    if (!window.connectivityCheckDone) {
      WL.Logger.debug('Connectivity check has timed out');
      window.connectivityCheckDone = true;
    }
  };

  /**
   * @param {Object}
   *            value
   * @return value if defined or null otherwise.
   */
  this.safeGetValue = function (value) {
    if (!WLJSX.Object.isUndefined(value)) {
      return value;
    } else {
      return null;
    }
  };

  /**
   * @deprecated - use WL.App.getErrorMessage(
   */
  this.getErrorMessage = function (e) {
    if (e === null) {
      return null;
    } else if (WLJSX.Object.isString(e)) {
      return e;
    } else if (e.description) {
      return e.description;
    } else if (e.message) {
      return e.message;
    } else if (WLJSX.Object.isArray(e)) {
      return e.join(',');
    } else {
      return e.toString();
    }
  };

  /**
   * Adds a parameter to the given URL.
   *
   * @param {string}
   *            url
   * @param {string}
   *            parameter name
   * @param {string}
   *            parameter value
   * @return the url with the added parameter.
   */
  this.addParameterToURL = function (url, name, value) {
    if (url.indexOf('?') === -1) {
      url += '?';
    } else {
      url += '&';
    }
    url += (name + '=' + encodeURIComponent(value));
    return url;
  };

  // @Deprecated
  this.ellipsisByClassName = function (className, options) {
    var elements = WLJSX.$$('.' + className);
    for (var i = 0; i < elements.length; i++) {
      doEllipsis(elements[i], options);
    }
  };

  // @Deprecated
  this.ellipsisByElement = function (e, options) {
    doEllipsis(e, options);
  };

  this.formatString = function () {
    var resStr = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      var re = new RegExp('\\{' + (i - 1) + '\\}', 'g');
      resStr = resStr.replace(re, arguments[i]);
    }
    return resStr;
  };

  var __deviceLocale;
  this.setLocalization = function () {
    var deviceLocale = WL.App.__getDeviceLocale();
    //The json containing user facing messages needs to be loaded and assigned only once. 
    //Check if the object has already been assigned.Else re-use the existing object
    if (typeof WL.ClientMessages === 'undefined' || __deviceLocale !== deviceLocale) {
      __deviceLocale = deviceLocale;
      WL.ClientMessages = undefined;
      // In web (mobile web and desktop web), we inject the proper WL.ClientMessages in the HTML file at the server,
      // so we would never get into this conditional code block.  This is a good thing!  No extra round trips to the
      // server to pick up language files.  We trust the web browser's Accept-Language header in those environments.
      // Ensure that the messages.json files are placed in lang folders or lang-COUNTRYCODE folders. 
      // Ensure that the separator is '-' and not '_' as the RPX tool places translated files into folders with '-'.          
      var lang = deviceLocale.substring(0, 2);
      var region = deviceLocale.substring(3);
      deviceLocale = lang.toLowerCase();
      if (region) {
        deviceLocale += '-' + region.toUpperCase();
      }

      // special fallback for zh languages (see 41026)
      if (deviceLocale.indexOf('zh-HANS') !== -1) {
        deviceLocale = 'zh';
      } else if (deviceLocale.indexOf('zh-HANT') !== -1 || deviceLocale.indexOf('zh-HK') !== -1) {
        deviceLocale = 'zh-TW';
      }

      try {
        //Check if the languagePreferences has been populated
        if (typeof WL.StaticAppProps.LANGUAGE_PREFERENCES !== 'undefined' &&
          WL.StaticAppProps.LANGUAGE_PREFERENCES !== null &&
          WL.StaticAppProps.LANGUAGE_PREFERENCES.trim().length > 0) {

          var wlLangPrefs = WL.StaticAppProps.LANGUAGE_PREFERENCES.split(',');

          /*jshint maxdepth:4*/
          for (var i = 0, len = wlLangPrefs.length; i < len; i++) {
            wlLangPrefs[i] = wlLangPrefs[i].trim();
            // special fallback for zh languages (see 41026)

            /*jshint maxdepth:5*/
            if (wlLangPrefs[i].indexOf('zh-Hans') !== -1) {
              wlLangPrefs[i] = 'zh';
            }
            if (wlLangPrefs[i].indexOf('zh-Hant') !== -1 || wlLangPrefs[i].indexOf('zh-HK') !== -1) {
              wlLangPrefs[i] = 'zh-TW';
            }
          }

          // check if the deviceLocale is part of the preference list.If so load it and skip rest.
          if (wlLangPrefs.indexOf(deviceLocale) !== -1) {
            loadWLClientMessages(deviceLocale);
          }

          // deviceLocale will always have language and locale part
          if (typeof WL.ClientMessages === 'undefined' /* && deviceLocale.length > 2*/ ) {
            // deviceLocale is not part of wlLangPrefs,
            // check if the deviceLanguage is part of the preference list. If so, load it
            if (wlLangPrefs.indexOf(lang) !== -1) {
              loadWLClientMessages(lang);
            }
          }

          if (typeof WL.ClientMessages === 'undefined') {
            // Loop through wlLangPrefs to find the first valid language
            for (var j = 0, length = wlLangPrefs.length; j < length; j++) {
              loadWLClientMessages(wlLangPrefs[j]);
              /*jshint maxdepth:6*/
              if (typeof WL.ClientMessages !== 'undefined') {
                break;
              }
            }
          }
        } else {
          // Get the file from which to pickup the user visible messages.
          // prefer deviceLocale, then deviceLanguage, then English, in that order
          if (typeof WL.ClientMessages === 'undefined') {
            loadWLClientMessages(deviceLocale);
          }
          // we don't have a deviceLanguage translation file, try deviceLanguage
          if (typeof WL.ClientMessages === 'undefined') {
            loadWLClientMessages(lang);
          }
        }
      } catch (e) {
        //TODO: log error
      }

      // fall back to English
      if (typeof WL.ClientMessages === 'undefined') {
        loadWLClientMessages('en');
        // TODO: log and crash?  If WL.ClientMessages is still undefined here, we're dead (but this could be made safe by using a function in WL.ClientMessages to
        // retrieve messages rather than referring to a (possibly undefined) value directly
      }
    }
  };

  this.getLanguageDirectionality = function (lang) {
    if (typeof lang !== 'string') {
      lang = WL.App.__getDeviceLanguage();
    }
    if (WL_.indexOf(WL.Language.LANGUAGES_RTL, lang) !== -1) {
      return WL.Language.DIRECTION_RTL;
    }
    return WL.Language.DIRECTION_LTR;
  };

  this.clearText = function (className, attribute) {
    var elementsToClear = WLJSX.$$('.' + className);
    var element;
    for (var i = 0; i < elementsToClear.length; i++) {
      element = elementsToClear[i];
      if (!attribute || attribute === 'innerHTML') {
        if (element.tagName.toLowerCase() === 'input') {
          element.value = '';
        } else {
          WLJSX.empty(element);
        }
      } else if (attribute === 'title') {
        element.title = '';
      } else if (attribute === 'alt') {
        element.alt = '';
      }
    }
  };

  this.replaceElementsText = function (parentId, dictionary, attribute) {
    if (!dictionary) {
      dictionary = WL_I18N_MESSAGES;
    }

    var cssSelector;
    if (parentId) {
      cssSelector = '#' + parentId + ' .' + WL_CLASS_NAME_TRANSLATE;
    } else {
      cssSelector = '.' + WL_CLASS_NAME_TRANSLATE;
    }

    var elementsToFill = WLJSX.$$(cssSelector);
    var element;
    for (var i = 0; i < elementsToFill.length; i++) {
      element = elementsToFill[i];
      if (!attribute || attribute === 'innerHTML') {
        // Use value instead of innerHTML in input elements
        if (element.tagName.toLowerCase() === 'input') {
          element.value = dictionary[element.id];
        } else {
          WLJSX.html(element, dictionary[element.id]);
        }
      } else if (attribute === 'title') {
        element.title = dictionary[element.id];
      } else if (attribute === 'alt') {
        element.alt = dictionary[element.id];
      }
    }
  };

  /*
   * Adds the URL prefix to the URL if not already added and
   * WL.StaticAppProps.WORKLIGHT_ROOT_URL is set This is used when working
   * with desktop gadget and we need a static URL
   */
  this.createAPIRequestURL = function (path) {
    var resultURL;

    // if "path" is an absolute URL we just use it
    if (/^[a-z]+:\/\//i.test(path)) {
      resultURL = path;
    } //check itms-services (download app inside app url) and if it is that, accept it.
    else if ((WL.Client.getEnvironment() === WL.Environment.IPHONE || WL.Client.getEnvironment() === WL.Environment.IPAD) && path.indexOf('itms-services') === 0) {
      resultURL = path;
    } else if (path.indexOf('/') === 0) {
      // In case using absolute url like "/random" it must be under app/services
      var appServicesUrl;
      if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_SERVER_CHANGE)) {
        appServicesUrl = WL.Client.getAppProperty(WL.AppProp.APP_SERVICES_RELATIVE_URL);
      } else {
          appServicesUrl = WL.Client.getAppProperty(WL.AppProp.APP_SERVICES_URL);
          if (WL.Client.getEnvironment() === 'windows' && path.indexOf('/loguploader') !== -1){
              appServicesUrl = appServicesUrl.split('/apps/services')[0] + '/api/';
          }
      }
      resultURL = appServicesUrl.substr(0, appServicesUrl.length - 1) + path;
    } else {
      // Relative URL
      if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_SERVER_CHANGE)) {
        // We take <env-name>/" - and append "path" to it
        resultURL = WL.Client.getAppProperty(WL.AppProp.WORKLIGHT_RELATIVE_URL) + path;
      } else {
        // We take http://<IP>:<PORT>/<app-name>/<env-name>/" - and append "path" to it
        resultURL = WL.Client.getAppProperty(WL.AppProp.WORKLIGHT_ROOT_URL) + path;
      }
    }
    return resultURL;
  };

  /*
   * Extends the target object with the source object only with fields and
   * methods that do not already exist on the target.
   */
  this.extend = function (target, source) {
    target = WLJSX.Object.extend(WLJSX.Object.clone(source), target);
    return target;
  };

  /*
   * extracts the host part of a url. For example, for the input
   * url="https://212.10.0.15:8888/application/service/?arg=blue", the result
   * would be "212.10.0.15".
   */
  this.getHostname = function (url) {
    var re = new RegExp('^(?:f|ht)tp(?:s)?://([^/:]+)', 'im');
    return url.match(re)[1].toString();
  };

  this.dispatchWLEvent = function (eventName, data) {
    // ie (WP7/VISTA) support custom event
    if (typeof document.createEvent === 'undefined') {
      WLJSX.trigger(document, eventName);
    } else {
      var e = document.createEvent('Events');
      e.initEvent(eventName, false, false);
      if (data !== null) {
          e.data = data;
      }
      document.dispatchEvent(e);
    }
  };

  /**
   * function: getFreeSpaceOnDevice return: free space on device in Bytes
   * Should be called only for environments that support direct update
   * (currently Android + iOS)
   */
  this.getFreeSpaceOnDevice = function () {
    var freeSpace;

    if (WL.EnvProfile.isEnabled(WL.EPField.ISIOS) || WL.Client.getEnvironment() === WL.Env.ANDROID) {
      freeSpace = WL.StaticAppProps.FREE_SPACE;
    } else {
      var msg = 'WL.Utils.getFreeSpaceOnDevice(..) should be supported only on environments that support direct update';
      var ex = new Error(msg);
      WL.Logger.error(msg, ex);
      throw ex;
    }
    return Number(freeSpace).toFixed(2);
  };

  // hide application with a black div
  this.addBlackDiv = function () {
    var blackDiv = WLJSX.newElement('<div/>', {
      'id': 'blockingDiv',
      'style': 'background-color:black; z-index: 9999; position: fix; top:0; left:0; right:0; bottom:0;'
    });
    document.body.appendChild(blackDiv);
  };

  this.removeBlackDiv = function () {
    while (WLJSX.$('blockingDiv')) {
      document.body.removeChild(WLJSX.$('blockingDiv'));
    }
  };

  this.getLoaderChecksum = function () {
    var loaderChecksum;
    if (WL.EnvProfile.isEnabled(WL.EPField.ISIOS) || WL.Client.getEnvironment() === WL.Env.ANDROID) {
      loaderChecksum = WL.StaticAppProps.LOADER_CHECKSUM;
    }
    // environments that don't support skins should return null
    else {
      var msg = 'WL.Utils.getLoaderChecksum(..) should be supported only on environments that support direct update';
      var ex = new Error(msg);
      WL.Logger.error(msg, ex);
      throw ex;
    }

    if ((typeof loaderChecksum === 'undefined') || (loaderChecksum === null) || (loaderChecksum.length === 0)) {
      loaderChecksum = WL_LOADER_CHECKSUM.checksum;
      WL.Utils.setLoaderChecksum(loaderChecksum);
    }
    return loaderChecksum;
  };

  this.setLoaderChecksum = function (loaderChecksum) {
    if ((WL.Client.getEnvironment() === WL.Env.ANDROID) || (WL.EnvProfile.isEnabled(WL.EPField.ISIOS))) {
      WL.App.writeUserPref('wlLoaderChecksum', loaderChecksum);
    }
    // environments that don't support skins should return null
    else {
      var msg = 'WL.Utils.setLoaderChecksum(..) should be supported only on environments that support direct update';
      var ex = new Error(msg);
      WL.Logger.error(msg, ex);
      throw ex;
    }
  };

  this.safeInnerHTML = function (target, contentToSet, options) {
    // iPhone sometimes just fails to set innerHTML - no idea why. you
    // end up with an empty div.
    // it's more reliable with a setTimeout but still not reliable enough.
    // this function sets the text and then checks it. if it's not
    // there, it tries once more. horrible, but necessary.
    // note: this really became an issue within the app and was even
    // worse in 1st gen and 3g. 3GS was mostly fixed with one timeout,
    // whereas even 3 didn't seem to always fix pre-3GS
    // some blog posts indicated that they noticed the problem only
    // when the messed with location.href
    // (http://blog.johnmckerrell.com/2007/03/07/problems-with-safari-and-innerhtml/)
    // so i've removed this stuff in the app and location.href is no
    // longer changed. seems to be worse with database than it was
    // with XHR but assume we'll leave it in place to be safe
    var _options = {
      onSuccess: function () {},
      onFailure: function () {
        WL.Logger.debug('safeInnerHtml error. Could not perform ' + target.id + '.innerHtml = ' + contentToSet)
          .bind(this);
      },
      count: 10
    };
    if (!WLJSX.Object.isUndefined(options)) {
      _options = WLJSX.Object.extend(_options, options);
    }

    if (!WL.EnvProfile.isEnabled(WL.EPField.ISIOS)) {
      target.innerHTML = contentToSet;
      _options.onSuccess();
      return;
    }

    target.innerHTML = contentToSet;
    var timeout = 50;
    var count = _options.count;

    if ((contentToSet !== '' && target.innerHTML === '') || (contentToSet === '' && target.innerHTML !== '')) {
      if (_options.count <= 0) {
        _options.onFailure();
      } else {
        WL.Logger.debug(target.id + '.innerHTML failed. number of attempts remaining: ' + count + ' ( + ' + timeout + 'ms timout)');
        --count;
        _options.count = count;
        setTimeout(function () {
          this.safeInnerHTML(target, contentToSet, _options);
        }, timeout);
      }
    } else {
      _options.onSuccess();
    }
  };

  /**
   * Helper function, there is a difference between IOS and Android In Android
   * Cordova returns the data as is, while in IOS it envelops it in another
   * Object. Check if IOS and if so return the inner data
   *
   * @param response -
   *            Cordova response Object
   * @param innerFieldName -
   *            the name of the inner object to retrieved in IOS
   */
  this.getCordovaPluginResponseObject = function (response, innerFieldName) {
    if (WL.EnvProfile.isEnabled(WL.EPField.ISIOS)) {
      if (response) {
        return response[innerFieldName];
      }
    }
    return response;
  };

  /**
   * Version compares 2 version numbers in strings to the length of the maxLength parameter
   * @param {string} x
   * @param {string} y
   * @param {string} maxLength
   * @return -1 if x>y, 1 if x<y, or 0 if equal
   */
  this.versionCompare = function (x, y, maxLength) {
    var i = 0,
      /*jshint camelcase:false*/
      x_components = x.split('.'),
      y_components = y.split('.'),
      len = Math.min(x_components.length, y_components.length),
      maxLng = maxLength || 5;

    if (x === y) {
      return 0;
    }

    for (i = 0; i < len; i += 1) {

      // x > y
      if (parseInt(x_components[i], 10) > parseInt(y_components[i], 10)) {
        return 1;
      }

      // y > x
      if (parseInt(x_components[i], 10) < parseInt(y_components[i], 10)) {
        return -1;
      }

      if (i >= maxLng) {
        break; //check only up to maxLength+1 parts
      }

      // If one's a prefix of the other, the longer one is greater.
      if (x_components.length > y_components.length) {
        return 1;
      }

      if (x_components.length < y_components.length) {
        return -1;
      }


    }

    return 0; //same
  };
}; // End WL.Utils

/*jshint newcap:false*/
__WL.prototype.Utils = new __WLUtils();
WL.Utils = new __WLUtils();

/**
 * ================================================================= 
 * Source file taken from :: wlproperties.js
 * ================================================================= 
 */

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/*globals WL, __WL, WLJSX*/
/*jshint camelcase:false*/

WL.AppProperty = {
  AIR_ICON_16x16_PATH: 'AIR_ICON_16x16_PATH',
  AIR_ICON_128x128_PATH: 'AIR_ICON_128x128_PATH',
  DOWNLOAD_APP_LINK: 'DOWNLOAD_APP_LINK',
  ENVIRONMENT: 'ENVIRONMENT',
  APP_DISPLAY_NAME: 'APP_DISPLAY_NAME',
  APP_LOGIN_TYPE: 'APP_LOGIN_TYPE',
  APP_VERSION: 'APP_VERSION',
  HEIGHT: 'HEIGHT',
  IID: 'IID',
  LATEST_VERSION: 'LATEST_VERSION',
  LOGIN_DISPLAY_TYPE: 'LOGIN_DISPLAY_TYPE',
  LOGIN_REALM: 'LOGIN_REALM',
  MAIN_FILE_PATH: 'MAIN_FILE_PATH',
  SHOW_IN_TASKBAR: 'SHOW_IN_TASKBAR',
  THUMBNAIL_IMAGE_URL: 'THUMBNAIL_IMAGE_URL',
  WELCOME_PAGE_URL: 'WELCOME_PAGE_URL',
  WIDTH: 'WIDTH',
  WORKLIGHT_ROOT_URL: 'WORKLIGHT_ROOT_URL',
  WORKLIGHT_RELATIVE_URL: 'WORKLIGHT_RELATIVE_URL',
  APP_SERVICES_URL: 'APP_SERVICES_URL',
  APP_SERVICES_RELATIVE_URL: 'APP_SERVICES_RELATIVE_URL',
  WLCLIENT_TIMEOUT_IN_MILLIS: 'WLCLIENT_TIMEOUT_IN_MILLIS'
};

// Short alias:
WL.AppProp = WL.AppProperty;

// A copy of the Java GadgetEnvironment version.
var __WLEnvironment = {
  PREVIEW: 'preview',
  IPHONE: 'iphone',
  IPAD: 'ipad',
  DESKTOPBROWSER: 'desktopbrowser',
  ADOBE_AIR: 'air',
  ANDROID: 'android',
  BLACKBERRY10: 'blackberry10',
  WINDOWSPHONE8: 'windowsphone8',
  WINDOWS8: 'windows8',
  WINDOWS: 'windows',
  MOBILE_WEB: 'mobilewebapp'
};
__WL.prototype.Environment = __WLEnvironment;
WL.Environment = __WLEnvironment;
// Short alias:
WL.Env = WL.Environment;

// Constants for language manipulations
/*jshint unused:false*/
var WL_CLASS_NAME_TRANSLATE = 'translate';
var WL_I18N_MESSAGES = null;

// A copy of the Java AppLoginType version.
WL.AppLoginType = {
  LOGIN_ON_STARTUP: 'onStartup',
  LOGIN_ON_DEMAND: 'onDemand',
  NO_LOGIN: 'never'
};

WL.UserInfo = {
  IS_USER_AUTHENTICATED: 'isUserAuthenticated',
  USER_NAME: 'userName',
  LOGIN_NAME: 'loginName',
  USER_ID: 'userId'
};

WL.Orientation = {
  AUTO: -1,
  LANDSCAPE: 0,
  PORTRAIT: 1
};

WL.FixedViewType = {
  TOP: 'top',
  BOTTOM: 'bottom'
};

WL.Language = {
  DIRECTION_LTR: 0,
  DIRECTION_RTL: 1,
  LANGUAGES_RTL: ['he', 'iw', 'ar']
};


/*
 * NOTICE: All server errors MUST be defined with same values in the ErrorCode
 * java enumeration.
 */
var __WLErrorCode = {
  UNEXPECTED_ERROR: 'UNEXPECTED_ERROR',
  API_INVOCATION_FAILURE: 'API_INVOCATION_FAILURE',
  USER_INSTANCE_ACCESS_VIOLATION: 'USER_INSTANCE_ACCESS_VIOLATION',
  AUTHENTICATION_REQUIRED: 'AUTHENTICATION_REQUIRED',
  DOMAIN_ACCESS_FORBIDDEN: 'DOMAIN_ACCESS_FORBIDDEN',

  // Client Side Errors
  UNRESPONSIVE_HOST: 'UNRESPONSIVE_HOST',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  REQUEST_TIMEOUT: 'REQUEST_TIMEOUT',
  PROCEDURE_ERROR: 'PROCEDURE_ERROR',
  UNSUPPORTED_VERSION: 'UNSUPPORTED_VERSION',
  UNSUPPORTED_BROWSER: 'UNSUPPORTED_BROWSER',
  DISABLED_COOKIES: 'DISABLED_COOKIES',
  CONNECTION_IN_PROGRESS: 'CONNECTION_IN_PROGRESS',
  AUTHORIZATION_FAILURE: 'AUTHORIZATION_FAILURE',
  CHALLENGE_HANDLING_CANCELED: 'CHALLENGE_HANDLING_CANCELED'
};
__WL.prototype.ErrorCode = __WLErrorCode;
WL.ErrorCode = __WLErrorCode;

WL.FBRealmPopupOptions = {
  width: 1000,
  height: 600
};

// save the base url since the WL.StaticAppProps.WORKLIGHT_ROOT_URL &&
// WL.StaticAppProps.APP_SERVICES_URL
WL.StaticAppProps.POSTFIX_WORKLIGHT_ROOT_URL = WL.StaticAppProps.WORKLIGHT_ROOT_URL;
WL.StaticAppProps.POSTFIX_APP_SERVICES_URL = WL.StaticAppProps.APP_SERVICES_URL;


WL.EPField = {

  // NOTICE - value must be equal to the field name!!!
  SUPPORT_COOKIES: 'SUPPORT_COOKIES',
  DESKTOP: 'DESKTOP',
  WEB: 'WEB',
  MOBILE: 'MOBILE',
  USES_AUTHENTICATOR: 'USES_AUTHENTICATOR',
  SAVES_USERNAME: 'SAVES_USERNAME',
  HAS_NATIVE_LOGGER: 'HAS_NATIVE_LOGGER',
  USES_NATIVE_TOOLBAR: 'USES_NATIVE_TOOLBAR',
  USES_CORDOVA: 'USES_CORDOVA',
  SUPPORT_DIRECT_UPDATE_FROM_SERVER: 'SUPPORT_DIRECT_UPDATE_FROM_SERVER',
  SUPPORT_DIAGNOSTIC: 'SUPPORT_DIAGNOSTIC',
  ISIOS: 'ISIOS',
  WEB_BROWSER_ONLY: 'WEB_BROWSER_ONLY',
  SUPPORT_CHALLENGE: 'SUPPORT_CHALLENGE',
  SUPPORT_SHELL: 'SUPPORT_SHELL',
  SUPPORT_DEVICE_AUTH: 'SUPPORT_DEVICE_AUTH',
  SERVER_ADDRESS_CONFIGURABLE: 'SERVER_ADDRESS_CONFIGURABLE',
  SUPPORT_WL_USER_PREF: 'SUPPORT_WL_USER_PREF',
  SUPPORT_WL_NATIVE_XHR: 'SUPPORT_WL_NATIVE_XHR',
  SUPPORT_WL_SERVER_CHANGE: 'SUPPORT_WL_SERVER_CHANGE',
  SUPPORT_OAUTH: 'SUPPORT_OAUTH'
};

WL.EnvProfileField = WL.EPField;
WL.BaseProfileData = {
  SUPPORT_COOKIES: true,
  SUPPORT_DIRECT_UPDATE_FROM_SERVER: false,
  SUPPORT_DIAGNOSTIC: false,
  SUPPORT_DEVICE_AUTH: false,
  SERVER_ADDRESS_CONFIGURABLE: false,
  SUPPORT_WL_USER_PREF: false
};
WL.WebProfileData = {
  WEB: true
};
WL.WebProfileData = WL.Utils.extend(WL.WebProfileData, WL.BaseProfileData);

WL.DesktopProfileData = {
  DESKTOP: true,
  USES_AUTHENTICATOR: true,
  SAVES_USERNAME: false
};

WL.MobileProfileData = {
  USES_AUTHENTICATOR: true,
  SAVES_USERNAME: false
};

WL.MobileProfileData = WL.Utils.extend(WL.MobileProfileData, WL.BaseProfileData);

// Notice that the default profile is web so all web environments
// Do not need to explicitly define one unless they want to
// define a field differently.
WL.DefaultProfileData = WLJSX.Object.clone(WL.WebProfileData);

WL.airProfileData = WLJSX.Object.clone(WL.DesktopProfileData);
WL.airProfileData[WL.EPField.HAS_NATIVE_LOGGER] = true;

WL.previewProfileData = WLJSX.Object.clone(WL.WebProfileData);
WL.previewProfileData[WL.EPField.WEB_BROWSER_ONLY] = true;
WL.previewProfileData[WL.EPField.SUPPORT_OAUTH] = true;

WL.embeddedProfileData = WLJSX.Object.clone(WL.WebProfileData);
WL.embeddedProfileData[WL.EPField.WEB_BROWSER_ONLY] = true;

WL.mobilewebappProfileData = WLJSX.Object.clone(WL.WebProfileData);
WL.mobilewebappProfileData[WL.EPField.WEB_BROWSER_ONLY] = true;

WL.iosDeviceProfileData = WLJSX.Object.clone(WL.MobileProfileData);
WL.iosDeviceProfileData[WL.EPField.MOBILE] = true;
WL.iosDeviceProfileData[WL.EPField.DESKTOP] = false;
WL.iosDeviceProfileData[WL.EPField.HAS_NATIVE_LOGGER] = true;
WL.iosDeviceProfileData[WL.EPField.SUPPORT_DIRECT_UPDATE_FROM_SERVER] = true;
WL.iosDeviceProfileData[WL.EPField.SAVES_USERNAME] = true;
WL.iosDeviceProfileData[WL.EPField.SAVES_USERNAME] = true;
WL.iosDeviceProfileData[WL.EPField.ISIOS] = true;
WL.iosDeviceProfileData[WL.EPField.USES_CORDOVA] = true;
WL.iosDeviceProfileData[WL.EPField.SUPPORT_DIAGNOSTIC] = true;
WL.iosDeviceProfileData[WL.EPField.SUPPORT_CHALLENGE] = true;
WL.iosDeviceProfileData[WL.EPField.SUPPORT_SHELL] = true;
WL.iosDeviceProfileData[WL.EPField.SUPPORT_DEVICE_AUTH] = true;
WL.iosDeviceProfileData[WL.EPField.SERVER_ADDRESS_CONFIGURABLE] = true;
WL.iosDeviceProfileData[WL.EPField.SUPPORT_WL_USER_PREF] = true;
WL.iosDeviceProfileData[WL.EPField.SUPPORT_WL_NATIVE_XHR] = true;
WL.iosDeviceProfileData[WL.EPField.SUPPORT_WL_SERVER_CHANGE] = true;
WL.iosDeviceProfileData[WL.EPField.SUPPORT_OAUTH] = true;


WL.iphoneProfileData = WLJSX.Object.clone(WL.iosDeviceProfileData);
WL.ipadProfileData = WLJSX.Object.clone(WL.iosDeviceProfileData);

WL.androidProfileData = WLJSX.Object.clone(WL.MobileProfileData);
WL.androidProfileData[WL.EPField.MOBILE] = true;
WL.androidProfileData[WL.EPField.DESKTOP] = false;
WL.androidProfileData[WL.EPField.USES_NATIVE_TOOLBAR] = true;
WL.androidProfileData[WL.EPField.HAS_NATIVE_LOGGER] = true;
WL.androidProfileData[WL.EPField.SUPPORT_DIRECT_UPDATE_FROM_SERVER] = true;
WL.androidProfileData[WL.EPField.SAVES_USERNAME] = true;
WL.androidProfileData[WL.EPField.USES_CORDOVA] = true;
WL.androidProfileData[WL.EPField.SUPPORT_DIAGNOSTIC] = true;
WL.androidProfileData[WL.EPField.SUPPORT_CHALLENGE] = true;
WL.androidProfileData[WL.EPField.SUPPORT_SHELL] = true;
WL.androidProfileData[WL.EPField.SUPPORT_DEVICE_AUTH] = true;
WL.androidProfileData[WL.EPField.SERVER_ADDRESS_CONFIGURABLE] = true;
WL.androidProfileData[WL.EPField.SUPPORT_WL_USER_PREF] = true;
WL.androidProfileData[WL.EPField.SUPPORT_WL_NATIVE_XHR] = true;
WL.androidProfileData[WL.EPField.SUPPORT_WL_SERVER_CHANGE] = true;
WL.androidProfileData[WL.EPField.SUPPORT_OAUTH] = true;

WL.blackberry10ProfileData = WLJSX.Object.clone(WL.MobileProfileData);
WL.blackberry10ProfileData[WL.EPField.MOBILE] = true;
WL.blackberry10ProfileData[WL.EPField.HAS_NATIVE_LOGGER] = true;
WL.blackberry10ProfileData[WL.EPField.USES_CORDOVA] = true;

//WL.windows8ProfileData = WLJSX.Object.clone(WL.MobileProfileData);
WL.windowsphone8ProfileData = WLJSX.Object.clone(WL.DesktopProfileData);
WL.windowsphone8ProfileData[WL.EPField.SUPPORT_CHALLENGE] = true;
WL.windowsphone8ProfileData[WL.EPField.SUPPORT_WL_NATIVE_XHR] = true;
WL.windowsphone8ProfileData[WL.EPField.SUPPORT_OAUTH] = true;
WL.windowsphone8ProfileData[WL.EPField.USES_CORDOVA] = true;

WL.windows8ProfileData = WLJSX.Object.clone(WL.DesktopProfileData);
WL.windows8ProfileData[WL.EPField.SUPPORT_CHALLENGE] = true;
WL.windows8ProfileData[WL.EPField.SUPPORT_WL_NATIVE_XHR] = true;
WL.windows8ProfileData[WL.EPField.SUPPORT_OAUTH] = true;
WL.windows8ProfileData[WL.EPField.USES_CORDOVA] = true;

WL.windowsProfileData = WLJSX.Object.clone(WL.DesktopProfileData);
WL.windowsProfileData[WL.EPField.SUPPORT_CHALLENGE] = true;
WL.windowsProfileData[WL.EPField.SUPPORT_WL_NATIVE_XHR] = true;
WL.windowsProfileData[WL.EPField.SUPPORT_OAUTH] = true;
WL.windowsProfileData[WL.EPField.USES_CORDOVA] = true;

/**
 * ================================================================= 
 * Source file taken from :: simpledialog.js
 * ================================================================= 
 */

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/


/*globals WL, WLJSX, cordova,  Windows, __WL, __WLSimpleDialog*/
/*jshint -W020*/

/**
 * Opens a native dialog using phonegap notification api
 */
__WLSimpleDialog = function() {

  /*jshint strict:false*/

  this.__buttons = null;
  this.__dialog = null;

  this.__callback = function(result) {

    if (WL.EnvProfile.isEnabled(WL.EPField.USES_CORDOVA)) {
      // Phonegap bug - native code returns button number instead of
      // button index
      //returned index from Cordova is one-based indexing 1,2,3..so
      result--;

    /*jshint noempty:false*/
    } else if (WL.StaticAppProps.ENVIRONMENT === WL.Environment.WINDOWS8 || WL.StaticAppProps.ENVIRONMENT === WL.Environment.WINDOWS || WL.StaticAppProps.ENVIRONMENT === WL.Environment.WINDOWSPHONE8) {
      // empty
    } else {
      WL.SimpleDialog.__dialog.hide();
      WL.SimpleDialog.__dialog = null;
    }

    // in case of invalid result value just clean up the array of buttons (otherwise next show will fail)
    if (result < 0 || result >= WL.SimpleDialog.__buttons.length) {
      WL.SimpleDialog.__buttons = null;
      WL.SimpleDialog.__dialog = null;
      return;
    }

    var handler = WL.SimpleDialog.__buttons[result].handler;

    WL.SimpleDialog.__buttons = null;

    if (handler) {
      handler();
    }
  };

  var __validateButtonsObject = function(buttons, callerName) {
    if (!WL.Validators.isValidationEnabled) {
      return;
    }
    if ((!buttons) || (buttons.constructor !== Array) || (buttons.length === 0)) {
      WL.Validators.logAndThrow('Invalid argument value \'' + buttons + '\', expected an array with button descriptors.', callerName);
    }
    for (var i = 0; i < buttons.length; i++) {
      if (!buttons[i].text || typeof buttons[i].text !== 'string') {
        WL.Validators.logAndThrow('Invalid argument value \'' + buttons + '\', button descriptor must contain text as string.', callerName);
      }
      if (buttons[i].handler && typeof buttons[i].handler !== 'function') {
        WL.Validators.logAndThrow('Invalid argument value \'' + buttons + '\', button descriptor handler must be a function.', callerName);
      }
    }
  };

  /**
   *
   *
   * @param title
   *            The title of the dialog window
   * @param text
   *            The text in the dialog window
   * @param buttons
   *            An array of button descriptors and event handler functions.
   *            Example: [{text: "OK", handler: function() { ... }}, {text:
   *            "Cancel", handler: function() { ... }}]
   * @param option
   *            Optional. When native dialog is not available for the current
   *            environment. An object of the following form: { title: string,
   *            text: string }
   *@param blockPopUp //Added as part of APAR 116206(PI88380 DIRECT UPDATE POP UP WINDOW DISAPPEARS ON
   *           ANDROID WHEN THE USERTOUCHES OUTSIDE THE WINDOW)
   *           Optional. If 'true', ensure android's modal is used so that pop 
   *           up does not disappear on clicking outside the pop up box.
   */
   /*jshint maxparams:5*/
  this.show = function(title, text, buttons, options, blockPopUp) {
    var wlDialogContainer = WLJSX.$('WLdialogContainer');
    if (!title && !text && wlDialogContainer) {
      WLJSX.css(wlDialogContainer, {
        display: 'block'
      });
      return;
    }
    if (WL.SimpleDialog.__buttons !== null) {
      WL.Logger.error('WL.SimpleDialog.show() cannot be invoked while dialog is open');
      return;
    }

    WL.Validators.validateArguments(['string', 'string', __validateButtonsObject,
      WL.Validators.validateObjectOrNull, WL.Validators.validateStringOrNull
    ], arguments, 'WL.SimpleDialog.show');

    WL.SimpleDialog.__buttons = buttons;
    if (WL.EnvProfile.isEnabled(WL.EPField.USES_CORDOVA)) {
      var buttonsArray = [];
      for (var i = 0; i < buttons.length; i++) {
        buttonsArray[i] = buttons[i].text;
      }

      // Check if we should use a modal dialog in Android
      var isAndroidModalDialog = isShowModalDialogInAndroid(title, buttons);

      // Use a custom plugin for Android modal Dialog. blockPopUp to 'true' ensures pop up box does not disappear on clicking outside the pop up box
      if (isAndroidModalDialog || blockPopUp === 'true') {
        cordova.exec(function(result) {
            WL.SimpleDialog.__callback(result);
          },
          function() {
            WL.Logger.error('WL.SimpleDialog.show() error in invoking callback.');
          },
          'WLCustomDialog', 'confirm', [text, title, buttonsArray]);
      } else {
          // use cordova to show the dialogue 
          navigator.notification.confirm(text, WL.SimpleDialog.__callback, title, buttonsArray);
      }
    } else if (WL.StaticAppProps.ENVIRONMENT === WL.Environment.WINDOWS8 || WL.StaticAppProps.ENVIRONMENT === WL.Environment.WINDOWS || WL.StaticAppProps.ENVIRONMENT === WL.Environment.WINDOWSPHONE8 ) {
      var messageDialog = new Windows.UI.Popups.MessageDialog(text, title);
      for (var k = 0; k < buttons.length; k += 1) {
        if (k < 3) { // WINDOWS8 can only show 3 buttons
          messageDialog.commands.append(new Windows.UI.Popups.UICommand(buttons[k].text, buttons[k].handler));
        }
      }
      messageDialog.showAsync().done(function () { WL.SimpleDialog.__callback(buttons.length); },
              function () { WL.SimpleDialog.__callback(buttons.length); });
    } else {
      var dialogOptions = options || {};

      this.__dialog = new WL.Dialog('body', dialogOptions);

      var message = '<p>' + text + '</p>';
      for (var l = 0; l < buttons.length; l++) {
        message += '<button type="button" class="dialogButton" tabIndex="' + l + '">' + buttons[l].text + '</button>';
      }

      this.__dialog.setTitle(title);
      this.__dialog.setText(message);
      this.__dialog.show();
      var dialogButtons = WLJSX.$$('.dialogButton');
      var clickListener = function(event) {
          WL.SimpleDialog.__callback(WLJSX.eventTarget(event).tabIndex);
          return false;
      };
      for (var m = 0; m < dialogButtons.length; m++) {
        WLJSX.bind(dialogButtons[m], 'click', clickListener);
      }
    }
  };

  // decide whether the dialog in android should be a modal one 
  // this funciton contains framework logic that should be refactored out of simpleDialog.show()!!!!
  function isShowModalDialogInAndroid(title, buttons) {
    if (WL.StaticAppProps.ENVIRONMENT !== WL.Env.ANDROID) {

      // this hack is for Android only ...
      return false;
    }

    // modal dialog in direct update 
    var isAndroidDirectUpdateModal = (title.toLowerCase() === WL.ClientMessages.directUpdateNotificationTitle.toLowerCase());
    // if there is a single button which isn't close in remote disable, we should have a modal dialog
    var isAndroidRemoteDisableModal = (!WL.Client.isShowCloseButtonOnRemoteDisable() && buttons.length === 1 && buttons[0].text.indexOf(WL.ClientMessages.close) === -1);

    var isModal = (isAndroidDirectUpdateModal || isAndroidRemoteDisableModal);

    return isModal;
  }
};
/*jshint newcap:false*/
__WL.prototype.SimpleDialog = new __WLSimpleDialog();
WL.SimpleDialog = new __WLSimpleDialog();


/**
 * ================================================================= 
 * Source file taken from :: wlapp.js
 * ================================================================= 
 */

/**
\ * @license
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/

/* Copyright (C) Worklight Ltd. 2006-2012.  All rights reserved. */

/**
 * @class
 * @ilog.undocumented.constructor
 * @displayname WL.App
 */
/*jshint undef:false*/
__WLApp = function() {

  /*jshint strict:false*/

/**
     * Opens the specified URL according to the specified target and options
     * (specs). The behavior of this method depends on the app environment, as
     * follows:
     *  <table class="userTable" cellspacing="0">
      <thead>
      <tr>
        <th>Environment</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="attributes">Adobe AIR</td>
        <td class="nameDescription">Opens a new browser window at the specified URL. The target and options parameters are ignored.</td>
      </tr>
      <tr>
        <td class="attributes">TO BE COMPLETED</td>
        <td class="nameDescription">TO BE COMPLETED.</td>
      </tr>
    </tbody>
    </table>
     *
     * @param url
     *            Mandatory. The URL of the web page to be opened.
     * @param target
     *            Optional. The value to be used as the target (or name)
     *            parameter of JavaScript <code>window.open</code> method. If
     *            no value is specified, <code>_self</code> will be used.
     *
     * @param options
     *            Optional. Parameters hash.
     *            If no value is specified, the following options are used:
   *        status=1, toolbar=1, location=1, menubar=1, directories=1, resizable=1, scrollbars=1
     * @return A reference to the newly opened window, or NULL if no window was opened.
     */
  this.__openURL = function(url, target, options) {
    WL.Validators.validateArguments(['string', WL.Validators.validateStringOrNull,
      WL.Validators.validateStringOrNull
    ], arguments, 'WL.App.openURL');

    var wnd = null;
    if (WLJSX.Object.isUndefined(options) || options === null) {
      options = 'status=1,toolbar=1,location=1,menubar=1,directories=1,resizable=1,scrollbars=1';
    }
    if (WLJSX.Object.isUndefined(target) || target === null) {
      target = '_self';
    }
    var absoluteURL = WL.Utils.createAPIRequestURL(url);
    switch (WL.StaticAppProps.ENVIRONMENT) {
      case WL.Env.WINDOWS8:
      case WL.Env.WINDOWSPHONEUNIVERSAL:
        Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(absoluteURL));
        break;
      case WL.Env.ADOBE_AIR:
        var urlReq = new window.runtime.flash.net.URLRequest(absoluteURL);
        wnd = window.runtime.flash.net.navigateToURL(urlReq);
        break;
      case WL.Env.BLACKBERRY10:
        blackberry.invoke.invoke({
          target: 'sys.browser',
          uri: absoluteURL
        }, function() {}, function() {
          WL.Logger.error('Failed to open URL ' + absoluteURL);
        });
        break;
      default:
        if (target === '_self') {
          document.location.href = absoluteURL;
        } else {
          wnd = window.open(absoluteURL, target, options);
        }
        break;
    }
    WL.Logger.debug('openURL url: ' + absoluteURL);

    return wnd;
  };

  /**
   * Returns the locale code (or device language on BlackBerry).
   * Returns the locale code according to user device settings, for example: en_US.
   * @note {Note} On BlackBerry 6 and 7, this method returns the device language (for example, en), not the device locale.
   */
  this.__getDeviceLocale = function() {
    locale = WL.Client.getDeviceLocale();
    //if locale is not confiured, take it regulary from navigator, if there is Cordova it would already be set using cordova
    if (typeof locale === 'undefined' || locale === null) {
      if (WL.Client.getEnvironment() === WL.Environment.WINDOWS8 || WL.Client.getEnvironment() === WL.Environment.WINDOWS || WL.Client.getEnvironment() === WL.Environment.WINDOWSPHONE8) {
        // On Win 8, navigator.userLanguage doesn't return the language preference, it returns regional format
        // Therefore, use the Windows API to get the correct language preference. 
        return Windows.System.UserProfile.GlobalizationPreferences.languages[0];
      }
      return (navigator.language) ? navigator.language : navigator.userLanguage;
    }
    return locale;
  };

  /**
   * Returns the language code.
   * Returns the language code according to user device settings, for example: en.
   */
  this.__getDeviceLanguage = function() {
    return this.__getDeviceLocale().substring(0, 2);
  };

  /**
     * Returns a pattern string to format and parse numbers according to the client's user preferences.
     * Returns the pattern to the successCallback with a properties object as a parameter,that contains :
    pattern,symbol,fraction,rounding,positive etc
     */

  this.getLocalePattern = function() {
    pattern = WL.Client.getLocalePattern();
    return pattern;
  };

  /**
   * Returns the decimal separator.
   * Returns the decimal separator accoriding to the region/locale preferences. eg : French uses "," but English uses "."
   */
  this.getDecimalSeparator = function() {
    var localepattern = this.getLocalePattern();
    if (typeof localepattern === 'undefined' || localepattern === null) {
      return '.';
    }
    return localepattern.decimal;
  };

  /**
   * Upgrade the inner application. This feature is currently applicable only
   * for Android and iOS platforms
   * @ignore
   */
  this.__update = function() {
    return;
  };

  /**
   * Extracts a string that contains an error message.
   * Extracts a string that contains the error message within the specified exception object.
   * Use for exceptions that are thrown by the IBM MobileFirst Platform client runtime.
   * @param {Function} callback Mandatory. The function that is called when Back is pressed.
   * @example {}
   * WL.App.overrideBackButton(backFunc);
   * function backFunc(){
   *    alert('you hit the back key!');
   * }
   */
  this.getErrorMessage = function(e) {
    var message;
    if (e === null) {
      message = null;
    } else if (WLJSX.Object.isString(e)) {
      message = e;
    } else if (WLJSX.Object.isArray(e)) {
      message = e.join(',');
    } else if (e.description || e.message) {
      // the exception message
      message = e.description ? e.description : e.message;

      // add file name and line number
      if (e.fileName) {
        message += ' [' + e.fileName + ': line ' + e.lineNumber + ']';
      } else if (e.sourceURL) {
        message += ' [' + e.sourceURL + ': line ' + e.line + ']';
      }
    } else {
      message = e.toString();
    }
    return message;
  };

  /**
   * Copies the specified string to the clipboard.
   *
   * This method is applicable to iOS and Android.
   * @param {String} string Mandatory. The text to be copied to the clipboard
   * @param callback Optional. For Android environments only. The callback function that is called after the data is copied to the clipboard.
   */
  this.__copyToClipboard = function() {};

  // ////////////////////////////////////////
  // Read/Write User Pref on Local Storage
  // ////////////////////////////////////////

  this.readUserPref = function() {
    var msg = 'WL.App.readUserPref(..) is supported only on Android and iOS environments';
    var ex = new Error(msg);
    WL.Logger.error(msg, ex);
    throw ex;
  };

  this.writeUserPref = function() {
    var msg = 'WL.App.writeUserPref(..) is supported only on Android and iOS environments';
    var ex = new Error(msg);
    WL.Logger.error(msg, ex);
    throw ex;
  };

  this.showSplashScreen = function() {
    // Do nothing. the real implementation is environment specific.
    WL.Logger.debug('Splash screen (show) is only available on iOS, Android and WP environments.');
  };

  this.setServerUrl = function(url, successCallback, failCallback) {
    // Do nothing. the real implementation is environment specific.
    WL.Logger.debug('WL.App.setServerUrl(..) is only available on iOS, Android and WP environments.');
    failCallback('WL.App.setServerUrl(..) is only available on iOS, Android and WP environments.');
  };

  this.getServerUrl = function(successCallback) {
    //get the server url in the old way from app property rather than from cordova
    successCallback(WL.Client.getAppProperty(WL.AppProp.WORKLIGHT_ROOT_URL));
  };

  this.resetDeviceID = function(successCallback, failCallback) {
    // Do nothing. the real implementation is environment specific.
    WL.Logger.debug('WL.App.resetDeviceID(..) is only available on Android environment.');
    failCallback('WL.App.resetDeviceID(..) is only available on Android environment.');
  };

this.setDeviceID = function(uuid,successCallback, failCallback) {
    // Do nothing. the real implementation is environment specific.
    WL.Logger.debug('WL.App.setDeviceID(..) is  available on Android and iOS environments.');
    failCallback('WL.App.setDeviceID(..) is  available on Android and iOS environments.');
  };

  this.hideSplashScreen = function() {
    // Do nothing, as this is called from the template application, and shouldn't fail whatsoever.
    WL.Logger.debug('Splash screen (hide) is only available on iOS, Android and WP environments.');
  };

  /**
   * Sends an action and optional data object to native action receivers.
   * Sends an action and optional data object to native action receivers.
   * @note {Note} If there are no native action receivers registered, the action
   * is queued until a native action receiver is registered.
   * @param {String} action Custom string that represents an action. All receivers registered
   * with the specified action receive the message.
   * @param data Optional parameter: custom JSON object containing key-value pairs.
   * @example {}
   * WL.App.sendActionToNative("doSomething");
   * WL.App.sendActionToNative("doSomething", { customData: 12345} );
   */
  this.sendActionToNative = function() {
    // Do nothing. the real implementation is environment specific.
    WL.Logger.debug('WL.App.sendActionToNative(...) is supported only for Android, iOS and WP environments.');
  };

  /**
   * Registers an action receiver.
   * @note {Note} In JavaScript code, a receiver must be implemented as a callback that can
   * receive an object.
   * @param {String} id. A string parameter used to uniquely identify receiver function, to be able
   * to remove it at later stages.
   * @param {Function} callback Mandatory. The JavaScript function that is called by the
   * Worklight framework when an action is sent from native code to JavaScript code.
   * @example {}
   * WL.App.addActionReceiver('MyReceiver', function (receivedActon){
   *  // process receivedAction
   * });
   */
  this.addActionReceiver = function() {
    // Do nothing. the real implementation is environment specific.
    WL.Logger.debug('WL.App.addActionReceiver(...) is supported only for iOS, Android and WP environments.');
  };

  /**
   * Removes a previously added receiver.
   * Removes a previously added receiver. After this API is called, the receiver identified
   * by receiverId no longer receives actions.
   * @param {String} id. A string parameter used to uniquely identify a previously
   * registered receiver function.
   * @example {}
   * WL.App.removeActionReceiver("MyReceiver");
   */
  this.removeActionReceiver = function() {
    // Do nothing. the real implementation is environment specific.
    WL.Logger.debug('WL.App.removeActionReceiver(...) is supported only for iOS, Android and WP environments.');
  };

};

/*jshint newcap:false*/
__WL.prototype.App = new __WLApp();
WL.App = new __WLApp();

/**
 * ================================================================= 
 * Source file taken from :: wlrequest.js
 * ================================================================= 
 */

/*
Licensed Materials - Property of IBM

(C) Copyright 2015 IBM Corp.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/*globals WLJSX, WL, WLAuthorizationManager, WL_*/

// Overwriting the prototype.js isSameOrigin method -
// Updated the original method by wrapping the return statement with try/catch
// because it does not work properly in desktop applications such as Vista
// (document.domain is undefined).
WLJSX.Ajax.Request.prototype.isSameOrigin = function () {

  /*jshint strict:false*/

  var m = this.url.match(/^\s*https?:\/\/[^\/]*/);
  try {
    var url = location.protocol + '//' + document.domain;
    if (location.port) {
      url += ':' + location.port;
    }
    return (!m || (m[0] === url));
  } catch (e) {
    return true;
  }
};

WL.Response = WLJSX.Class.create({
	invocationContext: null,
	status: -1,
	errorCode: null,
	errorMsg: null,
	responseText: '',
	responseJSON: '',
	initialize: function (transport, invocationContext) {

		/*jshint strict:false*/
		this.responseHeaders = {};
		if (transport !== null) {
      this.status = transport.status;
			if(!this.status){
				transport.status = 0;
			}
			this.responseHeaders = {};

			try {
        this.responseText = WLJSX.String.interpret(transport.responseText);
			} catch (e) {

			}

			try {
				this.responseJSON = WLJSX.String.evalJSON(transport.responseText, true);
			} catch (e) {

			}

			if(!this.responseJSON && transport.responseJSON){
				this.responseJSON = transport.responseJSON;
			}

      if(transport.responseHeaders){
        this.responseHeaders = transport.responseHeaders;
      }

			/*jshint maxdepth:4*/
			if (transport.errorCode) {
				this.errorCode = transport.errorCode;
				if (transport.errorMsg) {
					this.errorMsg = transport.errorMsg;
				}
				if (!transport.errorMsg) {
					this.errorMsg =  this.errorCode;
				}
			} else  if (this.responseJSON ) {
				this.errorCode = this.responseJSON.errorCode;
				this.errorMsg = this.responseJSON.errorMsg;
				if (!this.errorCode) {
					var error = this.extractErrorFromResponseFailures(this.responseJSON);
					if(error){
						this.errorCode = error.errorCode;
						this.errorMsg =  error.errorMsg;
					}
				}
				if(this.errorCode && !this.errorMsg){
					this.errorMsg =  this.errorCode;
				}
			}

			if(!this.errorCode){
				this.errorCode = this.status;
			}
			if(!this.errorMsg){
				this.errorMsg =  transport.statusText;
			}

			if (typeof (transport.getAllResponseHeaders) === 'function') {
				var responseHeadersString = transport.getAllResponseHeaders();
				this.responseHeaders = WLJSX.String.parseResponseHeaders(responseHeadersString);
			}
		}
		this.invocationContext = invocationContext;
	},

	getHeaderNames: function () {

		/*jshint strict:false*/
		var headerNames = [];
		for (var headerName in this.responseHeaders) {
			if (true) { // thanks jshint
				headerNames.push(headerName);
			}
		}
		return headerNames;
	},

	getAllHeaders: function () {

		/*jshint strict:false*/
		return this.responseHeaders;
	},

	getHeader: function (name) {
		/*jshint strict:false*/
		if (name === null || typeof (name) === 'undefined') {
			return null;
		}

		return this.responseHeaders[name];
	},

	extractErrorFromResponseFailures: function (responseJson) {
		/*jshint strict:false*/
		if (!responseJson) {
			return null;
		}
		var failures = responseJson.failures;
		var result = {};
		if(failures){
			/*jshint forin:false*/
			for (var key in failures) {
				var currentElement = failures[key];
				result.errorCode = currentElement.errorCode;
				result.errorMsg = currentElement.errorMsg;
				if(result.errorCode){
					return result;
				}
			}
		}
		return null;
	}
});

WL.FailResponse = WLJSX.Class.create({
  invocationContext: null,
  status: -1,
  errorCode: null,
  errorMsg: null,
  initialize: function (transport, invocationContext) {
    /*jshint strict:false*/
    if (transport !== null && typeof transport.status !== 'undefined') {
      this.status = (transport.status || 200);
      if (transport.responseJSON !== null && typeof (transport.responseJSON) !== 'undefined') {
        this.errorCode = transport.responseJSON.errorCode;
        this.errorMsg = transport.responseJSON.errorMsg;
      }
    }
    this.invocationContext = invocationContext;
  }
});


/*
 * Piggybackers should have the following optional properties:
 *  - a function called processOptions(options) (called before the request is sent)
 *  - a function called onSuccess(transport, options)
 *  - a function called onFailure(transport, options)
 */
window.WLJSX.Ajax.WlRequestPiggyBackers = [];

/*
 * A wrapper for the prototype Ajax.Request. The wrapper is responsible for: 1.
 * Add double-cookie headers to the request. 2. Parse cookies from the response.
 * 3. Invoke the authenticator on demand.
 */
window.WLJSX.Ajax.WLRequest = WLJSX.Class.create({
  instanceId: null,
  wlAnswers: {},
  postAnswerRealm: '',
  MAX_AUTH_HEADER_SIZE: 900,
  MAX_TOTAL_HEADER_SIZE: 3000,
  MAX_CONFLICT_ATTEMPTS: 7,

  initialize: function (url, options) {
    /*jshint strict:false*/
    this.options = WLJSX.Object.clone(WLJSX.Ajax.WLRequest.options);

    WLJSX.Object.extend(this.options, options || {});
    this.url = WL.Utils.createAPIRequestURL(url);
    this.callerOptions = options;
    this.isTimeout = false;
    this.timeoutTimer = null;
    this.conflictCounter = 0;

    // this.stopPolling = false;
    this.options.onSuccess = this.onWlSuccess.bind(this);
    this.options.onFailure = this.onWlFailure.bind(this);

    // Handle Exceptions
    this.options.onException = this.onException.bind(this);

    // 0 is the response status when the host is unresponsive
    // (server is
    // down)
    this.options.on0 = this.onUnresponsiveHost.bind(this);

    // Appending the cookie headers to possibly existing ones.
    // If you pass additional headers make sure to use objects of
    // name-value
    // pairs (and not arrays).
    // this.options.requestHeaders =
    // Object.extend(CookieManager.createCookieHeaders(),
    // this.options.requestHeaders || {});
    this.options.requestHeaders = WL.CookieManager.createCookieHeaders();

    // For GET requests - preventing Vista from returning cached GET
    // ajax
    // responses.
    // For POST requests - preventing Air from sending a GET request
    // if the
    // request has no body (even if
    // it's declared as a POST request).
    if (WLJSX.Object.isUndefined(this.options.parameters) || this.options.parameters === null || this.options.parameters === '') {
      this.options.parameters = {};
    }

    // call piggybackers to modify options
    for (var i = 0; i < WLJSX.Ajax.WlRequestPiggyBackers.length; i++) {
      var piggybacker = WLJSX.Ajax.WlRequestPiggyBackers[i];
      if (typeof (piggybacker.processOptions) === 'function') {
        piggybacker.processOptions(this.options, url);
      }
    }
    this.wlAnswers = {};
    this.sendRequest();
  },

  /*
   * We need to know ahead of time, for challenge processing if extra work needs to be done if we try and send
   * a message which headers are too big.
   */
  createRequestHeaders: function () {
    /*jshint strict:false*/
    var requestHeaders = {};
    requestHeaders = WL.CookieManager.createCookieHeaders();
    requestHeaders['x-wl-app-version'] = WL.StaticAppProps.APP_VERSION;

    // add Authorization header from wlAnswres
    if (typeof this.wlAnswers !== 'undefined') {
      var authJson = {};
      var shouldSendAuthHeader = false;
      for (var realm in this.wlAnswers) {
        if (Object.prototype.hasOwnProperty.call(this.wlAnswers, realm)) {
          var answer = '';
          /*jshint maxdepth:4*/
          try {
            answer = JSON.parse(this.wlAnswers[realm]);
          } catch (e) {
            answer = this.wlAnswers[realm];
          }
          // Validate we are working with standrad JSON
          if (typeof answer === 'string' && typeof JSON === 'undefined') {
            authJson[realm] = answer.indexOf('"') === 0 ? answer : '"' + answer + '"';
          } else {
            authJson[realm] = answer;
          }
          shouldSendAuthHeader = true;
        }
      }
      if (shouldSendAuthHeader === true) {
        this.options.parameters.challengeResponse = authJson;
      }
    }

    // add headers from WL.Client.globalHeaders in case the Single (native) HTTP Client is disabled;
    // otherwise the headers will be added in native code
    this.__addGlobalHeaders(requestHeaders);

    var optionalHeaders = this.options.optionalHeaders;
    if (typeof optionalHeaders !== 'undefined' && optionalHeaders !== null) {
      for (var headerName in optionalHeaders) {
        if (Object.prototype.hasOwnProperty.call(optionalHeaders, headerName)) {
          requestHeaders[headerName] = optionalHeaders[headerName];
        }
      }
    }
    return requestHeaders;
  },

  // automaticResend is to be used when comming from submitAnswer or removeExpectedAnswer, we need to know if we should handle the
  // request differently (add it to the challangeHandler wiating list).
  sendRequest: function (requestHeaders) {
    /*jshint strict:false*/
    var shouldPostAnswers = false;

    WL.Logger.debug('Request [' + this.url + ']');

    //add headers
    if (typeof (requestHeaders) === 'undefined') {
      this.options.requestHeaders = this.createRequestHeaders();
    } else {
      this.options.requestHeaders = requestHeaders;
    }

    var postAnswersOptions = {};

    //check if we need to send the auth header in the body, becuase it is too large or the total header size is too large
    var allHeadersSize = WLJSX.Object.toJSON(this.options.requestHeaders).length;
    var authHeaderSize = typeof (this.options.requestHeaders.Authorization) === 'undefined' ? -1 :
      WLJSX.Object.toJSON(this.options.requestHeaders.Authorization).length;

    if ((allHeadersSize > this.MAX_TOTAL_HEADER_SIZE || authHeaderSize > this.MAX_AUTH_HEADER_SIZE) && authHeaderSize > -1) {

      postAnswersOptions = WL.Utils.extend(postAnswersOptions, this.options);
      postAnswersOptions.requestHeaders = this.options.requestHeaders;
      postAnswersOptions.onSuccess = this.onPostAnswersSuccess.bind(this);
      postAnswersOptions.onFailure = this.onPostAnswersFailure.bind(this);

      postAnswersOptions.postBody = this.options.requestHeaders.Authorization;
      postAnswersOptions.requestHeaders.Authorization = 'wl-authorization-in-body';
      // Get HTTP request cannot hold a body
      postAnswersOptions.method = 'post';

      this.wlAnswers = {};
      shouldPostAnswers = true;
    }

    if (typeof (this.options.requestHeaders.Authorization) !== 'undefined') {
      //init the wlAnswer map...
      this.wlAnswers = {};
    }

    if (this.options.timeout > 0) {
      this.timeoutTimer = window.setTimeout(this.handleTimeout.bind(this), this.options.timeout);
    }

    var thisRequest = this;
    var isAuthRequest = this.options.isAuthorizationRequest || false;
    if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_OAUTH) && typeof (WLAuthorizationManager) !== 'undefined' && !isAuthRequest) {
      if ((WL.Client.getEnvironment() === WL.Environment.WINDOWS8 || WL.Client.getEnvironment() === WL.Environment.WINDOWS || WL.Client.getEnvironment() === WL.Environment.WINDOWSPHONE8) && this.url.indexOf('/v1/clients/instance') > -1) {
        __sendRequest(shouldPostAnswers);
      } else {
        thisRequest.__addGlobalHeaders(thisRequest.options.requestHeaders);
        __sendRequest(shouldPostAnswers);
      }
    } else {
      __sendRequest(shouldPostAnswers);
    }
    /*jshint latedef: false */
    function __sendRequest(shouldPostAnswers) {
      if (shouldPostAnswers) {
        var authenticateNewUrl = WL.Utils.createAPIRequestURL('authenticate');
        /*jshint -W031*/
        new WLJSX.Ajax.Request(authenticateNewUrl, postAnswersOptions);
      } else {
        new WLJSX.Ajax.Request(thisRequest.url, thisRequest.options);
      }
    }

  },

  __addGlobalHeaders: function (requestHeaders) {
    /*jshint strict:false*/
    if (!WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_NATIVE_XHR) || WL.Client.__state().enableFIPS) {
      if ((typeof WL.Client.__globalHeaders !== 'undefined') && (WL.Client.__globalHeaders !== null)) {
        for (var headerName in WL.Client.__globalHeaders) {
          /*jshint maxdepth:4*/
          if (Object.prototype.hasOwnProperty.call(WL.Client.__globalHeaders, headerName)) {
            requestHeaders[headerName] = WL.Client.__globalHeaders[headerName];
          }
        }
      }
    }
  },

  onSuccessParent: function (transport, par) {
    /*jshint strict:false*/
    if (this.isTimeout) {
      return;
    }
    this.cancelTimeout();
    var containsChallenges = WL.Client.checkResponseForChallenges(this, transport, par);

    return containsChallenges;
  },

  /*
   * Custom success handelr for PostAnswer Request, it will not send the onSuccess to the application code,
   * because this is not a resend but a special request, and the user should not be informed about it.
   */
  onPostAnswersSuccess: function (transport) {
    /*jshint strict:false*/
    this.onSuccessParent(transport, this.postAnswerRealm);
    this.postAnswerRealm = '';
  },

  /**
   * when a onWlSuccess arrives but it came from an response to a
   * postAnsweresRequest then we should not continue the onSucess any
   * further
   *
   * @param transport
   * @param responseToPostAnswers
   */
  onWlSuccess: function (transport) {
    /*jshint strict:false*/
    if (this.isTimeout) {
      return;
    }
    var containsChallenges = this.onSuccessParent(transport);

    if (!containsChallenges) {
      this.onSuccess(transport);
    }
  },

  onSuccess: function (transport) {
    /*jshint strict:false*/
    WLJSX.Ajax.WLRequest.setConnected(true);
    if (transport.getAllHeaders() !== null) {
      // Handle Cookies:
      var headers = transport.getAllHeaders().split('\n');
      WL.CookieManager.handleResponseHeaders(headers);
    }

    for (var i = 0; i < WLJSX.Ajax.WlRequestPiggyBackers.length; i++) {
      var piggybacker = WLJSX.Ajax.WlRequestPiggyBackers[i];
      if (typeof (piggybacker.onSuccess) === 'function') {
        piggybacker.onSuccess(transport, this.options);
      }
    }


    if (typeof (this.callerOptions.onSuccess) === 'function') {
      this.callerOptions.onSuccess(transport);
    }
  },

  /*
   * Custom failure handelr for PostAnswer Request, it will remove the original request from waiting list, and not send the onFailure to the application code,
   * because this is not a resend but a special request, and the user should not be informed about it.
   *
   * When a message arrives from a postAnswerRequert ('authenticate') and it is a 401,403, we need to remove it from the waitinglist so there wont be any resend on it,
   * because if has accepts in it, it will trigger the resend.
   */
  onPostAnswersFailure: function (transport) {
    /*jshint strict:false*/
    if (this.isTimeout) {
      return;
    }
    this.cancelTimeout();
    WL.Client.removeFromWaitingListOnPostAnsweresWlReponse(transport, this, this.postAnswerRealm);
    WL.Client.checkResponseForChallenges(this, transport, this.postAnswerRealm);
    this.postAnswerRealm = '';
  },

  onWlFailure: function (transport) {
    /*jshint strict:false*/
    if (this.isTimeout) {
      return;
    }
    this.cancelTimeout();
    if (!WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_COOKIES)) {
      if (transport && transport.getAllHeaders && transport.getAllHeaders() !== null) {
        var allHeaders = transport.getAllHeaders();
        if (WL_.isString(allHeaders)) {
          var headers = allHeaders.split('\n');
          WL.CookieManager.handleResponseHeaders(headers);
        }
      }
    }
    if (transport.status === 409 && WLAuthorizationManager.isAuthorizationRequired(transport.status, transport.getAllResponseHeaders()) && this.conflictCounter++ < this.MAX_CONFLICT_ATTEMPTS) {
      this.sendRequest();
    } else {
      var containsChallenges = WL.Client.checkResponseForChallenges(this, transport);
      if (!containsChallenges) {
        this.onFailure(transport);
      }
    }
  },

  onFailure: function (transport) {
    /*jshint strict:false*/
    // sometimes onFailure is called with a dummy transport object
    // for example when an authentication timeout occurs.
    if (transport && transport.getAllHeaders && transport.getAllHeaders() !== null) {
      var allHeaders = transport.getAllHeaders();
      if (WL_.isString(allHeaders)) {
        var headers = allHeaders.split('\n');
        WL.CookieManager.handleResponseHeaders(headers);
      }
    }

    if (transport.responseJSON === null) {
      try {
        transport.responseJSON = WLJSX.String.evalJSON(transport.responseText, true);
      } catch (e) {
        transport.responseJSON = {
          errorCode: WL.ErrorCode.UNEXPECTED_ERROR,
          errorMsg: WL.ClientMessages.unexpectedError
        };
      }
    }

	//Adding condition of 510 for wi 116315 - Ensuring connection status is not incorrectly updated when error code 510 is received.
    if (transport.status !== 510 && transport.responseJSON.errorCode !== WL.ErrorCode.REQUEST_TIMEOUT && transport.responseJSON.errorCode !== WL.ErrorCode.UNRESPONSIVE_HOST) {
      WLJSX.Ajax.WLRequest.setConnected(true);
    }

    var callbackHandler = this.getCallbackForErrorCode(transport.responseJSON.errorCode);

    if (callbackHandler) {
      callbackHandler(this, transport);
    }

    if (transport.responseJSON.errorCode === WL.ErrorCode.USER_INSTANCE_ACCESS_VIOLATION) {
      WLJSX.Ajax.WLRequest.options.onAuthentication(this, transport);
      return;
    }
    WL.Logger.error('[' + this.url + '] failure. state: ' + transport.status + ', response: ' + transport.responseJSON.errorMsg);

    for (var i = 0; i < WLJSX.Ajax.WlRequestPiggyBackers.length; i++) {
      var piggybacker = WLJSX.Ajax.WlRequestPiggyBackers[i];
      if (typeof (piggybacker.onFailure) === 'function') {
        piggybacker.onFailure(transport, this.options);
      }
    }


    if (typeof (this.callerOptions.onFailure) === 'function') {
      this.callerOptions.onFailure(transport);
    }
  },

  getCallbackForErrorCode: function (errorCode) {
    /*jshint strict:false*/
    return this.options['on' + errorCode];
  },

  onException: function (request, ex) {
    /*jshint strict:false*/
    if (this.isTimeout) {
      return;
    }
    this.cancelTimeout();

    if (typeof (this.options.onAuthException) === 'function') {
      this.options.onAuthException(request, ex);
    }

    WL.Logger.error('[' + this.url + '] exception.', ex);
    // Workaround for prototype's known behavior of swallowing
    // exceptions.
    /*jshint -W068*/
    (function () {
      throw ex;
    }).defer();
  },

  onUnresponsiveHost: function () {
    /*jshint strict:false*/
    if (this.isTimeout) {
      return;
    }
    this.cancelTimeout();

    WLJSX.Ajax.WLRequest.setConnected(false);

    if (WL.Client.getEnvironment() === WL.Env.ANDROID) {
      WL.Logger
        .error('[' + this.url + '] Host is not responsive. Try to manually access the URL through the android emulator browser to verify connectivity.');
    } else {
      WL.Logger.error('[' + this.url + '] Host is not responsive.');
    }
    var transport = {};
    transport.status = 0;
    transport.responseJSON = {
      errorCode: WL.ErrorCode.UNRESPONSIVE_HOST,
      errorMsg: WL.ClientMessages.unresponsiveHost
    };

    if (typeof (this.callerOptions.onFailure) === 'function') {
      this.callerOptions.onFailure(transport);
    }
  },

  handleTimeout: function () {
    /*jshint strict:false*/
    WL.Logger.error('Request timeout for [' + this.url + ']');
    this.cancelTimeout(); // cancel all other timers (if there are
    // any)
    this.isTimeout = true;

    WLJSX.Ajax.WLRequest.setConnected(false);

    var transport = {};

    //changes made

    /*transport.responseJSON = {
      errorCode : WL.ErrorCode.REQUEST_TIMEOUT,
      errorMsg : WL.Utils
      .formatString(
      'Request timed out for {0}. Make sure the host address is available to the app (especially relevant for Android and iPhone apps).',
      this.url)
    };*/
    transport.responseJSON = {
      errorCode: WL.ErrorCode.REQUEST_TIMEOUT,
      errorMsg: WL.Utils
        .formatString(
          WL.ClientMessages.handleTimeOut,
          this.url)
    };
    if (typeof (this.callerOptions.onFailure) === 'function') {
      this.callerOptions.onFailure(transport);
    }
  },

  cancelTimeout: function () {
    /*jshint strict:false*/
    if (this.timeoutTimer !== null) {
      window.clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
      this.isTimeout = false;
    }
  },

  // Default behavior for setConnected. This function should be
  // overwritten
  // and respond to the connected state
  setConnected: function (isConnected) {
    /*jshint strict:false*/
    WL.Logger.debug('Application is now ' + (isConnected ? ' online.' : 'offline.'));
  },

  checkIfCanResend: function () {
    /*jshint strict:false*/
    if (typeof this.wlAnswers === 'undefined') {
      return true;
    }

    for (var realm in this.wlAnswers) {
      if (Object.prototype.hasOwnProperty.call(this.wlAnswers, realm)) {
        if (this.wlAnswers[realm] === null) {
          return false;
        }
      }
    }

    return true;
  },

  // initialize the wlAnswer table with realm = null values
  setExpectedAnswers: function (realms) {
    /*jshint strict:false*/
    for (var realm in realms) {
      if (Object.prototype.hasOwnProperty.call(realms, realm)) {
        this.wlAnswers[realm] = null;
      }
    }
  },

  submitAnswer: function (realm, answer) {
    /*jshint strict:false*/
    this.wlAnswers[realm] = answer;
    if (this.checkIfCanResend()) {
      this.handleResendOrSendPostAnswers(realm);
    }
  },

  removeExpectedAnswer: function (realm) {
    /*jshint strict:false*/
    delete this.wlAnswers[realm];
    if (this.checkIfCanResend()) {
      this.handleResendOrSendPostAnswers(realm);
    }
  },

  /*
   * If the total header size is larger than MAX_TOTAL_HEADER_SIZE or the auth header is larger than MAX_AUTH_HEADER_SIZE
   * we need to put the original request into the waiting list, because we will send a special "authenticate" request that will have the
   * Autherization header in the body.
   *
   */
  handleResendOrSendPostAnswers: function (realm) {
    /*jshint strict:false*/
    var headers = this.createRequestHeaders();

    var moveToWaitingList = false;
    var allHeadersSize = WLJSX.Object.toJSON(headers).length;
    var authHeaderSize = typeof (headers.Authorization) === 'undefined' ? -1 :
      WLJSX.Object.toJSON(headers.Authorization).length;

    if ((allHeadersSize > this.MAX_TOTAL_HEADER_SIZE || authHeaderSize > this.MAX_AUTH_HEADER_SIZE) && authHeaderSize > -1) {
      moveToWaitingList = true;
    }

    if (moveToWaitingList) {
      //iterate over all the challageHandlers
      this.postAnswerRealm = realm;
      var handler = WL.Client.__chMap[realm];
      if (typeof (handler) !== 'undefined') {
        handler.moveToWaitingList(this);
      }
    }
    this.sendRequest(headers);
  }


});

// WLRequest default options:
WLJSX.Ajax.WLRequest.options = {
  method: 'post',
  asynchronous: true,
  encoding: 'UTF-8',
  parameters: '',
  evalJSON: true,
  timeout: -1,
  onAuthentication: null,
  isAuthResponse: null
};


/**
 * ================================================================= 
 * Source file taken from :: wlcookiemanager.js
 * ================================================================= 
 */

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/*globals WL, WLJSX, __WL, device*/

/**
 * Cookie manager singleton
 */
WL.CookieManager = (function() {

  /*jshint strict:false, quotmark:double*/

  var COOKIE_JSESSION_ID = "JSESSIONID";
  var COOKIE_WLSESSION_ID = "WLSESSIONID";

  // WARN: This constant is also accessed in the iOS native code
  // (WLCookieExtractor.m)
  var PERSISTED_COOKIES_NAME = "cookies";

  var cookies = null;
  var cookiePersister = null;
  var gadgetName = null;
  var gadgetEnvironment = null;
  var gadgetIID = null;

  var CookiePersister = WLJSX.Class.create({
    init: function() {},
    storeCookies: function() {},
    readCookies: function() {}, // throws exception on failure.
    clearCookies: function() {}
  });

 //
  // Windows Phone Persister
  //
//  var WPCookiePersister = WLJSX.Class.create(CookiePersister, {
//    storeCookies: function() {
//      try {
//        var JSONCookies = WLJSX.Object.toJSON(cookies);
//        window.localStorage.setItem(PERSISTED_COOKIES_NAME, JSONCookies);
//        WL.Logger.debug("Storing cookies: (" + JSONCookies + ")");
//        this.readCookies();
//      } catch (e) {
//        WL.Logger.error("Error storing cookie: " + e.message);
//      }
//    },
//
//    readCookies: function() {
//      try {
//        var JSONCookies = window.localStorage.getItem(PERSISTED_COOKIES_NAME);
//
//        if (JSONCookies !== null) {
//          var cookiesObj = WLJSX.String.evalJSON(JSONCookies);
//          /*jshint forin:false*/
//          for (var key in cookiesObj) {
//            cookies[key] = cookiesObj[key];
//          }
//        }
//      } catch (e) {
//        WL.Logger.error("Error reading cookies: " + e.message);
//      }
//    },
//
//    clearCookies: function() {
//      try {
//        var JSONCookies = window.localStorage.getItem(PERSISTED_COOKIES_NAME);
//        window.localStorage.removeItem(PERSISTED_COOKIES_NAME);
//        WL.Logger.debug("Delete cookies: " + JSONCookies);
//      } catch (e) {
//        WL.Logger.error("Error deleting cookies: " + e.message);
//      }
//    }
//  });

  var LocalStorageCookiePersister = WLJSX.Class.create(CookiePersister, {
    storeCookies: function() {
      try {
        var JSONCookies = WLJSX.Object.toJSON(cookies);
        WL.Logger.debug("Storing cookies: (" + JSONCookies + ")");
        __WL.LocalStorage.setValue(PERSISTED_COOKIES_NAME, JSONCookies);
      } catch (e) {
        WL.Logger.error("Error storing cookie: " + e.message);
      }
    },

    readCookies: function() {
      try {
        var JSONCookies = __WL.LocalStorage.getValue(PERSISTED_COOKIES_NAME);
        if (JSONCookies === "") {
          return;
        }
        WL.Logger.debug("Read cookies: " + JSONCookies);
        if (JSONCookies !== null) {
          var cookiesObj = WLJSX.String.evalJSON(JSONCookies);
          /*jshint forin:false*/
          for (var key in cookiesObj) {
            cookies[key] = cookiesObj[key];
          }
        }
      } catch (e) {
        WL.Logger.error("Error reading cookies: " + e.message);
      }
    },

    clearCookies: function() {
      try {
        var JSONCookies = WLJSX.Object.toJSON(cookies);
        __WL.LocalStorage.clear(PERSISTED_COOKIES_NAME);
        WL.Logger.debug("Delete cookies: " + JSONCookies);
      } catch (e) {
        WL.Logger.error("Error deleting cookies: " + e.message);
      }
    }
  });

  // 
  // Android
  //
  var AndroidCookiePersister = LocalStorageCookiePersister;

  //
  // iPhone
  //  
  var IPhoneCookiePersister = LocalStorageCookiePersister;

  // Private methods of the cookie manager:

  // Create the cookie persister according to the environment
  var createCookiePersister = function() {
    switch (gadgetEnvironment) {
      case WL.Env.IPHONE:
        cookiePersister = new IPhoneCookiePersister();
        break;
      case WL.Env.IPAD:
        cookiePersister = new IPhoneCookiePersister();
        break;
      case WL.Env.ANDROID:
        cookiePersister = new AndroidCookiePersister();
        break;
//      case WL.Env.WINDOWSPHONE8:
//        cookiePersister = new WPCookiePersister();
//        break;
      default:
        cookiePersister = null;
        break;
    }
  };

  var parseCookiesFromHeader = function(header) {
    var resultCookies = [];
    var headerValue = header.substr(header.indexOf(":") + 1);

    var cookieParts = headerValue.split(",");
    for (var i = 0; i < cookieParts.length; i++) {
      var cookiePart = cookieParts[i];
      // WL.Logger.debug("CookiePart: " + cookiePart);
      var cookieSubparts = cookiePart.split("=");
      if (cookieSubparts.length < 2) {
        WL.Logger.error("invalid cookie header: " + header);
      } else {
        var cookie = {
          name: WLJSX.String.strip(cookieSubparts[0]),
          value: WLJSX.String.strip(cookieSubparts[1].split(";")[0])
        };
        resultCookies.push(cookie);
      }
    }
    return resultCookies;
  };

  var getCookie = function(cookieName) {
    var cookieValue = "";
    if (isCookieManagementRequired()) {
      cookieValue = cookies[cookieName];
    } else {
      if (document.cookie.length > 0) {
        var cookieStart = document.cookie.indexOf(cookieName + "=");
        if (cookieStart !== -1) {
          cookieStart = cookieStart + cookieName.length + 1;
          var cookieEnd = document.cookie.indexOf(";", cookieStart);
          /*jshint maxdepth:4*/
          if (cookieEnd === -1) {
            cookieEnd = document.cookie.length;
          }
          cookieValue = decodeURI(document.cookie.substring(cookieStart, cookieEnd));
        }
      }
    }
    if (typeof cookieValue === "undefined") {
      cookieValue = null;
    }
    // WL.Logger.debug("getCookieValue: " + cookieName + "=" + cookieValue);
    return {
      name: cookieName,
      value: cookieValue
    };
  };

  var isCookieManagementRequired = function() {
    return !WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_COOKIES);
  };

  // Public API methods
  return {
    init: function(gadgetDisplayName, gadgetEnv, gadgetInstanceID) {
      gadgetName = gadgetDisplayName;
      gadgetEnvironment = gadgetEnv;
      gadgetIID = gadgetInstanceID;

      cookies = {};
      createCookiePersister();

      if (cookiePersister !== null) {
        cookiePersister.init();
        try {
          cookiePersister.readCookies();
        } catch (e) {
          WL.Logger.error("error read cookies: " + e.message);
          cookiePersister.clearCookies();
        }
        WL.Logger.debug("CookieMgr read cookies: " + WLJSX.Object.toJSON(cookies));
      }
    },

    // Called by WP7 native code after call readCookies
    updateCookies: function(JSONCookies) {
      try {
        var cookiesObj = WLJSX.String.evalJSON(JSONCookies);
        /*jshint forin:false*/
        for (var key in cookiesObj) {
          cookies[key] = cookiesObj[key];
        }
      } catch (e) {
        WL.Logger.error("Problems to update cookies " + e + " " + JSONCookies);
      }
    },

    clearCookies: function() {
      cookies = {};
      if (cookiePersister !== null) {
        cookiePersister.clearCookies();
      }
    },

    createCookieHeaders: function() {
      var headers = {};
      if (isCookieManagementRequired()) {
        var cookieHeaderValue = "";
        /*jshint forin:false*/
        for (var key in cookies) {
          cookieHeaderValue += key + "=" + cookies[key] + ";";
        }

        if (cookieHeaderValue !== "") {
          headers.Cookie = cookieHeaderValue;
        }
      }

      if (!WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_DEVICE_AUTH) && typeof device !== "undefined" && device !== null && typeof device.uuid !== "undefined") {
        var deviceId = {};
        if (WL.Client.getEnvironment() === WL.Environment.WINDOWS8 || WL.Client.getEnvironment() === WL.Environment.WINDOWS || WL.Client.getEnvironment() === WL.Environment.WINDOWSPHONE8) {
          //Device uuid changes and system generates different uuid's for different apps. 
          //For device SSO to work it should be same across apps and adapterid remains same for a device.
          deviceId.id = WL.Device.getHardwareIdentifier();
        } else {
          deviceId.id = device.uuid;
        }
        deviceId.os = device.version;
        deviceId.model = device.model;
        deviceId.environment = WL.Client.getEnvironment();
        headers.deviceId = WLJSX.Object.toJSON(deviceId);
      }
      return headers;
    },

    handleResponseHeaders: function(headers) {
      if (!isCookieManagementRequired()) {
        return;
      }
      var sessionCookies = {};
      for (var i = 0; i < headers.length; i++) {
        var header = headers[i];
        if (header.toLowerCase().indexOf("set-cookie") > -1) {
          var parsedCookies = parseCookiesFromHeader(header);
          for (var j = 0; j < parsedCookies.length; j++) {
            var cookie = parsedCookies[j];
            // Persist only the non session cookies
            /*jshint maxdepth:4, eqeqeq:false*/
            if (cookie.name != COOKIE_JSESSION_ID && cookie.name != COOKIE_WLSESSION_ID) {
              cookies[cookie.name] = cookie.value;
            } else {
              sessionCookies[cookie.name] = cookie.value;
            }

            if (cookiePersister !== null) {
              /*jshint maxdepth:5*/
              if (cookies !== null && WLJSX.Object.objectSize(cookies) > 0) {
                // in case there is two requests immediate after
                // login we need
                // to ensure session cookies is not persist
                delete cookies[COOKIE_WLSESSION_ID];
                delete cookies[COOKIE_JSESSION_ID];
                cookiePersister.storeCookies();
              }
            }
          }
        }
      }

      // Add the session cookies into the memory cookies
      if (isCookieManagementRequired()) {
        /*jshint forin:false*/
        for (var key in sessionCookies) {
          cookies[key] = sessionCookies[key];
        }
      }

    },

    getJSessionID: function() {
      var jsessionidCookie = getCookie(COOKIE_JSESSION_ID);
      return (jsessionidCookie === null) ? null : jsessionidCookie.value;
    },

    areCookiesEnabled: function() {
      var enabled = true;
      if (WL.EnvProfile.isEnabled(WL.EPField.WEB)) {
        var date = new Date();
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
        document.cookie = "testcookie=oreo; expires=" + date.toGMTString() + "; path=/";
        var cookie = getCookie("testcookie");
        enabled = (cookie.value === "oreo");
      }
      return enabled;
    }
  };
}());
/* End CookieManager */

/**
 * ================================================================= 
 * Source file taken from :: worklight.js
 * ================================================================= 
 */

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

/*globals WL, __WL, WLJSX*/

/*jshint strict:false*/

/**
 * EnvironmentProfile
 */
WL.EnvProfile = (function() {

  var profile = null;

  return {
    initialize: function(env) {
      if (typeof WL[env + 'ProfileData'] !== 'undefined') {
        profile = WL[env + 'ProfileData'];
      } else {
        profile = WL.DefaultProfileData;
      }
    },

    getValue: function(field) {
      return profile[field];
    },

    isEnabled: function(field) {
      return !!(field in profile && profile[field]);
    },

    disable: function(field) {
      if (field in profile) {
        profile[field] = false;
      }
    }
  };
})();

__WL.MultiEventListener = WLJSX.Class.create({
  isEventComplete: false,
  onEventsComplete: null,
  events: null,

  initialize: function() {
    this.events = {};
  },

  __onEvent: function(e) {
    this.events[e.type] = true;
    for (var x in this.events) {
      if (!this.events[x]) {
        return;
      }
    }
    this.onEventsComplete();
  },

  registerEvent: function(e) {
    document.addEventListener(e, this.__onEvent.bind(this), false);
    this.events[e] = false;
  }
});

var __WLEvents = {
  WORKLIGHT_IS_CONNECTED: 'WL:WORKLIGHT_IS_CONNECTED',
  WORKLIGHT_IS_DISCONNECTED: 'WL:WORKLIGHT_IS_DISCONNECTED'
};

__WL.prototype.Events = __WLEvents;
WL.Events = __WLEvents;

/*jshint undef:false*/
__WLLocalStorage = function() {
  var isSupportLocalStorage = (typeof localStorage !== 'undefined');
  var HTML5_NOT_SUPPORT_MSG = '. HTML5 localStorage not supported on current browser.';

  function deviceReadyCallback() {
    isSupportLocalStorage = (typeof localStorage !== 'undefined');
    preventClearSpecialValues();
  }

  if (typeof document.addEventListener !== 'undefined') {
    document.addEventListener('deviceready', deviceReadyCallback, false);
  } else {
    document.attachEvent('ondeviceready', deviceReadyCallback);
  }

  function preventClearSpecialValues() {
    // prevent from clear MobileFirst Platform special values
    if (typeof Storage !== 'undefined' && isSupportLocalStorage) {
      Storage.prototype.clear = function() {
        for (var item in localStorage) {
          if (item !== 'cookies' && item !== 'userName') {
            localStorage.removeItem(item);
          }
        }
      };
    }
  }

  this.getValue = function(key) {
      var value = null;
      if (isSupportLocalStorage) {
        value = localStorage.getItem(key);
      } else {
        WL.Logger.debug('Can\'t retrive value for key ' + key + HTML5_NOT_SUPPORT_MSG);
      }
      return value;
    },

    this.setValue = function(key, value) {
      if (isSupportLocalStorage) {
        localStorage.setItem(key, value);
      } else {
        WL.Logger.debug('Can\'t set value ' + value + ' for key' + key + HTML5_NOT_SUPPORT_MSG);
      }
    },

    this.clear = function(key) {
      if (isSupportLocalStorage) {
        localStorage.removeItem(key);
      } else {
        WL.Logger.debug('Can\'t clear key ' + key + HTML5_NOT_SUPPORT_MSG);
      }
    },

    this.clearAll = function() {
      if (isSupportLocalStorage) {
        localStorage.clear();
      } else {
        WL.Logger.debug('Can\'t clear storage ' + HTML5_NOT_SUPPORT_MSG);
      }
    };
};

/*jshint newcap:false*/
__WL.LocalStorage = new __WLLocalStorage();

__WLDevice = function() {
  /**
   * Supported environments: Android, iOS
   *
   * @param callback -
   *            the callback function
   * @return network info from device in JSON format The returned object
   *         consist from the following properties: isNetworkConnected,
   *         isAirplaneMode, isRoaming, networkConnectionType, wifiName,
   *         telephonyNetworkType, carrierName, ipAddress,
   */
  this.getNetworkInfo = function(callback) {
    callback({});
  };
};
__WL.prototype.Device = new __WLDevice();
WL.Device = new __WLDevice();

/**
 * ================================================================= 
 * Source file taken from :: diagnosticdialog.js
 * ================================================================= 
 */

/**
 * @license
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

__WLDiagnosticDialog = function() {
    this.showDialog = function(title, messageText, allowReload, allowDetails, response, customErrorMsg) {
    	
    	var dateTime=new Date();
    	if (typeof(navigator.globalization) !== 'undefined') {
    		navigator.globalization.dateToString(dateTime,function (date){dateTime=date.value;},function(){});
		} else {
			dateTime = dateTime.toString();
		}
    	
        var buttons = [];
        if (allowReload) {
            buttons.push({
                text : WL.ClientMessages.reload,
                handler : function() {
                    WL.Client.reloadApp();
                }
            });
        }

        // Troubleshooting button
        if (allowDetails && WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_DIAGNOSTIC)) {
            buttons.push({
                text : WL.ClientMessages.details,
                handler : function() {
                    WL.Device.getNetworkInfo(function(networkInfoObject) {
                    //run as callback because get server url is through cordova
                    	getDiagnosticData(response, networkInfoObject, customErrorMsg, dateTime ,function (diagnosticData){
                    		WL.App.hideSplashScreen();
                    		showDiagnosticTable(diagnosticData);
                    	});
                    });
                }
            });
        }

        if (buttons.length == 0) {
            buttons.push({
                text : WL.ClientMessages.close,
                handler : function() {
                }
            });
        }
        WL.SimpleDialog.show(title, messageText, buttons);
    };

    // Diagnostics functions
    function showDiagnosticTable(diagnosticData) {
        // Back again with networkInfo object
        clearScreenBeforeDiagnostics();
        WLJSX.$$('html')[0].style.overflow = 'auto';
        WLJSX.$$('body')[0].style.overflow = 'visible';
        WLJSX.$$('body')[0].style.backgroundColor = 'white';

        var diagnosticDiv = WLJSX.newElement('<div/>', {
            'id' : 'diagnostic',
            'class' : 'max'
        });
        
        if(WL.Utils.getLanguageDirectionality() === WL.Language.DIRECTION_RTL) {
        	diagnosticDiv.dir = 'rtl';
        }

        var contentContainer = WLJSX.$$$("body");
        if (contentContainer && contentContainer.tagName.toLowerCase() != "body") {
            contentContainer.style.display = "none";
        }
        WLJSX.$$('body')[0].appendChild(diagnosticDiv);

        var diagnosticTable = WLJSX.newElement('<table/>', {
            'id' : 'diagnosticTable'
        });

        WLJSX.append(diagnosticDiv, diagnosticTable);
        WLJSX.addClass(diagnosticTable, 'max');
        WLJSX.addClass(diagnosticTable, 'diagnosticTable');
        var titleRow = WLJSX.newElement('<tr/>');
        var titleColumn = WLJSX.newElement('<td/>', {
            'class' : 'center strong',
            'colspan' : '2'
        });

        WLJSX.html(titleColumn, WL.ClientMessages.diagApp);
        WLJSX.append(diagnosticTable, titleRow);
        WLJSX.append(titleRow, titleColumn);
        WLJSX.append(diagnosticTable, titleRow);

        for (dataRecord in diagnosticData) {
            var row = WLJSX.newElement('<tr/>');
            var labelColumn = WLJSX.newElement('<td>' + dataRecord + '</td>');
            var dataColumn = WLJSX.newElement('<td>' + diagnosticData[dataRecord] + '</td>');
            WLJSX.append(row, labelColumn);
            WLJSX.append(row, dataColumn);
            WLJSX.append(diagnosticTable, row);
        }
        titleColumn.appendChild(getDiagnosticsButtonDiv(diagnosticData));
        diagnosticDiv.appendChild(getDiagnosticsButtonDiv(diagnosticData));
    }

    function getDiagnosticData(response, networkInfo, customErrorMsg, dateTime ,callback) {
        var diagnosticData = {};
        diagnosticData[WL.ClientMessages.diagTime] = dateTime;
        diagnosticData[WL.ClientMessages.diagApplicationName] = WL.StaticAppProps.APP_DISPLAY_NAME;
        diagnosticData[WL.ClientMessages.diagApplicationVersion] = WL.StaticAppProps.APP_VERSION;
        diagnosticData[WL.ClientMessages.diagDevicePlatform] = (typeof (device) != "undefined") ? device.platform : "";
        diagnosticData[WL.ClientMessages.diagDeviceVersion] = (typeof (device) != "undefined") ? device.version : "";
        diagnosticData[WL.ClientMessages.diagScreenResolution] = (WL.App.getScreenWidth ? WL.App.getScreenWidth() : screen.width) + 'x'
                + (WL.App.getScreenHeight ? WL.App.getScreenHeight() : screen.height);
        if (typeof networkInfo != "undefined") {
            diagnosticData[WL.ClientMessages.diagAirplaneMode] = networkInfo.isAirplaneMode == null ? WL.ClientMessages.notAvailable
                    : networkInfo.isAirplaneMode;
            diagnosticData[WL.ClientMessages.diagUsingNetwork] = networkInfo.networkConnectionType;
            diagnosticData[WL.ClientMessages.diagWifiName] = networkInfo.wifiName == null ? WL.ClientMessages.notAvailable
                    : networkInfo.wifiName;
            diagnosticData[WL.ClientMessages.diagMobileNetworkType] = networkInfo.telephonyNetworkType == null ? WL.ClientMessages.notAvailable
                    : networkInfo.telephonyNetworkType;
            diagnosticData[WL.ClientMessages.diagCarrierName] = networkInfo.carrierName == null ? WL.ClientMessages.notAvailable
                    : networkInfo.carrierName;
            diagnosticData[WL.ClientMessages.diagIPAddress] = networkInfo.ipAddress;
        }
        diagnosticData[WL.ClientMessages.diagErrorCode] = response.errorCode;
        diagnosticData[WL.ClientMessages.diagErrorMessage] = (typeof (customErrorMsg) === 'undefined' || customErrorMsg == null) ? response.errorMsg
                : customErrorMsg;
        diagnosticData[WL.ClientMessages.diagHttpStatus] = response.status != -1 ? response.status : "";

        WL.App.getServerUrl(function(url){
        		diagnosticData[WL.ClientMessages.diagServiceURL] = url;
        		callback(diagnosticData);
        	}, function(error){
        		diagnosticData[WL.ClientMessages.diagServiceURL] = "Error geting server url";
        		callback(diagnosticData);
        	});
    }

    function getDiagnosticsButtonDiv(diagnosticData) {
        var copyButton = WLJSX.newElement('<input/>', {
            'class' : 'diagnosticButtons',
            'type' : 'button',
            'value' : WL.ClientMessages.copyToClipboard,
            'title' : WL.ClientMessages.copyToClipboard
        });
        var reloadButton = WLJSX.newElement('<input/>', {
            'class' : 'diagnosticButtons',
            'type' : 'button',
            'value' : WL.ClientMessages.reload,
            'title' : WL.ClientMessages.reload
        });
        var buttonsDiv = WLJSX.newElement('<div/>', {
            'class' : 'center'
        });

        var diagnosticToCopy = formatDiagnosticData(diagnosticData);

        WLJSX.bind(copyButton, 'click', function() {
            WL.App.__copyToClipboard(diagnosticToCopy);
        });
        WLJSX.bind(reloadButton, 'click', function() {
        	 WL.Client.reloadApp();
        });

        buttonsDiv.appendChild(reloadButton);
        buttonsDiv.appendChild(copyButton);
        return buttonsDiv;
    }

    function formatDiagnosticData(diagnosticData) {
        var diagnosticDataText = "" + WL.ClientMessages.diagApp + "\n\n";
        for (property in diagnosticData) {
            var diagnosticDataValue = (typeof diagnosticData[property] == "undefined" || diagnosticData[property] == "undefined") ? ""
                    : diagnosticData[property];
            diagnosticDataText += property + " : " + diagnosticDataValue + "\n\n";
        }
        return diagnosticDataText;
    }

    function clearScreenBeforeDiagnostics() {
        var contentContainer = WLJSX.$$$("body");
        WLJSX.empty(contentContainer);
    }
};

__WL.prototype.DiagnosticDialog = new __WLDiagnosticDialog;
WL.DiagnosticDialog = new __WLDiagnosticDialog;


/**
 * ================================================================= 
 * Source file taken from :: wllogger.js
 * ================================================================= 
 */

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
/*globals WL, printStackTrace, air, worklight, cordova, WLJQ*/
/*jshint expr:true, strict:false, maxdepth:4, maxparams:5*/

WL.Logger = (function (jQuery) {
	
  var $ = jQuery;

  var priorities = {
    trace      : 600,
    debug      : 500,
    log        : 400,
    info       : 300,
    warn       : 200,
    error      : 100,
    fatal      : 50,
    analytics : 25
  };

  var LEFT_BRACKET = '[';
  var RIGHT_BRACKET = '] '; //There's a space at the end.

  var __getStateDefaults = function() {
    var udf;  // because undefined can be overridden
    return {
      enabled : true,
      stringify : true,
      pretty: false,
      stacktrace : false,
      ismsie : !!(document.all && document.querySelector && !document.addEventListener),
      callback : '',
      tag : {level: false, pkg: true},
      pkg : '',
      whitelist : [],  // @deprecated since version 6.2; use filters instead
      blacklist : [],  // @deprecated since version 6.2; use filters instead
      filters : udf,
      filtersFromServer: udf,
      level : 'trace',
      levelFromServer : udf,
      metadata : {},
      capture : udf,
      showLogsInConsole: udf, 
      captureFromServer : udf,
      analyticsCapture : udf,
      maxFileSize : udf,
      autoSendLogs: true,
      autoSendLogsInterval: 60
    };
  };

  var state = __getStateDefaults();

  var deviceReady = false;
  var queue = [];

  var CDV_PLUGIN_LOGGER = 'LoggerPlugin';
  var CDV_ACTION_LOG = 'log';
  var CDV_ACTION_SET_NATIVE_OPTIONS = 'setNativeOptions';
  var CDV_ACTION_SEND = 'send';
  var CDV_ACTION_GET_STATUS = 'getStatus';
  var CDV_ACTION_SEND_ANALYTICS = 'sendAnalytics';
  var REQ_SEND_LOGS = '/loguploader';
  
  // we use WL.StaticAppProps instead of WL.Client.getEnvironment because the former is
  // guaranteed to be available
  if (typeof console === 'undefined' && WL.StaticAppProps.ENVIRONMENT === 'air') {
    window.addEventListener('load', function() {
      // override console.  Yes global; no 'var' declaration.
      console = WL.Logger;
    }, false);
  }
  
  // we want to pass log messages to cordova, which may not be ready,
  // so we listen for deviceready event, and queue until event occurs
  var __onDeviceReady = function() {
    if (deviceReady) {
      return;
    }

    var noop = function () {};
    deviceReady = true;

    for (var i = 0; i < queue.length; i++) {
      var current = queue[i];
      if ($.isArray(current)) {
        cordova.exec(null, null, CDV_PLUGIN_LOGGER, CDV_ACTION_LOG, current);
      } else if (typeof current === 'object') {

        current.dfd = current.dfd || {};
        cordova.exec(current.dfd.resolve || noop,
            current.dfd.reject || noop,
            CDV_PLUGIN_LOGGER, CDV_ACTION_SET_NATIVE_OPTIONS, [current]);
      }
    }

    queue = null;
  };

  document.addEventListener("deviceready", function () {
      console.log("Device in Ready State ");
      if (window.clientInformation.userAgent.indexOf('Windows NT 10.0') > -1 || window.clientInformation.userAgent.indexOf('Windows Phone 10.0') > -1) {
        __onDeviceReady();
      }
  });

  var __resetState = function () {
    state = __getStateDefaults();
    return this;
  };

  var __getLogArgArray = function (args, priority, pkg) {

    var msgStr = __stringifyArguments(args);
    var meta = $.extend(true, {'$src': 'js', '$arguments': args}, state.metadata); //clone obj
    state.metadata = {}; //clear metadata obj

    for (var i = 0; i < args.length; i++) {

      if (args[i] instanceof Error) {
        args[i] = {'$name': args[i].toString(), '$stacktrace': printStackTrace({e: args[i]})};
      }
    }

    if (typeof priority === 'string') {
      priority = priority.toUpperCase();
    }
    
    return [priority, pkg, msgStr, meta, (new Date()).getTime()];
  };

  var _isWinUWPEnv = function () {
      if (window.clientInformation.userAgent.indexOf('Windows NT 10.0') > -1 || window.clientInformation.userAgent.indexOf('Windows Phone 10.0') > -1) {
          return true;
      } else {
          return false
      }
  };

  var __checkNativeEnvironment = function () {
    // we use WL.StaticAppProps instead of WL.Client.getEnvironment because the former is
    // guaranteed to be available
    var env = WL.StaticAppProps.ENVIRONMENT;

    return (env === 'android' ||
        env === 'iphone' ||
        env === 'ipad');
  };
  
  if (__checkNativeEnvironment() || _isWinUWPEnv()) {
    var interval = setInterval(function() {
      if (!deviceReady && typeof window.cordova === 'object' && typeof window.cordova.exec === 'function') {
        setTimeout(function(){
          __onDeviceReady();
        },0);
        clearInterval(interval);
      }
    }, 500);
  }

  var __insideArray = function (needle, haystack) {

    return haystack.indexOf(needle) !== -1;
  };

  var __getKeys = function (obj) {
    var arr = [];

    for (var key in obj) {
      if(obj.hasOwnProperty(key)){
        arr.push(key);
      }
    }
    return arr;
  };

  var __setState = function (options) {

    state = {
        enabled : typeof options.enabled === 'boolean' ? options.enabled : state.enabled,
        stringify : typeof options.stringify === 'boolean' ? options.stringify : state.stringify,
        pretty: typeof options.pretty === 'boolean' ? options.pretty : state.pretty,
        stacktrace : typeof options.stacktrace === 'boolean' ? options.stacktrace : state.stacktrace,
        ismsie : typeof options.ismsie === 'boolean' ? options.ismsie : state.ismsie,
        callback : options.callback || state.callback,
        tag : $.extend({level: false, pkg: true}, options.tag || state.tag),
        pkg : options.pkg || state.pkg,
        whitelist : options.whitelist || state.whitelist,  // @deprecated in 6.2; use filters instead
        blacklist : options.blacklist || state.blacklist,  // @deprecated in 6.2; use filters instead
        filters : options.filters === null || typeof options.filters === 'object' ? options.filters : state.filters,  // {'jsonstore': 'WARN', 'otherPkg': 'DEBUG'}
        filtersFromServer : typeof options.filtersFromServer === 'object' ? options.filtersFromServer : state.filtersFromServer,
        level : options.level || state.level,
        levelFromServer : options.levelFromServer || state.levelFromServer,
        metadata: options.metadata || state.metadata,
        capture : typeof options.capture === 'boolean' ? options.capture : state.capture,
        captureFromServer : typeof options.captureFromServer === 'boolean' ? options.captureFromServer : state.captureFromServer,
        showLogsInConsole:typeof options.showLogsInConsole === 'boolean' ? options.showLogsInConsole : state.showLogsInConsole,
        analyticsCapture : typeof options.analyticsCapture === 'boolean' ? options.analyticsCapture : state.analyticsCapture,
        maxFileSize : typeof options.maxFileSize === 'number' && options.maxFileSize % 1 === 0 ? options.maxFileSize : state.maxFileSize,
        autoSendLogs : typeof options.autoSendLogs === 'boolean' ? options.autoSendLogs : state.autoSendLogs,
        autoSendLogsInterval : typeof options.autoSendLogsInterval === 'number' && options.autoSendLogsInterval % 1 === 0 ? options.autoSendLogsInterval : state.autoSendLogsInterval
      };
    if (__checkNativeEnvironment()) {
      _setNativeOptions(options || {});
    } else if (WL.StaticAppProps.ENVIRONMENT !== 'air' || _isWinUWPEnv()) {
      WL.WebLogger._setState(state);
    }
  };

  var __stringify = function (input) {

    if (input instanceof Error) {

      return (state.stacktrace) ? printStackTrace({e: input}).join('\n') : input.toString();
    }

    else if (typeof input === 'object' && JSON && JSON.stringify) {

      try {
        return (state.pretty) ? JSON.stringify(input, null, ' ') : JSON.stringify(input);
      }
      catch (e) {
        return 'Stringify Failed: ' + e;
      }

    } else {
      return (typeof input === 'undefined') ? 'undefined' : input.toString();
    }
  };

  var __stringifyArguments = function (args) {

    var len = args.length,
    i = 0,
    res = [];

    for (; i < len ; i++) {
      res.push(__stringify(args[i]));
    }

    return res.join(' ');
  };

  //currentPriority is the priority linked to the current log msg
  //stateLevel can be an Array (whitelist of levels), a string (e.g. 'warn') or a number (200)
  var __checkLevel = function (currentPriority, stateLevel) {

    if ($.isArray(stateLevel)) {

      return  (//Check if current is whitelisted (state)
          stateLevel.length > 0 &&
          !__insideArray(currentPriority, stateLevel)
      );

    } else if (typeof stateLevel === 'string') {

      stateLevel = stateLevel.toLowerCase();//Handle WARN, wArN, etc instead of just warn

      return  (//Get numeric value and compare current with state
          typeof (priorities[currentPriority]) === 'number' &&
          typeof (priorities[stateLevel]) === 'number' &&
          (priorities[currentPriority]  > priorities[stateLevel])
      );

    } else if (typeof stateLevel === 'number') {

      return (//Compare current with state
          typeof (priorities[currentPriority]) === 'number' &&
          (priorities[currentPriority]  > stateLevel)
      );
    }

    return true; //Bail out, level is some unknown type
  };

  var __checkFilters = function (priority, pkg) {
    var currFilters = state.filtersFromServer || state.filters;
    if (__getKeys(currFilters).length > 0) {  // non-empty filters object
      return __checkLevel(priority, currFilters[pkg]);
    }
    return false;
  };

  var __checkLists = function (pkg, whitelistArr, blacklistArr) {

    return (//Package inside Whitelist
        ($.isArray(whitelistArr) && whitelistArr.length > 0 && !__insideArray(pkg, whitelistArr)) ||

        //Package inside Blacklist
        ($.isArray(blacklistArr) && blacklistArr.length > 0 && __insideArray(pkg, blacklistArr))
    );
  };

  var __log = function (args, priority) {
  
  //trace is not supported in windows due to IE 
  if(WL.StaticAppProps.ENVIRONMENT === WL.Environment.WINDOWS8 || WL.StaticAppProps.ENVIRONMENT === WL.Environment.WINDOWS || WL.StaticAppProps.ENVIRONMENT === WL.Environment.WINDOWSPHONE8){
  	console.trace = console.debug;
  }
    var str = '',
    pkg = state.pkg;

    state.pkg = ''; //clear pkg from state obj

     //if (!__checkNativeEnvironment()) {
    if (!(__checkNativeEnvironment() || _isWinUWPEnv())) {
      if (!state.enabled ||
          __checkFilters(priority, pkg) ||
          __checkLists(pkg, state.whitelist, state.blacklist) ||
          __checkLevel(priority, state.levelFromServer || state.level)) {

        return;
      }
    }

    if (state.stringify) {
      str = __stringifyArguments(args);
    }

    //Apply Package Tag
    if (state.tag.pkg && typeof pkg === 'string' && pkg.length > 0) {
      str = LEFT_BRACKET + pkg + RIGHT_BRACKET + str;
    }

    //Apply Level Tag
    if (state.tag.level) {
      str = LEFT_BRACKET + priority.toUpperCase() + RIGHT_BRACKET + str;
    }

    if (!state.stringify && str.length > 0) {
      args.unshift(str);
    }

    if (!__checkNativeEnvironment() || _isWinUWPEnv()) {

      // Queue for later sending
      if (WL.StaticAppProps.ENVIRONMENT !== 'air' || _isWinUWPEnv()) {
        WL.WebLogger.log(__getLogArgArray(args, priority, pkg));
      }
      
      //Log to the console
      // we use WL.StaticAppProps instead of WL.Client.getEnvironment because the former is
      // guaranteed to be available
      if (typeof console === 'object' && WL.StaticAppProps.ENVIRONMENT !== 'air') {  // avoid infinite loop on Adobe AIR 

        if (typeof console[priority] === 'function') {
          (state.stringify) ? console[priority](str) : console[priority].apply(console, args);

        } else if (priority === 'fatal') {
          if (typeof console.error === 'function') {
            (state.stringify) ? console.error(str) : console.error.apply(console, args);
          }

        } else if (priority === 'trace') {
          if (typeof console.debug === 'function') {
            (state.stringify) ? console.debug(str) : console.debug.apply(console, args);
          }

        } else if (priority === 'analytics') {
        	// Do nothing
        } else if (typeof console.log === 'function') {
          (state.stringify) ? console.log(str) : console.log.apply(console, args);

        } else if (state.ismsie && typeof console.log === 'object') {
          (state.stringify) ? console.log(str) : console.log.apply(console, args);
        }

      } else {
    	  
        //Special case for Adobe Air apps in debug mode
        if (typeof air === 'object' && air.Introspector && air.Introspector.Console) {
        	
          if (typeof air.Introspector.Console[priority] === 'function') {
            (state.stringify) ? air.Introspector.Console[priority](str) : air.Introspector.Console[priority].apply(air, args);

          } else if (typeof air.Introspector.Console.log === 'function') {
            (state.stringify) ? air.Introspector.Console.log(str) : air.Introspector.Console.log.apply(air, args);
          }
        }

        //Special case for BlackBerry
        else if (typeof worklight === 'object' && worklight.utils && typeof worklight.utils.log === 'function') {

          str = (!state.stringify) ? __stringifyArguments(args) : str;

          worklight.utils.log(str, priority);
        }
      }

    } else {

      if (!deviceReady) {

        try {
          queue.push(__getLogArgArray(args, priority, pkg));
        } catch (e) {
          console.log('[wl.logger] ' + e.toString());
        }

      } else if (typeof cordova === 'object' && cordova.exec) {

        cordova.exec(null, null, CDV_PLUGIN_LOGGER, CDV_ACTION_LOG, __getLogArgArray(args, priority, pkg));
      }

    }

    //The default value of state.callback is an empty string (not a function)
    if (typeof state.callback === 'function') {
      if (!state.stringify) {
        str = args;
      }
      state.callback(str, priority, pkg);
    }

  };

  var LogInstance = function (ops) {
    this.options = ops || {};
    if (typeof cordova === 'object' && cordova.exec &&
        !(ops.level === undefined || ops.level == null || ops.level.length <= 0 )) {
       __setState($.extend(ops || {}, {enabled: true}));
    }
  };

  //Add .debug(), .log(), etc. to LogInstances
  $.each(__getKeys(priorities), function (idx, priority) {
    LogInstance.prototype[priority] = function () {
      WL.Logger.ctx(this.options)[priority].apply(this, arguments);
    };
  });

  var _create = function (options) {
    return new LogInstance(options);
  };

  // @deprecated in 6.2
  var _on = function () {
    __log(['WL.Logger.on is deprecated. Please use WL.Logger.config instead.'], 'WARN');
    return this;
  };

  var _config = function(options) {
    __setState($.extend(options || {}, {enabled: true}));
    return this;
  };

  // @deprecated in 6.2
  var _off = function () {
    __log(['WL.Logger.off is deprecated. Please use WL.Logger.config instead.'], 'WARN');
    return this;
  };

  var _status = function () {

    var dfd = $.Deferred();

    var onSuccess = function(currentNativeSettings) {
      state = $.extend(state, currentNativeSettings);
      dfd.resolve(state);
    };

    if (__checkNativeEnvironment()) {
      setTimeout(function () {
        cordova.exec(onSuccess, dfd.reject, CDV_PLUGIN_LOGGER, CDV_ACTION_GET_STATUS, []);
      }, 0);
    } else {
      dfd.resolve(state);
    }

    return dfd;
  };

  var _ctx = function (options) {
    $.extend(state, options || {});
    return this;
  };

  var _send = function () {

    var dfd = $.Deferred();

    if (__checkNativeEnvironment()) {
      setTimeout(function () {
        cordova.exec(dfd.resolve, dfd.reject, CDV_PLUGIN_LOGGER, CDV_ACTION_SEND, []);
      }, 0);
    } else if (WL.StaticAppProps.ENVIRONMENT !== 'air' || _isWinUWPEnv()) {
      return WL.WebLogger.sendLogs();
    } else {
      setTimeout(function() {
        dfd.resolve();
      }, 0);
    }

    return dfd.promise();
  };
  
  var __manualSendLogs = function(dfd){
    __getLogsFromNative()
    .done(function(logs) {
      if (WL.StaticAppProps.ENVIRONMENT !== 'air' || _isWinUWPEnv()) {
        WL.WebLogger._ajax(logs, REQ_SEND_LOGS)
        .done(function(){
          cordova.exec({}, {}, "WPLoggerPlugin", "deleteLogData", []);
          dfd.resolve();
        })
        .fail(function(){
          dfd.reject();
        });
      } else {
        dfd.resolve();
      }
      
    }).fail(function(){
      dfd.reject();
    }); 
  };
  
  var __getLogsFromNative = function(){
	  var dfd = $.Deferred();
	  cordova.exec(dfd.resolve, dfd.reject, "WPLoggerPlugin", "getLogData", []);
	  return dfd.promise();
  }
  
  var __sendAnalytics = function () {

      var dfd = $.Deferred();

      if (__checkNativeEnvironment()) {
        setTimeout(function () {
          cordova.exec(dfd.resolve, dfd.reject, CDV_PLUGIN_LOGGER, CDV_ACTION_SEND_ANALYTICS, []);
        }, 0);
      } else if (WL.StaticAppProps.ENVIRONMENT !== 'air' || _isWinUWPEnv()) {
        return WL.WebLogger.sendAnalytics();
      } else {
        setTimeout(function() {
          dfd.resolve();
        }, 0);
      }

      return dfd.promise();
  };

  var _metadata = function (obj) {

    if (typeof obj === 'object') {
      state.metadata = obj;
    }

    return this;
  };

  var _setNativeOptionsDeprecated = function () {
    __log(['WL.Logger.setNativeOptions is deprecated. Please use WL.Logger.config instead.'], 'WARN');
    return _setNativeOptions.apply(this, arguments);
  };

  // public call to setNativeOptions is deprecated in 6.2, but we keep this private function
  var _setNativeOptions = function (options) {
    var dfd = $.Deferred();

    if (typeof options !== 'object') {

      setTimeout(function () {
        dfd.reject({src: 'setNativeOptions', msg: 'You must pass an object to WL.Logger.setNativeOptions'});
      }, 1);

      return dfd.promise();
    }

    if (!__checkNativeEnvironment()) {

      setTimeout(function () {
        dfd.reject({src: 'setNativeOptions', msg: 'WL.Logger.setNativeOptions only works on Android and iOS environments, current environment is: '+
          __checkNativeEnvironment()});
      }, 1);

      return dfd.promise();
    }

    var ops = {};

    //Check if maxFileSize is an integer (e.g. 1, not 1.1)
    if (Math.floor(options.maxFileSize) === options.maxFileSize && $.isNumeric(options.maxFileSize)) {
      ops.maxFileSize = options.maxFileSize;
    }

    //Level is 'trace', debug', 'log', 'info', 'warn', 'error', or 'fatal'
    //Why Up/Low case? __getKeys will return lower case strings and native expects upper cased strings.
    if (typeof options.level === 'string' && __insideArray(options.level.toLowerCase(), __getKeys(priorities))) {
      ops.level = options.level.toUpperCase();
    } else if ($.isArray(options.level) && options.level.length > 0) {
      var getKeyByValue = function( obj, value ) {
        for( var prop in obj ) {
          if( obj.hasOwnProperty( prop ) ) {
            if( obj[ prop ] === value ) {
              return prop;
            }
          }
        }
      };
      var values = [];
      for(var i = 0; i < options.level.length; i++) {
        values[i] = priorities[options.level[i].toLowerCase()];
      }
      var largest = Math.max.apply(Math, values);
      ops.level = getKeyByValue(priorities, largest);
    }

    if (typeof options.levelFromServer === 'string' && __insideArray(options.levelFromServer.toLowerCase(), __getKeys(priorities))) {
      ops.levelFromServer = options.levelFromServer.toUpperCase();
    }

    if (typeof options.capture === 'boolean') {
      ops.capture = options.capture;
    }

    if(typeof options.showLogsInConsole === 'boolean'){
      ops.showLogsInConsole =options.showLogsInConsole;
    }

    if (typeof options.captureFromServer === 'boolean') {
      ops.captureFromServer = options.captureFromServer;
    }

    if (typeof options.analyticsCapture === 'boolean') {
      ops.analyticsCapture = options.analyticsCapture;
    }

    if (typeof options.autoSendLogs === 'boolean') {
        ops.autoSendLogs = options.autoSendLogs;
    }

    if (Math.floor(options.autoSendLogsInterval) === options.autoSendLogsInterval && $.isNumeric(options.autoSendLogsInterval)) {
         ops.autoSendLogsInterval = options.autoSendLogsInterval;
    }

    if (typeof options.filters === 'object' || options.filters === null) {
      // TODO: validate each key/value pair in the object conforms to {String: String}, like {'package': 'LEVEL'} ?
      ops.filters = options.filters === null ? {} : options.filters;
    }

    if (typeof options.filtersFromServer === 'object' || options.filtersFromServer === null) {
      // TODO: validate each key/value pair in the object conforms to {String: String}, like {'package': 'LEVEL'} ?
      ops.filtersFromServer = options.filtersFromServer === null ? {} : options.filtersFromServer;
    }


    if (!deviceReady) {
      //Queue the operation until the bridge to native is active
      ops.dfd = dfd;
      try {
        queue.push(ops);
      } catch (e) {
        console.log('[wl.logger] ' + e.toString());
      }
    } else {
      cordova.exec(dfd.resolve, dfd.reject, CDV_PLUGIN_LOGGER, CDV_ACTION_SET_NATIVE_OPTIONS, [ops]);
    }

    return dfd.promise();
  };
  
  function processLoggerServerConfig(loggerJSONObject) {

      var clientLogProfiles = loggerJSONObject["clientLogProfiles"];

      if (!clientLogProfiles || clientLogProfiles == null || clientLogProfiles.length == 0) {
          removeServerLoggerConfigOverrides();
          return;
      }

      var filtersFromServer = {};

      for (var i = 0; i < clientLogProfiles.length; i++) {
          var clientLogProfile = clientLogProfiles[i];
          if ((!clientLogProfile.hasOwnProperty("name") || clientLogProfile != null || !clientLogProfile) && clientLogProfile.hasOwnProperty("level")) {
              window.localStorage.setItem('levelFromServer', clientLogProfile["level"]);
          } else if (clientLogProfile.hasOwnProperty("name") && clientLogProfile.hasOwnProperty("level")) {
              filtersFromServer[clientLogProfile["name"]] = clientLogProfile["level"];
          }
      }

      if (filtersFromServer.length > 0) {
          window.localStorage.setItem('filtersFromServer', JSON.stringify(filtersFromServer));
      } else {
          window.localStorage.setItem('filtersFromServer', "{}");
      }
  }

  function removeServerLoggerConfigOverrides() {
      window.localStorage.removeItem('logPersistenceFromServer');
      window.localStorage.removeItem('levelFromServer');
      window.localStorage.removeItem('filtersFromServer');

      var defaultState = __getStateDefaults();

      var tobeSetLevel = "";
      if (!window.localStorage.getItem('level') || window.localStorage.getItem('level') != null) {
          tobeSetLevel = window.localStorage.getItem('level');
      } else {
          tobeSetLevel = defaultState.level;
      }

      var tobeCapture = "";
      if (!window.localStorage.getItem('logPersistence') || window.localStorage.getItem('logPersistence') != null) {
          tobeCapture = window.localStorage.getItem('logPersistence');
      } else {
          tobeCapture = true;
      }

      var tobeFilters = {};
      if (!window.localStorage.getItem('filters') || window.localStorage.getItem('filters') != null) {
          tobeFilters = window.localStorage.getItem('filters');
      } else {
          tobeFilters = {};
      }
      WL.Logger.config({ level: tobeSetLevel, capture: tobeCapture, filters: tobeFilters });
  }

  var _updateConfigFromServer = function() {
    var dfd = $.Deferred();

    if (__checkNativeEnvironment()) {
      setTimeout(function () {
        cordova.exec(dfd.resolve, dfd.reject, 'LoggerPlugin', 'updateConfigFromServer', []);
      }, 0);
    } else if (WL.StaticAppProps.ENVIRONMENT !== 'air') {
      return WL.WebLogger.updateConfigFromServer();
    } else {
      setTimeout(function() {
        dfd.resolve();
      }, 0);
    }

    return dfd.promise();
  };

  var __setServerOverrides = function(config) {
    var udf;  // undefined
    state.levelFromServer = udf;
    state.captureFromServer = udf;
    state.filtersFromServer = udf;
    _config({levelFromServer: config.level, captureFromServer: config.capture, filtersFromServer: config.filters});
  };

  var __unsetServerOverrides = function() {
    var udf;  // undefined
    state.levelFromServer = udf;
    state.captureFromServer = udf;
    state.filtersFromServer = udf;
    _config({levelFromServer: udf, captureFromServer: udf, filtersFromServer: udf});
  };

  var __processAutomaticTrigger = function(){
	  if (__checkNativeEnvironment()) {
	      setTimeout(function () {
	        cordova.exec(null, null, 'LoggerPlugin', 'processAutomaticTrigger', []);
	      }, 0);
	  } else if (WL.StaticAppProps.ENVIRONMENT !== 'air') {
	  	WL.WebLogger._processAutomaticTrigger();
	  }
  };
  
  // global error catch:
  var __onerrorOriginal = window.onerror;
  window.onerror = function(msg, filename, line, column, errorObj) {
    try{
      var errorMessage = 'Uncaught Exception: ' + msg + ' at ' + (filename ? '(compiled_code)' : filename) + ':' + line;

      var stackMetaData = { $stacktrace: 'NONE' };

      if(typeof errorObj !== 'undefined'){
        stackMetaData = { $stacktrace: errorObj.stack };
      }

      // Since this is not technically a crash, we do not want to log an app
      // crash through the Analytics API.  We'll just log the FATAL message here.
      WL.Logger.metadata(stackMetaData).fatal(errorMessage);

      if (typeof __onerrorOriginal === 'function') {
        return __onerrorOriginal(msg, filename, line);
      }
    } catch(err) {
      // Try catch to avoid unlikely event of infinite loop
    }
    return false;
  };

  var __triggerFeedbackMode = function() {
    var dfd = $.Deferred();
    if (__checkNativeEnvironment()) {
       setTimeout(function () {
           cordova.exec(dfd.resolve, dfd.reject, CDV_PLUGIN_LOGGER, "triggerFeedbackMode", []);
       }, 0);
    } else {
        setTimeout(function() {
               dfd.resolve();
        }, 0);
    }

    return dfd.promise();
 };

  var __setUserContext = function(user) {
    var dfd = $.Deferred();
    if (__checkNativeEnvironment()) {
        setTimeout(function () {
            cordova.exec(dfd.resolve, dfd.reject, CDV_PLUGIN_LOGGER, "setUserContext", [user]);
        }, 0);
    } else {
        setTimeout(function() {
                dfd.resolve();
        }, 0);
    }

    return dfd.promise();
  };

  var __unsetUserContext = function() {
    var dfd = $.Deferred();
    if (__checkNativeEnvironment()) {
        setTimeout(function () {
            cordova.exec(dfd.resolve, dfd.reject, CDV_PLUGIN_LOGGER, "unsetUserContext", []);
        }, 0);
    } else {
        setTimeout(function() {
                dfd.resolve();
        }, 0);
    }

    return dfd.promise();
  };

  var PUBLIC_API = {
    create : _create,
    on : _on, // @deprecated in 6.2; use config instead
    off : _off, // @deprecated in 6.2; use config instead
    config : _config,
    status : _status,
    ctx : _ctx,
    send: _send,
    metadata: _metadata,
    updateConfigFromServer: _updateConfigFromServer,
    setNativeOptions : _setNativeOptionsDeprecated,  // @deprecated in 6.2; use config instead
    // for internal:
    _sendAnalytics: __sendAnalytics,  // called by WL.Analytics
    _processAutomaticTrigger: __processAutomaticTrigger,  // called from Resource request onSuccess callback
    _setServerOverrides: __setServerOverrides,
    _unsetServerOverrides: __unsetServerOverrides,
    _triggerFeedbackMode: __triggerFeedbackMode,
    _setUserContext: __setUserContext,
    _unsetUserContext: __unsetUserContext,
    // for testing:
    __onDeviceReady : __onDeviceReady,
    __deviceReady : deviceReady,
    __resetState : __resetState,  // back to the defaults
    
    // For web logger state manipulation
    __state: function() { return state; },
    __updateState: function(newState) { 
    	if(newState) {state = newState; }
    }
  };

  //Add .debug(), .log(), etc. to WL.Logger's public API
  $.each(__getKeys(priorities), function (idx, priority) {
    PUBLIC_API[priority] = function () {
      __log([].slice.call(arguments), priority);
    };
  });

  return PUBLIC_API;

}(WLJQ)); //WL.Logger


/**
 * ================================================================= 
 * Source file taken from :: weblogger.js
 * ================================================================= 
 */

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
/*globals WL, WLJQ, device*/
/*jshint expr:true, strict:false, maxdepth:4*/

WL.WebLogger = (function(jQuery) {

    var
    $ = jQuery,
    REQ_SEND_LOGS = '/loguploader',
    REQ_UPDATE_CONFIG = '/configprofile',
    KEY_LOCAL_STORAGE_LOGS = '__WL_WEBLOG_LOGS__',
    KEY_LOCAL_STORAGE_SWAP = '__WL_WEBLOG_SWAP__',
    KEY_LOCAL_STORAGE_ANALYTICS = '__WL_WEBLOG_ANALYTICS__',
    KEY_LOCAL_STORAGE_CONFIG = '__WL_WEBLOG_CONFIG__',
    KEY_REMOTE_STORAGE_CONFIG = '__WL_WEBLOG_REMOTE_CONFIG__',

    DEFAULT_MAX_STORAGE_SIZE = 500000,
    BUFFER_TIME_IN_MILLISECONDS = 60000,
    sendLogsTimeBuffer = 0;

    if (!window.console) {  // thanks a lot, IE9
      /*jshint -W020 */
      console = {
        error: function() {},
        warn: function() {},
        info: function() {},
        log: function() {},
        debug: function() {},
        trace: function() {}
      };
    }

    console.log = console.log || function() {};  // I suppose console.log is the most likely to exist.
    console.warn = console.warn || console.log;
    console.error = console.error || console.log;
    console.info = console.info || console.log;
    console.debug = console.debug || console.info;
    console.trace = console.trace || console.debug;  // try to keep the verbosity down a bit
    
    //trace is not supported in windows due to IE 
    if(WL.StaticAppProps.ENVIRONMENT === WL.Environment.WINDOWS8 || WL.StaticAppProps.ENVIRONMENT === WL.Environment.WINDOWS || WL.StaticAppProps.ENVIRONMENT === WL.Environment.WINDOWSPHONE8){
    	console.trace = console.debug;
    }
    
    var __usingLocalConfiguration = function(){
	  	var configurationString = localStorage.getItem(KEY_REMOTE_STORAGE_CONFIG);
	  	
	  	if(configurationString == null){
	  		return true;
	  	}
	  	
	  	return false;
  	};
  	
    /*
	*	INIT - Load state if persisted. Else get default state
    */
    (function(){
    	try {
    		if (typeof(Storage) !== 'undefined') {

    	        var configurationString = null;
    	        
    	        if(__usingLocalConfiguration()){
    	        	configurationString = localStorage.getItem(KEY_LOCAL_STORAGE_CONFIG);
    	        }else{
    	        	configurationString = localStorage.getItem(KEY_REMOTE_STORAGE_CONFIG);
    	        }

    	        if (configurationString === null){
    	          var state = WL.Logger.__state();
    	          state.maxFileSize = DEFAULT_MAX_STORAGE_SIZE;
    	          WL.Logger.__updateState(state);
    	          
    	          var stateString = JSON.stringify(state);
    	          localStorage.setItem(KEY_LOCAL_STORAGE_CONFIG, stateString);
    	        } else {
    	          var configuration = JSON.parse(configurationString);
    	          WL.Logger.__updateState(configuration);
    	        }
    		}
    	} catch ( err ) {
    		console.log("Private browsing does not support file storage");
    	}
    })();
    
    
    /*
	*	PUBLIC METHODS
    */
    var _log = function(args) {
      var state = WL.Logger.__state();
      
      setTimeout(function () { 
		  if (typeof(Storage) !== 'undefined') {
		        var level =  args[0];
		        var pkg = args[1];
		        var msg = args[2];
		        var meta = args[3];
		        var time = args[4];
		
		        var logData = {
		          'pkg': pkg,
		          'timestamp': new Date(time).getTime(),
		          'level': level,
		          'msg': msg,
		          'metadata': meta
		        };
    		
		        if(level === 'ANALYTICS' && state.analyticsCapture !== false){
		          __persistLog(logData, KEY_LOCAL_STORAGE_ANALYTICS);
		        }else if(state.capture !== false){
		          __persistLog(logData, KEY_LOCAL_STORAGE_LOGS);
		        }
		  }
      }, 0);
    },

    _sendLogs = function(){
      return __send([KEY_LOCAL_STORAGE_LOGS, KEY_LOCAL_STORAGE_SWAP]);
    },

    _sendAnalytics = function() {
      return __send([KEY_LOCAL_STORAGE_ANALYTICS]);
    },

    _updateConfigFromServer = function() {
      var dfd = $.Deferred();

      __ajax({}, REQ_UPDATE_CONFIG).done(function(data){

    	  __processUpdateConfig(data);
          dfd.resolve();
			
		}).fail(function(){
			dfd.reject();
		});

      return dfd.promise();
    },


    /*
     * PRIVATE METHODS
     */

    __send = function(keys) {
    	var dfd = $.Deferred();

    	var persistedLogs = '';
    	
    	keys.forEach(function(key){
    		var value = localStorage.getItem(key);
    		if(value !== null){
    			persistedLogs += value;
    		}
    	});
    	
    	var logdata = {
    		__logdata : persistedLogs
    	};

    	if(persistedLogs !== null) {

    		__ajax(logdata, REQ_SEND_LOGS).done(function(){

    			keys.forEach(function(key){
    				localStorage.removeItem(key);
    			});

    			console.log('Client logs successfully sent to the server');
    			dfd.resolve('OK');
    			
    		}).fail(function(data){
    			dfd.reject(data);
    		});

    	} else {
    		console.log('There are no persisted logs to send.');
    	}

    	return dfd.promise();
    },
  
  __ajax = function(data, path) {
	  var dfd = $.Deferred();

	  new WLJSX.Ajax.WLRequest(path, {
		  method: 'post',
		  parameters: JSON.stringify(data),
		  skipQueryParam: true,
		  onSuccess : function(data) {
			  dfd.resolve(data);
		  },
		  onFailure : function(xhr){
			  dfd.reject(xhr.responseText);
		  }
	  });

	  return dfd.promise();
  },

  __persistLog = function(log, key){
		if(__fileSizeReached(key)){
			if(key === KEY_LOCAL_STORAGE_LOGS){
				__attemptFileSwap();
			}else{
				// No swapping for analytics
				return;
			}
		}
		
		var stringified = JSON.stringify(log);
		var persistedLogs = localStorage.getItem(key);
		
		if(persistedLogs === null){
			persistedLogs = stringified;
		}else{
			persistedLogs +=  ', ' + stringified;
		}
		
		try{
			localStorage.setItem(key, persistedLogs);
		}catch(e){
			console.log('Local storage capacity reached. Client logs will not be persisted');
		}
	},
	
	__attemptFileSwap = function(){
		try{
			var currentLogs = localStorage.getItem(KEY_LOCAL_STORAGE_LOGS);
			localStorage.setItem(KEY_LOCAL_STORAGE_SWAP, currentLogs);
			localStorage.removeItem(KEY_LOCAL_STORAGE_LOGS);
		}catch(e){
			console.log('Local storage capacity reached. WL.Logger will delete old logs to make room for new ones.');
			localStorage.removeItem(KEY_LOCAL_STORAGE_LOGS);
			localStorage.removeItem(KEY_LOCAL_STORAGE_SWAP);
		}
	},

	__processUpdateConfig = function(configString){
		var config = null;

		try{
			config = JSON.parse(configString.responseText);
		}catch(e){

		}

		if(config !== null){
			console.log('Matching configuration successfully retrieved from the server.');
			var wllogger = config.wllogger;
			if(wllogger !== null){
		    localStorage.setItem(KEY_REMOTE_STORAGE_CONFIG, localStorage.getItem(KEY_LOCAL_STORAGE_CONFIG));
				WL.Logger._setServerOverrides(wllogger);
			}
		}else{
			console.log('No matching configurations found from the server. Defaulting to local configuration');
			localStorage.removeItem(KEY_REMOTE_STORAGE_CONFIG); 
			
			var configurationString = localStorage.getItem(KEY_LOCAL_STORAGE_CONFIG);
			var configuration = JSON.parse(configurationString);
      WL.Logger.__updateState(configuration);
      WL.Logger._unsetServerOverrides();
		}
	},

  __setState = function(state){		
		if (typeof(Storage) !== 'undefined') {
		      var stateString = JSON.stringify(state);
		      
		      if(__usingLocalConfiguration()){
		    	  localStorage.setItem(KEY_LOCAL_STORAGE_CONFIG, stateString);
		      }else{
		    	  localStorage.setItem(KEY_REMOTE_STORAGE_CONFIG, stateString);
		      }
		}
  },

  __processAutomaticTrigger = function(){
	  var currentTime = Date.now();
	  var elapsedTime = currentTime - sendLogsTimeBuffer;
	  
	  var autoSend = WL.Logger.__state().autoSendLogs;

	  if(elapsedTime > BUFFER_TIME_IN_MILLISECONDS){
		  if(autoSend){
			  _sendLogs();
			  _sendAnalytics();
		  }

		  sendLogsTimeBuffer = currentTime;
	  }
  },

  /*
	 * UTILITY METHODS
   */
	
	__fileSizeReached = function(key){
		var persistedLogs = localStorage.getItem(key);
		if(persistedLogs === null) {
      return false;
		}

		var m = encodeURIComponent(persistedLogs).match(/%[89ABab]/g);
		var size = persistedLogs.length + (m ? m.length : 0);
		
		var maxSize = WL.Logger.__state().maxFileSize;
		if(maxSize === null || typeof maxSize === 'undefined') {
			maxSize = DEFAULT_MAX_STORAGE_SIZE;
		}

		if(size >= maxSize){
			return true;
		}
		
		return false;
	};

  // public API
  return {
    log: _log,
    sendLogs: _sendLogs,
    sendAnalytics: _sendAnalytics,
    updateConfigFromServer: _updateConfigFromServer,
    _processAutomaticTrigger : __processAutomaticTrigger,
    _processUpdateConfig: __processUpdateConfig,
    _setState: __setState,
    _ajax: __ajax
  };

}(WLJQ)); //WL.WebLogger

/**
 * ================================================================= 
 * Source file taken from :: analytics.js
 * ================================================================= 
 */

/**
 * @license
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

/*global WLJQ */

var WL = WL || {};

var appSessionID = '';
var appUseStartTimestamp = -1;

/**
Everything delegates to WL.Logger, but we keep the WL.Analytics API to make it clear
to callers the difference in purpose of WL.Logger (debug) vs. WL.Analytics (analytics!).
 */
WL.Analytics = (function (jQuery, global) {

	'use strict';

	var

	//Dependencies
	$ = jQuery,

	//Constants
	_PKG_NAME = 'wl.analytics',
	
	// Private variables
	pendingTrackingIDs = {},

	/**
    Turns on the capture of analytics data.
    Returns a promise for backward compatibility.
	 */
	_enable = function () {
		var dfd = $.Deferred();

		WL.Logger.config({analyticsCapture: true});
		setTimeout(function() {
			dfd.resolve(true);
		}, 0);

		return dfd.promise();
	},

	/**
		Turns off the capture of analytics data.
    Returns a promise for backward compatibility.
	 */
	_disable = function () {
		var dfd = $.Deferred();

		WL.Logger.config({analyticsCapture: false});
		setTimeout(function() {
			dfd.resolve(false);
		}, 0);

		return dfd.promise();
	},

	/**
    Logs a message with contextual data.
    Returns a promise for backward compatibility.
	 */
	_log = function (msg, name) {
		var dfd = $.Deferred();

		if(typeof name === 'undefined'){
			name = '';
		}
			
		if (typeof msg === 'object') {
			WL.Logger.metadata(msg).ctx({pkg: _PKG_NAME}).analytics(name || '');
		} else {
			WL.Logger.ctx({pkg: _PKG_NAME}).analytics(msg, name);
		}

		setTimeout(function() {
			dfd.resolve();
		}, 0);

		return dfd.promise();
	},

	/**
		Disables analytics capture
    @deprecated since 6.2
    As you can see, it's a no-op.
	 */
	_restart = function () {
		WL.Logger.ctx({pkg: _PKG_NAME}).warn('Function \'restart\' is deprecated in MobileFirst Platform 6.2.  It is now a no-op.');
		var dfd = $.Deferred();
		setTimeout(function() {
			dfd.resolve();
		}, 0);
		return dfd.promise();
	},

	/**
		Returns the current state of WL.Analytics
	 */
	_state = function () {
		var dfd = $.Deferred();

		WL.Logger.status()

		.then(function(currentLoggerState) {
			dfd.resolve({enabled: currentLoggerState.analyticsCapture});
		})

		.fail(function(errMsg) {
			dfd.reject(errMsg);
		});

		return dfd.promise();
	},

	/**
    Send any collected analytics data collected to this point to the MobileFirst Platform Server.
	 */
	_send = function () {
		// returns a promise
		return WL.Logger._sendAnalytics();
	},

	/**
	 * Trigger Feedback mode
	 */
    _triggerFeedbackMode = function () {
        // returns a promise
        return WL.Logger._triggerFeedbackMode();
	},

	/**
	 * Specify current application user.  If you want user-based analytics, you must use this method
	 * call.  For example, use it when the user logs in, and call the unsetUserContext method when the
	 * user logs out.  Or if your application supports user profiles, call this method when the user
	 * profile changes.
	 *
	 * param _user User User id for current app user.
	 */
	_setUserContext = function (user) {
		// returns a promise
		return WL.Logger._setUserContext(user);
	},

	/**
	 * Unset any user context previously set.
	 */
	_unsetUserContext = function () {
		// returns a promise
		return WL.Logger._unsetUserContext();
	},

	/**
    Get tracking id for sending requests
	 */
	__getTrackingId = function () {
		if(__checkNativeEnvironment()){
			return null;
		}
		
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	},

  // for unit test only:
  __setTrackingId = function (id) {
    pendingTrackingIDs[id] = 1;
  },

  // For Windows UWP only
  __getAppSessionId = function () {
      if (appSessionID !== '' || typeof appSessionID !== undefined) {
          
          return __getTrackingId;
      }
  },
  __logAppSession = function () {

          try {
              var timestamp = Date.now();

              if (appUseStartTimestamp <= -1) {
                  WL.Logger.debug('Tried to record an applicationSession without a starting timestamp');
                  return;
              }

              if (appSessionID === '' || typeof appSessionID !== undefined) {
                  appSessionID = __getAppSessionId();
              }

              var metadata = {
                  '$category': 'appSession',
                  '$duration' : parseInt(timestamp,10) - parseInt(appUseStartTimestamp,10),
                  '$closedBy': 'USER',
                  '$appSessionID': appSessionID
                  //'$clientId': WLAuthorizationManager.__getFromAppSetting(WLAuthorizationManager.CLIENT_ID_OAUTH_LABEL)
              };

              WL.Logger.metadata(metadata).analytics('appSession');
              setIntervalX(function () {
                WL.Analytics.send();
              }, 1500,3);
              
          } catch (e) {
              // do  nothing
          }
  },
  __logAppSessionBackground = function () {
      if (WL.Client.getEnvironment() === 'windows') {
          __logAppSession();
          appUseStartTimestamp = -1;
      }
  },

  __logAppSessionForeground = function () {


          try {
              if (appUseStartTimestamp <= -1) {
                  appUseStartTimestamp = Date.now();

              if (appSessionID === '' || typeof appSessionID !== undefined) {
                  appSessionID = __getAppSessionId();
              }

                  // Create JSON object with start app session metadata
                  var metadata = {
                      '$category': 'appSession',
                      '$timestamp': appUseStartTimestamp,
                      '$appSessionID': appSessionID
                     // '$clientId': WLAuthorizationManager.clientId
                  };

                  WL.Logger.metadata(metadata).analytics('appSession');
                  setIntervalX(function () {
                      WL.Analytics.send();
                  }, 2000,3);
              }
          } catch (e) {
          }
  },
  /**
		Log outbound network request
	*/
	__logOutboundRequest = function (request) {
		
		if(!__checkNativeEnvironment()){
			try{
				pendingTrackingIDs[request.trackingId] = 1;
				var outboundTimestamp = new Date().getTime();
				var url = __getFullURL(global, request.url);
	
				var metadata = {
					'$path': url, //$path for legacy reasons
					'$category' : 'network',
					'$trackingid' : request.trackingId,
					'$outboundTimestamp' : outboundTimestamp
				};
				
				request.networkMetadata = metadata;
				WL.Logger.analytics('logOutboundRequest');
			}catch(e){
				// Do nothing
			}
		}
	},

	/**
	Log inbound network response
	*/
	__logInboundResponse = function (request, response) {
		
		if(!__checkNativeEnvironment()){
			try{
				var trackingId = request.trackingId;
				
				if(pendingTrackingIDs.hasOwnProperty(trackingId)){
					delete pendingTrackingIDs[trackingId];
					
					var inboundTimestamp = new Date().getTime();
					var numBytes = 0;
					var responseText = response.responseJSON;
					
					/*jshint maxdepth:4*/
					if(responseText){
						numBytes = JSON.stringify(responseText).length;
					}
					
					var metadata = request.networkMetadata;
					
					if(metadata !== null){
						var outboundTimestamp = metadata['$outboundTimestamp'];
						var roundTripTime = inboundTimestamp - outboundTimestamp;
							
						metadata['$inboundTimestamp'] = inboundTimestamp;
						metadata['$bytesReceived'] = numBytes;
						metadata['$roundTripTime'] = roundTripTime;
						metadata['$responseCode'] = response.status;
					}
		
					WL.Logger.metadata(metadata).analytics('logInboundResponse');
				}
			}catch(e){
				// Do nothing
			}
		}
	},
	
	__getFullURL = function (global, path) {

		if (typeof path === 'string' &&
			path.indexOf('http') === -1 &&
			global &&
			typeof global.location === 'object' &&
			typeof global.location.protocol === 'string' &&
			typeof global.location.hostname === 'string' &&
			typeof global.location.port === 'string' &&
			global.location.protocol.indexOf('file') === -1
		) {
			//Path does not contain 'http',
			//meaning a full url was NOT passed.

			path = [
				global.location.protocol,
				'//',
				global.location.hostname,
				':',
				global.location.port,
				path
			].join('');

			if (path.indexOf('?') !== -1) {
				path = path.split('?')[0];
			}

		}

		return path;
	},

	__checkNativeEnvironment = function () {
		var env = WL.StaticAppProps.ENVIRONMENT;

		return (env === 'android' ||
				env === 'iphone' ||
				env === 'ipad');
	};
  
  document.addEventListener('pause', function () {
    console.log('App going to background');

    if (WL.Client.getEnvironment() === 'windows') {
        WL.Logger.status().then(function (state) {
            if (state.analyticsCapture) {
                __logAppSessionBackground();
            }
        }).fail(function (errMsg) {
            //errMsg = error message
            console.log('failed ' + errMsg);
        });
    }
  });

  document.addEventListener('resume', function () {
      console.log('App coming to foreground');
      if (WL.Client.getEnvironment() === 'windows') {

          WL.Logger.status().then(function (state) {
              if (state.analyticsCapture) {
                  __logAppSessionForeground();
              }
          }).fail(function (errMsg) {
              //errMsg = error message
              console.log('failed ' + errMsg);
          });
      }
  });

  function setIntervalX(callback, delay, repetitions) {
        var x = 0;
        var intervalID = window.setInterval(function () {

            callback();

            if (++x === repetitions) {
                window.clearInterval(intervalID);
            }
        }, delay);
  }
  
	//public API
	return {
		enable : _enable,
		disable: _disable,
		restart : _restart, // @deprecated since 6.2
		log: _log,
		state: _state,
		send: _send,
		triggerFeedbackMode: _triggerFeedbackMode,
		setUserContext: _setUserContext,
		unsetUserContext: _unsetUserContext,
		
		_logOutboundRequest: __logOutboundRequest,
		_logInboundResponse: __logInboundResponse,
		_getTrackingId: __getTrackingId,
    
    _getAppSessionId: __getAppSessionId,

    // for unit test only:
    _setTrackingId: __setTrackingId,
    _getFullURL: __getFullURL
	};

}(WLJQ, window)); //WL.Analytics


/**
 * ================================================================= 
 * Source file taken from :: validators.js
 * ================================================================= 
 */

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */


/**
 * Validators are responsible for validating method arguments in development mode.
 */
WL.Validators = {
    // Validation should be disabled by default - so Welcome pages do not validate in production.
    // If we want validation for the welcome page we must add a solution to turn it off in production.
    isValidationEnabled : false,
    verbose : true,

    // True when 'o' is set, the native JavaScript event is defined, and 'o' has an event phase
    isEvent : function(obj) {
	return obj && obj.type;
    },

    logAndThrow : function(msg, callerName) {
	// Logger is not be available in public resources (welcome page).
	if (WL.Logger) {
	    if (callerName) {
		msg = "Invalid invocation of method " + callerName + "; " + msg;
	    }
	    if (this.verbose) {
		WL.Logger.error(msg);
	    }
	}
	throw new Error(msg);
    },

    enableValidation : function() {
	this.isValidationEnabled = true;
    },

    disableValidation : function() {
	this.isValidationEnabled = false;
    },

    validateArguments : function(validators, args, callerName) {
	if (validators.length < args.length) {
	    // More arguments than validators ... accept only if last argument is an Event.
	    if ((validators.length !== (args.length - 1)) || !this.isEvent(args[args.length - 1])) {
		this.logAndThrow("Method was passed " + args.length + " arguments, expected only " + validators.length + " " + WLJSX.Object.toJSON(validators) + ".", callerName);
	    }
	}
	this.validateArray(validators, args, callerName);
    },

    validateMinimumArguments : function(args, mandatoryArgsLength, callerName) {
	if (args.length < mandatoryArgsLength) {
	    this.logAndThrow("Method passed: " + args.length + " arguments. Minimum arguments expected are: " + mandatoryArgsLength + " arguments.", callerName);
	}
    },

    /**
     * Validates each argument in the array with the matching validator. @Param array - a JavaScript array.
     * @Param validators - an array of validators - a validator can be a function or a simple JavaScript type
     * (string).
     */
    validateArray : function(validators, array, callerName) {
	if (!this.isValidationEnabled) {
	    return;
	}
	for ( var i = 0; i < validators.length; ++i) {
	    this.validateArgument(validators[i], array[i], callerName);
	}
    },

    /**
     * Validates a single argument. @Param arg - an argument of any type. @Param validator - a function or a
     * simple JavaScript type (string).
     */
    validateArgument : function(validator, arg, callerName) {
	if (!this.isValidationEnabled) {
	    return;
	}
	switch (typeof validator) {
	    // Case validation function.
	    case 'function':
		validator.call(this, arg);
		break;
	    // Case direct type.
	    case 'string':
		if (typeof arg !== validator) {
		    this.logAndThrow("Invalid value '" + WLJSX.Object.toJSON(arg) + "' (" + (typeof arg) + "), expected type '" + validator + "'.", callerName);
		}
		break;
	    default:
		// This error can be caused only if IBM MobileFirst Platform code is bugged.
		this.logAndThrow("Invalid or undefined validator for argument '" + WLJSX.Object.toJSON(arg) + "'", callerName);
	}
    },

    /**
     * Validates that each option attribute in the given options has a valid name and type. @Param options -
     * the options to validate. @Param validOptions - the valid options hash with their validators:
     * validOptions = { onSuccess : 'function', timeout : function(value){...} }
     * 
     */
    validateOptions : function(validOptions, options, callerName) {
	this.validateObjectProperties(validOptions, options, true, callerName);

    },

    /**
     * Validates that option attribute in the given options have a valid name and type - only if they are
     * explicitly defined in validOptions. If an option attribute does not exist in validOptions, it is simply
     * ignored @Param options - the options to validate. @Param validOptions - the valid options hash with
     * their validators: validOptions = { onSuccess : 'function', timeout : function(value){...} }
     * 
     */
    validateOptionsLoose : function(validOptions, options, callerName) {
	this.validateObjectProperties(validOptions, options, false, callerName);
    },

    /**
     * Validates that each option attribute in the given options has a valid name and type. @Param options -
     * the options to validate. @Param validOptions - the valid options hash with their validators:
     * validOptions = { onSuccess : 'function', timeout : function(value){...} } @Param strict - a boolean
     * indicating whether options' properties that don't exist in validOptions are allowed
     * 
     */
    validateObjectProperties : function(validOptions, options, strict, callerName) {
	if (!this.isValidationEnabled || typeof options === 'undefined') {
	    return;
	}
	for ( var att in options) {
	    // Check that the attribute exists in the validOptions.
	    if (!validOptions[att]) {
		if (strict) {
		    this.logAndThrow("Invalid options attribute '" + att + "', valid attributes: " + WLJSX.Object.toJSON(validOptions), callerName);
		} else {
		    continue;
		}
	    }
	    try {
		// Check that the attribute type is valid.
		this.validateArgument(validOptions[att], options[att], callerName);
	    } catch (e) {
		this.logAndThrow("Invalid options attribute '" + att + "'. " + (e.message || e.description), callerName);
	    }
	}
    },

    /**
     * Validates that each option attribute in the given options is from the one of the validators type.
     * @Param options - the options to validate. @Param validatos - the valid types (in string format):
     * validators = ['string','null','undefined',someFunction,'boolean'...]
     * 
     */
    validateAllOptionTypes : function(validators, options, callerName) {
	if (!this.isValidationEnabled || typeof options === 'undefined') {
	    return;
	}
	var isValidAtt = false;
	for ( var att in options) {
	    isValidAtt = false;
	    for ( var i = 0; i < validators.length; ++i) {
		try {
		    // Check that the attribute type is valid.
		    this.verbose = false;
		    this.validateArgument(validators[i], options[att], callerName);
		    isValidAtt = true;
		    break;
		} catch (e) {
		    // do nothing
		}
	    }
	    this.verbose = true;
	    if (!isValidAtt) {
		this.logAndThrow("Invalid options attribute '" + att + "' (" + typeof (options[att]) + "). Please use just the following types: " + validators.join(","), callerName);
	    }
	}
    },

    validateStringOrNull : function(arg, callerName) {
	if (!this.isValidationEnabled) {
	    return;
	}
	if ((typeof arg !== 'undefined') && (arg !== null) && (typeof arg !== 'string')) {
	    this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'string'.", callerName);
	}
    },
    
    validateNumberOrNull : function(arg, callerName) {
    	if (!this.isValidationEnabled) {
    	    return;
    	}
    	if ((typeof arg !== 'undefined') && (arg !== null) && (typeof arg !== 'number')) {
    	    this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'number'.", callerName);
    	}
    },
        
    validateBooleanOrNull : function(arg, callerName) {
	if (!this.isValidationEnabled) {
	    return;
	}
	if ((typeof arg !== 'undefined') && (arg !== null) && (typeof arg !== 'boolean')) {
	    this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'boolean'.", callerName);
	}
    },
    
    validateObjectOrNull : function(arg, callerName) {
	if (!this.isValidationEnabled) {
	    return;
	}
	if ((typeof arg !== 'undefined') && (arg !== null) && (typeof arg !== 'object')) {
	    this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'object'.", callerName);
	}
    },

    validateArrayObjectOrNull : function(arg, callerName) {
    	if (!this.isValidationEnabled) {
    	    return;
    	}

    	if ((typeof arg !== 'undefined') && (arg !== null) && (!Array.isArray(arg))) {	
    		this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'array'.", callerName);
    	}
    	
    },
        
    validateFunctionOrNull : function(arg, callerName) {
	if (!this.isValidationEnabled) {
	    return;
	}
	if ((typeof arg !== 'undefined') && (arg !== null) && (typeof arg !== 'function')) {
	    this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'function'.", callerName);
	}
    },
	/**
	 * Validates that the url is a valid url
	 * Throws exception if not
	 * @param validOptions
	 * @param options
	 * @param callerName
	 */
	validateURLOrNull : function(url, callerName) {
		if (!this.isValidationEnabled || typeof url === 'undefined' || url == null) {
			return;
		}
		var pattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
		if(!url.match(pattern)) {
			this.logAndThrow("Invalid URL : " + url, callerName);
		}
	},
	validateDefined : function(arg, callerName) {
		if(typeof (arg) === 'undefined' || arg === null){
			this.logAndThrow("Invalid argument value '" + arg + "', expected not empty string.", callerName);
		}
	},
    isDefined : function(arg) {
        return(typeof (arg) === 'undefined' || arg === null)
    },

    validateNotEmptyString : function(arg, callerName) {
	if (!this.isValidationEnabled) {
	    return;
	}
	if ((typeof arg !== 'string') || arg.length == 0) {
	    this.logAndThrow("Invalid argument value '" + arg + "', expected not empty string.", callerName);
	}
    },
	isNullOrUndefined: function (object) {
		return object === null || typeof object === 'undefined';
	},
	isString: function (object) {
	    return (typeof (object) === 'string');
	},
    isBoolean: function (object) {
        return (typeof (object) === 'boolean');
    },
    isNumber: function (object) {
        return (typeof (object) === 'number');
    },
    isArray: function (object) {
        return Array.isArray(object);
    }
};


/**
 * ================================================================= 
 * Source file taken from :: deviceAuthentication.js
 * ================================================================= 
 */

/**
 * @license
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

/**
 * Object which handle the device authentication
 */
__WLDeviceAuth = function() {
    this.__requestToResend = null, this.__deviceChallengeToken = null,

    this.init = function(initCallback) {
    	WL.DeviceAuth.__initDeviceAuthManager(function(result){initCallback(result);});
    },



    this.__initDeviceAuthManager = function(initCallback) {
        cordova.exec(initCallback, initCallback, "DeviceAuth", "init", []);
    },

    /**
     * Default implementation for WL.Client.init's options
     * onGetCustomDeviceProperties. Our default implementation actually does
     * nothing. If overriding this method, the user must call
     * resumeDeviceAuthProcess with the payload
     * 
     * @param resumeDeviceAuthProcess
     *            function to call when done with getting extra data
     */
    this.__defaultOnGetCustomDeviceProperties = function(resumeDeviceAuthProcess) {
        resumeDeviceAuthProcess({});
    },

    
    /**
     * get device friendly name
     * 
     * @param successCallback
     * @param failureCallback
     */
    this.__getDeviceDisplayName = function(successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "DeviceAuth", "getDeviceDisplayName", []);
    },
    
    /**
     * set device friendly name
     * 
     * @param successCallback
     * @param failureCallback
     */
    this.__setDeviceDisplayName = function(deviceDisplayName, successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, "DeviceAuth", "setDeviceDisplayName", [ deviceDisplayName ]);
    };
};
__WL.prototype.DeviceAuth = new __WLDeviceAuth;
WL.DeviceAuth = new __WLDeviceAuth;


/**
 * ================================================================= 
 * Source file taken from :: wlclient.js
 * ================================================================= 
 */

/**
 \ * @license
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

/* Copyright (C) Worklight Ltd. 2006-2012.  All rights reserved. */

/**
 * @class WLClient uses Douglas Crockford's Module (Singleton) Pattern.
 * @ilog.undocumented.constructor
 * @displayname WL.Client
 * @requires prototype.js
 * @requires gadgetCommunicationAPI.js
 * @requires wlcommon.js
 * @requires messages.js
 * @requires worklight.js
 */
__WLClient = function() {

	// .................. Private Constants ..................

	// GadgetAPIServlet paths.
	// Must always be in synch with the corresponding
	// GadgetRequestInfo.GADGETS_HANDLER_... Java constants.
	var REQ_PATH_INIT = "init";
	var REQ_PATH_LOGIN = "login";
	var REQ_PATH_LOGOUT = "logout";
	var REQ_PATH_GET_USER_INFO = "getuserinfo";
	var REQ_PATH_PROXY = "proxy";
	var REQ_PATH_BACKEND_QUERY = "query";
	var REQ_PATH_HEART_BEAT = "heartbeat";
	var REQ_PATH_GET_APP_UPDATES = "updates";
	var REQ_PATH_COMPOSITE = "composite";
	var REQ_PATH_APP_VERSION_ACCESS = "appversionaccess";
	var REQ_PATH_BACKEND_INVOKE = "/../../invoke";
	//var REQ_PATH_EVENTS = "events"; // defined in eventTransmission.js

	var REQ_PATH_WL_TOKEN = "/../../oauth/token";

	// .................. Public constants ..........................
	var MESSAGE_ID = 'messageId';
	this.getMessageID = function() {
		return MESSAGE_ID;
	};

	// .................. Private Members ..........................

	var userInfo = {};
	var gadgetProps = {};

	var blockingDiv = null;

	// ChannelProcessor Map with key==realmName
	this.__chMap = {};

	this.__globalHeaders = {};

	var __isSettingsEnabled = false;
	var __locale;
	var __pattern;
	var __androidScreenSize = {};
	var __androidSDKVersion;

	var initOptions = {
		onSuccess : function() {},
		onFailure : onDefaultInitFailure,
		onConnectionFailure : onRequestTimeout,
		timeout : 0,
		minAppWidth : 170,
		heartBeatIntervalInSecs : 7 * 60,
		onUnsupportedVersion : onUnsupportedVersion,
		onUserInstanceAccessViolation : onUserInstanceAccessViolation,
		onGetCustomDeviceProperties : WL.DeviceAuth.__defaultOnGetCustomDeviceProperties,
		validateArguments : true,
		showCloseOnRemoteDisableDenial : true,
		showIOS7StatusBar : true,
		autoHideSplash : true
		// messages : ...
	};

	var contentPort = null;
	var authPort = null;
	var isLoginActive = false;
	var isConnecting = false;
	var _isConnected = null;

	// Used by Air only.
	var isMinimized = false;

	// Used for extending async-methods options object to add default
	// implementations.
	var defaultOptions = {
		onSuccess : function(response) {
			WL.Logger.debug("defaultOptions:onSuccess");
		},
		onFailure : function(response) {
			WL.Logger.error("defaultOptions:onFailure " + response.errorMsg);
		},
		invocationContext : null
	};

	var defaultLogoutOptions = {
		onSuccess : function(response) {
			WL.Logger.debug("defaultOptions:onSuccess");
		},
		onFailure : function(response) {
			onDefaultInitFailure(response);
		},
		invocationContext : null
	};

	var errorCodeCallbacks = {};
	errorCodeCallbacks[WL.ErrorCode.REQUEST_TIMEOUT] = 'onConnectionFailure';
	errorCodeCallbacks[WL.ErrorCode.UNRESPONSIVE_HOST] = 'onConnectionFailure';
	errorCodeCallbacks[WL.ErrorCode.UNSUPPORTED_VERSION] = 'onUnsupportedVersion';
	errorCodeCallbacks[WL.ErrorCode.USER_INSTANCE_ACCESS_VIOLATION] = 'onUserInstanceAccessViolation';

	// .................. Private Methods ..........................
	//

	// Hide the splash screen in case autoHideSplash init option is true (for Android, iOS and WP8)
    function autoHideSplashScreen() {
        switch (getEnv()) {
            case WL.Env.ANDROID:
                if (initOptions.autoHideSplash) {
                    WL.App.hideSplashScreen();
                }
                break;

			case WL.Env.IPHONE:
            case WL.Env.IPAD:
                if (initOptions.autoHideSplash) {
                    WL.App.hideSplashScreen();
                }
                break;

            }
    }

	// Default implementation for the WL.Client.init onFailure (Application may
	// override).
	// If a specific failure handler exist - it is called, otherwise a default
	// error dialog
	// is displayed (with reload app link).
	// Application may choose to override specific exceptions or to override the
	// general
	// onFailure, in this case it has to handle all exceptions.
	function onDefaultInitFailure(response) {
		if (response.errorCode == WL.ErrorCode.CONNECTION_IN_PROGRESS) {
			return;
		}

		WL.Logger.error("Client init failed. " + response.errorMsg);
		var errMsg = (response.errorMsg == WL.ClientMessages.authFailure ? response.errorMsg : WL.ClientMessages.unexpectedError);
		var callbackName = errorCodeCallbacks[response.errorCode];
		if (callbackName && initOptions[callbackName]) {
			initOptions[callbackName](response);
		}
	}

	function onUnsupportedVersion(response) {
		// On Air the content should appear before dialog, see bug
		// http://bugzilla.worklight.com/show_bug.cgi?id=2956

		// Patch - downloadNewVersion element is added in the msg string.
        		WL.SimpleDialog.show(WL.ClientMessages.gadgetUpdateAvailable, response.errorMsg, [{
        			text : WL.ClientMessages.ok,
        			handler : function() {
        				// Note you must add the null options to openURL
        				// otherwise the event is assumed the 3rd argument.
        				WL.App.__openURL(getAppProp(WL.AppProp.DOWNLOAD_APP_LINK), "_new", null);
        				if (getEnv() === WL.Env.ADOBE_AIR) {
        					window.setTimeout(WL.Client.close, 100);
        				}
        			}
        		}]);
	}

	function onRequestTimeout(response) {
	}

	function onUserInstanceAccessViolation(response) {

	}

	function isLoginOnStartup() {
		return getAppProp(WL.AppProp.APP_LOGIN_TYPE) === WL.AppLoginType.LOGIN_ON_STARTUP;
	}

	function onInitSuccess(transport) {
		gadgetProps = transport.responseJSON.gadgetProps;
		finalizeInit();
	}

	function onInitFailure(transport) {
		initOptions.onFailure(new WL.FailResponse(transport, initOptions.invocationContext));
	}

	function finalizeInit() {

		if (WL.EnvProfile.isEnabled(WL.EPField.WEB)) {
			initResizeHandler();
		}

		WL.Logger.debug('before: initOptions.onSuccess');
		// Hide the splash screen in case autoHideSplash init option is true (for Android, iOS and WP8) before calling wlEnvInit()
        autoHideSplashScreen();

		initOptions.onSuccess(new WL.Response({}, initOptions.invocationContext));
		WL.Logger.debug('after: initOptions.onSuccess');

		isInitialized = true;

		WL.Logger.debug('wlclient init success');
	}

	function onMobileConnectivityCheckFailure() {
		var res = new WL.Response({}, initOptions.invocationContext);
		res.errorCode = WL.ErrorCode.UNRESPONSIVE_HOST;
		res.errorMsg = WL.ClientMessages.noInternet;
		res.userMsg = res.errorMsg;
		res.recoverable = true;
		setConnected(false);

		// Hide the splash screen in case autoHideSplash init option is true (for Android, iOS and WP8)
		autoHideSplashScreen();
	}

	function setConnected(isConnected) {
		if (_isConnected !== isConnected) {
			_isConnected = isConnected;
            WL.Utils.dispatchWLEvent(_isConnected ? WL.Events.WORKLIGHT_IS_CONNECTED
                    : WL.Events.WORKLIGHT_IS_DISCONNECTED);
		}
	}

	var AdobeAir = {
		minimizeCommand : null,
		restoreCommand : null
	};

	function initAdobeAir() {
		WLJSX.bind(document.body, 'mousedown', onAIRNativeMove.bindAsEventListener(this));

		// Add Tray Icon and Menu
		var iconLoadComplete = function(event) {
			var eventTarget = WLJSX.eventTarget(event);
			air.NativeApplication.nativeApplication.icon.bitmaps = [eventTarget.content.bitmapData];
		};
		var iconLoad = new air.Loader();
		var iconMenu = new air.NativeMenu();





		if (air.NativeApplication.supportsSystemTrayIcon) {
			iconLoad.contentLoaderInfo.addEventListener(air.Event.COMPLETE, iconLoadComplete);
			iconLoad.load(new air.URLRequest(getAppProp(WL.AppProp.AIR_ICON_16x16_PATH)));
			air.NativeApplication.nativeApplication.icon.tooltip = getAppProp(WL.AppProp.APP_DISPLAY_NAME);
			air.NativeApplication.nativeApplication.icon.menu = iconMenu;
		}
		if (air.NativeApplication.supportsDockIcon) {
			iconLoad.contentLoaderInfo.addEventListener(air.Event.COMPLETE, iconLoadComplete);
			iconLoad.load(new air.URLRequest(getAppProp(WL.AppProp.AIR_ICON_128x128_PATH)));
			air.NativeApplication.nativeApplication.icon.menu = iconMenu;
		}

	}

	function onWLShow() {
		if (WLJSX.Object.isFunction(WL.Client.onShow)) {
			WL.Client.onShow();
		}
	}

	function onWLHide() {
		if (WLJSX.Object.isFunction(WL.Client.onHide)) {
			WL.Client.onHide();
		}
	}

	function setStylePropertyOnElement(elm, style, property) {
		if (!WLJSX.Object.isUndefined(style[property])) {
			elm.style[property] = style[property];
		}
	}

    this.isShowCloseButtonOnRemoteDisable = function()
    {
    	if (initOptions.showCloseOnRemoteDisableDenial === true)
    	{
			return true;
    	}
    	else
    	{
			return false;
		}
	};

	this.setDeviceDisplayName = function(deviceDisplayName, options) {
		WL.Validators.validateArguments(['string', WL.Validators.validateObjectOrNull], arguments, 'WL.Client.setDeviceDisplayName');

		if ( typeof options !== "undefined") {
			WL.Validators.validateOptions({
				onSuccess : 'function',
				onFailure : 'function'
			}, options, 'WL.Client.setDeviceDisplayName');
		} else {
			options = {};
			options.onSuccess = function(){};
			options.onFailure = function(){};
		}

		WL.DeviceAuth.__setDeviceDisplayName(deviceDisplayName, options.onSuccess, options.onFailure);
	};


    this.__getAndroidSDKVersion = function() {
		return __androidSDKVersion;
	};

	this.getDeviceDisplayName = function(options) {

		WL.Validators.validateArguments(['object'], arguments, 'WL.Client.getDeviceDisplayName');

		WL.Validators.validateOptions({
			onSuccess : 'function',
			onFailure : 'function'
		}, options, 'WL.Client.getDeviceDisplayName');

		WL.DeviceAuth.__getDeviceDisplayName(options.onSuccess, options.onFailure);
	};

	function initResizeHandler() {
		WLJSX.bind(document.onresize ? document : window, 'resize', onResizeGadget);
		onResizeGadget();
	}

	function getBlockingDiv() {
		if (blockingDiv === null) {
			blockingDiv = WLJSX.newElement('<div/>', {
				'id' : 'blockOuter',
				'class' : 'hide'
			});
			var blockingDivContent = WLJSX.newElement('<div/>', {
				'id' : 'blockInner'
			});
			WLJSX.append(blockingDiv, blockingDivContent);
			WLJSX.append(document.body, blockingDiv);
		}
		return blockingDiv;
	}

	function showBlockingDiv(isShow, zIndex) {
		var div = getBlockingDiv();
		if (isShow) {
			div.className = 'show';
			if (zIndex) {
				div.style.zIndex = zIndex;
			}
		} else {
			div.className = 'hide';
			div.style.zIndex = '';
			setBlockingDivContent(null);
		}
	}

	function setBlockingDivContent(content) {
		var div = getBlockingDiv();
		if (div.firstChild) {
			div.removeChild(div.firstChild);
		}
		if (content !== null) {
			div.appendChild(content);
		}
	}

	function onResizeGadget() {
		if (WLJSX.getViewportWidth() === undefined || // In mobile web
		// viewport width is
		// undefined.
		WLJSX.getViewportWidth() >= initOptions.minAppWidth) {
			showBlockingDiv(false);
		} else {
			var divContent = document.createTextNode(WL.ClientMessages.expandWindow);
			setBlockingDivContent(divContent);
			showBlockingDiv(true);
		}
	}

	function onAIRNativeMove(element) {
		var scrollableTags = ['DIV', 'UL'];
		var elementObject = element.tagName ? element : element.toElement;
		// Currently, scrollers only appear in DIVs
		if (scrollableTags.indexOf(elementObject.tagName) > -1) {
			var css = document.defaultView.getComputedStyle(elementObject, null);
			var styleOverflow = css === null ? '' : css.overflow;
			var styleOverflowY = css === null ? '' : css.overflowY;
			var styleOverflowX = css === null ? '' : css.overflowX;

			// When clicking on the scrollbar the overflow is always 'auto' and
			// not 'visible'
      if (styleOverflow === 'auto' || styleOverflowY === 'auto' || styleOverflowX === 'auto' || styleOverflow === 'scroll' || styleOverflowY === 'scroll' || styleOverflowX === 'scroll') {
				return;
			}
		}// Allow selecting content of text box
		else if (elementObject.tagName === 'INPUT' && elementObject.type === 'text') {
			return;
		}
		window.nativeWindow.startMove();
	}

	function getUserInfoValue(key, realm) {
		var value = null;
		if (realm === null) {
			realm = getAppProp(WL.AppProp.LOGIN_REALM);
		}
		if ( typeof userInfo[realm] !== 'undefined') {
			value = (userInfo[realm])[key];
		} else {
			WL.Logger.error("Unknown realm [" + realm + "]. null returned for key: " + key);
		}
		return value;
	}

	function showDialog(title, messageText, allowReload, allowDetails, response, customErrorMsg) {
		WL.DiagnosticDialog.showDialog(title, messageText, allowReload, allowDetails, response, customErrorMsg);
	}

	/*
	 * Extends the async method options with default options. Default options
	 * are added if missing but do not override existing options.
	 */
	function extendWithDefaultOptions(options) {
		return WL.Utils.extend(options || {}, defaultOptions);
	}

	function extendWithDefaultLogoutOptions(options) {
		return WL.Utils.extend(options || {}, defaultLogoutOptions);
	}

	function replaceGadgetMessages() {
		if (initOptions.messages) {
			WL_I18N_MESSAGES = initOptions.messages;
		} else if ( typeof Messages != 'undefined') {
			WL_I18N_MESSAGES = Messages;
		}

		if ( typeof WL_I18N_MESSAGES === 'undefined') {
			WL.Logger.debug("Application did not define an i18n messages object, skipping translation.");
			return;
		}
		// Replace all the text in the gadget with the appropriate i18n text
		WL.Utils.replaceElementsText();
	}

	function isDesktopEnvironment() {
		return WL.EnvProfile.isEnabled(WL.EPField.DESKTOP);
	}

	function getEnv() {
		return WL.StaticAppProps.ENVIRONMENT;
	}

	/**
	 * This function is needed to send the environment to the server
	 * since the server does not know how to handle the 'preview' environment
	 * Returns: environment for server request
	 */
	function getEnvironmentForServerRequest() {
    	if (WL.StaticAppProps.ENVIRONMENT == WL.Environment.PREVIEW) {
    		return WL.StaticAppProps.PREVIEW_ENVIRONMENT;
    	} else {
	    	return WL.StaticAppProps.ENVIRONMENT;
	    }
	}

	function isIOSEnv() {
		return WL.EnvProfile.isEnabled(WL.EPField.ISIOS);
	}

	function getAppProp(key) {
		return gadgetProps[key] || WL.StaticAppProps[key];
	}

	function onEnvInit(options) {
		if (contentPort === null || typeof contentPort == "undefined") {
			throw new Error("Missing element with 'content' id in the html.");
		}
		// Must override the prototype hide/show to override the css'
		// display:none.
		contentPort.show = function() {

			// Fix for Webkit bug: form controls are not reacting after content
			// .hide() .show().
			// The workaround is to add some whitespace to the div.
			if (WL.Client.getEnvironment() === WL.Env.ANDROID) {
				WLJSX.append(contentPort, '<!-- -->');
			}
			if (contentPort	.style) {
				contentPort.style.display = 'block';
			}
		};
		contentPort.hide = function() {
			if (contentPort.style) {
				contentPort.style.display = '';
			}
		};

		replaceGadgetMessages();

		if ( typeof options.analytics === 'object') {
      WL.Logger.warn('Initialization option \'analytics\' is deprecated. Use WL.Analytics.enable/disable to set analytics data capture.');

			setTimeout(function() {
        var analyticsFunction = 'enable';
        if (!initOptions.analytics.enabled) {
          analyticsFunction = 'disable';
        }
				WL.Analytics[analyticsFunction]().always(function(res) {
					WL.Utils.dispatchWLEvent('WL/ANALYTICS/READY', res);
				});
			}, 0);

		}

		if (( typeof initOptions.enableFIPS === 'boolean') && (initOptions.enableFIPS) && !isIOSEnv()) {
			function enableFips() {
				if ( typeof WL._FIPSHttpImpl === 'object') {

					WL.FIPSHttp._enable().always(function(res) {
						WL.Utils.dispatchWLEvent('WL/FIPS/READY', res);
					});

				} else {
					WL.Logger.warn("FIPS feature not found, but initOptions enables it on startup");
				}

	        	WL.Logger.debug("FIPS is enabled - disable Single HTTP Client functionality");
			}

			if (typeof WL._FIPSHttpImpl !== 'undefined') {
				enableFips();
			}
			else {
				document.addEventListener('mfpfipsready', function() {
                    enableFips();
                }, false);
			}
        } if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_NATIVE_XHR)){
        	window.WLJSX.Ajax.getTransport = function() {
                var xhr = new WLNativeXHR();
                if (WL.Client.getEnvironment() == WL.Env.WINDOWS8 || WL.Client.getEnvironment() == WL.Environment.WINDOWS || WL.Client.getEnvironment() === WL.Environment.WINDOWSPHONE8 ) {
	           	    xhr.__send = function (callback, params) {
	           	        var headers = params.headers;
	           	        headers["User-Agent"] = navigator.userAgent;
	           	        if (!headers["Accept"]) {
	           	            headers["Accept"] = "*/*";
	           	        }
	           	        if (!headers["Accept-Language"]) {
	           	            headers["Accept-Language"] = WL.App.__getDeviceLocale();
	           	        }
	           	        if (!headers["Accept-Encoding"]) {
	           	            headers["Accept-Encoding"] = "gzip, deflate";
	           	        }

	           	        if (!headers["Content-Type"]) {
	           	            headers["Content-Type"] = "application/json";
	           	        }

				    	if (WL.Client.getEnvironment() == 'windows') {
				    		if(params.url.indexOf('/loguploader') !== -1){
				    			headers["Content-Type"] = "text/plain; charset=UTF-8";
		           	            headers["x-wl-app-version"] = getAppProp(WL.AppProperty.APP_VERSION);
		           	            headers["X-WL-Session"] = WL.Analytics._getAppSessionId();

		           	            var analyticsMetaHeaders = {};
		           	            analyticsMetaHeaders.deviceID = WL.Device.getHardwareIdentifier();
		           	            analyticsMetaHeaders.os = WL.Client.getEnvironment().toUpperCase() ;
		           	            analyticsMetaHeaders.clientID = WLAuthorizationManager.clientId;
		           	            analyticsMetaHeaders.osVersion = device.version.substring(0,4);
		           	            analyticsMetaHeaders.brand = device.manufacturer;
		           	            analyticsMetaHeaders.model = device.model;
		           	            analyticsMetaHeaders.mfpAppName = getAppProp(WL.AppProperty.APP_DISPLAY_NAME);
		           	            analyticsMetaHeaders.mfpAppVersion = getAppProp(WL.AppProperty.APP_VERSION);

		           	            headers["x-mfp-analytics-metadata"] = WLJSX.Object.toJSON(analyticsMetaHeaders);
				    		}
						}

	           	        WLWin8Native.WLNativeXHRSender.getInstance().send(JSON.stringify(params)).done(
	                           function completed(result) {
	                               if (result.isSuccess) {
	                                   var resultJSON = JSON.parse(result.value);
	                                   callback(JSON.parse(resultJSON));
	                               } else {
	                                   WL.Logger.error("Failed to send native request (reason: " + JSON.parse(result.value) + ")");
	                               }
	                           });

	           	    }
                }
           	    return xhr;
        	}
		}

		WL.Logger.debug('wlclient init started');

		WLJSX.Ajax.WLRequest.options.timeout = initOptions.timeout;
		if (WL.Client.getEnvironment() != WL.Env.MOBILE_WEB) {
			WLJSX.Ajax.WLRequest.setConnected = setConnected.bind(this);
		} else {
			WLJSX.Ajax.WLRequest.setConnected = function() {
			};
		}

		WL.CookieManager.init(getAppProp(WL.AppProp.APP_DISPLAY_NAME), getAppProp(WL.AppProp.ENVIRONMENT), getAppProp(WL.AppProp.IID));

		if (!WL.CookieManager.areCookiesEnabled()) {
			var disabledCookiesResponse = new WL.Response({}, options.invocationContext);
			disabledCookiesResponse.errorCode = WL.ErrorCode.DISABLED_COOKIES;
			disabledCookiesResponse.errorMsg = WL.Utils.formatString(WL.ClientMessages.cookiesAreDisabled);
			disabledCookiesResponse.userMsg = disabledCookiesResponse.errorMsg;
			return;
		}
		switch (getEnv()) {
			case WL.Env.ANDROID:
				// An injected interface from WLDroidGap.bindBrowser, used to dismiss the splash screen
        	    // TODO remove this js interface once WLDroidGap is removed
				if ( typeof WLCordovaSplashScreenDialog !== 'undefined' && WLCordovaSplashScreenDialog !== null) {
					WLCordovaSplashScreenDialog.removeSplashScreen();
				}
				break;
			case WL.Env.ADOBE_AIR:
				initAdobeAir();
				break;
			default:
				break;
		}
	}


	// ................ Public API methods .....................

	// ...... API variables ......

	/**
	 * Note: This method is only applicable to widgets running in Adobe Air.
	 *
	 * To specify the app's behavior on before close, provide an implementation
	 * for the WL.Client.onBeforeClose callback functions Neither of these
	 * methods should receive any parameters.
	 */
	this.onBeforeClose = null;

	/**
	 * This method initializes the WL.Client object.
	 *
	 * The options of this method reside in the initOptions.js file.
	 *
	 * @param [options] An optional options object augmented with the following additional optional properties:
	 *
	 *  <table class="userTable" cellspacing="0">
	 <thead>
	 <tr>
	 <th>Property</th>
	 <th>Description</th>
	 </tr>
	 </thead>
	 <tbody>
	 <tr>
	 <td class="attributes">Timeout</td>
	 <td class="nameDescription">An integer value, denoting the timeout in milliseconds. The timeout affects all calls from the app to the Worklight¬Æ Server. If not specified, a timeout of 30,000 milliseconds (30 seconds) is used.</td>
	 </tr>
	 <tr>
	 <td class="attributes">TO BE COMPLETED</td>
	 <td class="nameDescription">TO BE COMPLETED.</td>
	 </tr>
	 </tbody>
	 </table>
	 */
	this.init = function(options) {
		if (arguments.length == 0) {options = {};}
		WL.Validators.enableValidation();
		WL.Validators.validateOptions({
			onSuccess : 'function',
			onFailure : 'function',
			onConnectionFailure : 'function',
			analytics : 'object',
			enableFIPS : 'boolean',
			timeout : 'number',
			minAppWidth : 'number',
			heartBeatIntervalInSecs : 'number',
			onUnsupportedVersion : 'function',
			onRequestTimeout : 'function',
			onUserInstanceAccessViolation : 'function',
            mfpContextRoot : 'string',
            applicationId : 'string',
			// deprecated
			onErrorAppVersionAccessDenial : 'function',
			onErrorRemoteDisableDenial : 'function',
			onGetCustomDeviceProperties : 'function',
			messages : 'object',
			busyOptions : 'object',
			validateArguments : 'boolean',
			showCloseOnRemoteDisableDenial : 'boolean',
			showIOS7StatusBar : 'boolean',
			autoHideSplash : 'boolean'
		}, options, "WL.Client.init");

		contentPort = WLJSX.$$$('body');
		// initialize runtime enviroment fields
		WL.EnvProfile.initialize(getEnv());

		if (WL.Client.getEnvironment() == WL.Env.ANDROID) {
			WL.Utils.addBlackDiv();
		}
		( typeof (contentPort.show) === 'function') ? contentPort.show() : WLJSX.show(contentPort);



		WL.AppProp.WLCLIENT_TIMEOUT_IN_MILLIS = 30000;
		if (!options.timeout) {
			options.timeout = WL.AppProp.WLCLIENT_TIMEOUT_IN_MILLIS;
		}

		// ////////////////////////////////////////////////////////////////
		// Set user's JavaScript initialization code to options.onSuccess
		// ////////////////////////////////////////////////////////////////

		//Setting the cordova's logging level to DEBUG instead of the the default WARN
		if ( typeof cordova === 'object' && typeof cordova.logger === 'object' && typeof cordova.logger.level === 'function') {
			cordova.logger.level(cordova.logger.DEBUG);
		}
		//Call to load localized user visible messages based on device locale.
		WL.Utils.setLocalization();

		var wlInit = function() {

			if (window.wlEnvInit !== undefined) {
				wlEnvInit();
			} else if (window.wlCommonInit !== undefined) {
				wlCommonInit();
			}
			// Add an interface for notifying native code about init complete
			WL.Client.__onWlInitComplete();
		};

		// before v4.1.3:
		// an onSuccess callback was provided by main html file's onload
		if (options.onSuccess) {
			// before v4.1.3 wlCommonInit was not yet defined.
			// in such case, we define an empty function, because new
			// environments js template expects this method.
			if (window.wlCommonInit === undefined) {
				wlCommonInit = function() {
				};
			}
			// extracting the user's onSuccess to call wlInit after the original
			// onSuccess - so new
			// environments's js code (v4.1.3 and newer) will be invoked.
			var _onSuccess = options.onSuccess;
			options.onSuccess = function() {
				// calls the old onSuccess callback as defined in main html
				// onload
				_onSuccess();
				// calls the new initialization scheme as defined in v4.1.3
				wlInit();
			};
		}
		// starting v4.1.3 -
		else {
			options.onSuccess = wlInit;
		}

		WLJSX.Object.extend(initOptions, options);
		initOptions.validateArguments ? WL.Validators.enableValidation() : WL.Validators.disableValidation();

		var connectOptions = {
			onSuccess : onInitSuccess.bind(this),
			onFailure : function() {
				initOptions.onFailure.apply(this, arguments);
			}.bind(this),
			timeout : initOptions.timeout
		};

		// All the devices which are Cordova based have to wait for the
		// 'deviceready' event
		// to make sure that the Cordova functionality is initialized.
		//This is the case for all environments - the "else" is needed for phantomjs test
		if (WL.EnvProfile.isEnabled(WL.EPField.USES_CORDOVA)) {
			var cordovaInit = function(event) {
				WL.Logger.debug("ondeviceready event dispatched");
				if ((WL.Client.getEnvironment() == WL.Env.IPHONE) || (WL.Client.getEnvironment() == WL.Env.IPAD) || (WL.Client.getEnvironment() == WL.Env.ANDROID)) {
					WL.App.getInitParameters("appVersionPref,wlLoaderChecksum", cordovaInitCallback);
				} else {
					cordovaInitCallback(null);
				}
			};




			var cordovaInitCallback = function(returnedData) {
				navigator.globalization.getLocaleName(function(locale) {
					__locale = locale.value;
					if (WL.Client.getEnvironment() === WL.Environment.WINDOWS8 || WL.Client.getEnvironment() === WL.Environment.WINDOWS || WL.Client.getEnvironment() === WL.Environment.WINDOWSPHONE8) {
				        // On Win 8, navigator.userLanguage doesn't return the language preference, it returns regional format
				        // Therefore, use the Windows API to get the correct language preference.
				        __locale = Windows.System.UserProfile.GlobalizationPreferences.languages[0];
				        if (__locale.indexOf('zh-Hans') !== -1) {
				            __locale = 'zh-Hans';
				            }
				            if (__locale.indexOf('zh-Hant') !== -1 || __locale.indexOf('zh-HK') !== -1) {
				                __locale = 'zh-Hant';
				            }
				     }
					if ((WL.Client.getEnvironment() == WL.Env.IPHONE) || (WL.Client.getEnvironment() == WL.Env.IPAD)) {
						//TODO: move this outside when cordova getPreferredLanguage() is fixed
						navigator.globalization.getPreferredLanguage(function(language) {
							var __lang = language.value;
							if(typeof __lang !== 'undefined' ) {
								if(__lang.length > 2) {
									__locale = __lang;
								} else {
									__locale = __lang + __locale.substr(2);
								}
							}
							WL.Utils.setLocalization();
						}, function(){});
					} else {
						WL.Utils.setLocalization();
					}
				}, function() {
				});

				  navigator.globalization.getNumberPattern(function(pattern) {
					__pattern = pattern;
					}, function() {
					}, {
						type : 'decimal'
					});

				if (WL.Client.getEnvironment() == WL.Env.ANDROID) {
					cordova.exec(function(value) {
						__isSettingsEnabled = value == "true" ? true : false;
					}, null, 'WLApp', "readUserPref", ["enableSettings"]);

					//get the size first
					WL.App.getScreenSize(function(data) {
						__androidScreenSize = data;
					});

					//register listener for resize
					window.addEventListener("resize", function() {
						WL.App.getScreenSize(function(data) {
							__androidScreenSize = data;
						});
					});
				}

				onEnvInit(options);
				if (WL.Client.getEnvironment() == WL.Env.ANDROID) {
					if (returnedData !== null && returnedData !== "") {
						if (( typeof returnedData.appVersionPref) !== "undefined") {
							WL.StaticAppProps.APP_VERSION = returnedData.appVersionPref;
						}
						if (( typeof returnedData.wlLoaderChecksum) !== "undefined") {
                            WL.StaticAppProps.LOADER_CHECKSUM = returnedData.wlLoaderChecksum;
						}

						WL.StaticAppProps.FREE_SPACE = returnedData.freeSpace;
					}

                    // set android SDK version
                    cordova.exec(function(value){
            			__androidSDKVersion = value;
            		}, null, 'WLApp', 'getSDKVersion', [])

					// In development mode, the application has a settings
					// widget in which the user may alter
					// the application's root url
					// and here the application reads this url, and replaces the
					// static prop
					// WL.StaticAppProps.WORKLIGHT_ROOT_URL
					// __setWLServerAddress for iOS is called within
					// wlgap.ios.js's wlCheckReachability
					// function because it is an asynchronous call.

					// Only in Android we should clear the history of the
					// WebView, otherwise when user will
					// press the back button after upgrade he will return to the
					// html page before the upgrade
					if (WL.Env.ANDROID == getEnv()) {
						cordova.exec(null, null, 'WLApp', 'clearHistory', []);
					}
				}
				if ((WL.Client.getEnvironment() == WL.Env.IPHONE) || (WL.Client.getEnvironment() == WL.Env.IPAD)) {

					WL.StaticAppProps.APP_VERSION = returnedData.appVersionPref;
					WL.StaticAppProps.FREE_SPACE = returnedData.freeSpace;
					WL.StaticAppProps.LOADER_CHECKSUM = returnedData.wlLoaderChecksum;

				}
				if (WL.EnvProfile.isEnabled(WL.EPField.SERVER_ADDRESS_CONFIGURABLE)) {
					WL.App.__setWLServerAddress(finalizeInit);
				} else {
					finalizeInit();
				}


			};

			// make sure we wait for the 'deviceready' event. If it already has
			// benn fired, PhoneGap.available will be true
            if (typeof cordova != "undefined" && cordova !== null && cordova.available
                    || typeof PhoneGap != "undefined" && PhoneGap.available) {
				cordovaInit();
			} else {
				if (WL.Client.getEnvironment() === WL.Env.WINDOWS || WL.Client.getEnvironment() === WL.Env.WINDOWS8 || WL.Client.getEnvironment() === WL.Env.WINDOWSPHONE8 ) {
                    document.addEventListener('deviceready', function () {
                        WL.App.__webResourceChecksumCheck(function () {
                            setTimeout(cordovaInit, 0);
                        });
                    }, false);
				} else {
					// use setTimeout to ensure all Cordova function (especially
					// navigator.network and
					// naviator.notification) is available
					document.addEventListener('deviceready', function() {
						setTimeout(cordovaInit, 0);
					}, false);
				}
			}

			// check if it is a non-Windows Environment
			// check will be removed with Logger functionality for windows in.
			if (!(WL.Client.getEnvironment() === WL.Env.WINDOWS || WL.Client.getEnvironment() === WL.Env.WINDOWS8 || WL.Client.getEnvironment() === WL.Env.WINDOWSPHONE8 )) {
				WL.Logger.updateConfigFromServer();
			}
		}
		else {
		//the "else" is needed for phantomjs test - not real env
			onEnvInit(options);
			finalizeInit();
		}
	};

	this.isSettingsEnabled = function() {
		return __isSettingsEnabled;
	};

	this.getDeviceLocale = function() {
		return __locale;
	};

	this.getLocalePattern = function() {
		return __pattern;
	};


	this.getAppProperty = function(propKey) {
		WL.Validators.validateArguments(['string'], arguments, 'WL.Client.getAppProperty');
		return getAppProp(propKey);
	};

	this.hasAppProperty = function(key) {
		WL.Validators.validateArguments(['string'], arguments, 'WL.Client.hasAppProperty');
		return ( key in gadgetProps) || ( key in WL.StaticAppProps);
	};

	this.getEnvironment = function() {
		return getEnv();
	};


	  /**
	   * Pins the host X509 certificate public key to the client application.
	   * Secured calls to the pinned remote host will be checked for a public key match.
	   * Secured calls to other hosts containing other certificates will be rejected.
	   * Some mobile operating systems might cache the certificate validation check results.
	   * Your app must call the certificate pinning method before making a secured request.
	   * Calling this method a second time overrides any previous pinning operation.
	   * @param certificateFilename/certificateFilenames -  the name of the certificate file/array of names of certificate files
	   * that is located under
	   * the certificate folder located in the application root
	   * @return {Promise} Resolved when the operation is successful and the certificate is pinned. Rejected if any of the certificateFilename is undefined, not found or is not in DER format.
	   * @methodOf WL.Client#
	   */
this.pinTrustedCertificatePublicKey = function(certificateFilename){
	var dfd = WLJQ.Deferred();
	cordova.exec(function() {
              dfd.resolve();
            }, function(error) {
              dfd.reject(error);
            }, "WLCertificatePinningPlugin", "pinTrustedCertificatePublicKey", [certificateFilename]);
	return dfd.promise();
}
	/**
	 * @deprecated Since version 8.0. Use WLResourceRequest instead
	 *
	 * Invokes a procedure exposed by a IBM MobileFirst Platform adapter.
	 *
	 * @param invocationData
	 *            Mandatory. A JSON block of parameters. <br>
	 *            <code>{<br>
	 *            adapter : adapter-name.wlname,<br>
	 *            procedure : adapter-name.procedure-name.wlname,<br>
	 *            parameters : [],<br>
	 *            }</code>
	 *
	 * @param options
	 *            Optional. Parameters hash.
	 */
	this.__invokeProcedure = function(invocationData, options, useSendInvoke) {

		WL.Validators.validateOptions({
			onSuccess : 'function',
			onFailure : 'function',
			invocationContext : function() {
			},
			onConnectionFailure : 'function',
			timeout : 'number',
			fromChallengeRequest : 'boolean'
		}, options, 'WL.Client.invokeProcedure');

		options = extendWithDefaultOptions(options);

		var blocked = false;

		function onInvokeProcedureSuccess(transport) {
			if (!blocked) {
				blocked = true;
				if (!transport.responseJSON || (transport.responseJSON && !transport.responseJSON.isSuccessful)) {
					var failResponse = new WL.Response(transport, options.invocationContext);
					failResponse.errorCode = WL.ErrorCode.PROCEDURE_ERROR;
					failResponse.errorMsg = WL.ClientMessages.serverError;
					failResponse.invocationResult = transport.responseJSON;
					if (!failResponse.invocationResult) {
					}
					else if (failResponse.invocationResult.errors) {
						failResponse.errorMsg += " " + failResponse.invocationResult.errors;
					}
					WL.Logger.error(failResponse.errorMsg);
					options.onFailure(failResponse);
				} else {
					var response = new WL.Response(transport, options.invocationContext);
					response.invocationResult = transport.responseJSON;
					options.onSuccess(response);
				}
			}

		}

		function onInvokeProcedureFailure(transport) {
			if (!blocked) {
				blocked = true;
				setConnected(false);
				var errorCode = transport.responseJSON.errorCode;
				if (options.onConnectionFailure && (errorCode == WL.ErrorCode.UNRESPONSIVE_HOST || errorCode == WL.ErrorCode.REQUEST_TIMEOUT)) {
					options.onConnectionFailure(new WL.FailResponse(transport, options.invocationContext));
				} else {
					options.onFailure(new WL.FailResponse(transport, options.invocationContext));
				}
			}
		}

		var resourceRequest = {};

		if (!WLJSX.Object.isUndefined(options.timeout)) {
			resourceRequest = new WLResourceRequest("/adapters/" + invocationData.adapter + "/" + invocationData.procedure, WLResourceRequest.GET, options.timeout);
		} else {
			resourceRequest = new WLResourceRequest("/adapters/" + invocationData.adapter + "/" + invocationData.procedure, WLResourceRequest.GET);
		}

		//add parameters
		resourceRequest.setQueryParameter("params", WLJSX.Object.toJSON(invocationData.parameters));

		var environment = WL.Client.getEnvironment();

		resourceRequest.send().then(
				onInvokeProcedureSuccess,
				onInvokeProcedureFailure
		);
	};

    this.invokeProcedure = function (invocationData, options, useSendInvoke) {
      var dfd = WLJQ.Deferred();

      //Ensure options will be an object
      options = options || {};

      //Save the user provided callbacks
      var onSuccessCallback = options.onSuccess;
      var onFailureCallback = options.onFailure;

      //Wrap onSuccess
      options.onSuccess = function () {

        if (typeof options === 'object' && typeof options.onSuccess === 'function' && typeof onSuccessCallback === 'function') {
          onSuccessCallback.apply(this, arguments);
        }

        dfd.resolve.apply(this, arguments);
      };

      //Wrap onFailure
      options.onFailure = function () {

        if (typeof options === 'object' && typeof options.onFailure === 'function' && typeof onFailureCallback === 'function') {
          onFailureCallback.apply(this, arguments);
        }

        dfd.reject.apply(this, arguments);
      };

      //Ensure async behavior
      setTimeout(function () {

        //Call the implementation that only supports callbacks

        try {

          WL.Client.__invokeProcedure(invocationData, options, useSendInvoke);

        } catch (e) {
          WL.Logger.error(e);
          dfd.reject(e);
        }

      }, 0);

      return dfd.promise();
    };

 // establishes a session with the IBM MobileFirst Platform Server, receiving any
	// block/notify messages that
	// may apply to this application, and other information (i.e. checksum data
	// for direct update).

	this.connect = function(options) {
	      WL.Validators.validateOptions({
	         onSuccess : 'function',
	         onFailure : 'function',
	         timeout : 'number',
	         appUserId : 'string'
	      }, options, 'WL.Client.connect');

	      if (isConnecting) {
	         WL.Logger.error("Cannot invoke WL.Client.connect while it is already executing.");
	         if (options && options.onFailure) {
	            var response = new WL.Response({}, initOptions.invocationContext);
	            response.errorCode = WL.ErrorCode.CONNECTION_IN_PROGRESS;
	            options.onFailure(response);
	         }
	         return;
	      }

	      options = extendWithDefaultOptions(options);
	      __appUserId = options.appUserId;

	      var timeout = getAppProp(WL.AppProp.WLCLIENT_TIMEOUT_IN_MILLIS);
	      if (!WLJSX.Object.isUndefined(options.timeout)) {
	         timeout = options.timeout;
	      }

	      isConnecting = true;
	        WLAuthorizationManager.obtainAccessToken()
	          .then (
	             function(accesstoken) {
	               // success flow with the header
	               options.onSuccess(accesstoken);
	             },
	             function(error) {
	               // failure flow
	               options.onFailure(error);
	             }
	            )
	   };


	/**
	 * Reloads the application.
	 */
	this.reloadApp = function() {
		document.location.reload();
	};

	/**
	 * @ Use WL.Device.getNetworkInfo(callbackFunction) to check
	 *             connectivity. Look for isNetworkConnected in
	 *             callbackFunction's network info parameter.
	 */
	this.isConnected = function() {
		return !!_isConnected;
	};

	this.setHeartBeatInterval = function(newIntervalInSecs) {
		WL.Validators.validateArguments(['number'], arguments, 'WL.Client.setHeartBeatInterval');
		initOptions.heartBeatIntervalInSecs = newIntervalInSecs;
		if (typeof(WLAuthorizationManager) !== 'undefined' && WLAuthorizationManager !== null) {
			WLAuthorizationManager.__sendHeartBeat(initOptions.heartBeatIntervalInSecs);
		}
	};

	/**
	 * Initiate the function that handles onGetCustomDeviceProperties (gets
	 * custom properties to send with the device auth payload) If the user
	 * addded his own implementation for onGetCustomDeviceProperties, we call
	 * it, if not we call our own default. The user adds his function using the
	 * WL.Client.init's options.
	 */
	this.__getCustomDeviceProperties = function(resumeDeviceAuthProcess) {
		return initOptions.onGetCustomDeviceProperties(resumeDeviceAuthProcess);
	};

	/**
	 * add data to the global headers. these headers will be sent on each WL
	 * sendRequest
	 */
	this.addGlobalHeader = function(name, value) {
		this.__globalHeaders[name] = value;

        if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_NATIVE_XHR)) {
            var headerObj = {
                headerName : name,
                headerValue : value
            };

            cordova.exec(null, null, "WLNativeXHRPlugin", "addGlobalHeader", [headerObj]);
        } else if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_USER_PREF)) {
			WL.App.writeUserPref(name, value);
		}
	};

	this.removeGlobalHeader = function(name) {

        if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_NATIVE_XHR)) {
            var headerObj = {
                headerName : name
            };
            cordova.exec(null, null, "WLNativeXHRPlugin", "removeGlobalHeader", [headerObj]);
        }

		delete this.__globalHeaders[name];
	};

    this.__getGlobalHeaders = function(onSuccess){
    	if (WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_WL_NATIVE_XHR)) {
    		if (typeof (onSuccess) === 'undefined') {
    			onSuccess = null;
    		}
    		cordova.exec(onSuccess, null, "WLNativeXHRPlugin", "getGlobalHeaders", []);
    	}

		return this.__globalHeaders;
	};
	/**
	 * Retrieves cookies from the native HTTP client.
	 * This function is asynchronous and returns promise.
	 * The array of cookies will be passed as a parameter to "resolve" callback:
	 * WL.Client.getCookies().then(function(cookies){...})
	 * Note that HttpOnly and Secure cookies are not returned.
	 * @returns promise object
	 */
	this.getCookies = function() {
		var dfd = WLJQ.Deferred();
		var env = WL.Client.getEnvironment();

		switch (env) {
			case WL.Env.ANDROID:
			case WL.Env.IPHONE:
		    case WL.Env.IPAD:
		    	cordova.exec(
		    		function(cookies) {
		    			dfd.resolve(cookies);
		    		},
		    		dfd.reject,
		    		"WLApp", "getCookies", []
		    	);
		        break;

		    case WL.Env.WINDOWS8:
		    case WL.Env.WINDOWS:
	        case WL.Env.WINDOWSPHONE8:
		    	//Win8 specific getCookies will be called
		    default:
		    	dfd.resolve([]);
		}

		return dfd.promise();
	};
	/**
	 * Adds a cookie to the native HTTP client.
	 * This function is asynchronous and returns promise.
	 * Example: WL.Client.setCookie(myCookie).then(successFlow);
	 * @param cookie JSON object with required cookie properties: name, value, domain, path, expires
	 * @returns promise object
	 */
	this.setCookie = function(cookie) {
		var dfd = WLJQ.Deferred();
		var env = WL.Client.getEnvironment();

		switch (env) {
			case WL.Env.ANDROID:
			case WL.Env.IPHONE:
		    case WL.Env.IPAD:
		    	cordova.exec(
		    		dfd.resolve,
		    		dfd.reject,
		    		"WLApp", "setCookie", [cookie]
		    	);
		        break;

		    case WL.Env.WINDOWS8:
		    case WL.Env.WINDOWS:
		    case WL.Env.WINDOWSPHONE8:
		    	//Win8 specific setCookie will be called
		    default:
		    	dfd.resolve([]);
		}

		return dfd.promise();
	};

	/**
	 * Deletes a cookie from the native HTTP client cookie storage.
	 * This function is asynchronous and returns deferred object.
	 * Example: WL.Client.deleteCookie(myCookie).then(successFlow);
	 * @param name Specifies cookie name.
	 * @returns promise object
	 */
	this.deleteCookie = function(name) {
		var dfd = WLJQ.Deferred();
		var env = WL.Client.getEnvironment();

		switch (env) {
			case WL.Env.ANDROID:
			case WL.Env.IPHONE:
		    case WL.Env.IPAD:
		    	cordova.exec(
		    		dfd.resolve,
		    		dfd.reject,
		    		"WLApp", "deleteCookie", [name]
		    	);
		        break;

		    case WL.Env.WINDOWS8:
		    case WL.Env.WINDOWS:
		    case WL.Env.WINDOWSPHONE8:
		    	//Win8 specific deleteCookie will be called
		    default:
		    	dfd.resolve();
		}

		return dfd.promise();
	};

	/**
	 * Clear all the cookies from persistence and from the cache.
	 * This function is asynchronous and returns deferred object.
	 * Example: WL.Client.clearCookie().then(successFlow);
	 * @returns promise object
	 */

     this.clearCookie =function(){
     	var dfd = WLJQ.Deferred();
		var env = WL.Client.getEnvironment();

		switch (env) {
			case WL.Env.ANDROID:
			cordova.exec(
		    		dfd.resolve,
		    		dfd.reject,
		    		"WLApp", "clearCookie"
		    	);
		        break;
            case WL.Env.IPHONE:
		    case WL.Env.IPAD:
		    case WL.Env.WINDOWS8:
		    case WL.Env.WINDOWS:
		    case WL.Env.WINDOWSPHONE8:
		    	//Win8 specific deleteCookie will be called
		    default:
		    	dfd.resolve();
		}

		return dfd.promise();

     };

   /**
	 * Clear all the session cookies while maintaining the persisted ones.
	 * This function is asynchronous and returns deferred object.
	 * Example: WL.Client.clearCookieSession().then(successFlow);
	 * @returns promise object
	 */

     this.clearCookieSession =function(){
     	var dfd = WLJQ.Deferred();
		var env = WL.Client.getEnvironment();

		switch (env) {
			case WL.Env.ANDROID:
			cordova.exec(
		    		dfd.resolve,
		    		dfd.reject,
		    		"WLApp", "clearCookieSession"
		    	);
		        break;
            case WL.Env.IPHONE:
		    case WL.Env.IPAD:
		    case WL.Env.WINDOWS8:
		    case WL.Env.WINDOWS:
		    case WL.Env.WINDOWSPHONE8:
		    	//Win8 specific deleteCookie will be called
		    default:
		    	dfd.resolve();
		}

		return dfd.promise();

     };

	function isWl403HandleChallenge(response) {
		var env = WL.Client.getEnvironment();
		var previewEnv = WL.StaticAppProps.PREVIEW_ENVIRONMENT;

		var envsSupporting403 = [WL.Env.BLACKBERRY10, WL.Env.MOBILE_WEB, WL.Env.DESKTOPBROWSER];

		if (-1 !== WLJQ.inArray(env, envsSupporting403) || (env === WL.Env.PREVIEW && -1 !== WLJQ.inArray(previewEnv, envsSupporting403))) {
			if (response.status == 403) {
				var challengesHeader = response.getHeader("WWW-Authenticate");
				if (( typeof challengesHeader !== "undefined") && (challengesHeader == "failures")) {
					return true;
				}
			}
		}
		return false;
	};

	this.checkResponseForChallenges = function(wlRequest, response, responseForPostAnswersRealm) {
		var containsChallenges = false;

		// iterate over successes in json
		if (( typeof response.responseJSON !== "undefined") && (response.responseJSON != null) && (response.responseJSON["successes"] !== "undefined") && (response.responseJSON["successes"] != null)) {
			successes = response.responseJSON["successes"];
			handleSuccess(successes);
		}

		if (WL.Client.isWl401(response) || isWl403HandleChallenge(response)) {
			var challengeRealms = response.responseJSON.challenges;
			wlRequest.setExpectedAnswers(challengeRealms);
			var realm = getDirectUpdateRealm(challengeRealms);
			if (realm) {
				executeChallenge(challengeRealms, realm);
			} else {
				for (realm in challengeRealms) {
					executeChallenge(challengeRealms, realm);
				}
			}
			containsChallenges = true;
		}
		// check if wl403
		else if (WL.Client.isWl403(response)) {
			var wlFailure = response.responseJSON["failures"];
			isConnecting = false;
			// only one failure in this type of message
			for (var realm in wlFailure) {
				if (Object.prototype.hasOwnProperty.call(wlFailure, realm)) {
					handler = WL.Client.__chMap[realm];
					if (handler != null && typeof handler !== 'undefined') {
						handler.handleFailure(wlFailure[realm], wlRequest, response);
						handler.clearWaitingList();
						wlRequest.onFailure(response);
					} else {
						var reason = wlFailure[realm].reason;
						// show Access denied dialog with diagnostics
						if ( typeof (reason) != 'undefined' && reason != null) {
							showDialog(WL.ClientMessages.error, WL.ClientMessages.accessDenied, true, true, response, reason);
						} else {
							showDialog(WL.ClientMessages.error, WL.ClientMessages.accessDenied, true, true, response);
						}
					}
				}
			}
			containsChallenges = true;
		}
		// handle non IBM MobileFirst Platform responses
		else {
			for (var processorRealm in WL.Client.__chMap) {
				if (Object.prototype.hasOwnProperty.call(WL.Client.__chMap, processorRealm)) {
					var handler = WL.Client.__chMap[processorRealm];
					if (!handler.isWLHandler && handler.canHandleResponse(response)) {
						handler.startChallengeHandling(wlRequest, response);
						containsChallenges = true;
						break;
					}
				}
			}
		}
		// Handle successes
		function handleSuccess(successes) {
			for (var securityCheck in successes) {
				if (Object.prototype.hasOwnProperty.call(successes, securityCheck)) {
					// always add the identity to userInfo even if there is
					// no cp to handle it (like SingleIdentity)
					userInfo[securityCheck] = successes[securityCheck];
					var cp = WL.Client.__chMap[securityCheck];
					if ( typeof cp !== "undefined") {
						if (cp.isWLHandler) {
							cp.handleSuccess(successes[securityCheck]);
							cp.releaseWaitingList();
						}
					}
				}
			}
		}

		/**
		 * Search for the direct update scope in an array of realms
		 * @param realms - an array of realms
		 * @returns the update realm if it found or null if it doesn't
		 */
		function getDirectUpdateRealm(realms) {

			for (var scope in realms) {
				if (scope == 'directUpdate') {
					return scope;
				}
			}

			return null;
		}

		/**
		 * handle the challenge (execute it if everything is ok)
		 * @param challengeRealms - an array of realms that the given realm is part of
		 * @param realm - the realm of the challenge that needs to be execute
		 */
		function executeChallenge(challengeRealms,realm)
		{
			if (Object.prototype.hasOwnProperty
					.call(challengeRealms, realm)) {
				// get the correct challenge
				var handler = WL.Client.__chMap[realm];
				if (handler == null || typeof handler == 'undefined') {
					var errorMsg = "unknown challenge arrived, cannot proccess challenge handler: "
                                   									+ realm + ". register challenge handler using WL.Client.createSecurityCheckChallengeHandler()";
					WL.Logger.error(errorMsg);
					var transportFailure = {
                            status: -1,
                            responseJSON: {
                              errorCode: WL.ErrorCode.UNEXPECTED_ERROR,
                              errorMsg: errorMsg
                            }
                          };
					wlRequest.onFailure(transportFailure);

				} else {
					handler.startChallengeHandling(wlRequest,
							challengeRealms[realm]);
				}
			}
		}

		return containsChallenges;
	};

	/**
	 * @ignore
	 * check is a IBM MobileFirst Platform 403 response
	 */
	this.isWl403 = function(response) {
		if (response.status == 403 || response.status == 222) {
			if (( typeof response.responseJSON !== "undefined") && (response.responseJSON != null) && response.responseJSON["failures"]) {
				return true;
			}
		}
		return false;
	};

	/**
	 * @ignore
	 * check is a IBM MobileFirst Platform 401 response
	 */
	this.isWl401 = function(response) {
		if (response.status == 401) {
			var challengesHeader = response.getHeader("WWW-Authenticate");
			if (( typeof challengesHeader !== "undefined") && (challengesHeader == "MFP-Challenge")) {
				return true;
			}
		}
		return false;
	};

	/**
	 * @ignore
	 * Go over all non MFP challenge handlers and call it's canHandleResponse function.
	 * Return true if ChallengeHander was called
	 */
	this.isGatewayResponse = function(response){

		for (var processorRealm in WL.Client.__chMap) {
			if (Object.prototype.hasOwnProperty.call(WL.Client.__chMap, processorRealm)) {
				var handler = WL.Client.__chMap[processorRealm];
				if (!handler.isWLHandler && handler.canHandleResponse(response)) {
					return true;
				}
			}
		}
	};

	/*
	 * When a message arrives from a postAnswerRequert ("authenticate") and it is a 401,403, we need to remove it from the waitinglist so there wont be any resend on it,
	 * because if has accepts in it, it will trigger the resend.
	 */
	this.removeFromWaitingListOnPostAnsweresWlReponse = function(response, wlRequest, responseForPostAnswersRealm) {
		if (this.isWl401(response) || this.isWl403(response) || isWl403HandleChallenge(response)) {
			//in case this is a wl response to a postAnswers Request, we need to take the original out of line
			handler = WL.Client.__chMap[responseForPostAnswersRealm];
			if ( typeof (handler) !== 'undefined') {
				handler.removeFromWaitingList(wlRequest);
			}
		}
	};

	// ChallengeHandler protocol start
	function AbstractChallengeHandler(name) {
        if(WL.Client.getEnvironment() === WL.Env.ANDROID){
            this.realm = name;

            /**
             * @ignore
             * Must be implemented by developer.
             *
             * This method is responsible for actual challenge handling.
             * It will be invoked by the IBM MobileFirst Platform in case canHandleResponse() API has
             * returned true value
             *
             */
            this.handleChallenge = function(obj) {
            };

            /**
             * @ignore
             * This method is used to cancel the processing of the challenge
             * Because this is a failure to authenticate, the original message will be discarded
             * (i.e. will not be sent again, even if all other challenges are successfull)
             */
            this.cancel = function() {
            	cordova.exec(null,null,"ChallengeHandlerPlugin","cancel",[name]);
            };

        } else {
            this.realm = name;
            this.isWLHandler = false;
            this.activeRequest = null;
            this.requestWaitingList = [];

            /**
             * @ignore
             * in case this is the first request that is associated with the
             * challenge, set activeRequest and handleChallenge. If this is not the
             * first request, we place it in a queue for handling once we finish
             * handling the first request (just get the result).
             */
            this.startChallengeHandling = function(wlRequest, obj) {
                if (this.activeRequest === null) {
                    this.activeRequest = wlRequest;
                } else if (WLJSX.Object.isUndefined(wlRequest.options.fromChallengeRequest)) {
                    this.requestWaitingList.push(wlRequest);
                    return;
                }

                this.handleChallenge(obj);

            };

            /**
             * @ignore
             * Must be implemented by developer.
             *
             * This method is responsible for actual challenge handling.
             * It will be invoked by the IBM MobileFirst Platform in case canHandleResponse() API has
             * returned true value
             *
             */
            this.handleChallenge = function(obj) {
            };

            /**
             * @ignore
             * In case of cancel we need to clear the waiting list of request,
             * without further handling.
             */
            this.clearWaitingList = function() {
                this.requestWaitingList = [];
            };

            /**
             * @ignore
             * When processing is successful (onSuccess) we assume the challenge is
             * answered, and does need further handling so we remove the expected
             * answer from the waiting list. Then we clear the waiting list.
             */
            this.releaseWaitingList = function() {
                if (this.requestWaitingList.length > 0) {
                    for (var i = 0; i < this.requestWaitingList.length; i++) {
                        this.requestWaitingList[i].removeExpectedAnswer(this.realm);
                    }
                }
                this.requestWaitingList = [];
            };

            /**
             * @ignore
             * This method is used to cancel the processing of the challenge
             * Because this is a failure to authenticate, the original message will be discarded
             * (i.e. will not be sent again, even if all other challenges are successfull)
             */
            this.cancel = function() {
                isConnecting=false;
                // store active request before calling to clearWaitingList, because of later call on onFailure
                var request = this.activeRequest;
                this.activeRequest = null;
                this.clearWaitingList();
                if (request !== null && typeof(request.options) !== 'undefined' &&
                    typeof(request.options.onAuthRequestFailure) !== 'undefined') {
                    var transport = {
                        status : 0,
                        responseJSON : {
                            errorCode: WL.ErrorCode.CHALLENGE_HANDLING_CANCELED,
                            errorMsg: WL.ClientMessages.challengeHandlingCanceled
                        },
                        responseText : WL.ClientMessages.challengeHandlingCanceled
                    };

                    var err = new WL.Response(transport, null);
                    request.options.onAuthRequestFailure(err);
                }
            };

            this.moveToWaitingList = function(wlRequest) {
                this.requestWaitingList.push(wlRequest);
            };

            this.removeFromWaitingList = function(wlRequest) {
                for (var i = 0; i < this.requestWaitingList.length; i++) {
                    if (this.requestWaitingList[i] === wlRequest) {
                        spliced = this.requestWaitingList.splice(i - 1, 1);
                        break;
                    }
                }
            };

            WL.Client.__chMap[name] = this;
        }

	}

	/**
	 * @ignore
	 * WL challenge processor will handle challenges from wl server (401, 403,
	 * and successes, and failures)
	 */
	this.createSecurityCheckChallengeHandler = function(securityCheck) {

		if(WL.Client.getEnvironment() === WL.Env.ANDROID){
		    var challengeHandler = new AbstractChallengeHandler(securityCheck);
            // when a WL success arrives, this user method is called.
            challengeHandler.handleSuccess = function(identity) {

            };

            // when a WL failure arrives, this user method is called.
            challengeHandler.handleFailure = function(err) {

            };

            // Extends it by adding new methods (can also override methods)
            challengeHandler.submitChallengeAnswer = function(answer) {
                cordova.exec(null,null,"ChallengeHandlerPlugin","submitChallengeAnswer",[securityCheck,answer]);
            };

            cordova.exec(function(pluginResult){

                    WL.Logger.debug(JSON.stringify(pluginResult));
                    if(pluginResult.action == "handleChallenge"){
                        WL.Logger.debug("exec success: attempt to trigger handleChallenge");
                        challengeHandler.handleChallenge(pluginResult.data);
                    } else if(pluginResult.action == "handleSuccess"){
                        WL.Logger.debug("exec success: attempt to trigger handleSuccess");
                        challengeHandler.handleSuccess(pluginResult.data);
                    }

                },
                function(pluginResult){

                    WL.Logger.debug(JSON.stringify(pluginResult));
                    if(pluginResult.action == "handleFailure"){
                        WL.Logger.debug("exec success: attempt to trigger handleFailure");
                        challengeHandler.handleFailure(pluginResult.data);
                    }
                },
                "ChallengeHandlerPlugin",
                "createSecurityCheckChallengeHandler",
                [securityCheck]
            );

            // Returns it
            return challengeHandler;

		} else {
				// Creates SUPER challenge processor
        		var challengeHandler = new AbstractChallengeHandler(securityCheck);
        		challengeHandler.isWLHandler = true;

        		challengeHandler.MAX_NUMBER_OF_FAILURES = 3;
        		challengeHandler.numOfFailures = 0;

        		// Extends it by adding new methods (can also override methods)
        		challengeHandler.submitChallengeAnswer = function(answer) {
        			if (( typeof answer === "undefined") || answer === null) {
        				challengeHandler.activeRequest.removeExpectedAnswer(this.realm);
        			} else {
        				challengeHandler.activeRequest.submitAnswer(this.realm, answer);
        			}
        			// cp has done its job, now we can set the activRequest to null.
        			challengeHandler.activeRequest = null;
        		};

        		// when a WL success arrives, this user method is called.
        		challengeHandler.handleSuccess = function(identity) {

        		};

        		// when a WL failure arrives, this user method is called.
        		challengeHandler.handleFailure = function(err) {

        		};

        		// Returns it
        		return challengeHandler;
		}

	};
	/**
	 * @ignore
	 * abstract base class for deviceAuth
	 * provide helper methods for creating the basicJsonPayload that will be signed (or not) and sent to the server
	 * Important - If the user/app developer wants to write his own code to replace the payload, he must
	 * implement onDeviceAuthDataReady and do what he wants there (it will be called automatically after getDeviceAuthDataAsync
	 * by the system.
	 */
	this.createDeviceAuthChallengeHandler = function(realmName) {
		// Creates SUPER challenge processor
		var challengeHandler = WL.Client.createSecurityCheckChallengeHandler(realmName);

		challengeHandler.getDeviceAuthDataAsync = function(deviceAuthSettings) {

            var deviceID = "";

			var assembleDeviceAuthData = function() {
				var appData = {
					id : WL.StaticAppProps.APP_ID,
					version : WL.StaticAppProps.APP_VERSION
				};

				var deviceData = {
					id : deviceID,
					os : device.version,
					model : device.model,
					environment : WL.StaticAppProps.ENVIRONMENT
				};

				var payload = {
					token : deviceAuthSettings.token,
					app : appData,
					device : deviceData,
					custom : {}
				};

				challengeHandler.onDeviceAuthDataReady(payload, deviceAuthSettings);
			};

			function deviceIDSuccessCallback(id) {
	            	deviceID = WL.Utils.getCordovaPluginResponseObject(id, "deviceUUID");

				assembleDeviceAuthData();
			}

			function deviceIDFailureCallback(error) {
				throw new RuntimeException(error);
			}

			if (WL.Client.getEnvironment() === WL.Environment.WINDOWS8 || WL.Client.getEnvironment() === WL.Environment.WINDOWS || WL.Client.getEnvironment() === WL.Environment.WINDOWSPHONE8) {
            	//Device uuid changes and system generates different uuid's for different apps.
        		//For device SSO to work it should be same across apps and adapterid remains same for a device.
            	deviceID = WL.Device.getHardwareIdentifier();
            	assembleDeviceAuthData();
			} else {
				if ( typeof (WL.DeviceAuth.__getDeviceUUID) !== 'undefined') {
					WL.DeviceAuth.__getDeviceUUID(deviceIDSuccessCallback, deviceIDFailureCallback);
				} else {
					if (WL.Client.getEnvironment() === WL.Environment.WINDOWS8 || WL.Client.getEnvironment() === WL.Environment.WINDOWS || WL.Client.getEnvironment() === WL.Environment.WINDOWSPHONE8) {
		            	//Device uuid changes and system generates different uuid's for different apps.
		        		//For device SSO to work it should be same across apps and adapterid remains same for a device.
		            	deviceID = WL.Device.getHardwareIdentifier();
		            }
					if(WL.Client.getEnvironment() === WL.Environment.BLACKBERRY10){
						deviceID= device.uuid;
					}
					assembleDeviceAuthData();
				}
			}
		};

        challengeHandler.onDeviceAuthDataReady = function(deviceDataJSON, deviceProvisioning){};

		// Returns it
		return challengeHandler;
	};



	/**
	 * @ignore
	 * This method creates a new challenge handler instance responsible for a specified realm.
	 * In order for it to function developer must implement the following mandatory methods,
	 * as described in IBM MobileFirst Platform InfoCenter.
	 *
	 * canHandleResponse()
	 * handleChallenge()
	 */
	this.createGatewayChallengeHandler = function(gatewayName) {
		// Creates abstract challenge handler
		var challengeHandler = new AbstractChallengeHandler(gatewayName);

		if(WL.Client.getEnvironment() === WL.Env.ANDROID){
			challengeHandler.submitLoginFormCallback = function(response){};

			/**
			 * User calls this function when the the challenge was handled successfully.
			 * When a success is submitted, the state of successes is checked for all challenges issued per original request.
			 * What this means is that, if all challenges are successfully met, the original message would be resent automagically.
			 */
			challengeHandler.submitSuccess = function() {
				cordova.exec(null,null,"ChallengeHandlerPlugin","submitSuccess",[gatewayName]);
			};

			/**
			 * Must be implemented by developer.
			 *
			 * This method will be invoked by the IBM MobileFirst Platform for every server response.
			 * It is responsible to detect whether server response contains data
			 * that should be processed by this challenge handler.
			 */
			challengeHandler.canHandleResponse = function(transport) {
				return false;
			};

			/**
			 * This method should be used in a challenge handler to submit authentication of a form, in case of form
			 * based authentication.
			 */
			challengeHandler.submitLoginForm = function(reqURL, options, submitLoginFormCallback) {
				WL.Logger.debug("Request [login]");
				challengeHandler.submitLoginFormCallback = submitLoginFormCallback;
				cordova.exec(null,null,"ChallengeHandlerPlugin","submitLoginForm",[gatewayName, reqURL, options]);
			};

			cordova.exec(function(pluginResult){
				WL.Logger.debug("inside challenge handler exec success");
				WL.Logger.debug(JSON.stringify(pluginResult));
				if(pluginResult.action == "handleChallenge"){
						challengeHandler.handleChallenge(pluginResult.data);
				} else if(pluginResult.action == "onSuccess"){
						challengeHandler.submitLoginFormCallback(pluginResult.data);
				} else if(pluginResult.action == "canHandleResponse") {
						var result = challengeHandler.canHandleResponse(pluginResult.data);
						cordova.exec(null,null,"ChallengeHandlerPlugin","canHandleResponse",[gatewayName,result,pluginResult.responseID]);
				}
			},function(pluginResult){
				if(pluginResult.action == "onFailure"){
						WL.Logger.debug("exec failure: attempt to trigger onFailure");
						challengeHandler.submitLoginFormCallback(pluginResult.data);
				}
			},"ChallengeHandlerPlugin","createGatewayChallengeHandler",[gatewayName]);

		} else {
			challengeHandler.isWLHandler = false;

			// Extends it by adding new methods (can also override methods)

			/**
			 * User calls this function when the the challenge was handled successfully.
			 * When a success is submitted, the state of successes is checked for all challenges issued per original request.
			 * What this means is that, if all challenges are successfully met, the original message would be resent automagically.
			 */
			challengeHandler.submitSuccess = function() {
				// ch has done its job, now we can set the activRequest to null.
				challengeHandler.activeRequest.removeExpectedAnswer(this.realm);
				challengeHandler.activeRequest = null;
				challengeHandler.releaseWaitingList();

			};

			/**
			 * Must be implemented by developer.
			 *
			 * This method will be invoked by the IBM MobileFirst Platform for every server response.
			 * It is responsible to detect whether server response contains data
			 * that should be processed by this challenge handler.
			 */
			challengeHandler.canHandleResponse = function(transport) {
				return false;
			};

			/**
			 * This method should be used in a challenge handler to submit authentication of a form, in case of form
			 * based authentication.
			 */
			challengeHandler.submitLoginForm = function(reqURL, options, submitLoginFormCallback) {
				var timer = null;

				WL.Logger.debug("Request [login]");

				function onUnresponsiveHost(transport) {
					if (isTimeout()) {
						return;
					}
					cancelTimer();

					WLJSX.Ajax.WLRequest.setConnected(false);
					submitLoginFormCallback(transport);
				}

				function onLoginFormResponse(transport) {
					if (isTimeout()) {
						return;
					}
					cancelTimer();
					submitLoginFormCallback(transport);
				}

				setTimer(WLJSX.Ajax.WLRequest.options.timeout);

				var requestHeaders = WL.CookieManager.createCookieHeaders();
				requestHeaders['x-wl-app-version'] = WL.StaticAppProps.APP_VERSION;

				// add headers
				if (options && options.headers) {
					var headers = options.headers;
					if (( typeof headers !== "undefined") && (headers !== null)) {
						for (var headerName in headers) {
							if (Object.prototype.hasOwnProperty.call(headers, headerName)) {
								requestHeaders[headerName] = headers[headerName];
							}
						}
					}
				}

				var reqOptions = {
					method : 'post',
					contentType : 'application/x-www-form-urlencoded',
					onSuccess : onLoginFormResponse,
					onFailure : onLoginFormResponse,
					// Unresponsive host: Some desktops treat as success if not
					// defined explicitly.
					on0 : onUnresponsiveHost.bind(this),
					requestHeaders : requestHeaders,
					parameters : WLJSX.Object.toQueryString(options.parameters)
				};

				var finalUrl = null;

				if (reqURL.indexOf("http") == 0 && reqURL.indexOf(':') > 0) {
					finalUrl = reqURL;
				} else {
					finalUrl = WL.Utils.createAPIRequestURL(reqURL);
				}

				var ajaxRequest = null;

				__sendRequest();

				function __sendRequest() {
					ajaxRequest = new WLJSX.Ajax.Request(finalUrl, reqOptions);
				}

				function setTimer(timeout) {
					if (timer !== null) {
						window.clearTimeout(timer);
					}
					timer = window.setTimeout(onTimeout, timeout);
				}

				function onTimeout() {
					timer = null;
					if (ajaxRequest !== null) {
						ajaxRequest.transport.abort();
					}

					var transport = {};
					transport.responseJSON = {
						errorCode : WL.ErrorCode.REQUEST_TIMEOUT,
						errorMsg : WL.ClientMessages.requestTimeout
					};
					//APAR - 69540: PI38214 TYPEERROR: UNDEFINED IS NOT A FUNCTION OCCURS WHEN LDAP LOGIN REQUEST RETURNS A TIMEOUT.
					transport.responseText = null;
					submitLoginFormCallback(transport);
				}

				function cancelTimer() {
					if (timer !== null) {
						window.clearTimeout(timer);
						timer = null;
					}
				}

				function isTimeout() {
					return (timer === null);
				}

			};
		}

		// Returns it
		return challengeHandler;
	};

    /**
	 * Check if the user added a default handler for OnRemoteDisableDenial and
	 * if so, activate it. If not then call the defaultRemoteDisableDenial.
	 */
	this.__handleOnRemoteDisableDenial = function(defaultonErrorRemoteDisableDenial, that, msg, downloadLink) {
		// Hide the splash screen in case autoHideSplash init option is true (for Android, iOS and WP8)
        autoHideSplashScreen();

		isConnecting = false;

		if (initOptions.onErrorRemoteDisableDenial) {
			initOptions.onErrorRemoteDisableDenial(msg, downloadLink);
		} else if (initOptions.onErrorAppVersionAccessDenial) {
			WL.Logger.debug("Initialization option onErrorAppVersionAccessDenial is deprecated, use onErrorRemoteDisableDenial instead.");
			initOptions.onErrorAppVersionAccessDenial();
		} else {
			defaultonErrorRemoteDisableDenial(that, msg, downloadLink);
		}
	};

	this.getUsername = function() {
		var username = null;
		switch (WL.Client.getEnvironment()) {
			case WL.Env.IPHONE:
				username = __WL.LocalStorage.getValue(WL.UserInfo.USER_NAME);
				break;
			case WL.Env.IPAD:
				username = __WL.LocalStorage.getValue(WL.UserInfo.USER_NAME);
				break;
			case WL.Env.ANDROID:
				username = __WL.LocalStorage.getValue(WL.UserInfo.USER_NAME);
				break;
		}
		return username;
	};

	this.__getScreenHeight = function() {
		if ( typeof __androidScreenSize == 'undefined') {
			return null;
		}
		return __androidScreenSize.height;
	};

	this.__getScreenWidth = function() {
		if ( typeof __androidScreenSize == 'undefined') {
			return null;
		}
		return __androidScreenSize.width;
	};

	// New interface for notifying native code when JS init is complete (Initially implemented only for Android)
    this.__onWlInitComplete = function() {};

	/**
	 * @private
	 * Returns an non mutable object with some information about the state of the app (e.g. if FIPS is configured to be enabled or disabled)
	 * */
	this.__state = function() {

		// Note that we do not check the state of FIPS enabled/disabled in the FIPSHttpImpl because it can be in an
		// indeterminate state until the WL/FIPS/Ready event is fired.
		var state = {
			enableFIPS : ( typeof initOptions.enableFIPS === 'boolean' ? (initOptions.enableFIPS && typeof WL._FIPSHttpImpl === 'object') : false)
		};

		return WL_.cloneDeep(state);
	};

    /**
    * To share key/value pair among applications participating in WL's "group support"
    * Expected parameter is {key: 'key1'}.  Future versions may take an encryption key.
    */
    this.setSharedToken = function(obj) {
        var dfd = WLJQ.Deferred();

        obj = obj || {};
        var key = obj.key;
        var value = obj.value;

        if (typeof key !== 'undefined') {
          if (((WL.Client.getEnvironment() === WL.Env.IPHONE)
               || (WL.Client.getEnvironment() === WL.Env.IPAD)
               || (WL.Client.getEnvironment() === WL.Env.ANDROID))
               && (typeof cordova === 'object')) {
           setTimeout(function () {
             cordova.exec(dfd.resolve, dfd.reject, 'WLApp', 'setSharedToken', [key, value]);
           }, 0);
         }
       } else {
         setTimeout(dfd.resolve, 0);
       }

       return dfd.promise();
    };

    /**
    * To retrieve value for key from among applications participating in WL's "group support"
    * Expected parameter is {key: 'key1'}.  Future versions may take an decryption key.
    */
    this.getSharedToken = function(obj) {
        var dfd = WLJQ.Deferred();

        obj = obj || {};
        var key = obj.key || '';

        if (((WL.Client.getEnvironment() === WL.Env.IPHONE)
              || (WL.Client.getEnvironment() === WL.Env.IPAD)
              || (WL.Client.getEnvironment() === WL.Env.ANDROID))
              && (typeof cordova === 'object')) {
          setTimeout(function () {
            cordova.exec(dfd.resolve, dfd.reject, 'WLApp', 'getSharedToken', [key]);
          }, 0);
        } else {
          setTimeout(dfd.resolve, 0);
        }

        return dfd.promise();
    };

    /**
    * To clear value for key from among applications participating in WL's "group support"
    * Expected parameter is {key: 'key1'}.
    */
    this.clearSharedToken = function(obj) {
        var dfd = WLJQ.Deferred();

        obj = obj || {};
        var key = obj.key || '';

        if (((WL.Client.getEnvironment() === WL.Env.IPHONE)
              || (WL.Client.getEnvironment() === WL.Env.IPAD)
              || (WL.Client.getEnvironment() === WL.Env.ANDROID))
              && (typeof cordova === 'object')) {
          setTimeout(function () {
            cordova.exec(dfd.resolve, dfd.reject, 'WLApp', 'clearSharedToken', [key]);
          }, 0);
        } else {
          setTimeout(dfd.resolve, 0);
        }

        return dfd.promise();
    };

};

__WL.prototype.Client = new __WLClient;
WL.Client = new __WLClient;


/**
 * ================================================================= 
 * Source file taken from :: clockSyncChallengeHandler.js
 * ================================================================= 
 */

/**
 * @license
   Licensed Materials - Property of IBM

   (C) Copyright 2016 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

var clockSyncChallengeHandler = WL.Client.createSecurityCheckChallengeHandler("clockSynchronization");

clockSyncChallengeHandler.handleSuccess = function(identity) {
	var date = new Date();
	WLAuthorizationManager.__serverRelativeTime = identity.serverTimeStamp - date.getTime();
	WL.Logger.debug("Server relative time is " + WLAuthorizationManager.__serverRelativeTime);
	WLAuthorizationManager.__updateServerRelativeTime().then( function () {
	    //nothing is needed here
	});
};


/**
 * ================================================================= 
 * Source file taken from :: remoteDisableChallengeHandler.js
 * ================================================================= 
 */

/**
 * @license
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

var wl_remoteDisableChallengeHandler = WL.Client.createSecurityCheckChallengeHandler("wl_remoteDisableRealm");

wl_remoteDisableChallengeHandler.handleChallenge = function(obj) {

	// get new message params
	var message = obj.message;
    var messageId = obj.messageId;
    var messageType = obj.messageType;

    // get value of previously stored message id
	var storedMessageId = __WL.LocalStorage.getValue(WL.Client.getMessageID());

	var challengeAnswer = { messageId : messageId };

	if (isDisplayMessageDialogue(storedMessageId, messageId, messageType))
	{
		WL.SimpleDialog.show(WL.ClientMessages.notificationTitle, message, [ {
			text : WL.ClientMessages.close,
			handler : function() {
				wl_remoteDisableChallengeHandler.submitChallengeAnswer(challengeAnswer);
			}
		} ]);
		// keep the message id in the local storage
		__WL.LocalStorage.setValue(WL.Client.getMessageID(), messageId);
	}
		else
	{
		// don't show dialogue
		wl_remoteDisableChallengeHandler.submitChallengeAnswer(challengeAnswer);
	}

};


/**
 * determine whether or not to display message dialogue
 * @param storedMessageId
 * @param messageId
 * @param messageType
 * @returns {Boolean}
 */
function isDisplayMessageDialogue(storedMessageId,messageId, messageType)
{
	// restrictions apply only to notify messages
	if (messageType != "NOTIFY")
	{
		return true;
	}

	// display only new messages - the first time they are received
	if (typeof storedMessageId == "undefined" || storedMessageId != messageId)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function getEnv() {
    return WL.StaticAppProps.ENVIRONMENT;
}

wl_remoteDisableChallengeHandler.__generateDialogueButtons = function(downloadLink)
{
	// start with an empty array
	var buttons = [];

	// show close button in two cases:
	// 1) its the only button (no download link)
	// 2) the flag to show it is on
	if (!downloadLink || WL.Client.isShowCloseButtonOnRemoteDisable())
	{
		buttons = [ {
	         text : WL.ClientMessages.close,
	         handler : function() {
	         }
	     } ];
	}


	// add download link if necessary
	if (downloadLink) {
            buttons.push({
                text : WL.ClientMessages.upgrade,
                handler : function() {
                    // Note you must add the null options to openURL
                    // otherwise the event is assumed the 3rd argument.
                    WL.App.__openURL(downloadLink, "_new", null);
                }
            });
        }

	return buttons;
}


wl_remoteDisableChallengeHandler.handleFailure = function(err) {
	var message;

	if (typeof err == "undefined" || err == null)
	{
		message = "unknown error occurred."
	    WL.Logger.debug(">>> wl_remoteDisableChallengeHandler.handleFailure invoked with a missing err argument");
	}
	else if(err.message) {
    	message = err.message;
    } else if (err.reason) {
    	message = err.reason;
    } else {
    	WL.Logger.debug(">>> wl_remoteDisableChallengeHandler.handleFailure invoked with unexpected err format: " + JSON.stringify(err, null, 4));
    	message = "unknown error occurred."
    };
    var downloadLink = err.downloadLink;

    /*
     * Processor default handler for failure (display message and close App).
     */
    function defaultRemoteDisableDenialHandler(that,msg,downloadLink) {
        var buttons = that.__generateDialogueButtons(downloadLink);

        // Patch - downloadNewVersion element is added in the msg string.
        WL.SimpleDialog.show(WL.ClientMessages.applicationDenied, msg, buttons);
    }

    WL.Client.__handleOnRemoteDisableDenial(defaultRemoteDisableDenialHandler,this, message, downloadLink);
};


/**
 * ================================================================= 
 * Source file taken from :: securityutils.js
 * ================================================================= 
 */

/**
 * SecurityUtils Modules
 */

 WL.SecurityUtils = (function (jQuery, lodash) {

  var

  //Dependencies
  $ = jQuery,
  _ = lodash;

  //Constants
  var
  DATA_KEY_LENGTH = 32,
  ANDROID_ENV = WL.Environment.ANDROID,
  IPHONE_ENV = WL.Environment.IPHONE,
  IPAD_ENV = WL.Environment.IPAD,
  PLUGIN_NAME = 'SecurityPlugin',
  KEYGEN_METHOD_NAME = 'keygen',
  ENCRYPT_METHOD_NAME = 'encrypt',
  DECRYPT_METHOD_NAME = 'decrypt',
  ENABLE_OS_NATIVE_ENCRYTION_METHOD_NAME = "enableOSNativeEncryption",
  LOCAL_RANDOM_METHOD_NAME = 'localRandomString',
  BASE64_ENCODE_METHOD_NAME = 'base64Encode',
  BASE64_DECODE_METHOD_NAME = 'base64Decode',
  CURRENT_VERSION = 1,
  CURRENT_SOURCE = 'js',
  IS_EOC = false;

  var WLBase64 = {

    encode : function (input) {
      var bits = sjcl.codec.utf8String.toBits(input);
      return sjcl.codec.base64.fromBits(bits);
    },

    decode : function (input) {
      var bits =  sjcl.codec.base64.toBits(input);
      return sjcl.codec.utf8String.fromBits(bits);
    }
  };

  var __hmacSHA1 = function (key) {
    var hasher = new sjcl.misc.hmac(key, sjcl.hash.sha1);
    this.encrypt = function () {
        return hasher.encrypt.apply(hasher, arguments);
    };
  };

  var __toHex = function (str) {

    if(typeof str !== 'string') {
      return '';
    }

    var hex = '',
      i;
    for (i = 0 ; i < str.length; i++) {
      hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
  };

  var __checkNativeEnvironment = function () {
    var env = WL.Client.getEnvironment();

    return (env === ANDROID_ENV ||
      env === IPHONE_ENV ||
      env === IPAD_ENV);
  };

  var __callNative = function (options, error) {

    var dfd = $.Deferred();
    var env = WL.Client.getEnvironment();

    var successCallback = function (res) {

      switch(options.method) {

        //Encrypt returns a stringified version of a JSON object
        case ENCRYPT_METHOD_NAME:
          dfd.resolve(JSON.parse(res));
          break;

        case DECRYPT_METHOD_NAME:
        	//APAR 54444: According to mcanuto@mx1.ibm.com, for Android 4.2.2 and 4.3.x (API 17 and 18), the WebView's sendMessage
			//truncates any string being sent over that has null characters (such as "0x00", "\u0000"), so the response comes back as a binary array. 
        	//(The same is being done for all versions of Android, for consistency). We have to convert it back to an UTF-8 string:
        	if(env === ANDROID_ENV){
            	var decodedString = __convertCordovaBinaryArrayBufferToUTF8String(res);
            	
            	dfd.resolve(decodedString);
        	}
        	else{
        		dfd.resolve.apply(this, arguments);
        	}
        	
        	break;
          
        default:
          dfd.resolve.apply(this, arguments);
      }
    };

    cordova.exec(successCallback, dfd.reject, PLUGIN_NAME, options.method, options.params);

    return dfd.promise();
  };
  
  var __convertCordovaBinaryArrayBufferToUTF8String = function (arrayBuffer){
	  var result = "";
      var i = 0;
      var c = 0;
      var c1 = 0;
      var c2 = 0;

      var data = new Uint8Array(arrayBuffer);

      // Skip the Byte Order Mark (BOM) if it is part of the string:
      if (data.length >= 3 && data[0] === 0xef && data[1] === 0xbb && data[2] === 0xbf) {
          i = 3;
      }
      while (i < data.length) {
          c = data[i];

          if (c < 128) {
              result += String.fromCharCode(c);
              i++;
          } else if (c > 191 && c < 224) {
              if (i + 1 >= data.length) {
                  throw "UTF-8 Decode failed. Two byte character was truncated.";
              }
              c2 = data[i + 1];
              result += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
              i += 2;
          } else {
              if (i + 2 >= data.length) {
                  throw "UTF-8 Decode failed. Multi byte character was truncated.";
              }
              c2 = data[i + 1];
              c3 = data[i + 2];
              result += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
              i += 3;
          }
      }
      return result;
  };

  var __callPureWeb = function (options) {

    var dfd = $.Deferred();

    var password,
      key,
      salt,
      iterations,
      len,
      text,
      ct,
      iv,
      src,
      version,
      bitSalt,
      hexKey,
      encryptionStr,
      encryptionObj,
      decryptionStr,
      retObj,
      bytes,
      input;


    if (options.method === KEYGEN_METHOD_NAME) {

      password = options.params[0];
      salt = options.params[1];
      iterations = options.params[2];
      len = options.params[3];

      if (typeof iterations !== 'number' || iterations < 1) {

        dfd.reject({msg: 'KEYGEN_ERROR = Number of iterations must greater than 0'});

      } else if (typeof password !== 'string' || password.length < 1) {

        dfd.reject({msg: 'KEYGEN_ERROR = Password cannot be nil/empty'});

      } else if (typeof salt !== 'string' || salt.length < 1) {

        dfd.reject({msg: 'KEYGEN_ERROR = Salt cannot be nil/empty'});

      } else {

        try {

          bitSalt = sjcl.codec.hex.toBits(__toHex(salt));
          hexKey = sjcl.codec.hex.fromBits(sjcl.misc.pbkdf2(password, bitSalt, iterations, len * 8, __hmacSHA1));
          dfd.resolve(hexKey);

        } catch (e) {

          dfd.reject({msg: e.toString()});
        }

      }

    } else if (options.method === ENCRYPT_METHOD_NAME) {

      key = options.params[0];
      text = options.params[1];

      if (typeof key !== 'string' || key.length < 1) {

        dfd.reject({msg: 'ENCRYPT_ERROR = Cannot work with an empty/nil key'});

      } else if (typeof text !== 'string' || text.length < 1) {

        dfd.reject({msg: 'ENCRYPT_ERROR = Cannot encrypt empty/nil plaintext'});

      } else {

        try {

          encryptionStr = sjcl.json.encrypt(key, text);
          encryptionObj = JSON.parse(encryptionStr);

          retObj = _.pick(encryptionObj, ['ct', 'iv']);
          retObj.v = CURRENT_VERSION;
          retObj.src = CURRENT_SOURCE;

          dfd.resolve(retObj);

        } catch (e) {

          dfd.reject({msg: e.toString()});
        }
      }

    } else if (options.method === DECRYPT_METHOD_NAME) {

      key = options.params[0];
      ct = options.params[1];
      iv = options.params[2];
      src = options.params[3];
      version = options.params[4];

      if (typeof key !== 'string' || key.length < 1) {

        dfd.reject({msg: 'DECRYPT_ERROR = Cannot work with an empty/nil key'});

      } else if (typeof ct !== 'string' || ct.length < 1) {

        dfd.reject({msg: 'DECRYPT_ERROR = Cannot decrypt empty/nil cipher'});

      } else if (typeof iv !== 'string' || iv.length < 1) {

        dfd.reject({msg: 'DECRYPT_ERROR = Cannot encrypt with empty/nil iv'});

      } else if (src !== 'js') {

        dfd.reject({msg: 'DECRYPT_ERROR = Cannot decrypt something not encrypted in this environment'});

      } else if (version !== CURRENT_VERSION) {

        dfd.reject({msg: 'DECRYPT_ERROR = Cannot decrypt something with that version'});

      } else {

        try {

          decryptionStr = sjcl.json.decrypt(key, JSON.stringify({ct: ct, iv:iv}));
          dfd.resolve(decryptionStr);

        } catch(e) {

          dfd.reject({msg: e.toString()});
        }
      }
    } else if (options.method === LOCAL_RANDOM_METHOD_NAME) {

      try {

        bytes = options.params[0];
        dfd.resolve(sjcl.codec.hex.fromBits(sjcl.random.randomWords(bytes/4)));

      } catch (e) {

        dfd.reject({msg: e.toString()});
      }

    } else if (options.method === BASE64_ENCODE_METHOD_NAME) {

      try {

        input = options.params[0];
        dfd.resolve(WLBase64.encode(input));

      } catch (e) {

        dfd.reject({msg: e.toString()});
      }

    } else if (options.method === BASE64_DECODE_METHOD_NAME) {

      try {

        input = options.params[0];
        dfd.resolve(WLBase64.decode(input));

      } catch (e) {

        dfd.reject({msg: e.toString()});
      }
    }

    return dfd.promise();
  };

  var _keygen = function (options) {

    WL.Validators.isValidationEnabled = true;

    var err = WL.Validators.validateOptions({
      password : 'string',
      salt : 'string',
      iterations : 'number'
    }, options, 'WL.SecurityUtils.keygen');

    var ops = {
      method: KEYGEN_METHOD_NAME,
      params: [__toHex(options.password), __toHex(options.salt), options.iterations, DATA_KEY_LENGTH]
    };

    if (__checkNativeEnvironment()) {

      return __callNative(ops);

    } else {
      return __callPureWeb(ops);
    }
  };

  var _encrypt = function (options) {

    WL.Validators.validateOptions({
      key : 'string',
      text : 'string'
    }, options, 'WL.SecurityUtils.encrypt');

    var ops = {
      method: ENCRYPT_METHOD_NAME,
      params: [options.key, options.text, '']
    };

    if (__checkNativeEnvironment()) {

      return __callNative(ops);

    } else {

      return __callPureWeb(ops);
    }
  };

  var _decrypt = function (options) {

    WL.Validators.validateOptions({
      key : 'string',
      ct : 'string',
      iv : 'string',
      src: 'string',
      v : 'number'
    }, options, 'WL.SecurityUtils.decrypt');

    var ops = {
      method: DECRYPT_METHOD_NAME,
      params: [options.key, options.ct, options.iv, options.src || '', options.v || CURRENT_VERSION]
    };

    if (__checkNativeEnvironment()) {

      return __callNative(ops);

    } else {

      return __callPureWeb(ops);
    }
  };

  var _enableOSNativeEncryption = function (enable) {

      var ops = {
        method: ENABLE_OS_NATIVE_ENCRYTION_METHOD_NAME,
        params: [enable]
      };
      if (__checkNativeEnvironment() && getEnv() ==  WL.Env.IPHONE) {
        return __callNative(ops);
      }
    };

  var _localRandomString = function (length) {

    var bytes = 32;

    if (typeof length === 'number' && length > 0) {
      bytes = length;
    }

    var ops = {
      method: LOCAL_RANDOM_METHOD_NAME,
      params: [bytes]
    };

    if (__checkNativeEnvironment()) {

      return __callNative(ops);

    } else {

      return __callPureWeb(ops);
    }

  };

  var _base64Encode = function (input) {

    var ops = {
      method: BASE64_ENCODE_METHOD_NAME,
      params: [input]
    };

    if (__checkNativeEnvironment()) {

      return __callNative(ops);

    } else {

      return __callPureWeb(ops);
    }

  };

  var _base64Decode = function (input) {

    var ops = {
      method: BASE64_DECODE_METHOD_NAME,
      params: [input]
    };

    if (__checkNativeEnvironment()) {

      return __callNative(ops);

    } else {

      return __callPureWeb(ops);
    }

  };

  return {
    keygen : _keygen,
    encrypt: _encrypt,
    decrypt: _decrypt,
    localRandomString : _localRandomString,
    enableOSNativeEncryption :_enableOSNativeEncryption,
    base64Encode: _base64Encode,
    base64Decode : _base64Decode
  };

}(WLJQ, WL_));

/**
 * ================================================================= 
 * Source file taken from :: fipshttp_stub.js
 * ================================================================= 
 */

/**
 * @license
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

var WL = WL || {};

WL.FIPSHttp = (function (_) {
	var publicAPI = [
							"_enable",
							"_state"
	        		];
	
	var stub = {};
	
	var FIPSHttpEnabled = function() { 
		return !(_.isUndefined(WL._FIPSHttpImpl)) 
	};
	
	_.each(publicAPI, function(apiName) {
		var implName = apiName;
		stub[apiName] = 
			(function(apiName, implName) {
				return function() {
					if (FIPSHttpEnabled()) {
						return  WL._FIPSHttpImpl[implName].apply(WL._FIPSHttpImpl, arguments);
					} else {
						var featureName = 'FIPSHttp';
						var cmd = 'WL.FIPSHttp.' + apiName;
						var errMsg = "Failed to call {1} because {0} is missing in the application. Add {0} to the application descriptor, rebuild and deploy it.";
						throw new Error(WL.Utils.formatString(errMsg, featureName, cmd));
					}
				};
			})(apiName, implName);
	});
	
	return stub;
}(WL_));

/**
 * ================================================================= 
 * Source file taken from :: wlresourcerequest.js
 * ================================================================= 
 */

/*
Licensed Materials - Property of IBM

(C) Copyright 2015 IBM Corp.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */

/*globals WL, WL_, WLJQ, WLAuthorizationManager*/
/*jshint maxparams:4*/
function WLResourceRequest(_url, _method, _options) {
    /*jshint strict:false*/

    function logAndThrowError(msg, callerName) {
        if (WL.Logger) {
            if (callerName) {
                msg = 'Invalid invocation of method ' + callerName + '; ' + msg;
            }
            WL.Logger.error(msg);
        }

        throw new Error(msg);
    }

    var queryParameters = {};

    function extractQueryParamFromUrl(_url) {
        var vars = _url.split('?');
        if (vars.length > 1) {
            var tempParamaters = vars[1].split('&');
            for (var i = 0; i < tempParamaters.length; i++) {
                if (true) { // thanks jshint
                    var pair = tempParamaters[i].split('=');
                    var values = queryParameters[pair[0]];
                    /*jshint maxdepth:5*/
                    if (values === null || typeof(values) === 'undefined') {
                        values = [];
                        queryParameters[pair[0]] = values;
                    }
                    values[values.length] = pair[1];
                }
            }
        }
        return vars[0];
    }

    function isValidRequestMethod(method) {
        return (method === WLResourceRequest.GET || method === WLResourceRequest.POST || method === WLResourceRequest.PUT ||
            method === WLResourceRequest.DELETE || method === WLResourceRequest.HEAD || method === WLResourceRequest.OPTIONS ||
            method === WLResourceRequest.TRACE);
    }

    function isUndefinedOrNull(value) {
        return (typeof(value) === 'undefined' || value === null);
    }
    var url = (_url === null || typeof(_url) === 'undefined') ? logAndThrowError('Request URL must be specified.', 'WLResourceRequest') : extractQueryParamFromUrl(_url.trim());
    var method = (typeof(_method) === 'undefined' || !isValidRequestMethod(_method)) ? logAndThrowError('Request method is invalid or not specified.', 'WLResourceRequest') : _method;
    var timeout;
    var headers = {};
    var currentResourceRequest = this;
    currentResourceRequest.scope = null;
    var backendServiceName = null;
    var MAX_CONFLICT_ATTEMPTS = 7;
    var backendService = '/backendservice/';

    /* support timeout given as 3rd parameter for backward compatibility */
    if (typeof(_options) === 'number') {
        timeout = _options;
    } else {
        if (!isUndefinedOrNull(_options) && !isUndefinedOrNull(_options.timeout)) {
            timeout = _options.timeout;
        }
        if (!isUndefinedOrNull(_options) && !isUndefinedOrNull(_options.scope)) {
            currentResourceRequest.scope = _options.scope;
        }
        if (!isUndefinedOrNull(_options) && !isUndefinedOrNull(_options.backendServiceName)) {
            backendServiceName = _options.backendServiceName;
            if (isUndefinedOrNull(_options.timeout)) {
                timeout = 30000; //default value for timeout
                }
        }
    }

    /**
     * Returns request URL. The URL must have been passed to constructor.
     */
    this.getUrl = function() {
        return url;
    };

    /**
     * Returns current request method. A valid request method must have been passed to constructor.
     */
    this.getMethod = function() {
        return method;
    };

    /**
     * Returns query parameters as a JSON object with key-value pairs.
     */
    this.getQueryParameters = function() {
        var tempQueryParameters = {};
        for (var paramKey in queryParameters) {
            if (true) { // thanks jshint
                var value = queryParameters[paramKey][0];
                tempQueryParameters[paramKey] = value;
            }
        }
        return tempQueryParameters;
    };

    /**
     * Returns query parameters as string.
     */
    this.getQueryString = function() {
        return buildQueryString();
    };

    /**
     * Sets query parameters.
     * @param {parameters} A JSON object with key-value pairs.
     */
    this.setQueryParameters = function(parameters) {
        queryParameters = {};

        if (typeof(parameters) !== 'undefined' && parameters !== null) {
            for (var paramKey in parameters) {
                if (true) { // thanks jshint
                    this.setQueryParameter(paramKey, parameters[paramKey]);
                }
            }
        }
    };

    /**
     * Sets a new query parameter. If a parameter with the same name already exists, it will be replaced.
     * @param {name} Parameter name
     * @param {value} Parameter value. Should be string, number or boolean.
     */
    this.setQueryParameter = function(name, value) {
        if (typeof(name) !== 'undefined' && name !== null && typeof(value) !== 'undefined' && value !== null) {
            queryParameters[name] = [value];
        }
    };

    // receives string, returns array of header values (even if only 1). if name==undefined returns all headers
    /**
     * Returns array of header values.
     * @param {name} Header name. If header name is specified, this function returns an array of header values
     * stored with this header, or undefined, if specified header name is not found. If <i>name</i> is null, or undefined,
     * this function returns all headers.
     */
    this.getHeaders = function(name) {
        if (name === null || typeof(name) === 'undefined') {
            return headers;
        }

        var headerValue = headers[name];

        if (typeof(headerValue) === 'undefined') {
            // try case insensitive search
            headerValue = __getFirstHeaderByNameNoCase(name).value;
        }

        if (headerValue !== null) {
            if (WL_.isArray(headerValue)) {
                return headerValue;
            } else {
                return [headerValue];
            }
        }

    };

    /**
     * Returns array of header names. It can be empty if no headers has been added.
     */
    this.getHeaderNames = function() {
        var headerNames = [];
        for (var headerName in headers) {
            if (true) { // thanks jshint
                headerNames.push(headerName);
            }
        }
        return headerNames;
    };

    // receives string, returns string. if multiple headers with same name - return first one
    /**
     * Returns a first header value stored with the specified header name. The value is returned as a string.
     * Can be undefined if a header with specified name does not exist.
     * @param {name} Header name.
     */
    this.getHeader = function(name) {
        if (name === null || typeof(name) === 'undefined') {
            logAndThrowError('Header name should be defined.', 'WLResourceRequest.getHeader');
        }

        var headerValue = headers[name];
        if (typeof(headerValue) === 'undefined') {
            // try case insensitive search
            headerValue = __getFirstHeaderByNameNoCase(name).value;
        }

        if (WL_.isArray(headerValue)) {
            return headerValue[0];
        }
        return headerValue;
    };

    //receives JSON object similar to what getHeaders returns
    /**
     * Sets request headers. The existing headers are replaced.
     * @param {requestHeaders} JSON object with request headers. Each header value should be either string, or array of strings. This function will
     * throw error if one of specified header values is not valid.
     */
    this.setHeaders = function(requestHeaders) {
        if (requestHeaders === null || typeof(requestHeaders) === 'undefined') {
            headers = {};
            return;
        }

        // verify that each key contains array of values or simple object
        for (var headerName in requestHeaders) {
            if (true) { // thanks jshint
                var headerValue = requestHeaders[headerName];

                if (WL_.isArray(headerValue)) {
                    /*jshint maxdepth:4*/
                    if (headerValue.length > 0 && !isArrayOfSimpleTypes(headerValue)) {
                        // complex type detected within array of values - throw error
                        logAndThrowError('Header value should be a simple type.', 'WLResourceRequest.setHeaders');
                    }
                } else if (!isSimpleType(headerValue)) {
                    logAndThrowError('Header value should be a simple type.', 'WLResourceRequest.setHeaders');
                }
            }
        }

        headers = {};
        for (var key in requestHeaders) {
            if (true) { // thanks jshint
                var headerValueTemp = requestHeaders[key];
                if (WL_.isArray(headerValueTemp)) {
                    for (var item in headerValueTemp) {
                        /*jshint maxdepth:5*/
                        if (true) { // thanks jshint
                            this.addHeader(key, headerValueTemp[item]);
                        }
                    }
                } else {
                    this.addHeader(key, headerValueTemp);
                }
            }
        }
    };

    /**
     * Sets a new header or replaces an existing header with the same name.
     * @param {name} Header name
     * @param value Header value. The value must be of simple type (string, boolean or value).
     */
    this.setHeader = function(name, value) {
        if (!isSimpleType(value)) {
            // complex type detected instead of string - throw error
            logAndThrowError('Header value should be a simple type.', 'WLResourceRequest.setHeader');
        }

        for (var headerName in headers) {
            if (headerName.toLowerCase() === name.toLowerCase()) {
                delete headers[headerName];
            }
        }

        headers[name] = value;
    };

    /**
     * Adds a new header. If a header with the same name already exists, the header value will be added to the existing header. The name is
     * case insensitive.
     * @param {name} Header name
     * @param {value} Header value. The value must be of simple type (string, number or boolean).
     */
    this.addHeader = function(name, value) {
        if (typeof(value) === 'undefined' || value === null) {
            logAndThrowError('Header value should not be null or undefined.', 'WLResourceRequest.addHeader');
        }
        if (!isSimpleType(value)) {
            // complex type detected instead of string - throw error
            logAndThrowError('Header value should be a simple type.', 'WLResourceRequest.addHeader');
        }

        var header = __getFirstHeaderByNameNoCase(name);
        var existingHeaderName = header.name;
        var existingHeaderValue = header.value;
        if (existingHeaderValue === null) {
            headers[name] = value;
        } else {
            if (WL_.isArray(existingHeaderValue)) {
                for (var idx in existingHeaderValue) {
                    /*jshint maxdepth:4*/
                    if (existingHeaderValue[idx].toString() === value.toString()) {
                        return;
                    }
                }
                existingHeaderValue.push(value);
            } else {
                var array = [];
                array.push(existingHeaderValue);
                array.push(value);
                headers[existingHeaderName] = array;
            }
        }
    };

    function __getFirstHeaderByNameNoCase(name) {
        for (var headerName in headers) {
            if (headerName.toLowerCase() === name.toLowerCase()) {
                return {
                    name: headerName,
                    value: headers[headerName]
                };
            }
        }

        return {
            name: null,
            value: null
        };
    }

    /**
     * Returns request time out in milliseconds.
     */
    this.getTimeout = function() {
        return timeout;
    };

    /**
     * Sets request timeout. If timeout is not specified, then a default timeout will be used.
     * @param {requestTimeout} Request timeout in milliseconds.
     */
    this.setTimeout = function(requestTimeout) {
        timeout = requestTimeout;
    };

    /**
     * Sends the request to a server.
     * @param {content} Body content. It can be of simple type (like string), or object.
     * @returns Returns promise. Sample usage: <br>
     * var request = WLResourceRequest(url, method, timeout);<br>
     * request.send(content).then(<br>
     *  function(response) {// success flow}, <br>
     *  function(error) {// fail flow} <br>
     * );
     */
    this.send = function(content) {
        var contentString = '';

        if (typeof(content) !== 'undefined' && content !== null) {
            if (isSimpleType(content)){
                contentString = content.toString();
            } else {
                contentString = JSON.stringify(content);
                var contentTypeHeader = this.getHeader('Content-Type');

                if (!contentTypeHeader) {
                    this.addHeader('Content-Type', 'application/json');
                }
            }
        }

        return sendRequestAsync(contentString, 0, 0);
    };

    /**
     * Sends the request to a server.
     * @param {json} Body content as JSON object or string as a form data. The content type will be set to 'application/x-www-form-urlencoded'.
     * @returns Returns promise. Sample usage: <br>
     * var request = WLResourceRequest(url, method, timeout);<br>
     * request.send(json).then(<br>
     *  function(response) {// success flow}, <br>
     *  function(error) {// fail flow} <br>
     * );
     */
    this.sendFormParameters = function(json) {
        var contentString = encodeFormParameters(json);
        var content = this.getHeader('Content-Type');

        if (!content) {
            this.addHeader('Content-Type', 'application/x-www-form-urlencoded');
        }

        return sendRequestAsync(contentString, 0, 0);
    };

    function encodeFormParameters(json) {
        if (json === null || typeof(json) === 'undefined') {
            return '';
        }

        var result = '';

        if (isSimpleType(json)) {
            var params = json.split('&');
            for (var i = 0; i < params.length; i++) {
                var kv = params[i].split('=');
                if (kv.length === 0) {
                    continue;
                }

                if (kv.length === 1) {
                    result += encodeURIComponent(kv[0]);
                } else {
                    result += encodeURIComponent(kv[0]) + '=' + encodeURIComponent(kv[1]);
                }

                if (i < params.length - 1) {
                    result += '&';
                }
            }
            return result;
        } else {
            for (var key in json) {
                if (true) { // thanks jshint
                    var value = json[key];
                    /*jshint maxdepth:4*/
                    if (!isSimpleType(value)) {
                        logAndThrowError('Form value must be a simple type.', 'WLResourceRequest.sendFormParameters');
                    }

                    result += encodeURIComponent(key) + '=' + encodeURIComponent(value);
                    result += '&';
                }
            }

            if (result.length > 0 && result[result.length - 1] === '&') {
                result = result.substring(0, result.length - 1);
            }

            return result;
        }
    }

    function sendRequestAsync(contentString, attempt, conflictAttemptCounter) {
        var dfd = WLJQ.Deferred();

        buildRequestUrl()
            .then(
                function(serverUrl) {
                    var urlSplit;
                    var endOfUrlPath;
                    var arrayUrlPath;
                    var modifiedUrlPath;
                    var newUrl;

                    // Modify the URL to connect to a proxy for Preview
                    if (WL.StaticAppProps.ENVIRONMENT === WL.Environment.PREVIEW) {
                        urlSplit = serverUrl.split('/');
                        endOfUrlPath = String(urlSplit.slice(3));
                        arrayUrlPath = endOfUrlPath.split(',');
                        arrayUrlPath.splice(1, 0, 'api');
                        modifiedUrlPath = String(arrayUrlPath);
                        endOfUrlPath = modifiedUrlPath.replace(/,/g, '/');
                        newUrl = 'http://localhost:6015/' + endOfUrlPath;

                        if (newUrl.indexOf('windows/') > -1) {
                            newUrl = newUrl.replace('windows/', 'mfp/');
                        }

                        serverUrl = newUrl;
                    }

                    __send(serverUrl, contentString, attempt, conflictAttemptCounter).then(
                        function(response) {
                            WL.Logger._processAutomaticTrigger();
                            dfd.resolve(response);
                        },
                        function(error) {
                            dfd.reject(error);
                        }
                    );
                },
                function(error) {
                    dfd.reject(error);
                }
            );

        return dfd.promise();
    }

    var maxRequestAttempts = 4;

    function __send(serverUrl, contentString, attempt, conflictAttemptCounter) {
        var dfd = WLJQ.Deferred();
        if (WL.Client.getEnvironment() === WL.Env.ANDROID) {
            var parameters = {
                'url': serverUrl,
                'MAX_CONFLICT_ATTEMPTS': MAX_CONFLICT_ATTEMPTS,
                'headers': headers,
                'maxRequestAttempts': maxRequestAttempts,
                'method': method,
                'queryParameters': currentResourceRequest.getQueryParameters(),
                'timeout': timeout,
                'content': contentString
            };

            //Cordova.exec somehow converts null to "null".
            if (currentResourceRequest.scope !== null) {
                parameters.scope = currentResourceRequest.scope;
            }
            if (backendServiceName !== null) {
                parameters.backendServiceName = backendServiceName;
            }
            /*global cordova */
            cordova.exec(
                function(response) {
                    response = new WL.Response(response, null);
                    dfd.resolve(response);
                },
                function(response) {
                    dfd.reject(response);
                },
                'WLResourceRequestPlugin',
                'send', [parameters]
            );
        } else {
            if (!WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_OAUTH)) {
                var transport = {
                    status: 0,
                    responseJSON: {
                        errorCode: WL.ErrorCode.API_INVOCATION_FAILURE,
                        errorMsg: WL.ClientMessages.unsupportedEnvironment
                    }
                };
                var failResponse = new WL.Response(transport, null);
                dfd.reject(failResponse);
                return dfd;
            }

            // create WLNativeXHR or XMLHttpRequest
            var xhr = window.WLJSX.Ajax.getTransport();

            var queryString = buildQueryString();
            var finalUrl = queryString === null ? serverUrl : serverUrl + '?' + queryString;

            xhr.open(method, finalUrl, true);

            if (typeof(timeout) !== 'undefined') {
                xhr.timeout = timeout;
            }

            addRequestHeaders(xhr);
            xhr.onreadystatechange = function() {
                if (this.readyState === 4) {
                    var transport = this;
                    if (this.status === 0) {
                        var errorCode = this.wlFailureStatus !== 'undefined' ? this.wlFailureStatus : WL.ErrorCode.UNEXPECTED_ERROR;
                        // handle errors - timeout, unresponsive host and unexpected error
                        transport.status = 0;
                        transport.responseJSON = {
                            errorCode: errorCode,
                            errorMsg: this.statusText //WL.Utils.formatString(WL.ClientMessages.handleTimeOut, finalUrl)
                        };
                    }

                    var wlResponse = new WL.Response(this, null);

                    // WL.Response sets status to 200 if transport.status is 0 - set it back to 0.
                    if (this.status === 0) {
                        wlResponse.status = 0;
                    }

                    if (typeof(WLAuthorizationManager) !== 'undefined' && isAuthorizationRequired(transport) && (transport.status !== 409 && attempt < maxRequestAttempts || transport.status === 409 && conflictAttemptCounter < MAX_CONFLICT_ATTEMPTS)) {
                        processResponse(transport);
                    } else if (WL.Client.isGatewayResponse(wlResponse)) {
                        //In case of gateway response - clean access token in order to prevent infinite loop                   
                        WLAuthorizationManager.clearAccessToken(currentResourceRequest.scope ? currentResourceRequest.scope : '');
                        obtainAccessTokenAndSendRequest(currentResourceRequest.scope ? currentResourceRequest.scope : WLAuthorizationManager.DEFAULT_SCOPE);
                    } else if (this.status >= 200 && this.status <= 299) {
                        // any status in the 2xx range is considered a success
                        dfd.resolve(wlResponse);
                    } else {
                        // it's not OAuth error or number of attempts is exceeded; fail the request with last error, which will be propagated up
                        dfd.reject(wlResponse);
                    }
                }
            };

            var isAuthorizationRequired = function(transport) {
                if (isUndefinedOrNull(transport)) {
                    return false;
                }
                return WLAuthorizationManager.isAuthorizationRequired(transport.status, transport.getAllResponseHeaders());
            };

            var processResponse = function(transport) {
                // if status is 409 resend request and increment conflictAttemptCounter
                if (transport.status === 409) {
                    resendRequest(attempt, ++conflictAttemptCounter);
                } else if (transport.status === 403) {
                    currentResourceRequest.scope = WLAuthorizationManager.getResourceScope(transport.getAllResponseHeaders());
                    if (currentResourceRequest.scope !== null) {
                        WLAuthorizationManager.__cacheScopeByResource(transport, currentResourceRequest.scope).always(function() {
                            resendRequest(++attempt, conflictAttemptCounter);
                        });
                    }
                } else if (WLAuthorizationManager.__isInvalidToken(transport)) {
                    WLAuthorizationManager.clearAccessToken({
                        scope: currentResourceRequest.scope
                    }).always(function() {
                        resendRequest(++attempt, conflictAttemptCounter);
                    });
                } else {
                    // We got 401 we need cache the resource to empty scope so that next time the request will be sent with default access token.
                    WLAuthorizationManager.__cacheScopeByResource(transport, WLAuthorizationManager.DEFAULT_SCOPE).always(function() {
                        resendRequest(++attempt, conflictAttemptCounter);
                    });
                }
            };

            var resendRequest = function(attemptNumber, conflictAttemptCounterNumber) {
                sendRequestAsync(contentString, attemptNumber, conflictAttemptCounterNumber).then(
                    function(response) {
                        dfd.resolve(response);
                    },
                    function(error) {
                        dfd.reject(error);
                    });
            };

            if (typeof(WLAuthorizationManager) !== 'undefined' && WL.StaticAppProps.ENVIRONMENT !== WL.Environment.PREVIEW) {
                // If user provided scope for this resource use it, else get scope from cache.
                if (currentResourceRequest.scope !== null) {
                    obtainAccessTokenAndSendRequest(currentResourceRequest.scope);
                } else {
                    WLAuthorizationManager.__getCachedScopeByResource(xhr).always(
                        function(cachedScope) {
                            // In iOS - if no cache was found, we get an empty string here.
                            // The following request to obtainAccessToken will fail since an empty
                            // string as scope is not permitted.
                            // @@ofirbt - pay attention to this one
                            if(cachedScope === '')	{
                                cachedScope = WLAuthorizationManager.DEFAULT_SCOPE;
                            }
                            currentResourceRequest.scope = cachedScope;
                            obtainAccessTokenAndSendRequest(cachedScope);
                        });
                }
            } else {
                sendRequest();
            }
        }

        //TODO: Remove after new native architecture is ready.
        /*jshint latedef:false*/
        function obtainAccessTokenAndSendRequest(scope) {
            if (scope !== null) {
                WLAuthorizationManager.obtainAccessToken(scope).then(
                    function(accessToken) {
                        // Send request with accessToken as authorization header.
                        if (accessToken !== null && typeof(accessToken) !== 'undefined' && typeof(accessToken.asAuthorizationRequestHeader) !== 'undefined') {
                            xhr.setRequestHeader(WLAuthorizationManager.WL_AUTHORIZATION_HEADER, accessToken.asAuthorizationRequestHeader);
                        }
                        sendRequest();
                    },
                    function(error) {
                        if (error.status === 500) {
                            // if error status is 500 then it is necessary to delete resource to scope mapping.
                            // Because the scope mapping for this resource might have changed.
                            WLAuthorizationManager.__deleteCachedScopeByResource(xhr)
                                .always(function() {
                                    // Unable to retrieve accessToken, fail the request; the failure will be propagated up the chain
                                    currentResourceRequest.scope = null;
                                    dfd.reject(error);
                                });
                        } else {
                            dfd.reject(error);
                        }
                    });
            } else {
                sendRequest();
            }
        }

        //TODO: Remove after new native architecture is ready.
        /*jshint latedef:false*/
        function sendRequest() {
            xhr.send(method === 'GET' ? null : contentString, true);
        }

        return dfd.promise();
    }

    function buildRequestUrl() {
        var dfd = WLJQ.Deferred();
        if (url.indexOf('http:') >= 0 || url.indexOf('https:') >= 0) {
            /* Absolute URL - the backendServiceName needs a relative URL */
            if ( backendServiceName !== null){
                dfd.reject('The backendServiceName option can only be used with a relative URL ');
            }
            dfd.resolve(url);
        } else {
            WL.App.getServerUrl(
                function(serverUrl) {
                    if (WL.Client.getEnvironment() === WL.Environment.WINDOWS8 || WL.Client.getEnvironment() === WL.Environment.WINDOWS || WL.Client.getEnvironment() === WL.Environment.WINDOWSPHONE8) {
                        var index = serverUrl.indexOf('/apps/services');
                        if (index > -1) {
                            serverUrl = serverUrl.substr(0, index);
                            serverUrl = serverUrl + '/api';
                        }
                    }
                    if (backendServiceName !== null){
                        if (WL.Client.getEnvironment() === WL.Env.ANDROID) {
                                  serverUrl='/';
                        }else{
                        if (backendServiceName.startsWith('/')){
                            backendServiceName = backendServiceName.slice(1,backendServiceName.length);
                        }
                        serverUrl = serverUrl+ backendService + backendServiceName;
                        }
                    }
                    dfd.resolve(__buildUrl(serverUrl));
                },
                function(error) {
                    dfd.reject(error);
                }
            );
        }

        function __buildUrl(serverUrl) {
            if (serverUrl[serverUrl.length - 1] !== '/' && url[0] !== '/') {
                serverUrl += '/';
            } else if (serverUrl[serverUrl.length - 1] === '/' && url[0] === '/') {
                serverUrl = serverUrl.substring(0, serverUrl.length - 1);
            }
            console.log ('Using URL for request ' + (serverUrl + url));
            return serverUrl + url;
        }
        return dfd.promise();
    }

    function addRequestHeaders(xhr) {
        for (var headerName in headers) {
            if (true) { // thanks jshint
                var headerValue = headers[headerName];
                if (isSimpleType(headerValue)) {
                    xhr.setRequestHeader(headerName, headerValue.toString());
                } else {
                    var commaSeparatedHeader = headerValue[0];
                    /*jshint maxdepth:4*/
                    for (var i = 1; i < headerValue.length; i++) {
                        commaSeparatedHeader += ', ' + headerValue[i];
                    }
                    xhr.setRequestHeader(headerName, commaSeparatedHeader);
                }
            }
        }
    }

    function buildQueryString() {
        if (queryParameters === null || typeof(queryParameters) === 'undefined' || WLJQ.isEmptyObject(queryParameters)) {
            return null;
        }

        var queryString = '';
        for (var paramKey in queryParameters) {
            if (true) { // thanks jshint
                var values = queryParameters[paramKey];
                if (values === null || typeof(values) === 'undefined' || values.length === 0) {
                    queryString += '&' + paramKey;
                } else {
                    /*jshint maxdepth:6*/
                    for (var i = 0; i < values.length; i++) {
                        var paramValue = isSimpleType(values[i]) ? values[i] : JSON.stringify(values[i]);
                        if (paramValue === null || typeof(paramValue) === 'undefined') {
                            queryString += '&' + paramKey;
                        } else {
                            queryString += '&' + paramKey + '=' + encodeURIComponent(paramValue);
                        }
                    }
                }
            }
        }

        return queryString.substr(1);
    }

    function isSimpleType(value) {
        return (WL_.isString(value) || WL_.isNumber(value) || WL_.isBoolean(value));
    }

    function isArrayOfSimpleTypes(object) {
        for (var i = 0; i < object.length; i++) {
            if (!isSimpleType(object[i])) {
                return false;
            }
        }
        return true;
    }
}

WLResourceRequest.GET = 'GET';
WLResourceRequest.POST = 'POST';
WLResourceRequest.PUT = 'PUT';
WLResourceRequest.DELETE = 'DELETE';
WLResourceRequest.HEAD = 'HEAD';
WLResourceRequest.OPTIONS = 'OPTIONS';
WLResourceRequest.TRACE = 'TRACE';
WLResourceRequest.CONNECT = 'CONNECT';


/**
 * ================================================================= 
 * Source file taken from :: authenticityChallengeHandler.js
 * ================================================================= 
 */

/**
 * @license
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

// Creating a new challengeProcessor
var wl_authenticityChallengeHandler = WL.Client.createSecurityCheckChallengeHandler("appAuthenticity");
wl_authenticityChallengeHandler.handleChallenge = function(obj) {
    challenge = obj["challenge"];
    if (challenge != null && WL.EnvProfile.isEnabled(WL.EPField.SUPPORT_CHALLENGE)) {
        var array = challenge.split('+');
        var someArgs = array[1].split('-');
        challenge = array[0];
        WL.App.__hashData(challenge, someArgs, authenticityChallengeResponse);
    }

    function authenticityChallengeResponse(data) {
        // Android return the string itself while iOS return object with string
        resultData = WL.Utils.getCordovaPluginResponseObject(data, "hashResult");
        wl_authenticityChallengeHandler.submitChallengeAnswer({appAuthenticityResponse:resultData});
    }
};

wl_authenticityChallengeHandler.handleFailure = function(err) {
    WL.SimpleDialog.show(WL.ClientMessages.wlclientInitFailure, WL.ClientMessages.authFailure, [ {
        text : WL.ClientMessages.close,
        handler : function() {
        }
    } ]);
};


/**
 * ================================================================= 
 * Source file taken from :: directUpdateChallengeHandler.js
 * ================================================================= 
 */

/**
 * @license
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

var wl_directUpdateChallengeHandler = WL.Client.createSecurityCheckChallengeHandler("directUpdate");


wl_directUpdateChallengeHandler.handleChallenge = function(challenge) {

	this.logger = WL.Logger.create({pkg : "WL_DIRECT_UPDATE_CHALLENGE_HANDLER"});
	this.directUpdateChallange = challenge;

	if (WLJSX.Object.isUndefined(WL.__DirectUpdateManager) || !WLJSX.Object.isFunction(wl_directUpdateChallengeHandler.handleDirectUpdate)){
		this.logger.fatal("Can't find Direct update manager");
		wl_directUpdateChallengeHandler.cancel();
		return;
	}

	//input validation: should never happen
	if (WLJSX.Object.isUndefined(challenge.getCheckSum)
			&& (WLJSX.Object.isUndefined(challenge.unpackedSize)
					|| WLJSX.Object.isUndefined(challenge.packedSize)
					|| WLJSX.Object.isUndefined(challenge.directUpdateLink)
					|| WLJSX.Object.isUndefined(challenge.checksum))) {
		this.logger.error("Direct update challenge is invalid: " + challenge);
		wl_directUpdateChallengeHandler.cancel();
		return;
	}

	// this is the first challenge which asks the client to send its
	// applicationDetails
	if (!WLJSX.Object.isUndefined(challenge.getCheckSum)) {
		// if we got a challenge of {directupdate : { getCheckSum :true} answer
		// with app details

		var JSONResponse = {
			applicationDetails : {}
		};
		WL.__DirectUpdateManager.generateAppDetails(JSONResponse);
		wl_directUpdateChallengeHandler.submitChallengeAnswer(JSONResponse);
	} else {
		// this is the 2nd challenge which provides a downloadable link

		// Direct update Data
		var directUpdateData = {
				downloadSize : challenge.packedSize
		};

		// Direct update context
		var directUpdateContext = {
				start : wl_directUpdateChallengeHandler.__startDirectUpdateFunction,
				stop : WL.__DirectUpdateManager.stopUpdate
		};

		wl_directUpdateChallengeHandler.handleDirectUpdate(directUpdateData,directUpdateContext);
	}
};

// in case the user did not passed his listener we use the default one
wl_directUpdateChallengeHandler.__startDirectUpdateFunction = function(listener){

	// if listener undefined use default listener
	if (WLJSX.Object.isUndefined(listener)){
		listener = wl_directUpdateChallengeHandler.__defaultListener;
	}

	// if listener exists but methods are not functions
	if (!WLJSX.Object.isFunction(listener.onStart) || !WLJSX.Object.isFunction(listener.onProgress) || !WLJSX.Object.isFunction(listener.onFinish)){
		wl_directUpdateChallengeHandler.logger.fatal('Direct update aborted. listener must implement onStart, onProgress and onFinish functions');
		wl_directUpdateChallengeHandler.cancel();
		return;
	}


	WL.__DirectUpdateManager.startUpdate(wl_directUpdateChallengeHandler.directUpdateChallange, listener);
};

wl_directUpdateChallengeHandler.__defaultListener = {
		onStart: function(totalSize){
			wl_directUpdateChallengeHandler.logger.trace('defaultListener.onStart: totalSize=' + totalSize);
			cordova.exec(null,null,'WLDirectUpdatePlugin','showProgressDialog',[totalSize]);
		},
		onProgress: function(status,totalSize,completedSize){
			wl_directUpdateChallengeHandler.logger.trace('defaultListener.onProgress: status=' + status + '; totalSize' + totalSize + '; completedSize' + completedSize);
			cordova.exec(null,null,'WLDirectUpdatePlugin','updateProgressDialog',[status, totalSize, completedSize]);
		},
		onFinish: function(status){
			wl_directUpdateChallengeHandler.logger.trace('defaultListener.onFinish: status=' + status);

			//if the status is already running we do not hide the progress dialog, because it will hide the first dialog
			if (status != 'FAILURE_ALREADY_IN_PROGRESS'){
				wl_directUpdateChallengeHandler.logger.trace('defaultListener.onFinish: hideProgressDialog');
				cordova.exec(null,null,'WLDirectUpdatePlugin','hideProgressDialog',[]);
			}

			if (status == 'SUCCESS'){
				wl_directUpdateChallengeHandler.logger.trace('defaultListener.onFinish: WL.Client.reloadApp()');
				wl_directUpdateChallengeHandler.cancel();
				WL.Client.reloadApp();
			}

			else if (status=='CANCELED')
			{

				wl_directUpdateChallengeHandler.cancel();
			}

			else{
				WL.SimpleDialog.show(WL.ClientMessages.directUpdateErrorTitle, WL.ClientMessages.directUpdateErrorMessage, [ {
			        text : WL.ClientMessages.reload,
			        handler : function(){
								wl_directUpdateChallengeHandler.cancel();
								WL.Client.reloadApp();
							}
			    }, {
			        text : WL.ClientMessages.close,
			        handler : function () {
			        	WL.App.hideSplashScreen();
			        	wl_directUpdateChallengeHandler.cancel();
			        }
			    } ]);
			}
		}
};

wl_directUpdateChallengeHandler.handleDirectUpdate = function(directUpdateData, directUpdateContext){

	var UPDATE_SIZE_KB_THRESHOLD = 524288; // exactly 0.5MB
	var directUpdateMsg;
	if (directUpdateData.downloadSize > UPDATE_SIZE_KB_THRESHOLD) {
		var downloadSizeInMB = (directUpdateData.downloadSize / 1048576).toFixed(1).replace(".", WL.App.getDecimalSeparator());
		directUpdateMsg = WL.Utils.formatString(WL.ClientMessages.directUpdateNotificationMessage, downloadSizeInMB);
	}
	else {
		var downloadSizeInKB = (directUpdateData.downloadSize / 1024).toFixed(0);
		directUpdateMsg = WL.Utils.formatString(WL.ClientMessages.directUpdateNotificationMessageKilobytes, downloadSizeInKB);
	}
	WL.SimpleDialog.show(WL.ClientMessages.directUpdateNotificationTitle, directUpdateMsg, [{
		text : WL.ClientMessages.update,
		handler : function() {
			directUpdateContext.start();
		}
	}]);

};


/**
 * ================================================================= 
 * Source file taken from :: directUpdateManager.js
 * ================================================================= 
 */

WL.__DirectUpdateManager = (function() {

	var logger = WL.Logger.create({pkg : "WL_DIRECT_UPDATE_MANAGER"});

	function generateAppDetails(headerJSON) {
		var checksumParameter = (WL_CHECKSUM.checksum) ? WL_CHECKSUM.checksum : "";

		if (checksumParameter !== null) {
			headerJSON.applicationDetails.checksum = checksumParameter;
		}

		//check if previous direct update was marked with integrity failure
		if (window.localStorage.getItem('DirectUpdateIntegrityFailure') === 'true'){
			headerJSON.applicationDetails.integrityFailure = true;
			window.localStorage.removeItem('DirectUpdateIntegrityFailure');
		}

		var platformVersionParameter = (WL.StaticAppProps.WORKLIGHT_PLATFORM_VERSION) ? WL.StaticAppProps.WORKLIGHT_PLATFORM_VERSION : '';
	    var nativeVersionParameter = (WL.StaticAppProps.WORKLIGHT_NATIVE_VERSION) ? WL.StaticAppProps.WORKLIGHT_NATIVE_VERSION : '';

	    headerJSON.applicationDetails.platformVersion =  platformVersionParameter;
	    headerJSON.applicationDetails.nativeChecksum  = nativeVersionParameter;

		return headerJSON;
	}

	function startUpdate(data, listener) {
		var _this = this;

		cordova.exec(onDirectUpdateSuccess, function(result){
			onDirectUpdateFailure.call(_this, result);
		},
				"WLDirectUpdatePlugin", "start", [ data.checksum,data.packedSize, data.unpackedSize,data.directUpdateLink ]);

		function onDirectUpdateSuccess(result) {
			logger.trace('DirectUpdateManager.startUpdate.onDirectUpdateSuccess: ' + JSON.stringify(result));
			switch (result.operation) {

			case 'start':
				listener.onStart(result.totalSize);
				break;

			case 'progress':
				listener.onProgress(result.status, result.totalSize,result.completedSize);
				break;

			case 'finish':
				if (result.status == 'FAILURE_INTEGRITY' && window.localStorage != 'undefined'){
					window.localStorage.setItem('DirectUpdateIntegrityFailure', 'true');
				}
				listener.onFinish(result.status);
				break;
			}
		}

		function onDirectUpdateFailure(result) {
			logger.error('startUpdate error ' + result);
			wl_directUpdateChallengeHandler.cancel();
		}
	}

	function stopUpdate(){
		logger.trace("Stop Direct Update");
		cordova.exec(null, null, "WLDirectUpdatePlugin", "stop", []);
	}

	function reloadApp(){
		logger.trace("Reload application");
		WL.Client.reloadApp();
	}

	return {
		generateAppDetails : generateAppDetails,
		startUpdate : startUpdate,
		stopUpdate : stopUpdate,
		reloadApp : reloadApp
	};

})();


/**
 * ================================================================= 
 * Source file taken from :: wlgap.android.js
 * ================================================================= 
 */

/**
 * @license
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

/* Copyright (C) Worklight Ltd. 2006-2012.  All rights reserved. */
/**
 * Native pages API for the android environment.
 */

// Overriding cordova's stringify because its errornous.
cordova.stringify = WLJSX.Object.toJSON;
window.isReloading = false;

document.addEventListener('resume', function() {
    dispatchForgroundEvent();
});



function dispatchForgroundEvent() {
    if (!window.isReloading) {
        var e = document.createEvent('Events');
        e.initEvent('foreground', false, false);
        document.dispatchEvent(e);
    }
};

// Overrides the default openURL method.
WL.App.__openURL = function(url, target, options) {
    cordova.exec(null, null, 'WLApp', "openURL", [ url ]);
};

WL.Client.reloadApp = function() {
    window.isReloading = true;
    cordova.exec(null, null, 'WLApp', 'reloadApp', []);
};

WL.App.getScreenHeight = function(){
	return WL.Client.__getScreenHeight();
};

WL.App.getScreenWidth = function(){
	return WL.Client.__getScreenWidth();
};

WL.App.getScreenSize = function(callback) {
    cordova.exec(callback, callback, 'WLApp', "getScreenSize", []);
};

WL.App.getServerUrl = function(successCallback, failCallback) {
	cordova.exec(successCallback, failCallback, 'WLApp', "getServerUrl", []);
};

WL.App.setServerUrl = function(url, successCallback, failCallback) {
	//run JS resetServerContext only if native resetServerContext was successful
	var callback = function (result){
		WL.App.resetServerContext();
		successCallback(result);
	}
	cordova.exec(callback, failCallback, 'WLApp', "setServerUrl", [url]);
};

WL.App.resetDeviceID = function(successCallback, failCallback) {
    cordova.exec(successCallback, failCallback, 'WLApp', "resetDeviceID", []);
};

WL.App.setDeviceID = function(uuid,successCallback, failCallback) {
    cordova.exec(successCallback, failCallback, 'WLApp', "setDeviceID", [uuid]);
};

WL.App.resetServerContext = function() {
	//reset challenge handler
	for (var processorRealm in WL.Client.__chMap) {
		if (Object.prototype.hasOwnProperty.call(WL.Client.__chMap, processorRealm)) {
			var handler = WL.Client.__chMap[processorRealm];
			handler.requestWaitingList = [];
			handler.activeRequest = null;
		}
	}

	//remove cached sessionID
	WLAuthorizationManager.__cachedWlSessionId = null;
};

//Takes: key, options OR key, successCallback, failCallback
WL.App.readUserPref = function(key, options) {

    if (typeof options === "object" &&
        typeof options.onSuccess === "function" &&
        typeof options.onFailure === "function") {

        cordova.exec(options.onSuccess,options.onFailure, 'WLApp', 'readUserPref', [ key ]);
        
        return;
    }

    var successCallback = (typeof options === 'function') ? options : function () {},
    	failCallback = arguments[2] || function() {};
    cordova.exec(successCallback, failCallback, 'WLApp', 'readUserPref', [ key ]);
};

WL.App.writeUserPref = function(key, value) {
    cordova.exec(null, null, 'WLApp', 'writeUserPref', [ key, value ]);
};

WL.App.getInitParameters = function(parameters, successCallback, failCallback) {
    return cordova.exec(successCallback, failCallback, 'WLApp', "getInitParameters", [ parameters ]);
};

function setWLUrl(serverURL) {
    WL.StaticAppProps.APP_SERVICES_URL = serverURL + WL.StaticAppProps.POSTFIX_APP_SERVICES_URL;
    WL.StaticAppProps.APP_SERVICES_RELATIVE_URL = WL.StaticAppProps.POSTFIX_APP_SERVICES_URL;
    
    WL.StaticAppProps.WORKLIGHT_ROOT_URL = serverURL + WL.StaticAppProps.POSTFIX_WORKLIGHT_ROOT_URL;
    WL.StaticAppProps.WORKLIGHT_RELATIVE_URL = WL.StaticAppProps.POSTFIX_WORKLIGHT_ROOT_URL;

    WL.StaticAppProps.WORKLIGHT_BASE_URL = serverURL;
};

WL.App.__setWLServerAddress = function(callback) {
	cordova.exec(defaultServerQueryCallBack, defaultServerQueryCallBack, 'WLApp', 'readUserPref', [ "WLDefaultServerURL" ]);

	function defaultServerQueryCallBack(result) {
    	var defaultServerURL = result;
    	cordova.exec(function(result){
    		var serverURL = result;
    		if (serverURL && WL.StaticAppProps.APP_SERVICES_URL != serverURL + WL.StaticAppProps.POSTFIX_APP_SERVICES_URL) {
    	        setWLUrl(serverURL);
    	    } else {
    	        setWLUrl(defaultServerURL);
    	    }
    	    callback();
    	}, null, 'WLApp', 'readUserPref', [ "WLServerURL" ]);
	
	};
};

__WLNativePage = function() {

    var __nativePageCallback = null;

    /**
     * @deprecated Since version 8.0
     * Causes the entire application screen visible to the user, to be switched
     * by a native display.
     * 
     * @param className
     *            {string} - the name of the native class.
     * @param callback
     *            {function} - a function object that will be called when the
     *            native page switches back to the WebView. This function will
     *            be passed a single object (JSON) parameter when invoked.
     * @param data
     *            (optional) {object} - a JSON object that will be sent to the
     *            native class. The data must be single dimensioned
     */
    this.show = function(className, callback, data) {
        if (arguments.length <= 2) {
            WL.Validators.validateMinimumArguments(arguments, 2, "WL.NativePage.show");
            WL.Validators.validateArguments([ 'string', 'function' ], arguments, 'WL.NativePage.show');
        } else {
            WL.Validators.validateArguments([ 'string', 'function', 'object' ], arguments, 'WL.NativePage.show');
            WL.Validators.validateAllOptionTypes([ 'string', 'number', WL.Validators.validateStringOrNull, 'boolean' ], data,
                    'WL.NativePage.show');
        }

        // prevent calling the show twice until it the call back done
        if (__nativePageCallback === null) {
            WL.App.addActionReceiver ("NativePageClose", this.actionReceiver);
            __nativePageCallback = callback;
            cordova.exec(null, null, "NativePage", "show", [ this._getCookiesForNative(), className, data ]);
        } else {
            throw new Error("A native page is already loaded. Cannot call another native page.");
        }
    };

    /**
     * Internal use, should never be called directly - called from the native
     * android activity java code.
     * 
     * @param data
     *            JSON object with data sent form the main native android
     *            activity
     * @return
     */
    this.onNativePageClose = function(data) {
        var callback = __nativePageCallback;

        // allow calling show function again
        __nativePageCallback = null;
        callback(data);
    };

    /**
     * Internal use. create a text representation of the session cookies, for
     * use of native Android code when sending requests for the IBM MobileFirst Platform server
     */
    this._getCookiesForNative = function() {
        var cookies = JSON.stringify(WL.CookieManager.createCookieHeaders().Cookie);
        return (typeof cookies != "undefined") ? cookies.substring(1, cookies.length - 2) : "";
    };
    this.actionReceiver = function (received){
          if (received.action === "onNativePageClose"){
              WL.NativePage.onNativePageClose(received.data);
          }
    };
};

__WL.prototype.NativePage = new __WLNativePage;
WL.NativePage = new __WLNativePage;




// Disable the prompt on android preview because cordova use promt for debugging
if (WL.StaticAppProps.ENVIRONMENT == WL.Env.PREVIEW) {
    prompt = function() {
    };
}


WL.App.__copyToClipboard = function(text, callback) {
    cordova.exec(callback, callback, 'WLApp', "copyToClipboard", [ text ]);
};

WL.Device.getNetworkInfo = function(callback) {
    WL.Validators.validateArguments([ 'function' ], arguments, 'WL.Device.getNetworkInfo');
    cordova.exec(callback, callback, "NetworkDetector", "getNetworkInfo", []);
};


/**
 * Hash string on native and return it as callback
 * 
 * @param data
 * @param callback
 */
WL.App.__hashData = function(data, someArgs, callback) {
    cordova.exec(function(data) {
        callback(data);
    }, function() {
        WL.Logger.error("Problem to get hash from WL.App.__hashData for value" + data);
    }, "SecurityPlugin", "hashData", [ data, someArgs ]);
};

/**
 * Call for generating secure random number and return it as callback
 * 
 * @param successCallback
 * @param failureCallback
 */
WL.App.__SecureRandom = function(successCallback, failureCallback){
    cordova.exec(function(data){
        successCallback(data);
        }, failureCallback, 'WLApp', 'secureRandom', [32]);
    };

WL.DeviceAuth.__getDeviceUUID = function(successCallback, failureCallback) {
	cordova.exec(successCallback, failureCallback, "DeviceAuth", "getDeviceUUID", []);
};

WL.Client.__onWlInitComplete = function() {
};

/**
 * Send an action to the native code. The action will be processed immediately, if the target receiver has been registered. 
 * Otherwise, the action will be stored in the cache and processed as soon as the target receiver becomes available (registered).
 * @param action - a string that identifies target receivers; all receivers registered with the specified action will receive the message.
 * @param data - an optional data object to be passed to target receivers along with action;   
 */
WL.App.sendActionToNative = function(action, data, tag) {
	WL.Validators.validateArguments([ 'string', WL.Validators.validateObjectOrNull, WL.Validators.validateStringOrNull], arguments, 'WL.App.sendActionToNative');
    cordova.exec(null, null, "WLActionSenderPlugin", "sendActionToNative", [action, data, tag]);
}

/**
 * Registers an action receiver. In JavaScript a receiver should be implemented as a callback that can receive an object.
 * @param id - a string that identifies the receiver. This string will be specified in the native code when sending notifications to JavaScript.
 * @param callback - implementation of receiver. This callback will be called when an action identified by "id" is sent from the native code.
 */

WL.App.addActionReceiver = function (id, callback, tag) {
	WL.Validators.validateArguments([ 'string', 'function', WL.Validators.validateStringOrNull], arguments, 'WL.App.addActionReceiver');
    cordova.exec(callback, null, "WLActionSenderPlugin", "addActionReceiver", [id, tag]);
}

/**
 * Removes (unregisters) an action receiver. All further messages addressed to this receiver will be placed to the cache. The pending
 * messages will be delivered as soon as the receiver is registered again with the same id.
 * @param id - a string that identifies the receiver to be unregistered.
 */
WL.App.removeActionReceiver = function (id) {
	WL.Validators.validateArguments([ 'string' ], arguments, 'WL.App.removeActionReceiver');
    cordova.exec(null, null, "WLActionSenderPlugin", "removeActionReceiver", [id]);
}


/**
 * ================================================================= 
 * Source file taken from :: splashscreen.js
 * ================================================================= 
 */

/**
 * @license
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

/* Copyright (C) Worklight Ltd. 2006-2012.  All rights reserved. */

/**
 * splash.js operates a native splash screen on Android and iOS devices.
 */
WL.App.showSplashScreen = function() {
	cordova.exec(null, function(error) {
		 WL.Logger.debug(error);
	 }, 
	 "WLSplashScreen", "show", []);  
};

WL.App.hideSplashScreen = function() {
	cordova.exec(null, function(error) {
		 WL.Logger.debug(error);
	 }, 
	 "WLSplashScreen", "hide", []);
};


/**
 * ================================================================= 
 * Source file taken from :: wlnativexhr.js
 * ================================================================= 
 */

/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/*globals WL, cordova*/

(function(window) {

  /*jshint strict:false*/

  function WLNativeXHR() {
    var logger = WL.Logger.create({
      pkg: 'WLNativeXHR'
    });
    logger.trace('Constructing');

    // Request methods
    /*jshint maxparams:5, unused:false*/
    this.open = function(method, url, async, user, password) {};
    this.abort = function(){};
    this.setRequestHeader = function(headerName, headerValue) {};
    this.timeout = 60000; // default timeout for hybrid requests is 1 min.
    this.send = function(data) {};
    this.onreadystatechange = function() {};

    // Response methods
    this.status = 0;
    this.statusText = '';
    this.response = '';
    this.responseText = '';
    this.readyState = 0;
    this.wlFailureStatus = '';
    this.getResponseHeader = function(headerName) {};
    this.getAllResponseHeaders = function() {};

    // Internal properties
    var requestOptions = {
      url: null,
      method: null,
      async: true,
      headers: {},
      isResourceRequest: false
    };

    var responseHeaders = {};

    function onreadystatechangefunc() {
      logger.trace('onreadystatechangefunc');
    }

    this.open = function(method, url, async, user, password) {
      logger.trace('open', 'method', method, 'url', url);
      requestOptions.method = method;
      requestOptions.url = url;
      requestOptions.async = async;
      this.requestOptions = requestOptions;
    };

    this.setRequestHeader = function(headerName, headerValue) {
      logger.trace('setRequestHeader', 'name', headerName, 'value', headerValue);
      requestOptions.headers[headerName] = headerValue;
    };

    this.send = function(body, isResourceRequest) {
      logger.trace('send');
      requestOptions.body = body || '';
      requestOptions.timeout = this.timeout;

      if (requestOptions.method === null && typeof(method) === 'undefined') {
        requestOptions.method = body === null ? 'get' : 'post';
      }

      if (typeof(isResourceRequest) !== 'undefined') {
        requestOptions.isResourceRequest = isResourceRequest;
      }

      var callback = (function(context) {
        return function(responseData) {
          // XXX: Do not do log this! There is a risk of logging sensitive customer data.
          // logger.trace('callback', responseData);
          context.status = responseData.status;
          context.statusText = responseData.statusText;
          context.response = responseData.responseText;
          context.responseText = responseData.responseText;
          context.readyState = 4; // conforms to XHR protocol; state 4 means that the request has finished
          responseHeaders = responseData.headers;
          context.wlFailureStatus = responseData.wlFailureStatus;
          context.onreadystatechange();
        };
      }(this));

      this.__send(callback, requestOptions);
    };

    this.__send = function(callback, requestOptions) {
      cordova.exec(callback, callback, 'WLNativeXHRPlugin', 'send', [requestOptions]);
    };

    this.getResponseHeader = function(headerName) {
      //case insensitive search
      for (var key in responseHeaders) {
        if (key.toLowerCase() === headerName.toLowerCase()) {
          return responseHeaders[key];
        }
      }
      return null;
    };

    this.getAllResponseHeaders = function() {
      var headersText = '';
      for (var headerName in responseHeaders) {
        if (true) { // thanks jshint
          var headerValue = responseHeaders[headerName];
          headersText += headerName + ': ' + headerValue + '\n';
        }
      }
      return headersText;
    };

  }

  window.WLNativeXHR = WLNativeXHR;

}(window));

/**
 * ================================================================= 
 * Source file taken from :: wlauthorizationmanager.js
 * ================================================================= 
 */

/*
Licensed Materials - Property of IBM

(C) Copyright 2015 IBM Corp.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/*globals WL, WLJQ, WLJSX, cordova, WLAuthorizationManager*/

window.WLAuthorizationManager = (function () {

  /*jshint strict:false, maxparams:4*/

  var WL_AUTHORIZATION_HEADER = 'Authorization';
  var PARAM_CLIENT_ID_KEY = 'client_id';
  var PARAM_SCOPE_KEY = 'scope';
  var INVALID_CLIENT_ERROR = 'INVALID_CLIENT_ID';
  var AUTHORIZATION_MANAGER_PLUGIN_NAME = 'WLAuthorizationManagerPlugin';
  var CHALLENGE_RESPONSE_KEY = 'challengeResponse';
  var WWW_AUTHENTICATE_HEADER = 'WWW-Authenticate';
  var MFP_CONFLICT_HEADER = 'MFP-Conflict';
  var LOGOUT_ERROR_MSG = 'Cannot logout while authorization request is in progress.';
  var LOGIN_ALREADY_IN_PROCESS = 'Login already in process.';
  var DEFAULT_SCOPE = 'RegisteredClient';
  var REMOTE_DISABLE_REALM = 'wl_remoteDisableRealm';
  var loginTimeout;
  var MIN_LOGIN_TIMEOUT = 5*1000;

  // Store the server clock to be synchronize with the server time
  var SERVER_RELATIVE_TIME = 0;
  var authorizationAlreadyInProgress = false;

  var __getCachedScopeByResource = function (request) {
    var dfd = WLJQ.Deferred();
    cordova.exec(
      function (scope) {
        dfd.resolve(scope);
      },
      function (error) {
        WL.Logger.debug('getScopeByResource failed: ' + JSON.stringify(error));
        dfd.reject(new WL.Response(error, null));
      },
      AUTHORIZATION_MANAGER_PLUGIN_NAME, 'getCachedScopeByResource', [request]
    );

    return dfd.promise();
  };

  var __deleteCachedScopeByResource = function (xhr) {
    var dfd = WLJQ.Deferred();
    cordova.exec(
        function () {
          dfd.resolve();
        },
        function (){},
        AUTHORIZATION_MANAGER_PLUGIN_NAME, 'deleteCachedScopeByResource', [xhr]
    );

    return dfd.promise();
  };

  var __getCachedAccessToken = function (scope) {
    var dfd = WLJQ.Deferred();
    cordova.exec(
      function (data) {
        dfd.resolve(data);
      },
      function (error) {
        WL.Logger.debug('getCachedAccessToken for scope ' + scope + ' failed: ' + JSON.stringify(error));
        dfd.reject(new WL.Response(error, null));
      },
      AUTHORIZATION_MANAGER_PLUGIN_NAME, 'getCachedAccessToken', [scope]
    );

    return dfd.promise();
  };

  var clearAccessToken = function (accessToken) {
    var dfd = WLJQ.Deferred();
    cordova.exec(
      dfd.resolve,
      function (error) {
        WL.Logger.error('WLAuthorizationManager.clearAccessToken failed with error: ' + error);
        dfd.reject(error);
      },
      AUTHORIZATION_MANAGER_PLUGIN_NAME, 'clearAccessToken', [accessToken.scope]
    );

    return dfd.promise();
  };

  var __getAuthorizationScope = function (responseAuthenticationHeader) {
    if (!__isUndefinedOrNull(responseAuthenticationHeader)) {
      var headerParts = responseAuthenticationHeader.split(',');
      for (var i = 0; i < headerParts.length; i++) {
        var headerElement = headerParts[i];
        if (headerElement.indexOf('scope=') >= 0) {
          var scope = headerElement.split('=')[1].replace(/\"/g, '');
          return scope;
        }
      }
    }

    return null;
  };

  var obtainAuthHeaderCallbacks = [];
  /**
   * Obtains authorization header for specified scope.
   * @param scope Specifies the scope to obtain an authorization header for. Can be null or undefined.
   * @returns A promise object that should be used to receive the authorization header asynchronously. The header is send as a string
   * Example:
   * WLAuthorizationManager.obtainAccessToken(scope)
   * .then (
   *    function(header) {
   *      // success flow with the header
   *    },
   *    function(error) {
   *      // failure flow
   *    }
   *   )
   * };
   */
  var obtainAccessToken = function (scope) {
    var dfd = WLJQ.Deferred();
    if(WL.Client.getEnvironment() === WL.Env.ANDROID){
        cordova.exec(function(accessToken){dfd.resolve(accessToken);},function(response){dfd.reject(response);},AUTHORIZATION_MANAGER_PLUGIN_NAME,'obtainAccessToken',[scope]);
     } else{
        if (__isUndefinedOrNull(scope)) {
          scope = DEFAULT_SCOPE;
        }
        scope = sortScopeAlphabetically(scope);
        try {
          WLAuthorizationManager.__getCachedAccessToken(scope)
            .then(
              function (accessToken) {
                if (!__isUndefinedOrNull(accessToken) && typeof (accessToken.asAuthorizationRequestHeader) !== 'undefined') {
                  dfd.resolve(accessToken);
                } else {
                  // we don't have cached accessToken, continue as usual.

                  // obtainAuthHeaderCallbacks is an array of this kind objects; "clientId" will be updated in case of "unknown client" error
                  // the "scope" identifies the current "deferred" object
                  var callbackObj = {
                    clientId: null,
                    scope: scope,
                    deferred: dfd
                  };

                  obtainAuthHeaderCallbacks.push(callbackObj);

                  // If there is authorization process in progress, put incoming requests to queue
                  if (isAuthorizationInProgress()) {
                    return dfd.promise();
                  }

                  // get cached client id, register/reregister client if needed
                  WLAuthorizationManager.__getOrCreateClientId()
                    .then(
                      function (clientId) {
                        startAuthorizationProcess(clientId, scope);
                      },
                      function (error) {
                        // in case of error call all callbacks for specified scope with returned error
                        rejectAllCallbacks(error);
                      }
                    );
                }
              },
              function (e) {
                //we shouldn't get here
                processObtainAccessTokenCallbacks(null, scope, JSON.stringify(e), false);
              });
        } catch (e) {
          processObtainAccessTokenCallbacks(null, scope, JSON.stringify(e), false);
        }

     }

    return dfd.promise();
  };

  // this flag tells whether we have handled the invalid client error to prevent infinite loop
  var invalidClientReceived = false;

  function startAuthorizationProcess(clientId, scope) {
    // invoke authorization request with specified clientId and scope
    invokePreAuthorizationRequest(clientId, scope, null)
      .then(
        function () {
          // On preAuth success continue to authorization end point
          WLAuthorizationManager.__updateServerRelativeTime().always(
            function () {
              WLAuthorizationManager.__invokeAuthorizationRequestForScope(scope).then(
                function (accessToken) {
                  // authorization request succeeded, notify the callbacks in queue
                  processObtainAccessTokenCallbacks(clientId, scope, accessToken, true);
                },
                function (error) {
                  onAuthorizationProcessFailure(new WL.Response(error), scope, clientId, { retryFunction: startAuthorizationProcess });
                });
            });

        },
        function (error) {
          onAuthorizationProcessFailure(error, scope, clientId, {
            retryFunction: startAuthorizationProcess
          });
        }
      );
  }

  function isUnknownClientError(error) {
    if (!__isUndefinedOrNull(error) && typeof (error.status) !== 'undefined' &&
      error.status === 400 && !__isUndefinedOrNull(error.responseJSON) &&
      /*jshint camelcase:false*/
      error.responseJSON.errorCode === INVALID_CLIENT_ERROR) {
      return true;
    }

    return false;
  }

  function processObtainAccessTokenCallbacks(clientId, scope, response, isSuccess) {
    var indexesToRemove = [];
    var objectsToNotify = [];

    // loop over callbacks in queue and notify those with specified scope; store appropriate indexes for later removal
    for (var i = 0; i < obtainAuthHeaderCallbacks.length; i++) {
      var callbackObj = obtainAuthHeaderCallbacks[i];
      if (scope === callbackObj.scope) {
        objectsToNotify.push(callbackObj);
        indexesToRemove.push(i);
      }
    }

    // remove processed callbacks
    for (var j = indexesToRemove.length - 1; j >= 0; j--) {
      obtainAuthHeaderCallbacks.splice(indexesToRemove[j], 1);
    }

    // if there is at least one object in the queue, send auth request for its scope
    if (obtainAuthHeaderCallbacks.length > 0) {
      var realClientId = obtainAuthHeaderCallbacks[0].clientId !== null ? obtainAuthHeaderCallbacks[0].clientId : clientId;
      
      if(!realClientId){
          WL.Logger.debug('Client Id is null , need to retrieve from native sdk');
          WLAuthorizationManager.__getOrCreateClientId().then(
            function (nativeClientId) {
                WL.Logger.debug('start authorization using: ' + nativeClientId + 'scope' + obtainAuthHeaderCallbacks[0].scope);
                startAuthorizationProcess(nativeClientId, obtainAuthHeaderCallbacks[0].scope);
              },
              function (error) {
                WL.Logger.debug('cannot retrieve client id from native sdk ' + error);
              });
      }else{
        WL.Logger.debug( 'start authorization using: ' + realClientId + 'scope' + obtainAuthHeaderCallbacks[0].scope);
        startAuthorizationProcess(realClientId, obtainAuthHeaderCallbacks[0].scope);
      }
    }

    // notify objects. This must be done after splice, because it could be that the code being notified
    // is supposed to send other requests requiring authorization. It means that the callback array
    // must be cleared before notifications are sent.
    for (var k = 0; k < objectsToNotify.length; k++) {
      isSuccess ? objectsToNotify[k].deferred.resolve(response) : objectsToNotify[k].deferred.reject(response);
    }
  }

  function rejectAllCallbacks(error) {
    var objectsToNotify = obtainAuthHeaderCallbacks.slice();
    obtainAuthHeaderCallbacks = [];
    authorizationAlreadyInProgress = false;
    // this method is called upon unrecoverable error; reject all and clear the queue
    for (var n = 0; n < objectsToNotify.length; n++) {
      objectsToNotify[n].deferred.reject(error);
    }
  }

  function updateClientIds(newClientId) {
    // update all callback objects with the new client id; called after processing of "unknown client', when the new
    // client id has been received
    for (var i = 0; i < obtainAuthHeaderCallbacks.length; i++) {
      obtainAuthHeaderCallbacks[i].clientId = newClientId;
    }
  }

  var clientInstanceIdCallbacks = [];

  function processClientInstanceCallbacks(response, isSuccess) {
    var objectsToNotify = clientInstanceIdCallbacks.slice();
    clientInstanceIdCallbacks = [];

    for (var i = 0; i < objectsToNotify.length; i++) {
      isSuccess ? objectsToNotify[i].resolve(response) : objectsToNotify[i].reject(response);
    }

  }

  // send a request using WL.Request to preAuthorization end point with specified clientId and scope
  function invokePreAuthorizationRequest(clientId, scope, credentials) {
    var dfd = WLJQ.Deferred();
    var request = null;
    var requestOptions = createCallbacksForPreAuth(dfd);
    requestOptions.parameters[PARAM_CLIENT_ID_KEY] = clientId;

    if (!__isUndefinedOrNull(scope)) {
      requestOptions.parameters[PARAM_SCOPE_KEY] = scope;
    }
    // For login requests
    if (!__isUndefinedOrNull(credentials)) {
      var challengeResponse = {};
      challengeResponse[scope] = credentials;
      requestOptions.parameters[CHALLENGE_RESPONSE_KEY] = challengeResponse;
      if(!__isUndefinedOrNull(loginTimeout))
      {
        requestOptions.timeout = loginTimeout;
      }
    }

    WLAuthorizationManager.__getWlServerUrl().then(
      function (serverUrl) {
        if (serverUrl[serverUrl.length - 1] !== '/') {
          serverUrl += '/';
        }
        request = new WLJSX.Ajax.WLRequest(serverUrl + 'preauth/v1/preauthorize', requestOptions);
      },
      function (error) {
        WL.Logger.debug('getWlServerUrl failed with error: ' + JSON.stringify(error));
        dfd.reject(error);
      }
    );

    return dfd.promise();
  }

  var createCallbacksForPreAuth = function (preAuthCallbackDfd) {
    var requestOptions = {
      method: 'POST',
      parameters: {},
      onSuccess: function (response) {
        preAuthCallbackDfd.resolve(response);
      },
      onFailure: function (response) {
        if (!__isUndefinedOrNull(response)) {
          WL.Logger.debug('Authorization request failed with response: ' + response.responseText);
        }
        preAuthCallbackDfd.reject(new WL.Response(response));
      },
      onAuthRequestFailure: function (response) {
        preAuthCallbackDfd.reject(response);
      },
      onAuthException: function (response, ex) {
        var transport = {
          status: 500,
          responseJSON: {
            errorCode: WL.ErrorCode.API_INVOCATION_FAILURE,
            errorMsg: ex.message
          }
        };
        var failResponse = new WL.Response(transport, null);
        preAuthCallbackDfd.reject(failResponse);
      },
      optionalHeaders: {}
    };
    return requestOptions;
  };


  var __getClientIdOrInvokeRegistration = function () {
    var dfd = WLJQ.Deferred();
    cordova.exec(
      function (data) {
        dfd.resolve(data);
      },
      function (error) {
        dfd.reject(new WL.Response(error, null));
      },
      AUTHORIZATION_MANAGER_PLUGIN_NAME, 'getClientIdOrInvokeRegistration', []
    );
    return dfd.promise();
  };


  var __getOrCreateClientId = function () {
    var dfd = WLJQ.Deferred();

    // put all incoming calls to queue
    clientInstanceIdCallbacks.push(dfd);

    if (clientInstanceIdCallbacks.length > 1) {
      return dfd.promise();
    }

    WLAuthorizationManager.__getClientIdOrInvokeRegistration()
      .then(
        function (data) {
          // notify about success
          processClientInstanceCallbacks(data, true);
        },
        function (error) {

         //check if its REMOTE DISABLE RESPONSE WHILE REGISTRATION
         var response =  new WL.Response(error,null);
 
         if(WL.Client.isWl403(response)){
          var wlFailure = response.responseJSON['failures'];
          WL.Logger.debug('Received a 403 response while Registration');
          
          var realm = (REMOTE_DISABLE_REALM in wlFailure);
          if(realm){
            var handler = WL.Client.__chMap[REMOTE_DISABLE_REALM];
            if (handler !== null && typeof handler !== 'undefined'){
                handler.handleFailure(wlFailure[REMOTE_DISABLE_REALM], this, response);
              }
            }
          }
        // notify about failure
          processClientInstanceCallbacks(error, false);
        }
      );

    return dfd.promise();
  };

  var __deleteAuthData = function () {
    var dfd = WLJQ.Deferred();
    cordova.exec(
      function () {
        dfd.resolve();
      },
      function (error) {
        dfd.reject(error);
      },
      AUTHORIZATION_MANAGER_PLUGIN_NAME, 'deleteAllAuthData', []
    );
    return dfd.promise();
  };

  var __invokeAuthorizationRequestForScope = function (scope) {
    var dfd = WLJQ.Deferred();
    cordova.exec(
      function (token) {
        dfd.resolve(token);
      },
      function (error) {
        WL.Logger.error('WLAuthorizationManager.invokeAuthorizationRequest for scope ' + scope + ' failed with error: ' + error);
        dfd.reject(error);
      },
      AUTHORIZATION_MANAGER_PLUGIN_NAME, 'invokeAuthorizationRequestForScope', [scope]
    );

    return dfd.promise();
  };

  var __cacheScopeByResource = function (resource, scope) {
    var dfd = WLJQ.Deferred();
    cordova.exec(
      function () {
        dfd.resolve();
      },
      function (error) {
        dfd.reject(error);
      },
      AUTHORIZATION_MANAGER_PLUGIN_NAME, 'cacheScopeByResource', [resource, scope]
    );
    return dfd.promise();
  };

  var __updateServerRelativeTime = function () {
    var dfd = WLJQ.Deferred();
    cordova.exec(
      function () {
        dfd.resolve();
      },
      function (error) {
        dfd.reject(error);
      },
      AUTHORIZATION_MANAGER_PLUGIN_NAME, 'updateServerRelativeTime', [WLAuthorizationManager.__serverRelativeTime]
    );
    return dfd.promise();
  };

var setLoginTimeoutNonAndroid = function (timeout)
{
  if(timeout < MIN_LOGIN_TIMEOUT)
  {
    WL.Logger.debug('Login timeout has to be a minimum of 5 seconds. Resetting to 5 seconds');
      loginTimeout = MIN_LOGIN_TIMEOUT;
  }
  else{
      loginTimeout = timeout;
  }
};
  var setLoginTimeout = function (timeOut) {
    var dfd = WLJQ.Deferred();
    if(WL.Client.getEnvironment() === WL.Env.ANDROID)
    {
      cordova.exec(
      function () {
        dfd.resolve();
      },
      function (error) {
        dfd.reject(error);
      },
      AUTHORIZATION_MANAGER_PLUGIN_NAME, 'setLoginTimeout', [timeOut]
    );
    return dfd.promise();
  }
    else{
       setLoginTimeoutNonAndroid(timeOut * 1000);
    }
  };

  var setAuthorizationServerUrl = function (url) {
    var dfd = WLJQ.Deferred();
    cordova.exec(
      function () {
        dfd.resolve();
      },
      function (error) {
        dfd.reject(error);
      },
      AUTHORIZATION_MANAGER_PLUGIN_NAME, 'setAuthorizationServerUrl', [url]
    );
    return dfd.promise();
  };

  var getAuthorizationServerUrl = function () {
    var dfd = WLJQ.Deferred();
    cordova.exec(
      function (url) {
        dfd.resolve(url);
      },
      function (error) {
        dfd.reject(error);
      },
      AUTHORIZATION_MANAGER_PLUGIN_NAME, 'getAuthorizationServerUrl', []
    );
    return dfd.promise();
  };

  var __getWlServerUrl = function () {
    var dfd = WLJQ.Deferred();
    WL.App.getServerUrl(
      function (url) {
        if (url.length > 0 && url[url.length - 1] !== '/') {
          url += '/';
        }
        dfd.resolve(url);
      },
      function (error) {
        dfd.reject(error);
      }
    );
    return dfd.promise();
  };

  var __getParameterByName = function (url, name) {
    var parts = url.split('?');
    if (parts.length < 2) {
      return null;
    }

    // there should be exactly two elements in the finalParts array. If we have more than two elements in the 'parts' array,
    // then the redirect url contains some other '?'
    var finalParts = [parts[0]];
    parts.splice(0, 1);
    // join extra parts back and push them to the second element of 'finalParts'
    finalParts.push(parts.join('?'));

    var results = finalParts[1].split('&');
    for (var i = 0; i < results.length; i++) {
      var pair = results[i].split('=');
      if (pair[0] === name) {
        return decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
    return null;
  };

  var isAuthorizationRequired = function (responseStatus, responseHeadersString) {
    if (__isUndefinedOrNull(responseStatus) || __isUndefinedOrNull(responseHeadersString)) {
      return false;
    }
    var headersMap = WLJSX.String.parseResponseHeaders(responseHeadersString);
    var mfpConflictHeader = WLJSX.String.getHeaderByKey(headersMap, MFP_CONFLICT_HEADER);
    if (responseStatus === 409 && !__isUndefinedOrNull(mfpConflictHeader)) {
        return true;
    }
    var authenticationHeader = WLJSX.String.getHeaderByKey(headersMap, WWW_AUTHENTICATE_HEADER);
    if ((responseStatus !== 401 && responseStatus !== 403) || __isUndefinedOrNull(authenticationHeader) || __isUndefinedOrNull(authenticationHeader[WWW_AUTHENTICATE_HEADER])) {
      return false;
    }
    return (authenticationHeader[WWW_AUTHENTICATE_HEADER].indexOf('Bearer') >= 0);
  };

  var getResourceScope = function (responseHeadersString) {
    if (__isUndefinedOrNull(responseHeadersString)) {
      return null;
    }
    var headersMap = WLJSX.String.parseResponseHeaders(responseHeadersString);
    var authenticationHeader = WLJSX.String.getHeaderByKey(headersMap, WWW_AUTHENTICATE_HEADER);
    if (__isUndefinedOrNull(authenticationHeader)) {
        return null;
    }
    return WLAuthorizationManager.__getAuthorizationScope(authenticationHeader[WWW_AUTHENTICATE_HEADER]);
  };

  var __isInvalidToken = function (transport) {
    var responseAuthenticationHeader = transport.getResponseHeader(WWW_AUTHENTICATE_HEADER);
    return responseAuthenticationHeader.indexOf('invalid_token') >= 0;
  };

  var __sendHeartBeat = function (intervalInSecs) {
    cordova.exec(
      function () {},
      function () {},
      AUTHORIZATION_MANAGER_PLUGIN_NAME, 'setHeartBeatInterval', [intervalInSecs]
    );
  };

  var __isUndefinedOrNull = function (object) {
    return typeof (object) === 'undefined' || object === null;
  };

  function __login(securityCheck, credentials, clientId, userCallbackDfd) {
    if (clientId === null) {
      WLAuthorizationManager.__getOrCreateClientId().then(
        function (clientId) {
          sendLoginRequest(securityCheck, credentials, clientId, userCallbackDfd);
        },
        function (error) {
          // In case of an error on registration, reject all waiting requets.
          rejectAllCallbacks(error);
          userCallbackDfd.reject(error);
        });
    } else {
      sendLoginRequest(securityCheck, credentials, clientId, userCallbackDfd);
    }
  }

  function sendLoginRequest(securityCheck, credentials, clientId, userCallbackDfd) {
    invokePreAuthorizationRequest(clientId, securityCheck, credentials).then(
      function (transport) {
        // No need to continue to authorization end point.
        WL.Logger.debug('Successfully logged in to security check: ' + securityCheck);
        authorizationAlreadyInProgress = false;
        processObtainAccessTokenCallbacks(clientId, securityCheck, transport, true);
        userCallbackDfd.resolve();
      },
      function (error) {
        var loginRetryObject = {
          retryFunction: loginRetry,
          userCallbackDfd: userCallbackDfd,
          credentials: credentials
        };
        onAuthorizationProcessFailure(error, securityCheck, clientId, loginRetryObject);
      });
  }

  function login(securityCheck, credentials) {
    var dfd = WLJQ.Deferred();
    if(WL.Client.getEnvironment() === WL.Env.ANDROID){
        cordova.exec(function(){dfd.resolve();},function(response){dfd.reject(response);},AUTHORIZATION_MANAGER_PLUGIN_NAME,'login',[securityCheck, credentials]);
    } else {
        // make sure there is only one authorization request in progress
        if (isAuthorizationInProgress()) {
          var failResponse = createErrorResponse(500, WL.ErrorCode.AUTHORIZATION_FAILURE, LOGIN_ALREADY_IN_PROCESS);
          dfd.reject(failResponse);
        } else {
          if (__isUndefinedOrNull(securityCheck)) {
            securityCheck = DEFAULT_SCOPE;
          }
          authorizationAlreadyInProgress = true;
          __login(securityCheck, credentials, null, dfd);
        }
    }

    return dfd.promise();
  }

  var loginRetry = function (clientId, scope, loginRetryObject) {
    __login(scope, loginRetryObject.credentials, clientId, loginRetryObject.userCallbackDfd);
  };

  var isAuthorizationInProgress = function () {
    return obtainAuthHeaderCallbacks.length > 1 || authorizationAlreadyInProgress;
  };

  var onAuthorizationProcessFailure = function (error, scope, clientId, tryAgainObject) {
    // in case of unknown client error do not process the callbacks; call the registration part instead
    var shouldProcessCallbacksOnError = true;

    if (isUnknownClientError(error) && !invalidClientReceived) {
      // request failed with unknown client
      invalidClientReceived = true; // set a flag that prevents infinite loop
      shouldProcessCallbacksOnError = false; // do not process callbacks, because request will be sent again

      // call the native to delete the old authentication data
      WLAuthorizationManager.__deleteAuthData()
        .then(
          function () {
            // register the client again
            WLAuthorizationManager.__getOrCreateClientId()
              .then(
                function (newClientId) {
                  // the registration returns the new client id.
                  // update all callbacks in queue with the new client id
                  updateClientIds(newClientId);
                  // resend the request
                  tryAgainObject.retryFunction(newClientId, scope, tryAgainObject);
                },
                function (error) {
                  rejectAllCallbacks(error);
                }
              );
          },
          function (error) {
            // unable to delete the old auth data, reject all callbacks and do not re-send the request
            rejectAllCallbacks(error);
          }
        );
    }
    // notify the callers about error if it is not the 'unknown client' error thrown on the first time
    if (shouldProcessCallbacksOnError) {
      authorizationAlreadyInProgress = false;
      processObtainAccessTokenCallbacks(clientId, scope, error, false);
      if (!__isUndefinedOrNull(tryAgainObject.userCallbackDfd)) {
        tryAgainObject.userCallbackDfd.reject(error);
      }
    }
  };

 /**
  * Sorts the space separated scope alphabetically and ensures the default scope exists.
  *
  * Examples: when this flag is set to true, these will be the input and output values of
  * the method:
  * "RegisteredClient" --> "RegisteredClient"
  * null --> "RegisteredClient"
  * "RegisteredClient sc1 sc2" --> "RegisteredClient sc1 sc2"
  * "sc2 sc1" --> "RegisteredClient sc1 sc2"
  *
  * @param scope The given raw scope
  * @return The sorted scope minus the default scope
  */
 function sortScopeAlphabetically(scope) {
     if (WL.Validators.isNullOrUndefined(scope) || scope === DEFAULT_SCOPE) {
         return DEFAULT_SCOPE;
     }
     if (scope.indexOf(DEFAULT_SCOPE)<0){
         scope += ' ' + DEFAULT_SCOPE;
     }
     // Replace multiple spaces with a single space
     scope = scope.replace(/  +/g, ' ').trim();
     var scopeArray = scope.match(/\S+/g);
     scopeArray.sort();
     return scopeArray.join(' ');
 }

  function logout(securityCheck) {
    var dfd = WLJQ.Deferred();
    if(WL.Client.getEnvironment() === WL.Env.ANDROID){
      WLAuthorizationManager.__sendLogoutRequest(securityCheck).then(
        function () {
          dfd.resolve();
        },
        function (error) {
          dfd.reject(error);
        }
      );
    } else {
      if (isAuthorizationInProgress()) {
        dfd.reject(createErrorResponse(500, WL.ErrorCode.AUTHORIZATION_FAILURE, LOGOUT_ERROR_MSG));
        return dfd.promise();
      }
      if (__isUndefinedOrNull(securityCheck)) {
        securityCheck = DEFAULT_SCOPE;
      }
      authorizationAlreadyInProgress = true;
      WLAuthorizationManager.__sendLogoutRequest(securityCheck).then(
        function () {
          authorizationAlreadyInProgress = false;
          processObtainAccessTokenCallbacks(null, securityCheck, null, true);
          dfd.resolve();
        },
        function (error) {
          authorizationAlreadyInProgress = false;
          processObtainAccessTokenCallbacks(null, securityCheck, null, false);
          dfd.reject(error);
        }
      );
    }

    return dfd.promise();
  }

  function __sendLogoutRequest(securityCheck) {
    var dfd = WLJQ.Deferred();
    cordova.exec(
      function () {
        dfd.resolve();
      },
      function (error) {
        dfd.reject(error);
      },
      AUTHORIZATION_MANAGER_PLUGIN_NAME, 'logout', [securityCheck]
    );
    return dfd.promise();
  }

  function createErrorResponse(status, errorCode, errorMsg) {
    var transport = {
      status: status,
      responseJSON: {
        errorCode: errorCode,
        errorMsg: errorMsg
      }
    };
    return new WL.Response(transport, null);
  }

  return {
    isAuthorizationRequired: isAuthorizationRequired,
    obtainAccessToken: obtainAccessToken,
    getResourceScope: getResourceScope,
    clearAccessToken: clearAccessToken,
    setLoginTimeout: setLoginTimeout,
    setAuthorizationServerUrl: setAuthorizationServerUrl,
    getAuthorizationServerUrl: getAuthorizationServerUrl,
    login: login,
    logout: logout,
    __getAuthorizationScope: __getAuthorizationScope,
    __getOrCreateClientId: __getOrCreateClientId,
    __getClientIdOrInvokeRegistration: __getClientIdOrInvokeRegistration,
    __getCachedScopeByResource: __getCachedScopeByResource,
    __deleteAuthData: __deleteAuthData,
    __getWlServerUrl: __getWlServerUrl,
    __getParameterByName: __getParameterByName,
    __invokeAuthorizationRequestForScope: __invokeAuthorizationRequestForScope,
    __cacheScopeByResource: __cacheScopeByResource,
    __getCachedAccessToken: __getCachedAccessToken,
    __deleteCachedScopeByResource: __deleteCachedScopeByResource,
    __isInvalidToken: __isInvalidToken,
    __updateServerRelativeTime: __updateServerRelativeTime,
    __sendHeartBeat: __sendHeartBeat,
    __sendLogoutRequest: __sendLogoutRequest,
    __serverRelativeTime: SERVER_RELATIVE_TIME,
    WL_AUTHORIZATION_HEADER: WL_AUTHORIZATION_HEADER,
    WWW_AUTHENTICATE_HEADER: WWW_AUTHENTICATE_HEADER,
    DEFAULT_SCOPE: DEFAULT_SCOPE,
    MFP_CONFLICT_HEADER: MFP_CONFLICT_HEADER
  };

}());

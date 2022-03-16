// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-property@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-accessor@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-write-accessor@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-laplace@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-string@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-next-tick@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";function w(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})})),t}var _="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function x(){throw new Error("setTimeout has not been defined")}function T(){throw new Error("clearTimeout has not been defined")}var M=x,E=T;function O(e){if(M===setTimeout)return setTimeout(e,0);if((M===x||!M)&&setTimeout)return M=setTimeout,setTimeout(e,0);try{return M(e,0)}catch(t){try{return M.call(null,e,0)}catch(t){return M.call(this,e,0)}}}"function"==typeof _.setTimeout&&(M=setTimeout),"function"==typeof _.clearTimeout&&(E=clearTimeout);var P,k=[],L=!1,N=-1;function R(){L&&P&&(L=!1,P.length?k=P.concat(k):N=-1,k.length&&W())}function W(){if(!L){var e=O(R);L=!0;for(var t=k.length;t;){for(P=k,k=[];++N<t;)P&&P[N].run();N=-1,t=k.length}P=null,L=!1,function(e){if(E===clearTimeout)return clearTimeout(e);if((E===T||!E)&&clearTimeout)return E=clearTimeout,clearTimeout(e);try{E(e)}catch(t){try{return E.call(null,e)}catch(t){return E.call(this,e)}}}(e)}}function q(e,t){this.fun=e,this.array=t}q.prototype.run=function(){this.fun.apply(null,this.array)};function D(){}var S=D,A=D,V=D,z=D,G=D,C=D,F=D;var J=_.performance||{},B=J.now||J.mozNow||J.msNow||J.oNow||J.webkitNow||function(){return(new Date).getTime()};var I=new Date;var H={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];k.push(new q(e,t)),1!==k.length||L||O(W)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:S,addListener:A,once:V,off:z,removeListener:G,removeAllListeners:C,emit:F,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*B.call(J),r=Math.floor(t),i=Math.floor(t%1*1e9);return e&&(r-=e[0],(i-=e[1])<0&&(r--,i+=1e9)),[r,i]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-I)/1e3}},K=require("stream");"disable"===H.env.READABLE_STREAM&&K?(module.exports=K,exports=module.exports=K.Readable,exports.Readable=K.Readable,exports.Writable=K.Writable,exports.Duplex=K.Duplex,exports.Transform=K.Transform,exports.PassThrough=K.PassThrough,exports.Stream=K):(exports=module.exports=require("./lib/_stream_readable.js"),exports.Stream=K||exports,exports.Readable=exports,exports.Writable=require("./lib/_stream_writable.js"),exports.Duplex=require("./lib/_stream_duplex.js"),exports.Transform=require("./lib/_stream_transform.js"),exports.PassThrough=require("./lib/_stream_passthrough.js"));var Q=w(Object.freeze({__proto__:null})),U={objectMode:!1,encoding:null,sep:"\n",copy:!0,siter:1e308},X=c,Y=f,Z=g.isPrimitive,$=b.isPrimitive,ee=j.isPrimitive,te=v.isPrimitive,re=y.isPrimitive,ie=u;var se=function(e,t){return X(t)?Y(t,"sep")&&(e.sep=t.sep,!ee(e.sep))?new TypeError(ie("invalid option. `%s` option must be a primitive string. Option: `%s`.","sep",e.sep)):Y(t,"objectMode")&&(e.objectMode=t.objectMode,!Z(e.objectMode))?new TypeError(ie("invalid option. `%s` option must be a primitive boolean. Option: `%s`.","objectMode",e.objectMode)):Y(t,"encoding")&&(e.encoding=t.encoding,!ee(e.encoding)&&null!==e.encoding)?new TypeError(ie("invalid option. `%s` option must be a primitive string or null. Option: `%s`.","encoding",e.encoding)):Y(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!$(e.highWaterMark))?new TypeError(ie("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","highWaterMark",e.highWaterMark)):Y(t,"iter")&&(e.iter=t.iter,!re(e.iter))?new TypeError(ie("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):Y(t,"siter")&&(e.siter=t.siter,!te(e.siter))?new TypeError(ie("invalid option. `%s` option must be a positive integer. Option: `%s`.","siter",e.siter)):(Y(t,"prng")&&(e.prng=t.prng),Y(t,"seed")&&(e.seed=t.seed),Y(t,"state")&&(e.state=t.state),Y(t,"copy")&&(e.copy=t.copy),null):new TypeError(ie("invalid argument. Options must be an object. Value: `%s`.",t))};module.exports=void 0!==H&&"renderer"===H.type?require("./browser.js"):require("./node.js");var ne=w(Object.freeze({__proto__:null}))("random:streams:laplace"),oe=Q.Readable,ae=t.isPrimitive,de=r.isPrimitive,pe=i,me=s,le=n,ue=o,he=a,ce=e,fe=d,ge=p,be=m.factory,je=l,ve=u,ye=h,we=U,_e=se,xe=ne;function Te(e,t,r){var i,s;if(!(this instanceof Te))return arguments.length>2?new Te(e,t,r):new Te(e,t);if(!de(e)||pe(e))throw new TypeError(ve("invalid argument. First argument must be a number primitive and not `NaN`. Value: `%s`.",e));if(!ae(t))throw new TypeError(ve("invalid argument. Second argument must be a positive number. Value: `%s`.",t));if(i=le(we),arguments.length>2&&(s=_e(i,r)))throw s;return xe("Creating a readable stream configured with the following options: %s.",JSON.stringify(i)),oe.call(this,i),he(this,"_destroyed",!1),ce(this,"_objectMode",i.objectMode),ce(this,"_sep",i.sep),ce(this,"_iter",i.iter),ce(this,"_siter",i.siter),he(this,"_i",0),ce(this,"_prng",be(e,t,i)),ce(this,"PRNG",this._prng.PRNG),this}ue(Te,oe),fe(Te.prototype,"seed",(function(){return this._prng.seed})),fe(Te.prototype,"seedLength",(function(){return this._prng.seedLength})),ge(Te.prototype,"state",(function(){return this._prng.state}),(function(e){this._prng.state=e})),fe(Te.prototype,"stateLength",(function(){return this._prng.stateLength})),fe(Te.prototype,"byteLength",(function(){return this._prng.byteLength})),ce(Te.prototype,"_read",(function(){var e,t;if(!this._destroyed)for(e=!0;e;){if(this._i+=1,this._i>this._iter)return xe("Finished generating pseudorandom numbers."),this.push(null);t=this._prng(),xe("Generated a new pseudorandom number. Value: %d. Iter: %d.",t,this._i),!1===this._objectMode&&(t=t.toString(),t=1===this._i?je(t):je(this._sep+t)),e=this.push(t),this._i%this._siter==0&&this.emit("state",this.state)}})),ce(Te.prototype,"destroy",(function(e){var t;return this._destroyed?(xe("Attempted to destroy an already destroyed stream."),this):(t=this,this._destroyed=!0,ye((function(){e&&(xe("Stream was destroyed due to an error. Error: %s.",me(e)?e.message:JSON.stringify(e)),t.emit("error",e));xe("Closing the stream..."),t.emit("close")})),this)}));var Me=c,Ee=n,Oe=u,Pe=Te;var ke=n,Le=Te;var Ne=e,Re=Te,We=function(e,t,r){var i;if(arguments.length>2){if(!Me(i=r))throw new TypeError(Oe("invalid argument. Options must be an object. Value: `%s`.",i));i=Ee(r,1)}else i={};return i.objectMode=!0,new Pe(e,t,i)},qe=function(e,t,r){var i,s;return s=1===(i=arguments.length)?ke(e,1):i>2?ke(r,1):{},i<2?n:o;function n(e,t){return new Le(e,t,s)}function o(){return new Le(e,t,s)}};Ne(Re,"objectMode",We),Ne(Re,"factory",qe);var De=Re;export{De as default,qe as factory,We as objectMode};
//# sourceMappingURL=index.mjs.map

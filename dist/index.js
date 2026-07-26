"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=s(function(f,u){
var n=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-pow/dist');function a(e,r,i){var t;return n(e)||n(r)||n(i)||e<=0||r<=0?NaN:(t=1/e,i+r*v(1+t,-t))}u.exports=a
});var c=o();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

"use strict";(()=>{function r(e){let t=/([\s\S]+?[!?\.]+)(\s*)/g,n=[],o=e.matchAll(t);for(let[p,a,l]of o)n.push({sentence:a,whitespaces:l});return n}var f=r(`The quick brown fox jumps over the lazy dog?!
 It barked..... this is another function.`);function u(e){switch(!0){case e<=2:return"red";case e<=4:return"green";case e<=6:return"blue";case e<12:return"yellow";default:return"pink"}}function s(e){let t=e.slice();return t.forEach(n=>{let o=n.sentence.split(/\s+/).length;n.color=u(o)}),t}function c(e){{let t=document.getElementById(e);if(t)return t;throw new Error(`Element with the id of: ${e} didn't exist.`)}}var i=c("textarea"),w=c("text");function d(){return i.value}function x(e,t=200){let n;return(...o)=>{clearTimeout(n),n=setTimeout(()=>{e(o)},t)}}i.addEventListener("keypress",x(m,500));function m(){let e=d();console.log(e);let t=r(e);console.log(t);let n=s(t);console.log(n)}})();

!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function u(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let m;function g(t){m=t}function $(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const b=[],y=[],_=[],v=[],x=Promise.resolve();let j=!1;function k(t){_.push(t)}const E=new Set;let w=0;function A(){const t=m;do{for(;w<b.length;){const t=b[w];w++,g(t),O(t.$$)}for(g(null),b.length=0,w=0;y.length;)y.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];E.has(n)||(E.add(n),n())}_.length=0}while(b.length);for(;v.length;)v.pop()();j=!1,E.clear(),g(t)}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const S=new Set;function T(t,n){-1===t.$$.dirty[0]&&(b.push(t),j||(j=!0,x.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function N(c,i,u,a,l,f,d,h=[-1]){const p=m;g(c);const $=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(p?p.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:i.target||p.$$.root};d&&d($.root);let b=!1;if($.ctx=u?u(c,i.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&l($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),b&&T(c,t)),n})):[],$.update(),b=!0,o($.before_update),$.fragment=!!a&&a($.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);$.fragment&&$.fragment.l(t),t.forEach(s)}else $.fragment&&$.fragment.c();i.intro&&((y=c.$$.fragment)&&y.i&&(S.delete(y),y.i(_))),function(t,e,c,i){const{fragment:u,on_mount:a,on_destroy:s,after_update:l}=t.$$;u&&u.m(e,c),i||k((()=>{const e=a.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(k)}(c,i.target,i.anchor,i.customElement),A()}var y,_;g(p)}const C=[];let L=function(n,e=t){let o;const r=new Set;function i(t){if(c(n,t)&&(n=t,o)){const t=!C.length;for(const t of r)t[1](),C.push(t,n);if(t){for(let t=0;t<C.length;t+=2)C[t][0](C[t+1]);C.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,u=t){const a=[c,u];return r.add(a),1===r.size&&(o=e(i)||t),c(n),()=>{r.delete(a),0===r.size&&(o(),o=null)}}}}({},(function(t){if("undefined"==typeof reactionsData){t({restBaseUrl:"https://dev.local/wp-json/reem/v1/reactions/",emojiList:[{id:"like",char:"👍"},{id:"hahaha",char:"😂"},{id:"rocket",char:"🚀"},{id:"sad",char:"😐"},{id:"dislike",char:"👎"}]})}else t(reactionsData)}));function z(t,n,e){const o=t.slice();return o[7]=n[e],o}function B(t){let n,e,o=t[7].count+"";return{c(){n=l("span"),e=f(o),h(n,"class","reactions-emoji-app--count svelte-4g3d2e")},m(t,o){a(t,n,o),u(n,e)},p(t,n){1&n&&o!==(o=t[7].count+"")&&p(e,o)},d(t){t&&s(n)}}}function q(t){let n,e,o,r,c,i,m,g=t[7].char+"",$=t[7].count&&B(t);return{c(){n=l("button"),e=f(g),o=d(),$&&$.c(),r=d(),h(n,"data-action",c=t[7].id),h(n,"class","svelte-4g3d2e")},m(c,s){var l,f,d,h;a(c,n,s),u(n,e),u(n,o),$&&$.m(n,null),u(n,r),i||(l=n,f="click",d=t[1],h={once:!0},l.addEventListener(f,d,h),m=()=>l.removeEventListener(f,d,h),i=!0)},p(t,o){1&o&&g!==(g=t[7].char+"")&&p(e,g),t[7].count?$?$.p(t,o):($=B(t),$.c(),$.m(n,r)):$&&($.d(1),$=null),1&o&&c!==(c=t[7].id)&&h(n,"data-action",c)},d(t){t&&s(n),$&&$.d(),i=!1,m()}}}function D(n){let e,o=n[0],r=[];for(let t=0;t<o.length;t+=1)r[t]=q(z(n,o,t));return{c(){e=l("div");for(let t=0;t<r.length;t+=1)r[t].c();h(e,"class","reactions-emoji-app")},m(t,n){a(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null)},p(t,[n]){if(3&n){let c;for(o=t[0],c=0;c<o.length;c+=1){const i=z(t,o,c);r[c]?r[c].p(i,n):(r[c]=q(i),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=o.length}},i:t,o:t,d(t){t&&s(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t)}}}function J(t,n,e){let o;i(t,L,(t=>e(4,o=t)));let r=[],{id:c}=n,{meta:u}=n;function a(t){let n=t;Object.keys(n).forEach((t=>{r.forEach(((o,c)=>{o.id==t&&e(0,r[c].count=n[t],r)}))}))}return L.subscribe((t=>{console.log(t),e(0,r=t.emojiList)})),$((()=>{a(u)})),t.$$set=t=>{"id"in t&&e(2,c=t.id),"meta"in t&&e(3,u=t.meta)},[r,function(t){let n={action:t.target.getAttribute("data-action")};null==n.action&&(n.action=t.target.parentElement.getAttribute("data-action"));let e=function(t){return o.restBaseUrl+t}(c);(async function(t,n={}){let e=[];void 0===n.method&&(n.method="GET"),void 0===n.headers&&(n.headers={}),void 0===n.headers["Content-Type"]&&(n.headers["Content-Type"]="application/json");const o=await fetch(t,n);return o.ok&&(e.json=await o.json(),e.url=t),e})(e,{method:"POST",body:JSON.stringify(n)}).then((t=>{console.log(t),a(t.json.meta)}))},c,u]}class P extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),N(this,t,J,D,c,{id:2,meta:3})}}document.querySelectorAll(".reactions-emoji").forEach((t=>{let n=t.getAttribute("data-id"),e=JSON.parse(t.getAttribute("data-meta"));new P({target:t,props:{id:n,meta:e}})}))}();
//# sourceMappingURL=bundle.js.map

if(!self.define){let e,s={};const n=(n,o)=>(n=new URL(n+".js",o).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let d={};const r=e=>n(e,t),l={module:{uri:t},exports:d,require:r};s[t]=Promise.all(o.map((e=>l[e]||r(e)))).then((e=>(i(...e),d)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_payload.json",revision:"fa3d8f5c26b88469d01ed704f3c04cd2"},{url:"about/_payload.json",revision:"8576dabf21eb5ca90ad177436963e5e8"},{url:"_nuxt/builds/latest.json",revision:"54a74aa15ac3bdd63da38fe85b33b53e"},{url:"_nuxt/builds/meta/757dd876-7021-4053-8f75-85ce389d6656.json",revision:null},{url:"manifest.webmanifest",revision:"add437e2b9a53a744ca3a10b1d0db828"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));

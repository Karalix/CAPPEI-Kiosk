if(!self.define){let e,n={};const s=(s,r)=>(s=new URL(s+".js",r).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,l)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(n[u])return;let i={};const o=e=>s(e,u),t={module:{uri:u},exports:i,require:o};n[u]=Promise.all(r.map((e=>t[e]||o(e)))).then((e=>(l(...e),i)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/asyncData.MYr0Tag_.js",revision:null},{url:"_nuxt/BigButtonLink.b1rn59xH.js",revision:null},{url:"_nuxt/ButtonLink.OdJqqBc9.js",revision:null},{url:"_nuxt/client-db.1gMy834Q.js",revision:null},{url:"_nuxt/ContentDoc.fH1y1Kdz.js",revision:null},{url:"_nuxt/ContentList.0Zmkegxt.js",revision:null},{url:"_nuxt/ContentNavigation.Gzc1afZ4.js",revision:null},{url:"_nuxt/ContentQuery.awDmTtRd.js",revision:null},{url:"_nuxt/ContentRenderer.dwe2M-NG.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.JvJOTpA5.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.vue.g0yTn7fo.js",revision:null},{url:"_nuxt/ContentSlot.DakLtdEp.js",revision:null},{url:"_nuxt/default.iroUJueb.js",revision:null},{url:"_nuxt/document-driven.bnzMtUTx.js",revision:null},{url:"_nuxt/DocumentDrivenEmpty.6kIqt_XE.js",revision:null},{url:"_nuxt/DocumentDrivenNotFound.V6DSrPDv.js",revision:null},{url:"_nuxt/entry.5GWDIRM_.css",revision:null},{url:"_nuxt/entry.HawkCC37.js",revision:null},{url:"_nuxt/error-404.TsBWxgAa.css",revision:null},{url:"_nuxt/error-404.z2L9qU5S.js",revision:null},{url:"_nuxt/error-500.s2VBNbvW.css",revision:null},{url:"_nuxt/error-500.XtNdt-Zx.js",revision:null},{url:"_nuxt/full-width.481smSYJ.js",revision:null},{url:"_nuxt/head.dqqX5fVE.js",revision:null},{url:"_nuxt/IconCSS.cxwpR_Ym.js",revision:null},{url:"_nuxt/IconCSS.GdgQB7f8.css",revision:null},{url:"_nuxt/index.5Jz4PfUi.js",revision:null},{url:"_nuxt/Markdown.0JG33VxQ.js",revision:null},{url:"_nuxt/MarkdownBlock.zY3BBcpT.js",revision:null},{url:"_nuxt/node.uMQX-T_c.js",revision:null},{url:"_nuxt/ProseA.viT0uKoo.js",revision:null},{url:"_nuxt/ProseBlockquote.sCrofCFU.js",revision:null},{url:"_nuxt/ProseCode.oNX3-gEs.js",revision:null},{url:"_nuxt/ProseCode.vue._6oDh-Wt.js",revision:null},{url:"_nuxt/ProseCodeInline.hTJJdmM5.js",revision:null},{url:"_nuxt/ProseEm.c4K9JWWT.js",revision:null},{url:"_nuxt/ProseH1.E-pK7Hk2.js",revision:null},{url:"_nuxt/ProseH2.fOstk4Ca.js",revision:null},{url:"_nuxt/ProseH3.62RFOSru.js",revision:null},{url:"_nuxt/ProseH4.rXa3T6LP.js",revision:null},{url:"_nuxt/ProseH5.qkolvtVi.js",revision:null},{url:"_nuxt/ProseH6.4VyZXKXJ.js",revision:null},{url:"_nuxt/ProseHr.KyKPhFBG.js",revision:null},{url:"_nuxt/ProseImg.WTXCbjr6.js",revision:null},{url:"_nuxt/ProseLi.ZkcHR5Bx.js",revision:null},{url:"_nuxt/ProseOl.tqp_esrS.js",revision:null},{url:"_nuxt/ProseP.A8-8Mo0N.js",revision:null},{url:"_nuxt/ProsePre.nIRUQbb-.css",revision:null},{url:"_nuxt/ProsePre.XuijH4dj.js",revision:null},{url:"_nuxt/ProseScript.0gh05uAt.js",revision:null},{url:"_nuxt/ProseStrong.L1LJB86A.js",revision:null},{url:"_nuxt/ProseTable.btOeBzno.js",revision:null},{url:"_nuxt/ProseTbody.SFeUyNFk.js",revision:null},{url:"_nuxt/ProseTd.0q19jjiB.js",revision:null},{url:"_nuxt/ProseTh.KJOetlhJ.js",revision:null},{url:"_nuxt/ProseThead.gNNa7qit.js",revision:null},{url:"_nuxt/ProseTr.hPNUJpkW.js",revision:null},{url:"_nuxt/ProseUl.IuQEnKlE.js",revision:null},{url:"_nuxt/slot.vwAbbdlT.js",revision:null},{url:"_nuxt/useStudio.F-AFgIxZ.js",revision:null},{url:"_nuxt/useStudio.LoN2UCXI.css",revision:null},{url:"_nuxt/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"200",revision:"9c248194d0ae69a414117e75ba668467"},{url:"404",revision:"9c248194d0ae69a414117e75ba668467"},{url:"batteur.jpg",revision:"22581c776144c5e7cd476518b5637f7c"},{url:"cover.jpg",revision:"3810b52d0e9e6863eb4f55d31dca7b0b"},{url:"favicon.ico",revision:"a1e73cc3a94a8f22df419702e543e53f"},{url:"fouet.jpg",revision:"175f9824ecdb2f46abbe620d46dad373"},{url:"/",revision:"06e8c68997297ebc0906ff3c7971c818"},{url:"ingredients",revision:"3cc9d7e2a8b99f58cb244781f08a189c"},{url:"placard de droite coté droit HAS.jpg",revision:"73f759089721c69854615106739efcac"},{url:"Placard de droite coté gauche.jpg",revision:"e756b206cfba03dd0f19d3d12b000fba"},{url:"pwa-192x192.png",revision:"3fa9e68dd76ebba50075089418aba4f7"},{url:"pwa-512x512.png",revision:"ed0d0060f8a7d75921a13157db7d4fac"},{url:"recettes",revision:"5e9ec0e4a8240181a324ab05901797f0"},{url:"spatule.jpg",revision:"1228564418e6a27f4b44d551d30e3bdc"},{url:"ustensiles/assiette",revision:"997ae004a5e1f2a5ca0deee3e2dc62e9"},{url:"ustensiles/batteur",revision:"4ead4f835726743ffac5eaba71079540"},{url:"ustensiles/fouet",revision:"17af9f14acb5c1835f827db4cfb88396"},{url:"ustensiles",revision:"ddbb397ad64b19a23aa1e04cd49aeb47"},{url:"ustensiles/louche",revision:"b88bd19ddfff2da87d5005923974ad05"},{url:"ustensiles/marise",revision:"2232775a3249836b853e59ca5abb7bb5"},{url:"ustensiles/poeleacrepe",revision:"3b6fc8b5c88dd641de37d666d15c0b64"},{url:"ustensiles/ramequin",revision:"e5faefb0abe1c7619ad21e7490d12128"},{url:"ustensiles/saladier",revision:"c20765af4ee65b9dd9c49d0f89e42ec1"},{url:"ustensiles/spatule",revision:"73c05c8fbbabbea584f0f35955fdb943"},{url:"ustensiles/verredoseur",revision:"c8686cc58ccba5c9e86b3f45837696f8"},{url:"verre doseur.jpg",revision:"b8706d24ad7b3f3ef8039a1e9b9d87af"},{url:"_payload.json",revision:"51d44ccf2f11e48a669692b06d90da36"},{url:"ingredients/_payload.json",revision:"7531559ecca1020b08f69587e86aa72a"},{url:"recettes/_payload.json",revision:"3ce4317a74b3a4f5e786c799707ef90d"},{url:"ustensiles/_payload.json",revision:"80ae5d602f0c53a9f6c05fa5496e7fce"},{url:"ustensiles/assiette/_payload.json",revision:"4cdc947de2f2fb99cbe430eebf862f14"},{url:"ustensiles/batteur/_payload.json",revision:"b6e5e11d5371a5ef881e1897372f1bb0"},{url:"ustensiles/fouet/_payload.json",revision:"df3cc3dbb0fe50c7ca2c10972cdc888e"},{url:"ustensiles/louche/_payload.json",revision:"9878ae9a9a7101d2b03ecb0f38f6fc69"},{url:"ustensiles/marise/_payload.json",revision:"6e32c2ec7d6c95edcea738f73c48726d"},{url:"ustensiles/poeleacrepe/_payload.json",revision:"a43c7a5b29162163b24228208c4d7ce1"},{url:"ustensiles/ramequin/_payload.json",revision:"cc6cac595f026f1ff6269d8d474fb2b3"},{url:"ustensiles/saladier/_payload.json",revision:"24f42e3b8f4169f499c95e05309b0324"},{url:"ustensiles/spatule/_payload.json",revision:"bebee01d0399ad42ce3cf6bd19ffc28b"},{url:"ustensiles/verredoseur/_payload.json",revision:"d714d98bd3b5dcf0a8abb85b288603e8"},{url:"_nuxt/builds/latest.json",revision:"be57a5b141216a769d53d98b37deac65"},{url:"_nuxt/builds/meta/4abf7ac2-c474-4ad4-aa8b-7944645d9cda.json",revision:null},{url:"manifest.webmanifest",revision:"ffaedc2c9dd5d3cb2928ad620c92ed5f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));

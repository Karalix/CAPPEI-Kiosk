if(!self.define){let e,r={};const i=(i,n)=>(i=new URL(i+".js",n).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(r[l])return;let u={};const a=e=>i(e,l),o={module:{uri:l},exports:u,require:a};r[l]=Promise.all(n.map((e=>o[e]||a(e)))).then((e=>(s(...e),u)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/asyncData.RO69Yxzk.js",revision:null},{url:"_nuxt/BigButtonLink.b_Qio25D.js",revision:null},{url:"_nuxt/ButtonLink.GeVOZUtt.js",revision:null},{url:"_nuxt/client-db.k-byPOLD.js",revision:null},{url:"_nuxt/ContentDoc.ZqKBDN2B.js",revision:null},{url:"_nuxt/ContentList.QL0Qk2Kh.js",revision:null},{url:"_nuxt/ContentNavigation.Ca-27q3k.js",revision:null},{url:"_nuxt/ContentQuery.LlQjN30X.js",revision:null},{url:"_nuxt/ContentRenderer.7_hf2aRj.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.M0_SVdCq.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.vue.z33RkugG.js",revision:null},{url:"_nuxt/ContentSlot.sQyKlDjA.js",revision:null},{url:"_nuxt/default.ytNa96G9.js",revision:null},{url:"_nuxt/document-driven.Ibttrrwa.js",revision:null},{url:"_nuxt/DocumentDrivenEmpty.2p-nEXUf.js",revision:null},{url:"_nuxt/DocumentDrivenNotFound.JtXV9eyO.js",revision:null},{url:"_nuxt/entry.5GWDIRM_.css",revision:null},{url:"_nuxt/entry.WvPpsQ_T.js",revision:null},{url:"_nuxt/error-404.soYDveoh.css",revision:null},{url:"_nuxt/error-404.UkDJ7EHy.js",revision:null},{url:"_nuxt/error-500.lMy0YvXv.js",revision:null},{url:"_nuxt/error-500.qYetu3es.css",revision:null},{url:"_nuxt/full-width.kh8_Avcn.js",revision:null},{url:"_nuxt/head.s6C4Vawq.js",revision:null},{url:"_nuxt/IconCSS.GdgQB7f8.css",revision:null},{url:"_nuxt/IconCSS.wHvRjc6s.js",revision:null},{url:"_nuxt/index.aXcwBGif.js",revision:null},{url:"_nuxt/Markdown.tmY_61UQ.js",revision:null},{url:"_nuxt/MarkdownBlock.D_9Vh_eE.js",revision:null},{url:"_nuxt/node.uMQX-T_c.js",revision:null},{url:"_nuxt/ProseA.RX4ztSap.js",revision:null},{url:"_nuxt/ProseBlockquote.BDUL7nsv.js",revision:null},{url:"_nuxt/ProseCode.GDnA6qNB.js",revision:null},{url:"_nuxt/ProseCode.vue.-706jWLu.js",revision:null},{url:"_nuxt/ProseCodeInline.rmRbN38n.js",revision:null},{url:"_nuxt/ProseEm.y_ag1RKM.js",revision:null},{url:"_nuxt/ProseH1.QE8s5hIP.js",revision:null},{url:"_nuxt/ProseH2.-y2VVvYJ.js",revision:null},{url:"_nuxt/ProseH3.pw0spQQs.js",revision:null},{url:"_nuxt/ProseH4.BLtt9B3i.js",revision:null},{url:"_nuxt/ProseH5.is0kpLmE.js",revision:null},{url:"_nuxt/ProseH6.8NF3ZHVK.js",revision:null},{url:"_nuxt/ProseHr.U91WBJWe.js",revision:null},{url:"_nuxt/ProseImg.2vGox79H.js",revision:null},{url:"_nuxt/ProseLi.H9ZGtznt.js",revision:null},{url:"_nuxt/ProseOl.zb-dduwy.js",revision:null},{url:"_nuxt/ProseP.0uajS_rl.js",revision:null},{url:"_nuxt/ProsePre.nIRUQbb-.css",revision:null},{url:"_nuxt/ProsePre.UvMmlVuC.js",revision:null},{url:"_nuxt/ProseScript.0y44TPaa.js",revision:null},{url:"_nuxt/ProseStrong.IH-vX_5N.js",revision:null},{url:"_nuxt/ProseTable.lXFXT8FE.js",revision:null},{url:"_nuxt/ProseTbody.gaLpbN2n.js",revision:null},{url:"_nuxt/ProseTd.eEDf-yAR.js",revision:null},{url:"_nuxt/ProseTh.eFyu5sfo.js",revision:null},{url:"_nuxt/ProseThead.pd_gJIvU.js",revision:null},{url:"_nuxt/ProseTr.OJJVmim9.js",revision:null},{url:"_nuxt/ProseUl.rAe2JN5p.js",revision:null},{url:"_nuxt/slot.B2D0beF7.js",revision:null},{url:"_nuxt/useStudio.jaczeUMg.js",revision:null},{url:"_nuxt/useStudio.oeINEODF.css",revision:null},{url:"_nuxt/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"200",revision:"0f6d5aca9b6e9349918fcc2d647d2889"},{url:"404",revision:"0f6d5aca9b6e9349918fcc2d647d2889"},{url:"balance.jpg",revision:"5dc23a4a9ad4d0297cd68a153b94447c"},{url:"batoncannelle.jpg",revision:"8f86805db3a9c0f8e178e6e04d8d971e"},{url:"batteur.jpg",revision:"22581c776144c5e7cd476518b5637f7c"},{url:"casserole.jpg",revision:"a6b547b86b73ec31d940245bface8f9c"},{url:"cookie.png",revision:"c9e330ae452bb59195543c925d05d49e"},{url:"couteaudoffice.jpg",revision:"154c9635465ed906f35e049c0c19c0a6"},{url:"cover.jpg",revision:"3810b52d0e9e6863eb4f55d31dca7b0b"},{url:"cuilliereacafe.jpg",revision:"0e9bc5c2badecbcaa097bbc5195aa140"},{url:"emportepiece.jpg",revision:"f7c8bb4b439c9e400068a0b00e3f948a"},{url:"favicon.ico",revision:"a1e73cc3a94a8f22df419702e543e53f"},{url:"fouet.jpg",revision:"175f9824ecdb2f46abbe620d46dad373"},{url:"frigo.jpg",revision:"72334286f70ee8fe892aeb853640a08f"},{url:"/",revision:"80d77662dd8041ab48984abb57f6bef8"},{url:"ingredients/beurre",revision:"a674f515a28b72bdf8c4e4985f5259a3"},{url:"ingredients/chocolat",revision:"30b9846f6013353fa9aada4dd733ee87"},{url:"ingredients/farine",revision:"d24576e4faa0a9579e94ba374aa68284"},{url:"ingredients",revision:"d9afe83c0402b4c44a6cd505cfbdd438"},{url:"ingredients/levure",revision:"62c6ad52c6636b8355d6ee35556ef3a0"},{url:"ingredients/oeufs",revision:"aedbeaf58e7739763747bd02296b8e8e"},{url:"ingredients/sel",revision:"e878bb6fc8a028595c9adcfd64be4570"},{url:"ingredients/sucre",revision:"de4dbadbc723fa0d445f940f95165c61"},{url:"ingredients/sucrevanille",revision:"87a785e338a3da9c99e382aeb62bc803"},{url:"levureboulanger.jpg",revision:"2451192ae53d851dc6feb4559aa7e2dc"},{url:"levurechimique.jpg",revision:"53f6381b9cd06a9ebc208121f437154a"},{url:"louche.jpg",revision:"6cd17ee2c4133f2a76f2d52269b8df82"},{url:"manique.jpg",revision:"bda57400d4cce3d60ad5e57ab22ee49e"},{url:"maryse.jpg",revision:"200d758d2c463c1a66854d9f4d7f08e4"},{url:"moulepasteis.jpg",revision:"315e461a11086d995b9a3e439fe4d87b"},{url:"papiercuisson.jpg",revision:"bc0351a7ab3fd0223e4b34d7c20e3cab"},{url:"patefeuilletee.jpg",revision:"4a9085dc6bacc5df842c58fc2c51a65b"},{url:"pinceau.jpg",revision:"6e09689e213fb3f79a2939d27c3c3d00"},{url:"placard de droite coté droit HAS.jpg",revision:"73f759089721c69854615106739efcac"},{url:"Placard de droite coté gauche.jpg",revision:"e756b206cfba03dd0f19d3d12b000fba"},{url:"placardcuisine.jpg",revision:"398c9bfc3d54946053ceecd4438f1cab"},{url:"placarddedroitecotegauche.jpg",revision:"cd10094ce76963703b61a593567d0cec"},{url:"placarddenreedroit.jpg",revision:"6baeb7374d253cad90c7730cb0d57866"},{url:"placarddenreedroitenbas.jpg",revision:"7183bff6707cb54d72eb9e9247647641"},{url:"placarddenreedroitenhaut.jpg",revision:"19c62f65a9cfc9951e2210f01465d330"},{url:"placarddenréegauche.jpg",revision:"9f1fcb0820057647ffc99c8dfa4dd8ef"},{url:"placardgauchecotedroit2.jpg",revision:"4dd6ff25d2f3a8eb7bbcced026d1a01c"},{url:"placardgauchecotedroit3.jpg",revision:"c80051a369f22fed9f54802df94847cb"},{url:"plancheadecouper.jpg",revision:"bb4b94b12031ee7b880332ea4976027d"},{url:"plaquedecuisson.jpg",revision:"eb7c483044017e5851a124c999324db1"},{url:"poeleacrepe.jpg",revision:"3deef26b105124727b4346d4bba195c7"},{url:"poubelledetable.jpg",revision:"35b62771d80e427fb64e5c86a2d6d961"},{url:"pwa-192x192.png",revision:"3fa9e68dd76ebba50075089418aba4f7"},{url:"pwa-512x512.png",revision:"ed0d0060f8a7d75921a13157db7d4fac"},{url:"ramequin.jpg",revision:"4f2f8259c0b27e90e8695dc548279476"},{url:"recettes/cookie",revision:"043689e5b453da523eea55ec6f2df0f3"},{url:"recettes/crepe",revision:"4854acb846124a4dfee73b9119681d64"},{url:"recettes/gateaucacao",revision:"2bfce9b4deb273480aef5cd423857cbe"},{url:"recettes",revision:"9c64bf1fa9fe34278ebe0d0e3891b8bb"},{url:"recettes/muffinanglais",revision:"453bd8e816fa88be8915d4aad1a52661"},{url:"recettes/pasteisdenata",revision:"8659358cbe2cb6aadc446a3200fc5623"},{url:"rouleauapatisserie.jpg",revision:"e12e2bc7bf82098b9da69613b317184a"},{url:"saladier.jpg",revision:"61e9e7fd3c72799ce5110dc249fd51e9"},{url:"spatule.jpg",revision:"1228564418e6a27f4b44d551d30e3bdc"},{url:"sucrevanille.jpg",revision:"ca17246cf32909a144d2c25b0766b540"},{url:"tiroirobjettranchants.jpg",revision:"9279edffcf8536c7ae2c3e95fd13e4d3"},{url:"torchon.jpg",revision:"d0776799c9aa5f4904382e412b2483f0"},{url:"ustensiles/couteaudoffice",revision:"bf754caf310f73d7465d7ed0728a9a97"},{url:"ustensiles/cuilliereacafe",revision:"ef05c8da4787ba72ca72fea9e53c21eb"},{url:"ustensiles/fouet",revision:"60853e076a6c8a1f2d49aef5b751d972"},{url:"ustensiles",revision:"2e571dde6a9d4685dc4daa7e8ab0c2f8"},{url:"ustensiles/marise",revision:"5e4ea2c341654f123c4d99936365873b"},{url:"ustensiles/papiersulfurise",revision:"f7d44ae4ad42c32a2129fe4602f44ba0"},{url:"ustensiles/plancheadecouper",revision:"8b2b23f20710aa254afecd25d0390bda"},{url:"ustensiles/plaquedecuisson",revision:"8c1c57b8f9ba0d78531f20bc449ec557"},{url:"ustensiles/poubelledetable",revision:"753a6ba2df83a172b1b404158ba069dc"},{url:"ustensiles/ramequin",revision:"a53e0c1105feac5d9746ff6da9f0db09"},{url:"ustensiles/saladier",revision:"2ccbd3fb6d988663f49123e6518c3ca9"},{url:"verre doseur.jpg",revision:"b8706d24ad7b3f3ef8039a1e9b9d87af"},{url:"_payload.json",revision:"391c0f2c4a62912fead6a2050f98247e"},{url:"ingredients/_payload.json",revision:"1bd7a5d87a707fd2ea921dc34ced70ae"},{url:"ingredients/beurre/_payload.json",revision:"4e6e7f1df6984b636810569c0888c2ae"},{url:"ingredients/chocolat/_payload.json",revision:"53702d2e25d2b7e6cc2390c2dbcf03e0"},{url:"ingredients/farine/_payload.json",revision:"b610e103b63893daf484ae0547f96234"},{url:"ingredients/levure/_payload.json",revision:"3d5b2c7e54d53cc00095ba16997cc3cd"},{url:"ingredients/oeufs/_payload.json",revision:"6f81abb5d47506bb2f03875a4c44689e"},{url:"ingredients/sel/_payload.json",revision:"4526347963814e186f32c952779e6bf2"},{url:"ingredients/sucre/_payload.json",revision:"b4bec0101ae1eda864d40fbbe123fd4a"},{url:"ingredients/sucrevanille/_payload.json",revision:"a8c5ad1356e9ec50dcf632477a2acb6d"},{url:"recettes/_payload.json",revision:"b764c266efaafa7731308520cd3d9ccb"},{url:"recettes/cookie/_payload.json",revision:"257b9daa8f4bb48176b51c16cddc58d5"},{url:"recettes/crepe/_payload.json",revision:"eacc669e565e33cbb752d8c5af5f3bb7"},{url:"recettes/gateaucacao/_payload.json",revision:"94cc39391dfa011bee440d885120f69f"},{url:"recettes/muffinanglais/_payload.json",revision:"8b176e82671b58dceca7e6782858dd43"},{url:"recettes/pasteisdenata/_payload.json",revision:"3d5d342e35c9f992218b40c8bcbb7d7b"},{url:"ustensiles/_payload.json",revision:"c346dbd435fb3295086af01251ef5fba"},{url:"ustensiles/couteaudoffice/_payload.json",revision:"e7063f2f1f2d96b9c2241354f099e033"},{url:"ustensiles/cuilliereacafe/_payload.json",revision:"6b2f01402105c6c24922499eda69959f"},{url:"ustensiles/fouet/_payload.json",revision:"3bce115f2616daa05e048564717ad428"},{url:"ustensiles/marise/_payload.json",revision:"fe3dc9bf63bb72af7492be4646148f17"},{url:"ustensiles/papiersulfurise/_payload.json",revision:"8fb6054d93dea42bb36864dda65cfa84"},{url:"ustensiles/plancheadecouper/_payload.json",revision:"733645b3e624952cc072cd0bfb4b59ca"},{url:"ustensiles/plaquedecuisson/_payload.json",revision:"60614465691fc76de71d6a400390c577"},{url:"ustensiles/poubelledetable/_payload.json",revision:"3b7b03b90bbd3a91908ba4b8bb6c6ab9"},{url:"ustensiles/ramequin/_payload.json",revision:"d74fdcaf43f12692ce595038946a8c18"},{url:"ustensiles/saladier/_payload.json",revision:"19d24356a978402654231741af9e8796"},{url:"_nuxt/builds/latest.json",revision:"b393d0522f7c7265549d02b58fbe2651"},{url:"_nuxt/builds/meta/35570221-902b-472e-bfbe-d27372c8fd2b.json",revision:null},{url:"manifest.webmanifest",revision:"ffaedc2c9dd5d3cb2928ad620c92ed5f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));

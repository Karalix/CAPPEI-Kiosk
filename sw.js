if(!self.define){let e,r={};const n=(n,i)=>(n=new URL(n+".js",i).href,r[n]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=r,document.head.appendChild(e)}else e=n,importScripts(n),r()})).then((()=>{let e=r[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(r[u])return;let l={};const o=e=>n(e,u),d={module:{uri:u},exports:l,require:o};r[u]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(s(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/asyncData.Oe2Prbvh.js",revision:null},{url:"_nuxt/BigButtonLink.26HGecNZ.js",revision:null},{url:"_nuxt/ButtonLink.-Mun0rwV.js",revision:null},{url:"_nuxt/client-db.-OApXIpA.js",revision:null},{url:"_nuxt/ContentDoc.mj4kqjk5.js",revision:null},{url:"_nuxt/ContentList.ddHs8kCV.js",revision:null},{url:"_nuxt/ContentNavigation.DY9rFcKI.js",revision:null},{url:"_nuxt/ContentQuery.aPx0Qtqz.js",revision:null},{url:"_nuxt/ContentRenderer.FZyWj8dY.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.OfuNR9Fd.js",revision:null},{url:"_nuxt/ContentRendererMarkdown.vue.Bo06krHO.js",revision:null},{url:"_nuxt/ContentSlot.5PQUORwH.js",revision:null},{url:"_nuxt/default.EC_kcEvS.js",revision:null},{url:"_nuxt/document-driven.YyLk5frQ.js",revision:null},{url:"_nuxt/DocumentDrivenEmpty.tTwfUeyD.js",revision:null},{url:"_nuxt/DocumentDrivenNotFound.j34tW0Py.js",revision:null},{url:"_nuxt/entry.5GWDIRM_.css",revision:null},{url:"_nuxt/entry.WbtluzyR.js",revision:null},{url:"_nuxt/error-404.3qQC9SPi.js",revision:null},{url:"_nuxt/error-404.TsBWxgAa.css",revision:null},{url:"_nuxt/error-500.s2VBNbvW.css",revision:null},{url:"_nuxt/error-500.ZVoGkvGU.js",revision:null},{url:"_nuxt/full-width.VLkhtK67.js",revision:null},{url:"_nuxt/head.4ej3Y66c.js",revision:null},{url:"_nuxt/IconCSS.GdgQB7f8.css",revision:null},{url:"_nuxt/IconCSS.noGi-HTU.js",revision:null},{url:"_nuxt/index.5Jz4PfUi.js",revision:null},{url:"_nuxt/Markdown.bbAtQ1CX.js",revision:null},{url:"_nuxt/MarkdownBlock.IzdTeyD0.js",revision:null},{url:"_nuxt/node.uMQX-T_c.js",revision:null},{url:"_nuxt/ProseA.Mt4m7seR.js",revision:null},{url:"_nuxt/ProseBlockquote.D3YQyVhc.js",revision:null},{url:"_nuxt/ProseCode.jxTVpCwR.js",revision:null},{url:"_nuxt/ProseCode.vue.zOE_QZP-.js",revision:null},{url:"_nuxt/ProseCodeInline.CVAP5Cts.js",revision:null},{url:"_nuxt/ProseEm.HH8h7_W0.js",revision:null},{url:"_nuxt/ProseH1.SpSu1qN8.js",revision:null},{url:"_nuxt/ProseH2.mDzpcbUT.js",revision:null},{url:"_nuxt/ProseH3.ynHxNK4U.js",revision:null},{url:"_nuxt/ProseH4.Jf5bBCWS.js",revision:null},{url:"_nuxt/ProseH5.QXAxt-9D.js",revision:null},{url:"_nuxt/ProseH6.e4RG9HAc.js",revision:null},{url:"_nuxt/ProseHr.By_arKl-.js",revision:null},{url:"_nuxt/ProseImg.R8ouv4n2.js",revision:null},{url:"_nuxt/ProseLi.ecFYCvfF.js",revision:null},{url:"_nuxt/ProseOl.rO-lOguu.js",revision:null},{url:"_nuxt/ProseP.bCn3GH7u.js",revision:null},{url:"_nuxt/ProsePre.nIRUQbb-.css",revision:null},{url:"_nuxt/ProsePre.XuywmR7o.js",revision:null},{url:"_nuxt/ProseScript.ru7JfD2O.js",revision:null},{url:"_nuxt/ProseStrong.x3uzeTv9.js",revision:null},{url:"_nuxt/ProseTable.gP4ejDGm.js",revision:null},{url:"_nuxt/ProseTbody.aPyDtXI4.js",revision:null},{url:"_nuxt/ProseTd.7pd6djsW.js",revision:null},{url:"_nuxt/ProseTh.OB4KsKMV.js",revision:null},{url:"_nuxt/ProseThead.-cplqeNI.js",revision:null},{url:"_nuxt/ProseTr.Uq-eNb-H.js",revision:null},{url:"_nuxt/ProseUl.Pu9iIZfz.js",revision:null},{url:"_nuxt/slot.tIaOLwzZ.js",revision:null},{url:"_nuxt/useStudio.6yd1wOFl.js",revision:null},{url:"_nuxt/useStudio.ZkI3hmS7.css",revision:null},{url:"_nuxt/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"200",revision:"88928814fb9d15a61d7b22f71f1e69a7"},{url:"404",revision:"88928814fb9d15a61d7b22f71f1e69a7"},{url:"balance.jpg",revision:"5dc23a4a9ad4d0297cd68a153b94447c"},{url:"batteur.jpg",revision:"22581c776144c5e7cd476518b5637f7c"},{url:"couteaudoffice.jpg",revision:"154c9635465ed906f35e049c0c19c0a6"},{url:"cover.jpg",revision:"3810b52d0e9e6863eb4f55d31dca7b0b"},{url:"cuilliereacafe.jpg",revision:"0e9bc5c2badecbcaa097bbc5195aa140"},{url:"emportepiece.jpg",revision:"f7c8bb4b439c9e400068a0b00e3f948a"},{url:"favicon.ico",revision:"a1e73cc3a94a8f22df419702e543e53f"},{url:"fouet.jpg",revision:"175f9824ecdb2f46abbe620d46dad373"},{url:"frigo.jpg",revision:"72334286f70ee8fe892aeb853640a08f"},{url:"/",revision:"8f11b46f1b83d0077dafe6d8ed1a73de"},{url:"ingredients/beurre",revision:"6152b4046a88a0b196f432c3327e1009"},{url:"ingredients/cacao",revision:"69f7fc52c328eca64ca07786133941b9"},{url:"ingredients/farine",revision:"fec03933558ea97d5918ad3d8bc17684"},{url:"ingredients",revision:"8e2c7b1d557ad0ed2ecae8aca74a4cdb"},{url:"ingredients/lait",revision:"b97ca8c851dba9c7b4b49ddec9ef356b"},{url:"ingredients/levure",revision:"d7b3ad334fd73e9c543f8fc8f76e61d7"},{url:"ingredients/sucre",revision:"d584b7c69845e60ab8a386371da6c83d"},{url:"levureboulanger.jpg",revision:"2451192ae53d851dc6feb4559aa7e2dc"},{url:"levurechimique.jpg",revision:"53f6381b9cd06a9ebc208121f437154a"},{url:"louche.jpg",revision:"6cd17ee2c4133f2a76f2d52269b8df82"},{url:"manique.jpg",revision:"bda57400d4cce3d60ad5e57ab22ee49e"},{url:"maryse.jpg",revision:"200d758d2c463c1a66854d9f4d7f08e4"},{url:"papiercuisson.jpg",revision:"bc0351a7ab3fd0223e4b34d7c20e3cab"},{url:"placard de droite coté droit HAS.jpg",revision:"73f759089721c69854615106739efcac"},{url:"Placard de droite coté gauche.jpg",revision:"e756b206cfba03dd0f19d3d12b000fba"},{url:"placardcuisine.jpg",revision:"398c9bfc3d54946053ceecd4438f1cab"},{url:"placarddedroitecotegauche.jpg",revision:"cd10094ce76963703b61a593567d0cec"},{url:"placarddenreedroit.jpg",revision:"6baeb7374d253cad90c7730cb0d57866"},{url:"placarddenreedroitenbas.jpg",revision:"7183bff6707cb54d72eb9e9247647641"},{url:"placarddenreedroitenhaut.jpg",revision:"19c62f65a9cfc9951e2210f01465d330"},{url:"placarddenréegauche.jpg",revision:"9f1fcb0820057647ffc99c8dfa4dd8ef"},{url:"plaquedecuisson.jpg",revision:"eb7c483044017e5851a124c999324db1"},{url:"poeleacrepe.jpg",revision:"3deef26b105124727b4346d4bba195c7"},{url:"pwa-192x192.png",revision:"3fa9e68dd76ebba50075089418aba4f7"},{url:"pwa-512x512.png",revision:"ed0d0060f8a7d75921a13157db7d4fac"},{url:"ramequin.jpg",revision:"4f2f8259c0b27e90e8695dc548279476"},{url:"recettes/crepe",revision:"7bcdb9232dc879272219bc4eb6ed9595"},{url:"recettes",revision:"614ab914167b0189170462c54b4edb55"},{url:"recettes/muffinanglais",revision:"9a0d85032bc4b1bb495d0dc888f6b30a"},{url:"rouleauapatisserie.jpg",revision:"e12e2bc7bf82098b9da69613b317184a"},{url:"saladier.jpg",revision:"61e9e7fd3c72799ce5110dc249fd51e9"},{url:"spatule.jpg",revision:"1228564418e6a27f4b44d551d30e3bdc"},{url:"tiroirobjettranchants.jpg",revision:"9279edffcf8536c7ae2c3e95fd13e4d3"},{url:"torchon.jpg",revision:"d0776799c9aa5f4904382e412b2483f0"},{url:"ustensiles/couteaudoffice",revision:"42baed5f7d5799ac37de33301865a195"},{url:"ustensiles/cuilliereacafe",revision:"0a765d0e7a5f06b2c296d6e77c4a94fb"},{url:"ustensiles/fouet",revision:"e730d0f51d3d959dd261d6f1be2afc56"},{url:"ustensiles",revision:"d65eb4147bc148b6627aee30339c49b2"},{url:"ustensiles/marise",revision:"d6b9b0ccf193116fc4108d0c55b22ba5"},{url:"ustensiles/papiersulfurise",revision:"d9ffe5e9506fabefd538c572034884bd"},{url:"ustensiles/ramequin",revision:"0fc0a6a4edf009905d9673058a0dad37"},{url:"ustensiles/saladier",revision:"589d355448d15c151da8c72428be0554"},{url:"ustensiles/verredoseur",revision:"649e1882de84231e1071bd77c6150fab"},{url:"verre doseur.jpg",revision:"b8706d24ad7b3f3ef8039a1e9b9d87af"},{url:"_payload.json",revision:"3ded113f697a4c55a62e0e583eb46723"},{url:"ingredients/_payload.json",revision:"5309ab3b32aaf4c841b24f29f5f1d15e"},{url:"ingredients/beurre/_payload.json",revision:"ffc75c5c0705426b1cce314eaff35af2"},{url:"ingredients/cacao/_payload.json",revision:"722d5bd20ae187fe3f4d0fc06e95ef9c"},{url:"ingredients/farine/_payload.json",revision:"40204665d81b65edbb3861f186f997b0"},{url:"ingredients/lait/_payload.json",revision:"589af08d17488bb8c1cf699cdb917c9e"},{url:"ingredients/levure/_payload.json",revision:"38d0117ee28db40ee3f224c663a7447a"},{url:"ingredients/sucre/_payload.json",revision:"9d78eed6c05ef43f454519543536dc1d"},{url:"recettes/_payload.json",revision:"966ab7b5f18912ad261d742b274e6921"},{url:"recettes/crepe/_payload.json",revision:"cf33d10b4a5c37404a93af7dad2f9e2c"},{url:"recettes/muffinanglais/_payload.json",revision:"ea07794874754caa469c5ab4c7426589"},{url:"ustensiles/_payload.json",revision:"f7716d67fbbd1560ac5a74923adc0b7d"},{url:"ustensiles/couteaudoffice/_payload.json",revision:"0900b86d93343aadcafeafea7b40d546"},{url:"ustensiles/cuilliereacafe/_payload.json",revision:"de5fc264031acc3d9488382c6cd4aa6b"},{url:"ustensiles/fouet/_payload.json",revision:"309f5a143e3442ba97fa9cd40f1e6001"},{url:"ustensiles/marise/_payload.json",revision:"2a656fa6f454af534d2ba75b38f411ec"},{url:"ustensiles/papiersulfurise/_payload.json",revision:"de813380dfda132c30fbe1d0432d58f5"},{url:"ustensiles/ramequin/_payload.json",revision:"5cf9f8242d8b6cf5136fe97dff855354"},{url:"ustensiles/saladier/_payload.json",revision:"f901b3a8b9c619a571253c115b3aefe1"},{url:"ustensiles/verredoseur/_payload.json",revision:"a4729939e89a3dabb5019bd5f21ba620"},{url:"_nuxt/builds/latest.json",revision:"7ec98f85a853ca8153f9263a7a504bb0"},{url:"_nuxt/builds/meta/e72ba336-7909-4927-aa90-6b06363286b0.json",revision:null},{url:"manifest.webmanifest",revision:"ffaedc2c9dd5d3cb2928ad620c92ed5f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
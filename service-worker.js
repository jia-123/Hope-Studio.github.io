if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-3774b91f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.0616d79d.css",revision:"40f79791ff6c50cfc2f7e14fdfd9145b"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/20.5ee5bc67.js",revision:"02c9e38ee7a887fdcb00d60124549e64"},{url:"assets/js/21.a16c0fbd.js",revision:"27141fa8383667adba60ed12c756f75d"},{url:"assets/js/22.93508864.js",revision:"43e1a1ca540a2653424e226d16e19efd"},{url:"assets/js/23.79bda611.js",revision:"6ebbec68b625018fbcb9051fe3bac82e"},{url:"assets/js/24.2c389432.js",revision:"d013320cd2902fc5bb30647f9655c382"},{url:"assets/js/app.cd1f94d5.js",revision:"a2adffa276da6bf0f208c89b78063c78"},{url:"assets/js/layout-Blog.b44342cf.js",revision:"59a3746329f5e17b99d08b2696e4f63d"},{url:"assets/js/layout-Layout.d856bad6.js",revision:"cf744863d4ca480e1b9a37b192314aa2"},{url:"assets/js/layout-NotFound.a47013aa.js",revision:"7aa7c225669a476026ab44a65b262e26"},{url:"assets/js/layout-Slide.6c07e077.js",revision:"532b7cbad8613192945f40c71874cb24"},{url:"assets/js/page-主要内容.2b115e6b.js",revision:"a641b1f601df110d508327e89f794ef2"},{url:"assets/js/page-学习资源.ab1be5d8.js",revision:"abc6cfe26d13b8e396eeb0bd0725f099"},{url:"assets/js/page-工作室介绍.19400190.js",revision:"ba438d3df6129e263e146ba5fc7e0e45"},{url:"assets/js/page-工作室招新.290fd1a3.js",revision:"984e3123781db6e11c18e04e143c3d26"},{url:"assets/js/page-希望工作室.c39e1ef4.js",revision:"94410a633971d45c22d8115b1aece301"},{url:"assets/js/page-情况说明.94d9e7f9.js",revision:"5d273755c8eeefe230879f47cd0efc99"},{url:"assets/js/page-招新要求.ecb05477.js",revision:"9750f2dc6e94c4bda8ed0926ba7bfd9a"},{url:"assets/js/vendors~flowchart.cb347037.js",revision:"64e53ec86b9678b397d1b6b90fca32f4"},{url:"assets/js/vendors~layout-Blog~layout-Layout.7d6dc715.js",revision:"784e2b2623fe5e371b9ccc45e3746e36"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.5885b1db.js",revision:"e84ebfec31da6e43ca1843b0bc36571b"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.19644d68.js",revision:"6298c6f2042217f45879912a9a10a246"},{url:"assets/js/vendors~photo-swipe.326202bd.js",revision:"c15e9104ce84f1455a592a4649799e42"},{url:"assets/js/vendors~reveal.869872b2.js",revision:"a6691dfc0eb541a64ab2a4efc707dc1d"},{url:"assets/js/vendors~valine.c75e37f5.js",revision:"f9ee7a58175f3575d08855b0d29e1d65"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"e1ae4d52902b597300c90593ff123179"},{url:"about/index.html",revision:"4c716b5b7f27bfede08011e0f929939c"},{url:"article/index.html",revision:"f000acbaef2c2a4926174bc2708d6160"},{url:"category/index.html",revision:"65a964ec0d7b91c6987601a4ca28fce3"},{url:"encrypt/index.html",revision:"a95720b118e43f26dc0955aec01be267"},{url:"index.html",revision:"fe9bb368489dd257cb0655a2ae6b9557"},{url:"invite/content/index.html",revision:"60e6174af16b569bfa7b0a9e1158be02"},{url:"invite/index.html",revision:"c7ff0596270bb95fa7ea9e5d80708fd3"},{url:"invite/need/index.html",revision:"0b9bfb73568d7bae79f4e1d7ceb0816b"},{url:"invite/notice/index.html",revision:"ed20de1fea671a5fe2b9ce1f2a2ac90c"},{url:"resource/index.html",revision:"c66ec55831b79207b86bdc1bad80ac8a"},{url:"slide/index.html",revision:"439ea10bd795bda7fab7497aae4ea26f"},{url:"tag/index.html",revision:"ba7bb7ee21797b5850c5eecf7a475b3d"},{url:"timeline/index.html",revision:"63dc6528d14a0d7b36ed553210a920e4"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});

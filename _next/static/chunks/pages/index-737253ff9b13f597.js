(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(1391)}])},9749:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(6495).Z,s=i(2648).Z,n=i(1598).Z,r=i(7273).Z,a=n(i(7294)),c=s(i(3121)),l=i(2675),g=i(139),h=i(8730);i(7238);var d=s(i(9824));let u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(t){return void 0!==t.default}function f(t){return"number"==typeof t||void 0===t?t:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function p(t,e,i,s,n,r,a){if(!t||t["data-loaded-src"]===e)return;t["data-loaded-src"]=e;let c="decode"in t?t.decode():Promise.resolve();c.catch(()=>{}).then(()=>{if(t.parentNode){if("blur"===i&&r(!0),null==s?void 0:s.current){let e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});let a=!1,c=!1;s.current(o({},e,{nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:()=>a,isPropagationStopped:()=>c,persist:()=>{},preventDefault:()=>{a=!0,e.preventDefault()},stopPropagation:()=>{c=!0,e.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(t)}})}let w=a.forwardRef((t,e)=>{var{imgAttributes:i,heightInt:s,widthInt:n,qualityInt:c,className:l,imgStyle:g,blurStyle:h,isLazy:d,fill:u,placeholder:m,loading:f,srcString:w,config:b,unoptimized:j,loader:v,onLoadRef:x,onLoadingCompleteRef:I,setBlurComplete:y,setShowAltText:_,onLoad:N,onError:E}=t,A=r(t,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return f=d?"lazy":f,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},A,i,{width:n,height:s,decoding:"async","data-nimg":u?"fill":"1",className:l,loading:f,style:o({},g,h),ref:a.useCallback(t=>{e&&("function"==typeof e?e(t):"object"==typeof e&&(e.current=t)),t&&(E&&(t.src=t.src),t.complete&&p(t,w,m,x,I,y,j))},[w,m,x,I,y,E,j,e]),onLoad:t=>{let e=t.currentTarget;p(e,w,m,x,I,y,j)},onError:t=>{_(!0),"blur"===m&&y(!0),E&&E(t)}})))}),b=a.forwardRef((t,e)=>{let i,s;var n,{src:p,sizes:b,unoptimized:j=!1,priority:v=!1,loading:x,className:I,quality:y,width:_,height:N,fill:E,style:A,onLoad:S,onLoadingComplete:C,placeholder:z="empty",blurDataURL:P,layout:k,objectFit:R,objectPosition:B,lazyBoundary:O,lazyRoot:L}=t,D=r(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let M=a.useContext(h.ImageConfigContext),T=a.useMemo(()=>{let t=u||M||g.imageConfigDefault,e=[...t.deviceSizes,...t.imageSizes].sort((t,e)=>t-e),i=t.deviceSizes.sort((t,e)=>t-e);return o({},t,{allSizes:e,deviceSizes:i})},[M]),G=D,W=G.loader||d.default;if(delete G.loader,"__next_img_default"in W){if("custom"===T.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let F=W;W=t=>{let{config:e}=t,i=r(t,["config"]);return F(i)}}if(k){"fill"===k&&(E=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];q&&(A=o({},A,q));let U={responsive:"100vw",fill:"100vw"}[k];U&&!b&&(b=U)}let V="",H=f(_),J=f(N);if("object"==typeof(n=p)&&(m(n)||void 0!==n.src)){let Z=m(p)?p.default:p;if(!Z.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Z)));if(!Z.height||!Z.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Z)));if(i=Z.blurWidth,s=Z.blurHeight,P=P||Z.blurDataURL,V=Z.src,!E){if(H||J){if(H&&!J){let X=H/Z.width;J=Math.round(Z.height*X)}else if(!H&&J){let Y=J/Z.height;H=Math.round(Z.width*Y)}}else H=Z.width,J=Z.height}}let K=!v&&("lazy"===x||void 0===x);((p="string"==typeof p?p:V).startsWith("data:")||p.startsWith("blob:"))&&(j=!0,K=!1),T.unoptimized&&(j=!0);let[Q,$]=a.useState(!1),[tt,te]=a.useState(!1),ti=f(y),to=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:B}:{},tt?{}:{color:"transparent"},A),ts="blur"===z&&P&&!Q?{backgroundSize:to.objectFit||"cover",backgroundPosition:to.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(l.getImageBlurSvg({widthInt:H,heightInt:J,blurWidth:i,blurHeight:s,blurDataURL:P}),'")')}:{},tn=function(t){let{config:e,src:i,unoptimized:o,width:s,quality:n,sizes:r,loader:a}=t;if(o)return{src:i,srcSet:void 0,sizes:void 0};let{widths:c,kind:l}=function(t,e,i){let{deviceSizes:o,allSizes:s}=t;if(i){let n=/(^|\s)(1?\d?\d)vw/g,r=[];for(let a;a=n.exec(i);a)r.push(parseInt(a[2]));if(r.length){let c=.01*Math.min(...r);return{widths:s.filter(t=>t>=o[0]*c),kind:"w"}}return{widths:s,kind:"w"}}if("number"!=typeof e)return{widths:o,kind:"w"};let l=[...new Set([e,2*e].map(t=>s.find(e=>e>=t)||s[s.length-1]))];return{widths:l,kind:"x"}}(e,s,r),g=c.length-1;return{sizes:r||"w"!==l?r:"100vw",srcSet:c.map((t,o)=>"".concat(a({config:e,src:i,quality:n,width:t})," ").concat("w"===l?t:o+1).concat(l)).join(", "),src:a({config:e,src:i,quality:n,width:c[g]})}}({config:T,src:p,unoptimized:j,width:H,quality:ti,sizes:b,loader:W}),tr=p,ta={imageSrcSet:tn.srcSet,imageSizes:tn.sizes,crossOrigin:G.crossOrigin},tc=a.useRef(S);a.useEffect(()=>{tc.current=S},[S]);let tl=a.useRef(C);a.useEffect(()=>{tl.current=C},[C]);let tg=o({isLazy:K,imgAttributes:tn,heightInt:J,widthInt:H,qualityInt:ti,className:I,imgStyle:to,blurStyle:ts,loading:x,config:T,fill:E,unoptimized:j,placeholder:z,loader:W,srcString:tr,onLoadRef:tc,onLoadingCompleteRef:tl,setBlurComplete:$,setShowAltText:te},G);return a.default.createElement(a.default.Fragment,null,a.default.createElement(w,Object.assign({},tg,{ref:e})),v?a.default.createElement(c.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+tn.src+tn.srcSet+tn.sizes,rel:"preload",as:"image",href:tn.srcSet?void 0:tn.src},ta))):null)});e.default=b,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},2675:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageBlurSvg=function(t){let{widthInt:e,heightInt:i,blurWidth:o,blurHeight:s,blurDataURL:n}=t,r=o||e,a=s||i,c=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return r&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(r," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(o&&s?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(n,"'/%3E%3C/svg%3E")}},9824:function(t,e){"use strict";function i(t){let{config:e,src:i,width:o,quality:s}=t;return i.endsWith(".svg")&&!e.dangerouslyAllowSVG?i:"".concat(e.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(o,"&q=").concat(s||75)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i.__next_img_default=!0,e.default=i},1391:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return d}});var o=i(5893),s=i(9008),n=i.n(s),r=i(5675),a=i.n(r);i(7294);var c={src:"./_next/static/media/bmc-button.0214cc80.png",height:306,width:1090,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGP8dEnvz8evsswC3FsZ/jPwMDAx/gDSjAw/fzEz8PP8/MP4/abvn5//NJn/feti+PNXnIGd/T3D37+MDB8/szFIS3z9AwC85B2jZhcLmwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},l=function(){return(0,o.jsx)("a",{href:"https://www.buymeacoffee.com/briuor",children:(0,o.jsx)(a(),{width:200,height:50,alt:"Buy Me a Coffee Widget",src:c})})},g=i(1502),h=i.n(g);function d(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n(),{children:[(0,o.jsx)("title",{children:"Bruno Lopes"}),(0,o.jsx)("meta",{name:"description",content:"Bruno Lopes software developer website"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsxs)("main",{children:[(0,o.jsxs)("section",{children:[(0,o.jsx)("h1",{className:h().hello,children:"Hello."}),(0,o.jsx)("h2",{children:"I'm Bruno."}),(0,o.jsx)("p",{children:"I work as a software developer freelancer and love doing open source and automating things."}),(0,o.jsxs)("p",{children:["You can find me on\xa0",(0,o.jsx)("a",{className:"link",href:"https://github.com/Briuor",children:"Github"})," and\xa0",(0,o.jsx)("a",{className:"link",href:"https://www.linkedin.com/in/bruno-lopes-a64b99207/",children:"Likendin"}),". Send me an ",(0,o.jsx)("a",{className:"link",href:"mailto:contato@brunolopes.dev",children:"email"}),"."]})]}),(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"Code Tools"}),(0,o.jsxs)("p",{children:[(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/react.svg",alt:"React Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/redux.svg",alt:"Redux Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/vue.svg",alt:"Vue Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/javascript.svg",alt:"Javascript Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg",alt:"Typescript Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg",alt:"Node Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/express.svg",alt:"Express Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/npm.svg",alt:"Npm Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/python.svg",alt:"Python Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/django.svg",alt:"Django Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/postgresql.svg",alt:"Postgresql Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/firebase.svg",alt:"Firebase Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/bash.svg",alt:"Bash Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/git-icon.svg",alt:"Git Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/github-icon.svg",alt:"Github Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/linux-tux.svg",alt:"Linux Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/ubuntu.svg",alt:"Ubuntu Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/microsoft-windows.svg",alt:"Windows Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/google-icon.svg",alt:"Google Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/visual-studio-code.svg",alt:"VSCode Icon",width:28,height:28}),(0,o.jsx)(a(),{className:h().toolImg,src:"https://github.com/get-icon/geticon/raw/master/icons/wordpress-icon.svg",alt:"Wordpress Icon",width:28,height:28})]})]}),(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"Open Source Projects"}),(0,o.jsxs)("p",{children:[(0,o.jsx)("a",{href:"https://github.com/Briuor/rflowz",children:"rflowz"}),(0,o.jsx)(a(),{className:h().projectImg,src:"https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg",alt:"",width:16,height:16}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:"React library for building flowcharts and diagrams."})]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("a",{href:"https://github.com/Briuor/wbm",children:"wbm"}),(0,o.jsx)(a(),{className:h().projectImg,src:"https://github.com/get-icon/geticon/raw/master/icons/javascript.svg",alt:"",width:16,height:16}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:"wbm is an unofficial API to send bulk messages in whatsapp."})]})]}),(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"Support"}),(0,o.jsx)("p",{children:"If you want to buy me a coffee, you can do it here."}),(0,o.jsx)(l,{})]}),(0,o.jsx)("footer",{children:(0,o.jsx)("p",{className:h().theEnd,children:"The End"})})]})]})}},1502:function(t){t.exports={toolImg:"Home_toolImg__da8uB",hello:"Home_hello__R_Vyq",projectImg:"Home_projectImg___qrkP",theEnd:"Home_theEnd__zxOmL"}},9008:function(t,e,i){t.exports=i(3121)},5675:function(t,e,i){t.exports=i(9749)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);
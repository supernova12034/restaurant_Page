(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"36f12681bd1392381408.png";!function(){console.log("testing pageIntro.js");let e=document.getElementById("content"),n=document.createElement("h1");n.textContent="Greatest Napolitan pizza, this side of the naples!",n.style.marginLeft="20vw";let o=document.createElement("img");o.setAttribute("src",`${t}`),o.style.height="12vh",o.style.width="10vw",o.style.marginLeft="45vw",e.style.backgroundColor="green",e.append(o,n)}(),function(){let e=document.createElement("div");e.style.height="33vh",e.style.width="100vw",e.style.backgroundColor="red",e.style.marginTop="-15vh";let t=document.createElement("div");t.style.marginTop="7vh",t.style.backgroundColor="white",t.style.height="35.5vh",t.style.width="100vw",t.style.paddingBottom="10.5vh";let n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),m=document.createElement("div"),l=document.createElement("div"),p=document.createElement("div"),s=document.createElement("div"),u=document.createElement("br"),y=document.createElement("div"),g=document.createElement("div"),v=document.createElement("div"),h=document.createElement("div"),f=document.createElement("button");f.textContent="Home",f.style.marginLeft="48vw",n.textContent="At Bobby's pizza we use authentic recipes ",n.append(u),o.textContent="and fresh ingredients to create the meltiest,",n.append(o),n.append(u),r.textContent=" tastiest, handcrafted pizza possible, for you!",n.append(r),n.style.marginLeft="37vw",a.textContent="Monday: Closed ",c.textContent="Tuesday: 12pm-9pm",i.textContent="Wednesday: 12pm-9pm",m.textContent="Thursday 12pm-9pm",l.textContent="Friday 12pm-11pm",p.textContent="Saturday 12pm-11pm",s.textContent="Sunday 12pm-11pm",d.append(u,u,a,u,c,u,i,u,m,u,l,u,p,u,s,u),d.style.marginTop="2vh",d.style.marginLeft="37vw",y.append(u),y.append(u),y.textContent="We are conviniently located ",y.append(u),g.textContent="at platform 9 3/4,",y.append(g),y.append(u),v.textContent="at 1 Kings Cross Street, ",y.append(v),y.append(u),h.textContent="London, UK. Testing testing",y.append(h),y.style.marginLeft="37vw",t.append(f,u,n,d,y,e),document.body.append(t),document.body.style.backgroundColor="green",document.body.style.marginLeft="auto",document.body.style.fontFamily="cursive",document.body.style.fontSize="2rem",console.log("homeButton.js")}(),console.log("index.js")})();
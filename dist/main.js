(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var d=o.length-1;d>-1&&!t;)t=o[d--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"36f12681bd1392381408.png";!function(){console.log("testing pageIntro.js");let e=document.getElementById("content"),n=document.createElement("h1");n.textContent="Greatest Napolitan pizza, this side of the naples!";let o=document.createElement("img");o.setAttribute("src",`${t}`),o.setAttribute("width","10vw"),o.setAttribute("height","10vh"),e.append(o,n)}(),function(){let e=document.createElement("div");e.style.height="33vh",e.style.width="100vw",e.style.backgroundColor="red",e.style.marginTop="6vh";let t=document.createElement("div");t.style.marginTop="20vh",t.style.backgroundColor="white",t.style.height="35.5vh",t.style.width="100vw";let n=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),m=document.createElement("div"),p=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div"),u=document.createElement("br"),h=document.createElement("div"),v=document.createElement("div"),g=document.createElement("div"),y=document.createElement("div"),E=document.createElement("button");E.textContent="Home",n.textContent="At Bobby's pizza we use authentic recipes ",n.append(u),o.textContent="and fresh ingredients to create the meltiest,",n.append(o),n.append(u),d.textContent=" tastiest, handcrafted pizza possible, for you!",n.append(d),a.textContent="Monday: Closed ",c.textContent="Tuesday: 12pm-9pm",i.textContent="Wednesday: 12pm-9pm",m.textContent="Thursday 12pm-9pm",p.textContent="Friday 12pm-11pm",l.textContent="Saturday 12pm-11pm",s.textContent="Sunday 12pm-11pm",r.append(u,u,a,u,c,u,i,u,m,u,p,u,l,u,s,u),h.append(u),h.textContent="We are conviniently located ",h.append(u),v.textContent="at platform 9 3/4,",h.append(v),h.append(u),g.textContent="at 1 Kings Cross Street, ",h.append(g),h.append(u),y.textContent="London, UK.",h.append(y),t.append(E,u,n,r,h,e),document.body.append(t),document.body.style.backgroundColor="green",document.body.style.marginLeft="auto",console.log("homeButton.js")}(),console.log("index.js")})();
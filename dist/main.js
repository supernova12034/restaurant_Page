(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!t;)t=o[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"36f12681bd1392381408.png";let n={intro:document.createElement("div"),hours:document.createElement("div"),createHomeButton:function(){let e=document.createElement("div");e.style.height="33vh",e.style.width="100vw",e.style.backgroundColor="red",e.style.marginTop="-17vh",e.style.paddingTop="2vh";let t=document.createElement("div");t.style.marginTop="7vh",t.style.backgroundColor="white",t.style.height="36.5vh",t.style.width="100vw",t.style.paddingBottom="10.5vh";let n=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div"),m=document.createElement("br"),p=document.createElement("div"),u=document.createElement("div"),h=document.createElement("div"),y=document.createElement("div"),v=document.createElement("button");v.addEventListener("click",(()=>{this.intro.style.opacity="1",this.hours.style.opacity="1",pizzaNeopalitan.style.opacity="1"})),v.textContent="Home",v.style.marginLeft="37vw",v.style.height="5vh",v.style.width="7vw",this.intro.textContent="At Bobby's pizza we use authentic recipes ",this.intro.append(m),n.textContent="and fresh ingredients to create the meltiest,",this.intro.append(n),this.intro.append(m),o.textContent=" tastiest, handcrafted pizza possible, for you!",this.intro.append(o),this.intro.style.marginLeft="37vw",i.textContent="Monday: Closed ",a.textContent="Tuesday: 12pm-9pm",r.textContent="Wednesday: 12pm-9pm",d.textContent="Thursday 12pm-9pm",c.textContent="Friday 12pm-11pm",l.textContent="Saturday 12pm-11pm",s.textContent="Sunday 12pm-11pm",this.hours.append(m,m,i,m,a,m,r,m,d,m,c,m,l,m,s,m),this.hours.style.marginTop="2vh",this.hours.style.marginLeft="37vw",p.append(m),p.append(m),p.textContent="We are conviniently located ",p.append(m),u.textContent="at platform 9 3/4,",p.append(u),p.append(m),h.textContent="at 1 Kings Cross Street, ",p.append(h),p.append(m),y.textContent="London, UK. Testing testing",p.append(y),p.style.marginTop="2vh",p.style.marginLeft="37vw",t.append(v,m,this.intro,this.hours,p,e),document.body.append(t),document.body.style.backgroundColor="green",document.body.style.marginLeft="auto",document.body.style.fontFamily="cursive",document.body.style.fontSize="2rem"},homeOpacity:function(){console.log("opacity function homeButton.js"),this.intro.style.opacity="0",this.hours.style.opacity="0"}};n.createHomeButton(),console.log("index 1 "),function(){let e=document.getElementById("content"),n=document.createElement("h1");n.textContent="Greatest Napolitan pizza, this side of the naples!",n.style.marginLeft="20vw";let o=document.createElement("img");o.setAttribute("src",`${t}`),o.style.height="12vh",o.style.width="10vw",o.style.marginLeft="45vw",e.style.backgroundColor="green",e.append(o,n)}(),console.log("index 2"),console.log("index 3"),function(){let e=document.createElement("div");e.style.marginTop="-47vh",e.style.marginLeft="47vw";let t=document.createElement("button");t.textContent="Menu",t.style.height="5vh",t.style.width="7vw";let o=document.createElement("div");document.createElement("div"),document.createElement("div"),document.createElement("div"),o.innerHTML+="Our Signature Neopolitan pizza is made with quality, <br />",o.innerHTML+="buffalo mozarella cheese, and san marzano tomatoes, toped with fresh basil,  <br />",o.innerHTML+="produced by local farmers, with flavors that will remind you of naples!  <br />",o.style.opacity="0",e.append(t,o),document.body.append(e),t.addEventListener("click",(()=>{o.style.opacity="1",console.log("event listener activated, menuButton.js"),n.homeOpacity()}))}(),console.log("index 4")})();
(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!t;)t=i[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"36f12681bd1392381408.png";let n={mainDiv:document.createElement("div"),intro:document.createElement("div"),createHomeButton(){let e=document.createElement("div"),t=document.createElement("div");t.style.height="33vh",t.style.width="100vw",t.style.backgroundColor="red",t.style.marginTop="-17vh",t.style.paddingTop="2vh",this.mainDiv.style.marginTop="7vh",this.mainDiv.style.backgroundColor="white",this.mainDiv.style.height="36.5vh",this.mainDiv.style.width="100vw",this.mainDiv.style.paddingBottom="10.5vh";let n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div"),m=document.createElement("div"),l=document.createElement("div"),c=document.createElement("div"),s=document.createElement("br"),p=document.createElement("div"),u=document.createElement("div"),h=document.createElement("div"),v=document.createElement("div");this.intro.textContent="At Bobby's pizza we use authentic recipes ",this.intro.append(s),n.textContent="and fresh ingredients to create the meltiest,",this.intro.append(n),this.intro.append(s),i.textContent=" tastiest, handcrafted pizza possible, for you!",this.intro.append(i),this.intro.style.marginLeft="37vw",o.textContent="Monday: Closed ",a.textContent="Tuesday: 12pm-9pm",r.textContent="Wednesday: 12pm-9pm",d.textContent="Thursday 12pm-9pm",m.textContent="Friday 12pm-11pm",l.textContent="Saturday 12pm-11pm",c.textContent="Sunday 12pm-11pm",e.append(s,s,o,s,a,s,r,s,d,s,m,s,l,s,c,s),e.style.marginTop="2vh",e.style.marginLeft="37vw",p.append(s),p.append(s),p.textContent="We are conviniently located ",p.append(s),u.textContent="at platform 9 3/4,",p.append(u),p.append(s),h.textContent="at 1 Kings Cross Street, ",p.append(h),p.append(s),v.textContent="London, UK. Testing testing",p.append(v),p.style.marginTop="2vh",p.style.marginLeft="37vw",this.mainDiv.append(s,this.intro,e,p,t),document.body.append(this.mainDiv),document.body.style.backgroundColor="green",document.body.style.marginLeft="auto",document.body.style.fontFamily="cursive",document.body.style.fontSize="2rem"},homeAppear(){console.log("This function is inside home button function")}},i={menuButtonDiv:document.createElement("div"),pizzaNeopalitan:document.createElement("div"),createMenuButton(){this.menuButtonDiv.style.marginTop="-47vh",this.menuButtonDiv.style.marginLeft="47vw",document.createElement("div"),document.createElement("div"),document.createElement("div"),this.pizzaNeopalitan.innerHTML+="Our Signature Neopolitan pizza is made with quality, <br />",this.pizzaNeopalitan.innerHTML+="buffalo mozarella cheese, and san marzano tomatoes, toped with fresh basil,  <br />",this.pizzaNeopalitan.innerHTML+="produced by local farmers, with flavors that will remind you of naples!  <br />",this.pizzaNeopalitan.style.opacity="0",this.menuButtonDiv.append(this.pizzaNeopalitan),document.body.append(this.menuButtonDiv)},menuAppear(){console.log("This function is inside menu button function")}};!function(){let e=document.getElementById("content"),n=document.createElement("h1");n.textContent="Greatest Napolitan pizza, this side of the naples!",n.style.marginLeft="20vw";let i=document.createElement("img");i.setAttribute("src",`${t}`),i.style.height="12vh",i.style.width="10vw",i.style.marginLeft="45vw",e.style.backgroundColor="green",e.append(i,n)}(),n.createHomeButton(),i.createMenuButton();let o=document.createElement("div"),a=document.createElement("button");a.addEventListener("click",(()=>{n.homeAppear(),i.pizzaNeopalitan.style.opacity="0"})),a.textContent="Home",a.style.marginLeft="37vw",a.style.height="3.5vh",a.style.width="7vw";let r=document.createElement("button");r.textContent="Menu",r.style.height="3.5vh",r.style.width="7vw",r.addEventListener("click",(()=>{i.menuAppear(),n.intro.style.opacity="0"})),o.style.position="relative",o.style.bottom="12vh",o.append(a,r),document.body.append(o)})();
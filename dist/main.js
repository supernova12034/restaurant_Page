(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"36f12681bd1392381408.png";let n={mainDiv:document.createElement("div"),intro:document.createElement("div"),hours:document.createElement("div"),createHomeButton(){let t=document.createElement("div");t.style.height="33vh",t.style.width="100vw",t.style.backgroundColor="red",t.style.marginTop="-17vh",t.style.paddingTop="2vh",this.mainDiv.style.marginTop="7vh",this.mainDiv.style.backgroundColor="white",this.mainDiv.style.height="36.5vh",this.mainDiv.style.width="100vw",this.mainDiv.style.paddingBottom="10.5vh";let e=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),m=document.createElement("div"),l=document.createElement("br"),c=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div"),h=document.createElement("div");this.intro.textContent="At Bobby's pizza we use authentic recipes ",this.intro.append(l),e.textContent="and fresh ingredients to create the meltiest,",this.intro.append(e),this.intro.append(l),n.textContent=" tastiest, handcrafted pizza possible, for you!",this.intro.append(n),this.intro.style.marginLeft="37vw",i.textContent="Monday: Closed ",o.textContent="Tuesday: 12pm-9pm",a.textContent="Wednesday: 12pm-9pm",r.textContent="Thursday 12pm-9pm",d.textContent="Friday 12pm-11pm",s.textContent="Saturday 12pm-11pm",m.textContent="Sunday 12pm-11pm",this.hours.append(l,l,i,l,o,l,a,l,r,l,d,l,s,l,m,l),this.hours.style.marginTop="2vh",this.hours.style.marginLeft="37vw",c.append(l),c.append(l),c.textContent="We are conviniently located ",c.append(l),p.textContent="at platform 9 3/4,",c.append(p),c.append(l),u.textContent="at 1 Kings Cross Street, ",c.append(u),c.append(l),h.textContent="London, UK. Testing testing",c.append(h),c.style.marginTop="2vh",c.style.marginLeft="37vw",this.mainDiv.append(l,this.intro,this.hours,c,t),document.body.append(this.mainDiv),document.body.style.backgroundColor="green",document.body.style.marginLeft="auto",document.body.style.fontFamily="cursive",document.body.style.fontSize="2rem"},homeAppear(){console.log("This function is inside home button function")}},i={menuButtonDiv:document.createElement("div"),pizzaNeopalitan:document.createElement("div"),createMenuButton(){this.menuButtonDiv.style.marginTop="-47vh",this.menuButtonDiv.style.marginLeft="47vw",document.createElement("div"),document.createElement("div"),document.createElement("div"),this.pizzaNeopalitan.innerHTML+="Our Signature Neopolitan pizza is made with quality, <br />",this.pizzaNeopalitan.innerHTML+="buffalo mozarella cheese, and san marzano tomatoes, toped with fresh basil,  <br />",this.pizzaNeopalitan.innerHTML+="produced by local farmers, with flavors that will remind you of naples!  <br />",this.pizzaNeopalitan.style.opacity="0",this.menuButtonDiv.append(this.pizzaNeopalitan),document.body.append(this.menuButtonDiv)},menuAppear(){console.log("This function is inside menu button function")}};!function(){let t=document.getElementById("content"),n=document.createElement("h1");n.textContent="Greatest Napolitan pizza, this side of the naples!",n.style.marginLeft="20vw";let i=document.createElement("img");i.setAttribute("src",`${e}`),i.style.height="12vh",i.style.width="10vw",i.style.marginLeft="45vw",t.style.backgroundColor="green",t.append(i,n)}(),n.createHomeButton(),i.createMenuButton();let o=document.createElement("div"),a=document.createElement("button");a.addEventListener("click",(()=>{n.homeAppear(),i.pizzaNeopalitan.style.opacity="0"})),a.textContent="Home",a.style.marginLeft="37vw",a.style.height="3.5vh",a.style.width="7vw";let r=document.createElement("button");r.textContent="Menu",r.style.height="3.5vh",r.style.width="7vw",r.addEventListener("click",(()=>{i.menuAppear(),n.intro.style.opacity="0",n.hours.style.opacity="0"})),o.style.position="relative",o.style.bottom="12vh",o.append(a,r),document.body.append(o)})();
(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var i=t.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var n=i.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&!e;)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"36f12681bd1392381408.png";let i={mainDiv:document.createElement("div"),intro:document.createElement("div"),hours:document.createElement("div"),location:document.createElement("div"),createHomeButton(){let t=document.createElement("div");t.style.height="33vh",t.style.width="100vw",t.style.backgroundColor="red",t.style.marginTop="-17vh",t.style.paddingTop="2vh",this.mainDiv.style.marginTop="7vh",this.mainDiv.style.backgroundColor="white",this.mainDiv.style.height="36.5vh",this.mainDiv.style.width="100vw",this.mainDiv.style.paddingBottom="10.5vh";let e=document.createElement("div"),i=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),p=document.createElement("br"),h=document.createElement("div"),d=document.createElement("div"),m=document.createElement("div");this.intro.textContent="At Bobby's pizza we use authentic recipes ",this.intro.append(p),e.textContent="and fresh ingredients to create the meltiest,",this.intro.append(e),this.intro.append(p),i.textContent=" tastiest, handcrafted pizza possible, for you!",this.intro.append(i),this.intro.style.marginLeft="37vw",n.textContent="Monday: Closed ",a.textContent="Tuesday: 12pm-9pm",o.textContent="Wednesday: 12pm-9pm",s.textContent="Thursday 12pm-9pm",r.textContent="Friday 12pm-11pm",c.textContent="Saturday 12pm-11pm",l.textContent="Sunday 12pm-11pm",this.hours.append(p,p,n,p,a,p,o,p,s,p,r,p,c,p,l,p),this.hours.style.marginTop="2vh",this.hours.style.marginLeft="37vw",this.location.append(p),this.location.append(p),this.location.textContent="We are conviniently located ",this.location.append(p),h.textContent="at platform 9 3/4,",this.location.append(h),this.location.append(p),d.textContent="at 1 Kings Cross Street, ",this.location.append(d),this.location.append(p),m.textContent="London, UK. Testing testing",this.location.append(m),this.location.style.marginTop="2vh",this.location.style.marginLeft="37vw",this.mainDiv.append(p,this.intro,this.hours,this.location,t),document.body.append(this.mainDiv),document.body.style.backgroundColor="green",document.body.style.marginLeft="auto",document.body.style.fontFamily="cursive",document.body.style.fontSize="2rem"},homeAppear(){this.intro.style.opacity="1",this.hours.style.opacity="1",this.location.style.opacity="1",console.log("This function is inside home button function")}},n={menuButtonDiv:document.createElement("div"),pizzaNeopalitan:document.createElement("div"),pizzaPatatosa:document.createElement("div"),pizzaScicilian:document.createElement("div"),pizzaMelanzane:document.createElement("div"),createMenuButton(){this.menuButtonDiv.style.marginTop="-47vh",this.menuButtonDiv.style.marginLeft="47vw",this.pizzaNeopalitan.innerHTML+="Our Signature Neopolitan pizza is made with quality, <br />",this.pizzaNeopalitan.innerHTML+="buffalo mozarella cheese, and san marzano tomatoes, toped with fresh basil,  <br />",this.pizzaNeopalitan.innerHTML+="produced by local farmers, with flavors that will remind you of naples!  <br />",this.pizzaNeopalitan.style.opacity="0",this.pizzaPatatosa.innerHTML+="<br> Our Potato pizza uses quality homegrown potatoes from PEI, <br />",this.pizzaPatatosa.innerHTML+="extra virgin olive oil, topped with sea salt",this.pizzaPatatosa.style.opacity="0",this.pizzaScicilian.innerHTML+="<br> Our Scicilian pizza is made of specially prepared spongey dough </br> ",this.pizzaScicilian.innerHTML+="covered with savory sauce, breadcrumbs and goats cheese",this.pizzaScicilian.style.opacity="0",this.pizzaMelanzane.innerHTML+="<br> Our pizza melanzane is prepared with our fresh dough, tomato sauce </br>",this.pizzaMelanzane.innerHTML+="slices of fried eggplant, and topped with mozarella cheese",this.menuButtonDiv.append(this.pizzaNeopalitan,this.pizzaPatatosa,this.pizzaScicilian,this.pizzaMelanzane),document.body.append(this.menuButtonDiv)},menuAppear(){console.log("This function is inside menu button function"),this.pizzaNeopalitan.style.opacity="1",this.pizzaPatatosa.style.opacity="1",this.pizzaScicilian.style.opacity="1",this.pizzaMelanzane.style.opacity="1"}},a={contactDiv:document.createElement("div"),owner:document.createElement("div"),manager:document.createElement("div"),chef:document.createElement("div"),createContact(){this.owner.innerHTML+="The owner of our establishment is mark </br>",this.owner.innerHTML+="who is very passionate about pizzas and food in general </br>",this.owner.innerHTML+="many of the dishes are inspired by the creations of his grandma </br>",this.owner.style.opacity="0",this.manager.innerHTML+="<br>The manager of our establishment is stacey </br>",this.manager.innerHTML+="who has extensive experience in the food and beverage industry </br>",this.manager.innerHTML+="both as an employee and management </br>",this.manager.style.opacity="0",this.chef.innerHTML+="<br>Our esteemed chef giovanni and the owner mark are lifelong friends, </br> ",this.chef.innerHTML+="who grew up toghether, they both share passion for food, </br>",this.chef.innerHTML+="gio went to culinary school, and was trained by elite chefs in italy. </br>",this.chef.innerHTML+="He too posesses extensive experience in the culinary industry, </br>",this.chef.innerHTML+="and is pleased to share his passion and cooking with you!",this.chef.style.opacity="0",this.contactDiv.append(this.owner,this.manager,this.chef),this.contactDiv.style.position="relative",this.contactDiv.style.left="30vw",this.contactDiv.style.bottom="45vh",document.body.append(this.contactDiv)},contactAppear(){this.owner.style.opacity="1",this.manager.style.opacity="1",this.chef.style.opacity="1"}};!function(){let t=document.getElementById("content"),i=document.createElement("h1");i.textContent="Greatest Napolitan pizza, this side of the naples!",i.style.marginLeft="20vw";let n=document.createElement("img");n.setAttribute("src",`${e}`),n.style.height="12vh",n.style.width="10vw",n.style.marginLeft="45vw",t.style.backgroundColor="green",t.append(n,i)}(),i.createHomeButton(),n.createMenuButton(),a.createContact();let o=document.createElement("div"),s=document.createElement("button");s.addEventListener("click",(()=>{i.homeAppear(),n.pizzaNeopalitan.style.opacity="0",n.pizzaPatatosa.style.opacity="0",n.pizzaScicilian.style.opacity="0",n.pizzaMelanzane.style.opacity="0",a.owner.style.opacity="0",a.manager.style.opacity="0",a.chef.style.opacity="0"})),s.textContent="Home",s.style.marginLeft="37vw",s.style.height="3.5vh",s.style.width="7vw";let r=document.createElement("button");r.textContent="Menu",r.style.height="3.5vh",r.style.width="7vw",r.addEventListener("click",(()=>{n.menuAppear(),i.intro.style.opacity="0",i.hours.style.opacity="0",i.location.style.opacity="0",a.owner.style.opacity="0",a.manager.style.opacity="0",a.chef.style.opacity="0"})),o.style.position="relative",o.style.bottom="12vh";let c=document.createElement("button");c.textContent="Contact",c.style.height="3.5vh",c.style.width="7vw",c.addEventListener("click",(()=>{a.contactAppear(),n.pizzaNeopalitan.style.opacity="0",n.pizzaPatatosa.style.opacity="0",n.pizzaScicilian.style.opacity="0",n.pizzaMelanzane.style.opacity="0",i.intro.style.opacity="0",i.hours.style.opacity="0",i.location.style.opacity="0"})),o.append(s,r,c),document.body.append(o)})();
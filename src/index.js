

import {pageLoad} from './pageIntro';
import {homeObj} from './homeButton';
import{menuObj} from './menuButton';
import { contactObj } from './contactButton';

/*What do we do now? Fix the little initial page loading, text overlay bug?? 
parts of the menu text appear on the initial loadup when it shouldnt...

*/

pageLoad();

homeObj.createHomeButton();
menuObj.createMenuButton();
contactObj.createContact();

 let buttonDiv = document.createElement('div');
 let homeBtn = document.createElement('button');


 homeBtn.addEventListener('click',()=>{

    
    homeObj.homeAppear();

    menuObj.pizzaNeopalitan.style.opacity = '0';
    menuObj.pizzaPatatosa.style.opacity = '0';
    menuObj.pizzaScicilian.style.opacity = '0';
    menuObj.pizzaMelanzane.style.opacity = '0';
    
    contactObj.owner.style.opacity = '0';
    contactObj.manager.style.opacity = '0';
    contactObj.chef.style.opacity = '0';
                                        
 });

 homeBtn.textContent = 'Home';
 homeBtn.style.marginLeft = '37vw';
 homeBtn.style.height = '3.5vh'; 
 homeBtn.style.width = '7vw';

//-------------------------
let menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.style.height = '3.5vh';
menuBtn.style.width = '7vw';



menuBtn.addEventListener('click',()=>{
    
    menuObj.menuAppear();

    homeObj.intro.style.opacity = '0'; 
    homeObj.hours.style.opacity = '0';  
    homeObj.location.style.opacity = '0';
    
    contactObj.owner.style.opacity = '0';
    contactObj.manager.style.opacity = '0';
    contactObj.chef.style.opacity = '0';
});



//---------------------------
//We're here.
let contactButton = document.createElement('button');
contactButton.textContent = 'Contact';
contactButton.style.height ='3.5vh';
contactButton.style.width ='7vw';

contactButton.addEventListener('click',()=>{
    contactObj.contactAppear();

    menuObj.pizzaNeopalitan.style.opacity = '0';
    menuObj.pizzaPatatosa.style.opacity = '0';
    menuObj.pizzaScicilian.style.opacity = '0';
    menuObj.pizzaMelanzane.style.opacity = '0';

    homeObj.intro.style.opacity = '0'; 
    homeObj.hours.style.opacity = '0';  
    homeObj.location.style.opacity = '0';


});

buttonDiv.style.position = 'relative';
buttonDiv.style.bottom = '170vh'; 
//buttonDiv.style.right = '5vw'; 
buttonDiv.append(homeBtn,menuBtn,contactButton); 



document.body.append(buttonDiv);
 



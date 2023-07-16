

import {pageLoad} from './pageIntro';
import {homeObj} from './homeButton';
import{menuObj} from './menuButton';



pageLoad();

homeObj.createHomeButton();
 menuObj.createMenuButton();

 let buttonDiv = document.createElement('div');
 let homeBtn = document.createElement('button');


 homeBtn.addEventListener('click',()=>{

    
    homeObj.homeAppear();
    menuObj.pizzaNeopalitan.style.opacity = '0';
    //homeBtn makes the menu stuff disappear.

    /* We're here! It works,
    now just gotta figure out what to do next...maybe add more content to home 
    and menu?? */
                                        
 });

 homeBtn.textContent = 'Home';
 homeBtn.style.marginLeft = '37vw';
 homeBtn.style.height = '3.5vh'; 
 homeBtn.style.width = '7vw';




let menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.style.height = '3.5vh';
menuBtn.style.width = '7vw';



menuBtn.addEventListener('click',()=>{
    
    menuObj.menuAppear();
    homeObj.intro.style.opacity = '0'; //Fixed, it works!
    homeObj.hours.style.opacity = '0';  
    homeObj.location.style.opacity = '0';
    //menuBtn makes the home stuff disappear.
});

buttonDiv.style.position = 'relative';
buttonDiv.style.bottom = '12vh';

buttonDiv.append(homeBtn,menuBtn); 



document.body.append(buttonDiv);
 



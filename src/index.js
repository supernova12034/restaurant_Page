

import {pageLoad} from './pageIntro';
import {homeObj} from './homeButton';
import{menuObj} from './menuButton';



pageLoad();

homeObj.createHomeButton();

 menuObj.createMenuButton();

 let buttonDiv = document.createElement('div');

 let homeBtn = document.createElement('button');
 homeBtn.addEventListener('click',()=>{

    homeObj.insideHome();
    
   
     
   
                                         /* We're here...
                                         have to figure out the logic
                                         of this section...
                                         Upon clicking these buttons,
                                         one set of text should appear
                                         and the other disappear,
                                         HOWEVER, this should be done 
                                         WITHOUT circular dependencies...
                                         
                                         Should this code be in index.js?
                                         since it imports everything
                                         (Try this...
                                             Maybe we should create the 
                                             buttons themselves in index.js
                                             as well?)
                                         */
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
    
    menuObj.insideMenu();
    
});

buttonDiv.style.position = 'relative';
buttonDiv.style.bottom = '12vh';

buttonDiv.append(homeBtn,menuBtn); 

/*It worked! Now just have to position the buttons  
correctly and get the opacity functionality set up.
Have to modify css position property in order to unfreeze buttons!

*/

document.body.append(buttonDiv);
 



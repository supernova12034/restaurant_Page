// import {createHomeButton} from './homeButton';
import * as home from './homeButton';
home.createHomeButton(); 
//We're here, executed the function here instead of index.js
//Still getting an error though. Ask for help.

export function createMenuButton(){
   
                                    
let menuButtonDiv = document.createElement('div');
menuButtonDiv.style.marginTop = '-47vh';        //we styled the parent div(its better)
menuButtonDiv.style.marginLeft = '47vw';

let menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.style.height = '5vh';
menuBtn.style.width = '7vw';

menuButtonDiv.append(menuBtn); 
document.body.append(menuButtonDiv);

menuBtn.addEventListener('click',()=>{
    console.log('event listener activated, menuButton.js');
    home.homeOpacity();
    // homeOpacity(); 
});

}
/*We're here. Didnt work, trying to 
narrow down the problem, no idea where it is.
Could be in index.js
homeButton.js
menuButton.js

*/


//----Notes:---------

/*


tab 1)Home (with Intro, hours, location)
tab 2)Menu
tab 3)Contact
 
Create a seperate module for each 'tab' and export and import
them all into index.js

 Just creating the actual content for the 'tabs'.
*/


 /*
So whatever is imported, stays as it is, a function
remains a function, a variable remains a variable, an object remains
an object, and must be treated as such, even if its name is 
changed in the new module.*/ 
//experiment.


/*
Creating buttons that allow you to 'tab' into
various pages without leaving the actual page?   <---We're here now.

-Upon clicking the button, disappear the text from the other div?
And appear the text from the current button div?(YES! You can use style.opacity)
 */
import {createHomeButton} from './homeButton';

/*Creating buttons that allow you to 'tab' into
various pages without leaving the actual page?

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

export function createMenuButton(){
   
                                    
let menuButtonDiv = document.createElement('div');

let menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.style.height = '5vh';
menuBtn.style.width = '7vw';
menuButtonDiv.append(menuBtn); 
document.body.append(menuButtonDiv);

}
//why not just append menuBtn in its own div
//instead of trying to put it in the div from a different
//module?? (IT WORKED!!!) We're here. Now just gotta position it correctly.
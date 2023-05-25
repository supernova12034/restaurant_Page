import {createHomeButton as homeB } from './homeButton';

/*Creating buttons that allow you to 'tab' into
various pages without leaving the actual page?

tab 1)Home (with Intro, hours, location)
tab 2)Menu
tab 3)Contact
 
Create a seperate module for each 'tab' and export and import
them all into index.js

 Just creating the actual content for the 'tabs'.
*/

// homeB(); 
 /*It worked! But it might not be the right approach for us.
So whatever is imported, stays as it is, a function
remains a function, a variable remains a variable, an object remains
an object, and must be treated as such, even if its name is 
changed in the new module.*/ 
//experiment.

export function createMenuButton(){
    console.log('testing menu button 1 '); //code seems to work upto here.
    
//We're here, have to create menu button, and see that it works right.
//where will the menu button be appended to? a new div? the other 
//div in the different module?? Will we have to import the other module?
//Already imported other module.
let menuMainDiv = document.createElement('div');

let menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.style.height = '5vh';
menuBtn.style.width = '5vw';
mainDiv.append(menuBtn); //experiment. We're here. The button isnt appearing?
console.log('testing menu button 2');

}
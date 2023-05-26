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
    console.log('testing menu button 1 '); //code seems to work upto here.
    console.log(accessVariable); /* We're here.
                                    Cant access this test variable..
                                    also says what we import is declared
                                    but never used? 
                                    Also getting error that says accessVariable
                                    is not defined...
                                    This is all related. 
                                    ALso read into let, var, const...
                                    they may be causing problems as well..*/   

let menuMainDiv = document.createElement('div');

let menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.style.height = '5vh';
menuBtn.style.width = '5vw';
mainDiv.append(menuBtn); //experiment. We're here. The button isnt appearing?
console.log('testing menu button 2');

}
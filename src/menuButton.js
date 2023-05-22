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


export function createMenuButton(){
//We're here, have to create menu button, and see that it works right.
//where will the menu button be appended to? a new div? the other 
//div in the different module?? Will we have to import the other module?
//Already imported other module.
let menuMainDiv = document.createElement('div');

let menuBtn = document.createElement('button');



}
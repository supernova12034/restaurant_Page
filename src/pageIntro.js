/* Title: Greatest Napolitan pizza, this side of the naples!
img src "/home/sahil/restPage/src/pizza.png"
*/

//need to import the pizza image here.
/*Trying to see how to import, which files to set
in the HTML doc as type=module to be able to use import/export.
*/
import pizza from './pizza.png';
//now lets see if importing of the image worked.
export function pageLoad(){
console.log('testing pageIntro.js');
let div1 = document.getElementById('content');

let header1 = document.createElement('h1');    
header1.textContent='Greatest Napolitan pizza, this side of the naples!';

let image1 = document.createElement('img');
image1.setAttribute('src','pizza');
image1.setAttribute('width','10vw');
image1.setAttribute('height','10vh');
div1.append(image1,header1);
//We're here. Export this function, then import inside 
//index.js and call it.
}
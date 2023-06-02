/* Title: Greatest Napolitan pizza, this side of the naples!
img src "/home/sahil/restPage/src/pizza.png"
*/

//need to import the pizza image here.
/*Trying to see how to import, which files to set
in the HTML doc as type=module to be able to use import/export.
*/
import pizza from './pizza.png';

export function pageLoad(){

let div1 = document.getElementById('content');

let header1 = document.createElement('h1');    
header1.textContent='Greatest Napolitan pizza, this side of the naples!';
header1.style.marginLeft = '20vw';

let image1 = document.createElement('img');
image1.setAttribute('src',`${pizza}`); //it works like this!
image1.style.height = '12vh';
image1.style.width = '10vw';
image1.style.marginLeft = '45vw';

div1.style.backgroundColor = 'green';
div1.append(image1,header1);

}
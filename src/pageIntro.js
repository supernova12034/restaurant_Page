/*Making good progress, 
gotta move the center text up now. */

import pizza from './pizza.png';

export function pageLoad(){

let div1 = document.getElementById('content');

let header1 = document.createElement('h1');    
header1.textContent='Greatest Napolitan pizza, this side of the naples!';
header1.style.marginLeft = '20vw';

let image1 = document.createElement('img');
image1.setAttribute('src',`${pizza}`); //it works!
image1.style.height = '12vh';
image1.style.width = '10vw';
image1.style.marginLeft = '45vw';

//div1.style.marginTop = '20vh';
div1.style.paddingTop = '40vh';
div1.style.backgroundColor = 'green';
div1.style.height = '800px'; //experiment
div1.append(image1,header1);

}
//solved an earlier problem with webpack,
//solved another problem with CORS error(by opening a
//local web server) but now for some reason, 
//when I try to use the imported module,
//it throws a weird error?

import {pageLoad} from './pageIntro';
import {createHomeButton} from './homeButton';
import {createMenuButton} from './menuButton';
console.log('index 1 ');
pageLoad();
console.log('index 2');
createHomeButton();
console.log('index 3');
createMenuButton(); 
console.log('index 4');


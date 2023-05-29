//solved an earlier problem with webpack,
//solved another problem with CORS error(by opening a
//local web server) but now for some reason, 
//when I try to use the imported module,
//it throws a weird error?

import {pageLoad} from './pageIntro';
import {createHomeButton} from './homeButton';
import {createMenuButton} from './menuButton';

pageLoad();
console.log("index1");
createHomeButton();
console.log("index2");
//after this line problem starts.
createMenuButton(); //experiment
console.log("index3");
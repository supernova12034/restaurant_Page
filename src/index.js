//solved an earlier problem with webpack,
//solved another problem with CORS error(by opening a
//local web server) but now for some reason, 
//when I try to use the imported module,
//it throws a weird error?

import {pageLoad} from './pageIntro';
import {createHomeButton} from './homeButton';
import {createMenuButton} from './menuButton';

pageLoad();

createHomeButton();

createMenuButton(); 

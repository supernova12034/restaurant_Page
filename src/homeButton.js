/*Creating buttons that allow you to 'tab' into
various pages without leaving the actual page?

tab 1)Home (with Intro, hours, location)
tab 2)Menu
tab 3)Contact
 
Create a seperate module for each 'tab' and export and import
them all into index.js

We're here. Just creating the actual content for the 'tabs'.
*/

export function createHomeButton(){
    let homeDiv= document.createElement('div');
    let intro = document.createElement('div');
    let hours = document.createElement('div');
    let location = document.createElement('div');

    let homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';

    intro.textContent = "At Bobby's pizza we use authentic recipes " +
    'and fresh ingredients to create the meltiest, tastiest, handcrafted ' +
    'pizza possible for you!';

    hours.textContent = 'Hours: \n' +
    'Monday: Closed \n' +
    'Tuesday: 12pm-9pm \n' +
    'Wednesday: 12pm-9pm \n' +
    'Thursday 12pm-9pm \n' + 
    'Friday 12pm-11pm \n' +
    'Saturday 12pm-11pm \n' +
    'Sunday 12pm-11pm' ;

    //We're here, creating content for our tabs,
    

    homeDiv.append(homeBtn);     
    document.body.append(homeDiv);//it worked!
    console.log('homeButton.js');
}
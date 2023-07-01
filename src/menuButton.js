console.log('menu module');
export {createMenuButton};





    /*Bring the pizza neopolitan up and treated it as
    a property, so you can access it from the other module to 
    affect its opacity. */
    
     
    function createMenuButton(){
   
                                    
        let menuButtonDiv = document.createElement('div');
        menuButtonDiv.style.marginTop = '-47vh';        
        menuButtonDiv.style.marginLeft = '47vw';
        
        let menuBtn = document.createElement('button');
        menuBtn.textContent = 'Menu';
        menuBtn.style.height = '5vh';
        menuBtn.style.width = '7vw';
        
       let pizzaNeopalitan = document.createElement('div');
       let pizzaPatatosa = document.createElement('div');
       let pizzaScicilian = document.createElement('div');
       let pizzaMelanzane = document.createElement('div');

        
        pizzaNeopalitan.innerHTML += 'Our Signature Neopolitan pizza is made with quality, <br />';
        pizzaNeopalitan.innerHTML += 'buffalo mozarella cheese, and san marzano tomatoes, toped with fresh basil,  <br />';
        pizzaNeopalitan.innerHTML += 'produced by local farmers, with flavors that will remind you of naples!  <br />';
        pizzaNeopalitan.style.opacity = '0';
        /*we're here. Trying to put the menu onto the page,
        set its opacity to 0, and then upon clicking the menu button, 
        setting its opacity to 1.  (We're using innerHTML to put the 
        text on several lines, since that doesnt work well with textContent.)
        (It works!)
        But in addition we also have to make the rest of the home content disappear
        AND add the rest of the pizza's to the menu
        
        Have to make the pizza menu disappear once the home button is clicked.
        */
        
        
        menuButtonDiv.append(menuBtn,pizzaNeopalitan); 
        document.body.append(menuButtonDiv);
        
        menuBtn.addEventListener('click',()=>{
            pizzaNeopalitan.style.opacity = '1';
            
            home.homeOpacity();
            
        });
        
        }
        





/*We're here.
Right now the menu button just makes the home button content disappear,
Now we have to create an actual menu, then in addition to making the other
content disappear, we have to make the new content appear when the 
menu button is pressed. 

Menu content:
-Neopolitan pizza (pic done)


-Pizza Patatosa (pic done)
Our patatosa pizza is made with top quality thinly sliced potatoes, bathed in 
a marinate of extra virgin olive oil, herbs, and sea salt, and topped with 
delicious buffalo mozarella cheese!
-sicilian pizza (pic done)
Our sicilian pizza is made of thick crust,
with toppings that include onions, tomatoes, anchovies, toma cheese.
-Pizza Melanzane(pic done)
Our pizza Melanzane is prepared with fresh slices of fried eggplant and
buffalo mozarella cheese, topped with extra virgin olive oil, 
and your choice of herbs.
*/




//----Notes:---------

/*


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


/*
Creating buttons that allow you to 'tab' into
various pages without leaving the actual page?   <---We're here now.

-Upon clicking the button, disappear the text from the other div?
And appear the text from the current button div?(YES! You can use style.opacity)
 */
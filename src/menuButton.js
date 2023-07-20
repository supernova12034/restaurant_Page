
export {menuObj};

//replicate this style in homeButton.js as well.

let menuObj = {
     menuButtonDiv:document.createElement('div'),
     pizzaNeopalitan:document.createElement('div'), 
     pizzaPatatosa:document.createElement('div'),
     pizzaScicilian:document.createElement('div'),
     pizzaMelanzane:document.createElement('div'),

     createMenuButton(){                                 
        
        this.menuButtonDiv.style.marginTop = '-47vh';        
        this.menuButtonDiv.style.marginLeft = '47vw';
        
        this.pizzaNeopalitan.innerHTML += 'Our Signature Neopolitan pizza is made with quality, <br />';
        this.pizzaNeopalitan.innerHTML += 'buffalo mozarella cheese, and san marzano tomatoes, toped with fresh basil,  <br />';
        this.pizzaNeopalitan.innerHTML += 'produced by local farmers, with flavors that will remind you of naples!  <br />';
        this.pizzaNeopalitan.style.opacity = '0'; 

        //we're here, what should we do next?? (Contact page?)
        this.pizzaPatatosa.innerHTML += '<br> Our Potato pizza uses quality homegrown potatoes from PEI, <br />';
        this.pizzaPatatosa.innerHTML += 'extra virgin olive oil, topped with sea salt';
        this.pizzaPatatosa.style.opacity = '0';

        this.pizzaScicilian.innerHTML += '<br> Our Scicilian pizza is made of specially prepared spongey dough </br> ';
        this.pizzaScicilian.innerHTML += 'covered with savory sauce, breadcrumbs and goats cheese';
        this.pizzaScicilian.style.opacity = '0';

        this.pizzaMelanzane.innerHTML += '<br> Our pizza melanzane is prepared with our fresh dough, tomato sauce </br>';
        this.pizzaMelanzane.innerHTML += 'slices of fried eggplant, and topped with mozarella cheese';
        
        this.menuButtonDiv.append(this.pizzaNeopalitan,this.pizzaPatatosa,this.pizzaScicilian,this.pizzaMelanzane); 
        document.body.append(this.menuButtonDiv);
       
        
        },

        menuAppear(){
            console.log('This function is inside menu button function');
            this.pizzaNeopalitan.style.opacity = '1';
            this.pizzaPatatosa.style.opacity = '1';
            this.pizzaScicilian.style.opacity = '1';
            this.pizzaMelanzane.style.opacity = '1';

        }

};


    
     
    
        





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
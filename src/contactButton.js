
export{contactObj};

let contactObj = {
contactDiv:document.createElement('div'),

owner:document.createElement('div'),
manager:document.createElement('div'),
chef:document.createElement('div'),

     createContact(){
        this.owner.innerHTML += 'The owner of our establishment is mark </br>';
        this.owner.innerHTML += 'who is very passionate about pizzas and food in general </br>';
        this.owner.innerHTML += 'many of the dishes are inspired by the creations of his grandma </br>';
        this.owner.style.opacity = '0';

        this.manager.innerHTML += 'The manager of our establishment is stacey </br>';
        this.manager.innerHTML += 'who has extensive experience in the food and beverage industry </br>';
        this.manager.innerHTML += 'both as an employee and management </br>';
        this.manager.style.opacity = '0';

        this.chef.innerHTML += 'Our esteemed chef giovanni and the owner mark are lifelong friends, </br> ';
        this.chef.innerHTML += 'who grew up toghether, they both share passion for food, </br>';
        this.chef.innerHTML += 'gio went to culinary school, and was trained by elite chefs in italy. </br>';
        this.chef.innerHTML += 'He too posesses extensive experience in the culinary industry, </br>';
        this.chef.innerHTML += 'and is pleased to share his passion and cooking with you!';
        this.chef.style.opacity = '0';

        this.contactDiv.append(this.owner,this.manager,this.chef);   //We're here...
        
        document.body.append(this.contactDiv);
        
    },
    contactAppear(){
        this.owner.style.opacity = '1';
        this.manager.style.opacity = '1';
        this.chef.style.opacity = '1';
    }

};
/* We're here, have to adjust positioning of content, 
as well as space it out a bit better.
*/
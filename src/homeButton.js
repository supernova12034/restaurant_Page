
    export {homeObj}; 
    
  

 
       
    let homeObj = {
        mainDiv: document.createElement('div'),
        intro: document.createElement('div') ,
        hours:document.createElement('div'), 
        location:document.createElement('div'),
         createHomeButton(){

        
                
            this.mainDiv.style.marginTop = '3vh';    
            this.mainDiv.style.backgroundColor = 'white';
            this.mainDiv.style.height = '70vh'; //adjusting this works.
            this.mainDiv.style.width = '120vw';
            this.mainDiv.style.paddingBottom = '10.5vh';
            this.mainDiv.style.position = 'relative';
            // this.mainDiv.style.right = '30vw'; //this doesnt seem to be working..
            this.mainDiv.style.left = '-7vw'; 
            this.mainDiv.style.top = '3.5vh';
            /*All the paragraphs seem to be the same width...
            now just have to tweak their positioning...*/
            
            let bottomStyle = document.createElement('div');
            bottomStyle.style.height = '100vh'; 
            bottomStyle.style.width = '120vw';
            bottomStyle.style.backgroundColor = 'red';
            bottomStyle.style.marginTop = '35vh';  
            bottomStyle.style.paddingTop = '5vh';
            bottomStyle.style.position = 'relative';
            
            let intro2 = document.createElement('div');
            let intro3 = document.createElement('div');
        
            
            let day1 = document.createElement('div');
            let day2 = document.createElement('div');
            let day3 = document.createElement('div');
            let day4 = document.createElement('div');
            let day5 = document.createElement('div');
            let day6 = document.createElement('div');
            let day7 = document.createElement('div');
            
            
            
            let location2 = document.createElement('div');
            let location3 = document.createElement('div');
            let location4 = document.createElement('div');
        
            
            
        
            this.intro.innerHTML = "At Bobby's pizza we use authentic recipes , and fresh ingredients </br>";
            
            intro3.innerHTML = 'to create the meltiest tastiest, handcrafted pizza possible, for you! </br>';
            this.intro.append(intro3);
            this.intro.style.marginLeft = '37vw';
            //tweaking this.
            
            
        
            day1.innerHTML = 'Monday: Closed </br>';
            day2.innerHTML = 'Tuesday: 12pm-9pm </br>';
            day3.innerHTML = 'Wednesday: 12pm-9pm </br>';
            day4.innerHTML = 'Thursday 12pm-9pm </br>';
            day5.innerHTML = 'Friday 12pm-11pm </br>';
            day6.innerHTML = 'Saturday 12pm-11pm </br>';
            day7.innerHTML = 'Sunday 12pm-11pm </br>';
        
            this.hours.append(day1,day2,day3,day4,day5,day6,day7);
            this.hours.style.marginTop = '2vh';
            this.hours.style.marginLeft = '37vw';
        
            
            this.location.innerHTML = 'We are conviniently located, at platform 9 3/4,</br>';
        
            
            
            
            location3.innerHTML = 'at 1 Kings Cross Street, London, UK. Testing testing  </br>';
            this.location.append(location3);
            
            
            
            this.location.style.marginTop = '2vh';
            this.location.style.marginLeft = '37vw';
        
            

           

            //-Apparently innerHTML cant be split up into
            //multiple lines...might have to try different
            //approach
            //-Might have to create elements for each line/day and
            //append them into the hours div? (It worked!)
           
            
            this.mainDiv.append(this.intro,this.hours,this.location,bottomStyle);     
            document.body.append(this.mainDiv);
            document.body.style.backgroundColor = 'white';
            document.body.style.marginLeft = 'auto';
            document.body.style.fontFamily = 'cursive','Consolas','Lucida Sans Typewriter';
            document.body.style.fontSize = '2rem';
            document.body.style.position = 'relative'; //experiment We're here..didnt work
            document.body.style.height = '800px'; //experiment
            
            
        },
        //One method for disappearing content
        /*The method for disappearing content MUST be in the index.js
        file, since the index.js file can access every module via importing,
         and these modules should NOT import any other modules*/

        //And another method for appearing content? 
        //And then calling the methods in the index file.
        //Remember no circular dependencies. No importing into this module.
         homeAppear(){
            //We're here.
             this.intro.style.opacity = '1'; //Fixed, it works!
             this.hours.style.opacity = '1';  
             this.location.style.opacity = '1';
            
            console.log('This function is inside home button function');
        },


    };

        

         
        


    



//-------Notes------------
/*Creating buttons that allow you to 'tab' into
various pages without leaving the actual page?

tab 1)Home (with Intro, hours, location)
tab 2)Menu
tab 3)Contact
 
Create a seperate module for each 'tab' and export and import
them all into index.js

 Just creating the actual content for the 'tabs'.

----

          //We're here.
    //Lets find out which module is executing in which order,
    //maybe that will give us a clue as to why the page turns blank
    //when we import menu?

     /* Should I turn these objects into 
     constructor functions, so we can use them to create 
     objects and access their properties without having to 
     execute them?*/

    /* Guess we're gonna have to turn 
    createMenuButton into an object as well(like we 
        did with home object)so as to bypass the scope access
    issues etc... 
    
*/
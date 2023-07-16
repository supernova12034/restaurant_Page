
    export {homeObj}; 
    
  

 /*So far so good */    
       
    let homeObj = {
        mainDiv: document.createElement('div'),
        intro: document.createElement('div') ,
        hours:document.createElement('div'), //we're here.
        location:document.createElement('div'),
         createHomeButton(){

        

            let bottomStyle = document.createElement('div');
            bottomStyle.style.height = '33vh';
            bottomStyle.style.width = '100vw';
            bottomStyle.style.backgroundColor = 'red';
            bottomStyle.style.marginTop = '-17vh'; 
            bottomStyle.style.paddingTop = '2vh';
               
            
             
            this.mainDiv.style.marginTop = '7vh';
            this.mainDiv.style.backgroundColor = 'white';
            this.mainDiv.style.height = '36.5vh';
            this.mainDiv.style.width = '100vw';
            this.mainDiv.style.paddingBottom = '10.5vh';
            
            
           
            
            let intro2 = document.createElement('div');
            let intro3 = document.createElement('div');
        
            
            let day1 = document.createElement('div');
            let day2 = document.createElement('div');
            let day3 = document.createElement('div');
            let day4 = document.createElement('div');
            let day5 = document.createElement('div');
            let day6 = document.createElement('div');
            let day7 = document.createElement('div');
            let lineBreak = document.createElement('br');
            
            
            let location2 = document.createElement('div');
            let location3 = document.createElement('div');
            let location4 = document.createElement('div');
        
            
            
        
            this.intro.textContent = "At Bobby's pizza we use authentic recipes ";
            this.intro.append(lineBreak);
            intro2.textContent = 'and fresh ingredients to create the meltiest,';
            this.intro.append(intro2);
            this.intro.append(lineBreak);
            intro3.textContent = ' tastiest, handcrafted pizza possible, for you!';
            this.intro.append(intro3);
            this.intro.style.marginLeft = '37vw';
            
            
        
            day1.textContent = 'Monday: Closed ';
            day2.textContent = 'Tuesday: 12pm-9pm';
            day3.textContent = 'Wednesday: 12pm-9pm';
            day4.textContent = 'Thursday 12pm-9pm';
            day5.textContent = 'Friday 12pm-11pm';
            day6.textContent = 'Saturday 12pm-11pm';
            day7.textContent = 'Sunday 12pm-11pm';
        
            this.hours.append(lineBreak,lineBreak,day1,lineBreak,day2,lineBreak,day3,lineBreak,day4,lineBreak,day5,lineBreak,day6,lineBreak,day7,lineBreak);
            this.hours.style.marginTop = '2vh';
            this.hours.style.marginLeft = '37vw';
        
            this.location.append(lineBreak);
            this.location.append(lineBreak);
            this.location.textContent = 'We are conviniently located ';
        
            this.location.append(lineBreak);
            location2.textContent = 'at platform 9 3/4,';
            this.location.append(location2);
            this.location.append(lineBreak);
            location3.textContent = 'at 1 Kings Cross Street, ';
            this.location.append(location3);
            this.location.append(lineBreak);
            location4.textContent = 'London, UK. Testing testing';
            this.location.append(location4);
            
            this.location.style.marginTop = '2vh';
            this.location.style.marginLeft = '37vw';
        
            

           

            //-Apparently textContent cant be split up into
            //multiple lines...might have to try different
            //approach
            //-Might have to create elements for each line/day and
            //append them into the hours div? (It worked!)
           
            
            this.mainDiv.append(lineBreak,this.intro,this.hours,this.location,bottomStyle);     
            document.body.append(this.mainDiv);
            document.body.style.backgroundColor = 'green';
            document.body.style.marginLeft = 'auto';
            document.body.style.fontFamily = 'cursive','Consolas','Lucida Sans Typewriter';
            document.body.style.fontSize = '2rem';
            
            
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
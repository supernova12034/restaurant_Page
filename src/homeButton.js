
    export {homeObj}; 
    
  

 /*So far so good */    
       
    let homeObj = {

         createHomeButton(){

            let hours = document.createElement('div');

            let bottomStyle = document.createElement('div');
            bottomStyle.style.height = '33vh';
            bottomStyle.style.width = '100vw';
            bottomStyle.style.backgroundColor = 'red';
            bottomStyle.style.marginTop = '-17vh'; 
            bottomStyle.style.paddingTop = '2vh';
               
            
            let mainDiv= document.createElement('div');
            mainDiv.style.marginTop = '7vh';
            mainDiv.style.backgroundColor = 'white';
            mainDiv.style.height = '36.5vh';
            mainDiv.style.width = '100vw';
            mainDiv.style.paddingBottom = '10.5vh';
            
            
           
            let intro= document.createElement('div');
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
            
            let location = document.createElement('div');
            let location2 = document.createElement('div');
            let location3 = document.createElement('div');
            let location4 = document.createElement('div');
        
            
            
        
            intro.textContent = "At Bobby's pizza we use authentic recipes ";
            intro.append(lineBreak);
            intro2.textContent = 'and fresh ingredients to create the meltiest,';
            intro.append(intro2);
            intro.append(lineBreak);
            intro3.textContent = ' tastiest, handcrafted pizza possible, for you!';
            intro.append(intro3);
            intro.style.marginLeft = '37vw';
            
            
        
            day1.textContent = 'Monday: Closed ';
            day2.textContent = 'Tuesday: 12pm-9pm';
            day3.textContent = 'Wednesday: 12pm-9pm';
            day4.textContent = 'Thursday 12pm-9pm';
            day5.textContent = 'Friday 12pm-11pm';
            day6.textContent = 'Saturday 12pm-11pm';
            day7.textContent = 'Sunday 12pm-11pm';
        
            hours.append(lineBreak,lineBreak,day1,lineBreak,day2,lineBreak,day3,lineBreak,day4,lineBreak,day5,lineBreak,day6,lineBreak,day7,lineBreak);
            hours.style.marginTop = '2vh';
            hours.style.marginLeft = '37vw';
        
            location.append(lineBreak);
            location.append(lineBreak);
            location.textContent = 'We are conviniently located ';
        
            location.append(lineBreak);
            location2.textContent = 'at platform 9 3/4,';
            location.append(location2);
            location.append(lineBreak);
            location3.textContent = 'at 1 Kings Cross Street, ';
            location.append(location3);
            location.append(lineBreak);
            location4.textContent = 'London, UK. Testing testing';
            location.append(location4);
            
            location.style.marginTop = '2vh';
            location.style.marginLeft = '37vw';
        
            

           

            //-Apparently textContent cant be split up into
            //multiple lines...might have to try different
            //approach
            //-Might have to create elements for each line/day and
            //append them into the hours div? (It worked!)
           
            
            mainDiv.append(lineBreak,intro,hours,location,bottomStyle);     
            document.body.append(mainDiv);
            document.body.style.backgroundColor = 'green';
            document.body.style.marginLeft = 'auto';
            document.body.style.fontFamily = 'cursive','Consolas','Lucida Sans Typewriter';
            document.body.style.fontSize = '2rem';
            
            
        },
         insideHome(){
            console.log('This function is inside home button function');
        }

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
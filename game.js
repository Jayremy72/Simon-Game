let buttonColours = [ "red", "blue", "green", "yellow" ];

let gamePattern = [];
let userClickedPattern = [];

 // You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.

let started = false;

// 2. Create a new variable called level and start at level 0.
    
let level = 0;

// 1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
    // Start button press event

$(document).keypress(function() {
    if (!started) { 

// 3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".

    $("#level-title").text("Level " + level);
     
    nextSequence();
    started = true;
    }
}); 

    

$(".btn").click(function() {
                      
// Get the ID of the clicked button
         let userChosenColour = $(this).attr("id");
 
// Push the chosen color to the userClickedPattern array
         userClickedPattern.push(userChosenColour);

         playSound(userChosenColour);
         animatePress(userChosenColour);
         
         checkAnswer(userClickedPattern.length - 1)

         
     });

// Function to check the user's answer

     function checkAnswer(currentLevel) {
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
            console.log("success");
    
// Check if the user has finished their sequence

        if (userClickedPattern.length === gamePattern.length) {
               
    
// Wait 1 second before starting the next sequence

                setTimeout(function() {
                    nextSequence();
                }, 1000);
            }
        } else {
            console.log("wrong");

//  In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.    
            playSound("wrong");

//  In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong... 
           
            $("body").addClass("game-over");
// and then remove it after 200 milliseconds.
            setTimeout(function(){
            $("body").removeClass("game-over");
            }, 200);
// Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
            $("#level-title").text("Game Over, press any key to restart");
            
            startOver();
        
        }}
 
    function nextSequence(){
           
        userClickedPattern = [];

// 4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.

            level++

// 5. Inside nextSequence(), update the h1 with this change in the value of level.

            $("#level-title").text("Level " + level);
        
            let randomNumber = Math.floor(Math.random() * 4);
            let randomChosenColour = buttonColours[randomNumber];
           
            gamePattern.push(randomChosenColour);

            $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
            
            playSound(randomChosenColour)
    };


    function playSound(name){
        let audio = new Audio("./sounds/" + name + ".mp3");
            audio.play()
    };


// Create a new function called animatePress(), it should take a single input parameter called currentColour.


    function animatePress(currentColour){

// Take a look inside the styles.css file, you can see there is a class called "pressed", it will add a box shadow and changes the background colour to grey.
    
        let activeColour = $("." + currentColour);

 // Use jQuery to add this -pressed- class to the button that gets clicked inside animatePress().      

         activeColour.addClass("pressed");
       
// Use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.

    setTimeout(function(){ 
        activeColour.removeClass("pressed");
       }, 100)};
       
    
// Create a new function called startOver(). Call startOver() if the user gets the sequence wrong.
    function startOver(){

// Inside this function, you'll need to reset the values of level, gamePattern and started variables.
        level = 0;
        gamePattern = [];
        started = false;
        
       }



    










        





    
    

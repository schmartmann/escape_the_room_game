"use strict";
$(function(){

var rooms = {
  'room-1'
}



var timeLeft = 60;

var $timerText = $(".status-bar");

var roomCount = 1;


//make an array with a sub array for each room
//each sub array will have a key for position coordinates
//and a variable containing that room's riddle
//and it'll house that room's solution
//and maybe house the function that calls the next movement?
//and it houses the amount by which we increase the timer

//make a timer and have it get increased by a certain amount for every correct answer you submit

//build a function that takes in arguments from the arrayOfRooms to:
//update the status text
//fetch the input text
//verify if the input text is correct
//if the input text is correct, update the position of the protagonist div

//reach features:
//obscure div that the player isn't it
//have a loading screen with "click anywhere" instructions
//bounce player back to previous room if input !== correct


//set interval to run checkLose function 1x per second
// var setTimer = setInterval(function checkLose() {
//   if (timeLeft <= 0) {
//     alert("Your ride left without you! Looks like you're spending the night here.");
//     clearInterval(setTimer);
//   } else {
//     $timerText.html("<li class='timer'> <strong>"+timeLeft+"</strong> seconds<br>before your<br> ride leaves!</p>");
//     timeLeft = timeLeft - 1;
//   }
// }, 1000)


//bottom
});

"use strict";
$(function(){

var rooms = [
     {name: 'room-0',
      top: "290px",
      left: "350px",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem nam id, summo commune at mel. Sed possim concludaturque ea?",
      answer: "torquatos"
    },
     {name: 'room-1',
      top: "290px",
      left: "450px",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
    },
     {name: 'room-2',
      top: "290px",
      left: "550px",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
    },
     {name: 'room-3',
      top: "x - 2",
      left: "y + 1",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
    },
     {name:'room-4',
      top: "x + 1",
      left: "y + 1",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
   },
     {name: 'room-5',
      top: "x + 2",
      left: "y + 1",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
   },
     {name: 'room-6',
      top: "x",
      left: "y + 2",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
  },
     {name: 'room-7',
      top: "x + 1",
      left: "y + 2",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
  },
    {name: 'room-8',
      top: "x + 2",
      left: "y + 2",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
  }
]


var roomCount = 0;

var timeLeft = 180;

var $timerText = $(".status-bar");

var wordsArr ='';

var input = $('#text-input');

var protagonist_start_position = $('#protagonist').css('')

setInterval(function () {
  $('#protagonist').css('display', 'none')
}, 250)

function checkInput () {
  var user_answer = $input.val();
  if (user_answer === rooms[roomCount].answer) {
    $('#prompt').html('<li id="prompt"> You got it! Let\'s move on!</li>')
    setTimeout(function () {
      // this is where we call back the function I'm going to build that takes
      //in the the coordinates from the rooms array
      //and uses those to update the .css() position of the "protag div"
      //and then updates the room counter to 1! (SUPER IMPORTANT this come after the move function)
      //and then adds 60/(roomCounter+1) to time
    }, 1000)
  } else {
    $('#prompt').html('<li id="prompt"> Hmm, keep guessing!')
  }
}

//check room counter # and pull prompt from the array:
function askRiddle () {
    $('#prompt').html('<li id="prompt">'+rooms[roomCounter].prompt+'</li>');
}

function changeRooms () {
  $('#protagonist').css('top', rooms[roomCount].top)
  $('#protagonist').css('left', rooms[roomCount].left)
}


input.on('keypress', function (event) {
  if (event.which === 13) {
      checkInput();
      $input.val('');
  } else {}
});


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


//set interval to run countDown function 1x per second
var setTimer = setInterval(function countDown() {
  if (timeLeft === 0) {
    $timerText.html("<li class='timer'> <strong>0</strong> seconds<br>before your<br> ride leaves!</li>");
    alert("Your ride left without you! Looks like you're spending the night here.");
    clearInterval(setTimer);
  } else {
    $timerText.html("<li class='timer'> <strong>"+timeLeft+"</strong> seconds<br>before your<br> ride leaves!</li>");
    timeLeft = timeLeft - 1;
  }
}, 1000)

$timerText.html('<li id="prompt">Your ride is leaving the party soon!<br> Don\'t get left behind!<br> Click anywhere to begin!</li>')


//bottom
});

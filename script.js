"use strict";
$(function(){

var rooms = [
     {name: 'room-0',
      top: "290px",
      left: "350px",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem nam id, summo commune at mel. Sed possim concludaturque ea?",
      answer: "gloriatur"
    },
     {name: 'room-1',
      top: "290px",
      left: "490px",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
    },
     {name: 'room-2',
      top: "360px",
      left: "940px",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
    },
     {name: 'room-3',
      top: "590px",
      left: "940px",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
    },
     {name:'room-4',
      top: "590px",
      left: "540px",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
   },
     {name: 'room-5',
      top: "590px",
      left: "140px",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
   },
     {name: 'room-6',
      top: "880px",
      left: "220px",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
  },
     {name: 'room-7',
      top: "830px",
      left: "640px",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
  },
    {name: 'room-8',
      top: "830px",
      left: "715px",
      prompt: "Lorem ipsum dolor sit amet, doctus mediocritatem",
      answer: "gloriatur"
  }
]


var roomCount = 0;

var timeLeft = 180;

var $timerText = $(".status-bar");

var wordsArr ='';

var input = $('#text-input').val();

var protagonist_start_position = $('#protagonist').css('')

setInterval(function () {
  $('#protagonist').css('display', 'none')
}, 250)

function checkInput () {
  //captures the input, & splits into new array
  var user_answer = input.split(' ');
  //run if/else on each item in array
  user_answer.forEach (function (word) {
    //if word in rooms-x.answer matches
    if (word === rooms[roomCount].answer) {
      //update prompt
    $('#prompt').html('<li id="prompt"> You got it! Let\'s move on!</li>');
     //set timeout to move us to the next room
     setTimeout(function () {
      changeRooms();
      roomCount ++;
      timeLeft = timeLeft + (60/(roomCount))
    }, 1000)
  } else {
    $('#prompt').html('<li id="prompt"> Hmm, keep guessing!')
  }
  })
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
    timeLeft --;
  }
}, 1000)

$timerText.html('<li id="prompt">Your ride is leaving the party soon!<br> Don\'t get left behind!<br> Click anywhere to begin!</li>')


//bottom
});

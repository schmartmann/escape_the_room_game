"use strict";
$(function(){

var rooms = [
     {name: 'room-0',
      top: "280px",
      left: "500px",
      prompt: "You loaned your charger to someone... I want to say... Nathan? Shit, where is it!?",
      reject: "Not there... It had something to do with music",
      answer: "guitar",
      reveal: "Under the guitar... of course..."
    },
     {name: 'room-1',
      top: "300px",
      left: "785px",
      prompt: "Oh, man. It's your friend looking for your 'honest' feedback on a mixtape",
      reject: "Are you sure? You can really be honest!",
      answer: "perfect",
      reveal: "Yup! The only 'honest' feedback most people really want"
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

var input = $('#text-input');

$('#protagonist').css({'top' : '280px', 'left' : '500px'})

// setInterval(function () {
//   $('#protagonist').toggleClass('blink')}, 1500)

function checkInput () {
  //captures the input, & splits into new array
  var input = $('input').val()
  var user_answer = input.split(' ');
  //run if/else on each item in array
  user_answer.forEach (function (word) {
    //if word in rooms-x.answer matches
    if (word === rooms[roomCount].answer) {
      //update prompt
    $('#prompt').html('<li id="prompt">'+rooms[roomCount].reveal'</li>');
     //set timeout to move us to the next room
     setTimeout(function () {
      //increase roomCount number
      roomCount++;
      //that should then be reflected in the function below
      changeRooms();
      //add more time
      timeLeft = timeLeft + (60/(roomCount))
      }, 1000)
  } else {
    $('#prompt').html('<li id="prompt">'+rooms[roomCount].reject'</li>')
  }
  })
}

//check room counter # and pull prompt from the array:
function askRiddle () {
    $('#prompt').html('<li id="prompt">'+rooms[roomCounter].prompt+'</li>');
}

function changeRooms () {
  $('#protagonist').css({'top' : rooms[roomCount].top, 'left' : rooms[roomCount].left });
  $
}

function spawnRoom () {
  roomCount = 0;
  // input.val(' ')
  $('#protagonist').css({'top' : rooms[roomCount].top, 'left' : rooms[roomCount].left });
  $('#prompt').html('<li id="prompt">' + rooms[roomCount].prompt+'</li>')
}


$(input).on('keypress', function (event) {
  if (event.which === 13) {
      checkInput();
      input.val('');
  } else {}
});


//reach features:
//obscure div that the player isn't it

//^^^ this can be a function based off the room counter.
//^^ maybe an if/else statement that applies .css('opacity', '0.4')

//have a loading screen with "click anywhere" instructions
//bounce player back to previous room if input !== correct


//set interval to run countDown function 1x per second
$('.container').on('click' , function () {
  $('.container').off();
  var setTimer = setInterval(function countDown() {
      if (timeLeft === 0) {
        $timerText.html("<li class='timer'><strong>0</strong> seconds<br>before your<br> ride leaves!</li>");
        console.log("Your ride left without you! Looks like you're spending the night here.");
        clearInterval(setTimer);
      } else {
        $timerText.html('<li id="prompt">'+rooms[roomCount].prompt+'</li>')
        $timerText.append("<li class='timer'> <strong>"+timeLeft+"</strong> seconds<br>before your<br> ride leaves!</li>");
        timeLeft--;
      }
    }, 1000)
})

$timerText.html('<li id="prompt">You\'re just a red circle at a tedious house party!</li>')
$timerText.append('<li id="prompt"><br>Grab your stuff & get out before your ride abandons you!</li>')
$timerText.append('<li id="prompt"><br>Click anywhere to begin!</li>')


//bottom
});

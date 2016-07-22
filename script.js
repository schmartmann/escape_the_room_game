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
      top: "630px",
      left: "560px",
      prompt: "bathroom",
      reject: "no",
      answer: "gloriatur",
      reveal: "leave bathroom"
    },
     {name: 'room-3',
      top: "550px",
      left: "940px",
      prompt: "Which suit of armor did you wear to this party? Classic house party problem.",
      reject: "That looks like someone else's: maybe in the middle?",
      answer: "middle",
      reveal: "Phew! Imagine how embarrassing it'd be to leave wearing someone ELSE's armor?"
    },
     {name:'room-4',
      top: "900px",
      left: "500px",
      prompt: "carpet room",
      reject: "no",
      answer: "gloriatur",
      reveal: "leave carpet room"
   },
     {name: 'room-5',
     // kitchen
      top: "860px",
      left: "810px",
      prompt: "Which one of these burners did you turn on? <br>A negligent arson sentence will really eat into your Netflix time.",
      reject: "Well, you're right handed: what would Inspector Poirot say about that? ",
      answer: "right",
      reveal: "Oh yeah, this water is hella boiled. Turned off!"
   },
     {name: 'room-6',
     //computer room
      top: "1200px",
      left: "500px",
      prompt: "computer room",
      reject: "no",
      answer: "gloriatur",
      reveal: "leave computer room"
  },
     {name: 'room-7',
     //living room
      top: "1050px",
      left: "900px",
      prompt: "living room",
      reject: "no",
      answer: "gloriatur",
      reveal: "leave living room"
  },
    {name: 'room-8',
      top: "1400px",
      left: "350px",
      prompt: "The adventure continues in the sequel...<strong>Forced Small Talk With Your Uber Driver</strong>",
      reject: "",
      answer: "gloriatur",
      reveal: "You made it out in one piece!"
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
    $('#prompt').html('<li id="prompt">'+rooms[roomCount].reveal+'</li>');
     //set timeout to move us to the next room
     setTimeout(function () {
      //increase roomCount number
      roomCount++;
      //that should then be reflected in the function below
      changeRooms();
      //add more time
      timeLeft = timeLeft + Math.floor((60/(roomCount)))
      }, 1000)
  } else {
    $('#prompt').html('<li id="prompt">'+rooms[roomCount].reject+'</li>')
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
      if (roomCount >= 7) {
          $timerText.html('<li class="timer">You made it!</li>');
          alert('You made it!');
      } else {};
  } else {}
});


//reach features:
//obscure div that the player isn't it

//^^^ this can be a function based off the room counter.
//^^ maybe an if/else statement that applies .css('opacity', '0.4')

//have a loading screen with "click anywhere" instructions
//bounce player back to previous room if input !== correct


$('.container').on('click' , function () {
  $('.container').off();
  var setTimer = setInterval(function countDown() {
      if (timeLeft === 0) {
        $timerText.html("<li class='timer'><strong>0</strong> seconds<br>before your<br> ride leaves!</li>");
        console.log("Your ride left without you! Looks like you're spending the night here.");
        clearInterval(setTimer);
      } else {
        $timerText.html('<li id="prompt">'+rooms[roomCount].prompt+'</li>')
        $timerText.append("<li class='timer'><strong>"+timeLeft+"</strong> seconds<br>before your<br>ride leaves!</li>");
        timeLeft--;
      }
    }, 1000)
})

$timerText.html('<li id="prompt">You\'re a red circle at a tedious party, and you just want to go home!</li>')
$timerText.append('<li id="prompt"><br>Grab your stuff & get out before your Uber driver abandons you!</li>')
$timerText.append('<li id="prompt"><br>Click anywhere to begin!</li>')


//bottom
});

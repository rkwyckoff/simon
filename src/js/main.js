/* eslint-disable quotes, no-console */

import $ from "jquery";
import { Pattern } from "./pattern";
import { Button } from "./button";

// var difficulty = {
//   easy: 500,
//   medium: 400,
//   hard: 300,
//   nightmare: 200
// }

// Create a new pattern
var pattern = new Pattern();
//var pattern2 = new Pattern();
var currentRound = pattern.steps;
//console.log(currentRound);

// Create 5 buttons
var redButton = new Button({ color: "red", id: 1 });
var blackButton = new Button({ color: "black", id: 2 });
var greenButton = new Button({ color: "green", id: 3 });
var yellowButton = new Button({ color: "yellow", id: 4 });
var blueButton = new Button({ color: "blue", id: 5 });

// Create buttons array
var buttons = [redButton, blackButton, greenButton, yellowButton, blueButton];


// Starts the game
  $('.startButton').click(function() {

  // loop through each pattern step ====> 3 for now
    for (var i = 0; i < currentRound.length; i++) {

    // set the current step
      var currentStep = currentRound[i];

      // Find the button that matches this current step
    var button = buttons.find(function (button) {
      return button.id === currentStep;
    });

    // brighten the current button's color
    setTimeout(function (button) {
      button.brightenColor();
    }, i * 400, button);

    // dim the current button's color
    setTimeout(function (button) {
      button.dimColor();
    }, 1500, button);
  }

  startPlayerTurn();
  });


function startPlayerTurn() {
  // start the timer
  startTimer();

  var clickNumber = 0;
  var correctClicks = [];
  var correctLength = pattern.steps.length;
  console.log(pattern.steps)

  // listen for player color box clicks

   $(".colorBox").click(function (event){

    var idLength = event.target.id.length;
    var id = parseInt(event.target.id.charAt(idLength - 1));
    var button2 = new Button (event)
    if (event) {
      setTimeout(function () {
      button2.brightenColor2(event)
      });

    }
      // dim the current button's color
    //   setTimeout(function (button) {
    //     button.dimColor();
    //   }, 1500, button);
    // }

    //  event.target).css("opacity", 4);

    if (id !== pattern.steps[clickNumber]) {
      gameOver();
      alert('Game Over: faultyButton');
      window.location.reload();


    }  else {
      clickNumber++;
      correctClicks.push(id);

      if (correctLength === correctClicks.length &&
          pattern.steps[correctLength - 1] === id) {
      //  gameOver();
        alert("You Win!");
        window.location.reload();

      //  pattern.buildSteps(4);
      }
    }
});
}

function startTimer() {
  var display = $("#time");
  var counter = 6;
  var interval = setInterval(function() {
    counter--;
    //display.empty();
    display.html(counter);
    if (counter === 0) {
      alert(gameOver('outOfTime'));
      clearInterval(interval);
      window.location.reload();

    }
  }, 1000);
}




// function (event) {
//     //var count = 0;
// console.log(event.target)
// }
//       if (event.target !== pattern.steps[0]) {
//         console.log("game over")
//       }
// }
function gameOver (type) {
  //var display = $("#time");
  //display.instructions();

  if (type === "outOfTime") {
    return `
      GAME OVER.... OUT OF TIME!
      Click "Start" to play again
    `;
  }
  if (type === "faultyButton") {
    return `
      GAME OVER.... WRONG BUTTON SEQUENCE!
      Click "Start" to play again
    `;
  }
}
  //  if (event.target.id === )
  //  alert(event.target.id);
  // check the id of the event.target
  // add that id to the list in pattern.playerSteps
  // have they guessed them all? have they made a wrong guess?
//$('.colorBox + num').html(brightenColor)

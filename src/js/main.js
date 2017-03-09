/* eslint-disable quotes, no-console */

import $ from "jquery";
import { Pattern } from "./pattern";
import { Button } from "./button";
import { Game } from "./game";

// TODO:
// DID THIS!!!replace currentRound with pattern.steps because currentRound doesn't update automatically
// DID THIS!!!!clear interval if you win so the timer doesn't keep going
// set up your game object, to be able to go to the next level
   // that's gonna mean everywhere you have a pattern, you need game.pattern

// add a button to go to next level after you win

// Create a new pattern
var pattern = new Pattern();
var game = new Game(pattern);

// Starts the game
  $('.startButton').click(function() {

    for (var i = 0; i < game.pattern.steps.length; i++) {
      var currentStep = game.pattern.steps[i];
      var button = game.findButton(currentStep);

      setTimeout(function (button) {
        button.blink();
      }, 400 * i, button);
    }

    startPlayerTurn();
  });


function startPlayerTurn() {
  // start the timer
  startTimer();
    //console.log(startTimer)

  // listen for player color box clicks

   $(".colorBox").click(function (event){

    var idLength = event.target.id.length;
    var id = parseInt(event.target.id.charAt(idLength - 1));

    var button = game.findButton(id);
    button.blink();

    game.addClick(id);

    if (id !== game.pattern.steps[game.clickNumber]) {
      gameOver();
      alert('Game Over: faultyButton');
    }  else {
      game.clickNumber++;
      game.correctClicks.push(id);

      if (game.correctClicks.length === game.pattern.steps.length) {
      //  gameOver();
        alert("You Win!");
        clearInterval(interval);
        game.nextLevel ();
      //pattern.buildSteps(4);
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
      // window.location.reload();

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

  // if (pattern.state === 'outoftime')
  // $().html() ...
  // if (pattern.state === 'bad-click')
  // $("#game").html() ...

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

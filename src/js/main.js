/* eslint-disable quotes, no-console */

import $ from "jquery";
import { Pattern } from "./pattern";
import { Button } from "./button";
import { Game } from "./game";

var pattern = new Pattern();
var game = new Game(pattern);
var type;

// Starts the game
$('.startButton').click(function() {

  console.log(game.pattern.steps)
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
  //console.log(game)
  game.startTimer();

  $('.colorBox').click(function (event){
//console.log(event.target.id)
    var idLength = event.target.id.length;
    var id = parseInt(event.target.id.charAt(idLength - 1));
    var button = game.findButton(id);
    button.blink();

    if (id !== game.pattern.steps[game.clickNumber]) {
      game.resetTimer();
      $('.instructions').html(game.gameOver('wrongButton'));
      return;
    }

    else {
      game.clickNumber++;
      game.correctClicks.push(id);

      if (game.correctClicks.length === game.pattern.steps.length) {
        $('.instructions').html(game.gameOver('win'));
        game.resetTimer();

        //clearInterval(interval);
      //  game.nextLevel (game.level);

      }
    }
  });
}
// add a button to go to next level after you win

export { game }

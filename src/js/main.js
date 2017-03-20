/* eslint-disable quotes, no-console */
import $ from "jquery";
import { Button } from "./button";
import { Game } from "./game";

// var round;
var game;
var type;

$('.startButton').click(startNewGame);

function startNewGame() {
  // round = new Pattern();
  // game = new Game(round);
  game = new Game();
  console.log(game.round.steps)
  for (var i = 0; i < game.round.steps.length; i++) {
    var currentStep = game.round.steps[i];
    var button = game.findButton(currentStep);

    setTimeout(function (button) {
      button.blink();
    }, 400 * i, button);
  }
  startPlayerTurn();
}

function startPlayerTurn() {
  game.startTimer();

  $('.colorBox').click(function (event){
    var idLength = event.target.id.length;
    var id = parseInt(event.target.id.charAt(idLength - 1));
    var button = game.findButton(id);
    button.blink();
    game.processChoice(id);
  });

}

export { game }

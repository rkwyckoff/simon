/* eslint-disable quotes, no-console */
import $ from "jquery";
//import { Button } from "./button";
import { Game } from "./game";
import { Round } from './round';

var round = new Round();
var game = new Game(round);

$('.startButton').click(game.startNewGame);

$(".colorBox").click(game.processClick);


export { game }
export { round }

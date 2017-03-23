/* eslint-disable quotes, no-console */
import $ from 'jquery';
import { Button } from './button';
import { Game } from './game';
import { Round } from './round';

 var round = new Round();
 var game = new Game(round);

$('.startButton').click(game.startNewGame.bind(game));

$('.colorBox').click(game.processClick);

/*
TODO

Step 1: Fix any "game." in the code.
        It should be this!

Step 2: Modify playerClicks and clickNumber
        in the Game's round (this.round),
        not in the game itself.

        Moving some of the processChoice work
        into a method on the Round class might
        be helpful.

*/

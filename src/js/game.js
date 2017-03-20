import $ from 'jquery';

import { game } from './main';
import { Button } from './button';
import { Round } from './round';


var redButton = new Button({ color: 'red', id: 1 });
var blackButton = new Button({ color: 'black', id: 2 });
var greenButton = new Button({ color: 'green', id: 3 });
var yellowButton = new Button({ color: 'yellow', id: 4 });
var blueButton = new Button({ color: 'blue', id: 5 });
var interval;
var display = $('#time');
var round = new Round();


class Game {
  constructor () {
    this.round = round;
    this.correctClicks = [];
    this.clickNumber = 0;
    this.buttons = [redButton, blackButton, greenButton, yellowButton, blueButton];
  }

  findButton (id) {
    return this.buttons.find(function (button) {
      return button.id === id;
    });
  }

  processChoice(id) {
    if (id !== game.round.steps[game.clickNumber]) {
      this.resetTimer();
      $('.instructions').html(this.gameOver('wrongButton'));
      setTimeout(() => {
        $('.instructions').html(this.gameOver('instructions'));
      }, 3000);
    }
    else {
      game.clickNumber++;
      game.correctClicks.push(id);

      if (game.correctClicks.length === game.round.steps.length) {
        $('.instructions').html(this.gameOver('win'));
        this.resetTimer();
        setTimeout(() => {
          $('.instructions').html(this.gameOver('instructions'));
        }, 3000);
        this.nextLevel();
      }
    }
  }

  nextLevel () {
    let level = round.getLevel() + 1;
    round.makePattern(level);
  }


  startTimer() {
    var counter = 6;
    interval = setInterval(() => {
      counter--;
      display.html(counter);
      if (counter === 0 )  {
        clearInterval(interval);
        $('.instructions').html(this.gameOver('timeOut'));
        display.html('Timer');

        return;
      }
    }, 1000);
  }

  resetTimer() {
    clearInterval(interval);
    display.html('Timer');
  }

  gameOver (type) {
    if (type === 'win') {
      return `YOU WIN! Click "Start" to play next level
    `;
    }

    if (type === 'timeOut') {
      return `GAME OVER.... OUT OF TIME!
    Click "Start" to play again
    `;
    }
    if (type === 'wrongButton') {
      return `GAME OVER.... WRONG BUTTON SEQUENCE!
    Click "Start" to play again
    `;
    }
    if (type === 'instructions') {
      return ` Instructions:  1) Click on "Start."  Lights will flash in a round.
    2) Click the same pattern within 5 seconds, and YOU WIN!       3) Click "Start" now!
    `;
    }
  }
}

export { Game };

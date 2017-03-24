import $ from 'jquery';

import { Button } from './button';
import { Round } from './round';


var redButton = new Button({ color: 'red', id: 1 });
var blackButton = new Button({ color: 'black', id: 2 });
var greenButton = new Button({ color: 'green', id: 3 });
var yellowButton = new Button({ color: 'yellow', id: 4 });
var blueButton = new Button({ color: 'blue', id: 5 });
var interval;
var display = $('#time');
// var round = new Round


class Game {
  constructor (round ){
    this.round = round;
    this.buttons = [redButton, blackButton, greenButton, yellowButton, blueButton];

  }

  findButton (id) {
    return this.buttons.find(function (button) {
    //  console.log(button)
      return button.id === id;
    });
  }

  startNewGame(event) {
    for (var i = 0; i < this.round.steps.length; i++) {
      console.log(this.round.steps)
      var currentStep = this.round.steps[i];
      var button = this.findButton(currentStep);
      setTimeout(function (button) {
        button.blink();
      }, 400 * i, button);

    }
    this.startTimer();
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
        this.round.level = 0;

        return;
      }
    }, 1000);
  }

  processClick (event) {
    var idLength = event.target.id.length;
    var id = parseInt(event.target.id.charAt(idLength - 1));

    var button = this.findButton(id);
    console.log(button)
    button.blink();
    this.processChoice(id);
  }

  processChoice(id) {
    // console.log(id)
    if (id !== this.round.steps[this.round.clickNumber]) {
      //console.log(this.round.steps[this.round.clickNumber])
      this.resetTimer();
      $('.instructions').html(this.gameOver('wrongButton'));
      setTimeout(() => {
        $('.instructions').html(this.gameOver('instructions'));
      }, 3000);
      //this.game = new Game();
    }

    else {
      this.round.clickNumber++;
      this.round.correctClicks.push(id);
      if (this.round.correctClicks.length === this.round.steps.length) {
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
    this.round = new Round(this.round.getLevel() + 1);
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

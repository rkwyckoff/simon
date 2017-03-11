import { Button } from './button';
import $ from 'jquery';
import { Pattern } from './pattern';
import { game } from './main';

var redButton = new Button({ color: 'red', id: 1 });
var blackButton = new Button({ color: 'black', id: 2 });
var greenButton = new Button({ color: 'green', id: 3 });
var yellowButton = new Button({ color: 'yellow', id: 4 });
var blueButton = new Button({ color: 'blue', id: 5 });

class Game {
  constructor (pattern) {
    this.level = 3;
    this.pattern = pattern;
    this.correctClicks = [];
    this.clickNumber = 0;
    this.buttons = [redButton, blackButton, greenButton, yellowButton, blueButton];
    this.counter = 6;
  }

  // addClick () {
  findButton (id) {
    return this.buttons.find(function (button) {
      return button.id === id;
    });
  }

  gameOver (type) {

    if (type === 'win') {
      return `
                  YOU WIN!
        Click "Start" to play next level
      `;
    }

    if (type === 'timeOut') {
      return `
        GAME OVER.... OUT OF TIME!
        Click "Start" to play again
      `;
    }
    if (type === 'wrongButton') {
      return `
        GAME OVER.... WRONG BUTTON SEQUENCE!
        Click "Start" to play again
      `;
    }
    if (type === 'instructions') {
      return `
      Instructions:   1) Click on "Start."  Lights will flash in a pattern.
      2) Click the same pattern within 5 seconds, and YOU WIN!       3) Click "Start" now!
      `;
    }
  }
    // this.startTimer();


  startTimer() {

    var display = $('#time');
    //var counter = 6;
    var interval = setInterval(() => {
      this.counter--;
      display.html(this.counter);

      if (this.counter === 0) {
        clearInterval(interval);
        $('.instructions').html(this.gameOver('timeOut'));
        display.html('Timer')


      }

    }, 1000);


  }



  resetTimer() {
    if (game.counter !== 0) {
      clearInterval(this.interval);
      game.counter = 6;
    }

  }

  }
  // nextLevel () {
  //   this.level++;
  //   this.buildSteps(this.level);
  //
  //   // reset the correctClicks and stuff like that
  // }
  //
  //
  // resetGame () {
  //   game.interval = setInterval(function() {
  //     game.counter = 0;
  //     game.display.html(game.counter);
  //     clearInterval(game.interval)
  //   }, 1000);
  // }

  // resetTimer () {
  //   this.counter = 6;
  //   $('.instructions').html(game.gameOver('instructions'))




export { Game };

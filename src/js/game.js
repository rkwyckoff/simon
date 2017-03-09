import { Button } from "./button";

var redButton = new Button({ color: "red", id: 1 });
var blackButton = new Button({ color: "black", id: 2 });
var greenButton = new Button({ color: "green", id: 3 });
var yellowButton = new Button({ color: "yellow", id: 4 });
var blueButton = new Button({ color: "blue", id: 5 });

class Game {
  constructor (pattern) {
    this.level = 3;
    this.pattern = pattern;
    this.correctClicks = [];
    this.clickNumber = 0;
    this.buttons = [redButton, blackButton, greenButton, yellowButton, blueButton];
  }

  addClick () {

  }

  findButton (id) {
    return this.buttons.find(function (button) {
      return button.id === id;
    });
  }

  nextLevel () {
    this.level = this.level++;
    this.buildPattern(this.level);
    this.correctClicks = []
    // modify the pattern to rebuild steps based on the level
    // reset the correctClicks and stuff like that
  }

}



export { Game };

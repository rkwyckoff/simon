import $ from "jquery";
import { Game } from "./game";


class Round {
  constructor (level) {
    this.level = level || 3;
    this.playerClicks = [];
    this.clickNumber = 0;
    this.steps = [];
    this.makePattern(this.level);
    // console.log(level)
  }

  makePattern(level) {
    //this.steps = [];
   //console.log(level)
    for (var i = 0; i < level; i++) {
    //  console.log("inside pattern")
      var num = function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      };
      this.steps.push(num(1, 6));
    }
  }

  getSteps() {
    return this.steps;
  }

  getLevel() {
    return this.level;
  }
}

export { Round };

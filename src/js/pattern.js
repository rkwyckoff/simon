import { Game } from "./game";

class Pattern {
  constructor (options) {
    options = options || {};
    this.id = options.id;
    this.playerClicks = [];
    this.buildSteps(3);
  }

  buildSteps (level) {
    this.steps = [];
    for (var i = 0; i < level; i++) {
      var num = function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      };

      this.steps.push(num(1, 6));

    }
  }


}

export { Pattern };

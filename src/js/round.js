class Round {
  constructor (options) {
    options = options || {};
    this.id = options.id;
    this.level = options.level || 3;
    this.playerClicks = [];
    this.steps = [];
    this.makePattern(this.level);
  }

  makePattern(level) {
    this.level = level;
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

  getSteps() {
    return this.steps;
  }

  getLevel() {
    return this.level;
  }
}

export { Round };

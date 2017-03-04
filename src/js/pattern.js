class Pattern {
  constructor (options) {
    options = options || {};
    this.id = options.id;
    this.playerClicks = [];
    this.buildSteps(5);
  }

  buildSteps (length) {
  //  console.log(length)
    this.steps = [];
    for (var i = 0; i < length; i++) {
      var num = function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
      this.steps.push(num(1, 6))
    }
     //console.log(this.steps);
  }
}
//var pattern1 = new Pattern();
// console.log(pattern1.makePattern(3));
// console.log(pattern1.steps);



// ## Pattern
// * steps
// * guesses / playerSteps



export { Pattern }

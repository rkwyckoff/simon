class Pattern {
  constructor (options) {
    options = options || {};
    this.id = options.id;
    this.steps = [];

  }

  makePattern (length) {
    this.steps = [];
    for (var i = 0; i < length; i++) {
      var num = function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
      // choose a number: num(1, 6)
      // build a button object
      // var button = new Button({
      //   id: "colorBox" + num
      // })
      // this.steps.push(button);
      this.steps.push(num(1, 6))
    }
  }
}
var pattern1 = new Pattern();
console.log(pattern1.makePattern(3));
pattern1.steps;

  // lightBox () {
  //   if
  // }
/*

## Pattern
* steps
* guesses / playerSteps

when button is clicked, we need to add a player's choice
to guesses

*/
export { Pattern }

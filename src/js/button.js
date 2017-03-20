/* eslint-disable quotes, no-console */

import $ from "jquery";

class Button {
  constructor (options) {
    options = options || {};
    this.id = options.id;
    this.selector = "#colorBox" + options.id;
    this.color = options.color;
  }

  blink () {
    this.brightenColor();
    setTimeout(this.dimColor.bind(this), 800);
  }

  brightenColor () {
    var element = $(this.selector);
    element.css("opacity", 25);
  }

  dimColor () {
    var element = $(this.selector);
    element.css("opacity", .2);
  }

  // brightenColor2 (event) {
  //   $(event.target).css("opacity", 4)
  // }
}

/*

## Pattern
* steps
* guesses / playerSteps

when button is clicked, we need to add a player's choice
to guesses
/ class Student {
//   constructor (name, course) {
//     this.name = name;
//     this.course = course;
//   }
// }
//
// //var kurt = new Student("Kurt", "Frontend");
// var kurt = new Student({
//   name: "Kurt",
//   course: "Frontend"
// })

*/

export { Button };

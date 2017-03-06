/* eslint-disable quotes, no-console */

import $ from "jquery";
// class Student {
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

class Button {
  constructor (options) {
    options = options || {};
    this.id = options.id;
    this.selector = "#colorBox" + options.id;
    this.color = options.color;

  }

  brightenColor () {
    var element = $(this.selector);
    element.css("opacity", 4);
  }

  dimColor () {
    var element = $(this.selector);
    element.css("opacity", .2);
  }
}




/*

## Pattern
* steps
* guesses / playerSteps

when button is clicked, we need to add a player's choice
to guesses

*/

export { Button };

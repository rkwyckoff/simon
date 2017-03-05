import $ from "jquery";
import { Pattern } from "./pattern";
import { Button } from "./button"

var difficulty = {
  easy: 500,
  medium: 400,
  hard: 300,
  nightmare: 200
}

//var playerSteps = new Pattern({});

var pattern = new Pattern();
//console.log(pattern);
 var redButton = new Button({ color: "red", id: 1 });
 var blackButton = new Button({ color: "black", id: 2 });
 var greenButton = new Button({ color: "green", id: 3 });
 var yellowButton = new Button({ color: "yellow", id: 4 });
 var blueButton = new Button({ color: "blue", id: 5 });

 var buttons = [redButton, blackButton, greenButton, yellowButton, blueButton];
// redButton.brightenColor();
 $('.startButton').click(function() {
  // event.preventDefault();
  for (var i = 0; i < pattern.steps.length; i++) {
    //console
    var nextStep = pattern.steps[i];
     //console.log(pattern.steps[i])
      var button = buttons.find(function (element) {
        return element.id === nextStep;
    });

    setTimeout(function (button) {
      button.brightenColor();
    }, i * 400, button);

    setTimeout(function (button) {
    button.dimColor();
  }, 1500, button);

  }
  var display = $("#time")
  var counter = 6;
  var interval = setInterval(function() {
      counter--;
      display.empty();
      display.html(counter);
      if (counter == 0) {
          // Display a login box
          clearInterval(interval);
      }
  }, 1000);

});

// $(".colorBox").click(function (event) {
//   //  var count = 0;
//
//       if (event.target[count] === pattern.steps[count]) {
//         console.log(event.target[count])
//         return true;
//
//       }   else {
//          gameOver()
//           }
// }
// function gameOver () {
//   return `
//           GAME OVER....YOU LOSE!
//           Click "Start" to play again
//     `
//       $('.instructions').html()
// }
  //  if (event.target.id === )
  //  alert(event.target.id);
  // check the id of the event.target
  // add that id to the list in pattern.playerSteps
  // have they guessed them all? have they made a wrong guess?
//$('.colorBox + num').html(brightenColor)

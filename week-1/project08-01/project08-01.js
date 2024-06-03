"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Hayat Soma
      Date: 06-02-2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
function Timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

Timer.prototype.runPause = function(timer, minBox, secBox) {
  if (timer.timeID) { // If timer.timeID is truthy
    // Pause the timer
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    // Start the timer
    timer.timeID = window.setInterval(function() {
      countdown(timer, minBox, secBox);
    }, 1000);
  }
};

function countdown(timer, minBox, secBox) {
  if (timer.seconds > 0) {
    timer.seconds--; // Decrease the seconds
  } else {
    if (timer.minutes > 0) {
      timer.minutes--; // Decrease the minutes
      timer.seconds = 59; // Reset seconds to 59
    } else {
      // Timer has reached 0:0
      window.clearInterval(timer.timeID);
      timer.timeID = null;
    }
  }

  // Update the display
  minBox.value = timer.minutes < 10 ? "0" + timer.minutes : timer.minutes;
  secBox.value = timer.seconds < 10 ? "0" + timer.seconds : timer.seconds;
}


let minBox = document.getElementById('minutesBox');
let secBox = document.getElementById('secondsBox');

// Declare an instance of the Timer object
var myTimer = new Timer(parseInt(minBox.value), parseInt(secBox.value));

// Event handlers to update myTimer's properties
minBox.onchange = function() {
  myTimer.minutes = parseInt(minBox.value);
};

secBox.onchange = function() {
  myTimer.seconds = parseInt(secBox.value);
};

//  runPauseButton
let runPauseButton = document.getElementById('runPauseButton');

// Event handler to run the runPause method
runPauseButton.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);
};






/*---------------Interface Code -----------------*/

/* Interface Objects */
;


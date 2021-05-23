// This function begins a time that counts down by 1 from number set in global variable timeLeft.  Variable is located in variables.js //
function countdown() {

  // Uses the setInterval() method to call a function to be executed every second //
  timeInterval = setInterval(function () {

    // As long as the timeLeft is greater than 5 //
    if (timeLeft > 5) {

      // Decrement timeLeft by 1 //
      timeLeft--;

    } else {
      // Use clearInterval() to stop the timer //
      clearInterval(timeInterval);

      // Executes outoftime() script.js//
      outoftime();
    }

  // 1000 equals 1 second.  This is the interval the clock counts down //
  }, 1000);
}

// Stops the clock if time remains after the last question has been answered; clears the timeInterval, and executes displaystats //
function stopClock(){

  // Use clearInterval() to stop the timer //
  clearInterval(timeInterval);

  // Displays "High Scores" above the high scores //
  h3subtitleEl.textContent = "High Scores";

  // Executes displaystats() script.js //
  displaystats();
}


// Credit:  Timer code influenced by Bootcamp Example 09-Ins_Timers-Intervals script.js //

// Last Revised 5/22/21 //
// Raemarie Oatman raemarie.oatman@gmail.com //
// Homework Week 4 - 05 Third-Party APIs: Work Day Scheduler //
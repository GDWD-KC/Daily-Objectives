//Calculation to Convert Units of Time and Format Countdown Text

function convertToDaysLeft(milliseconds) {
    return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  }

function convertToHoursLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
  }

function convertToMinutesLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
  }

function convertToSecondsLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60)) / 1000
    );
  }

function formatCountdownText(days, hours, minutes, seconds) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
  }

//Countdown Initialization

//Set Variable for the end of the countdown (deadline)
let deadline = new Date ("December 25, 2022 12:00:00");

// Set Variable to select the h1 that we need
let countdown = document.getElementById("countdown");

//Get rid of the loading countdown text that we added in the html
countdown.innerHTML = " ";

function setCountdown () {
    //Get current date
    let now = new Date();
    let timeLeft = deadline.getTime() - now.getTime();

    // Store time converted varibale in own variable to use in final display
    let daysLeft = convertToDaysLeft(timeLeft);
    let hoursLeft = convertToHoursLeft(timeLeft);
    let minutesLeft = convertToMinutesLeft(timeLeft);
    let secondsLeft = convertToSecondsLeft(timeLeft);

    countdown.innerHTML = formatCountdownText(daysLeft, hoursLeft, minutesLeft, secondsLeft);

}

setInterval(setCountdown, 1000)
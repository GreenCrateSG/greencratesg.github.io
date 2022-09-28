const deadline = 'May 01 2021 23:59:59 GMT+0800';

// Countdown
// function getTimeRemaining(endtime){
//     const total = Date.parse(endtime) - Date.parse(new Date());
//     const seconds = Math.floor( (total/1000) % 60 );
//     const minutes = Math.floor( (total/1000/60) % 60 );
//     const hours = Math.floor( (total/(1000*60*60)) % 24 );
//     const days = Math.floor( total/(1000*60*60*24) );

//     return {
//       total,
//       days,
//       hours,
//       minutes,
//       seconds
//     };
//   }

// Countup
function getTimeRemaining(endtime){
  const total = Date.parse(new Date()) - Date.parse(endtime);
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}


let days = getTimeRemaining(deadline).days; //starting number of days
let hours = getTimeRemaining(deadline).hours; // starting number of hours
let minutes = getTimeRemaining(deadline).minutes; // starting number of minutes
let seconds = getTimeRemaining(deadline).seconds; // starting number of seconds

// converts all to seconds
let totalSeconds =
days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

//temporary seconds holder
let tempSeconds = totalSeconds;

// calculates number of days, hours, minutes and seconds from a given number of seconds
const convert = (value, inSeconds) => {
if (value > inSeconds) {
    let x = value % inSeconds;
    tempSeconds = x;
    return (value - x) / inSeconds;
} else {
    return 0;
}
};

//sets seconds
const setSeconds = (s) => {
document.querySelector("#seconds").textContent = s + "s";
};

//sets minutes
const setMinutes = (m) => {
document.querySelector("#minutes").textContent = m + "m";
};

//sets hours
const setHours = (h) => {
document.querySelector("#hours").textContent = h + "h";
};

//sets Days
const setDays = (d) => {
document.querySelector("#days").textContent = d + "d";
};

// Update the count down every 1 second
var x = setInterval(() => {
//clears countdown when all seconds are counted
if (totalSeconds <= 0) {
    clearInterval(x);
}
setDays(convert(tempSeconds, 24 * 60 * 60));
setHours(convert(tempSeconds, 60 * 60));
setMinutes(convert(tempSeconds, 60));
setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
// totalSeconds--;
totalSeconds++;
tempSeconds = totalSeconds;
}, 1000);

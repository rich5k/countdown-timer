"use strict";
const timer = document.getElementById("timer");
const time = timer.innerHTML;
const timeBits = time.split(":");
var setHours = parseInt(timeBits[0]);
var setMins = parseInt(timeBits[1]);
var setSecs = parseInt(timeBits[2]);
console.log(setHours);
const startbtn = document.getElementById("start");
function getCountdownTime() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentDay = currentDate.getDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var currentMonth = months[currentDate.getMonth()];
    var currentSeconds = currentDate.getSeconds();
    var addedSecs = currentSeconds + setSecs;
    var extraDay = 0, extraHour = 0, extraMins = 0;
    if (addedSecs < 10) {
        currentSeconds = "0" + addedSecs.toString();
    }
    else {
        if (addedSecs > 60) {
            currentSeconds = addedSecs - 60;
            extraMins++;
            if (currentSeconds < 10) {
                currentSeconds = "0" + currentSeconds.toString();
            }
            else {
                currentSeconds = currentSeconds.toString();
            }
        }
        else {
            currentSeconds = addedSecs.toString();
        }
    }
    var currentMinutes = currentDate.getMinutes();
    var addedMins = currentMinutes + setMins + extraMins;
    if (addedMins < 10) {
        currentMinutes = "0" + addedMins.toString();
    }
    else {
        if (addedMins > 60) {
            currentMinutes = addedMins - 60;
            extraHour++;
            if (currentMinutes < 10) {
                currentMinutes = "0" + currentMinutes.toString();
            }
            else {
                currentMinutes = currentMinutes.toString();
            }
        }
        else {
            currentMinutes = addedMins.toString();
        }
    }
    var currentHours = currentDate.getHours();
    var addedHours = currentHours + setHours + extraHour;
    if (addedHours < 10) {
        currentHours = "0" + addedHours.toString();
    }
    else {
        if (addedHours > 24) {
            currentHours = addedHours - 24;
            extraDay++;
            if (currentHours < 10) {
                currentHours = "0" + currentHours.toString();
            }
            else {
                currentHours = currentHours.toString();
            }
        }
        else {
            currentHours = addedHours.toString();
        }
    }
    currentDay = currentDay + extraDay;
    var countDownDate = new Date(`${currentMonth} ${currentDay}, ${currentYear} ${currentHours}:${currentMinutes}:${currentSeconds}`).getTime();
    // console.log(setHours);
    // timer.innerHTML=countDownDate.toString();
    // Update the count down every 1 second
    var x = setInterval(function () {
        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Output the result in an element with id="timer"
        var nhours = hours < 10 ? "0" + hours : hours;
        var nminutes = minutes < 10 ? "0" + minutes : minutes;
        var nseconds = seconds < 10 ? "0" + seconds : seconds;
        timer.innerHTML = nhours + ":" + nminutes + ":" + nseconds;
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            timer.innerHTML = "EXPIRED";
        }
    }, 1000);
    // timer.innerHTML=currentHours+":"+currentMinutes+":"+currentSeconds;
}
startbtn.addEventListener("click", () => {
    // setInterval(function(){
    //     var t1 = time, minutes, seconds;
    //     mins=mins/60,10;
    //     secs=secs%60,10;
    //     mins= mins <10 ? "0"+mins : mins;
    //     secs = secs <10 ? "0"+secs : secs;
    //     timer.innerHTML= mins+ ":" + secs;
    // })
    getCountdownTime();
});

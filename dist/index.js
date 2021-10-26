"use strict";
const timer = document.getElementById("timer");
const time = timer.outerHTML;
const timeBits = time.split(":");
var hours = parseInt(timeBits[0]);
var mins = parseInt(timeBits[1]);
var secs = parseInt(timeBits[2]);
const startbtn = document.getElementById("start");
startbtn.addEventListener("click", () => {
    while (hours !== 0 || mins !== 0 || secs !== 0) {
        if (secs !== 0) {
            secs--;
            timer.innerHTML = hours + ":" + mins + ":" + secs;
        }
        else {
            if (mins !== 0) {
                mins--;
                secs = 59;
                timer.innerHTML = hours + ":" + mins + ":" + secs;
            }
            else {
                if (hours !== 0) {
                    hours--;
                    mins = 59;
                    timer.innerHTML = hours + ":" + mins + ":" + secs;
                }
            }
        }
    }
    timer.innerHTML = "00:00:00";
});

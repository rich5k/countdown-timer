"use strict";
exports.__esModule = true;
require("p5/lib/addons/p5.sound");
// const p5=P5;
var timer = document.getElementById("timer");
var time = timer.innerHTML;
var timeBits = time.split(":");
var setHours = parseInt(timeBits[0]);
var setMins = parseInt(timeBits[1]);
var setSecs = parseInt(timeBits[2]);
console.log(setHours);
document.getElementById("hour-input").value = setHours < 10 ? "0" + setHours : setHours.toString();
document.getElementById("minutes-input").value = setMins < 10 ? "0" + setMins : setMins.toString();
document.getElementById("seconds-input").value = setSecs < 10 ? "0" + setSecs : setSecs.toString();
var isRepeat = false;
var startbtn = document.getElementById("start");
// let tickingClock;
// let timeUpBeeper;
var timerSound = function (p) {
    var tickingClock;
    p.preload = function () {
        var loadSound = function (path) { return p.loadSound(path); };
        tickingClock = loadSound('../assets/Clock-Ticking-C-www.fesliyanstudios.com.mp3');
    };
    p.setup = function () {
        tickingClock.play();
    };
};
var TheTimer = /** @class */ (function () {
    //constructor
    function TheTimer() {
        this.state = 0;
        this.timerId = 0;
        this.startTime = 0;
        this.remaining = 0;
    }
    //gets current countdown time
    TheTimer.prototype.getCountdownTime = function () {
        time = timer.innerHTML;
        timeBits = time.split(":");
        setHours = parseInt(timeBits[0]);
        setMins = parseInt(timeBits[1]);
        setSecs = parseInt(timeBits[2]);
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentDay = currentDate.getDate();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
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
        return new Date(currentMonth + " " + currentDay + ", " + currentYear + " " + currentHours + ":" + currentMinutes + ":" + currentSeconds).getTime();
        // console.log(setHours);
        // timer.innerHTML=countDownDate.toString();
        // timer.innerHTML=currentHours+":"+currentMinutes+":"+currentSeconds;
    };
    TheTimer.prototype.updateCountdownTime = function () {
        var updateTime = timer.innerHTML;
        var updateTimeBits = updateTime.split(":");
        var updateHours = parseInt(updateTimeBits[0]);
        var updateMins = parseInt(updateTimeBits[1]);
        var updateSecs = parseInt(updateTimeBits[2]);
        console.log("Hours: " + updateHours + "Mins: " + updateMins + "Secs:" + updateSecs);
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentDay = currentDate.getDate();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var currentMonth = months[currentDate.getMonth()];
        var currentSeconds = currentDate.getSeconds();
        var addedSecs = currentSeconds + updateSecs;
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
        var addedMins = currentMinutes + updateMins + extraMins;
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
        var addedHours = currentHours + updateHours + extraHour;
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
        return new Date(currentMonth + " " + currentDay + ", " + currentYear + " " + currentHours + ":" + currentMinutes + ":" + currentSeconds).getTime();
        // console.log(updateHours);
        // timer.innerHTML=countDownDate.toString();
        // timer.innerHTML=currentHours+":"+currentMinutes+":"+currentSeconds;
    };
    TheTimer.prototype.startTimer = function () {
        var _this = this;
        // startTime= new Date().getTime();
        startbtn.innerHTML = "Pause";
        var countDownDate = this.getCountdownTime();
        this.timerId = setInterval(function () {
            // Get todays date and time
            var now = new Date().getTime();
            _this.startTime = now;
            // Find the distance between now an the count down date
            var distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            var nhours = hours < 10 ? "0" + hours : hours;
            var nminutes = minutes < 10 ? "0" + minutes : minutes;
            var nseconds = seconds < 10 ? "0" + seconds : seconds;
            timer.innerHTML = nhours + ":" + nminutes + ":" + nseconds;
            if (distance <= 10) {
                timerSound;
            }
            // If the count down is over, write some text 
            if (distance < 0 && !isRepeat) {
                clearInterval(_this.timerId);
                timer.innerHTML = "EXPIRED";
            }
        }, 1000);
        this.state = 1;
    };
    TheTimer.prototype.pauseTimer = function () {
        if (this.state != 1)
            return;
        startbtn.innerHTML = "Start";
        this.remaining = 1000 - (new Date().getTime() - this.startTime);
        window.clearInterval(this.timerId);
        this.state = 2;
    };
    TheTimer.prototype.resumeTimer = function () {
        var _this = this;
        if (this.state != 2)
            return;
        startbtn.innerHTML = "Pause";
        var countDownDate = this.updateCountdownTime();
        this.timerId = setInterval(function () {
            // Get todays date and time
            var now = new Date().getTime();
            _this.startTime = now;
            // Find the distance between now an the count down date
            var distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            var nhours = hours < 10 ? "0" + hours : hours;
            var nminutes = minutes < 10 ? "0" + minutes : minutes;
            var nseconds = seconds < 10 ? "0" + seconds : seconds;
            timer.innerHTML = nhours + ":" + nminutes + ":" + nseconds;
            // If the count down is over, write some text 
            if (distance < 0 && !isRepeat) {
                clearInterval(_this.timerId);
                timer.innerHTML = "EXPIRED";
            }
        }, 1000);
        this.state = 1;
    };
    TheTimer.prototype.resetTimer = function () {
        var _this = this;
        if (this.state != 2)
            return;
        startbtn.innerHTML = "Pause";
        var countDownDate = this.getCountdownTime();
        this.timerId = setInterval(function () {
            // Get todays date and time
            var now = new Date().getTime();
            _this.startTime = now;
            // Find the distance between now an the count down date
            var distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            var nhours = hours < 10 ? "0" + hours : hours;
            var nminutes = minutes < 10 ? "0" + minutes : minutes;
            var nseconds = seconds < 10 ? "0" + seconds : seconds;
            timer.innerHTML = nhours + ":" + nminutes + ":" + nseconds;
            // If the count down is over, write some text 
            if (distance < 0 && !isRepeat) {
                clearInterval(_this.timerId);
                timer.innerHTML = "EXPIRED";
            }
        }, 1000);
        this.state = 1;
    };
    return TheTimer;
}());
var count = 0;
var isPause = false;
var timeObj = new TheTimer();
function startEvent() {
    isPause = !isPause;
    if (count > 1) {
        if (isPause) {
            timeObj.pauseTimer();
            console.log("pause true");
        }
        else {
            timeObj.resumeTimer();
            console.log("pause false");
        }
        console.log("Timer has already started");
    }
    else if (count === 1) {
        timeObj.pauseTimer();
        console.log("pause true");
        isPause = !isPause;
        count++;
    }
    else {
        timeObj.startTimer();
        count++;
    }
}
startbtn.addEventListener("click", function () {
    startEvent();
});
var repeatbtn = document.getElementById("repeat");
var repeatMarker = document.getElementById("repeat-marker");
function repeatEvent() {
    isRepeat = !isRepeat;
    if (isRepeat) {
        repeatMarker.innerHTML = "R";
    }
    else {
        repeatMarker.innerHTML = "";
    }
}
repeatbtn.addEventListener("click", function () {
    repeatEvent();
});
var modeEmoji = document.getElementById("mode-emoji");
var body = document.querySelector('body');
var darkModeToggle = document.getElementById("toggleB");
var isDark = darkModeToggle.checked;
var darkModeTexta = document.getElementById("toggleB-texta");
var darkModeTextb = document.getElementById("toggleB-textb");
function toggleDarkMode() {
    isDark = !isDark;
    darkModeToggle.checked = isDark;
    if (darkModeToggle.checked) {
        body.classList.add('dark-body');
        body.classList.remove('bg-gradient-to-r');
        darkModeTexta.classList.add('text-white');
        darkModeTextb.classList.add('text-white');
    }
    else {
        body.classList.remove('dark-body');
        body.classList.add('bg-gradient-to-r');
        darkModeTexta.classList.remove('text-white');
        darkModeTextb.classList.remove('text-white');
    }
}
var timerOverlay = document.getElementById("timer-overlay");
var setTimerBtn = document.getElementById("set-timer");
var startTimer = document.getElementById("startTimer");
setTimerBtn.onclick = function () {
    timerOverlay.style.display = "block";
};
startTimer.onclick = function () {
    var hourInput = document.getElementById("hour-input").value;
    var minsInput = document.getElementById("minutes-input").value;
    var secsInput = document.getElementById("seconds-input").value;
    timer.innerHTML = hourInput + ":" + minsInput + ":" + secsInput;
    timerOverlay.style.display = "none";
};
darkModeToggle.addEventListener('click', function () {
    toggleDarkMode();
});
document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === "R") {
        repeatEvent();
    }
    else if (e.key === " ") {
        startEvent();
    }
    else if (e.key === "L") {
        toggleDarkMode();
    }
    else if (e.key === "S") {
        timerOverlay.style.display = "block";
    }
});
window.onload = function () {
    if (darkModeToggle.checked) {
        body.classList.add('dark-body');
        body.classList.remove('bg-gradient-to-r');
        darkModeTexta.classList.add('text-white');
        darkModeTextb.classList.add('text-white');
    }
    else {
        body.classList.remove('dark-body');
        body.classList.add('bg-gradient-to-r');
        darkModeTexta.classList.remove('text-white');
        darkModeTextb.classList.remove('text-white');
    }
};
"use strict";
// import * from '../dist/timerSound';
var pomo25 = document.getElementById("pomo-25");
var pomo50 = document.getElementById("pomo-50");
var sess2 = document.getElementById("sess-2");
var sess4 = document.getElementById("sess-4");
var sessions = document.getElementById("sessions");
var timer = document.getElementById("timer");
const startbtn2 = document.getElementById("start");
const resetbtn2 = document.getElementById("reset");
const breakMarker = document.getElementById("break-marker");
localStorage.removeItem("pomo");
localStorage.removeItem("sess");
var time = timer.innerHTML;
var timeBits = time.split(":");
var setHours = parseInt(timeBits[0]);
var setMins = parseInt(timeBits[1]);
var setSecs = parseInt(timeBits[2]);
console.log(setHours);
// console.log(timer);
var isRepeat = false;
var isPause = false;
var resetCount = 0;
class NewTimer {
    //constructor
    constructor() {
        this.state = 0;
        this.timerId = 0;
        this.startTime = 0;
        this.remaining = 0;
    }
    //gets current countdown time
    getCountdownTime() {
        time = timer.innerHTML;
        timeBits = time.split(":");
        localStorage.setItem("startTime", time);
        setHours = parseInt(timeBits[0]);
        setMins = parseInt(timeBits[1]);
        setSecs = parseInt(timeBits[2]);
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
        return new Date(`${currentMonth} ${currentDay}, ${currentYear} ${currentHours}:${currentMinutes}:${currentSeconds}`).getTime();
        // console.log(setHours);
        // timer.innerHTML=countDownDate.toString();
        // timer.innerHTML=currentHours+":"+currentMinutes+":"+currentSeconds;
    }
    updateCountdownTime() {
        var updateTime = timer.innerHTML;
        var updateTimeBits = updateTime.split(":");
        var updateHours = parseInt(updateTimeBits[0]);
        var updateMins = parseInt(updateTimeBits[1]);
        var updateSecs = parseInt(updateTimeBits[2]);
        console.log("Hours: " + updateHours + "Mins: " + updateMins + "Secs:" + updateSecs);
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentDay = currentDate.getDate();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
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
        return new Date(`${currentMonth} ${currentDay}, ${currentYear} ${currentHours}:${currentMinutes}:${currentSeconds}`).getTime();
        // console.log(updateHours);
        // timer.innerHTML=countDownDate.toString();
        // timer.innerHTML=currentHours+":"+currentMinutes+":"+currentSeconds;
    }
    startTimer() {
        // startTime= new Date().getTime();
        startbtn2.innerHTML = "Pause";
        var countDownDate = this.getCountdownTime();
        this.timerId = setInterval(() => {
            // Get todays date and time
            var now = new Date().getTime();
            this.startTime = now;
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
                // timerSound;
            }
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(this.timerId);
                // timer.innerHTML = "EXPIRED";
                // tickingClock.play();
                let completeSession = 0;
                for (let i = 1; i <= sessValue; i++) {
                    if (localStorage.getItem(`sess${i}`) === "not yet" && completeSession === 0) {
                        localStorage.setItem(`sess${i}`, new Date().toLocaleTimeString());
                        document.getElementById(`p${i}`).innerHTML = `<li id="p${i}"><strong>P${i}:</strong> <em>` + localStorage.getItem(`sess${i}`) + `</em></li>`;
                        completeSession++;
                    }
                    else if (localStorage.getItem(`sess${i}`) === "not yet" && completeSession > 0) {
                        this.startBreak();
                        completeSession++;
                        startbtn2.innerHTML = "Pause";
                        countDownDate = this.getCountdownTime();
                        this.timerId = setInterval(() => {
                            // Get todays date and time
                            var now = new Date().getTime();
                            this.startTime = now;
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
                                // timerSound;
                            }
                            // If the count down is over, write some text 
                            if (distance < 0) {
                                clearInterval(this.timerId);
                            }
                        }, 1000);
                    }
                }
                if (completeSession == sessValue)
                    timer.innerHTML = "Completed all Pomodoro Sessions. Well Done!";
            }
            // else if(distance < 0 && isRepeat){
            //     clearInterval(this.timerId);
            //     this.resetTimer();
            // }
        }, 1000);
        this.state = 1;
    }
    pauseTimer() {
        if (this.state != 1)
            return;
        startbtn2.innerHTML = "Start";
        this.remaining = 1000 - (new Date().getTime() - this.startTime);
        resetbtn2.classList.remove('hidden');
        window.clearInterval(this.timerId);
        this.state = 2;
    }
    resumeTimer() {
        if (this.state != 2)
            return;
        startbtn2.innerHTML = "Pause";
        isPause = false;
        var countDownDate = this.updateCountdownTime();
        this.timerId = setInterval(() => {
            // Get todays date and time
            var now = new Date().getTime();
            this.startTime = now;
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
            if (distance < 0) {
                clearInterval(this.timerId);
                // timer.innerHTML = "EXPIRED";
                let completeSession = 0;
                for (let i = 1; i <= sessValue; i++) {
                    if (localStorage.getItem(`sess${i}`) === "not yet" && completeSession === 0) {
                        localStorage.setItem(`sess${i}`, new Date().toLocaleTimeString());
                        document.getElementById(`p${i}`).innerHTML = `<li id="p${i}"><strong>P${i}:</strong> <em>` + localStorage.getItem(`sess${i}`) + `</em></li>`;
                        completeSession++;
                    }
                    else if (localStorage.getItem(`sess${i}`) === "not yet" && completeSession === 1) {
                        this.startBreak();
                        completeSession++;
                    }
                }
                if (completeSession == sessValue)
                    timer.innerHTML = "Completed all Pomodoro Sessions. Well Done!";
            }
        }, 1000);
        this.state = 1;
        resetbtn2.classList.add('hidden');
    }
    resetTimer() {
        if (this.state != 2)
            return;
        window.clearInterval(this.timerId);
        startbtn2.innerHTML = "Pause";
        resetCount++;
        timer.innerHTML = String(localStorage.getItem("startTime"));
        var countDownDate = this.getCountdownTime();
        resetbtn2.classList.add('hidden');
        this.timerId = setInterval(() => {
            // Get todays date and time
            var now = new Date().getTime();
            this.startTime = now;
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
                clearInterval(this.timerId);
                timer.innerHTML = "EXPIRED";
            }
        }, 1000);
        this.state = 1;
    }
    startBreak() {
        window.clearInterval(this.timerId);
        startbtn2.innerHTML = "Pause";
        resetCount++;
        timer.innerHTML = String(localStorage.getItem("break"));
        var countDownDate = this.getCountdownTime();
        resetbtn2.classList.add('hidden');
        breakMarker.classList.remove('hidden');
        this.timerId = setInterval(() => {
            // Get todays date and time
            var now = new Date().getTime();
            this.startTime = now;
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
            if (distance < 0) {
                clearInterval(this.timerId);
                // timer.innerHTML = "EXPIRED";
                let completeSession = 0;
                for (let i = 1; i <= sessValue; i++) {
                    if (localStorage.getItem(`sess${i}`) === "not yet") {
                        if (pomoValue == 50) {
                            timer.innerHTML = "00:50:00";
                            // this.startTimer();
                            return;
                        }
                        else {
                            // timer.innerHTML="00:25:00";
                            timer.innerHTML = "00:02:00";
                            breakMarker.classList.add('hidden');
                            // this.startTimer();
                            return;
                        }
                    }
                    else {
                        completeSession++;
                    }
                }
                if (completeSession == sessValue)
                    timer.innerHTML = "Completed all Pomodoro Sessions. Well Done";
            }
        }, 1000);
        this.state = 1;
    }
}
var count = 0;
var nTimeObj = new NewTimer();
function startNewEvent() {
    isPause = !isPause;
    console.log(isPause);
    if (resetCount === 1) {
        nTimeObj.pauseTimer();
        console.log("pause true & it was resetted");
        resetCount = 0;
        isPause = true;
    }
    else if (count > 1) {
        if (isPause) {
            nTimeObj.pauseTimer();
            console.log("pause true");
        }
        else {
            nTimeObj.resumeTimer();
            console.log("pause false");
        }
        console.log("Timer has already started");
    }
    else if (count === 1) {
        nTimeObj.pauseTimer();
        console.log("pause true");
        isPause = !isPause;
        count++;
    }
    else {
        nTimeObj.startTimer();
        count++;
    }
}
function resetNewEvent() {
    nTimeObj.resetTimer();
}
startbtn2.addEventListener("click", () => {
    startNewEvent();
});
resetbtn2.addEventListener("click", () => {
    resetNewEvent();
});
pomo25.addEventListener('click', () => {
    pomo25.classList.toggle('selected-tile');
    pomo50.classList.remove('selected-tile');
    localStorage.setItem("pomo", "25");
    localStorage.setItem("break", "00:05:00");
});
pomo50.addEventListener('click', () => {
    pomo50.classList.toggle('selected-tile');
    pomo25.classList.remove('selected-tile');
    localStorage.setItem("pomo", "50");
    localStorage.setItem("break", "00:10:00");
});
sess2.addEventListener('click', () => {
    sess2.classList.toggle('selected-tile');
    sess4.classList.remove('selected-tile');
    localStorage.setItem("sess", "2");
});
sess4.addEventListener('click', () => {
    sess4.classList.toggle('selected-tile');
    sess2.classList.remove('selected-tile');
    localStorage.setItem("sess", "4");
});
var sessValue;
var pomoValue;
var done = document.getElementById('done');
done.addEventListener('click', () => {
    sessValue = Number(localStorage.getItem("sess"));
    pomoValue = Number(localStorage.getItem("pomo"));
    if (sessValue == 2) {
        sessions.innerHTML = "";
        for (let i = 1; i <= sessValue; i++) {
            localStorage.setItem(`sess${i}`, "not yet");
            sessions.innerHTML += `<li id="p${i}"><strong>P${i}:</strong> <em>` + localStorage.getItem(`sess${i}`) + `</em></li>`;
        }
    }
    else {
        sessions.innerHTML = "";
        for (let i = 1; i <= sessValue; i++) {
            localStorage.setItem(`sess${i}`, "not yet");
            sessions.innerHTML += `<li id="p${i}"><strong>P${i}:</strong> <em>` + localStorage.getItem(`sess${i}`) + `</em></li>`;
        }
    }
    if (pomoValue == 50) {
        timer.innerHTML = "00:50:00";
    }
    else {
        // timer.innerHTML="00:25:00";
        timer.innerHTML = "00:02:00";
    }
    nTimeObj.updateCountdownTime();
});
var modeEmoji = document.getElementById("mode-emoji");
var body = document.querySelector('body');
var darkModeToggle = document.getElementById("toggleB");
var isDark = darkModeToggle.checked;
var darkModeTexta = document.getElementById("toggleB-texta");
var darkModeTextb = document.getElementById("toggleB-textb");
var sessionText = document.getElementById("sessions-text");
function toggleDarkmode() {
    isDark = !isDark;
    darkModeToggle.checked = isDark;
    if (darkModeToggle.checked) {
        body.classList.add('dark-body');
        // body.classList.remove('bg-gradient-to-r')
        darkModeTexta.classList.add('text-white');
        darkModeTextb.classList.add('text-white');
        sessionText.classList.add('text-white');
    }
    else {
        body.classList.remove('dark-body');
        // body.classList.add('bg-gradient-to-r')
        darkModeTexta.classList.remove('text-white');
        darkModeTextb.classList.remove('text-white');
        sessionText.classList.remove('text-white');
    }
}
darkModeToggle.addEventListener('click', () => {
    toggleDarkmode();
});
document.addEventListener('keydown', (e) => {
    if (e.key === " ") {
        startNewEvent();
    }
    else if (e.key === "L") {
        toggleDarkmode();
    }
});
window.onload = () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-body');
        // body.classList.remove('bg-gradient-to-r')
        darkModeTexta.classList.add('text-white');
        darkModeTextb.classList.add('text-white');
        sessionText.classList.add('text-white');
    }
    else {
        body.classList.remove('dark-body');
        // body.classList.add('bg-gradient-to-r')
        darkModeTexta.classList.remove('text-white');
        darkModeTextb.classList.remove('text-white');
        sessionText.classList.remove('text-white');
    }
};

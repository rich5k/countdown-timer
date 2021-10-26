"use strict";
const timer = document.getElementById("timer");
const startbtn = document.getElementById("start");
startbtn.addEventListener("click", () => {
    timer.innerHTML = "00:40:00";
});

"use strict";
var pomo25 = document.getElementById("pomo-25");
var pomo50 = document.getElementById("pomo-50");
var sess2 = document.getElementById("sess-2");
var sess4 = document.getElementById("sess-4");
var sessions = document.getElementById("sessions");
var timer = document.getElementById("timer");
localStorage.removeItem('pomo');
localStorage.removeItem('sess');
pomo25.addEventListener('click', () => {
    pomo25.classList.toggle('selected-tile');
    pomo50.classList.remove('selected-tile');
    localStorage.setItem("pomo", "25");
});
pomo50.addEventListener('click', () => {
    pomo50.classList.toggle('selected-tile');
    pomo25.classList.remove('selected-tile');
    localStorage.setItem("pomo", "50");
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
if (localStorage.getItem("sess") == "2") {
    sessions.innerHTML = "<li>P1: <em>not yet</em></li><li>P2: <em>not yet</em></li>";
}
else {
    sessions.innerHTML = "<li>P1: <em>not yet</em></li><li>P2: <em>not yet</em></li><li>P3: <em>not yet</em></li><li>P4: <em>not yet</em></li>";
}
if (localStorage.getItem("pomo") == "50") {
    timer.innerHTML = "00:50:00";
}
else {
    timer.innerHTML = "00:25:00";
}

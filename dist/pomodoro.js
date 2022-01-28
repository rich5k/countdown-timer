"use strict";
var pomo25 = document.getElementById("pomo-25");
var pomo50 = document.getElementById("pomo-50");
var sess2 = document.getElementById("sess-2");
var sess4 = document.getElementById("sess-4");
var sessions = document.getElementById("sessions");
var timer = document.getElementById("timer");
localStorage.clear();
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
var sessValue;
var pomoValue;
var done = document.getElementById('done');
done.addEventListener('click', () => {
    sessValue = Number(localStorage.getItem("sess"));
    pomoValue = Number(localStorage.getItem("pomo"));
    if (sessValue == 2) {
        sessions.innerHTML = "<li>P1: <em>not yet</em></li><li>P2: <em>not yet</em></li>";
    }
    else {
        sessions.innerHTML = "<li>P1: <em>not yet</em></li><li>P2: <em>not yet</em></li><li>P3: <em>not yet</em></li><li>P4: <em>not yet</em></li>";
    }
    if (pomoValue == 50) {
        timer.innerHTML = "00:50:00";
    }
    else {
        timer.innerHTML = "00:25:00";
    }
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
    toggleDarkMode();
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

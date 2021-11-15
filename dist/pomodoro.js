"use strict";
var pomo25 = document.getElementById("pomo-25");
var pomo50 = document.getElementById("pomo-50");
var sess2 = document.getElementById("sess-2");
var sess4 = document.getElementById("sess-4");
pomo25.addEventListener('click', () => {
    pomo25.classList.toggle('selected-tile');
});
pomo50.addEventListener('click', () => {
    pomo50.classList.toggle('selected-tile');
});
sess2.addEventListener('click', () => {
    sess2.classList.toggle('selected-tile');
});
sess4.addEventListener('click', () => {
    sess4.classList.toggle('selected-tile');
});

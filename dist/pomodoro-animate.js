var done = document.getElementById("done");
var pomodoroSetting= document.getElementsByClassName("pomodoro-setting");
var pomodoroTimer= document.getElementById("pomodoro-timer");
done.addEventListener('click', () => {
    gsap.to(".pomodoro-setting", {duration:2, opacity:0, x:-300});
    pomodoroSetting.classList.add("hide-timer");
    pomodoroTimer.classList.remove("hide-timer");
});
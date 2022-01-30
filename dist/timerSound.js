let tickingClock;
let timeUpBeeper;
let startBtn= document.getElementById('start');
function preload(){
    soundFormats('mp3');
    tickingClock= loadSound('../assets/Clock-Ticking-C-www.fesliyanstudios.com.mp3');
}
function setup(){
    tickingClock.play();
}
startBtn.addEventListener('click', ()=>{
    

})

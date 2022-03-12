let tickingClock;
let timeUpBeeper;
function preload(){
    soundFormats('mp3');
    tickingClock= loadSound('../assets/Clock-Ticking-C-www.fesliyanstudios.com.mp3');
    timeUpBeeper= loadSound('../assets/Alarm-Fast-A1-www.fesliyanstudios.com.mp3');
}
// function setup(){
//     tickingClock.play();
// }

module.exports=tickingClock;
module.exports=timeUpBeeper;

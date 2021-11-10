// import P5 from "p5";
// import "p5/lib/addons/p5.sound";
// const p5=P5;
const timer = document.getElementById("timer") as HTMLElement;
const time= timer.innerHTML;
const timeBits=time.split(":");
var setHours= parseInt(timeBits[0]);
var setMins = parseInt(timeBits[1]);
var setSecs = parseInt(timeBits[2]);
console.log(setHours);

(<HTMLInputElement>document.getElementById("hour-input")).value= setHours <10 ? "0"+setHours : setHours.toString();
(<HTMLInputElement>document.getElementById("minutes-input")).value= setMins <10 ? "0"+setMins : setMins.toString();
(<HTMLInputElement>document.getElementById("seconds-input")).value= setSecs <10 ? "0"+setSecs : setSecs.toString();
var isRepeat=false;
const startbtn= document.getElementById("start") as HTMLElement;
// let tickingClock;
// let timeUpBeeper;
function preload(){
    // tickingClock= loadSound('../assets/Clock-Ticking-C-www.fesliyanstudios.com.mp3');
}

class TheTimer{
    //instance variables
    state:number;//0=idle, 1=running, 2= paused, 3=resumed
    timerId:number;
    startTime:any; 
    remaining:number;

    //constructor
    constructor(){
        this.state=0;
        this.timerId=0;
        this.startTime=0;
        this.remaining=0;
    }
    
    //gets current countdown time

    getCountdownTime():number{
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentDay = currentDate.getDate();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var currentMonth= months[currentDate.getMonth()];
        var currentSeconds: any=currentDate.getSeconds();
    
        var addedSecs= currentSeconds+setSecs;
        var extraDay =0, extraHour =0, extraMins =0;
        if(addedSecs <10){
            currentSeconds = "0"+addedSecs.toString();
        }
        else{
            if(addedSecs>60){
                currentSeconds= addedSecs-60;
                extraMins++;
                if(currentSeconds<10){
                    currentSeconds = "0"+currentSeconds.toString();
                }else{
                    currentSeconds = currentSeconds.toString();
                }
            }
            else{
                currentSeconds = addedSecs.toString();
            }
        }
    
        var currentMinutes: any=currentDate.getMinutes();
        var addedMins = currentMinutes+setMins+extraMins;
        if(addedMins <10){
            currentMinutes = "0"+addedMins.toString();
        }
        else{
            if(addedMins>60){
                currentMinutes= addedMins-60;
                extraHour++;
                if(currentMinutes<10){
                    currentMinutes = "0"+currentMinutes.toString();
                }else{
                    currentMinutes = currentMinutes.toString();
                }
            }
            else{
                currentMinutes = addedMins.toString();
            }
        }
    
        var currentHours: any=currentDate.getHours();
        var addedHours = currentHours+setHours+extraHour;
        if(addedHours <10){
            currentHours = "0"+addedHours.toString();
        }
        else{
            if(addedHours>24){
                currentHours= addedHours-24;
                extraDay++;
                if(currentHours<10){
                    currentHours = "0"+currentHours.toString();
                }else{
                    currentHours = currentHours.toString();
                }
            }
            else{
                currentHours = addedHours.toString();
            }
        }
    
        currentDay= currentDay+extraDay;
    
        return new Date(`${currentMonth} ${currentDay}, ${currentYear} ${currentHours}:${currentMinutes}:${currentSeconds}`).getTime();
        
        // console.log(setHours);
        // timer.innerHTML=countDownDate.toString();
    
    
        // timer.innerHTML=currentHours+":"+currentMinutes+":"+currentSeconds;
    }

    startTimer():void{
        // startTime= new Date().getTime();
        var countDownDate= this.getCountdownTime();
        this.timerId=setInterval(()=>{
            // Get todays date and time
            var now = new Date().getTime();
            this.startTime=now;
            // Find the distance between now an the count down date
            var distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            var nhours= hours <10 ? "0"+hours : hours;
            var nminutes= minutes <10 ? "0"+minutes : minutes;
            var nseconds = seconds <10 ? "0"+seconds : seconds;
            timer.innerHTML=nhours+":"+nminutes+":"+nseconds;
                        
            // If the count down is over, write some text 
            if (distance < 0 && !isRepeat) {
                clearInterval(this.timerId);
                timer.innerHTML = "EXPIRED";
            }
        }, 1000);
        this.state=1;
    }
    pauseTimer():void{
        if(this.state!=1) return;
        this.remaining =1000-(new Date().getTime()- this.startTime);
        // var hours = Math.floor((this.remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // var minutes = Math.floor((this.remaining % (1000 * 60 * 60)) / (1000 * 60));
        // var seconds = Math.floor((this.remaining % (1000 * 60)) / 1000);
        // var nhours= hours <10 ? "0"+hours : hours;
        // var nminutes= minutes <10 ? "0"+minutes : minutes;
        // var nseconds = seconds <10 ? "0"+seconds : seconds;
        window.clearInterval(this.timerId);
        this.state=2;
        // console.log(this.remaining);
        // console.log("Remaining time: "+nhours+":"+nminutes+":"+nseconds);
    }
    timeoutCallback():void{
        if(this.state!=3) return;
        var countDownDate= this.getCountdownTime();
        // this.startTime=new Date().getTime();
        this.timerId= setInterval(()=>{
            // Get todays date and time
            var now = new Date().getTime();
            this.startTime=now;
            // Find the distance between now an the count down date
            var distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            var nhours= hours <10 ? "0"+hours : hours;
            var nminutes= minutes <10 ? "0"+minutes : minutes;
            var nseconds = seconds <10 ? "0"+seconds : seconds;
            timer.innerHTML=nhours+":"+nminutes+":"+nseconds;
                        
            // If the count down is over, write some text 
            if (distance < 0 && !isRepeat) {
                clearInterval(this.timerId);
                timer.innerHTML = "EXPIRED";
            }
        }, 1000);
        this.state=1;
    }
    resumeTimer():void{
        if(this.state!=2) return;

        this.state=3;
        setTimeout(this.timeoutCallback, this.remaining)
    }
}



// var distance=0;
// var isResume=false;


// function IntervalTimer(callback:any, interval:any){
    
//     this.pause= ()=>{
//         if(state!=1) return;

//         remaining =interval - (new Date().getTime()- startTime);
//         window.clearInterval(timerId);
//         state=2;
//     };

//     this.resume=()=>{
//         if(state!=2) return;

//         state=3;
//         window.setTimeout(this.timeoutCallback, remaining);
//     };

//     this.timeoutCallback=()=>{
//         if(state!=3) return;

//         callback();
        
//         startTime = new Date().getTime();
//         timerId= window.setInterval(callback, interval);
//         state=1;
//     };

//     startTime= new Date().getTime();
//     timerId=window.setInterval(callback, interval);
//     state=1;
// }
// // Update the count down every 1 second
// function begTimer(countDownDate:number){
//     var state=0; //0=idle, 1=running, 2=paused, 3=resumed
//     var theTimer = setInterval(function() {
//         if(isPause){
//             isResume=!isResume;
//             // Get todays date and time
//             var now = new Date().getTime();
            
//             // Find the distance between now an the count down date
//             distance = countDownDate - now;
            
//             // Time calculations for days, hours, minutes and seconds
//             var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//             var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
//             // Output the result in an element with id="timer"
//             var nhours= hours <10 ? "0"+hours : hours;
//             var nminutes= minutes <10 ? "0"+minutes : minutes;
//             var nseconds = seconds <10 ? "0"+seconds : seconds;
//             timer.innerHTML=nhours+":"+nminutes+":"+nseconds;
            
//             // If the count down is over, write some text 
//             if (distance < 0 && !isRepeat) {
//                 clearInterval(theTimer);
//                 timer.innerHTML = "EXPIRED";
//             }
            // else if(isRepeat){
        
//             }
//         }
//         else if(!isPause&& isResume){
//             // countDownDate=distance;
//             clearInterval(theTimer);
//         }
//     }, 1000);
//     return theTimer;
// }

function startEvent(){
    
    // var theTimer=begTimer();

    // if(!!theTimer){
    //     clearInterval(theTimer);
    //     theTimer=0;
    // }else{
    //     theTimer = begTimer();
    // }
        
    // startbtn.innerHTML="Pause";

}
var count=0;
var isPause=false;
var timeObj= new TheTimer();
startbtn.addEventListener("click",()=>{
    isPause=!isPause;
    if(count>0){
        timeObj.pauseTimer();
        console.log("Timer has already started");
    }
    else{
        timeObj.startTimer();
        count++;
    }
    
    if(isPause)
        startbtn.innerHTML="Pause";
    else
        startbtn.innerHTML="Start";
});

const repeatbtn= document.getElementById("repeat") as HTMLElement;
const repeatMarker= document.getElementById("repeat-marker") as HTMLElement;
function repeatEvent(){
    isRepeat=!isRepeat;
    if(isRepeat){
        repeatMarker.innerHTML="R";
    }else{
        repeatMarker.innerHTML="";
    }
}
repeatbtn.addEventListener("click",()=>{
    repeatEvent();
});
var modeEmoji= document.getElementById("mode-emoji") as HTMLElement;
var body = document.querySelector('body') as HTMLElement;
var darkModeToggle=(<HTMLInputElement>document.getElementById("toggleB"));
var isDark=darkModeToggle.checked;
var darkModeTexta=document.getElementById("toggleB-texta")as HTMLElement;
var darkModeTextb=document.getElementById("toggleB-textb")as HTMLElement;
function toggleDarkMode(){
    isDark=!isDark;
    darkModeToggle.checked=isDark;
    if(darkModeToggle.checked){
        body.classList.add('dark-body');
        body.classList.remove('bg-gradient-to-r')
        darkModeTexta.classList.add('text-white');
        darkModeTextb.classList.add('text-white');
    }else{
        body.classList.remove('dark-body');
        body.classList.add('bg-gradient-to-r')
        darkModeTexta.classList.remove('text-white');
        darkModeTextb.classList.remove('text-white');
    }
}

let timerOverlay= document.getElementById("timer-overlay") as HTMLElement;
let setTimerBtn= document.getElementById("set-timer") as HTMLElement;
let startTimer= document.getElementById("startTimer") as HTMLElement;

setTimerBtn.onclick= function(){
    timerOverlay.style.display="block";
}

startTimer.onclick= function(){
    let hourInput = (<HTMLInputElement>document.getElementById("hour-input")).value;
    let minsInput = (<HTMLInputElement>document.getElementById("minutes-input")).value;
    let secsInput = (<HTMLInputElement>document.getElementById("seconds-input")).value;
    timer.innerHTML= hourInput+":"+minsInput+":"+secsInput;
    timerOverlay.style.display="none";
}

darkModeToggle.addEventListener('click',()=>{
    toggleDarkMode();
})

document.addEventListener('keydown',(e)=>{
    // console.log(e.key);
    if(e.key==="R"){
        repeatEvent();
    }
    else if(e.key===" "){
        startEvent();
    }
    else if(e.key==="L"){
        toggleDarkMode();
    }
    else if(e.key==="S"){
        timerOverlay.style.display="block";   
    }
})
window.onload=()=>{
    if(darkModeToggle.checked){
        body.classList.add('dark-body');
        body.classList.remove('bg-gradient-to-r')
        darkModeTexta.classList.add('text-white');
        darkModeTextb.classList.add('text-white');
    }else{
        body.classList.remove('dark-body');
        body.classList.add('bg-gradient-to-r')
        darkModeTexta.classList.remove('text-white');
        darkModeTextb.classList.remove('text-white');
    }
}


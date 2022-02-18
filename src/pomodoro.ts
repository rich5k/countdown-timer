var pomo25= document.getElementById("pomo-25") as HTMLElement;
var pomo50= document.getElementById("pomo-50") as HTMLElement;
var sess2= document.getElementById("sess-2") as HTMLElement;
var sess4= document.getElementById("sess-4") as HTMLElement;
var sessions= document.getElementById("sessions") as HTMLElement;
var timer = document.getElementById("timer")as HTMLElement;
const startbtn2= document.getElementById("start") as HTMLElement;
const resetbtn2= document.getElementById("reset") as HTMLElement;
localStorage.removeItem("pomo");
localStorage.removeItem("sess");

var time= timer.innerHTML;
var timeBits=time.split(":");
var setHours= parseInt(timeBits[0]);
var setMins = parseInt(timeBits[1]);
var setSecs = parseInt(timeBits[2]);
console.log(setHours);
// console.log(timer);


var isRepeat=false;
var isPause=false;
var resetCount=0;
class NewTimer{
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
        time= timer.innerHTML;
        timeBits=time.split(":");
        setHours= parseInt(timeBits[0]);
        setMins = parseInt(timeBits[1]);
        setSecs = parseInt(timeBits[2]);
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

    updateCountdownTime():number{
        var updateTime= timer.innerHTML;
        var updateTimeBits=updateTime.split(":");
        var updateHours= parseInt(updateTimeBits[0]);
        var updateMins = parseInt(updateTimeBits[1]);
        var updateSecs = parseInt(updateTimeBits[2]);
        console.log("Hours: "+updateHours+"Mins: "+updateMins+"Secs:"+updateSecs);
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentDay = currentDate.getDate();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var currentMonth= months[currentDate.getMonth()];
        var currentSeconds: any=currentDate.getSeconds();
    
        var addedSecs= currentSeconds+updateSecs;
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
        var addedMins = currentMinutes+updateMins+extraMins;
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
        var addedHours = currentHours+updateHours+extraHour;
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
        
        // console.log(updateHours);
        // timer.innerHTML=countDownDate.toString();
    
    
        // timer.innerHTML=currentHours+":"+currentMinutes+":"+currentSeconds;
    }

    startTimer():void{
        // startTime= new Date().getTime();
        startbtn2.innerHTML="Pause";
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
            
            if(distance<=10){
                // timerSound;
            }
            // If the count down is over, write some text 
            if (distance < 0 && !isRepeat) {
                clearInterval(this.timerId);
                timer.innerHTML = "EXPIRED";
            }
            else if(distance < 0 && isRepeat){
                clearInterval(this.timerId);
                this.resetTimer();
            }
        }, 1000);
        this.state=1;
    }
    pauseTimer():void{
        if(this.state!=1) return;
        startbtn2.innerHTML="Start";
        this.remaining =1000-(new Date().getTime()- this.startTime);
        resetbtn2.classList.remove('hidden');
        window.clearInterval(this.timerId);
        this.state=2;
        
    }
    
    resumeTimer():void{
        if(this.state!=2) return;

        
        startbtn2.innerHTML="Pause";
        isPause=false;
        var countDownDate= this.updateCountdownTime();
        
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
        resetbtn2.classList.add('hidden');
    }
    resetTimer():void{
        if(this.state!=2) return;

        window.clearInterval(this.timerId);
        startbtn.innerHTML="Pause";
        resetCount++;
        timer.innerHTML= String(localStorage.getItem("startTime"));
        var countDownDate= this.getCountdownTime();
        resetbtn2.classList.add('hidden');
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
}

var count=0;
var timeObj= new NewTimer();

function startNewEvent(){
    isPause=!isPause;
    console.log(isPause);
    if(resetCount===1){
        timeObj.pauseTimer();
        console.log("pause true & it was resetted");
        resetCount=0;
        isPause=true;
    }
    else if(count>1){
        if(isPause){
            timeObj.pauseTimer();
            console.log("pause true");

        }
        else{
            timeObj.resumeTimer();
            console.log("pause false");
        }
        console.log("Timer has already started");
    }else if(count===1){
        timeObj.pauseTimer();
        console.log("pause true");
        isPause=!isPause;
        count++;
    }
    else{
        timeObj.startTimer();
        count++;
    }
    

}
function resetNewEvent(){
    timeObj.resetTimer();
}
startbtn2.addEventListener("click",()=>{
    startNewEvent();
    
});

resetbtn2.addEventListener("click",()=>{
    resetNewEvent();
    
});


pomo25.addEventListener('click',()=>{
    pomo25.classList.toggle('selected-tile');
    pomo50.classList.remove('selected-tile');
    localStorage.setItem("pomo","25");
})

pomo50.addEventListener('click',()=>{
    pomo50.classList.toggle('selected-tile');
    pomo25.classList.remove('selected-tile');
    localStorage.setItem("pomo","50");
})

sess2.addEventListener('click',()=>{
    sess2.classList.toggle('selected-tile');
    sess4.classList.remove('selected-tile');
    localStorage.setItem("sess","2");
})

sess4.addEventListener('click',()=>{
    sess4.classList.toggle('selected-tile');
    sess2.classList.remove('selected-tile');
    localStorage.setItem("sess","4");
})
var sessValue:number;
var pomoValue:number;
var done = document.getElementById('done') as HTMLElement;
done.addEventListener('click',()=>{

    sessValue =Number(localStorage.getItem("sess"));
    pomoValue =Number(localStorage.getItem("pomo"));
    
    if(sessValue==2){
        sessions.innerHTML="<li><strong>P1:</strong> <em>not yet</em></li><li><strong>P2:</strong> <em>not yet</em></li>"
    }
    else{
        sessions.innerHTML="<li><strong>P1:</strong> <em>not yet</em></li><li><strong>P2:</strong> <em>not yet</em></li><li><strong>P3:</strong> <em>not yet</em></li><li><strong>P4:</strong> <em>not yet</em></li>"
    }
    
    if(pomoValue==50){
        timer.innerHTML="00:50:00";
    }
    else{
        timer.innerHTML="00:25:00";
    }

    timeObj.updateCountdownTime();
    

})

var modeEmoji= document.getElementById("mode-emoji") as HTMLElement;
var body = document.querySelector('body') as HTMLElement;
var darkModeToggle=(<HTMLInputElement>document.getElementById("toggleB"));
var isDark=darkModeToggle.checked;
var darkModeTexta=document.getElementById("toggleB-texta")as HTMLElement;
var darkModeTextb=document.getElementById("toggleB-textb")as HTMLElement;
var sessionText=document.getElementById("sessions-text")as HTMLElement;
function toggleDarkmode(){
    isDark=!isDark;
    darkModeToggle.checked=isDark;
    if(darkModeToggle.checked){
        body.classList.add('dark-body');
        // body.classList.remove('bg-gradient-to-r')
        darkModeTexta.classList.add('text-white');
        darkModeTextb.classList.add('text-white');
        sessionText.classList.add('text-white');
    }else{
        body.classList.remove('dark-body');
        // body.classList.add('bg-gradient-to-r')
        darkModeTexta.classList.remove('text-white');
        darkModeTextb.classList.remove('text-white');
        sessionText.classList.remove('text-white');
    }
}

darkModeToggle.addEventListener('click',()=>{
    toggleDarkmode();
})
document.addEventListener('keydown',(e)=>{
    
    if(e.key===" "){
        startNewEvent();
    }
    else if(e.key==="L"){
        toggleDarkmode();
    }
    
})

window.onload=()=>{
    if(darkModeToggle.checked){
        body.classList.add('dark-body');
        // body.classList.remove('bg-gradient-to-r')
        darkModeTexta.classList.add('text-white');
        darkModeTextb.classList.add('text-white');
        sessionText.classList.add('text-white');
    }else{
        body.classList.remove('dark-body');
        // body.classList.add('bg-gradient-to-r')
        darkModeTexta.classList.remove('text-white');
        darkModeTextb.classList.remove('text-white');
        sessionText.classList.remove('text-white');
    }

}
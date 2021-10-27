const timer = document.getElementById("timer") as HTMLElement;
const time= timer.outerHTML;
const timeBits=time.split(":");
var setHours= parseInt(timeBits[0]);
var setMins = parseInt(timeBits[1]);
var setSecs = parseInt(timeBits[2]);
const startbtn= document.getElementById("start") as HTMLElement;
function getCountdownTime(){
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentDay = currentDate.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
    
    



    // Update the count down every 1 second
    // var x = setInterval(function() {

    //     // Get todays date and time
    //     var now = new Date().getTime();
        
    //     // Find the distance between now an the count down date
    //     var distance = countDownDate - now;
        
    //     // Time calculations for days, hours, minutes and seconds
    //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    //     // Output the result in an element with id="timer"
    //     timer.innerHTML=hours+":"+minutes+":"+seconds;
        
    //     // If the count down is over, write some text 
    //     if (distance < 0) {
    //         clearInterval(x);
    //         timer.innerHTML = "EXPIRED";
    //     }
    // }, 1000);
    // timer.innerHTML=currentHours+":"+currentMinutes+":"+currentSeconds;
}
startbtn.addEventListener("click",()=>{
    // setInterval(function(){
    //     var t1 = time, minutes, seconds;
    //     mins=mins/60,10;
    //     secs=secs%60,10;
        
    //     mins= mins <10 ? "0"+mins : mins;
    //     secs = secs <10 ? "0"+secs : secs;
    //     timer.innerHTML= mins+ ":" + secs;

    // })

    getCountdownTime();

});
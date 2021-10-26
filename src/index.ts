const timer = document.getElementById("timer") as HTMLElement;
const startbtn= document.getElementById("start") as HTMLElement;
startbtn.addEventListener("click",()=>{
    timer.innerHTML="00:40:00";

});
var pomo25= document.getElementById("pomo-25") as HTMLElement;
var pomo50= document.getElementById("pomo-50") as HTMLElement;
var sess2= document.getElementById("sess-2") as HTMLElement;
var sess4= document.getElementById("sess-4") as HTMLElement;

pomo25.addEventListener('click',()=>{
    pomo25.classList.toggle('selected-tile');
    pomo50.classList.remove('selected-tile');
})

pomo50.addEventListener('click',()=>{
    pomo50.classList.toggle('selected-tile');
    pomo25.classList.remove('selected-tile');
})

sess2.addEventListener('click',()=>{
    sess2.classList.toggle('selected-tile');
    sess4.classList.remove('selected-tile');
})

sess4.addEventListener('click',()=>{
    sess4.classList.toggle('selected-tile');
    sess2.classList.remove('selected-tile');
})
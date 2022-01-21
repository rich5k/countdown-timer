var done = document.getElementById("done");
done.addEventListener('click', () => {
    gsap.to(".tiles", {duration:2, opacity:0, x:-300});
    
});
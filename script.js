// TYPING EFFECT
const text = "Cybersecurity Enthusiast | Threat Detection Learner";
let i = 0;

function typing(){
    const el = document.getElementById("typing");

    // safety check (prevents error if element not found)
    if(!el) return;

    if(i < text.length){
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,40);
    }
}

// run typing after page loads
window.onload = typing;


// SCROLL REVEAL ANIMATION
window.addEventListener("scroll", function(){

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((section)=>{
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){
            section.classList.add("active");
        }
    });

});
/* ==========================================
LOVE LETTER WEBSITE
Part 1 - Page Navigation
========================================== */

const pages = document.querySelectorAll(".page");

const nextButtons = document.querySelectorAll(".next-btn");
const prevButtons = document.querySelectorAll(".prev-btn");

let currentPage = 0;

/* ==========================================
SHOW CURRENT PAGE
========================================== */

function showPage(index){

    pages.forEach(page=>{

        page.classList.remove("active");

        page.scrollTop = 0;

    });

    pages[index].classList.add("active");
    pages[index].style.animation = "none";

pages[index].offsetHeight;

pages[index].style.animation = "fade .7s ease";
}

/* ==========================================
NEXT BUTTON
========================================== */

nextButtons.forEach(button=>{

button.addEventListener("click",()=>{  

    if(currentPage < pages.length - 1){  

        currentPage++;  

        showPage(currentPage);  

    }  

});

});

/* ==========================================
PREVIOUS BUTTON
========================================== */

prevButtons.forEach(button=>{

button.addEventListener("click",()=>{  

    if(currentPage > 0){  

        currentPage--;  

        showPage(currentPage);  

    }  

});

});

/* ==========================================
INITIALIZE
========================================== */

showPage(currentPage);
/* ==========================================
LOVE LETTER WEBSITE
Part 2 - Navigation & Music
========================================== */

/* ==========================================
MOBILE SWIPE SUPPORT
========================================== */

let startX = 0;
let endX = 0;

document.addEventListener("touchstart", (e) => {

startX = e.changedTouches[0].screenX;

});

document.addEventListener("touchend", (e) => {

endX = e.changedTouches[0].screenX;  

handleSwipe();

});

function handleSwipe(){

// Swipe Left (Next Page)  
if(startX - endX > 80){  

    if(currentPage < pages.length - 1){  

        currentPage++;  

        showPage(currentPage);  

    }  

}  

// Swipe Right (Previous Page)  
if(endX - startX > 80){  

    if(currentPage > 0){  

        currentPage--;  

        showPage(currentPage);  

    }  

}

}

/* ==========================================
KEYBOARD SUPPORT
========================================== */

document.addEventListener("keydown", (e)=>{

if(e.key === "ArrowRight"){  

    if(currentPage < pages.length - 1){  

        currentPage++;  

        showPage(currentPage);  

    }  

}  

if(e.key === "ArrowLeft"){  

    if(currentPage > 0){  

        currentPage--;  

        showPage(currentPage);  

    }  

}

});

/* ==========================================
BACKGROUND MUSIC
========================================== */

const music = document.getElementById("bgMusic");

// Play music after the first interaction
document.addEventListener("click", () => {

music.play().catch(() => {});

}, { once:true });

// Spacebar = Play/Pause Music
document.addEventListener("keydown",(e)=>{

if(e.code === "Space"){  

    e.preventDefault();  

    if(music.paused){  

        music.play();  

    }else{  

        music.pause();  

    }  

}

});



/* ==========================================
LOVE LETTER WEBSITE
Part 3 - Final Surprise
========================================== */

const surpriseBtn = document.getElementById("surpriseBtn");
const finalMessage = document.getElementById("finalMessage");

if (surpriseBtn && finalMessage) {

surpriseBtn.addEventListener("click", () => {  

    // Hide the button  
    surpriseBtn.style.display = "none";  

    // Show the final message  
    finalMessage.style.display = "block";  
    finalMessage.style.opacity = "0";

setTimeout(() => {

    finalMessage.style.opacity = "1";

},100);
    finalMessage.classList.add("fade-in");  

    // Create floating hearts  
    for(let i = 0; i < 70; i++){  

        let heart = document.createElement("div");  

        const emojis = [

"❤️",

"💖",

"💕",

"💗",

"💘",

"✨",

"🌸",

"🦋",

"🤍"

];

heart.innerHTML =
emojis[Math.floor(Math.random()*emojis.length)];  

        heart.style.position = "fixed";  
        heart.style.left = Math.random() * 100 + "vw";  
        heart.style.top = "100vh";  
        heart.style.fontSize = (20 + Math.random() * 30) + "px";  
        heart.style.pointerEvents = "none";  
        heart.style.zIndex = "9999";  
        heart.style.transition = "all 7s ease-out"; 
        heart.style.opacity = "1";  

        document.body.appendChild(heart);  

        setTimeout(()=>{  

            heart.style.top = "-100px";  

            heart.style.left =  
            (Math.random() * 100) + "vw";  

            heart.style.transform =  
            "rotate(" + (360 + Math.random()*720) + "deg)";  

            heart.style.opacity = "0";  

        },100);  

        setTimeout(()=>{  

            heart.remove();  

        },7000); 

    }  

    // Scroll to the final message  
    finalMessage.scrollIntoView({  

        behavior:"smooth"  

    });  

});

}

/* ==========================================
END MESSAGE
========================================== */
document.title = "❤️ To My Dearest Love ❤️";

setInterval(()=>{

    document.title =
    document.title==="❤️ To My Dearest Love ❤️"
    ? "💖 I Love You 💖"
    : "❤️ To My Dearest Love ❤️";

},2000);

console.log("❤️ Love Letter Website Loaded Successfully ❤️");
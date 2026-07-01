// Welcome message
function welcome() {
    alert("Welcome to Chess Master Academy! Let's improve your chess skills.");
}

// Scroll to top button
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 16px";
topBtn.style.fontSize = "20px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "gold";
topBtn.style.color = "black";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";
document.body.appendChild(topBtn);

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Chess quotes
const quotes = [
    "Every chess master was once a beginner.",
    "Think before every move.",
    "Control the center of the board.",
    "Castle early to keep your king safe.",
    "A bad plan is better than no plan.",
    "Tactics win games, strategy wins championships.",
    "Don't move the same piece repeatedly in the opening.",
    "Always look for checks, captures and threats."
];

const quoteBox = document.createElement("div");
quoteBox.style.position = "fixed";
quoteBox.style.bottom = "20px";
quoteBox.style.left = "20px";
quoteBox.style.background = "rgba(0,0,0,0.8)";
quoteBox.style.color = "gold";
quoteBox.style.padding = "15px";
quoteBox.style.borderRadius = "10px";
quoteBox.style.maxWidth = "280px";
quoteBox.style.fontSize = "15px";
quoteBox.innerHTML =
"<strong>💡 Chess Tip</strong><br>" +
quotes[Math.floor(Math.random() * quotes.length)];

document.body.appendChild(quoteBox);

// Digital Clock
const clock = document.createElement("div");
clock.style.position = "fixed";
clock.style.top = "15px";
clock.style.right = "20px";
clock.style.background = "black";
clock.style.color = "gold";
clock.style.padding = "10px";
clock.style.borderRadius = "8px";
clock.style.fontWeight = "bold";

document.body.appendChild(clock);

function updateClock() {
    const d = new Date();
    clock.innerHTML = d.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

// Page Loader
window.onload = function () {
    console.log("Chess Master Academy Loaded Successfully!");
};

// Search feature
function searchContent() {
    let input = prompt("Enter a chess topic:");

    if (input == null) return;

    input = input.toLowerCase();

    if (input.includes("queen"))
        alert("Queen: Moves horizontally, vertically and diagonally.");

    else if (input.includes("rook"))
        alert("Rook: Moves horizontally and vertically.");

    else if (input.includes("bishop"))
        alert("Bishop: Moves diagonally.");

    else if (input.includes("knight"))
        alert("Knight: Moves in an L shape and jumps over pieces.");

    else if (input.includes("pawn"))
        alert("Pawn: Moves forward and captures diagonally.");

    else if (input.includes("king"))
        alert("King: Moves one square in any direction.");

    else if (input.includes("opening"))
        alert("Popular openings: Italian Game, Ruy Lopez, Sicilian Defense, Queen's Gambit.");

    else
        alert("Topic not found.");
}

// Keyboard shortcut
document.addEventListener("keydown", function(e){
    if(e.key==="f" && e.ctrlKey){
        e.preventDefault();
        searchContent();
    }
});

// Console greeting
console.log("Welcome to Chess Master Academy!");
/* ===========================
   CHESS PIECES RAIN EFFECT
=========================== */

const chessContainer = document.getElementById("chess-rain");

const pieces = [
"♔","♕","♖","♗","♘","♙",
"♚","♛","♜","♝","♞","♟"
];

function createPiece(){

const piece=document.createElement("div");

piece.innerHTML=pieces[Math.floor(Math.random()*pieces.length)];

piece.style.position="fixed";

piece.style.left=Math.random()*100+"vw";

piece.style.top="-60px";

piece.style.fontSize=(20+Math.random()*35)+"px";

piece.style.color=Math.random()>0.5?"gold":"white";

piece.style.opacity=0.3+Math.random()*0.7;

piece.style.pointerEvents="none";

piece.style.userSelect="none";

piece.style.zIndex="-1";

piece.style.transition="transform linear";

document.body.appendChild(piece);

let y=-60;

const speed=2+Math.random()*4;

const rotate=Math.random()*8;

function fall(){

y+=speed;

piece.style.top=y+"px";

piece.style.transform=`rotate(${y*rotate/50}deg)`;

if(y<window.innerHeight+80){

requestAnimationFrame(fall);

}

else{

piece.remove();

}

}

fall();

}

setInterval(createPiece,180);

/* ===========================
   HERO TEXT FLOAT EFFECT
=========================== */

const hero=document.querySelector(".hero h2");

if(hero){

let up=true;

setInterval(()=>{

hero.style.transform=up?"translateY(-10px)":"translateY(10px)";

hero.style.transition="1.8s";

up=!up;

},1800);

}

/* ===========================
   RANDOM CHESS QUOTES
=========================== */

const chessQuotes=[

"Every chess master was once a beginner.",

"Think before every move.",

"Control the center.",

"Castle early.",

"Tactics win games.",

"The king is the soul of chess.",

"Study your losses.",

"Patience wins games.",

"Calculate, don't guess."

];

const quote=document.querySelector("footer p");

if(quote){

setInterval(()=>{

quote.innerHTML=

chessQuotes[Math.floor(Math.random()*chessQuotes.length)];

},5000);

}

/* ===========================
   CARD FADE-IN ANIMATION
=========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="0.8s";

observer.observe(card);

});

/* ===========================
   HERO BUTTON PULSE
=========================== */

document.querySelectorAll("button").forEach(btn=>{

setInterval(()=>{

btn.animate([

{transform:"scale(1)"},

{transform:"scale(1.08)"},

{transform:"scale(1)"}

],{

duration:2000

});

},2500);

});

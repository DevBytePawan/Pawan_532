const btn = document.getElementById("loveBtn");

btn.addEventListener("click", function() {

    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
});

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// When YES is clicked
yesBtn.addEventListener("click", function() {
    message.innerHTML = "YAYYYYY ❤️💍 I Love You So Much!";
    message.style.fontSize = "24px";
});

// When NO is hovered (button runs away)
noBtn.addEventListener("mouseover", function() {

    const x = Math.floor(Math.random() * 300) - 150;
    const y = Math.floor(Math.random() * 300) - 150;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

const yesBtn1 = document.getElementById("yesBtn1");
const noBtn2 = document.getElementById("noBtn2");

// When YES is clicked → go to response page
yesBtn.addEventListener("click", function() {
    window.location.href = "response.html";
});

// When NO is hovered (runs away 😈)
noBtn.addEventListener("mouseover", function() {
    const x = Math.floor(Math.random() * 300) - 150;
    const y = Math.floor(Math.random() * 300) - 150;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
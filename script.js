const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const home = document.getElementById("home");

if (openBtn) {
    openBtn.onclick = () => {
        welcome.classList.add("hide");
        home.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}

// ======================
// Gallery
// ======================

const photos = [
    "assets/img1.jpeg",
    "assets/img2.jpeg",
    "assets/img3.jpeg",
];

const texts = [
    "Our first beautiful memory ❤️",
    "You make every day special 💖",
    "I love every moment with you 🌹"
];

let current = 0;

const sliderImage = document.getElementById("sliderImage");
const message = document.getElementById("message");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function updateSlider() {
    if (!sliderImage || !message) return;

    sliderImage.src = photos[current];
    message.innerHTML = texts[current];
}

if (nextBtn) {
    nextBtn.onclick = () => {
        current++;

        if (current >= photos.length) {
            current = 0;
        }

        updateSlider();
    };
}

if (prevBtn) {
    prevBtn.onclick = () => {
        current--;

        if (current < 0) {
            current = photos.length - 1;
        }

        updateSlider();
    };
}

// ======================
// Music
// ======================

const musicBtn = document.getElementById("musicBtn");
const ourSong = document.getElementById("ourSong");

if (musicBtn && ourSong) {
    musicBtn.addEventListener("click", () => {

        if (ourSong.paused) {
            ourSong.play();
            musicBtn.innerHTML = "⏸ Pause Song";
        } else {
            ourSong.pause();
            musicBtn.innerHTML = "🎵 Play Our Song";
        }

    });
}

// ======================
// Floating Hearts
// ======================

const hearts = document.getElementById("hearts");

function createHeart() {

    if (!hearts) return;

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(createHeart, 500);

// ======================
// Love Counter
// ======================

const relationshipDate = new Date("2026-03-12T00:00:00");

function updateCounter() {

    const counter = document.getElementById("counter");

    if (!counter) return;

    const now = new Date();
    const diff = now - relationshipDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    counter.innerHTML = `
        ${days} Days ❤️<br>
        ${hours} Hours 💕<br>
        ${minutes} Minutes 💖<br>
        ${seconds} Seconds
    `;
}

updateCounter();
setInterval(updateCounter, 1000);

// ======================
// Envelope
// ======================

const envelope = document.getElementById("envelope");

if (envelope) {
    envelope.onclick = () => {
        envelope.classList.toggle("open");
    };
}










// =============================
// Surprise Love Popup
// =============================

const lovePopup = document.getElementById("lovePopup");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// تظهر لما يوصل لآخر الصفحة
window.addEventListener("scroll", () => {

    const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;

    if (bottom && lovePopup.style.display !== "flex") {

        lovePopup.style.display = "flex";

    }

});

// زر No يهرب
function moveNoButton() {

    const maxX = 220;
    const maxY = 80;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";

}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

// لما تضغط Yes
yesBtn.addEventListener("click", () => {

    lovePopup.innerHTML = `

    <div class="love-card">

        <h1 style="font-size:70px;">🥹❤️</h1>

        <h2>I knew it!</h2>

        <p>

            Thank you for making my life beautiful.
            <br><br>

            I promise to love you,
            support you,
            and choose you every single day.
            ❤️

        </p>

    </div>

    `;

});




// Movie Intro

const movieIntro = document.getElementById("movieIntro");
const startMovie = document.getElementById("startMovie");

if(startMovie){

    startMovie.onclick = ()=>{

        movieIntro.classList.add("movie-hide");

        setTimeout(()=>{

            movieIntro.style.display="none";

        },1500);

    };

}